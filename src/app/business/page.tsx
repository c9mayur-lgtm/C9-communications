'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Zap, HelpCircle, Clock, Search, Handshake, Target, Monitor, Lock, Cloud, PhoneCall, Users, MessageSquare, AlertCircle, AlertTriangle, ChevronRight, Activity, Database, ShieldAlert } from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { WpSupport } from '@/components/wordpress/WpSupport';
import { SectionSolutionsPills } from '@/components/sections/SectionSolutionsPills';

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
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
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
              <span className="c9-eyebrow !mb-0">Infrastructure Takeover Specialist</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Take Control of Your <span className="text-[#5D00D6]">Fragmented Infrastructure</span> — Without Disruption
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-8 max-w-[580px]">
              We safely take over your existing systems, coordinate your vendors, and stabilise your operations into one accountable, fully managed environment.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {[
                'Phased infrastructure takeover',
                'Single partner accountability',
                'Root cause ownership',
                '24/7 managed stability'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={12} className="text-[#5D00D6] shrink-0" />
                  <span className="text-slate-700 font-bold text-[14px]">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#consultation-section"
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 whitespace-nowrap c9-button-label h-14 px-8 text-[15px] font-bold"
              >
                Request Infrastructure Assessment
                
              </a>
              <a
                href="#takeover-process"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white c9-button-label h-14 px-8 text-[15px] font-bold"
              >
                Review Migration Approach
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[3/4]">
            <img
              src="/images/hero/brownfield-hero.png"
              alt="Professional managing complex business infrastructure issues"
              className="w-full h-full object-cover object-center duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/40 via-transparent to-transparent" />
            

          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — THE PROBLEM
   ───────────────────────────────────────────────────────── */
const SectionProblem = () => (
  <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">Current Environment Reality</span>
          <h2 className="c9-section-heading mb-6">
            The Risks of Multi-Vendor Operational Fragmentation
          </h2>
          <p className="c9-body mb-8 text-slate-600">
            When your IT, cloud, and telco are managed by separate entities, you carry the operational risk of the gaps between them.
          </p>
          <div className="bg-[#5D00D6]/5 border-l-4 border-[#5D00D6] p-6 rounded-r-2xl">
            <p className="text-[#0c1024] font-bold text-[18px]">
              &ldquo;Fragmentation creates hidden failure points that traditional IT support cannot see.&rdquo;
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} direction="right" className="space-y-4">
          {[
            { title: 'Lack of Unified Visibility', desc: 'No single source of truth for infrastructure health across your entire footprint.' },
            { title: 'Vendor Finger-Pointing', desc: 'Issues fall into the gaps between vendors, delaying resolution and increasing downtime.' },
            { title: 'Reactive Infrastructure Debt', desc: 'Fixing symptoms instead of addressing the root cause of systemic instability.' },
            { title: 'Operational Redundancy', desc: 'Paying multiple vendors for overlapping services with no centralized strategy.' },
            { title: 'Unmanaged Escalation Risks', desc: 'No defined hierarchy for critical incidents involving multiple service layers.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 flex gap-4 shadow-sm hover:border-[#5D00D6]/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                <ShieldAlert size={20} className="text-rose-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-[14px] mb-1">{item.title}</h4>
                <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
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
  <section className="py-12 lg:py-16 bg-white">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">The Solution Model</span>
        <h2 className="c9-section-heading mb-4">One Partner. Centralised Accountability.</h2>
        <p className="c9-body max-w-2xl mx-auto">
          We eliminate vendor silos by acting as the single operational layer for your entire technology environment.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <Monitor />, title: 'Infrastructure Operations', desc: 'Full ownership of system uptime, performance, and infrastructure evolution.' },
          { icon: <Zap />, title: 'Vendor Consolidation', desc: 'Unifying telco, cloud, and hardware under a single operational SLA.' },
          { icon: <Lock />, title: 'Risk-Averse Cybersecurity', desc: 'Integrated threat monitoring and incident response across all network layers.' },
          { icon: <Users />, title: 'Operational Helpdesk', desc: 'A Tier-3 first response team that understands your specific business environment.' },
          { icon: <ShieldCheck />, title: 'Accountability Structure', desc: 'Clear escalation hierarchy and root cause responsibility for every incident.' },
          { icon: <PhoneCall />, title: 'SLA Enforcement', desc: 'Measurable performance standards backed by direct operational accountability.' },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.05} className="bg-slate-50 border border-slate-100 p-8 rounded-[32px] hover:bg-white hover:border-[#5D00D6]/20 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-6 transform group-hover:scale-110">
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
   SECTION 4 — MIGRATION CONTROL
   ───────────────────────────────────────────────────────── */
const SectionProcess = () => (
   <section className="py-10 lg:py-16 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Migration Control Model</span>
               <h2 className="c9-section-heading mb-6">A Zero-Disruption Infrastructure Takeover</h2>
               <p className="c9-body text-slate-600">We utilize a structured takeover model to ensure every site triggers a specific operational workflow.</p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-5 gap-5">
            {[
               { step: '01', title: 'Infrastructure Discovery', desc: 'Mapping of all assets, vendors, and failure points.' },
               { step: '02', title: 'Risk Stabilisation', desc: 'Remediating immediate security and operational gaps.' },
               { step: '03', title: 'Parallel Validation', desc: 'Running managed stack alongside current setup.' },
               { step: '04', title: 'Controlled Takeover', desc: 'Phased migration of control with rollback paths.' },
               { step: '05', title: 'Single Ownership', desc: 'Full operational accountability for performance.' },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-[#5D00D6]/30 transition-all">
                  <div className="text-[32px] md:text-[40px] font-black text-slate-100 group-hover:text-[#5D00D6]/10 transition-colors absolute top-6 right-6 leading-none">
                     {s.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#5D00D6] text-white flex items-center justify-center font-bold text-[16px] mb-6 relative z-10 shadow-md">
                     {i + 1}
                  </div>
                  <h4 className="c9-card-title mb-3 relative z-10">{s.title}</h4>
                  <p className="text-slate-500 text-[15px] leading-relaxed relative z-10">{s.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — OUTCOMES
   ───────────────────────────────────────────────────────── */
const SectionProof = () => (
  <section className="py-12 lg:py-16 bg-white">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">Accountability Proof</span>
          <h2 className="c9-section-heading mb-6">Real-World Outcomes of Infrastructure Control</h2>
          <p className="c9-body mb-8">
            We don't just provide support; we own the operational outcomes of your environment. Our success is measured by your stability.
          </p>
        </FadeIn>

        <FadeIn direction="right" delay={0.1} className="bg-slate-50 rounded-[40px] p-8 lg:p-12 relative overflow-hidden flex flex-col items-center text-center border border-slate-100">
           <div className="mb-8">
              <span className="font-bold text-slate-200 text-7xl uppercase tracking-tighter opacity-70">CONTROL MODEL</span>
           </div>
           <h3 className="text-2xl font-bold text-slate-900 mb-6 max-w-md">Vendor Consolidation for National Multi-Site Distribution</h3>
           <p className="text-slate-500 text-[14px] leading-relaxed mb-10 max-w-lg">
              Consolidated 6 regional vendors into a single controlled operating model, removing finger-pointing and stabilising site connectivity across 12 locations.
           </p>
           <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-5 py-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Result</div>
                 <div className="text-[14px] font-bold text-[#5D00D6]">Reduced Fragmentation</div>
              </div>
              <div className="px-5 py-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Outcome</div>
                 <div className="text-[14px] font-bold text-[#5D00D6]">Unified SLA Control</div>
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — SECURITY + CONTINUITY
   ───────────────────────────────────────────────────────── */
const SectionSafety = () => (
   <section className="py-12 lg:py-16 bg-white border-t border-slate-100 overflow-hidden">
      <div className={C}>
         <div className="bg-[#5D00D6] rounded-[48px] p-10 lg:p-20 relative overflow-hidden shadow-2xl shadow-purple-900/40">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-white opacity-[0.05] rounded-full blur-[100px] -mr-32 -mt-32 md:-mr-64 md:-mt-64" />
            <div className="absolute bottom-0 left-0 w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-white opacity-[0.05] rounded-full blur-[80px] -ml-16 -mb-16 md:-ml-32 md:-mb-32" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center text-white">
               <div>
                  <span className="c9-eyebrow !text-white mb-4">Security & Continuity</span>
                  <h2 className="c9-section-heading !text-white mb-6">Continuous Monitoring. Incident Control.</h2>
                  <p className="text-white text-[18px] mb-8 leading-relaxed">
                     Our security model is built directly into the infrastructure layer, providing continuous threat detection and a structured incident response framework.
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                     <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                        <Lock size={20} className="text-white" />
                     </div>
                     <div>
                        <p className="font-bold text-[16px] text-white">Unified Visibility Layer</p>
                        <p className="text-white/80 text-[14px]">Continuous monitoring across all systems</p>
                     </div>
                  </div>
               </div>
               
               <div className="grid grid-cols-1 gap-4">
                  {[
                     { title: 'Continuous Monitoring', desc: 'Real-time threat detection across your entire environment.' },
                     { title: 'Incident Response Structure', desc: 'Defined escalation paths for every security event.' },
                     { title: 'Infrastructure Visibility', desc: 'Total control over data flow and access points.' },
                     { title: 'Compliance-Aligned Ops', desc: 'Standardised security controls across every system.' },
                  ].map((p, i) => (
                     <FadeIn key={i} delay={i * 0.08} direction="right" className="bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-2xl flex items-center gap-4">
                        <CheckCircle size={12} className="text-white shrink-0" />
                        <div>
                           <p className="font-bold text-[16px] text-white">{p.title}</p>
                           <p className="text-white/80 text-[14px]">{p.desc}</p>
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
  <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">Control Transformation</span>
        <h2 className="c9-section-heading">From Vendor Chaos to Unified Control</h2>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[40px] overflow-hidden shadow-2xl border border-slate-200">
        <div className="bg-white p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-slate-100 relative">
          <div className="absolute top-8 right-8 text-rose-500 opacity-20"><ShieldAlert size={64} /></div>
          <h3 className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-3 uppercase tracking-tighter">
             <span className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 text-[14px]">X</span>
             Fragmented State
          </h3>
          <ul className="space-y-8">
            {[
              { title: 'Multiple Vendors', desc: 'Fragmented bills, conflicting contacts, and zero coordination.' },
              { title: 'Finger-Pointing', desc: 'Blame shifted between vendors when incidents occur.' },
              { title: 'Reactive Fixes', desc: 'Systemic instability caused by patching symptoms.' },
              { title: 'Zero Visibility', desc: 'No central oversight of infrastructure health.' },
              { title: 'Hidden Risks', desc: 'Unmanaged failure points between vendor silos.' },
            ].map((p, i) => (
              <li key={i} className="flex gap-4">
                <div className="mt-1"></div>
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
          <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3 uppercase tracking-tighter">
             <span className="w-9 h-9 rounded-full bg-[#5D00D6] flex items-center justify-center text-white text-[14px]">✓</span>
             Consolidated Control
          </h3>
          <ul className="space-y-8 text-white">
            {[
              { title: 'Single Operational Partner', desc: 'One accountable touchpoint for the entire environment.' },
              { title: 'Root Cause Responsibility', desc: 'Full ownership of incident resolution across all layers.' },
              { title: 'Proactive Ownership', desc: 'Systemic monitoring to prevent instability.' },
              { title: 'Unified Visibility', desc: 'Real-time oversight of all infrastructure assets.' },
              { title: 'Integrated Security', desc: 'Threat detection baked into the core infrastructure.' },
            ].map((p, i) => (
              <li key={i} className="flex gap-4">
                <div className="mt-1"></div>
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
   SECTION 8 — SUPPORT & SLA
   ───────────────────────────────────────────────────────── */
const SectionSupportSLA = () => (
  <section className="py-12 lg:py-16 bg-white">
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
                    <CheckCircle size={12} className="text-[#5D00D6] shrink-0" />
                    <span className="text-slate-900 font-bold text-[14px]">{item}</span>
                 </div>
              ))}
           </div>
        </FadeIn>
        <FadeIn direction="right" delay={0.1}>
           <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200" alt="C9 Support Specialist" className="w-full h-full object-cover aspect-[4/5] object-top" />
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — WHEN THIS IS NOT A FIT
   ───────────────────────────────────────────────────────── */
const SectionNotFit = () => (
   <section className="py-12 lg:py-16 bg-white">
      <div className={C}>
         <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-12">
               <span className="c9-eyebrow mb-4">Qualification</span>
               <h2 className="c9-section-heading">When C9 is Not a Fit</h2>
               <p className="c9-body mt-4">We are a high-accountability operational partner. Our model is not suitable for everyone.</p>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 gap-8">
               <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-[#0c1024] text-[18px] mb-6 flex items-center gap-2">
                     <AlertCircle className="text-slate-400" size={20} />
                     Operational Fit
                  </h4>
                  <ul className="space-y-4">
                     {[
                        'You only require "break-fix" helpdesk support.',
                        'You have no intention of consolidating vendors.',
                        'You are unwilling to grant full operational control.',
                        'You expect advisory services with no implementation.'
                     ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[14px] text-slate-500">
                           <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
               
               <div className="p-8 rounded-3xl border-2 border-[#5D00D6]/10">
                  <h4 className="font-bold text-[#0c1024] text-[18px] mb-6 flex items-center gap-2">
                     <ShieldCheck className="text-[#5D00D6]" size={20} />
                     Ideal Engagement
                  </h4>
                  <ul className="space-y-4">
                     {[
                        'Organisations with multi-site infrastructure.',
                        'Businesses tired of vendor blame games.',
                        'Leaders seeking a single accountable owner.',
                        'Teams ready for a controlled, phased transition.'
                     ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[14px] text-slate-700 font-medium">
                           <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#5D00D6] shrink-0" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — FINAL CTA
   ───────────────────────────────────────────────────────── */
const SectionFinalCTA = () => (
   <section className="py-12 xl:py-16 bg-white">
      <div className={`${C} text-center`}>
         <FadeIn>
            <span className="c9-eyebrow mb-6">Take Control</span>
            <h2 className="c9-section-heading mb-8 md:!text-5xl lg:!text-6xl max-w-4xl mx-auto">
               Fragmented Infrastructure is an Operational Risk
            </h2>
            <p className="c9-body mb-12 max-w-2xl mx-auto text-lg md:text-xl">
               Delaying consolidation increases the probability of systemic failure. Request an assessment to review your migration readiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <a
                  href="#consultation-section"
                  className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-2xl shadow-purple-900/30 w-full sm:w-auto c9-button-label h-14 px-8 text-[15px] font-bold"
               >
                  Request Infrastructure Assessment
                  
               </a>
               <a
                  href="#takeover-process"
                  className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all w-full sm:w-auto bg-white c9-button-label h-14 px-8 text-[15px] font-bold"
               >
                  Migration Readiness Review
               </a>
            </div>
            <p className="mt-10 text-slate-400 font-bold uppercase tracking-widest text-[11px]">Consolidate Control. Remove Finger-Pointing. Ensure Continuity.</p>
         </FadeIn>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function SmallBusinessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionSolutionsPills audience="business" />
      <SectionProblem />
      <SectionSolution />
      <SectionProcess />
      <SectionProof />
      
      <WpCaseStudies 
        eyebrow="SUCCESSFUL TRANSITIONS"
        title="Migration Outcomes"
        articles={[
          {
            tag: 'RETAIL TRANSITION',
            title: 'National Retailer Stabilisation',
            videoText: 'Retail Stabilisation',
            desc: 'Consolidated 4 fragmented vendors into a single controlled partner. Achieved 99.9% uptime with zero disruption during the transition.',
            img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
            href: '/case-studies/multi-site-retail-stabilisation'
          },
          {
            tag: 'OPERATIONAL TAKEOVER',
            title: 'Controlled Migration for Professional Services',
            videoText: 'Legal Firm Takeover',
            desc: 'Successfully took over failing on-premise infrastructure with a phased cutover. Improved system visibility and stabilised all end-user endpoints.',
            img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
            href: '/case-studies/financial-vendor-consolidation'
          }
        ]}
      />

      <SectionSafety />
      <SectionComparison />
      <SectionSupportSLA />

      <SectionNotFit />

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

      <section id="consultation-section" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="CONSOLIDATE CONTROL"
          title="Request Infrastructure Assessment"
          description="Review your current environment and map out a controlled takeover strategy to stabilise your operations. No disruption. Total accountability."
          formTitle="Start Risk Audit"
        />
      </section>
    </main>
  );
}

