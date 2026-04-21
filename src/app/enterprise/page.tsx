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
} from 'lucide-react';
import { WpHero } from '@/components/layout/WpHero';
import { WpHighlights } from '@/components/wordpress/WpHighlights';
import { WpIndustryTabs } from '@/components/wordpress/WpIndustryTabs';
import { WpUnifiedClassification } from '@/components/wordpress/WpUnifiedClassification';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpCustomerFeedback } from '@/components/wordpress/WpCustomerFeedback';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { Card } from '@/components/ui/card';
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

/* ─── shared button primitives (match WpHero exactly) ──────────────────────── */
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

const OutlineBtn = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-8 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-colors whitespace-nowrap"
  >
    {children}
  </a>
);

/* ══════════════════════════════════════════════════════════════════════════════
   SECTION 2 — ENTERPRISE REALITY CHECK
══════════════════════════════════════════════════════════════════════════════ */
const PAIN_CARDS = [
  {
    icon: <Network size={24} />,
    title: 'The Coordination Nightmare',
    body: "You're spending 6 hours a week just coordinating between your internet provider, phone system vendor, and IT company. When something breaks, everyone points fingers. No one owns the outcome.",
  },
  {
    icon: <Clock size={24} />,
    title: 'The Downtime Tax',
    body: "Your Brisbane office went offline for 3 hours last month. The Telco blamed the router. The IT company blamed the connection. Meanwhile, your team lost productivity and your reputation took a hit.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'The Growth Ceiling',
    body: "You want to open two new locations this year, but the thought of replicating your current IT setup — with all its complexity and vendor dependencies — makes you delay the expansion.",
  },
];

