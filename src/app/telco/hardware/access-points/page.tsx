'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Radio, Users, Activity, CheckCircle, Network, Maximize, Server, BarChart3 } from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";
import { WirelessControlVisual } from './components/WirelessControlVisual';

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
   1. HERO (OUTCOME-DRIVEN)
   ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-12 pb-0 lg:pt-20 border-b border-slate-100">
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
               <span className="c9-eyebrow !mb-0">Controlled Wireless Infrastructure</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Reliable Wireless Performance <br/><span className="text-[#5D00D6]">Across Every Location.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[620px]">
                Wireless connectivity is an operational requirement. We build and manage structured wireless environments for stores, offices, and warehouses. Coverage is consistent. Performance is reliable.
             </p>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                   href="#consultation-section"
                   className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 whitespace-nowrap h-14 px-8 text-[15px] font-bold"
                >
                   Request Network Assessment
                   
                </a>
                <a
                   href="#consultation-section"
                   className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white h-14 px-8 text-[15px] font-bold"
                >
                   Review Wireless Setup
                </a>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <WirelessControlVisual />
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   2. OPERATIONAL RISK
   ───────────────────────────────────────────────────────── */
const SectionOperationalRisk = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mb-12">
            <FadeIn>
               <h2 className="c9-section-heading">When Wireless Infrastructure Is Not Properly Managed</h2>
               <p className="c9-body text-slate-600 mt-4">
                  Unmanaged wireless systems fail under load. Inconsistent coverage and dropped connections disrupt operations, slow workflows, and impact customer experience.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-2 gap-6">
            {[
               { icon: <AlertTriangle className="text-red-500" />, title: 'Inconsistent Coverage', desc: 'Dead zones across the floor disrupt active sessions and delay operational tasks.' },
               { title: 'Dropped Connections', desc: 'Staff lose connection when moving. Voice and video sessions drop instantly.', icon: <Activity className="text-amber-500" /> },
               { title: 'Poor Performance Under Load', desc: 'Congestion slows down applications. Systems freeze during peak operational hours.', icon: <Users className="text-[#5D00D6]" /> },
               { title: 'User Frustration', desc: 'Continuous connectivity issues damage staff morale and delay customer service.', icon: <Radio className="text-emerald-500" /> }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm flex items-start gap-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0">
                     {item.icon}
                  </div>
                  <div>
                     <h4 className="c9-card-title mb-2">{item.title}</h4>
                     <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   3. WHERE WIRELESS FAILS
   ───────────────────────────────────────────────────────── */
const SectionWhereWirelessFails = () => (
   <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Real-World Challenges</span>
               <h2 className="c9-section-heading">Where Wireless Fails</h2>
               <p className="c9-body text-slate-600 mt-4">
                  Generic setups fail in complex environments. Poor placement, interference, and lack of monitoring create systemic unreliability.
               </p>
            </FadeIn>
         </div>
         
         <div className="grid md:grid-cols-3 gap-6">
            {[
               { title: 'Retail Floors', desc: 'High device density overloads basic systems. POS terminals disconnect. Customers cannot access digital services.' },
               { title: 'Warehouses', desc: 'Large coverage areas and physical interference cause dead zones. Scanners drop connections. Operations stall.' },
               { title: 'Offices & Multi-Site', desc: 'Hybrid work environments demand reliable voice and video. Multi-site deployments suffer from inconsistent configurations.' }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                  <h4 className="text-[18px] font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-600 text-[14px] leading-relaxed">{item.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   4. HOW C9 OPERATES WIRELESS ENVIRONMENTS
   ───────────────────────────────────────────────────────── */
const SectionHowWeOperate = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Core Capability</span>
               <h2 className="c9-section-heading">How C9 Operates Wireless Environments</h2>
               <p className="c9-body text-slate-600 mt-4">
                  This is a controlled wireless system, not a device setup. We implement structured designs that coordinate across all locations.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               { title: 'Structured Design', desc: 'Engineered for the physical space. Placement mitigates interference.' },
               { title: 'Strategic Placement', desc: 'Access points positioned for maximum efficiency and seamless handoffs.' },
               { title: 'Continuous Monitoring', desc: 'Performance is tracked continuously to maintain baseline standards.' },
               { title: 'Proactive Resolution', desc: 'Issues are identified and resolved before they impact operations.' },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="relative bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/10 text-[#5D00D6] flex items-center justify-center font-bold text-[16px] mb-6">
                     0{i + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-3">{s.title}</h4>
                  <p className="text-slate-500 text-[14px] leading-relaxed">{s.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   5. COVERAGE & PERFORMANCE MODEL
   ───────────────────────────────────────────────────────── */
const SectionCoverageModel = () => (
   <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Precision Engineering</span>
               <h2 className="c9-section-heading">Coverage & Performance Model</h2>
               <p className="c9-body text-slate-600 mb-6">
                  Coverage planning dictates reliability. Without control, performance degrades rapidly under load. We model your physical environment to ensure consistent signal penetration.
               </p>
               <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                     <CheckCircle className="text-[#5D00D6] shrink-0 mt-1" size={18} />
                     <span className="text-slate-700 font-medium">Heat-mapping validates coverage density.</span>
                  </li>
                  <li className="flex items-start gap-3">
                     <CheckCircle className="text-[#5D00D6] shrink-0 mt-1" size={18} />
                     <span className="text-slate-700 font-medium">Spectrum analysis identifies and avoids interference.</span>
                  </li>
                  <li className="flex items-start gap-3">
                     <CheckCircle className="text-[#5D00D6] shrink-0 mt-1" size={18} />
                     <span className="text-slate-700 font-medium">Standardized configuration across all organizational sites.</span>
                  </li>
               </ul>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
               <div className="bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-200">
                  <Maximize className="text-[#5D00D6] w-12 h-12 mb-6" />
                  <h3 className="text-[24px] font-bold text-slate-900 mb-4">Consistency Across Sites</h3>
                  <p className="text-slate-600 text-[16px] leading-relaxed">
                     A unified performance model guarantees that a user in a regional branch experiences the exact same reliability as a user at headquarters.
                  </p>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   6 & 7. INTEGRATION + VISIBILITY & CONTROL
   ───────────────────────────────────────────────────────── */
const SectionIntegrationAndControl = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn className="bg-white p-10 md:p-12 rounded-[40px] border border-slate-200">
               <Server className="w-10 h-10 text-[#5D00D6] mb-6" />
               <h3 className="text-[24px] font-bold text-slate-900 mb-4">Integration with Network Infrastructure</h3>
               <p className="text-slate-600 text-[16px] leading-relaxed mb-6">
                  Wireless is an extension of the wired network. We align wireless access with core routing and switching architecture.
               </p>
               <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 font-medium"><div className="w-1.5 h-1.5 bg-[#5D00D6] rounded-full" /> Full support for existing environments.</li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium"><div className="w-1.5 h-1.5 bg-[#5D00D6] rounded-full" /> Seamless integration into broader systems.</li>
               </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-[#0c1024] p-10 md:p-12 rounded-[40px] border border-white/10 text-white">
               <BarChart3 className="w-10 h-10 text-[#a56eff] mb-6" />
               <h3 className="text-[24px] font-bold text-white mb-4">Visibility & Control</h3>
               <p className="text-white/70 text-[16px] leading-relaxed mb-6">
                  You cannot fix what you cannot see. We maintain absolute visibility over the wireless network.
               </p>
               <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white/90 font-medium"><div className="w-1.5 h-1.5 bg-[#a56eff] rounded-full" /> Active monitoring of performance thresholds.</li>
                  <li className="flex items-center gap-3 text-white/90 font-medium"><div className="w-1.5 h-1.5 bg-[#a56eff] rounded-full" /> Immediate detection of degraded signals.</li>
                  <li className="flex items-center gap-3 text-white/90 font-medium"><div className="w-1.5 h-1.5 bg-[#a56eff] rounded-full" /> Centralised control enforcing global policy.</li>
               </ul>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   8. BUSINESS IMPACT
   ───────────────────────────────────────────────────────── */
const SectionBusinessImpact = () => (
   <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Commercial Outcome</span>
               <h2 className="c9-section-heading">Business Impact</h2>
               <p className="c9-body text-slate-600 mt-4">
                  Controlled wireless infrastructure protects output. Reliable systems drive efficiency.
               </p>
            </FadeIn>
         </div>
         <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
               { title: 'Staff Productivity', desc: 'No lost time searching for signals.' },
               { title: 'System Reliability', desc: 'Critical tools stay connected.' },
               { title: 'Customer Experience', desc: 'Transactions process immediately.' },
               { title: 'Operational Efficiency', desc: 'Workflows remain unbroken.' }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1}>
                  <div className="p-8 bg-slate-50 rounded-[24px] h-full border border-slate-100">
                     <h4 className="text-[18px] font-bold mb-3 text-slate-900">{item.title}</h4>
                     <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   9. WHY THIS MATTERS
   ───────────────────────────────────────────────────────── */
const SectionWhyItMatters = () => (
   <section className="py-16 lg:py-24 bg-[#0c1024] text-white relative overflow-hidden">
      <div className={C}>
         <div className="max-w-3xl">
            <FadeIn direction="left">
               <h2 className="c9-section-heading !text-white mb-6">Poor Wireless Performance Disrupts Daily Operations</h2>
               <p className="text-white/80 text-[18px] leading-relaxed mb-8">
                  Wireless issues are frequent and costly. Unmanaged environments create systemic inconsistency. Controlled systems ensure reliability across every square foot of your operation.
               </p>
               <div className="space-y-4">
                  <div className="flex items-center gap-3">
                     <CheckCircle className="text-[#a56eff]" size={20} />
                     <span className="text-white font-medium">Standardize performance metrics.</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <CheckCircle className="text-[#a56eff]" size={20} />
                     <span className="text-white font-medium">Eliminate shadow zones.</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <CheckCircle className="text-[#a56eff]" size={20} />
                     <span className="text-white font-medium">Protect active sessions.</span>
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
export default function AccessPointsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionOperationalRisk />
      <SectionWhereWirelessFails />
      <SectionHowWeOperate />
      <SectionCoverageModel />
      <SectionIntegrationAndControl />
      <SectionBusinessImpact />
      <SectionWhyItMatters />

      <WpDefenseBanner 
        title={<>Network <span className="text-[#a56eff]">Foundation.</span></>}
        description="Wireless is only as robust as the wired network behind it. Ensure total stability."
        buttonText="View Routers & Switches"
        href="/telco/hardware/routers"
      />

      <section id="consultation-section" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="TAKE CONTROL"
          title="Improve Wireless Performance Before It Impacts Operations"
          description="Talk to an Infrastructure Specialist to review your current setup."
          formTitle="Request Network Assessment"
        />
      </section>
    </main>
  );
}
