'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Clock, Lock, ShieldCheck, Mail, Users as UsersIcon, Settings, ChevronDown, Laptop, MessageSquare, Database, Headphones, HardDrive, CheckCircle2 } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import {
  P, PL, T, TM, TM2, BD,
  FadeUp, ScaleIn, Eyebrow
} from '../components';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { ServiceTestimonialKajabi } from '@/components/wordpress/ServiceTestimonialKajabi';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';

const PRODUCTIVITY_FAQS = [
  { q: 'What is "Managed M365" vs. just buying licenses?', a: 'Buying licenses gives you access to the software. Managed M365 means C9 handles the setup, security hardening (MFA, Conditional Access), user onboarding/offboarding, and ongoing optimization. We ensure you actually use the features you pay for.' },
  { q: 'Can you migrate our existing emails to Microsoft 365?', a: 'Yes. We specialize in zero-downtime migrations from Google Workspace, on-premise Exchange, and POP/IMAP providers. We handle the data move and cutover.' },
  { q: 'Is security included in the management?', a: 'Absolutely. We apply enterprise-grade security baselines to every tenant, including MFA enforcement, anti-phishing policies, and data loss prevention (DLP) configuration.' },
  { q: 'Do you offer local Australian support?', a: 'Yes. All support is provided by our Sydney-based engineering team. No offshore call centers, just experts who answer and resolve issues fast.' },
];

// ── UNIQUE ANIMATED VISUALS FOR SCOPE ──

const TenantVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative z-10 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 w-[240px]">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
          <Settings size={20} />
        </div>
        <div className="flex flex-col">
          <span className="text-[14px] font-bold text-gray-900">Tenant Governance</span>
          <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Global Healthy</span>
        </div>
      </div>
      <div className="space-y-3">
        {[
          { l: 'c9-comms.com.au', s: 'Verified' },
          { l: 'tenant-security', s: 'Hardened' },
          { l: 'data-residency', s: 'Sydney' }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ x: -10, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-gray-100"
          >
            <span className="text-[11px] font-medium text-gray-600">{item.l}</span>
            <span className="text-[9px] font-bold text-[#5D00D6] uppercase">{item.s}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
    {/* Satellite dots */}
    <div className="absolute inset-0 pointer-events-none">
      {[0, 120, 240].map((deg, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-purple-200"
          animate={{
            x: [Math.cos(deg * Math.PI / 180) * 140, Math.cos((deg + 360) * Math.PI / 180) * 140],
            y: [Math.sin(deg * Math.PI / 180) * 140, Math.sin((deg + 360) * Math.PI / 180) * 140],
          }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  </div>
);

const TeamsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 w-[280px] relative z-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#6264A7] flex items-center justify-center text-white">
            <MessageSquare size={20} />
          </div>
          <div>
            <div className="text-[14px] font-bold text-gray-900">Teams Voice</div>
            <div className="text-[10px] text-gray-400 font-bold uppercase">C9 Managed SBC</div>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      </div>
      
      <div className="relative h-24 bg-slate-50 rounded-2xl border border-dashed border-gray-200 flex items-center justify-center overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-purple-100/30"
        />
        <div className="flex flex-col items-center gap-1.5 z-10">
          <div className="text-[12px] font-bold text-purple-600 uppercase tracking-widest">Active Call</div>
          <div className="text-[18px] font-bold text-gray-900 leading-none">00:42</div>
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-3">
        <div className="px-4 py-2 rounded-full bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-emerald-500/20">Answered</div>
        <div className="px-4 py-2 rounded-full bg-slate-100 text-gray-400 text-[11px] font-bold uppercase tracking-wider">Record</div>
      </div>
    </motion.div>
  </div>
);

const SharePointVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="grid grid-cols-2 gap-4 w-[320px]">
      {[
        { l: 'Finance Share', i: HardDrive, c: '240GB' },
        { l: 'Projects 2024', i: Database, c: '1.2TB' },
        { l: 'Standard Ops', i: Shield, c: 'Locked' },
        { l: 'Executive Only', i: Lock, c: 'Private' }
      ].map((box, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex flex-col gap-3 hover:border-purple-200 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
            <box.i size={16} />
          </div>
          <div>
            <div className="text-[12px] font-bold text-gray-900">{box.l}</div>
            <div className="text-[10px] text-gray-400 font-bold uppercase">{box.c}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const SecurityVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="bg-white rounded-[32px] p-8 shadow-2xl border border-gray-100 w-[240px] relative z-10 text-center">
      <div className="w-20 h-20 rounded-full bg-red-50 mx-auto flex items-center justify-center mb-6 relative">
        <motion.div 
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-2 border-red-200"
        />
        <ShieldCheck size={40} className="text-red-500" />
      </div>
      <div className="text-[11px] font-bold text-red-500 uppercase tracking-[0.2em] mb-2">Zero Trust Defense</div>
      <div className="text-[20px] font-bold text-gray-900 mb-4">24 Threats Blocked</div>
      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">Active Monitoring • Pod 3 SecOps<br />Sydney NSW</div>
    </motion.div>
  </div>
);

const IntuneVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[200px]">
       {[
         { icon: Laptop, x: -60, y: -40, l: 'LOCKED' },
         { icon: MessageSquare, x: 60, y: 30, l: 'MAM PROTECTED' },
         { icon: Settings, x: 0, y: 70, l: 'AUTOPILOT READY' }
       ].map((d, i) => (
         <motion.div
           key={i}
           initial={{ opacity: 0, x: 0, y: 0 }}
           animate={{ opacity: 1, x: d.x, y: d.y }}
           transition={{ duration: 0.8, delay: i * 0.2 }}
           className="absolute left-1/2 top-1/2 -ml-12 -mt-10 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 w-[120px] text-center flex flex-col items-center gap-2"
         >
           <d.icon size={24} className="text-purple-600" />
           <div className="text-[9px] font-black text-emerald-500 uppercase tracking-tighter">{d.l}</div>
         </motion.div>
       ))}
       <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-purple-600/10 border-2 border-purple-500/20 animate-ping" />
       </div>
    </div>
  </div>
);

const SupportVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 w-[260px] relative z-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center">
          <Headphones size={20} />
        </div>
        <div className="flex flex-col">
          <div className="text-[14px] font-bold text-gray-900">Live Human Support</div>
          <div className="text-[10px] text-emerald-500 font-bold uppercase">Average Queue: 82s</div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div initial={{ width: "0%" }} animate={{ width: "98%" }} transition={{ duration: 1.5 }} className="h-full bg-emerald-500" />
        </div>
        <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <span>Client Satisfaction</span>
          <span>98.4%</span>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-50 flex items-center gap-4">
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white" />
        </div>
        <div className="text-[12px] font-bold text-gray-800">Sydney Engineering Active</div>
      </div>
    </motion.div>
  </div>
);

const ManagedScopeUI = () => {
  const items = [
    {
      title: 'Governance & Sovereignty',
      icon: Settings,
      content: 'We take total accountability for your tenant health, enforcing Australian data residency and Essential Eight security baselines as standard.',
      bullets: [
        'ACSC Essential Eight alignment',
        'Australian Data Residency',
        'Tenant health hardening',
        'Licensing rightsizing'
      ]
    },
    {
      title: 'Unified Communication',
      icon: MessageSquare,
      content: 'We transform Teams into a high-availability voice platform, replacing legacy phone systems with integrated, secure cloud calling.',
      bullets: [
        'Secure Teams Voice',
        'Structured channel governance',
        'Meeting security policies',
        'Managed guest access'
      ]
    },
    {
      title: 'Secure File Infrastructure',
      icon: Database,
      content: 'We engineer SharePoint and OneDrive architectures to mirror your operational workflows, with zero-trust permission models.',
      bullets: [
        'Workflow-aligned architecture',
        'Zero-trust permissions',
        'External sharing governance',
        'Audit logging'
      ]
    },
    {
      title: 'Defensive Posture',
      icon: ShieldCheck,
      content: 'We deploy enforced Conditional Access and Defender for Endpoint, ensuring only healthy, managed devices can touch your data.',
      bullets: [
        'Enforced Conditional Access',
        'Defender for Business',
        'Managed Anti-Phishing',
        'Data Loss Prevention'
      ]
    },
    {
      title: 'Zero-Touch Deployment',
      icon: Laptop,
      content: 'Through Windows Autopilot and Intune, we enable "Day One" readiness. New hardware is productive within minutes of unboxing.',
      bullets: [
        'Windows Autopilot',
        'Enforced device compliance',
        'Automated application stack',
        'Remote lock/wipe'
      ]
    },
    {
      title: 'Operational Stewardship',
      icon: Headphones,
      content: 'We provide continuous operational stewardship, ensuring your environment evolves with security standards and business growth.',
      bullets: [
        'Onshore SOC & Helpdesk',
        'Continuous monitoring',
        'Monthly ROI & License audits',
        'Strategic vCIO alignment'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {items.map((item, i) => (
        <FadeUp key={i} delay={i * 0.05} className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#5D00D6]/20 transition-all duration-500 flex flex-col">
          <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors duration-500">
            <item.icon size={22} />
          </div>
          <h3 className="text-[20px] font-bold text-[#0c1024] mb-4">{item.title}</h3>
          <p className="text-[14px] text-gray-500 leading-relaxed mb-8 flex-grow">
            {item.content}
          </p>
          <div className="pt-6 border-t border-gray-50 space-y-3">
            {item.bullets.map((bullet, bi) => (
              <div key={bi} className="flex items-center gap-3">
                <Check size={14} className="text-emerald-500 shrink-0" />
                <span className="text-[12px] font-bold text-gray-600">{bullet}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      ))}
    </div>
  );
};


const PainCard = ({ icon: Icon, title, body, delay }: { icon: any, title: string, body: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className="p-8 md:p-10 flex flex-col items-start text-left relative border border-gray-100 rounded-[24px] bg-white hover:border-[#5D00D6]/20 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all duration-500"
  >
    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-8 border border-gray-100 group-hover:bg-[#5D00D6] group-hover:text-white group-hover:border-[#5D00D6] transition-all duration-500">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h3 className="text-[20px] font-bold text-[#0c1024] mb-4 leading-tight tracking-tight group-hover:text-[#5D00D6] transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-500 text-[14px] leading-relaxed font-normal">
      {body}
    </p>
    <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent w-full scale-x-0 group-hover:scale-x-100 duration-500 rounded-b-[24px]" />
  </motion.div>
);

const sectionClassName = 'py-12 md:py-16';
const containerClassName = 'mx-auto w-full max-w-[1240px] px-6';
const cardClassName = 'group rounded-[24px] border border-gray-100 bg-white p-6 md:p-8 hover:border-[#5D00D6]/20 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all duration-500 overflow-hidden relative';

export default function ProductivityPage() {
  return (
    <div className="bg-[#F8FAFF] min-h-screen pt-4 text-[#0C1024] overflow-x-hidden" style={{ fontFamily: '"Proxima Nova","Inter",system-ui,sans-serif' }}>

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="pt-8 pb-12 md:pt-10 md:pb-16 relative bg-gradient-to-b from-white via-[#F8FAFF]/50 to-white overflow-hidden">
        {/* Subtle dynamic background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5D00D6]/[0.02] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className={`${containerClassName} relative z-10`}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
            
            {/* Left */}
            <div className="max-w-[700px] pt-2 md:pt-6">
              <FadeUp>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DCCDF8] bg-white px-3 py-1.5 shadow-sm">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5D00D6]">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  </div>
                  <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#5D00D6] pr-1">Managed Microsoft 365</span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="c9-hero-title mb-6 !leading-[1.15]">
                  Managed M365 — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D00D6] to-purple-600">Infrastructure as a Managed Utility.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="mb-10 text-[18px] md:text-[21px] leading-relaxed text-[#4C587E]">
                  Stop treating Microsoft 365 as a license. We operate your productivity stack as a critical operational utility—ensuring zero downtime, absolute data sovereignty, and enforced security baselines.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="#managed-scope" className="inline-flex items-center justify-center rounded-full bg-[#5D00D6] text-white transition-all hover:bg-[#7116FF] hover:-translate-y-1 hover:shadow-xl active:scale-95 h-14 px-8 text-[15px] font-bold">
                    See What We Manage
                  </Link>
                  <Link href="#consultation-section" className="inline-flex items-center justify-center rounded-full border border-[#DCCDF8] bg-white text-[#5D00D6] transition-all hover:border-[#5D00D6] hover:bg-gray-50 h-14 px-8 text-[15px] font-bold">
                    Book M365 Audit
                  </Link>
                </div>
              </FadeUp>

              <FadeUp delay={0.4}>
                <div className="flex flex-wrap gap-5 mt-8">
                  {['Expert Setup', '24/7 Security', 'Onshore Support'].map(t => (
                    <div key={t} className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100/50">
                        <Check size={14} className="text-green-600" />
                      </div>
                      <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">{t}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right: Realistic Engagement Visual */}
            <ScaleIn delay={0.5} className="relative hidden lg:block">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src="/modern_m365_office_collaboration.png" 
                  alt="Modern Office Team Collaborating with Microsoft 365" 
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/10 to-transparent mix-blend-overlay" />
              </div>

              {/* Floating Meta-Info Card (Half-Overlap) */}
              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-10 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-[32px] border border-slate-100 shadow-[0_20px_50px_rgba(93,0,214,0.15)] z-30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#5D00D6] text-white flex items-center justify-center shadow-lg shadow-purple-900/20">
                      <UsersIcon size={24} />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-slate-900">Active Operational Sync</div>
                      <div className="text-[10px] text-[#5D00D6] font-bold uppercase tracking-widest">Environment Shield Active</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Verified 99.9%</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Background Elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10" />
              <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-50 -z-10" />
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: SOUND FAMILIAR? ═══════════════════════════════ */}
      <section className={`${sectionClassName} bg-white relative overflow-hidden`}>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50" />
        
        <div className={`${containerClassName} relative z-10`}>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-[#5D00D6]/5 px-4 py-2 rounded-full mb-4">
                <span className="c9-eyebrow !text-[#5D00D6] !text-[10px]">SOUND FAMILIAR?</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="c9-section-heading font-proxima tracking-tight font-bold leading-tight">
                The cost of <br />
                <span className="text-[#5D00D6]">unmanaged infrastructure.</span>
              </h2>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Shield,
                title: 'Security Non-Compliance', 
                body: 'Default M365 fails Essential Eight requirements. Without enforced Conditional Access and hardened baselines, your tenant is an open door for lateral movement.' 
              },
              { 
                icon: Clock,
                title: 'Operational Friction', 
                body: 'Manual onboarding and ghost accounts create security holes and technical debt. Without an automated lifecycle, your operational risk grows with every hire.' 
              },
              { 
                icon: Zap,
                title: 'Technical Waste', 
                body: "Paying for E5 features you don't use, or lacking the E3 security features you need. Unmanaged licensing is a silent drain on your operational budget." 
              }
            ].map((point, i) => (
              <PainCard 
                key={point.title}
                icon={point.icon}
                title={point.title}
                body={point.body}
                delay={0.1 + (i * 0.1)}
              />
            ))}
          </div>

          <FadeUp delay={0.4} className="mt-12 text-center">
             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-50 border border-gray-100 text-[#5D00D6] font-bold text-[16px]">
               C9 manages every layer of your M365 environment 
             </div>
          </FadeUp>
        </div>
      </section>

      <section id="managed-scope" className="py-20" style={{ background: '#F8FAFF' }}>
        <div className="container mx-auto max-w-[1240px] px-6">
          <FadeUp className="text-center max-w-[900px] mx-auto mb-16">
            <Eyebrow>Full Managed Scope</Eyebrow>
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">Total Accountability for Your Productivity Stack</h2>
            <p className="text-[17px] text-gray-500 font-medium max-w-2xl mx-auto">
              We move beyond simple support to act as the primary operational owner of your Microsoft environment.
            </p>
          </FadeUp>
          <ManagedScopeUI />
        </div>
      </section>

      {/* ══ SECTION 3.5: PROTOCOLS (CEO PERSONA ALIGNMENT) ════════════ */}
      <section className="py-16 md:py-24 bg-white border-y border-gray-100">
        <div className={containerClassName}>
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
                Transitioning from a failing provider shouldn't be a risk. We utilize a structured takeover protocol to audit, secure, and stabilize your environment without operational disruption.
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
                For new sites and startups, "good enough" is not an option. We guarantee a fully-operational, secure M365 environment on your first day of operation.
              </p>
              <div className="bg-[#0B0B0F] border border-white/5 rounded-3xl p-8 relative overflow-hidden hover:border-[#5D00D6]/20 transition-all shadow-2xl">
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

      {/* ══ SECTION 4: M365 PLANS WE MANAGE ══════════════════════════ */}
      <section className={`${sectionClassName} bg-[#0B0B0F] text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/5 to-transparent pointer-events-none" />
        <div className={`${containerClassName} relative z-10`}>
          <div className="max-w-[760px] mx-auto text-center flex flex-col items-center mb-16">
            <span className="text-[#A266FF] text-[12px] font-extrabold uppercase tracking-[0.3em] mb-4 block">
              Managed Plans
            </span>
            <h2 className="c9-section-heading !text-white mb-6 font-proxima tracking-tight font-bold leading-tight">
              We manage all Microsoft 365 plans
            </h2>
            <p className="text-gray-400 text-[17px] md:text-[18px] leading-relaxed font-normal">
              Whether you need basic productivity or enterprise-grade security, we provide the licenses and the expert management to back them up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'M365 Core (Startup)',
                desc: "Enterprise-grade email and collaboration for businesses requiring professional presence without complex device management. Fully managed operational stability.",
                items: ['Zero-downtime mailbox migration', 'Managed tenant governance', 'Standard security baselines', 'Onshore Australian support'],
                badge: 'STARTUP READINESS',
                price: '$15 / user / mo'
              },
              {
                title: 'M365 Advanced (Growth)',
                desc: 'Our recommended operational baseline. Includes full Defender protection and Intune device management to meet Essential Eight requirements.',
                items: ['Full Defender Security Stack', 'Intune Device Management', 'ACSC Essential Eight Alignment', 'Conditional Access Enforcement'],
                badge: 'GROWTH & STABILISATION',
                price: '$30 / user / mo'
              },
              {
                title: 'M365 Managed (Enterprise)',
                desc: 'Designed for organisations requiring advanced data governance, complex compliance auditing, and board-level strategic vCIO reporting.',
                items: ['Advanced Data Governance', 'Full DLP & eDiscovery', 'Strategic vCIO Consulting', 'Board-Level Compliance Audit'],
                badge: 'ENTERPRISE GOVERNANCE',
                price: 'Custom Managed Pricing'
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-[#12121A] border border-white/5 rounded-[32px] p-8 md:p-10 shadow-xl flex flex-col h-full hover:bg-[#16161F] transition-all duration-300">
                <div className="mb-6 flex justify-between items-start">
                  <h3 className="text-[22px] md:text-[24px] text-white font-bold leading-tight">{card.title}</h3>
                </div>
                <p className="text-[14px] md:text-[16px] text-gray-400 mb-8 leading-relaxed font-normal flex-grow">{card.desc}</p>
                
                <div className="flex flex-col mb-10 border-t border-white/5 pt-2">
                  {card.items.map((item, index) => (
                    <div key={index} className="flex flex-row items-center gap-4 py-4 border-b border-white/5 px-2">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#A266FF] flex-shrink-0" />
                      <span className="text-[14px] md:text-[14px] font-medium text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="text-[#A266FF] text-[18px] font-bold mb-6">{card.price}</div>
                  <div className="flex items-center gap-4 bg-transparent border border-white/5 rounded-2xl px-5 py-4 group-hover:border-purple-500/30 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-[#222] border border-white/10 flex items-center justify-center shrink-0">
                      <span className="text-[11px] font-bold text-white/80">C9</span>
                    </div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{card.badge}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Link href="#consultation-section" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5D00D6] hover:bg-[#7116FF] text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(93,0,214,0.3)] h-14 px-8 text-[15px] font-bold">
              Speak to a Licensing Expert 
            </Link>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8 text-gray-200 text-[14px]">
            <div className="h-px w-10 bg-gray-100/20" />
            All plans include: Australian support, monthly reporting, security monitoring
            <div className="h-px w-10 bg-gray-100/20" />
          </div>
        </div>
      </section>

      {/* ══ SECTION 5: MIGRATION & ONBOARDING ═══════════════════════ */}
      <section className="py-20" style={{ background: PL }}>
        <div className="container mx-auto max-w-[1240px] px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <div>
              <FadeUp>
                <Eyebrow>The Process</Eyebrow>
                <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">How we migrate your team to managed M365</h2>
                <p className="text-[18px] text-gray-500 font-medium mb-6">
                  Moving platforms is high-stakes. Our phased approach ensures zero data loss and zero downtime for your staff.
                </p>
                <Link href="/insights" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-[16px] transition-all duration-300 hover:shadow-xl" style={{ background: `linear-gradient(135deg, ${P} 0%, #7B1FE8 100%)` }}>
                  View All Insights 
                </Link>
              </FadeUp>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               {[
                 { 
                   week: 'WEEK 1', 
                   title: 'Discovery & Design', 
                   items: ['Audit current setup (Google, Exchange, etc.)', 'Design M365 tenant architecture', 'Plan migration and communication'] 
                 },
                 { 
                   week: 'WEEK 2-3', 
                   title: 'Tenant Build & Migration', 
                   items: ['Provision M365 with C9 baseline', 'Migrate mailboxes and data (zero downtime)', 'Configure Teams, SharePoint, OneDrive'] 
                 },
                 { 
                   week: 'WEEK 4', 
                   title: 'User Training & Go-Live', 
                   items: ['Live training (virtual or on-site)', 'User guides and knowledge base', 'Go-live support during cutover'] 
                 },
                 { 
                   week: 'ONGOING', 
                   title: 'Managed Support', 
                   items: ['Monthly health checks and optimization', 'Proactive security monitoring', 'Onshore Australian helpdesk'] 
                 }
               ].map((phase, i) => (
                 <ScaleIn key={phase.title} delay={i * 0.1}>
                   <div className="bg-white rounded-3xl p-8 border border-white/20 shadow-sm h-full flex flex-col">
                      <div className="text-[#5D00D6] text-[12px] font-bold tracking-[0.2em] mb-4">{phase.week}</div>
                      <h3 className="text-[20px] font-bold text-[#0c1024] mb-5">{phase.title}</h3>
                      <div className="flex flex-col gap-3">
                        {phase.items.map((item, ii) => (
                          <div key={ii} className="flex gap-2">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-100 shrink-0" />
                            <span className="text-[14px] text-gray-500 font-medium leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                 </ScaleIn>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 6: CLIENT SUCCESS (CASE STUDY) ════════════════════ */}
      <section className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <FadeUp className="text-center mb-10">
            <span className="text-[12px] font-bold text-[#5D00D6] uppercase tracking-[0.3em] font-proxima">Client Success</span>
          </FadeUp>

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-stretch mb-8 max-w-[1100px] mx-auto">
            {/* Left: Office Image */}
            <FadeUp delay={0.1} className="relative rounded-[24px] overflow-hidden min-h-[350px] lg:h-[420px]">
              <img 
                src="/modern_office_workplace.png" 
                alt="Modern Consulting Office" 
                className="absolute inset-0 w-full h-full object-cover shadow-2xl"
              />
            </FadeUp>

            {/* Right: Testimonial Card */}
            <FadeUp delay={0.2} className="bg-[#2D2B29] rounded-[24px] p-8 md:p-12 flex flex-col justify-center text-white relative lg:h-[420px]">
               <div className="text-[20px] md:text-[24px] font-bold leading-relaxed mb-8 font-proxima">
                  &quot;C9&apos;s Modern Workplace implementation has transformed how our team collaborates. Their responsive helpdesk and strategic IT advice have made them a true partner in our firm&apos;s growth.&quot;
               </div>

               <div className="flex flex-col gap-1 mt-auto">
                 <div className="flex items-center gap-3 mb-1">
                    <div className="grid grid-cols-2 gap-1 w-4 h-4 opacity-50">
                      {[...Array(4)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full" />)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">Professional Services Client</span>
                 </div>
                 <div className="text-[14px] font-medium text-white/30">Partner — Management Consulting Firm</div>
               </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.3} className="text-center">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-[11px] font-bold text-[#5D00D6] uppercase tracking-widest hover:underline">
              Read More Case Studies 
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ══ BENTO FEATURE SECTION ═══════════════════════════════════ */}
      <section className={sectionClassName} style={{ background: PL }}>
        <div className={containerClassName}>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            <FadeUp>
              <div className="flex flex-col gap-8">
                <Eyebrow>Why C9 Managed M365</Eyebrow>
                <h2 className="c9-section-heading font-proxima tracking-tight font-bold leading-tight">More than just software. It&apos;s peace of mind.</h2>
                
                <div className="flex flex-col gap-6">
                  {[
                    { t: 'Strategic Alignment', d: 'We align your M365 stack with your business goals, ensuring every license provides value.' },
                    { t: 'Compliance Ready', d: 'Configured to meet Australian Privacy Act guidelines and industry-specific regulations.' },
                    { t: 'Australian Support', d: 'Sydney-based engineers who know your name and your setup.' }
                  ].map(f => (
                    <div key={f.t} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Check size={14} className="text-brand-purple" />
                      </div>
                      <div>
                        <div className="text-[18px] font-bold text-[#0c1024] mb-1">{f.t}</div>
                        <p className="text-[14px] text-gray-600 font-medium">{f.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="#consultation-section" className="inline-flex items-center gap-2 mt-4 text-[#5D00D6] font-bold hover:underline">
                  Talk to an M365 Specialist 
                </Link>
              </div>
            </FadeUp>

            <div className="grid gap-6">
               <ScaleIn>
                 <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                       <div className="text-[11px] font-bold uppercase tracking-widest text-[#5D00D6]">Optimization Report</div>
                       <div className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">UP TO DATE</div>
                    </div>
                    <div className="text-[28px] font-bold text-[#0c1024] mb-2">$1,240 /mo</div>
                    <p className="text-gray-500 text-[14px]">Avg. licensing savings found per client through quarterly optimization.</p>
                 </div>
               </ScaleIn>
               <ScaleIn delay={0.1}>
                 <div className="bg-[#0c1024] rounded-3xl p-8 shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="text-white/60 text-[11px] font-bold uppercase tracking-widest mb-4">Support SLA</div>
                      <div className="text-white text-[32px] font-bold mb-2">99.7%</div>
                      <p className="text-white/50 text-[14px]">Issues resolved within the first hour of contact.</p>
                    </div>
                    <div className="absolute top-[-20%] right-[-10%] w-32 h-32 rounded-full bg-brand-purple/20 blur-3xl" />
                 </div>
               </ScaleIn>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 7: FAQ ═══════════════════════════════════════════ */}
      <WpFAQAndFeedback 
        showTestimonials={false} 
        faqItems={[
          { q: 'Do we have to migrate everything to M365 at once?', a: 'No. We can phase it — start with email, then Teams, then device management. Most clients complete full migration in 4-8 weeks.' },
          { q: 'What happens to our Google Workspace data?', a: 'We migrate everything — emails, files, calendars, contacts. Zero data loss, zero downtime.' },
          { q: 'Can you manage our existing M365 tenant?', a: "Yes. We audit, remediate, and take over management even if you've been on M365 for years." },
          { q: 'What\'s included in "management"?', a: 'Tenant configuration, security hardening, user support, monthly reporting, license optimization, and ongoing strategic reviews.' },
          { q: 'Is there a minimum user count?', a: 'We work with businesses from 10 users up. Below 10, we recommend our self-service option with limited support.' },
        ]} 
        showStillQuestions={false} 
      />

      {/* ══ SECTION 8: STRONG CTA ════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="container mx-auto max-w-[1000px] px-6">
          <FadeUp className="bg-gray-50 rounded-[48px] p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]" style={{ background: 'radial-gradient(ellipse, rgba(93,0,214,0.05) 0%, transparent 70%)' }} />
            
            <div className="relative z-10">
              <Eyebrow>Take the first step</Eyebrow>
              <h2 className="c9-section-heading !leading-[1.1] mb-6 text-[#0c1024] font-proxima tracking-tight font-bold leading-tight">
                Stop managing M365 yourself.<br />Let Australian experts handle it.
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-14 px-8 text-[15px] font-bold" style={{ background: `linear-gradient(135deg, ${P} 0%, #7B1FE8 100%)`, boxShadow: '0 4px 24px rgba(93,0,214,0.35)' }}>
                  Request M365 Audit
                </Link>
                <Link href="/resources/pricing-guide" className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full border transition-all duration-300 hover:border-[#5D00D6] hover:text-[#5D00D6] h-14 px-8 text-[15px] font-bold" style={{ color: TM2, borderColor: BD, background: '#fff' }}>
                  Download Pricing Guide
                </Link>
              </div>

              <div className="mt-10">
                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Or talk to us live</div>
                <div className="text-[22px] md:text-[26px] font-bold tracking-tight text-[#0c1024]">Call M365 Team: 1800 000 299</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
