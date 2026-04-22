'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, ShieldCheck, Zap, 
  HelpCircle, Clock, Search, Handshake, 
  Target, Monitor, Lock, Cloud, PhoneCall,
  Users, MessageSquare, AlertCircle, Server,
  Activity, Database, Shield, Globe, Cpu,
  FileCheck, ShieldAlert, BarChart3, RefreshCw,
  Network, Laptop, Layers, Share2, ClipboardCheck, Check
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";

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
  const y = direction === 'up' ? 28 : 0;
  const x = direction === 'left' ? -28 : direction === 'right' ? 28 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO (AUTHORITY + RELIABILITY)
   ───────────────────────────────────────────────────────── */
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
    <div
      className="pointer-events-none absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full opacity-[0.05]"
      style={{ background: 'radial-gradient(circle, #5D00D6 0%, transparent 70%)' }}
    />

    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-14 lg:pb-20">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <ShieldCheck size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Enterprise Operations</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Enterprise IT & Network <br/>
              Operations <span className="text-[#5D00D6]">Without Complexity or Risk</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-8 max-w-[580px] text-slate-700">
              C9 manages multi-site IT, cloud, network, and security environments with clear ownership, SLA-backed performance, and full operational visibility.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
                >
                  Discuss Your Enterprise Environment
                </a>
                <a
                  href="#architecture"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-9 font-bold text-[14px] hover:bg-[#5D00D6] hover:text-white transition-all whitespace-nowrap"
                >
                  Review Your IT Architecture
                </a>
              </div>
              <a href="#consultation" className="text-[#5D00D6] font-bold text-sm flex items-center gap-2 group ml-2">
                Or speak directly with an enterprise solutions lead <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.32}>
            <div className="flex flex-wrap gap-x-10 gap-y-6 pt-8 border-t border-slate-100">
               {[
                 { icon: <Globe size={18} />, label: 'Multi-site environments' },
                 { icon: <Clock size={18} />, label: '24/7 support' },
                 { icon: <ShieldCheck size={18} />, label: 'SLA-backed operations' },
               ].map((trust, i) => (
                 <div key={i} className="flex items-center gap-2.5">
                    <div className="text-[#5D00D6]">{trust.icon}</div>
                    <span className="text-[13px] font-bold text-slate-900 uppercase tracking-wider">{trust.label}</span>
                 </div>
               ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.14} direction="right" className="relative hidden lg:block">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200"
              alt="Enterprise Operations Center"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/40 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#5D00D6]/10 flex items-center justify-center">
                    <Activity className="text-[#5D00D6]" size={24} />
                 </div>
                 <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#5D00D6] mb-0.5">Global Infrastructure</div>
                    <div className="text-[14px] font-bold text-slate-900 leading-tight">100% Core Network Availability</div>
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
   SECTION 2 — PROBLEM FRAMING (HIGH IMPACT)
   ───────────────────────────────────────────────────────── */
const SectionProblem = () => (
  <section className="py-12 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <div className="max-w-3xl mb-16">
        <FadeIn>
          <span className="c9-eyebrow mb-4">The Enterprise Reality</span>
          <h2 className="c9-section-heading">
            Complexity is the Primary Threat to Enterprise Stability
          </h2>
          <p className="c9-body text-slate-600 mt-6 text-lg">
            As enterprises scale, the technology stack often fragments. When no one owns the end-to-end outcome, the business absorbs the risk.
          </p>
        </FadeIn>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Vendor Fragmentation', desc: 'Managing separate providers for IT, Telco, and Cloud creates accountability gaps and "finger-pointing" during outages.' },
          { title: 'Operational Blind Spots', desc: 'Distributed sites often lack centralized monitoring, meaning performance issues are only discovered after failure.' },
          { title: 'Stretched IT Capacity', desc: 'Internal IT teams are forced to manage routine maintenance instead of driving high-value strategic architecture.' },
          { title: 'Inconsistent Security', desc: 'Disparate security policies across different locations create invisible vulnerabilities in your defensive perimeter.' },
          { title: 'Downtime Liability', desc: 'Without automatic failover and proactive monitoring, every minute of network downtime impacts multi-site revenue.' },
          { title: 'Lack of Scalability', desc: 'Legacy infrastructure rollouts are too slow and inconsistent to support rapid business expansion or office moves.' }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 h-full shadow-sm hover:border-[#5D00D6]/30 transition-all group">
               <div className="text-[#5D00D6] mb-4 group-hover:scale-110 transition-transform">
                  <ShieldAlert size={24} />
               </div>
               <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
               <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4} className="mt-16 text-center">
         <div>
            <p className="text-slate-900 font-bold text-xl">
               Enterprise environments fail when accountability is divided.
            </p>
         </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — HOW C9 OPERATES (CORE DIFFERENTIATOR)
   ───────────────────────────────────────────────────────── */
const SectionHowItWorks = () => (
  <section className="py-16 bg-white overflow-hidden">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <FadeIn direction="left">
           <span className="c9-eyebrow mb-4">Our Operating Model</span>
           <h2 className="c9-section-heading mb-6">Built to Operate, Not Just Support</h2>
           <p className="c9-body text-slate-600 mb-10 leading-relaxed">
             C9 doesn't function as a "ticket-based" vendor. We operate as a strategic partner that owns the performance outcomes of your environment.
           </p>
           <div className="space-y-8">
              {[
                { 
                  title: 'Single Accountable Partner', 
                  icon: <Target />, 
                  desc: 'We eliminate the gap between IT, Network, and Support by owning the entire path.' 
                },
                { 
                  title: 'Strategic Collaboration', 
                  icon: <Users />, 
                  desc: 'We work alongside internal IT teams as a high-capacity tier, or provide full-stack management.' 
                },
                { 
                  title: 'Integration by Design', 
                  icon: <Share2 />, 
                  desc: 'Our solutions are architected to integrate seamlessly with your existing ERP, POS, and SaaS systems.' 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                   <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] shrink-0">
                      {item.icon}
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </FadeIn>

        <FadeIn direction="right" className="relative">
           <div className="bg-slate-900 rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/10 blur-3xl rounded-full" />
              <h3 className="text-2xl font-bold mb-8">The Accountability Difference</h3>
              <div className="space-y-6">
                 {[
                   { label: 'Carrier Management', val: 'C9 Owned' },
                   { label: 'Network Infrastructure', val: 'C9 Owned' },
                   { label: 'Endpoint Security', val: 'C9 Owned' },
                   { label: 'Operational Uptime', val: 'SLA Guaranteed' },
                   { label: 'Internal IT Focus', val: 'Strategic / High-Value' }
                 ].map((row, i) => (
                   <div key={i} className="flex items-center justify-between pb-4 border-b border-white/10 last:border-0 last:pb-0">
                      <span className="text-white/60 text-sm font-medium">{row.label}</span>
                      <span className="text-[#a56eff] font-bold text-sm tracking-wide">{row.val}</span>
                   </div>
                 ))}
              </div>
              <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                 <p className="text-sm italic text-white/80">"We don't hand off problems. We resolve them."</p>
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — OPERATING MODEL (CRITICAL)
   ───────────────────────────────────────────────────────── */
const SectionModelDetail = () => (
  <section className="py-16 bg-slate-50 border-y border-slate-100">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
             <span className="c9-eyebrow mb-4">Governance & Flow</span>
             <h2 className="c9-section-heading">Structured For Enterprise Clarity</h2>
          </FadeIn>
       </div>

       <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Ownership Boundaries', 
              icon: <Layers />, 
              desc: 'Explicit definition of what C9 manages vs. what internal teams own, ensuring zero confusion during critical incidents.' 
            },
            { 
              title: 'Escalation Intelligence', 
              icon: <RefreshCw />, 
              desc: 'Multi-tiered escalation paths designed for speed, ensuring the right engineer is always on the right issue.' 
            },
            { 
              title: 'Reporting & Visibility', 
              icon: <Monitor />, 
              desc: 'Live dashboards and monthly governance reporting that translate technical data into operational insight.' 
            }
          ].map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="bg-white p-10 rounded-[32px] border border-slate-200 h-full flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-8">
                     {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">{card.desc}</p>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — SLA & SUPPORT STRUCTURE
   ───────────────────────────────────────────────────────── */
const SectionSLA = () => (
  <section className="py-16 bg-white">
    <div className={C}>
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
             <span className="c9-eyebrow mb-4">Service Reliability</span>
             <h2 className="c9-section-heading mb-6">SLA Confidence That Scales</h2>
             <p className="c9-body text-slate-600 mb-8">
               Our Service Level Agreements aren't just targets; they are contractual guarantees of operational performance.
             </p>
             <div className="space-y-6">
                {[
                  { title: 'Tiered Response Times', desc: 'Defined priorities from P1 (Critical) to P4 (Scheduled).' },
                  { title: 'Resolution Commitments', desc: 'Time-to-resolve targets backed by operational tracking.' },
                  { title: 'Priority Handling', desc: 'Enterprise clients receive immediate priority in our service desk queues.' },
                  { title: 'Escalation Ownership', desc: 'Direct access to level 3 network and systems engineers.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                     <CheckCircle size={20} className="text-emerald-500 shrink-0" />
                     <div>
                        <h4 className="font-bold text-slate-900 text-sm mb-0.5">{item.title}</h4>
                        <p className="text-[13px] text-slate-500">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </FadeIn>

          <FadeIn direction="right">
             <div className="bg-[#0c1024] rounded-[32px] overflow-hidden shadow-2xl">
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
                           <TableCell className="py-6 px-8 text-white/60 h-auto font-mono text-xs">{row.r}</TableCell>
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

/* ─────────────────────────────────────────────────────────
   SECTION 6 — MULTI-SITE & SCALABILITY
   ───────────────────────────────────────────────────────── */
const SectionScalability = () => (
  <section className="py-16 bg-slate-50 border-y border-slate-100">
    <div className={C}>
       <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1">
             <div className="relative">
                <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                   <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" alt="Multi-site management" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-[#5D00D6] text-white p-10 rounded-[32px] shadow-2xl">
                   <div className="text-4xl font-black mb-1">100%</div>
                   <div className="text-xs font-bold uppercase tracking-widest opacity-80">Site Consistency</div>
                </div>
             </div>
          </FadeIn>

          <FadeIn direction="left" className="order-1 lg:order-2">
             <span className="c9-eyebrow mb-4">Multi-Site Capability</span>
             <h2 className="c9-section-heading mb-6">Standardization is the Key to Scalability</h2>
             <p className="c9-body text-slate-600 mb-8">
               Managing 10 locations should be as simple as managing one. We deploy standardized infrastructure blueprints that eliminate site-specific technical debt.
             </p>
             <div className="grid gap-6">
                {[
                  { title: 'Rapid Site Rollouts', desc: 'Pre-configured blueprints for new site openings or acquisitions.' },
                  { title: 'Centralized Monitoring', desc: 'Every location managed through a single pane of glass.' },
                  { title: 'Standardized Stacks', desc: 'Consistent hardware and security baselines across every site.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-200">
                     <div className="text-[#5D00D6] mt-1"><CheckCircle size={18} /></div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                        <p className="text-[13px] text-slate-500">{item.desc}</p>
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
   SECTION 7 — SECURITY & COMPLIANCE (C9 DEFENSE)
   ───────────────────────────────────────────────────────── */
const SectionSecurity = () => (
  <section className="py-16 bg-white overflow-hidden">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
             <span className="c9-eyebrow mb-4">C9 Defense Integration</span>
             <h2 className="c9-section-heading">Operational Security That Never Sleeps</h2>
          </FadeIn>
       </div>

       <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <Activity />, title: 'Continuous Monitoring', desc: 'Real-time surveillance of network traffic and endpoint behavior.' },
            { icon: <ShieldAlert />, title: 'Threat Response', desc: 'Automated isolation of compromised nodes with rapid human intervention.' },
            { icon: <Lock />, title: 'Identity Protection', desc: 'Hardened MFA and Zero-Trust access protocols across the enterprise.' },
            { icon: <ClipboardCheck />, title: 'Compliance Alignment', desc: 'Continuous enforcement of Essential 8 and ISO-aligned controls.' }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="bg-white p-8 rounded-[32px] border border-slate-200 h-full hover:border-[#5D00D6]/20 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center mb-6 text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                     {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — ARCHITECTURE & INTEGRATION
   ───────────────────────────────────────────────────────── */
const SectionArchitecture = () => (
  <section id="architecture" className="py-16 bg-slate-50 border-y border-slate-100">
    <div className={C}>
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
             <span className="c9-eyebrow mb-4">Architecture First</span>
             <h2 className="c9-section-heading mb-6">Built for Integration & Interoperability</h2>
             <p className="c9-body text-slate-600 mb-8">
               We don't build isolated systems. Our architecture is designed to integrate seamlessly with your core business applications.
             </p>
             <div className="space-y-4">
                {[
                  { icon: <Database size={18} />, title: 'ERP & POS Integration', desc: 'Zero-latency connectivity for core transaction systems.' },
                  { icon: <Cloud size={18} />, title: 'Hybrid Cloud Alignment', desc: 'Seamless management across Azure, AWS, and private clouds.' },
                  { icon: <Share2 size={18} />, title: 'SaaS Connectivity', desc: 'Optimized routing for Microsoft 365, Salesforce, and beyond.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-200">
                     <div className="text-[#5D00D6] shrink-0 mt-1">{item.icon}</div>
                     <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </FadeIn>

          <FadeIn direction="left">
             <div className="bg-white p-12 rounded-[48px] shadow-2xl border border-slate-100 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16" />
                <div className="relative z-10">
                   <div className="w-16 h-16 bg-[#5D00D6]/5 rounded-2xl flex items-center justify-center text-[#5D00D6] mx-auto mb-8">
                      <Cpu size={32} />
                   </div>
                   <h3 className="text-2xl font-bold mb-6 text-slate-900">The Modern Workplace Engine</h3>
                   <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
                     A unified architecture that connects your users, devices, and data wherever they operate.
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                         <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Latency</div>
                         <div className="text-xl font-black text-[#5D00D6]">Sub-10ms</div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                         <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">SLA Target</div>
                         <div className="text-xl font-black text-[#5D00D6]">99.99%</div>
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
   SECTION 9 — PROOF & REALITY
   ───────────────────────────────────────────────────────── */
const SectionProof = () => (
  <section className="py-16 bg-white">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
             <span className="c9-eyebrow mb-4">Accountability in Action</span>
             <h2 className="c9-section-heading">Operational Proof Across the Enterprise</h2>
          </FadeIn>
       </div>

       <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { 
              tag: 'RETAIL GROUP', 
              title: '85-Location Consolidation', 
              desc: 'Successfully consolidated 4 separate vendors into a single accountable path. Resulted in 99.98% network uptime across all sites.',
              metric: '99.98%',
              metricLabel: 'Network Uptime'
            },
            { 
              tag: 'LOGISTICS', 
              title: '1,200 Endpoint Rollout', 
              desc: 'Seamless migration of 1,200 distributed endpoints with zero operational downtime. Incident volume reduced by 42% in first 90 days.',
              metric: '42%',
              metricLabel: 'Incident Reduction'
            }
          ].map((caseStudy, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-200 hover:shadow-xl transition-all duration-500 h-full">
                  <span className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-[0.2em] mb-4 block">{caseStudy.tag}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">{caseStudy.title}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-10">{caseStudy.desc}</p>
                  <div className="flex items-center gap-4">
                     <div className="text-4xl font-black text-slate-900">{caseStudy.metric}</div>
                     <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{caseStudy.metricLabel}</div>
                  </div>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 10 — COMMERCIAL IMPACT
   ───────────────────────────────────────────────────────── */
const SectionCommercial = () => (
  <section className="py-16 bg-slate-900 text-white overflow-hidden relative">
    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
    <div className={C}>
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
             <h2 className="c9-section-heading !text-white !text-left mb-8">Technology Transformed <br/>Into Commercial Value</h2>
             <p className="c9-body text-white/60 mb-12 max-w-lg">
               Our goal is to remove the "IT headache" so your leadership team can focus entirely on growth and operational performance.
             </p>
          </FadeIn>

          <FadeIn direction="left">
             <div className="grid gap-4">
                {[
                  { title: 'Reduced Operational Risk', desc: 'Predictable systems with zero blind spots.' },
                  { title: 'Lower Vendor Overhead', desc: 'One accountable partner instead of multiple vendors.' },
                  { title: 'Predictable IT Costs', desc: 'Consistent, fixed-fee enterprise performance models.' },
                  { title: 'Faster Time-to-Market', desc: 'Blueprinted site rollouts that happen in days, not weeks.' }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#5D00D6]/20 transition-all flex items-center gap-6 group">
                     <div className="w-10 h-10 rounded-full bg-[#5D00D6]/20 flex items-center justify-center text-[#a56eff] group-hover:bg-white group-hover:text-[#5D00D6] transition-colors">
                        <Check size={20} />
                     </div>
                     <div>
                        <h4 className="font-bold text-white mb-0.5">{item.title}</h4>
                        <p className="text-xs text-white/40">{item.desc}</p>
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
   SECTION 11 — SERVICE ECOSYSTEM CONNECTION
   ───────────────────────────────────────────────────────── */
const SectionEcosystem = () => (
  <section className="py-16 bg-white">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
             <span className="c9-eyebrow mb-4">The Unified System</span>
             <h2 className="c9-section-heading">Integrated Architecture. No Silos.</h2>
             <p className="c9-body text-slate-600 mt-6">
               Enterprise performance requires every layer of the stack to work in harmony. C9 connects these services into a single, managed ecosystem.
             </p>
          </FadeIn>
       </div>

       <div className="grid md:grid-cols-5 gap-6">
          {[
            { label: 'Cloud Services', icon: <Cloud /> },
            { label: 'Network Solutions', icon: <Network /> },
            { label: 'Infrastructure', icon: <Server /> },
            { label: 'Helpdesk', icon: <MessageSquare /> },
            { label: 'Cybersecurity', icon: <Shield /> }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.05} className="group">
               <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:bg-[#5D00D6] transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col justify-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 text-[#5D00D6] group-hover:scale-110 transition-transform">
                     {item.icon}
                  </div>
                  <span className="text-[13px] font-bold text-slate-900 group-hover:text-white transition-colors uppercase tracking-widest">{item.label}</span>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 12 — FINAL CTA SECTION
   ───────────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="py-16 bg-[#0c1024] text-white relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/30 to-transparent opacity-50" />
     <div className={C + " relative z-10 text-center"}>
        <FadeIn>
           <h2 className="c9-section-heading !text-white mb-8 !text-4xl lg:!text-5xl">Ensure Your Business <br/>Stays Connected</h2>
           <p className="text-white/70 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
             Stop accepting technical debt as a cost of doing business. Partner with an accountable operational leader who owns the outcome.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#consultation" className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-16 px-12 font-extrabold text-[14px] hover:bg-[#4d00b3] transition-all shadow-2xl shadow-purple-900/40 group">
                 Discuss Your Enterprise IT Strategy
              </a>
              <a href="#consultation" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white rounded-full h-16 px-12 font-extrabold text-[14px] hover:bg-white hover:text-[#0c1024] transition-all">
                 Assess Your Current Environment
              </a>
           </div>
           <div className="mt-8">
              <a href="#consultation" className="text-white/60 font-bold hover:text-white transition-colors text-sm">
                Or plan your multi-site infrastructure today &rarr;
              </a>
           </div>
        </FadeIn>
     </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionProblem />
      <SectionHowItWorks />
      <SectionModelDetail />
      <SectionSLA />
      <SectionScalability />
      <SectionSecurity />
      <SectionArchitecture />
      <SectionProof />
      <SectionCommercial />
      <SectionEcosystem />
      <FinalCTA />

      <section id="consultation" className="bg-slate-50 py-16">
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
