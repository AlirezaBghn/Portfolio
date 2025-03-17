import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Use this if you're deploying to a containerized environment
  images: {
    domains: ["localhost", "render.com"], // Add domains for external images if used
    unoptimized: true, // Disable image optimization for static export
  },
  // Ensure webpack properly processes image files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
