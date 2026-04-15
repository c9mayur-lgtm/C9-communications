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
  <div className="rounded-2xl overflow-hidden shadow-2xl border bg-white" style={{ borderColor: BD }}>
    <div className="flex items-center gap-2 px-5 py-3.5 border-b shadow-sm" style={{ background: '#F8FAFF', borderColor: BD }}>
      {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />)}
      <div className="flex-1 mx-3 rounded-full px-4 py-1.5 text-[11px] font-bold text-center border-gray-100 bg-white" style={{ color: TM }}>portal.c9.com — <span className="text-[#5D00D6]">Workplace Sync</span></div>
    </div>
    <div className="p-8 grid grid-cols-4 gap-6 relative">
      {[
        {l:'Word',bg:'https://img.icons8.com/color/144/microsoft-word-2019.png'},
        {l:'Excel',bg:'https://img.icons8.com/color/144/microsoft-excel-2019.png'},
        {l:'Teams',bg:'https://img.icons8.com/color/144/microsoft-teams.png'},
        {l:'Outlook',bg:'https://img.icons8.com/color/144/microsoft-outlook-2019.png'}
      ].map((a, i) => (
        <motion.div 
          key={a.l} 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-gray-50 transition-all cursor-pointer group/icon"
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-lg border border-gray-100 group-hover/icon:scale-110 group-hover/icon:-rotate-3 transition-transform">
             <img src={a.bg} alt={a.l} className="w-9 h-9 object-contain" />
          </div>
          <span className="text-[11px] font-bold tracking-tight uppercase" style={{ color: TM }}>{a.l}</span>
        </motion.div>
      ))}
    </div>
    <div className="px-8 pb-8 grid grid-cols-3 gap-4">
      {[{l:'Users',v:'24/24',c:'#5D00D6',icon:Users},{l:'Security',v:'94%',c:'#00875A',icon:Shield},{l:'Devices',v:'47',c:'#6264A7',icon:Laptop}].map(({l,v,c,icon:Icon})=>(
        <div key={l} className="rounded-2xl p-4 text-center border bg-gray-50/50" style={{ borderColor: BD }}>
          <div className="w-9 h-9 rounded-xl mx-auto mb-3 flex items-center justify-center font-bold" style={{ background: c+'15', color: c }}><Icon size={18} /></div>
          <div className="text-[20px] font-bold leading-none mb-1" style={{ color: c }}>{v}</div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{l}</div>
        </div>
      ))}
    </div>
  </div>
);

