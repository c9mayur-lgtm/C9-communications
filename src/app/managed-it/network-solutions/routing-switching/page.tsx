'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, ShieldCheck, Zap, 
  Monitor, Lock, Activity, Users, 
  Network, Wifi, Globe, Share2, Server,
  AlertTriangle, RefreshCw, BarChart3, Radio,
  LayoutGrid, Layers, Database
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";
import { RouterControlVisual } from '@/app/telco/hardware/routers/components/RouterControlVisual';

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
  const y = direction === 'up' ? 24 : 0;
  const x = direction === 'left' ? -24 : direction === 'right' ? 24 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
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
  <section className="relative overflow-hidden bg-white pt-12 pb-0 lg:pt-20">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />
    
    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center pb-16 lg:pb-24">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
               <Network size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0">Network Infrastructure Operations</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Ensure Network Stability <span className="text-[#5D00D6]">Across All Locations.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[620px]">
                Your network is business-critical infrastructure. C9 provides the operational control and stability required for complex, multi-site environments, ensuring absolute uptime and operational continuity.
             </p>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col items-start gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                   <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
                   >
                      Request Infrastructure Assessment
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                   </a>
                   <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-8 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white"
                   >
                      Review Network Architecture
                   </a>
                </div>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <RouterControlVisual />
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — OPERATIONAL RISK
   ───────────────────────────────────────────────────────── */
const SectionOperationalRisk = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Operational Risk</span>
               <h2 className="c9-section-heading">The Cost of Unmanaged Infrastructure</h2>
               <p className="c9-body text-slate-600 mt-4">
                  When routing and switching is not controlled, real-world failures occur. Unstable networks halt revenue, disrupt POS systems, and create operational friction that impacts the entire business.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               {
                  icon: <AlertTriangle className="text-red-500" />,
                  title: "Revenue Loss",
                  desc: "Outages that halt sales, prevent transactions, and stop revenue flow across locations."
               },
               {
                  icon: <Radio className="text-amber-500" />,
                  title: "POS Failure",
                  desc: "Connectivity drops in retail environments that stop payments and degrade customer experience."
               },
               {
                  icon: <Monitor className="text-[#5D00D6]" />,
                  title: "Operational Halt",
                  desc: "Slow or unresponsive systems that force staff into downtime and halt warehouse or office flow."
               },
               {
                  icon: <RefreshCw className="text-emerald-500" />,
                  title: "Recurring Issues",
                  desc: "Unsolved root causes that lead to the same failures happening repeatedly across sites."
               }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                     {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — WHERE NETWORKS FAIL
   ───────────────────────────────────────────────────────── */
const SectionFailurePoints = () => (
   <section className="py-16 lg:py-24 bg-white relative">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">System Vulnerabilities</span>
               <h2 className="c9-section-heading mb-6">Where Network Stability Fails</h2>
               <p className="c9-body mb-8">
                  Infrastructure fails when it is treated as a collection of devices rather than a controlled system. We identify and resolve the failure modes common in complex environments.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-6">
                  {[
                     { title: "Retail Stores", desc: "Inconsistent configurations leading to unstable POS and guest Wi-Fi." },
                     { title: "Warehouses", desc: "Hardware under load causing scanning and dispatch system delays." },
                     { title: "Offices", desc: "Lack of monitoring leading to undetected performance degradation." },
                     { title: "Branch Sites", desc: "Repeated connectivity issues due to unmanaged edge infrastructure." }
                  ].map((item, i) => (
                     <div key={i} className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right" className="relative">
               <div className="bg-[#0c1024] rounded-lg p-12 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5D00D6] opacity-10 rounded-full blur-[100px]" />
                  <div className="relative z-10">
                     <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <AlertTriangle className="text-red-400" /> System Failure Modes
                     </h3>
                     <div className="space-y-6">
                        {[
                           "Inconsistent configurations across sites",
                           "Undetected hardware saturation",
                           "Lack of real-time performance data",
                           "Uncoordinated incident response",
                           "No centralized control policy"
                        ].map((text, i) => (
                           <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                              <span className="text-white/80 font-medium">{text}</span>
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
   SECTION 4 — HOW C9 OPERATES THIS LAYER
   ───────────────────────────────────────────────────────── */
const SectionHowWeOperate = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Operational Excellence</span>
               <h2 className="c9-section-heading">How C9 Controls the Infrastructure Layer</h2>
               <p className="c9-body text-slate-600">
                  We operate routing and switching as a controlled system. We eliminate the variance that creates risk by enforcing standards and proactive oversight.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-5 gap-5">
            {[
               { step: '01', title: 'Standardisation', desc: 'Identical configurations enforced across all sites.' },
               { step: '02', title: 'Monitoring', desc: 'Continuous tracking of performance and health.' },
               { step: '03', title: 'Detection', desc: 'Identifying anomalies before they impact staff.' },
               { step: '04', title: 'Response', desc: 'Structured incident protocols for rapid resolution.' },
               { step: '05', title: 'Management', desc: 'Coordinated control across all locations.' },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="relative bg-white p-8 rounded-lg border border-slate-200 shadow-sm group hover:border-[#5D00D6]/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#5D00D6] text-white flex items-center justify-center font-bold text-[16px] mb-6 relative z-10 shadow-md">
                     {i + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-3 relative z-10">{s.title}</h4>
                  <p className="text-slate-500 text-[13px] leading-relaxed relative z-10">{s.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — STANDARDISATION & CONTROL MODEL
   ───────────────────────────────────────────────────────── */
const SectionStandardisation = () => (
   <section className="py-16 lg:py-24 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
               <div className="bg-slate-50 rounded-lg p-10 border border-slate-100 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5D00D6] opacity-[0.03] rounded-full blur-[100px]" />
                  <div className="relative z-10">
                     <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <ShieldCheck className="text-[#5D00D6]" /> Control Model
                     </h3>
                     
                     <div className="space-y-4">
                        {[
                           { label: "Standardisation", value: "Predictable Performance" },
                           { label: "Configuration Sync", value: "Zero Operational Variance" },
                           { label: "Centralized Policy", value: "Unified Global Control" },
                           { label: "Audit Trails", value: "Full Accountability" }
                        ].map((row, i) => (
                           <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">{row.label}</div>
                              <div className="font-bold text-slate-900 text-[14px]">{row.value}</div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </FadeIn>

            <FadeIn direction="right">
               <span className="c9-eyebrow mb-4">Maturity Signal</span>
               <h2 className="c9-section-heading mb-6">Eliminating Operational Variance</h2>
               <p className="c9-body mb-8">
                  Inconsistent networks create hidden risk. When every location is configured differently, troubleshooting is slow and outages are common. C9 enforces absolute standardisation across your environments to ensure stability.
               </p>
               
               <div className="space-y-6">
                  {[
                     { title: "Standardisation Matters", desc: "Ensures that every device behaves exactly as expected, regardless of location." },
                     { title: "Reducing Variance", desc: "Eliminates the 'special cases' and custom configurations that lead to system failures." },
                     { title: "Enforcing Consistency", desc: "Global policy updates pushed in minutes, ensuring security and performance standards are met." }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="mt-1 flex-shrink-0"><CheckCircle size={12} className="text-[#5D00D6]" /></div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-[16px]">{item.title}</h4>
                           <p className="text-slate-500 text-[14px]">{item.desc}</p>
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
   SECTION 6 — INTEGRATION & PERFORMANCE
   ───────────────────────────────────────────────────────── */
const SectionPerformanceVisibility = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Operational Stability</span>
               <h2 className="c9-section-heading mb-6">Control at Scale</h2>
               <p className="c9-body mb-8">
                  Management should not become more complex as you grow. We provide the centralized visibility and proactive optimization required to maintain control over large-scale distributed networks.
               </p>

               <div className="space-y-4">
                  {[
                     { title: "Centralised Visibility", desc: "A single dashboard to monitor health across all branch locations in real-time." },
                     { title: "Performance Tracking", desc: "Continuous measurement of latency, throughput, and hardware load." },
                     { title: "Proactive Optimisation", desc: "Automated tuning of traffic flow based on real-world usage patterns." },
                     { title: "Issue Prevention", desc: "Identifying and resolving anomalies before they lead to operational failure." }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4 p-5 bg-white rounded-lg border border-slate-200">
                        <div className="text-[#5D00D6] mt-1"><Activity size={18} /></div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-[15px]">{item.title}</h4>
                           <p className="text-slate-500 text-[13px]">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right" className="bg-[#0c1024] rounded-lg p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5D00D6] opacity-10 rounded-full blur-[100px]" />
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8">Existing Integration</h3>
                  <p className="text-white/70 mb-8 leading-relaxed">
                     We integrate with your current infrastructure to provide immediate operational control without forced replacement.
                  </p>
                  <div className="space-y-6">
                     {[
                        "Works with existing vendors",
                        "Supports hybrid environments",
                        "No forced hardware replacement",
                        "Minimal operational disruption",
                        "Carrier-neutral management"
                     ].map((text, i) => (
                        <div key={i} className="flex items-center gap-4">
                           <CheckCircle className="text-emerald-400" size={18} />
                           <span className="text-white/90 font-medium">{text}</span>
                        </div>
                     ))}
                  </div>
                  <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                     <p className="text-sm italic text-white/60">
                        "C9 eliminates enterprise resistance by leveraging existing investments while introducing necessary management discipline."
                     </p>
                  </div>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — BUSINESS IMPACT
   ───────────────────────────────────────────────────────── */
const SectionBusinessImpact = () => (
   <section className="py-16 lg:py-24 bg-white">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Commercial Outcome</span>
               <h2 className="c9-section-heading">Translating Infrastructure to Profit</h2>
               <p className="c9-body text-slate-600 mt-4">
                  Network stability is not just a technical requirement—it is a commercial necessity. Controlled environments directly impact your bottom line.
               </p>
            </FadeIn>
         </div>
         <div className="grid md:grid-cols-4 gap-6">
            {[
               { title: 'Operational Uptime', desc: 'Absolute continuity for POS, scanning, and dispatch systems.', icon: <Zap /> },
               { title: 'Revenue Protection', desc: 'Eliminating transacting failures and sales-floor downtime.', icon: <BarChart3 /> },
               { title: 'Customer Experience', desc: 'Ensuring seamless interaction across all digital touchpoints.', icon: <Users /> },
               { title: 'Scaling Efficiency', desc: 'Deploying new sites faster with zero management overhead.', icon: <RefreshCw /> }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="p-8 bg-white rounded-lg border border-slate-200 shadow-sm text-center">
                  <div className="w-12 h-12 bg-[#5D00D6]/5 rounded-xl flex items-center justify-center text-[#5D00D6] mx-auto mb-6">
                     {item.icon}
                  </div>
                  <h4 className="text-[16px] font-bold mb-3 text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — WHY THIS MATTERS
   ───────────────────────────────────────────────────────── */
const SectionWhyItMatters = () => (
   <section className="py-12 lg:py-16 bg-[#0c1024] text-white relative overflow-hidden">
      <div className={C}>
         <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
               <h2 className="c9-section-heading !text-white mb-6">Why Operational Control Matters</h2>
               <div className="space-y-6">
                  {[
                     { title: "Infrastructure Failure = Business Disruption", desc: "Every minute of network instability is a minute of operational loss." },
                     { title: "Unmanaged Networks Create Risk", desc: "Ignoring the management layer leads to recurring, expensive outages." },
                     { title: "Controlled Environments Create Stability", desc: "Discipline and standardisation are the only way to achieve 99.9% uptime." }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="mt-1 flex-shrink-0"><ShieldCheck className="text-[#a56eff]" size={20} /></div>
                        <div>
                           <h4 className="font-bold text-white text-[18px]">{item.title}</h4>
                           <p className="text-white/60 text-[14px]">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </FadeIn>
            <FadeIn direction="right">
               <div className="p-10 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="text-xl font-medium leading-relaxed italic text-white/90 mb-8">
                     "C9 doesn't just support devices. We operate the systems that keep your business online. That is the difference between reactive IT and enterprise infrastructure stability."
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10" />
                     <div>
                        <div className="font-bold">Head of Infrastructure</div>
                        <div className="text-xs text-white/40">C9 Communications</div>
                     </div>
                  </div>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function RoutingSwitchingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionOperationalRisk />
      <SectionFailurePoints />
      <SectionHowWeOperate />
      <SectionStandardisation />
      <SectionPerformanceVisibility />
      <SectionBusinessImpact />
      <SectionWhyItMatters />

      <WpDefenseBanner 
        title={<>Network-Level <span className="text-[#5D00D6]">Protection.</span></>}
        description="Every connection is a potential entry point. We embed security directly into your network fabric with active threat monitoring and secure access."
        buttonText="View Security Solutions"
        href="https://c9defense.com.au/"
      />

      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="Understand Your Network Before It Fails"
          title="Request Infrastructure Assessment"
          description="Talk to a network architect to review your current setup and identify operational risks."
          formTitle="Request Network Assessment"
        />
      </section>
    </main>
  );
}
