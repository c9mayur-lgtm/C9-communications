import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cloud Contact Centre Solutions | CX Operations",
  description: "Unified cloud contact centre systems for high-performance support teams. Gain absolute visibility into wait times, agent performance, and customer response levels.",
  keywords: ["Cloud Contact Centre Australia", "CX Operations", "Call Centre Software", "Customer Support Systems", "C9 Communications"],
  alternates: {
    canonical: 'https://c9communications.com.au/telco/contact-centre',
  },
  openGraph: {
    url: "https://c9communications.com.au/telco/contact-centre",
    title: "Cloud Contact Centre Solutions | CX Operations | C9 Communications",
    description: "Unified cloud contact centre systems for high-performance support teams. Gain absolute visibility into customer response levels.",
    images: [{ url: '/og-image.png' }]
  }
};

export default function ContactCentreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
