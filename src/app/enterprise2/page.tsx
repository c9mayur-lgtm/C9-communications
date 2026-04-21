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
  Network, Laptop, Layers
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
import { Badge } from "@/components/ui/badge";

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
   SECTION 1 — HERO
   ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-8 pb-0 lg:pt-12">
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
              <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Enterprise Managed IT & Telco</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Enterprise IT & Telco — <br/>
              <span className="text-[#5D00D6]">Fully Managed. Fully Accountable.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-8 max-w-[580px] text-slate-700">
              Operate complex, multi-site environments with a single partner responsible for uptime, security, and performance—end to end.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
              >
                Book Enterprise Consultation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-all whitespace-nowrap"
              >
                View Architecture & SLA Model
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.32}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
              {[
                { label: '120+', detail: 'Sites Managed' },
                { label: '3,000+', detail: 'Endpoints' },
                { label: '99.99%', detail: 'Network Uptime' },
                { label: '24/7', detail: 'Monitoring' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-bold text-[#0c1024]">{stat.label}</span>
                  <span className="text-[12px] text-slate-500 font-bold uppercase tracking-wider">{stat.detail}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.14} direction="right" className="relative hidden lg:block">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group">
            <img
              src="/images/hero_enterprise.png"
              alt="Enterprise IT Infrastructure"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/40 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#5D00D6]/10 flex items-center justify-center">
                    <Activity className="text-[#5D00D6]" size={24} />
                 </div>
                 <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#5D00D6] mb-0.5">System Status</div>
                    <div className="text-[16px] font-bold text-slate-900 leading-tight">All Multi-Site Operations Active</div>
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
  <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">The Enterprise Reality</span>
        <h2 className="c9-section-heading max-w-3xl mx-auto">
          Why Enterprise Environments Fail
        </h2>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          { icon: <Users className="text-[#5D00D6]" />, title: 'Multiple vendors → no accountability', desc: 'Fragmented support from different providers leads to "finger-pointing" when critical issues arise.' },
          { icon: <BarChart3 className="text-[#5D00D6]" />, title: 'Reactive support → unresolved issues', desc: 'Fixing symptoms instead of addressing the root cause leads to recurring downtime and lost productivity.' },
          { icon: <Lock className="text-[#5D00D6]" />, title: 'Security gaps across endpoints', desc: 'Inconsistent policies across distributed sites create invisible vulnerabilities for attackers to exploit.' },
          { icon: <Globe className="text-[#5D00D6]" />, title: 'No unified visibility across sites', desc: 'Lack of central monitoring means problems are often only discovered after they cause failure.' },
          { icon: <Zap className="text-[#5D00D6]" />, title: 'Downtime during peak operations', desc: 'Unreliable connectivity and hardware failures disrupt business when performance matters most.' },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.05} className="group">
            <div className="h-full bg-white border border-slate-100 rounded-3xl p-8 hover:border-[#5D00D6]/20 transition-all hover:shadow-xl shadow-slate-200/50">
              <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="c9-card-title mb-4 !text-[18px]">{item.title}</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3} className="text-center mt-12">
        <p className="text-slate-900 font-bold text-[22px]">
          Enterprise environments fail when no one owns the system.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — ACCOUNTABILITY MODEL
   ───────────────────────────────────────────────────────── */
const SectionAccountability = () => (
  <section className="py-12 lg:py-16 bg-white">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">The Solution</span>
          <h2 className="c9-section-heading mb-8">
            One Partner. Total Ownership.
          </h2>
          <p className="c9-body mb-8 text-slate-600">
            C9 operates as the **single accountable layer** across your entire technology path. We eliminate vendor overlap and provide a unified escalation path for all IT and Telco needs.
          </p>
          <div className="space-y-4 mb-10">
            {[
              'Network performance',
              'Endpoint management',
              'Telco & connectivity',
              'Security posture',
              'Monitoring & incident response'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-[#5D00D6] shrink-0" />
                <span className="text-[16px] font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
          <div className="p-6 bg-[#5D00D6]/5 rounded-2xl border-l-[6px] border-[#5D00D6]">
             <p className="text-[#0c1024] font-bold text-[18px]">
               No vendor overlap. No blame shifting. One escalation path.
             </p>
          </div>
        </FadeIn>
        
        <FadeIn direction="right" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           {[
             { title: 'Single Point of Contact', icon: <PhoneCall />, desc: 'One number for everything.' },
             { title: 'Vendor Management', icon: <Handshake />, desc: 'We manage your 3rd party providers.' },
             { title: 'Contractual SLAs', icon: <FileCheck />, desc: 'Accountability written into law.' },
             { title: 'Dedicated vCIO', icon: <UserCheck />, desc: 'Strategic oversight, not just support.' },
           ].map((card, i) => (
             <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 text-[#5D00D6] shadow-sm">
                   {card.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{card.title}</h4>
                <p className="text-[13px] text-slate-500">{card.desc}</p>
             </div>
           ))}
        </FadeIn>
      </div>
    </div>
  </section>
);

const UserCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — ARCHITECTURE STACK
   ───────────────────────────────────────────────────────── */
const SectionArchitecture = () => (
  <section id="architecture" className="py-12 lg:py-16 bg-slate-900 text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
         style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #5D00D6 0%, transparent 60%)' }} />
    
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4 !text-[#a56eff]">System Design</span>
        <h2 className="c9-section-heading !text-white max-w-3xl mx-auto">
          Enterprise Architecture Designed for Scale & Resilience
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {[
          {
            title: 'Network Layer',
            icon: <Network className="text-[#a56eff]" />,
            items: ['SD-WAN / multi-site connectivity', 'Redundant ISP failover', 'Traffic prioritisation']
          },
          {
            title: 'Endpoint Layer',
            icon: <Laptop className="text-[#a56eff]" />,
            items: ['Device lifecycle management', 'Patch automation', 'Remote control']
          },
          {
            title: 'Security Layer',
            icon: <ShieldAlert className="text-[#a56eff]" />,
            items: ['Endpoint Detection & Response', 'Identity & email protection', 'Firewall & Zero Trust']
          },
          {
            title: 'Monitoring Layer',
            icon: <Activity className="text-[#a56eff]" />,
            items: ['24/7 NOC + SOC', 'Real-time alerting', 'Predictive issue detection']
          },
          {
            title: 'Recovery Layer',
            icon: <RefreshCw className="text-[#a56eff]" />,
            items: ['Backup & disaster recovery', 'Restore testing', 'Business continuity']
          }
        ].map((card, i) => (
          <FadeIn key={i} delay={i * 0.05} className="group">
            <div className="h-full bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-white">{card.title}</h3>
              <ul className="space-y-4">
                {card.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[14px] text-slate-300 leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a56eff] shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — SLA & SUPPORT
   ───────────────────────────────────────────────────────── */
const SectionSLA = () => (
  <section className="py-12 lg:py-16 bg-white border-b border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">Service Excellence</span>
        <h2 className="c9-section-heading max-w-3xl mx-auto">
          SLA-Backed Enterprise Support
        </h2>
      </FadeIn>

      <FadeIn className="max-w-4xl mx-auto shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden border border-slate-100 mb-12">
        <Table>
          <TableHeader className="bg-[#0c1024]">
            <TableRow className="hover:bg-transparent border-none">
              <TableHead className="text-white font-bold py-6 px-10 h-auto">Priority</TableHead>
              <TableHead className="text-white font-bold py-6 px-10 h-auto">Response Time</TableHead>
              <TableHead className="text-white font-bold py-6 px-10 h-auto">Resolution Target</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="py-6 px-10 font-bold text-slate-900 h-auto">P1 (Critical)</TableCell>
              <TableCell className="py-6 px-10 text-slate-600 h-auto">&lt; 15 mins</TableCell>
              <TableCell className="py-6 px-10 text-slate-600 h-auto">&lt; 4 hours</TableCell>
            </TableRow>
            <TableRow className="bg-slate-50">
              <TableCell className="py-6 px-10 font-bold text-slate-900 h-auto">P2 (Major)</TableCell>
              <TableCell className="py-6 px-10 text-slate-600 h-auto">&lt; 30 mins</TableCell>
              <TableCell className="py-6 px-10 text-slate-600 h-auto">&lt; 8 hours</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-6 px-10 font-bold text-slate-900 h-auto">P3 (Standard)</TableCell>
              <TableCell className="py-6 px-10 text-slate-600 h-auto">&lt; 2 hours</TableCell>
              <TableCell className="py-6 px-10 text-slate-600 h-auto">&lt; 24 hours</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center mb-12">
        {[
          { label: '24/7 Service Desk', icon: <Users size={18} /> },
          { label: 'Dedicated Account Manager', icon: <Handshake size={18} /> },
          { label: 'Escalation within SLA', icon: <BarChart3 size={18} /> },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="flex items-center justify-center gap-3 text-slate-700 font-bold">
            <span className="p-2 bg-[#5D00D6]/5 rounded-full text-[#5D00D6]">{item.icon}</span>
            {item.label}
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4} className="text-center border-t border-slate-100 pt-10">
        <p className="text-[#5D00D6] font-bold text-[20px]">
          This is contract-backed performance—not best-effort support.
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — CYBERSECURITY
   ───────────────────────────────────────────────────────── */
const SectionSecurity = () => (
  <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">C9 Defense</span>
        <h2 className="c9-section-heading max-w-3xl mx-auto">
          Security Built Into Operations
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
        {[
          { title: 'Essential 8 alignment', icon: <Layers /> },
          { title: 'Continuous monitoring', icon: <Activity /> },
          { title: 'Threat detection', icon: <ShieldAlert /> },
          { title: 'Vulnerability management', icon: <Search /> },
          { title: 'Backup integrity', icon: <Database /> },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.05} className="group">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#5D00D6]/20 transition-all text-center h-full">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mx-auto mb-6 text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>
              <h4 className="font-bold text-slate-900 leading-tight">{item.title}</h4>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3} className="text-center">
        <div className="inline-block bg-[#0c1024] text-white px-8 py-4 rounded-2xl">
           <span className="font-bold flex items-center gap-3">
             <Shield className="text-[#5D00D6]" />
             Security is continuously enforced—not periodically checked.
           </span>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — MIGRATION FRAMEWORK
   ───────────────────────────────────────────────────────── */
const SectionMigration = () => (
  <section className="py-12 lg:py-16 bg-white">
    <div className={C}>
      <FadeIn className="text-center mb-20">
        <span className="c9-eyebrow mb-4">Reliable Change</span>
        <h2 className="c9-section-heading max-w-3xl mx-auto">
          Zero-Disruption Transition
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-5 gap-8 relative">
        <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-slate-100" />
        
        {[
          { step: '01', title: 'Audit & Discovery', desc: 'Full mapping of your current architecture and vendor contracts.' },
          { step: '02', title: 'Risk Mapping', desc: 'Identifying single points of failure and security vulnerabilities.' },
          { step: '03', title: 'Transition Planning', desc: 'Detailed migration timeline with rollback safety triggers.' },
          { step: '04', title: 'Controlled Migration', desc: 'Phased rollout with zero operational downtime.' },
          { step: '05', title: 'Stabilisation', desc: 'Post-migration monitoring and proactive performance tuning.' },
        ].map((s, i) => (
          <FadeIn key={i} delay={i * 0.1} className="relative text-center">
            <div className="w-[90px] h-[90px] rounded-full bg-white border-2 border-[#5D00D6] flex items-center justify-center mb-6 mx-auto relative z-10 shadow-lg shadow-purple-900/10 transition-transform hover:scale-110 duration-500 bg-white group hover:bg-[#5D00D6] transition-colors">
               <span className="text-2xl font-black text-[#5D00D6] group-hover:text-white">{s.step}</span>
            </div>
            <h3 className="c9-card-title mb-4 !text-[16px]">{s.title}</h3>
            <p className="text-slate-500 text-[13px] leading-relaxed px-2">{s.desc}</p>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.6} className="mt-16 text-center">
         <p className="text-slate-900 font-bold text-[24px]">
           No downtime. No disruption.
         </p>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — INTEGRATIONS
   ───────────────────────────────────────────────────────── */
const SectionIntegrations = () => (
  <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">Compatibility</span>
        <h2 className="c9-section-heading max-w-3xl mx-auto">
          Works With Your Existing Systems
        </h2>
      </FadeIn>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
        {[
          { title: 'Microsoft 365', icon: <Layers /> },
          { title: 'Azure / AWS', icon: <Cloud /> },
          { title: 'ERP systems', icon: <Database /> },
          { title: 'POS platforms', icon: <Activity /> },
          { title: 'VoIP systems', icon: <PhoneCall /> },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="bg-white h-32 rounded-2xl border border-slate-200 flex flex-col items-center justify-center p-4 text-center hover:shadow-md transition-all">
                <div className="text-[#5D00D6] mb-3">{item.icon}</div>
                <span className="font-bold text-slate-800 text-[15px]">{item.title}</span>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="text-center">
         <p className="text-slate-500 font-medium">
           We integrate into your environment—not replace it blindly.
         </p>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 10 — OUTCOMES
   ───────────────────────────────────────────────────────── */
const SectionOutcomes = () => (
  <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">Results Delivered</span>
        <h2 className="c9-section-heading max-w-3xl mx-auto">
          Business Outcomes
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {[
          { title: 'Reduced operational risk', desc: 'Predictable systems with zero blind spots.' },
          { title: 'Fewer outages', desc: 'Proactive maintenance before failures occur.' },
          { title: 'Faster resolution', desc: 'Direct access to engineers who know your stack.' },
          { title: 'Lower vendor overhead', desc: 'We take the management off your plate.' },
          { title: 'Predictable IT costs', desc: 'Locked-in enterprise performance models.' },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-[#5D00D6] flex items-center justify-center text-white">
                <CheckCircle size={20} />
              </div>
              <h4 className="font-bold text-slate-900 leading-snug">{item.title}</h4>
              <p className="text-slate-500 text-[13px]">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 11 — FINAL CTA
   ───────────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="py-16 lg:py-24 bg-[#0c1024] text-white relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/20 to-transparent"></div>
     <div className={`${C} relative z-10 text-center`}>
        <FadeIn>
          <h2 className="c9-section-heading !text-white mb-8 max-w-3xl mx-auto md:!text-[46px] lg:!text-[52px]">
            Ready to Simplify and <br/>Take Control?
          </h2>
          <p className="text-white/70 mb-12 max-w-2xl mx-auto text-[18px]">
            Partner with a single accountable organization that owns your IT and Telco outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
             <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-16 px-12 font-extrabold text-[17px] hover:bg-[#4d00b3] transition-all shadow-2xl shadow-brand-purple/30 group w-full sm:w-auto"
              >
                Book Enterprise Consultation
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white rounded-full h-16 px-12 font-extrabold text-[17px] hover:bg-white hover:text-[#0c1024] transition-all w-full sm:w-auto bg-transparent"
              >
                Speak to a Solutions Architect
              </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-70 text-[13px] font-bold uppercase tracking-widest text-white">
            <span>SLA Backed</span>
            <span>24/7 Monitoring</span>
            <span>Australian Support</span>
          </div>
        </FadeIn>
     </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function Enterprise2Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      
      <SectionProblem />
      <SectionAccountability />
      <SectionArchitecture />
      
      <SectionSLA />
      <SectionSecurity />
      <SectionMigration />
      <SectionIntegrations />

      <WpCaseStudies 
        eyebrow="ENTERPRISE RESULTS"
        title="Accountability in Action"
        articles={[
          {
            tag: 'RETAIL',
            title: '85 Locations Total Rollout',
            desc: 'Successfully rolled out managed infrastructure across 85 locations nationally, achieving 99.98% network uptime.',
            img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
            videoText: '99.98% Uptime',
            href: '#consultation'
          },
          {
            tag: 'LOGISTICS',
            title: '1,200 Endpoints Consolidated',
            desc: 'Consolidated 6 separate vendors into a single managed path for 1,200 endpoints, resulting in a 42% reduction in operational incidents.',
            img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800',
            videoText: '42% Incident Reduction',
            href: '#consultation'
          },
          {
            tag: 'COMPLIANCE-HEAVY',
            title: 'Essential 8 Aligned Governance',
            desc: 'Continuous enforcement of Essential 8 security controls with zero major incidents reported in over 18 months of operation.',
            img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
            videoText: 'Zero Incidents (18mo)',
            href: '#consultation'
          }
        ]}
      />

      <SectionOutcomes />
      
      <FinalCTA />

      <section id="consultation" className="bg-white border-t border-slate-100 pb-12">
        <WpConsultationForm
          showHeader={false}
          eyebrow="GOVERNANCE & ACCOUNTABILITY"
          title="Speak to a Solutions Architect"
          description="Ready to consolidate your technology path? Book a strategy session to discuss your architecture, SLA requirements, and multi-site transition plan."
          formTitle="Request Enterprise Pack"
        />
      </section>
    </main>
  );
}
