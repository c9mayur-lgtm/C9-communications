'use client';

import React from 'react';
import { ArrowRight, CheckCircle, HeadphonesIcon, Layers, MonitorOff, TrendingUp, Shield, Activity, Phone, Settings, Users } from 'lucide-react';
import { motion } from 'framer-motion';

// Global shared components
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { WpWhyPartner } from "@/components/wordpress/WpWhyPartner";
import { WpCaseStudies } from "@/components/wordpress/WpCaseStudies";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { WpServices } from "@/components/wordpress/WpServices";
import { WpSolutions } from "@/components/wordpress/WpSolutions";
import { WpVendors } from "@/components/wordpress/WpVendors";
import { WpCompliance } from "@/components/wordpress/WpCompliance";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { HeroHighlighter } from "@/components/common/HeroHighlighter";

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPER
   ───────────────────────────────────────────────────────── */
const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────────────────
   CUSTOM INLINED SECTIONS FOR BUSINESS1 CONTENT
   ───────────────────────────────────────────────────────── */

const BusinessHero = () => (
  <section className="pt-20 pb-10 md:pt-28 md:pb-12 lg:pt-32 lg:pb-14 relative overflow-hidden min-h-[520px] lg:min-h-[600px] bg-white">
    {/* Grid backdrop */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#5D00D6] opacity-10 blur-[100px]"></div>
    </div>
    
    <div className="container mx-auto px-6 md:px-8 w-full relative z-10" style={{ maxWidth: '1240px' }}>
      <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-6 xl:gap-8 items-center w-full">
        {/* Text column */}
        <div className="py-4 pr-0 xl:pr-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/10 border border-[#5D00D6]/20 mb-7">
              <span className="text-[#5D00D6] text-[12px] font-bold uppercase tracking-widest">
                Business IT & Telco Partner
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="c9-hero-title mb-5 whitespace-pre-line text-slate-900 leading-[1.05]">
              Better IT & Telco Support for Growing Businesses
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="c9-body mb-10 max-w-[550px] whitespace-pre-line text-slate-600 text-lg">
              If your current setup is slowing you down, C9 helps optimise, support, and scale your environment so your business runs smoothly.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-10">
              <a
                href="#consultation-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[15px] hover:bg-[#4d00b3] transition-colors shadow-lg shadow-purple-900/20 group cursor-pointer"
              >
                Talk to an Expert
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#consultation-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-8 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-colors cursor-pointer"
              >
                Optimise My Setup
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-5">
              {['End-to-end management', 'Proactive support', 'Transparent billing'].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-600 text-[13px] font-bold">
                  <CheckCircle size={16} className="text-[#5D00D6]" /> {t}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Image right */}
        <FadeIn delay={0.2} className="hidden xl:block w-full h-[480px] relative rounded-[32px] overflow-hidden shadow-2xl shadow-purple-900/10">
          <img
            src="/images/hero_business.png"
            alt="Business operations powered by C9"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1A003A]/30 to-transparent" />
        </FadeIn>
      </div>
    </div>
  </section>
);

