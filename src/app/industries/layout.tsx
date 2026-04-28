import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Industry Expertise | Specialized IT & Telco Solutions",
  description: "Specialized infrastructure and communication solutions for Healthcare, Retail, Education, and Professional Services across Australia.",
  keywords: ["Industry IT Solutions", "Retail Technology Australia", "Healthcare IT Support", "Education Networking", "C9 Communications"],
  alternates: {
    canonical: 'https://c9communications.com.au/industries',
  },
  openGraph: {
    url: "https://c9communications.com.au/industries",
    title: "Industry Expertise | Specialized IT & Telco Solutions | C9 Communications",
    description: "Specialized infrastructure and communication solutions for Healthcare, Retail, Education, and Professional Services.",
    images: [{ url: '/og-image.png' }]
  }
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
