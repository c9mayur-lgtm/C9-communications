'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FLOWS = {
  start: {
    message: "Hey! Starting a new office, store, or showroom? 👋\nI can help you get set up with the right tech from Day 1.",
    options: [
      { label: "🏢 Opening a new office", next: 'office' },
      { label: "🛍️ Opening a retail store / showroom", next: 'retail' },
      { label: "🔧 I need help with existing tech", next: 'existing' },
      { label: "📦 Multi-site expansion", next: 'multisite' },
    ]
  },
  office: {
    message: "Great! New office setup is one of our specialties. How many staff will be working there?",
    options: [
      { label: "1–10 people", next: 'small_office' },
      { label: "11–50 people", next: 'medium_office' },
      { label: "50+ people", next: 'large_office' },
    ]
  },
  retail: {
    message: "Retail setups need reliable internet, EFTPOS connectivity, and in-store Wi-Fi. How many locations are you opening?",
    options: [
      { label: "Single store", next: 'single_retail' },
      { label: "2–5 stores", next: 'multi_retail' },
      { label: "5+ stores / franchise", next: 'franchise' },
    ]
  },
  existing: {
    message: "No problem. What's the main challenge you're facing right now?",
    options: [
      { label: "🐢 Slow or unreliable internet", next: 'lead_capture' },
      { label: "📞 Phone system issues", next: 'lead_capture' },
      { label: "🔒 Security concerns", next: 'lead_capture' },
      { label: "💸 Too many vendors / high bills", next: 'lead_capture' },
    ]
  },
  multisite: {
    message: "Perfect — multi-site is where we shine. How many sites are you managing or expanding to?",
    options: [
      { label: "2–5 sites", next: 'lead_capture' },
      { label: "6–20 sites", next: 'lead_capture' },
      { label: "20+ sites (Enterprise)", next: 'lead_capture' },
    ]
  },
  small_office: {
    message: "For a small team, we typically set up: Fast nbn™, cloud phone system (C9 phone system), managed Wi-Fi, and Microsoft 365. All on one bill. Want a free quote?",
    options: [
      { label: "✅ Yes, get me a quote", next: 'lead_capture' },
      { label: "📞 I'd prefer to call", next: 'phone' },
    ]
  },
  medium_office: {
    message: "Mid-size offices need structured cabling, high-density Wi-Fi, a proper phone system, and IT management. We can have everything ready before day one. Want a tailored plan?",
    options: [
      { label: "✅ Build my plan", next: 'lead_capture' },
      { label: "📞 I'd prefer to call", next: 'phone' },
    ]
  },
  large_office: {
    message: "Enterprise-level office setup includes SD-WAN, dedicated fibre, SOC security monitoring, and a dedicated account manager. Let's connect you with our solutions team.",
    options: [
      { label: "✅ Talk to enterprise team", next: 'lead_capture' },
      { label: "📞 Call us now", next: 'phone' },
    ]
  },
  single_retail: {
    message: "Single store — we'll sort your internet, EFTPOS-grade reliability, in-store Wi-Fi, and CCTV. Quick install, no downtime. Want us to reach out?",
    options: [
      { label: "✅ Yes, contact me", next: 'lead_capture' },
      { label: "📞 I'd prefer to call", next: 'phone' },
    ]
  },
  multi_retail: {
    message: "Multi-site retail is our strength — we centrally manage all your sites under one SLA. Consistent tech, one bill, one point of contact. Get a custom quote?",
    options: [
      { label: "✅ Get a quote", next: 'lead_capture' },
      { label: "📞 I'd prefer to call", next: 'phone' },
    ]
  },
  franchise: {
    message: "Franchise networks require standardised rollouts, remote monitoring, and central billing. We've done this for 50+ franchise groups. Let's talk.",
    options: [
      { label: "✅ Connect me with the team", next: 'lead_capture' },
      { label: "📞 I'd prefer to call", next: 'phone' },
    ]
  },
  phone: {
    message: "Call us anytime at **1300 293 332** — our Australian-based team picks up fast. No hold queues, no offshore handoffs. 😊",
    options: [
      { label: "← Start over", next: 'start' },
    ]
  },
  lead_capture: {
    message: "Almost there! What's the best way for our team to reach you?",
    options: [],
    isForm: true
  }
};

