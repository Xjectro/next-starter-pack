/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@xjectro/react",
    "@xjectro/react-shared",
    "@xjectro/react-utils",
  ],
  env: {
    SERVER_URL: process.env.SERVER_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    APP_TITLE: process.env.APP_TITLE,
  },
};

export default nextConfig;
