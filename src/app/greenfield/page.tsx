'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ShoppingCart, Users2, Wrench, Network, Zap, MapPin, AlertTriangle, ClipboardList, Package, HardHat, Settings, BadgeCheck, PhoneCall, Search, ShieldCheck, Lock } from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpVendors } from '@/components/wordpress/WpVendors';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { SectionSolutionsPills } from '@/components/sections/SectionSolutionsPills';

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
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const }}
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
  <section className="relative overflow-hidden bg-white pt-10 pb-0 lg:pt-16">
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
      className="pointer-events-none absolute -top-60 -left-60 w-[350px] h-[350px] md:w-[700px] md:h-[700px] rounded-full opacity-[0.05]"
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
              Your New Site. <br/>
              <span className="text-[#5D00D6]">Fully Operational from Day One.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-8 max-w-[520px]">
              Single partner for IT, Telco, and infrastructure — delivered, tested, and ready before your doors open.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="#consultation-section"
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 whitespace-nowrap h-14 px-8 text-[15px] font-bold"
              >
                Plan My New Site
                
              </a>
              <a
                href="#delivery-model"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full hover:bg-[#5D00D6] hover:text-white transition-all whitespace-nowrap h-14 px-8 text-[15px] font-bold"
              >
                See How It Works
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.32}>
            <div className="flex flex-wrap gap-x-7 gap-y-3 mt-10 pt-8 border-t border-slate-100">
              {[
                { text: '12+ sites delivered across 3 states', icon: <MapPin size={14} className="text-[#5D00D6]" /> },
                { text: 'Fully commissioned in under 6 weeks', icon: <Zap size={14} className="text-[#5D00D6]" /> },
                { text: 'Single point of accountability', icon: <CheckCircle size={14} className="text-[#5D00D6]" /> },
                { text: 'National rollout capability', icon: <BadgeCheck size={14} className="text-[#5D00D6]" /> }
              ].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-slate-500 text-[14px] font-semibold">
                  {item.icon} {item.text}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* RIGHT — Hero image */}
        <FadeIn delay={0.14} direction="right" className="relative hidden lg:block">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3]">
            <img
              src="/images/greenfield_hero.png"
              alt="C9 team delivering a new site build"
              className="w-full h-full object-cover group-hover:scale-105 duration-700"
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
              <div className="text-[14px] font-extrabold">End-to-End Ownership</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — PROBLEM (PAIN AMPLIFICATION)
   ───────────────────────────────────────────────────────── */
