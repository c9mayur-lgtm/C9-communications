import { Navbar } from "@/components/layout/Navbar";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WpFooter } from "@/components/layout/WpFooter";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { WpConsultationForm as ContactSection } from "@/components/wordpress/WpConsultationForm";
import Hero from "@/components/sections/enterprise-ethernet/Hero";
import WhatIsEnterpriseEthernet from "@/components/sections/enterprise-ethernet/WhatIsEnterpriseEthernet";
import Features from "@/components/sections/enterprise-ethernet/Features";
import Plans from "@/components/sections/enterprise-ethernet/Plans";
import SupportTiers from "@/components/sections/enterprise-ethernet/SupportTiers";
import MultiSiteSection from "@/components/sections/enterprise-ethernet/MultiSiteSection";
import AccreditationBar from "@/components/sections/enterprise-ethernet/AccreditationBar";
import FinalCTA from "@/components/sections/enterprise-ethernet/FinalCTA";

export const metadata = {
  title: "nbn™ Enterprise Ethernet | C9 Communications",
  description: "nbn™ Enterprise Ethernet for Australian businesses — symmetrical speeds from 50/50 to 1000/1000 Mbps, guaranteed bandwidth, 4G LTE failover, and eSLA from 4 hours. nbn™ Accredited Adviser.",
  openGraph: {
    title: "nbn™ Enterprise Ethernet | C9 Communications",
    description: "Dedicated enterprise nbn™ connectivity with symmetrical speeds, guaranteed bandwidth, and multi-site architecture. nbn™ Accredited Adviser. eSLA from 4 hours.",
    url: "https://c9communications.com.au/telco/enterprise-ethernet",
  },
}

export default function EnterpriseEthernetPage() {
  return (
    <main className="min-h-screen bg-white font-['Proxima_Nova']">
      <Navbar />
      <Breadcrumbs />
      
      <div id="ee-overview">
        <Hero />
        <WhatIsEnterpriseEthernet />
      </div>

      <div id="ee-features">
        <Features />
      </div>

      <div id="ee-plans">
        <Plans />
      </div>

      <div id="ee-support">
        <SupportTiers />
      </div>

      <div id="ee-multi-site">
        <MultiSiteSection />
      </div>

      <FinalCTA />
      
      <WpFAQAndFeedback />

      <section id="consultation-section">
        <ContactSection 
          showHeader={false} 
          eyebrow="STRATEGIC IT ADVISORY"
          title="The IT partner your business deserves."
          description="Book a 30-minute strategy session with our senior consultants. We'll review your current infrastructure and security posture — no obligation, just expert advice."
          formTitle="Schedule Strategy Session"
        />
      </section>
      <WpFooter />
    </main>
  );
}
