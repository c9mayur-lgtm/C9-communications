'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check, CheckCircle2, ArrowRight, ChevronDown, Shield, Users, Laptop,
  Cloud, MessageSquare, Globe, Lock, Zap, Monitor, Phone, Star,
  Camera, Printer, UserCheck, HardDrive, BookOpen, Clock, TrendingUp
} from 'lucide-react';

export const ease = [0.22, 1, 0.36, 1] as const;
export const P = '#5D00D6';
export const PL = '#F4F0FA';
export const T = '#0c1024';
export const TM = 'rgba(12,16,36,0.55)';
export const TM2 = 'rgba(12,16,36,0.78)';
export const BD = 'rgba(93,0,214,0.12)';

export const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, delay, ease }} className={className}>
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div initial={{ opacity: 0, scale: 0.93 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease }} className={className}>
    {children}
  </motion.div>
);

export const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div className={`text-[11px] font-bold uppercase tracking-[0.25em] mb-5 ${light ? 'text-purple-300' : ''}`} style={!light ? { color: P } : {}}>
    {children}
  </div>
);

/* ── Microsoft 365 Dashboard Mockup ─────────────────────────── */
export const M365Mockup = () => (
  <div className="rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: BD, background: '#fff' }}>
    <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: '#F8FAFF', borderColor: BD }}>
      {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />)}
      <div className="flex-1 mx-3 rounded-md px-3 py-1 text-[11px]" style={{ background: 'rgba(93,0,214,0.06)', color: TM }}>Microsoft 365 — C9 Managed Tenant</div>
    </div>
    <div className="p-5 grid grid-cols-4 gap-3">
      {[{l:'Word',bg:'#185ABD',t:'W'},{l:'Excel',bg:'#217346',t:'X'},{l:'Teams',bg:'#6264A7',t:'T'},{l:'Outlook',bg:'#0072C6',t:'O'}].map(a => (
        <div key={a.l} className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm" style={{ background: a.bg }}>{a.t}</div>
          <span className="text-[11px] font-medium" style={{ color: TM }}>{a.l}</span>
        </div>
      ))}
    </div>
    <div className="px-5 pb-5 grid grid-cols-3 gap-3">
      {[{l:'Users',v:'24/24',c:'#5D00D6',icon:Users},{l:'Security',v:'94%',c:'#00875A',icon:Shield},{l:'Devices',v:'47',c:'#6264A7',icon:Laptop}].map(({l,v,c,icon:Icon})=>(
        <div key={l} className="rounded-xl p-3 text-center border" style={{ borderColor: BD, background: PL }}>
          <div className="w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center" style={{ background: c+'20' }}><Icon size={16} style={{ color: c }} /></div>
          <div className="text-[20px] font-bold leading-none mb-0.5" style={{ color: c }}>{v}</div>
          <div className="text-[10px] font-medium" style={{ color: TM }}>{l}</div>
        </div>
      ))}
    </div>
    <div className="border-t px-5 py-4" style={{ borderColor: BD }}>
      {[{msg:'Surface Pro enrolled — Sarah M.',c:'#5D00D6'},{msg:'Phishing simulation sent to 14 staff',c:'#D97706'},{msg:'All 24 devices updated',c:'#00875A'}].map(({msg,c})=>(
        <div key={msg} className="flex items-center gap-2 py-1.5">
          <div className="w-2 h-2 rounded-full shrink-0" style={{ background: c }} />
          <span className="text-[12px]" style={{ color: TM2 }}>{msg}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ── Teams Meeting Mockup ─────────────────────────────────────── */
export const TeamsMockup = () => (
  <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: '#1e1e2e', border: '1px solid rgba(255,255,255,0.1)' }}>
    <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
      <span className="text-[12px] font-semibold text-white/80">Weekly All-Hands · 0:24:17</span>
      <span className="text-[11px] px-2 py-0.5 rounded-full text-white font-semibold" style={{ background: '#E53E3E' }}>● REC</span>
    </div>
    <div className="p-4 grid grid-cols-2 gap-2">
      {['Mark','Priya','James','You (Sarah)'].map((n,i)=>(
        <div key={n} className="aspect-video rounded-xl flex items-end p-2 relative overflow-hidden" style={{ background: `hsl(${220+i*20},30%,18%)` }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: '#6264A7' }}>{n[0]}</div>
          <span className="text-[11px] text-white/70 ml-2">{n}</span>
          {i===3&&<div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-400 animate-pulse" />}
        </div>
      ))}
    </div>
    <div className="flex gap-3 justify-center pb-4">
      {['🎙️','📹','🖥️','💬','✋'].map(e=>(
        <button key={e} className="w-9 h-9 rounded-full flex items-center justify-center text-sm hover:opacity-80 transition-opacity" style={{ background: 'rgba(255,255,255,0.1)' }}>{e}</button>
      ))}
    </div>
  </div>
);

/* ── Security Score Mockup ────────────────────────────────────── */
export const SecurityMockup = () => (
  <div className="rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: BD, background: '#fff' }}>
    <div className="p-6 border-b" style={{ borderColor: BD }}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-[13px] font-bold" style={{ color: T }}>Microsoft Secure Score</span>
        <span className="text-[12px] px-2 py-1 rounded-full font-semibold" style={{ background: '#00875A15', color: '#00875A' }}>+12 this month</span>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-[56px] font-bold leading-none" style={{ color: P }}>94</span>
        <span className="text-[20px] pb-2" style={{ color: TM }}>/100</span>
      </div>
      <div className="mt-3 h-3 rounded-full overflow-hidden" style={{ background: PL }}>
        <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${P}, #a855f7)` }} initial={{ width: 0 }} whileInView={{ width: '94%' }} transition={{ duration: 1.2, ease: [0.22,1,0.36,1] }} viewport={{ once: true }} />
      </div>
    </div>
    <div className="p-4 flex flex-col gap-2">
      {[{l:'MFA enabled',v:'24/24',ok:true},{l:'Devices compliant',v:'47/47',ok:true},{l:'DLP policies active',v:'12',ok:true},{l:'Threats blocked (30d)',v:'143',ok:true}].map(({l,v,ok})=>(
        <div key={l} className="flex items-center justify-between py-2 border-b last:border-0" style={{ borderColor: BD }}>
          <div className="flex items-center gap-2"><CheckCircle2 size={15} className="text-green-500 shrink-0" /><span className="text-[13px]" style={{ color: TM2 }}>{l}</span></div>
          <span className="text-[13px] font-bold" style={{ color: '#00875A' }}>{v}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ── Device Management Mockup ─────────────────────────────────── */
export const DeviceMockup = () => (
  <div className="rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: BD, background: '#fff' }}>
    <div className="px-5 py-4 border-b flex items-center justify-between" style={{ borderColor: BD, background: '#F8FAFF' }}>
      <span className="text-[13px] font-bold" style={{ color: T }}>Microsoft Intune — All Devices</span>
      <span className="text-[11px] px-2 py-1 rounded-full font-semibold" style={{ background: `${P}15`, color: P }}>47 enrolled</span>
    </div>
    <div className="p-4 flex flex-col gap-2">
      {[{n:'Sarah M. — Surface Pro',os:'Windows 11',s:'Compliant',c:'#00875A'},{n:'James R. — MacBook Pro',os:'macOS 15',s:'Compliant',c:'#00875A'},{n:'Priya K. — iPhone 16',os:'iOS 18',s:'Compliant',c:'#00875A'},{n:'New device — Enrolling...',os:'Windows 11',s:'Pending',c:'#D97706'}].map(({n,os,s,c})=>(
        <div key={n} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border" style={{ borderColor: BD }}>
          <div><div className="text-[13px] font-semibold" style={{ color: T }}>{n}</div><div className="text-[11px]" style={{ color: TM }}>{os}</div></div>
          <span className="text-[12px] font-bold px-2 py-1 rounded-full" style={{ background: c+'15', color: c }}>{s}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ── Accordion Feature Section ───────────────────────────────── */
const FEATURES = [
  { id:'productivity', icon:Zap, label:'Productivity', tag:'MICROSOFT 365', headline:'Every app. Always up to date.', body:'Word, Excel, PowerPoint, Outlook — licensed, deployed, and managed by C9. Your team always runs the latest version.', bullets:['Microsoft 365 Business plans','1 TB OneDrive/user','SharePoint & Viva','Zero IT overhead'], color:'#5D00D6', visual:'m365' },
  { id:'comms', icon:MessageSquare, label:'Communication Tools', tag:'MICROSOFT TEAMS', headline:'Calls, chat, meetings — one app.', body:'Teams Phone replaces your phone system. HD meetings, instant chat, file collaboration — all built into one place your team already knows.', bullets:['Teams Phone System (PSTN)','HD video meetings','Live captions & recording','Zero hardware needed'], color:'#6264A7', visual:'teams' },
  { id:'security', icon:Shield, label:'Secure Remote Work & Compliance', tag:'ZERO TRUST SECURITY', headline:'Enterprise security. Zero complexity.', body:'MFA, Conditional Access, DLP, and Defender for Business — configured by C9 so your data stays protected without slowing anyone down.', bullets:['Multi-factor authentication','Data Loss Prevention','Microsoft Defender managed','GDPR & Privacy Act ready'], color:'#00875A', visual:'security' },
  { id:'devices', icon:Laptop, label:'Device & Endpoint Management', tag:'MICROSOFT INTUNE', headline:'Ship a laptop. They plug in. Done.', body:'Zero-touch deployment via Intune. New devices arrive preconfigured. Remote wipe, policy enforcement, and software deployment — all automated.', bullets:['Zero-touch deployment','Windows, Mac, iOS, Android','Remote wipe & lock','Software push at scale'], color:'#C43E1C', visual:'devices' },
];

const VISUALS: Record<string, React.ReactNode> = { m365: <M365Mockup />, teams: <TeamsMockup />, security: <SecurityMockup />, devices: <DeviceMockup /> };

export const ServicesAccordion = () => {
  const [active, setActive] = useState('productivity');
  const current = FEATURES.find(f => f.id === active)!;
  return (
    <div className="grid lg:grid-cols-[420px_1fr] gap-10 items-start">
      <div className="flex flex-col gap-1">
        {FEATURES.map(f => {
          const Icon = f.icon; const isA = active === f.id;
          return (
            <button key={f.id} onClick={() => setActive(f.id)} className="w-full text-left group">
              <div className="flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300" style={{ background: isA ? f.color+'0E' : 'transparent', border: `1px solid ${isA ? f.color+'35' : 'transparent'}` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all" style={{ background: isA ? f.color+'20' : 'rgba(12,16,36,0.05)' }}>
                  <Icon size={18} style={{ color: isA ? f.color : TM }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[17px] font-bold transition-colors font-proxima" style={{ color: isA ? '#0c1024' : 'gray' }}>{f.label}</span>
                    <ChevronDown size={15} className={`transition-transform duration-300 ${isA ? 'rotate-180' : ''}`} style={{ color: isA ? f.color : 'gray' }} />
                  </div>
                  <AnimatePresence>
                    {isA && (
                      <motion.div initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:'auto' }} exit={{ opacity:0, height:0 }} transition={{ duration:0.3 }} className="overflow-hidden">
                        <p className="text-[15px] leading-relaxed mt-2 mb-3 text-gray-500 font-medium font-proxima">{f.body}</p>
                        <div className="grid grid-cols-2 gap-1.5">
                          {f.bullets.map(b => (
                            <div key={b} className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: f.color }} />
                              <span className="text-[13px] font-medium text-gray-600 font-proxima">{b}</span>
                            </div>
                          ))}
                        </div>
                        <Link href="/contact" className="inline-flex items-center gap-1 mt-4 text-[12px] font-bold group/l" style={{ color: f.color }}>
                          Learn more <ArrowRight size={12} className="transition-transform group-hover/l:translate-x-1" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="lg:sticky lg:top-28 lg:self-start">
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity:0, y:14, scale:0.97 }} animate={{ opacity:1, y:0, scale:1 }} exit={{ opacity:0, y:-10, scale:0.97 }} transition={{ duration:0.38, ease }}>
            {VISUALS[current.visual]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ── Infra Carousel ───────────────────────────────────────────── */
const INFRA_TABS = [
  {
    label: 'Microsoft 365',
    cards: [
      {
        title: 'Tenant Setup & Migration',
        body: 'Full Microsoft 365 tenant deployment — email migration, domain configuration, and user provisioning handled by C9 engineers.',
        pointers: ['Email & mailbox migration', 'Domain & DNS configuration', 'Licence provisioning'],
        partner: 'Microsoft 365',
        partnerLogo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft.svg',
      },
      {
        title: 'Licence Management',
        body: 'Never overpay or underlicence again. C9 optimises your Microsoft 365 seat mix every quarter to match your team size.',
        pointers: ['Seat-level optimisation', 'Plan upgrade guidance', 'Monthly usage reporting'],
        partner: 'Microsoft',
        partnerLogo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft.svg',
      },
      {
        title: 'C9 L1–L3 Support',
        body: 'From password resets to tenant-level issues — our Australian support team owns every ticket from open to close.',
        pointers: ['< 2 hr response SLA', 'Named account manager', 'Priority escalation line'],
        partner: 'C9 Communications',
        partnerLogo: null,
      },
    ],
  },
  {
    label: 'Security & Compliance',
    cards: [
      {
        title: 'Endpoint Detection & Response',
        body: 'Microsoft Defender for Business configured and monitored by C9\'s SOC. Threats detected and contained before you\'re aware of them.',
        pointers: ['Defender for Business setup', '24/7 SOC monitoring', 'Automated threat containment'],
        partner: 'Microsoft Defender',
        partnerLogo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft.svg',
      },
      {
        title: 'Security Awareness Training',
        body: 'Automated phishing simulations and microlearning campaigns that reduce human-error breaches by up to 70%.',
        pointers: ['Phishing simulations', 'Microsoft-integrated training', 'Real-time coaching'],
        partner: 'KnowBe4',
        partnerLogo: 'https://logo.clearbit.com/knowbe4.com',
      },
      {
        title: 'Compliance & DLP',
        body: 'Data Loss Prevention policies, sensitivity labels, and eDiscovery configured to meet Australian Privacy Act and GDPR requirements.',
        pointers: ['DLP policy configuration', 'Sensitivity label deployment', 'eDiscovery & audit logs'],
        partner: 'Microsoft Purview',
        partnerLogo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft.svg',
      },
    ],
  },
  {
    label: 'Device Management',
    cards: [
      {
        title: 'Zero-Touch Deployment',
        body: 'New devices arrive at your staff\'s desk pre-configured with Windows Autopilot. Plug in, sign in, start working.',
        pointers: ['Windows Autopilot setup', 'Autopilot profile configuration', 'Device rename & tagging'],
        partner: 'Microsoft Intune',
        partnerLogo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft.svg',
      },
      {
        title: 'Cross-Platform MDM',
        body: 'Manage Windows, macOS, iOS, and Android from a single Intune console. Compliance policies enforced automatically.',
        pointers: ['Windows, Mac, iOS, Android', 'Compliance policy enforcement', 'Remote wipe & lock'],
        partner: 'Microsoft Intune',
        partnerLogo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft.svg',
      },
      {
        title: 'App & Patch Management',
        body: 'Software deployed silently across your fleet. Security patches applied before vulnerabilities are exploited.',
        pointers: ['Silent software deployment', 'Automated patch cycles', 'Update ring management'],
        partner: 'Microsoft Endpoint',
        partnerLogo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft.svg',
      },
    ],
  },
  {
    label: 'SaaS Backup',
    cards: [
      {
        title: 'Exchange & Email Backup',
        body: 'Daily automated backups of every Exchange Online mailbox with point-in-time restore — even after accidental deletion.',
        pointers: ['Daily automated backup', 'Point-in-time restore', 'Deleted item recovery'],
        partner: 'Veeam',
        partnerLogo: 'https://logo.clearbit.com/veeam.com',
      },
      {
        title: 'SharePoint & Teams Backup',
        body: 'Complete protection of SharePoint sites, OneDrive libraries, and Teams channels — including private channel data.',
        pointers: ['SharePoint site backup', 'OneDrive file recovery', 'Teams channel protection'],
        partner: 'Veeam',
        partnerLogo: 'https://logo.clearbit.com/veeam.com',
      },
      {
        title: 'Ransomware Recovery',
        body: 'Immutable backups ensure you can recover clean data even if your tenant is encrypted by ransomware.',
        pointers: ['Immutable backup storage', 'Clean restore points', 'Rapid full-tenant recovery'],
        partner: 'Veeam',
        partnerLogo: 'https://logo.clearbit.com/veeam.com',
      },
    ],
  },
];

export const InfraCarousel = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab bar + arrows */}
      <div className="flex items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          {INFRA_TABS.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className="px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 whitespace-nowrap"
              style={
                activeTab === i
                  ? { background: '#7C3AED', color: '#fff' }
                  : { background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.1)' }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Prev / Next arrows */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setActiveTab(i => (i - 1 + INFRA_TABS.length) % INFRA_TABS.length)}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/10"
            style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setActiveTab(i => (i + 1) % INFRA_TABS.length)}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/10"
            style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-3 gap-5"
        >
          {INFRA_TABS[activeTab].cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-[18px] p-7"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Title + body */}
              <h3 className="text-[20px] font-bold text-white mb-3 font-proxima leading-snug">{card.title}</h3>
              <p className="text-[14px] leading-[1.65] mb-6 font-proxima" style={{ color: 'rgba(255,255,255,0.55)' }}>{card.body}</p>

              {/* Pointer list */}
              <div className="flex flex-col flex-grow">
                {card.pointers.map((pt, pi) => (
                  <div key={pt}>
                    <div className="py-3 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#7C3AED' }} />
                      <span className="text-[13px] font-medium font-proxima" style={{ color: 'rgba(255,255,255,0.75)' }}>{pt}</span>
                    </div>
                    {pi < card.pointers.length - 1 && (
                      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
                    )}
                  </div>
                ))}
              </div>

              {/* Partner footer */}
              <div className="mt-6 pt-5 flex items-center gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {card.partnerLogo ? (
                    <img src={card.partnerLogo} alt={card.partner} className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }} onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                  ) : (
                    <span className="text-[10px] font-bold text-white/60">C9</span>
                  )}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.4)' }}>{card.partner}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};


/* ── Other Solutions ──────────────────────────────────────────── */
/* ── Other Solutions ──────────────────────────────────────────── */
const OTHER = [
  { 
    icon: Camera, 
    tag: 'PHYSICAL SECURITY', 
    title: 'CCTV & People Count', 
    metric: '95%',
    metricLabel: 'Occupancy Accuracy',
    body: 'Cloud-managed CCTV with AI people counting and real-time occupancy analytics.', 
    color: '#7C3AED', 
    img: '/images/workplace-cctv.jpg' 
  },
  { 
    icon: Printer, 
    tag: 'MANAGED PRINT', 
    title: 'Managed Print Solution', 
    metric: '30%',
    metricLabel: 'Cost Reduction',
    body: 'Hardware, toner, and maintenance included in one predictable monthly cost.', 
    color: '#0369A1', 
    img: '/images/workplace-print.jpg' 
  },
  { 
    icon: UserCheck, 
    tag: 'WORKPLACE', 
    title: 'Visitor Solution', 
    metric: '100%',
    metricLabel: 'Compliance Rate',
    body: 'Digital sign-in, NDA capture, and automatic host notification — replacing paper forever.', 
    color: '#059669', 
    img: '/images/workplace-visitor.jpg' 
  },
];

export const OtherSolutions = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
      {/* Left: List */}
      <div className="flex flex-col">
        {OTHER.map((item, i) => {
          const Icon = item.icon;
          const isActive = active === i;
          return (
            <div 
              key={item.title}
              onMouseEnter={() => setActive(i)}
              className="relative group cursor-pointer"
            >
              {i > 0 && <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.06]" />}
              <div className={`py-10 transition-colors duration-500 ${isActive ? 'translate-x-2' : ''}`}>
                <div className="grid grid-cols-[auto_1fr_auto] gap-8 items-start">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500" style={{ background: isActive ? item.color+'15' : 'transparent' }}>
                    <Icon size={24} style={{ color: isActive ? item.color : '#0c1024', opacity: isActive ? 1 : 0.4 }} />
                  </div>
                  
                  {/* Title */}
                  <div className="pt-2.5">
                    <h3 className={`text-[20px] md:text-[22px] font-bold tracking-tight transition-all duration-500 ${isActive ? 'text-[#0c1024]' : 'text-gray-400'}`} style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className={`text-[15px] leading-relaxed mt-2 max-w-[360px] transition-all duration-500 overflow-hidden ${isActive ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'}`} style={{ color: 'rgba(0,0,0,0.5)', fontFamily: '"Proxima Nova", sans-serif' }}>{item.body}</p>
                  </div>

                  {/* Metric */}
                  <div className="text-right flex flex-col items-end">
                    <div className={`text-[36px] font-bold leading-none tracking-tight transition-all duration-500 ${isActive ? '' : 'text-gray-300'}`} style={{ color: isActive ? '#0c1024' : undefined, fontFamily: '"Proxima Nova", sans-serif' }}>{item.metric}</div>
                    <div className={`text-[13px] font-medium mt-1.5 transition-all duration-500 ${isActive ? 'text-gray-500' : 'text-gray-300'}`} style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{item.metricLabel}</div>
                    <div className={`mt-4 transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                       <ArrowRight size={20} style={{ color: item.color }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="h-px bg-black/[0.06]" />
      </div>

      {/* Right: Image */}
      <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl shadow-purple-900/10">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={OTHER[active].img}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
            alt={OTHER[active].title}
          />
        </AnimatePresence>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Floating icon badge */}
        <div className="absolute bottom-10 right-10 flex gap-2">
           <div className="w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl flex items-center justify-center border border-black/5">
              <Star size={18} fill="#7C3AED" className="text-[#7C3AED]" />
           </div>
        </div>
      </div>
    </div>
  );
};

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  { q:'How fast can you deploy Microsoft 365?', a:'For most businesses, full deployment — tenant setup, email migration, Teams config, device enrolment — takes 2–5 business days. We manage everything.' },
  { q:'Can you migrate from Google Workspace or an old server?', a:'Yes. We specialise in Google Workspace, on-premise Exchange, and legacy POP/IMAP migrations. Zero downtime for most cases.' },
  { q:'Do staff keep their existing email addresses?', a:"Yes. Your domain moves to Microsoft 365. Same addresses, same client experience — nobody notices the switch." },
  { q:'What\'s different about buying through C9 vs. direct from Microsoft?', a:"Same licences, same price. The difference is we configure and deploy everything, provide a named account manager, and offer local Australian support — not a global call centre." },
  { q:'Can you manage our existing laptops and phones?', a:'We enrol existing Windows, Mac, iOS, and Android devices into Intune without new hardware. If a refresh is needed, we source, configure, and ship ready-to-use.' },
];

export const FAQSection = () => {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <div>
      {FAQS.map((f, i) => (
        <FadeUp key={i} delay={i * 0.04}>
          <div className="border-b" style={{ borderColor: BD }}>
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-start justify-between gap-6 py-6 text-left group">
              <span className="text-[18px] md:text-[20px] font-bold leading-snug transition-colors font-proxima" style={{ color: open===i ? P : '#0c1024' }}>{f.q}</span>
              <ChevronDown size={20} className={`shrink-0 mt-0.5 transition-transform duration-300 ${open===i?'rotate-180':''}`} style={{ color: open===i ? P : 'gray' }} />
            </button>
            <AnimatePresence>
              {open===i && (
                <motion.div initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:'auto' }} exit={{ opacity:0, height:0 }} transition={{ duration:0.3 }} className="overflow-hidden">
                  <p className="text-[17px] leading-[1.65] pb-7 max-w-[680px] text-gray-600 font-medium font-proxima">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeUp>
      ))}
    </div>
  );
};
