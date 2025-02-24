import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["assets.aceternity.com","aceternity.com","upload.wikimedia.org","uxwing.com","imagekit.io"] // Add GitHub avatars domain
  },
  /* config options here */
};

export default nextConfig;
