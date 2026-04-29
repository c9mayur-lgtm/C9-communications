'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, CheckCircle2, Phone, Star, Zap, Clock, Lock, Shield, Monitor, PhoneCall, ShieldCheck, Laptop, UserCheck, Cloud, TrendingUp, Users as UsersIcon } from 'lucide-react';
import {
  P, PL, T, TM, TM2, BD,
  FadeUp, ScaleIn, Eyebrow,
  InfraCarousel, OtherSolutions, FAQSection
} from './components';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { ServiceTestimonialKajabi } from '@/components/wordpress/ServiceTestimonialKajabi';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';

const MW_FAQS = [
  { q:'How does C9 handle the transition from our current provider?', a:'We manage a staged, non-disruptive migration. Your existing environment remains stable while we build and validate your new C9-managed tenant. Only after rigorous UAT (User Acceptance Testing) do we move your users, ensuring zero downtime and total data integrity.' },
  { q:'Who owns the operational risk during the rollout?', a:'C9 takes full accountability for the transition. We provide a dedicated migration engineer who owns the outcome from initial audit to final user onboarding. We don\'t just move data; we enforce policy, security, and stability from day one.' },
  { q:'Can we retain our existing Microsoft 365 licensing?', a:'Yes. We audit your current licensing to eliminate redundant spend and ensure your SKUs align with your security and compliance requirements. We often reduce monthly licensing overhead by optimizing seat usage and removing unused features.' },
  { q:'What is the response time for critical endpoint issues?', a:'Our Australian-based engineering team operates under strict enterprise SLAs. Critical device or access issues are addressed immediately by engineers who have deep context on your environment—no offshore tiers, no generic scripts.' },
  { q:'How do you manage device compliance for remote staff?', a:'We enforce automated compliance policies through Microsoft Intune. If a device fails security requirements (MFA disabled, out-of-date OS, or compromised identity), it is automatically quarantined from corporate data until rectified.' },
];

/* ── Pricing ─────────────────────────────────────────────────── */
const PLANS = [
  { name:'Productivity (Startup)', price:'$15', period:'/user/mo', highlight:false, tag:'STARTUP READY', desc:'Managed M365 infrastructure and identity control.', features:['Full Tenant Management','Essential Eight Alignment','99.9% Uptime SLA','Managed Mail & Collaboration','C9 Engineering Support','Onshore SOC Triage'] },
  { name:'Modern Workplace (Growth)', price:'$30', period:'/user/mo', highlight:true, tag:'GROWTH BASELINE', desc:'Integrated voice and infrastructure consolidation.', features:['All Productivity features','Microsoft Teams Phone System','Intune Device Management','Conditional Access Enforced','Prioritised Engineering Support','Carrier-Grade Voice SLA'] },
  { name:'Enterprise Control', price:'Custom', period:'', highlight:false, tag:'TOTAL GOVERNANCE', desc:'Full device lifecycle and security governance at scale.', features:['All Growth features','Lifecycle Device Management','Managed EDR & SIEM','Zero Trust Data Governance','Compliance Audit Readiness','Security Incident Response'] },
];

