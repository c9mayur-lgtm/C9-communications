'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, ShieldCheck, Zap, 
  Monitor, Lock, Cloud, PhoneCall,
  Users, ShieldAlert, Activity, Database, Server
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPERS
   ───────────────────────────────────────────────────────── */
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
  const y = direction === 'up' ? 24 : 0;
  const x = direction === 'left' ? -24 : direction === 'right' ? 24 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO
   ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-12 pb-0 lg:pt-20">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />
    
    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center pb-16 lg:pb-24">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <Activity size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Managed IT Services</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Take Full Control of Your IT — <span className="text-[#5D00D6]">Without Disrupting</span> Your Business
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-8 max-w-[580px]">
              We take over your existing IT systems, vendors, and infrastructure — and turn them into one fully managed, accountable environment.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {[
                'No-disruption transition approach',
                'One partner. Full accountability',
                '24/7 monitoring and support',
                'Built for growing, multi-site businesses'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#5D00D6] shrink-0" />
                  <span className="text-slate-700 font-bold text-[14px]">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
              >
                Book a Transition Assessment
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#takeover-process"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-9 font-bold text-[15px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white"
              >
                See How We Take Over Your IT
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group border-8 border-slate-50">
            <img
              src="/images/hero_business.png"
              alt="Safe IT infrastructure takeover"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/40 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/60 shadow-xl">
               <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Operational Takeover</span>
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[10px] uppercase tracking-wider">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Support
                  </span>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div>
                     <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Ownership</div>
                     <div className="text-[14px] font-extrabold text-slate-900 leading-none">Single Partner ✓</div>
                  </div>
                  <div>
                     <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Complexity</div>
                     <div className="text-[14px] font-extrabold text-slate-900 leading-none">Optimised</div>
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
   SECTION 2 — CURRENT STATE
   ───────────────────────────────────────────────────────── */
const SectionCurrentState = () => (
  <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">Your Current State</span>
          <h2 className="c9-section-heading mb-6">
            Most Growing Businesses Don’t Have an IT Problem — They Have a Control Problem
          </h2>
          <div className="bg-[#5D00D6]/5 border-l-4 border-[#5D00D6] p-6 rounded-r-2xl">
            <p className="text-[#0c1024] font-bold text-[18px]">
              &ldquo;This isn’t just inefficient — it’s operational risk.&rdquo;
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} direction="right" className="space-y-4">
          {[
            { title: 'Multiple vendors with no ownership', desc: 'Connectivity drops? Telco blame IT. Software fails? IT blame the ISP.' },
            { title: 'Systems that don’t integrate properly', desc: 'Manual workarounds and siloed data slowing down your team\'s output.' },
            { title: 'Reactive support when things break', desc: 'Waiting for something to fail before anyone takes action.' },
            { title: 'Rising costs with no visibility', desc: 'Surprise invoices from different vendors with no overall ROI.' },
            { title: 'Constant risk of downtime', desc: 'Unmonitored systems leading to critical business interruptions.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 flex gap-4 shadow-sm group hover:border-[#5D00D6]/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                <ShieldAlert size={20} className="text-rose-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-[15px] mb-1">{item.title}</h4>
                <p className="text-slate-500 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — THE SOLUTION
   ───────────────────────────────────────────────────────── */
const SectionSolution = () => (
  <section className="py-20 lg:py-24 bg-white">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">The Solution</span>
        <h2 className="c9-section-heading mb-4">One Partner. Total Ownership of Your IT Environment.</h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <Server />, title: 'Managed IT Infrastructure', desc: 'We manage your entire IT environment — servers, networks, systems, and performance.' },
          { icon: <Users />, title: 'End-User & Device Management', desc: 'From desktops to mobile devices, everything is monitored, secured, and supported.' },
          { icon: <Cloud />, title: 'Cloud & Workplace Systems', desc: 'We manage your business applications, cloud platforms, and collaboration tools.' },
          { icon: <Lock />, title: 'Integrated Security Layer', desc: 'Security is built into everything — not added later.' },
          { icon: <ShieldCheck />, title: '24/7 Monitoring & Support', desc: 'Issues are identified and resolved before they impact your business.' },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.05} className="bg-slate-50 border border-slate-100 p-8 rounded-[32px] hover:bg-white hover:border-[#5D00D6]/20 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-6 transform group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="c9-card-title mb-3">{item.title}</h3>
            <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — CORE DIFFERENTIATOR
   ───────────────────────────────────────────────────────── */
const SectionProcess = () => (
  <section id="takeover-process" className="py-20 lg:py-24 bg-[#0c1024] text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow !text-[#a56eff] mb-4">Core Differentiator</span>
          <h2 className="c9-section-heading !text-white mb-6">
            How We Take Over Your Existing IT — Without Breaking Anything
          </h2>
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">
             <div className="w-10 h-10 rounded-full bg-[#5D00D6] flex items-center justify-center shrink-0">
                <CheckCircle size={20} className="text-white" />
             </div>
             <p className="text-[14px] font-bold">100% Transition Accountability — No Downtime</p>
          </div>
        </FadeIn>

        <div className="relative space-y-8">
          <div className="absolute top-0 left-8 md:left-[36px] bottom-0 w-1 bg-white/5" />
          {[
            { step: '01', title: 'Audit & Discovery', desc: 'We map your entire environment — systems, vendors, risks, and dependencies.' },
            { step: '02', title: 'Stabilisation', desc: 'We fix critical vulnerabilities before making any major changes.' },
            { step: '03', title: 'Parallel Transition', desc: 'New systems are implemented alongside your existing setup to avoid disruption.' },
            { step: '04', title: 'Controlled Takeover', desc: 'We transition control in a structured, low-risk manner.' },
            { step: '05', title: 'Ongoing Optimisation', desc: 'We continuously improve performance, cost efficiency, and security.' },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="right" className="relative pl-20 md:pl-[100px]">
              <div className="absolute left-0 top-0 w-[56px] h-[56px] md:w-[72px] md:h-[72px] rounded-[20px] bg-[#5D00D6] text-white flex items-center justify-center text-xl md:text-2xl font-black shadow-lg shadow-purple-900/50 z-10 border-4 border-[#0c1024]">
                {s.step}
              </div>
              <h4 className="c9-card-title !text-white mb-2">{s.title}</h4>
              <p className="text-white/50 text-[14px] leading-relaxed">{s.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — RISK REVERSAL
   ───────────────────────────────────────────────────────── */
const SectionSafety = () => (
   <section className="py-20 lg:py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className={C}>
         <div className="bg-[#5D00D6] rounded-[48px] p-10 lg:p-20 relative overflow-hidden shadow-2xl shadow-purple-900/40">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.05] rounded-full blur-[100px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white opacity-[0.05] rounded-full blur-[80px] -ml-32 -mb-32" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center text-white">
               <div>
                  <span className="c9-eyebrow !text-white mb-4">Risk Reversal</span>
                  <h2 className="c9-section-heading !text-white mb-6">Designed to Reduce Risk — Not Add to It</h2>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/20 mt-8">
                     <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                        <Lock size={20} className="text-white" />
                     </div>
                     <div>
                        <p className="font-bold text-[16px] text-white">No-disruption transition methodology</p>
                     </div>
                  </div>
               </div>
               
               <div className="grid grid-cols-1 gap-4">
                  {[
                     { title: 'Full visibility during every stage', desc: 'You are kept informed at every step of the transition.' },
                     { title: 'Defined ownership and escalation paths', desc: 'Clear lines of accountability for every system.' },
                     { title: 'Proactive monitoring to prevent issues', desc: 'Identifying problems before they cause downtime.' },
                     { title: 'Structured delivery framework', desc: 'Proven process that eliminates guesswork.' },
                  ].map((p, i) => (
                     <FadeIn key={i} delay={i * 0.08} direction="right" className="bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-2xl flex items-center gap-4">
                        <CheckCircle size={24} className="text-white shrink-0" />
                        <div>
                           <p className="font-bold text-[16px] text-white">{p.title}</p>
                           <p className="text-white/80 text-[13px]">{p.desc}</p>
                        </div>
                     </FadeIn>
                  ))}
               </div>
            </div>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — BEFORE VS AFTER
   ───────────────────────────────────────────────────────── */
const SectionComparison = () => (
  <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <h2 className="c9-section-heading">From IT Chaos to Complete Control</h2>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[40px] overflow-hidden shadow-2xl border border-slate-200">
        <div className="bg-white p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-slate-100 relative">
          <div className="absolute top-8 right-8 text-rose-500 opacity-20"><ShieldAlert size={64} /></div>
          <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-3 uppercase tracking-tighter">
             <span className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 text-[14px]">X</span>
             Before
          </h3>
          <ul className="space-y-8">
            {[
              'Multiple vendors',
              'No clear accountability',
              'Reactive support',
              'Unpredictable costs',
              'Security gaps',
            ].map((p, i) => (
              <li key={i} className="flex gap-4">
                <div className="mt-1"><ArrowRight size={16} className="text-slate-400" /></div>
                <p className="font-bold text-slate-900 text-[17px] mb-1">{p}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#0c1024] p-10 lg:p-14 relative">
          <div className="absolute top-8 right-8 text-[#5D00D6] opacity-30"><CheckCircle size={64} /></div>
          <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-3 uppercase tracking-tighter">
             <span className="w-9 h-9 rounded-full bg-[#5D00D6] flex items-center justify-center text-white text-[14px]">✓</span>
             After
          </h3>
          <ul className="space-y-8 text-white">
            {[
              'Single partner',
              'Full ownership',
              'Proactive management',
              'Predictable costs',
              'Integrated security',
            ].map((p, i) => (
              <li key={i} className="flex gap-4">
                <div className="mt-1"><ArrowRight size={16} className="text-[#a56eff]" /></div>
                <p className="font-bold text-white text-[17px] mb-1">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — SUPPORT & SLA
   ───────────────────────────────────────────────────────── */
const SectionSupportSLA = () => (
   <section className="py-20 lg:py-24 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <FadeIn direction="left">
               <h2 className="c9-section-heading mb-6">24/7 Support with Defined Accountability</h2>
               <div className="space-y-4 mb-10">
                  {[
                     'Continuous monitoring across all systems',
                     'Rapid response to critical issues',
                     'Structured escalation process',
                     'Dedicated support model',
                  ].map((item) => (
                     <div key={item} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-[#5D00D6] shrink-0" />
                        <span className="text-slate-900 font-bold text-[15px]">{item}</span>
                     </div>
                  ))}
               </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
               <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                  <img src="/images/c9_support_engineer.png" alt="C9 Support Team" className="w-full h-full object-cover aspect-[4/5]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/80 via-transparent to-transparent flex items-bottom p-10">
                     <div className="mt-auto">
                        <div className="text-[#a56eff] font-black text-4xl mb-2">24/7</div>
                        <p className="text-white font-bold text-xl leading-snug">Accountable support whenever you need it.</p>
                     </div>
                  </div>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — SECURITY
   ───────────────────────────────────────────────────────── */
const SectionCybersecurity = () => (
   <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <h2 className="c9-section-heading">Security Embedded Across Your Entire IT Environment</h2>
            </FadeIn>
         </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               { icon: <Lock />, title: 'Endpoint Protection' },
               { icon: <Activity />, title: 'Network-Level Security' },
               { icon: <Cloud />, title: 'Continuous Monitoring' },
               { icon: <Database />, title: 'Backup & Recovery Readiness' },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center group hover:border-[#5D00D6]/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mx-auto mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                  <h4 className="c9-card-title mb-0">{s.title}</h4>
               </FadeIn>
            ))}
         </div>
         <FadeIn className="mt-12 text-center" delay={0.4}>
            <p className="text-slate-900 font-bold text-[18px]">Designed to ensure complete business continuity.</p>
         </FadeIn>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 10 — PERSONA BLOCKS
   ───────────────────────────────────────────────────────── */
const SectionPersonas = () => (
   <section className="py-20 lg:py-24 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn className="bg-slate-50 border border-slate-100 p-10 rounded-[32px]">
               <h3 className="text-xl font-bold mb-4">For New Sites</h3>
               <p className="text-slate-600 text-[15px] leading-relaxed">
                  We design and deploy complete IT environments for new locations — ready from day one.
               </p>
            </FadeIn>
            <FadeIn delay={0.1} className="bg-slate-50 border border-slate-100 p-10 rounded-[32px]">
               <h3 className="text-xl font-bold mb-4">For Multi-Site / Enterprise</h3>
               <p className="text-slate-600 text-[15px] leading-relaxed">
                  We centralise and standardise IT across multiple locations with full visibility and control.
               </p>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 11 — FINAL CTA
   ───────────────────────────────────────────────────────── */
const SectionFinalCTA = () => (
   <section className="py-20 xl:py-32 bg-slate-50 border-t border-slate-100">
      <div className={`${C} text-center`}>
         <FadeIn>
            <h2 className="c9-section-heading mb-8 md:!text-5xl lg:!text-6xl max-w-4xl mx-auto">
               Let’s Take Control of Your IT — Safely
            </h2>
            <p className="c9-body mb-12 max-w-2xl mx-auto text-lg md:text-xl">
               We’ll assess your current environment and show you exactly how we would take over — step-by-step, without disruption.
            </p>
            <div className="flex justify-center items-center">
               <a
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-16 px-12 font-extrabold text-[17px] hover:bg-[#4d00b3] transition-all shadow-2xl shadow-purple-900/30 group w-full sm:w-auto"
               >
                  Book Your Transition Assessment
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
               </a>
            </div>
         </FadeIn>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function ManagedITPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionCurrentState />
      <SectionSolution />
      <SectionProcess />
      
      {/* SECTION 5: PROOF */}
      <WpCaseStudies 
        eyebrow="PROVEN RESULTS"
        title="Proven Results for Businesses Like Yours"
        articles={[
          {
            tag: 'VENDOR CONSOLIDATION',
            title: '4+ Vendors Consolidated into One',
            videoText: 'Vendor Consolidation',
            desc: 'Consolidated 4+ vendors into a single managed partner. Delivered zero downtime during transition.',
            img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
            href: '#'
          },
          {
            tag: 'UPTIME & RESPONSE',
            title: 'Increased System Uptime to 99.9%',
            videoText: 'Uptime & Response',
            desc: 'Improved response times by over 60% and increased overall system uptime to 99.9% for a growing multi-site business.',
            img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
            href: '#'
          }
        ]}
      />

      <SectionSafety />
      <SectionComparison />
      <SectionSupportSLA />
      <SectionCybersecurity />
      <SectionPersonas />
      <SectionFinalCTA />

      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="TAKE CONTROL"
          title="Book Your Transition Assessment"
          description="We'll assess your current environment and show you exactly how we would take over — step-by-step, without disruption."
          formTitle="Start My Assessment"
        />
      </section>
    </main>
  );
}
