'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Lock, Settings, Activity, CheckCircle2, AlertTriangle, Eye, LayoutGrid, Database, Zap, Briefcase, Command, Target, Radio, Clock, BarChart3, RefreshCw } from 'lucide-react';
import { C9Button } from '@/components/design-system/C9Button';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { ContinueJourney } from '@/components/sections/ContinueJourney';

const C = "container mx-auto px-6 md:px-8 max-w-[1240px]";

const FadeIn = ({ children, delay = 0, className, direction = 'up' }: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' 
}) => {
  const variants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 }
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function M365GovernancePage() {
  return (
    <main className="bg-white">
      {/* 1. HERO (SPLIT LAYOUT ALIGNMENT) */}
      <section className="relative min-h-[85vh] flex flex-col justify-center bg-white overflow-hidden pt-32 pb-16 lg:pb-24">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <FadeIn direction="right">
                <span className="c9-eyebrow !text-[#5D00D6] mb-6 uppercase tracking-[0.2em]">WORKPLACE GOVERNANCE</span>
                <h1 className="c9-hero-title !text-slate-900 mb-8 leading-[1.1]">
                  Control and Secure Your Business <br />
                  <span className="text-[#5D00D6]">Productivity Environment</span>
                </h1>
                <p className="c9-body !text-slate-600 mb-10 text-xl leading-relaxed">
                  Microsoft 365 is a business-critical system, not just a software suite. We deploy the governance frameworks required to manage user access, enforce security policies, and maintain operational control at scale.
                </p>
              </FadeIn>

              <FadeIn delay={0.2} direction="right">
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <C9Button className="bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-lg shadow-[#5D00D6]/20 h-14 px-8 text-[15px] font-bold" asChild>
                    <Link href="#consultation-section">Request Workplace Assessment</Link>
                  </C9Button>
                  <C9Button variant="outline" className="border-2 border-slate-200 text-slate-600 rounded-full hover:bg-slate-50 transition-all h-14 px-8 text-[15px] font-bold" asChild>
                    <Link href="#consultation-section">Review Your Setup</Link>
                  </C9Button>
                </div>
              </FadeIn>

              <FadeIn delay={0.3} direction="right">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Environment Shield Active</span>
                  </div>
                  <div className="h-4 w-px bg-slate-100" />
                  <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Policy-Driven Management</div>
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="left" className="relative hidden lg:block">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="/modern_m365_conference_room.png" 
                  alt="Complete Modern Workplace Control Room" 
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/5 to-transparent mix-blend-overlay" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-100 rounded-full blur-3xl opacity-50 -z-10" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. OPERATIONAL RISK — UNMANAGED EXPOSURE */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <span className="c9-eyebrow mb-4 uppercase tracking-[0.2em]">Operational Risk</span>
              <h2 className="c9-section-heading mb-6">When Microsoft 365 Is Not Properly Managed.</h2>
              <p className="c9-body text-slate-600 mb-8 leading-relaxed">
                Unmanaged environments create silent risks. Without centralized governance, user access becomes fragmented, configurations drift from security baselines, and visibility into data movement is lost.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: <Lock size={20} />, title: "Uncontrolled Access", desc: "Excessive permissions and orphaned accounts." },
                  { icon: <Settings size={20} />, title: "Configuration Drift", desc: "Inconsistent security settings across teams." },
                  { icon: <Eye size={20} />, title: "Lack of Visibility", desc: "No oversight of data sharing or user activity." },
                  { icon: <ShieldCheck size={20} />, title: "Security Exposure", desc: "Vulnerability to credential theft and leaks." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-red-500 mb-3">{item.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-1 text-sm uppercase tracking-wide">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-red-500 uppercase tracking-widest bg-red-50 px-4 py-2 rounded-lg inline-block">
                Immediate Impact: Data Risk & Operational Inefficiency
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative rounded-[40px] overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200" 
                  alt="Team Collaborating with Workplace Tools" 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. WHERE ENVIRONMENTS BREAK — REAL WORLD */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className={C}>
          <div className="max-w-3xl mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 uppercase tracking-[0.2em]">Environmental Decay</span>
              <h2 className="c9-section-heading mb-6">Complexity Scales Faster Than Control.</h2>
              <p className="c9-body text-slate-600 mt-6 leading-relaxed">
                As organizations grow, Microsoft 365 environments often descend into technical debt. Without a senior architect's oversight, systems meant for productivity become inhibitors to security and compliance.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Multi-Site Fragmentation", desc: "Inconsistent tenant usage and policies across distributed offices or retail locations." },
              { title: "Unmanaged Permissions", desc: "Sprawling access rights where users retain high-level permissions they no longer require." },
              { title: "Shadow IT Adoption", desc: "Teams deploying third-party integrations into M365 without technical or security approval." },
              { title: "Governance Gaps", desc: "Lack of life-cycle management for users, leading to thousands of stale, unmanaged objects." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 flex flex-col h-full hover:shadow-xl hover:border-[#5D00D6]/20 transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-red-500 mb-6 shadow-sm">
                  <AlertTriangle size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow">{item.desc}</p>
                <div className="mt-6 pt-6 border-t border-slate-200">
                   <div className="flex items-center gap-2 text-[11px] font-bold text-red-500 uppercase tracking-widest">
                      Operational Fragility ✓
                   </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW C9 CONTROLS M365 — CORE SYSTEM */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.25]">
           <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Enterprise Team Coordination" />
           <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className={C + " relative z-10"}>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right">
              <span className="c9-eyebrow !text-[#a56eff] mb-4 uppercase tracking-[0.2em]">The Control System</span>
              <h2 className="c9-section-heading !text-white mb-6">Managed Operational Utilities. Not Software.</h2>
              <p className="c9-body !text-white/70 mb-10 leading-relaxed">
                We transition Microsoft 365 from an unmanaged toolset into a controlled operational system. Our focus is on the environment, the access, and the policies that protect your business.
              </p>
              <div className="space-y-6 mb-10">
                {[
                  { title: "User Access Management", desc: "Rigid, role-based access control (RBAC) enforced across every user account." },
                  { title: "Environment Standardisation", desc: "Ensuring every site and department adheres to a single technical baseline." },
                  { title: "Policy Enforcement", desc: "Real-time enforcement of conditional access and security protocols." },
                  { title: "System Monitoring", desc: "Continuous oversight of environment health, activity, and policy compliance." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#a56eff] shrink-0 border border-white/10">
                      <Command size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 uppercase tracking-wide text-sm">{item.title}</h4>
                      <p className="text-sm text-white/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <C9Button className="bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-lg shadow-[#5D00D6]/10 h-14 px-8 text-[15px] font-bold" asChild>
                <Link href="#consultation-section">Talk to a Workplace Specialist</Link>
              </C9Button>
            </FadeIn>

            <FadeIn direction="left">
               <div className="relative p-1 bg-gradient-to-br from-white/20 to-transparent rounded-[40px]">
                  <div className="bg-slate-900 p-8 rounded-[38px] border border-white/5 shadow-2xl">
                     <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                        <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Environment Governance Active</span>
                        <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-bold uppercase tracking-widest">
                           <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                           Controlled
                        </div>
                     </div>
                     <div className="space-y-6">
                        {[
                          { label: 'Access Policy', status: 'Enforced', val: 'Conditional', color: 'text-emerald-400' },
                          { label: 'Tenant Baseline', status: 'Standardized', val: 'C9 Master', color: 'text-purple-400' },
                          { label: 'User Lifecycle', status: 'Managed', val: 'Automated', color: 'text-emerald-400' }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between">
                             <div>
                                <div className="text-[14px] font-bold text-white mb-0.5">{item.label}</div>
                                <div className="text-[11px] text-white/40 uppercase tracking-widest">{item.val}</div>
                             </div>
                             <div className={`text-[12px] font-bold uppercase tracking-widest ${item.color}`}>
                                {item.status}
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. GOVERNANCE MODEL — ENTERPRISE TRUST */}
      <section className="py-16 lg:py-24 bg-white">
        <div className={C}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 uppercase tracking-[0.2em]">The Governance Model</span>
              <h2 className="c9-section-heading">Operational Discipline at Scale</h2>
              <p className="c9-body text-slate-600 mt-6 leading-relaxed">
                We deploy a structured governance model that ensures your Microsoft 365 environment remains consistent, secure, and ready for audit at all times.
              </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Structured Access Policies",
                icon: Lock,
                tag: "ZERO TRUST ACCESS",
                desc: "Enforcing least-privilege principles and multi-factor authentication across all entry points."
              },
              {
                title: "Role-Based Controls",
                icon: Users,
                tag: "ADMINISTRATIVE RIGOUR",
                desc: "Granular control over who can change settings, manage data, or deploy new workplace applications."
              },
              {
                title: "Lifecycle Management",
                icon: RefreshCw,
                tag: "AUTOMATED HYGIENE",
                desc: "Automated on-boarding and off-boarding protocols to ensure orphaned accounts are purged instantly."
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={i} delay={i * 0.1} className="relative p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-[#5D00D6] flex items-center justify-center text-white mb-8 shadow-lg shadow-purple-900/20">
                    <Icon size={32} />
                  </div>
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-purple-600 uppercase tracking-widest">{item.tag}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">{item.desc}</p>
                <div className="pt-6 border-t border-slate-200">
                   <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <CheckCircle2 size={14} className="text-emerald-500" /> Enterprise Standard
                   </div>
                </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. INTEGRATION WITH BUSINESS SYSTEMS */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Hybrid Ready', desc: 'Seamless integration with on-premise infrastructure.' },
                  { label: 'Multi-Site Sync', desc: 'Consistent experience across distributed locations.' },
                  { label: 'Tool Alignment', desc: 'Connecting M365 to your existing core systems.' },
                  { label: 'Managed Identity', desc: 'Unified identity management for all business apps.' }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                    <Zap size={24} className="text-[#5D00D6] mb-4" />
                    <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">{item.label}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2">
              <span className="c9-eyebrow mb-4 uppercase tracking-[0.2em]">Operational Integration</span>
              <h2 className="c9-section-heading mb-6">One Unified Workplace System.</h2>
              <p className="c9-body text-slate-600 mb-8 leading-relaxed">
                Microsoft 365 does not exist in a vacuum. We ensure it integrates perfectly with your existing toolsets, hybrid infrastructure, and multi-site operational requirements.
              </p>
              <div className="space-y-4">
                {[
                   "Synchronized identity across all locations",
                   "Consistent security baselines for remote teams",
                   "Full support for complex hybrid environments"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#5D00D6]" />
                    <span className="font-bold text-slate-900 text-sm tracking-wide uppercase">{text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. VISIBILITY & CONTROL */}
      <section className="py-16 lg:py-24 bg-white">
        <div className={C}>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <FadeIn direction="right">
              <span className="c9-eyebrow mb-4 uppercase tracking-[0.2em]">Environmental Awareness</span>
              <h2 className="c9-section-heading mb-6">Centralised Visibility. System Oversight.</h2>
              <p className="c9-body text-slate-600 mb-8 leading-relaxed">
                Governance requires awareness. We provide centralized visibility into user activity, environment health, and security status, ensuring your business is always audit-ready.
              </p>
              <div className="space-y-4">
                {[
                  "Real-time user activity monitoring",
                  "Environmental health and performance tracking",
                  "Automated security baseline auditing",
                  "Detailed compliance and governance reporting"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <Eye size={20} className="text-[#5D00D6]" />
                    <span className="font-bold text-slate-900 text-sm uppercase tracking-wide">{text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left">
               <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
                  <div className="aspect-video bg-slate-900 flex items-center justify-center border border-slate-800">
                    <div className="text-center">
                       <BarChart3 size={48} className="text-purple-400 mx-auto mb-4 opacity-50" />
                       <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Governance Dashboard Active</span>
                    </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. BUSINESS IMPACT */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="text-center mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 uppercase tracking-[0.2em]">Measurable Impact</span>
              <h2 className="c9-section-heading">Operational Resilience Built for Scale</h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                label: "Productivity", 
                icon: <Zap size={24} />,
                desc: "Stable environments that allow teams to focus on core work without technical friction." 
              },
              { 
                label: "Security", 
                icon: <ShieldCheck size={24} />,
                desc: "Rigid access control and identity governance that eliminates credential theft risk." 
              },
              { 
                label: "Compliance", 
                icon: <Database size={24} />,
                desc: "Audit-ready governance and data protection across all distributed business locations." 
              },
              { 
                label: "Efficiency", 
                icon: <BarChart3 size={24} />,
                desc: "Automated lifecycles and standardized configurations that reduce operational overhead." 
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="">
                <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-purple-900/5 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#5D00D6] mb-8 group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight">{item.label}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  
                  {/* Subtle accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#5D00D6] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY THIS MATTERS */}
      <section className="py-24 bg-white overflow-hidden text-center">
        <div className={C}>
          <FadeIn>
            <h2 className="c9-section-heading !text-4xl md:!text-5xl mb-8 leading-tight">
              Productivity Without Control <br />
              <span className="text-[#5D00D6]">Creates Systemic Risk.</span>
            </h2>
            <p className="c9-body text-slate-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
              Unmanaged Microsoft 365 environments lead to data sprawl, security breaches, and operational drift. Structured control ensures consistency, reliability, and security at scale.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section id="consultation-section" className="pt-12 pb-24 bg-white">
        <WpConsultationForm 
          eyebrow="TAKE CONTROL"
          title="Workplace Governance Assessment"
          description="Validate your environment before risks manifest. Speak to a workplace specialist to review your current governance posture."
          formTitle="Request Workplace Audit"
          ctaText="Talk to Workplace Specialist"
        />
      </section>

      {/* VISITOR JOURNEY CONTINUATION */}
      <ContinueJourney 
        eyebrow="STRATEGIC ALIGNMENT"
        title="Unify Your Operational Architecture."
        description="Governance is one layer of the C9 system. Explore the security and recovery services that protect your enterprise environment."
        links={[
          { label: "Security Solutions", path: "https://c9defense.com.au/" },
          { label: "SaaS Data Recovery", path: "/modern-workplace/saas-backup" },
          { label: "Infrastructure Control", path: "/managed-it/infrastructure" },
          { label: "Enterprise Systems", path: "/enterprise" }
        ]}
      />
    </main>
  );
}


