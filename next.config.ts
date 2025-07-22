import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // must add pdf-parse to work!
  experimental: {
    serverComponentsExternalPackages: ["pdf-parse"],
  },
};

export default nextConfig;
