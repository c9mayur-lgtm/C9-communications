'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Cloud, Database, RefreshCw, 
  Lock, AlertTriangle, ArrowRight, CheckCircle2,
  HardDrive, Shield, Zap, Search, Activity, FileText
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
   SECTION 1 — HERO (OUTCOME-DRIVEN)
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
               <ShieldCheck size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0">Recovery Assurance Architecture</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6">
                Ensure Your Business Can <span className="text-[#5D00D6]">Recover from Data Loss.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-8 max-w-[620px]">
                Most SaaS platforms guarantee infrastructure uptime, not your point-in-time data recovery. Assumed protection is a hidden risk. C9 provides a controlled recovery system that ensures operational continuity when cloud data is deleted, corrupted, or compromised.
             </p>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col items-start gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                   <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
                   >
                      Request Data Protection Assessment
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                   </a>
                   <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-8 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white"
                   >
                      Review Recovery Setup
                   </a>
                </div>
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
           <div className="bg-[#0c1024] rounded-[48px] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-10">
                 <div className="flex items-center gap-3">
                    <RefreshCw className="text-[#a56eff]" size={24} />
                    <span className="font-bold text-[18px]">Recovery Ready</span>
                 </div>
                 <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-500/30">
                    Verified
                 </div>
              </div>
              <div className="space-y-6">
                 {[
                   { label: 'Platform Data', status: 'Continuous Protection', time: 'Live' },
                   { label: 'Recovery Point (RPO)', status: 'Validated', time: '15m' },
                   { label: 'Restoration Path', status: 'Tested & Verified', time: 'Instant' }
                 ].map((app, i) => (
                   <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center">
                      <div>
                         <div className="font-bold text-[14px]">{app.label}</div>
                         <div className="text-[10px] text-white/40 uppercase font-black tracking-widest mt-1">{app.status}</div>
                      </div>
                      <div className="text-[12px] font-bold text-[#a56eff]">{app.time}</div>
                   </div>
                 ))}
              </div>
              <div className="mt-10 pt-6 border-t border-white/5">
                 <div className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em]">C9 Recovery Protocol v4.2</div>
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — OPERATIONAL RISK
   ───────────────────────────────────────────────────────── */
const SectionOperationalRisk = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="max-w-3xl mb-16">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Risk Exposure</span>
               <h2 className="c9-section-heading">When SaaS Data Is Not Properly Protected</h2>
               <p className="c9-body text-slate-600 mt-4">
                  SaaS platforms operate on a shared responsibility model. They guarantee the infrastructure, but the data remains your responsibility. Relying on platform defaults creates critical operational gaps.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
               {
                  icon: <AlertTriangle className="text-red-500" />,
                  title: "Accidental Deletion",
                  desc: "Permanent loss of records when users exceed standard recycle bin retention periods."
               },
               {
                  icon: <Shield className="text-amber-500" />,
                  title: "Malicious Actions",
                  desc: "Intentional data destruction by compromised accounts or internal threats that bypass standard recovery."
               },
               {
                  icon: <RefreshCw className="text-[#5D00D6]" />,
                  title: "Sync Errors",
                  desc: "Corrupted data synchronized across all devices, leaving the business without a clean point-of-entry."
               },
               {
                  icon: <Lock className="text-slate-900" />,
                  title: "Retention Limitations",
                  desc: "Failure to meet statutory or legal data preservation requirements due to cloud provider defaults."
               }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                     {item.icon}
                  </div>
                  <h4 className="c9-card-title mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
               </FadeIn>
            ))}
         </div>

         <FadeIn delay={0.4} className="mt-12 p-8 rounded-3xl bg-red-50 border border-red-100">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
               <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                     <AlertTriangle size={20} />
                  </div>
                  <div>
                     <h4 className="font-bold text-red-900">The Business Impact</h4>
                     <p className="text-red-800/70 text-sm">Permanent data loss leads to business disruption, compliance exposure, and significant downtime.</p>
                  </div>
               </div>
            </div>
         </FadeIn>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — WHERE DATA LOSS HAPPENS
   ───────────────────────────────────────────────────────── */
