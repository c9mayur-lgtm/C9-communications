'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, ShieldCheck, Zap, 
  Monitor, Lock, Activity, Users, 
  Server, Database, HardDrive, Cpu, ShieldAlert,
  Wrench, RefreshCcw
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
               <span className="c9-eyebrow !mb-0">Infrastructure Governance & Control</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Enterprise Infrastructure Governance & <span className="text-[#5D00D6]">SLA Enforcement.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[580px]">
                C9 provides the operational closure layer for your core infrastructure, ensuring SLA enforcement, continuous security governance, and absolute accountability across your entire environment.
             </p>
          </FadeIn>

          <FadeIn delay={0.22}>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                   'SLA Enforcement Model',
                   'Continuous Security Governance',
                   'Infrastructure Uptime Control',
                   'Multi-Vendor Orchestration'
                ].map((item) => (
                   <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={12} className="text-[#5D00D6] shrink-0" />
                      <span className="text-slate-700 font-bold text-[14px]">{item}</span>
                   </div>
                ))}
             </div>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col items-start gap-6">
                <div className="flex flex-col sm:flex-row gap-4">
                   <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-7 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap c9-button-label"
                   >
                      Request Infrastructure Assessment
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                   </a>
                   <a
                      href="#sla-framework"
                      className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-7 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white c9-button-label"
                   >
                      Review SLA Framework
                   </a>
                </div>
                <a
                   href="#consultation"
                   className="inline-flex items-center gap-1.5 text-slate-400 text-[14px] font-medium hover:text-[#5D00D6] transition-colors group whitespace-nowrap c9-button-label"
                >
                   Talk to an Infrastructure Architect
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
               <span className="c9-eyebrow mb-4" id="sla-framework">SLA Governance</span>
               <h2 className="c9-section-heading">Operational SLA Enforcement — Not Just Documentation</h2>
               <p className="c9-body text-slate-600 mt-4">
                  We treat SLAs as a live operational system, not a passive legal document. Every response target is tied directly to our infrastructure monitoring and incident control layers.
               </p>
            </FadeIn>
         </div>
         
         <div className="grid md:grid-cols-3 gap-8">
            <FadeIn id="monitoring-alignment" className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <Activity size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Monitoring Alignment</h3>
               <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
                  SLA targets are programmatically tied to real-time system health telemetry, ensuring response activation is triggered by operational events, not human reports.
               </p>
               <ul className="space-y-3">
                  {['Automated Incident Triggering', 'Continuous Health Telemetry', 'Live Uptime Verification'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-[14px] font-bold text-slate-900">
                        <CheckCircle size={14} className="text-[#5D00D6]" /> {item}
                     </li>
                  ))}
               </ul>
            </FadeIn>

            <FadeIn id="audited-workflows" delay={0.1} className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <Cpu size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Audited Workflows</h3>
               <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
                  Resolution paths are predefined and audited to ensure compliance with enterprise-grade stability standards and recovery time objectives.
               </p>
               <ul className="space-y-3">
                  {['Standardised Recovery Paths', 'Incident Lifecycle Logging', 'Post-Incident Review (PIR)'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-[14px] font-bold text-slate-900">
                        <CheckCircle size={14} className="text-[#5D00D6]" /> {item}
                     </li>
                  ))}
               </ul>
            </FadeIn>

            <FadeIn id="enforced-escalation" delay={0.2} className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
               <div className="w-12 h-12 bg-[#5D00D6]/10 rounded-xl flex items-center justify-center text-[#5D00D6] mb-6">
                  <ShieldCheck size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Enforced Escalation</h3>
               <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
                  A strict hierarchical response model ensures critical failures bypass general support queues, granting immediate access to senior engineering leads.
               </p>
               <ul className="space-y-3">
                  {['Predefined Tier-3 Routing', 'Direct Engineering Access', 'Executive Stakeholder Alerting'].map(item => (
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
   <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Incident Response</span>
               <h2 className="c9-section-heading mb-6">Severity-Based Response & Resolution Ownership</h2>
               <p className="c9-body text-slate-600">We utilize a structured classification model to ensure every incident triggers a specific operational workflow with clear ownership and resolution logic.</p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-4 gap-6">
            {[
               { step: '01', title: 'Severity Classification', desc: 'Automated triage based on business impact: Critical, High, Medium, or Low severity levels.' },
               { step: '02', title: 'Response Activation', desc: 'Direct alerting to assigned infrastructure leads and primary escalation points for immediate triage.' },
               { step: '03', title: 'Orchestrated Escalation', desc: 'Coordinated technical response across internal leads and third-party vendors under unified control.' },
               { step: '04', title: 'Resolution Verification', desc: 'Formal root-cause confirmation and system validation before incident closure and stakeholder reporting.' },
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
               <span className="c9-eyebrow !text-[#a56eff] mb-4">Infrastructure Oversight</span>
               <h2 className="c9-section-heading !text-white mb-6">Continuous Monitoring & Anomaly Detection</h2>
               <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-bold text-[#a56eff] mb-1">Active</div>
                     <div className="text-[14px] text-white/60 uppercase tracking-widest font-bold">24/7 Monitoring</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-bold text-[#a56eff] mb-1">Proactive</div>
                     <div className="text-[14px] text-white/60 uppercase tracking-widest font-bold">Anomaly Detection</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-bold text-[#a56eff] mb-1">Total</div>
                     <div className="text-[14px] text-white/60 uppercase tracking-widest font-bold">Environment Visibility</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                     <div className="text-[32px] font-bold text-[#a56eff] mb-1">Real-Time</div>
                     <div className="text-[14px] text-white/60 uppercase tracking-widest font-bold">Health Tracking</div>
                  </div>
               </div>
               <p className="c9-body text-white/80 mb-8">
                  Our monitoring layer provides continuous visibility into every component of your infrastructure, identifying potential failure points before they impact business operations.
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
                  <span className="c9-eyebrow mb-4">Accountability Structure</span>
                  <h2 className="c9-section-heading mb-6">Single Operational Ownership & Vendor Coordination</h2>
                  <p className="c9-body mb-8">
                     We act as the single operational owner of your technology footprint, managing all system dependencies and coordinating multiple vendors under one unified escalation framework.
                  </p>
                  <div className="space-y-6">
                     {[
                        { title: 'Eliminating Vendor Blame', desc: 'One point of accountability for all incidents, regardless of which third-party system is involved.' },
                        { title: 'Single Escalation Authority', desc: 'Direct authority over third-party providers to ensure compliance with infrastructure resolution targets.' },
                        { title: 'Unified Control System', desc: 'Coordinated governance across IT, Cloud, and Telco providers into one reporting layer.' }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="mt-1"><CheckCircle size={12} className="text-[#5D00D6]" /></div>
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
                     <Database size={20} className="text-[#5D00D6]" /> Operational Service Levels
                  </h4>
                  <div className="space-y-4">
                     {[
                        { label: 'Monitoring', value: '24/7 Active Operations', sub: 'Real-Time Threat Visibility' },
                        { label: 'Response', value: 'Tiered Priority Routing', sub: 'Immediate Critical Action' },
                        { label: 'Escalation', value: 'Direct Engineering Access', sub: 'No Tier-1 Waiting' },
                        { label: 'Resolution', value: 'Root-Cause Ownership', sub: 'SLA-Driven Execution' }
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
   <section className="py-16 lg:py-20 bg-slate-50">
      <div className={C}>
         <FadeIn className="text-center mb-16">
            <span className="c9-eyebrow mb-4">Operational Standards</span>
            <h2 className="c9-section-heading">Uptime & Performance Governance</h2>
            <p className="c9-body text-slate-600 max-w-2xl mx-auto mt-4">
               System stability is maintained through a rigorous governance model that tracks uptime, performance metrics, and recurring issue elimination.
            </p>
         </FadeIn>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               { icon: <Activity />, name: 'Uptime Tracking', desc: 'Continuous measurement of system availability against strict SLA targets.' },
               { icon: <Zap />, name: 'Performance Ops', desc: 'Real-time monitoring of resource utilization and latency thresholds.' },
               { icon: <ShieldCheck />, name: 'Stability Oversight', desc: 'Governance layer ensuring long-term infrastructure health and reliability.' },
               { icon: <RefreshCcw />, name: 'Issue Elimination', desc: 'Systemic identification and removal of recurring failure points.' }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white border border-slate-200 p-8 rounded-[32px] hover:border-[#5D00D6]/20 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
                     {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">{item.name}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                  <a href="#consultation" className="inline-flex items-center gap-2 text-[#5D00D6] text-[13px] font-bold group-hover:gap-3 transition-all">
                     Review Framework <ArrowRight size={14} />
                  </a>
               </FadeIn>
            ))}
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
               <span className="c9-eyebrow mb-4">Security Governance</span>
               <h2 className="c9-section-heading mb-6">Continuous Security & Threat Monitoring Layer</h2>
               <p className="c9-body mb-8">
                  Security is not a feature — it is an operational layer integrated directly into our infrastructure management and monitoring systems.
               </p>
               <div className="space-y-4">
                  {[
                     { icon: <Activity size={20} />, title: 'Continuous Threat Monitoring', desc: 'Active threat detection telemetry integrated into core infrastructure oversight for real-time visibility.' },
                     { icon: <Lock size={20} />, title: 'System Access Governance', desc: 'Enforced identity and access management controls with granular audit trails and logging.' },
                     { icon: <ShieldCheck size={20} />, title: 'Incident Detection & Response', desc: 'Predefined response flows for security anomalies, triggered directly by operational monitoring events.' }
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
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a56eff] mb-3">Monitoring & Response</div>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-semibold">24/7 Active Monitoring</span>
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-semibold">Tiered Incident Response</span>
                        </div>
                     </div>
                     <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a56eff] mb-3">Infrastructure Control</div>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-semibold">Hybrid-Cloud Governance</span>
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-semibold">Immutable Data Protection</span>
                        </div>
                     </div>
                     <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a56eff] mb-3">Compliance</div>
                        <div className="flex flex-wrap gap-4">
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-semibold">ISO 27001 Aligned</span>
                           <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-semibold">Regulatory Logging</span>
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
               <h2 className="c9-section-heading">Qualification: Operational Boundaries</h2>
               <p className="c9-body text-slate-600 mt-4">We are an enterprise-grade operational partner. To maintain high-trust performance, we strictly define the scope of our management model.</p>
            </FadeIn>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {[
               { title: 'Not Passive Monitoring', desc: 'We do not just watch systems. We actively govern and remediate anomalies under a proactive enforcement model.' },
               { title: 'Not Reactive Break-Fix', desc: 'We are not an ad-hoc support service. Our model is built on continuous stability and risk prevention.' },
               { title: 'Not Advisory-Only', desc: 'We do not just provide reports. We implement, manage, and own the security and operational outcomes of your infrastructure.' }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="text-center p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mx-auto mb-6">
                     <ShieldAlert size={24} />
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
        title={<>Unmanaged Infrastructure is a <span className="text-[#5D00D6]">Hidden Operational Risk.</span></>}
        description="SLA without operational enforcement provides zero protection. Request an assessment to review your infrastructure readiness and SLA governance."
        buttonText="Review SLA + Security Framework"
        href="#sla-framework"
      />

      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="OPERATIONAL RISK CLOSURE"
          title="Eliminate Hidden Infrastructure Risk"
          description="SLA without operational enforcement provides no protection. Request a high-trust assessment to review your environment readiness and SLA governance framework."
          formTitle="Request Infrastructure Assessment"
        />
      </section>
    </main>
  );
}
