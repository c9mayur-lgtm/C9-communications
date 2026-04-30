'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Rocket, TrendingUp, ShieldCheck, 
  Layers, Zap, ArrowRight, CheckCircle2,
  Users, BarChart3, Globe
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpDefenseBanner } from "@/components/wordpress/WpDefenseBanner";

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
               <Cpu size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0">Infrastructure Modernization</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Digital Transformation — <span className="text-[#5D00D6]">Strategic Execution.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[620px]">
                Transformation isn&apos;t about software; it&apos;s about removing the technical debt that slows your growth. C9 provides the strategic engineering and operational discipline to modernize your stack for the next decade.
             </p>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col items-start gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                   <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
                   >
                      Request Transformation Audit
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                   </a>
                   <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-8 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white"
                   >
                      View Transformation Roadmap
                   </a>
                </div>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <div className="bg-slate-50 rounded-[48px] p-10 border border-slate-200 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-[#5D00D6] text-white flex items-center justify-center shadow-lg">
                    <Rocket size={24} />
                 </div>
                 <div>
                    <div className="font-bold text-[18px] text-[#0c1024]">Phase 1 Active</div>
                    <div className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Baseline Hardening</div>
                 </div>
              </div>
              <div className="space-y-4">
                 {[
                   { label: 'Cloud Migration', progress: 85 },
                   { label: 'Security Framework', progress: 100 },
                   { label: 'Process Automation', progress: 40 }
                 ].map((task, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                         <span className="text-[13px] font-bold text-slate-700">{task.label}</span>
                         <span className="text-[11px] font-bold text-[#5D00D6]">{task.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${task.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                            className="h-full bg-[#5D00D6]" 
                         />
                      </div>
                   </div>
                 ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />)}
                 </div>
                 <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">Australian<br />Strategy Team</span>
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — THE COST OF INERTIA
   ───────────────────────────────────────────────────────── */
const SectionCostOfInertia = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Strategic Realignment</span>
               <h2 className="c9-section-heading">Why Inertia is Your Greatest Risk</h2>
               <p className="c9-body text-slate-600 mt-4">
                  Legacy systems don&apos;t just cost money in maintenance; they cost opportunity. We help you transition from "keeping the lights on" to a scalable, automated infrastructure model.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {[
               {
                  icon: <Layers className="text-blue-500" />,
                  title: "Technical Debt",
                  desc: "Unresolved infrastructure gaps that increase operational costs and prevent the adoption of modern tools."
               },
               {
                  icon: <Zap className="text-amber-500" />,
                  title: "Operational Friction",
                  desc: "Manual processes and fragmented systems that slow down your workforce and frustrate your customers."
               },
               {
                  icon: <BarChart3 className="text-emerald-500" />,
                  title: "Data Silos",
                  desc: "Disconnected data sources that prevent executive visibility and accurate business forecasting."
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
   SECTION 3 — THE C9 TRANSFORMATION MODEL
   ───────────────────────────────────────────────────────── */
const SectionTransformationModel = () => (
   <section className="py-16 lg:py-24 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Execution Model</span>
               <h2 className="c9-section-heading mb-6">A Disciplined Path to <br /><span className="text-[#5D00D6]">Modern Infrastructure.</span></h2>
               <p className="c9-body mb-8">
                  Digital transformation isn&apos;t a project; it&apos;s a persistent operational state. We provide the engineering roadmap and the hands-on delivery to move your business through three key phases of maturity.
               </p>
               <div className="space-y-4">
                  {[
                     'Audit & Strategic Alignment',
                     'Security Baseline & Identity Hardening',
                     'Cloud-Native Workflow Integration',
                     'Continuous Operational Optimization'
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
                  <h3 className="text-xl font-bold mb-8">Transformation Outcomes</h3>
                  <div className="space-y-6">
                     {[
                        { title: '70% Reduction in Technical Debt', icon: <TrendingUp className="text-[#a56eff]" /> },
                        { title: '100% Essential Eight Alignment', icon: <ShieldCheck className="text-[#a56eff]" /> },
                        { title: 'Global Multi-Site Visibility', icon: <Globe className="text-[#a56eff]" /> }
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
   SECTION 4 — WHY IT MATTERS
   ───────────────────────────────────────────────────────── */
const SectionWhyItMatters = () => (
   <section className="py-12 lg:py-16 bg-[#0c1024] text-white relative overflow-hidden">
      <div className={C}>
         <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
               <h2 className="c9-section-heading !text-white mb-6">Why Strategic Transformation Matters</h2>
               <div className="space-y-6">
                  {[
                     { title: "Future-Proof Your Scalability", desc: "Build an infrastructure that grows with your business, not one that holds it back." },
                     { title: "Defensive Sovereignty", desc: "Embed security into the core of your workflows, rather than bolting it on later." },
                     { title: "Operational Velocity", desc: "Eliminate the friction that prevents your staff from doing their best work." }
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
                     "Transformation isn&apos;t a destination. It&apos;s about building the operational muscle to adapt to a changing digital landscape with confidence."
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10" />
                     <div>
                        <div className="font-bold text-white">Chief Strategy Officer</div>
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
export default function DigitalTransformationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionCostOfInertia />
      <SectionTransformationModel />
      <SectionWhyItMatters />

      <WpDefenseBanner 
        title={<>Strategic <span className="text-[#a56eff]">Governance.</span></>}
        description="Transformation requires active leadership and engineering discipline. We provide the vCIO and engineering resources to drive your success."
        buttonText="View Strategy Services"
        href="/managed-it/strategy-consulting"
      />

      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="Modernize Your Infrastructure"
          title="Request Transformation Audit"
          description="Talk to a senior strategy consultant to review your current technical debt and define a roadmap for modernization."
          formTitle="Request Transformation Audit"
        />
      </section>
    </main>
  );
}
