import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { WpFooter } from "@/components/layout/WpFooter";
import { Hero } from "@/components/sections/c9x/Hero";
import { WhatIsC9Voice } from "@/components/sections/c9x/WhatIsC9X";
import { Advantage } from "@/components/sections/c9x/Advantage";
import { KeyFeatures } from "@/components/sections/c9x/KeyFeatures";
import { Plans } from "@/components/sections/c9x/Plans";
import { PhoneCompatibility } from "@/components/sections/c9x/PhoneCompatibility";
import { FinalCTA } from "@/components/sections/c9x/FinalCTA";


import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "C9 Voice Cloud Phone System | C9 Communications",
  description: "C9 Voice is Australia's leading cloud-based phone system — 80+ features, no upfront fees, Microsoft Teams direct routing, and CRM integration. Save up to 70% on calls.",
  openGraph: {
    title: "C9 Voice Cloud Phone System | C9 Communications",
    description: "Save up to 70% on business calls with C9 Voice — Australia's next generation in cloud-based phone systems.",
    url: "https://c9communications.com.au/telco/c9x",
  }
};

export default function C9VoicePage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      <Navbar />
      <Breadcrumbs />
      
      <Hero />
      <WpClientTicker />
      <WhatIsC9Voice />
      <Advantage />
      <KeyFeatures />
      
      {/* Plans Section */}
      <div id="plans">
        <Plans />
      </div>

      {/* <PhoneCompatibility /> */}
      <FinalCTA />
      {/* Ported from Homepage */}
      <WpFAQAndFeedback />
      

      <div id="consultation-section">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="GET A C9 VOICE QUOTE"
          title="Ready to upgrade your voice system?"
          description="Tell us how many lines you need and any specific CRM integration requirements. We'll design a C9 Voice solution tailored to your business."
          formTitle="Request C9 Voice Proposal"
        />
      </div>

      <WpFooter />
    </main>
  );
}
