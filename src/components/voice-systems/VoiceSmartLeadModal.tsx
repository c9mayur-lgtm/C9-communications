'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, PhoneCall, CheckCircle2, User, Building2, Mail, Phone, ChevronRight } from 'lucide-react';

export const VoiceSmartLeadModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [intent, setIntent] = useState<string>('');

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.intent) {
        setIntent(customEvent.detail.intent);
        setStep(2); // Skip straight to step 2 if we know intent
      } else {
        setStep(1);
      }
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('c9-open-lead-modal', handleOpen);
    return () => {
      window.removeEventListener('c9-open-lead-modal', handleOpen);
      document.body.style.overflow = '';
    };
  }, []);

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    setTimeout(() => { setStep(1); setIntent(''); }, 300);
  };

  const handleIntent = (val: string) => {
    setIntent(val);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Success step
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment key="c9-modal">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-[#0c1024]/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-[32px] w-full max-w-[540px] shadow-2xl relative overflow-hidden pointer-events-auto border border-gray-100 flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={close}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="p-10 overflow-y-auto custom-scrollbar">
                
                <AnimatePresence mode="wait">
                  
                  {/* ───────────────────────────────────────
                      STEP 1: INTENT
                  ─────────────────────────────────────── */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-[#F4F0FA] flex items-center justify-center text-[#5D00D6] mb-8">
                        <PhoneCall size={24} />
                      </div>
                      <h2 className="c9-section-heading mb-3">
                        What can we help you solve?
                      </h2>
                      <p className="text-slate-500 text-[14px] mb-8">
                        Select an option below and we'll route you to the right specialist immediately.
                      </p>

                      <div className="flex flex-col gap-3">
                        {[
                          { title: 'Get a Pricing Quote', desc: 'Find out exactly what C9 Voice will cost you.' },
                          { title: 'Discuss Yealink Hardware', desc: 'Hardware options, provisioning, and features.' },
                          { title: 'Book a Full System Demo', desc: 'See the cloud PBX and smart routing in action.' },
                          { title: 'General Voice Enquiry', desc: 'Just have a few questions for an engineer.' }
                        ].map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleIntent(opt.title)}
                            className="flex items-center justify-between p-5 rounded-2xl border border-gray-100 bg-white hover:border-[#5D00D6]/40 hover:shadow-md transition-all text-left"
                          >
                            <div>
                              <p className="text-[14px] font-bold text-[#0c1024] mb-1 group-hover:text-[#5D00D6] transition-colors">{opt.title}</p>
                              <p className="text-[14px] text-slate-500">{opt.desc}</p>
                            </div>
                            <ChevronRight size={18} className="text-slate-300 group-hover:text-[#5D00D6] transition-all" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* ───────────────────────────────────────
                      STEP 2: DETAILS / CALENDAR PORTAL
                  ─────────────────────────────────────── */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <button onClick={() => setStep(1)} className="text-[12px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1 mb-6 hover:text-[#5D00D6] transition-colors">
                        ← Back
                      </button>

                      <h2 className="c9-section-heading mb-3">
                        Let's get that sorted.
                      </h2>
                      <p className="text-slate-500 text-[14px] mb-8">
                        You selected: <span className="font-bold text-[#0c1024]">{intent}</span>. Drop your details below and we'll lock it in.
                      </p>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="grid grid-cols-2 gap-5">
                          <label className="flex flex-col gap-2">
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest pl-1">Name</span>
                            <div className="relative">
                              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                              <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-gray-200 rounded-xl h-12 pl-11 pr-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all" />
                            </div>
                          </label>
                          <label className="flex flex-col gap-2">
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest pl-1">Company</span>
                            <div className="relative">
                              <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                              <input required type="text" placeholder="Acme Inc" className="w-full bg-slate-50 border border-gray-200 rounded-xl h-12 pl-11 pr-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all" />
                            </div>
                          </label>
                        </div>

                        <label className="flex flex-col gap-2">
                          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest pl-1">Work Email</span>
                          <div className="relative">
                            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                            <input required type="email" placeholder="john@company.com" className="w-full bg-slate-50 border border-gray-200 rounded-xl h-12 pl-11 pr-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all" />
                          </div>
                        </label>

                        <label className="flex flex-col gap-2 mb-2">
                          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest pl-1">Phone Number</span>
                          <div className="relative">
                            <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                            <input required type="tel" placeholder="0400 000 000" className="w-full bg-slate-50 border border-gray-200 rounded-xl h-12 pl-11 pr-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all" />
                          </div>
                        </label>

                        <button 
                          type="submit"
                          className="w-full bg-[#5D00D6] hover:bg-[#4c00b0] text-white rounded-xl h-14 text-[14px] font-medium shadow-xl shadow-[#5D00D6]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                          Confirm & Connect 
                        </button>
                        <p className="text-center text-[12px] text-slate-400 mt-2">
                          By submitting, you agree to our privacy policy. (No spam, ever).
                        </p>
                      </form>
                    </motion.div>
                  )}

                  {/* ───────────────────────────────────────
                      STEP 3: SUCCESS
                  ─────────────────────────────────────── */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-8"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-500 mb-6">
                        <CheckCircle2 size={32} />
                      </div>
                      <h2 className="c9-section-heading mb-3">
                        We're on it.
                      </h2>
                      <p className="text-slate-500 text-[14px] mb-8 max-w-[300px]">
                        Thanks for reaching out! A C9 Voice engineer has been notified and will be in touch shortly to assist you.
                      </p>
                      <button 
                        onClick={close}
                        className="bg-slate-100 hover:bg-slate-200 text-[#0c1024] rounded-full px-8 h-12 text-[14px] font-bold transition-all"
                      >
                        Back to site
                      </button>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};
