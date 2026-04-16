'use client';

import React from 'react';
import { ArrowRight, CheckCircle, HeadphonesIcon, Layers, MonitorOff, TrendingUp, Shield, Activity, Phone, Settings } from 'lucide-react';
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

const PainPoints = () => {
  const pains = [
    { icon: <HeadphonesIcon size={28} />, title: "Slow support", desc: "Waiting hours or days for IT issues to be resolved." },
    { icon: <Layers size={28} />, title: "Too many vendors", desc: "Juggling multiple contracts, bills, and account managers." },
    { icon: <MonitorOff size={28} />, title: "Outdated systems", desc: "Legacy infrastructure creating bottlenecks and risk." },
    { icon: <TrendingUp size={28} />, title: "Growth challenges", desc: "Technology that can't scale securely as you expand." }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="c9-eyebrow mb-4 block" style={{ color: '#e11d48' }}>THE CHALLENGE</span>
            <h2 className="c9-section-heading">
              Are these issues holding your business back?
            </h2>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:border-slate-300 transition-colors h-full">
                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-slate-800 mb-6">
                  {p.icon}
                </div>
                <h3 className="c9-card-title mb-3 text-[#0c1024]">{p.title}</h3>
                <p className="c9-body text-[15px]">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Outcomes = () => {
  const outcomesList = [
    { text: "Reduce downtime and keep operations running", icon: <Activity size={20} className="text-[#5D00D6]" /> },
    { text: "Get faster, more responsive support", icon: <HeadphonesIcon size={20} className="text-[#5D00D6]" /> },
    { text: "Simplify your IT and vendor management", icon: <Settings size={20} className="text-[#5D00D6]" /> },
    { text: "Scale systems as your business grows", icon: <TrendingUp size={20} className="text-[#5D00D6]" /> },
    { text: "Improve reliability across your environment", icon: <Shield size={20} className="text-[#5D00D6]" /> }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <span className="c9-eyebrow mb-4 block">THE OUTCOME</span>
            <h2 className="c9-section-heading mb-6">
              A reliable environment designed for uninterrupted work.
            </h2>
            <p className="c9-body mb-8 max-w-lg">
               When you partner with C9, you stop worrying about IT infrastructure and start focusing entirely on running your business.
            </p>
            <ul className="space-y-4">
              {outcomesList.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-[#5D00D6]/10 p-1.5 rounded-lg shrink-0">
                     {item.icon}
                  </div>
                  <span className="font-semibold text-slate-800 text-[16px]">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a
                href="#consultation-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[15px] hover:bg-[#4d00b3] transition-colors shadow-lg shadow-purple-900/20 group cursor-pointer"
              >
                Request a Setup Review
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
             <div className="relative rounded-[24px] overflow-hidden bg-slate-100 aspect-square lg:aspect-[4/3]">
                <img 
                  src="/images/greenfield_consultation.png" 
                  className="w-full h-full object-cover" 
                  alt="Business IT professional" 
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
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function Business1Page() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      <BusinessHero />
      <HeroHighlighter />
      <WpClientTicker />
      
      {/* Replaced generic WpSimplifyingIT and WpHighlights with targeted Pain + Outcome blocks */}
      <PainPoints />
      <Outcomes />

      <WpServices />
      <WpSolutions />

      {/* Trust Metrics */}
      <WpWhyPartner />
      
      {/* Ecosystem & Accreditations (strengthened focus) */}
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
          eyebrow="BUSINESS setup REVIEW"
          title="Ready to optimise your environment?"
          description="Book a consultation with our experts to review your current setup, identify bottlenecks, and build a tailored plan for growth."
          formTitle="Book a Consultation"
        />
      </section>

    </main>
  );
}
