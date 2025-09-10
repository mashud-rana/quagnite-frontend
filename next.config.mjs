/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "**", // Allows all domains
      },
    ],
  },
};

export default nextConfig;
