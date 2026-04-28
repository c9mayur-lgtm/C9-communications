import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT & Telco for Professional Services | C9 Communications',
  description:
    'C9 delivers high-performance IT and communications environments for Australian professional services firms — reliable, secure, and built to support productive teams.',
  openGraph: {
    title: 'IT & Telco for Professional Services | C9 Communications',
    description: 'High-performance environments that support productivity, communication, and growth.',
    url: 'https://c9-communications.vercel.app/industries/professional-services',
  },
};

export default function ProfessionalServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
