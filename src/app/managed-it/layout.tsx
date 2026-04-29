import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Managed IT Services | Infrastructure Governance & Support",
  description: "Enterprise-grade managed IT, network, and security services for multi-site organisations across Australia, backed by 24/7 operations, SLA-driven support, and proven large-scale deployments.",
  keywords: ["Managed IT Services Australia", "Infrastructure Governance", "IT Support", "Cybersecurity Solutions", "C9 Communications"],
  alternates: {
    canonical: 'https://c9-communications.vercel.app/managed-it',
  },
  openGraph: {
    url: "https://c9-communications.vercel.app/managed-it",
    title: "Managed IT Services | Infrastructure Governance & Support | C9 Communications",
    description: "Enterprise-grade managed IT, network, and security services for multi-site organisations across Australia, backed by 24/7 operations and SLA-driven support.",
    images: [{ url: '/og-image.png' }]
  }
};

export default function ManagedItLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
