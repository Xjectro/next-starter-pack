import { defineConfig } from "deloyn";

export default defineConfig({
  serverIp: "",
  username: "root",
  remotePath: "/prod",
  sshKey: "C:/Users/{username}/.ssh/id_rsa",
  excluded: [
    ".git",
    ".github",
    "node_modules",
    ".turbo",
    ".next",
    ".output",
    "dist",
    "README.md",
    "LICENSE",
    "pnpm-lock.yaml",
  ],
  scripts: ["pnpm install", "pnpm run build", "pnpm run start"],
  batchSize: 5,
  localPath: process.cwd(),
});
