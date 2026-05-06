'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Zap, Monitor, Lock, Cloud, PhoneCall, Users, ShieldAlert, Activity, Database, Server, Building, Network, Wrench, Clock, BarChart3, MessageSquare } from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { C9Button } from '@/components/design-system/C9Button';
import { handleCtaClick } from '@/lib/utils';

// Enterprise Components
import ITILServiceModel from '@/components/sections/managed-it/ITILServiceModel';
import NOCSOCMonitoring from '@/components/sections/managed-it/NOCSOCMonitoring';
import MultiSiteRetailCapability from '@/components/sections/managed-it/MultiSiteRetailCapability';
import EscalationModel from '@/components/sections/enterprise/EscalationModel';
import CapabilityPack from '@/components/sections/enterprise/CapabilityPack';

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
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center pb-16 lg:pb-24">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
               <Activity size={13} className="text-[#5D00D6]" aria-hidden="true" />
               <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Enterprise Infrastructure Operations</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Continuous Managed IT <br/>
                <span className="text-[#5D00D6]">Service Delivery Systems.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[580px] text-slate-800">
                Move beyond reactive support. C9 provides a structured, ITIL-aligned operational layer for your environment, delivering unified control across IT, Cloud, and Multi-site infrastructure.
             </p>
          </FadeIn>

          <FadeIn delay={0.22}>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                   'ITIL Service Model Tiers',
                   '24/7 NOC + SOC Monitoring',
                   'Centralised Control Plane',
                   'SLA-Backed Accountability'
                ].map((item) => (
                   <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={12} className="text-[#5D00D6] shrink-0" aria-hidden="true" />
                      <span className="text-slate-800 font-bold text-[16px]">{item}</span>
                   </div>
                ))}
             </div>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col sm:flex-row gap-4">
                <C9Button
                   size="lg"
                   className="rounded-none shadow-xl"
                   onClick={handleCtaClick}
                >
                   Request Delivery Briefing
                </C9Button>
                <C9Button
                   variant="outline"
                   size="lg"
                   className="rounded-none border-2 border-slate-200 text-slate-700 hover:border-[#5D00D6] hover:text-[#5D00D6]"
                   onClick={() => document.getElementById('service-model')?.scrollIntoView({ behavior: 'smooth' })}
                >
                   Review Operating Model
                </C9Button>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3]">
              <Image
                 src="/images/hero/enterprise.png"
                 alt="Enterprise IT Operations"
                 fill
                 className="object-cover duration-1000 group-hover:scale-105"
                 priority
                 fetchPriority="high"
                 sizes="(max-width: 1280px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-none p-5 border border-white/60 shadow-xl">
                 <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">Operational State</span>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-none bg-emerald-50 text-emerald-600 font-bold text-[10px] uppercase tracking-wider">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> SOC/NOC Active
                    </span>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                       <div className="text-[11px] font-bold text-slate-800 mb-0.5 uppercase tracking-widest">Visibility</div>
                       <div className="text-[16px] font-extrabold text-slate-900 leading-none">Full Access ✓</div>
                    </div>
                    <div>
                       <div className="text-[11px] font-bold text-slate-800 mb-0.5 uppercase tracking-widest">Accountability</div>
                       <div className="text-[16px] font-extrabold text-slate-900 leading-none">ITIL Enforced</div>
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
   SECTION 2 — ITIL SERVICE MODEL
   ───────────────────────────────────────────────────────── */