const SectionPain = () => (
  <section className="py-10 lg:py-16 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">The Real Problem</span>
          <h2 className="c9-section-heading mb-6">
            Why Most New Site Launches Fail
          </h2>
          <p className="c9-body mb-8 text-slate-600">
            Opening a new site shouldn&apos;t be a technical gamble. But when multiple vendors are involved without a single owner, the same patterns emerge:
          </p>
          <div className="bg-[#5D00D6]/5 border border-[#5D00D6]/15 rounded-2xl p-6">
            <p className="text-slate-800 font-bold text-[18px] leading-snug mb-2">
              &ldquo;Opening day becomes a technical risk instead of a business milestone.&rdquo;
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} direction="right">
          <div className="space-y-4">
            {[
              { title: 'Multiple vendors → zero accountability', desc: 'Each contractor pointing at the other when systems don\'t integrate.' },
              { title: 'Delays in cabling, network, or telco', desc: 'Missed dependencies that push back your entire operational timeline.' },
              { title: 'Systems not working together on launch day', desc: 'Teams arrive to find patchy Wi-Fi, non-functional phones, or offline POS.' },
              { title: 'Unexpected costs and rework', desc: 'Emergency fixes and return visits that quickly blow out the project budget.' },
              { title: 'No one responsible when things break', desc: 'The "it\'s not my problem" culture of multi-vendor environments.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                    <AlertTriangle size={18} className="text-rose-500" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-[14px] mb-1">{item.title}</p>
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
   SECTION 4 — DAY ONE OPERATIONAL GUARANTEE
   ───────────────────────────────────────────────────────── */
const SectionGuarantee = () => (
  <section className="py-10 lg:py-16 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">Our Conversion Unlock</span>
        <h2 className="c9-section-heading mb-6">
          Day One Operational Guarantee
        </h2>
        <p className="c9-body max-w-2xl mx-auto">
          Before your site opens, we ensure every technical layer is fully operational. We don&apos;t leave until your business can run.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          { label: 'Network Deployment', desc: 'Core infrastructure fully deployed, patched, and tested for performance.' },
          { label: 'Internet & Failover', desc: 'Primary and secondary connections live and validated with automatic failover.' },
          { label: 'Wi-Fi Configuration', desc: 'Secure, high-density Wi-Fi for both staff and guest segments.' },
          { label: 'Device Installation', desc: 'All workstations, tablets, and peripherals installed and operational.' },
          { label: 'System Integration', desc: 'Cross-system communication and API integrations validated.' },
          { label: 'Documentation', desc: 'Complete "As-Built" diagrams and handover documentation provided.' },
        ].map((s, i) => (
          <FadeIn key={i} delay={i * 0.05} className="">
            <div className="h-full bg-white border border-slate-100 rounded-2xl p-6 hover:border-[#5D00D6]/20 transition-all hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#5D00D6]/5 flex items-center justify-center mb-4 group-hover:bg-[#5D00D6]/10 transition-colors">
                <CheckCircle size={12} className="text-[#5D00D6]" />
              </div>
              <h3 className="font-bold text-slate-900 text-[16px] mb-2">{s.label}</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.2} className="text-center">
        <p className="text-slate-800 font-bold text-[18px]">
          &ldquo;If your doors open, your systems work. No exceptions.&rdquo;
        </p>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — RETAIL / REAL-WORLD READINESS
   ───────────────────────────────────────────────────────── */
const SectionReadiness = () => (
  <section className="py-10 lg:py-16 bg-white">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4 text-[#5D00D6]">Operational Readiness</span>
          <h2 className="c9-section-heading mb-6">
            Built for Real Operations — Not Just Infrastructure
          </h2>
          <p className="c9-body mb-8">
            We don&apos;t just install hardware; we make your business operational. Our deployment covers the critical systems that keep your site running:
          </p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            {[
              { label: 'POS & Payments', desc: 'Terminals and processing lines.' },
              { label: 'Inventory & ERP', desc: 'Seamless system connectivity.' },
              { label: 'Active Guest Wi-Fi', desc: 'Secure, high-bandwidth paths.' },
              { label: 'Network Segments', desc: 'Isolated staff and guest paths.' },
              { label: 'Back-Office', desc: 'Core systems ready for use.' },
              { label: 'Multi-Site Sync', desc: 'Consistent operational stack.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={14} className="text-[#5D00D6] shrink-0 mt-1" />
                <div>
                   <p className="font-bold text-slate-900 text-[14px] leading-tight mb-1">{item.label}</p>
                   <p className="text-slate-500 text-[12px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-800 font-bold text-[16px] leading-snug">
            &ldquo;We don&apos;t just install infrastructure — we make your business operational.&rdquo;
          </p>
        </FadeIn>
        <FadeIn direction="right" delay={0.1}>
          <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl">
             <img src="/images/greenfield_commissioning_new_1.png" alt="Operational Readiness" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <p className="text-white font-bold leading-tight uppercase tracking-widest text-[11px]">System Status: Fully Operational</p>
             </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — DELIVERY MODEL (SIMPLIFIED)
   ───────────────────────────────────────────────────────── */
const steps = [
  { icon: <Search size={24} className="text-[#5D00D6]" />, num: '1', title: 'Validate', desc: 'Define requirements, scope, and technical project risks.' },
  { icon: <Settings size={24} className="text-[#5D00D6]" />, num: '2', title: 'Design', desc: 'Complete system architecture and infrastructure mapping.' },
  { icon: <ShoppingCart size={24} className="text-[#5D00D6]" />, num: '3', title: 'Procure', desc: 'Source and stage all required hardware and materials.' },
  { icon: <Wrench size={24} className="text-[#5D00D6]" />, num: '4', title: 'Deploy', desc: 'On-site installation of infrastructure and technology systems.' },
  { icon: <BadgeCheck size={24} className="text-[#5D00D6]" />, num: '5', title: 'Commission', desc: 'End-to-end testing under real-world operational conditions.' },
  { icon: <Zap size={24} className="text-[#5D00D6]" />, num: '6', title: 'Handover', desc: 'Fully operational handover with documentation and support.' },
];

const SectionFlow = () => (
  <section id="delivery-model" className="py-10 lg:py-16 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-14">
        <span className="c9-eyebrow mb-4">Structured Delivery</span>
        <h2 className="c9-section-heading mb-4">
          Predictable Outcomes. Every Time.
        </h2>
        <p className="c9-body max-w-xl mx-auto">
          We focus on outcomes, not process jargon. Our 6-stage delivery model ensures your site opens with total technical certainty.
        </p>
      </FadeIn>

      {/* Desktop: horizontal flow */}
      <div className="hidden lg:grid lg:grid-cols-6 gap-0 relative">
        {/* Connector line */}
        <div className="absolute top-[46px] left-[calc(100%/12)] right-[calc(100%/12)] h-[2px] bg-gradient-to-r from-[#5D00D6]/20 via-[#5D00D6]/40 to-[#5D00D6]/20" />

        {steps.map((s, i) => (
          <FadeIn key={i} delay={i * 0.07} className="relative flex flex-col items-center text-center px-3">
            <div className="relative z-10 w-[92px] h-[92px] rounded-full bg-white border-2 border-[#5D00D6]/20 flex flex-col items-center justify-center mb-5 shadow-md hover:border-[#5D00D6]/60 hover:shadow-purple-100 transition-all">
              <div className="mb-0.5">{s.icon}</div>
              <span className="text-[10px] font-bold text-[#5D00D6] uppercase tracking-widest">Step {s.num}</span>
            </div>
            <h3 className="font-bold text-slate-900 text-[16px] mb-2">{s.title}</h3>
            <p className="text-slate-500 text-[14px] leading-relaxed">{s.desc}</p>
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
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — PROOF (ROLLOUT CAPABILITY)
   ───────────────────────────────────────────────────────── */
const SectionProof = () => (
  <section className="py-10 lg:py-16 bg-white overflow-hidden">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">Measurable Success</span>
          <h2 className="c9-section-heading mb-6">
            Proven Rollout Capability
          </h2>
          <p className="c9-body mb-10 text-slate-600">
            We deliver results that matter to your bottom line. Our deployment model is tested across diverse industries and complex multi-site environments.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
             {[
                { stat: '12+', label: 'Sites Delivered', sub: 'Across 3 States' },
                { stat: '< 6wks', label: 'Rapid Deployment', sub: 'Project Average' },
                { stat: 'Zero', label: 'Day-One Failures', sub: 'Guaranteed' },
                { stat: '100%', label: 'Operational', sub: 'At Launch' }
             ].map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-white hover:border-[#5D00D6]/20 transition-all hover:shadow-md">
                   <div className="text-3xl font-black text-[#5D00D6] mb-1 group-hover:scale-105 origin-left">{item.stat}</div>
                   <div className="text-slate-900 font-bold text-[14px] leading-tight">{item.label}</div>
                   <div className="text-slate-400 text-[11px] font-medium uppercase tracking-wider">{item.sub}</div>
                </div>
             ))}
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.1} className="relative">
           {/* Decorative elements */}
           <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#5D00D6]/5 rounded-full blur-3xl" />
           <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
           
           <div className="relative bg-white border border-slate-100 rounded-[40px] p-10 lg:p-14 shadow-xl shadow-slate-200/60">
              <div className="text-center mb-10">
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Enterprise Trust</h4>
                <p className="text-slate-900 font-bold text-lg">Trusted By Leading Brands</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 place-items-center">
                 {[
                   { name: 'Stockdale & Leggo', logo: '/images/clients/stockdale & leggo.png' },
                   { name: 'Arthritis Australia', logo: '/images/clients/Arthritis.png' },
                   { name: 'Grandstream',          logo: '/images/clients/Grandstream.png' },
                   { name: 'Cisco',                logo: '/images/clients/cisco.png' },
                 ].map((brand, i) => (
                    <div key={i} className="flex items-center justify-center p-4">
                       <img
                         src={brand.logo}
                         alt={brand.name}
                         className="h-20 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                         onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                       />
                    </div>
                 ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-50 text-center">
                 <p className="text-[14px] text-slate-500 italic">
                   &ldquo;C9 Communications delivered our national rollout with zero downtime and total accountability.&rdquo;
                 </p>
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — SUPPORT & SLA (TRUST BUILDER)
   ───────────────────────────────────────────────────────── */
const SectionSupport = () => (
  <section className="py-10 lg:py-16 bg-[#0c1024] relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.08]"
      style={{ background: 'radial-gradient(circle at 70% 50%, #5D00D6, transparent 60%)' }}
    />
    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow !text-[#a56eff] mb-5">Long-Term Accountability</span>
          <h2 className="c9-section-heading !text-white mb-6">
            Support That Matches Your Business Hours
          </h2>
          <p className="c9-body !text-white/65 mb-8 max-w-[500px]">
            We don&apos;t disappear after deployment. We stay accountable for your environment with support that scales with your operations.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              '24/7 support availability',
              'Defined response times (SLA)',
              'Transparent escalation paths',
              'Remote + on-site support coverage',
              'Nationwide delivery & local coordination'
            ].map((p, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle size={12} className="text-[#a56eff] shrink-0" />
                <span className="text-white/80 text-[14px] font-medium">{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#a56eff] font-bold text-[16px]">
            &ldquo;We don&apos;t disappear after deployment. We stay accountable.&rdquo;
          </p>
        </FadeIn>

        <FadeIn delay={0.12} direction="right">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <PhoneCall size={28} className="text-white" />, stat: '24/7', label: 'Support Avail' },
              { icon: <BadgeCheck size={28} className="text-white" />, stat: '99.9%', label: 'Uptime SLA' },
              { icon: <Users2 size={28} className="text-white" />, stat: '100%', label: 'Accountable' },
              { icon: <MapPin size={28} className="text-white" />, stat: 'National', label: 'On-site Support' },
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
   SECTION 3 — CORE DIFFERENTIATION (SINGLE OWNER MODEL)
   ───────────────────────────────────────────────────────── */
const SectionAccountability = () => (
  <section className="py-10 lg:py-16 bg-white">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">The Solution Model</span>
          <h2 className="c9-section-heading mb-6">
            One Partner. Total Ownership.
          </h2>
          <p className="c9-body mb-7">
            We design, deliver, integrate, and support your entire IT and Telco environment. No vendor coordination. No finger-pointing. No gaps.
          </p>
          <div className="bg-[#5D00D6]/5 border border-[#5D00D6]/15 rounded-2xl p-7 mb-8">
            <p className="text-[#5D00D6] font-bold text-[17px] mb-2 text-center uppercase tracking-wider">Single Point of Accountability</p>
            <p className="text-slate-600 text-center font-medium">We don&apos;t just install hardware — we own the operational outcome.</p>
          </div>
          <a
            href="#consultation-section"
            className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-purple-900/20"
          >
            Start Your Greenfield Project
            
          </a>
        </FadeIn>

        <FadeIn delay={0.12} direction="right">
          {/* Comparison Cards */}
          <div className="grid grid-cols-1 gap-6">
             {/* Traditional Chaos */}
             <div className="bg-slate-50 border border-slate-200 rounded-[24px] p-6 grayscale opacity-60">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                      <Users2 size={18} className="text-slate-400" />
                   </div>
                   <h4 className="font-bold text-slate-400 uppercase tracking-widest text-[14px]">Traditional Multi-Vendor Chaos</h4>
                </div>
                <div className="space-y-2">
                   {['Multiple bills', 'Vendor finger-pointing', 'Technical gaps', 'Project delays'].map(t => (
                      <div key={t} className="flex items-center gap-2 text-slate-400 text-[14px]">
                         <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                         {t}
                      </div>
                   ))}
                </div>
             </div>

             {/* C9 Model */}
             <div className="bg-[#0c1024] rounded-[24px] p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <CheckCircle size={100} />
                </div>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 rounded-xl bg-[#5D00D6] flex items-center justify-center">
                      <Zap size={22} className="text-white" />
                   </div>
                   <h4 className="font-bold text-white text-[18px]">C9 Single Ownership Model</h4>
                </div>
                <div className="space-y-4">
                   {[
                      'Single point of accountability',
                      'Integrated system architecture',
                      'Coordinated trade management',
                      'Day One Operational Guarantee'
                   ].map(t => (
                      <div key={t} className="flex items-center gap-3 text-white/90 text-[14px] font-medium">
                         <CheckCircle size={12} className="text-[#a56eff]" />
                         {t}
                      </div>
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
   SECTION 9 — CYBERSECURITY LAYER
   ───────────────────────────────────────────────────────── */
const SectionSecurity = () => (
  <section className="py-10 lg:py-16 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">Inherent Protection</span>
        <h2 className="c9-section-heading mb-6">
          Security Built Into Every Deployment
        </h2>
        <p className="c9-body max-w-2xl mx-auto">
          We don&apos;t treat security as an add-on. It is integrated into the core of your new site infrastructure from day one.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <ShieldCheck size={24} />, title: 'Network Segmentation', desc: 'Isolating critical operational systems from staff and guest traffic.' },
          { icon: <Lock size={24} />, title: 'Endpoint Protection', desc: 'Enterprise-grade security policies applied to every device on the network.' },
          { icon: <Zap size={24} />, title: 'Monitoring & Alerts', desc: 'Real-time detection of anomalies and potential security threats.' },
          { icon: <Users2 size={24} />, title: 'Secure Remote Access', desc: 'VPN and zero-trust access for remote staff and management.' },
          { icon: <BadgeCheck size={24} />, title: 'Recovery Readiness', desc: 'Built-in backup and recovery protocols to ensure business continuity.' },
          { icon: <CheckCircle size={12} />, title: 'Compliance Ready', desc: 'Infrastructure aligned with Australian security and privacy standards.' },
        ].map((item, i) => (
           <FadeIn key={i} delay={i * 0.05} className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center mb-6 text-[#5D00D6]">
                 {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-[17px] mb-3">{item.title}</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
           </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 11 — HUMAN REASSURANCE (OUTCOME FOCUS)
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
          <span className="c9-eyebrow mb-4">We Know What&apos;s at Stake</span>
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
              href="#consultation-section"
              className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-purple-900/20"
            >
              Get My Setup Plan
              
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 10 — FINAL CTA (DECISION PUSH)
   ───────────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="py-10 lg:py-16 bg-white">
    <div className={`${C} text-center`}>
      <FadeIn>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
          <PhoneCall size={13} className="text-[#5D00D6]" />
          <span className="c9-eyebrow !mb-0">Secure Your Timeline</span>
        </div>
        <h2 className="c9-section-heading mb-5 max-w-2xl mx-auto">
          Open Your Next Site Without the Risk
        </h2>
        <p className="c9-body mb-10 max-w-xl mx-auto text-slate-600">
          Plan, deliver, and operate your new location with a single accountable partner. One partner for IT, Telco, and infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a
            href="#consultation-section"
            className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 whitespace-nowrap h-14 px-8 text-[15px] font-bold"
          >
            Start Your Greenfield Project
            
          </a>
          <a
            href="tel:1300000000"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full hover:bg-[#5D00D6] hover:text-white transition-all whitespace-nowrap h-14 px-8 text-[15px] font-bold"
          >
            Speak to an Expert
          </a>
        </div>

        <p className="text-[14px] text-slate-400 font-medium">
          Zero-day operational readiness. Guaranteed.
        </p>
      </FadeIn>
    </div>
  </section>
);



/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function GreenfieldPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionSolutionsPills audience="greenfield" />
      <SectionPain />
      <SectionAccountability />
      <SectionGuarantee />
      <SectionReadiness />
      <SectionFlow />
      <SectionProof />
      <SectionSupport />
      <SectionSecurity />
      <SectionReassurance />
      
      <WpCaseStudies 
        eyebrow="SUCCESSFUL DELIVERIES"
        title="Greenfield Success Stories"
        articles={[
          {
            tag: 'MULTI-SITE ARCHITECTURE',
            title: 'Rapid Infrastructure Rollout for National Expansion',
            desc: 'Successfully commissioned 12 new sites across 3 states in under 6 weeks, providing unified networking and zero-day operational readiness.',
            img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
            videoText: 'National Site Rollout',
            href: '/case-studies/enterprise-migration-success'
          },
          {
            tag: 'RETAIL OPERATIONS',
            title: 'Full Technical Readiness for National Retail Launch',
            desc: 'End-to-end delivery of POS connectivity, secure guest Wi-Fi, and back-office integration for a multi-site retail rollout.',
            img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
            videoText: 'Retail Rollout',
            href: '/case-studies/multi-site-retail-stabilisation'
          },
          {
            tag: 'INDUSTRIAL LOGISTICS',
            title: 'High-Stakes Site Setup for Global Logistics Hub',
            desc: 'Delivery of secure networking, enterprise Wi-Fi, and integrated IP security systems for a mission-critical 10,000sqm logistics facility.',
            img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
            videoText: 'Logistics Site Setup',
            href: '/case-studies/enterprise-migration-success'
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
      <section id="consultation-section" className="bg-white border-t border-slate-100">
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
