'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Zap, Monitor, Lock, Activity, Users, Building, Briefcase, Network, Server } from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";
import { ContinueJourney } from '@/components/sections/ContinueJourney';

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
               <Briefcase size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0">Full-Service IT Department</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                IT Outsourcing — Your Entire Dept. <span className="text-[#5D00D6]">Fully Accountable.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[580px]">
                Scalable, enterprise-grade IT leadership and operations without the overhead of internal headcount. We own the outcome, you own the growth.
             </p>
          </FadeIn>

          <FadeIn delay={0.22}>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                   'Full vCIO Governance',
                   'End-to-End Asset Management',
                   'Vendor Management Included',
                   'Predictable Monthly Cost'
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
                   href="#greenfield"
                   className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 whitespace-nowrap h-14 px-8 text-[15px] font-bold"
                >
                   Build Your IT Dept
                   
                </a>
                <a
                   href="#brownfield"
                   className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white h-14 px-8 text-[15px] font-bold"
                >
                   Replace Legacy IT
                </a>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3]">
              <img
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                 alt="IT Outsourcing Management"
                 className="w-full h-full object-cover duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-lg p-5 border border-white/60 shadow-xl">
                 <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Department Status</span>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[10px] uppercase tracking-wider">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Fully Managed
                    </span>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                       <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Leadership</div>
                       <div className="text-[14px] font-extrabold text-slate-900 leading-none">Senior vCIO ✓</div>
                    </div>
                    <div>
                       <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Efficiency</div>
                       <div className="text-[14px] font-extrabold text-slate-900 leading-none">30% Cost Reduc.</div>
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
               <span className="c9-eyebrow mb-4">Target Audience</span>
               <h2 className="c9-section-heading">Designed for Every Phase of Growth</h2>
            </FadeIn>
         </div>
         
         <div className="grid md:grid-cols-3 gap-8">
            <FadeIn id="greenfield" className="bg-white border border-slate-200 p-10 rounded-lg shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <Building size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Greenfield CEO</h3>
               <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
                  Building something new? Don't waste capital on IT hires. We architect and manage your entire IT stack from the ground up, ensuring scale-ready foundations.
               </p>
               <ul className="space-y-3">
                  {['Architecture Design', 'Vendor Setup', 'Day-1 Operations'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-[14px] font-bold text-slate-900">
                        <CheckCircle size={14} className="text-[#5D00D6]" /> {item}
                     </li>
                  ))}
               </ul>
            </FadeIn>

            <FadeIn id="brownfield" delay={0.1} className="bg-white border border-slate-200 p-10 rounded-lg shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <Activity size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Brownfield CEO</h3>
               <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
                  Stop the bleeding. We replace fragmented, unreliable legacy setups with a unified, professional department that actually supports your business objectives.
               </p>
               <ul className="space-y-3">
                  {['Vendor Consolidation', 'System Overhaul', 'Governance Setup'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-[14px] font-bold text-slate-900">
                        <CheckCircle size={14} className="text-[#5D00D6]" /> {item}
                     </li>
                  ))}
               </ul>
            </FadeIn>

            <FadeIn id="enterprise" delay={0.2} className="bg-white border border-slate-200 p-10 rounded-lg shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <Users size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Head of IT</h3>
               <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
                  Scale without friction. We provide the operational muscle—handling the day-to-day—so your internal team can focus on high-level strategic transformation.
               </p>
               <ul className="space-y-3">
                  {['Operational Burst', 'Asset Management', 'SLA Performance'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-[14px] font-bold text-slate-900">
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
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Execution Framework</span>
               <h2 className="c9-section-heading mb-6">Professional IT Takeover</h2>
               <p className="c9-body text-slate-600">We follow a rigorous methodology to transition your business from fragmented IT to a managed department model.</p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-4 gap-6">
            {[
               { step: '01', title: 'Strategic Discovery', desc: 'Detailed audit of assets, licenses, vendors, and security posture.' },
               { step: '02', title: 'Controlled Handover', desc: 'Seamless transition from previous providers with zero operational disruption.' },
               { step: '03', title: 'Operational Rigour', desc: 'Implementation of patching, monitoring, and helpdesk workflows.' },
               { step: '04', title: 'vCIO Governance', desc: 'Quarterly reviews to ensure IT remains a strategic asset, not a cost centre.' },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="relative bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:border-[#5D00D6]/30 transition-all">
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
               <span className="c9-eyebrow !text-[#a56eff] mb-4">Proven Results</span>
               <h2 className="c9-section-heading !text-white mb-6">Measurable Efficiency</h2>
               <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                     <div className="text-[32px] font-black text-[#a56eff] mb-1">30%</div>
                     <div className="text-[14px] text-white/60 uppercase tracking-widest font-bold">Reduction in OpEx</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                     <div className="text-[32px] font-black text-[#a56eff] mb-1">0h</div>
                     <div className="text-[14px] text-white/60 uppercase tracking-widest font-bold">Unplanned Downtime</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                     <div className="text-[32px] font-black text-[#a56eff] mb-1">10+</div>
                     <div className="text-[14px] text-white/60 uppercase tracking-widest font-bold">Site Multi-Scaling</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                     <div className="text-[32px] font-black text-[#a56eff] mb-1">500+</div>
                     <div className="text-[14px] text-white/60 uppercase tracking-widest font-bold">Managed Endpoints</div>
                  </div>
               </div>
               <p className="c9-body text-white/80 mb-8">
                  "Moving to C9's outsourced model gave us back our focus. We didn't just save money on headcount; we gained a strategic partner that knows our business as well as we do."
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Client" />
                  </div>
                  <div>
                     <div className="font-bold">Chief Executive Officer</div>
                     <div className="text-xs text-white/40">National Construction Group</div>
                  </div>
               </div>
            </FadeIn>

            <FadeIn direction="right" className="relative">
               <div className="relative rounded-lg overflow-hidden aspect-square border-4 border-white/10 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Department Efficiency" className="w-full h-full object-cover" />
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
         <div className="bg-slate-50 rounded-lg p-10 lg:p-20 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5D00D6] opacity-[0.02] rounded-full blur-[100px] -mr-64 -mt-64" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
               <div>
                  <span className="c9-eyebrow mb-4">The Ownership Model</span>
                  <h2 className="c9-section-heading mb-6">Total Department Responsibility</h2>
                  <p className="c9-body mb-8">
                     We don't act like a vendor. We act like your internal IT team. We own the strategy, the execution, and the daily grind.
                  </p>
                  <div className="space-y-6">
                     {[
                        { title: 'Full Department Responsibility', desc: 'From the mouse in a user\'s hand to the core server infrastructure, we own it all.' },
                        { title: 'Fixed Monthly Fee', desc: 'Predictable IT costs with no hidden "out of scope" surprises. We scale with you.' },
                        { title: 'Senior vCIO Leadership', desc: 'You get board-level technology advice without the six-figure salary cost.' }
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
               <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-xl">
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                     <Activity size={20} className="text-[#5D00D6]" /> Operational Clarity
                  </h4>
                  <div className="space-y-4">
                     {[
                        { label: 'Strategy', value: 'Quarterly vCIO Reviews', sub: 'Roadmapping & Budgeting' },
                        { label: 'Ops', value: '24/7 Managed Monitoring', sub: 'Proactive Resolution' },
                        { label: 'Support', value: 'Direct Helpdesk Access', sub: 'Australian Technicians' },
                        { label: 'Security', value: 'Active Threat Hunting', sub: 'Essential 8 Aligned' }
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


/* ─────────────────────────────────────────────────────────
   SECTION 7 — TECHNICAL DEPTH
   ───────────────────────────────────────────────────────── */
const SectionTechnical = () => (
   <section className="py-16 lg:py-24 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Technical Governance</span>
               <h2 className="c9-section-heading mb-6">Asset Lifecycle Management</h2>
               <p className="c9-body mb-8">
                  We don't just manage users; we manage the entire lifecycle of your technological footprint.
               </p>
               <div className="space-y-4">
                  {[
                     { icon: <Server size={20} />, title: 'Asset Tracking & Compliance', desc: 'Real-time inventory of every hardware and software asset in your business.' },
                     { icon: <Lock size={20} />, title: 'Vendor Management', desc: 'We act as the single point of contact for ISPs, software vendors, and hardware partners.' },
                     { icon: <Network size={20} />, title: 'Infrastructure Lifecycle', desc: 'Proactive planning for refreshes, preventing performance degradation.' }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4 p-5 rounded-lg bg-slate-50 border border-slate-100 hover:border-[#5D00D6]/20 transition-all">
                        <div className="text-[#5D00D6]">{item.icon}</div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-[16px] mb-1">{item.title}</h4>
                           <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </FadeIn>
            <FadeIn direction="right" className="bg-[#0c1024] rounded-lg p-10 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5D00D6] opacity-10 rounded-full blur-[100px]" />
               <div className="relative z-10">
                  <h4 className="text-lg font-bold mb-8">Management Framework</h4>
                  <div className="space-y-6">
                     <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-black text-[#a56eff] mb-3">Governance</div>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">vCIO Oversight</span>
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">Budget Roadmapping</span>
                        </div>
                     </div>
                     <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-black text-[#a56eff] mb-3">ITSM Tools</div>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">ConnectWise Manage</span>
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">Real-time BI Dashboards</span>
                        </div>
                     </div>
                     <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-black text-[#a56eff] mb-3">Assets</div>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">Warranty Management</span>
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">Software Auditing</span>
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
               <h2 className="c9-section-heading">The Commercial Impact</h2>
            </FadeIn>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {[
               { title: 'Eliminate Management Overhead', desc: 'No more managing IT staff, reviews, or technical recruitment. We handle the people, you handle the profit.' },
               { title: 'Headcount Scalability', desc: 'Add 10 or 100 staff without worrying about IT capacity. Our department model scales with your payroll.' },
               { title: 'Enterprise Tooling Included', desc: 'Access the world\'s best RMM, security, and management tools without individual licensing costs.' }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="text-center p-8 bg-white rounded-lg border border-slate-200 shadow-sm">
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
export default function ITOutsourcingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionPersonas />
      <SectionHowItWorks />
      <SectionOutcomes />
      <SectionAccountability />

      <SectionTechnical />
      <SectionImpact />

      <WpDefenseBanner 
        title={<>Managed IT is not <span className="text-[#5D00D6]">Managed Security.</span></>}
        description="Don't assume your outsourcing provider is actively hunting threats. C9 Defense adds a dedicated security layer to your outsourced IT department."
        buttonText="Learn About C9 Defense"
        href="https://c9defense.com.au/"
      />

      <ContinueJourney 
        title="Total Accountability Beyond Outsourcing."
        description="When we own your IT department, we optimize every layer—from connectivity to security. See how it all connects."
        links={[
          { label: 'Helpdesk Support', path: '/managed-it/helpdesk-support' },
          { label: 'Network Solutions', path: '/managed-it/network-solutions' },
          { label: 'Managed Cloud', path: '/managed-it/cloud-services' },
          { label: 'Infrastructure', path: '/managed-it/infrastructure' }
        ]}
      />

      <section id="consultation-section" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="READY TO OUTSOURCE YOUR IT?"
          title="Book Your Department Audit"
          description="We'll review your current setup and provide a clear roadmap for a fully managed, outsourced IT department."
          formTitle="Request Outsourcing Proposal"
        />
      </section>
    </main>
  );
}
