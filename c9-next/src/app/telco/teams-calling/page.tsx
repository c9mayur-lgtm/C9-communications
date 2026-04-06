import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { WpFooter } from "@/components/layout/WpFooter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";

import { TeamsCallingHero } from "@/components/sections/teams-calling/TeamsCallingHero";
import { TeamsCallingAdvantage } from "@/components/sections/teams-calling/TeamsCallingAdvantage";
import { TeamsCallingFeatures } from "@/components/sections/teams-calling/TeamsCallingFeatures";

export const metadata: Metadata = {
  title: "Microsoft Teams Calling | Direct Routing Solutions | C9 Communications",
  description: "Bring full business telephony into your Microsoft Teams environment with C9 Direct Routing. Unified voice, chat, and meetings on any device with 99.9% uptime.",
  openGraph: {
     title: "Microsoft Teams Calling | Direct Routing Solutions | C9 Communications",
     description: "One app. One number. C9 Communications' Direct Routing for Microsoft Teams gives you total mobility and unified voice integration.",
     url: "https://c9communications.com.au/telco/teams-calling",
  }
};

export default function TeamsCallingPage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      <Navbar />
      <Breadcrumbs />
      
      <TeamsCallingHero />
      <WpClientTicker />
      <TeamsCallingAdvantage />
      <TeamsCallingFeatures />
      
      {/* Ported from Homepage */}
      <WpFAQAndFeedback />

      <div id="consultation-section" className="bg-white">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="GET A TEAMS CALLING QUOTE"
          title="Ready to unify your communications?"
          description="Interested in moving your telephony to Microsoft Teams? Our Direct Routing specialists provide seamless migration and local support."
          formTitle="Request Teams Calling Proposal"
        />
      </div>

      <WpFooter />
    </main>
  );
}
