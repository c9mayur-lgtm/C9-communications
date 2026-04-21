'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, ShieldCheck, Zap, 
  HelpCircle, Clock, Search, Handshake, 
  Target, Monitor, Lock, Cloud, PhoneCall,
  Users, MessageSquare, AlertCircle
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
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
  <section className="relative overflow-hidden bg-white pt-10 pb-0 lg:pt-16">
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
              <span className="c9-eyebrow !mb-0">Managed IT for Small Business</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Fix what’s not working in your{' '}
              <span className="text-[#5D00D6]">business technology</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-5 max-w-[520px]">
              We take over your existing setup, fix the frustrations that slow you down, and manage everything moving forward. No more managing vendors—just technology that works.
            </p>
            <p className="text-[14px] text-slate-500 mb-10 max-w-[520px]">
              Expert takeover and optimisation for businesses with existing IT and connectivity.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
              >
                Get My Business Assessed
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:1300000000"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-all whitespace-nowrap"
              >
                Speak to an Expert
              </a>
            </div>
            <p className="text-[13px] text-slate-400 font-medium ml-1">
              Reliable management. Consistent performance. Zero interruptions.
            </p>
          </FadeIn>

          <FadeIn delay={0.32}>
            <div className="flex flex-wrap gap-x-7 gap-y-3 mt-10 pt-8 border-t border-slate-100">
              {['Seamless Takeover', 'Vendor Management', 'Fixed Monthly Costs', 'Local Accountability'].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-slate-500 text-[13px] font-semibold">
                  <CheckCircle size={14} className="text-[#5D00D6]" /> {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.14} direction="right" className="relative hidden lg:block">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group">
            <img
              src="/images/hero_business.png"
              alt="Small business owner focusing on work"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg border border-white/60">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#5D00D6] mb-1">System Health</div>
              <div className="text-[17px] font-bold text-slate-900 leading-tight">All Operations Secure ✓</div>
            </div>
            <div className="absolute top-6 right-6 bg-[#5D00D6] text-white rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-0.5">Support Level</div>
              <div className="text-[15px] font-extrabold">24/7 Managed</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — RELATABILITY / EMPATHY
   ───────────────────────────────────────────────────────── */
const SectionEmpathy = () => (
  <section className="py-16 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-12">
        <span className="c9-eyebrow mb-4">The Real Cost of Unmanaged Technology</span>
        <h2 className="c9-section-heading max-w-3xl mx-auto">
          If your current setup isn’t working, it’s already costing you
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { icon: <Zap className="text-[#5D00D6]" />, label: 'Slow Systems', desc: 'Connectivity that drops out during meetings or hardware that slows down when you need it most.' },
          { icon: <Monitor className="text-[#5D00D6]" />, label: 'Internet Interruptions', desc: 'Unreliable internet dragging down your operations and frustrating staff.' },
          { icon: <Users className="text-[#5D00D6]" />, label: 'Poor Support', desc: 'Waiting days for responses while your team sits idle and frustrated.' },
          { icon: <Handshake className="text-[#5D00D6]" />, label: 'Multiple Vendors', desc: 'Managing five different bills and contacts just to keep your office running.' },
        ].map((s, i) => (
          <FadeIn key={i} delay={i * 0.05} className="group">
            <div className="h-full bg-white border border-slate-100 rounded-2xl p-6 hover:border-[#5D00D6]/20 transition-all hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#5D00D6]/5 flex items-center justify-center mb-4 group-hover:bg-[#5D00D6]/10 transition-colors">
                {s.icon}
              </div>
              <h3 className="c9-card-title mb-2">{s.label}</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.2} className="text-center">
        <p className="text-slate-600 font-medium text-[18px] mb-6">These problems don’t stay small — they grow with your business.</p>
        <a href="#consultation" className="text-[#5D00D6] font-bold hover:underline inline-flex items-center gap-2">
          Get My Business Assessed <ArrowRight size={16} />
        </a>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — PROBLEM AGITATION
   ───────────────────────────────────────────────────────── */
const SectionAudit = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4 text-[#5D00D6]">System Assessment</span>
          <h2 className="c9-section-heading mb-6">
            Start with a clear assessment of your current setup
          </h2>
          <p className="c9-body mb-8">
            We identify what’s working, what’s not, and what needs to change — without unnecessary replacements.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#5D00D6]/5 flex items-center justify-center shrink-0">
                <Search size={20} className="text-[#5D00D6]" />
              </div>
              <div>
                <h4 className="c9-card-title mb-1">Infrastructure Review</h4>
                <p className="text-slate-500 text-[14px]">We map out your current network, security, and hardware to see what is worth keeping and what is failing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#5D00D6]/5 flex items-center justify-center shrink-0">
                <AlertCircle size={20} className="text-[#5D00D6]" />
              </div>
              <div>
                <h4 className="c9-card-title mb-1">Identify Gaps</h4>
                <p className="text-slate-500 text-[14px]">We uncover the hidden risks in your systems, from security vulnerabilities to connectivity bottlenecks.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#5D00D6]/5 flex items-center justify-center shrink-0">
                <CheckCircle size={20} className="text-[#5D00D6]" />
              </div>
              <div>
                <h4 className="c9-card-title mb-1">Recommend Improvements</h4>
                <p className="text-slate-500 text-[14px]">You get a clear, prioritised plan to stabilise your environment without unnecessary expensive upgrades.</p>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn direction="right" delay={0.1}>
          <div className="bg-[#0c1024] rounded-[32px] p-8 lg:p-12 text-white relative overflow-hidden text-center">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Search size={160} />
             </div>
             <h3 className="c9-section-heading !text-white mb-6">Stop guessing and start knowing.</h3>
             <p className="text-white/70 mb-10 text-[16px] leading-relaxed">
               Get a definitive report on your current technology health and a roadmap to fix it.
             </p>
             <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0c1024] rounded-full h-14 px-10 font-bold text-[15px] hover:bg-slate-100 transition-all shadow-xl whitespace-nowrap"
              >
                Get My Business Assessed
              </a>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — SOLUTION
   ───────────────────────────────────────────────────────── */
const SectionSolution = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">Complete Operational Takeover</span>
        <h2 className="c9-section-heading mb-6 max-w-2xl mx-auto">
          We take over and optimise your entire setup
        </h2>
        <p className="c9-body max-w-3xl mx-auto">
          You stop managing vendors — we handle everything. From your connectivity and security to day-to-day support, our team provides consistent management and reliable performance.
        </p>
        <p className="c9-body max-w-3xl mx-auto font-bold mt-4 text-[#5D00D6]">
          You shouldn’t have to figure this out — that’s our job.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'Managed IT Support', desc: 'Fast, reliable help for your team. We know your existing setup and fix issues the first time.', icon: <Users size={24} /> },
          { title: 'Consistent Connectivity', desc: 'Stable, high-performance internet managed by experts who own the outcome.', icon: <Zap size={24} /> },
          { title: 'Full Accountability', desc: 'No finger-pointing. We manage your hardware, software, and external vendors so you don&apos;t have to.', icon: <Handshake size={24} /> },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm h-full flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center mb-6 text-[#5D00D6]">
                {item.icon}
              </div>
              <h3 className="c9-card-title mb-3">{item.title}</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — VALUE / OUTCOME (TRANSFORMATION)
   ───────────────────────────────────────────────────────── */
const SectionDecision = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">Decision Clarity</span>
          <h2 className="c9-section-heading mb-6">
            Here’s what your business likely needs
          </h2>
          <p className="c9-body mb-8">
            We help you determine this clearly — so you don’t guess.
          </p>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 relative overflow-hidden group hover:border-[#5D00D6]/20 transition-all">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-[12px] font-extrabold text-slate-400 uppercase tracking-widest">slow systems</span>
               </div>
               <h4 className="c9-card-title mb-2">Optimisation</h4>
               <p className="text-slate-600 font-medium text-[14px]">We fix configuration errors and resolve ongoing glitches to get your current systems running at peak performance.</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 relative overflow-hidden group hover:border-[#5D00D6]/20 transition-all">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-[12px] font-extrabold text-slate-400 uppercase tracking-widest">frequent issues</span>
               </div>
               <h4 className="c9-card-title mb-2">Upgrade</h4>
               <p className="text-slate-600 font-medium text-[14px]">Targeted replacement of failing hardware or outdated software that creates points of failure.</p>
            </div>
            <div className="p-6 rounded-2xl border border-[#5D00D6]/20 bg-[#5D00D6]/5 relative overflow-hidden group transition-all">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-[12px] font-extrabold text-[#5D00D6] uppercase tracking-widest">unreliable setup</span>
               </div>
               <h4 className="c9-card-title mb-2">Rebuild</h4>
               <p className="text-slate-900 font-bold text-[14px]">A complete environmental overhaul for businesses whose technology is actively causing loss of productivity.</p>
            </div>
          </div>
        </FadeIn>
        <div className="lg:pl-10">
          <FadeIn direction="right" delay={0.1}>
            <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="/images/c9_team_collaboration.png" 
                alt="Business owner enjoying peace of mind" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-bottom p-10">
                <div className="mt-auto">
                  <p className="c9-card-title !text-white leading-snug">
                    Get a clear roadmap. <br/>Stop managing problems.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — SERVICES (SIMPLIFIED)
   ───────────────────────────────────────────────────────── */
const SectionPaths = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">Solution Paths</span>
        <h2 className="c9-section-heading mb-6 max-w-2xl mx-auto">
          Tailored approach to fixing your business technology
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: <Monitor className="text-[#5D00D6]" />, title: 'Improve Existing Setup', desc: 'No need for a full rewrite. We refine and stabilise what you already have in place.' },
          { icon: <Zap className="text-[#5D00D6]" />, title: 'Upgrade Where Needed', desc: 'Surgical upgrades to failing components that prevent your business from running smoothly.' },
          { icon: <ShieldCheck className="text-[#5D00D6]" />, title: 'Full Optimisation', desc: 'Ensuring every part of your technology path is consistent, reliable, and secure.' },
        ].map((s, i) => (
          <FadeIn key={i} delay={i * 0.05} className="group">
            <div className="bg-white rounded-3xl border border-slate-100 p-8 h-full hover:border-[#5D00D6]/20 transition-all hover:shadow-lg text-center">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 mx-auto group-hover:bg-[#5D00D6]/5 transition-colors">
                {s.icon}
              </div>
              <h3 className="c9-card-title mb-3">{s.title}</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      
      <FadeIn delay={0.2} className="mt-12 text-center bg-white rounded-3xl border border-slate-100 p-10 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 text-left">
           <div className="w-16 h-16 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0">
              <Target size={32} className="text-[#5D00D6]" />
           </div>
           <div className="grow">
              <h4 className="c9-card-title mb-2">Cross-Service Integration</h4>
              <p className="text-slate-500 text-[15px]">Need specific help with your internet? Explore our specialised connectivity options for <strong>nbn®</strong> and <strong>Fibre</strong>.</p>
           </div>
           <div className="shrink-0 w-full md:w-auto flex gap-4">
              <a href="/telco/business-nbn" className="text-[#5D00D6] font-bold text-[14px] hover:underline whitespace-nowrap">nbn®</a>
              <a href="/telco/fast-fibre" className="text-[#5D00D6] font-bold text-[14px] hover:underline whitespace-nowrap">Fibre</a>
              <a href="/business2" className="text-[#5D00D6] font-bold text-[14px] hover:underline whitespace-nowrap">Managed IT</a>
           </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — HOW IT WORKS
   ───────────────────────────────────────────────────────── */
const SectionProcess = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">Our Takeover Process</span>
        <h2 className="c9-section-heading mb-6 max-w-2xl mx-auto">
          A clear path to reliable technology
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-slate-100" />
        
        {[
          { step: '01', title: 'Assess', desc: 'We audit your existing network, security, and vendors to find friction points.' },
          { step: '02', title: 'Identify', desc: 'We pinpoint exact risks and opportunities for improvement in your current setup.' },
          { step: '03', title: 'Optimise', desc: 'We execute targeted fixes and stabilisations with zero interruptions to your team.' },
          { step: '04', title: 'Manage', desc: 'Our local experts provide continuous, proactive management and accountability.' },
        ].map((s, i) => (
          <FadeIn key={i} delay={i * 0.1} className="relative text-center">
            <div className="w-[90px] h-[90px] rounded-full bg-white border-2 border-[#5D00D6] flex items-center justify-center mb-6 mx-auto relative z-10 shadow-lg shadow-purple-900/10">
               <span className="text-2xl font-black text-[#5D00D6]">{s.step}</span>
            </div>
            <h3 className="c9-card-title mb-4">{s.title}</h3>
            <p className="text-slate-500 text-[14px] leading-relaxed px-2">{s.desc}</p>
          </FadeIn>
        ))}
      </div>
      
      <FadeIn delay={0.4} className="mt-16 text-center">
         <a
            href="#consultation"
            className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group"
          >
            Get My Business Assessed
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — OBJECTION HANDLING
   ───────────────────────────────────────────────────────── */
const SectionObjections = () => (
  <section className="py-16 lg:py-24 bg-[#0c1024] text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5D00D6] opacity-[0.05] rounded-full blur-[100px] -mr-64 -mt-64"></div>
    <div className={`${C} relative z-10`}>
      <FadeIn className="text-center mb-16">
        <h2 className="c9-section-heading !text-white mb-6 max-w-2xl mx-auto">
          Common Questions (and Hesitations)
        </h2>
        <p className="text-white/60 text-[16px] max-w-xl mx-auto">
          We know switching IT providers can feel risky. Here is how we make it safe for you.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { q: 'Will this be expensive?', a: 'We offer predictable, flat-rate monthly plans. You will never get a "surprise bill" from us. We scale our pricing to fit your headcount.' },
          { q: 'Is it hard to switch?', a: 'Not at all. We have an expert "Transition Team" that manages everything from your previous vendor. You don\'t even have to have the awkward conversation.' },
          { q: 'Am I "too small" for you?', a: 'Never. We specialise in businesses with 5–50 staff. Our systems are built specifically for the unique needs of small Australian businesses.' },
        ].map((o, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all">
              <h4 className="c9-card-title mb-4 !text-[#a56eff]">{o.q}</h4>
              <p className="text-white/70 text-[15px] leading-relaxed font-medium">{o.a}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — DIFFERENTIATION
   ───────────────────────────────────────────────────────── */
const SectionImpact = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="left">
           <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl relative">
              <img 
                src="/images/c9_support_engineer.png" 
                alt="C9 Australian support team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-lg">
                 <span className="text-[#5D00D6] font-bold text-[13px] uppercase tracking-wider">Business Impact</span>
              </div>
           </div>
        </FadeIn>
        <FadeIn direction="right" delay={0.1}>
          <span className="c9-eyebrow mb-4">Operation Excellence</span>
          <h2 className="c9-section-heading mb-6">
            Realistic outcomes for your existing operations
          </h2>
          <p className="c9-body mb-8">
            Our goal isn&apos;t just to fix tech—it&apos;s to improve your business productivity. We ensure your systems are reliable and consistent.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              { title: 'Faster Systems', desc: 'Optimised hardware and software for better performance.' },
              { title: 'Stable Connectivity', desc: 'Consistent internet with no interruptions to your work.' },
              { title: 'Less Downtime', desc: 'Proactive management that catches problems before they stop you.' },
              { title: 'Better Productivity', desc: 'A team that focuses on their roles, not troubleshooting IT.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                 <div className="shrink-0 mt-1">
                    <CheckCircle size={18} className="text-[#5D00D6]" />
                 </div>
                 <div>
                    <span className="c9-card-title block !text-[16px] lg:mb-1">{item.title}</span>
                    <span className="text-slate-500 text-[14px]">{item.desc}</span>
                 </div>
              </li>
            ))}
          </ul>
          <a
            href="tel:1300000000"
            className="inline-flex items-center gap-2 text-[#5D00D6] font-bold text-[16px] hover:translate-x-1 transition-all"
          >
            Speak to an Expert <ArrowRight size={18} />
          </a>
        </FadeIn>
      </div>
    </div>
  </section>
);


/* ─────────────────────────────────────────────────────────
   SECTION 10 — STRONG CTA SECTION
   ───────────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
     <div className="absolute inset-0 bg-[#5D00D6]/5 opacity-30"></div>
     <div className={`${C} relative z-10 text-center`}>
        <FadeIn>
          <h2 className="c9-section-heading mb-8 max-w-4xl mx-auto md:!text-[46px] lg:!text-[52px]">
            Stop managing problems — get a clear plan for your business
          </h2>
          <p className="c9-body mb-12 max-w-2xl mx-auto text-[18px]">
            We assess your current setup and tell you exactly what needs to change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-16 px-12 font-extrabold text-[17px] hover:bg-[#4d00b3] transition-all shadow-2xl shadow-purple-900/30 group w-full sm:w-auto"
              >
                Get My Business Assessed
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
              <div className="hidden sm:block text-slate-400 font-bold px-4">OR</div>
              <a
                href="tel:1300000000"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-16 px-12 font-extrabold text-[17px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all w-full sm:w-auto bg-white"
              >
                Speak to an Expert
              </a>
          </div>
          <p className="mt-8 text-slate-400 font-medium">Clear roadmaps. Reliable management. Expert support.</p>
        </FadeIn>
     </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function Business2Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionEmpathy />
      <SectionAudit />
      <SectionSolution />
      <SectionPaths />
      <SectionDecision />
      <SectionImpact />
      <SectionProcess />
      
      <WpCaseStudies 
        eyebrow="TAKEOVER SUCCESS"
        title="Businesses Optimised by C9"
        articles={[
          {
            tag: 'RETAIL & E-COMMERCE',
            title: 'Stabilising a Failing POS Network',
            desc: 'We took over a major retail group suffering from frequent outages. By optimising their existing infrastructure and managing their connectivity, we achieved zero downtime.',
            img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
            videoText: 'Retail Takeover',
            href: '#consultation'
          },
          {
            tag: 'PROFESSIONAL SERVICES',
            title: 'Fixing Poor IT Response Times',
            desc: 'A prominent firm was tired of waiting days for IT help. We moved them to our managed platform, providing instant local support and consistent system performance.',
            img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
            videoText: 'Support Turnaround',
            href: '#consultation'
          }
        ]}
      />

      <WpFAQAndFeedback 
        faqItems={[
          { 
            q: 'How fast is your average response time?', 
            a: 'For critical issues, we respond within 15 minutes. For general helpdesk requests, our Australian team typically picks up the phone within 60 seconds and starts working on your ticket immediately.' 
          },
          { 
            q: 'Do I have to sign a long-term contract?', 
            a: 'No. We believe in earning your business every month. While we offer discounted 12-month agreements, most of our small business clients start on a flexible month-to-month plan.' 
          },
          { 
            q: 'Can you work with our existing software?', 
            a: 'Yes. We support all standard business applications including Xero, Microsoft 365, Google Workspace, and industry-specific tools for medical, legal, and retail sectors.' 
          },
          { 
            q: 'What happens if we have a major server crash?', 
            a: 'Our proactive monitoring usually spots these issues before they happen. If a critical failure does occur, our disaster recovery protocols kick in immediately to restore your data and get you back online fast.' 
          },
          { 
            q: 'Do you help with remote workers?', 
            a: 'Absolutely. We specialise in securing hybrid work environments, ensuring your team can work safely from anywhere with encrypted VPNs and secure endpoint management.' 
          }
        ]}
        testimonials={[
          {
            name: 'Sarah Thompson',
            role: 'Founder, Retail Group',
            content: 'Since switching to C9, I haven&apos;t had to worry about our POS systems crashing on a busy Saturday. They just fix things before I even know there is a problem. Best decision we made for our growth.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800',
            metric: '100%',
            metricLabel: 'Uptime'
          },
          {
            name: 'James Wilson',
            role: 'Director, Wilson & Co Legal',
            content: 'The security peace of mind is what I value most. Knowing our client data is protected by C9&apos;s cybersecurity team allows me to focus on my cases without distraction. Their local support is excellent.',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
            metric: '24/7',
            metricLabel: 'Protection'
          }
        ]}
      />

      <FinalCTA />

      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="GET STARTED"
          title="Get Your Business Assessed"
          description="Ready to stop managing problems? Book a discovery call where we review your existing setup, identify gaps, and show you exactly how we take over and optimise your technology."
          formTitle="Get My Assessment"
        />
      </section>
    </main>
  );
}
