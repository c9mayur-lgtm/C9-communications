import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'api.iconify.design' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/consultation',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