/* ── Teams Meeting Mockup ─────────────────────────────────────── */
export const TeamsMockup = () => (
  <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#0c1024] relative border border-white/5">
    <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-white/5 backdrop-blur-md">
       <div className="flex items-center gap-3">
         <img src="https://img.icons8.com/color/144/microsoft-teams.png" className="w-5 h-5 object-contain" alt="Teams" />
         <span className="text-[13px] font-bold text-white/90">Customer Success Sync</span>
       </div>
       <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-bold text-white/50 tracking-widest uppercase">Live</span>
       </div>
    </div>
    <div className="p-4 grid grid-cols-2 gap-3 aspect-[4/3]">
      {[
        {n:'Mark', img:'https://randomuser.me/api/portraits/men/32.jpg', status: 'Speaking'},
        {n:'Priya', img:'https://randomuser.me/api/portraits/women/44.jpg', status: 'Muted'},
        {n:'James', img:'https://randomuser.me/api/portraits/men/46.jpg', status: 'Muted'},
        {n:'You', img:'https://randomuser.me/api/portraits/women/68.jpg', status: 'Muted'}
      ].map((user, i)=>(
        <div key={user.n} className="rounded-2xl relative overflow-hidden group/call aspect-video">
           <img src={user.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/call:scale-110" alt={user.n} />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
           <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10 overflow-hidden">
                <img src={user.img} className="w-full h-full object-cover" alt="" />
              </div>
              <span className="text-[11px] font-bold text-white shadow-sm">{user.n}</span>
           </div>
           {user.status === 'Speaking' && (
             <div className="absolute top-3 right-3 flex gap-1">
                {[1,2,3].map(j => <motion.div key={j} animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, delay: j*0.2 }} className="w-1 bg-[#4B5EAA] rounded-full" />)}
             </div>
           )}
        </div>
      ))}
    </div>
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl">
      {['🎙️', '📹', '🏢', '💬', '📞'].map((e, i)=>(
        <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm cursor-pointer shadow-sm ${i === 4 ? 'bg-red-500 text-white' : 'bg-white/10 text-white'}`}>
          {e}
        </div>
      ))}
    </div>
  </div>
);

/* ── Security Score Mockup ────────────────────────────────────── */
export const SecurityMockup = () => (
  <div className="rounded-2xl overflow-hidden shadow-2xl border bg-white" style={{ borderColor: BD }}>
    <div className="p-8 border-b bg-gray-50/30" style={{ borderColor: BD }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00875A15] flex items-center justify-center">
            <Shield size={20} className="text-[#00875A]" />
          </div>
          <div>
            <span className="block text-[13px] font-bold text-[#0c1024]">Security Health</span>
            <span className="block text-[10px] font-bold text-[#00875A] uppercase tracking-wider">Monitored by C9 SOC</span>
          </div>
        </div>
        <div className="text-right">
           <span className="block text-[24px] font-bold text-[#0c1024]">94<span className="text-gray-300 text-[14px]">/100</span></span>
        </div>
      </div>
      
      <div className="relative h-4 rounded-full bg-gray-100 overflow-hidden">
        <motion.div 
          className="h-full rounded-full" 
          style={{ background: 'linear-gradient(90deg, #00875A, #10b981)' }} 
          initial={{ width: 0 }} 
          whileInView={{ width: '94%' }} 
          transition={{ duration: 1.5, ease: [0.22,1,0.36,1] }} 
          viewport={{ once: true }} 
        />
      </div>
    </div>
    <div className="p-6 space-y-3 bg-white">
      {[
        {l:'Endpoint Protection active', ok:true},
        {l:'24/7 SOC Monitoring on', ok:true},
        {l:'Identity MFA enforced', ok:true}
      ].map(({l,ok})=>(
        <div key={l} className="flex items-center justify-between p-3 rounded-xl border border-gray-50 bg-gray-50/30">
          <div className="flex items-center gap-3">
             <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
               <Check size={12} className="text-green-600" />
             </div>
             <span className="text-[12px] font-bold text-gray-600">{l}</span>
          </div>
          <span className="text-[10px] font-bold text-green-600 uppercase">Live</span>
        </div>
      ))}
    </div>
  </div>
);

/* ── Device Management Mockup ─────────────────────────────────── */
export const DeviceMockup = () => (
  <div className="rounded-2xl overflow-hidden shadow-2xl border bg-white" style={{ borderColor: BD }}>
    <div className="px-6 py-5 border-b flex items-center justify-between bg-gray-50/50" style={{ borderColor: BD }}>
      <div className="flex items-center gap-3">
        <Laptop size={18} className="text-[#6264A7]" />
        <span className="text-[13px] font-bold font-proxima text-[#0c1024]">Microsoft Intune Fleet</span>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1 bg-[#6264A715] rounded-full">
         <div className="w-1.5 h-1.5 rounded-full bg-[#6264A7] animate-pulse" />
         <span className="text-[10px] font-bold text-[#6264A7]">47 Synchronized</span>
      </div>
    </div>
    <div className="p-6 space-y-4">
      {[
        {n:'Surface Laptop 7 — Admin', s:'Compliant', i:'https://img.icons8.com/color/144/surface-pro-7.png'},
        {n:'MacBook Pro M3 — Dev', s:'Compliant', i:'https://img.icons8.com/color/144/macbook.png'},
        {n:'iPhone 16 Pro — Sales', s:'Compliant', i:'https://img.icons8.com/color/144/iphone-14-pro.png'}
      ].map(({n,s,i})=>(
        <div key={n} className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-gray-100 shadow-sm transition-transform hover:scale-[1.02] cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center p-2">
             <img src={i} className="w-full h-full object-contain" alt="" />
          </div>
          <div className="flex-1">
             <div className="text-[13px] font-bold text-[#0c1024]">{n}</div>
             <div className="flex items-center gap-1.5 mt-0.5">
               <CheckCircle2 size={12} className="text-green-500" />
               <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">{s}</span>
             </div>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-center p-4">
         <motion.div 
           animate={{ opacity: [0.5, 1, 0.5] }} 
           transition={{ repeat: Infinity, duration: 2 }}
           className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]"
         >
           Scanning for new endpoints...
         </motion.div>
      </div>
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
    icon: 'https://img.icons8.com/color/144/cctv.png', 
    tag: 'PHYSICAL SECURITY', 
    title: 'CCTV & People Count', 
    metric: '95%',
    metricLabel: 'Occupancy Accuracy',
    body: 'Cloud-managed CCTV with AI people counting and real-time occupancy analytics.', 
    color: '#7C3AED', 
    img: '/images/workplace-cctv.jpg' 
  },
  { 
    icon: 'https://img.icons8.com/color/144/print.png', 
    tag: 'MANAGED PRINT', 
    title: 'Managed Print Solution', 
    metric: '30%',
    metricLabel: 'Cost Reduction',
    body: 'Hardware, toner, and maintenance included in one predictable monthly cost.', 
    color: '#0369A1', 
    img: '/images/workplace-print.jpg' 
  },
  { 
    icon: 'https://img.icons8.com/color/144/identification-documents.png', 
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
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 bg-white shadow-sm border border-gray-100" style={{ transform: isActive ? 'scale(1.1) rotate(-3deg)' : 'scale(1)' }}>
                    <img src={item.icon} alt={item.title} className={`w-8 h-8 object-contain transition-all duration-500 ${isActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-40'}`} />
                  </div>
                  
                  {/* Title */}
                  <div className="pt-2.5">
                    <h3 className={`text-[20px] font-bold tracking-tight transition-all duration-500 ${isActive ? 'text-[#0c1024]' : 'text-gray-400'}`} style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
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

export const FAQSection = ({ items = FAQS }: { items?: { q: string; a: string }[] }) => {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <div>
      {items.map((f, i) => (
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

/* ── Interactive Hero Dashboard (Animated Demo) ──────────────── */
export const InteractiveHeroDashboard = () => {
  const [step, setStep] = useState(0);
  const [securityScore, setSecurityScore] = useState(0);
  const [deviceCount, setDeviceCount] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [showToast, setShowToast] = useState<string | null>(null);

  // Demo sequence
  React.useEffect(() => {
    let active = true;
    const sequence = async () => {
      while (active) {
        // 1. Initial pause
        setStep(0);
        await new Promise(r => setTimeout(r, 2000));
        if (!active) break;
        
        // 2. Animate Active Users
        setStep(1); // Move to users
        await new Promise(r => setTimeout(r, 1200));
        if (!active) break;
        setActiveUsers(24);
        setShowToast("24 Users Onboarded to M365 ✨");
        await new Promise(r => setTimeout(r, 2500));
        setShowToast(null);

        // 3. Animate Security
        setStep(2); // Move to security
        await new Promise(r => setTimeout(r, 1200));
        if (!active) break;
        setSecurityScore(94);
        setShowToast("Microsoft Defender Activated 🛡️");
        await new Promise(r => setTimeout(r, 2500));
        setShowToast(null);

        // 4. Animate Devices
        setStep(3); // Move to devices
        await new Promise(r => setTimeout(r, 1200));
        if (!active) break;
        setDeviceCount(47);
        setShowToast("47 Devices Enrolled into Intune 💻");
        await new Promise(r => setTimeout(r, 2500));
        setShowToast(null);

        // 5. Final
        setStep(4); // Move to support
        await new Promise(r => setTimeout(r, 3500));
        
        // Reset for loop
        setActiveUsers(0);
        setSecurityScore(0);
        setDeviceCount(0);
        await new Promise(r => setTimeout(r, 1000));
      }
    };
    sequence();
    return () => { active = false; };
  }, []);

  const cursorPositions = [
    { x: '15%', y: '85%' }, // 0: Start (bottom left)
    { x: '20%', y: '25%' }, // 1: Active Users card
    { x: '45%', y: '25%' }, // 2: Security card
    { x: '70%', y: '25%' }, // 3: Devices card
    { x: '90%', y: '25%' }, // 4: Support card
  ];

  return (
    <div className="relative rounded-t-[32px] border-t border-x overflow-hidden shadow-2xl" 
      style={{ borderColor: BD, background: '#fff' }}>
      
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 px-6 py-4 border-b" style={{ background: '#F8FAFF', borderColor: BD }}>
        {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} className="w-3 h-3 rounded-full shadow-sm" style={{ background: c }} />)}
        <div className="flex-1 mx-4 rounded-full px-4 py-1.5 text-[11px] font-bold text-center border bg-white shadow-inner" style={{ borderColor: BD, color: TM }}>
          portal.c9communications.com.au — <span className="text-[#5D00D6]">Live Managed Workspace</span>
        </div>
      </div>

      <div className="p-10 relative bg-white">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {[
            { l:'Active Users', v: activeUsers === 0 ? '0/24' : '24/24', c:P, s: step === 1 },
            { l:'Security Score', v: securityScore === 0 ? '0%' : securityScore + '%', c:'#00875A', s: step === 2 },
            { l:'Devices Managed', v: deviceCount === 0 ? '0' : deviceCount, c:'#6264A7', s: step === 3 },
            { l:'Support Response', v:'< 2m', c:'#D97706', s: step === 4 },
          ].map(({ l, v, c, s }) => (
            <motion.div 
              key={l} 
              animate={{ 
                scale: s ? 1.05 : 1,
                borderColor: s ? c : BD,
                backgroundColor: s ? c + '05' : '#fff'
              }}
              className="rounded-3xl p-6 border transition-all duration-500 shadow-sm" 
              style={{ boxShadow: s ? `0 15px 40px ${c}25` : '0 4px 6px rgba(0,0,0,0.02)' }}
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-gray-400">{l}</div>
              <div className="text-[36px] font-bold leading-none mb-3" style={{ color: c }}>{v}</div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${String(v).includes('0') && !String(v).includes('24') ? 'bg-gray-200' : 'bg-green-500 animate-pulse'}`} />
                <span className="text-[10px] font-bold text-gray-400 tracking-wider">
                  {String(v).includes('0') && !String(v).includes('24') ? 'Syncing...' : 'Active Now'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activity Row */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-10 gap-8">
          <div className="flex gap-4">
            {[
              { t: 'Word', bg: 'https://img.icons8.com/color/144/microsoft-word-2019.png' },
              { t: 'Excel', bg: 'https://img.icons8.com/color/144/microsoft-excel-2019.png' },
              { t: 'Teams', bg: 'https://img.icons8.com/color/144/microsoft-teams.png' },
              { t: 'Outlook', bg: 'https://img.icons8.com/color/144/microsoft-outlook-2019.png' }
            ].map((app, i) => (
              <motion.div 
                key={app.t}
                animate={{ 
                  y: activeUsers > 0 ? 0 : 10,
                  opacity: activeUsers > 0 ? 1 : 0.2,
                  scale: activeUsers > 0 ? 1.1 : 0.9,
                  rotate: activeUsers > 0 ? 0 : -5
                }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 group/app" 
              >
                <img src={app.bg} alt={app.t} className="w-9 h-9 object-contain transition-transform duration-500 group-hover/app:scale-110" />
              </motion.div>
            ))}
          </div>

          <div className="flex-1 max-w-lg md:ml-12 overflow-hidden py-2 min-h-[80px]">
             <AnimatePresence mode="wait">
                <motion.div 
                  key={step}
                  initial={{ opacity:0, y:20 }}
                  animate={{ opacity:1, y:0 }}
                  exit={{ opacity:0, y:-20 }}
                  className="flex items-center gap-5 p-5 bg-gray-50/50 rounded-2xl border border-gray-100/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                     <Zap size={20} className="text-[#5D00D6]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-bold text-[#0c1024] leading-tight">
                      {step === 0 && "System initialized. Polling remote tenants..."}
                      {step === 1 && "Onboarding 24 employees to Microsoft 365..."}
                      {step === 2 && "Hardening endpoints with Microsoft Defender SOC."}
                      {step === 3 && "Deploying Intune compliance and wipe policies."}
                      {step === 4 && "Global support desk active. Avg response: 1m 40s."}
                    </div>
                    <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5D00D6] animate-ping" />
                      Live Network Feedback
                    </div>
                  </div>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>

        {/* Floating Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 px-8 py-4 bg-[#0c1024] text-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4 z-50 border border-white/20 backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                 <Shield size={20} className="text-green-400" />
              </div>
              <span className="text-[15px] font-bold tracking-tight pr-4">{showToast}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Simulated Cursor - The "Ghost" Guide */}
        <motion.div
          animate={{ 
            left: cursorPositions[step].x, 
            top: cursorPositions[step].y,
            scale: showToast ? 0.9 : 1
          }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute z-[100] pointer-events-none drop-shadow-2xl"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.65376 12.3822L15.4226 21.0478C15.7404 21.3344 16.2308 21.1031 16.1952 20.6726L15.3677 10.5113L21.3533 11.2335C21.7826 11.2855 22.0421 10.7483 21.7317 10.4554L3.63571 3.03688C3.25304 3.1234 3.03713 3.56385 3.19323 3.91107L10.0381 19.3303C10.2038 19.7047 10.7161 19.7431 10.9328 19.3905L12.9806 16.0357L16.1035 18.0673L17.2035 16.0673L14.0806 14.0357" fill="#0c1024" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};
