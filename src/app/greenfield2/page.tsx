'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, MapPin, 
  ShoppingCart, Users2, 
  Wrench, Network, LayoutDashboard,
  Zap, Building2, Globe, Clock
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPER (Consistent with Greenfield1)
   ───────────────────────────────────────────────────────── */
const FadeIn = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────────────────
   HERO SECTION
   ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-12 lg:pb-24">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
    <div className="relative z-10 container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <Zap size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Full Site Delivery</span>
            </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="c9-hero-title mb-6">
            Greenfield Site Delivery — <span className="text-[#5D00D6]">Built, Installed, and Commissioned</span> End to End
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="c9-body mb-10 max-w-2xl mx-auto">
            Opening a new site requires more than just internet and hardware. C9 manages the full process — from assessment and procurement to cabling, installation, and commissioning — so your site is ready to operate from day one.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[15px] hover:bg-[#4d00b3] transition-colors shadow-xl shadow-purple-900/20 group whitespace-nowrap"
            >
              Book a Greenfield Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:1300293332"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-10 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-colors whitespace-nowrap"
            >
              Talk to a Delivery Specialist
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 1 — WHAT IS A GREENFIELD SITE
   ───────────────────────────────────────────────────────── */
const SectionWhatIs = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <span className="c9-eyebrow mb-4">Strategic Delivery</span>
          <h2 className="c9-section-heading mb-6">New Sites Require Proper Planning and Execution</h2>
          <div className="c9-body space-y-4">
            <p>
              A greenfield site is a new office, location, or facility being built from the ground up.
            </p>
            <p>
              It requires coordination across connectivity, cabling, infrastructure, hardware, and system configuration — all delivered in the right sequence.
            </p>
            <p className="font-bold text-slate-900">
              C9 brings this together under a single delivery model, removing the need to manage multiple vendors and contractors.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
           <div className="rounded-[32px] overflow-hidden shadow-2xl">
              <img src="/images/greenfield_consultation.png" alt="C9 Team Planning" className="w-full h-auto" />
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — ASSESSMENT & PLANNING
   ───────────────────────────────────────────────────────── */
const SectionAssessment = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn className="order-2 lg:order-1">
          <div className="bg-slate-50 p-8 md:p-12 rounded-[32px] border border-slate-100 relative">
             <div className="absolute top-0 right-10 -translate-y-1/2 w-16 h-16 rounded-2xl bg-[#5D00D6] flex items-center justify-center text-white shadow-xl">
                <LayoutDashboard size={32} />
             </div>
             <ul className="space-y-6">
                {[
                  "Site layout and infrastructure readiness",
                  "Business and operational needs",
                  "Connectivity requirements",
                  "System dependencies"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle className="text-[#5D00D6] mt-1 shrink-0" size={20} />
                    <span className="text-slate-900 font-bold text-[17px]">{item}</span>
                  </li>
                ))}
             </ul>
          </div>
        </FadeIn>
        <FadeIn className="order-1 lg:order-2">
          <span className="c9-eyebrow mb-4">Architecture First</span>
          <h2 className="c9-section-heading mb-6">Assessment First. Delivery Second.</h2>
          <p className="c9-body mb-6">
            Every project begins with understanding the site, layout, and operational requirements. This ensures the right solution is designed before procurement or installation begins.
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — DELIVERY LIFECYCLE (FLOW)
   ───────────────────────────────────────────────────────── */
const SectionFlow = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">The Framework</span>
        <h2 className="c9-section-heading">From Empty Site to Fully Operational Environment</h2>
      </FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { step: '1', title: 'Assess', desc: 'Understanding site, requirements, and constraints' },
          { step: '2', title: 'Design', desc: 'Creating a complete system architecture' },
          { step: '3', title: 'Procure', desc: 'Sourcing all required hardware and infrastructure' },
          { step: '4', title: 'Build', desc: 'Cabling, racks, and physical infrastructure' },
          { step: '5', title: 'Install', desc: 'Deploying and configuring all systems' },
          { step: '6', title: 'Commission', desc: 'Testing, validating, and handing over a working environment' },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="bg-white p-8 rounded-[24px] border border-slate-100 h-full hover:shadow-md transition-all group">
              <span className="text-[12px] font-bold text-[#5D00D6] uppercase tracking-[0.2em] mb-4 block">Step 0{item.step}</span>
              <h3 className="c9-card-title mb-3">{item.title}</h3>
              <p className="c9-body !text-[15px]">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   CAPABILITIES GRID (SECTIONS 4-7)
   ───────────────────────────────────────────────────────── */
