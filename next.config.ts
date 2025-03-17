import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Optimized for container deployments
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      // Add domains you need to load images from
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Add any additional configurations needed
};

export default nextConfig;
