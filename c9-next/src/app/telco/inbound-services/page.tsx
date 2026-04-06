import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { WpFooter } from "@/components/layout/WpFooter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";

import { InboundHero } from "@/components/sections/inbound-services/InboundHero";
import { InboundAdvantage } from "@/components/sections/inbound-services/InboundAdvantage";
import { InboundFeatures } from "@/components/sections/inbound-services/InboundFeatures";
import { InboundPlans } from "@/components/sections/inbound-services/InboundPlans";

export const metadata: Metadata = {
  title: "Inbound Services | 1300, 1800 & 13 Numbers | C9 Communications",
  description: "C9 Communications provides enterprise-grade inbound services. Smart routing for your 1300, 1800, and 13 numbers with 99.95% uptime and real-time analytics.",
  openGraph: {
    title: "Inbound Services | 1300, 1800 & 13 Numbers | C9 Communications",
    description: "Master your inbound logic with C9 Communications. Intelligent routing, geographic targeting, and live call analytics.",
    url: "https://c9communications.com.au/telco/inbound-services",
  }
};

export default function InboundServicesPage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      <Navbar />
      <Breadcrumbs />
      
      <InboundHero />
      <WpClientTicker />
      <InboundAdvantage />
      <InboundFeatures />
      <InboundPlans />
      
      {/* Ported from Homepage */}
      <WpFAQAndFeedback />

      <div id="consultation-section" className="bg-white">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="GET AN INBOUND QUOTE"
          title="Transform your inbound strategy."
          description="Interested in a new 1300/1800 number or looking to port existing services? Our inbound specialists are ready to help."
          formTitle="Request Inbound Proposal"
        />
      </div>

      <WpFooter />
    </main>
  );
}
