import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Operational Intelligence | C9 Communications',
  description: 'Deep dives into network architecture, security governance, and the operational shifts driving business performance for Australian enterprises.',
  openGraph: {
    title: 'Insights & Operational Intelligence | C9 Communications',
    description: 'Expert analysis on managed IT, cyber security, and network infrastructure.',
    url: 'https://c9communications.com.au/insights',
    type: 'website',
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
