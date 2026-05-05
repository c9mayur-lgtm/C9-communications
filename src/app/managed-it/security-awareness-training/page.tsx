'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, Mail, Target, Users, Zap, CheckCircle2, Lock, AlertTriangle, BarChart3 } from 'lucide-react';
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
               <GraduationCap size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0">Cyber Hygiene & Culture</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Security Awareness — <span className="text-[#5D00D6]">The Human Firewall.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[620px]">
                90% of data breaches start with a human error. C9 provides a fully managed security awareness platform that transforms your staff from a liability into your strongest defensive asset through phishing simulations and automated training.
             </p>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col items-start gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                   <a
                      href="#consultation-section"
                      className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 whitespace-nowrap h-14 px-8 text-[15px] font-bold"
                   >
                      Request Training Demo
                      
                   </a>
                   <a
                      href="#consultation-section"
                      className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white h-14 px-8 text-[15px] font-bold"
                   >
                      View Risk Assessment
                   </a>
                </div>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <div className="bg-[#0c1024] rounded-lg p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-10">
                 <div className="flex items-center gap-3">
                    <Target className="text-[#a56eff]" size={24} />
                    <span className="font-bold text-[18px]">Simulation Active</span>
                 </div>
                 <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-500/30">
                    Live Dashboard
                 </div>
              </div>
              <div className="space-y-6">
                 <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-3">
                       <span className="text-[13px] font-bold">Phish Prone Percentage</span>
                       <span className="text-[#a56eff] font-bold">4.2%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                       <motion.div 
                          initial={{ width: '40%' }}
                          whileInView={{ width: '4.2%' }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-emerald-500" 
                       />
                    </div>
                    <div className="mt-2 text-[10px] text-white/40 uppercase font-black tracking-widest text-right">Industry Avg: 32.4%</div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                       <div className="text-[20px] font-black mb-0.5 text-white">98%</div>
                       <div className="text-[9px] text-white/40 uppercase font-bold tracking-widest">Training Completion</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                       <div className="text-[20px] font-black mb-0.5 text-white">12</div>
                       <div className="text-[9px] text-white/40 uppercase font-bold tracking-widest">Simulations/Year</div>
                    </div>
                 </div>
              </div>
              <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                 <div className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em]">C9 Security Academy</div>
                 <BarChart3 size={16} className="text-white/20" />
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — WHY IT MATTERS
   ───────────────────────────────────────────────────────── */
const SectionWhyItMatters = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Risk Exposure</span>
               <h2 className="c9-section-heading">The Human Vulnerability</h2>
               <p className="c9-body text-slate-600 mt-4">
                  Technological defenses are only half the battle. If a staff member clicks a malicious link or discloses credentials, even the best firewall can be bypassed. We build a culture of security.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {[
               {
                  icon: <Mail className="text-blue-500" />,
                  title: "Phishing Simulations",
                  desc: "Baseline your risk with controlled, real-world phishing emails. Identify vulnerable users and provide immediate, relevant training."
               },
               {
                  icon: <GraduationCap className="text-[#5D00D6]" />,
                  title: "Continuous Education",
                  desc: "Bite-sized, engaging training modules that keep security top-of-mind without disrupting the workday."
               },
               {
                  icon: <ShieldCheck className="text-emerald-500" />,
                  title: "Compliance Readiness",
                  desc: "Automatically track and report on training completion for ISO 27001, Essential Eight, and insurance requirements."
               }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-xl transition-all">
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
   SECTION 3 — MANAGED SERVICE
   ───────────────────────────────────────────────────────── */
const SectionManagedService = () => (
   <section className="py-16 lg:py-24 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Hands-Off Security</span>
               <h2 className="c9-section-heading mb-6">We Manage the Platform. <br /><span className="text-[#5D00D6]">You Get the Results.</span></h2>
               <p className="c9-body mb-8">
                  Most training programs fail because they are "set and forget." C9 actively manages your security awareness program, adjusting simulation difficulty and training frequency based on your team&apos;s performance.
               </p>
               <div className="space-y-4">
                  {[
                     'Fully outsourced campaign management',
                     'Executive-level risk reporting',
                     'Custom phishing template development',
                     'Integration with Active Directory / M365'
                  ].map((text, i) => (
                     <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-emerald-500" />
                        <span className="text-slate-700 font-medium text-[15px]">{text}</span>
                     </div>
                  ))}
               </div>
            </FadeIn>
            <FadeIn direction="right">
               <div className="bg-slate-50 p-10 rounded-lg border border-slate-100">
                  <h3 className="text-xl font-bold text-[#0c1024] mb-8">Program Roadmap</h3>
                  <div className="space-y-6">
                     {[
                        { title: 'Phase 1: Baseline', desc: 'Conduct a silent phishing simulation to measure your current risk profile.' },
                        { title: 'Phase 2: Onboarding', desc: 'Roll out the first round of interactive training modules to all staff.' },
                        { title: 'Phase 3: Persistence', desc: 'Monthly simulations and refresher training to ensure knowledge retention.' }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="w-8 h-8 rounded-full bg-[#5D00D6] text-white flex items-center justify-center font-bold text-xs shrink-0">{i+1}</div>
                           <div>
                              <div className="font-bold text-[15px] mb-1">{item.title}</div>
                              <div className="text-[13px] text-slate-500 leading-relaxed">{item.desc}</div>
                           </div>
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
   SECTION 4 — DEFENSIVE OUTCOMES
   ───────────────────────────────────────────────────────── */
const SectionOutcomes = () => (
   <section className="py-12 lg:py-16 bg-[#0c1024] text-white relative overflow-hidden">
      <div className={C}>
         <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
               <h2 className="c9-section-heading !text-white mb-6">Defensive Culture</h2>
               <div className="space-y-6">
                  {[
                     { title: "Reduced Breach Probability", desc: "A trained workforce is significantly less likely to provide a gateway for ransomware." },
                     { title: "Statutory Compliance", desc: "Meet the 'reasonable steps' requirement for data protection and cyber insurance." },
                     { title: "Staff Empowerment", desc: "Give your team the confidence to spot and report suspicious activity correctly." }
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
                     "Cybersecurity is no longer just an IT problem; it&apos;s a people problem. We give your people the tools to be part of the solution."
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10" />
                     <div>
                        <div className="font-bold text-white">Chief Information Security Officer</div>
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
export default function SecurityAwarenessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionWhyItMatters />
      <SectionManagedService />
      <SectionOutcomes />

      <WpDefenseBanner 
        title={<>Enterprise <span className="text-[#a56eff]">Protection.</span></>}
        description="Training is only one layer of defense. Combine it with our SOC-monitored EDR and automated email filtering for total protection."
        buttonText="View C9 Defense"
        href="https://c9defense.com.au/"
      />

      <ContinueJourney 
        title="Security is a Collective Effort."
        description="Training your staff is the first layer. See how our managed services and security solutions protect the rest of your organisation."
        links={[
          { label: 'Helpdesk Support', path: '/managed-it/helpdesk-support' },
          { label: 'Endpoint Protection', path: '/managed-it/edr' },
          { label: 'IT Outsourcing', path: '/managed-it/outsourcing' },
          { label: 'Security Solutions', path: '/managed-it/security-solutions' }
        ]}
      />

      <section id="consultation-section" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="Build Your Human Firewall"
          title="Request Training Demo"
          description="Talk to a security expert to see how our managed awareness platform can reduce your phish-prone percentage by up to 90%."
          formTitle="Request Training Demo"
        />
      </section>
    </main>
  );
}
