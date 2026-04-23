'use client';
import React, { useState, useRef, useEffect } from 'react';
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
      <div className="fixed bottom-8 right-8 z-[200] flex flex-col items-end gap-3">

        {/* Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-[360px] max-w-[calc(100vw-4rem)] bg-white rounded-[28px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
              style={{ maxHeight: '560px' }}
            >
              {/* Header */}
              <div className="bg-[#0c1024] px-6 py-5 flex items-center justify-between shrink-0">
                <div>
                  <h3 className="text-white font-bold text-[16px]">How can we help?</h3>
                  <p className="text-white/50 text-[12px] mt-0.5">Our experts are ready to assist you.</p>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors cursor-pointer">
                  <X size={20} />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-100 shrink-0 bg-white">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`flex-1 py-3.5 text-[14px] font-bold transition-colors cursor-pointer ${activeTab === 'contact' ? 'text-[#5D00D6] border-b-2 border-[#5D00D6]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Contact Options
                </button>
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`flex-1 py-3.5 text-[14px] font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${activeTab === 'chat' ? 'text-[#5D00D6] border-b-2 border-[#5D00D6]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Bot size={14} /> Setup Assistant
                </button>
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait" initial={false}>
                {activeTab === 'contact' ? (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="p-5 flex flex-col gap-3"
                  >
                    <a href="tel:1300293332" className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-gray-100 group hover:border-[#5D00D6] hover:bg-[#F4F0FA] transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#5D00D6] shadow-sm">
                          <Phone size={18} />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">CALL US</div>
                          <div className="text-[16px] font-bold text-[#0c1024]">1300 293 332</div>
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-gray-300 group-hover:text-[#5D00D6] group-hover:translate-x-1 transition-all" />
                    </a>

                    <a href="mailto:office@c9communications.com.au" className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-gray-100 group hover:border-[#5D00D6] hover:bg-[#F4F0FA] transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#5D00D6] shadow-sm">
                          <Mail size={18} />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">EMAIL US</div>
                          <div className="text-[16px] font-bold text-[#0c1024]">Send a message</div>
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-gray-300 group-hover:text-[#5D00D6] group-hover:translate-x-1 transition-all" />
                    </a>

                    <Button
                      className="w-full py-6 text-[14px] font-bold rounded-2xl shadow-xl shadow-purple-900/20 mt-1"
                      onClick={() => {
                        setIsOpen(false);
                        document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Book a consultation
                    </Button>

                    <div className="pt-1 text-center">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Available 24/7 for critical support</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="chat"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex flex-col flex-1 overflow-hidden"
                  >
                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f9f8ff]" style={{ minHeight: '200px', maxHeight: '300px' }}>
                      {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[82%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed whitespace-pre-line ${msg.from === 'bot' ? 'bg-white text-[#0c1024] rounded-tl-none shadow-sm border border-gray-100' : 'bg-[#5D00D6] text-white rounded-tr-none'}`}>
                            {msg.text}
                          </div>
                        </div>
                      ))}
                      <div ref={bottomRef} />
                    </div>

                    {/* Input Area */}
                    <div className="shrink-0 p-4 bg-white border-t border-gray-100">
                      {submitted ? (
                        <div className="flex items-center gap-3 py-2 text-[#5D00D6]">
                          <CheckCircle size={20} />
                          <span className="font-bold text-[14px]">We'll be in touch shortly!</span>
                        </div>
                      ) : currentFlow?.isForm ? (
                        <form onSubmit={handleFormSubmit} className="space-y-2">
                          <input required type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#5D00D6] transition-colors" />
                          <input required type="email" placeholder="Work email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#5D00D6] transition-colors" />
                          <input required type="tel" placeholder="Phone number" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-[14px] outline-none focus:border-[#5D00D6] transition-colors" />
                          <button type="submit" className="w-full py-3 bg-[#5D00D6] hover:bg-[#4d00b3] text-white font-bold rounded-xl text-[14px] flex items-center justify-center gap-2 transition-colors cursor-pointer">
                            <Send size={15} /> Send my details
                          </button>
                        </form>
                      ) : (
                        <div className="space-y-2">
                          {currentFlow?.options.map((opt, i) => (
                            <button key={i} onClick={() => handleOption(opt.label, opt.next)} className="w-full text-left px-4 py-3 rounded-xl border border-gray-200 hover:border-[#5D00D6]/50 hover:bg-[#f4f0fa] text-[14px] font-medium text-[#0c1024] transition-all cursor-pointer">
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          className="w-[58px] h-[58px] rounded-full bg-[#5D00D6] text-white shadow-xl hover:shadow-[0_8px_30px_rgba(93,0,214,0.45)] hover:scale-105 transition-all duration-200 flex items-center justify-center cursor-pointer"
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
