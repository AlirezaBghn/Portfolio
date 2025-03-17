/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Change to export for static site generation
  images: {
    unoptimized: true, // This is required for static exports
  },
  // We don't need webpack configuration for file-loader anymore
};

module.exports = nextConfig;
