/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  experimental: {
    turbo: {
      enabled: false, // Turbopack désactivé
    },
  },
};

export default nextConfig;