const SectionCapabilities = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* PROCUREMENT */}
        <FadeIn>
          <div className="h-full flex flex-col">
            <div className="mb-6 w-14 h-14 rounded-2xl bg-[#5D00D6]/8 flex items-center justify-center text-[#5D00D6]">
              <ShoppingCart size={28} />
            </div>
            <h3 className="c9-section-heading !text-[28px] mb-4">Single Vendor. Full Accountability.</h3>
            <p className="c9-body mb-4">
              C9 manages the entire procurement lifecycle — ensuring all equipment is compatible, correctly specified, and delivered in line with project timelines.
            </p>
            <p className="c9-body font-bold text-slate-900">No mismatched hardware. No supplier confusion.</p>
          </div>
        </FadeIn>

        {/* PROJECT MGMT */}
        <FadeIn delay={0.1}>
          <div className="h-full flex flex-col">
            <div className="mb-6 w-14 h-14 rounded-2xl bg-[#5D00D6]/8 flex items-center justify-center text-[#5D00D6]">
              <Users2 size={28} />
            </div>
            <h3 className="c9-section-heading !text-[28px] mb-4">Coordinated Delivery Across Every Stage</h3>
            <p className="c9-body mb-4">
              C9 manages timelines, vendors, and dependencies across the entire project. This includes coordination with Builders, Electricians, Cablers, and Equipment suppliers.
            </p>
            <p className="c9-body font-bold text-slate-900">A single project owner ensures delivery stays on track.</p>
          </div>
        </FadeIn>

        {/* CABLING */}
        <FadeIn delay={0.2}>
          <div className="h-full flex flex-col pt-8 border-t border-slate-100">
            <div className="mb-6 w-14 h-14 rounded-2xl bg-[#5D00D6]/8 flex items-center justify-center text-[#5D00D6]">
              <Network size={28} />
            </div>
            <h3 className="c9-section-heading !text-[28px] mb-4">Structured Cabling Done to Standard</h3>
            <div className="c9-body space-y-4">
              <p>C9 delivers and manages structured cabling and infrastructure, including:</p>
              <ul className="grid grid-cols-2 gap-y-2">
                {['Cat6 / Cat6A cabling', 'Fibre installation', 'Data points & patching', 'Rack & cabinet setup', 'Labelling & documentation'].map((l, i) => (
                  <li key={i} className="flex items-center gap-2 text-[14px] font-bold text-slate-700">
                    <div className="w-1 h-1 rounded-full bg-[#5D00D6]" /> {l}
                  </li>
                ))}
              </ul>
              <p className="text-[14px] italic">All work is completed to Australian standards and tested before handover.</p>
            </div>
          </div>
        </FadeIn>

        {/* INSTALLATION */}
        <FadeIn delay={0.3}>
          <div className="h-full flex flex-col pt-8 border-t border-slate-100">
            <div className="mb-6 w-14 h-14 rounded-2xl bg-[#5D00D6]/8 flex items-center justify-center text-[#5D00D6]">
              <Wrench size={28} />
            </div>
            <h3 className="c9-section-heading !text-[28px] mb-4">Installed, Configured, and Fully Tested</h3>
            <div className="c9-body space-y-4">
              <p>All systems are professionally installed and configured. This includes:</p>
              <ul className="grid grid-cols-1 gap-y-2">
                {['Network setup and configuration', 'Security implementation', 'Device installation (WiFi, phones, cameras)', 'Testing and validation'].map((l, i) => (
                  <li key={i} className="flex items-center gap-2 text-[14px] font-bold text-slate-700">
                    <div className="w-1 h-1 rounded-full bg-[#5D00D6]" /> {l}
                  </li>
                ))}
              </ul>
              <p className="c9-body font-bold text-slate-900">Nothing is handed over until it is fully operational.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — NATIONWIDE DELIVERY
   ───────────────────────────────────────────────────────── */
