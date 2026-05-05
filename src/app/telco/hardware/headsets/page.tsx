'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Zap, Headphones, Volume2, Mic2, Activity, AlertTriangle, RefreshCw, BarChart3, Users, MessageSquare, HeadphonesIcon } from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";
import { AcousticPerformanceVisual } from './components/AcousticPerformanceVisual';

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
               <Headphones size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0">Acoustic Performance Hardware</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Absolute Clarity <span className="text-[#5D00D6]">for the Modern Workforce.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[620px]">
                In noisy open-plan offices and remote environments, acoustic isolation is a productivity requirement. C9 provides professional headsets that combine active noise cancellation with all-day comfort and multi-device connectivity.
             </p>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col items-start gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                   <a
                      href="#consultation-section"
                      className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 whitespace-nowrap h-14 px-8 text-[15px] font-bold"
                   >
                      Request Acoustic Review
                      
                   </a>
                   <a
                      href="#consultation-section"
                      className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white h-14 px-8 text-[15px] font-bold"
                   >
                      View Headset Guide
                   </a>
                </div>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <AcousticPerformanceVisual />
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — PRODUCTIVITY IMPACT
   ───────────────────────────────────────────────────────── */
const SectionProductivityImpact = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Focus & Isolation</span>
               <h2 className="c9-section-heading">The ROI of Acoustic Quality</h2>
               <p className="c9-body text-slate-600 mt-4">
                  Communication failure often starts with background noise and poor mic quality. Professional headsets eliminate these variables to ensure focus and absolute call clarity.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               {
                  icon: <Activity className="text-[#5D00D6]" />,
                  title: "Active Noise Control",
                  desc: "Cancelling out the distractions of open offices and home environments to maintain staff focus."
               },
               {
                  icon: <Mic2 className="text-emerald-500" />,
                  title: "Mic Isolation",
                  desc: "Advanced microphone arrays that focus on the user's voice while filtering out surrounding chatter."
               },
               {
                  icon: <RefreshCw className="text-[#5D00D6]" />,
                  title: "Multi-Device Sync",
                  desc: "Seamlessly switching between PC, mobile, and desk phones without manual reconnection."
               },
               {
                  icon: <ShieldCheck className="text-[#5D00D6]" />,
                  title: "Health & Comfort",
                  desc: "Ergonomic designs and acoustic shock protection that safeguard long-term staff wellbeing."
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
   SECTION 4 — USAGE MODES
   ───────────────────────────────────────────────────────── */
const SectionUsageModes = () => (
   <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Enterprise Standards</span>
               <h2 className="c9-section-heading">Solutions for Every Workflow</h2>
               <p className="c9-body text-slate-600">
                  Different roles require different acoustic profiles. We standardize your hardware fleet across key operational modes.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {[
               { title: 'Customer Experience', desc: 'Lightweight, durable designs for high-volume call environments with superior mic isolation.', icon: <MessageSquare /> },
               { title: 'Executive Mobility', desc: 'Premium wireless designs with long battery life and multi-device support for leaders on the move.', icon: <Zap /> },
               { title: 'Focus Work', desc: 'Over-ear isolation and active noise cancellation for deep work in noisy open-plan offices.', icon: <HeadphonesIcon /> },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="relative bg-slate-50 p-10 rounded-[40px] border border-slate-100 shadow-sm hover:border-[#5D00D6]/30 transition-all text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#5D00D6]/5 text-[#5D00D6] flex items-center justify-center mb-8 mx-auto">
                     {s.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-xl mb-4">{s.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function HeadsetsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionProductivityImpact />
      <SectionUsageModes />

      <WpDefenseBanner 
        title={<>Managed <span className="text-[#a56eff]">Acoustics.</span></>}
        description="Headsets are the bridge between your staff and your customers. We ensure that bridge is crystal clear and enterprise-grade."
        buttonText="Review Voice Hardware"
        href="/telco/hardware/handsets"
      />

      <section id="consultation-section" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="Eliminate Background Noise"
          title="Request Acoustic Review"
          description="Talk to a specialist to audit your current headset fleet and identify opportunities for productivity gains."
          formTitle="Request Acoustic Review"
        />
      </section>
    </main>
  );
}
