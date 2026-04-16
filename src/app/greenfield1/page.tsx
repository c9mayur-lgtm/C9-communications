'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Wifi, Phone, Monitor, Shield,
  HeadphonesIcon, Building2, Zap, Layers, Network,
  ShoppingBag, Stethoscope, Briefcase, MapPin, Users,
  Clock, AlertCircle
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
    viewport={{ once: true, margin: '-40px' }}
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
  <section className="relative overflow-hidden bg-white pt-6 pb-16 lg:pt-10 lg:pb-24">
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
              <Zap size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">New Office IT & Telco</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Opening a New Office? <span className="text-[#5D00D6]">We Handle Your Entire IT & Telco Setup</span> — End to End.
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body mb-10 max-w-[530px]">
              No multiple vendors. No delays. No guesswork. We design, deploy, and support everything — so your business is ready from day one.
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
                Get My Office Setup Plan{' '}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#consultation-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-all"
              >
                Talk to a Setup Specialist
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="flex flex-wrap gap-6 mt-10">
              {['One Partner', 'Day One Ready', 'Zero Coordination', 'No Delays'].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-slate-500 text-[13px] font-semibold">
                  <CheckCircle size={15} className="text-[#5D00D6]" /> {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} className="relative hidden lg:block">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/80 aspect-[4/3] group">
            <img
              src="/images/greenfield_hero.png"
              alt="New office setup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/20 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg border border-white/60">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#5D00D6] mb-1">Status</div>
              <div className="text-[18px] font-bold text-slate-900 leading-tight">Ready for Day One</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — SCENARIO
   ───────────────────────────────────────────────────────── */
const ScenarioBlock = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <FadeIn>
          <p className="c9-eyebrow mb-4">Start Strong</p>
          <h2 className="c9-section-heading mb-6">Built for Businesses Starting Fresh</h2>
          <p className="c9-body text-balance">
            Setting up a new office or location shouldn’t mean managing multiple vendors, timelines, and technical decisions. 
            C9 simplifies the entire process by handling everything — from planning and procurement to deployment and ongoing support.
          </p>
        </FadeIn>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Building2 />, title: 'Opening a New Office' },
          { icon: <TrendingUp />, title: 'Expanding into New Locations' },
          { icon: <MapPin />, title: 'Relocating Operations' },
          { icon: <Users />, title: 'Launching Without Internal IT' }
        ].map((s, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center text-[#5D00D6] mb-5">
                {s.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-[16px]">{s.title}</h3>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const TrendingUp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — CORE OFFERING
   ───────────────────────────────────────────────────────── */
const offerings = [
  {
    icon: <Wifi size={24} className="text-[#5D00D6]" />,
    title: 'Internet & Connectivity',
    desc: 'Business-grade internet designed, delivered, and ready before your team walks in — with performance built for growth.',
  },
  {
    icon: <Phone size={24} className="text-[#5D00D6]" />,
    title: 'Voice & Communication',
    desc: 'Modern phone systems that keep your team connected across devices, locations, and workflows.',
  },
  {
    icon: <Network size={24} className="text-[#5D00D6]" />,
    title: 'Network & Wi-Fi',
    desc: 'Secure, high-performance networks designed for reliability, coverage, and scalability from day one.',
  },
  {
    icon: <Shield size={24} className="text-[#5D00D6]" />,
    title: 'Security & Firewall',
    desc: 'Enterprise-grade protection built into your environment from the start — not added later.',
  },
  {
    icon: <HeadphonesIcon size={24} className="text-[#5D00D6]" />,
    title: 'Managed Support',
    desc: 'Ongoing monitoring and responsive support so you never have to deal with IT issues yourself.',
  },
  {
    icon: <Monitor size={24} className="text-[#5D00D6]" />,
    title: 'Hardware & Devices',
    desc: 'Sourced, configured, and deployed as part of your complete environment — ready to use.',
  },
];

const CoreOffering = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn>
        <div className="text-center mb-16">
          <p className="c9-eyebrow mb-4">Core Offering</p>
          <h2 className="c9-section-heading mb-6">Everything You Need — Delivered as One Complete Solution</h2>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offerings.map((o, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:border-[#5D00D6]/25 hover:bg-white transition-all duration-300 group h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center mb-6 group-hover:bg-[#5D00D6]/15 transition-colors shrink-0">
                {o.icon}
              </div>
              <h3 className="c9-card-title mb-3">{o.title}</h3>
              <p className="c9-body mt-auto !text-[15px] !leading-relaxed text-slate-600">{o.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — DIFFERENTIATOR
   ───────────────────────────────────────────────────────── */
const Differentiator = () => (
  <section className="py-16 lg:py-24 bg-[#0c1024] relative overflow-hidden">
    <div className="relative z-10 container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <FadeIn>
          <p className="c9-eyebrow !text-[#a56eff] mb-5">Single Accountability</p>
          <h2 className="c9-section-heading !text-white mb-8">One Partner. Zero Complexity.</h2>
          <p className="c9-body !text-white/70 mb-8 max-w-[540px]">
            Instead of juggling multiple providers, C9 becomes your single point of accountability. 
            We handle design, delivery, and support — ensuring everything works together seamlessly.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              'Faster deployment with fewer delays',
              'No vendor coordination headaches',
              'A system designed to scale with your business',
              'Complete ownership from start to finish'
            ].map((p, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-[#a56eff]" />
                <span className="text-white/85 font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.12} className="relative">
           <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 border-b border-r border-white/10">
                   <div className="text-4xl font-extrabold text-[#5D00D6] mb-2">100%</div>
                   <div className="text-white/50 text-[11px] font-bold uppercase tracking-widest text-balance">Ownership</div>
                </div>
                <div className="text-center p-6 border-b border-white/10">
                   <div className="text-4xl font-extrabold text-[#5D00D6] mb-2">0</div>
                   <div className="text-white/50 text-[11px] font-bold uppercase tracking-widest text-balance">Delays</div>
                </div>
                <div className="text-center p-6 border-r border-white/10">
                   <div className="text-4xl font-extrabold text-[#5D00D6] mb-2">1</div>
                   <div className="text-white/50 text-[11px] font-bold uppercase tracking-widest text-balance">Invoice</div>
                </div>
                <div className="text-center p-6">
                   <div className="text-4xl font-extrabold text-[#5D00D6] mb-2">24/7</div>
                   <div className="text-white/50 text-[11px] font-bold uppercase tracking-widest text-balance">Support</div>
                </div>
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — ANXIETY REMOVAL
   ───────────────────────────────────────────────────────── */
const AnxietyRemoval = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100 overflow-hidden">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn className="relative">
           <div className="w-full aspect-square md:aspect-[4/3] rounded-[32px] bg-slate-100 overflow-hidden shadow-xl">
             <img src="/images/greenfield_support.png" className="w-full h-full object-cover" alt="Setup planning" />
           </div>
           <div className="absolute top-6 right-6 bg-rose-500 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <Clock size={24} />
              <div className="text-[14px] font-bold leading-tight">Ready Before<br/> Day One</div>
           </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="c9-eyebrow text-rose-600 mb-4">Peace of Mind</p>
          <h2 className="c9-section-heading mb-6">No Delays. No Confusion. No Last-Minute Issues.</h2>
          <p className="c9-body mb-6">
            We coordinate everything behind the scenes — so you don’t have to chase vendors, manage timelines, or deal with technical complexity.
          </p>
          <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex gap-4 items-start mb-6">
             <AlertCircle className="text-rose-500 mt-1 shrink-0" size={20} />
             <p className="c9-body !text-[15px] !mb-0 font-medium">Your entire environment is tested, ready, and operational before your business opens.</p>
          </div>
          <h3 className="text-[20px] font-bold text-slate-900 mb-4">Ready Before Day One</h3>
          <p className="c9-body">
            Our structured approach ensures your internet, phones, and systems are fully operational before your team walks in. No last-minute surprises. No downtime at launch.
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — VENDOR TRUST
   ───────────────────────────────────────────────────────── */
const VendorTrust = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn className="text-center mb-16">
        <p className="c9-eyebrow mb-4">Technology Partners</p>
        <h2 className="c9-section-heading mb-6">Powered by Enterprise-Grade Technology</h2>
        <p className="c9-body max-w-2xl mx-auto">
          We work with leading technology partners across networking, security, and communications to deliver reliable, scalable environments — without locking you into a single vendor.
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { name: 'Microsoft', src: '/partners/microsoft-logo-svgrepo-com.svg' },
          { name: 'Cisco', src: '/partners/ns/cisco.png' },
          { name: 'Fortinet', src: '/partners/ns/fortinet.png' },
          { name: 'Dell Technologies', src: '/partners/Dell_Technologies_logo.svg' }
        ].map((v, i) => (
          <FadeIn key={i} delay={i * 0.1}>
             <div className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 h-44 group hover:border-[#5D00D6]/20 transition-all shadow-sm">
                <img 
                  src={v.src} 
                  className="h-20 md:h-24 w-auto max-w-[140px] object-contain opacity-80 group-hover:opacity-100 transition-all" 
                  alt={v.name} 
                />
             </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — FINAL CTA
   ───────────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="py-16 lg:py-24 bg-[#0c1024] relative overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-[0.1]" style={{ background: 'radial-gradient(circle at center, #5D00D6, transparent)' }} />
    <div className="relative z-10 container mx-auto px-6 md:px-8 text-center" style={{ maxWidth: ' seasonal-content' }}>
      <FadeIn>
        <h2 className="c9-section-heading !text-white mb-6">Let&apos;s Plan Your New Office Setup</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#consultation-section"
              onClick={(e) => { e.preventDefault(); document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/40 group"
            >
              Book a Greenfield Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#consultation-section"
              onClick={(e) => { e.preventDefault(); document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-all"
            >
              Get My Setup Plan
            </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function Greenfield1Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <ScenarioBlock />
      <CoreOffering />
      <Differentiator />
      <AnxietyRemoval />
      <VendorTrust />
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="GREENFIELD OFFICE SETUP"
          title="Ready to Start Fresh?"
          description="Book your consultation today and we'll help you plan every detail of your new office technology."
          formTitle="Book Workspace Planning"
        />
      </section>
    </main>
  );
}
