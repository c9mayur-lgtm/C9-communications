'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Shield, Zap, Clock, Lock, ShieldCheck, Mail, Users, Settings, ChevronDown, Laptop, MessageSquare, Database, Headphones, HardDrive } from 'lucide-react';
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
            <div className="text-[13px] font-bold text-gray-900">Teams Voice</div>
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
          className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex flex-col gap-3 group hover:border-purple-200 transition-colors"
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
          <div className="text-[13px] font-bold text-gray-900">Live Human Support</div>
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
  const [active, setActive] = React.useState(0);
  
  const items = [
    {
      title: 'Tenant Configuration & Governance',
      icon: Settings,
      quote: "Our previous provider just gave us accounts. They never checked our DNS, Australian data compliance, or license costs.",
      content: 'We take total accountability for your tenant health, ensuring DNS is optimized, licensing is right-sized, and data residency meets Australian legal requirements.',
      bullets: [
        'Domain setup and DNS configuration',
        'User licensing optimization',
        'Security defaults and baseline policies',
        'Data residency (Australian data centers)',
        'Backup and retention policies'
      ],
      visual: <TenantVisual />
    },
    {
      title: 'Microsoft Teams Deployment',
      icon: MessageSquare,
      quote: "Teams was just a chat app for us. C9 showed us how to use it for calling and structured collaboration.",
      content: 'We transform Teams from a simple chat tool into your primary operational hub, configuring secure calling, guest access, and automated meeting policies.',
      bullets: [
        'Team and channel structure design',
        'Teams voice (calling plans)',
        'Meeting policies and recording',
        'Guest access controls',
        'Third-party app integration'
      ],
      visual: <TeamsVisual />
    },
    {
      title: 'SharePoint & OneDrive',
      icon: Database,
      quote: "Our files were a mess. No one knew where to save things or who had access to what.",
      content: 'We design a logical SharePoint architecture that mirrors your internal workflows, backed by iron-clad external sharing governance.',
      bullets: [
        'SharePoint site architecture',
        'Permission and sharing policies',
        'OneDrive for Business deployment',
        'External sharing governance',
        'Data lifecycle and retention'
      ],
      visual: <SharePointVisual />
    },
    {
      title: 'Security & Compliance',
      icon: ShieldCheck,
      quote: "We had MFA, but it wasn't enforced. One phishing email almost cost us everything.",
      content: 'We deploy specialized Defender and Conditional Access policies that go far beyond default settings to provide true enterprise-grade protection.',
      bullets: [
        'MFA enforcement baselines',
        'Conditional Access (Device-based)',
        'Data Loss Prevention (DLP) rules',
        'Anti-phishing and Safe Links',
        'Information Rights Management'
      ],
      visual: <SecurityVisual />
    },
    {
      title: 'Device Management (Intune)',
      icon: Laptop,
      quote: "Setting up new laptops was a manual nightmare. Now, we ship hardware straight to staff and C9 does the rest.",
      content: 'Through Intune and Autopilot, we enable zero-touch deployment. Any Windows, Mac, or Mobile device is automatically configured as soon as it powers on.',
      bullets: [
        'Intune enrollment and Autopilot',
        'Device compliance policies',
        'Automated app deployment',
        'Remote lock and wipe capability',
        'Unified endpoint management'
      ],
      visual: <IntuneVisual />
    },
    {
      title: 'Ongoing Support & Optimization',
      icon: Headphones,
      quote: "Most MSPs wait for us to call. C9 calls us first when they see a health issue or a way to save license cost.",
      content: 'Management isn\'t static. We provide proactive health reporting and monthly license audits to ensure your environment stays secure and cost-efficient.',
      bullets: [
        'Onshore Australian helpdesk',
        'Monthly tenant health reports',
        'License optimization reviews',
        'Proactive security monitoring',
        'Quarterly strategic reviews'
      ],
      visual: <SupportVisual />
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div 
      className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start h-[520px]"
    >
      
      {/* ── LEFT SIDE: TECHNICAL GRID VISUAL ── */}
      <div className="relative rounded-[40px] overflow-hidden bg-[#F9FAFB] border border-gray-100 hidden lg:block h-full">
        {/* Technical Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: 'linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
        
        <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex items-center justify-center"
            >
              {items[active].visual}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── RIGHT SIDE: INTERACTIVE LIST ── */}
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex flex-col space-y-1 mb-4 flex-shrink-0">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col border-b border-gray-50 last:border-0">
              <button 
                onClick={() => setActive(i)}
                className={`w-full text-left py-3 px-2 transition-all duration-300 relative group flex items-center gap-4`}
              >
                <span className={`text-[17px] md:text-[19px] font-bold transition-colors duration-300 ${active === i ? 'text-[#0c1024]' : 'text-gray-400 group-hover:text-gray-600'}`}>
                  {item.title}
                </span>
                {active === i && (
                  <>
                    <div className="absolute bottom-0 left-0 h-[3px] bg-[#5D00D6]/10 w-full rounded-full" />
                    <motion.div 
                      className="absolute bottom-0 left-0 h-[3px] bg-[#5D00D6] rounded-full z-10" 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ 
                        duration: 6, 
                        ease: "linear" 
                      }}
                      key={`timer-${active}`}
                    />
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="relative flex-grow">
          <AnimatePresence mode="wait">
            <motion.div 
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="py-2 space-y-4"
            >
              <p className="text-[15px] text-gray-400 italic font-proxima leading-relaxed border-l-2 border-purple-100 pl-6">
                &quot;{items[active].quote}&quot;
              </p>

              <div className="bg-[#F8FAFF] rounded-3xl p-6 border border-[#5D00D6]/5 relative">
                <div className="absolute top-[-10px] right-6 px-3 py-0.5 bg-[#5D00D6] rounded-md text-white text-[9px] font-bold uppercase tracking-widest shadow-xl shadow-purple-500/20">
                  THE C9 SOLUTION
                </div>
                <p className="text-[14px] text-gray-600 font-medium mb-4 leading-relaxed">
                  {items[active].content}
                </p>
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                  {items[active].bullets.map((b, bi) => (
                    <div key={bi} className="flex items-start gap-2">
                      <Check size={13} className="text-[#5D00D6] mt-0.5 shrink-0" />
                      <span className="text-[12px] text-gray-500 font-bold">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};


const PainCard = ({ icon: Icon, title, body, delay }: { icon: any, title: string, body: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className="group p-8 md:p-10 flex flex-col items-start text-left relative border border-gray-100 rounded-[24px] bg-white hover:border-[#5D00D6]/20 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all duration-500"
  >
    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-8 border border-gray-100 group-hover:bg-[#5D00D6] group-hover:text-white group-hover:border-[#5D00D6] transition-all duration-500">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h3 className="text-[20px] font-bold text-[#0c1024] mb-4 leading-tight tracking-tight group-hover:text-[#5D00D6] transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-500 text-[15px] leading-relaxed font-normal">
      {body}
    </p>
    <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-[24px]" />
  </motion.div>
);

export default function ProductivityPage() {
  return (
    <div className="bg-white min-h-screen pt-12 overflow-x-hidden" style={{ fontFamily: '"Proxima Nova","Inter",system-ui,sans-serif' }}>

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden px-6 py-10" style={{ background: '#F8FAFF' }}>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #5D00D625 0%, transparent 70%)', filter: 'blur(80px)' }} />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #a855f720 0%, transparent 70%)', filter: 'blur(60px)' }} />
        </div>

        <div className="container mx-auto max-w-[1240px] relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
            
            <div className="flex flex-col gap-8 max-w-2xl">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border" style={{ background: 'rgba(93,0,214,0.06)', borderColor: 'rgba(93,0,214,0.2)' }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: P }}>Managed Microsoft 365</span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="c9-hero-title !text-[44px] md:!text-[56px] !leading-[1.05] !tracking-[-0.05em] text-[#0c1024]">
                  Microsoft 365 — <br />
                  <span style={{ background: `linear-gradient(135deg, ${P} 0%, #a855f7 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    fully managed, secured, and optimized
                  </span>
                  <br />by Australian experts
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-[18px] md:text-[20px] leading-[1.6] text-gray-600 font-medium">
                  M365 licensing is easy. Configuring it properly, securing it against threats, and managing it ongoing — that&apos;s where most businesses struggle. C9 handles the entire lifecycle so you get productivity without the complexity.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="#managed-scope" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-[16px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95" style={{ background: `linear-gradient(135deg, ${P} 0%, #7B1FE8 100%)`, boxShadow: '0 4px 24px rgba(93,0,214,0.35)' }}>
                    See What We Manage <ArrowRight size={17} />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[16px] border transition-all duration-300 hover:border-[#5D00D6] hover:text-[#5D00D6]" style={{ color: TM2, borderColor: BD, background: '#fff' }}>
                    Book M365 Audit
                  </Link>
                </div>
              </FadeUp>

              <FadeUp delay={0.4}>
                <div className="flex flex-wrap gap-6 mt-4">
                  {['Expert Setup', '24/7 Security', 'Onshore Support'].map(t => (
                    <div key={t} className="flex items-center gap-2">
                      <Check size={16} className="text-green-500" />
                      <span className="text-[13px] font-bold text-gray-500 uppercase tracking-wider">{t}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.3} className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/5 aspect-[4/3]">
                <img 
                  src="/images/m365-managed-dashboard.png" 
                  alt="M365 Managed Dashboard" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 flex flex-col gap-1">
                   <div className="flex items-center gap-2">
                     <ShieldCheck size={16} className="text-[#5D00D6]" />
                     <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Security Status</span>
                   </div>
                   <span className="text-[18px] font-bold text-[#0c1024]">Fully Compliant</span>
                </div>
              </div>
              
              {/* Floating Decorative Card */}
              <div className="absolute -bottom-10 -right-10 hidden md:flex p-6 bg-white rounded-3xl shadow-2xl border border-gray-100 flex-col gap-3 max-w-[240px] animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                   <Users size={20} className="text-[#5D00D6]" />
                </div>
                <div className="text-[14px] font-bold text-[#0c1024]">24/7 Monitoring</div>
                <p className="text-[12px] text-gray-500">Your M365 environment is actively observed for threats and downtime.</p>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ══ SECTION 2: SOUND FAMILIAR? ═══════════════════════════════ */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50" />
        
        <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-[#5D00D6]/5 px-4 py-2 rounded-full mb-4">
                <span className="c9-eyebrow !text-[#5D00D6] !text-[10px]">SOUND FAMILIAR?</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="c9-section-heading !text-[32px] md:!text-[46px]">
                Why businesses struggle with <br />
                <span className="text-[#5D00D6]">self-managed Microsoft 365.</span>
              </h2>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Shield,
                title: 'Poor Security Posture', 
                body: 'Default M365 leaves you exposed. No MFA enforcement, no Conditional Access, basic antivirus only. One compromised account = entire tenant at risk.' 
              },
              { 
                icon: Clock,
                title: 'No Lifecycle Management', 
                body: 'New hire? Someone manually creates accounts, assigns licenses, configures devices. Leaver? Hope someone remembered to offboard them properly.' 
              },
              { 
                icon: Zap,
                title: 'Wasted Licensing', 
                body: "You're paying for E3 licenses but only using 30% of features. Or you're on E1 when you need E3 security features. No one's optimizing." 
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
               C9 manages every layer of your M365 environment <ArrowRight size={18} />
             </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ SECTION 3: WHAT C9 ACTUALLY MANAGES ══════════════════════ */}
      <section id="managed-scope" className="py-10" style={{ background: '#F8FAFF' }}>
        <div className="container mx-auto max-w-[1240px] px-6">
          <FadeUp className="text-center max-w-[900px] mx-auto mb-8">
            <Eyebrow>Full Managed Scope</Eyebrow>
            <h2 className="c9-section-heading mb-4">The full scope of C9 M365 management</h2>
            <p className="text-[17px] text-gray-500 font-medium max-w-2xl mx-auto">
              We take total accountability for your Microsoft environment. From identity and security to devices and data, we ensure every layer is optimized and secure.
            </p>
          </FadeUp>

          <ManagedScopeUI />
        </div>
      </section>


      {/* ══ SECTION 4: M365 PLANS WE MANAGE ══════════════════════════ */}
      <section className="py-10" style={{ background: '#fff' }}>
        <div className="container mx-auto max-w-[1240px] px-6">
          <FadeUp className="text-center max-w-[700px] mx-auto mb-12">
            <Eyebrow>Managed Plans</Eyebrow>
            <h2 className="c9-section-heading mb-4">We manage all Microsoft 365 plans</h2>
            <p className="text-[18px] text-gray-500 font-medium">
              Whether you need basic productivity or enterprise-grade security, we provide the licenses and the expert management to back them up.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                title: 'Business Basic/Standard', 
                best: 'Small businesses (5-50 users)',
                included: 'Email, Teams, SharePoint',
                mgmt: 'Tenant config, security baseline, user support',
                price: 'From $15/user/month (license + management)',
                color: '#5D00D6'
              },
              { 
                title: 'Business Premium', 
                best: 'Growing businesses (50-200 users)',
                included: 'Everything in Standard + Defender, Intune',
                mgmt: 'Full security stack, device management, compliance',
                price: 'From $30/user/month (license + management)',
                color: '#7B1FE8',
                highlight: true
              },
              { 
                title: 'Enterprise E3/E5', 
                best: 'Enterprise (200+ users, multi-site)',
                included: 'Advanced security, compliance, analytics',
                mgmt: 'Full governance, DLP, Conditional Access, vCIO',
                price: 'Custom enterprise pricing (volume discounts)',
                color: '#0c1024'
              }
            ].map((plan, i) => (
              <ScaleIn key={plan.title} delay={i * 0.1}>
                <div className={`rounded-[32px] p-10 border flex flex-col h-full transition-all duration-300 ${plan.highlight ? 'shadow-2xl shadow-purple-500/10 -translate-y-2' : 'hover:-translate-y-1'}`} style={{ borderColor: plan.highlight ? P : BD, background: '#fff' }}>
                  <h3 className="text-[22px] font-bold text-[#0c1024] mb-4">{plan.title}</h3>
                  <div className="flex flex-col gap-6 flex-grow">
                     <div>
                       <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Best For</div>
                       <div className="text-[16px] font-bold text-[#0c1024]">{plan.best}</div>
                     </div>
                     <div>
                       <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">What&apos;s Included</div>
                       <div className="text-[15px] font-medium text-gray-600 leading-relaxed">{plan.included}</div>
                     </div>
                     <div>
                       <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">C9 Management</div>
                       <div className="text-[15px] font-medium text-gray-600 leading-relaxed">{plan.mgmt}</div>
                     </div>
                  </div>
                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Investment</div>
                    <div className="text-[16px] font-bold text-[#5D00D6]">{plan.price}</div>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>

          <FadeUp delay={0.4} className="text-center">
             <div className="text-[14px] font-bold text-gray-400 uppercase tracking-[0.2em] flex items-center justify-center gap-3">
               <div className="h-px w-10 bg-gray-100" />
               All plans include: Australian support, monthly reporting, security monitoring
               <div className="h-px w-10 bg-gray-100" />
             </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ SECTION 5: MIGRATION & ONBOARDING ═══════════════════════ */}
      <section className="py-10" style={{ background: PL }}>
        <div className="container mx-auto max-w-[1240px] px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <div>
              <FadeUp>
                <Eyebrow>The Process</Eyebrow>
                <h2 className="c9-section-heading mb-4">How we migrate your team to managed M365</h2>
                <p className="text-[18px] text-gray-500 font-medium mb-6">
                  Moving platforms is high-stakes. Our phased approach ensures zero data loss and zero downtime for your staff.
                </p>
                <Link href="/resources/m365-migration-guide" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-[16px] transition-all duration-300 hover:shadow-xl" style={{ background: `linear-gradient(135deg, ${P} 0%, #7B1FE8 100%)` }}>
                  Download M365 Migration Guide <ArrowRight size={17} />
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
      <section className="py-10 bg-white">
        <div className="container mx-auto max-w-[1240px] px-6">
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
                 <div className="text-[13px] font-medium text-white/30">Partner — Management Consulting Firm</div>
               </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.3} className="text-center">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-[11px] font-bold text-[#5D00D6] uppercase tracking-widest hover:underline">
              Read More Case Studies <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ══ BENTO FEATURE SECTION ═══════════════════════════════════ */}
      <section className="py-10" style={{ background: PL }}>
        <div className="container mx-auto max-w-[1240px] px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            <FadeUp>
              <div className="flex flex-col gap-8">
                <Eyebrow>Why C9 Managed M365</Eyebrow>
                <h2 className="c9-section-heading">More than just software. It&apos;s peace of mind.</h2>
                
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
                        <p className="text-[15px] text-gray-600 font-medium">{f.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 mt-4 text-[#5D00D6] font-bold hover:underline">
                  Talk to an M365 Specialist <ArrowRight size={18} />
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
      <section className="py-10 bg-white border-t border-gray-50">
        <div className="container mx-auto max-w-[1000px] px-6">
          <FadeUp className="bg-gray-50 rounded-[48px] p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]" style={{ background: 'radial-gradient(ellipse, rgba(93,0,214,0.05) 0%, transparent 70%)' }} />
            
            <div className="relative z-10">
              <Eyebrow>Take the first step</Eyebrow>
              <h2 className="c9-section-heading !text-[32px] md:!text-[46px] !leading-[1.1] !tracking-[-0.04em] mb-6 text-[#0c1024]">
                Stop managing M365 yourself.<br />Let Australian experts handle it.
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-white font-bold text-[16px] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" style={{ background: `linear-gradient(135deg, ${P} 0%, #7B1FE8 100%)`, boxShadow: '0 4px 24px rgba(93,0,214,0.35)' }}>
                  Request M365 Audit
                </Link>
                <Link href="/resources/pricing-guide" className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full font-bold text-[16px] border transition-all duration-300 hover:border-[#5D00D6] hover:text-[#5D00D6]" style={{ color: TM2, borderColor: BD, background: '#fff' }}>
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
