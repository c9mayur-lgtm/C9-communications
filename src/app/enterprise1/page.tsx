'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Network, Shield, Phone, Server, Settings,
  MapPin, Building2, Globe, Activity, Lock, Users, Zap, Layers, BarChart
} from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPER
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
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO
   ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-6 pb-16 lg:pt-14 lg:pb-24">
    {/* Subtle grid backdrop */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }}
    />
    {/* Soft radial glow */}
    <div
      className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.06]"
      style={{ background: 'radial-gradient(circle, #5D00D6 0%, transparent 70%)' }}
    />

    <div className="relative z-10 container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT */}
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <Globe size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">
                Enterprise Solutions
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Enterprise-Grade IT &amp; Telco for{' '}
              <span className="text-[#5D00D6]">Multi-Site Organisations.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body mb-10 max-w-[530px]">
              C9 designs, delivers, and manages scalable infrastructure across multiple locations — ensuring consistency, security, and performance at every level.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#consultation-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group"
              >
                Book Enterprise Consultation{' '}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#why-c9"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('why-c9')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-all"
              >
                Speak to a Specialist
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                'Multi-Site Standardisation',
                'SD-WAN & Secure Edge',
                'Enterprise SLAs',
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 text-slate-500 text-[13px] font-semibold"
                >
                  <CheckCircle size={15} className="text-[#5D00D6]" /> {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* RIGHT — hero image */}
        <FadeIn delay={0.12} className="relative hidden lg:block">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/80 aspect-[4/3] group">
            <img
              src="/images/hero_enterprise.png"
              alt="Multi-Site IT Operations Center"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/hero_business.png';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/20 via-transparent to-transparent" />

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg border border-white/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#5D00D6]/10 flex items-center justify-center">
                  <Activity size={18} className="text-[#5D00D6]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#5D00D6] mb-0.5">
                    Centralised Control
                  </div>
                  <div className="text-[15px] font-bold text-slate-900 leading-tight">
                    Unified Multi-Site Visibility
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — PAIN SECTION
   ───────────────────────────────────────────────────────── */
