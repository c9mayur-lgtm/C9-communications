'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, Activity, GitBranch, ArrowRight, 
  CheckCircle2, AlertTriangle, Zap, Layers, 
  ShieldCheck, RefreshCw, BarChart3, Users,
  Target, Command, Radio, Clock, TrendingDown
} from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { ContinueJourney } from '@/components/sections/ContinueJourney';

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

export default function BusinessContinuityPage() {
  return (
    <main className="bg-white">
      {/* 1. HERO (LIGHT THEME ALIGNMENT) */}
      <section className="relative min-h-[85vh] flex flex-col justify-center bg-white overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2000" 
            alt="Enterprise Data Center" 
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        <div className={C + " relative z-10"}>
          <div className="max-w-3xl">
            <FadeIn>
              <span className="c9-eyebrow !text-[#5D00D6] mb-6 uppercase tracking-[0.2em]">OPERATIONAL RESILIENCE</span>
              <h1 className="c9-hero-title !text-slate-900 mb-8 leading-[1.1]">
                Keep Your Business Running <br />
                <span className="text-[#5D00D6]">During Disruptions</span>
              </h1>
              <p className="c9-body !text-slate-600 mb-10 text-xl max-w-2xl leading-relaxed">
                Business continuity is an operational requirement, not a technical luxury. We ensure your systems, people, and processes remain functional through outages, failures, and incidents.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="#assessment" className="inline-flex items-center justify-center gap-3 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-[#5D00D6]/20 group">
                  Request Continuity Assessment <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="#assessment" className="inline-flex items-center justify-center gap-3 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-10 font-bold text-[14px] hover:bg-slate-50 transition-all">
                  Review Your Current Readiness
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Live Operations Center Active</span>
                </div>
                <div className="h-4 w-px bg-slate-100" />
                <div className="text-slate-400 text-sm font-medium">100% Recovery Ownership</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. OPERATIONAL RISK — RELATABLE + RISK */}
      <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <span className="c9-eyebrow mb-4 uppercase tracking-[0.2em]">The Reactive Risk</span>
              <h2 className="c9-section-heading mb-6">When Continuity Is Not Actively Managed.</h2>
              <p className="c9-body text-slate-600 mb-8 leading-relaxed">
                Most businesses rely on reactive support—waiting for failure before attempting to coordinate a response. Without an operational system for continuity, ownership remains unclear during critical incidents, leading to chaos.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  { icon: <Clock size={20} />, text: "Unclear ownership during system-wide outages" },
                  { icon: <TrendingDown size={20} />, text: "Direct revenue loss during peak trading periods" },
                  { icon: <AlertTriangle size={20} />, text: "Fragmented vendors finger-pointing while offline" },
                  { icon: <Activity size={20} />, text: "Extended downtime due to lack of recovery protocols" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-red-500 mt-1">{item.icon}</div>
                    <span className="font-bold text-slate-900">{item.text}</span>
                  </div>
                ))}
              </div>
              <a href="#assessment" className="text-[#5D00D6] font-bold flex items-center gap-2 group text-lg">
                Assess your operational risk <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative rounded-[40px] overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200" 
                  alt="Infrastructure Monitoring" 
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-red-900/5 mix-blend-overlay" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. WHERE BUSINESSES BREAK DOWN — REAL WORLD */}
      <section className="py-16 lg:py-20 bg-white overflow-hidden">
        <div className={C}>
          <div className="max-w-3xl mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 uppercase tracking-[0.2em]">Real-World Disruption</span>
              <h2 className="c9-section-heading mb-6">Problems Are Operational, Not Just Technical.</h2>
              <p className="c9-body text-slate-600 mt-6 leading-relaxed">
                Failure happens at the worst possible time—during peak trading, in the middle of a migration, or across 50 distributed sites simultaneously.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Peak Trading Outages", desc: "Store outages during high-volume periods when connectivity failure equals immediate revenue loss." },
              { title: "Distributed Failures", desc: "System failures in complex, multi-site environments where local IT presence is non-existent." },
              { title: "Platform Lockouts", desc: "Loss of access to business-critical SaaS or internal platforms without a functional secondary path." },
              { title: "Disconnected Vendors", desc: "IT, Telco, and SaaS vendors finger-pointing during an incident while your business remains offline." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 flex flex-col h-full group hover:shadow-xl hover:border-[#5D00D6]/20 transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-red-500 mb-6 shadow-sm">
                  <AlertTriangle size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow">{item.desc}</p>
                <div className="mt-6 pt-6 border-t border-slate-200">
                   <div className="flex items-center gap-2 text-[11px] font-bold text-red-500 uppercase tracking-widest">
                      Immediate Impact Risk ✓
                   </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE C9 APPROACH — ACCOUNTABILITY LAYER */}
      <section className="py-16 lg:py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.2]">
           <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Execution Model" />
           <div className="absolute inset-0 bg-slate-900/90" />
        </div>
        <div className={C + " relative z-10"}>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right">
              <span className="c9-eyebrow !text-[#a56eff] mb-4 uppercase tracking-[0.2em]">The Execution Model</span>
              <h2 className="c9-section-heading !text-white mb-6">One Accountable Partner. Structured Continuity.</h2>
              <p className="c9-body !text-white/70 mb-10 leading-relaxed">
                Stop juggling multiple carriers and infrastructure vendors. We act as your single point of contact, taking full responsibility for the performance and stability of your entire continuity stack.
              </p>
              <div className="space-y-6 mb-10">
                {[
                  { title: "Single Accountable Partner", desc: "One name, one number. We own the problem until operations are restored." },
                  { title: "Coordinated Response", desc: "Structured handling of outages across IT, Network, and SaaS layers." },
                  { title: "Zero Blind Change Policy", desc: "We validate every cutover and recovery step before closing incidents." },
                  { title: "Direct Engineer Entry", desc: "No offshore script-readers. Direct access to the team managing your stack." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#a56eff] shrink-0 border border-white/10">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 uppercase tracking-wide text-sm">{item.title}</h4>
                      <p className="text-sm text-white/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="#assessment" className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-[#5D00D6]/10">
                Speak to an Operations Specialist
              </Link>
            </FadeIn>

            <FadeIn direction="left">
               <div className="relative p-1 bg-gradient-to-br from-white/20 to-transparent rounded-[40px]">
                  <div className="bg-slate-900 p-8 rounded-[38px] border border-white/5 shadow-2xl">
                     <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                        <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Continuity Command Active</span>
                        <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-bold uppercase tracking-widest">
                           <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                           Secured
                        </div>
                     </div>
                     <div className="space-y-6">
                        {[
                          { label: 'Incident Coordination', status: 'Active', val: 'End-to-End', color: 'text-emerald-400' },
                          { label: 'System Visibility', status: 'Enabled', val: 'Global', color: 'text-purple-400' },
                          { label: 'Ownership Layer', status: 'Direct', val: 'C9 Managed', color: 'text-emerald-400' }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between">
                             <div>
                                <div className="text-[14px] font-bold text-white mb-0.5">{item.label}</div>
                                <div className="text-[11px] text-white/40 uppercase tracking-widest">{item.val}</div>
                             </div>
                             <div className={`text-[12px] font-bold uppercase tracking-widest ${item.color}`}>
                                {item.status}
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. CONTINUITY MODEL — MATURITY */}
      <section className="py-16 lg:py-20 bg-white">
        <div className={C}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 uppercase tracking-[0.2em]">Execution Framework</span>
              <h2 className="c9-section-heading">The C9 Continuity Maturity Model</h2>
              <p className="c9-body text-slate-600 mt-6 leading-relaxed">
                Enterprise confidence is built on structured workflows, not hope. We define the priority of every asset and the exact response required when it fails.
              </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Defined Workflows",
                icon: <Command />,
                tag: "RESPONSE STRUCTURE",
                desc: "Tested procedures for every disruption level, from single-site outages to total regional failures."
              },
              {
                title: "Tiered Prioritisation",
                icon: <Target />,
                tag: "IMPACT MANAGEMENT",
                desc: "Categorising systems into Critical, Operational, and Secondary to ensure resource allocation follows business impact."
              },
              {
                title: "System Coordination",
                icon: <Radio />,
                tag: "COMMAND LAYER",
                desc: "Aligning IT, Network, and Support teams under one command structure to eliminate communication gaps."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-[#5D00D6] flex items-center justify-center text-white mb-8 shadow-lg shadow-purple-900/20">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-purple-600 uppercase tracking-widest">{item.tag}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">{item.desc}</p>
                <div className="pt-6 border-t border-slate-200">
                   <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <CheckCircle2 size={14} className="text-emerald-500" /> Operational Standard
                   </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ROLE OF RECOVERY & INFRASTRUCTURE — THE COMPLETE SYSTEM */}
      <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <Link href="/managed-it/infrastructure" className="group p-8 bg-white border border-slate-200 rounded-3xl hover:border-[#5D00D6]/30 shadow-sm transition-all">
                  <ShieldCheck size={24} className="text-[#5D00D6] mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">Stability Layer</h4>
                  <p className="text-xs text-slate-500">Infrastructure designed to prevent initial failure.</p>
                </Link>
                <Link href="/modern-workplace/saas-backup" className="group p-8 bg-white border border-slate-200 rounded-3xl hover:border-[#5D00D6]/30 shadow-sm transition-all">
                  <RefreshCw size={24} className="text-[#5D00D6] mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">Recovery Layer</h4>
                  <p className="text-xs text-slate-500">SaaS Backup ensures data integrity and recovery.</p>
                </Link>
                <div className="col-span-2 p-10 bg-[#5D00D6] rounded-[32px] text-white shadow-xl shadow-purple-900/20">
                  <Activity size={32} className="text-white mb-6" />
                  <h4 className="text-2xl font-bold mb-4">Continuity (The System)</h4>
                  <p className="text-white/80 leading-relaxed">
                    The operational layer that keeps everything running while stability and recovery are in progress. The missing link in traditional IT support.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2">
              <span className="c9-eyebrow mb-4 uppercase tracking-[0.2em]">The Complete System</span>
              <h2 className="c9-section-heading mb-6">Stability. Recovery. Continuity.</h2>
              <p className="c9-body text-slate-600 mb-8 leading-relaxed">
                Systems fail—that is inevitable. Business disruption, however, is a choice. We connect your infrastructure stability and data recovery protocols into a single operational system for business continuity.
              </p>
              <div className="space-y-4">
                {[
                   "Infrastructure ensures baseline stability",
                   "Backup ensures data integrity and recovery",
                   "Continuity ensures the business stays operational"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#5D00D6]" />
                    <span className="font-bold text-slate-900 text-sm tracking-wide uppercase">{text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section id="assessment" className="pt-12 pb-24 bg-white">
        <WpConsultationForm 
          eyebrow="VALIDATE YOUR RESILIENCE"
          title="Business Continuity Assessment"
          description="Validate your current readiness before an incident happens. Speak to an operations specialist to review your environment."
          formTitle="Schedule Continuity Audit"
          ctaText="Talk to Operations Specialist"
        />
      </section>

      {/* VISITOR JOURNEY CONTINUATION */}
      <ContinueJourney 
        eyebrow="STRATEGIC ALIGNMENT"
        title="Consolidate Your Operational Logic."
        description="Continuity is only one layer of the C9 system. Explore the infrastructure and recovery services that keep your organisation resilient."
        links={[
          { label: "Infrastructure Control", path: "/managed-it/infrastructure" },
          { label: "SaaS Data Recovery", path: "/modern-workplace/saas-backup" },
          { label: "Managed IT Operations", path: "/managed-it" },
          { label: "Enterprise Systems", path: "/enterprise" }
        ]}
      />
    </main>
  );
}
