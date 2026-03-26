'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Stethoscope, ShoppingBag, HardHat, ArrowRight, X, 
  CheckCircle2, PhoneCall, Scale, GraduationCap, Briefcase,
  Sparkles, MessageSquare, Building2, Send, Bot, User
} from 'lucide-react';

const fontStyle = { fontFamily: '"Proxima Nova", sans-serif' };

/* ─── INDUSTRIES DATA ──────────────────────────────────────── */
const INDUSTRIES = [
  { 
    id: 'medical', icon: Stethoscope, label: 'Medical & Healthcare', tag: 'Healthcare',
    color: 'bg-blue-50 text-blue-600 border-blue-100', iconBg: 'bg-blue-50 text-blue-500',
    recommend: [
      { name: 'Enterprise Security', href: '/modern-workplace#security' },
      { name: 'Modern Workplace', href: '/modern-workplace' }
    ],
    benefit: 'HIPAA/Privacy Act-compliant IT with zero-touch device setup and 24/7 monitoring.'
  },
  { 
    id: 'legal', icon: Scale, label: 'Legal & Finance', tag: 'Professional',
    color: 'bg-amber-50 text-amber-700 border-amber-100', iconBg: 'bg-amber-50 text-amber-600',
    recommend: [
      { name: 'SaaS Backup', href: '/modern-workplace#infra' },
      { name: 'Managed IT', href: '/managed-it' }
    ],
    benefit: 'Unlimited cloud backup and rapid engineering support for uninterrupted billing.'
  },
  { 
    id: 'retail', icon: ShoppingBag, label: 'Retail / F&B', tag: 'Retail',
    color: 'bg-pink-50 text-pink-700 border-pink-100', iconBg: 'bg-pink-50 text-pink-500',
    recommend: [
      { name: 'CCTV & People Count', href: '/modern-workplace#other-solutions' },
      { name: 'Fibre NBN', href: '/telco' }
    ],
    benefit: 'Real-time occupancy analytics and guest WiFi that actually works.'
  },
  { 
    id: 'education', icon: GraduationCap, label: 'Education', tag: 'Education',
    color: 'bg-green-50 text-green-700 border-green-100', iconBg: 'bg-green-50 text-green-500',
    recommend: [
      { name: 'Device Management', href: '/modern-workplace#infra' },
      { name: 'Visitor Management', href: '/modern-workplace#other-solutions' }
    ],
    benefit: 'Zero-touch enrolment for 1,000+ student devices across campuses.'
  },
  { 
    id: 'professional', icon: Briefcase, label: 'Professional Services', tag: 'Services',
    color: 'bg-purple-50 text-purple-700 border-purple-100', iconBg: 'bg-purple-50 text-[#5D00D6]',
    recommend: [
      { name: 'Cloud Phone System', href: '/telco' },
      { name: 'Microsoft 365', href: '/modern-workplace' }
    ],
    benefit: 'Cloud-first workspace — Microsoft 365, Teams Phone, and secure remote access.'
  },
  { 
    id: 'construction', icon: HardHat, label: 'Construction', tag: 'Construction',
    color: 'bg-orange-50 text-orange-700 border-orange-100', iconBg: 'bg-orange-50 text-orange-500',
    recommend: [
      { name: '4G Failover', href: '/telco#nbn' },
      { name: 'Mobile Data', href: '/telco#mobile' }
    ],
    benefit: 'Stay connected on-site with 4G failover and pooled mobile data plans.'
  }
];

/* ─── SMART RESPONSE ENGINE ────────────────────────────────── */
type ChatResponse = { text: string; links?: { label: string; href: string }[] };

