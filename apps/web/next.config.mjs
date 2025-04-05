/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  env: {
    SERVER_URI: process.env.SERVER_URL,
  },
};

export default nextConfig;
