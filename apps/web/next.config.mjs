/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@xjectro/react","@xjectro/react-shared","@xjectro/react-utils"],
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
};

export default nextConfig;
