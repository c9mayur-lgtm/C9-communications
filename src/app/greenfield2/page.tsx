'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight, CheckCircle, ShoppingCart, Users2,
  Wrench, Network, Zap, MapPin, AlertTriangle,
  ClipboardList, Package, HardHat, Settings, BadgeCheck,
  PhoneCall,
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpVendors } from '@/components/wordpress/WpVendors';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';

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
  <section className="relative overflow-hidden bg-white pt-6 pb-0 lg:pt-10">
    {/* Subtle grid */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }}
    />
    {/* Radial highlight */}
    <div
      className="pointer-events-none absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full opacity-[0.05]"
      style={{ background: 'radial-gradient(circle, #5D00D6 0%, transparent 70%)' }}
    />

    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-14 lg:pb-20">
        {/* LEFT — Copy */}
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <Zap size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Greenfield Site Delivery</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Launch your entire business IT infrastructure{' '}
              <span className="text-[#5D00D6]">without building an internal team</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-5 max-w-[520px]">
              We design, deploy, and manage your complete technology environment from day one. Single partner. Full accountability.
            </p>
            <p className="text-[14px] text-slate-500 mb-10 max-w-[520px]">
              From initial technical validation to site commissioning, we provide a single point of accountability for your new business setup.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
              >
                Get My Setup Plan
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#micro-nav"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-all whitespace-nowrap"
              >
                Explore Services →
              </a>
            </div>
            <p className="text-[13px] text-slate-400 font-medium ml-1">
              No obligation. Just clear, practical guidance.
            </p>
          </FadeIn>

          <FadeIn delay={0.32}>
            <div className="flex flex-wrap gap-x-7 gap-y-3 mt-10 pt-8 border-t border-slate-100">
              {['End-to-End Ownership', 'Day One Operational', 'Single Point of Contact', 'Nationwide Delivery'].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-slate-500 text-[13px] font-semibold">
                  <CheckCircle size={14} className="text-[#5D00D6]" /> {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* RIGHT — Hero image */}
        <FadeIn delay={0.14} direction="right" className="relative hidden lg:block">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group">
            <img
              src="/images/greenfield_hero.png"
              alt="C9 team delivering a new site build"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/30 via-transparent to-transparent" />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg border border-white/60">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#5D00D6] mb-1">Site Status</div>
              <div className="text-[17px] font-bold text-slate-900 leading-tight">Fully Commissioned ✓</div>
            </div>
            {/* Top badge */}
            <div className="absolute top-6 right-6 bg-[#5D00D6] text-white rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-0.5">Delivery Model</div>
              <div className="text-[15px] font-extrabold">End-to-End</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — HUMAN REALITY (PAIN)
   ───────────────────────────────────────────────────────── */
const SectionPain = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">The Real Problem</span>
          <h2 className="c9-section-heading mb-6">
            Most New Site Projects Break Down During Delivery
          </h2>
          <p className="c9-body mb-6">
            Opening a new office or facility isn't just about getting internet connected. You are starting from zero.
          </p>
          <p className="c9-body mb-8">
            It involves multiple vendors, timelines, dependencies, and technical decisions — and when these aren't coordinated properly, projects get delayed, systems don't work as expected, and teams are left fixing issues after move-in.
          </p>
          <div className="bg-[#5D00D6]/5 border border-[#5D00D6]/15 rounded-2xl p-6">
            <p className="text-slate-800 font-bold text-[16px] leading-snug mb-4">
              C9 removes that risk by managing the entire process end-to-end — one partner, one outcome. No internal IT team required.
            </p>
            <a href="/managed-it" className="text-[14px] font-bold text-[#5D00D6] hover:underline inline-flex items-center gap-1">
              Explore Managed IT →
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} direction="right">
          <div className="space-y-4">
            {[
              { icon: <AlertTriangle size={18} className="text-rose-500" />, title: 'Vendor chaos', desc: 'Multiple contractors with no single coordinator — each pointing at the other when things go wrong.' },
              { icon: <AlertTriangle size={18} className="text-rose-500" />, title: 'Timeline slippage', desc: 'Cabling done before the network is designed; systems delivered with no one to install them.' },
              { icon: <AlertTriangle size={18} className="text-rose-500" />, title: 'Move-in day failures', desc: 'Teams arrive to find phones don\'t work, WiFi is patchy, and systems aren\'t commissioned.' },
              { icon: <AlertTriangle size={18} className="text-rose-500" />, title: 'Unexpected costs', desc: 'Rework, return visits, and emergency fixes that blow out the project budget.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-[15px] mb-1">{item.title}</p>
                    <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2.5 — SCENARIOS (WHO THIS IS FOR)
   ───────────────────────────────────────────────────────── */
const SectionScenarios = () => (
  <section className="py-16 bg-white border-b border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-12">
        <h2 className="text-[20px] font-bold text-slate-900">
          Built for Businesses Starting Fresh
        </h2>
      </FadeIn>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Starting from Zero', desc: 'Empty shell to fully operational from day one.' },
          { label: 'Expanding Operations', desc: 'Designed for scalability from day one.' },
          { label: 'No Internal IT Team required', desc: 'We handle everything from start to finish.' },
          { label: 'Relocating Headquarters', desc: 'Zero-downtime infrastructure setup.' },
        ].map((s, i) => (
          <FadeIn key={i} delay={i * 0.05} className="text-center group">
            <div className="h-full bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-white hover:border-[#5D00D6]/20 transition-all hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#5D00D6]/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5D00D6]/10 transition-colors">
                <CheckCircle size={16} className="text-[#5D00D6]" />
              </div>
              <h3 className="font-bold text-slate-900 text-[15px] mb-2">{s.label}</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2} className="text-center flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#consultation"
          className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-purple-900/20 group"
        >
          Get My Setup Plan
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="/managed-it"
          className="inline-flex items-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-12 px-8 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all"
        >
          Explore Managed IT →
        </a>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — WHAT A GREENFIELD SITE INVOLVES
   ───────────────────────────────────────────────────────── */
const SectionWhatIsInvolved = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className={C}>
      <FadeIn className="text-center mb-14">
        <span className="c9-eyebrow mb-4">Your complete IT environment, fully managed</span>
        <h2 className="c9-section-heading mb-5 max-w-2xl mx-auto">
          A New Business Setup Requires More Than Just Connectivity
        </h2>
        <p className="c9-body max-w-2xl mx-auto">
          This is a coordinated delivery process that requires expertise across multiple disciplines. Eliminates the need to manage multiple vendors.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { step: '01', label: 'Requirements & Scope Validation', desc: 'Detailed technology design validation and rack layouts established before any physical works begin.' },
          { step: '02', label: 'Procurement of All Components', desc: 'Managing the entire lifecycle for active hardware and passive materials (racks, panels, optics, and accessories).' },
          { step: '03', label: 'Structured Cabling & Infrastructure', desc: 'Standards-based Cat6A and fibre installation by licensed cablers, fully tested and certified prior to handover.' },
          { step: '04', label: 'Project Governance & Coordination', desc: 'High-level sequencing of trades (builders, electricians, cablers) to ensure no gaps or timeline slippage.' },
          { step: '05', label: 'Installation, Patching & Config', desc: 'Physical mounting, termination, and device adoption followed by network configuration and security policies.' },
          { step: '06', label: 'Validation, Testing & Commissioning', desc: 'Redundancy checks, failover validation, and end-to-end testing. Nothing is considered live until it is documented.' },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div className="bg-slate-50 rounded-[24px] border border-slate-100 p-7 h-full hover:shadow-md hover:border-[#5D00D6]/20 hover:bg-white transition-all group">
              <span className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-[0.2em] mb-4 block">{item.step}</span>
              <h3 className="text-[17px] font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#5D00D6] transition-colors">{item.label}</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3} className="mt-10">
        <div className="bg-[#0c1024] rounded-[28px] p-8 lg:p-10 text-center">
          <p className="text-xl lg:text-2xl font-bold leading-snug text-white mb-6">
            We design, deploy, and manage the entire delivery process —{' '}
            <span className="text-[#a56eff]">and C9 owns every part of it.</span>
          </p>
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all"
          >
            Get My Setup Plan
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — DELIVERY FLOW (VISUAL STEPS)
   ───────────────────────────────────────────────────────── */
const steps = [
  { icon: <ClipboardList size={24} className="text-[#5D00D6]" />, num: '1', title: 'Validate', desc: 'Assess site, layout, and technical design requirements.' },
  { icon: <Package size={24} className="text-[#5D00D6]" />, num: '2', title: 'Procure', desc: 'Source active hardware and passive infrastructure materials.' },
  { icon: <HardHat size={24} className="text-[#5D00D6]" />, num: '3', title: 'Govern', desc: 'Coordinate site trades and manage delivery dependencies.' },
  { icon: <Network size={24} className="text-[#5D00D6]" />, num: '4', title: 'Cable', desc: 'Install and certify structured cabling to Australian standards.' },
  { icon: <Wrench size={24} className="text-[#5D00D6]" />, num: '5', title: 'Commission', desc: 'Install, patch, and configure all systems end-to-end.' },
  { icon: <BadgeCheck size={24} className="text-[#5D00D6]" />, num: '6', title: 'Handoff', desc: 'Testing, validation, and full documentation handover.' },
];

const SectionFlow = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-14">
        <span className="c9-eyebrow mb-4">Proven deployment approach</span>
        <h2 className="c9-section-heading mb-4">
          From Empty Site to Fully Operational Environment
        </h2>
        <p className="c9-body max-w-xl mx-auto">
          Every new business setup follows the same disciplined six-stage process. Ensures your team can operate from day one without delays.
        </p>
      </FadeIn>

      {/* Desktop: horizontal flow */}
      <div className="hidden lg:grid lg:grid-cols-6 gap-0 relative">
        {/* Connector line */}
        <div className="absolute top-[46px] left-[calc(100%/12)] right-[calc(100%/12)] h-[2px] bg-gradient-to-r from-[#5D00D6]/20 via-[#5D00D6]/40 to-[#5D00D6]/20" />

        {steps.map((s, i) => (
          <FadeIn key={i} delay={i * 0.07} className="relative flex flex-col items-center text-center px-3">
            <div className="relative z-10 w-[92px] h-[92px] rounded-full bg-white border-2 border-[#5D00D6]/20 flex flex-col items-center justify-center mb-5 shadow-md hover:border-[#5D00D6]/60 hover:shadow-purple-100 transition-all group">
              <div className="mb-0.5">{s.icon}</div>
              <span className="text-[10px] font-bold text-[#5D00D6] uppercase tracking-widest">Step {s.num}</span>
            </div>
            <h3 className="font-bold text-slate-900 text-[16px] mb-2">{s.title}</h3>
            <p className="text-slate-500 text-[13px] leading-relaxed">{s.desc}</p>
          </FadeIn>
        ))}
      </div>

      {/* Mobile: vertical cards */}
      <div className="lg:hidden space-y-4">
        {steps.map((s, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div className="bg-white rounded-2xl border border-slate-100 p-5 flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center shrink-0">
                {s.icon}
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#5D00D6] uppercase tracking-[0.18em] mb-1">Step {s.num}</p>
                <h3 className="font-bold text-slate-900 text-[16px] mb-1">{s.title}</h3>
                <p className="text-slate-500 text-[14px]">{s.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2} className="mt-12 text-center">
        <a
          href="#consultation"
          className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-purple-900/20 group"
        >
          Get My Setup Plan
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — CORE DELIVERY CAPABILITIES
   ───────────────────────────────────────────────────────── */
const capabilities = [
  {
    icon: <ShoppingCart size={24} className="text-[#5D00D6]" />,
    tag: 'Procurement & Supply Chain',
    headline: 'Single Vendor. Full Accountability. No Surprises.',
    desc: 'C9 manages the complete procurement lifecycle for all active tech components (networking, security) and passive materials (racks, panels, PDUs). We ensure version control, and staged delivery for complex projects.',
    image: '/images/greenfield_procurement_new_1.png',
    link: { text: 'Explore Managed IT →', href: '/managed-it' }
  },
  {
    icon: <Users2 size={24} className="text-[#5D00D6]" />,
    tag: 'Project Management & Governance',
    headline: 'Designed Once. Delivered Properly. Governed End-to-End.',
    desc: 'Full project governance across all delivery stages. We coordinate builders, electricians, and licensed cablers to ensure technical design validation, rack layouts, and seamless integration between passive and active infrastructure.',
    image: '/images/greenfield_project_management_new_1.png',
    link: { text: 'Explore Managed IT →', href: '/managed-it' }
  },
  {
    icon: <Network size={24} className="text-[#5D00D6]" />,
    tag: 'Structured Data Cabling',
    headline: 'Standards-Based Cabling — Installed for Performance.',
    desc: 'Professional Cat6/Cat6A and fibre cabling services. Installed by licensed cablers to Australian standards, including workstation data points, Wi-Fi paths, and rack management — all tested, certified, and fully documented.',
    image: '/images/greenfield_cabling_new_1.png',
    link: { text: 'Explore Telco →', href: '/telco' }
  },
  {
    icon: <Wrench size={24} className="text-[#5D00D6]" />,
    tag: 'Installation & Commissioning',
    headline: 'Installed, Patched, Tested — Then Handed Over.',
    desc: 'End-to-end installation of all systems. We manage the transition from passive cabling to live services, including device adoption, firmware standardisation, and failover validation. Nothing is considered live until it is verified.',
    image: '/images/greenfield_commissioning_new_1.png',
    link: { text: 'Explore Managed IT →', href: '/managed-it' }
  },
];

const SectionCapabilities = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className={C}>
      <FadeIn className="text-center mb-14">
        <span className="c9-eyebrow mb-4">We Design, Deploy, and Manage</span>
        <h2 className="c9-section-heading mb-5">
          Everything your business needs to operate from day one
        </h2>
        <p className="c9-body max-w-xl mx-auto">
          Four disciplines. One delivery model. Zero gaps. Single partner. Full accountability.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-6">
        {capabilities.map((cap, i) => (
          <FadeIn key={i} delay={i * 0.07}>
            <div className="bg-slate-50 rounded-[28px] border border-slate-100 overflow-hidden h-full hover:shadow-lg hover:border-[#5D00D6]/20 transition-all group">
              {/* Image strip */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cap.image}
                  alt={cap.tag}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Content */}
              <div className="p-7 pt-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center shrink-0">
                    {cap.icon}
                  </div>
                  <span className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-[0.18em]">{cap.tag}</span>
                </div>
                <h3 className="c9-card-title mb-3">{cap.headline}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed mb-4">{cap.desc}</p>
                
                {cap.link && (
                  <div className="mb-4">
                    <a href={cap.link.href} className="text-[13px] font-bold text-[#5D00D6] hover:underline flex items-center gap-1">
                      {cap.link.text}
                    </a>
                  </div>
                )}

                {i === 3 && (
                  <div className="space-y-2 mt-2 pt-4 border-t border-slate-100">
                    {['Data points patched & labelled', 'Network paths tested end-to-end', 'Redundancy & failover validated', 'Full documentation & diagrams'].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-[#5D00D6]/60" />
                        <span className="text-[12px] text-slate-400 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2} className="mt-12 text-center">
        <a
          href="#consultation"
          className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-purple-900/20 group"
        >
          Get My Setup Plan
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — NATIONWIDE DELIVERY
   ───────────────────────────────────────────────────────── */
const SectionNationwide = () => (
  <section className="py-16 lg:py-24 bg-[#0c1024] relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.08]"
      style={{ background: 'radial-gradient(circle at 70% 50%, #5D00D6, transparent 60%)' }}
    />
    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow !text-[#a56eff] mb-5">Nationwide Reach</span>
          <h2 className="c9-section-heading !text-white mb-6">
            Delivered Nationwide, Coordinated Properly
          </h2>
          <p className="c9-body !text-white/65 mb-8 max-w-[500px]">
            We design, deploy, and manage new business setups across metro and regional locations through a coordinated delivery approach. Every site follows the same standards — ensuring your business runs on a reliable foundation, regardless of location.
          </p>
          <ul className="space-y-4">
            {[
              'Metropolitan and regional locations covered',
              'Same delivery standards across every site',
              'Local trades coordinated under C9 management',
              'Consistent outcomes regardless of geography',
            ].map((p, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle size={16} className="text-[#a56eff] shrink-0" />
                <span className="text-white/80 text-[15px] font-medium">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-purple-900/20 group justify-center"
            >
              Get My Setup Plan
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/telco"
              className="inline-flex items-center gap-2 border-2 border-white/20 text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-white/10 transition-all justify-center"
            >
              Explore Connectivity →
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} direction="right">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <MapPin size={28} className="text-[#5D00D6]" />, stat: 'Metro', label: 'All Capital Cities' },
              { icon: <MapPin size={28} className="text-[#5D00D6]" />, stat: 'Regional', label: 'Australia-Wide' },
              { icon: <CheckCircle size={28} className="text-[#5D00D6]" />, stat: '1 Team', label: 'Single Coordinator' },
              { icon: <BadgeCheck size={28} className="text-[#5D00D6]" />, stat: '100%', label: 'Same Standard' },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 transition-all">
                <div className="flex justify-center mb-3">{s.icon}</div>
                <div className="text-2xl font-extrabold text-white mb-1">{s.stat}</div>
                <div className="text-[11px] font-bold text-white/40 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — ACCOUNTABILITY (TRUST CORE)
   ───────────────────────────────────────────────────────── */
const SectionAccountability = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">One Partner. One Outcome.</span>
          <h2 className="c9-section-heading mb-6">
            C9 Owns the Full Delivery Process
          </h2>
          <p className="c9-body mb-7">
            You are not left managing multiple vendors, resolving install issues, or fixing mismatched systems. Everything is delivered as one complete, working environment — and we don't leave until it is.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { t: 'Design Integrity', d: 'Ensuring your technology works as a single, cohesive system.' },
              { t: 'Hardware Compatibility', d: 'Correct model selection aligned to design intent.' },
              { stat: 'Deployment Quality', d: 'Installed by licensed professionals to manufacturer best practices.' },
              { t: 'System Performance', d: 'Fully validated and commissioned at handover.' },
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#5D00D6] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-900 font-bold text-[15px] block leading-tight mb-0.5">{p.t || p.stat}</span>
                  <span className="text-slate-500 text-[13px]">{p.d}</span>
                </div>
              </div>
            ))}
          </div>
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-purple-900/20 group"
          >
            Get My Setup Plan
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </FadeIn>

        <FadeIn delay={0.12} direction="right">
          {/* Dark trust card */}
          <div className="bg-[#0c1024] rounded-[32px] p-10 lg:p-12 text-white">
            <p className="text-[12px] font-bold text-[#a56eff] uppercase tracking-[0.22em] mb-6">Our Commitment</p>
            <blockquote className="text-2xl md:text-[26px] font-bold leading-snug mb-8 text-white">
              &ldquo;Everything delivered as one complete, working environment. We don&apos;t hand over until it&apos;s fully operational.&rdquo;
            </blockquote>
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {[
                { stat: '100%', label: 'Ownership' },
                { stat: 'Day 1', label: 'Operational' },
                { stat: '1', label: 'Point of Contact' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-extrabold text-[#5D00D6] mb-1">{s.stat}</div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating social proof */}
          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center">
              <div className="text-[28px] font-extrabold text-[#5D00D6] mb-1">0</div>
              <div className="text-slate-500 text-[12px] font-semibold uppercase tracking-wider">Vendor Disputes</div>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center">
              <div className="text-[28px] font-extrabold text-[#5D00D6] mb-1">1</div>
              <div className="text-slate-500 text-[12px] font-semibold uppercase tracking-wider">Invoice. One Bill.</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — PARTNER ECOSYSTEM
   ───────────────────────────────────────────────────────── */
const SectionPartnerEcosystem = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <h2 className="c9-section-heading mb-6 max-w-2xl mx-auto">Built with the Right Technology for Each Layer</h2>
        <p className="c9-body max-w-3xl mx-auto text-slate-600">
          We don&apos;t rely on a single vendor. C9 selects the right technology for each part of your fully operational environment — designed for scalability from day one.
        </p>
      </FadeIn>

      {/* Part 1: Logos (Clean Grid) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 max-w-5xl mx-auto">
        {[
          { name: 'Cisco', cat: 'Networking' },
          { name: 'Ubiquiti', cat: 'Networking' },
          { name: 'Yealink', cat: 'Voice' },
          { name: '3CX', cat: 'Voice' },
          { name: 'Hikvision', cat: 'Security' },
          { name: 'Axis', cat: 'Security' },
          { name: 'Clipsal', cat: 'Infrastructure' },
          { name: 'Panduit', cat: 'Infrastructure' },
        ].map((v, i) => (
          <FadeIn key={i} delay={i * 0.05}>
             <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 h-32 group hover:border-[#5D00D6]/20 transition-all shadow-sm">
                <div className="text-slate-700 font-extrabold text-[22px] tracking-tight opacity-75 group-hover:opacity-100 transition-all">
                  {v.name}
                </div>
                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest">{v.cat}</div>
             </div>
          </FadeIn>
        ))}
      </div>

      {/* Part 2: "Per Type" Explanation */}
      <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-100 rounded-[32px] p-8 lg:p-12 mb-12 shadow-sm">
        <FadeIn>
          <h3 className="c9-card-title mb-8 text-center text-slate-900 !text-[20px]">The Right Vendor for the Right Function</h3>
          <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8">
            {[
              'Networking designed with performance-focused vendors',
              'Voice systems selected for reliability and usability',
              'Security solutions aligned to site requirements',
              'Infrastructure components built for long-term durability'
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle size={18} className="text-[#5D00D6] shrink-0 mt-0.5" />
                <span className="text-slate-600 text-[15px] font-medium leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Part 3: Positioning Line */}
      <FadeIn delay={0.2} className="text-center">
        <p className="text-[18px] md:text-[22px] font-bold text-slate-900 max-w-3xl mx-auto leading-snug mb-8">
          We don&apos;t force a single vendor across your entire environment — <span className="text-[#5D00D6]">we design a system using the best components for each layer.</span>
        </p>
        <a
          href="#consultation"
          className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-purple-900/20 group"
        >
          Get My Setup Plan
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8.5 — MICRO NAVIGATION (EXPLORATION LAYER)
   ───────────────────────────────────────────────────────── */
const SectionMicroNav = () => (
  <section id="micro-nav" className="py-12 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-[20px] font-bold text-slate-900 mb-4">Not ready to plan yet?</h2>
          <p className="c9-body mb-8">
            If you&apos;re still evaluating, explore each part of your business setup in detail:
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Connectivity & Network', href: '/telco' },
              { label: 'Cybersecurity', href: '/managed-it/security-solutions' },
              { label: 'Managed IT', href: '/managed-it' },
              { label: 'Workplace & Devices', href: '/modern-workplace' },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="bg-white border border-slate-100 rounded-xl p-4 text-[13px] font-bold text-slate-700 hover:border-[#5D00D6]/30 hover:text-[#5D00D6] hover:shadow-sm transition-all"
              >
                {link.label} →
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — HUMAN REASSURANCE (EMOTIONAL CLOSE)
   ───────────────────────────────────────────────────────── */
const SectionReassurance = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Image */}
        <FadeIn direction="left" className="relative">
          <div className="rounded-[32px] overflow-hidden shadow-xl shadow-slate-200 aspect-[4/3]">
            <img
              src="/images/c9_support_engineer.png"
              alt="C9 team member on site"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating quote */}
          <div className="absolute bottom-8 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-white/60 max-w-[280px]">
            <p className="text-[14px] font-semibold text-slate-800 leading-snug mb-2">
              &ldquo;We were operational from day one. Nothing was left incomplete.&rdquo;
            </p>
            <p className="text-[12px] text-[#5D00D6] font-bold uppercase tracking-wider">C9 Greenfield Client</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} direction="right">
          <span className="c9-eyebrow mb-4">We Know What's at Stake</span>
          <h2 className="c9-section-heading mb-6">
            Your Timeline Matters. We Treat It That Way.
          </h2>
          <p className="c9-body mb-5">
            Starting from zero comes with real pressure — timelines, budgets, and expectations that leave no room for error.
          </p>
          <p className="c9-body mb-5">
            We handle everything so your team can walk in and start operating without disruption. No internal IT team required. No scrambling. No rework. No day-one chaos.
          </p>
          <p className="c9-body font-bold !text-[#5D00D6]">
            We deliver certainty for your new business setup.
          </p>
          <div className="mt-8">
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-purple-900/20 group"
            >
              Get My Setup Plan
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — FINAL CTA (HIGH CONVERSION)
   ───────────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className={`${C} text-center`}>
      <FadeIn>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
          <PhoneCall size={13} className="text-[#5D00D6]" />
          <span className="c9-eyebrow !mb-0">Ready to Start</span>
        </div>
        <h2 className="c9-section-heading mb-5 max-w-2xl mx-auto">
          Let&apos;s Get Your New Business Setup Properly
        </h2>
        <p className="c9-body mb-5 max-w-xl mx-auto">
          C9 Communications designs, deploys, and manages your complete IT environment — starting from zero, fully operational from day one.
        </p>
        <p className="text-[14px] text-slate-500 mb-10 max-w-xl mx-auto">
          One Partner. One Outcome. One Point of Accountability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a
            href="#consultation"
            className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
          >
            Get My Setup Plan
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#micro-nav"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-10 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-all whitespace-nowrap"
          >
            Explore Services →
          </a>
        </div>

        <p className="text-[13px] text-slate-400 font-medium">
          No obligation. No sales pressure. Just clear, practical guidance.
        </p>
      </FadeIn>

      {/* Trust strip */}
      <FadeIn delay={0.2} className="mt-14 pt-10 border-t border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { stat: 'End-to-End', label: 'Full Ownership Model' },
            { stat: 'Day 1', label: 'Operational Guarantee' },
            { stat: 'Nationwide', label: 'Delivery Coverage' },
            { stat: '1 Bill', label: 'Single Invoice' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-[22px] font-extrabold text-[#5D00D6] mb-1">{item.stat}</div>
              <div className="text-[12px] text-slate-400 font-semibold uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function Greenfield2Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionPain />
      <SectionScenarios />
      <SectionWhatIsInvolved />
      <SectionFlow />
      <SectionCapabilities />
      <SectionNationwide />
      <SectionAccountability />
      <SectionPartnerEcosystem />
      <SectionMicroNav />
      <SectionReassurance />
      <WpCaseStudies 
        eyebrow="SUCCESSFUL DELIVERIES"
        title="Greenfield Success Stories"
        articles={[
          {
            tag: 'MULTI-SITE ARCHITECTURE',
            title: 'Rapid Infrastructure Rollout for National Expansion',
            desc: 'Successfully commissioned 12 new sites across 3 states in under 6 weeks, providing unified networking and zero-day operational readiness.',
            img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
            videoText: 'National Site Rollout',
            href: '/case-studies/retail-pos-stabilisation'
          },
          {
            tag: 'CORPORATE HEADQUARTERS',
            title: 'End-to-End Technology Delivery for Global Firm HQ',
            desc: 'Managed the full procurement, cabling, and commissioning of a 1,200sqm headquarters, delivering a high-performance environment from shell to handover.',
            img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800',
            videoText: 'Stockdale & Leggo HQ',
            href: '/case-studies/greenfield-site-rollout'
          },
          {
            tag: 'INDUSTRIAL LOGISTICS',
            title: 'High-Stakes Site Setup for Global Logistics Hub',
            desc: 'Delivery of secure networking, enterprise Wi-Fi, and integrated IP security systems for a mission-critical 10,000sqm logistics facility.',
            img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
            videoText: 'Logistics Site Setup',
            href: '/case-studies/greenfield-site-rollout'
          }
        ]}
      />


      <WpFAQAndFeedback 
        faqItems={[
          { 
            q: 'When is the best time to engage C9 for a greenfield project?', 
            a: 'For optimal results, engage us during the design phase, typically 3-6 months before move-in. This allows us to manage long-lead items like enterprise fibre builds (often 60-90 business days) and stage hardware procurement to bypass global supply chain volatility.' 
          },
          { 
            q: 'Do you coordinate with our builder and electrical fit-out trades?', 
            a: 'Absolutely. We act as your technical project leads, working directly with builders and sparkies to specify rack power requirements, data point placement, and containment paths. This prevents costly rework and ensures the fit-out supports the intended technology design.' 
          },
          { 
            q: 'What specific cabling standards and certifications do you provide?', 
            a: 'We exclusively use ACMA-licensed cablers installing Cat6A and Optical Fibre to AS/CA S008/S009 standards. Upon completion, we provide "As-Built" documentation including Fluke test results and site-wide patching schedules for full warranty compliance.' 
          },
          { 
            q: 'How do you handle site delays or builder schedule slips?', 
            a: 'Our delivery framework includes weekly site coordination meetings. If fit-out schedules slip, we pivot our staging and commissioning timelines. We utilize "zero-touch" staging in our lab so equipment is ready for rapid on-site deployment the moment the data room is dust-free.' 
          },
          { 
            q: 'What is the "Day One Operational" guarantee?', 
            a: 'It means your team walks in to a live environment. Internet is bonded, Wi-Fi coverage is validated via heatmaps, phone systems are patched, and security policies are active. We provide on-site support for the first 24-48 hours of site occupancy to ensure 100% confidence.' 
          }
        ]}
        testimonials={[
          {
            name: 'David Chen',
            role: 'Operations Director',
            content: 'Consolidating our nationwide connectivity and IT infrastructure under C9 Communications was the best strategic move we made. Their enterprise Fibre nbn eliminated our downtime, and having a single, proactive Australian support team means zero IT headaches.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
            metric: '99.99%',
            metricLabel: 'Network Uptime'
          },
          {
            name: 'Sarah Jenkins',
            role: 'Chief Technology Officer',
            content: 'C9 executed a flawless migration of our staff to Microsoft 365 while completely hardening our security posture. Their zero-touch device deployment via Intune saved our IT team hundreds of setup hours and standardized our hybrid workforce.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
            metric: '300+',
            metricLabel: 'Hours Saved'
          },
          {
            name: 'Michael Ross',
            role: 'Managing Director',
            content: 'The strategic roadmap provided by C9 aligned our technology stack perfectly with our aggressive growth targets. They don\'t just fix issues; they engineer sophisticated, centralized infrastructure that scales dynamically. Truly unmatched.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
            metric: '4X',
            metricLabel: 'Capacity Growth'
          }
        ]}
      />
      <FinalCTA />
      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="NEW BUSINESS SETUP"
          title="Commission your new site with confidence."
          description="Book a strategic session with our delivery specialists. We cover assessment, procurement, cabling, installation, and full project coordination — starting from zero, fully operational from day one."
          formTitle="Get My Setup Plan"
        />
      </section>
    </main>
  );
}
