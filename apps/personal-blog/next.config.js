/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // 👈 Obligatoire pour utiliser `/app`
  },
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
