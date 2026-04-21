import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT & Telco for Multi-Site Retail | C9 Communications',
  description:
    'C9 delivers reliable, consistent IT and telco for Australian retail businesses — from single stores to nationwide rollouts. Standardised infrastructure, fast support, and single-vendor simplicity.',
  openGraph: {
    title: 'IT & Telco for Multi-Site Retail | C9 Communications',
    description: 'Reliable, multi-site infrastructure designed to keep every store connected and operational.',
    url: 'https://c9communications.com.au/industries/retail',
  },
};

export default function RetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
