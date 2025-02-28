/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    turbo: {
      enabled: process.env.ENABLE_TURBOPACK === "false",
    },
  },
};

module.exports = nextConfig;
