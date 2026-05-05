'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Stethoscope, ShoppingBag, HardHat, X, CheckCircle2, PhoneCall, Scale, GraduationCap, Briefcase, Sparkles, MessageSquare, Building2, Send, Bot, User, Heart } from 'lucide-react';

/* ─── INDUSTRIES DATA ──────────────────────────────────────── */
const INDUSTRIES = [
  { 
    id: 'medical', icon: Stethoscope, label: 'Medical & Healthcare', tag: 'Healthcare',
    color: 'bg-blue-50 text-blue-600 border-blue-100', iconBg: 'bg-blue-50 text-blue-500',
    recommend: [
      { name: 'C9 Defense Security', href: 'https://c9defense.com.au/' },
      { name: 'Managed IT Support', href: '/managed-it/helpdesk-support' }
    ],
    benefit: 'HIPAA/Privacy Act-compliant IT with zero-touch device setup and 24/7 monitoring.'
  },
  { 
    id: 'legal', icon: Scale, label: 'Legal & Finance', tag: 'Professional',
    color: 'bg-amber-50 text-amber-700 border-amber-100', iconBg: 'bg-amber-50 text-amber-600',
    recommend: [
      { name: 'SaaS Backup & DR', href: 'https://c9defense.com.au/' },
      { name: 'Legal IT Strategy', href: '/managed-it/strategy-consulting' }
    ],
    benefit: 'Unlimited cloud backup and rapid engineering support for uninterrupted billing.'
  },
  { 
    id: 'retail', icon: ShoppingBag, label: 'Retail / F&B', tag: 'Retail',
    color: 'bg-pink-50 text-pink-700 border-pink-100', iconBg: 'bg-pink-50 text-pink-500',
    recommend: [
      { name: 'CCTV & People Count', href: '/modern-workplace#other-solutions' },
      { name: 'Small Business nbn™', href: '/telco/business-nbn' }
    ],
    benefit: 'Real-time occupancy analytics and guest WiFi that actually works.'
  },
  { 
    id: 'education', icon: GraduationCap, label: 'Education', tag: 'Education',
    color: 'bg-green-50 text-green-700 border-green-100', iconBg: 'bg-green-50 text-green-500',
    recommend: [
      { name: 'Device Management', href: '/modern-workplace#infra' },
      { name: 'Network Solutions', href: '/managed-it/network-solutions' }
    ],
    benefit: 'Zero-touch enrolment for 1,000+ student devices across campuses.'
  },
  { 
    id: 'real-estate', icon: Building2, label: 'Real Estate', tag: 'Property',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-100', iconBg: 'bg-indigo-50 text-indigo-600',
    recommend: [
      { name: 'Cloud Phone System', href: '/telco' },
      { name: 'IT Outsourcing', href: '/managed-it/outsourcing' }
    ],
    benefit: 'Streamlined communication for agents and fast, secure internet for sales offices.'
  },
  { 
    id: 'non-profit', icon: Heart, label: 'Non-profit', tag: 'NFP',
    color: 'bg-red-50 text-red-700 border-red-100', iconBg: 'bg-red-50 text-red-500',
    recommend: [
      { name: 'Microsoft 365 NFP', href: '/modern-workplace' },
      { name: 'Fast Fibre Internet', href: '/telco/fast-fibre' }
    ],
    benefit: 'Maximise your impact with nonprofit licensing and zero-setup fee IT infrastructure.'
  },
  { 
    id: 'professional', icon: Briefcase, label: 'Professional Services', tag: 'Services',
    color: 'bg-purple-50 text-purple-700 border-purple-100', iconBg: 'bg-purple-50 text-[#5D00D6]',
    recommend: [
      { name: 'Cloud Phone System', href: '/telco' },
      { name: 'Modern Workplace', href: '/modern-workplace' }
    ],
    benefit: 'Cloud-first workspace — Microsoft 365, Teams Phone, and secure remote access.'
  },
  { 
    id: 'construction', icon: HardHat, label: 'Construction', tag: 'Construction',
    color: 'bg-orange-50 text-orange-700 border-orange-100', iconBg: 'bg-orange-50 text-orange-500',
    recommend: [
      { name: 'Mobile Data Plans', href: '/telco/mobile-plans' },
      { name: 'Managed IT Support', href: '/managed-it/helpdesk-support' }
    ],
    benefit: 'Stay connected on-site with 4G failover and pooled mobile data plans.'
  }
];

