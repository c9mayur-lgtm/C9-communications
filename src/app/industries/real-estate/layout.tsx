import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT & Telco for Real Estate | C9 Communications',
  description:
    'C9 delivers flexible, scalable IT and telco for Australian real estate agencies — keeping agents connected, offices consistent, and client data protected.',
  openGraph: {
    title: 'IT & Telco for Real Estate | C9 Communications',
    description: 'Flexible, scalable systems built for distributed teams and fast-moving operations.',
    url: 'https://c9communications.com.au/industries/real-estate',
  },
};

export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
