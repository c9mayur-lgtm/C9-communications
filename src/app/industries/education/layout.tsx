import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT & Telco for Education | C9 Communications',
  description:
    'C9 delivers reliable, high-capacity IT infrastructure for Australian education providers — consistent access, secure networks, and scalable systems built for learning environments.',
  openGraph: {
    title: 'IT & Telco for Education | C9 Communications',
    description: 'Reliable infrastructure that supports learning, administration, and access at scale.',
    url: 'https://c9communications.com.au/industries/education',
  },
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