const Philosophy = () => {
  const philosophy = [
    { icon: <HeadphonesIcon size={24} />, title: "Rapid Response", desc: "We prioritise your uptime with local engineers who act fast." },
    { icon: <Users size={24} />, title: "Human Accountability", desc: "No ticket black holes. You get dedicated support that takes ownership." },
    { icon: <TrendingUp size={24} />, title: "Strategic Growth", desc: "We align your technology with your business goals, not just fixing bugs." }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <FadeIn className="text-center mb-16">
          <p className="c9-eyebrow mb-4">Customer-First Philosophy</p>
          <h2 className="c9-section-heading mb-6">Built on Responsive, Reliable Support</h2>
          <p className="c9-body text-slate-600 max-w-2xl mx-auto">
            We believe in long-term relationships, not just tickets. Our team is dedicated to your success, providing proactive management and rapid response when you need it most.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
             <div className="relative rounded-[32px] overflow-hidden aspect-video lg:aspect-square shadow-2xl">
                <img src="/images/c9_team_collaboration.png" className="w-full h-full object-cover" alt="Responsive C9 team collaboration" />
             </div>
          </FadeIn>
          <div className="space-y-6">
            {philosophy.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-100 group hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center text-[#5D00D6] shrink-0 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="c9-body !mb-0 !text-[15px] !leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Outcomes = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <FadeIn>
              <p className="c9-eyebrow mb-4">Our Commitment</p>
              <h2 className="c9-section-heading mb-6">Expertise When You Need It</h2>
              <p className="c9-body mb-8">
                We focus on building a genuine partnership where we understand your business goals as well as your technical needs. Our team is always available to help you navigate new challenges and scale your operations.
              </p>
            </FadeIn>
            <div className="space-y-4">
               {[
                 'Rapid response times from local experts',
                 'Proactive management reducing downtime',
                 'Ongoing relationship and strategy support',
                 'Real human accountability'
               ].map((text, i) => (
                 <FadeIn key={i} delay={0.1 + (i * 0.05)}>
                   <div className="flex items-center gap-3">
                     <CheckCircle size={18} className="text-[#5D00D6]" />
                     <span className="font-bold text-slate-800 text-[15px]">{text}</span>
                   </div>
                 </FadeIn>
               ))}
            </div>
          </div>
          <FadeIn delay={0.2}>
             <div className="relative rounded-[32px] overflow-hidden bg-slate-100 aspect-square lg:aspect-[4/3] shadow-2xl">
                <img 
                  src="/images/greenfield_consultation.png" 
                  className="w-full h-full object-cover" 
                  alt="Long-term C9 partnership" 
                  onError={(e) => (e.currentTarget as HTMLImageElement).src = '/images/hero_business.png'}
                />
             </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 6 — HUMAN TRUST
   ───────────────────────────────────────────────────────── */
const HumanTrust = () => (
  <section className="py-16 lg:py-24 bg-white border-y border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <div className="relative rounded-[32px] overflow-hidden aspect-video lg:aspect-square shadow-2xl">
            <img src="/images/c9_support_engineer.png" className="w-full h-full object-cover" alt="Real C9 support engineers" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
           <p className="c9-eyebrow mb-4">Direct Access</p>
           <h2 className="c9-section-heading mb-6 text-[#0c1024]">Real Support. Real People.</h2>
           <p className="c9-body text-slate-700 mb-6">
             When something goes wrong, you’re not dealing with tickets, delays, or generic responses.
           </p>
           <p className="c9-body text-slate-700 mb-6">
             You’re speaking directly with a team that understands your environment, takes ownership, and resolves issues fast.
           </p>
           <p className="c9-body text-slate-700 mb-0 font-bold text-[#5D00D6]">
             We don’t just deploy systems — we support your business every day.
           </p>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — FINAL CTA
   ───────────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section id="consultation-section" className="py-20 bg-slate-900 text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 !text-white">Ready to Scale Your Business?</h2>
      <p className="text-slate-400 mb-10 max-w-xl mx-auto">Book a consultation with our experts to review your current setup, identify bottlenecks, and build a tailored plan for growth.</p>
      <a href="#consultation-section" className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[15px] hover:bg-[#4d00b3] transition-colors">
        Book My Business Review
      </a>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function Business1Page() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      <BusinessHero />
      <HeroHighlighter />
      <WpClientTicker />
      
      <Philosophy />
      <Outcomes />
      <HumanTrust />
      <FinalCTA />

      <WpServices />
      <WpSolutions />

      {/* Trust Metrics: Emphasise customer-first support */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Users />, title: 'Customer-First Support', desc: 'Dedicated account managers and local engineers who understand your business.' },
                { icon: <Shield />, title: 'Service Quality', desc: 'Strict SLAs and performance guarantees that prioritise your uptime.' },
                { icon: <Activity />, title: 'Proactive Care', desc: 'Continuous monitoring to resolve issues before they impact your operations.' }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                   <div className="w-16 h-16 bg-[#5D00D6]/10 text-[#5D00D6] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
                      {item.icon}
                   </div>
                   <h3 className="font-bold text-slate-900 text-lg mb-3">{item.title}</h3>
                   <p className="text-slate-600 text-[14px]">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <WpWhyPartner />
      
      {/* Ecosystem & Accreditations (show partner ecosystem clearly) */}
      <WpVendors />
      <WpCompliance />

      {/* Trust: Customer-first focus / case studies */}
      <WpCaseStudies 
        articles={[
          {
            tag: 'REAL ESTATE',
            title: 'Multi-Site Network Consolidation for Stockdale & Leggo',
            desc: 'How we unified communications and Internet across 70+ franchise offices into a single, centrally managed network, reducing telecommunications spend by 32%.',
            img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
            videoText: 'Stockdale & Leggo Consolidation'
          },
          {
            tag: 'HEALTHCARE',
            title: 'Migrating Arthritis Australia to Agile Cloud Voice',
            desc: 'Replacing end-of-life on-premise systems with a flexible cloud phone system, enabling their team to field critical calls remotely and securely.',
            img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
            videoText: 'Arthritis Foundation Voice'
          },
          {
            tag: 'EDUCATION',
            title: 'Enterprise Ethernet for Baxter Institute',
            desc: 'Delivering direct 1Gbps/1Gbps fibre connectivity to support hundreds of concurrent students and cloud-hosted learning environments without latency.',
            img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
            videoText: 'Baxter Institute Network'
          }
        ]}
      />
      
      <WpFAQAndFeedback />

      {/* FINAL CTA */}
      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false}
          eyebrow="GROWTH & OPTIMISATION"
          title="Ready to Scale Your Business?"
          description="Book a consultation with our experts to review your current setup, identify bottlenecks, and build a tailored plan for growth."
          formTitle="Book My Business Review"
        />
      </section>

    </main>
  );
}
