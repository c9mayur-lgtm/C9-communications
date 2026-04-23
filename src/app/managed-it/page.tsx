'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, ShieldCheck, Zap, 
  Monitor, Lock, Cloud, PhoneCall,
  Users, ShieldAlert, Activity, Database, Server, Building, Network, Wrench
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
               <span className="c9-eyebrow !mb-0">Infrastructure Operating Model</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Continuous Infrastructure Operations — <span className="text-[#5D00D6]">Not Just Support.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[580px]">
                C9 acts as the operational owner layer for your environment, providing unified control across IT, Telco, and Cloud with absolute accountability.
             </p>
          </FadeIn>

          <FadeIn delay={0.22}>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                   'Single partner accountability',
                   'Continuous monitoring layer',
                   'Root cause ownership',
                   'Enforced SLA performance'
                ].map((item) => (
                   <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-[#5D00D6] shrink-0" />
                      <span className="text-slate-700 font-bold text-[16px]">{item}</span>
                   </div>
                ))}
             </div>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col sm:flex-row gap-4">
                <a
                   href="#consultation"
                   className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap c9-button-label"
                >
                   Request Infrastructure Assessment
                   <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                   href="#takeover-process"
                   className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-9 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white c9-button-label"
                >
                   View Operational Model
                </a>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group border-8 border-slate-50">
              <img
                 src="https://images.openai.com/static-rsc-4/pAudOpKduXbwaJefDA-ty43Cj-QDIxHOJgn3hPeWkl5wv5V3EE4uGRNfiiWROXkbdL3TPRFkgOni1EHE1upOorzlSCDZ2h7psbaRq-f3_WGFPgbJSo-GLM_1lYqxpbGfyMedEH-gFjrr9ZCXIJBI2Wn-GMakrQr-N2BCHYGXP2VFpVhWD85t1FGt3DGtjaZj?purpose=fullsize"
                 alt="Operational IT Takeover"
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/60 shadow-xl">
                 <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Operational State</span>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[10px] uppercase tracking-wider">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Controlled
                    </span>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                       <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Visibility</div>
                       <div className="text-[16px] font-extrabold text-slate-900 leading-none">Full Access ✓</div>
                    </div>
                    <div>
                       <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Accountability</div>
                       <div className="text-[16px] font-extrabold text-slate-900 leading-none">Root Ownership</div>
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
   SECTION 2 — PROBLEM
   ───────────────────────────────────────────────────────── */
