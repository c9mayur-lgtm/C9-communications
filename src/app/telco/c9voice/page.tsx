import type { Metadata } from "next";
import { Hero } from "@/components/sections/c9-phone-system/Hero";
import { WhatIsC9PhoneSystem } from "@/components/sections/c9-phone-system/WhatIsC9PhoneSystem";
import { C9PhoneSystemAdvantage } from "@/components/sections/c9-phone-system/C9PhoneSystemAdvantage";
import { KeyFeatures } from "@/components/sections/c9-phone-system/KeyFeatures";
import { Plans } from "@/components/sections/c9-phone-system/Plans";
import { PhoneCompatibility } from "@/components/sections/c9-phone-system/PhoneCompatibility";
import { FinalCTA } from "@/components/sections/c9-phone-system/FinalCTA";


import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";

export const metadata: Metadata = {
  title: "C9 Voice Cloud Phone System | C9 Communications",
  description: "C9 Voice is Australia's leading cloud-based phone system — 80+ features, no upfront fees, Microsoft Teams direct routing, and CRM integration. Save up to 70% on calls.",
  openGraph: {
    title: "C9 Voice Cloud Phone System | C9 Communications",
    description: "Save up to 70% on business calls with C9 Voice — Australia's next generation in cloud-based phone systems.",
    url: "https://c9-communications.vercel.app/telco/phone-system",
  }
};

export default function C9VoicePage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
                  
      <Hero />
      <WpClientTicker />
      <WhatIsC9PhoneSystem />
      <C9PhoneSystemAdvantage />
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

          </main>
  );
}
