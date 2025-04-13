import { Client } from "ssh2";
import SftpClient from "ssh2-sftp-client";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import colors from "colors";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SERVER_IP = process.env.SERVER_IP!;
const SERVER_USERNAME = process.env.SERVER_USERNAME!;
const REMOTE_PATH = process.env.REMOTE_PATH!;
const LOCAL_PATH = path.resolve(__dirname, "../../../");
const SSH_KEY = process.env.SSH_KEY;

const EXCLUDED_FILES = new Set([
  ".git",
  ".github",
  "node_modules",
  ".turbo",
  ".next",
  ".output",
  "dist",
  "pipelines",
  "README.md",
  "LICENSE",
  "pnpm-lock.yaml",
]);

const BATCH_SIZE = 5;
let totalFilesUploaded = 0;
let totalBytesUploaded = 0;

async function processInBatches<T>(
  tasks: (() => Promise<T>)[],
  batchSize: number,
) {
  for (let i = 0; i < tasks.length; i += batchSize) {
    const batch = tasks.slice(i, i + batchSize);
    await Promise.all(batch.map((task) => task()));
  }
}

async function uploadDirectory(
  localDir: string,
  remoteDir: string,
  sftp: SftpClient,
) {
  const items = await fs.readdir(localDir);
  const tasks: (() => Promise<void>)[] = [];

  for (const item of items) {
    if (EXCLUDED_FILES.has(item)) {
      console.info(colors.yellow(`Skipping: ${path.join(localDir, item)}`));
      continue;
    }

    tasks.push(async () => {
      const localPath = path.join(localDir, item);
      const remotePath = path.join(remoteDir, item).replace(/\\/g, "/");
      const stats = await fs.stat(localPath);

      if (stats.isDirectory()) {
        await sftp.mkdir(remotePath, true);
        console.info(colors.green(`📁 Directory: ${remotePath}`));
        await uploadDirectory(localPath, remotePath, sftp);
      } else {
        await sftp.put(localPath, remotePath);
        totalFilesUploaded++;
        totalBytesUploaded += stats.size;
        console.info(colors.cyan(`📄 Uploaded: ${remotePath}`));
      }
    });
  }

  await processInBatches(tasks, BATCH_SIZE);
}

async function uploadFiles(sftp: SftpClient) {
  console.info(colors.blue("📦 Starting file upload..."));
  await uploadDirectory(LOCAL_PATH, REMOTE_PATH, sftp);
  console.log(colors.green("✅ All files uploaded."));
}

async function executeRemoteCommand(
  conn: Client,
  command: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    conn.exec(command, (err, stream) => {
      if (err) return reject(err);
      if (!stream) return reject(new Error("No stream returned."));

      stream
        .on("close", (code: string, signal: string) => {
          console.info(
            colors.magenta(
              `🛠️  Command finished (Code: ${code}, Signal: ${signal})`,
            ),
          );
          resolve();
        })
        .on("data", (data: Buffer) =>
          console.info(colors.gray(data.toString().trim())),
        )
        .stderr.on("data", (data: Buffer) =>
          console.error(colors.red(data.toString().trim())),
        );
    });
  });
}

async function publish() {
  const conn = new Client();
  const sftp = new SftpClient();
  const publishStart = Date.now();

  console.info(colors.yellow("🔌 Connecting to SSH..."));

  try {
    await new Promise<void>((resolve, reject) => {
      conn.on("ready", resolve).on("error", reject).connect({
        host: SERVER_IP,
        username: SERVER_USERNAME,
        privateKey: SSH_KEY,
      });
    });

    console.log(colors.green("✅ SSH connected."));

    await sftp.connect({
      host: SERVER_IP,
      username: SERVER_USERNAME,
      privateKey: SSH_KEY,
    });

    console.log(colors.green("✅ SFTP connected."));
    console.info(colors.red(`🧹 Removing remote dir: ${REMOTE_PATH}`));
    await executeRemoteCommand(
      conn,
      `rm -rf ${REMOTE_PATH} && mkdir -p ${REMOTE_PATH}`,
    );

    const uploadStart = Date.now();
    await uploadFiles(sftp);
    const uploadTime = (Date.now() - uploadStart) / 1000;

    console.log(
      colors.green(
        `⏱️ Upload completed in ${uploadTime.toFixed(2)}s (${totalFilesUploaded} files, ${(totalBytesUploaded / 1024 / 1024).toFixed(2)} MB)`,
      ),
    );

    console.info(colors.cyan("🚀 Running publishing commands..."));
    await executeRemoteCommand(
      conn,
      `cd ${REMOTE_PATH} && pnpm install && NODE_OPTIONS="--max-old-space-size=16384" pnpm run build && pm2 restart all && echo "✅ Publishing complete."`,
    );

    const totalTime = (Date.now() - publishStart) / 1000;
    console.log(
      colors.green(`🎉 Publishing finished in ${totalTime.toFixed(2)}s`),
    );
  } catch (err) {
    console.error(colors.red("💥 Publishing failed: " + err));
    throw err;
  } finally {
    try {
      await sftp.end();
      console.info(colors.yellow("📴 SFTP disconnected."));
    } catch (e) {
      console.error(colors.red("⚠️ SFTP disconnect error: " + e));
    }

    try {
      conn.end();
      console.info(colors.yellow("📴 SSH disconnected."));
    } catch (e) {
      console.error(colors.red("⚠️ SSH disconnect error: " + e));
    }
  }
}

publish();
