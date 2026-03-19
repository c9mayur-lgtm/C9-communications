'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
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

export const WpConsultationForm = ({ showHeader = true }) => {
  return (
    <div className="bg-[#C4B5FD] py-20 md:py-32" style={{ fontFamily: "'Inter', sans-serif" }}>
      {showHeader && (
        <section className="bg-[#0B0121] pt-32 pb-40 md:pt-40 md:pb-56 relative text-white -mt-20 md:-mt-32">
          <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
            <FadeIn>
              <div className="inline-block bg-white/10 px-4 py-1.5 rounded-lg text-[11px] font-bold tracking-widest uppercase mb-8 border border-white/10">
                Contact Us
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[40px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] max-w-4xl mb-10 tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                 Partner with Us for<br className="hidden md:block" /> Comprehensive IT
              </h1>
            </FadeIn>
          </div>
        </section>
      )}

      <div className={`container mx-auto px-6 md:px-8 max-w-[1200px] relative ${showHeader ? '-mt-32 md:-mt-48' : 'mt-10'}`}>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column (Content) */}
          <div className={`${showHeader ? 'pt-10 md:pt-20' : ''}`}>
            <FadeIn delay={0.2}>
              {!showHeader && (
                <div className="mb-12">
                  <div className="inline-block bg-[#0B0121] text-white px-4 py-1.5 rounded-lg text-[11px] font-bold tracking-widest uppercase mb-6">
                    Contact Us
                  </div>
                  <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[#0B0121] leading-[1.1] mb-8 tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                    Partner with Us for Comprehensive IT
                  </h2>
                </div>
              )}

              <p className="text-[18px] md:text-[20px] text-slate-900/80 leading-relaxed mb-12 max-w-lg font-medium">
                We're happy to answer any questions you may have and help you determine which of our services best fit your business needs.
              </p>
              
              <div className="mb-16">
                <p className="font-extrabold text-[#0B0121] text-[20px] md:text-[24px]">
                  Call us today: <a href="tel:1800000299" className="text-[#5D00D6] decoration-[#5D00D6]/30 underline-offset-8 underline transition-all hover:text-[#4c00b0]">1800 000 299</a>
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-[#0B0121] mb-8">What you can expect:</h3>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                  {[
                    'Client-oriented approach', 'Independent advice', 'Competent engineering',
                    'Results-driven focus', 'Rapid problem-solving', 'Full transparency'
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#5D00D6] flex items-center justify-center text-white shadow-lg shadow-purple-900/20 shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-[16px] font-bold text-[#0B0121]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (Form) */}
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-[40px] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.1)] p-8 md:p-12 border border-white/20">
              <h2 className="text-[24px] md:text-[28px] font-bold text-center text-[#0B0121] mb-10 tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                 Schedule a Free Consultation
              </h2>
    
              <form onSubmit={e => e.preventDefault()} className="grid gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">First name</label>
                    <input type="text" placeholder="John" className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#5D00D6]/30 focus:bg-white outline-none transition-all text-[15px] font-medium placeholder:text-slate-300" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Last name</label>
                    <input type="text" placeholder="Doe" className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#5D00D6]/30 focus:bg-white outline-none transition-all text-[15px] font-medium placeholder:text-slate-300" />
                  </div>
                </div>
    
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Company</label>
                    <input type="text" placeholder="Acme Inc" className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#5D00D6]/30 focus:bg-white outline-none transition-all text-[15px] font-medium placeholder:text-slate-300" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Phone</label>
                    <input type="tel" placeholder="1800 000 299" className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#5D00D6]/30 focus:bg-white outline-none transition-all text-[15px] font-medium placeholder:text-slate-300" />
                  </div>
                </div>
    
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Work email</label>
                    <input type="email" placeholder="john@company.com" className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#5D00D6]/30 focus:bg-white outline-none transition-all text-[15px] font-medium placeholder:text-slate-300" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">How Can We Help?</label>
                    <select className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#5D00D6]/30 focus:bg-white outline-none transition-all text-[15px] font-medium cursor-pointer appearance-none">
                      <option>Select Option</option>
                      <option>Managed IT Services</option>
                      <option>Cloud Communications</option>
                      <option>Cyber Security</option>
                      <option>Network Infrastructure</option>
                    </select>
                  </div>
                </div>
    
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Message</label>
                  <textarea 
                    placeholder="Briefly describe your requirements..."
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#5D00D6]/30 focus:bg-white outline-none transition-all text-[15px] font-medium min-h-[120px] resize-none placeholder:text-slate-300"
                  />
                </div>
    
                <Button size="lg" className="w-full h-16 rounded-[20px] bg-[#5D00D6] hover:bg-[#4c00b0] text-[16px] font-extrabold shadow-2xl shadow-purple-900/30 gap-3 group mt-4">
                  Request Free Audit <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
