'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, PhoneCall, Smartphone, PhoneIncoming, GitBranch, Clock, CheckCircle, Activity, ShieldCheck, Settings, Monitor, Lock, Check, Building2, Search, Zap, ShieldAlert, Layers, Database, Server, RefreshCw, Users } from 'lucide-react';
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
   SECTION 1 — HERO (AUTHORITY + RELIABILITY)
   ───────────────────────────────────────────────────────── */
const SectionHero = () => (
  <section className="relative min-h-[85vh] bg-[#0c1024] flex flex-col justify-center overflow-hidden pt-32 pb-24">
    {/* Background Infrastructure Visual */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop" 
        alt="Managed Connectivity Team"
        className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1024] via-[#0c1024]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024] via-transparent to-transparent" />
    </div>

    <div className={C + " relative z-10"}>
      <div className="max-w-3xl">
        <FadeIn>
          <span className="c9-eyebrow !text-[#a56eff] mb-6">Always-On Connectivity</span>
          <h1 className="c9-hero-title !text-white mb-8 leading-[1.1]">
            Business Connectivity <br />
            <span className="text-[#a56eff]">That Doesn’t Fail</span>
          </h1>
          <p className="c9-body !text-white/80 mb-10 text-xl max-w-2xl leading-relaxed">
            We design, deploy, and manage reliable network and telco infrastructure that keeps your business connected—without disruption.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button 
              size="lg" 
              className="rounded-none shadow-xl bg-[#5D00D6] hover:bg-[#4a00ab] text-white font-black"
              onClick={handleCtaClick}
            >
              Check Your Network Readiness 
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="rounded-none border-white/20 text-white hover:bg-white/10 font-black"
              onClick={handleCtaClick}
            >
              Speak to a Connectivity Expert
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span className="text-white/95 text-sm font-black uppercase tracking-widest">Live Operations Center Active</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="text-white/95 text-sm font-bold">99.99% Uptime Guarantee</div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — THE REAL PROBLEM (RELATABLE + RISK)
   ───────────────────────────────────────────────────────── */
const SectionProblems = () => (
  <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right">
          <span className="c9-eyebrow mb-4">The Connectivity Gap</span>
          <h2 className="c9-section-heading mb-6">When Connectivity Fails, Business Stops.</h2>
          <p className="c9-body text-slate-800 mb-8 font-medium">
            Network instability isn't just a technical glitch—it's a massive operational risk that impacts revenue, productivity, and customer trust.
          </p>
          <div className="space-y-4 mb-10">
            {[
              { icon: <ShieldAlert size={20} />, text: "Unstable connections disrupting daily operations" },
              { icon: <Zap size={20} />, text: "No automatic backup or failover for critical links" },
              { icon: <Users size={20} />, text: "Fragmented vendors constantly blaming each other" },
              { icon: <Activity size={20} />, text: "Hidden downtime impacting your bottom line" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-none border border-slate-200 shadow-sm">
                <div className="text-red-600 mt-1" aria-hidden="true">{item.icon}</div>
                <span className="font-bold text-slate-900">{item.text}</span>
              </div>
            ))}
          </div>
          <Button 
            variant="link" 
            className="p-0 h-auto font-black flex items-center gap-2 text-lg text-[#5D00D6] hover:no-underline"
            onClick={handleCtaClick}
          >
            Assess your current setup 
          </Button>
        </FadeIn>

        <FadeIn direction="left">
          <div className="relative rounded-none overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop" 
              alt="Business Operations Impacted by Connectivity Issues" 
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" aria-hidden="true" />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — THE C9 APPROACH (ACCOUNTABILITY)
   ───────────────────────────────────────────────────────── */
const SectionApproach = () => (
  <section className="py-16 lg:py-20 bg-white overflow-hidden">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <FadeIn direction="right" className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-6">
             <div className="space-y-6">
                <div className="aspect-square rounded-none overflow-hidden shadow-xl border border-slate-100">
                   <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Engineer working on Telco Hardware" />
                </div>
                <div className="bg-[#5D00D6] p-8 rounded-none text-white border border-[#5D00D6]/20">
                   <div className="text-4xl font-black mb-2">One</div>
                   <div className="text-sm font-bold uppercase tracking-widest opacity-95">Partner Responsible for Uptime</div>
                </div>
             </div>
             <div className="space-y-6 pt-12">
                <div className="bg-slate-900 p-8 rounded-none text-white border border-white/5">
                   <div className="text-4xl font-black mb-2">Zero</div>
                   <div className="text-sm font-bold uppercase tracking-widest opacity-95">Vendor Blame Games</div>
                </div>
                <div className="aspect-square rounded-none overflow-hidden shadow-xl border border-slate-100">
                   <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Advanced Connectivity Hub" />
                </div>
             </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" className="order-1 lg:order-2">
          <span className="c9-eyebrow mb-4">The Accountability Layer</span>
          <h2 className="c9-section-heading mb-6">One Accountable Partner. Operational Detail in Ownership.</h2>
          <p className="c9-body text-slate-800 mb-8 leading-relaxed font-medium">
            Stop juggling multiple carriers and infrastructure vendors. We act as your single point of contact, taking full responsibility for the performance and stability of your entire connectivity stack.
          </p>
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#5D00D6]/5 rounded-none border border-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] shrink-0">
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Single Accountable Partner</h4>
                <p className="text-sm text-slate-700 font-medium">One name, one number. We own the problem until it's resolved.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#5D00D6]/5 rounded-none border border-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] shrink-0">
                <Layers size={24} aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Operational Detail in Ownership</h4>
                <p className="text-sm text-slate-700 font-medium">From the street to the desk, we manage every segment of the link.</p>
              </div>
            </div>
          </div>
          <Button 
            size="lg"
            className="rounded-none shadow-lg bg-[#5D00D6] hover:bg-[#4a00ab] text-white font-black"
            onClick={handleCtaClick}
          >
            Get a resilient network plan
          </Button>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — WHAT WE DELIVER (CLARITY)
   ───────────────────────────────────────────────────────── */
const SectionServices = () => (
  <section className="py-16 lg:py-20 bg-slate-50">
    <div className={C}>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <FadeIn>
          <span className="c9-eyebrow mb-4">Core Capabilities</span>
          <h2 className="c9-section-heading">Engineered for Business Continuity</h2>
          <p className="c9-body text-slate-600 mt-6">
            We don't just supply lines; we build the resilient infrastructure required to run a modern, multi-site business without fear of failure.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { 
            icon: <Wifi size={24} />, 
            title: "Business Connectivity", 
            desc: "Fibre, nbn™, and high-speed links designed for enterprise workloads." 
          },
          { 
            icon: <PhoneCall size={24} />, 
            title: "Voice Systems", 
            desc: "Cloud-hosted voice that scales with your team and never drops a call." 
          },
          { 
            icon: <GitBranch size={24} />, 
            title: "Network Infrastructure", 
            desc: "Managed switching, routing, and Wi-Fi that prioritizes critical data." 
          },
          { 
            icon: <RefreshCw size={24} />, 
            title: "Redundancy & Failover", 
            desc: "Automatic secondary links that kick in instantly when primary lines fail." 
          }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-none border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 h-full border-b-4 hover:border-b-[#5D00D6]">
            <div className="w-14 h-14 bg-[#5D00D6]/5 rounded-none border border-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] mb-6 group-hover:scale-110" aria-hidden="true">
              {item.icon}
            </div>
            <h3 className="text-lg font-black mb-3 text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-800 leading-relaxed mb-6 font-medium">{item.desc}</p>
            <div className="flex items-center gap-2 text-[11px] font-black text-[#5D00D6] uppercase tracking-widest">
              Business Continuity ✓
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — RELIABILITY & REDUNDANCY (CRITICAL)
   ───────────────────────────────────────────────────────── */
const SectionResilience = () => (
  <section className="py-16 lg:py-20 bg-[#0c1024] text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
    <div className={C}>
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-20 items-center">
        <FadeIn direction="right">
          <span className="c9-eyebrow !text-[#a56eff] mb-4">Fail-Safe Engineering</span>
          <h2 className="c9-section-heading !text-white mb-6">Designed for 100% Operational Uptime.</h2>
          <p className="c9-body text-white/80 mb-10 leading-relaxed">
            We don't hope for uptime; we engineer it. Our networks are designed with multiple layers of redundancy to ensure your business stays connected even when primary systems fail.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { title: "Dual-Carrier Failover", desc: "Automatic switching between diverse carriers for total redundancy." },
              { title: "Continuous Monitoring", desc: "Real-time health checks on every link and hardware node." },
              { title: "Hardware Redundancy", desc: "Critical path hardware setups with instant failover capability." },
              { title: "Fast Recovery Protocols", desc: "Military-grade cutover procedures to restore service in seconds." }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-2">
                   <Check size={16} className="text-[#a56eff]" aria-hidden="true" />
                   <h4 className="font-black text-white text-sm uppercase tracking-wide">{item.title}</h4>
                </div>
                <p className="text-xs text-white/95 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          <Button 
            size="lg"
            className="rounded-none shadow-lg bg-[#5D00D6] hover:bg-[#4a00ab] text-white font-black"
            onClick={handleCtaClick}
          >
            Check your network resilience
          </Button>
        </FadeIn>

        <FadeIn direction="left">
          <div className="relative p-1 bg-gradient-to-br from-white/20 to-transparent rounded-none">
             <div className="bg-[#0c1024] p-8 rounded-none border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                   <span className="text-[11px] font-black text-white/95 uppercase tracking-widest">Network Resilience Monitor</span>
                   <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-black uppercase tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" aria-hidden="true" />
                      Protected
                   </div>
                </div>
                <div className="space-y-6">
                   {[
                     { label: 'Primary Link (Fibre)', status: 'Active', val: '1000 Mbps', color: 'text-emerald-400' },
                     { label: 'Secondary Link (nbn)', status: 'Standby', val: '250 Mbps', color: 'text-purple-400' },
                     { label: 'Voice Services', status: 'Operational', val: 'SIP Trunking', color: 'text-emerald-400' }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between">
                        <div>
                           <div className="text-[14px] font-black text-white mb-0.5">{item.label}</div>
                           <div className="text-[11px] text-white/95 uppercase tracking-widest font-bold">{item.val}</div>
                        </div>
                        <div className={`text-[12px] font-black uppercase tracking-widest ${item.color}`}>
                           {item.status}
                        </div>
                     </div>
                   ))}
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                   <div className="bg-white/5 p-4 rounded-none border border-white/5">
                      <div className="text-[10px] text-white/95 font-black uppercase mb-1">Avg Response</div>
                      <div className="text-xl font-black text-white">12ms</div>
                   </div>
                   <div className="bg-white/5 p-4 rounded-none border border-white/5">
                      <div className="text-[10px] text-white/95 font-black uppercase mb-1">Packet Loss</div>
                      <div className="text-xl font-black text-white">0.00%</div>
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
   SECTION 6 — HOW IT WORKS (EXECUTION)
   ───────────────────────────────────────────────────────── */
const SectionProcess = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">The Execution Model</span>
               <h2 className="c9-section-heading mb-6">Structured Deployment. No Disruption.</h2>
               <p className="c9-body text-slate-600">We utilize a structured deployment model to ensure every link triggers a specific operational workflow.</p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-4 gap-6 relative">
            {[
               { step: '01', title: "Assess", desc: "We audit your current environment and identify risks." },
               { step: '02', title: "Design", desc: "Engineering a resilient, fail-safe network architecture." },
               { step: '03', title: "Deploy", desc: "Rapid rollout with zero operational downtime." },
               { step: '04', title: "Monitor", desc: "24/7 management to ensure continuous uptime." }
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="relative bg-white p-8 rounded-none border border-slate-200 shadow-sm hover:border-[#5D00D6]/30 transition-all border-b-4 hover:border-b-[#5D00D6]">
                  <div className="text-[40px] font-black text-slate-100 group-hover:text-[#5D00D6]/10 transition-colors absolute top-6 right-6 leading-none" aria-hidden="true">
                     {s.step}
                  </div>
                  <div className="w-10 h-10 rounded-none bg-[#5D00D6] text-white flex items-center justify-center font-black text-[16px] mb-6 relative z-10 shadow-md">
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
   SECTION 7 — OPERATIONS & MONITORING (HUMAN + SYSTEM)
   ───────────────────────────────────────────────────────── */
const SectionMonitoring = () => (
  <section className="py-16 lg:py-20 bg-slate-900 text-white overflow-hidden relative">
    <div className="absolute inset-0 opacity-[0.2]">
       <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="NOC Operations Center" />
       <div className="absolute inset-0 bg-slate-900/90" />
    </div>
    <div className={C + " relative z-10"}>
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
             <span className="c9-eyebrow !text-[#a56eff] mb-4">Proactive Surveillance</span>
             <h2 className="c9-section-heading !text-white mb-6">Issues Are Solved Before They Impact You.</h2>
             <p className="c9-body !text-white/95 mb-10 leading-relaxed font-medium">
                Our 24/7 Network Operations Center (NOC) continuously monitors every link in your environment. We detect, isolate, and address anomalies in real-time—often before your team even notices a flicker.
             </p>
             <div className="space-y-4 mb-10">
                {[
                  "Continuous health-check pings across all sites",
                  "Automated alerting for any link instability",
                  "Immediate engineering response for critical faults",
                  "Quarterly capacity and performance reviews"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                     <div className="w-5 h-5 rounded-none bg-[#5D00D6]/20 flex items-center justify-center border border-[#5D00D6]/30">
                        <Check size={12} className="text-[#a56eff]" aria-hidden="true" />
                     </div>
                     <span className="text-sm font-bold text-white/95">{item}</span>
                  </div>
                ))}
             </div>
             <Button 
                size="lg"
                className="rounded-none shadow-lg bg-[#5D00D6] hover:bg-[#4a00ab] text-white font-black"
                onClick={handleCtaClick}
             >
                Speak to an expert
             </Button>
          </FadeIn>

          <FadeIn direction="left">
             <div className="relative">
                <div className="rounded-none overflow-hidden border-8 border-white/5 shadow-2xl">
                   <img 
                     src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop" 
                     alt="C9 NOC Monitoring Station" 
                     className="w-full aspect-video object-cover"
                   />
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-none shadow-2xl max-w-[200px] border border-slate-100">
                   <div className="text-3xl font-black text-[#5D00D6] mb-1">24/7</div>
                   <div className="text-[11px] font-black text-slate-700 uppercase tracking-widest">Active Monitoring</div>
                </div>
             </div>
          </FadeIn>
       </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — WHO THIS IS FOR (PERSONA ALIGNMENT)
   ───────────────────────────────────────────────────────── */
const SectionPersonas = () => (
  <section className="py-16 lg:py-20 bg-white">
    <div className={C}>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <FadeIn>
          <span className="c9-eyebrow mb-4">Strategic Fit</span>
          <h2 className="c9-section-heading">Built for High-Growth Operations</h2>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            title: "New Sites", 
            tag: "GREENFIELD",
            desc: "Ready from day one. We engineer the infrastructure so your new locations go live with perfect connectivity on launch day." 
          },
          { 
            title: "Existing Businesses", 
            tag: "BROWNFIELD",
            desc: "Stable connectivity. We takeover and stabilize fragmented environments, removing technical debt and improving reliability." 
          },
          { 
            title: "Multi-Site Enterprise", 
            tag: "CORPORATE",
            desc: "Consistent performance. Centralized management and standardized rollouts across dozens or hundreds of locations." 
          }
        ].map((persona, i) => (
          <FadeIn key={i} delay={i * 0.1} className="bg-white p-10 rounded-none border border-slate-200 hover:shadow-xl transition-all duration-500 h-full flex flex-col border-b-4 hover:border-b-[#5D00D6]">
            <span className="text-[11px] font-black text-[#5D00D6] uppercase tracking-widest mb-4">{persona.tag}</span>
            <h3 className="text-xl font-black mb-4 text-slate-900">{persona.title}</h3>
            <p className="text-slate-800 text-sm leading-relaxed mb-8 flex-grow font-medium">{persona.desc}</p>
            <div className="pt-6 border-t border-slate-100">
               <div className="flex items-center gap-2 text-xs font-black text-slate-900">
                  <CheckCircle size={14} className="text-emerald-500" aria-hidden="true" /> Professional Deployment
               </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — BUSINESS OUTCOMES
   ───────────────────────────────────────────────────────── */
const SectionOutcomes = () => (
  <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
    <div className={C}>
       <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
             <FadeIn direction="right">
                <h2 className="c9-section-heading text-left mb-6 font-black">Predictable Connectivity. <br /> Predictable Growth.</h2>
                <p className="c9-body text-slate-800 mb-10 font-medium">
                   When connectivity is a given, your leadership team can stop worrying about outages and start focusing on scale.
                </p>
                 <Button 
                    size="lg"
                    className="rounded-none shadow-lg bg-[#5D00D6] hover:bg-[#4a00ab] text-white font-black"
                    onClick={handleCtaClick}
                 >
                    Start with a consultation
                 </Button>
             </FadeIn>
 
             <FadeIn direction="left" className="grid grid-cols-1 gap-4">
                {[
                  { val: "90%", label: "Reduction in reported connectivity issues" },
                  { val: "Zero", label: "Vendor finger-pointing during outages" },
                  { val: "100%", label: "Visibility into network health and performance" },
                  { val: "Fast", label: "Rollouts for new sites and office moves" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-none border border-slate-200 flex items-center gap-6 shadow-sm border-l-4 border-l-[#5D00D6]">
                     <div className="text-2xl font-black text-[#5D00D6] shrink-0">{stat.val}</div>
                     <div className="text-sm font-bold text-slate-800 leading-tight">{stat.label}</div>
                  </div>
                ))}
             </FadeIn>
          </div>
       </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 10 — FINAL CTA (STRONG CLOSE)
   ───────────────────────────────────────────────────────── */
const SectionFinalCTA = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className={C}>
       <div className="bg-[#0c1024] rounded-none p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} aria-hidden="true" />
          
          <FadeIn>
             <h2 className="c9-section-heading !text-white !text-4xl lg:!text-5xl mb-8 font-black">Ensure Your Business <br /> Stays Connected</h2>
             <p className="c9-body !text-white/95 mb-12 max-w-2xl mx-auto text-lg font-medium">
                Stop accepting downtime as a cost of doing business. Partner with an accountable connectivity leader who owns the outcome.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="rounded-none shadow-xl bg-[#5D00D6] hover:bg-[#4a00ab] text-white font-black"
                  onClick={handleCtaClick}
                >
                  Schedule Consultation
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="rounded-none border-white/20 text-white hover:bg-white/10 font-black"
                  onClick={handleCtaClick}
                >
                  Speak to a Specialist
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
          eyebrow="READY TO SECURE YOUR UPTIME?"
          title="Connectivity Audit & Strategy"
          description="We'll audit your current network, identify points of failure, and show you exactly how to build a resilient, always-on connectivity stack."
          formTitle="Request Telco Audit"
        />
      </section>
    </main>
  );
}
