import React from 'react';
import type { Metadata } from 'next';
import { Testimonials } from '@/components/sections/Testimonials';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';

// Section Components
import Hero from '@/components/sections/fast-fibre/Hero';
import WhyFastFibre from '@/components/sections/fast-fibre/WhyFastFibre';
import Plans from '@/components/sections/fast-fibre/Plans';
import WhatIsIncluded from '@/components/sections/fast-fibre/WhatIsIncluded';
import Partners from '@/components/sections/fast-fibre/Partners';
import HowItWorks from '@/components/sections/fast-fibre/HowItWorks';
import FinalCTA from '@/components/sections/fast-fibre/FinalCTA';

export const metadata: Metadata = {
  title: "Reliable Business Fibre Internet Plans | C9 Communications",
  description: "Reliable business fibre internet plans — Fibre 400 and Fibre 1000 with unlimited data, managed router, and private cloud connectivity. Fully managed from setup to support.",
  openGraph: {
    title: "Reliable Business Fibre Internet Plans | C9 Communications",
    description: "Up to 1000 Mbps reliable fibre for business. Unlimited data. Managed router. Private cloud connectivity. Australian carrier network. Fibre 400 from $399/month.",
    url: "https://c9communications.com.au/telco/fast-fibre",
    type: "website"
  }
};

export default function FastFibrePage() {
  return (
    <main className="min-h-screen bg-white">
                  
      <Hero />
      <WhyFastFibre />
      <Plans />
      <WhatIsIncluded />
      <Partners />
      <HowItWorks />
      <FinalCTA />
      
      {/* FAQ as per standard page journey */}
      <WpFAQAndFeedback />

      <div id="consultation-section">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="FAST FIBRE ENQUIRY"
          title="Ready to upgrade your bandwidth?"
          description="Book a 30-minute strategy session with our senior consultants or request a formal site qualification. We'll review your environment and provide a tailored recommendation — no obligation, just expert advice."
          formTitle="Get a Fibre Quote"
        />
      </div>

          </main>
  );
}
