'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, PhoneCall, Smartphone, PhoneIncoming, GitBranch, Clock, CheckCircle, Activity, ShieldCheck, Settings, Monitor, Lock, Check, Building2, Search, Zap, ShieldAlert, Layers, Database, Server, RefreshCw, Users, Target } from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { Button } from '@/components/ui/button';
import { handleCtaClick } from '@/lib/utils';

const C = "container mx-auto px-6 md:px-8 max-w-[1240px]";

const FadeIn = ({ children, delay = 0, className, direction = 'up' }: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' 
}) => {
  const variants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 }
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO (OPERATIONAL CONTINUITY)
   ───────────────────────────────────────────────────────── */
const SectionHero = () => (
  <section className="relative min-h-[85vh] bg-[#0c1024] flex flex-col justify-center overflow-hidden pt-32 pb-24">
    {/* Background Connectivity Visual */}
    <div className="absolute inset-0 z-0">
      {/* [IMAGE PLACEHOLDER: Enterprise operations room monitoring multi-site connectivity and voice systems across Australia] */}
      <img 
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop" 
        alt="Managed Telco Operations"
        className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1024] via-[#0c1024]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024] via-transparent to-transparent" />
    </div>

    <div className={C + " relative z-10"}>
      <div className="max-w-4xl">
        <FadeIn>
          <span className="c9-eyebrow !text-[#a56eff] mb-6">Business Internet & Voice Continuity</span>
          <h1 className="c9-hero-title !text-white mb-8 leading-[1.1]">
            Managed Telco & Connectivity <br />
            <span className="text-[#a56eff]">Built for True Reliability.</span>
          </h1>
          <p className="c9-body !text-white/80 mb-10 text-xl max-w-3xl leading-relaxed">
            We are the managed telco and connectivity partner that designs, installs, governs, monitors, escalates, supports, and maintains business-critical internet, voice, failover, and carrier environments for Australian businesses. Absolute accountability, zero finger-pointing.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button 
              size="lg" 
              className="rounded-full shadow-xl bg-[#5D00D6] hover:bg-[#4a00ab] text-white font-bold"
              onClick={handleCtaClick}
            >
              Review My Connectivity Setup
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="rounded-full border-white/20 text-white hover:bg-white/10 font-bold"
              onClick={handleCtaClick}
            >
              Speak With a Connectivity Specialist
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span className="text-white/95 text-sm font-bold uppercase tracking-widest">NOC Carrier Escalation Active</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="text-white/95 text-sm font-bold tracking-tight">SLA-Backed Connectivity & Voice</div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — THE OPERATIONAL CRISIS (MIRRORING REALITY)
   ───────────────────────────────────────────────────────── */
const SectionProblems = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right">
          <span className="c9-eyebrow mb-4">Operational Risk & Complexity</span>
          <h2 className="c9-section-heading mb-6">Why Standard Internet & Voice Providers Fail Businesses.</h2>
          <p className="c9-body mb-8">
            When your internet drops or voice systems fail, standard carriers point fingers. In business-critical environments, split accountability between your IT, your telco, and your voice provider leads to unacceptable downtime.
          </p>
          <div className="space-y-4 mb-10">
            {[
              { icon: <GitBranch size={20} />, text: "Provider Finger-Pointing: IT and Telco blaming each other while you suffer downtime." },
              { icon: <ShieldAlert size={20} />, text: "Unstable Voice Systems: Poorly configured connectivity causing dropouts and missed calls." },
              { icon: <Clock size={20} />, text: "Failed Escalations: Waiting days for generic carriers to acknowledge a critical outage." },
              { icon: <Layers size={20} />, text: "Inconsistent Multi-Site Setup: A mess of different providers and bills across locations." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm transition-colors hover:border-[#5D00D6]/20">
                <div className="text-red-600 mt-1" aria-hidden="true">{item.icon}</div>
                <span className="font-semibold text-slate-900 leading-snug">{item.text}</span>
              </div>
            ))}
          </div>
          <Button 
            variant="link" 
            className="p-0 h-auto font-bold flex items-center gap-2 text-lg text-[#5D00D6] hover:no-underline"
            onClick={handleCtaClick}
          >
            Audit My Internet & Voice Risk 
          </Button>
        </FadeIn>

        <FadeIn direction="left">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            {/* [IMAGE PLACEHOLDER: Frustrated operations manager or disconnected multi-site retail environment experiencing downtime] */}
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop" 
              alt="High-Stakes Business Operations Environment" 
              className="w-full aspect-[4/5] object-cover grayscale-[0.5]"
            />
            <div className="absolute inset-0 bg-[#0c1024]/10 mix-blend-multiply" aria-hidden="true" />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — WHY BUSINESSES MOVE TO C9 (THE SWITCH)
   ───────────────────────────────────────────────────────── */
const SectionApproach = () => (
  <section className="py-16 lg:py-24 bg-white overflow-hidden">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <FadeIn direction="right" className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-6">
             <div className="space-y-6">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                   {/* [IMAGE PLACEHOLDER: Field engineering running fibre connectivity for an Australian business] */}
                   <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Business Connectivity Engineering" />
                </div>
                <div className="bg-[#5D00D6] p-8 rounded-3xl text-white border border-[#5D00D6]/20">
                   <div className="text-4xl font-bold mb-2">Single</div>
                   <div className="text-sm font-bold uppercase tracking-widest opacity-95">Accountable Telco Partner</div>
                </div>
             </div>
             <div className="space-y-6 pt-12">
                <div className="bg-slate-900 p-8 rounded-3xl text-white border border-white/5">
                   <div className="text-4xl font-bold mb-2">Zero</div>
                   <div className="text-sm font-bold uppercase tracking-widest opacity-95">Finger Pointing</div>
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                   {/* [IMAGE PLACEHOLDER: Professional Australian IT/Telco support team managing escalations] */}
                   <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Telco Support Team" />
                </div>
             </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" className="order-1 lg:order-2">
          <span className="c9-eyebrow mb-4">The MSP-Led Telco Difference</span>
          <h2 className="c9-section-heading mb-6">Why Businesses Leave Their Current Provider for C9.</h2>
          <p className="c9-body mb-8 leading-relaxed">
            We don't just sell internet lines. We act as your overarching connectivity operations partner. We coordinate carriers, manage escalations, monitor performance, handle rollouts, govern failover, and provide absolute operational accountability.
          </p>
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#5D00D6]/5 rounded-2xl border border-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] shrink-0">
                <Target size={24} aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Carrier Escalation Ownership</h4>
                <p className="text-sm text-slate-700 font-medium">We sit between you and the carriers. If a line degrades, we own the resolution.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#5D00D6]/5 rounded-2xl border border-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] shrink-0">
                <RefreshCw size={24} aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Proactive Failover & Voice Continuity</h4>
                <p className="text-sm text-slate-700 font-medium">Designing environments that automatically failover, keeping your voice and EFTPOS live during primary outages.</p>
              </div>
            </div>
          </div>
          <Button 
            size="lg"
            className="rounded-full shadow-lg bg-[#5D00D6] hover:bg-[#4a00ab] text-white font-bold"
            onClick={handleCtaClick}
          >
            Speak With a Connectivity Specialist
          </Button>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — MANAGED INFRASTRUCTURE (CORE CAPABILITIES)
   ───────────────────────────────────────────────────────── */
const SectionServices = () => (
  <section className="py-16 lg:py-24 bg-slate-50">
    <div className={C}>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <FadeIn>
          <span className="c9-eyebrow mb-4">Complete Connectivity Management</span>
          <h2 className="c9-section-heading">Everything Required for Business Uptime</h2>
          <p className="c9-body mt-6 max-w-3xl mx-auto">
            From symmetrical fibre to seamless cloud voice, we build and manage the resilient connectivity environments required for high-execution business operations.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { 
            icon: <Wifi size={24} />, 
            title: "Business nbn & Fast Fibre", 
            desc: "Business-grade internet ranging from reliable nbn™ to uncontended, symmetrical 1000Mbps Fast Fibre." 
          },
          { 
            icon: <Server size={24} />, 
            title: "Enterprise Ethernet", 
            desc: "Dedicated SLA-backed fibre networks engineered for enterprise workloads and multi-site connectivity." 
          },
          { 
            icon: <PhoneCall size={24} />, 
            title: "Teams Calling & Cloud Voice", 
            desc: "Seamless SIP and VoIP phone systems managed for zero-drop reliability and centralized control." 
          },
          { 
            icon: <ShieldCheck size={24} />, 
            title: "4G/5G Failover Protection", 
            desc: "Automatic multi-carrier failover links that trigger instantly to protect business continuity and EFTPOS." 
          }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 h-full border-b-4 hover:border-b-[#5D00D6]">
            <div className="w-14 h-14 bg-[#5D00D6]/5 rounded-2xl border border-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] mb-6" aria-hidden="true">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-800 leading-relaxed mb-6 font-medium">{item.desc}</p>
            <div className="flex items-center gap-2 text-[10px] font-bold text-[#5D00D6] uppercase tracking-widest">
              Managed Connectivity ✓
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — UPTIME CONFIDENCE (RELIABILITY)
   ───────────────────────────────────────────────────────── */
const SectionResilience = () => (
  <section className="py-16 lg:py-24 bg-[#0c1024] text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
    <div className={C}>
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-20 items-center">
        <FadeIn direction="right">
          <span className="c9-eyebrow !text-[#a56eff] mb-4">Connectivity Resilience</span>
          <h2 className="c9-section-heading !text-white mb-6">Execution-Focused Reliability.</h2>
          <p className="c9-body text-white/80 mb-10 leading-relaxed">
            We don't hope for uptime; we engineer it. Our connectivity environments are designed with multiple layers of failover to ensure your internet and voice stay connected through every failure scenario.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {[
              { title: "Multi-Carrier Failover", desc: "Automatic carrier diversity to eliminate single points of failure." },
              { title: "Proactive Link Monitoring", desc: "24/7 pings to detect link degradation before downtime occurs." },
              { title: "Seamless Voice Failover", desc: "Your phone lines stay active even if the primary internet drops." },
              { title: "SLA-Backed Escalation", desc: "Structured carrier escalation to ensure rapid incident resolution." }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-2">
                   <CheckCircle size={16} className="text-[#a56eff]" aria-hidden="true" />
                   <h4 className="font-bold text-white text-sm uppercase tracking-wide">{item.title}</h4>
                </div>
                <p className="text-xs text-white/90 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          <Button 
            size="lg"
            className="rounded-full shadow-lg bg-[#5D00D6] hover:bg-[#4a00ab] text-white font-bold"
            onClick={handleCtaClick}
          >
            Review Your Internet Uptime
          </Button>
        </FadeIn>

        <FadeIn direction="left">
          <div className="relative p-1 bg-gradient-to-br from-white/20 to-transparent rounded-3xl">
             <div className="bg-[#0c1024] p-10 rounded-[22px] border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                   <span className="text-[11px] font-bold text-white/95 uppercase tracking-widest">Connectivity Monitor</span>
                   <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-bold uppercase tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" aria-hidden="true" />
                      Operationally Sound
                   </div>
                </div>
                <div className="space-y-6">
                   {[
                     { label: 'Primary Managed Link', status: 'Optimal', val: 'Enterprise Fibre High-Availability', color: 'text-emerald-400' },
                     { label: 'Carrier Backup Link', status: 'Ready', val: 'Diverse Path 4G/5G', color: 'text-purple-400' },
                     { label: 'Voice Continuity', status: 'Active', val: 'Managed SIP Core', color: 'text-emerald-400' }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between">
                        <div>
                           <div className="text-[14px] font-bold text-white mb-0.5">{item.label}</div>
                           <div className="text-[11px] text-white/90 uppercase tracking-widest font-semibold">{item.val}</div>
                        </div>
                        <div className={`text-[12px] font-bold uppercase tracking-widest ${item.color}`}>
                           {item.status}
                        </div>
                     </div>
                   ))}
                </div>
                <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
                   <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                      <div className="text-[10px] text-white/90 font-bold uppercase mb-1">Target Uptime</div>
                      <div className="text-xl font-bold text-white">99.99%</div>
                   </div>
                   <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                      <div className="text-[10px] text-white/90 font-bold uppercase mb-1">Carrier Response</div>
                      <div className="text-xl font-bold text-white">&lt; 15min</div>
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
   SECTION 6 — ROLLOUT & MIGRATION FRAMEWORK (TRUST)
   ───────────────────────────────────────────────────────── */
const SectionProcess = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Rollout & Migration Governance</span>
               <h2 className="c9-section-heading mb-6">Structured Execution. Zero Opening-Day Failures.</h2>
               <p className="c9-body">Whether you are expanding to 50 sites or consolidating existing ones, our framework ensures a predictable, accountable transition of your internet and voice services.</p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-4 gap-6 relative">
            {[
               { step: '01', title: "Audit", desc: "Absolute audit of your current connectivity environment to identify risks and contract traps." },
               { step: '02', title: "Strategy", desc: "Design of a standardized, multi-site internet and voice blueprint for your business." },
               { step: '03', title: "Execution", desc: "Managed rollout or migration with dedicated carrier coordination and support." },
               { step: '04', title: "Governance", desc: "24/7 NOC oversight, proactive escalations, and quarterly reviews." }
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-[#5D00D6]/30 transition-all border-b-4 hover:border-b-[#5D00D6]">
                  <div className="text-[40px] font-bold text-slate-100 absolute top-6 right-6 leading-none" aria-hidden="true">
                     {s.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#5D00D6] text-white flex items-center justify-center font-bold text-[16px] mb-6 relative z-10 shadow-md">
                     {i + 1}
                  </div>
                  <h4 className="c9-card-title mb-3 relative z-10">{s.title}</h4>
                  <p className="text-slate-800 text-[15px] leading-relaxed relative z-10 font-medium">{s.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — PROACTIVE INFRASTRUCTURE SURVEILLANCE
   ───────────────────────────────────────────────────────── */
const SectionMonitoring = () => (
  <section className="py-16 lg:py-24 bg-slate-900 text-white overflow-hidden relative">
    <div className="absolute inset-0 opacity-[0.2]">
       {/* [IMAGE PLACEHOLDER: NOC/support operations team monitoring Australian business connectivity] */}
       <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Managed Telco NOC" />
       <div className="absolute inset-0 bg-slate-900/90" />
    </div>
    <div className={C + " relative z-10"}>
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
             <span className="c9-eyebrow !text-[#a56eff] mb-4">Proactive Carrier Management</span>
             <h2 className="c9-section-heading !text-white mb-6">Issues Resolved Before Operational Impact.</h2>
             <p className="c9-body !text-white/95 mb-10 leading-relaxed font-medium">
                Our 24/7 NOC continuously governs every managed connection. We identify drops, packet loss, or latency in real-time and handle the carrier escalation directly, ensuring your business stays connected.
             </p>
             <div className="space-y-4 mb-10">
                {[
                  "Proactive link degradation monitoring",
                  "Automated escalation triggers for critical faults",
                  "Direct carrier intervention and accountability",
                  "SLA-backed failover testing and oversight"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                     <div className="w-5 h-5 rounded-md bg-[#5D00D6]/20 flex items-center justify-center border border-[#5D00D6]/30">
                        <Check size={12} className="text-[#a56eff]" aria-hidden="true" />
                     </div>
                     <span className="text-sm font-bold text-white/95">{item}</span>
                  </div>
                ))}
             </div>
             <Button 
                size="lg"
                className="rounded-full shadow-lg bg-[#5D00D6] hover:bg-[#4a00ab] text-white font-bold"
                onClick={handleCtaClick}
             >
                Speak With a Telco Specialist
             </Button>
          </FadeIn>

          <FadeIn direction="left">
             <div className="relative">
                <div className="rounded-none overflow-hidden border-8 border-white/5 shadow-2xl">
                   {/* [IMAGE PLACEHOLDER: Connectivity performance dashboard showing multi-site uptime and link stability] */}
                   <img 
                     src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop" 
                     alt="Connectivity Monitoring Dashboard" 
                     className="w-full aspect-video object-cover grayscale-[0.3]"
                   />
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl max-w-[220px] border border-slate-100">
                   <div className="text-3xl font-bold text-[#5D00D6] mb-1">99.99%</div>
                   <div className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">SLA Uptime Commitment</div>
                </div>
             </div>
          </FadeIn>
       </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — STRATEGIC ALIGNMENT (PERSONAS)
   ───────────────────────────────────────────────────────── */
const SectionPersonas = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className={C}>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <FadeIn>
          <span className="c9-eyebrow mb-4">Strategic Alignment</span>
          <h2 className="c9-section-heading">What type of connectivity environment are you managing?</h2>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            title: "Opening a New Business or Site", 
            tag: "ZERO-FAILURE LAUNCH",
            desc: "Ensure your new locations are operationally ready from day one. We manage the coordination, rollout, and activation of all connectivity." 
          },
          { 
            title: "Replacing Unreliable Providers", 
            tag: "MIGRATION WITHOUT DISRUPTION",
            desc: "Safely consolidate your voice and internet. We take over oversight, eliminate dropouts, and restore true operational accountability." 
          },
          { 
            title: "Managing Multi-Site Operations", 
            tag: "ENTERPRISE UPTIME & SLA",
            desc: "Standardized performance across dozens of sites. Centralized visibility, SLA-backed management, and robust failover strategies." 
          }
        ].map((persona, i) => (
          <FadeIn key={i} delay={i * 0.1} className="bg-white p-10 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-500 h-full flex flex-col border-b-4 hover:border-b-[#5D00D6]">
            <span className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-widest mb-4">{persona.tag}</span>
            <h3 className="text-xl font-bold mb-4 text-slate-900">{persona.title}</h3>
            <p className="text-slate-800 text-sm leading-relaxed mb-8 flex-grow font-medium">{persona.desc}</p>
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
               <div className="flex items-center gap-2 text-[11px] font-bold text-slate-900 uppercase">
                  <CheckCircle size={14} className="text-emerald-500" aria-hidden="true" /> Execution Focused
               </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — OPERATIONAL OUTCOMES
   ───────────────────────────────────────────────────────── */
const SectionOutcomes = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className={C}>
       <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <FadeIn direction="right">
                <h2 className="c9-section-heading text-left mb-6">Predictable Connectivity. <br /> Predictable Operations.</h2>
                <p className="c9-body mb-10 leading-relaxed">
                   When internet and voice are governed centrally, your leadership team can stop managing dropouts and start focusing on operational expansion.
                </p>
                 <Button 
                    size="lg"
                    className="rounded-full shadow-lg bg-[#5D00D6] hover:bg-[#4a00ab] text-white font-bold"
                    onClick={handleCtaClick}
                 >
                    Plan My Multi-Site Rollout
                 </Button>
             </FadeIn>
 
             <FadeIn direction="left" className="grid grid-cols-1 gap-4">
                {[
                  { val: "99.99%", label: "Target Uptime for Managed Sites" },
                  { val: "Zero", label: "Day-One Connectivity Failures" },
                  { val: "100%", label: "Visibility into Link Health" },
                  { val: "1 Partner", label: "Absolute Ownership of Escalations" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-6 shadow-sm border-l-4 border-l-[#5D00D6]">
                     <div className="text-2xl font-bold text-[#5D00D6] shrink-0">{stat.val}</div>
                     <div className="text-sm font-bold text-slate-800 leading-tight tracking-tight">{stat.label}</div>
                  </div>
                ))}
             </FadeIn>
          </div>
       </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 10 — FINAL CTA (OPERATIONAL UPGRADE)
   ───────────────────────────────────────────────────────── */
const SectionFinalCTA = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className={C}>
       <div className="bg-[#0c1024] rounded-3xl p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} aria-hidden="true" />
          
          <FadeIn>
             <h2 className="c9-section-heading !text-white !text-4xl lg:!text-5xl mb-8">Upgrade Your Connectivity <br /> Support Experience</h2>
             <p className="c9-body !text-white/95 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                Stop accepting fragmentation and finger-pointing as a cost of business. Partner with an accountable connectivity leader who manages your internet and voice environment with absolute maturity.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="rounded-full shadow-xl bg-[#5D00D6] hover:bg-[#4a00ab] text-white font-bold"
                  onClick={handleCtaClick}
                >
                  Plan My Business Connectivity
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="rounded-full border-white/20 text-white hover:bg-white/10 font-bold"
                  onClick={handleCtaClick}
                >
                  Review My Existing Internet Setup
                </Button>
             </div>
          </FadeIn>
       </div>
    </div>
  </section>
);

export default function TelcoPage() {
  return (
    <main className="bg-white">
      <SectionHero />
      <SectionProblems />
      <SectionApproach />
      <SectionServices />
      <SectionResilience />
      <SectionProcess />
      <SectionMonitoring />
      <SectionPersonas />
      <SectionOutcomes />
      <SectionFinalCTA />

      <section id="consultation-section" className="pt-12 pb-24 bg-slate-50">
        <WpConsultationForm 
          eyebrow="READY TO GOVERN YOUR CONNECTIVITY?"
          title="Connectivity Operations Review"
          description="We'll audit your current internet and voice setup, identify single points of failure, and show you exactly how to build a resilient, always-on connectivity stack."
          formTitle="Request Connectivity Audit"
        />
      </section>
    </main>
  );
}
