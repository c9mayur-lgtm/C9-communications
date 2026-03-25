'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, CheckCircle2, Phone, Star, Zap, Clock, Lock, Shield, Monitor, PhoneCall, ShieldCheck, Laptop } from 'lucide-react';
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
  { q:'How fast can you deploy Microsoft 365?', a:'For most businesses, full deployment — tenant setup, email migration, Teams config, device enrolment — takes 2–5 business days. We manage everything.' },
  { q:'Can you migrate from Google Workspace or an old server?', a:'Yes. We specialise in Google Workspace, on-premise Exchange, and legacy POP/IMAP migrations. Zero downtime for most cases.' },
  { q:'Do staff keep their existing email addresses?', a:"Yes. Your domain moves to Microsoft 365. Same addresses, same client experience — nobody notices the switch." },
  { q:'What\'s different about buying through C9 vs. direct from Microsoft?', a:"Same licences, same price. The difference is we configure and deploy everything, provide a named account manager, and offer local Australian support — not a global call centre." },
  { q:'Can you manage our existing laptops and phones?', a:'We enrol existing Windows, Mac, iOS, and Android devices into Intune without new hardware. If a refresh is needed, we source, configure, and ship ready-to-use.' },
];

/* ── Pricing ─────────────────────────────────────────────────── */
const PLANS = [
  { name:'Business Basic', price:'$9', period:'/user/mo', highlight:false, tag:'ESSENTIALS', desc:'Web & mobile Office apps, email, and Teams.', features:['Microsoft Teams','Outlook (web & mobile)','OneDrive 1 TB','SharePoint','C9 onboarding & support','Business email'] },
  { name:'Business Standard', price:'$19', period:'/user/mo', highlight:true, tag:'MOST POPULAR', desc:'Full desktop apps plus advanced features.', features:['All Basic features','Full desktop Office apps','Teams Phone (add-on)','Advanced security','C9 named support','Webinar hosting'] },
  { name:'Business Premium', price:'$29', period:'/user/mo', highlight:false, tag:'ENTERPRISE', desc:'Maximum security for regulated industries.', features:['All Standard features','Defender for Business','Intune device management','Azure AD Premium P1','DLP & sensitivity labels','eDiscovery & audit'] },
];

