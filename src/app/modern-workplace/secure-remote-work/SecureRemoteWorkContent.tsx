'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Users as UsersIcon, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Monitor, 
  LayoutGrid,
  ShieldAlert,
  Database,
  LifeBuoy,
  FileCheck,
  Laptop,
  Check,
  TrendingUp,
  Zap,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  Globe as GlobeIcon
} from 'lucide-react';
import { 
  FadeUp, 
  ScaleIn, 
  Eyebrow, 
  FAQSection,
  InfraCarousel,
  FullStackSection 
} from '../components';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

/* ── Constants ───────────────────────────────────────────────── */
const P = '#5D00D6';
const PL = '#F4F0FA';
const T = '#0c1024';
const TM = 'rgba(12,16,36,0.55)';
const BD = 'rgba(93,0,214,0.12)';

/* ── Content Data ────────────────────────────────────────────── */
const METRICS = [
  { label: 'Incident Response', value: '< 15m', desc: 'Critical security alerts triage.' },
  { label: 'Uptime Confidence', value: '99.95%', desc: 'Carrier-grade infrastructure SLA.' },
  { label: 'Fleet Visibility', value: '100%', desc: 'Real-time endpoint compliance.' },
  { label: 'Support Origin', value: 'AU', desc: '100% Australian-based engineering.' },
];

const PROCESS = [
  { step: '01', title: 'Discover', desc: 'Audit current device fleet, identity structure, and shadow IT risks.' },
  { step: '02', title: 'Migrate', desc: 'Zero-downtime transition of data, users, and security policies to C9.' },
  { step: '03', title: 'Secure', desc: 'Implementation of Zero Trust perimeters and endpoint hardening.' },
  { step: '04', title: 'Standardise', desc: 'Establishing uniform device builds and automated onboarding.' },
  { step: '05', title: 'Support', desc: '24/7 Australian operational ownership and user helpdesk.' },
  { step: '06', title: 'Optimise', desc: 'Continuous security reviews and roadmap alignment for growth.' }
];

const FAQS = [
  { q: 'How do you migrate remote staff without downtime?', a: 'We use a staged migration methodology where identity (M365) and device management (Intune) are configured in parallel. Staff transition in waves with zero interruption to their primary communication and data access.' },
  { q: 'Who owns the security policy changes?', a: 'C9 owns the operational execution. While we align with your business requirements, our engineers proactively design, implement, and monitor all security policies (MFA, Conditional Access, EDR) to ensure compliance.' },
  { q: 'Do you manage personal devices (BYOD)?', a: 'Yes. We implement App Protection Policies (MAM) to secure corporate data on personal devices without requiring full device management, maintaining privacy while ensuring data control.' },
  { q: 'What is your actual response time for remote users?', a: 'Our SLA guarantees critical security triage within 15 minutes and standard support response within 2 hours. 90% of remote user requests are resolved on the first call.' },
  { q: 'Do we still need a separate Microsoft partner?', a: 'No. C9 is a direct Microsoft Partner and Managed Service Provider. We handle everything from licensing and tenant architecture to day-to-day user support.' },
  { q: 'How do you handle hardware failures for remote staff?', a: 'We manage the entire lifecycle. If a device fails, we coordinate warranty or replacement, provision the new unit via Autopilot, and ship it directly to the user\'s location ready to work.' }
];

const PLANS = [
  { name: 'Remote Core (Startup)', price: '$15', period: '/user/mo', tag: 'STARTUP READY', desc: 'Essential remote security and identity protection.', features: ['MFA & Identity Hardening', 'Conditional Access Setup', 'Endpoint Compliance Monitoring', 'Essential Eight Alignment', 'AU Engineering Helpdesk', 'M365 Security Baseline'] },
  { name: 'Remote Managed (Growth)', price: '$30', period: '/user/mo', tag: 'GROWTH BASELINE', highlight: true, desc: 'Full endpoint lifecycle and persistent governance.', features: ['All Core features', 'Zero-Touch Deployment (Autopilot)', 'Managed Intune Policies', 'Defender for Business EDR', 'Proactive Patch Management', 'MSP Takeover Protocol'] },
  { name: 'Remote Enterprise', price: 'Custom', period: '', tag: 'TOTAL GOVERNANCE', desc: 'Maximum control for distributed enterprise environments.', features: ['All Managed features', '24/7 Priority Security Triage', 'Data Loss Prevention (DLP)', 'Compliance Audit Readiness', 'Dedicated Account Engineer', 'Multi-Site Fleet Management'] },
];

