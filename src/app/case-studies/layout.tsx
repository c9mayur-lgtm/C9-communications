import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Case Studies | Operational Proof & Success Stories",
  description: "Real-world infrastructure stabilisations, vendor consolidations, and risk-mitigated migrations. Measurable outcomes for Australian enterprise environments.",
  keywords: ["IT Case Studies", "Infrastructure Migration Success", "Vendor Consolidation Proof", "C9 Communications Australia"],
  alternates: {
    canonical: 'https://c9-communications.vercel.app/case-studies',
  },
  openGraph: {
    url: "https://c9-communications.vercel.app/case-studies",
    title: "Case Studies | Operational Proof & Success Stories | C9 Communications",
    description: "Real-world infrastructure stabilisations and measurable outcomes for Australian enterprise environments.",
    images: [{ url: '/og-image.png' }]
  }
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
