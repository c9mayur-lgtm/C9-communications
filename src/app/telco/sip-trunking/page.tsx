import React from 'react';
import type { Metadata } from 'next';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { BusinessAdvisor } from '@/components/wordpress/BusinessAdvisor';
import { Testimonials } from '@/components/sections/Testimonials';

// SIP Trunking Specific Sections
import SipTrunkingHero from '@/components/sections/sip-trunking/SipTrunkingHero';
import WhatIsSip from '@/components/sections/sip-trunking/WhatIsSip';
import SipTrunkingFeatures from '@/components/sections/sip-trunking/SipTrunkingFeatures';
import AnalogueSupport from '@/components/sections/sip-trunking/AnalogueSupport';
import SipTrunkingPlans from '@/components/sections/sip-trunking/SipTrunkingPlans';
import SipTrunkingCta from '@/components/sections/sip-trunking/SipTrunkingCta';

export const metadata: Metadata = {
  title: "SIP Trunking | C9 Communications",
  description: "Australia's best SIP Trunking — connect your existing PBX to the cloud via public internet or private IP. Fully owned network. Basic from $20/month per line.",
  openGraph: {
    url: "https://c9communications.com.au/telco/sip-trunking",
    title: "SIP Trunking | C9 Communications",
    description: "Australia's best SIP Trunking — connect your existing PBX to the cloud via public internet or private IP.",
  }
};

export default function SipTrunkingPage() {
  return (
    <div className="min-h-screen bg-white">
                  <SipTrunkingHero />
      <WpClientTicker />
      <WhatIsSip />
      <SipTrunkingFeatures />
      <AnalogueSupport />
      <SipTrunkingPlans />
      <SipTrunkingCta />
      <WpConsultationForm />
          </div>
  );
}
