'use client';

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { CustomerJourney } from './components/CustomerJourney';
import { GuaranteeSection } from './components/GuaranteeSection';
import { OperationalReadiness } from './components/OperationalReadiness';
import { DeliveryProcess } from './components/DeliveryProcess';
import { StatsSection } from './components/StatsSection';
import { SupportSection } from './components/SupportSection';
import { SecuritySection } from './components/SecuritySection';
import { CaseStudies } from './components/CaseStudies';
import { FAQSection } from './components/FAQSection';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { LeadQualifier } from './components/LeadQualifier';
import { FinanceBanner } from './components/FinanceBanner';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { SectionSolutionsPills } from '@/components/sections/SectionSolutionsPills';

export default function GreenfieldZeroPage() {
  const [isQualifierOpen, setIsQualifierOpen] = useState(false);

  const openQualifier = () => setIsQualifierOpen(true);
  const closeQualifier = () => setIsQualifierOpen(false);

  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <HeroSection onOpenQualifier={openQualifier} />

      {/* 2. TRUST INDICATORS */}
      <div className="py-12 border-y border-slate-50">
        <div className="container mx-auto px-6 mb-8 text-center">
          <p className="c9-eyebrow !text-slate-400 !mb-0">Trusted by Leading Australian Businesses</p>
        </div>
        <WpClientTicker />
      </div>

      {/* PERSONAL SOLUTION NAV (From existing C9 structure) */}
      <SectionSolutionsPills audience="greenfield" />

      {/* 3. THE PROBLEM SECTION */}
      <ProblemSection />

      {/* 4. THE SOLUTION SECTION */}
      <SolutionSection onOpenQualifier={openQualifier} />

      {/* 5. COMPLETE CUSTOMER JOURNEY */}
      <CustomerJourney onOpenQualifier={openQualifier} />

      {/* EMBEDDED LEAD QUALIFIER (Visual Element for Wishlist) */}
      <section className="py-24 bg-white" id="build-plan">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="c9-section-heading mb-4">Lock In Your Aussie Site Wishlist</h2>
               <p className="c9-body text-slate-500">Build your custom infrastructure plan in under 2 minutes.</p>
            </div>
            <LeadQualifier isEmbedded />
          </div>
        </div>
      </section>

      {/* FINANCE BANNER */}
      <FinanceBanner />

      {/* 6. DAY ONE OPERATIONAL GUARANTEE */}
      <GuaranteeSection />

      {/* 7. OPERATIONAL READINESS */}
      <OperationalReadiness />

      {/* 8. STRUCTURED DELIVERY */}
      <DeliveryProcess />

      {/* 9. MEASURABLE SUCCESS */}
      <StatsSection />

      {/* 10. LONG-TERM ACCOUNTABILITY */}
      <SupportSection />

      {/* 11. SECURITY SECTION */}
      <SecuritySection />

      {/* 12. CASE STUDIES */}
      <CaseStudies />

      {/* 13. FAQ SECTION */}
      <FAQSection />

      {/* 14. TESTIMONIALS */}
      <Testimonials />

      {/* 16. FINAL CTA */}
      <FinalCTA onOpenQualifier={openQualifier} />

      {/* 15. LEAD QUALIFICATION MODAL (For mobile/quick triggers) */}
      <LeadQualifier isOpen={isQualifierOpen} onClose={closeQualifier} />
    </main>
  );
}
