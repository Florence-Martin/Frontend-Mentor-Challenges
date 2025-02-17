/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      enabled: false, // Turbopack désactivé
    },
  },
};

export default nextConfig;
