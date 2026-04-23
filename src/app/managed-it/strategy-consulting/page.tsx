'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, ShieldCheck, Zap, 
  Monitor, Lock, Activity, Users, 
  Target, BarChart3, ShieldAlert, LineChart
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPERS
   ───────────────────────────────────────────────────────── */
const FadeIn = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  id,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
  id?: string;
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
      id={id}
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
               <Target size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0">Strategic vCIO Services</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                IT Strategy — Outcome Driven. <span className="text-[#5D00D6]">Fully Accountable.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[580px]">
                Bridging the gap between business objectives and technology execution. No jargon, no fluff—just a clear roadmap to scalability.
             </p>
          </FadeIn>

          <FadeIn delay={0.22}>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                   '12-36 Month Roadmapping',
                   'Vendor-Agnostic Advice',
                   'Budget & CapEx Planning',
                   'Board-Level Reporting'
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
                   href="#greenfield"
                   className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-7 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
                >
                   Plan Your Expansion
                   <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                   href="#brownfield"
                   className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-7 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white"
                >
                   Fix Your Roadmap
                </a>
                <a
                   href="#enterprise"
                   className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-7 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white"
                >
                   Optimise Strategy
                </a>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group border-8 border-slate-50">
              <img
                 src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1200"
                 alt="Strategic IT Consulting"
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/60 shadow-xl">
                 <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Roadmap Status</span>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[10px] uppercase tracking-wider">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Strategic Alignment
                    </span>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                       <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Efficiency</div>
                       <div className="text-[14px] font-extrabold text-slate-900 leading-none">20% ROI Growth ✓</div>
                    </div>
                    <div>
                       <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Risk</div>
                       <div className="text-[14px] font-extrabold text-slate-900 leading-none">Fully Mitigated</div>
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
   SECTION 2 — PERSONAS
   ───────────────────────────────────────────────────────── */
const SectionPersonas = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Target Personas</span>
               <h2 className="c9-section-heading">Strategy for Your Specific Challenge</h2>
            </FadeIn>
         </div>
         
         <div className="grid md:grid-cols-3 gap-8">
            <FadeIn id="greenfield" className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
               <div className="absolute top-0 right-0 w-2 h-full bg-[#5D00D6]/20" />
               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <LineChart size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Greenfield CEO</h3>
               <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                  Strategic planning for rapid scale. We architect your future-state environment before you spend a cent on hardware, ensuring your technology never slows your growth.
               </p>
               <ul className="space-y-3">
                  {['Scalable Architecture', 'Budget Forecasting', 'Growth-Ready IT'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-[13px] font-bold text-slate-900">
                        <CheckCircle size={14} className="text-[#5D00D6]" /> {item}
                     </li>
                  ))}
               </ul>
            </FadeIn>

            <FadeIn id="brownfield" delay={0.1} className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
               <div className="absolute top-0 right-0 w-2 h-full bg-[#5D00D6]/20" />
               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <Activity size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Brownfield CEO</h3>
               <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                  Roadmap recovery. We audit failed projects and stagnant technology, realigning your IT spend with business goals to eliminate waste and restore performance.
               </p>
               <ul className="space-y-3">
                  {['Technical Debt Audit', 'Project Realignment', 'ROI Recovery'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-[13px] font-bold text-slate-900">
                        <CheckCircle size={14} className="text-[#5D00D6]" /> {item}
                     </li>
                  ))}
               </ul>
            </FadeIn>

            <FadeIn id="enterprise" delay={0.2} className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
               <div className="absolute top-0 right-0 w-2 h-full bg-[#5D00D6]/20" />
               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <ShieldCheck size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Head of IT</h3>
               <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                  Board-level reporting and governance. We provide the vCIO expertise to handle complex vendor management, risk assessments, and multi-year budget forecasting.
               </p>
               <ul className="space-y-3">
                  {['vCIO Governance', 'Risk & Compliance', 'Board Reporting'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-[13px] font-bold text-slate-900">
                        <CheckCircle size={14} className="text-[#5D00D6]" /> {item}
                     </li>
                  ))}
               </ul>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — EXECUTION MODEL (HOW IT WORKS)
   ───────────────────────────────────────────────────────── */
