import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT & Telco for Healthcare | C9 Communications',
  description:
    'C9 delivers reliable, secure IT and telco for Australian healthcare practices and networks — stable systems, data protection, and responsive support built for clinical environments.',
  openGraph: {
    title: 'IT & Telco for Healthcare | C9 Communications',
    description: 'Secure, stable systems that support patient care and operational continuity.',
    url: 'https://c9communications.com.au/industries/healthcare',
  },
};

export default function HealthcareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
