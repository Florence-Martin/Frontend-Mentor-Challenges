/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    turbo: {
      enabled: process.env.ENABLE_TURBOPACK === "true",
    },
  },
};

module.exports = nextConfig;
