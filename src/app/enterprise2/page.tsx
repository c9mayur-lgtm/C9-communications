'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  X,
  Network,
  Phone,
  Shield,
  Monitor,
  Search,
  Zap,
  Building2,
  Users,
  TrendingUp,
  Clock,
  ChevronDown,
  ShieldCheck,
  Globe,
  Settings,
  MessagesSquare,
  Lock,
  BarChart3,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { WpHighlights } from '@/components/wordpress/WpHighlights';
import { WpIndustryTabs } from '@/components/wordpress/WpIndustryTabs';
import { WpUnifiedClassification } from '@/components/wordpress/WpUnifiedClassification';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

/* ─── shared animation wrapper ─────────────────────────────────────────────── */
const FadeUp = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── shared button primitives ─────────────────────────────────────────────── */
const PrimaryBtn = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[15px] hover:bg-[#4d00b3] transition-colors shadow-xl shadow-purple-900/20 group whitespace-nowrap"
  >
    {children}
    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
  </a>
);

/* ══════════════════════════════════════════════════════════════════════════════
   SECTION 1 — HERO
   ══════════════════════════════════════════════════════════════════════════════ */
const HeroEnterpriseScale = () => {
  return (
    <div className="w-full h-full bg-white relative flex flex-col p-8 rounded-[32px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(93,0,214,0.15)] border border-slate-200">
      
      {/* Dynamic Ambient Background - Light Theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-100 rounded-full blur-[80px]"
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
          className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[80px]"
        />
      </div>

      {/* Top Header */}
      <div className="relative z-10 flex justify-between items-start w-full mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#5D00D6]/5 border border-[#5D00D6]/20 text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest rounded-full mb-3 shadow-sm">
            <BarChart3 size={14} /> ENTERPRISE GROWTH METRICS
          </div>
          <h3 className="text-slate-900 text-[22px] font-bold tracking-tight">Unified Operational Scale</h3>
        </div>
        
        <div className="text-right">
          <p className="text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-1">System Health</p>
          <div className="flex items-center justify-end gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 shadow-sm">
             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
             <span className="font-bold text-[12px] uppercase">Optimized</span>
          </div>
        </div>
      </div>

      {/* Main Graph Area */}
      <div className="relative flex-1 w-full flex items-end min-h-[220px]">
        {/* Background Grid */}
        <div className="absolute inset-0 flex flex-col justify-between pt-2 pb-2 pointer-events-none z-0">
          {[...Array(5)].map((_, i) => (
             <div key={i} className="w-full border-t border-slate-200 border-dashed" />
          ))}
        </div>

        {/* Graph SVG */}
        <div className="absolute inset-0 z-10 overflow-visible">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5D00D6" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
              <linearGradient id="area-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0.0" />
              </linearGradient>
              <filter id="glow-light">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Underperforming competitor / fragmented line */}
            <motion.path
               d="M0,80 Q20,70 40,85 T60,80 T100,85"
               stroke="#94a3b8"
               strokeWidth="1.5"
               fill="none"
               strokeDasharray="3 3"
               animate={{ d: ["M0,80 Q20,70 40,85 T60,80 T100,85", "M0,75 Q20,80 40,75 T60,85 T100,80", "M0,80 Q20,70 40,85 T60,80 T100,85"] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* The main C9 Growth curve */}
            <motion.path
               d="M0,70 Q30,75 50,50 T100,10 L100,100 L0,100 Z"
               fill="url(#area-gradient)"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1.5, delay: 0.5 }}
            />
            
            <motion.path
               d="M0,70 Q30,75 50,50 T100,10"
               stroke="url(#curve-gradient)"
               strokeWidth="4"
               fill="none"
               strokeLinecap="round"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* End Point node */}
            <motion.circle 
              cx="100" cy="10" r="3.5" 
              fill="#A855F7" 
              stroke="#fff" 
              strokeWidth="1.5" 
              filter="url(#glow-light)" 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2, duration: 0.5, type: "spring" }}
            />
          </svg>
        </div>

        {/* Floating Callout Boxes */}
        <div className="absolute top-[35%] left-[5%] z-20">
          <motion.div 
             className="bg-white/90 border border-slate-200 rounded-xl px-4 py-3 shadow-lg backdrop-blur-md flex items-center gap-3"
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
               <Layers size={16} strokeWidth={2.5}/>
            </div>
            <div>
              <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider leading-none mb-1">Pre-Integration</p>
              <p className="text-slate-800 text-sm font-medium leading-none">Scattered Resources</p>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-[-10%] right-[2%] z-30">
          <motion.div 
             className="bg-gradient-to-br from-[#5D00D6] to-[#913be2] rounded-2xl px-6 py-5 shadow-[0_15px_35px_rgba(93,0,214,0.3)] text-white border border-white/20"
             initial={{ opacity: 0, scale: 0.9, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
             transition={{ 
                opacity: { duration: 0.8, delay: 1.8 },
                scale: { duration: 0.8, delay: 1.8, type: "spring" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 }
             }}
          >
            <div className="flex items-center gap-2 mb-3 opacity-90">
               <TrendingUp size={16} className="text-white" />
               <p className="text-white/90 text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap">Unified Output</p>
            </div>
            <p className="text-white text-3xl font-bold leading-none mb-1.5 tracking-tight">100%</p>
            <p className="text-white/80 text-[13px] font-medium">Operational Control</p>
          </motion.div>
        </div>
      </div>

      {/* Footer Metrics Row (Light Theme) */}
      <div className="grid grid-cols-3 gap-4 mt-8 relative z-30">
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-slate-300">
          <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider mb-1.5 flex items-center gap-1.5"><TrendingUp size={12} className="text-[#5D00D6]"/> Cost Efficiency</p>
          <p className="text-slate-900 font-bold text-xl leading-none tracking-tight">+32%</p>
        </div>
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-slate-300">
          <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider mb-1.5 flex items-center gap-1.5"><Shield size={12} className="text-[#5D00D6]"/> Security Standard</p>
          <p className="text-slate-900 font-bold text-xl leading-none tracking-tight">Essential 8</p>
        </div>
        <div className="bg-[#5D00D6]/5 rounded-2xl p-4 border border-[#5D00D6]/20 shadow-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5D00D6]/5 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
          <p className="text-[#5D00D6] text-[10px] font-semibold uppercase tracking-wider mb-1.5 flex items-center gap-1.5"><Lock size={12} /> Risk Profile</p>
          <p className="text-slate-900 font-bold text-xl leading-none tracking-tight">Mitigated</p>
        </div>
      </div>

    </div>
  );
};

const Hero = () => (
  <section className="pt-20 pb-8 md:pt-24 md:pb-10 lg:pt-28 lg:pb-12 relative overflow-hidden min-h-[480px] lg:min-h-[540px]">
    <div className="absolute inset-0 xl:hidden">
      <img
        src="/images/hero_enterprise.png"
        alt="Enterprise IT Control"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1024]/80 via-[#0c1024]/70 to-[#0c1024]/90" />
      <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay" />
    </div>
    <div className="absolute inset-0 hidden xl:block bg-white" />

    <div className="container mx-auto px-6 md:px-8 w-full relative z-10" style={{ maxWidth: '1240px' }}>
      <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-6 xl:gap-8 items-center w-full">
        <div className="py-4 pr-0 xl:pr-6">
          <h1 className="c9-hero-title mb-5 whitespace-pre-line xl:text-slate-900 text-white">
            Take control of your entire IT environment — without disrupting what’s already in place
          </h1>
          <p className="c9-body mb-8 max-w-[550px] whitespace-pre-line xl:text-slate-600 text-white/80">
            C9 works across your internal teams, vendors, and systems to unify, optimise, and manage your full technology environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <PrimaryBtn
              href="#consultation-section"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#consultation-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book an Enterprise Consultation
            </PrimaryBtn>
            <a
              href="#capabilities-section"
              className="inline-flex items-center justify-center gap-2 border-2 border-white xl:border-[#5D00D6] text-white xl:text-[#5D00D6] rounded-full h-14 px-8 font-bold text-[15px] hover:bg-white/10 xl:hover:bg-[#5D00D6] xl:hover:text-white transition-colors"
            >
              Explore Capabilities →
            </a>
          </div>
        </div>

        <div className="hidden xl:block w-full h-[480px] lg:h-[540px] relative">
          <HeroEnterpriseScale />
        </div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════════════════
   SECTION 2 — ENTERPRISE REALITY
   ══════════════════════════════════════════════════════════════════════════════ */
const SectionReality = () => (
  <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <FadeUp>
        <div className="max-w-3xl mb-10 md:mb-12">
          <span className="c9-eyebrow mb-4 block">Complex by Design</span>
          <h2 className="c9-section-heading">Enterprise environments are complex by design</h2>
          <p className="c9-body mt-6 text-xl">
            Managing global infrastructure at scale means navigating overlapping siloes that hinder operational speed and security.
          </p>
        </div>
      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Layers size={24} />,
            title: "Multiple Vendors",
            desc: "Telcos, hardware partners, and software vendors all operating in silos without shared accountability."
          },
          {
            icon: <Zap size={24} />,
            title: "Fragmented Systems",
            desc: "Legacy infrastructure clashing with modern cloud adoption, creating performance gaps and visibility dark spots."
          },
          {
            icon: <X size={24} />,
            title: "Lack of Control",
            desc: "No single pane of glass to view performance, security posture, or compliance across your entire footprint."
          },
          {
            icon: <Users size={24} />,
            title: "Internal IT Pressure",
            desc: "Your internal teams are buried in low-level support and vendor finger-pointing instead of driving high-value projects."
          }
        ].map((item, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className="bg-white p-8 rounded-[32px] border border-slate-200 h-full shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[#5D00D6]/5 text-[#5D00D6] rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-[15px]">{item.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.4}>
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-2xl font-bold text-slate-900">Most providers add complexity — <span className="text-[#5D00D6]">we remove it.</span></p>
           <PrimaryBtn href="#consultation-section">See How We Simplify</PrimaryBtn>
        </div>
      </FadeUp>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════════════════
   SECTION 3 — CORE DIFFERENTIATOR
   ══════════════════════════════════════════════════════════════════════════════ */
const SectionDifferentiator = () => (
  <section className="py-12 md:py-16 bg-white overflow-hidden">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <FadeUp>
          <span className="c9-eyebrow mb-4 block">Our Approach</span>
          <h2 className="c9-section-heading mb-6">We don’t replace your environment — we take control of it</h2>
          <p className="c9-body mb-8 text-lg">
            Unlike traditional MSPs that force you to rip and replace, C9 layers a unified operational model over your existing investments. We bring order to the chaos without resetting your progress.
          </p>

          <div className="space-y-6">
            {[
              { title: "Work Alongside IT Teams", desc: "We act as an extension of your expertise, not a rival. We take the operational load so you can focus on strategy." },
              { title: "Manage Across Vendors", desc: "We own the relationships and the coordination. When something impacts performance, we resolve it regardless of which vendor is at fault." },
              { title: "Standardise Operations", desc: "Uniform governance, security, and performance standards applied across every site and user in your footprint." },
              { title: "Create Accountability", desc: "A single point of contact for every technical outcome. We own the environment, so you own the results." }
            ].map((point, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#5D00D6] flex items-center justify-center text-white">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{point.title}</h4>
                  <p className="text-slate-500 text-[15px]">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="relative">
            <div className="bg-slate-900 rounded-[40px] p-10 text-white shadow-2xl relative z-10">
              <div className="mb-10">
                <p className="text-[#A855F7] font-bold text-[12px] uppercase tracking-[0.2em] mb-4">Enterprise Governance Layer</p>
                <h3 className="text-3xl font-bold">Unifying your technical estate</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between">
                  <span>Telco & Connectivity</span>
                  <div className="flex items-center gap-2 text-[#A855F7]">
                    <CheckCircle2 size={18} /> <span className="text-[11px] font-bold">CONTROLLED</span>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between">
                  <span>Cybersecurity / SOC</span>
                  <div className="flex items-center gap-2 text-[#A855F7]">
                    <CheckCircle2 size={18} /> <span className="text-[11px] font-bold">CONTROLLED</span>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between">
                  <span>Managed IT Operations</span>
                  <div className="flex items-center gap-2 text-[#A855F7]">
                    <CheckCircle2 size={18} /> <span className="text-[11px] font-bold">CONTROLLED</span>
                  </div>
                </div>
                <div className="p-6 text-center text-slate-400 text-[13px] italic">
                   "A single operational layer across all locations and users."
                </div>
              </div>
            </div>
            {/* Background decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#5D00D6]/10 blur-[120px] -z-10 rounded-full" />
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════════════════
   SECTION 4 — REFRAMED SERVICES
   ══════════════════════════════════════════════════════════════════════════════ */
const CAPABILITIES = [
  {
    icon: <Network size={26} className="text-[#5D00D6]" />,
    title: 'Connectivity & Networks',
    body: 'Enterprise-grade control across multiple connectivity vendors. High-performance Fibre and SD-WAN unified under C9 ownership.',
    link: '/telco'
  },
  {
    icon: <Shield size={26} className="text-[#5D00D6]" />,
    title: 'Cybersecurity (C9 Defense)',
    body: '24/7 Governance and threat management layered over existing infrastructure. Reducing risk through structured compliance.',
    link: '/managed-it/security-solutions'
  },
  {
    icon: <Monitor size={26} className="text-[#5D00D6]" />,
    title: 'Managed IT Operations',
    body: 'We take ownership of your operational environment, managing the transition from fragmented silos to a unified model.',
    link: '/managed-it'
  },
  {
    icon: <MessagesSquare size={26} className="text-[#5D00D6]" />,
    title: 'Unified Communications',
    body: 'Consolidate voice and video into a single managed environment, ensuring consistent communication across all sites.',
    link: '/solutions'
  },
];

const SectionServices = () => (
  <section id="capabilities-section" className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <FadeUp>
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="c9-eyebrow mb-4 block">The Ecosystem</span>
          <h2 className="c9-section-heading">Your environment, unified under one operating model</h2>
        </div>
      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CAPABILITIES.map((cap, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className="bg-white border border-slate-200 p-10 rounded-[40px] flex flex-col h-full hover:shadow-xl hover:shadow-purple-900/5 transition-all">
              <div className="mb-6 w-14 h-14 bg-[#5D00D6]/5 text-[#5D00D6] rounded-2xl flex items-center justify-center">
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cap.title}</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed flex-grow mb-8">{cap.body}</p>
              
              <Link
                href={cap.link}
                className="inline-flex items-center gap-2 text-[#5D00D6] font-bold text-[14px] group"
              >
                Explore <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════════════════
   SECTION 5 — OPERATING MODEL
   ══════════════════════════════════════════════════════════════════════════════ */
const STEPS = [
  { n: "01", title: "Assess", desc: "Multi-site infrastructure & vendor audit to map the current state." },
  { n: "02", title: "Identify Gaps", desc: "Locating risk mapping & performance bottlenecks across systems." },
  { n: "03", title: "Align Vendors", desc: "Consolidating accountability and relationship management under C9." },
  { n: "04", title: "Implement Control", desc: "Applying full governance & operational standards nationwide." },
  { n: "05", title: "Optimise Continuously", desc: "Ongoing strategic steering and roadmap delivery for growth." }
];

const SectionOperatingModel = () => (
  <section className="py-12 md:py-16 bg-white">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <FadeUp>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="c9-eyebrow mb-4 block">Structured Management</span>
          <h2 className="c9-section-heading">A structured approach to managing complex environments</h2>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {STEPS.map((step, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className="relative group">
              <div className="text-6xl font-black text-slate-100 mb-6 transition-colors group-hover:text-[#5D00D6]/10">{step.n}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
              <p className="text-slate-500 text-[14px] leading-relaxed">{step.desc}</p>
              {i < 4 && (
                <div className="hidden md:block absolute top-[2.5rem] -right-4 text-slate-200">
                  <ArrowRight size={24} strokeWidth={1} />
                </div>
              )}
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════════════════
   SECTION 6 — ENTERPRISE SCENARIO (THE STORY)
   ══════════════════════════════════════════════════════════════════════════════ */
const SectionScenario = () => (
  <section className="py-12 md:py-16 bg-[#0c1024] text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[#5D00D6]/5 opacity-30 pointer-events-none" />
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
        <FadeUp>
          <span className="text-[#A855F7] font-bold text-[12px] uppercase tracking-[0.2em] mb-6 block">Real World Impact</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">National Retailer Transition</h2>
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <h4 className="text-[#A855F7] font-bold text-[13px] uppercase tracking-widest mb-4">THE CHALLENGE</h4>
              <p className="text-slate-300 text-lg">600+ sites across Australia, managed by 12 different vendors. Chronic downtime at the store level and constant pressure on the internal IT team to triage finger-pointing vendors.</p>
            </div>
            <div className="bg-[#5D00D6] rounded-[32px] p-8 shadow-2xl shadow-purple-900/40">
              <h4 className="text-white/70 font-bold text-[13px] uppercase tracking-widest mb-4">C9 ACTION</h4>
              <p className="text-white text-lg">We implemented a unified connectivity and managed operations layer. C9 took ownership of every vendor relationship and standardised the technical estate nationwide.</p>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 flex flex-col items-center justify-center text-center">
              <div className="text-5xl font-black text-[#A855F7] mb-4">100%</div>
              <p className="text-slate-400 font-bold text-[13px] uppercase tracking-widest">UPTIME ACHIEVED</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 flex flex-col items-center justify-center text-center">
              <div className="text-5xl font-black text-[#A855F7] mb-4">30%</div>
              <p className="text-slate-400 font-bold text-[13px] uppercase tracking-widest">COST REDUCTION</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 col-span-2 text-center">
               <div className="text-4xl font-black text-[#A855F7] mb-4">ZERO</div>
               <p className="text-slate-400 font-bold text-[13px] uppercase tracking-widest">INTERNAL IT NOISE</p>
               <p className="text-slate-500 mt-4 max-w-sm mx-auto">The internal IT team was freed from reactive triage to focus on strategic business technology upgrades.</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════════════════
   SECTION 7 — GOVERNANCE SECTION
   ══════════════════════════════════════════════════════════════════════════════ */
const SectionGovernance = () => (
  <section className="py-12 md:py-16 bg-white">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <FadeUp>
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <h2 className="c9-section-heading">Built for control, compliance, and scale</h2>
        </div>
      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Shield size={24} />, title: "Essential 8 Alignment", desc: "Rigorous cyber hygiene standards applied across entire enterprise architectures." },
          { icon: <Monitor size={24} />, title: "24/7 Australian SOC", desc: "Real-time threat monitoring and response managed by local security specialists." },
          { icon: <BarChart3 size={24} />, title: "Asset Management", desc: "Complete lifecycle tracking of every device and connection in your network." },
          { icon: <Lock size={24} />, title: "Uptime Guarantee", desc: "Contractual SLAs that reflect the critical nature of your operations." }
        ].map((item, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className="flex gap-6 items-start">
               <div className="w-12 h-12 bg-[#5D00D6]/5 text-[#5D00D6] rounded-xl flex items-center justify-center shrink-0">
                 {item.icon}
               </div>
               <div>
                 <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                 <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
               </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════════════════
   SECTION 8 — EXPLORATION LINKS
   ══════════════════════════════════════════════════════════════════════════════ */
const ExplorationBlock = () => (
  <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <FadeUp>
        <div className="max-w-4xl">
          <h2 className="text-[28px] font-bold text-slate-900 mb-4">Deep dive into our enterprise capabilities</h2>
          <p className="c9-body text-[18px] mb-8">Select a specific operational layer to see how we manage it:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Connectivity & Networks", href: "/telco" },
              { label: "Cybersecurity", href: "/managed-it/security-solutions" },
              { label: "Managed IT", href: "/managed-it" },
              { label: "Communications", href: "/solutions" },
            ].map((link, i) => (
              <Link 
                key={i} 
                href={link.href}
                className="bg-white border border-slate-200 p-6 rounded-2xl flex items-center justify-between group hover:border-[#5D00D6] hover:shadow-md transition-all"
              >
                <span className="font-bold text-slate-700 group-hover:text-[#5D00D6]">{link.label}</span>
                <ArrowUpRight size={18} className="text-slate-300 group-hover:text-[#5D00D6] transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </FadeUp>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════════════════
   SECTION 9 — FINAL CTA
   ══════════════════════════════════════════════════════════════════════════════ */
const DecisionCTA = () => (
  <section className="bg-[#0F0F1A] py-12 md:py-16 relative overflow-hidden transition-all">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#5D00D6_0%,transparent_55%)] opacity-10 pointer-events-none" />
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10 text-center">
      <FadeUp>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
          Bring clarity and control to your IT environment
        </h2>
        <p className="text-[20px] text-slate-400 mb-8 max-w-xl mx-auto">
          Scale with confidence while reducing operational risk. Speak with our enterprise team today.
        </p>
        <PrimaryBtn href="#consultation-section">Book an Enterprise Consultation</PrimaryBtn>
      </FadeUp>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════════════════
   PAGE ASSEMBLY
   ══════════════════════════════════════════════════════════════════════════════ */
export default function Enterprise2Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpHighlights />
      <SectionReality />
      <SectionDifferentiator />
      
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <WpClientTicker />
        </div>
      </section>

      <SectionServices />
      <SectionOperatingModel />
      <SectionScenario />
      <SectionGovernance />

      <WpCaseStudies 
        title="Enterprise clients thriving under C9 management" 
        eyebrow="ENTERPRISE PROOF" 
        articles={[
           {
             tag: 'RETAIL LOGISTICS',
             title: 'National Network Optimization',
             desc: 'Managed the consolidation of connectivity for 400+ hubs, reducing latency by 45% and unifying vendor management.',
             img: '/images/case-studies/case-study-1.jpg',
             videoText: 'Logistics Success',
             href: '/case-studies'
           },
           {
             tag: 'CRITICAL INFRA',
             title: 'Zero-Downtime Data Center Transition',
             desc: 'Executed a flawless migration of broadcast-grade systems with 100% uptime maintained during the cutover.',
             img: '/images/case-studies/case-study-2.jpg',
             videoText: 'Infrastructure Success',
             href: '/case-studies'
           }
        ]}
      />

      <WpIndustryTabs />
      <WpUnifiedClassification />
      
      <ExplorationBlock />
      <DecisionCTA />

      <section id="consultation-section">
        <WpConsultationForm
          eyebrow="ENTERPRISE CONSULTATION"
          title="Take Control of Your Environment"
          description="Speak with a senior advisor to assess your infrastructure and define a structured path toward unified control — without disruption."
          formTitle="Book My Consultation"
        />
      </section>
    </main>
  );
}
