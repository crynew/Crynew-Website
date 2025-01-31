import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["opengraph.githubassets.com", "camilo404.azurewebsites.net", "github.com", "avatars.githubusercontent.com"],
  }
};

export default nextConfig;
