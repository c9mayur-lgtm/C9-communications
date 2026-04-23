'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, ShieldCheck, Zap, 
  Monitor, Lock, Activity, Users, 
  Cloud, CloudLightning, CloudOff, Database, Server,
  RefreshCw, BarChart, Search, Globe, ShieldAlert,
  Layers, HardDrive, Layout
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";

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
  <section className="relative overflow-hidden bg-white pt-8 pb-0 lg:pt-12">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />
    
    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center pb-10 lg:pb-16">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
               <Cloud size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0">Managed Cloud Systems</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Cloud Architecture Built for <span className="text-[#5D00D6]">Zero Disruption & Infinite Scale.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[580px]">
                C9 Communications handles everything from initial cloud architecture and complex migrations to ongoing management across multi-site operations. We ensure your systems are ready for growth, not just "in the cloud."
             </p>
          </FadeIn>

          <FadeIn delay={0.22}>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                   'Multi-Site Deployments',
                   'Migration Expertise',
                   '24/7 Managed Support',
                   'Azure & AWS Certified Architects'
                ].map((item) => (
                   <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-[#5D00D6] shrink-0" />
                      <span className="text-slate-700 font-bold text-[14px]">{item}</span>
                   </div>
                ))}
             </div>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col items-start gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                   <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-7 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
                   >
                      Plan Your Cloud Setup
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                   </a>
                   <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-7 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white"
                   >
                      Get a Migration Roadmap
                   </a>
                </div>
                <a
                   href="#consultation"
                   className="inline-flex items-center gap-1.5 text-slate-400 text-[14px] font-medium hover:text-[#5D00D6] transition-colors group whitespace-nowrap"
                >
                   Or speak with a cloud architect
                   <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </a>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group border-8 border-slate-50">
              <img
                 src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
                 alt="Managed Cloud Infrastructure"
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/60 shadow-xl">
                 <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Cloud Control Center</span>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[10px] uppercase tracking-wider">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active Monitoring
                    </span>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                       <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Global Reach</div>
                       <div className="text-[14px] font-extrabold text-slate-900 leading-none">Multi-Region ✓</div>
                    </div>
                    <div>
                       <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Compliance</div>
                       <div className="text-[14px] font-extrabold text-slate-900 leading-none">Audit Ready</div>
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
   SECTION 2 — PROBLEM FRAMING
   ───────────────────────────────────────────────────────── */