export default function ModernWorkplacePage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ══ HERO (Standardized Light 2-Column) ════════ */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F9FBFF] -z-10 hidden lg:block" />
        
        <div className="c9-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <FadeUp>
                <Eyebrow>Operational Infrastructure Governance</Eyebrow>
                <h1 className="c9-hero-title mb-8 leading-[1.1] font-bold">
                  Consolidated Control Over Your <br />
                  <span className="text-[#5D00D6]">Distributed Workplace.</span>
                </h1>
                <p className="c9-body text-slate-600 mb-10 text-xl max-w-2xl leading-relaxed">
                  Stop managing vendors. Start managing results. C9 operates your devices, identity, and security as a single, accountable utility—delivering zero-downtime productivity without the operational overhead.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-[#5D00D6]/20 group">
                    Request Operational Audit <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-black/10 text-[#0c1024] rounded-full h-14 px-8 font-bold text-[14px] hover:bg-black/5 transition-all backdrop-blur-sm">
                    Talk to an Engineering Lead
                  </Link>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">Australian Support Operations Active</span>
                  </div>
                  <div className="h-4 w-px bg-black/10" />
                  <div className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">99.9% Uptime Guarantee</div>
                </div>
              </FadeUp>
            </div>

            <div className="relative">
              <ScaleIn>
                <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] border border-black/5">
                  <img 
                    src="/modern_workplace_hero_meeting_room_1777366787622.png" 
                    alt="Modern Workplace Infrastructure" 
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-10 opacity-60" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60" />
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderBottom: `1px solid ${BD}` }}>
        <div className="c9-container py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[{v:'60+',l:'Active Enterprise Sites'},{v:'99.9%',l:'Infrastructure Uptime'},{v:'Real-Time',l:'Incident Response'},{v:'100%',l:'Australian Sovereignty'}].map(({ v, l }, i) => (
              <FadeUp key={l} delay={i * 0.07} className="text-center">
                <div className="text-[32px] md:text-[42px] font-bold leading-none tracking-tight mb-3" style={{ color: P }}>{v}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">{l}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HIGHLIGHT STRIP ════════════ */}
      <section className="py-12 md:py-16 overflow-hidden" style={{ background: PL }}>
        <div className="c9-container">
          <FadeUp className="text-center mb-12">
            <Eyebrow>Managed Operational Domains</Eyebrow>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Laptop, label:'Endpoints', sub:'Centralized compliance & rollout' },
              { icon: UserCheck, label:'Identities', sub:'Zero Trust access control' },
              { icon: Cloud, label:'Governance', sub:'Policy-enforced data security' },
              { icon: Monitor, label:'Unified Comms', sub:'Consolidated voice & video' },
            ].map(({ icon: Icon, label, sub }, i) => (
              <ScaleIn key={label} delay={i*0.07}>
                <div className="text-center p-6 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group" style={{ borderColor: BD }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" style={{ background: `${P}12`, color: P }}>
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <div className="c9-card-title !text-[14px] mb-1">{label}</div>
                  <div className="c9-body !text-[12px] !leading-normal">{sub}</div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES BENTO GRID ═══════════════════════════════════ */}
      <section id="services" className="py-12 md:py-20" style={{ background: '#F9FBFF' }}>
        <div className="c9-container">
          <FadeUp className="max-w-[720px] mb-20">
            <h2 className="c9-section-heading mb-6 font-bold">
              Workplace Operations.<br />Owned and Accountable.
            </h2>
            <p className="c9-body text-xl">
              We eliminate the gap between IT procurement and business results. C9 manages the complete lifecycle of your workplace infrastructure, from "Day One" readiness to persistent Essential Eight governance.
            </p>
          </FadeUp>

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Row 1 — Cell 1: Microsoft 365 (2 cols wide) */}
            <ScaleIn className="lg:col-span-2" delay={0}>
              <motion.div
                className="rounded-[32px] border border-black/10 overflow-hidden h-full flex flex-col transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1 bg-[#F9FAFB]"
              >
                <div className="px-8 pt-10 pb-6 text-center">
                  <h3 className="c9-card-title mb-3">Managed Productivity <span className="text-[#5D00D6]">— Operational Ownership.</span></h3>
                  <p className="c9-body max-w-xl mx-auto">
                    Business Value: Total elimination of M365 management overhead. C9 handles licensing, tenant security hardening, and 24/7 Australian-based user support.
                  </p>
                </div>
                <div className="px-6 md:px-12 pb-10 mt-auto flex justify-center overflow-hidden">
                  <img 
                    src="/modern_workplace_managed_productivity_desktop_1777367167269.png" 
                    className="w-full max-w-[800px] aspect-video object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]" 
                    alt="Managed Productivity"
                  />
                </div>
              </motion.div>
            </ScaleIn>

            {/* Row 1 — Cell 2: Teams (1 col) */}
            <ScaleIn delay={0.08}>
              <motion.div
                className="rounded-[32px] border border-black/10 overflow-hidden h-full flex flex-col transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1 bg-[#F9FAFB]"
              >
                <div className="px-7 pt-10 pb-6 text-center">
                  <h3 className="c9-card-title mb-3">Unified Comms <span className="text-[#6264A7]">— Infrastructure Consolidation.</span></h3>
                  <p className="c9-body">
                    Business Value: Consolidate voice, video, and chat into a single managed carrier-grade platform with 99.95% uptime reliability.
                  </p>
                </div>
                <div className="px-6 pb-10 mt-auto flex justify-center overflow-hidden">
                  <img 
                    src="/modern_workplace_teams_unified_comms_1777367199429.png" 
                    className="w-full h-48 object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.05]" 
                    alt="Unified Comms"
                  />
                </div>
              </motion.div>
            </ScaleIn>

            {/* Row 2 — Cell 3: Security (1 col) */}
            <ScaleIn delay={0.14}>
              <motion.div
                className="rounded-[32px] border border-black/10 overflow-hidden h-full flex flex-col transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1 bg-[#0B0B0F] text-white"
              >
                <div className="px-7 pt-10 pb-10 text-center flex-grow flex flex-col">
                  <div className="w-20 h-20 rounded-3xl bg-[#5D00D6]/10 flex items-center justify-center mx-auto mb-8 text-[#5D00D6]">
                    <ShieldCheck size={40} />
                  </div>
                  <h3 className="c9-card-title !text-white mb-3">Zero Trust Identity Control.</h3>
                  <p className="c9-body !text-white/60">
                    Business Value: Mitigate identity risk with enforced MFA and Conditional Access. We engineer the security baselines so your users can&apos;t bypass them.
                  </p>
                  <div className="mt-8 pt-8 border-t border-white/5 text-left space-y-3">
                    {['Automated MFA Enforcement', 'Conditional Access Policies', 'Defender for Identity'].map(t => (
                      <div key={t} className="flex items-center gap-2 text-[12px] font-bold text-white/80">
                        <Check size={14} className="text-[#5D00D6]" /> {t}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScaleIn>

            {/* Row 2 — Cell 4: Device Management (1 col) */}
            <ScaleIn delay={0.2}>
              <motion.div
                className="rounded-[32px] border border-black/10 overflow-hidden h-full flex flex-col transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1 bg-[#F9FAFB]"
              >
                <div className="px-7 pt-10 pb-10 text-center flex-grow flex flex-col">
                  <div className="w-20 h-20 rounded-3xl bg-blue-500/10 flex items-center justify-center mx-auto mb-8 text-blue-600">
                    <Laptop size={40} />
                  </div>
                  <h3 className="c9-card-title mb-3">Procurement-Ready Compliance.</h3>
                  <p className="c9-body">
                    Business Value: Rapid, zero-touch deployment of compliant hardware. Every device arrives configured to your exact security and operational standards.
                  </p>
                  <div className="mt-8 pt-8 border-t border-black/5 text-left space-y-3">
                    {['Zero-Touch Enrolment', 'Intune Policy Management', 'Remote Wipe & Lock'].map(t => (
                      <div key={t} className="flex items-center gap-2 text-[12px] font-bold text-slate-900">
                        <Check size={14} className="text-blue-500" /> {t}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScaleIn>

            {/* Row 2 — Cell 5: Expert Support (1 col) */}
            <ScaleIn delay={0.26}>
              <motion.div
                className="rounded-[32px] border border-purple-500/20 overflow-hidden h-full flex flex-col transition-all duration-500 group hover:shadow-[0_20px_60px_rgba(93,0,214,0.15)] hover:-translate-y-1 bg-[#F9FAFB]"
              >
                <div className="px-7 pt-10 pb-10 text-center flex-grow flex flex-col">
                  <div className="w-20 h-20 rounded-3xl bg-purple-500/10 flex items-center justify-center mx-auto mb-8 text-purple-600">
                    <UserCheck size={40} />
                  </div>
                  <h3 className="c9-card-title mb-3">Root-Cause Accountability.</h3>
                  <p className="c9-body">
                    Business Value: Access local engineering leads who own the problem until resolution. No hand-offs, no vendor-blame shifting.
                  </p>
                  <div className="mt-8 pt-8 border-t border-black/5 text-left space-y-3">
                    {['Sydney-Based L3 Engineers', 'Strict Enterprise SLAs', 'Accountable Ownership'].map(t => (
                      <div key={t} className="flex items-center gap-2 text-[12px] font-bold text-slate-900">
                        <Check size={14} className="text-purple-500" /> {t}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-8 pb-10 text-center mt-auto">
                   <div className="text-[20px] font-bold text-[#0c1024] mb-1">1800 000 299</div>
                   <div className="c9-eyebrow !text-gray-400 !mb-0">Australian Senior Engineering</div>
                </div>
              </motion.div>
            </ScaleIn>

          </div>
        </div>
      </section>

      {/* ══ SECTION 3.5: PROTOCOLS (CEO PERSONA ALIGNMENT) ════════════ */}
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
                Transitioning from a failing provider shouldn&apos;t be a risk. We utilize a structured takeover protocol to audit, secure, and stabilize your environment without operational disruption.
              </p>
              <div className="space-y-6">
                {[
                  { t: 'Phase 1: Deep Audit', d: 'Comprehensive scan of technical debt, ghost accounts, and security holes.' },
                  { t: 'Phase 2: Baseline Hardening', d: 'Enforcing MFA, Conditional Access, and Essential Eight standards.' },
                  { t: 'Phase 3: Operational Stabilisation', d: 'Restoring uptime and performance while eliminating recurring issues.' }
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
              <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.1] mb-8 font-proxima tracking-tight text-[#0c1024]">
                The Mandatory <br />
                <span className="text-[#5D00D6]">Day One Guarantee.</span>
              </h2>
              <p className="text-[18px] text-gray-600 mb-10 leading-relaxed font-medium">
                For new sites and startups, &quot;good enough&quot; is not an option. We guarantee a fully-operational, secure workplace environment on your first day of operation.
              </p>
              <div className="bg-[#0B0B0F] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-[#5D00D6]/20 transition-all shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#5D00D6]/5 rounded-bl-full group-hover:bg-[#5D00D6]/10 transition-all" />
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <ShieldCheck size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[18px] text-white">Guaranteed Operational Uptime</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Lock size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[18px] text-white">Security Baseline Enforced</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <UsersIcon size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[18px] text-white">Full Staff Readiness</span>
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

      {/* ══ FULL-BLEED DARK SECTION ════════ */}
      <section className="py-12 md:py-20 relative overflow-hidden" style={{ background: '#0c1024' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]" style={{ background: 'radial-gradient(ellipse, rgba(93,0,214,0.3) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle, rgba(98,100,167,0.2) 0%, transparent 70%)' }} />
        </div>
        <div className="c9-container relative z-10">
          <FadeUp className="text-center max-w-[680px] mx-auto mb-16">
            <Eyebrow light>Migration & Continuity</Eyebrow>
            <h2 className="c9-section-heading mb-5 !text-white">
              Risk-Managed Transition. Zero Disruption.
            </h2>
            <p className="c9-body !text-white/60">
              We manage the entire migration from legacy providers to a stabilized C9 environment. Our staged rollout model ensures your business remains active while we harden policies and validate compliance at every step.
            </p>
          </FadeUp>
          <InfraCarousel />
        </div>
      </section>

      {/* ══ OTHER SOLUTIONS ════════════════════════════════════════ */}
      <section id="other-solutions" className="py-12 md:py-20" style={{ background: PL }}>
        <div className="c9-container">
          <FadeUp className="max-w-[620px] mb-16">
            <Eyebrow>Enterprise Physical Ops</Eyebrow>
            <h2 className="c9-section-heading mb-6">
              Consolidated Infrastructure.
            </h2>
            <p className="c9-body text-lg">
              Integrate physical workplace technology into your managed IT ecosystem. CCTV intelligence, print fleet management, and visitor governance — all under one support model.
            </p>
          </FadeUp>
          <OtherSolutions />
        </div>
      </section>

      {/* ══ WHY C9 bento ════════════════════════════════════════════ */}
      <section className="py-12 md:py-20" style={{ background: '#fff' }}>
        <div className="c9-container">
          <FadeUp className="text-center max-w-[640px] mx-auto mb-20">
            <Eyebrow>Operational Outcomes</Eyebrow>
            <h2 className="c9-section-heading font-bold">The C9 Advantage.</h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large feature card */}
            <ScaleIn className="md:col-span-2 lg:col-span-1 lg:row-span-2">
              <div className="h-full rounded-[32px] p-8 flex flex-col relative overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1" style={{ background: P, borderColor: P, minHeight: 340 }}>
                <div className="absolute top-0 right-0 w-48 h-48 opacity-10" style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5 border border-white/20 backdrop-blur-sm shadow-sm">
                  <Monitor size={24} className="text-white" />
                </div>
                <h3 className="text-[24px] font-bold text-white leading-snug mb-4 tracking-tight">Day One Readiness.<br />Guaranteed.</h3>
                <p className="text-[15px] leading-[1.6] text-white/80 flex-grow">Every endpoint arrives pre-configured to your security standard. We ensure every user onboarding is a silent, compliant, and productive event for your team.</p>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="text-[32px] font-bold text-white tracking-tight mb-2">Strategic Readiness</div>
                  <div className="text-[12px] font-bold uppercase tracking-widest text-white/60">Integrated Security Governance</div>
                </div>
              </div>
            </ScaleIn>

            {[
              { icon:Zap, title:'Reduced Vendor Overhead', body:'Consolidate multiple providers into a single, accountable infrastructure partner.' },
              { icon:Shield, title:'Persistent Governance', body:'Continuous monitoring of policy enforcement across every user, device, and login.' },
              { icon:Lock, title:'Operationalized Security', body:"Zero Trust architectures that follow your users, ensuring data integrity at every site." },
              { icon:TrendingUp, title:'Predictable Scaling', body:'Add sites and users with confidence. Fully managed growth backed by clear SLAs.' },
            ].map(({ icon: Icon, title, body }, i) => (
              <ScaleIn key={title} delay={i * 0.07}>
                <motion.div 
                  className="rounded-[32px] p-8 border border-black/10 transition-all duration-500 h-full group bg-[#F9FAFB] hover:shadow-2xl hover:-translate-y-1" 
                >
                  <div className="w-12 h-12 rounded-[16px] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-[1.15] group-hover:-rotate-3 bg-white shadow-sm border border-black/5" style={{ color: P }}>
                    <Icon size={22} strokeWidth={2.5} />
                  </div>
                  <h3 className="c9-card-title mb-2.5">{title}</h3>
                  <p className="c9-body !text-[14px]">{body}</p>
                </motion.div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING ═════════════════════════════════════════════════ */}
      <section id="pricing" className="py-12 md:py-20" style={{ background: PL }}>
        <div className="c9-container">
          <FadeUp className="text-center max-w-[640px] mx-auto mb-20">
            <Eyebrow>SLA-Backed Management</Eyebrow>
            <h2 className="c9-section-heading mb-6 font-bold">Predictable Cost.<br />Enterprise Accountability.</h2>
            <p className="c9-body">Transparent pricing for full infrastructure ownership. All plans include Australian engineering leads and zero hidden fees.</p>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 0.1} className="h-full">
                <motion.div whileHover={{ y: plan.highlight ? -8 : -4 }} className="relative h-full flex flex-col rounded-3xl p-8 border transition-all duration-300" style={{ background: plan.highlight ? P : '#fff', borderColor: plan.highlight ? P : BD, boxShadow: plan.highlight ? '0 24px 80px rgba(93,0,214,0.28)' : undefined }}>
                  {plan.highlight && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap" style={{ background: '#3A0090', color: '#fff' }}>{plan.tag}</div>}
                  {!plan.highlight && <span className="text-[11px] font-bold uppercase tracking-widest mb-4 block" style={{ color: TM }}>{plan.tag}</span>}
                  {plan.highlight && <div className="mb-4 h-5" />}
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
                        <span className="text-[14px]" style={{ color: plan.highlight ? 'rgba(255,255,255,0.85)' : TM2 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-[16px] transition-all duration-300 active:scale-95" style={plan.highlight ? { background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' } : { background: `${P}0D`, color: P, border: `1px solid ${BD}` }}>
                    Speak to Engineering <ArrowRight size={15} />
                  </Link>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ═════════════════════════════════════════════ */}
      <ServiceTestimonialKajabi />

      {/* ══ FAQ ═════════════════════════════════════════════════════ */}
      <WpFAQAndFeedback showTestimonials={false} faqItems={MW_FAQS} showStillQuestions={false} />

      {/* ══ CTA ═════════════════════════════════════════════════════ */}
      <WpConsultationForm 
        showHeader={false}
        eyebrow="Managed Workplace Audit"
        title="Stabilize Your Distributed Workforce Operations"
        description="Eliminate vendor fragmentation and regain control. Book a 30-minute consultation with an Australian engineering lead to review your current environment and migration path."
        formTitle="Get Operational Audit"
      />

    </div>
  );
}
