'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, CheckCircle2, Phone, Star, Zap, Clock, Lock, Shield, Monitor, PhoneCall, ShieldCheck, Laptop, UserCheck, Cloud, TrendingUp, Users as UsersIcon, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import {
  P, PL, T, TM, TM2, BD,
  FadeUp, ScaleIn, Eyebrow,
  InfraCarousel, OtherSolutions, FAQSection
} from './components';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { ServiceTestimonialKajabi } from '@/components/wordpress/ServiceTestimonialKajabi';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { C9Button } from '@/components/design-system/C9Button';
import { handleCtaClick } from '@/lib/utils';

const MW_FAQS = [
  { q:'How do you transition us to a unified workplace stack?', a:'We deploy a phased integration strategy. Your communication layer—voice, video, and chat—is established first. We then bring your applications, devices, and security policies into a single managed environment, ensuring zero disruption.' },
  { q:'Can we integrate our existing platforms like Microsoft Teams?', a:'Absolutely. We build your unified workplace around core platforms like Microsoft Teams, transforming them from standalone tools into a fully integrated communication and collaboration system.' },
  { q:'Who manages the day-to-day operations of the workplace environment?', a:'C9 assumes full operational ownership. From proactive device management to securing identities and maintaining carrier-grade voice uptime, we manage the entire stack so your IT team doesn\'t have to.' },
  { q:'How does the unified model improve security?', a:'By centralizing communication, devices, and access, we eliminate the security gaps common in fragmented networks. Every connection, call, and file access is governed by a single Zero Trust security layer.' },
  { q:'What level of support do end-users receive?', a:'Your team is supported by our AU-Managed Engineering. Because we manage the entire unified stack—from the network connection to the endpoint device—we resolve issues at the root level without vendor hand-offs.' },
];

/* ── Pricing ─────────────────────────────────────────────────── */
const PLANS = [
  { name:'Unified Baseline (Startup)', price:'$15', period:'/user/mo', highlight:false, tag:'STARTUP READY', desc:'Core communication and identity integration.', features:['Unified Communication Layer','Identity & Access Control','99.9% Uptime SLA','Managed Collaboration Environment','C9 Engineering Support','AU-Managed SOC Triage'] },
  { name:'Integrated Workplace (Growth)', price:'$30', period:'/user/mo', highlight:true, tag:'GROWTH BASELINE', desc:'Complete voice, device, and workflow unification.', features:['All Baseline features','Enterprise Voice Integration','Unified Endpoint Management','Zero Trust Policy Enforcement','Prioritised Engineering Support','Carrier-Grade Voice SLA'] },
  { name:'Total Governance', price:'Custom', period:'', highlight:false, tag:'TOTAL GOVERNANCE', desc:'Full-stack lifecycle management and advanced security.', features:['All Integrated features','Complete Device Lifecycle','Managed EDR & SIEM','Advanced Data Governance','Compliance Audit Readiness','Security Incident Response'] },
];