export default function ModernWorkplacePage() {
  return (
    <div className="bg-white min-h-screen pt-20 overflow-x-hidden" style={{ fontFamily: '"Proxima Nova","Inter",system-ui,sans-serif' }}>

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center overflow-hidden px-6 py-24" style={{ background: '#F8FAFF' }}>

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
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: P }}>Modern Workplace by C9</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="text-[44px] md:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-tight mb-6 text-[#0c1024] font-proxima">
              Work smarter.<br />
              <span style={{ background: `linear-gradient(135deg, ${P} 0%, #a855f7 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                From anywhere.
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-[18px] leading-[1.6] max-w-[620px] mx-auto mb-10 text-gray-600 font-medium font-proxima">
              Microsoft 365, Teams, enterprise security, and managed devices — configured, supported, and loved by 500+ Australian businesses.
            </p>
          </FadeUp>

          <FadeUp delay={0.22}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-[16px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95" style={{ background: `linear-gradient(135deg, ${P} 0%, #7B1FE8 100%)`, boxShadow: '0 4px 24px rgba(93,0,214,0.35)' }}>
                Book a free assessment <ArrowRight size={17} />
              </Link>
              <Link href="#services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[16px] border transition-all duration-300 hover:border-[#5D00D6] hover:text-[#5D00D6]" style={{ color: TM2, borderColor: BD, background: '#fff' }}>
                Explore services
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.28}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-semibold" style={{ color: TM }}>
              {['No lock-in contracts','Australian support team','Setup in 2–5 days','500+ businesses managed'].map(t => (
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
                <div className="text-[44px] md:text-[52px] font-bold leading-[1.1] tracking-tight mb-2" style={{ color: P }}>{v}</div>
                <div className="text-[12px] font-bold uppercase tracking-[0.15em] text-gray-500">{l}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HIGHLIGHT STRIP (Apple iPhone 17 style cards) ════════════ */}
      <section className="py-14 overflow-hidden" style={{ background: PL }}>
        <div className="c9-container">
          <FadeUp className="text-center mb-8">
            <p className="text-[13px] font-bold uppercase tracking-[0.25em]" style={{ color: P }}>What you get</p>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Monitor, label:'Microsoft 365', sub:'Always up to date' },
              { icon: PhoneCall, label:'Teams Phone', sub:'Replace your phone system' },
              { icon: ShieldCheck, label:'Zero Trust Security', sub:'Fully managed' },
              { icon: Laptop, label:'Device Management', sub:'Any OS, any device' },
            ].map(({ icon: Icon, label, sub }, i) => (
              <ScaleIn key={label} delay={i*0.07}>
                <div className="text-center p-6 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group" style={{ borderColor: BD }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" style={{ background: `${P}12`, color: P }}>
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <div className="text-[14px] font-bold mb-1" style={{ color: T }}>{label}</div>
                  <div className="text-[12px]" style={{ color: TM }}>{sub}</div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES BENTO GRID ═══════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32" style={{ background: '#F8FAFF' }}>
        <div className="c9-container">
          <FadeUp className="max-w-[640px] mb-16">
            <Eyebrow>Services</Eyebrow>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight leading-[1.1] mb-5 text-[#0c1024] font-proxima">
              Everything your team needs.<br />One partner.
            </h2>
            <p className="text-[18px] leading-[1.6] text-gray-500 font-medium font-proxima">
              From Microsoft 365 and Teams to security, compliance, and managed devices — we configure, deploy, and manage it all.
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
                  <h3 className="text-[20px] font-bold text-[#0c1024] font-proxima tracking-tight mb-3">Microsoft 365 <span style={{ color: P }}>— fully managed.</span></h3>
                  <p className="text-[16px] text-gray-500 font-medium font-proxima leading-relaxed max-w-xl mx-auto">
                    Word, Excel, Teams, Outlook — licensed, deployed, and supported by C9. Your team always runs the latest version with zero IT overhead.
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
                  <h3 className="text-[20px] font-bold text-[#0c1024] font-proxima tracking-tight mb-3">Calls & Meetings <span style={{ color: '#6264A7' }}>— one app.</span></h3>
                  <p className="text-[15px] text-gray-500 font-medium font-proxima leading-relaxed">
                    Teams Phone replaces your PBX. HD meetings, instant chat, and file collaboration — zero hardware needed.
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
                  <h3 className="text-[20px] font-bold text-[#0c1024] font-proxima tracking-tight mb-3">Enterprise Security.</h3>
                  <p className="text-[15px] text-gray-500 font-medium font-proxima leading-relaxed">
                    MFA, Conditional Access, and Defender — configured and monitored by C9's SOC team 24/7.
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
                  <h3 className="text-[20px] font-bold text-[#0c1024] font-proxima tracking-tight mb-3">Zero-Touch Enrolment.</h3>
                  <p className="text-[15px] text-gray-500 font-medium font-proxima leading-relaxed">
                    Ship a laptop. They plug in, sign in, and start working. Windows, Mac, iOS — all managed.
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
                  <h3 className="text-[20px] font-bold text-[#0c1024] font-proxima tracking-tight mb-3">Australian Support.</h3>
                  <p className="text-[15px] text-gray-500 font-medium font-proxima leading-relaxed">
                    No ticket queues. No offshore call centres. Just Sydney-based engineers who answer in 2 minutes.
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
                   <div className="text-[20px] font-bold text-[#0c1024] mb-1 font-proxima">1800 000 299</div>
                   <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest tracking-[0.1em]">Sydney-Based Engineering</div>
                </div>
              </motion.div>
            </ScaleIn>

          </div>
        </div>
      </section>

      {/* ══ FULL-BLEED DARK SECTION (dramatic contrast moment) ════════ */}
      <section className="py-24 md:py-36 relative overflow-hidden" style={{ background: '#0c1024' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]" style={{ background: 'radial-gradient(ellipse, rgba(93,0,214,0.3) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle, rgba(98,100,167,0.2) 0%, transparent 70%)' }} />
        </div>
        <div className="c9-container relative z-10">
          <FadeUp className="text-center max-w-[680px] mx-auto mb-16">
            <Eyebrow light>Modern Infrastructure</Eyebrow>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight leading-[1.1] mb-5 text-white font-proxima">
              The stack behind the scenes.
            </h2>
            <p className="text-[18px] leading-[1.6] font-medium font-proxima text-white/60">
              Microsoft 365, SaaS backup, security awareness training, and endpoint protection — managed together so nothing slips through.
            </p>
          </FadeUp>
          <InfraCarousel />
        </div>
      </section>

      {/* ══ OTHER SOLUTIONS ════════════════════════════════════════ */}
      <section id="other-solutions" className="py-24 md:py-32" style={{ background: PL }}>
        <div className="c9-container">
          <FadeUp className="max-w-[620px] mb-14">
            <Eyebrow>Additional Solutions</Eyebrow>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight leading-[1.1] mb-5 text-[#0c1024] font-proxima">
              Beyond the desktop.
            </h2>
            <p className="text-[18px] leading-[1.6] font-medium text-gray-500 font-proxima">
              Physical workplace technology — CCTV, managed print, and visitor management — backed by C9.
            </p>
          </FadeUp>
          <OtherSolutions />
        </div>
      </section>

      {/* ══ WHY C9 bento ════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: '#fff' }}>
        <div className="c9-container">
          <FadeUp className="text-center max-w-[540px] mx-auto mb-14">
            <Eyebrow>Why C9</Eyebrow>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight leading-[1.1] text-[#0c1024] font-proxima">The C9 difference.</h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large feature card */}
            <ScaleIn className="md:col-span-2 lg:col-span-1 lg:row-span-2">
              <div className="h-full rounded-[32px] p-8 flex flex-col relative overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1" style={{ background: P, borderColor: P, minHeight: 340 }}>
                <div className="absolute top-0 right-0 w-48 h-48 opacity-10" style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5 border border-white/20 backdrop-blur-sm shadow-sm">
                  <Phone size={24} className="text-white" />
                </div>
                <h3 className="text-[20px] font-bold text-white leading-snug mb-3 font-proxima tracking-tight">Australian team.<br />Answers the phone.</h3>
                <p className="text-[15px] leading-[1.6] text-white/80 flex-grow font-proxima">Every call goes to a Sydney-based engineer who knows your account. No offshore queues. No ticket portals.</p>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="text-[28px] font-bold text-white font-proxima tracking-tight">1800 000 299</div>
                  <div className="text-[11px] text-white/70 font-bold mt-1.5 uppercase tracking-[0.15em]">Mon–Fri 8am–6pm AEST</div>
                </div>
              </div>
            </ScaleIn>

            {[
              { icon:Clock, title:'< 2 hr response SLA', body:'Backed by financial credits if we miss the mark.' },
              { icon:Zap, title:'Live in 2–5 business days', body:'From sign-off to fully live on Microsoft 365.' },
              { icon:Lock, title:'No lock-in contracts', body:"We earn your business every month. If you're not happy, you can leave." },
              { icon:Star, title:'4.9 / 5 client satisfaction', body:'Measured quarterly across all active accounts.' },
            ].map(({ icon: Icon, title, body }, i) => (
              <ScaleIn key={title} delay={i * 0.07}>
                <motion.div 
                  className="rounded-[32px] p-8 border border-black/10 transition-all duration-500 h-full group bg-[#F9FAFB] hover:shadow-2xl hover:-translate-y-1" 
                >
                  <div className="w-12 h-12 rounded-[16px] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-[1.15] group-hover:-rotate-3 bg-white shadow-sm border border-black/5" style={{ color: P }}>
                    <Icon size={22} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[20px] font-bold leading-snug mb-2.5 text-[#0c1024] font-proxima tracking-tight">{title}</h3>
                  <p className="text-[15px] leading-[1.6] text-gray-500 font-medium font-proxima">{body}</p>
                </motion.div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING ═════════════════════════════════════════════════ */}
      <section id="pricing" className="py-24 md:py-32" style={{ background: PL }}>
        <div className="c9-container">
          <FadeUp className="text-center max-w-[560px] mx-auto mb-16">
            <Eyebrow>Plans & Pricing</Eyebrow>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight leading-[1.1] mb-5 text-[#0c1024] font-proxima">Simple pricing.<br />Expert support included.</h2>
            <p className="text-[18px] leading-[1.6] font-medium text-gray-500 font-proxima">All plans include onboarding, migration, and an Australian account manager. Zero hidden fees.</p>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 0.1} className="h-full">
                <motion.div whileHover={{ y: plan.highlight ? -8 : -4 }} className="relative h-full flex flex-col rounded-3xl p-8 border transition-all duration-300" style={{ background: plan.highlight ? P : '#fff', borderColor: plan.highlight ? P : BD, boxShadow: plan.highlight ? '0 24px 80px rgba(93,0,214,0.28)' : undefined }}>
                  {plan.highlight && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap" style={{ background: '#3A0090', color: '#fff' }}>{plan.tag}</div>}
                  {!plan.highlight && <span className="text-[11px] font-bold uppercase tracking-widest mb-4 block" style={{ color: TM }}>{plan.tag}</span>}
                  {plan.highlight && <div className="mb-4 h-5" />}
                  <h3 className="text-[20px] font-bold mb-2 font-proxima" style={{ color: plan.highlight ? '#fff' : '#0c1024' }}>{plan.name}</h3>
                  <p className="text-[15px] mb-6 leading-[1.6] font-medium font-proxima" style={{ color: plan.highlight ? 'rgba(255,255,255,0.7)' : 'gray' }}>{plan.desc}</p>
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
                  <Link href="/contact" className="mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-[14px] transition-all duration-300 active:scale-95" style={plan.highlight ? { background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' } : { background: `${P}0D`, color: P, border: `1px solid ${BD}` }}>
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
        eyebrow="Modern Workplace Audit"
        title="Fix your workplace before it breaks your business."
        description="Book a 30-minute call with an Australian Modern Workplace specialist. We'll review your setup and show you what's possible — no cost, no obligation."
        formTitle="Schedule Free Assessment"
      />

    </div>
  );
}
