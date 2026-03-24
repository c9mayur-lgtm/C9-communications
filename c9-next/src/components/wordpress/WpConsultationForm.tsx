'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone, Search, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export interface WpConsultationFormProps {
  showHeader?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  formTitle?: string;
  children?: React.ReactNode;
}

export const WpConsultationForm = ({ 
  showHeader = true, 
  eyebrow = "FREE TELCO AUDIT",
  title = "Find out exactly how much you could save with C9.",
  description = "We'll review your current telco costs, identify where you're overpaying, and show you a better option. No obligation — just 10 minutes.",
  formTitle = "Request Your Free Telco Audit",
  children
}: WpConsultationFormProps) => {
  return (
    <div className="bg-[#C4B5FD] py-20 md:py-32" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
      {showHeader && (
        <section className="bg-[#0B0121] pt-32 pb-40 md:pt-40 md:pb-56 relative text-white -mt-20 md:-mt-32">
          <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
            <FadeIn>
              <div className="inline-block bg-white/10 px-4 py-1.5 rounded-lg text-[11px] font-bold tracking-widest uppercase mb-8 border border-white/10">
                {eyebrow}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[40px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] max-w-4xl mb-10 tracking-tight">
                 {title}
              </h1>
            </FadeIn>
          </div>
        </section>
      )}

      <div className={`container mx-auto px-6 md:px-8 max-w-[1200px] relative ${showHeader ? '-mt-32 md:-mt-48' : ''}`}>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column (Content) */}
          <div className={`${showHeader ? 'pt-10 md:pt-20' : ''}`}>
            <FadeIn delay={0.2}>
              {!showHeader && (
                <div className="mb-12">
                  <div className="inline-block bg-[#0B0121] text-white px-4 py-1.5 rounded-lg text-[11px] font-semibold tracking-widest uppercase mb-6">
                    {eyebrow}
                  </div>
                  <h2 className="text-[36px] md:text-[48px] lg:text-[60px] font-semibold text-[#1a1a2e] leading-[1.05] mb-8 tracking-tighter">
                    {title}
                  </h2>
                </div>
              )}

              {children ? children : (
                <>
                  <p className="text-[20px] text-[#1a1a2e] leading-relaxed mb-12 max-w-lg font-medium opacity-70">
                    {description}
                  </p>
                  
                  <div className="mb-20">
                    <p className="font-semibold text-[#1a1a2e] text-[24px] md:text-[28px] tracking-tight">
                      Call us today: <a href="tel:1800000299" className="text-[#5D00D6] decoration-[#5D00D6]/30 underline-offset-8 underline transition-all hover:text-[#4c00b0]">1800 000 299</a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[12px] font-bold text-[#5D00D6] uppercase tracking-[0.2em] mb-10">WHAT HAPPENS AFTER YOU SUBMIT</h3>
                    <div className="flex flex-col gap-10">
                      {[
                        { title: '1. A real Australian calls you', body: 'Not a call centre. Not a script. Someone who actually knows telco.', icon: Phone },
                        { title: '2. We review your current costs', body: 'We show you exactly where you\'re overpaying.', icon: Search },
                        { title: '3. You get a clear proposal', body: 'Plain English. Exact pricing. No lock-in if it\'s not for you.', icon: FileText }
                      ].map((step, idx) => (
                        <div key={idx} className="flex gap-6">
                          <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-[#5D00D6] shrink-0">
                            <step.icon size={20} />
                          </div>
                          <div>
                            <h4 className="text-[17px] font-semibold text-[#1a1a2e] mb-1">{step.title}</h4>
                            <p className="text-[14px] font-medium text-[#1a1a2e] opacity-50 leading-relaxed">{step.body}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </FadeIn>
          </div>

          {/* Right Column (Form) */}
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-none shadow-[0_40px_100px_-15px_rgba(0,0,0,0.1)] p-8 md:p-12 border border-white">
              <h2 className="text-[28px] md:text-[32px] font-semibold text-center text-[#1a1a2e] mb-8 tracking-tight">
                 {formTitle}
              </h2>
    
              <form onSubmit={e => e.preventDefault()} className="grid gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">FIRST NAME</label>
                    <input type="text" placeholder="John" className="w-full px-6 py-3.5 rounded-xl bg-white border border-slate-100 focus:border-[#5D00D6] outline-none transition-all text-[15px] font-medium placeholder:text-slate-400" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">LAST NAME</label>
                    <input type="text" placeholder="Doe" className="w-full px-6 py-3.5 rounded-xl bg-white border border-slate-100 focus:border-[#5D00D6] outline-none transition-all text-[15px] font-medium placeholder:text-slate-400" />
                  </div>
                </div>
    
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">COMPANY</label>
                    <input type="text" placeholder="Acme Pty Ltd" className="w-full px-6 py-3.5 rounded-xl bg-white border border-slate-100 focus:border-[#5D00D6] outline-none transition-all text-[15px] font-medium placeholder:text-slate-400" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">PHONE</label>
                    <input type="tel" placeholder="1800 000 299" className="w-full px-6 py-3.5 rounded-xl bg-white border border-slate-100 focus:border-[#5D00D6] outline-none transition-all text-[15px] font-medium placeholder:text-slate-400" />
                  </div>
                </div>
    
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">WORK EMAIL</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-6 py-3.5 rounded-xl bg-white border border-slate-100 focus:border-[#5D00D6] outline-none transition-all text-[15px] font-medium placeholder:text-slate-400" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">CURRENT PROVIDER</label>
                  <select className="w-full px-6 py-3.5 rounded-xl bg-white border border-zinc-100 focus:border-[#5D00D6] outline-none transition-all text-[15px] font-medium cursor-pointer appearance-none text-slate-800">
                    <option className="text-slate-400">Select provider...</option>
                    <option>Telstra</option>
                    <option>Optus</option>
                    <option>TPG / Vodafone</option>
                    <option>Other</option>
                  </select>
                </div>
    
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">MESSAGE</label>
                  <textarea 
                    placeholder="Briefly describe your requirements..."
                    className="w-full px-6 py-3.5 rounded-xl bg-white border border-zinc-100 focus:border-[#5D00D6] outline-none transition-all text-[15px] font-medium min-h-[100px] resize-none placeholder:text-slate-400"
                  />
                </div>
    
                <div className="text-center">
                   <Button size="lg" className="w-full h-16 rounded-full bg-[#5D00D6] hover:bg-[#4c00b0] shadow-xl shadow-purple-900/20 group mt-4 text-[17px] font-semibold">
                    Request Free Audit <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                   </Button>
                   <p className="text-[11px] text-zinc-400 mt-6 font-semibold tracking-tight">Typical response: 2 business hours • No lock-in • Your details stay private</p>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
