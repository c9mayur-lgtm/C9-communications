'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, HelpCircle, Clock, Search, Handshake, Target, Monitor, Lock, Cloud, PhoneCall, Users, MessageSquare, AlertCircle, Server, Activity, Database, Shield, Globe, Cpu, FileCheck, ShieldAlert, BarChart3, RefreshCw, Network, Laptop, Layers, Share2, ClipboardCheck, Check } from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { EnterpriseOfferingsSection } from '@/components/sections/EnterpriseOfferings';
import { C9Button } from '@/components/design-system/C9Button';
import { WpVendors } from '@/components/wordpress/WpVendors';
import PlatformStack from '@/components/sections/enterprise/PlatformStack';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import { ENTERPRISE_CAPABILITIES_DATA } from '@/data/enterprise-capabilities';

/* 
   ANIMATION HELPERS
    */
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
  const y = direction === 'up' ? 28 : 0;
  const x = direction === 'left' ? -28 : direction === 'right' ? 28 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

/* 
   SECTION 1  HERO (AUTHORITY + RELIABILITY)
    */
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-4 pb-0 lg:pt-8">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }}
    />

    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-14 lg:pb-20">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <ShieldCheck size={13} className="text-[#5D00D6]" aria-hidden="true" />
              <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Enterprise Infrastructure Governance</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Multi-Site Infrastructure <br/>
              <span className="text-[#5D00D6]">Control & Governance Clarity.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-8 max-w-[580px] text-slate-800">
              Centralise governance across complex distributed environments. We provide the monitoring layer and execution framework required to enforce SLA standards and absolute accountability for multi-site IT operations.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <C9Button
                  size="lg"
                  className="rounded-none shadow-lg shadow-purple-900/20"
                  onClick={() => {
                    document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Request Infrastructure Assessment
                </C9Button>
                <C9Button
                  variant="outline"
                  size="lg"
                  className="rounded-none border-2 border-[#5D00D6] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-all"
                  onClick={() => {
                    document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Review Operating Model
                </C9Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-wrap gap-x-6 gap-y-3">
                {[
                  { label: 'SLA Enforced', icon: <CheckCircle className="text-[#5D00D6]" size={14} aria-hidden="true" /> },
                  { label: 'Governance Clarity', icon: <CheckCircle className="text-[#5D00D6]" size={14} aria-hidden="true" /> },
                  { label: 'Operational Ownership', icon: <CheckCircle className="text-[#5D00D6]" size={14} aria-hidden="true" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} direction="right" className="relative hidden lg:block">
          <div className="relative z-10 rounded-none overflow-hidden shadow-2xl max-w-[90%] ml-auto aspect-[4/3] border border-slate-100">
            <Image
              src="/images/hero/enterprise.png"
              alt="Enterprise Control Center"
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              sizes="(max-width: 1280px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/60 to-transparent" />
          </div>
          
          <div className="absolute -bottom-4 -left-2 bg-white p-5 rounded-none shadow-xl border border-slate-100 z-20">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6]">
                   <Activity size={20} aria-hidden="true" />
                </div>
                <div>
                   <div className="text-xl font-black text-slate-900 leading-none">99.99%</div>
                   <div className="text-[9px] font-black text-slate-700 uppercase tracking-widest mt-1">SLA Uptime Target</div>
                </div>
             </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* 
   SECTION 2  PROBLEM FRAMING (HIGH IMPACT)
    */
const SectionProblem = () => (
  <section className="py-10 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <div className="max-w-3xl mb-10">
        <FadeIn>
          <span className="c9-eyebrow mb-4">Operational Risk & Governance Gaps</span>
          <h2 className="c9-section-heading">
            The Enterprise Reality
          </h2>
          <p className="c9-body text-slate-800 mt-6 text-lg">
            In multi-site environments, operational risk scales with complexity. Fragmented vendor ownership creates accountability vacuums that lead to systemic instability and prolonged disruption.
          </p>
        </FadeIn>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <Handshake size={24} aria-hidden="true" />, title: 'Ownership Deadlocks', desc: 'Incidents are disputed between telco, IT, and cloud vendors instead of being resolved. No single entity owns the recovery outcome.' },
          { icon: <RefreshCw size={24} aria-hidden="true" />, title: 'Operational Drift', desc: 'Inconsistent configurations across locations create systemic vulnerabilities and prevent standard security enforcement.' },
          { icon: <Monitor size={24} aria-hidden="true" />, title: 'Visibility Deficits', desc: 'Gaps in centralised monitoring mean failures are often reported by staff before internal systems detect the outage.' },
          { icon: <Users size={24} aria-hidden="true" />, title: 'Resource Misalignment', desc: 'Strategic internal IT leadership is consumed by low-level vendor coordination and reactive troubleshooting.' },
          { icon: <ShieldCheck size={24} aria-hidden="true" />, title: 'Accountability Voids', desc: 'Standard MSP promises lack the operational depth and contractual rigor required for enterprise-grade uptime.' },
          { icon: <Globe size={24} aria-hidden="true" />, title: 'Expansion Lag', desc: 'The absence of standardised infrastructure blueprints prevents rapid site rollouts and consistent performance at scale.' }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="bg-white p-8 rounded-none border border-slate-200 h-full shadow-sm hover:border-[#5D00D6]/30 transition-all">
               <div className="w-12 h-12 rounded-none bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-6 group-hover:scale-110 origin-left">
                  {item.icon}
               </div>
               <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
               <p className="text-sm text-slate-800 leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* 
   SECTION 3  CAPABILITIES (ENTERPRISE SOLUTIONS)
    */
const SectionCapabilities = () => (
  <ProblemSolutionSection 
    data={ENTERPRISE_CAPABILITIES_DATA}
    eyebrow="ENTERPRISE INFRASTRUCTURE MANAGEMENT"
    title={<>Strategic Infrastructure for <span className="text-[#5D00D6]">Enterprise Scale.</span></>}
    description="Unified, managed infrastructure with SLA-backed guarantees, compliance controls, and 24/7 accountability. Built for enterprises that cannot tolerate downtime."
  />
);

/* 
   SECTION 3  HOW C9 OPERATES (CORE DIFFERENTIATOR)
    */
const SectionHowItWorks = () => (
  <section className="py-12 bg-white overflow-hidden">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <FadeIn direction="left">
           <span className="c9-eyebrow mb-4">Multi-Site Operating Model</span>
           <h2 className="c9-section-heading mb-6">Centralised Control. Distributed Execution.</h2>
           <p className="c9-body text-slate-800 mb-10 leading-relaxed">
             Our operating model provides unified visibility across the entire enterprise footprint while maintaining high-execution capacity at every location.
           </p>
           <div className="space-y-8">
              {[
                { 
                  title: 'Centralised Monitoring Layer', 
                  icon: <Monitor aria-hidden="true" />, 
                  desc: 'A single monitoring plane tracks circuit performance, network health, and security status across all sites simultaneously.' 
                },
                { 
                  title: 'Distributed Execution Framework', 
                  icon: <Layers aria-hidden="true" />, 
                  desc: 'Localised technical response managed through a consistent operational framework to ensure resolution speed.' 
                },
                { 
                  title: 'Unified Operational Visibility', 
                  icon: <Target aria-hidden="true" />, 
                  desc: 'Direct access to operational dashboards, incident status, and SLA tracking for CIO/CTO leadership.' 
                },
                {
                  title: 'Consistent Operational Standards',
                  icon: <CheckCircle aria-hidden="true" />,
                  desc: 'Uniform SLA enforcement and hardware standards applied across all sites to eliminate configuration drift.'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                   <div className="w-12 h-12 rounded-none bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] shrink-0">
                      {item.icon}
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-800 leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </FadeIn>

        <FadeIn direction="right" className="relative">
           <div className="bg-slate-900 rounded-none p-12 text-white shadow-2xl relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/10 blur-3xl rounded-full" />
              <h3 className="text-2xl font-bold mb-8 text-white">Operating Responsibility Matrix</h3>
              <div className="space-y-6">
                 {[
                   { label: 'Carrier & Circuit Governance', val: 'C9 Accountable' },
                   { label: 'Network Infrastructure Ops', val: 'C9 Accountable' },
                   { label: 'Security Enforcement (SOC)', val: 'C9 Accountable' },
                   { label: 'SLA Performance Tracking', val: 'C9 Accountable' },
                   { label: 'Enterprise IT Strategy', val: 'Internal IT Led' }
                 ].map((row, i) => (
                   <div key={i} className="flex items-center justify-between pb-4 border-b border-white/10 last:border-0">
                      <span className="text-sm font-semibold text-white/95">{row.label}</span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-none ${row.val.includes('C9') ? 'bg-[#5D00D6] text-white' : 'bg-white/10 text-white'}`}>{row.val}</span>
                   </div>
                 ))}
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* 
   SECTION 4  PLATFORM STACK
    */
const SectionPlatform = () => (
  <div id="platform">
    <PlatformStack />
  </div>
);

/* 
   SECTION 5  GOVERNANCE DETAIL
    */
const SectionModelDetail = () => (
  <section className="py-12 bg-slate-50 relative overflow-hidden">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-10">
          <FadeIn>
             <span className="c9-eyebrow mb-4">Governance & Accountability Structure</span>
             <h2 className="c9-section-heading">Accountability Is Defined Before Deployment</h2>
          </FadeIn>
       </div>

       <div className="grid md:grid-cols-4 gap-6">
          {[
            { 
              title: 'Single Ownership Model', 
              icon: <Layers aria-hidden="true" />, 
              desc: 'We eliminate resolution deadlocks by assigning absolute ownership for every infrastructure layer. One accountable partner for all estate layers.' 
            },
            { 
              title: 'Escalation Hierarchy', 
              icon: <RefreshCw aria-hidden="true" />, 
              desc: 'P1 through P4 escalation paths are hard-coded into our operations. Incident ownership is triggered automatically based on classification.' 
            },
            { 
              title: 'Incident Ownership Clarity', 
              icon: <Target aria-hidden="true" />, 
              desc: 'We own the outcome, not just the ticket. Full lifecycle management of incidents from detection through to root cause elimination.' 
            },
            {
              title: 'Reporting & Tracking',
              icon: <Monitor aria-hidden="true" />,
              desc: 'Monthly governance reviews provide transparent data on uptime, incident volume, and SLA performance across every location.'
            }
          ].map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="bg-white p-8 rounded-none border border-slate-200 h-full shadow-sm hover:border-[#5D00D6]/20 transition-all">
                  <div className="w-14 h-14 rounded-none bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-8 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                     {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                  <p className="text-slate-800 text-sm leading-relaxed">{card.desc}</p>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* 
   SECTION 6  SLA & SUPPORT STRUCTURE
    */
const SectionSLA = () => (
  <section className="py-14 bg-white">
    <div className={C}>
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
             <span className="c9-eyebrow mb-4">SLA Enforcement at Scale</span>
             <h2 className="c9-section-heading mb-6">Contractual Rigor. Live Operational Enforcement.</h2>
             <p className="c9-body text-slate-800 mb-8">
               Our SLAs are not marketing promises—they are live operational triggers. We provide real-time visibility into response times, resolution ownership, and escalation triggers.
             </p>
             <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Clock aria-hidden="true" />, title: 'Response Time Tiers', desc: 'Guaranteed response windows based on site criticality and incident severity.' },
                  { icon: <CheckCircle aria-hidden="true" />, title: 'Resolution Ownership', desc: 'We own the outcome through to final resolution, including multi-vendor coordination.' },
                  { icon: <Zap aria-hidden="true" />, title: 'Escalation Triggers', desc: 'Automated breach alerts and senior architect intervention for high-priority incidents.' },
                  { icon: <BarChart3 aria-hidden="true" />, title: 'SLA Tracking', desc: 'Transparent, real-time dashboarding of current operational performance at scale.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                     <div className="text-[#5D00D6] shrink-0 mt-1">{item.icon}</div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-sm mb-0.5">{item.title}</h4>
                        <p className="text-[14px] text-slate-800">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </FadeIn>

          <FadeIn direction="right">
             <div className="bg-[#0c1024] rounded-none overflow-hidden shadow-2xl border border-white/5">
                <Table>
                   <TableHeader className="bg-white/5 border-b border-white/10">
                      <TableRow className="hover:bg-transparent border-none">
                         <TableHead className="text-white font-bold py-6 px-8 h-auto">Priority</TableHead>
                         <TableHead className="text-white font-bold py-6 px-8 h-auto">Response</TableHead>
                         <TableHead className="text-white font-bold py-6 px-8 h-auto">Resolution</TableHead>
                      </TableRow>
                   </TableHeader>
                   <TableBody>
                      {[
                        { p: 'P1 - Critical', r: '< 15 mins', s: '< 4 hours' },
                        { p: 'P2 - Major', r: '< 30 mins', s: '< 8 hours' },
                        { p: 'P3 - Standard', r: '< 2 hours', s: '< 24 hours' }
                      ].map((row, i) => (
                        <TableRow key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                           <TableCell className="py-6 px-8 font-bold text-white h-auto">{row.p}</TableCell>
                           <TableCell className="py-6 px-8 text-white/95 h-auto font-mono text-xs">{row.r}</TableCell>
                           <TableCell className="py-6 px-8 text-[#a56eff] h-auto font-mono text-xs font-bold">{row.s}</TableCell>
                        </TableRow>
                      ))}
                   </TableBody>
                </Table>
             </div>
          </FadeIn>
       </div>
    </div>
  </section>
);

/* 
   SECTION 7  MULTI-SITE & SCALABILITY
    */
const SectionScalability = () => (
  <section className="py-12 bg-slate-50 border-y border-slate-100">
    <div className={C}>
       <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1">
             <div className="relative">
                <div className="rounded-none overflow-hidden shadow-2xl aspect-[16/10] relative border border-slate-100">
                   <Image 
                     src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                     alt="Multi-site management" 
                     fill
                     className="object-cover object-center" 
                     sizes="(max-width: 1280px) 100vw, 50vw"
                   />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-[#5D00D6] text-white p-10 rounded-none shadow-2xl border border-white/10">
                   <div className="text-4xl font-black mb-1">99.99%</div>
                   <div className="text-xs font-black uppercase tracking-widest opacity-95">Site Stability</div>
                </div>
             </div>
          </FadeIn>

          <FadeIn direction="left" className="order-1 lg:order-2">
             <span className="c9-eyebrow mb-4">Performance & Stability at Scale</span>
             <h2 className="c9-section-heading mb-6">Uptime & System-Wide Consistency</h2>
             <p className="c9-body text-slate-800 mb-8">
               We achieve enterprise stability by eliminating the root causes of infrastructure failure. Our framework ensures that every site operates at peak performance through proactive issue detection and root-cause elimination.
             </p>
             <div className="space-y-6">
                {[
                  { title: 'Proactive Issue Detection', desc: 'Identifying and solving infrastructure bottlenecks before they impact operational continuity.' },
                  { title: 'Recurring Issue Elimination', desc: 'Hardened root-cause analysis to permanently remove systemic technical debt from the environment.' },
                  { title: 'System-Wide Consistency', desc: 'Standardised hardware and software stacks that ensure identical performance across all enterprise locations.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                     <div className="w-6 h-6 rounded-full bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] shrink-0 mt-1">
                        <Check size={14} aria-hidden="true" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-700">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </FadeIn>
       </div>
    </div>
  </section>
);

/* 
   SECTION 8  SECURITY
    */
const SectionSecurity = () => (
  <section className="py-12 bg-white overflow-hidden">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-10">
          <FadeIn>
             <span className="c9-eyebrow mb-4">Security & Compliance Operations</span>
             <h2 className="c9-section-heading">Continuous Security Governance & Response</h2>
          </FadeIn>
       </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <Activity aria-hidden="true" />, title: 'Continuous Monitoring', desc: '24/7 surveillance of network traffic and endpoint behavior for anomaly detection.' },
            { icon: <Lock aria-hidden="true" />, title: 'Access Control Structure', desc: 'Rigorous enforcement of Zero-Trust protocols and MFA across all enterprise sites.' },
            { icon: <ShieldAlert aria-hidden="true" />, title: 'Incident Response', desc: 'Hardened protocols for rapid containment and mitigation of identified security threats.' },
            { icon: <ClipboardCheck aria-hidden="true" />, title: 'Audit Readiness', desc: 'Continuous logging and audit readiness aligned with ISO and Essential 8 standards.' }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="bg-white p-8 rounded-none border border-slate-200 h-full hover:border-[#5D00D6]/20 transition-all shadow-sm">
                  <div className="w-10 h-10 rounded-none bg-[#5D00D6]/5 flex items-center justify-center mb-6 text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                     {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-800 leading-relaxed">{item.desc}</p>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* 
   SECTION 9  CAPABILITY PACK
    */
const SectionCapabilityPack = () => (
  <CapabilityPack />
);

/* 
   SECTION 10  ARCHITECTURE & INTEGRATION
    */
const SectionArchitecture = () => (
  <section id="architecture" className="py-12 bg-slate-50 border-y border-slate-100">
    <div className={C}>
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
             <span className="c9-eyebrow mb-4">System Integration</span>
             <h2 className="c9-section-heading mb-6">Integration with Existing Environments</h2>
             <p className="c9-body text-slate-800 mb-8">
               We govern your multi-site infrastructure without disrupting current operations. Our architecture integrates deeply with your established enterprise systems.
             </p>
             <div className="space-y-4">
                {[
                  { icon: <Database size={18} aria-hidden="true" />, title: 'ERP & POS Systems', desc: 'Direct integration with core business platforms to ensure transaction continuity across all sites.' },
                  { icon: <Cloud size={18} aria-hidden="true" />, title: 'Cloud & Hybrid Platforms', desc: 'Unified control of Azure, AWS, and legacy infrastructure without disrupting existing workflows.' },
                  { icon: <Server size={18} aria-hidden="true" />, title: 'Legacy Infrastructure Governance', desc: 'Bringing Small Business environments into a modern governance model without service disruption.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-none border border-slate-200 shadow-sm">
                     <div className="text-[#5D00D6] shrink-0 mt-1">{item.icon}</div>
                     <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-800">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </FadeIn>

          <FadeIn direction="left">
             <div className="relative">
                <div className="bg-[#0c1024] p-10 rounded-none shadow-2xl relative overflow-hidden border border-white/5">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#5D00D6]/20 to-transparent" />
                    <div className="relative z-10">
                       <h3 className="text-white text-2xl font-bold mb-6">Integration Architecture</h3>
                       <div className="space-y-4">
                          <div className="p-5 bg-white/5 border border-white/10 rounded-none flex items-center gap-4">
                             <div className="w-10 h-10 rounded-none bg-white/10 flex items-center justify-center text-white"><Share2 size={20} aria-hidden="true" /></div>
                             <div>
                                <div className="text-white font-bold text-sm">Unified Control Plane</div>
                                <div className="text-white/95 text-[11px] uppercase tracking-widest mt-0.5">Centralised Logic</div>
                             </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                             <div className="p-5 bg-white/5 border border-white/10 rounded-none text-center">
                                <div className="text-white/95 text-[10px] uppercase font-bold mb-2">Cloud Layer</div>
                                <div className="text-white font-bold text-sm">Azure/AWS</div>
                             </div>
                             <div className="p-5 bg-white/5 border border-white/10 rounded-none text-center">
                                <div className="text-white/95 text-[10px] uppercase font-bold mb-2">On-Prem</div>
                                <div className="text-white font-bold text-sm">Legacy ERP</div>
                             </div>
                          </div>
                       </div>
                    </div>
                </div>
             </div>
          </FadeIn>
       </div>
    </div>
  </section>
);

/* 
   SECTION 11  PROOF & REALITY
    */
const SectionProof = () => (
  <section className="py-12 bg-white">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-10">
          <FadeIn>
             <span className="c9-eyebrow mb-4">Accountability in Action</span>
             <h2 className="c9-section-heading">Operational Governance & Control Proof</h2>
             <p className="c9-body text-slate-900 mt-6">
               Stability proven through complex multi-site operations across Australia.
             </p>
          </FadeIn>
       </div>

       <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              tag: 'RETAIL GROUP', 
              title: '85-Location Consolidation', 
              desc: 'Consolidated 4 separate vendors into a single accountable path. Established a unified governance model with 99.99% core network uptime.',
              metric: '99.99%',
              metricLabel: 'Network Uptime'
            },
            { 
              tag: 'LOGISTICS', 
              title: '1,200 Endpoint Governance', 
              desc: 'Seamless migration of 1,200 distributed endpoints with zero operational downtime. Incident volume reduced through standardised infrastructure.',
              metric: '42%',
              metricLabel: 'Incident Reduction'
            }
          ].map((caseStudy, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="bg-slate-50 p-10 rounded-none border border-slate-200 hover:shadow-xl transition-all duration-500 h-full">
                  <span className="text-[11px] font-black text-[#5D00D6] uppercase tracking-[0.2em] mb-4 block">{caseStudy.tag}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">{caseStudy.title}</h3>
                  <p className="text-slate-900 text-[14px] leading-relaxed mb-10">{caseStudy.desc}</p>
                  <div className="flex items-center gap-4">
                     <div className="text-4xl font-black text-slate-900 group-hover:text-[#5D00D6] transition-colors">{caseStudy.metric}</div>
                     <div className="text-xs font-black text-slate-900 uppercase tracking-widest">{caseStudy.metricLabel}</div>
                  </div>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* 
   SECTION 12  WORKING WITH INTERNAL IT
    */
const SectionCommercial = () => (
  <section className="py-14 bg-slate-900 text-white overflow-hidden relative">
    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
    <div className={C}>
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
             <span className="c9-eyebrow mb-4 !text-white">Co-Managed Infrastructure</span>
             <h2 className="c9-section-heading !text-white !text-left mb-8">Working with Internal IT Teams</h2>
             <p className="c9-body text-white/95 mb-12 max-w-lg leading-relaxed">
               We empower internal IT departments by removing the operational burden of multi-site infrastructure management. Our model is built on role clarity, not replacement.
             </p>
             <div className="flex gap-4">
                <div className="w-12 h-12 rounded-none bg-white/10 flex items-center justify-center text-white">
                   <Handshake size={24} aria-hidden="true" />
                </div>
                <div>
                   <h4 className="text-white font-bold mb-1 text-lg">Role Clarity Framework</h4>
                   <p className="text-white/95 text-sm">Defined division of operational responsibility.</p>
                </div>
             </div>
          </FadeIn>

          <FadeIn direction="left">
             <div className="grid gap-4">                 {[
                  { title: 'Operational Offload', desc: 'Internal teams retain high-level strategy; C9 owns operational execution across all sites.' },
                  { title: 'Collaborative Governance', desc: 'Unified visibility through shared dashboards and real-time incident tracking.' },
                  { title: 'Knowledge Sharing', desc: 'Full access to technical documentation and configuration blueprints for your internal team.' },
                  { title: 'Strategic Alignment', desc: 'Acting as an operational extension of your internal IT department protocols.' }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-none hover:bg-[#5D00D6]/20 transition-all flex items-center gap-6">
                     <div className="w-10 h-10 rounded-none bg-[#5D00D6]/20 flex items-center justify-center text-[#a56eff] group-hover:bg-white group-hover:text-[#5D00D6] transition-colors">
                        <Check size={20} aria-hidden="true" />
                     </div>
                     <div>
                        <h4 className="font-bold text-white mb-0.5">{item.title}</h4>
                        <p className="text-xs text-white/95">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </FadeIn>
       </div>
    </div>
  </section>
);

/* 
   SECTION 13  ENGAGEMENT QUALIFICATION
    */
const SectionEcosystem = () => (
  <section className="py-14 bg-white">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-10">
          <FadeIn>
             <span className="c9-eyebrow mb-4">Qualification Protocol</span>
             <h2 className="c9-section-heading">When C9 Governance Is Not a Fit</h2>
             <p className="c9-body text-slate-900 mt-6">
               To maintain our standards of operational control and SLA enforcement, we focus exclusively on environments where structured governance can be effectively implemented.
             </p>
          </FadeIn>
       </div>
        <div className="grid md:grid-cols-4 gap-8 mb-14">
          {[
            { 
              label: 'Small Business', 
              desc: 'Environments with fewer than 50 seats that do not require multi-site governance or enterprise-scale control logic.',
              icon: <Users aria-hidden="true" />
            },
            { 
              label: 'Break-Fix Expectations', 
              desc: 'Organisations seeking reactive troubleshooting rather than a structured, governed infrastructure operating model.',
              icon: <Zap aria-hidden="true" />
            },
            { 
              label: 'Non-Structured Ops', 
              desc: 'Environments where leadership does not support the standardisation of infrastructure and hardware across sites.',
              icon: <Layers aria-hidden="true" />
            },
            { 
              label: 'Short-Term Work', 
              icon: <Clock aria-hidden="true" />,
              desc: 'Project-based engagements that lack the long-term operational commitment required for true SLA enforcement.'
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="bg-slate-50 p-8 rounded-none border border-slate-100 text-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 h-full">
                  <div className="w-12 h-12 bg-white rounded-none flex items-center justify-center mx-auto mb-6 text-slate-400 group-hover:bg-[#5D00D6] group-hover:text-white transition-all shadow-sm">
                     {item.icon}
                  </div>
                  <h4 className="text-[14px] font-black text-slate-900 uppercase tracking-widest mb-3">{item.label}</h4>
                  <p className="text-xs text-slate-900 leading-relaxed">{item.desc}</p>
               </div>
            </FadeIn>
          ))}
       </div>

       <div className="max-w-3xl mx-auto text-center mb-10 pt-10 border-t border-slate-100">
          <FadeIn>
             <span className="c9-eyebrow mb-4">Integrated Architecture</span>
             <h2 className="c9-section-heading">The Unified Operating System</h2>
             <p className="c9-body text-slate-900 mt-6">
               Enterprise performance requires every layer of the stack to work in harmony. C9 connects these services into a single, governed ecosystem.
             </p>
          </FadeIn>
       </div>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            { label: 'Cloud Services', icon: <Cloud aria-hidden="true" /> },
            { label: 'Network Solutions', icon: <Network aria-hidden="true" /> },
            { label: 'Infrastructure', icon: <Server aria-hidden="true" /> },
            { label: 'Helpdesk Support', icon: <MessageSquare aria-hidden="true" /> },
            { label: 'Security Ops', icon: <Shield aria-hidden="true" /> }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.05}>
               <div className="bg-slate-50 p-8 rounded-none border border-slate-100 text-center hover:bg-[#5D00D6] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-center">
                  <div className="w-12 h-12 bg-white rounded-none flex items-center justify-center mx-auto mb-4 text-[#5D00D6] group-hover:scale-110 shadow-sm">
                     {item.icon}
                  </div>
                  <span className="text-[14px] font-black text-slate-900 group-hover:text-white transition-colors uppercase tracking-widest">{item.label}</span>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* 
   SECTION 14  FINAL CTA SECTION
    */
const FinalCTA = () => (
  <section className="py-12 bg-[#0c1024] text-white relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/30 to-transparent opacity-50" />
     <div className={C + " relative z-10 text-center"}>
        <FadeIn>
           <h2 className="c9-section-heading !text-white mb-8 !text-4xl lg:!text-5xl">Establish Infrastructure Governance. <br/>Enforce Your SLA.</h2>
           <p className="text-white/95 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
             Fragmented environments create hidden operational risks. Establish a structured operating model and regain control across your entire multi-site estate.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <C9Button 
                 size="lg"
                 className="bg-[#5D00D6] text-white rounded-none hover:bg-[#4d00b3] transition-all shadow-2xl shadow-purple-900/40"
                 onClick={() => {
                   document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                 }}
               >
                  Request Enterprise Infrastructure Assessment
               </C9Button>
               <C9Button 
                 variant="outline"
                 size="lg"
                 className="border-2 border-white/20 text-white rounded-none hover:bg-white hover:text-[#0c1024] transition-all"
                 onClick={() => {
                   document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                 }}
               >
                  Talk to an Infrastructure Architect
               </C9Button>
           </div>
           <div className="mt-8">
              <button 
                 onClick={() => {
                   document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
                 }}
                 className="text-white/95 font-black hover:text-white transition-colors text-sm flex items-center gap-2 mx-auto"
               >
                 Review Multi-Site Architecture <ArrowRight size={14} aria-hidden="true" />
               </button>
           </div>
        </FadeIn>
     </div>
  </section>
);

/* 
   PAGE EXPORT
    */
export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionProblem />
      <SectionCapabilities />
      <SectionHowItWorks />
      <SectionPlatform />
      <SectionModelDetail />
      <SectionSLA />
      <SectionScalability />
      <SectionSecurity />
      <EnterpriseOfferingsSection />
      <SectionArchitecture />
      <WpVendors />
      <SectionProof />
      <SectionCommercial />
      <SectionEcosystem />
      <FinalCTA />

      <section id="consultation-section" className="bg-slate-50 py-12">
        <WpConsultationForm
          showHeader={false}
          eyebrow="STRATEGIC GOVERNANCE"
          title="Speak to an Enterprise Solutions Lead"
          description="Ready to consolidate your technology stack under a single accountable partner? Book a discovery session to discuss architecture, SLAs, and multi-site strategy."
          formTitle="Request Enterprise Briefing"
        />
      </section>
    </main>
  );
}


