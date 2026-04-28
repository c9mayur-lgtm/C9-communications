import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Managed IT Services | Infrastructure Governance & Support",
  description: "Enterprise-scale Managed IT Services focused on infrastructure control, security, and SLA enforcement. 24/7 local engineering support for Australian businesses.",
  keywords: ["Managed IT Services Australia", "Infrastructure Governance", "IT Support", "Cybersecurity Solutions", "C9 Communications"],
  alternates: {
    canonical: 'https://c9-communications.vercel.app/managed-it',
  },
  openGraph: {
    url: "https://c9-communications.vercel.app/managed-it",
    title: "Managed IT Services | Infrastructure Governance & Support | C9 Communications",
    description: "Enterprise-scale Managed IT Services focused on infrastructure control, security, and SLA enforcement.",
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
