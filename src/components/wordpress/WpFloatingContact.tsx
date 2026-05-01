'use client';
import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Phone, Mail, Send, CheckCircle, ArrowRight, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";

// ─── Chatbot Flow Data ────────────────────────────────────────────────────────
const FLOWS: Record<string, { message: string; options: { label: string; next: string }[]; isForm?: boolean }> = {
  start: {
    message: "Hey! Starting a new office, store, or showroom? 👋\nI can help you get set up with everything from Day 1.",
    options: [
      { label: "🏢 Opening a new office", next: 'office' },
      { label: "🛍️ Retail store / showroom", next: 'retail' },
      { label: "🔧 Issues with existing tech", next: 'existing' },
      { label: "📦 Multi-site expansion", next: 'lead_capture' },
    ]
  },
  office: {
    message: "New office setup is our specialty. How many staff will be working there?",
    options: [
      { label: "1–10 people", next: 'small_office' },
      { label: "11–50 people", next: 'medium_office' },
      { label: "50+ people (Enterprise)", next: 'large_office' },
    ]
  },
  retail: {
    message: "Retail setups need solid internet, EFTPOS connectivity, in-store Wi-Fi, and CCTV. How many locations?",
    options: [
      { label: "Single store", next: 'single_retail' },
      { label: "2–5 stores", next: 'lead_capture' },
      { label: "5+ stores / franchise", next: 'lead_capture' },
    ]
  },
  existing: {
    message: "What's the main challenge you're facing?",
    options: [
      { label: "🐢 Slow / unreliable internet", next: 'lead_capture' },
      { label: "📞 Phone system issues", next: 'lead_capture' },
      { label: "🔒 Security concerns", next: 'lead_capture' },
      { label: "💸 Too many vendors / high bills", next: 'lead_capture' },
    ]
  },
  small_office: {
    message: "For a small team: Fast nbn™, cloud phones (C9 phone system), managed Wi-Fi, and Microsoft 365. All on one bill from $99/month. Want a free quote?",
    options: [
      { label: "✅ Yes, get me a quote", next: 'lead_capture' },
    ]
  },
  medium_office: {
    message: "Mid-size offices need structured cabling, high-density Wi-Fi, a proper phone system, and managed IT. We'll have everything ready before Day 1. Want a plan?",
    options: [
      { label: "✅ Build my plan", next: 'lead_capture' },
    ]
  },
  large_office: {
    message: "Enterprise office setups include SD-WAN, dedicated fibre, SOC security monitoring, and a dedicated account manager. Let's connect you with our solutions team.",
    options: [
      { label: "✅ Talk to enterprise team", next: 'lead_capture' },
    ]
  },
  single_retail: {
    message: "Single store — we'll sort your internet, EFTPOS-grade reliability, in-store Wi-Fi, and CCTV. Quick install, zero downtime. Want us to reach out?",
    options: [
      { label: "✅ Yes, contact me", next: 'lead_capture' },
    ]
  },
  lead_capture: {
    message: "Perfect! What's the best way for our team to reach you?",
    options: [],
    isForm: true
  }
};

interface Message { from: 'bot' | 'user'; text: string }

