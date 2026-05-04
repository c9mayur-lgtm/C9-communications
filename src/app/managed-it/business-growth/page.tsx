'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Rocket, BarChart3, Globe, 
  Layers, Zap, ArrowRight, CheckCircle2,
  Users, Target, Lightbulb
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";
import { ContinueJourney } from '@/components/sections/ContinueJourney';

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
               <TrendingUp size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0">Strategic Scalability</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Business Growth — <span className="text-[#5D00D6]">Enabled by Engineering.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[620px]">
                Technology should be the engine of your growth, not the anchor. C9 provides the infrastructure, strategy, and operational discipline to ensure your technology stack scales as fast as your ambitions.
             </p>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col items-start gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                   <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
                   >
                      Request Growth Audit
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                   </a>
                   <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-8 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white"
                   >
                      View Scaling Roadmap
                   </a>
                </div>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <div className="bg-[#0c1024] rounded-[48px] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-[#5D00D6] text-white flex items-center justify-center shadow-lg">
                    <Rocket size={24} />
                 </div>
                 <div>
                    <div className="font-bold text-[18px]">Scaling Mode</div>
                    <div className="text-[10px] text-white/40 uppercase font-black tracking-widest mt-0.5">Performance Optimised</div>
                 </div>
              </div>
              <div className="space-y-6">
                 <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-3">
                       <span className="text-[13px] font-bold">Operational Velocity</span>
                       <span className="text-[#a56eff] font-bold">+45%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                       <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-[#5D00D6]" 
                       />
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                       <div className="text-[20px] font-black mb-0.5">70%</div>
                       <div className="text-[9px] text-white/40 uppercase font-bold tracking-widest">Efficiency Gain</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                       <div className="text-[20px] font-black mb-0.5">3x</div>
                       <div className="text-[9px] text-white/40 uppercase font-bold tracking-widest">SLA Speed</div>
                    </div>
                 </div>
              </div>
              <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                 <div className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em]">C9 Growth Engine</div>
                 <Globe size={16} className="text-white/20" />
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — THE GROWTH GAP
   ───────────────────────────────────────────────────────── */
const SectionGrowthGap = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Strategic Barriers</span>
               <h2 className="c9-section-heading">Why Businesses Stall</h2>
               <p className="c9-body text-slate-600 mt-4">
                  Growth creates complexity. Without a managed infrastructure foundation, that complexity turns into friction — slowing down your staff, frustrating your customers, and draining your capital.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {[
               {
                  icon: <Layers className="text-blue-500" />,
                  title: "Infrastructure Debt",
                  desc: "Legacy systems that can&apos;t handle increased volume, leading to outages and lost revenue during peak periods."
               },
               {
                  icon: <Zap className="text-amber-500" />,
                  title: "Process Friction",
                  desc: "Manual workflows and disconnected systems that require more staff to manage as you scale."
               },
               {
                  icon: <Target className="text-emerald-500" />,
                  title: "Strategic Blindness",
                  desc: "Lack of real-time visibility into operational performance, making it impossible to make data-driven growth decisions."
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
   SECTION 3 — OPERATIONAL CAPABILITY
   ───────────────────────────────────────────────────────── */
const SectionCapability = () => (
   <section className="py-16 lg:py-24 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">The Growth Framework</span>
               <h2 className="c9-section-heading mb-6">Engineering for <br /><span className="text-[#5D00D6]">Infinite Scalability.</span></h2>
               <p className="c9-body mb-8">
                  We don&apos;t just manage your IT; we architect your expansion. By standardising your infrastructure and automating core workflows, we remove the technical ceiling from your business growth.
               </p>
               <div className="space-y-4">
                  {[
                     'Rapid multi-site deployment models',
                     'vCIO-led growth roadmapping',
                     'Cloud-native workflow automation',
                     'Performance-based infrastructure tuning'
                  ].map((text, i) => (
                     <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-emerald-500" />
                        <span className="text-slate-700 font-medium text-[15px]">{text}</span>
                     </div>
                  ))}
               </div>
            </FadeIn>
            <FadeIn direction="right">
               <div className="bg-[#0c1024] p-10 rounded-[48px] text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#5D00D6]/20 rounded-bl-full" />
                  <h3 className="text-xl font-bold mb-8">Expansion Outcomes</h3>
                  <div className="space-y-6">
                     {[
                        { title: 'New Site Deployment in < 48 Hours', icon: <Rocket className="text-[#a56eff]" /> },
                        { title: 'Zero-Downtime Migration Paths', icon: <Zap className="text-[#a56eff]" /> },
                        { title: '100% Visibility Across Locations', icon: <Globe className="text-[#a56eff]" /> }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                           <div className="shrink-0">{item.icon}</div>
                           <div className="font-bold text-[15px]">{item.title}</div>
                        </div>
                     ))}
                  </div>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — STRATEGIC ALIGNMENT
   ───────────────────────────────────────────────────────── */
const SectionAlignment = () => (
   <section className="py-12 lg:py-16 bg-[#0c1024] text-white relative overflow-hidden">
      <div className={C}>
         <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
               <h2 className="c9-section-heading !text-white mb-6">Why Managed Growth Matters</h2>
               <div className="space-y-6">
                  {[
                     { title: "Capital Efficiency", desc: "Predictable, OpEx-based scaling that preserves your capital for core business activities." },
                     { title: "Operational Velocity", desc: "A technology stack that moves as fast as your team, not one that requires constant troubleshooting." },
                     { title: "Defensive Sovereignty", desc: "Scaling safely with security and compliance embedded into every new site and workflow." }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="mt-1 flex-shrink-0"><Lightbulb className="text-[#a56eff]" size={20} /></div>
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
                     "Growth isn&apos;t just about getting bigger. It&apos;s about getting better. We ensure your technology facilitates both."
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10" />
                     <div>
                        <div className="font-bold text-white">Chief Growth Officer</div>
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
export default function GrowthPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionGrowthGap />
      <SectionCapability />
      <SectionAlignment />

      <WpDefenseBanner 
        title={<>Strategic <span className="text-[#a56eff]">Governance.</span></>}
        description="Growth requires active leadership and engineering discipline. We provide the vCIO and engineering resources to drive your success."
        buttonText="View Strategy Services"
        href="/managed-it/strategy-consulting"
      />

      <ContinueJourney 
        title="Grow Without the Technical Anchor."
        description="Scalability is built on a stable foundation. Discover the services that handle the complexity of growth for you."
        links={[
          { label: 'Strategy & Consulting', path: '/managed-it/strategy-consulting' },
          { label: 'Network Solutions', path: '/managed-it/network-solutions' },
          { label: 'Cloud Services', path: '/managed-it/cloud-services' },
          { label: 'IT Outsourcing', path: '/managed-it/outsourcing' }
        ]}
      />

      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="Accelerate Your Growth"
          title="Request Growth Audit"
          description="Talk to a growth strategist to review your current technical bottlenecks and define a roadmap for scalability."
          formTitle="Request Growth Audit"
        />
      </section>
    </main>
  );
}
