/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Empêche ESLint de bloquer le build
  },
};

export default nextConfig;
