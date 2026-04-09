'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const VoiceLeadCapture = () => {
  return (
    <section id="voice-lead" className="py-24 bg-[#0c1024] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#5D00D6]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[55%]"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
              <span className="c9-eyebrow !text-white/60 !text-[10px]">GET YOUR SYSTEM MAPPED</span>
            </div>
            <h2 className="c9-section-heading !text-white mb-6">
              Not sure which phone system<br />
              <span className="text-[#5D00D6]">is right for you?</span>
            </h2>
            <p className="text-slate-400 text-[16px] leading-relaxed max-w-[500px]">
              Tell us how many staff you have and where they work. Our voice engineers will map out the right system — usually in one 30-minute call. No pressure, no jargon.
            </p>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[42%] bg-white/5 backdrop-blur-md rounded-[28px] p-8 border border-white/10"
          >
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-white/10 text-white placeholder:text-white/30 rounded-xl px-5 h-14 text-[15px] outline-none focus:ring-2 focus:ring-[#5D00D6] border border-white/10 font-medium transition-colors"
                required
              />
              <input
                type="tel"
                placeholder="Best phone number"
                className="w-full bg-white/10 text-white placeholder:text-white/30 rounded-xl px-5 h-14 text-[15px] outline-none focus:ring-2 focus:ring-[#5D00D6] border border-white/10 font-medium transition-colors"
                required
              />
              <div className="relative">
                <select
                  className="w-full bg-white/10 text-white/70 rounded-xl px-5 h-14 text-[15px] outline-none focus:ring-2 focus:ring-[#5D00D6] border border-white/10 font-medium appearance-none transition-colors"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-400 bg-[#0c1024]">How many staff?</option>
                  <option value="1-10" className="bg-[#0c1024]">1–10 staff</option>
                  <option value="11-50" className="bg-[#0c1024]">11–50 staff</option>
                  <option value="51-200" className="bg-[#0c1024]">51–200 staff</option>
                  <option value="200+" className="bg-[#0c1024]">200+ staff</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-white/30">
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-bold rounded-full h-14 mt-2 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-[#5D00D6]/30 text-[16px]"
              >
                Talk to a Voice Engineer <ArrowRight size={18} />
              </button>
            </form>

            <p className="mt-6 text-center text-white/30 text-[12px] font-medium tracking-wide">
              Typical response: same business day · No lock-in · 100% Australian team
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
