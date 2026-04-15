'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Navbar } from "@/components/layout/Navbar";
// import VoiceVisual from './VoiceVisual'; // hidden — kept for reference
import VoiceVisualNew from './VoiceVisualNew';

export const VoiceHero = () => {
  return (
    <>
      <section className="relative pt-6 pb-20 md:pt-10 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* ── LEFT: TEXT CONTENT ── */}
            <div className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-full mb-8 shadow-sm"
              >
                <PhoneCall size={14} className="text-[#5D00D6]" />
                <span className="c9-eyebrow !text-[#0c1024]">C9 Voice Systems</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="c9-hero-title text-[#0c1024] mb-8"
              >
                One phone system.<br />
                <span className="text-[#5D00D6]">Every call handled.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="c9-body max-w-xl mb-12"
              >
                C9 Voice gives your business a complete, managed communication system — cloud calling, smart routing, mobile, Microsoft Teams, and a local support team who picks up when you call. Whether you have 5 staff or 500, it all just works.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('c9-open-lead-modal', { detail: { intent: 'Get a Pricing Quote' } }))}
                  className="bg-[#5D00D6] hover:bg-[#4c00b0] text-white rounded-full px-10 h-14 text-[16px] font-medium shadow-xl shadow-[#5D00D6]/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  Get your phone system sorted
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('c9-open-lead-modal', { detail: { intent: 'Book a Full System Demo' } }))}
                  className="text-[#5D00D6] font-bold text-[15px] flex items-center gap-2 hover:gap-3 transition-all"
                >
                  See what's included <ArrowRight size={16} />
                </button>
              </motion.div>

              {/* Micro Stats Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-2 gap-8 max-w-sm"
              >
                <div className="flex flex-col">
                  <span className="text-[24px] font-bold text-[#0c1024]">2 weeks</span>
                  <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Average Go-Live</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[24px] font-bold text-[#0c1024]">99.95%</span>
                  <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Voice Uptime SLA</span>
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT: ANIMATED VISUAL ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: 'spring', stiffness: 80 }}
              className="flex-1 w-full"
            >
              <VoiceVisualNew />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};
