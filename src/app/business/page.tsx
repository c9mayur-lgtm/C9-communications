'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, ShieldCheck, Zap, 
  HelpCircle, Clock, Search, Handshake, 
  Target, Monitor, Lock, Cloud, PhoneCall,
  Users, MessageSquare, AlertCircle, AlertTriangle, ChevronRight, Activity, Database, ShieldAlert
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { WpSupport } from '@/components/wordpress/WpSupport';

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
   SECTION 1 — HERO (TAKEOVER FOCUS)
   ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-12 pb-0 lg:pt-20">
    {/* Subtle grid background */}
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
              <span className="c9-eyebrow !mb-0">Managed IT Takeover Specialists</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Take Control of Your IT & Telco — <span className="text-[#5D00D6]">Without Disrupting</span> Your Business
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-8 max-w-[580px]">
              We safely take over your existing systems, vendors, and infrastructure — and turn it into one accountable, fully managed environment.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {[
                'Zero-disruption transition approach',
                'One partner. Full accountability',
                'IT, Telco, Security — fully integrated',
                '24/7 support and monitoring'
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
                See How We Take Over
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
            
            {/* Live Status Overlay */}
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
   SECTION 2 — THE PROBLEM (PAIN AGITATION)
   ───────────────────────────────────────────────────────── */
const SectionProblem = () => (
  <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">Your Current State</span>
          <h2 className="c9-section-heading mb-6">
            Why Most Growing Businesses Get Stuck with IT Chaos
          </h2>
          <p className="c9-body mb-8 text-slate-600">
            Fragmentation isn&apos;t just annoying—it&apos;s a bottleneck that prevents your business from scaling efficiently.
          </p>
          <div className="bg-[#5D00D6]/5 border-l-4 border-[#5D00D6] p-6 rounded-r-2xl">
            <p className="text-[#0c1024] font-bold text-[18px]">
              &ldquo;This isn&apos;t an IT problem. It&apos;s an operational risk.&rdquo;
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} direction="right" className="space-y-4">
          {[
            { title: 'Multiple vendors blaming each other', desc: 'Connectivity drops? Telco blame IT. Software fails? IT blame the ISP.' },
            { title: 'No clear ownership when issues happen', desc: 'When systems go dark, you are the one stuck coordinating five different phone numbers.' },
            { title: 'Systems that don’t integrate properly', desc: 'Manual workarounds and siloed data slowing down your team&apos;s output.' },
            { title: 'Rising costs with no visibility', desc: 'Surprise invoices from different vendors with no overall ROI on your spend.' },
            { title: 'Reactive support instead of proactive management', desc: 'Waiting for something to break before anyone picks up the phone.' },
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
   SECTION 3 — THE SOLUTION (FULL OWNERSHIP)
   ───────────────────────────────────────────────────────── */
const SectionSolution = () => (
  <section className="py-20 lg:py-24 bg-white">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">The Solution Model</span>
        <h2 className="c9-section-heading mb-4">One Partner. Total Ownership.</h2>
        <p className="c9-body max-w-2xl mx-auto">
          We eliminate vendor coordination by becoming your single operational partner for every technical touchpoint in your business.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <Monitor />, title: 'Managed IT Infrastructure', desc: 'We own the performance, uptime, and evolution of your entire hardware and software stack.' },
          { icon: <Zap />, title: 'Business Telco & Connectivity', desc: 'Enterprise-grade internet and voice managed under one SLA with zero finger-pointing.' },
          { icon: <Lock />, title: 'Cybersecurity & Compliance', desc: 'Security integrated into your core environment, protecting your data and your reputation.' },
          { icon: <Users />, title: 'End-User & Device Management', desc: 'Your team gets hardware that works and instant support when they need it, so they can focus on their roles.' },
          { icon: <ShieldCheck />, title: 'Proactive Monitoring', desc: 'We catch system failures before they impact your operations, ensuring total business continuity.' },
          { icon: <PhoneCall />, title: 'Dedicated Support Model', desc: 'A local Australian team that knows your business, your systems, and your specific requirements.' },
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
   SECTION 4 — CORE DIFFERENTIATOR (TAKEOVER PROCESS)
   ───────────────────────────────────────────────────────── */
const SectionProcess = () => (
  <section id="takeover-process" className="py-20 lg:py-24 bg-[#0c1024] text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow !text-[#a56eff] mb-4">Our Methodology</span>
          <h2 className="c9-section-heading !text-white mb-6">
            How We Take Over Your Existing Environment — Safely
          </h2>
          <p className="text-white/70 text-[18px] mb-10 max-w-xl">
             Switching shouldn&apos;t be a risk. We use a structured 5-phase transition model designed to protect your business while we migrate control.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">
             <div className="w-10 h-10 rounded-full bg-[#5D00D6] flex items-center justify-center shrink-0">
                <CheckCircle size={20} className="text-white" />
             </div>
             <p className="text-[14px] font-bold">100% Transition Accountability — No Downtime Guarantee</p>
          </div>
        </FadeIn>

        <div className="relative space-y-8">
          {/* Connector Line */}
          <div className="absolute top-0 left-8 md:left-[36px] bottom-0 w-1 bg-white/5" />
          
          {[
            { step: '01', title: 'Audit & Discovery', desc: 'We map your entire environment, vendors, risks, and dependencies to ensure zero blind spots.' },
            { step: '02', title: 'Stabilisation Phase', desc: 'We fix critical security and operational risks before we make any architectural changes.' },
            { step: '03', title: 'Parallel Transition', desc: 'We implement new systems alongside your current setup to validate performance with no disruption.' },
            { step: '04', title: 'Controlled Takeover', desc: 'We migrate management control in a phased, low-impact window with zero operational impact.' },
            { step: '05', title: 'Ongoing Optimisation', desc: 'We continuously monitor and improve your performance, cost efficiency, and security posture.' },
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
   SECTION 5 — PROOF (OUTCOMES)
   ───────────────────────────────────────────────────────── */
const SectionProof = () => (
  <section className="py-20 lg:py-24 bg-white">
    <div className={C}>
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">Proven Results</span>
          <h2 className="c9-section-heading mb-6">Real Business Outcomes</h2>
          <p className="c9-body mb-8">
            We don&apos;t just deliver IT reports; we deliver measurable operational improvements that help your business scale.
          </p>
          
          <div className="space-y-4">
             {[
               { stat: '4 → 1', label: 'Vendor Consolidation' },
               { stat: '99.9%', label: 'Systems Uptime Achieved' },
               { stat: 'Zero', label: 'Downtime During Transition' },
               { stat: '60%', label: 'Improvement in Response Time' },
             ].map((m, i) => (
               <div key={i} className="flex items-center gap-5 border-b border-slate-100 pb-4">
                  <span className="text-3xl font-black text-[#5D00D6] w-24 shrink-0">{m.stat}</span>
                  <span className="text-slate-600 font-bold uppercase tracking-widest text-[11px]">{m.label}</span>
               </div>
             ))}
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.1} className="bg-slate-50 rounded-[40px] p-8 lg:p-12 relative overflow-hidden flex flex-col items-center text-center">
           <div className="mb-8">
              <span className="font-black text-slate-200 text-7xl uppercase tracking-tighter opacity-70">CASE STUDY</span>
           </div>
           <h3 className="text-2xl font-black text-slate-900 mb-6 max-w-md">Multi-Site Network Consolidation for National Logistics Hub</h3>
           <p className="text-slate-500 text-[15px] leading-relaxed mb-10 max-w-lg">
             Successfully migrated 5 regional sites from fragmented ISPs and managed vendors into a single controlled network architecture in under 3 weeks.
           </p>
           <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-5 py-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Result</div>
                 <div className="text-[15px] font-extrabold text-[#5D00D6]">32% Cost Reduction</div>
              </div>
              <div className="px-5 py-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Support</div>
                 <div className="text-[15px] font-extrabold text-[#5D00D6]">Single Accountability</div>
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — RISK REVERSAL (SAFETY FOCUS)
   ───────────────────────────────────────────────────────── */
const SectionSafety = () => (
   <section className="py-20 lg:py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className={C}>
         <div className="bg-[#5D00D6] rounded-[48px] p-10 lg:p-20 relative overflow-hidden shadow-2xl shadow-purple-900/40">
            {/* Visual background accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.05] rounded-full blur-[100px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white opacity-[0.05] rounded-full blur-[80px] -ml-32 -mb-32" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center text-white">
               <div>
                  <span className="c9-eyebrow !text-white mb-4">Risk Reversal</span>
                  <h2 className="c9-section-heading !text-white mb-6">No-Disruption Transition. Fully Accountable Delivery.</h2>
                  <p className="text-white text-[18px] mb-8 leading-relaxed">
                     We understand that the biggest fear of switching is what might break. Our entire model is engineered to remove that uncertainty.
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                     <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                        <Lock size={20} className="text-white" />
                     </div>
                     <div>
                        <p className="font-bold text-[16px] text-white">Backed by structured delivery model</p>
                        <p className="text-white/80 text-[13px]">Full visibility during takeover</p>
                     </div>
                  </div>
               </div>
               
               <div className="grid grid-cols-1 gap-4">
                  {[
                     { title: 'Downtime avoidance', desc: 'Transition protocols designed to keep operations live.' },
                     { title: 'No single point of failure', desc: 'Redundant configurations implemented from day one.' },
                     { title: 'Defined escalation', desc: 'Transparent ownership structure for every issue.' },
                     { title: 'Audit-first approach', desc: 'We fix the risks before we make the changes.' },
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
   SECTION 7 — BEFORE VS AFTER (COMPARISON)
   ───────────────────────────────────────────────────────── */
const SectionComparison = () => (
  <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">Visual Clarity</span>
        <h2 className="c9-section-heading">From Vendor Chaos to Operational Control</h2>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[40px] overflow-hidden shadow-2xl border border-slate-200">
        <div className="bg-white p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-slate-100 relative">
          <div className="absolute top-8 right-8 text-rose-500 opacity-20"><ShieldAlert size={64} /></div>
          <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-3 uppercase tracking-tighter">
             <span className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 text-[14px]">X</span>
             Before C9
          </h3>
          <ul className="space-y-8">
            {[
              { title: 'Multiple vendors', desc: 'Too many contacts, too many bills, zero coordination.' },
              { title: 'No ownership', desc: 'Finger-pointing and blame when systems go down.' },
              { title: 'Reactive fixes', desc: 'Running from one fire to another with no strategy.' },
              { title: 'Unpredictable costs', desc: 'Random invoices and massive emergency repair bills.' },
              { title: 'Security gaps', desc: 'Unmonitored systems and fragmented protection protocols.' },
            ].map((p, i) => (
              <li key={i} className="flex gap-4">
                <div className="mt-1"><ArrowRight size={16} className="text-slate-400" /></div>
                <div>
                  <p className="font-bold text-slate-900 text-[17px] mb-1">{p.title}</p>
                  <p className="text-slate-600 text-[14px] leading-relaxed">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#0c1024] p-10 lg:p-14 relative">
          <div className="absolute top-8 right-8 text-[#5D00D6] opacity-30"><CheckCircle size={64} /></div>
          <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-3 uppercase tracking-tighter">
             <span className="w-9 h-9 rounded-full bg-[#5D00D6] flex items-center justify-center text-white text-[14px]">✓</span>
             After C9
          </h3>
          <ul className="space-y-8 text-white">
            {[
              { title: 'Single partner', desc: 'One accountable touchpoint for your entire IT & telco environment.' },
              { title: 'Full accountability', desc: 'The buck stops with us. Every issue, every system, every time.' },
              { title: 'Proactive management', desc: 'Monitoring systems 24/7 to catch issues before they impact you.' },
              { title: 'Predictable cost model', desc: 'One flat, transparent monthly investment with no surprises.' },
              { title: 'Integrated security', desc: 'Enterprise-grade protection baked into your core infrastructure.' },
            ].map((p, i) => (
              <li key={i} className="flex gap-4">
                <div className="mt-1"><ArrowRight size={16} className="text-[#a56eff]" /></div>
                <div>
                  <p className="font-bold text-white text-[17px] mb-1">{p.title}</p>
                  <p className="text-white/80 text-[14px] leading-relaxed">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — SUPPORT & SLA (REUSE REASSURANCE)
   ───────────────────────────────────────────────────────── */
const SectionSupportSLA = () => (
   <section className="py-20 lg:py-24 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Reliability as a Service</span>
               <h2 className="c9-section-heading mb-6">24/7 Support with Defined Response Times</h2>
               <p className="c9-body mb-8">
                  We provide structured support delivered by local specialists. You never have to wait days for an answer or manage a ticket queue yourself.
               </p>
               <div className="space-y-4 mb-10">
                  {[
                     'Proactive 24/7 system monitoring',
                     'Guaranteed technical response SLAs',
                     'Transparent escalation hierarchy',
                     'Dedicated support relationship model',
                  ].map((item) => (
                     <div key={item} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-[#5D00D6] shrink-0" />
                        <span className="text-slate-900 font-bold text-[15px]">{item}</span>
                     </div>
                  ))}
               </div>
               <div className="flex gap-4">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center grow">
                     <span className="text-3xl font-black text-[#5D00D6] mb-1">15m</span>
                     <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Critical SLA</span>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center grow">
                     <span className="text-3xl font-black text-[#5D00D6] mb-1">60s</span>
                     <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Phone Answer</span>
                  </div>
               </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.1}>
               {/* Reusing existing WpSupport structure conceptually */}
               <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                  <img src="/images/c9_support_engineer.png" alt="C9 Support Team" className="w-full h-full object-cover aspect-[4/5]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/80 via-transparent to-transparent flex items-bottom p-10">
                     <div className="mt-auto">
                        <div className="text-[#a56eff] font-black text-4xl mb-2">24/7</div>
                        <p className="text-white font-bold text-xl leading-snug">Continuous Management of Your Entire Infrastructure.</p>
                     </div>
                  </div>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — CYBERSECURITY (INTEGRATED)
   ───────────────────────────────────────────────────────── */
const SectionCybersecurity = () => (
   <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Inherent Security</span>
               <h2 className="c9-section-heading">Security Built Into Everything — Not Added Later</h2>
               <p className="c9-body mt-6">
                  Cybersecurity is no longer an optional add-on for small businesses. It is an operational requirement for continuity.
               </p>
            </FadeIn>
         </div>
         
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               { icon: <Lock />, title: 'Endpoint Protection', desc: 'Secure management of every device that accesses your business data.' },
               { icon: <Activity />, title: 'Network Security', desc: 'Firewalls and segmentation to isolate critical systems from risks.' },
               { icon: <Database />, title: 'Backup & Recovery', desc: 'Automated off-site readiness to ensure you back online fast after failure.' },
               { icon: <Cloud />, title: 'Continuous Monitoring', desc: 'Real-time threat detection across your entire environment.' },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center group hover:border-[#5D00D6]/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mx-auto mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                  <h4 className="c9-card-title mb-3">{s.title}</h4>
                  <p className="text-slate-500 text-[14px] leading-relaxed">{s.desc}</p>
               </FadeIn>
            ))}
         </div>
         
         <FadeIn className="mt-12 text-center" delay={0.4}>
            <p className="text-slate-900 font-bold text-[18px]">Protecting your data is protecting your business continuity.</p>
         </FadeIn>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   FINAL CTA
   ───────────────────────────────────────────────────────── */
const SectionFinalCTA = () => (
   <section className="py-20 xl:py-32 bg-white">
      <div className={`${C} text-center`}>
         <FadeIn>
            <span className="c9-eyebrow mb-6">Low Risk Entry</span>
            <h2 className="c9-section-heading mb-8 md:!text-5xl lg:!text-6xl max-w-4xl mx-auto">
               Let’s Simplify Your IT — Without Disrupting Your Business
            </h2>
            <p className="c9-body mb-12 max-w-2xl mx-auto text-lg md:text-xl">
               We’ll assess your current environment and show you exactly how we would take over — safely and step-by-step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <a
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-16 px-12 font-extrabold text-[17px] hover:bg-[#4d00b3] transition-all shadow-2xl shadow-purple-900/30 group w-full sm:w-auto"
               >
                  Book Your Transition Assessment
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
               </a>
               <a
                  href="tel:1300000000"
                  className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-16 px-12 font-extrabold text-[17px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all w-full sm:w-auto bg-white"
               >
                  Speak to an Expert
               </a>
            </div>
            <p className="mt-10 text-slate-400 font-bold uppercase tracking-widest text-[11px]">No forced outages. No coordination required. Total accountability.</p>
         </FadeIn>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionProblem />
      <SectionSolution />
      <SectionProcess />
      
      <WpCaseStudies 
        eyebrow="SUCCESSFUL TRANSITIONS"
        title="Proven Results for Businesses Like Yours"
        articles={[
          {
            tag: 'RETAIL TRANSITION',
            title: 'National Retailer Stabilisation',
            videoText: 'Retail Stabilisation',
            desc: 'Successfully reduced 4 fragmented vendors into 1 managed partner. Achieved 99.9% uptime with zero downtime during the transition phase.',
            img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
            href: '/case-studies/retail-pos-stabilisation'
          },
          {
            tag: 'LEGAL FIRM TAKEOVER',
            title: 'Proactive Migration for Professional Services',
            videoText: 'Legal Firm Takeover',
            desc: 'Took over failing on-premise infrastructure for a high-volume law firm. Improved response time by 60% and secured all end-user endpoints.',
            img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
            href: '/case-studies/legal-firm-takeover'
          }
        ]}
      />

      <SectionSafety />
      <SectionComparison />
      <SectionSupportSLA />
      <SectionCybersecurity />

      <WpFAQAndFeedback 
        faqItems={[
          { 
            q: 'How do you ensure zero downtime during the switch?', 
            a: 'We use a parallel transition model. We build and test our environment alongside your current setup. We only flip the switch once everything is validated and verified, often during a low-impact window to ensure zero service disruption.' 
          },
          { 
            q: 'What happens to our current vendor contracts?', 
            a: 'Part of our Audit & Discovery is vendor risk mapping. We handle the technical handover and coordination with your current providers, so you don&apos;t have to manage multiple phone calls or awkward transitions yourself.' 
          },
          { 
            q: 'How fast is your support team?', 
            a: 'Our Australian-based team picks up the phone within 60 seconds. For critical system issues, we have a 15-minute response SLA, but our proactive monitoring usually catches problems before they even reach your desk.' 
          },
          { 
            q: 'Will you replace all our existing hardware?', 
            a: 'Not unless it is a critical failure point. Our goal is to optimise your existing investment. We identify what is worth keeping and only recommend surgical upgrades where it directly impacts your business reliability.' 
          }
        ]}
        testimonials={[
          {
             name: 'Sarah Chen',
             role: 'Operations Manager, National Logistics',
             content: 'Switching to C9 was seamless. We were terrified that changing our network would break our dispatching system, but they managed the transition in the background without a single hour of lost work.',
             image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
             metric: 'Zero',
             metricLabel: 'Downtime'
          },
          {
             name: 'Michael Ross',
             role: 'CEO, Professional Services Hub',
             content: 'The difference in response time is night and day. We used to wait hours for simple helpdesk tickets; now we have a dedicated partner who owns every technical problem and fixes it before we can even notice.',
             image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
             metric: '60%',
             metricLabel: 'Response Boost'
          }
        ]}
      />

      <SectionFinalCTA />

      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="GET STARTED"
          title="Book Your Transition Assessment"
          description="Ready to stop managing vendor chaos? Let's review your current setup and map out exactly how we can take over and optimise your environment safely."
          formTitle="Start My Assessment"
        />
      </section>
    </main>
  );
}