const PainPoints = () => (
  <section className="py-12 md:py-16 bg-white">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <FadeUp>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="c9-eyebrow mb-4 block">The Enterprise Reality</span>
          <h2 className="c9-section-heading">
            Managing enterprise IT at scale shouldn't feel this chaotic.
          </h2>
        </div>
      </FadeUp>

      {/* Unified Container Grid */}
      <div className="bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-2xl shadow-purple-900/[0.03] relative z-20">
        <div className="grid md:grid-cols-3">
          {PAIN_CARDS.map((card, i) => (
            <div 
              key={i} 
              className={`p-10 flex flex-col group transition-all duration-500 hover:bg-slate-50/50 
                ${i < 2 ? 'md:border-r' : ''} 
                border-gray-100`}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F4F0FA] text-[#5D00D6] flex items-center justify-center mb-6 border border-[#5D00D6]/5 group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-500">
                {card.icon}
              </div>
              <h3 className="text-[20px] font-bold text-[#0c1024] mb-3 group-hover:text-[#5D00D6] transition-colors leading-tight">
                {card.title}
              </h3>
              <p className="c9-body !text-[15px] leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <FadeUp delay={0.35}>
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-[20px] md:text-[24px] font-bold text-[#0c1024] tracking-tight leading-snug">
            "There's a better way to run your business infrastructure. <br />
            <span className="text-[#5D00D6]">And it's simpler than you think."</span>
          </p>
        </div>
      </FadeUp>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════════════════
   SECTION 3 — THE C9 DIFFERENCE
══════════════════════════════════════════════════════════════════════════════ */
const BEFORE_AFTER = [
  { before: '3–5 vendors', after: '1 partner' },
  { before: '15–25 vendor contacts', after: '1 invoice' },
  { before: 'Finger-pointing when issues happen', after: 'Clear ownership' },
  { before: 'Reactive support (9–5 business hours)', after: 'Proactive 24/7 monitoring' },
  { before: 'DIY vendor coordination', after: 'C9 manages everything' },
  { before: 'Tech refresh when it breaks', after: 'Strategic IT roadmap' },
];

const ValueProposition = () => (
  <section className="py-12 md:py-16 bg-white">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-16 items-start">

        {/* Left 60% */}
        <FadeUp>
          <span className="c9-eyebrow mb-6 block">The C9 Difference</span>
          <h2 className="c9-section-heading mb-8">
            One partner. Complete infrastructure. Zero coordination.
          </h2>
          <p className="c9-body mb-8 text-[17px]">
            We don't just provide IT services — we own the outcome. When you partner with C9, you get a single team that designs, deploys, and manages your entire technology stack across every location.
          </p>
          <p className="text-[16px] font-semibold text-[#1A1A2E] mb-6">Here's what that actually means:</p>
          <ul className="space-y-4 mb-10">
            {[
              'One phone number for everything (not three different support lines)',
              'One bill covering all sites and services (not vendor invoice chaos)',
              'One Australian-based team that knows your entire environment',
              'One strategic advisor who understands your business goals',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#5D00D6] flex-shrink-0 mt-0.5" />
                <span className="c9-body !text-[#1A1A2E]">{item}</span>
              </li>
            ))}
          </ul>
          <p className="c9-body mb-8">
            We've consolidated the tech stack for 150+ multi-site businesses across Australia. We know what works — and what doesn't.
          </p>
          <Link
            href="/about/case-studies"
            className="inline-flex items-center gap-2 text-[#5D00D6] font-bold text-[14px] uppercase tracking-[0.05em] hover:gap-3 transition-all whitespace-nowrap"
          >
            View Case Studies <ArrowRight size={18} className="shrink-0" />
          </Link>
        </FadeUp>

        {/* Right 40% — comparison table */}
        <FadeUp delay={0.15}>
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            {/* Table header */}
            <div className="grid grid-cols-2 text-[12px] font-black uppercase tracking-[0.2em]">
              <div className="bg-slate-100 px-6 py-4 text-slate-500 flex items-center gap-2">
                <X size={14} className="text-rose-400" /> Before C9
              </div>
              <div className="bg-[#5D00D6] px-6 py-4 text-white flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-300" /> With C9
              </div>
            </div>
            {/* Table rows */}
            {BEFORE_AFTER.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
              >
                <div className="px-6 py-5 border-r border-slate-200 flex items-center gap-2">
                  <span className="text-[14px] text-slate-500 font-medium leading-snug">{row.before}</span>
                </div>
                <div className="px-6 py-5 flex items-center gap-2">
                  <span className="text-[14px] text-[#1A1A2E] font-semibold leading-snug">{row.after}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════════════════
   SECTION 4 — ENTERPRISE CAPABILITIES
══════════════════════════════════════════════════════════════════════════════ */
const CAPABILITIES = [
  {
    icon: <Network size={26} className="text-[#5D00D6]" />,
    eyebrow: 'Multi-Site Connectivity',
    title: 'Multi-Site Connectivity',
    body: 'Connect your HQ, branches, warehouses, and remote teams on a private network with guaranteed uptime. Enterprise Ethernet, SD-WAN, MPLS and 4G failover.',
    stat1: { value: '99.95%', label: 'Uptime SLA' },
    stat2: { value: '500+', label: 'Sites Managed' },
  },
  {
    icon: <Phone size={26} className="text-[#5D00D6]" />,
    eyebrow: 'Unified Communications',
    title: 'Unified Communications',
    body: 'One phone system across all locations. Seamless voice, video, and messaging — whether staff are in-office or remote. C9 Voice, Teams Calling, Contact Centre.',
    stat1: { value: '40+', label: 'Integrations' },
    stat2: { value: '48hr', label: 'Go-Live' },
  },
  {
    icon: <Shield size={26} className="text-[#5D00D6]" />,
    eyebrow: 'Enterprise Security',
    title: 'Enterprise Security',
    body: 'Protect your infrastructure with 24/7 monitoring, Essential 8 compliance, and tested disaster recovery. C9 Defense, Endpoint Protection, SOC Monitoring.',
    stat1: { value: '24/7', label: 'SOC Monitoring' },
    stat2: { value: '100%', label: 'E8 Compliance' },
  },
  {
    icon: <Monitor size={26} className="text-[#5D00D6]" />,
    eyebrow: 'Full IT Management',
    title: 'Full IT Management',
    body: 'We become your outsourced CTO. Strategy, vendor management, helpdesk, and lifecycle planning — all handled by one Australian-based team.',
    stat1: { value: '< 3 min', label: 'Response Time' },
    stat2: { value: '20+', label: 'Years Experience' },
  },
];

const Capabilities = () => (
  <section className="py-12 md:py-16 bg-white border-t border-gray-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <FadeUp>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="c9-eyebrow mb-4 block">Enterprise Capabilities</span>
          <h2 className="c9-section-heading">
            Everything your enterprise needs. Delivered as one integrated system.
          </h2>
        </div>
      </FadeUp>

      {/* 4-col border-separated grid — matches WpWhyPartner style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200">
        {CAPABILITIES.map((cap, i) => (
          <FadeUp key={i} delay={i * 0.08}>
            <div className="border-r border-b border-gray-200 p-6 md:p-8 flex flex-col h-full">
              {/* Pill badge */}
              <div className="inline-flex items-center self-start mb-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5D00D6] bg-[#5D00D6]/5 border border-[#5D00D6]/15 rounded-full px-4 py-1.5">
                  {cap.eyebrow}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-5">{cap.icon}</div>

              {/* Title */}
              <h3 className="c9-card-title mb-4">{cap.title}</h3>

              {/* Body */}
              <p className="c9-body text-[14px] flex-1 mb-8">{cap.body}</p>

              {/* Two-stat footer */}
              <div className="flex items-stretch gap-0 pt-6 border-t border-gray-100">
                <div className="flex-1 pr-4">
                  <div className="text-[22px] font-bold text-[#5D00D6] leading-none mb-1">
                    {cap.stat1.value}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                    {cap.stat1.label}
                  </div>
                </div>
                <div className="w-px bg-gray-200 self-stretch" />
                <div className="flex-1 pl-4">
                  <div className="text-[22px] font-bold text-[#5D00D6] leading-none mb-1">
                    {cap.stat2.value}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                    {cap.stat2.label}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Bottom CTA */}
      <FadeUp delay={0.35}>
        <div className="text-center mt-12">
          <p className="c9-body text-[16px] mb-6">
            Not sure what you need? Let's build a custom scope.
          </p>
          <PrimaryBtn
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Assessment
          </PrimaryBtn>
        </div>
      </FadeUp>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════════════════
   SECTION 5 — HOW WE WORK (PROCESS / TIMELINE)
══════════════════════════════════════════════════════════════════════════════ */
const PHASES = [
  {
    n: '01',
    phase: 'DISCOVERY',
    timing: 'Week 1–2',
    title: 'Discovery',
    body: 'Your Enterprise Advisor audits your current infrastructure, documents all vendor contracts, maps your site locations, and identifies immediate risks.',
    deliverable: 'Current state documentation + risk assessment',
  },
  {
    n: '02',
    phase: 'DESIGN',
    timing: 'Week 3–4',
    title: 'Design',
    body: "We design your future-state architecture — connectivity, voice, IT, and security — with phased implementation timeline and exact pricing. No surprises.",
    deliverable: 'Enterprise architecture blueprint + fixed-price quote',
  },
  {
    n: '03',
    phase: 'TRANSITION',
    timing: 'Week 5–12',
    title: 'Transition',
    body: 'We manage the entire migration. Zero-downtime cutovers. On-site engineers at each location. Old vendors cancelled by C9.',
    deliverable: 'Live infrastructure + staff training',
  },
  {
    n: '04',
    phase: 'OPTIMISE',
    timing: 'Ongoing',
    title: 'Optimise',
    body: 'Monthly IT steering committee meetings. Quarterly roadmap reviews. Proactive infrastructure improvements. You focus on growth.',
    deliverable: 'Strategic partnership, not transactional vendor',
  },
];

const Process = () => {
  const [openPhase, setOpenPhase] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="c9-eyebrow mb-6 block">The C9 Process</span>
            <h2 className="c9-section-heading">
              How we transition enterprise clients (without the chaos)
            </h2>
          </div>
        </FadeUp>

        {/* Desktop: Unified Container with Grid */}
        <div className="hidden md:block relative mb-12">
          <div className="grid grid-cols-4 bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-2xl shadow-purple-900/[0.03] relative z-20">
            {PHASES.map((p, i) => (
              <div 
                key={i} 
                className={`relative p-10 flex flex-col group transition-all duration-500 hover:bg-slate-50/50 ${i < 3 ? 'border-r border-gray-100' : ''}`}
              >
                {/* Step Marker */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#F4F0FA] text-[#5D00D6] flex items-center justify-center font-bold text-lg border border-[#5D00D6]/10 shadow-sm relative group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-500">
                    {p.n}
                    {i < 3 && (
                      <div className="absolute top-1/2 -right-12 w-10 h-[1px] bg-gray-200 hidden lg:block" />
                    )}
                  </div>
                  <div>
                    <span className="c9-eyebrow !text-[#5D00D6] block leading-none mb-1">{p.phase}</span>
                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">{p.timing}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-[20px] font-bold text-[#0c1024] mb-3 group-hover:text-[#5D00D6] transition-colors">
                  {p.title}
                </h3>
                <p className="c9-body !text-[15px] mb-6 flex-grow leading-relaxed">
                  {p.body}
                </p>

                {/* Deliverable Badge */}
                <div className="mt-auto bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-3 group-hover:border-[#5D00D6]/20 group-hover:bg-white transition-all duration-500">
                  <p className="text-[11px] font-bold text-[#0c1024]/80 flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5 text-white" stroke="currentColor" strokeWidth="4">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {p.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Background line */}
          <div className="absolute top-1/2 left-10 right-10 h-[100px] -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(93,0,214,0.02)_0%,transparent_70%)] blur-3xl z-0" />
        </div>

        {/* Mobile: Refined Accordion */}
        <div className="md:hidden space-y-3 mb-12">
          {PHASES.map((p, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-[24px] overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenPhase(openPhase === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-6 text-left"
              >
                <div className="flex items-center gap-5">
                  <span className="w-12 h-12 rounded-2xl bg-[#F4F0FA] text-[#5D00D6] flex items-center justify-center text-[16px] font-bold flex-shrink-0 border border-[#5D00D6]/5">
                    {p.n}
                  </span>
                  <div>
                    <span className="c9-eyebrow !text-[#5D00D6] block mb-1">{p.phase}</span>
                    <span className="text-[18px] font-bold text-[#0c1024]">{p.title}</span>
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center transition-all ${openPhase === i ? 'bg-[#5D00D6] border-[#5D00D6] text-white' : 'text-gray-400'}`}>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openPhase === i ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openPhase === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="w-full h-px bg-gray-50 mb-6" />
                      <p className="c9-body !text-[15px] mb-6 leading-relaxed">{p.body}</p>
                      <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-3">
                        <p className="text-[12px] font-bold text-[#0c1024]/70 flex items-center gap-2">
                           <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5 text-white" stroke="currentColor" strokeWidth="4">
                              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          {p.deliverable}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="text-center">
            <OutlineBtn href="/enterprise-onboarding">Get Onboarding Guide</OutlineBtn>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   SECTION 6 — CASE STUDIES + STAT BAR
══════════════════════════════════════════════════════════════════════════════ */
/* ══════════════════════════════════════════════════════════════════════════════
   SECTION 9 — DARK CTA / DECISION MOMENT
══════════════════════════════════════════════════════════════════════════════ */
const DecisionCTA = () => (
  <section className="bg-[#0F0F1A] py-12 md:py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#5D00D6_0%,transparent_55%)] opacity-10 pointer-events-none" />
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 xl:gap-24 items-center">

        {/* Left 60% */}
        <FadeUp>
          <h2 className="c9-section-heading !text-white mb-8">
            Ready to stop juggling vendors and start scaling your business?
          </h2>
          <p className="text-[18px] text-slate-400 leading-relaxed mb-6 max-w-xl">
            Every week you spend coordinating between multiple IT vendors is a week you're not focused on growth. C9 gives you back that time — and the peace of mind that comes with single-point accountability.
          </p>
          <p className="text-[16px] text-slate-500 leading-relaxed max-w-xl">
            Our Enterprise Advisors work with CEOs and CTOs managing 3–50+ locations across Australia.
          </p>
        </FadeUp>

        {/* Right 40% — CTA stack */}
        <FadeUp delay={0.15}>
          <div className="flex flex-col gap-5">
            <div className="space-y-1.5 text-center">
              <a
                href="#consultation-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#5D00D6] rounded-full h-12 md:h-14 px-8 font-bold text-[15px] hover:bg-[#F4F0FA] transition-colors group w-full"
              >
                Book Consultation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-[11px] text-slate-500 opacity-80">↳ 30-min call, no obligation</p>
            </div>

            <div className="space-y-1.5 text-center">
              <a
                href="/downloads/c9-capability-statement.pdf"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white rounded-full h-12 md:h-14 px-8 font-bold text-[15px] hover:border-white/50 hover:bg-white/5 transition-colors w-full"
              >
                Get Capability Statement
              </a>
              <p className="text-[11px] text-slate-500 opacity-80">↳ PDF Service Catalog</p>
            </div>

            <div className="space-y-1.5 text-center">
              <a
                href="tel:1800000299"
                className="inline-flex items-center justify-center gap-2 border border-[#5D00D6]/40 text-[#A855F7] rounded-full h-12 md:h-14 px-8 font-bold text-[15px] hover:border-[#5D00D6] hover:bg-[#5D00D6]/10 transition-colors w-full"
              >
                <Phone size={17} /> Call 1800 000 299
              </a>
              <p className="text-[11px] text-slate-500 opacity-80">↳ Speak to an advisor</p>
            </div>

            <p className="text-[11px] text-slate-500 text-center mt-4 leading-normal opacity-70">
              No lock-in contracts. Australian-based advisors.<br />Typical response: 2 business hours.
            </p>
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════════════════════
   ENTERPRISE FAQ DATA
══════════════════════════════════════════════════════════════════════════════ */
const ENTERPRISE_FAQS = [
  {
    q: "What's the minimum company size you work with?",
    a: "We work with businesses from 50+ staff and/or 3+ locations. If you're smaller but have complex multi-site requirements, we'll still assess your fit.",
  },
  {
    q: "Do we have to move everything to C9 at once?",
    a: "No. Most enterprise clients start with connectivity (because that's the foundation), then add voice, then IT services. We can phase it over 6–24 months based on your contract renewal schedule.",
  },
  {
    q: "What happens to our existing vendor contracts?",
    a: "We audit them, identify cancellation windows, and manage the transition. We take over vendor relationships so you don't have to.",
  },
  {
    q: "How much does enterprise IT consolidation typically cost?",
    a: "It depends on your site count, user count, and services. Most multi-site clients see 20–35% cost savings compared to their current multi-vendor setup. We provide fixed-price quotes — no surprises.",
  },
  {
    q: "What if something goes wrong at one of our sites?",
    a: "You call ONE number. We triage, dispatch, and resolve. No vendor finger-pointing. We own the outcome.",
  },
  {
    q: "Is there a lock-in contract?",
    a: "Enterprise agreements are typically 24–36 months (due to hardware provisioning and implementation costs), but we offer flexibility based on your business needs. No auto-renewals or surprise fees.",
  },
];

const ENTERPRISE_TESTIMONIALS = [
  {
    name: 'David Chen',
    role: 'Operations Director — Foodworks',
    content:
      'Consolidating our nationwide connectivity and IT infrastructure under C9 Communications was the best strategic move we made. Their enterprise Fibre nbn eliminated our downtime, and having a single, proactive Australian support team means zero IT headaches.',
    metric: '650+',
    metricLabel: 'Stores Managed',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Sarah Jenkins',
    role: 'CTO — Nova Entertainment',
    content:
      'C9 executed a flawless migration of our staff to Microsoft 365 while completely hardening our security posture. Their zero-touch device deployment via Intune saved our IT team hundreds of setup hours and standardised our hybrid workforce seamlessly.',
    metric: '100%',
    metricLabel: 'Downtime-Free Migration',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Michael Ross',
    role: 'Managing Director — National Storage',
    content:
      "The strategic roadmap provided by C9 aligned our technology stack perfectly with our aggressive growth targets. They don't just fix issues; they engineer sophisticated, centralised infrastructure that scales dynamically. Truly unmatched enterprise consultancy.",
    metric: '400+',
    metricLabel: 'Sites Consolidated',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800'
  },
];

/* ══════════════════════════════════════════════════════════════════════════════
   REAL ENTERPRISE CASE STUDIES (OVERRIDE DEFAULT)
══════════════════════════════════════════════════════════════════════════════ */
const ENTERPRISE_ARTICLES = [
  {
    tag: 'ENTERPRISE RETAIL',
    title: 'Foodworks: Managed Network for 650+ Stores',
    desc: 'C9 Communications architected a complete managed network for nationwide expansion with zero impact to active trading hours. POS systems now maintain 100% connectivity uptime during peak periods.',
    img: '/images/case-studies/case-study-1.jpg',
    videoText: 'Foodworks Network Rollout',
    href: '/about/case-studies'
  },
  {
    tag: 'CRITICAL INFRASTRUCTURE',
    title: 'Nova Entertainment: Broadcast-Grade Redundancy',
    desc: 'Managing high-volume broadcast infrastructure requires partners who truly understand latency. Transitioning to C9 gave Nova an immediate 30% reduction in downtime alerts.',
    img: '/images/case-studies/case-study-2.jpg',
    videoText: 'Nova Broadcast Redundancy',
    href: '/about/case-studies'
  },
  {
    tag: 'MULTI-SITE LOGISTICS',
    title: 'National Storage: 400+ Site Consolidation',
    desc: 'Consolidated hundreds of complex telco feeds into one pane of glass. This allowed the client to roll out unified access control safely and reliably across their entire national footprint.',
    img: '/images/case-studies/case-study-3.jpg',
    videoText: 'National Storage Consolidation',
    href: '/about/case-studies'
  }
];

/* ══════════════════════════════════════════════════════════════════════════════
   PAGE ASSEMBLY
══════════════════════════════════════════════════════════════════════════════ */
export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* S1 — HERO */}
      <WpHero />

      {/* Trust / highlights strip */}
      <WpHighlights />

      {/* S2 — PAIN POINTS */}
      <PainPoints />

      {/* S3 — VALUE PROPOSITION */}
      <ValueProposition />

      {/* Client ticker */}
      <section className="bg-white border-y border-slate-100 py-8">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <WpClientTicker />
        </div>
      </section>

      {/* S4 — CAPABILITIES */}
      <Capabilities />

      {/* S5 — PROCESS */}
      <Process />

      {/* S6 — ENTERPRISE PROOF */}
      <WpCaseStudies 
        title="Enterprise clients who consolidated everything with C9" 
        eyebrow="ENTERPRISE PROOF" 
        articles={ENTERPRISE_ARTICLES}
      />

      {/* S7 — INDUSTRY TABS */}
      <WpIndustryTabs />

      {/* S8 — EXPLORE THE C9 ECOSYSTEM (unchanged) */}
      <WpUnifiedClassification />

      {/* S9 — DECISION CTA */}
      <DecisionCTA />

      {/* S10 — TESTIMONIALS */}
      <WpFAQAndFeedback
        showFAQ={false}
        showTestimonials={true}
        testimonials={ENTERPRISE_TESTIMONIALS}
      />

      {/* S11 — FAQ */}
      <WpFAQAndFeedback
        showFAQ={true}
        showTestimonials={false}
        faqItems={ENTERPRISE_FAQS}
        showStillQuestions={false}
      />

      {/* Final consultation form */}
      <section id="consultation-section">
        <WpConsultationForm
          eyebrow="ENTERPRISE CONSULTATION"
          title="Let's Review Your Current Setup"
          description="We'll identify gaps, risks, and opportunities across all your sites — no obligation. Speak directly with a senior Enterprise Advisor."
          formTitle="Get Assessment"
        />
      </section>

    </main>
  );
}
