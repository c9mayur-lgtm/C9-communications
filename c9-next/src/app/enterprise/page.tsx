'use client';

import { WpHero } from "@/components/layout/WpHero";
import { WpPromoBanner } from "@/components/wordpress/WpPromoBanner";
import { WpWhyPartner } from "@/components/wordpress/WpWhyPartner";
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { WpITDepartmentOptions } from "@/components/wordpress/WpITDepartmentOptions";
import { WpIndustryTabs } from "@/components/wordpress/WpIndustryTabs";
import { WpCustomerFeedback } from "@/components/wordpress/WpCustomerFeedback";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { WpUnifiedClassification } from "@/components/wordpress/WpUnifiedClassification";


export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">

      {/* 1. HERO — Engineer-grade. No fluff. Speaks to CTOs / IT Managers directly */}
      <WpHero />

      {/* 2. SOCIAL PROOF — Immediate brand trust via logos */}
      <WpClientTicker />

      {/* 3. THE ECOSYSTEM — Organized by Track */}
      <WpUnifiedClassification />

      {/* 4. OFFER / PROMO BANNER — Commercial hook: rebates, limited offer */}
      <WpPromoBanner 
        eyebrow="INFRASTRUCTURE PLANNER"
        title="Opening a new office, shifting, or upgrading?"
        description="Don't leave your technology setup to chance. Map out your infrastructure needs from Day 1—whether it's SD-WAN, fibre, or full IT management. Click the chat icon in the bottom right to start our automated setup planner."
        ctaText="Book a Strategy Session"
        ctaHref="#consultation-section"
        imageSrc="/images/enterprise_office_planner.png"
      />

      {/* 5. ENTERPRISE BENEFITS GRID — Every client gets these guarantees */}
      <WpWhyPartner />

      {/* 7. INDUSTRY DEEP DIVE — Sector-specific proof with click-through to detail pages */}
      <WpIndustryTabs />

      {/* 8. LEAD CAPTURE — Direct, no-nonsense CTA for time-poor enterprise buyers */}
      <section id="consultation-section" className="bg-[#FAF9FF] border-t border-gray-100">
        <WpConsultationForm 
          showHeader={false}
          eyebrow="Request a capability statement"
          title="Your infrastructure challenges. Our engineering team. Let's solve them."
          description="Speak directly with our principal architects — not a sales rep. Bring your network diagrams, compliance requirements, and ambitions. We'll design the right managed solution, on your terms."
          formTitle="Start the Conversation"
        />
      </section>


    </main>
  );
}
