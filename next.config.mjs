/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      }, {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      
    ],
  },
};

export default nextConfig;