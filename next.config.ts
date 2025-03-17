import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Use static export mode for a fully static deployment
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  // Removed swcMinify since it's not supported with static export
  images: {
    // No external domains required as you're using images from your project folder.
    formats: ["image/avif", "image/webp"],
  },
  // Add any additional configuration options as needed
};

export default nextConfig;
