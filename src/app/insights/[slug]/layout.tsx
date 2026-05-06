import React from 'react';

export async function generateStaticParams() {
  return [
    { slug: 'state-of-australian-it-2026' },
    { slug: 'scaling-network-architecture' },
    { slug: 'ceo-security-governance' },
    { slug: 'onshore-soc-benefits' },
    { slug: 'modern-workplace-control' },
    { slug: 'set-and-forget-myth' }
  ];
}

export default function InsightLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
