import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/Rayara-Sannidhi',
  assetPrefix: '/Rayara-Sannidhi/',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
