import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
    ],
  },
};

export default nextConfig;
