'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Zap, 
  PhoneCall, 
  Search,
  BadgeCheck
} from 'lucide-react';

// Modular components from greenfield0
import { HeroSection } from '../greenfield0/components/HeroSection';
import { ProblemSection } from '../greenfield0/components/ProblemSection';
import { SolutionSection } from '../greenfield0/components/SolutionSection';
import { CustomerJourney } from '../greenfield0/components/CustomerJourney';
import { GuaranteeSection } from '../greenfield0/components/GuaranteeSection';
import { OperationalReadiness } from '../greenfield0/components/OperationalReadiness';
import { StatsSection } from '../greenfield0/components/StatsSection';
import { SiteMissionControl } from '../greenfield0/components/SiteMissionControl';
import { OpeningPipeline } from '../greenfield0/components/OpeningPipeline';
import { SupportSection } from '../greenfield0/components/SupportSection';
import { SecuritySection } from '../greenfield0/components/SecuritySection';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { FinalCTA } from '../greenfield0/components/FinalCTA';
import { LeadQualifier } from '../greenfield0/components/LeadQualifier';
import { FinanceBanner } from '../greenfield0/components/FinanceBanner';

// Shared C9 components
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { SectionSolutionsPills } from '@/components/sections/SectionSolutionsPills';
import { ConsultationFormCore } from '@/components/forms/ConsultationFormCore';

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

const FadeIn = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}) => {
  const y = direction === 'up' ? 28 : 0;
  const x = direction === 'left' ? -28 : direction === 'right' ? 28 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function GreenfieldPage() {
  const [isQualifierOpen, setIsQualifierOpen] = useState(false);

  const openQualifier = () => setIsQualifierOpen(true);
  const closeQualifier = () => setIsQualifierOpen(false);

  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <HeroSection onOpenQualifier={openQualifier} />

      {/* 2. TRUST INDICATORS */}
      <div className="py-12 border-y border-slate-50">
        <WpClientTicker />
      </div>

      {/* 3. CAPABILITY PILLS (The 7-Pillar Standard Journey) - HIDDEN FOR NOW
      <div id="capabilities">
        <SectionSolutionsPills audience="greenfield" />
      </div>
      */}

      {/* 4. THE PROBLEM SECTION */}
      <ProblemSection />

      {/* 5. THE SOLUTION SECTION */}
      <SolutionSection onOpenQualifier={openQualifier} />

      {/* 5.1 SITE MISSION CONTROL (Dashboard Mockup) */}
      <SiteMissionControl />

      {/* 6. COMPLETE CUSTOMER JOURNEY (Everything Your New Site Needs) */}
      <CustomerJourney onOpenQualifier={openQualifier} />

      {/* 7. FINANCE BANNER */}
      <FinanceBanner />

      {/* 8. DAY ONE OPERATIONAL GUARANTEE - REMOVED */}

      {/* 9. OPERATIONAL READINESS */}
      <OperationalReadiness />

      {/* 10. STRUCTURED DELIVERY PROCESS (Monday.com Inspired Pipeline) */}
      <OpeningPipeline onOpenQualifier={openQualifier} />

      {/* 11. MEASURABLE SUCCESS STATS */}
      <StatsSection />

      {/* 12. LONG-TERM ACCOUNTABILITY (Managed Support) */}
      <SupportSection />

      {/* 13. SECURITY SECTION */}
      <SecuritySection />

      {/* 14. CASE STUDIES */}
      <WpCaseStudies />

      {/* 15. FAQ & TESTIMONIALS (Homepage Standard) */}
      <WpFAQAndFeedback />

      {/* 17. REFINED CONSULTATION SECTION (Custom fixed UI) */}
      <section id="consultation-section" className="py-16 bg-[#E4E0FD] relative overflow-hidden border-t border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side content */}
            <div>
              <FadeIn>
                <span className="c9-eyebrow !text-white bg-[#0c1024] px-4 py-1.5 rounded-lg mb-8 block w-fit">
                   NEW BUSINESS SETUP
                </span>
                <h2 className="c9-section-heading text-[#0c1024] mb-8">
                   Ready to Start Your Project?
                </h2>
                <p className="c9-body !text-[#0c1024]/70 mb-10 text-lg">
                  Speak with an Australian-based infrastructure expert today. We&apos;ll help you map out your technical requirements and ensure a risk-free opening day.
                </p>
                
                <div className="space-y-5 mb-12">
                  {[
                    'Direct access to senior Aussie engineers',
                    'Free service qualifications for your location',
                    'Fixed-cost project delivery',
                    'Full technical ownership from Day One'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] shrink-0">
                         <CheckCircle size={14} />
                      </div>
                      <span className="font-bold text-[#0c1024] text-[16px]">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="font-proxima">
                   <h3 className="text-[11px] font-bold text-[#0c1024]/60 uppercase tracking-widest mb-6">WHAT HAPPENS AFTER YOU SUBMIT</h3>
                   <div className="flex flex-col gap-5">
                      {[
                        { title: '1. A real Australian calls you', body: 'Not a call centre. Someone who actually knows infrastructure.', icon: PhoneCall },
                        { title: '2. We review your site plan', body: 'We identify dependencies and potential delays.', icon: Search },
                        { title: '3. You get a clear roadmap', body: 'Plain English deliverables with exact pricing.', icon: BadgeCheck }
                      ].map((step, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#5D00D6] shadow-sm shrink-0">
                            <step.icon size={18} />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0c1024] text-[15px] mb-1">{step.title}</h4>
                            <p className="text-[14px] leading-relaxed text-[#0c1024]/60 font-medium">{step.body}</p>
                          </div>
                        </div>
                      ))}
                   </div>
                </div>
              </FadeIn>
            </div>

            {/* Right side form */}
            <FadeIn delay={0.2} direction="right">
              <div className="shadow-2xl shadow-purple-900/20">
                <ConsultationFormCore 
                   formTitle="Get My Setup Plan" 
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 18. FINAL CTA */}
      <FinalCTA onOpenQualifier={openQualifier} />

      {/* 19. LEAD QUALIFICATION MODAL */}
      <LeadQualifier isOpen={isQualifierOpen} onClose={closeQualifier} />
    </main>
  );
}
