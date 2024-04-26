/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cheerup2.theme-sphere.com",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
