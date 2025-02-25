import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["assets.aceternity.com", "aceternity.com", "upload.wikimedia.org", "uxwing.com", "imagekit.io", "hebbkx1anhila5yf.public.blob.vercel-storage.com","images.unsplash.com"] // Add GitHub avatars domain
  },
  /* config options here */
};

export default nextConfig;
