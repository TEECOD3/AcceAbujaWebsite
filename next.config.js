/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dashboard.acce-abuja.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dashboard.acce-abuja.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
