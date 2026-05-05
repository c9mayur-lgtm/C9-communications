'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Zap } from 'lucide-react';

export const VoiceHardware = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* ── LEFT: TEXT CONTENT ── */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#F4F0FA] px-4 py-2 rounded-full mb-8"
            >
              <span className="c9-eyebrow !text-[#5D00D6]">Official Hardware Partner</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="c9-section-heading text-[#0c1024] mb-6"
            >
              Enterprise-grade hardware.<br />
              <span className="text-[#5D00D6]">Zero setup required.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="c9-body mb-10 max-w-lg"
            >
              As a certified Yealink partner, we provide industry-leading IP desk phones, conference hubs, and headsets. Every piece of hardware arrives at your desk pre-configured on the C9 network. You just plug it in.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6 mb-10"
            >
              {[
                { icon: Zap,          text: "Pre-provisioned & zero-touch deployment" },
                { icon: ShieldCheck,  text: "Lifetime hardware warranty & replacements" },
                { icon: Settings,     text: "Remote management by C9 support" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                    <feature.icon size={16} className="text-[#5D00D6]" />
                  </div>
                  <span className="text-[16px] font-semibold text-[#0c1024]">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onClick={() => window.dispatchEvent(new CustomEvent('c9-open-lead-modal', { detail: { interest: ' hardware & systems' } }))}
              className="text-[#5D00D6] font-bold text-[14px] flex items-center gap-2 hover:gap-3 transition-all"
            >
              View hardware specs 
            </motion.button>
          </div>

          {/* ── RIGHT: PRODUCT CARDS ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex-1 w-full"
          >
            <div className="grid grid-cols-3 gap-5">
              {/* Card 1: SIP-T54W */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="col-span-3 bg-gradient-to-b from-slate-50 to-white rounded-[24px] border border-gray-100 p-8 flex flex-col items-center shadow-sm hover:shadow-xl hover:border-[#5D00D6]/20 transition-all duration-500"
              >
                <div className="h-[220px] w-full flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/yealink-t54w.png" alt="Yealink SIP-T54W" className="max-h-full w-auto object-contain group-hover:scale-105 duration-500 drop-shadow-xl" />
                </div>
                <div className="mt-6 text-center w-full border-t border-gray-100 pt-5">
                  <p className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-[0.2em] mb-1">Yealink SIP-T54W</p>
                  <p className="text-[16px] font-bold text-[#0c1024]">Prime Business Phone</p>
                  <p className="text-[14px] text-slate-400 mt-1">10-line, 4.3" colour display, Wi-Fi & Bluetooth</p>
                </div>
              </motion.div>

              {/* Card 2: W73P DECT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="col-span-1 bg-gradient-to-b from-slate-50 to-white rounded-[24px] border border-gray-100 p-6 flex flex-col items-center shadow-sm hover:shadow-xl hover:border-[#5D00D6]/20 transition-all duration-500"
              >
                <div className="h-[140px] w-full flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/yealink-w73p.png" alt="Yealink W73P" className="max-h-full w-auto object-contain group-hover:scale-105 duration-500 drop-shadow-lg" />
                </div>
                <div className="mt-4 text-center w-full border-t border-gray-100 pt-4">
                  <p className="text-[10px] font-bold text-[#5D00D6] uppercase tracking-[0.2em] mb-1">Yealink W73P</p>
                  <p className="text-[14px] font-bold text-[#0c1024] leading-tight">DECT Cordless</p>
                  <p className="text-[11px] text-slate-400 mt-1">Long-range wireless</p>
                </div>
              </motion.div>

              {/* Card 3: BH71 Headset */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
                className="col-span-2 bg-gradient-to-b from-slate-50 to-white rounded-[24px] border border-gray-100 p-6 flex flex-col items-center shadow-sm hover:shadow-xl hover:border-[#5D00D6]/20 transition-all duration-500"
              >
                <div className="h-[140px] w-full flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/yealink-bh71.png" alt="Yealink BH71" className="max-h-full w-auto object-contain group-hover:scale-105 duration-500 drop-shadow-lg" />
                </div>
                <div className="mt-4 text-center w-full border-t border-gray-100 pt-4">
                  <p className="text-[10px] font-bold text-[#5D00D6] uppercase tracking-[0.2em] mb-1">Yealink BH71</p>
                  <p className="text-[14px] font-bold text-[#0c1024] leading-tight">Bluetooth Headset</p>
                  <p className="text-[11px] text-slate-400 mt-1">Mono, all-day comfort</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
