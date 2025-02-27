/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      enabled: process.env.ENABLE_TURBOPACK === "true",
    },
  },
};

module.exports = nextConfig;