const PainSection = () => (
  <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <div className="relative rounded-[24px] overflow-hidden shadow-sm aspect-[4/3] group">
             <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors z-10"></div>
             <img 
               src="/images/enterprise-complexity.png" 
               alt="Complexity of fragmented IT environments"
               className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-700"
               onError={(e) => {
                 (e.currentTarget as HTMLImageElement).src = '/images/greenfield_hero.png';
               }}
             />
             <div className="absolute top-6 left-6 z-20 flex gap-2">
                <span className="bg-white text-rose-600 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider flex items-center gap-1.5">
                   <Lock size={12} /> Fragmented Security
                </span>
             </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="c9-eyebrow text-rose-600 mb-4">The Challenge</p>
          <h2 className="c9-section-heading mb-6 tracking-tight">
            Managing Complex Environments Shouldn&apos;t Be This Hard
          </h2>
          <div className="space-y-4">
            <p className="c9-body text-slate-600 max-w-lg font-medium">
              Many organisations struggle with fragmented systems, multiple vendors, inconsistent performance, and lack of visibility across locations.
            </p>
            <p className="c9-body text-slate-600 max-w-lg font-medium">
              This leads to downtime, inefficiencies, and significantly increased operational risk at scale.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3">
             <div className="p-4 rounded-xl bg-white border border-rose-100 flex items-start gap-3">
                <div className="mt-0.5 text-rose-500"><Building2 size={18} /></div>
                <div>
                   <h4 className="text-[14px] font-bold text-slate-900 mb-1">Inconsistent Infrastructure</h4>
                   <p className="text-[13px] text-slate-500">Every new branch introduces a different vendor, different hardware, and separate contracts.</p>
                </div>
             </div>
             <div className="p-4 rounded-xl bg-white border border-rose-100 flex items-start gap-3">
                <div className="mt-0.5 text-rose-500"><Settings size={18} /></div>
                <div>
                   <h4 className="text-[14px] font-bold text-slate-900 mb-1">Lack of Central Control</h4>
                   <p className="text-[13px] text-slate-500">No single pane of glass to monitor security posture, network performance, or asset management.</p>
                </div>
             </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — SOLUTION POSITIONING
   ───────────────────────────────────────────────────────── */
const SolutionPositioning = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 text-center" style={{ maxWidth: '900px' }}>
      <FadeIn>
        <p className="c9-eyebrow mb-5">Our Approach</p>
        <h2 className="c9-section-heading mb-8">
          A Unified Approach to Enterprise IT
        </h2>
        <p className="c9-body max-w-3xl mx-auto">
          C9 brings your entire IT and communications environment together under one structured, scalable model — giving you control, visibility, and consistency across your organisation.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — CAPABILITIES
   ───────────────────────────────────────────────────────── */
const capabilities = [
  {
    icon: <Globe size={24} className="text-[#5D00D6]" />,
    title: 'Multi-Site Networking',
    desc: 'Standardised, high-performance connectivity across all locations for consistent user experience.',
  },
  {
    icon: <Network size={24} className="text-[#5D00D6]" />,
    title: 'SD-WAN & Connectivity',
    desc: 'Optimised routing and performance across distributed environments with carrier-neutral diversity.',
  },
  {
    icon: <Shield size={24} className="text-[#5D00D6]" />,
    title: 'Security & Firewall',
    desc: 'Enterprise-grade protection with advanced threat prevention across all endpoints and locations.',
  },
  {
    icon: <Phone size={24} className="text-[#5D00D6]" />,
    title: 'Voice & Collaboration',
    desc: 'Unified communication systems for distributed global teams, integrated natively with Microsoft Teams.',
  },
  {
    icon: <Server size={24} className="text-[#5D00D6]" />,
    title: 'Enterprise Infrastructure',
    desc: 'Robust cloud architectures and secure edge computing designed to handle intensive, scaled workloads.',
  },
  {
    icon: <Activity size={24} className="text-[#5D00D6]" />,
    title: 'Managed Services',
    desc: 'Centralised monitoring, IT support, and lifecycle management backed by strict Australian SLAs.',
  },
];

const Capabilities = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn>
        <div className="text-center mb-14">
          <p className="c9-eyebrow mb-4">Enterprise Capabilities</p>
          <h2 className="c9-section-heading mb-6">Built for Scale and Control</h2>
          <p className="c9-body max-w-2xl mx-auto">
            Our framework replaces isolated siloes with a cohesive, centrally managed enterprise environment.
          </p>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((cap, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#5D00D6]/25 transition-all duration-300 h-full flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center mb-6 group-hover:bg-[#5D00D6]/15 group-hover:scale-110 transition-all duration-300">
                {cap.icon}
              </div>
              <h3 className="c9-card-title mb-3">{cap.title}</h3>
              <p className="c9-body mt-auto !text-[15px]">{cap.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — WHY C9
   ───────────────────────────────────────────────────────── */
const whyPoints = [
  { icon: <Layers size={20} />, text: 'Combined telco and MSP expertise' },
  { icon: <Globe size={20} />, text: 'Carrier-neutral approach' },
  { icon: <Shield size={20} />, text: 'Best-of-breed vendor ecosystem' },
  { icon: <Settings size={20} />, text: 'Structured delivery and rollout' },
  { icon: <Activity size={20} />, text: 'Scalable long-term support model' },
];

const WhyC9 = () => (
  <section id="why-c9" className="py-16 lg:py-24 bg-[#0c1024] relative overflow-hidden">
    <div
      className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.1]"
      style={{ background: 'radial-gradient(ellipse 80% 100% at 50% 0%, #5D00D6, transparent)' }}
    />
    <div className="relative z-10 container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        
        {/* Left */}
        <FadeIn>
          <p className="text-[#a56eff] font-bold text-[11px] uppercase tracking-[0.25em] mb-5">
            The C9 Advantage
          </p>
          <h2 className="c9-section-heading !text-white mb-6">
            Why Enterprises Choose C9
          </h2>
          <p className="text-white/60 text-lg leading-relaxed font-medium mb-10 max-w-[500px]">
             We are built to execute complex deployments with precision. Our methodology eliminates vendor sprawl and replaces it with a single, highly accountable technology partner.
          </p>
          
          <ul className="space-y-5">
            {whyPoints.map((point, i) => (
              <li key={i} className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="text-[#a56eff] shrink-0">{point.icon}</div>
                <span className="text-white/90 font-bold text-[15px]">{point.text}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Right */}
        <FadeIn delay={0.1}>
           <div className="grid grid-cols-2 gap-4">
               <div className="col-span-2 bg-[#5D00D6] rounded-3xl p-8 flex flex-col justify-center min-h-[200px] relative overflow-hidden">
                   <div className="absolute right-0 bottom-0 opacity-10 translate-x-4 translate-y-4">
                      <Network size={160} />
                   </div>
                   <div className="relative z-10">
                      <div className="text-white/80 font-bold text-[12px] uppercase tracking-widest mb-2">Network Reach</div>
                      <div className="text-3xl font-extrabold text-white">Full Carrier Neutrality</div>
                      <p className="mt-2 text-white/70 text-[14px] font-medium">Access to all major infrastructure providers globally.</p>
                   </div>
               </div>
               <div className="bg-white/5 border border-white/10 rounded-3xl p-8 min-h-[180px]">
                   <div className="text-[#a56eff] mb-4"><Users size={32} /></div>
                   <div className="text-white font-bold text-lg mb-1">AU Support</div>
                   <div className="text-white/50 text-[13px]">100% locally based engineering team.</div>
               </div>
               <div className="bg-white/5 border border-white/10 rounded-3xl p-8 min-h-[180px]">
                   <div className="text-[#a56eff] mb-4"><Shield size={32} /></div>
                   <div className="text-white font-bold text-lg mb-1">Compliant</div>
                   <div className="text-white/50 text-[13px]">ISO & framework aligned architecture.</div>
               </div>
           </div>
        </FadeIn>

      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — PROCESS
   ───────────────────────────────────────────────────────── */
const processSteps = [
  { num: '01', title: 'Assess Current Environment', desc: 'Comprehensive audit of existing infrastructure, vendor contracts, network topology, and pain points.' },
  { num: '02', title: 'Design Architecture', desc: 'Engineering a standardised, scalable blueprint that aligns with your security requirements and business goals.' },
  { num: '03', title: 'Implement Across Locations', desc: 'Staged, low-risk deployment across all sites managed entirely by our dedicated technical project managers.' },
  { num: '04', title: 'Ongoing Management & Optimisation', desc: 'Proactive 24/7 monitoring, cost optimisation, and continuous improvement under a unified SLA.' },
];

const Process = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn>
        <div className="text-center mb-16">
          <p className="c9-eyebrow mb-4">Implementation</p>
          <h2 className="c9-section-heading mb-4">Structured Delivery at Scale</h2>
          <p className="c9-body max-w-2xl mx-auto">
             Deploying to 2 sites or 200 requires rigorous project management. We replace ad-hoc rollouts with a precise, engineered process.
          </p>
        </div>
      </FadeIn>

      <div className="relative">
        <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-1 bg-slate-100 rounded-full" />
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {processSteps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white border-4 border-[#5D00D6]/10 text-[#5D00D6] rounded-full flex items-center justify-center font-extrabold text-2xl mb-6 shadow-sm relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:border-[#5D00D6]">
                  {step.num}
                </div>
                <h3 className="c9-card-title mb-3 px-2">{step.title}</h3>
                <p className="c9-body !text-[14px]">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — TRUST
   ───────────────────────────────────────────────────────── */
const Trust = () => (
  <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
           <div className="w-16 h-16 bg-[#5D00D6]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield size={32} className="text-[#5D00D6]" />
           </div>
           <p className="c9-eyebrow mb-4">Partner Ecosystem</p>
           <h2 className="c9-section-heading mb-6">Built on Reliability and Service</h2>
           <p className="c9-body mb-8">
             Focus on responsiveness, long-term partnerships, and consistent service delivery. We align our success entirely with the stability and performance of your operations.
           </p>
        </FadeIn>
        
        {/* Vendor Grid */}
        <FadeIn delay={0.1}>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { name: 'Microsoft', src: '/partners/microsoft-logo-svgrepo-com.svg' },
                { name: 'Cisco', src: '/images/clients/cisco.png' },
                { name: 'Fortinet', src: '/partners/fortinet.png' },
                { name: 'Dell Technologies', src: '/partners/Dell_Technologies_logo.svg' },
              ].map((v, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:border-[#5D00D6]/25 hover:shadow-md transition-all h-44 group">
                   <img
                     src={v.src}
                     alt={v.name}
                     className="h-16 md:h-20 w-auto max-w-[140px] object-contain opacity-85 group-hover:opacity-100 transition-all duration-300"
                   />
                   <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">{v.name}</span>
                </div>
              ))}
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — FINAL CTA
   ───────────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="py-16 lg:py-24 bg-[#0c1024] relative overflow-hidden">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.15]"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 100%, #5D00D6, transparent)',
      }}
    />
    <div className="relative z-10 container mx-auto px-6 md:px-8 text-center" style={{ maxWidth: '800px' }}>
      <FadeIn>
        <p className="c9-eyebrow !text-[#a56eff] mb-5">
          Enterprise Engagement
        </p>
        <h2 className="c9-section-heading !text-white mb-8">
          Take Control of Your IT Environment
        </h2>
        <p className="c9-body !text-white/60 mb-10">
          Speak with our enterprise solutions architecture team to discuss standardisation, multi-site rollout viability, and long-term strategic technology management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-2xl shadow-purple-900/40 group"
          >
            Talk to an Enterprise Specialist{' '}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white rounded-full h-14 px-9 font-bold text-[15px] hover:border-[#5D00D6] hover:bg-[#5D00D6]/15 transition-all"
          >
            Request a Tailored Proposal
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function Enterprise1Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <PainSection />
      <SolutionPositioning />
      <Capabilities />
      <WhyC9 />
      <Process />
      <Trust />
      <FinalCTA />
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="ENTERPRISE CONSULTATION"
          title="Align your infrastructure with your business strategy."
          description="Book a session with our solutions architects to evaluate your multi-site connectivity, security posture, and unified communications readiness."
          formTitle="Request an Enterprise Strategy Call"
        />
      </section>
    </main>
  );
}
