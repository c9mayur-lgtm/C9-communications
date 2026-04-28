import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SIP Trunking & Business Calling Infrastructure",
  description: "Enterprise-grade SIP Trunking for Australian businesses. Replace legacy ISDN with reliable, scalable voice infrastructure. 99.99% uptime SLA with local engineering support.",
  keywords: ["SIP Trunking Australia", "Business VoIP", "ISDN Replacement", "Voice Infrastructure", "C9 Communications"],
  alternates: {
    canonical: 'https://c9communications.com.au/telco/sip-trunking',
  },
  openGraph: {
    url: "https://c9communications.com.au/telco/sip-trunking",
    title: "SIP Trunking & Business Calling Infrastructure | C9 Communications",
    description: "Enterprise-grade SIP Trunking for Australian businesses. Replace legacy ISDN with reliable, scalable voice infrastructure.",
    images: [{ url: '/og-image.png' }]
  }
};

export default function SipTrunkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