const SectionHowItWorks = () => (
   <section className="py-16 lg:py-24 bg-white">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Strategic Framework</span>
               <h2 className="c9-section-heading mb-6">Roadmap to Execution</h2>
               <p className="c9-body text-slate-600">We don't just deliver a report. We deliver an actionable roadmap that we are accountable for executing.</p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-4 gap-6">
            {[
               { step: '01', title: 'Environment Discovery', desc: 'Deep audit of existing systems, technical debt, and business bottlenecks.' },
               { step: '02', title: 'Strategic Architecting', desc: 'Designing the target state for 12, 24, and 36 months based on growth goals.' },
               { step: '03', title: 'Roadmap Development', desc: 'Prioritised execution plan with clear ROI milestones and budget requirements.' },
               { step: '04', title: 'Ongoing Governance', desc: 'Monthly reviews to ensure execution stays on track and roadmaps evolve with your business.' },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="relative bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:bg-white hover:border-[#5D00D6]/30 hover:shadow-xl transition-all">
                  <div className="text-[40px] font-black text-slate-200 group-hover:text-[#5D00D6]/10 transition-colors absolute top-6 right-6 leading-none">
                     {s.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#5D00D6] text-white flex items-center justify-center font-bold text-[16px] mb-6 relative z-10 shadow-md">
                     {parseInt(s.step)}
                  </div>
                  <h4 className="c9-card-title mb-3 relative z-10">{s.title}</h4>
                  <p className="text-slate-500 text-[14px] leading-relaxed relative z-10">{s.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — PROOF & CREDIBILITY
   ───────────────────────────────────────────────────────── */
const SectionOutcomes = () => (
   <section className="py-16 lg:py-24 bg-[#0c1024] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow !text-[#a56eff] mb-4">Strategic Impact</span>
               <h2 className="c9-section-heading !text-white mb-6">Execution Results</h2>
               <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-black text-[#a56eff] mb-1">20%</div>
                     <div className="text-[13px] text-white/60 uppercase tracking-widest font-bold">Growth Alignment</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-black text-[#a56eff] mb-1">15+</div>
                     <div className="text-[13px] text-white/60 uppercase tracking-widest font-bold">Vendors Consolidated</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-black text-[#a56eff] mb-1">$2M+</div>
                     <div className="text-[13px] text-white/60 uppercase tracking-widest font-bold">Budget Managed</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-black text-[#a56eff] mb-1">100%</div>
                     <div className="text-[13px] text-white/60 uppercase tracking-widest font-bold">Objective Execution</div>
                  </div>
               </div>
               <p className="c9-body text-white/80 mb-8">
                  "C9's strategic advice was the missing piece in our expansion plan. They didn't just tell us what to buy; they told us how to scale. Our technology is now an asset, not a liability."
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100" alt="Client" />
                  </div>
                  <div>
                     <div className="font-bold">Chief Financial Officer</div>
                     <div className="text-xs text-white/40">Regional Healthcare Provider</div>
                  </div>
               </div>
            </FadeIn>

            <FadeIn direction="right" className="relative">
               <div className="relative rounded-[32px] overflow-hidden aspect-square border-4 border-white/10 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" alt="Strategic Planning" className="w-full h-full object-cover" />
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — RISK REVERSAL / ACCOUNTABILITY
   ───────────────────────────────────────────────────────── */
const SectionAccountability = () => (
   <section className="py-16 lg:py-24 bg-white">
      <div className={C}>
         <div className="bg-slate-50 rounded-[48px] p-10 lg:p-20 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5D00D6] opacity-[0.02] rounded-full blur-[100px] -mr-64 -mt-64" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
               <div>
                  <span className="c9-eyebrow mb-4">The vCIO Model</span>
                  <h2 className="c9-section-heading mb-6">Outcome-Based Consulting</h2>
                  <p className="c9-body mb-8">
                     We don't sell products; we sell outcomes. Our strategic advice is entirely vendor-agnostic and focused solely on your business performance.
                  </p>
                  <div className="space-y-6">
                     {[
                        { title: 'Zero Vendor Bias', desc: 'We recommend what works for your business, regardless of the vendor. We are your advocate.' },
                        { title: 'Fixed-Price Strategic Engagements', desc: 'Clear, predictable costs for strategic advice. No hourly billing or hidden fees.' },
                        { title: 'Accountability for Execution', desc: 'We don\'t just hand over a report. We stay engaged to ensure the roadmap is executed.' }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="mt-1"><ShieldCheck size={20} className="text-[#5D00D6]" /></div>
                           <div>
                              <strong className="block text-slate-900 text-[16px]">{item.title}</strong>
                              <span className="text-slate-500 text-[14px]">{item.desc}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-xl">
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                     <BarChart3 size={20} className="text-[#5D00D6]" /> Strategic Deliverables
                  </h4>
                  <div className="space-y-4">
                     {[
                        { label: 'Discovery', value: 'Complete Audit Report', sub: 'Risk & Debt Analysis' },
                        { label: 'Architecture', value: 'Future-State Design', sub: 'Scalability Planning' },
                        { label: 'Roadmap', value: '36-Month Execution Plan', sub: 'Priority & Budgeting' },
                        { label: 'Governance', value: 'Monthly vCIO Reviews', sub: 'Progress Tracking' }
                     ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                           <div>
                              <div className="font-bold text-slate-900">{row.label}</div>
                              <div className="text-[11px] text-slate-400 uppercase font-black">{row.sub}</div>
                           </div>
                           <div className="text-[#5D00D6] font-bold text-[14px] text-right">{row.value}</div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — SERVICE INTEGRATION
   ───────────────────────────────────────────────────────── */
const SectionIntegration = () => (
   <section className="py-16 bg-slate-50">
      <div className={C}>
         <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#0c1024] p-8 md:p-12 rounded-[32px] text-white">
            <div className="max-w-md">
               <h3 className="text-2xl font-bold mb-4 text-white">Total Alignment</h3>
               <p className="text-white text-sm">
                  Strategy is the foundation. We align it with your helpdesk, network, and security for cohesive operations.
               </p>
            </div>
            <div className="flex flex-wrap gap-3">
               {[
                  { name: 'Helpdesk', href: '/managed-it/helpdesk-support' },
                  { name: 'Outsourcing', href: '/managed-it/outsourcing' },
                  { name: 'Cloud', href: '/managed-it/cloud-services' },
                  { name: 'Security', href: '/c9-defense' }
               ].map(link => (
                  <a key={link.name} href={link.href} className="px-5 py-2 rounded-full border border-white/10 hover:bg-white hover:text-[#0c1024] transition-all text-xs font-bold uppercase tracking-wider">
                     {link.name}
                  </a>
               ))}
            </div>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — TECHNICAL DEPTH
   ───────────────────────────────────────────────────────── */
const SectionTechnical = () => (
   <section className="py-16 lg:py-24 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Technical Governance</span>
               <h2 className="c9-section-heading mb-6">ITIL-Aligned Framework</h2>
               <p className="c9-body mb-8">
                  Our strategic approach isn't based on guesswork. We follow international standards for IT service management and governance.
               </p>
               <div className="space-y-4">
                  {[
                     { icon: <ShieldAlert size={20} />, title: 'Risk & Compliance Auditing', desc: 'Regular alignment checks against Essential 8 and ISO standards.' },
                     { icon: <Monitor size={20} />, title: 'Vendor Governance', desc: 'Managing the performance and contracts of your technology partners.' },
                     { icon: <BarChart3 size={20} />, title: 'Budget Forecasting', desc: 'Multi-year CapEx and OpEx planning to eliminate financial surprises.' }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#5D00D6]/20 transition-all">
                        <div className="text-[#5D00D6]">{item.icon}</div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-[16px] mb-1">{item.title}</h4>
                           <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </FadeIn>
            <FadeIn direction="right" className="bg-[#0c1024] rounded-[32px] p-10 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5D00D6] opacity-10 rounded-full blur-[100px]" />
               <div className="relative z-10">
                  <h4 className="text-lg font-bold mb-8">Governance Stack</h4>
                  <div className="space-y-6">
                     <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-black text-[#a56eff] mb-3">Methodology</div>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">ITIL v4 Framework</span>
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">COBIT Governance</span>
                        </div>
                     </div>
                     <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-black text-[#a56eff] mb-3">Security Standards</div>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">Essential 8 Aligned</span>
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">NIST CSF Mapping</span>
                        </div>
                     </div>
                     <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-black text-[#a56eff] mb-3">Reporting</div>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">Quarterly vCIO Review</span>
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">Risk Heatmaps</span>
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
   SECTION 8 — COMMERCIAL IMPACT
   ───────────────────────────────────────────────────────── */
const SectionImpact = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <h2 className="c9-section-heading">The Business Value</h2>
            </FadeIn>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {[
               { title: 'Eliminate Wasted Spend', desc: 'Stop spending on technical debt and legacy systems that don\'t serve your growth goals.' },
               { title: 'Accelerated Time-to-Market', desc: 'Deploy new sites and technologies faster with a pre-architected strategic foundation.' },
               { title: 'Reduced Risk Profile', desc: 'Strategic alignment ensures security is built-in, reducing the likelihood of costly breaches.' }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="text-center p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-6">
                     <Zap size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function StrategyConsultingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionPersonas />
      <SectionHowItWorks />
      <SectionOutcomes />
      <SectionAccountability />
      <SectionIntegration />
      <SectionTechnical />
      <SectionImpact />

      <WpDefenseBanner 
        title={<>Strategy without <span className="text-[#5D00D6]">Security is Risk.</span></>}
        description="Don't build a roadmap that leaves you vulnerable. C9 Defense integrates active security oversight into every strategic decision."
        buttonText="Learn About C9 Defense"
        href="/c9-defense"
      />

      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="READY TO ALIGN YOUR TECHNOLOGY?"
          title="Schedule Your Strategy Session"
          description="We'll review your current roadmap and show you how to turn your IT spend into a strategic asset."
          formTitle="Schedule Strategy Session"
        />
      </section>
    </main>
  );
}
