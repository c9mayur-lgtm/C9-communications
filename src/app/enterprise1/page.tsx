'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Network, Shield, Phone, Server, Settings,
  MapPin, Building2, Globe, Activity, Lock, Users, Zap, Layers, BarChart
} from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { TrustProofSystem } from '@/components/sections/TrustProofSystem';

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
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO (LIGHT THEME)
   ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-slate-50 pt-4 pb-12 lg:pt-8 lg:pb-16">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }}
    />
    <div
      className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.06]"
      style={{ background: 'radial-gradient(circle, #5D00D6 0%, transparent 70%)' }}
    />

    <div className="relative z-10 container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <Globe size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Enterprise Infrastructure</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Enterprise IT & Telco — <span className="text-[#5D00D6]">Built for Scale, Control, and Reliability</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body mb-10 max-w-[530px]">
              We design and manage multi-site infrastructure with full visibility, security, and performance — without the complexity of multiple vendors.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-4">
              <a
                href="#consultation-section"
                onClick={(e) => { e.preventDefault(); document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group cursor-pointer whitespace-nowrap"
              >
                Talk to an Enterprise Specialist
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#consultation-section"
                onClick={(e) => { e.preventDefault(); document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#5D00D6] hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                Book a Consultation
              </a>
            </div>
            <p className="text-[14px] text-slate-500 ml-1">No obligation. Just clear, practical advice.</p>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="flex flex-wrap gap-6">
              {['Multi-Site Specialists', 'Carrier Neutral', 'Operational Control', '24/7 Support'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-slate-500 text-[14px] font-bold">
                  <CheckCircle size={16} className="text-[#5D00D6]" /> {t}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} className="relative hidden lg:block">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/80 aspect-[3/2] group">
            <img
              src="/images/greenfield_support.png"
              alt="C9 operational monitoring team"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/20 via-transparent to-transparent" />
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
  <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
           <div className="p-12 rounded-[32px] bg-white border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-bl-full" />
              <p className="c9-eyebrow text-rose-600 mb-6">Operational Risk</p>
              <h2 className="c9-section-heading mb-6">Managing Complex Environments Shouldn&apos;t Be This Hard</h2>
              <p className="c9-body text-slate-600 mb-0">
                Enterprise organisations often deal with fragmented systems, multiple vendors, inconsistent performance, and limited visibility across locations. This creates unnecessary risk, downtime, and operational inefficiencies.
              </p>
           </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="c9-eyebrow mb-4">The Solution</p>
          <h2 className="c9-section-heading mb-6">A Unified Approach to Enterprise IT</h2>
          <p className="c9-body text-slate-600">
            C9 brings your entire IT and communications environment together under a single, structured model — giving you control, consistency, and scalability across every site.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
             <div className="p-6 rounded-2xl bg-white border border-slate-100">
                <div className="text-[#5D00D6] mb-3"><Shield size={24} /></div>
                <div className="font-bold text-slate-900">Total Security</div>
             </div>
             <div className="p-6 rounded-2xl bg-white border border-slate-100">
                <div className="text-[#5D00D6] mb-3"><Activity size={24} /></div>
                <div className="font-bold text-slate-900">Full Visibility</div>
             </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — CAPABILITIES
   ───────────────────────────────────────────────────────── */
const capabilities = [
  {
    icon: <Globe size={20} />,
    title: 'Multi-Site Networking',
    desc: 'Standardised, high-performance networking across all locations — ensuring consistent experience for every user.',
  },
  {
    icon: <Network size={20} />,
    title: 'SD-WAN & Connectivity',
    desc: 'Optimised traffic routing and performance across distributed environments.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Security & Firewall',
    desc: 'Enterprise-grade protection across your entire infrastructure.',
  },
  {
    icon: <Phone size={20} />,
    title: 'Voice & Collaboration',
    desc: 'Unified communication systems for teams working across multiple locations.',
  },
  {
    icon: <Activity size={20} />,
    title: 'Managed Services',
    desc: 'Centralised monitoring, support, and management to maintain performance and reliability.',
  },
];

const Capabilities = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn className="text-center mb-16">
        <p className="c9-eyebrow mb-4">Scalability</p>
        <h2 className="c9-section-heading mb-6">Built for Scale and Operational Control</h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Visual Card */}
        <FadeIn className="hidden lg:block">
           <div className="relative h-full aspect-[4/3] lg:aspect-auto rounded-[24px] overflow-hidden shadow-sm border border-slate-100">
              <img src="/images/realistic_business_networking_rack_1776077491291.png" className="w-full h-full object-cover" alt="Enterprise network infrastructure" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/40 to-transparent" />
           </div>
        </FadeIn>

        {capabilities.map((cap, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="bg-slate-50 rounded-[24px] p-6 border border-slate-100 hover:shadow-lg hover:border-[#5D00D6]/25 hover:bg-white transition-all duration-300 h-full flex flex-col group">
              <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center mb-5 group-hover:bg-[#5D00D6]/15 transition-all text-[#5D00D6]">
                {cap.icon}
              </div>
              <h3 className="c9-card-title !text-[17px] mb-2">{cap.title}</h3>
              <p className="c9-body !text-[14px] !leading-relaxed text-slate-600">{cap.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4.1 — EXISTING ENVIRONMENT
   ───────────────────────────────────────────────────────── */
const IntegrationContent = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <p className="c9-eyebrow mb-4">Legacy Integration</p>
          <h2 className="c9-section-heading mb-6">We Work With Your Existing Environment — Not Against It</h2>
          <p className="c9-body text-slate-600 mb-6">
            Most enterprise environments already include multiple vendors, systems, and technologies.
          </p>
          <p className="c9-body text-slate-600 mb-6">
            C9 integrates into your existing setup without disruption. We take ownership of coordination, support, and performance — ensuring everything works together properly.
          </p>
          <p className="c9-body text-slate-600 mb-0 font-semibold italic">
            Instead of forcing change, we bring structure and control to what you already have.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
           <div className="relative rounded-[32px] overflow-hidden aspect-video lg:aspect-square bg-slate-50 shadow-xl">
              <img src="/images/greenfield_consultation.png" className="w-full h-full object-cover" alt="Enterprise architectural planning" />
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4.2 — SINGLE POINT OF CONTROL
   ───────────────────────────────────────────────────────── */
const OperationalControl = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
       <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn className="order-2 lg:order-1">
           <div className="relative rounded-[32px] overflow-hidden aspect-video lg:aspect-square bg-white shadow-xl">
              <img src="/images/c9_support_engineer.png" className="w-full h-full object-cover" alt="C9 operational control" />
           </div>
        </FadeIn>
        <FadeIn delay={0.1} className="order-1 lg:order-2">
          <p className="c9-eyebrow mb-4">Strategic Management</p>
          <h2 className="c9-section-heading mb-2">One Partner. Full Control.</h2>
          <p className="text-[14px] text-[#5D00D6] font-bold mb-6">Supporting multi-site environments with centralised control and visibility</p>
          <p className="c9-body text-slate-600 mb-6">
            C9 acts as your single point of control across your entire environment.
          </p>
          <p className="c9-body text-slate-600 mb-8">
            We manage your vendors, centralise support, and bring consistency across all locations — reducing complexity without disrupting operations.
          </p>
          <div className="space-y-4">
             {[
               'One point of contact for all vendors',
               'Centralised visibility and support',
               'Standardised systems across locations',
               'Reduced operational complexity over time'
             ].map((text, i) => (
               <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#5D00D6]" />
                  <span className="font-bold text-slate-800 text-[14px]">{text}</span>
               </div>
             ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — WHY C9
   ───────────────────────────────────────────────────────── */
const WhyC9 = () => (
  <section id="why-c9" className="py-16 lg:py-24 bg-[#0c1024] relative overflow-hidden">
    <div className="relative z-10 container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <FadeIn>
          <p className="c9-eyebrow !text-[#a56eff] mb-5">Enterprise Advantage</p>
          <h2 className="c9-section-heading !text-white mb-8">Why Enterprises Choose C9</h2>
          <div className="space-y-4">
            {[
              { title: 'Combined telco and MSP expertise in one partner' },
              { title: 'Carrier-neutral approach with no vendor lock-in' },
              { title: 'Best-of-breed technology ecosystem' },
              { title: 'Structured rollout and deployment model' },
              { title: 'Scalable long-term support' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl">
                 <CheckCircle className="text-[#a56eff] shrink-0" size={20} />
                 <span className="text-white/90 font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
           <div className="relative rounded-[32px] overflow-hidden aspect-square md:aspect-video lg:aspect-square bg-white/5 shadow-2xl">
              <img src="/images/greenfield_consultation.png" className="w-full h-full object-cover opacity-60" alt="Enterprise Consultation" />
              <div className="absolute inset-0 flex flex-col justify-center p-12 bg-gradient-to-t from-[#0c1024] to-transparent">
                 <div className="text-4xl font-extrabold text-white mb-4 leading-tight text-white/90">Reliability Measured in Uptime.</div>
                 <p className="text-white/50 c9-body">Built for continuous operations.</p>
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — PROCESS
   ───────────────────────────────────────────────────────── */
const Process = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn className="text-center mb-16">
        <p className="c9-eyebrow mb-4">Strategy</p>
        <h2 className="c9-section-heading mb-4">Structured Delivery at Scale</h2>
      </FadeIn>

      <div className="grid lg:grid-cols-4 gap-8">
        {[
          { num: '01', title: 'Assess your current environment' },
          { num: '02', title: 'Design the right architecture' },
          { num: '03', title: 'Implement across all locations' },
          { num: '04', title: 'Manage and continuously optimise' }
        ].map((step, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#5D00D6] text-white rounded-full flex items-center justify-center font-extrabold text-xl mb-6 shadow-lg shadow-purple-900/20">
                {step.num}
              </div>
              <h3 className="c9-card-title px-4">{step.title}</h3>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — TRUST
   ───────────────────────────────────────────────────────── */
const Trust = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 text-center" style={{ maxWidth: '1240px' }}>
      <FadeIn>
        <p className="c9-eyebrow mb-4">Experience</p>
        <h2 className="c9-section-heading mb-6">Built on Reliability and Service</h2>
        <p className="c9-body text-slate-600 mb-12">
          We focus on long-term partnerships, consistent delivery, and responsive support — ensuring your operations run without disruption.
        </p>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
              {[
                { name: 'Microsoft', src: '/partners/microsoft-logo-svgrepo-com.svg' },
                { name: 'Cisco', src: '/partners/ns/cisco.png' },
                { name: 'Fortinet', src: '/partners/ns/fortinet.png' },
                { name: 'HP', src: '/partners/Hewlett_Packard_Enterprise_logo.svg' },
                { name: 'Yealink', src: '/images/clients/yealink.png' }
              ].map((v, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-2xl px-4 py-4 md:px-6 flex flex-col items-center justify-center gap-4 hover:border-[#5D00D6]/25 hover:shadow-md transition-all h-36 group">
                   <img
                     src={v.src}
                     alt={v.name}
                     className="h-16 md:h-20 w-auto max-w-[160px] object-contain opacity-85 group-hover:opacity-100 transition-all duration-300"
                   />
                </div>
              ))}
           </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6.1 — HUMAN TRUST
   ───────────────────────────────────────────────────────── */
const HumanTrust = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
           <div className="relative rounded-[32px] overflow-hidden aspect-video lg:aspect-square shadow-2xl">
              <img src="/images/c9_support_engineer.png" className="w-full h-full object-cover" alt="Real C9 support engineers" />
           </div>
        </FadeIn>
        <FadeIn delay={0.1}>
           <p className="c9-eyebrow mb-4">Team Ownership</p>
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
  <section className="py-16 lg:py-24 bg-[#0c1024] relative overflow-hidden">
    <div className="relative z-10 container mx-auto px-6 md:px-8 text-center" style={{ maxWidth: '800px' }}>
      <FadeIn>
        <h2 className="c9-section-heading !text-white mb-6">Take Control of Your IT Environment</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="#consultation-section"
              onClick={(e) => { e.preventDefault(); document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/40 group"
            >
              Talk to an Enterprise Specialist
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#consultation-section"
              onClick={(e) => { e.preventDefault(); document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white rounded-full h-14 px-9 font-bold text-[14px] hover:bg-[#5D00D6] hover:text-white transition-all"
            >
              Book a Consultation
            </a>
        </div>
        <p className="text-[14px] text-white/50">No obligation. Just clear, practical advice.</p>
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
      <Capabilities />
      <WhyC9 />
      <IntegrationContent />
      <OperationalControl />
      <Process />
      <Trust />
      <HumanTrust />
      <TrustProofSystem 
        testimonials={[
          {
            quote: "C9 brought structure and control across our multi-site environment. We now have complete visibility.",
            author: "IT Manager"
          },
          {
            quote: "They took ownership of vendor coordination, which removed a huge operational burden for us.",
            author: "Head of Operations"
          }
        ]}
      />
      <FinalCTA />
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="ENTERPRISE STRATEGY"
          title="Ready to Scale?"
          description="Speak with our solutions architects to discuss standardisation, multi-site rollout viability, and long-term strategic technology management — no obligation, just clear, practical advice."
          formTitle="Talk to an IT Expert"
        />
      </section>
    </main>
  );
}
