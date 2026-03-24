'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, CheckCircle2, Phone, Star, Zap, Clock, Lock, Shield } from 'lucide-react';
import {
  P, PL, T, TM, TM2, BD,
  FadeUp, ScaleIn, Eyebrow,
  ServicesAccordion, InfraCarousel, OtherSolutions, FAQSection,
  M365Mockup, TeamsMockup, SecurityMockup, DeviceMockup
} from './components';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

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

        {/* Hero dashboard — floats into next section */}
        <FadeUp delay={0.38} className="relative z-10 w-full max-w-[960px] mx-auto mt-16">
          <div className="rounded-t-3xl border-t border-x overflow-hidden" style={{ borderColor: BD, background: '#fff', boxShadow: '0 -4px 60px rgba(93,0,214,0.12), 0 20px 80px rgba(12,16,36,0.08)' }}>
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b" style={{ background: '#F8FAFF', borderColor: BD }}>
              {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />)}
              <div className="flex-1 mx-4 rounded-lg px-4 py-1.5 text-[11px] font-medium text-center" style={{ background: 'rgba(93,0,214,0.05)', color: TM }}>
                portal.c9communications.com.au — Microsoft 365 Managed Tenant
              </div>
              <div className="w-3 h-3 rounded-full opacity-0" />
            </div>

            {/* Dashboard grid */}
            <div className="p-6">
              {/* Stat row */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { l:'Active Users', v:'24/24', c:P, change:'+2 this week' },
                  { l:'Security Score', v:'94%', c:'#00875A', change:'+12 pts' },
                  { l:'Devices Managed', v:'47', c:'#6264A7', change:'All compliant' },
                  { l:'Support Tickets', v:'0 open', c:'#D97706', change:'Avg 8 min response' },
                ].map(({ l, v, c, change }) => (
                  <div key={l} className="rounded-2xl p-4 border" style={{ borderColor: BD, background: '#F8FAFF' }}>
                    <div className="text-[11px] font-semibold mb-2" style={{ color: TM }}>{l}</div>
                    <div className="text-[24px] font-bold leading-none mb-1" style={{ color: c }}>{v}</div>
                    <div className="text-[11px] font-semibold" style={{ color: '#00875A' }}>{change}</div>
                  </div>
                ))}
              </div>

              {/* App icons + activity */}
              <div className="grid grid-cols-[auto_1fr] gap-6 items-start">
                <div className="flex gap-2">
                  {[{t:'W',bg:'#185ABD'},{t:'X',bg:'#217346'},{t:'T',bg:'#6264A7'},{t:'O',bg:'#0072C6'}].map(a => (
                    <div key={a.t} className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm" style={{ background: a.bg }}>{a.t}</div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { msg:'Surface Pro 9 enrolled — Sarah M.', time:'2 min', c:P },
                    { msg:'Phishing simulation sent to 14 staff — 0 clicked', time:'1 hr', c:'#00875A' },
                    { msg:'Microsoft 365 apps updated across all 24 devices', time:'3 hr', c:'#6264A7' },
                  ].map(({ msg, time, c }) => (
                    <div key={msg} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c }} />
                      <span className="flex-1 text-[12px]" style={{ color: TM2 }}>{msg}</span>
                      <span className="text-[11px] shrink-0" style={{ color: TM }}>{time} ago</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
              { icon:'🖥️', label:'Microsoft 365', sub:'Always up to date' },
              { icon:'📞', label:'Teams Phone', sub:'Replace your phone system' },
              { icon:'🔒', label:'Zero Trust Security', sub:'Fully managed' },
              { icon:'💻', label:'Device Management', sub:'Any OS, any device' },
            ].map(({ icon, label, sub }, i) => (
              <ScaleIn key={label} delay={i*0.07}>
                <div className="text-center p-5 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: BD }}>
                  <div className="text-3xl mb-3">{icon}</div>
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
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-bold tracking-tight leading-[1.1] mb-5 text-[#0c1024] font-proxima">
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
                className="rounded-[32px] border overflow-hidden h-full flex flex-col transition-all duration-500 group"
                style={{ background: '#F9FAFB', borderColor: 'rgba(0,0,0,0.04)' }}
              >
                <div className="px-8 pt-10 pb-6 text-center">
                  <h3 className="text-[22px] md:text-[24px] font-bold text-[#0c1024] font-proxima tracking-tight mb-3">Microsoft 365 <span style={{ color: P }}>— fully managed.</span></h3>
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
                className="rounded-[32px] border overflow-hidden h-full flex flex-col transition-all duration-500 group"
                style={{ background: '#F9FAFB', borderColor: 'rgba(0,0,0,0.04)' }}
              >
                <div className="px-7 pt-10 pb-6 text-center">
                  <h3 className="text-[22px] font-bold text-[#0c1024] font-proxima tracking-tight mb-3">Calls & Meetings <span style={{ color: '#6264A7' }}>— one app.</span></h3>
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
                className="rounded-[32px] border overflow-hidden h-full flex flex-col transition-all duration-500 group"
                style={{ background: '#F9FAFB', borderColor: 'rgba(0,0,0,0.04)' }}
              >
                <div className="px-7 pt-10 pb-6 text-center">
                  <h3 className="text-[22px] font-bold text-[#0c1024] font-proxima tracking-tight mb-3">Enterprise Security.</h3>
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
                className="rounded-[32px] border overflow-hidden h-full flex flex-col transition-all duration-500 group"
                style={{ background: '#F9FAFB', borderColor: 'rgba(0,0,0,0.04)' }}
              >
                <div className="px-7 pt-10 pb-6 text-center">
                  <h3 className="text-[22px] font-bold text-[#0c1024] font-proxima tracking-tight mb-3">Zero-Touch Enrolment.</h3>
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

            {/* Row 2 — Cell 5: Expert Support (1 col) — Replaced purple CTA with matching card */}
            <ScaleIn delay={0.26}>
              <motion.div
                className="rounded-[32px] border overflow-hidden h-full flex flex-col transition-all duration-500 group"
                style={{ background: '#F9FAFB', borderColor: 'rgba(93,0,214,0.1)' }}
              >
                <div className="px-7 pt-10 pb-6 text-center">
                  <h3 className="text-[22px] font-bold text-[#0c1024] font-proxima tracking-tight mb-3">Australian Support.</h3>
                  <p className="text-[15px] text-gray-500 font-medium font-proxima leading-relaxed">
                    No ticket queues. No offshore call centres. Just Sydney-based engineers who answer in 2 minutes.
                  </p>
                </div>
                <div className="flex-grow flex flex-col items-center justify-center p-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg" style={{ background: `linear-gradient(135deg, ${P} 0%, #7B1FE8 100%)` }}>
                      <Phone size={32} className="text-white" />
                    </div>
                    {/* Floating mini badges */}
                    <div className="absolute -top-2 -right-8 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full border-2 border-white shadow-sm">LIVE</div>
                    <div className="absolute -bottom-4 -left-8 bg-white border border-gray-100 shadow-xl rounded-xl p-2.5 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-[#0c1024]">Avg. 1m 40s</span>
                    </div>
                  </div>
                </div>
                <div className="px-8 pb-10 text-center mt-auto">
                   <div className="text-[20px] font-bold text-[#0c1024] mb-1 font-proxima">1800 000 299</div>
                   <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Mon–Fri 8am–6pm AEST</div>
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
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-bold tracking-tight leading-[1.1] mb-5 text-white font-proxima">
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
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-bold tracking-tight leading-[1.1] mb-5 text-[#0c1024] font-proxima">
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
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0c1024] font-proxima">The C9 difference.</h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large feature card */}
            <ScaleIn className="md:col-span-2 lg:col-span-1 lg:row-span-2">
              <div className="h-full rounded-[32px] p-8 flex flex-col relative overflow-hidden border transition-all duration-500" style={{ background: P, borderColor: P, minHeight: 340 }}>
                <div className="absolute top-0 right-0 w-48 h-48 opacity-10" style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5 border border-white/20">
                  <Phone size={22} className="text-white" />
                </div>
                <h3 className="text-[22px] font-bold text-white leading-snug mb-3 font-proxima">Australian team.<br />Answers the phone.</h3>
                <p className="text-[14px] leading-[1.7] text-white/70 flex-grow font-proxima">Every call goes to a Sydney-based engineer who knows your account. No offshore queues. No ticket portals.</p>
                <div className="mt-6 pt-5 border-t border-white/20">
                  <div className="text-[28px] font-bold text-white font-proxima">1800 000 299</div>
                  <div className="text-[12px] text-white/60 font-semibold mt-1 uppercase tracking-wider">Mon–Fri 8am–6pm AEST</div>
                </div>
              </div>
            </ScaleIn>

            {[
              { icon:Clock, title:'< 2 hr response SLA', body:'Backed by financial credits if we miss the mark.', color:'#00875A' },
              { icon:Zap, title:'Live in 2–5 business days', body:'From sign-off to fully live on Microsoft 365.', color:'#D97706' },
              { icon:Lock, title:'No lock-in contracts', body:"We earn your business every month. If you're not happy, you can leave.", color:'#0052CC' },
              { icon:Star, title:'4.9 / 5 client satisfaction', body:'Measured quarterly across all active accounts.', color:'#C43E1C' },
            ].map(({ icon: Icon, title, body, color }, i) => (
              <ScaleIn key={title} delay={i * 0.07}>
                <motion.div 
                  className="rounded-[32px] p-7 border transition-all duration-500 h-full group" 
                  style={{ background: '#F9FAFB', borderColor: 'rgba(0,0,0,0.04)' }}
                >
                  <div className="w-11 h-11 rounded-[14px] flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110" style={{ background: color+'15', border: `1px solid ${color}10` }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <h3 className="text-[20px] font-bold leading-snug mb-2 text-[#0c1024] font-proxima tracking-tight">{title}</h3>
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
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-bold tracking-tight leading-[1.1] mb-5 text-[#0c1024] font-proxima">Simple pricing.<br />Expert support included.</h2>
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

      {/* ══ FAQ ═════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: '#fff' }}>
        <div className="c9-container max-w-[800px]">
          <FadeUp className="mb-14">
            <Eyebrow>Questions & Answers</Eyebrow>
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0c1024] font-proxima">Everything you<br />need to know.</h2>
          </FadeUp>
          <FAQSection />
        </div>
      </section>

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