const SectionITIL = () => (
  <div id="service-model">
    <ITILServiceModel />
  </div>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — NOC + SOC MONITORING
   ───────────────────────────────────────────────────────── */
const SectionMonitoring = () => (
  <NOCSOCMonitoring />
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — ESCALATION & SLA
   ───────────────────────────────────────────────────────── */
const SectionEscalation = () => (
  <EscalationModel />
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — MULTI-SITE RETAIL
   ───────────────────────────────────────────────────────── */
const SectionRetail = () => (
  <MultiSiteRetailCapability />
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — CAPABILITY PACK
   ───────────────────────────────────────────────────────── */
const SectionResources = () => (
  <CapabilityPack />
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — PROBLEM & OUTCOMES (REFACTORED)
   ───────────────────────────────────────────────────────── */
const SectionOutcomes = () => (
   <section className="py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow !text-white/80 mb-4">Risk Mitigation Outcomes</span>
               <h2 className="c9-section-heading !text-white mb-8">Operational Maturity <br/>Resulting in Total Control.</h2>
               <div className="space-y-6">
                   {[
                      { title: 'Downtime Elimination', desc: 'Predictive monitoring reduces system failures by 65% through root-cause ownership.' },
                      { title: 'Security Governance', desc: 'Continuous compliance tracking and SOC response ensuring audit-ready infrastructure.' },
                      { title: 'Vendor Blame-Cycle Removal', desc: 'Single-point accountability for IT, Telco, and Cloud orchestration.' }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 p-6 bg-white/5 rounded-none border border-white/10 hover:bg-[#5D00D6]/20 transition-all">
                        <div className="w-10 h-10 rounded-none bg-[#5D00D6]/20 flex items-center justify-center text-[#a56eff] shrink-0">
                           <CheckCircle size={12} aria-hidden="true" />
                        </div>
                         <div>
                            <h4 className="font-bold text-white/95 mb-1">{item.title}</h4>
                            <p className="c9-body !text-white/95 !text-sm leading-relaxed">{item.desc}</p>
                         </div>
                     </div>
                   ))}
               </div>
            </FadeIn>
            
            <div className="grid grid-cols-2 gap-6">
                {[
                   { label: 'Avg P1 Response', val: '< 12m' },
                   { label: 'Uptime (Core)', val: '99.99%' },
                   { label: 'Security Score', val: 'A+' },
                   { label: 'SLA Compliance', val: '100%' }
                ].map((stat, i) => (
                   <FadeIn key={i} delay={i * 0.1} className="bg-white/5 border border-white/10 p-8 rounded-none text-center">
                      <div className="text-[32px] font-black text-[#a56eff] mb-2">{stat.val}</div>
                      <div className="c9-eyebrow !text-white/95">{stat.label}</div>
                   </FadeIn>
                ))}
            </div>
         </div>
      </div>
   </section>
);

import { ContinueJourney } from '@/components/sections/ContinueJourney';

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function ManagedITPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionITIL />
      <SectionMonitoring />
      
      <WpCaseStudies 
        eyebrow="PROVEN RESULTS"
        title="Managed Infrastructure Success"
        articles={[
          {
            tag: 'RETAIL GROUP',
            title: '85-Location Environment Takeover',
            videoText: 'Consolidation Result',
            desc: 'Consolidated 4 separate vendors into a single accountable path with 99.99% uptime.',
            img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
          },
          {
            tag: 'LOGISTICS',
            title: '1,200 Endpoint Governance',
            videoText: 'Operational Control',
            desc: 'Migration of 1,200 distributed endpoints with zero operational downtime.',
            img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800'
          }
        ]}
      />

      <SectionEscalation />
      <SectionRetail />
      <SectionResources />
      <SectionOutcomes />

      <ContinueJourney 
        title="Infrastructure Is One Piece. See the Full Stack."
        description="Managed IT works best when integrated with a secure, resilient environment. Explore the connected services that complete the picture."
        links={[
          { label: "Cybersecurity & Defense", path: "https://c9defense.com.au/" },
          { label: "Managed Cloud Services", path: "/managed-it/cloud-services" },
          { label: "Network Solutions", path: "/managed-it/network-solutions" },
          { label: "Helpdesk & Support", path: "/managed-it/helpdesk-support" }
        ]} 
      />

      <section id="consultation-section" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="TAKE CONTROL"
          title="Book Your Transition Assessment"
          description="We'll assess your current environment and show you exactly how we would take over — step-by-step, without disruption."
          formTitle="Start My Assessment"
        />
      </section>
    </main>
  );
}
