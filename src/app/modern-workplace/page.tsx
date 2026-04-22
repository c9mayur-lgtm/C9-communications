'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, CheckCircle2, Phone, Star, Zap, Clock, Lock, Shield, Monitor, PhoneCall, ShieldCheck, Laptop, UserCheck, Cloud, TrendingUp } from 'lucide-react';
import {
  P, PL, T, TM, TM2, BD,
  FadeUp, ScaleIn, Eyebrow,
  ServicesAccordion, InfraCarousel, OtherSolutions, FAQSection,
  M365Mockup, TeamsMockup, SecurityMockup, DeviceMockup,
  InteractiveHeroDashboard
} from './components';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { ServiceTestimonialKajabi } from '@/components/wordpress/ServiceTestimonialKajabi';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';

const MW_FAQS = [
  { q:'How fast can we be operational?', a:'For most businesses, full setup — including tenant configuration, identity migration, and security policy enforcement — takes 2–5 business days. We manage the entire transition.' },
  { q:'How do you ensure zero disruption during migration?', a:'We use a staged rollout model. Your existing systems remain active until the new environment is fully validated. Most users don\'t even notice the switch until they see their new desktop.' },
  { q:'Can we use our existing hardware?', a:'Yes. We enrol your existing Windows, Mac, iOS, and Android devices into our management system (Intune) remotely. No new hardware is required unless you choose to refresh.' },
  { q:'How does this reduce our security risk?', a:'By enforcing Zero Trust policies, MFA, and automated endpoint protection (Defender) across every user and device. We monitor the environment 24/7 to detect and contain threats before they reach your data.' },
  { q:'What if we already have Microsoft 365?', a:"We take over the management and optimisation. We'll audit your setup, harden your security, and ensure you're only paying for the licences your team actually uses." },
];

/* ── Pricing ─────────────────────────────────────────────────── */
const PLANS = [
  { name:'Managed Productivity', price:'$9', period:'/user/mo', highlight:false, tag:'CORE', desc:'Essential workplace apps with managed onboarding.', features:['Managed M365 Setup','Business Email & Calendar','1 TB Secure Cloud Storage','Teams Collaboration','C9 Australian Support','Identity Protection'] },
  { name:'Managed Voice', price:'$19', period:'/user/mo', highlight:true, tag:'BEST VALUE', desc:'Full desktop suite with integrated Teams Phone.', features:['All Productivity features','Full Desktop Apps','Teams Phone System','Unified Communications','Dedicated Support Line','Advanced Identity MGMT'] },
  { name:'Managed Workspace', price:'$29', period:'/user/mo', highlight:false, tag:'ENTERPRISE', desc:'Maximum security and full device management.', features:['All Voice features','Full Device Management','Endpoint Protection (EDR)','DLP & Data Governance','Zero Trust Policies','Compliance Monitoring'] },
];

