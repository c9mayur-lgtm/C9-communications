import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Enterprise Telco & IT Governance | SLA Enforcement",
  description: "High-authority telco & IT control for enterprise organizations. SLA enforcement, multi-site governance, and accountable management for CIOs and CTOs.",
  keywords: ["Enterprise IT Governance", "SLA Enforcement", "Multi-site IT Management", "Telco & IT Control", "C9 Communications"],
  alternates: {
    canonical: 'https://c9-communications.vercel.app/enterprise',
  },
  openGraph: {
    url: "https://c9-communications.vercel.app/enterprise",
    title: "Enterprise Telco & IT Governance | SLA Enforcement | C9 Communications",
    description: "High-authority telco & IT control for enterprise organizations. SLA enforcement and multi-site governance.",
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
