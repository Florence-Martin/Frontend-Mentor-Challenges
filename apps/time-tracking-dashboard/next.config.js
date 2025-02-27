/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      enabled: false, // Turbopack désactivé
    },
    turbo: {
      enabled: process.env.ENABLE_TURBOPACK === "true",
    },
  },
};

module.exports = nextConfig;
