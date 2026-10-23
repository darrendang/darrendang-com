import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/staticImageLoader.ts",
    deviceSizes: [384, 640, 828, 1080, 1600],
    imageSizes: [128, 256],
  },
  poweredByHeader: false,
};

export default nextConfig;
