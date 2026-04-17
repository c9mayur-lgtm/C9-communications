import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT & Telco for Hospitality | C9 Communications',
  description:
    'C9 delivers reliable connectivity, guest Wi-Fi, and communications infrastructure for Australian hospitality businesses — hotels, restaurants, and venues.',
  openGraph: {
    title: 'IT & Telco for Hospitality | C9 Communications',
    description: 'Consistent connectivity and communications for better guest experience.',
    url: 'https://c9communications.com.au/industries/hospitality',
  },
};

export default function HospitalityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