// ─── Component ────────────────────────────────────────────────────────────────
export const WpFloatingContact = () => {
  const pathname = usePathname();
  const def = pathname?.startsWith('/defense');
  const lum = pathname?.startsWith('/lumina');
  
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'contact' | 'chat'>('contact');
  const [showBubble, setShowBubble] = useState(false);

  // Chatbot state
  const [step, setStep] = useState<string>('start');
  const [messages, setMessages] = useState<Message[]>([]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Show teaser bubble after 6s, auto-dismiss after 10s
  useEffect(() => {
    const show = setTimeout(() => setShowBubble(true), 6000);
    const hide = setTimeout(() => setShowBubble(false), 16000);
    return () => { clearTimeout(show); clearTimeout(hide); };
  }, []);

  // Init chat messages when chat tab first opened
  useEffect(() => {
    if (activeTab === 'chat' && !chatStarted) {
      setChatStarted(true);
      setMessages([{ from: 'bot', text: FLOWS.start.message }]);
    }
  }, [activeTab, chatStarted]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleOption = (label: string, next: string) => {
    const nextFlow = FLOWS[next];
    setMessages(prev => [
      ...prev,
      { from: 'user', text: label },
      { from: 'bot', text: nextFlow.message }
    ]);
    setStep(next);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessages(prev => [
      ...prev,
      { from: 'user', text: `${formData.name} | ${formData.email} | ${formData.phone}` },
      { from: 'bot', text: "🎉 Our team will reach out within the hour. We look forward to setting you up!" }
    ]);
    setSubmitted(true);
  };

  const currentFlow = FLOWS[step];

  return (
    <>
      {/* Single FAB Button */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[200] flex flex-col items-end gap-3">

        {/* Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`w-[360px] max-w-[calc(100vw-4rem)] shadow-2xl overflow-hidden flex flex-col border ${def ? 'bg-[#0d0d0d] border-[#252525]' : 'bg-white rounded-[28px] border-gray-100'}`}
              style={{ maxHeight: '560px' }}
            >
              {/* Header */}
              <div className={`px-6 py-5 flex items-center justify-between shrink-0 ${lum ? 'bg-[#BF2F70]' : def ? 'bg-[#151515]' : 'bg-[#0c1024]'}`}>
                <div>
                  <h3 className="text-white font-bold text-[16px]">{lum ? 'Lumina Virtual Agent' : def ? 'Security Support' : 'C9 Assistant'}</h3>
                  <p className="text-white/50 text-[12px] mt-0.5">Online & ready to assist.</p>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors cursor-pointer">
                  <X size={20} />
                </button>
              </div>

              {/* Chat Content */}
              <div className="flex flex-col flex-1 overflow-hidden">
                {/* Messages */}
                <div className={`flex-1 overflow-y-auto p-4 space-y-3 ${def || lum ? 'bg-[#080808]' : 'bg-[#f9f8ff]'}`} style={{ minHeight: '300px', maxHeight: '400px' }}>
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[82%] px-4 py-3 text-[14px] leading-relaxed whitespace-pre-line ${def || lum ? '' : 'rounded-2xl'} ${msg.from === 'bot' ? (def || lum ? 'bg-[#151515] text-[#C0C0C0] border border-[#252525]' : 'bg-white text-[#0c1024] rounded-tl-none shadow-sm border border-gray-100') : (def || lum ? (lum ? 'bg-[#BF2F70] text-white' : 'bg-[#252525] text-white') : 'bg-[#5D00D6] text-white rounded-tr-none')}`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>

                {/* Input Area */}
                <div className={`shrink-0 p-4 border-t ${def || lum ? 'bg-[#0d0d0d] border-[#202020]' : 'bg-white border-gray-100'}`}>
                  {submitted ? (
                    <div className={`flex items-center gap-3 py-2 ${lum ? 'text-[#BF2F70]' : 'text-[#5D00D6]'}`}>
                      <CheckCircle size={12} />
                      <span className="font-bold text-[14px]">Thank you! We'll be in touch shortly.</span>
                    </div>
                  ) : currentFlow?.isForm ? (
                    <form onSubmit={handleFormSubmit} className="space-y-2">
                      <input required type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} className={`w-full px-4 py-2.5 border text-[14px] outline-none transition-colors ${def || lum ? 'bg-black border-[#252525] text-white focus:border-[#BF2F70]' : 'bg-white rounded-xl border-gray-200 focus:border-[#5D00D6]'}`} />
                      <input required type="email" placeholder="Work email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className={`w-full px-4 py-2.5 border text-[14px] outline-none transition-colors ${def || lum ? 'bg-black border-[#252525] text-white focus:border-[#BF2F70]' : 'bg-white rounded-xl border-gray-200 focus:border-[#5D00D6]'}`} />
                      <input required type="tel" placeholder="Phone number" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} className={`w-full px-4 py-2.5 border text-[14px] outline-none transition-colors ${def || lum ? 'bg-black border-[#252525] text-white focus:border-[#BF2F70]' : 'bg-white rounded-xl border-gray-200 focus:border-[#5D00D6]'}`} />
                      <button type="submit" className={`w-full py-3 text-white font-bold text-[14px] flex items-center justify-center gap-2 transition-colors cursor-pointer ${lum ? 'bg-[#BF2F70] hover:bg-[#A32469]' : def ? 'bg-white text-black hover:bg-[#C0C0C0]' : 'bg-[#5D00D6] rounded-xl hover:bg-[#4d00b3]'}`}>
                        <Send size={15} /> Send my details
                      </button>
                    </form>
                  ) : (
                    <div className="space-y-2">
                      {currentFlow?.options.map((opt, i) => (
                        <button key={i} onClick={() => handleOption(opt.label, opt.next)} className={`w-full text-left px-4 py-3 border text-[14px] font-medium transition-all cursor-pointer ${def || lum ? 'bg-[#111111] border-[#252525] text-[#808080] hover:text-white hover:border-[#BF2F70]/50' : 'bg-white rounded-xl border-gray-200 hover:border-[#5D00D6]/50 hover:bg-[#f4f0fa] text-[#0c1024]'}`}>
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Teaser bubble */}
        <AnimatePresence>
          {showBubble && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.94 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl shadow-2xl shadow-purple-900/10 border border-gray-100 p-4 max-w-[220px] cursor-pointer relative mb-1"
              onClick={() => { setShowBubble(false); setIsOpen(true); setActiveTab('chat'); }}
            >
              <p className="text-[14px] text-[#0c1024] font-semibold leading-snug">
                👋 Setting up a new office or relocating?
              </p>
              <p className="text-[12px] text-[#5D00D6] font-bold mt-1.5">Let us plan it from Day 1 →</p>
              {/* Tail */}
              <div className="absolute -bottom-2 right-7 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
              {/* Dismiss */}
              <button
                onClick={(e) => { e.stopPropagation(); setShowBubble(false); }}
                className="absolute top-2 right-2 text-gray-300 hover:text-gray-500 transition-colors"
              >
                <X size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAB Button */}
        <button
          onClick={() => { setIsOpen(prev => !prev); setShowBubble(false); }}
          className={`wp-floating-contact-btn w-[54px] h-[54px] md:w-[58px] md:h-[58px] shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95 ${
            lum ? 'bg-[#BF2F70] text-white hover:bg-[#A32469] hover:shadow-[0_8px_30px_rgba(191,47,112,0.45)]' :
            def ? 'bg-white text-black hover:bg-[#C0C0C0] hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]' : 
            'rounded-full bg-[#5D00D6] text-white hover:shadow-[0_8px_30px_rgba(93,0,214,0.45)]'
          } ${!def && !lum ? 'rounded-full' : ''}`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? 'x' : 'msg'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[199] bg-black/10"
          />
        )}
      </AnimatePresence>
    </>
  );
};