/* ─── SMART RESPONSE ENGINE ────────────────────────────────── */
type ChatResponse = { text: string; links?: { label: string; href: string }[] };

function getResponse(query: string): ChatResponse {
  const q = query.toLowerCase();

  if (q.match(/hello|hi|hey|g'day|good/)) {
    return { text: "G'day! I'm the C9 Advisor — happy to help you find the measurable outcomes for your business through IT or telco. You can ask me about Managed IT, internet, voice, Microsoft 365, cybersecurity, mobile, or which solution suits your industry." };
  }
  if (q.match(/nbn|business.?nbn/)) {
    return { 
      text: "C9 provides reliable Small Business nbn™® plans built around uptime, not price. Every connection is backed by dedicated local support and no shared residential traffic — perfect for small to medium businesses needing stability.", 
      links: [{ label: 'Small Business nbn™', href: '/telco/business-nbn' }]
    };
  }
  if (q.match(/fast.?fibre|c9.?fibre|fibre.?internet/)) {
    return { 
      text: "C9 Fibre is our flagship internet solution — offering asymmetrical and symmetrical speeds up to 10,000 Mbps with a 99.95% uptime guarantee and 24/7 engineering support. It's built for performance-critical businesses.", 
      links: [{ label: 'Fast Fibre', href: '/telco/fast-fibre' }]
    };
  }
  if (q.match(/enterprise.?ethernet|symmetrical/)) {
    return { 
      text: "nbn® Enterprise Ethernet provides priority-grade connectivity and symmetrical speeds for offices that can't afford to wait on uploads. It's highly reliable and scalable as your business grows.", 
      links: [{ label: 'Enterprise Ethernet', href: '/telco/enterprise-ethernet' }]
    };
  }
  if (q.match(/managed.?it|it support|it partner/)) {
    return { 
      text: "C9's Managed IT service gives your business a fully outsourced IT team — including an Australian helpdesk with defined SLAs, proactive monitoring, and monthly performance reports. We document your environment from day one so you never have to repeat yourself.", 
      links: [{ label: 'Managed IT', href: '/managed-it' }, { label: 'Helpdesk Support', href: '/managed-it/helpdesk-support' }]
    };
  }
  if (q.match(/outsource.?it|outsourcing|it.?team/)) {
    return { 
      text: "Our IT Outsourcing model gives you the power of a full IT department at a fraction of the cost. We handle everything from vendor management and procurement to strategic planning and daily support.", 
      links: [{ label: 'IT Outsourcing', href: '/managed-it/outsourcing' }]
    };
  }
  if (q.match(/strategy|consulting|roadmap|vcio|it.?planning/)) {
    return { 
      text: "C9 Strategy & Consulting provides your business with a vCIO (Virtual CIO) to build your IT roadmap, manage budgets, and ensure your technology aligns with your commercial goals. We don't just fix things — we help you grow.", 
      links: [{ label: 'Strategy & Consulting', href: '/managed-it/strategy-consulting' }]
    };
  }
  if (q.match(/helpdesk|sla|response time|ticket|support call/)) {
    return { 
      text: "C9's helpdesk operates with defined SLA tiers: P1 Critical — response < 1 hour. P2 High — < 4hr response. Every ticket is documented and reviewed in your monthly report. The team is 100% Australian-based.", 
      links: [{ label: 'Helpdesk Support', href: '/managed-it/helpdesk-support' }]
    };
  }
  if (q.match(/cloud.?services|aws|azure|google.?cloud|hosting/)) {
    return { 
      text: "C9 manages your cloud environment end-to-end — from migration to ongoing optimization. We work with AWS, Azure, and Google Cloud to ensure your data is secure, scalable, and cost-effective.", 
      links: [{ label: 'Cloud Services', href: '/managed-it/cloud-services' }]
    };
  }
  if (q.match(/infrastructure|server|hardware|office.?setup/)) {
    return { 
      text: "C9 manages your entire physical and virtual infrastructure — servers, storage, network hardware, and multi-site connectivity. We specialize in zero-downtime office relocations and infrastructure upgrades.", 
      links: [{ label: 'IT Infrastructure', href: '/managed-it/infrastructure' }]
    };
  }
  if (q.match(/security|cyber|threat|ransomware|breach|c9.?defense|defence/)) {
    return { 
      text: "C9 Defense is our dedicated security solution — 24/7 threat detection, endpoint protection, and managed firewall. We help businesses achieve 'Essential 8' compliance and protect against modern cyber threats.", 
      links: [{ label: 'C9 Defense', href: 'https://c9defense.com.au/' }, { label: 'Security Solutions', href: 'https://c9defense.com.au/' }]
    };
  }
  if (q.match(/backup|disaster.?recovery|dr|data.?loss/)) {
    return { 
      text: "Never lose sleep over data loss again. C9 provides automated SaaS backup for Microsoft 365 and full disaster recovery plans for your critical infrastructure with guaranteed recovery time objectives.", 
      links: [{ label: 'Backup & Recovery', href: 'https://c9defense.com.au/' }]
    };
  }
  if (q.match(/microsoft.?365|m365|teams|sharepoint/)) {
    return { 
      text: "C9 is a Microsoft Solutions Partner. We manage your M365 environment, license lifecycle, and complex Teams Phone integrations so your team can work securely from anywhere.", 
      links: [{ label: 'Modern Workplace', href: '/modern-workplace' }]
    };
  }
  if (q.match(/internet|broadband|connectivity/)) {
    return { 
      text: "We offer more than just nbn. C9 provides Small Business nbn™, Fast Fibre (up to 10Gbps), and Enterprise Ethernet. All connections are carrier-grade with business SLAs.", 
      links: [{ label: 'Telco Solutions', href: '/telco' }]
    };
  }
  if (q.match(/voice|phone system|pbx|c9 voice|c9-phone-system|teams.?calling/)) {
    return { 
      text: "C9 provides reliable business communication with full accountability and support ownership, keeping your teams reachable and your customers connected.", 
      links: [{ label: 'Business Voice', href: '/telco/phone-system' }]
    };
  }
  if (q.match(/voice.?ai|ai.?receptionist/)) {
    return { 
      text: "Reduce missed calls with C9 Voice AI. Our AI Receptionist answers, qualifies, and routes inbound calls 24/7, freeing your staff from routine enquiries.", 
      links: [{ label: 'Voice AI', href: '/telco' }]
    };
  }
  if (q.match(/mobile|sim|phone.plan/)) {
    return { 
      text: "Manage your business mobile fleet with C9. We provide high-data plans, device procurement, and centralized billing for your entire team with no lock-in contracts.", 
      links: [{ label: 'Mobile Plans', href: '/telco/mobile-plans' }]
    };
  }
  if (q.match(/healthcare|medical|hipaa|GP|clinic/)) {
    return { 
      text: "For healthcare, we provide HIPAA-aligned and Privacy Act-compliant IT solutions, including secure patient data storage and zero-touch device enrollment for clinical staff.", 
      links: [{ label: 'Healthcare IT', href: '/industries/healthcare' }]
    };
  }
  if (q.match(/legal|lawyer|solicitor/)) {
    return { 
      text: "We support legal firms with data sovereignty, document security, and rapid response times (SLA) to ensure zero billable downtime.", 
      links: [{ label: 'Professional Services', href: '/industries/professional-services' }]
    };
  }
  if (q.match(/retail|hospitality|F&B|restaurant/)) {
    return { 
      text: "Retail businesses rely on C9 for fail-safe internet connectivty for payments, CCTV with people counting, and managed WiFi that works for staff and guests.", 
      links: [{ label: 'Retail IT', href: '/industries/retail' }]
    };
  }
  if (q.match(/nonprofit|charity|NFP/)) {
    return { 
      text: "We offer discounted Microsoft nonprofit licensing and specific capabilities within IT packages to help NFPs stretch their budget further towards their mission.", 
      links: [{ label: 'Non-profit IT', href: '/industries/non-profit' }]
    };
  }
  if (q.match(/education|school|campus/)) {
    return { 
      text: "Campus-wide WiFi, Chromebook/Tablet management, and secure student data environments — we support schools in scaling their digital learning programs.", 
      links: [{ label: 'Education IT', href: '/industries/education' }]
    };
  }
  if (q.match(/real.estate|property|agent/)) {
    return { 
      text: "Fast office internet, cloud phone systems for agents on-the-go, and secure document storage — we help real estate agencies stay mobile and responsive.", 
      links: [{ label: 'Real Estate IT', href: '/industries/real-estate' }]
    };
  }
  if (q.match(/case.study|case.studies|projects|success.story/)) {
    return { 
      text: "We've helped hundreds of businesses across Australia transform their IT. You can browse our case studies to see how we've solved complex challenges for clients in various industries.", 
      links: [{ label: 'View Case Studies', href: '/about/case-studies' }]
    };
  }
  if (q.match(/faq|help|question/)) {
    return { 
      text: "Have a specific question? Our FAQ section covers common enquiries about Managed IT, telco transitions, and support SLAs.", 
      links: [{ label: 'View FAQ', href: '/support/faq' }]
    };
  }
  if (q.match(/career|job|join|team|about.us/)) {
    return { 
      text: "C9 is a team of passionate Australian engineers and strategists. We're always looking for talent to join our growing team as we simplify IT for businesses.", 
      links: [{ label: 'About Us', href: '/about' }, { label: 'Careers', href: '/about/careers' }]
    };
  }
  if (q.match(/pricing|cost|quote/)) {
    return { 
      text: "Our IT and telco solutions are scoped to your exact requirements. Contact us for a free consultation and we'll provide a transparent proposal within 1-2 business days.", 
      links: [{ label: 'Get a Proposal', href: '/contact' }]
    };
  }

  // Default fallback
  return { 
    text: "Great question! I can help you with Managed IT, Helpdesk, Fast Fibre internet, nbn, Voice AI, Security (C9 Defense), or industry-specific IT solutions. What would you like to know more about?",
    links: [{ label: 'Explore All Services', href: '/managed-it' }, { label: 'Contact Us', href: '/contact' }]
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
      <p className="c9-body !text-[13.5px] !leading-relaxed text-[#0c1024]">
        {displayed}
        {!done && <span className="inline-block w-[2px] h-[14px] bg-[#5D00D6] ml-0.5 animate-pulse align-middle" />}
      </p>
      {done && links && links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#5D00D6]/5 border border-[#5D00D6]/20 rounded-full c9-eyebrow !text-[10px] !text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-all">
              {l.label} 
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
  const pathname = usePathname();
  const def = pathname?.startsWith('/defense');
  const lum = pathname?.startsWith('/lumina');
  
  if (def || lum) return null;

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
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      document.body.classList.add('hide-floating-contact');
    } else {
      document.body.classList.remove('hide-floating-contact');
    }
  }, [messages, isTyping, isOpen]);

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
              className={`mb-4 w-full overflow-hidden shadow-[0_24px_80px_rgba(12,16,36,0.14)] ${lum ? 'bg-[#0d0d0d] border border-[#BF2F70]/20' : def ? 'bg-[#0d0d0d] border border-[#252525]' : 'bg-white rounded-[24px] border border-gray-100'}`}
            >
              {/* Header */}
              <div className={`flex items-center justify-between px-5 py-3.5 border-b ${def ? 'border-[#1a1a1a]' : 'border-gray-50'}`}>
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 flex items-center justify-center shrink-0 ${def ? 'border border-[#303030]' : 'rounded-lg bg-[#5D00D6]'}`}>
                    <Sparkles size={13} className={def ? 'text-[#808080]' : 'text-white'} />
                  </div>
                  <span className={`text-[14px] font-medium tracking-tight ${def ? 'text-white' : 'text-[#0c1024]'}`}>C9 Advisor</span>
                  <span className={`hidden sm:inline text-[11px] ${def ? 'text-[#404040]' : 'text-gray-400'}`}>— powered by C9 content</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`flex p-0.5 gap-0.5 ${def ? 'bg-[#1a1a1a]' : 'bg-gray-50 rounded-full'}`}>
                    <button
                      onClick={() => setActiveTab('industry')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium transition-all ${activeTab === 'industry' ? (def ? 'bg-[#2a2a2a] text-white' : 'bg-white text-[#5D00D6] shadow-sm rounded-full') : (def ? 'text-[#606060] hover:text-[#C0C0C0]' : 'text-gray-400 hover:text-gray-600 rounded-full')}`}
                    >
                      <Building2 size={12} /> Industry
                    </button>
                    <button
                      onClick={() => { setActiveTab('chat'); setTimeout(() => inputRef.current?.focus(), 100); }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium transition-all ${activeTab === 'chat' ? (def ? 'bg-[#2a2a2a] text-white' : 'bg-white text-[#5D00D6] shadow-sm rounded-full') : (def ? 'text-[#606060] hover:text-[#C0C0C0]' : 'text-gray-400 hover:text-gray-600 rounded-full')}`}
                    >
                      <MessageSquare size={12} /> Ask AI
                    </button>
                  </div>
                  <button
                    onClick={() => { setIsOpen(false); setSelected(null); }}
                    className={`w-7 h-7 flex items-center justify-center transition-colors ml-1 ${def ? 'border border-[#303030] text-[#606060] hover:text-white hover:border-[#606060]' : 'rounded-full bg-gray-50 hover:bg-gray-100'}`}
                  >
                    <X size={14} className={def ? '' : 'text-gray-400'} />
                  </button>
                </div>
              </div>

              {/* ── INDUSTRY TAB ── */}
              {activeTab === 'industry' && (
                <>
                  {!selected ? (
                    <div className="p-5">
                      <p className="c9-eyebrow !text-[10px] !text-gray-400 mb-4">Select your industry</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {INDUSTRIES.map((ind) => {
                          const Icon = ind.icon;
                          return (
                            <motion.button
                              key={ind.id}
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.97 }}
                              onClick={() => setSelected(ind)}
                              className="flex items-center gap-3 p-3.5 rounded-2xl border border-gray-100 hover:border-[#5D00D6]/30 hover:bg-[#5D00D6]/[0.02] transition-all text-left"
                            >
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${ind.iconBg} transition-all group-hover:scale-105`}>
                                <Icon size={18} strokeWidth={1.8} />
                              </div>
                              <div>
                                <div className="text-[14px] font-medium text-[#0c1024] leading-tight">{ind.label}</div>
                                <div className={`inline-flex items-center mt-1 px-1.5 py-0.5 rounded-md text-[9px] font-medium border ${ind.color}`}>{ind.tag}</div>
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
                        <button onClick={() => setSelected(null)} className="flex items-center gap-1 c9-eyebrow !text-[#5D00D6]/60 hover:text-[#5D00D6] mb-4">
                           Back
                        </button>
                        <h4 className="c9-card-title !text-[18px] text-[#0c1024] mb-1">
                          Best for <span className="text-[#5D00D6]">{selected.label}</span>
                        </h4>
                        <p className="c9-body !text-[14px] !text-gray-400 mb-4">{selected.benefit}</p>
                        <div className="flex flex-col gap-2">
                          {selected.recommend.map(rec => (
                            <Link key={rec.name} href={rec.href} onClick={() => setIsOpen(false)}
                              className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-100 hover:border-[#5D00D6]/30 hover:bg-[#5D00D6]/[0.02] transition-all">
                              <div className="flex items-center gap-2.5">
                                <CheckCircle2 size={14} className="text-[#5D00D6]" />
                                <span className="text-[14px] font-medium text-[#0c1024]">{rec.name}</span>
                              </div>
                              
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="bg-[#0c1024] p-5 flex flex-col justify-between">
                        <div>
                          <div className="w-9 h-9 rounded-xl bg-[#5D00D6] flex items-center justify-center mb-4">
                            <PhoneCall size={16} className="text-white" />
                          </div>
                          <h5 className="text-[14px] font-medium text-white mb-1 leading-snug">Talk to an Engineer</h5>
                          <p className="text-[12px] text-gray-400 leading-relaxed">15-min free call focused on specific capabilities for {selected.label}.</p>
                        </div>
                        <Link href="/contact" className="mt-4 block w-full py-2.5 text-center rounded-xl bg-[#5D00D6] text-white font-medium text-[14px] hover:bg-[#4c00b0] transition-colors">
                          Book Free Session →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </>
              )}

              {/* ── CHAT TAB ── */}
              {activeTab === 'chat' && (
                <div className="flex flex-col h-[380px] max-h-[60vh]">
                  {/* Messages */}
                  <div className="flex-1 min-h-0 overflow-y-auto px-5 py-4 flex flex-col gap-4 scroll-smooth">
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.role === 'ai' && (
                          <div className="w-7 h-7 rounded-full bg-[#5D00D6] flex items-center justify-center shrink-0 mt-0.5">
                            <Bot size={14} className="text-white" />
                          </div>
                        )}
                        <div className={`max-w-[85%] px-4 py-3 ${
                          msg.role === 'user'
                            ? def ? 'bg-[#252525] text-white' : 'bg-[#5D00D6] text-white rounded-br-sm rounded-2xl'
                            : def ? 'border border-[#252525] bg-[#151515] rounded-bl-sm' : 'bg-gray-50 border border-gray-100 rounded-bl-sm rounded-2xl'
                        }`}
                        >
                          {msg.role === 'user' ? (
                            <p className="c9-body !text-[13.5px] !text-white !leading-relaxed">{msg.text}</p>
                          ) : (
                            // Only animate the last AI message
                            msg.id === messages.filter(m => m.role === 'ai').slice(-1)[0]?.id && !typingDone ? (
                              <TypingBubble text={msg.text} links={msg.links} onDone={() => setTypingDone(true)} />
                            ) : (
                              <div>
                                <p className="c9-body !text-[13.5px] !leading-relaxed text-[#0c1024]">{msg.text}</p>
                                {msg.links && (
                                  <div className="flex flex-wrap gap-2 mt-3">
                                    {msg.links.map(l => (
                                      <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#5D00D6]/5 border border-[#5D00D6]/20 rounded-full c9-eyebrow !text-[10px] !text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-all">
                                        {l.label} 
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
                          className="px-3 py-1.5 bg-[#5D00D6]/5 border border-[#5D00D6]/15 rounded-full c9-eyebrow !text-[10px] !text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-all"
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
                        className="flex-1 text-[13.5px] text-[#0c1024] placeholder:text-gray-300 outline-none bg-transparent"
                        disabled={isTyping}
                      />
                    <button
                      onClick={() => sendMessage()}
                      disabled={!input.trim() || isTyping}
                      className={`w-8 h-8 flex items-center justify-center disabled:opacity-30 transition-all duration-200 active:scale-95 shrink-0 ${def ? 'bg-white text-black hover:bg-[#C0C0C0]' : 'rounded-full bg-[#5D00D6] hover:bg-[#4c00b0]'}`}
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
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-center"
            >
              <style>{`
                @keyframes def-pulse {
                  0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.0), 0 4px 20px rgba(0,0,0,0.4); border-color: rgba(255,255,255,0.1); }
                  50% { box-shadow: 0 0 0 3px rgba(255,255,255,0.06), 0 4px 20px rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.25); }
                }
                @keyframes lum-pulse {
                  0%, 100% { box-shadow: 0 0 0 0 rgba(191,47,112,0.0), 0 4px 20px rgba(0,0,0,0.4); border-color: rgba(191,47,112,0.1); }
                  50% { box-shadow: 0 0 0 3px rgba(191,47,112,0.06), 0 4px 20px rgba(191,47,112,0.08); border-color: rgba(191,47,112,0.25); }
                }
                @keyframes glow-pulse {
                  0%, 100% { box-shadow: 0 0 0 0 rgba(93,0,214,0.0), 0 8px 30px rgba(12,16,36,0.08); border-color: rgba(93,0,214,0.15); }
                  50% { box-shadow: 0 0 0 4px rgba(93,0,214,0.10), 0 8px 30px rgba(93,0,214,0.15); border-color: rgba(93,0,214,0.4); }
                }
                .advisor-pill { animation: ${lum ? 'lum-pulse' : def ? 'def-pulse' : 'glow-pulse'} 2.8s ease-in-out infinite; }
              `}</style>
              <button
                onClick={() => setIsOpen(true)}
                className={`advisor-pill flex items-center gap-3 px-5 py-3 border  hover:scale-[0.985] ${lum ? 'bg-[#111111] border-[#BF2F70]/20' : def ? 'bg-[#111111] border-white/10' : 'bg-white rounded-full border-[#5D00D6]/20'}`}
              >
                <span className={`text-[14px] font-medium tracking-tight whitespace-nowrap transition-colors ${lum ? 'text-[#ED9EA2] group-hover:text-white' : def ? 'text-[#808080] group-hover:text-white' : 'text-gray-600 group-hover:text-[#5D00D6]'}`}>
                  <span className="inline sm:hidden">{lum ? 'Ask Lumina Advisor' : def ? 'Ask Security Advisor' : 'Ask C9 Advisor'}</span>
                  <span className="hidden sm:inline">{lum ? 'What digital signage challenge is your business facing?' : def ? 'What security challenge is your business facing?' : 'What type of business are you building?'}</span>
                </span>
                <div className={`w-7 h-7 flex items-center justify-center transition-all duration-300 shrink-0 group-hover:scale-105 ${lum ? 'border border-[#BF2F70] text-[#BF2F70] group-hover:bg-[#BF2F70] group-hover:text-white' : def ? 'border border-[#404040] text-[#808080] group-hover:border-white group-hover:text-white' : 'rounded-full bg-[#5D00D6] text-white'}`}>
                  
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
