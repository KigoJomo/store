import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["mongodb"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**/*'
      },
      {
        protocol: 'https',
        hostname: '*static.wixstatic.com',
        pathname: '/**/*',
      },
    ]
  }
};

export default nextConfig;