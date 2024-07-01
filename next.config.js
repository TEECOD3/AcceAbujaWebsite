/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dashboard.acce-abuja.com"],
    remotePatterns: [{ hostname: "cdn.sanity.io" }],
  },
};

module.exports = nextConfig;
