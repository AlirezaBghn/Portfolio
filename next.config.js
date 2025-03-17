/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["localhost", "render.com"],
    // Add your image hosting domains here if you're using external image hosting
    unoptimized: true, // This can help with image loading issues in some deployment environments
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

module.exports = nextConfig;
