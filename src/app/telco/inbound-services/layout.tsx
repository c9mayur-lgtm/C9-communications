import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Inbound Services | Customer Access & Continuity | C9 Communications",
  description: "Stop missing opportunities. C9 delivers high-availability 1300, 1800, and 13 numbers with intelligent routing, real-time visibility, and zero-disruption migration.",
  openGraph: {
    url: "https://c9communications.com.au/telco/inbound-services",
    title: "Inbound Services | Customer Access & Continuity | C9 Communications",
    description: "Every missed call is a missed opportunity. C9 provides professional business calling infrastructure with full routing control and accountability.",
  }
};

export default function InboundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