export default function ModernWorkplacePage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center overflow-hidden px-6 pt-12 pb-24" style={{ background: '#F8FAFF' }}>

        {/* Mesh gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #a855f720 0%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #6264A730 0%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #5D00D625 0%, transparent 70%)', filter: 'blur(40px)' }} />
        </div>

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(93,0,214,1) 1px, transparent 1px), linear-gradient(to right, rgba(93,0,214,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

        <div className="relative z-10 max-w-[860px] mx-auto">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8" style={{ background: 'rgba(93,0,214,0.06)', borderColor: 'rgba(93,0,214,0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="c9-eyebrow mb-0">Outcome-Driven Workplace</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Secure, Scalable Work Environments.<br />
              <span className="text-[#5D00D6]">
                Fully Managed.
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="c9-body max-w-[620px] mx-auto mb-10">
              Devices, users, access, and collaboration integrated into one secure system. Built for distributed and multi-site teams who need operational control without the IT complexity.
            </p>
          </FadeUp>

          <FadeUp delay={0.22}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-[16px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95" style={{ background: `linear-gradient(135deg, ${P} 0%, #7B1FE8 100%)`, boxShadow: '0 4px 24px rgba(93,0,214,0.35)' }}>
                Get Workplace Assessment <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[16px] border transition-all duration-300 hover:border-[#5D00D6] hover:text-[#5D00D6]" style={{ color: TM2, borderColor: BD, background: '#fff' }}>
                Speak to a Specialist
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.28}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-semibold" style={{ color: TM }}>
              {['Built for growing and multi-site businesses','No lock-in contracts','Australian support team','Security-first management'].map(t => (
                <span key={t} className="flex items-center gap-1.5"><Check size={13} strokeWidth={3} style={{ color: P }} />{t}</span>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* ══ INTERACTIVE HERO DASHBOARD ════════════════════════════════ */}
        <FadeUp delay={0.38} className="relative z-10 w-full max-w-[1000px] mx-auto mt-16 group">
          <InteractiveHeroDashboard />
        </FadeUp>
      </section>

      {/* ══ STATS ════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderTop: `1px solid ${BD}`, borderBottom: `1px solid ${BD}` }}>
        <div className="c9-container py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{v:'500+',l:'Businesses managed'},{v:'99.9%',l:'SLA uptime'},{v:'< 2 hr',l:'Support response'},{v:'100%',l:'Onshore Australian team'}].map(({ v, l }, i) => (
              <FadeUp key={l} delay={i * 0.07} className="text-center">
                <div className="text-[44px] md:text-[52px] font-bold leading-[1.1] tracking-tight mb-2 text-[#5D00D6]">{v}</div>
                <div className="c9-eyebrow !text-gray-500 !mb-0">{l}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HIGHLIGHT STRIP (Apple iPhone 17 style cards) ════════════ */}
      <section className="py-14 overflow-hidden" style={{ background: PL }}>
        <div className="c9-container">
          <FadeUp className="text-center mb-8">
            <p className="c9-eyebrow !text-[#5D00D6]">The Managed Environment</p>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Laptop, label:'Devices', sub:'Fully configured & compliant' },
              { icon: UserCheck, label:'Users', sub:'Seamless onboarding & identity' },
              { icon: Cloud, label:'Access', sub:'Secure cloud access anywhere' },
              { icon: Monitor, label:'Collaboration', sub:'Teams, Outlook & productivity' },
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
      <section id="services" className="py-16 md:py-24" style={{ background: '#F8FAFF' }}>
        <div className="c9-container">
          <FadeUp className="max-w-[640px] mb-16">
            <h2 className="c9-section-heading mb-5">
              Everything your team needs.<br />Controlled and secure.
            </h2>
            <p className="c9-body">
              We manage the entire lifecycle of your workplace environment—from device procurement and identity management to 24/7 security monitoring.
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
                  <h3 className="c9-card-title mb-3">Cloud Productivity <span className="text-[#5D00D6]">— fully managed.</span></h3>
                  <p className="c9-body max-w-xl mx-auto">
                    Outcome: Your team always runs the latest version with zero IT overhead. Licensed, deployed, and supported by C9's Australian engineers.
                  </p>
                </div>
                <div className="px-6 md:px-12 pb-0 mt-auto flex justify-center -mb-4">
                  <div className="w-full max-w-[700px] transition-transform duration-700 group-hover:scale-[1.03]">
                    <M365Mockup />
                  </div>
                </div>
              </motion.div>
            </ScaleIn>

            {/* Row 1 — Cell 2: Teams (1 col) */}
            <ScaleIn delay={0.08}>
              <motion.div
                className="rounded-[32px] border border-black/10 overflow-hidden h-full flex flex-col transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1 bg-[#F9FAFB]"
              >
                <div className="px-7 pt-10 pb-6 text-center">
                  <h3 className="c9-card-title mb-3">Unified Comms <span className="text-[#6264A7]">— one app.</span></h3>
                  <p className="c9-body">
                    Outcome: Replace legacy phone systems with HD meetings and instant collaboration. Teams Phone replaces your PBX with zero hardware.
                  </p>
                </div>
                <div className="px-6 pb-0 mt-auto flex justify-center -mb-8">
                  <div className="w-full transition-transform duration-700 group-hover:scale-[1.05]">
                    <TeamsMockup />
                  </div>
                </div>
              </motion.div>
            </ScaleIn>

            {/* Row 2 — Cell 3: Security (1 col) */}
            <ScaleIn delay={0.14}>
              <motion.div
                className="rounded-[32px] border border-black/10 overflow-hidden h-full flex flex-col transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1 bg-[#F9FAFB]"
              >
                <div className="px-7 pt-10 pb-6 text-center">
                  <h3 className="c9-card-title mb-3">Identity & Access Control.</h3>
                  <p className="c9-body">
                    Outcome: Controlled and secure login with MFA and Zero Trust policies. MFA, Conditional Access, and Defender configured by our SOC.
                  </p>
                </div>
                <div className="px-10 pb-0 mt-auto flex justify-center -mb-6">
                  <div className="w-full transition-transform duration-700 group-hover:scale-[1.05]">
                    <SecurityMockup />
                  </div>
                </div>
              </motion.div>
            </ScaleIn>

            {/* Row 2 — Cell 4: Device Management (1 col) */}
            <ScaleIn delay={0.2}>
              <motion.div
                className="rounded-[32px] border border-black/10 overflow-hidden h-full flex flex-col transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1 bg-[#F9FAFB]"
              >
                <div className="px-7 pt-10 pb-6 text-center">
                  <h3 className="c9-card-title mb-3">Compliance & Device Control.</h3>
                  <p className="c9-body">
                    Outcome: Fully configured, compliant devices shipped ready to work. Zero-touch enrolment for Windows, Mac, and iOS.
                  </p>
                </div>
                <div className="px-8 pb-0 mt-auto flex justify-center -mb-2">
                  <div className="w-full transition-transform duration-700 group-hover:scale-[1.05]">
                    <DeviceMockup />
                  </div>
                </div>
              </motion.div>
            </ScaleIn>

            {/* Row 2 — Cell 5: Expert Support (1 col) */}
            <ScaleIn delay={0.26}>
              <motion.div
                className="rounded-[32px] border border-purple-500/20 overflow-hidden h-full flex flex-col transition-all duration-500 group hover:shadow-[0_20px_60px_rgba(93,0,214,0.15)] hover:-translate-y-1 bg-[#F9FAFB]"
              >
                <div className="px-7 pt-10 pb-6 text-center">
                  <h3 className="c9-card-title mb-3">Operational Accountability.</h3>
                  <p className="c9-body">
                    Outcome: Sydney-based engineers who own the outcome, not just the ticket. No offshore queues or generic helpdesks.
                  </p>
                </div>
                <div className="flex-grow flex flex-col items-center justify-center p-8">
                  <div className="relative">
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-24 h-24 rounded-[28px] flex items-center justify-center p-5 shadow-[0_20px_40px_rgba(93,0,214,0.15)] bg-white border border-purple-50"
                    >
                      <img src="https://img.icons8.com/color/144/customer-support.png" className="w-full h-full object-contain" alt="Support" />
                    </motion.div>
                    {/* Floating mini badges */}
                    <div className="absolute -top-2 -right-8 bg-green-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full border-2 border-white shadow-lg animate-bounce">LIVE NOW</div>
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-6 -left-10 bg-white border border-gray-100 shadow-2xl rounded-2xl p-3 flex items-center gap-3"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]" />
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-bold text-[#0c1024]">Avg. Latency</span>
                        <span className="text-[12px] font-bold text-[#5D00D6]">82ms</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="px-8 pb-10 text-center mt-auto">
                   <div className="text-[20px] font-bold text-[#0c1024] mb-1">1800 000 299</div>
                   <div className="c9-eyebrow !text-gray-400 !mb-0">Sydney-Based Engineering</div>
                </div>
              </motion.div>
            </ScaleIn>

          </div>
        </div>
      </section>

      {/* ══ FULL-BLEED DARK SECTION (dramatic contrast moment) ════════ */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#0c1024' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]" style={{ background: 'radial-gradient(ellipse, rgba(93,0,214,0.3) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle, rgba(98,100,167,0.2) 0%, transparent 70%)' }} />
        </div>
        <div className="c9-container relative z-10">
          <FadeUp className="text-center max-w-[680px] mx-auto mb-16">
            <Eyebrow light>Migration & Execution</Eyebrow>
            <h2 className="c9-section-heading mb-5 !text-white">
              Seamless Transition to Modern Workplace
            </h2>
            <p className="c9-body !text-white/60">
              Move from legacy systems safely with zero user disruption. Our controlled rollout ensures data protection and continuous operations throughout the migration process.
            </p>
          </FadeUp>
          <InfraCarousel />
        </div>
      </section>

      {/* ══ OTHER SOLUTIONS ════════════════════════════════════════ */}
      <section id="other-solutions" className="py-16 md:py-24" style={{ background: PL }}>
        <div className="c9-container">
          <FadeUp className="max-w-[620px] mb-14">
            <Eyebrow>Additional Solutions</Eyebrow>
            <h2 className="c9-section-heading mb-5">
              Beyond the desktop.
            </h2>
            <p className="c9-body">
              Physical workplace technology — CCTV, managed print, and visitor management — backed by C9.
            </p>
          </FadeUp>
          <OtherSolutions />
        </div>
      </section>

      {/* ══ WHY C9 bento ════════════════════════════════════════════ */}
      <section className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="c9-container">
          <FadeUp className="text-center max-w-[540px] mx-auto mb-14">
            <span className="c9-eyebrow mb-4">Operational Outcomes</span>
            <h2 className="c9-section-heading">The C9 Benefits.</h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large feature card */}
            <ScaleIn className="md:col-span-2 lg:col-span-1 lg:row-span-2">
              <div className="h-full rounded-[32px] p-8 flex flex-col relative overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1" style={{ background: P, borderColor: P, minHeight: 340 }}>
                <div className="absolute top-0 right-0 w-48 h-48 opacity-10" style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5 border border-white/20 backdrop-blur-sm shadow-sm">
                  <Monitor size={24} className="text-white" />
                </div>
                <h3 className="text-[20px] font-bold text-white leading-snug mb-3 tracking-tight">Workforce Ready.<br />From Day One.</h3>
                <p className="text-[15px] leading-[1.6] text-white/80 flex-grow">Devices ready, users onboarded, and systems operational. We ensure every new hire is productive from the moment they sign in.</p>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="text-[28px] font-bold text-white tracking-tight">Day One Readiness</div>
                  <div className="c9-eyebrow !text-white/70 !mb-0">Integrated with Telco & Security</div>
                </div>
              </div>
            </ScaleIn>

            {[
              { icon:Zap, title:'Reduced IT Complexity', body:'One managed environment replacing a mess of legacy tools and shadow IT.' },
              { icon:Shield, title:'Centralised Control', body:'Policy-driven management of every user, device, and access point from one console.' },
              { icon:Lock, title:'Secure Remote Work', body:"Enterprise-grade security that follows your users, no matter where they work." },
              { icon:TrendingUp, title:'Scalable Workforce', body:'Add sites and staff in days, not weeks. Fully managed growth at a predictable cost.' },
            ].map(({ icon: Icon, title, body }, i) => (
              <ScaleIn key={title} delay={i * 0.07}>
                <motion.div 
                  className="rounded-[32px] p-8 border border-black/10 transition-all duration-500 h-full group bg-[#F9FAFB] hover:shadow-2xl hover:-translate-y-1" 
                >
                  <div className="w-12 h-12 rounded-[16px] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-[1.15] group-hover:-rotate-3 bg-white shadow-sm border border-black/5" style={{ color: P }}>
                    <Icon size={22} strokeWidth={2.5} />
                  </div>
                  <h3 className="c9-card-title mb-2.5">{title}</h3>
                  <p className="c9-body !text-[15px]">{body}</p>
                </motion.div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING ═════════════════════════════════════════════════ */}
      <section id="pricing" className="py-16 md:py-24" style={{ background: PL }}>
        <div className="c9-container">
          <FadeUp className="text-center max-w-[560px] mx-auto mb-16">
            <span className="c9-eyebrow mb-4">Plans & Pricing</span>
            <h2 className="c9-section-heading mb-5">Simple pricing.<br />Expert support included.</h2>
            <p className="c9-body">All plans include onboarding, migration, and an Australian account manager. Zero hidden fees.</p>
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
                    <span className="text-[13px]" style={{ color: plan.highlight ? 'rgba(255,255,255,0.5)' : TM }}>{plan.period}</span>
                  </div>
                  <div className="flex flex-col gap-3 mb-8 flex-grow">
                    {plan.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <CheckCircle2 size={15} className="shrink-0" style={{ color: plan.highlight ? 'rgba(255,255,255,0.75)' : P }} />
                        <span className="text-[13px]" style={{ color: plan.highlight ? 'rgba(255,255,255,0.85)' : TM2 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-[16px] transition-all duration-300 active:scale-95" style={plan.highlight ? { background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' } : { background: `${P}0D`, color: P, border: `1px solid ${BD}` }}>
                    Get started <ArrowRight size={15} />
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
        eyebrow="Modern Workplace Assessment"
        title="Take Control of Your Workplace Environment"
        description="Get a clear plan, secure setup, and full management. Book a 30-minute call with an Australian Modern Workplace specialist to review your environment."
        formTitle="Get Workplace Assessment"
      />

    </div>
  );
}
