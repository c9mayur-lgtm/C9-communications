'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, ShieldCheck, Zap, 
  Monitor, Activity, Users, 
  Network, Wifi, Radio, Lock,
  AlertTriangle, RefreshCw, BarChart3,
  LayoutGrid, Layers, Database
} from 'lucide-react';
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
               <Wifi size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0">Managed Wireless Operations</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Pervasive Wireless <span className="text-[#5D00D6]">Across Your Enterprise.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[620px]">
                Wireless is no longer a convenience—it is the primary connection for your workforce. C9 provides high-density, secure, and managed wireless infrastructure that ensures seamless roaming and absolute reliability.
             </p>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col items-start gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                   <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
                   >
                      Request Wireless Assessment
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                   </a>
                   <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-8 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white"
                   >
                      Review Network Design
                   </a>
                </div>
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
   SECTION 2 — OPERATIONAL RISK
   ───────────────────────────────────────────────────────── */
const SectionOperationalRisk = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Wireless Stability</span>
               <h2 className="c9-section-heading">When Wireless Fails, Productivity Halts</h2>
               <p className="c9-body text-slate-600 mt-4">
                  Dead zones, dropped calls, and slow speeds are not just annoyances—they are operational failures. We eliminate the volatility of unmanaged wireless environments.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               {
                  icon: <AlertTriangle className="text-red-500" />,
                  title: "Dropped Connections",
                  desc: "Failed handoffs between access points that disrupt voice calls and video meetings."
               },
               {
                  icon: <Radio className="text-amber-500" />,
                  title: "RF Interference",
                  desc: "Unoptimized radio environments that cause data packet loss and slow application performance."
               },
               {
                  icon: <Users className="text-[#5D00D6]" />,
                  title: "High Density Failure",
                  desc: "Wireless saturation in common areas or meeting rooms that prevents staff from transacting."
               },
               {
                  icon: <Lock className="text-emerald-500" />,
                  title: "Security Gaps",
                  desc: "Unmanaged guest networks and weak encryption that create entry points for lateral threats."
               }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                     {item.icon}
                  </div>
                  <h4 className="c9-card-title mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — HOW C9 OPERATES THIS LAYER
   ───────────────────────────────────────────────────────── */
const SectionHowWeOperate = () => (
   <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Operational Excellence</span>
               <h2 className="c9-section-heading">How C9 Manages the Wireless Layer</h2>
               <p className="c9-body text-slate-600">
                  We don't just hang access points. We operate a coordinated wireless fabric that optimizes itself in real-time to meet user demand.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-4 gap-5">
            {[
               { title: 'Predictive Design', desc: 'Heat-mapping and spectrum analysis to ensure 100% coverage.' },
               { title: 'Radio Optimization', desc: 'Automatic channel and power tuning to eliminate interference.' },
               { title: 'Secure Isolation', desc: 'Segmented traffic for guests, staff, and IoT devices.' },
               { title: 'Performance Oversight', desc: '24/7 monitoring of throughput and client health.' },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="relative bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm group hover:border-[#5D00D6]/30 transition-all">
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
   SECTION 8 — BUSINESS IMPACT
   ───────────────────────────────────────────────────────── */
const SectionBusinessImpact = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Commercial Outcome</span>
               <h2 className="c9-section-heading">The ROI of Pervasive Wireless</h2>
               <p className="c9-body text-slate-600 mt-4">
                  Reliable wireless is the foundation of the modern mobile workforce. When it works perfectly, your business moves faster.
               </p>
            </FadeIn>
         </div>
         <div className="grid md:grid-cols-3 gap-6">
            {[
               { title: 'Workforce Mobility', desc: 'Staff can transition seamlessly between meeting rooms and desks without losing connection.', icon: <Users /> },
               { title: 'Operational Speed', desc: 'Eliminating the latency that slows down cloud applications and communication tools.', icon: <Zap /> },
               { title: 'Security Confidence', desc: 'Enforcing enterprise-grade encryption and access control across all wireless touchpoints.', icon: <ShieldCheck /> }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="p-8 bg-white rounded-[32px] border border-slate-200 shadow-sm text-center">
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
               <h2 className="c9-section-heading !text-white mb-6">Why Wireless Control Matters</h2>
               <div className="space-y-6">
                  {[
                     { title: "Connectivity is Non-Negotiable", desc: "Every dropped connection is a moment of lost productivity and frustration." },
                     { title: "Unmanaged Radio Creates Risk", desc: "Interference and congestion are the silent killers of enterprise performance." },
                     { title: "Managed Fabric Creates Stability", desc: "A coordinated wireless system is the only way to support a modern mobile workforce." }
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
               <div className="p-10 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="text-xl font-medium leading-relaxed italic text-white/90 mb-8">
                     "We don't just provide Wi-Fi. We provide the pervasive connectivity that allows your staff to work anywhere, on any device, with absolute confidence."
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10" />
                     <div>
                        <div className="font-bold text-white">Head of Wireless Ops</div>
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
export default function AccessPointsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionOperationalRisk />
      <SectionHowWeOperate />
      <SectionBusinessImpact />
      <SectionWhyItMatters />

      <WpDefenseBanner 
        title={<>Seamless <span className="text-[#a56eff]">Connectivity.</span></>}
        description="Wireless is only as good as the network behind it. We integrate your wireless layer with core infrastructure for end-to-end stability."
        buttonText="View Routing & Switching"
        href="/telco/hardware/routers"
      />

      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="Eliminate Dead Zones and Drops"
          title="Request Wireless Assessment"
          description="Talk to a network architect to review your current wireless environment and optimize for performance."
          formTitle="Request Wireless Assessment"
        />
      </section>
    </main>
  );
}
