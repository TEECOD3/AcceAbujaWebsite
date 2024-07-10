/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "host",
            value: "www.acce-abuja.com",
          },
        ],
        destination: "https://acce-abuja.com/:path",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["dashboard.acce-abuja.com"],
    remotePatterns: [{ hostname: "cdn.sanity.io" }],
  },
};

module.exports = nextConfig;