const SectionProblems = () => (
   <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-10">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Infrastructure Risks</span>
               <h2 className="c9-section-heading">When Your Infrastructure Limits Your Growth.</h2>
            </FadeIn>
         </div>
         
         <div className="grid md:grid-cols-4 gap-6">
            {[
               { icon: <CloudOff className="text-red-500" />, title: 'Non-Scaling Systems', desc: 'Infrastructure that can’t keep up with new site demands or user growth.' },
               { icon: <ShieldAlert className="text-red-500" />, title: 'Risky Migrations', desc: 'Fear of data loss or extended downtime during the transition to cloud.' },
               { icon: <Layers className="text-red-500" />, title: 'Fragmented Infra', desc: 'Hybrid environments that create blind spots and operational silos.' },
               { icon: <Activity className="text-red-500" />, title: 'Downtime Concerns', desc: 'System instability that impacts daily operations and revenue.' }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                     {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h4>
                  <p className="text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
               </FadeIn>
            ))}
         </div>
         
         <FadeIn delay={0.4} className="mt-12 text-center">
            <p className="text-slate-600 font-medium">Cloud isn't just a feature — it's the solution to your operational bottlenecks.</p>
         </FadeIn>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — PERSONA SEGMENT BLOCK
   ───────────────────────────────────────────────────────── */
const SectionPersonas = () => (
   <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-10">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Strategic Paths</span>
               <h2 className="c9-section-heading">Tailored Cloud Strategy for Your Business Phase</h2>
            </FadeIn>
         </div>
         
         <div className="grid md:grid-cols-3 gap-8">
            <FadeIn className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">

               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <Zap size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4 text-slate-900">Greenfield</h3>
               <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
                  Day-one readiness. We design and deploy cloud environments that are fully operational before your physical sites even open their doors.
               </p>
               <ul className="space-y-3">
                  {['Instant Deployment', 'Scalable Day 1', 'Zero Hardware Management'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-[14px] font-bold text-slate-900">
                        <CheckCircle size={14} className="text-[#5D00D6]" /> {item}
                     </li>
                  ))}
               </ul>
            </FadeIn>

            <FadeIn delay={0.1} className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">

               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <RefreshCw size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4 text-slate-900">Brownfield</h3>
               <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
                  Structured migration. We transition legacy systems to the cloud using a phased approach that minimizes disruption and eliminates technical debt.
               </p>
               <ul className="space-y-3">
                  {['Seamless Migration', 'Legacy Consolidation', 'Phased Rollouts'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-[14px] font-bold text-slate-900">
                        <CheckCircle size={14} className="text-[#5D00D6]" /> {item}
                     </li>
                  ))}
               </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">

               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <Layout size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4 text-slate-900">Enterprise IT</h3>
               <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
                  Architecture and control. We provide highly secure, scalable architectures with full visibility, governance, and SLA-backed management.
               </p>
               <ul className="space-y-3">
                  {['Governance Frameworks', 'Predictable Costs', 'Enterprise SLA'].map(item => (
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
   SECTION 4 — CLOUD ARCHITECTURE APPROACH
   ───────────────────────────────────────────────────────── */
const SectionArchitecture = () => (
   <section className="py-12 lg:py-16 bg-[#0c1024] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow !text-[#a56eff] mb-4">Architecture Design</span>
               <h2 className="c9-section-heading !text-white mb-6">Engineered for Performance.</h2>
               <p className="c9-body text-white/80 mb-8">
                  We don't just "move" you to the cloud. We design an environment tailored to your specific performance, redundancy, and security requirements.
               </p>
               <div className="space-y-6">
                  {[
                     { title: 'Public / Private / Hybrid', desc: 'Customized deployment models that balance cost-efficiency with high-level security.' },
                     { icon: <Zap />, title: 'Performance Tuning', desc: 'Ongoing optimization of resources to ensure lightning-fast response times.' },
                     { icon: <ShieldCheck />, title: 'Redundancy & Failover', desc: 'Built-in business continuity with automated failover across multiple zones.' }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="mt-1 text-[#a56eff]"><CheckCircle size={20} /></div>
                        <div>
                           <h4 className="font-bold text-[14px] text-white">{item.title}</h4>
                           <p className="text-white/60 text-sm">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </FadeIn>
            <FadeIn direction="right" className="bg-white/5 p-8 lg:p-12 rounded-[40px] border border-white/10">
               <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <Database size={24} className="text-[#a56eff]" /> The Cloud Stack
               </h4>
               <div className="space-y-8">
                  <div>
                     <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a56eff] mb-4">Cloud Platforms</div>
                     <div className="flex flex-wrap gap-3">
                        {['Azure', 'AWS', 'Google Cloud', 'Private Cloud'].map(tag => (
                           <span key={tag} className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs font-bold">{tag}</span>
                        ))}
                     </div>
                  </div>
                  <div>
                     <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a56eff] mb-4">Data Sovereignty</div>
                     <div className="flex flex-wrap gap-3">
                        {['Local Hosting', 'Geo-Redundancy', 'Encryption at Rest'].map(tag => (
                           <span key={tag} className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs font-bold">{tag}</span>
                        ))}
                     </div>
                  </div>
                  <div>
                     <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a56eff] mb-4">Access Control</div>
                     <div className="flex flex-wrap gap-3">
                        {['Conditional Access', 'Identity Management', 'Role-Based Permissions'].map(tag => (
                           <span key={tag} className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs font-bold">{tag}</span>
                        ))}
                     </div>
                  </div>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — MIGRATION MODEL
   ───────────────────────────────────────────────────────── */
const SectionMigration = () => (
   <section className="py-12 lg:py-16 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
            <FadeIn direction="left" className="relative">
               <div className="rounded-[40px] overflow-hidden border-8 border-slate-50 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" alt="Cloud Migration" className="w-full aspect-[4/5] object-cover" />
               </div>
               <div className="absolute -bottom-8 -right-8 bg-[#5D00D6] text-white p-8 rounded-[32px] shadow-2xl max-w-[240px]">
                  <div className="text-3xl font-bold mb-2">Zero</div>
                  <div className="text-sm font-bold leading-tight opacity-80 uppercase tracking-wider">Unplanned Downtime During Migration</div>
               </div>
            </FadeIn>
            
            <FadeIn direction="right">
               <span className="c9-eyebrow mb-4">Migration Excellence</span>
               <h2 className="c9-section-heading mb-6">Migration is Controlled, Not Risky.</h2>
               <p className="c9-body mb-8 text-slate-600">
                  Our structured migration model ensures that your data and applications move to the cloud without the usual "moving day" headaches.
               </p>
               <div className="space-y-6">
                  {[
                     { title: 'System Assessment', desc: 'We audit your existing workloads to identify dependencies and optimize resources before moving.' },
                     { title: 'Migration Planning', desc: 'Phased vs. full-scale transition plans designed to fit your operational windows.' },
                     { title: 'Risk Control', desc: 'Comprehensive testing protocols and rollback strategies for every single workload.' },
                     { title: 'Modernisation', desc: 'We don’t just move code; we refactor for cloud performance and security.' }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:border-[#5D00D6]/20">
                        <div className="w-8 h-8 bg-[#5D00D6]/10 rounded-lg flex items-center justify-center text-[#5D00D6] shrink-0 font-bold text-xs">
                           {i + 1}
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                           <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — HOW IT WORKS (PROCESS)
   ───────────────────────────────────────────────────────── */
const SectionProcess = () => (
   <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">The Process</span>
               <h2 className="c9-section-heading mb-6">Structured Cloud Transformation</h2>
               <p className="c9-body text-slate-600">A rigorous approach to building cloud environments that never stop.</p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-6 gap-5">
            {[
               { step: '01', title: 'Assessment', desc: 'Workload & readiness audit.' },
               { step: '02', title: 'Architecture', desc: 'Custom cloud design.' },
               { step: '03', title: 'Planning', desc: 'Phased roadmap.' },
               { step: '04', title: 'Deployment', desc: 'Environment build-out.' },
               { step: '05', title: 'Optimization', desc: 'Tuning for performance.' },
               { step: '06', title: 'Management', desc: '24/7 ongoing support.' },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="relative bg-white p-6 rounded-3xl border border-slate-200 shadow-sm group hover:border-[#5D00D6]/30 transition-all">
                  <div className="text-[32px] font-black text-slate-100 group-hover:text-[#5D00D6]/10 transition-colors absolute top-4 right-4 leading-none">
                     {s.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#5D00D6] text-white flex items-center justify-center font-bold text-[16px] mb-6 relative z-10 shadow-md">
                     {i + 1}
                  </div>
                  <h4 className="c9-card-title mb-3 relative z-10">{s.title}</h4>
                  <p className="text-slate-500 text-[13px] leading-relaxed relative z-10">{s.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — PROOF & REALITY
   ───────────────────────────────────────────────────────── */
const SectionProof = () => (
   <section className="py-12 lg:py-16 bg-white">
      <div className={C}>
         <div className="bg-[#0c1024] rounded-[48px] p-10 lg:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5D00D6] opacity-10 rounded-full blur-[120px] -mr-80 -mt-80" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
               <div>
                  <span className="c9-eyebrow !text-[#a56eff] mb-4">Proof & Reality</span>
                  <h2 className="c9-section-heading !text-white mb-6">Cloud Performance Delivered.</h2>
                  <p className="c9-body text-white/70 mb-10">
                     We've successfully migrated complex, multi-site operations with zero downtime, proving that cloud transformation doesn't have to be a risk.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-8">
                     <div>
                        <div className="text-3xl font-bold text-[#a56eff] mb-2">99.9%</div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-white/40 leading-tight">Uptime Maintained During Transition</div>
                     </div>
                     <div>
                        <div className="text-3xl font-bold text-[#a56eff] mb-2">35%</div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-white/40 leading-tight">Increase in Deployment Efficiency</div>
                     </div>
                     <div>
                        <div className="text-3xl font-bold text-[#a56eff] mb-2">60%</div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-white/40 leading-tight">Reduced Internal IT Overhead</div>
                     </div>
                  </div>
               </div>
               
               <div className="bg-white/5 rounded-[32px] p-8 border border-white/10">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                     <div className="w-12 h-12 bg-[#5D00D6] rounded-full flex items-center justify-center font-bold text-xl">R</div>
                     <div>
                        <div className="font-bold">Retail Group Migration</div>
                        <div className="text-xs text-white/40">45+ Stores · 240+ Workloads</div>
                     </div>
                  </div>
                  <p className="text-sm text-white/80 italic leading-relaxed">
                     "C9 migrated our entire store infrastructure to Azure across a single weekend. Our staff logged in on Monday morning with zero awareness that our entire backend had changed. Zero calls to helpdesk. Perfect execution."
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — INTEGRATION ECOSYSTEM
   ───────────────────────────────────────────────────────── */
const SectionIntegration = () => (
   <section className="py-10 bg-slate-50">
      <div className={C}>
         <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#0c1024] p-8 md:p-12 rounded-[32px] text-white">
            <div className="max-w-md">
               <h3 className="text-2xl font-bold mb-4 text-white">Cloud is Part of a System</h3>
               <p className="text-white/80 text-sm">
                  Your cloud environment shouldn't be a standalone silo. We integrate it deeply with your broader technical ecosystem for total control.
               </p>
            </div>
            <div className="flex flex-wrap gap-3">
               {[
                  { name: 'Network Solutions', href: '/managed-it/network-solutions' },
                  { name: 'Infrastructure', href: '/managed-it/infrastructure' },
                  { name: 'Helpdesk Support', href: '/managed-it/helpdesk-support' },
                  { name: 'C9 Defense', href: '/c9-defense' }
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
   SECTION 9 — SECURITY & COMPLIANCE
   ───────────────────────────────────────────────────────── */
const SectionSecurity = () => (
   <section className="py-12 lg:py-16 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Security Hardening</span>
               <h2 className="c9-section-heading mb-6">Cloud Security is Non-Negotiable.</h2>
               <p className="c9-body mb-8 text-slate-600">
                  Managed cloud means managed security. We align your environment with industry-standard security frameworks to ensure your data is always protected.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                     { icon: <Lock size={20} />, title: 'Data Protection', desc: 'End-to-end encryption for data at rest and in transit.' },
                     { icon: <Activity size={20} />, title: 'Active Monitoring', desc: '24/7 threat detection and anomalous behavior alerts.' },
                     { icon: <Users size={20} />, title: 'Access Control', desc: 'Strict identity management and MFA enforcement.' },
                     { icon: <ShieldCheck size={20} />, title: 'Compliance Ready', desc: 'Environments built to meet Essential 8 and ISO standards.' }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="mt-1 text-[#5D00D6]">{item.icon}</div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                           <p className="text-slate-500 text-[12px] leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </FadeIn>
            
            <FadeIn direction="right" className="bg-slate-50 p-10 rounded-[40px] border border-slate-100">
               <h4 className="font-bold text-[12px] uppercase tracking-[0.2em] text-[#5D00D6] mb-8">Security Audit Dashboard</h4>
               <div className="space-y-6">
                  {[
                     { label: 'Identity Protection', value: '100%', color: 'bg-emerald-500' },
                     { label: 'Network Isolation', value: '98%', color: 'bg-emerald-500' },
                     { label: 'Data Encryption', value: '100%', color: 'bg-emerald-500' },
                     { label: 'Threat Monitoring', value: 'Active', color: 'bg-emerald-500' }
                  ].map(row => (
                     <div key={row.label} className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-700">{row.label}</span>
                        <div className="flex items-center gap-3">
                           <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                              <div className={`h-full ${row.color}`} style={{ width: row.value === 'Active' ? '100%' : row.value }} />
                           </div>
                           <span className="text-xs font-bold text-slate-900 w-12">{row.value}</span>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="mt-10 p-5 bg-[#0c1024] rounded-2xl text-white flex items-center gap-4">
                  <ShieldAlert className="text-[#a56eff]" />
                  <div>
                     <div className="text-xs font-bold">Threat Mitigation Enabled</div>
                     <div className="text-[10px] text-white/50">Monitoring 2,400+ endpoints in real-time</div>
                  </div>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 10 — COMMERCIAL IMPACT
   ───────────────────────────────────────────────────────── */
const SectionImpact = () => (
   <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-10">
            <FadeIn>
               <h2 className="c9-section-heading">Cloud is a Business Decision.</h2>
            </FadeIn>
         </div>
         <div className="grid md:grid-cols-4 gap-8">
            {[
               { title: 'Reduced Infra Cost', desc: 'No more aging server cycles or massive CapEx hits.' },
               { title: 'Unlimited Scale', desc: 'Spin up new sites or regions in hours, not weeks.' },
               { title: 'Internal IT Focus', desc: 'Free your team from maintaining hardware silos.' },
               { title: 'Faster Site Rollout', desc: 'Standardized cloud blueprints for rapid expansion.' }
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
export default function CloudServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionProblems />
      <SectionPersonas />
      <SectionArchitecture />
      <SectionMigration />
      <SectionProcess />
      <SectionProof />
      <SectionIntegration />
      <SectionSecurity />
      <SectionImpact />

      <WpDefenseBanner 
        title={<>Managed Cloud Needs <span className="text-[#a56eff]">Active Defense.</span></>}
        description="Public cloud is public by default. We wrap your managed environment in an enterprise-grade security layer so your systems stay protected from the core outward."
        buttonText="Learn About C9 Defense"
        href="/c9-defense"
      />

      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="READY TO MOVE?"
          title="Get Your Cloud Migration Strategy"
          description="We'll audit your current workloads, identify risks, and show you exactly how to transition to a scalable, managed cloud model."
          formTitle="Request Cloud Strategy Session"
        />

      </section>
    </main>
  );
}
