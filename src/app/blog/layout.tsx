import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Insights & Perspectives | Infrastructure Expertise",
  description: "Expert insights into network architecture, security governance, and the operational shifts driving business performance in Australia.",
  keywords: ["IT Blog Australia", "Infrastructure Insights", "Network Architecture Trends", "C9 Communications"],
  alternates: {
    canonical: 'https://c9-communications.vercel.app/blog',
  },
  openGraph: {
    url: "https://c9-communications.vercel.app/blog",
    title: "Insights & Perspectives | Infrastructure Expertise | C9 Communications",
    description: "Expert insights into network architecture and the operational shifts driving business performance.",
    images: [{ url: '/og-image.png' }]
  }
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
