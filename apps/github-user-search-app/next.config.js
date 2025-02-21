/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    turbo: {
      enabled: false, // Turbopack désactivé
    },
  },
};

module.exports = nextConfig;
