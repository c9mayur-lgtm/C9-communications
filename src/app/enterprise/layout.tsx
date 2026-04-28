import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Enterprise Infrastructure Governance | SLA Enforcement",
  description: "High-authority infrastructure control for enterprise organizations. SLA enforcement, multi-site governance, and accountable IT management for CIOs and CTOs.",
  keywords: ["Enterprise IT Governance", "SLA Enforcement", "Multi-site IT Management", "Infrastructure Control", "C9 Communications"],
  alternates: {
    canonical: 'https://c9communications.com.au/enterprise',
  },
  openGraph: {
    url: "https://c9communications.com.au/enterprise",
    title: "Enterprise Infrastructure Governance | SLA Enforcement | C9 Communications",
    description: "High-authority infrastructure control for enterprise organizations. SLA enforcement and multi-site governance.",
    images: [{ url: '/og-image.png' }]
  }
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
