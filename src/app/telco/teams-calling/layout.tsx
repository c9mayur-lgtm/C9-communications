import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Microsoft Teams Calling | Enterprise Voice Migration",
  description: "Seamlessly integrate your business telephony with Microsoft Teams. C9 delivers enterprise-grade voice migration with zero-disruption and full infrastructure control.",
  keywords: ["Microsoft Teams Calling Australia", "Teams Direct Routing", "Enterprise Voice", "Teams Telephony Migration", "C9 Communications"],
  alternates: {
    canonical: 'https://c9-communications.vercel.app/telco/teams-calling',
  },
  openGraph: {
    url: "https://c9-communications.vercel.app/telco/teams-calling",
    title: "Microsoft Teams Calling | Enterprise Voice Migration | C9 Communications",
    description: "Seamlessly integrate your business telephony with Microsoft Teams. C9 delivers enterprise-grade voice migration.",
    images: [{ url: '/og-image.png' }]
  }
};

export default function TeamsCallingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