type FlowKey = keyof typeof FLOWS;

interface Message {
  from: 'bot' | 'user';
  text: string;
}

export const StartupChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<FlowKey>('start');
  const [messages, setMessages] = useState<Message[]>([]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Show teaser bubble after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Add initial bot message when opened
  useEffect(() => {
    if (isOpen && !hasBeenOpened) {
      setHasBeenOpened(true);
      setMessages([{ from: 'bot', text: FLOWS.start.message }]);
    }
  }, [isOpen, hasBeenOpened]);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleOption = (optionLabel: string, next: FlowKey) => {
    const nextFlow = FLOWS[next];
    setMessages(prev => [
      ...prev,
      { from: 'user', text: optionLabel },
      { from: 'bot', text: nextFlow.message }
    ]);
    setStep(next);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessages(prev => [
      ...prev,
      { from: 'user', text: `${formData.name} | ${formData.email} | ${formData.phone}` },
      { from: 'bot', text: "Perfect! 🎉 Our team will reach out within the hour. In the meantime, feel free to explore our solutions pages." }
    ]);
    setSubmitted(true);
  };

  const currentFlow = FLOWS[step];

  return (
    <>
      {/* Teaser Bubble */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[998] bg-white rounded-2xl shadow-xl p-4 max-w-[240px] border border-gray-100 cursor-pointer"
            onClick={() => { setIsOpen(true); setShowBubble(false); }}
          >
            <p className="text-[13px] text-[#0c1024] font-medium leading-snug">
              👋 Starting a new office or store?<br/>
              <span className="text-[#5D00D6] font-bold">Let us set up everything from Day 1.</span>
            </p>
            <div className="mt-2 flex items-center gap-1 text-[#5D00D6] text-[12px] font-bold">
              Chat with us <ArrowRight size={12} />
            </div>
            {/* Arrow */}
            <div className="absolute bottom-[-8px] right-8 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">
        
        {/* Chat Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25 }}
              className="w-[360px] bg-white rounded-[24px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
              style={{ maxHeight: '580px' }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#5D00D6] to-[#4d00b3] px-6 py-5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageSquare size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[14px]">C9 Setup Assistant</p>
                    <p className="text-white/70 text-[11px]">Typically replies instantly</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f9f8ff]">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed whitespace-pre-line ${
                      msg.from === 'bot' 
                        ? 'bg-white text-[#0c1024] rounded-tl-none shadow-sm border border-gray-100' 
                        : 'bg-[#5D00D6] text-white rounded-tr-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Options or Form */}
              <div className="shrink-0 p-4 bg-white border-t border-gray-100">
                {submitted ? (
                  <div className="flex items-center gap-3 py-2 text-[#5D00D6]">
                    <CheckCircle size={22} />
                    <span className="font-bold text-[14px]">We'll be in touch shortly!</span>
                  </div>
                ) : currentFlow.isForm ? (
                  <form onSubmit={handleFormSubmit} className="space-y-2">
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-[13px] outline-none focus:border-[#5D00D6] transition-colors"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Work email"
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-[13px] outline-none focus:border-[#5D00D6] transition-colors"
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-[13px] outline-none focus:border-[#5D00D6] transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#5D00D6] hover:bg-[#4d00b3] text-white font-bold rounded-xl text-[14px] flex items-center justify-center gap-2 transition-colors"
                    >
                      <Send size={16} /> Send my details
                    </button>
                  </form>
                ) : (
                  <div className="space-y-2">
                    {currentFlow.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOption(opt.label, opt.next as FlowKey)}
                        className="w-full text-left px-4 py-3 rounded-xl border border-gray-200 hover:border-[#5D00D6]/50 hover:bg-[#f4f0fa] text-[13px] font-medium text-[#0c1024] transition-all cursor-pointer"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAB Button */}
        <button
          onClick={() => { setIsOpen(prev => !prev); setShowBubble(false); }}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-[#5D00D6] to-[#4d00b3] text-white shadow-xl hover:shadow-[#5D00D6]/30 hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={isOpen ? 'close' : 'open'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>
    </>
  );
};