const SectionNationwide = () => (
  <section className="py-16 lg:py-24 bg-slate-50">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <span className="c9-eyebrow mb-4">Scale Anywhere</span>
          <h2 className="c9-section-heading mb-6">Delivered Nationwide</h2>
          <p className="c9-body mb-6">
            C9 supports deployments across multiple locations with coordinated delivery. Whether metro or regional, installations are delivered using trusted professionals under a consistent standard.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
           <div className="relative p-1 bg-white rounded-[32px] shadow-xl border border-slate-100 overflow-hidden">
              <div className="bg-[#0c1024] rounded-[28px] p-12 text-center text-white relative">
                 <Globe className="mx-auto mb-6 text-[#5D00D6]" size={64} />
                 <h3 className="text-2xl font-bold mb-4">Capital Cities & Regional Hubs</h3>
                 <p className="opacity-70 text-[15px]">Consistent quality across every Australian state.</p>
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — ACCOUNTABILITY
   ───────────────────────────────────────────────────────── */
const SectionAccountability = () => (
  <section className="py-16 lg:py-24 bg-white border-y border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1000px' }}>
      <FadeIn className="text-center">
        <span className="c9-eyebrow mb-4">One Partner. One Outcome.</span>
        <h2 className="c9-section-heading mb-12">Total Site Commissioning — We Own the Result</h2>
        <div className="grid md:grid-cols-1 gap-8">
           <div className="bg-[#0c1024] rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                 <CheckCircle size={160} />
              </div>
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <p className="text-[18px] opacity-70 mb-8 font-medium">C9 owns the entire delivery process. You are not left:</p>
                    <ul className="space-y-4">
                       {["Managing multiple vendors", "Resolving installation issues", "Fixing mismatched systems"].map((item, i) => (
                         <li key={i} className="flex items-center gap-3">
                            <CheckCircle size={20} className="text-[#5D00D6]" />
                            <span className="text-[16px] font-bold">{item}</span>
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="text-center md:text-left border-l border-white/10 md:pl-12">
                     <p className="text-2xl md:text-3xl font-bold leading-tight uppercase tracking-tight">Everything is delivered as one complete, <br className="hidden md:block" /> <span className="text-[#5D00D6]">working environment.</span></p>
                 </div>
              </div>
           </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   FINAL CTA
   ───────────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
    <div className="container mx-auto px-6 md:px-8 text-center relative z-10" style={{ maxWidth: '1240px' }}>
      <FadeIn>
        <h2 className="c9-section-heading mb-6">Let’s Plan Your New Site Properly</h2>
        <p className="c9-body mb-10 max-w-2xl mx-auto">
          We’ll assess, design, procure, install, and deliver your entire environment — end to end.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[16px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
            >
              Book a Greenfield Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-10 font-bold text-[16px] hover:bg-[#5D00D6] hover:text-white transition-all whitespace-nowrap"
            >
              Get My Delivery Plan
            </a>
          </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function Greenfield2Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      
      <SectionWhatIs />
      <SectionAssessment />
      <SectionFlow />
      <SectionCapabilities />
      <SectionNationwide />
      <SectionAccountability />
      <FinalCTA />
      
      <section id="consultation" className="bg-white border-t border-slate-100 pb-12 pt-12 md:pt-20">
        <WpConsultationForm
          showHeader={false}
          eyebrow="GREENFIELD DELIVERY CONSULTATION"
          title="Commission your new site with confidence."
          description="Book a strategic session with our delivery specialists. We cover assessment, procurement, and project coordination for your next location."
          formTitle="Plan My Greenfield Rollout"
        />
      </section>
    </main>
  );
}
