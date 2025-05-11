/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@xjectro/react"],
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
};

export default nextConfig;