const SectionDataLossPoints = () => (
   <section className="py-16 lg:py-24 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Vulnerability Mapping</span>
               <h2 className="c9-section-heading mb-6">Where Your Data <br /><span className="text-[#5D00D6]">Is Most Vulnerable.</span></h2>
               <p className="c9-body mb-8">
                  Data loss is rarely a platform failure; it is almost always a human or process failure. Distributed teams and multi-user environments increase the surface area for errors.
               </p>
               <div className="space-y-6">
                  {[
                     { title: "Microsoft 365 Environments", desc: "Exchange, SharePoint, and Teams data often lack independent, point-in-time recovery." },
                     { title: "Cloud Storage Systems", desc: "Shared drives and collaboration spaces are susceptible to bulk deletion and sync corruption." },
                     { title: "Distributed Teams", desc: "Mobile workforces increase the risk of access misuse and lack of central backup visibility." }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="mt-1"><CheckCircle2 size={18} className="text-[#5D00D6]" /></div>
                        <div>
                           <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                           <div className="text-sm text-slate-500 leading-relaxed">{item.desc}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </FadeIn>
            <FadeIn direction="right">
               <div className="grid grid-cols-2 gap-4 p-8 bg-slate-50 rounded-[48px] border border-slate-100">
                  {[
                     { label: 'User Error', val: '76%' },
                     { label: 'Access Misuse', val: '14%' },
                     { label: 'Sync Issues', val: '7%' },
                     { label: 'Other', val: '3%' }
                  ].map((stat, i) => (
                     <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200">
                        <div className="text-[24px] font-black text-[#5D00D6] mb-1">{stat.val}</div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{stat.label}</div>
                     </div>
                  ))}
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — RECOVERY ASSURANCE (CORE)
   ───────────────────────────────────────────────────────── */
const SectionRecoveryAssurance = () => (
   <section className="py-16 lg:py-24 bg-[#0c1024] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5D00D6] opacity-[0.05] rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className={C}>
         <div className="max-w-3xl mb-16 relative z-10">
            <FadeIn>
               <span className="c9-eyebrow !text-[#a56eff] mb-4">The C9 Protocol</span>
               <h2 className="c9-section-heading !text-white">How C9 Delivers Recovery Assurance</h2>
               <p className="c9-body text-white/60 mt-4">
                  We do not just provide a backup tool; we implement a controlled recovery system. Our architecture is designed for one outcome: the guaranteed restoration of your business data.
               </p>
            </FadeIn>
         </div>

         <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
               {
                  title: "Continuous Protection",
                  desc: "Automated, daily protection cycles across all SaaS platforms, ensuring data is captured before it can be lost."
               },
               {
                  title: "Structured Policies",
                  desc: "Defined retention frameworks aligned with your business compliance and legal requirements, not provider defaults."
               },
               {
                  title: "Verification Systems",
                  desc: "Continuous monitoring of backup health with automated validation of recoverability for every snapshot."
               }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-[#a56eff]/30 transition-all">
                  <h4 className="text-[20px] font-bold mb-4">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
               </FadeIn>
            ))}
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — RECOVERY READINESS MODEL
   ───────────────────────────────────────────────────────── */
const SectionReadinessModel = () => (
   <section className="py-16 lg:py-24 bg-white">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left" className="order-2 lg:order-1">
               <div className="space-y-6">
                  {[
                     { title: "Recovery Validation", desc: "Regular testing of restoration paths to ensure data can be re-injected into your production environment instantly." },
                     { title: "Defined Objectives", desc: "Establishment of clear RTO (Recovery Time Objective) and RPO (Recovery Point Objective) targets." },
                     { title: "Predictable Timelines", desc: "A structured process that removes uncertainty during a crisis, providing a known path to restoration." }
                  ].map((item, i) => (
                     <div key={i} className="p-6 rounded-3xl border border-slate-100 bg-slate-50 hover:border-[#5D00D6]/20 transition-all">
                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </FadeIn>
            <FadeIn direction="right" className="order-1 lg:order-2">
               <span className="c9-eyebrow mb-4">Maturity Model</span>
               <h2 className="c9-section-heading mb-6">Backup Without Recovery Is a Risk.</h2>
               <p className="c9-body mb-8">
                  Untested backups fail when they are needed most. C9 moves your organisation from assumed protection to verified recovery readiness through a structured operational model.
               </p>
               <div className="flex items-center gap-3 py-4 border-t border-slate-100">
                  <Activity size={20} className="text-emerald-500" />
                  <span className="font-bold text-slate-900">100% Recovery Verification Success</span>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 & 7 — INTEGRATION & VISIBILITY
   ───────────────────────────────────────────────────────── */
const SectionVisibilityControl = () => (
   <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className={C}>
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <FadeIn direction="left">
               <h3 className="text-[24px] font-bold mb-6">Environment Integration</h3>
               <p className="text-slate-600 text-[15px] mb-8">
                  Our recovery architecture integrates seamlessly across SaaS platforms including Microsoft 365, Google Workspace, and Salesforce. We support hybrid environments with zero disruption to your users or primary operations.
               </p>
               <div className="flex flex-wrap gap-4">
                  {['Microsoft 365', 'Google Workspace', 'Salesforce', 'Dynamics 365'].map((app, i) => (
                     <div key={i} className="px-5 py-2 bg-white rounded-full border border-slate-200 text-xs font-bold text-slate-500 shadow-sm">
                        {app}
                     </div>
                  ))}
               </div>
            </FadeIn>
            <FadeIn direction="right">
               <h3 className="text-[24px] font-bold mb-6">Visibility & Control</h3>
               <p className="text-slate-600 text-[15px] mb-8">
                  Gain centralized monitoring of your entire recovery environment. We provide proactive alerting for any protection failures and detailed reporting for compliance and audit requirements.
               </p>
               <div className="space-y-4">
                  {[
                     { label: 'Real-time Monitoring', icon: <Activity size={16} /> },
                     { label: 'Audit-Ready Reporting', icon: <FileText size={16} /> },
                     { label: 'Failure Alerting', icon: <AlertTriangle size={16} /> }
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-slate-900 font-bold text-[14px]">
                        <div className="text-[#5D00D6]">{item.icon}</div>
                        {item.label}
                     </div>
                  ))}
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 & 9 — BUSINESS IMPACT & REINFORCEMENT
   ───────────────────────────────────────────────────────── */
const SectionBusinessImpact = () => (
   <section className="py-16 lg:py-24 bg-white">
      <div className={C}>
         <div className="bg-[#0c1024] rounded-[48px] p-10 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5D00D6] opacity-[0.1] rounded-tr-full" />
            
            <div className="max-w-3xl relative z-10">
               <FadeIn>
                  <h2 className="c9-section-heading !text-white mb-8">Operational Continuity. <br />Commercial Certainty.</h2>
               </FadeIn>
               
               <div className="grid md:grid-cols-2 gap-10 mt-12">
                  <FadeIn delay={0.1}>
                     <h4 className="text-[20px] font-bold mb-4 text-[#a56eff]">Compliance Resilience</h4>
                     <p className="text-white/60 text-sm leading-relaxed">
                        Meet regulatory requirements for data preservation and demonstrate operational maturity to stakeholders, auditors, and insurers.
                     </p>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                     <h4 className="text-[20px] font-bold mb-4 text-[#a56eff]">Minimal Downtime</h4>
                     <p className="text-white/60 text-sm leading-relaxed">
                        Rapid restoration paths ensure that data loss incidents remain minor events rather than business-ending crises.
                     </p>
                  </FadeIn>
               </div>

               <FadeIn delay={0.3} className="mt-16 pt-10 border-t border-white/10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                     <p className="text-xl font-medium text-white/90 italic">
                        "Assumed protection is a risk you cannot afford. Recovery capability is what defines your resilience."
                     </p>
                  </div>
               </FadeIn>
            </div>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 10 — FINAL CTA
   ───────────────────────────────────────────────────────── */
const FinalCTA = () => (
   <section className="py-20 lg:py-32 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className={C}>
         <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
               <span className="c9-eyebrow mb-4">Immediate Action</span>
               <h2 className="c9-section-heading mb-8">Validate Your Data Recovery <br />Before You Need It.</h2>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                     href="#consultation"
                     className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group"
                  >
                     Request Data Protection Assessment
                     <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                     href="#consultation"
                     className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-8 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all"
                  >
                     Talk to Recovery Specialist
                  </a>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function SaasBackupPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionOperationalRisk />
      <SectionDataLossPoints />
      <SectionRecoveryAssurance />
      <SectionReadinessModel />
      <SectionVisibilityControl />
      <SectionBusinessImpact />
      
      <WpDefenseBanner 
        title={<>Recovery is <span className="text-[#a56eff]">Resilience.</span></>}
        description="Data recovery is only one component of business continuity. We integrate recovery assurance with full infrastructure protection."
        buttonText="View Continuity Services"
        href="https://c9defense.com.au/"
      />

      <ContinueJourney 
        title="Protection is Persistence."
        description="Backing up your data is critical. Now explore the support and infrastructure services that keep your organisation resilient."
        links={[
          { label: 'Helpdesk Support', path: '/managed-it/helpdesk-support' },
          { label: 'Backup & Recovery', path: '/managed-it/backup-disaster-recovery' },
          { label: 'IT Outsourcing', path: '/managed-it/outsourcing' },
          { label: 'Security Solutions', path: '/managed-it/security-solutions' }
        ]}
      />

      <section id="consultation" className="bg-white">
        <WpConsultationForm
          showHeader={false}
          eyebrow="Recovery Assurance Audit"
          title="Review Your Recovery Capability"
          description="Talk to an enterprise data architect to identify gaps in your current SaaS protection and validate your recovery readiness."
          formTitle="Request Recovery Audit"
        />
      </section>
    </main>
  );
}
