// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-dhfkh.nitrocdn.com",
      },
      {
        protocol: "https",
        hostname: "virtuzone.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
    formats: ["image/webp", "image/avif"], // Modern formats
    minimumCacheTTL: 86400, // Cache for 1 day
  },
  compress: true,
  // Enable SWC minification (faster than Terser)
  swcMinify: true,
  // Optimize compiler
  experimental: {
    optimizeCss: true,
  },
  // Reduce bundle size by excluding unnecessary modules
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;
