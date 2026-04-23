'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, ShieldCheck, Zap, 
  Monitor, Lock, Activity, Users, 
  Server, Database, HardDrive, Cpu, ShieldAlert
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";
import { InfrastructureBackboneVisual } from '../network-solutions/components/InfrastructureBackboneVisual';

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
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center pb-10 lg:pb-16">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
               <Server size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0">Continuous Infrastructure Operations</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Infrastructure Operations That Eliminate <span className="text-[#5D00D6]">Systemic Failure.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[580px]">
                We architect and manage the resilient backbone of your business. From multi-site server clusters to immutable data protection, we own the stability and performance of your core IT environment.
             </p>
          </FadeIn>

          <FadeIn delay={0.22}>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                   'Multi-Site System Resilience',
                   'Automated Infrastructure Recovery',
                   '24/7 Backbone Monitoring',
                   'Operational Continuity Guarantee'
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
                <div className="flex flex-col sm:flex-row gap-4">
                   <a
                      href="#greenfield"
                      className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-7 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
                   >
                      Architect New Site
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                   </a>
                   <a
                      href="#brownfield"
                      className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-7 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white"
                   >
                      Modernise Your Stack
                   </a>
                   <a
                      href="#enterprise"
                      className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-7 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white"
                   >
                      Optimise Core Systems
                   </a>
                </div>
                <a
                   href="#consultation"
                   className="inline-flex items-center gap-1.5 text-slate-400 text-[13px] font-medium hover:text-[#5D00D6] transition-colors group whitespace-nowrap"
                >
                   Or speak with an infrastructure architect
                   <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </a>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <InfrastructureBackboneVisual />
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — PERSONAS
   ───────────────────────────────────────────────────────── */
const SectionPersonas = () => (
   <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Strategic Operations</span>
               <h2 className="c9-section-heading">Architected for Scale. Managed for Uptime.</h2>
            </FadeIn>
         </div>
         
         <div className="grid md:grid-cols-3 gap-8">
            <FadeIn id="greenfield" className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <Cpu size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Growth-Ready Infrastructure</h3>
               <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                  Infrastructure built for rapid site expansion. We deploy redundant, high-performance systems that ensure your business continuity is never a bottleneck to your growth.
               </p>
               <ul className="space-y-3">
                  {['Multi-Site Resilience', 'Day-1 Operational Readiness', 'Enterprise Scale-Out'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-[13px] font-bold text-slate-900">
                        <CheckCircle size={14} className="text-[#5D00D6]" /> {item}
                     </li>
                  ))}
               </ul>
            </FadeIn>

            <FadeIn id="brownfield" delay={0.1} className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <Activity size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Operational Stabilization</h3>
               <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                  Consolidating fragmented infrastructure. We transition legacy server environments into stable, managed hybrid stacks that eliminate technical debt and performance risks.
               </p>
               <ul className="space-y-3">
                  {['Legacy Workload Migration', 'Full Stack Stabilisation', 'Managed Hybrid Setup'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-[13px] font-bold text-slate-900">
                        <CheckCircle size={14} className="text-[#5D00D6]" /> {item}
                     </li>
                  ))}
               </ul>
            </FadeIn>

            <FadeIn id="enterprise" delay={0.2} className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <Server size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">SLA-Driven Performance</h3>
               <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                  Enterprise-grade system management. We operate your core server, storage, and backup systems to strict availability targets, giving your team the freedom to focus on high-impact projects.
               </p>
               <ul className="space-y-3">
                  {['SLA Availability Targets', 'Proactive Capacity MGMT', 'Recovery Verification'].map(item => (
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
   <section className="py-12 lg:py-16 bg-white">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Operational Methodology</span>
               <h2 className="c9-section-heading mb-6">A Discipline of Continuous Stability</h2>
               <p className="c9-body text-slate-600">We don't just rack and stack. We follow a rigorous operational framework to ensure your core systems remain resilient, secure, and ready for distributed scale.</p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-4 gap-6">
            {[
               { step: '01', title: 'Workload Engineering', desc: 'Comprehensive audit of system interdependencies, data throughput, and multi-year scalability requirements.' },
               { step: '02', title: 'Resilient Architecture', desc: 'Building high-availability server and storage clusters with redundancy at every layer to prevent single-point failures.' },
               { step: '03', title: 'Operational Transition', desc: 'Executing workload migrations through a controlled, low-risk process that ensures data integrity and zero business disruption.' },
               { step: '04', title: 'Continuous Maintenance', desc: 'Ongoing infrastructure operations including real-time monitoring, security patching, and lifecycle hardware management.' },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="relative bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:bg-white hover:border-[#5D00D6]/30 hover:shadow-xl transition-all">
                  <div className="text-[40px] font-bold text-slate-200 group-hover:text-[#5D00D6]/10 transition-colors absolute top-6 right-6 leading-none">
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
   <section className="py-12 lg:py-16 bg-[#0c1024] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow !text-[#a56eff] mb-4">Operational Proof</span>
               <h2 className="c9-section-heading !text-white mb-6">The Backbone of Business Continuity</h2>
               <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-bold text-[#a56eff] mb-1">Continuous</div>
                     <div className="text-[13px] text-white/60 uppercase tracking-widest font-bold">System Uptime</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-bold text-[#a56eff] mb-1">Enterprise</div>
                     <div className="text-[13px] text-white/60 uppercase tracking-widest font-bold">Managed Nodes</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-bold text-[#a56eff] mb-1">Resilient</div>
                     <div className="text-[13px] text-white/60 uppercase tracking-widest font-bold">Data Protection</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-bold text-[#a56eff] mb-1">24/7</div>
                     <div className="text-[13px] text-white/60 uppercase tracking-widest font-bold">Active Response</div>
                  </div>
               </div>
               <p className="c9-body text-white/80 mb-8">
                  "C9 transformed our infrastructure from a point of failure into a silent operator. We no longer worry about server stability—it just works. They are an operational partner, not just a vendor."
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="Client" />
                  </div>
                  <div>
                     <div className="font-bold">Director of Technology</div>
                     <div className="text-xs text-white/40">National Financial Services Firm</div>
                  </div>
               </div>
            </FadeIn>

            <FadeIn direction="right" className="relative">
               <div className="relative rounded-[32px] overflow-hidden aspect-square border-4 border-white/10 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=1200" alt="Core Infrastructure Stability" className="w-full h-full object-cover" />
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
   <section className="py-12 lg:py-16 bg-white">
      <div className={C}>
         <div className="bg-slate-50 rounded-[48px] p-10 lg:p-20 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5D00D6] opacity-[0.02] rounded-full blur-[100px] -mr-64 -mt-64" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
               <div>
                  <span className="c9-eyebrow mb-4">Total Ownership</span>
                  <h2 className="c9-section-heading mb-6">Single-Partner Accountability</h2>
                  <p className="c9-body mb-8">
                     We don't just support your servers; we own their performance. If the backbone fails, we fail. That's why we build and operate for zero-failure.
                  </p>
                  <div className="space-y-6">
                     {[
                        { title: 'End-to-End Lifecycle Ownership', desc: 'We manage everything from the initial hardware procurement to decommissioning and secure data destruction.' },
                        { title: 'Outcome-Based Service Levels', desc: 'Infrastructure performance tied directly to business availability, ensuring our incentives are perfectly aligned.' },
                        { title: 'Forward-Looking Lifecycle Planning', desc: 'Proactive technology roadmapping that identifies hardware refresh requirements years in advance.' }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="mt-1"><ShieldCheck size={20} className="text-[#5D00D6]" /></div>
                           <div>
                              <strong className="block text-slate-900 text-[16px] font-bold">{item.title}</strong>
                              <span className="text-slate-500 text-[14px]">{item.desc}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-xl">
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                     <Database size={20} className="text-[#5D00D6]" /> Operational Integrity
                  </h4>
                  <div className="space-y-4">
                     {[
                        { label: 'Uptime', value: 'Operational Continuity', sub: 'Business Critical Apps' },
                        { label: 'Data Integrity', value: 'Immutable Protection', sub: 'Verified Recovery' },
                        { label: 'Operations', value: '24/7 Active Monitoring', sub: 'Real-Time Response' },
                        { label: 'Maintenance', value: 'Proactive Hardening', sub: 'Automated Patching' }
                     ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                           <div>
                              <div className="font-bold text-slate-900">{row.label}</div>
                              <div className="text-[11px] text-slate-400 uppercase font-bold">{row.sub}</div>
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
   <section className="py-12 bg-slate-50">
      <div className={C}>
         <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#0c1024] p-8 md:p-12 rounded-[32px] text-white">
            <div className="max-w-md">
               <h3 className="text-2xl font-bold mb-4 text-white">Unified Backbone</h3>
               <p className="text-white text-sm">
                  Infrastructure is the prerequisite for connectivity and security. We unify your core systems with your network and defense layer.
               </p>
            </div>
            <div className="flex flex-wrap gap-3">
               {[
                  { name: 'Network', href: '/managed-it/network-solutions' },
                  { name: 'Cloud', href: '/managed-it/cloud-services' },
                  { name: 'Security', href: '/c9-defense' },
                  { name: 'Helpdesk', href: '/managed-it/helpdesk-support' }
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
   <section className="py-12 lg:py-16 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Enterprise Architecture</span>
               <h2 className="c9-section-heading mb-6">Engineered for Distributed Scale</h2>
               <p className="c9-body mb-8">
                  We deploy enterprise-standard infrastructure technology to ensure your backbone can handle the demands of a modern, multi-site business environment.
               </p>
               <div className="space-y-4">
                  {[
                     { icon: <HardDrive size={20} />, title: 'Hyper-Converged Systems', desc: 'Integrated compute, storage, and networking layers for simplified management and rapid scalability.' },
                     { icon: <Zap size={20} />, title: 'Fault-Tolerant Clusters', desc: 'Multi-node architectures that provide seamless failover for applications that cannot afford a single second of downtime.' },
                     { icon: <ShieldAlert size={20} />, title: 'Resilient Data Protection', desc: 'Immutable backup systems that protect against encryption and deletion, ensuring recovery is always possible.' }
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
                  <h4 className="text-lg font-bold mb-8">Operational Standards</h4>
                  <div className="space-y-6">
                     <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a56eff] mb-3">Virtualisation</div>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-semibold">VMware vSphere</span>
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-semibold">Microsoft Hyper-V</span>
                        </div>
                     </div>
                     <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a56eff] mb-3">Storage & Backup</div>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-semibold">Pure Storage / SAN</span>
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-semibold">Veeam Availability</span>
                        </div>
                     </div>
                     <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a56eff] mb-3">Compliance</div>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-semibold">ISO 27001 Aligned</span>
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-semibold">24/7 SOC Managed</span>
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
   <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
               <h2 className="c9-section-heading">The Commercial Outcome</h2>
            </FadeIn>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {[
               { title: 'Risk Elimination', desc: 'Protect your revenue and reputation by removing infrastructure failure as a business risk through managed redundancy.' },
               { title: 'Predictable Operational Cost', desc: 'Transition from unpredictable hardware failure costs to a stable, planned operational model for your core systems.' },
               { title: 'Scalability Without Friction', desc: 'Spin up new workloads and expand storage capacity instantly to meet the changing demands of your organization.' }
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
export default function InfrastructurePage() {
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
        title={<>Infrastructure is the <span className="text-[#5D00D6]">Target of Opportunity.</span></>}
        description="Core systems are the most valuable assets to attackers. C9 Defense integrates directly with your infrastructure layer to provide active threat hunting and hardening."
        buttonText="Learn About C9 Defense"
        href="/c9-defense"
      />

      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="OPERATIONAL READINESS"
          title="Secure Your Infrastructure Roadmap"
          description="Our engineers will perform an operational audit of your servers, storage, and recovery systems to identify stability risks and capacity gaps."
          formTitle="Request Infrastructure Proposal"
        />
      </section>
    </main>
  );
}
