import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SIP Trunking | C9 Communications",
  description: "Australia's best SIP Trunking — connect your existing PBX to the cloud via public internet or private IP. Fully owned network. Basic from $20/month per line.",
  openGraph: {
    url: "https://c9communications.com.au/telco/sip-trunking",
    title: "SIP Trunking | C9 Communications",
    description: "Australia's best SIP Trunking — connect your existing PBX to the cloud via public internet or private IP.",
  }
};

export default function SipTrunkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