function getResponse(query: string): ChatResponse {
  const q = query.toLowerCase();

  if (q.match(/hello|hi|hey|g'day|good/)) {
    return { text: "G'day! I'm the C9 Advisor — happy to help you find the right IT or telco solution for your business. You can ask me about Managed IT, internet, voice, Microsoft 365, cybersecurity, mobile, or which solution suits your industry." };
  }
  if (q.match(/managed.?it|helpdesk|it support|outsource.?it|it partner/)) {
    return { 
      text: "C9's Managed IT service gives your business a fully outsourced IT team — including an Australian helpdesk with defined SLAs (P1 critical: < 1hr response), a named account manager, proactive monitoring, and monthly performance reports. Most businesses switch to us because they're tired of explaining their setup on every support call. We document your environment from day one.", 
      links: [{ label: 'Explore Managed IT', href: '/managed-it' }, { label: 'Helpdesk SLAs', href: '/managed-it/helpdesk-support#sla-section' }]
    };
  }
  if (q.match(/helpdesk|sla|response time|ticket|support call/)) {
    return { 
      text: "C9's helpdesk operates with defined SLA tiers: P1 Critical (business-wide outage) — response < 1 hour, resolution < 4 hours. P2 High — < 4hr response. P3 Medium — < 8hr response. P4 Low — next business day. Every ticket is documented and reviewed in your monthly report. The team is fully Australian-based — no offshore routing.", 
      links: [{ label: 'View Full SLA Table', href: '/managed-it/helpdesk-support#sla-section' }]
    };
  }
  if (q.match(/internet|nbn|fibre|broadband|connectivity|bandwidth/)) {
    return { 
      text: "C9 provides business-grade NBN®, Enterprise Ethernet, and C9 Fibre (up to 10,000 Mbps) — all backed by a 99.95% uptime SLA and 24/7 engineering support. Unlike residential ISPs, every C9 connection has dedicated local support and proactive fault monitoring. No shared traffic.",
      links: [{ label: 'Business Internet', href: '/telco' }]
    };
  }
  if (q.match(/voice|phone system|pbx|phone call|cloud phone|c9x|sip trunk/)) {
    return { 
      text: "C9's voice solution is the C9X Cloud Phone System — a fully managed cloud PBX with auto-attendants, call recording, and Microsoft Teams integration. We handle provisioning, number porting, and ongoing management. SIP Trunking is also available if you want to keep existing hardware but connect to a better network.",
      links: [{ label: 'Business Voice', href: '/telco' }]
    };
  }
  if (q.match(/microsoft.?365|m365|office.?365|teams|sharepoint|outlook|onedrive/)) {
    return { 
      text: "C9 manages your Microsoft 365 environment end-to-end — user provisioning, licence management, Teams calling, SharePoint, OneDrive, and Entra ID. We also handle Microsoft Teams Phone integration so your staff can make and receive business calls directly from Teams. Nonprofit licensing is available for eligible organisations.",
      links: [{ label: 'Modern Workplace', href: '/modern-workplace' }]
    };
  }
  if (q.match(/security|cyber|threat|ransomware|breach|firewall|antivirus|c9.?defense|defence/)) {
    return { 
      text: "C9 Defense is our enterprise security layer — continuous threat monitoring, incident response, endpoint detection, and firewall management. For businesses facing active threats or needing compliance (ISO 27001, Essential 8), C9 Defense provides the 24/7 protection that helpdesk alone cannot. It sits on top of your existing infrastructure.",
      links: [{ label: 'C9 Defense', href: '/c9-defense' }]
    };
  }
  if (q.match(/mobile|sim|4g|5g|fleet|phone plan|data plan/)) {
    return { 
      text: "C9 manages your entire mobile fleet — SIM provisioning, high-data business plans, device procurement, and a single consolidated bill. All plans run on Australia's leading networks. You get centralised visibility over every device and SIM through your C9 account. No lock-in contracts.",
      links: [{ label: 'Business Mobile', href: '/telco' }]
    };
  }
  if (q.match(/network|sd.?wan|mpls|private.?ip|wan|lan|wifi|networking/)) {
    return { 
      text: "C9 designs, deploys, and manages your network infrastructure — from SD-WAN for multi-site performance optimisation, to Private IP/MPLS for secure low-latency links between locations. All solutions are engineered and supported in-house by our local team, not contracted out.",
      links: [{ label: 'Business Networking', href: '/telco' }]
    };
  }
  if (q.match(/voice.?ai|ai.?receptionist|ivr|ai.?call|call.?analytic/)) {
    return { 
      text: "C9 Voice AI sits on top of your phone system and handles inbound calls 24/7 — AI receptionist, intelligent IVR (natural language, not press-1 menus), and call analytics showing volume, sentiment, and resolution rates. It reduces missed calls and frees your team from routine enquiries.",
      links: [{ label: 'Voice AI Solutions', href: '/telco' }]
    };
  }
  if (q.match(/healthcare|medical|clinic|hospital|hipaa|health|gp|aged.?care/)) {
    return { 
      text: "For healthcare providers, C9 specialises in HIPAA-aligned and Australian Privacy Act-compliant IT — secure patient data environments, 24/7 monitoring, zero-touch device setup for clinical staff, and rapid helpdesk response so your team focuses on care, not IT tickets. Uptime SLA: 99.9%.",
      links: [{ label: 'Healthcare IT', href: '/industries/healthcare' }]
    };
  }
  if (q.match(/legal|law|lawyer|barrister|solicitor|legal.?firm|law.?firm/)) {
    return { 
      text: "C9 works with legal firms who need data sovereignty, document security, and zero downtime during billable hours. We provide SaaS backup, cloud infrastructure, Managed IT with rapid helpdesk, and Microsoft 365 management — all with Australian data residency guaranteed.",
      links: [{ label: 'Professional Services IT', href: '/industries/professional-services' }]
    };
  }
  if (q.match(/retail|store|eftpos|pos|shop|f&b|restaurant|hospitality/)) {
    return { 
      text: "For retail and F&B, C9 ensures EFTPOS-ready connectivity, multi-site networking, CCTV with people counting analytics, and guest WiFi. Our average fault response time for retail clients is 15 minutes — because every minute of downtime costs you a sale.",
      links: [{ label: 'Retail IT', href: '/industries/retail' }]
    };
  }
  if (q.match(/nonprofit|non.?profit|ngo|charity|not.?for.?profit/)) {
    return { 
      text: "C9 offers tailored IT packages for non-profits — including Microsoft nonprofit licensing, NBN connectivity, and managed IT support. We help stretch every dollar so more of your budget goes to the mission, not infrastructure. Zero setup fees for eligible organisations.",
      links: [{ label: 'Non-Profit IT', href: '/industries/non-profit' }]
    };
  }
  if (q.match(/education|school|university|campus|student|tablet|device/)) {
    return { 
      text: "C9 supports schools and universities with zero-touch device enrolment for 1,000+ student tablets, campus-wide networking, visitor management systems, and Managed IT for admin and teaching staff. We understand procurement cycles and budget constraints in education.",
      links: [{ label: 'Education IT', href: '/industries/education' }]
    };
  }
  if (q.match(/price|cost|pricing|how much|quote|proposal|affordable|budget/)) {
    return { 
      text: "C9's Managed IT and telco solutions are scoped to your business size and requirements — there's no one-size-fits-all pricing. Most clients receive a scoped proposal within 2 business days. For a quick ballpark, our helpdesk-only engagements typically start from a per-seat monthly fee, while full Managed IT includes monitoring, helpdesk, and an account manager.",
      links: [{ label: 'Get a Proposal', href: '/contact' }]
    };
  }
  if (q.match(/contact|call|phone|speak|talk|consult|meeting|demo/)) {
    return { 
      text: "The best way to talk to us is via our free consultation — a quick call with a C9 engineer who will understand your environment before suggesting anything. You can also call us directly on 1800 000 299 during business hours. We respond to all enquiries within 1 business day.",
      links: [{ label: 'Book Free Consultation', href: '/contact' }, { label: 'Industries', href: '/industries' }]
    };
  }
  if (q.match(/backup|disaster.?recovery|dr|data.?loss|restore|cloud.?backup/)) {
    return { 
      text: "C9 provides SaaS Backup for Microsoft 365 — protecting your emails, SharePoint, Teams, and OneDrive data with daily automated backups and rapid restoration. For infrastructure, C9 designs disaster recovery strategies with defined RTOs (Recovery Time Objectives) based on your business criticality.",
      links: [{ label: 'Managed IT', href: '/managed-it' }]
    };
  }
  if (q.match(/onboard|setup|new starter|new employee|provisioning|offboard/)) {
    return { 
      text: "C9 handles full employee onboarding and offboarding — device provisioning, account creation, Microsoft 365 licence assignment, and access revocation for leavers. New starters are set up and ready on day one. Departing staff are offboarded immediately with all access revoked. This is included in C9 Managed IT.",
      links: [{ label: 'Helpdesk Services', href: '/managed-it/helpdesk-support' }]
    };
  }
  if (q.match(/about|who.?are|c9|company|c9 communications|australian/)) {
    return { 
      text: "C9 Communications is an Australian telco and managed IT provider — we handle voice, internet, networking, mobile, Microsoft 365, cloud, and cybersecurity under one roof. Every solution is designed, deployed, and supported by our local engineering team. We've completed 500+ office relocations with zero downtime reported.",
      links: [{ label: 'Our Industries', href: '/industries' }]
    };
  }
  // Default fallback
  return { 
    text: "Great question! I'm not sure I have a specific answer for that, but I can help you with Managed IT, helpdesk support, NBN and fibre internet, voice and phone systems, Microsoft 365, cybersecurity, mobile fleet management, or industry-specific IT solutions. What would you like to know more about?",
    links: [{ label: 'All Services', href: '/managed-it' }, { label: 'Contact Us', href: '/contact' }]
  };
}

/* ─── CHAT MESSAGE TYPE ─────────────────────────────────────── */
type Message = { role: 'user' | 'ai'; text: string; links?: { label: string; href: string }[]; id: number };

/* ─── TYPING ANIMATION COMPONENT ───────────────────────────── */
const TypingBubble = ({ text, links, onDone }: { text: string; links?: { label: string; href: string }[]; onDone: () => void }) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    idx.current = 0;
    setDisplayed('');
    setDone(false);
    // Faster typing speed: 18ms per character
    const interval = setInterval(() => {
      if (idx.current < text.length) {
        setDisplayed(text.slice(0, idx.current + 1));
        idx.current++;
      } else {
        clearInterval(interval);
        setDone(true);
        onDone();
      }
    }, 18);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div>
      <p className="text-[13px] leading-relaxed text-[#0c1024]" style={fontStyle}>
        {displayed}
        {!done && <span className="inline-block w-[2px] h-[14px] bg-[#5D00D6] ml-0.5 animate-pulse align-middle" />}
      </p>
      {done && links && links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#5D00D6]/5 border border-[#5D00D6]/20 rounded-full text-[11px] font-bold text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-all" style={fontStyle}>
              {l.label} <ArrowRight size={10} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── SUGGESTED QUERIES ─────────────────────────────────────── */
const SUGGESTIONS = [
  "What is Managed IT?",
  "How fast is C9 internet?",
  "Do you support healthcare?",
  "What are your SLAs?",
  "Tell me about Microsoft 365",
  "How does C9 Voice AI work?",
];

/* ─── MAIN COMPONENT ────────────────────────────────────────── */
export const BusinessAdvisor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'industry' | 'chat'>('industry');
  const [selected, setSelected] = useState<typeof INDUSTRIES[0] | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "G'day! I'm the C9 Advisor. Ask me anything about our IT, telco, or industry solutions — or pick your industry above.", id: 0 }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingDone, setTypingDone] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const msgId = useRef(1);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text?: string) => {
    const msg = (text || input).trim();
    if (!msg || isTyping) return;
    setInput('');
    const userMsg: Message = { role: 'user', text: msg, id: msgId.current++ };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);
    setTypingDone(false);
    setTimeout(() => {
      const response = getResponse(msg);
      const aiMsg: Message = { role: 'ai', text: response.text, links: response.links, id: msgId.current++ };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-full px-4 pointer-events-none flex flex-col items-center">
      <div className="pointer-events-auto flex flex-col items-center w-full max-w-2xl">
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 w-full bg-white rounded-[24px] shadow-[0_24px_80px_rgba(12,16,36,0.14)] border border-gray-100 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-50">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#5D00D6] flex items-center justify-center shrink-0">
                    <Sparkles size={13} className="text-white" />
                  </div>
                  <span className="text-[15px] font-bold text-[#0c1024] tracking-tight" style={fontStyle}>C9 Advisor</span>
                  <span className="hidden sm:inline text-[12px] text-gray-400" style={fontStyle}>— powered by C9 content</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Tab switcher */}
                  <div className="flex bg-gray-50 rounded-full p-0.5 gap-0.5">
                    <button
                      onClick={() => setActiveTab('industry')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold transition-all ${activeTab === 'industry' ? 'bg-white text-[#5D00D6] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                      style={fontStyle}
                    >
                      <Building2 size={12} /> Industry
                    </button>
                    <button
                      onClick={() => { setActiveTab('chat'); setTimeout(() => inputRef.current?.focus(), 100); }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold transition-all ${activeTab === 'chat' ? 'bg-white text-[#5D00D6] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                      style={fontStyle}
                    >
                      <MessageSquare size={12} /> Ask AI
                    </button>
                  </div>
                  <button 
                    onClick={() => { setIsOpen(false); setSelected(null); }}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors ml-1"
                  >
                    <X size={14} className="text-gray-400" />
                  </button>
                </div>
              </div>

              {/* ── INDUSTRY TAB ── */}
              {activeTab === 'industry' && (
                <>
                  {!selected ? (
                    <div className="p-5">
                      <p className="text-[12px] font-bold uppercase tracking-widest text-gray-400 mb-4" style={fontStyle}>Select your industry</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {INDUSTRIES.map((ind) => {
                          const Icon = ind.icon;
                          return (
                            <motion.button
                              key={ind.id}
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.97 }}
                              onClick={() => setSelected(ind)}
                              className="flex items-center gap-3 p-3.5 rounded-2xl border border-gray-100 hover:border-[#5D00D6]/30 hover:bg-[#5D00D6]/[0.02] transition-all text-left group"
                            >
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${ind.iconBg} transition-all group-hover:scale-105`}>
                                <Icon size={18} strokeWidth={1.8} />
                              </div>
                              <div>
                                <div className="text-[13px] font-bold text-[#0c1024] leading-tight" style={fontStyle}>{ind.label}</div>
                                <div className={`inline-flex items-center mt-1 px-1.5 py-0.5 rounded-md text-[10px] font-bold border ${ind.color}`} style={fontStyle}>{ind.tag}</div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid sm:grid-cols-[1fr_200px]"
                    >
                      <div className="p-5">
                        <button onClick={() => setSelected(null)} className="flex items-center gap-1 text-[11px] font-bold text-[#5D00D6]/60 hover:text-[#5D00D6] transition-colors mb-4 uppercase tracking-widest" style={fontStyle}>
                          <ArrowRight size={10} className="rotate-180" /> Back
                        </button>
                        <h4 className="text-[18px] font-bold text-[#0c1024] mb-1 tracking-tight" style={fontStyle}>
                          Best for <span className="text-[#5D00D6]">{selected.label}</span>
                        </h4>
                        <p className="text-[13px] text-gray-400 leading-relaxed mb-4" style={fontStyle}>{selected.benefit}</p>
                        <div className="flex flex-col gap-2">
                          {selected.recommend.map(rec => (
                            <Link key={rec.name} href={rec.href} onClick={() => setIsOpen(false)}
                              className="group flex items-center justify-between px-4 py-3 rounded-xl border border-gray-100 hover:border-[#5D00D6]/30 hover:bg-[#5D00D6]/[0.02] transition-all">
                              <div className="flex items-center gap-2.5">
                                <CheckCircle2 size={14} className="text-[#5D00D6]" />
                                <span className="text-[14px] font-semibold text-[#0c1024]" style={fontStyle}>{rec.name}</span>
                              </div>
                              <ArrowRight size={13} className="text-gray-300 group-hover:text-[#5D00D6] group-hover:translate-x-0.5 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="bg-[#0c1024] p-5 flex flex-col justify-between">
                        <div>
                          <div className="w-9 h-9 rounded-xl bg-[#5D00D6] flex items-center justify-center mb-4">
                            <PhoneCall size={16} className="text-white" />
                          </div>
                          <h5 className="text-[14px] font-bold text-white mb-1 leading-snug" style={fontStyle}>Talk to an Engineer</h5>
                          <p className="text-[12px] text-gray-400 leading-relaxed" style={fontStyle}>15-min free call tailored to {selected.label}.</p>
                        </div>
                        <Link href="/contact" className="mt-4 block w-full py-2.5 text-center rounded-xl bg-[#5D00D6] text-white font-bold text-[13px] hover:bg-[#4c00b0] transition-colors" style={fontStyle}>
                          Book Free Session →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </>
              )}

              {/* ── CHAT TAB ── */}
              {activeTab === 'chat' && (
                <div className="flex flex-col" style={{ height: '380px' }}>
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4 scroll-smooth">
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.role === 'ai' && (
                          <div className="w-7 h-7 rounded-full bg-[#5D00D6] flex items-center justify-center shrink-0 mt-0.5">
                            <Bot size={14} className="text-white" />
                          </div>
                        )}
                        <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${msg.role === 'user' 
                          ? 'bg-[#5D00D6] text-white rounded-br-sm' 
                          : 'bg-gray-50 border border-gray-100 rounded-bl-sm'}`}
                        >
                          {msg.role === 'user' ? (
                            <p className="text-[13px] text-white leading-relaxed" style={fontStyle}>{msg.text}</p>
                          ) : (
                            // Only animate the last AI message
                            msg.id === messages.filter(m => m.role === 'ai').slice(-1)[0]?.id && !typingDone ? (
                              <TypingBubble text={msg.text} links={msg.links} onDone={() => setTypingDone(true)} />
                            ) : (
                              <div>
                                <p className="text-[13px] leading-relaxed text-[#0c1024]" style={fontStyle}>{msg.text}</p>
                                {msg.links && (
                                  <div className="flex flex-wrap gap-2 mt-3">
                                    {msg.links.map(l => (
                                      <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#5D00D6]/5 border border-[#5D00D6]/20 rounded-full text-[11px] font-bold text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-all" style={fontStyle}>
                                        {l.label} <ArrowRight size={10} />
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )
                          )}
                        </div>
                        {msg.role === 'user' && (
                          <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                            <User size={14} className="text-gray-500" />
                          </div>
                        )}
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex gap-2.5 justify-start">
                        <div className="w-7 h-7 rounded-full bg-[#5D00D6] flex items-center justify-center shrink-0">
                          <Bot size={14} className="text-white" />
                        </div>
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3">
                          <div className="flex gap-1 items-center h-[20px]">
                            {[0, 1, 2].map(i => (
                              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]/40 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Suggestions */}
                  {messages.length <= 1 && (
                    <div className="px-5 pb-2 flex flex-wrap gap-1.5">
                      {SUGGESTIONS.map(s => (
                        <button key={s} onClick={() => sendMessage(s)}
                          className="px-3 py-1.5 bg-[#5D00D6]/5 border border-[#5D00D6]/15 rounded-full text-[11px] font-semibold text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-all"
                          style={fontStyle}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Input */}
                  <div className="border-t border-gray-50 px-4 py-3 flex items-center gap-2">
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
                      placeholder="Ask about Managed IT, internet, voice, security..."
                      className="flex-1 text-[13px] text-[#0c1024] placeholder:text-gray-300 outline-none bg-transparent"
                      style={fontStyle}
                      disabled={isTyping}
                    />
                    <button
                      onClick={() => sendMessage()}
                      disabled={!input.trim() || isTyping}
                      className="w-8 h-8 rounded-full bg-[#5D00D6] flex items-center justify-center disabled:opacity-30 hover:bg-[#4c00b0] transition-colors shrink-0"
                    >
                      <Send size={14} className="text-white" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pill trigger */}
        <>
          <style>{`
            @keyframes glow-pulse {
              0%, 100% { box-shadow: 0 0 0 0 rgba(93,0,214,0.0), 0 8px 30px rgba(12,16,36,0.08); border-color: rgba(93,0,214,0.15); }
              50% { box-shadow: 0 0 0 4px rgba(93,0,214,0.10), 0 8px 30px rgba(93,0,214,0.15); border-color: rgba(93,0,214,0.4); }
            }
            .advisor-pill { animation: glow-pulse 2.8s ease-in-out infinite; }
          `}</style>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.985 }}
            className="advisor-pill flex items-center gap-3 px-5 py-3 bg-white rounded-full border border-[#5D00D6]/20 group"
          >
            <span className="text-[14px] font-semibold text-gray-600 tracking-tight group-hover:text-[#5D00D6] transition-colors whitespace-nowrap" style={fontStyle}>
              What type of business are you building?
            </span>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen ? 'bg-gray-100 text-[#5D00D6] rotate-90' : 'bg-[#5D00D6] text-white group-hover:scale-105'}`}>
              <ArrowRight size={13} className="stroke-[2.5px]" />
            </div>
          </motion.button>
        </>
      </div>
    </div>
  );
};
