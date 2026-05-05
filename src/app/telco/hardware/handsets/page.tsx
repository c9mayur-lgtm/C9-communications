'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Zap, Monitor, Activity, Users, Phone, Volume2, Mic, Settings, AlertTriangle, RefreshCw, BarChart3, LayoutGrid, Layers, Database } from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";
import { VoiceHardwareVisual } from './components/VoiceHardwareVisual';

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
               <Phone size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0">Enterprise Voice Hardware</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Professional Voice Terminals <span className="text-[#5D00D6]">for Every User.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[620px]">
                Quality voice communication begins at the handset. C9 provides enterprise-grade voice hardware that combines acoustic excellence with centralized management and seamless system integration.
             </p>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col items-start gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                   <a
                      href="#consultation-section"
                      className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 whitespace-nowrap h-14 px-8 text-[15px] font-bold"
                   >
                      Request Hardware Audit
                      
                   </a>
                   <a
                      href="#consultation-section"
                      className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white h-14 px-8 text-[15px] font-bold"
                   >
                      View Solutions
                   </a>
                </div>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <VoiceHardwareVisual />
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — WHY IT MATTERS
   ───────────────────────────────────────────────────────── */
const SectionWhyItMatters = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Acoustic Excellence</span>
               <h2 className="c9-section-heading">Why Handset Quality Matters</h2>
               <p className="c9-body text-slate-600 mt-4">
                  Voice communication is only as good as the hardware at either end. Poor quality hardware leads to fatigue, miscommunication, and degraded customer experience.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               {
                  icon: <Volume2 className="text-[#5D00D6]" />,
                  title: "HD Audio Clarity",
                  desc: "Wideband audio codecs that ensure natural-sounding voice and eliminate listener fatigue."
               },
               {
                  icon: <Activity className="text-emerald-500" />,
                  title: "User Adoption",
                  desc: "Intuitive interfaces and high-quality materials that encourage staff to use the provided tools."
               },
               {
                  icon: <Settings className="text-[#5D00D6]" />,
                  title: "Centralised Control",
                  desc: "Mass deployment and firmware updates managed remotely, ensuring zero desk-side visits."
               },
               {
                  icon: <ShieldCheck className="text-[#5D00D6]" />,
                  title: "Secure Identity",
                  desc: "Encrypted voice streams and secure login protocols that protect corporate communication."
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
               <span className="c9-eyebrow mb-4">Operational Efficiency</span>
               <h2 className="c9-section-heading">Managed Voice Deployment</h2>
               <p className="c9-body mt-4">
                  We treat handsets as managed endpoints. Every device is provisioned, updated, and monitored as part of your unified communication infrastructure.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-4 gap-5">
            {[
               { title: 'Zero-Touch Setup', desc: 'Devices are pre-configured and automatically provisioned when plugged in.' },
               { title: 'Remote Management', desc: 'Centralized control for directory sync, button layouts, and firmware.' },
               { title: 'Performance Oversight', desc: 'Monitoring call quality (MOS) directly from the handset endpoint.' },
               { title: 'Seamless Swapping', desc: 'Rapid replacement protocols that restore user profiles in minutes.' },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className="relative bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-[#5D00D6]/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#5D00D6] text-white flex items-center justify-center font-bold text-[16px] mb-6 relative z-10 shadow-md">
                     {i + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-3 relative z-10 text-[15px]">{s.title}</h4>
                  <p className="text-slate-500 text-[13px] leading-relaxed relative z-10">{s.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function HandsetsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionWhyItMatters />
      <SectionHowWeOperate />

      <WpDefenseBanner 
        title={<>Integrated <span className="text-[#a56eff]">Voice.</span></>}
        description="Hardware is only one part of the equation. We provide the phone systems and connectivity that power these enterprise terminals."
        buttonText="View Phone Systems"
        href="/telco/phone-system"
      />

      <section id="consultation-section" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="Modernise Your Desk Experience"
          title="Request Hardware Audit"
          description="Talk to a voice specialist to review your current handset environment and upgrade to professional terminals."
          formTitle="Request Hardware Audit"
        />
      </section>
    </main>
  );
}