export default function SecureRemoteWorkContent() {
  return (
    <div className="bg-white min-h-screen text-[#0C1024] selection:bg-[#5D00D6]/10 overflow-x-hidden">
      
      {/* 1. HERO SECTION (Standardized 2-Column) */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F9FBFF] -z-10 hidden lg:block" />
        <div className="c9-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <FadeUp>
                <Eyebrow>Operational Infrastructure Governance</Eyebrow>
                <h1 className="c9-hero-title mb-8 !leading-[1.1] font-bold">
                  Secure Remote Work <br />
                  <span className="text-[#5D00D6]">Without Operational Risk.</span>
                </h1>
                <p className="c9-body text-slate-600 mb-10 text-xl max-w-2xl leading-relaxed">
                  Managing a distributed workforce shouldn&apos;t be a risk. C9 delivers complete endpoint visibility, identity protection, and zero-downtime Australian support to ensure your team stays productive and protected—wherever they work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="#risk-audit" className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-[#5D00D6]/20 group">
                    Assess Your Risk Exposure <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-black/10 text-[#0c1024] rounded-full h-14 px-8 font-bold text-[14px] hover:bg-black/5 transition-all backdrop-blur-sm">
                    Request Enterprise Briefing
                  </Link>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">AU Engineering Desk Active</span>
                  </div>
                  <div className="h-4 w-px bg-black/10" />
                  <div className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">100% Security Compliance</div>
                </div>
              </FadeUp>
            </div>
            
            <div className="relative">
              <ScaleIn>
                <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] border border-black/5">
                  <img 
                    src="/secure_remote_work_hero_1777376729813.png" 
                    alt="Secure Remote Workplace Control"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-10 opacity-60" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60" />
                
                {/* Floating trust card */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-[240px] hidden md:block"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                      <Shield className="text-[#5D00D6]" size={20} />
                    </div>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-gray-400">Security Live</span>
                  </div>
                  <div className="text-[24px] font-bold text-[#0c1024] mb-1">100%</div>
                  <div className="text-[13px] font-medium text-gray-500">Fleet Compliance Enforced</div>
                </motion.div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST METRICS (Standardized Strip) */}
      <section style={{ background: '#fff', borderBottom: `1px solid ${BD}` }}>
        <div className="c9-container py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {METRICS.map((m, i) => (
              <FadeUp key={m.label} delay={i * 0.1} className="text-center md:text-left">
                <div className="text-[32px] md:text-[42px] font-bold leading-none tracking-tight mb-3" style={{ color: P }}>{m.value}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">{m.label}</div>
                <p className="text-[12px] text-gray-400 font-medium mt-1">{m.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE BUSINESS PAIN (Simplified Highlight Strip) */}
      <section className="py-12 md:py-16 overflow-hidden" style={{ background: PL }}>
        <div className="c9-container">
          <FadeUp className="text-center mb-12">
            <Eyebrow>The Risks of Hybrid Work</Eyebrow>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: ShieldAlert, label: 'Unmanaged Device Risk', sub: 'Shadow IT and unencrypted personal hardware.' },
              { icon: Lock, label: 'Identity Fragmentation', sub: 'Weak MFA and inconsistent access policies.' },
              { icon: Clock, label: 'Support Latency', sub: 'Remote staff stalled by legacy helpdesk models.' },
            ].map(({ icon: Icon, label, sub }, i) => (
              <ScaleIn key={label} delay={i*0.07}>
                <div className="text-center p-8 rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group h-full" style={{ borderColor: BD }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" style={{ background: `${P}12`, color: P }}>
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <div className="c9-card-title !text-[16px] mb-2">{label}</div>
                  <div className="c9-body !text-[13px] !leading-normal">{sub}</div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES BENTO GRID (Standardized) */}
      <section id="services" className="py-12 md:py-20" style={{ background: '#F9FBFF' }}>
        <div className="c9-container">
          <FadeUp className="max-w-[720px] mb-20">
            <h2 className="c9-section-heading mb-6">
              Secure Operations.<br />Owned and Accountable.
            </h2>
            <p className="c9-body text-xl">
              C9 manages the complete lifecycle of your remote workplace technology. We eliminate the gap between security procurement and real-world compliance.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Row 1 — Cell 1: Secure Endpoint (2 cols wide) */}
            <ScaleIn className="lg:col-span-2" delay={0}>
              <motion.div
                className="rounded-[32px] border border-black/10 overflow-hidden h-full flex flex-col transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1 bg-white"
              >
                <div className="px-8 pt-10 pb-6 text-center lg:text-left lg:px-12">
                  <h3 className="c9-card-title mb-3">Secure Endpoint Fleet <span className="text-[#5D00D6]">— Total Visibility.</span></h3>
                  <p className="c9-body max-w-xl">
                    Every device arrives pre-configured with Zero-Touch deployment. We enforce encryption, patch management, and security policies automatically across your entire distributed workforce.
                  </p>
                </div>
                <div className="px-6 md:px-12 pb-10 mt-auto flex justify-center overflow-hidden">
                  <img 
                    src="/secure_remote_work_case_study_1777376875878.png" 
                    className="w-full max-w-[800px] aspect-video object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]" 
                    alt="Secure Fleet Management"
                  />
                </div>
              </motion.div>
            </ScaleIn>

            {/* Row 1 — Cell 2: Identity (1 col) */}
            <ScaleIn delay={0.08}>
              <motion.div
                className="rounded-[32px] border border-black/10 overflow-hidden h-full flex flex-col transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1 bg-white"
              >
                <div className="px-7 pt-10 pb-10 text-center flex-grow flex flex-col">
                  <div className="w-20 h-20 rounded-3xl bg-purple-500/10 flex items-center justify-center mx-auto mb-8 text-purple-600">
                    <Lock size={40} />
                  </div>
                  <h3 className="c9-card-title mb-3">Identity & Access.</h3>
                  <p className="c9-body">
                    We architect Zero Trust identity perimeters. Only verified users and compliant devices access your sensitive data—no exceptions.
                  </p>
                  <div className="mt-8 pt-8 border-t border-black/5 text-left space-y-3">
                    {['Conditional Access Policy', 'MFA Management', 'Single Sign-On (SSO)'].map(t => (
                      <div key={t} className="flex items-center gap-2 text-[12px] font-bold text-slate-900">
                        <Check size={14} className="text-[#5D00D6]" /> {t}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScaleIn>

            {/* Row 2 — Cell 3: Support (1 col) */}
            <ScaleIn delay={0.14}>
              <motion.div
                className="rounded-[32px] border border-black/10 overflow-hidden h-full flex flex-col transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1 bg-white"
              >
                <div className="px-7 pt-10 pb-10 text-center flex-grow flex flex-col">
                  <div className="w-20 h-20 rounded-3xl bg-[#5D00D6]/10 flex items-center justify-center mx-auto mb-8 text-[#5D00D6]">
                    <ShieldCheck size={40} />
                  </div>
                  <h3 className="c9-card-title mb-3">SLA Accountability.</h3>
                  <p className="c9-body">
                    24/7 Australian support desk that owns the user outcome. We don&apos;t just &quot;support&quot; remote work; we optimize the entire employee experience.
                  </p>
                  <div className="mt-8 pt-8 border-t border-black/5 text-left space-y-3">
                    {['AU-Based Engineers', '15m Critical Response', 'Endpoint Health Audits'].map(t => (
                      <div key={t} className="flex items-center gap-2 text-[12px] font-bold text-slate-900">
                        <Check size={14} className="text-[#5D00D6]" /> {t}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScaleIn>

            {/* Row 2 — Cell 4: Compliance (2 cols wide) */}
            <ScaleIn className="lg:col-span-2" delay={0.2}>
              <motion.div
                className="rounded-[32px] border border-black/10 overflow-hidden h-full flex flex-col transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1 bg-[#0c1024] text-white"
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="px-10 pt-12 pb-12 flex flex-col justify-center">
                    <Eyebrow light>Governance & Compliance</Eyebrow>
                    <h3 className="text-2xl font-bold mb-4">Real-Time Audit Readiness.</h3>
                    <p className="text-white/60 c9-body !text-[15px] mb-8">
                      C9 enforces security standards persistently. Our platform continuously audits your fleet to ensure BitLocker, MFA, and app-level protections are active on every device.
                    </p>
                    <div className="space-y-4">
                      {['Data Loss Prevention (DLP)', 'Automatic Threat Response', 'Identity Protection Policies'].map(t => (
                        <div key={t} className="flex items-center gap-3 text-[13px] font-bold">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {t}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#1a1f3a] p-10 flex items-center justify-center border-l border-white/5">
                     <div className="w-full max-w-sm space-y-6">
                        {[
                          { l: 'Force MFA on remote login', s: 'Compliant' },
                          { l: 'Block non-AU access', s: 'Compliant' },
                          { l: 'Encryption Status', s: 'Encrypted' },
                        ].map((p, i) => (
                          <div key={p.l} className="flex items-center justify-between p-4 bg-[#0c1024]/50 rounded-2xl border border-white/10">
                            <span className="text-[12px] font-bold text-white/80">{p.l}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                              <span className="text-[10px] font-bold text-[#5D00D6] uppercase tracking-widest">{p.s}</span>
                            </div>
                          </div>
                        ))}
                     </div>
                  </div>
                </div>
              </motion.div>
            </ScaleIn>

          </div>
        </div>
      </section>

      {/* 4.5 PROTOCOLS SECTION (CEO PERSONA) */}
      <section className="py-16 md:py-24 bg-white border-y border-gray-100">
        <div className="c9-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-6">
                <span className="text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest">The Brownfield Protocol</span>
              </div>
              <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.1] mb-8 font-proxima tracking-tight text-[#0c1024]">
                The C9 Managed <br />
                <span className="text-[#5D00D6]">MSP Takeover Protocol.</span>
              </h2>
              <p className="text-[18px] text-gray-600 mb-10 leading-relaxed font-medium">
                Transitioning distributed teams from failing providers is an operational risk. We use a structured protocol to audit, secure, and stabilize your remote fleet without disruption.
              </p>
              <div className="space-y-6">
                {[
                  { t: 'Phase 1: Deep Audit', d: 'Audit of every remote endpoint, identity policy, and shadow IT risk.' },
                  { t: 'Phase 2: Baseline Hardening', d: 'Enforcing MFA, Conditional Access, and Essential Eight compliance.' },
                  { t: 'Phase 3: Operational Control', d: '24/7 Australian management restoring fleet stability and uptime.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0c1024] text-[16px] mb-1">{item.t}</h4>
                      <p className="text-gray-500 text-[14px] leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-6">
                <span className="text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest">The Greenfield Guarantee</span>
              </div>
              <h2 className="c9-section-heading mb-8 font-proxima tracking-tight font-bold leading-[1.1] text-[#0c1024]">
                The Mandatory <br />
                <span className="text-[#5D00D6]">Day One Guarantee.</span>
              </h2>
              <p className="text-[18px] text-gray-600 mb-10 leading-relaxed font-medium">
                For remote hiring and distributed expansion, delay is technical debt. We guarantee a fully-operational, secured device for every new hire on their first day.
              </p>
              <div className="bg-[#0B0B0F] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-[#5D00D6]/20 transition-all shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#5D00D6]/5 rounded-bl-full group-hover:bg-[#5D00D6]/10 transition-all" />
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <ShieldCheck size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[18px] text-white">Guaranteed Fleet Uptime</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Lock size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[18px] text-white">Security Baseline Enforced</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <UsersIcon size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[18px] text-white">Full Remote Readiness</span>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-white/10">
                  <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Protocol Version 4.2 • Onshore Deployment Team</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 5. OPERATIONAL ROADMAP (Standardized Dark Section) */}
      <section className="py-12 md:py-20 relative overflow-hidden" style={{ background: '#0c1024' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]" style={{ background: 'radial-gradient(ellipse, rgba(93,0,214,0.3) 0%, transparent 70%)' }} />
        </div>
        <div className="c9-container relative z-10">
          <FadeUp className="text-center max-w-[680px] mx-auto mb-16">
            <Eyebrow light>Migration & Continuity</Eyebrow>
            <h2 className="c9-section-heading mb-5 !text-white font-proxima tracking-tight font-bold leading-tight">
              Risk-Managed Roadmap.
            </h2>
            <p className="c9-body !text-slate-300">
              We manage the entire transition to a secure remote environment. Our staged rollout model ensures zero disruption while we harden your perimeter and validate compliance.
            </p>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {PROCESS.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.05} className="relative">
                <div className="text-[48px] font-bold text-white/5 mb-4 leading-none">{p.step}</div>
                <h3 className="text-[20px] font-bold text-white mb-3">{p.title}</h3>
                <p className="text-[14px] text-slate-400 leading-relaxed font-medium">{p.desc}</p>
                {i < PROCESS.length - 1 && (
                  <div className="absolute top-1/2 -right-4 hidden lg:block text-white/10">
                    <ArrowRight size={24} />
                  </div>
                )}
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY C9 (Bento Grid Advantage) */}
      <section className="py-12 md:py-20" style={{ background: '#fff' }}>
        <div className="c9-container">
          <FadeUp className="text-center max-w-[640px] mx-auto mb-20">
            <Eyebrow>The C9 Advantage</Eyebrow>
            <h2 className="c9-section-heading">Operational Accountability.</h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Focus Card */}
            <ScaleIn className="md:col-span-2 lg:col-span-1 lg:row-span-2">
              <div className="h-full rounded-[32px] p-8 flex flex-col relative overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1" style={{ background: P, borderColor: P, minHeight: 340 }}>
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5 border border-white/20 backdrop-blur-sm shadow-sm">
                  <ShieldCheck size={24} className="text-white" />
                </div>
                <h3 className="text-[24px] font-bold text-white leading-snug mb-4 tracking-tight">Outcome-Driven<br />Infrastructure.</h3>
                <p className="text-[15px] leading-[1.6] text-white/80 flex-grow">We don't just sell licenses. C9 owns the operational outcome. From identity hardening to hardware failure, our Australian team is the single point of accountability.</p>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="text-[32px] font-bold text-white tracking-tight mb-2">100% Accountable</div>
                  <div className="text-[12px] font-bold uppercase tracking-widest text-white/60">Zero Vendor-Blame Shifting</div>
                </div>
              </div>
            </ScaleIn>

            {[
              { icon: Zap, title: 'Consolidated Support', body: 'Replace multiple vendors with a single, expert IT and Telco partner.' },
              { icon: GlobeIcon, title: 'National Support Fleet', body: 'Consistent service and device deployment across all Australian sites.' },
              { icon: Lock, title: 'Managed Security Ops', body: 'Persistent monitoring and incident response for the remote edge.' },
              { icon: TrendingUp, title: 'Transparent Scaling', body: 'Add remote users with confidence, backed by clear per-user pricing.' },
            ].map(({ icon: Icon, title, body }, i) => (
              <ScaleIn key={title} delay={i * 0.07}>
                <div className="rounded-[32px] p-8 border border-black/10 transition-all duration-500 h-full group bg-[#F9FAFB] hover:shadow-2xl hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-[16px] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-[1.15] group-hover:-rotate-3 bg-white shadow-sm border border-black/5" style={{ color: P }}>
                    <Icon size={22} strokeWidth={2.5} />
                  </div>
                  <h3 className="c9-card-title mb-2.5">{title}</h3>
                  <p className="c9-body !text-[14px]">{body}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRICING SECTION (Standardized) */}
      <section id="pricing" className="py-12 md:py-20" style={{ background: PL }}>
        <div className="c9-container">
          <FadeUp className="text-center max-w-[640px] mx-auto mb-20">
            <Eyebrow>Transparent Management</Eyebrow>
            <h2 className="c9-section-heading mb-6">Predictable Costs.<br />No Hidden Risks.</h2>
            <p className="c9-body">Flexible pricing designed for Australian businesses of all scales. No long-term lock-ins on licensing—just operational excellence.</p>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 0.1} className="h-full">
                <motion.div whileHover={{ y: plan.highlight ? -8 : -4 }} className="relative h-full flex flex-col rounded-3xl p-8 border transition-all duration-300 shadow-sm" style={{ background: plan.highlight ? P : '#fff', borderColor: plan.highlight ? P : BD, boxShadow: plan.highlight ? '0 24px 80px rgba(93,0,214,0.28)' : undefined }}>
                  <span className="text-[11px] font-bold uppercase tracking-widest mb-4 block" style={{ color: plan.highlight ? 'rgba(255,255,255,0.6)' : TM }}>{plan.tag}</span>
                  <h3 className="c9-card-title mb-2" style={{ color: plan.highlight ? '#fff' : '#0c1024' }}>{plan.name}</h3>
                  <p className="c9-body mb-6" style={{ color: plan.highlight ? 'rgba(255,255,255,0.7)' : 'gray' }}>{plan.desc}</p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-[52px] font-bold leading-none" style={{ color: plan.highlight ? '#fff' : P }}>{plan.price}</span>
                    <span className="text-[14px]" style={{ color: plan.highlight ? 'rgba(255,255,255,0.5)' : TM }}>{plan.period}</span>
                  </div>
                  <div className="flex flex-col gap-3 mb-8 flex-grow">
                    {plan.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <CheckCircle2 size={12} className="shrink-0" style={{ color: plan.highlight ? 'rgba(255,255,255,0.75)' : P }} />
                        <span className="text-[14px]" style={{ color: plan.highlight ? 'rgba(255,255,255,0.85)' : '#4C587E' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="mt-auto flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-[15px] transition-all duration-300" style={plan.highlight ? { background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' } : { background: `${P}0D`, color: P, border: `1px solid ${BD}` }}>
                    Select Plan <ArrowRight size={15} />
                  </Link>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ & FEEDBACK (Standardized) */}
      <section className="py-20 md:py-24 bg-white">
        <div className="c9-container">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <Eyebrow>Enterprise Readiness</Eyebrow>
            <h2 className="c9-section-heading">Operational FAQ.</h2>
          </div>
          <div className="max-w-[900px] mx-auto">
            <FAQSection items={FAQS} />
          </div>
        </div>
      </section>

      {/* 9. CROSS-PAGE NAVIGATION */}
      <FullStackSection 
        title="Remote Work Is One Piece. See the Full Stack."
        description="Secure remote access requires unified identity and device management. Explore the connected workplace services that complete your digital perimeter."
        services={[
          { title: 'Managed Microsoft 365', href: '/modern-workplace/productivity' },
          { title: 'Endpoint Management', href: '/modern-workplace/endpoint-management' },
          { title: 'Compliance & Data Protection', href: '/modern-workplace/compliance-data-protection' },
          { title: 'Microsoft Teams Calling', href: '/telco/microsoft-teams-calling' },
        ]}
      />

      {/* 10. FINAL CTA (Standardized Form) */}
      <section id="risk-audit">
        <WpConsultationForm 
          showHeader={false}
          eyebrow="Secure Remote Audit"
          title="Eliminate Remote Work Security Gaps"
          description="Book a 30-minute review with an Australian engineering lead. We'll identify operational risks in your current remote setup and provide a stabilization roadmap."
          formTitle="Get Risk Review"
        />
      </section>

    </div>
  );
}
