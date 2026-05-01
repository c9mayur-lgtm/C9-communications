import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'api.iconify.design' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'c9defense.com.au' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/consultation',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/managed-it/security-solutions',
        destination: 'https://c9defense.com.au/',
        permanent: true,
      },
      {
        source: '/managed-it/backup-disaster-recovery',
        destination: 'https://c9defense.com.au/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