const SectionProblem = () => (
   <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left" className="order-2 lg:order-1">
               <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200 aspect-square max-w-md mx-auto lg:max-w-none border-8 border-white">
                  <img src="https://images.openai.com/static-rsc-4/D3kvXiS3zu9m7xquT8-CVxzFv59w1qEmFcT35AEHNAzkA8N-lahrO3yL92F1yUXZ1jsivUWP1PlLJ8fYTgqwW_jVgghi6wxg2ay2fX7wy7daAXIi-DF9ho4KmQRXSDpcuessj44iGEtELLFt71YVmFdUGnFwUY4TtCtVI1K5R3hfkg5j9emS8HJv45Dme_jG?purpose=fullsize" alt="IT Complexity" className="w-full h-full object-cover" />
               </div>
            </FadeIn>

            <FadeIn direction="right" className="order-1 lg:order-2">
               <span className="c9-eyebrow mb-4">Infrastructure Control</span>
               <h2 className="c9-section-heading mb-6">
                  Continuous Monitoring Layer & System Visibility
               </h2>
               <div className="space-y-6 mb-8">
                  {[
                     { title: 'Unified Operational Visibility', desc: 'Real-time telemetry across IT, cloud, and telco layers into one single control plane.' },
                     { title: 'Proactive Incident Detection', desc: 'Monitoring systems that catch operational anomalies before they escalate to service desk tickets.' },
                     { title: 'Vendor Orchestration Layer', desc: 'We act as the single escalation point for all third-party providers, ending vendor blame cycles.' },
                     { title: 'In-Depth Infrastructure Audit', desc: 'Total mapping of every asset, connection, and dependency within your environment.' }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0 mt-0.5">
                           <span className="w-2 h-2 rounded-full bg-[#5D00D6]" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-[16px] mb-1">{item.title}</h4>
                           <p className="text-slate-500 text-[16px] leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm mb-6">
                  <p className="text-slate-900 font-bold text-[18px]">
                     We operate your environment, not just support it.
                  </p>
               </div>
               <a href="#consultation" className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:gap-3 transition-all group">
                  Review our monitoring architecture <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
               </a>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — THE C9 MODEL
   ───────────────────────────────────────────────────────── */
const SectionModel = () => (
   <section id="takeover-process" className="py-16 lg:py-20 bg-[#0c1024] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      <div className={C}>
         <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow !text-[#a56eff] mb-4">Incident Control</span>
               <h2 className="c9-section-heading !text-white mb-6">
                  Tiered Incident Response & Resolution Ownership
               </h2>
               <p className="c9-body text-white/80 mb-10 max-w-lg">
                  Our incident model eliminates ambiguity. We provide a structured escalation flow where every event has a defined owner and resolution target.
               </p>
               
               <div className="space-y-4 mb-10">
                  {[
                     { title: 'Severity-Based Prioritisation', desc: 'Impact-driven triage system for critical infrastructure events.' },
                     { title: 'Direct Escalation Authority', desc: 'Tier-3 engineering access for complex resolution requirements.' },
                     { title: 'Full Resolution Ownership', desc: 'We own the issue from detection to root cause verification.' }
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                        <CheckCircle size={24} className="text-[#a56eff] shrink-0" />
                        <div>
                           <h4 className="font-bold text-[16px] text-white">{item.title}</h4>
                           <p className="text-[14px] text-white/60">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
               
               <div className="inline-flex items-center gap-3 bg-[#5D00D6] px-6 py-4 rounded-2xl shadow-xl shadow-purple-900/40 mb-8">
                  <p className="text-[16px] font-bold text-white">Documented workflows. Verified resolutions.</p>
               </div>
               <div className="block">
                  <a href="#consultation" className="inline-flex items-center justify-center gap-2 bg-white text-[#0c1024] rounded-full h-12 px-8 font-bold text-[14px] hover:bg-slate-100 transition-all c9-button-label">
                     Review Incident Workflows
                  </a>
               </div>
            </FadeIn>

            <FadeIn direction="right" className="relative">
               <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[600px] border-4 border-white/10 shadow-2xl">
                  <img src="https://images.openai.com/static-rsc-4/sJiOQgzSIcd_ByrfMRbRRGc4aukJXXbveYxPiQt8se6oGj0L3Hslv94wOzKtSWJ2GQEsm-4E8mE1hQ3CWJSfuV2U_DAQtohH4DBYm_Rk_xTO4CNkiSH_i4q5Vfuhy10559nMsoA5KopbK_Fob2S6mnkmOYTboSzNrTTXqbe_G9wuDcjf-3Ghl-bHcs1CcP_F?purpose=fullsize" alt="C9 Model Accountability" className="w-full h-full object-cover" />
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — WHAT WE MANAGE
   ───────────────────────────────────────────────────────── */
const SectionManage = () => (
   <section className="py-16 lg:py-20 bg-white">
      <div className={C}>
         <FadeIn className="text-center mb-16">
            <span className="c9-eyebrow mb-4">Operational Accountability</span>
            <h2 className="c9-section-heading">Enforced SLA & Performance Monitoring</h2>
         </FadeIn>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
               { icon: <Activity />, title: 'SLA Enforcement', desc: 'Operational response targets backed by performance monitoring.' },
               { icon: <Users />, title: 'Resolution Model', desc: 'Structured workflows for handling root cause identification.' },
               { icon: <Monitor />, title: 'Control Layer', desc: 'Single-partner accountability for every infrastructure layer.' },
               { icon: <ShieldCheck />, title: 'Governance', desc: 'Continuous compliance and security logging integration.' },
               { icon: <Wrench />, title: 'Accountability', desc: 'Measurable uptime reporting and transparent service metrics.' },
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.05} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:bg-white hover:border-[#5D00D6]/20 hover:shadow-xl transition-all group text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-5 transform group-hover:scale-110 transition-transform">
                     {item.icon}
                  </div>
                  <h3 className="c9-card-title mb-2 text-[18px]">{item.title}</h3>
                  <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
               </FadeIn>
            ))}
         </div>
         <FadeIn className="mt-12 text-center" delay={0.3}>
            <a href="#consultation" className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:gap-3 transition-all group">
               See how this applies to your environment <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
         </FadeIn>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — HOW IT WORKS
   ───────────────────────────────────────────────────────── */
const SectionHowItWorks = () => (
   <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Continuous Improvement</span>
               <h2 className="c9-section-heading mb-6">Recurring Issue Elimination & Optimisation</h2>
               <p className="c9-body text-slate-600">Our model moves beyond reactive support to identify and eliminate the systemic causes of technical friction.</p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-4 gap-6">
            {[
               { step: '01', title: 'Audit & Discover', desc: 'Total mapping of environment assets, dependencies, and failure points.' },
               { step: '02', title: 'Architecture Alignment', desc: 'Aligning infrastructure state with operational stability requirements.' },
               { step: '03', title: 'Managed Optimisation', desc: 'Controlled remediation of technical debt and performance blockers.' },
               { step: '04', title: 'Continuous Feedback', desc: 'Closed-loop reporting to prevent issue recurrence and drive uptime.' },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm group hover:border-[#5D00D6]/30 transition-all">
                  <div className="text-[40px] font-black text-slate-100 group-hover:text-[#5D00D6]/10 transition-colors absolute top-6 right-6 leading-none">
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
         <FadeIn className="mt-12 text-center" delay={0.4}>
            <a href="#consultation" className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group">
               Get a tailored plan <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
         </FadeIn>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — OPERATIONS
   ───────────────────────────────────────────────────────── */
const SectionOperations = () => (
   <section className="py-16 lg:py-20 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left" className="relative">
               <div className="relative rounded-[32px] overflow-hidden aspect-square border-8 border-slate-50 shadow-2xl">
                  <img src="https://images.openai.com/static-rsc-4/gILYUm_KgMD_--xVhl18VRiCxjUgWKLM05BT5Kvt-TqGyFjIwUaPkr-EipBQXruRmwdtP46R1BW3KVhlKpJeDKJ8ssE3CCWx0DWm7M5L4JbeiLH1KipEdy73AwBYcgD2ZJLQffe8SlnZubHMhXdJEMNRD2MuVigDwaHPNtiJ30VuGR8IlT_ofl4miTOASHVK?purpose=fullsize" alt="Operations and Support" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
                        <Activity size={24} className="text-emerald-500" />
                     </div>
                     <div>
                        <p className="font-bold text-slate-900">24/7 Monitoring</p>
                        <p className="text-sm text-slate-500">Always Active</p>
                     </div>
                  </div>
               </div>
            </FadeIn>

            <FadeIn direction="right">
               <span className="c9-eyebrow mb-4">Vendor Orchestration</span>
               <h2 className="c9-section-heading mb-6">Eliminating Vendor Blame Cycles</h2>
               <div className="space-y-6 mb-8">
                  <p className="text-slate-600 text-[16px] leading-relaxed">
                     C9 acts as the single operational authority, managing all third-party providers under one control layer to ensure issue resolution takes priority over finger-pointing.
                  </p>
                  <ul className="space-y-5">
                     {[
                        { title: 'Single Escalation Authority', desc: 'We coordinate all vendors (IT, Cloud, Telco) to provide a unified response.' },
                        { title: 'Orchestrated Incident Control', desc: 'Removing the complexity of multi-provider communication during critical outages.' },
                        { title: 'Unified Operational Control', desc: 'Consistent governance and SLA enforcement across your entire technology stack.' }
                     ].map((item, i) => (
                        <li key={i} className="flex gap-4">
                           <div className="mt-1"><ShieldCheck size={20} className="text-[#5D00D6]" /></div>
                           <div>
                              <strong className="block text-slate-900 text-[16px]">{item.title}</strong>
                              <span className="text-slate-500 text-[16px]">{item.desc}</span>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="bg-[#5D00D6]/5 border-l-4 border-[#5D00D6] p-5 rounded-r-xl mb-8">
                  <p className="text-slate-900 font-bold text-[16px]">One accountable partner. No more vendor finger-pointing.</p>
               </div>
               <a href="#consultation" className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:gap-3 transition-all group">
                  Review our orchestration model <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
               </a>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — SECURITY
   ───────────────────────────────────────────────────────── */
const SectionSecurity = () => (
   <section className="py-16 lg:py-20 bg-[#0c1024] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5D00D6] opacity-10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow !text-[#a56eff] mb-4">Security Integration</span>
               <h2 className="c9-section-heading !text-white mb-6">Operational Security & Threat Visibility</h2>
               <p className="c9-body text-white/70">
                  Security is baked into our operational monitoring layer. We provide continuous threat detection visibility across your entire footprint.
               </p>
            </FadeIn>
         </div>
         
         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
               { icon: <Lock size={32} />, title: 'Endpoint Protection', desc: 'Securing every device your team uses, anywhere they work.' },
               { icon: <ShieldCheck size={32} />, title: 'Network Security', desc: 'Enterprise-grade firewalls and secure traffic routing.' },
               { icon: <Activity size={32} />, title: 'Active Monitoring', desc: 'Threat detection analyzing behavior to stop breaches.' }
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors text-center">
                  <div className="text-[#a56eff] mb-6 flex justify-center">{s.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{s.title}</h4>
                  <p className="text-white/60 text-[16px] leading-relaxed">{s.desc}</p>
               </FadeIn>
            ))}
         </div>
         <FadeIn className="mt-12 text-center" delay={0.3}>
            <a href="#consultation" className="inline-flex items-center justify-center gap-2 bg-white text-[#0c1024] rounded-full h-12 px-8 font-bold text-[14px] hover:bg-slate-100 transition-all">
               Understand your risk exposure
            </a>
         </FadeIn>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — PERSONAS
   ───────────────────────────────────────────────────────── */
const SectionPersonas = () => (
   <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <FadeIn className="text-center mb-16">
            <h2 className="c9-section-heading">Model Qualification: What C9 Is Not</h2>
         </FadeIn>
         
         <div className="grid md:grid-cols-3 gap-6">
            <FadeIn className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow">
               <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 mb-6">
                  <ShieldAlert size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Not "Break-Fix" IT</h3>
               <p className="text-slate-600 text-[16px] leading-relaxed">
                  We are not a reactive hourly support provider. We operate your environment continuously to prevent breakage from occurring.
               </p>
            </FadeIn>

            <FadeIn delay={0.1} className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow">
               <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 mb-6">
                  <Activity size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Not Reactive-Only</h3>
               <p className="text-slate-600 text-[16px] leading-relaxed">
                  We do not wait for you to call. Our systems monitor health and anomalies 24/7 to catch issues at the infrastructure layer.
               </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow">
               <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 mb-6">
                  <Lock size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Not Ad-Hoc Tuning</h3>
               <p className="text-slate-600 text-[16px] leading-relaxed">
                  We follow a structured operational framework, not ad-hoc troubleshooting. This ensures consistency and auditability across all systems.
               </p>
            </FadeIn>
         </div>
         <FadeIn className="mt-12 text-center" delay={0.3}>
            <a href="#consultation" className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:gap-3 transition-all group">
               Find the right approach for your business <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
         </FadeIn>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — OUTCOMES
   ───────────────────────────────────────────────────────── */
const SectionOutcomes = () => (
   <section className="py-16 lg:py-20 bg-white">
      <div className={C}>
         <div className="bg-[#5D00D6] rounded-[48px] p-10 lg:p-20 relative overflow-hidden shadow-2xl shadow-purple-900/40">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.05] rounded-full blur-[100px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white opacity-[0.05] rounded-full blur-[80px] -ml-32 -mb-32" />
            
            <div className="relative z-10 text-center mb-12">
               <span className="c9-eyebrow !text-white/80 mb-4">Risk Mitigation</span>
               <h2 className="c9-section-heading !text-white mb-6">Operational Risk Mitigation Outcomes</h2>
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { title: 'Reduced Downtime', icon: <Activity size={32} /> },
                  { title: 'Better Performance', icon: <Zap size={32} /> },
                  { title: 'Centralised Control', icon: <Monitor size={32} /> },
                  { title: 'Lower Operational Risk', icon: <ShieldCheck size={32} /> }
               ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-[32px] text-center flex flex-col items-center">
                     <div className="text-white mb-4 opacity-80">{item.icon}</div>
                     <p className="font-bold text-[18px] text-white">{item.title}</p>
                  </FadeIn>
               ))}
            </div>

            <FadeIn className="relative z-10 mt-12 text-center" delay={0.4}>
               <a href="#consultation" className="inline-flex items-center justify-center gap-2 bg-white text-[#5D00D6] rounded-full h-14 px-9 font-bold text-[14px] hover:bg-slate-50 transition-all shadow-xl group">
                  Start with a consultation <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
               </a>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 10 — FINAL CTA
   ───────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function ManagedITPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionProblem />
      <SectionModel />
      <SectionManage />
      <SectionHowItWorks />
      
      <WpCaseStudies 
        eyebrow="PROVEN RESULTS"
        title="Predictable Outcomes in Action"
        articles={[
          {
            tag: 'VENDOR CONSOLIDATION',
            title: 'Complete Environment Takeover',
            videoText: 'Vendor Consolidation',
            desc: 'Consolidated complex legacy systems into a single managed environment with zero downtime.',
            img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
            href: '#'
          },
          {
            tag: 'OPERATIONAL CONTROL',
            title: 'Unified Multi-Site Management',
            videoText: 'Operational Control',
            desc: 'Standardised IT and connectivity across multiple locations, dramatically reducing operational friction.',
            img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
            href: '#'
          }
        ]}
      />

      <SectionOperations />
      <SectionSecurity />
      <SectionPersonas />
      <SectionOutcomes />

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
