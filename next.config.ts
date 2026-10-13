import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.1.100",
    "192.168.1.100:3000",
    "localhost",
    "localhost:3000",
    "*.pinggy.net",
    "*.pinggy-free.link",
    "*.loca.lt",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
