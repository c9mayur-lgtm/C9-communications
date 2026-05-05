'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, ShieldAlert, Layers, Zap, CheckCircle2, Activity, RefreshCw, Search, Layout, Cpu, BarChart3, Box, Monitor, Maximize, CheckCircle } from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpDefenseBanner } from '@/components/wordpress/WpDefenseBanner';
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
   HERO VISUAL COMPONENT (Transition Engine)
   ───────────────────────────────────────────────────────── */
const TransitionEngineVisual = () => (
  <div className="bg-[#0c1024] rounded-lg p-10 border border-white/10 shadow-2xl relative overflow-hidden">
    {/* Grid Background */}
    <div className="absolute inset-0 opacity-10 pointer-events-none" 
      style={{ backgroundImage: 'radial-gradient(#5D00D6 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
    />
    
    <div className="flex items-center justify-between mb-10 relative z-10">
      <div className="flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
        <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">System Engine v2.4</span>
      </div>
      <RefreshCw size={20} className="text-[#a56eff] animate-spin-slow" />
    </div>

    <div className="space-y-8 relative z-10">
      {[
        { label: 'Environment Discovery', progress: 100, status: 'Audited', color: 'emerald' },
        { label: 'Architecture Mapping', progress: 100, status: 'Validated', color: 'emerald' },
        { label: 'Controlled Transition', progress: 48, status: 'In-Progress', color: 'purple' },
        { label: 'Optimization Loop', progress: 0, status: 'Queue', color: 'slate' }
      ].map((step, i) => (
        <div key={i} className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">{step.label}</span>
            <div className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${
              step.color === 'emerald' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
              step.color === 'purple' ? 'bg-[#5D00D6]/20 border-[#5D00D6]/30 text-[#a56eff]' :
              'bg-white/5 border-white/10 text-white/20'
            }`}>
              {step.status}
            </div>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${step.progress}%` }}
              transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "circOut" }}
              className={`h-full ${
                step.color === 'emerald' ? 'bg-emerald-400' : 
                step.color === 'purple' ? 'bg-gradient-to-r from-[#5D00D6] to-[#a56eff]' : 
                'bg-white/10'
              }`}
            />
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between relative z-10">
      <div className="flex flex-col">
        <span className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">Operational State</span>
        <div className="flex items-center gap-2">
          <Activity size={14} className="text-emerald-400" />
          <span className="text-[14px] font-bold text-white">Stability Confirmed</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-1">Risk Profile</span>
        <div className="text-[14px] font-bold text-emerald-400">Minimal</div>
      </div>
    </div>
  </div>
);

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
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center pb-16 lg:pb-24">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
               <RefreshCw size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Systems Modernisation & Execution</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Modernise Your Systems <br /><span className="text-[#5D00D6]">Without Disrupting Operations.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[620px] text-slate-700">
                Legacy infrastructure and fragmented systems create operational risk and technical debt. We provide the execution discipline to upgrade your environment while maintaining absolute stability and continuity.
             </p>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                   href="#consultation-section"
                   className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 whitespace-nowrap c9-button-label h-14 px-8 text-[15px] font-bold"
                >
                   Request Environment Assessment
                   
                </a>
                <a
                   href="#consultation-section"
                   className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full hover:bg-[#5D00D6] hover:text-white transition-all whitespace-nowrap bg-white c9-button-label h-14 px-8 text-[15px] font-bold"
                >
                   Review Your Current Setup
                </a>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block">
           <TransitionEngineVisual />
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
               <span className="c9-eyebrow mb-4">Operational Risk</span>
               <h2 className="c9-section-heading">When Systems Are Not Properly Modernised</h2>
               <p className="c9-body text-slate-600 mt-4">
                  Outdated infrastructure creates hidden inefficiencies and integration gaps. Without a structured modernisation path, your operational risk increases daily.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-3 gap-6">
            {[
               { icon: <ShieldAlert className="text-red-500" />, title: 'Increased Failure Rates', desc: 'Aging hardware and software reach the point of diminishing returns, leading to unpredictable downtime and performance degradation.' },
               { icon: <Zap className="text-amber-500" />, title: 'Operational Inefficiency', desc: 'Legacy systems slow down core workflows, creating friction for staff and preventing the adoption of automated improvements.' },
               { icon: <Layers className="text-[#5D00D6]" />, title: 'Integration Gaps', desc: 'Outdated platforms cannot communicate with modern cloud or security environments, creating dangerous technical silos.' }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white p-10 rounded-lg border border-slate-200 shadow-sm flex flex-col items-start h-full">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
                     {item.icon}
                  </div>
                  <h4 className="c9-card-title mb-4">{item.title}</h4>
                  <p className="text-slate-500 text-[15px] leading-relaxed">{item.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   3. WHERE ENVIRONMENTS STRUGGLE
   ───────────────────────────────────────────────────────── */
const SectionWhereEnvironmentsStruggle = () => (
   <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <h2 className="c9-section-heading mb-8">Where Complex Environments Struggle</h2>
               <p className="c9-body mb-10 text-slate-700">
                  Businesses with legacy systems often face a wall of complexity. Managing fragmented tools and multi-vendor dependencies consumes resource time that should be spent on growth.
               </p>
               <div className="space-y-6">
                  {[
                     { title: 'Legacy System Drift', desc: 'Software and OS versions fall out of support, creating compliance and security vulnerabilities.' },
                     { title: 'Multi-Vendor Chaos', desc: 'Disjointed systems from different providers that do not work as a unified ecosystem.' },
                     { title: 'Lack of Technical Control', desc: 'Complexity becomes so high that IT teams lose visibility into root causes of failure.' }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-5">
                        <div className="shrink-0 mt-1.5"><CheckCircle2 size={18} className="text-[#5D00D6]" /></div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-[17px] mb-2 leading-tight">{item.title}</h4>
                           <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </FadeIn>
            
            <div className="grid grid-cols-2 gap-6">
               {[
                  { label: 'Legacy Bloat', val: 'High', icon: <Box className="text-slate-400" size={18} /> },
                  { label: 'Vendor Debt', val: 'Extreme', icon: <Cpu className="text-[#5D00D6]" size={18} /> },
                  { label: 'Process Friction', val: 'Persistent', icon: <Activity className="text-amber-500" size={18} /> },
                  { label: 'Security Gaps', val: 'Active', icon: <ShieldAlert className="text-red-500" size={18} /> }
               ].map((pill, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="p-8 bg-slate-50 rounded-lg border border-slate-100 text-center flex flex-col items-center">
                     <div className="mb-4">{pill.icon}</div>
                     <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">{pill.label}</div>
                     <div className="text-[20px] font-bold text-slate-900">{pill.val}</div>
                  </FadeIn>
               ))}
            </div>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   4. HOW C9 EXECUTES MODERNISATION
   ───────────────────────────────────────────────────────── */
const SectionHowWeExecute = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">The C9 Execution System</span>
               <h2 className="c9-section-heading">Modernisation is an Execution Discipline</h2>
               <p className="c9-body text-slate-600 mt-4">
                  We don&apos;t just provide advice. We execute the transition. Our system is designed to improve your environment through controlled, phased implementations that prioritise your operational stability.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               { icon: <Search size={24} />, title: 'Deep Discovery', desc: 'We map every system dependency and operational workflow before a single change is made.' },
               { icon: <Layout size={24} />, title: 'Phased Roadmap', desc: 'Improvements are broken down into manageable phases to ensure zero impact on day-to-day work.' },
               { icon: <ShieldAlert size={24} />, title: 'Controlled Rollout', desc: 'New systems are validated in isolated environments before being introduced to your core network.' },
               { icon: <RefreshCw size={24} />, title: 'Iterative Refinement', desc: 'We continuously monitor the impact of changes, optimising performance as we modernise.' }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white p-9 rounded-lg border border-slate-200 shadow-sm flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#5D00D6]/5 text-[#5D00D6] rounded-xl flex items-center justify-center mb-8">
                     {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-[18px] mb-4">{item.title}</h4>
                  <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   5. TRANSITION MODEL
   ───────────────────────────────────────────────────────── */
const SectionTransitionModel = () => (
   <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4 text-center mx-auto">Execution Discipline</span>
               <h2 className="c9-section-heading">Transition-State Mapping & Execution Ownership</h2>
               <p className="c9-body text-slate-600 mt-4">
                  We utilize a structured transition model to ensure every system upgrade triggers a specific operational workflow with clear stability and resolution logic.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-4 gap-6">
            {[
               { step: '01', title: 'Environment Audit', desc: 'Identification of legacy technical debt and critical system vulnerabilities.' },
               { step: '02', title: 'Architecture Mapping', desc: 'Design of the modernized environment for maximum stability and performance.' },
               { step: '03', title: 'System Validation', desc: 'Rigorous testing of all changes within isolated, risk-free environments.' },
               { step: '04', title: 'Controlled Execution', desc: 'Phased deployment to ensure zero disruption to core business operations.' },
            ].map((s, i) => (
               <FadeIn key={i} delay={i * 0.1} className={`relative bg-white p-8 rounded-lg border shadow-sm  hover:border-[#5D00D6]/30 transition-all h-full ${i === 1 ? 'border-[#5D00D6]/40 shadow-[0_0_20px_rgba(93,0,214,0.1)]' : 'border-slate-200'}`}>
                  <div className="text-[40px] font-black text-slate-100 group-hover:text-[#5D00D6]/10 transition-colors absolute top-6 right-6 leading-none pointer-events-none">
                     {s.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#5D00D6] text-white flex items-center justify-center font-bold text-[16px] mb-6 relative z-10 shadow-md">
                     {i + 1}
                  </div>
                  <h4 className="c9-card-title mb-3 relative z-10">{s.title}</h4>
                  <p className="text-slate-500 text-[14px] leading-relaxed relative z-10">{s.desc}</p>
               </FadeIn>
            ))}
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
            <FadeIn className="bg-white p-12 rounded-lg border border-slate-200 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100%] -z-10" />
               <Monitor className="w-12 h-12 text-[#5D00D6] mb-8" />
               <h3 className="text-[24px] font-bold text-slate-900 mb-6">Integration With Your Environment</h3>
               <p className="text-slate-600 text-[16px] leading-relaxed mb-8">
                  Modernisation doesn&apos;t mean starting from zero. Our execution model integrates with your existing legacy environment, supporting hybrid setups to avoid unnecessary hardware replacement.
               </p>
               <div className="flex items-center gap-3 text-[#5D00D6] font-black text-[11px] uppercase tracking-[0.2em] bg-[#5D00D6]/5 w-fit px-4 py-2 rounded-full">
                  <CheckCircle size={14} /> Hybrid Support Active
               </div>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-[#0c1024] p-12 rounded-lg border border-white/10 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#5D00D6]/10 rounded-bl-[100%] -z-10" />
               <BarChart3 className="w-12 h-12 text-[#a56eff] mb-8" />
               <h3 className="text-[24px] font-bold text-white mb-6">Absolute Visibility & Control</h3>
               <p className="text-white/70 text-[16px] leading-relaxed mb-8">
                  We provide real-time tracking of all environment changes. Our monitoring systems ensure that system stability is maintained throughout the entire transition period.
               </p>
               <div className="flex items-center gap-3 text-[#a56eff] font-black text-[11px] uppercase tracking-[0.2em] bg-[#a56eff]/10 w-fit px-4 py-2 rounded-full">
                  <CheckCircle size={14} /> 24/7 Monitoring Enabled
               </div>
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
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4 text-center mx-auto">Commercial Outcomes</span>
               <h2 className="c9-section-heading">Business Impact of Systems Modernisation</h2>
               <p className="c9-body text-slate-600 mt-4">
                  Improving your core systems delivers measurable gains in operational efficiency, risk reduction, and business scalability.
               </p>
            </FadeIn>
         </div>

         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               { label: 'System Performance', val: '+65%' },
               { label: 'Operational Cost', val: '-30%' },
               { label: 'Risk Incident Rate', val: '-80%' },
               { label: 'Uptime Reliability', val: '99.9%' }
            ].map((stat, i) => (
               <FadeIn key={i} delay={i * 0.1} className="p-10 bg-slate-50 rounded-lg border border-slate-100 text-center hover:bg-white hover:shadow-xl hover:border-slate-200 transition-all duration-500">
                  <div className="text-[28px] font-bold text-[#5D00D6] mb-2">{stat.val}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   9. WHY THIS MATTERS (HIGH CONTRAST)
   ───────────────────────────────────────────────────────── */
const SectionWhyThisMatters = () => (
   <section className="py-24 lg:py-32 bg-[#0c1024] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#5D00D6]/10 to-transparent pointer-events-none" />
      
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <FadeIn direction="left">
               <span className="c9-eyebrow !text-white/60 mb-6">Critical Validation</span>
               <h2 className="c9-section-heading !text-white mb-8">Poorly Executed Change Creates <br /><span className="text-[#a56eff]">More Risk Than No Change.</span></h2>
               <p className="text-[19px] text-white/70 leading-relaxed mb-10 font-medium">
                  Most modernization projects fail because of poor execution, not poor strategy. At C9, we focus exclusively on the quality of delivery. We understand that stability is your highest priority, and our entire transition system is built to protect it.
               </p>
            </FadeIn>
            
            <div className="space-y-6">
               {[
                  { title: 'Execution Quality', desc: 'Determines whether a transition stabilizes or disrupts your business operations.' },
                  { title: 'Proven Stability', desc: 'We maintain 100% uptime through rigorous validation and phased rollouts.' }
               ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.15} className="p-8 bg-white/5 rounded-lg border border-white/10 hover:bg-[#5D00D6]/10 transition-all">
                     <div className="flex gap-6 items-start">
                        <div className="w-10 h-10 rounded-full bg-[#5D00D6]/20 flex items-center justify-center text-[#a56eff] shrink-0 mt-1">
                           <CheckCircle size={14} />
                        </div>
                        <div>
                           <h4 className="font-bold text-white text-[18px] mb-2">{item.title}</h4>
                           <p className="text-white/50 text-[14px] leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  </FadeIn>
               ))}
            </div>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function SystemsModernisationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionOperationalRisk />
      <SectionWhereEnvironmentsStruggle />
      <SectionHowWeExecute />
      <SectionTransitionModel />
      <SectionIntegrationAndControl />
      <SectionBusinessImpact />
      <SectionWhyThisMatters />

      <WpDefenseBanner 
        title={<>Managed Infrastructure <span className="text-[#a56eff]">Stability.</span></>}
        description="Pair your system modernisation with C9's managed infrastructure services for total operational control."
        buttonText="View Infrastructure Services"
        href="/managed-it/infrastructure"
      />

      <ContinueJourney 
        title="Modernise to Scale."
        description="Modern systems require modern support. Explore the managed services that keep your new environment running at peak performance."
        links={[
          { label: 'Helpdesk Support', path: '/managed-it/helpdesk-support' },
          { label: 'Cloud Services', path: '/managed-it/cloud-services' },
          { label: 'Network Solutions', path: '/managed-it/network-solutions' },
          { label: 'IT Outsourcing', path: '/managed-it/outsourcing' }
        ]}
      />

      <section id="consultation-section" className="bg-white border-t border-slate-100">
        <WpConsultationForm 
          showHeader={false}
          eyebrow="SYSTEMS MODERNISATION"
          title="Improve Your Environment Without Operational Risk"
          description="Request a systems environment assessment to identify legacy gaps and define your modernisation path."
          formTitle="Request Environment Assessment"
        />
      </section>
    </main>
  );
}