export default function ModernWorkplacePage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ══ HERO (Standardized Light 2-Column) ════════ */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F9FBFF] -z-10 hidden lg:block" />
        
        <div className="c9-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <FadeUp>
                <Eyebrow>Unified Workplace Infrastructure</Eyebrow>
                <h1 className="c9-hero-title mb-8 leading-[1.1] font-bold">
                  A Unified Workplace Stack Powered by <br />
                  <span className="text-[#5D00D6]">Unified Communications.</span>
                </h1>
                <p className="c9-body text-slate-800 mb-10 text-xl max-w-2xl leading-relaxed font-medium">
                  Stop treating voice, devices, and security as separate problems. We design, integrate, and manage your entire workplace as a single communication-driven system—delivering a seamless experience for your users and total control for your IT team.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <C9Button 
                    size="lg" 
                    className="rounded-none shadow-xl"
                    onClick={handleCtaClick}
                  >
                    Design Your Unified Workplace 
                  </C9Button>
                  <C9Button 
                    variant="outline"
                    size="lg" 
                    className="rounded-none border-2 border-slate-200 text-slate-700 hover:border-[#5D00D6] hover:text-[#5D00D6]"
                    onClick={handleCtaClick}
                  >
                    Speak to a Workplace Specialist
                  </C9Button>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-600 text-[11px] font-bold uppercase tracking-widest">AU-Managed Support Operations Active</span>
                  </div>
                  <div className="h-4 w-px bg-black/10" />
                  <div className="text-slate-600 text-[11px] font-bold uppercase tracking-widest">99.9% Uptime Guarantee</div>
                </div>
              </FadeUp>
            </div>

            <div className="relative">
              <ScaleIn>
                <div className="relative z-10 rounded-none overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] border border-slate-100 aspect-[4/3]">
                  <Image 
                    src="/modern_workplace_hero_meeting_room_1777366787622.png" 
                    alt="Modern Workplace Infrastructure" 
                    fill
                    className="object-cover"
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1280px) 100vw, 50vw"
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
            {[{v:'60+',l:'Active Enterprise Sites'},{v:'99.9%',l:'Infrastructure Uptime'},{v:'Real-Time',l:'Incident Response'},{v:'Managed',l:'AU Data Sovereignty'}].map(({ v, l }, i) => (
              <FadeUp key={l} delay={i * 0.07} className="text-center">
                <div className="text-[32px] md:text-[42px] font-black leading-none tracking-tight mb-3" style={{ color: P }}>{v}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-800">{l}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HIGHLIGHT STRIP ════════════ */}
      <section className="py-12 md:py-16 overflow-hidden" style={{ background: PL }}>
        <div className="c9-container">
          <FadeUp className="text-center mb-12">
            <Eyebrow>The Unified Workplace Layers</Eyebrow>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: PhoneCall, label:'Core Communication', sub:'Integrated voice, video, and messaging' },
              { icon: Cloud, label:'Collaboration & Apps', sub:'Centralized workflows and document control' },
              { icon: Laptop, label:'Connected Devices', sub:'Unified endpoint deployment and management' },
              { icon: ShieldCheck, label:'Security & Access', sub:'Zero Trust identity and data protection' },
            ].map(({ icon: Icon, label, sub }, i) => (
              <ScaleIn key={label} delay={i*0.07}>
                <div className="text-center p-6 rounded-none border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: BD }}>
                  <div className="w-12 h-12 rounded-none flex items-center justify-center mx-auto mb-4 duration-300 group-hover:scale-110 group-hover:-rotate-3" style={{ background: `${P}12`, color: P }}>
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="c9-card-title !text-[14px] mb-1">{label}</div>
                  <div className="c9-body !text-[12px] !leading-normal text-slate-800">{sub}</div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES BENTO GRID ═══════════════════════════════════ */}
      <section id="services" className="py-12 md:py-20" style={{ background: '#F9FBFF' }}>
        <div className="c9-container">
          <FadeUp className="text-center max-w-[720px] mx-auto mb-20">
            <h2 className="c9-section-heading mb-6 font-bold">
              One Unified System.<br />Fully Managed.
            </h2>
            <p className="c9-body text-xl">
              We eliminate the friction of fragmented tools. By placing communication at the core, we build a seamless environment where your calling, collaboration, devices, and security operate as a single managed stack.
            </p>
          </FadeUp>

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Row 1 — Cell 1: Microsoft 365 (2 cols wide) */}
            <ScaleIn className="lg:col-span-2" delay={0}>
              <motion.div
                className="rounded-none border border-slate-100 overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-white"
              >
                <div className="px-8 pt-10 pb-6 text-center">
                  <h3 className="c9-card-title mb-3">Collaboration &amp; Application Layer <span className="text-[#5D00D6]">— Integrated Workflows.</span></h3>
                  <p className="c9-body max-w-xl mx-auto text-slate-800">
                    Business Value: We transform disconnected applications into a cohesive environment. Built on platforms like Microsoft 365, we manage the entire suite to ensure seamless collaboration and document control.
                  </p>
                </div>
                <div className="px-6 md:px-12 pb-10 mt-auto flex justify-center overflow-hidden">
                  <div className="relative w-full max-w-[800px] aspect-video">
                    <Image 
                      src="/modern_workplace_managed_productivity_desktop_1777367167269.png" 
                      fill
                      className="object-cover rounded-none shadow-2xl duration-700 group-hover:scale-[1.03]" 
                      alt="Managed Productivity"
                      sizes="(max-width: 1280px) 100vw, 800px"
                    />
                  </div>
                </div>
              </motion.div>
            </ScaleIn>

            {/* Row 1 — Cell 2: Teams (1 col) */}
            <ScaleIn delay={0.08}>
              <motion.div
                className="rounded-none border border-slate-100 overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-white"
              >
                <div className="px-7 pt-10 pb-6 text-center">
                  <h3 className="c9-card-title mb-3">Core Communication Layer <span className="text-[#6264A7]">— Unified Voice &amp; Video.</span></h3>
                  <p className="c9-body text-slate-800">
                    Business Value: Communication is the foundation of the modern workplace. We integrate enterprise calling, video, and chat into a single managed system with 99.95% uptime reliability.
                  </p>
                </div>
                <div className="px-6 pb-10 mt-auto flex justify-center overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image 
                      src="/modern_workplace_teams_unified_comms_1777367199429.png" 
                      fill
                      className="object-cover rounded-none shadow-2xl duration-700 group-hover:scale-[1.05]" 
                      alt="Unified Comms"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </motion.div>
            </ScaleIn>

            {/* Row 2 — Cell 3: Security (1 col) */}
            <ScaleIn delay={0.14}>
              <motion.div
                className="rounded-none border border-white/10 overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-[#0c1024] text-white"
              >
                <div className="px-7 pt-10 pb-10 text-center flex-grow flex flex-col">
                  <div className="w-20 h-20 rounded-none bg-[#5D00D6]/10 flex items-center justify-center mx-auto mb-8 text-[#5D00D6]">
                    <ShieldCheck size={40} aria-hidden="true" />
                  </div>
                  <h3 className="c9-card-title !text-white mb-3">Security &amp; Access Layer.</h3>
                  <p className="c9-body !text-white/95">
                    Business Value: Protect the entire unified stack with identity-driven security. Every call, file, and login is governed by enforced MFA and Conditional Access baselines.
                  </p>
                  <div className="mt-8 pt-8 border-t border-white/5 text-left space-y-3">
                    {['Automated MFA Enforcement', 'Conditional Access Policies', 'Defender for Identity'].map(t => (
                      <div key={t} className="flex items-center gap-2 text-[12px] font-bold text-white/95">
                        <Check size={14} className="text-[#5D00D6]" aria-hidden="true" /> {t}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScaleIn>

            {/* Row 2 — Cell 4: Device Management (1 col) */}
            <ScaleIn delay={0.2}>
              <motion.div
                className="rounded-none border border-slate-100 overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-white"
              >
                <div className="px-7 pt-10 pb-10 text-center flex-grow flex flex-col">
                  <div className="w-20 h-20 rounded-none bg-blue-500/10 flex items-center justify-center mx-auto mb-8 text-blue-600">
                    <Laptop size={40} aria-hidden="true" />
                  </div>
                  <h3 className="c9-card-title mb-3">Connected Device Layer.</h3>
                  <p className="c9-body text-slate-800">
                    Business Value: Bring every endpoint into the unified system. We provide rapid, zero-touch deployment so devices arrive fully configured to your exact security and communication standards.
                  </p>
                  <div className="mt-8 pt-8 border-t border-black/5 text-left space-y-3">
                    {['Zero-Touch Enrolment', 'Intune Policy Management', 'Remote Wipe & Lock'].map(t => (
                      <div key={t} className="flex items-center gap-2 text-[12px] font-bold text-slate-900">
                        <Check size={14} className="text-blue-500" aria-hidden="true" /> {t}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScaleIn>

            {/* Row 2 — Cell 5: Expert Support (1 col) */}
            <ScaleIn delay={0.26}>
              <motion.div
                className="rounded-none border border-[#5D00D6]/20 overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-[0_20px_60px_rgba(93,0,214,0.15)] hover:-translate-y-1 bg-white"
              >
                <div className="px-7 pt-10 pb-10 text-center flex-grow flex flex-col">
                  <div className="w-20 h-20 rounded-none bg-purple-500/10 flex items-center justify-center mx-auto mb-8 text-purple-600">
                    <UserCheck size={40} aria-hidden="true" />
                  </div>
                  <h3 className="c9-card-title mb-3">Single-Partner Accountability.</h3>
                  <p className="c9-body text-slate-800">
                    Business Value: Because we design and manage the entire workplace stack, we own the resolution. Access local engineering leads with deep context on your unified environment.
                  </p>
                  <div className="mt-8 pt-8 border-t border-black/5 text-left space-y-3">
                    {['AU-Managed L3 Engineers', 'Strict Enterprise SLAs', 'Accountable Ownership'].map(t => (
                      <div key={t} className="flex items-center gap-2 text-[12px] font-bold text-slate-900">
                        <Check size={14} className="text-purple-500" aria-hidden="true" /> {t}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-8 pb-10 text-center mt-auto">
                   <div className="text-[20px] font-bold text-[#0c1024] mb-1">1800 000 299</div>
                   <div className="c9-eyebrow !text-slate-500 !mb-0">AU-Managed Senior Engineering</div>
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
              <div className="inline-flex items-center gap-2 bg-[#5D00D6]/5 px-4 py-2 rounded-none mb-6 border border-[#5D00D6]/10">
                <span className="text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest">The Unification Protocol</span>
              </div>
              <h2 className="text-[32px] md:text-[42px] font-black leading-[1.1] mb-8 font-proxima tracking-tight text-[#0c1024]">
                The C9 Managed <br />
                <span className="text-[#5D00D6]">System Unification Protocol.</span>
              </h2>
              <p className="text-[18px] text-slate-800 mb-10 leading-relaxed font-bold">
                Transitioning from fragmented tools to a unified stack shouldn&apos;t disrupt operations. We utilize a structured integration protocol to audit, secure, and connect your environment seamlessly.
              </p>
              <div className="space-y-6">
                {[
                  { t: 'Phase 1: Deep Audit', d: 'Comprehensive scan of fragmented communication tools and security gaps.' },
                  { t: 'Phase 2: Baseline Unification', d: 'Establishing the core communication layer and enforcing identity standards.' },
                  { t: 'Phase 3: Operational Stabilisation', d: 'Consolidating applications and devices into the single managed system.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-none bg-[#5D00D6]/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0c1024] text-[16px] mb-1">{item.t}</h4>
                      <p className="text-slate-800 text-[14px] leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="inline-flex items-center gap-2 bg-[#5D00D6]/5 px-4 py-2 rounded-none mb-6 border border-[#5D00D6]/10">
                <span className="text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest">The Unified Launch Guarantee</span>
              </div>
              <h2 className="text-[32px] md:text-[42px] font-black leading-[1.1] mb-8 font-proxima tracking-tight text-[#0c1024]">
                The Mandatory <br />
                <span className="text-[#5D00D6]">Day One Integration.</span>
              </h2>
              <p className="text-[18px] text-slate-800 mb-10 leading-relaxed font-bold">
                For new sites and startups, we bypass fragmentation entirely. We guarantee a fully unified, communication-driven workplace environment on your first day of operation.
              </p>
              <div className="bg-[#0c1024] border border-white/5 rounded-none p-8 relative overflow-hidden hover:border-[#5D00D6]/20 transition-all shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#5D00D6]/5 rounded-bl-full group-hover:bg-[#5D00D6]/10 transition-all" />
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <ShieldCheck size={28} className="text-[#5D00D6]" aria-hidden="true" />
                    <span className="font-bold text-[18px] text-white">Guaranteed Operational Uptime</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Lock size={28} className="text-[#5D00D6]" aria-hidden="true" />
                    <span className="font-bold text-[18px] text-white">Security Baseline Enforced</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <UsersIcon size={28} className="text-[#5D00D6]" aria-hidden="true" />
                    <span className="font-bold text-[18px] text-white">Full Staff Readiness</span>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-white/10">
                  <p className="text-[11px] font-bold text-white/95 uppercase tracking-widest">Protocol Version 4.2 • AU-Managed Deployment Team</p>
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
            <Eyebrow light>System Integration &amp; Continuity</Eyebrow>
            <h2 className="c9-section-heading mb-5 !text-white">
              Risk-Managed Transformation. Zero Disruption.
            </h2>
            <p className="c9-body !text-white/95 font-medium">
              We manage the entire shift from disconnected vendors to a unified C9 stack. Our staged integration model ensures your core communications remain active while we connect your devices, apps, and security policies.
            </p>
          </FadeUp>
          <InfraCarousel />
        </div>
      </section>

      {/* ══ OTHER SOLUTIONS ════════════════════════════════════════ */}
      <section id="other-solutions" className="py-12 md:py-20" style={{ background: PL }}>
        <div className="c9-container">
          <FadeUp className="max-w-[620px] mb-16">
            <Eyebrow>Extended Ecosystem</Eyebrow>
            <h2 className="c9-section-heading mb-6">
              Extend Your Unified Stack.
            </h2>
            <p className="c9-body text-lg text-slate-800 font-medium">
              Integrate your physical workplace into the unified system. CCTV intelligence, print fleet management, and visitor governance — all delivered and supported under our Managed IT framework.
            </p>
          </FadeUp>
          <OtherSolutions />
        </div>
      </section>

      {/* ══ WHY C9 bento ════════════════════════════════════════════ */}
      <section className="py-12 md:py-20" style={{ background: '#fff' }}>
        <div className="c9-container">
          <FadeUp className="text-center max-w-[640px] mx-auto mb-20">
            <Eyebrow>System-Wide Outcomes</Eyebrow>
            <h2 className="c9-section-heading font-bold">The Power of a Unified Stack.</h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large feature card */}
            <ScaleIn className="md:col-span-2 lg:col-span-1 lg:row-span-2">
              <div className="h-full rounded-none p-8 flex flex-col relative overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1" style={{ background: P, borderColor: P, minHeight: 340 }}>
                <div className="absolute top-0 right-0 w-48 h-48 opacity-10" style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
                <div className="w-14 h-14 rounded-none bg-white/20 flex items-center justify-center mb-5 border border-white/20 backdrop-blur-sm shadow-sm">
                  <Monitor size={24} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="text-[24px] font-black text-white leading-snug mb-4 tracking-tight">Seamless User Experience.<br />Total IT Control.</h3>
                <p className="text-[15px] leading-[1.6] text-white/95 flex-grow font-medium">Every component of your workplace—from the network connection to the Teams call—operates in harmony. We ensure your team experiences silent, compliant, and highly productive workflows without the friction of disjointed tools.</p>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="text-[32px] font-black text-white tracking-tight mb-2">Integrated Ecosystem</div>
                  <div className="text-[12px] font-bold uppercase tracking-widest text-white/95">Strategic Readiness</div>
                </div>
              </div>
            </ScaleIn>

            {[
              { icon:Zap, title:'Eliminated Vendor Sprawl', body:'Replace fragmented providers with a single partner who designs, integrates, and manages the entire workplace stack.' },
              { icon:Shield, title:'Communication at the Core', body:'By anchoring the workplace around unified communications, team collaboration becomes native, not an afterthought.' },
              { icon:Lock, title:'System-Wide Security', body:"Secured through integrated identity and protection layers that follow your users across all apps and devices." },
              { icon:TrendingUp, title:'Predictable Transformation', body:'Evolve your workplace with confidence. A fully managed growth strategy backed by clear SLAs and robust voice infrastructure.' },
            ].map(({ icon: Icon, title, body }, i) => (
              <ScaleIn key={title} delay={i * 0.07}>
                <motion.div 
                  className="rounded-none p-8 border border-slate-100 transition-all duration-500 h-full bg-white hover:shadow-2xl hover:-translate-y-1" 
                >
                  <div className="w-12 h-12 rounded-none flex items-center justify-center mb-6 duration-500 group-hover:scale-[1.15] group-hover:-rotate-3 bg-slate-50 shadow-sm border border-slate-100" style={{ color: P }}>
                    <Icon size={22} strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <h3 className="c9-card-title mb-2.5">{title}</h3>
                  <p className="c9-body !text-[14px] text-slate-800">{body}</p>
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
            <Eyebrow>SLA-Backed Unified Management</Eyebrow>
            <h2 className="c9-section-heading mb-6 font-bold">Predictable Investment.<br />Complete System Ownership.</h2>
            <p className="c9-body">Transparent pricing for a fully integrated workplace stack. All plans include Australian engineering leads and zero hidden integration fees.</p>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 0.1} className="h-full">
                <motion.div whileHover={{ y: plan.highlight ? -8 : -4 }} className="relative h-full flex flex-col rounded-none p-8 border transition-all duration-300" style={{ background: plan.highlight ? P : '#fff', borderColor: plan.highlight ? P : BD, boxShadow: plan.highlight ? '0 24px 80px rgba(93,0,214,0.28)' : undefined }}>
                  {plan.highlight && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-none text-[11px] font-black uppercase tracking-wider whitespace-nowrap" style={{ background: '#3A0090', color: '#fff' }}>{plan.tag}</div>}
                  {!plan.highlight && <span className="text-[11px] font-black uppercase tracking-widest mb-4 block" style={{ color: TM }}>{plan.tag}</span>}
                  {plan.highlight && <div className="mb-4 h-5" />}
                  <h3 className="c9-card-title mb-2" style={{ color: plan.highlight ? '#fff' : '#0c1024' }}>{plan.name}</h3>
                  <p className="c9-body mb-6" style={{ color: plan.highlight ? 'rgba(255,255,255,0.95)' : '#475569' }}>{plan.desc}</p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-[52px] font-black leading-none" style={{ color: plan.highlight ? '#fff' : P }}>{plan.price}</span>
                    <span className="text-[14px] font-bold" style={{ color: plan.highlight ? 'rgba(255,255,255,0.85)' : TM }}>{plan.period}</span>
                  </div>
                  <div className="flex flex-col gap-3 mb-8 flex-grow">
                    {plan.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <CheckCircle2 size={12} className="shrink-0" style={{ color: plan.highlight ? 'rgba(255,255,255,0.85)' : P }} aria-hidden="true" />
                        <span className="text-[14px] font-bold" style={{ color: plan.highlight ? 'rgba(255,255,255,0.95)' : TM2 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <C9Button 
                    variant={plan.highlight ? "default" : "outline"}
                    size="lg"
                    className={`mt-auto w-full rounded-none font-black transition-all ${plan.highlight ? 'bg-white text-[#5D00D6] hover:bg-slate-100 border-transparent' : 'border-slate-200 text-slate-800 hover:border-[#5D00D6] hover:text-[#5D00D6]'}`}
                    onClick={handleCtaClick}
                  >
                    Speak to Engineering 
                  </C9Button>
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

      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false}
          eyebrow="Plan Your Workplace Transformation"
          title="Unify Your Distributed Workforce Operations"
          description="Eliminate fragmented tools and regain control. Book a 30-minute consultation with an AU-managed engineering lead to design your unified workplace stack."
          formTitle="Design Your Unified Workplace"
        />
      </section>

    </div>
  );
}
