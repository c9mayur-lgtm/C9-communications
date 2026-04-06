'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Users, ShieldCheck, Zap } from 'lucide-react';
import TeamsCallingVisual from './TeamsCallingVisual';

export const TeamsCallingHero = () => {
  return (
    <section className="relative pt-12 pb-8 md:pt-16 md:pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* TEXT CONTENT */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-full mb-8 shadow-sm"
            >
              <Users size={14} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !text-[#0c1024]">Native Microsoft Integration</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="c9-hero-title text-[#0c1024] mb-8"
            >
              Telephony inside <br />
              <span className="text-[#5D00D6]">Microsoft Teams.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="c9-body max-w-xl mb-12"
            >
              Unified communication. C9's Direct Routing for Microsoft Teams brings full PSTN telephony into the tools your team already uses. Ditch the desk segments and make external calls directly within Teams on any device.
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex flex-col sm:flex-row items-center gap-8"
            >
               <button className="bg-[#5D00D6] hover:bg-[#4c00b0] text-white rounded-full px-12 h-16 text-[16px] font-medium shadow-xl shadow-[#5D00D6]/20 transition-all hover:scale-105 active:scale-95 leading-none">
                  View Teams Plans
               </button>
               
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] shadow-sm">
                     <ShieldCheck size={20} />
                  </div>
                  <div className="text-left">
                     <p className="text-[14px] font-bold text-[#0c1024] leading-tight mb-0.5">Global Resilience</p>
                     <p className="text-[12px] text-slate-400 font-medium tracking-tight">99.9% Uptime SLA</p>
                  </div>
               </div>
            </motion.div>

            {/* Micro Stats Segment */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-2 gap-8 max-w-sm"
            >
                <div className="flex flex-col">
                    <span className="text-[24px] font-bold text-[#0c1024]">100%</span>
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Native Sync</span>
                </div>
                <div className="flex flex-col text-left">
                    <span className="text-[24px] font-bold text-[#0c1024]">70%</span>
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Cost Savings</span>
                </div>
            </motion.div>
          </div>

          {/* VISUAL COMPONENT */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className="flex-1 w-full"
          >
            <TeamsCallingVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
