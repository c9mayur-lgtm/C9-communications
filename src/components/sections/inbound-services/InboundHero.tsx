'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MapPin, Zap } from 'lucide-react';
import InboundVisual from './InboundVisual';

export const InboundHero = () => {
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
              <PhoneCall size={14} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !text-[#0c1024]">Smart Call Management</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="c9-hero-title text-[#0c1024] mb-8"
            >
              Master your <br />
              <span className="text-[#5D00D6]">inbound logic.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="c9-body max-w-xl mb-12"
            >
              One number. Endless possibilities. C9's Inbound services transform complex call routing into a powerful, automated customer experience engine. 1300, 1800, and 13 numbers managed by local Australian engineers.
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex flex-col sm:flex-row items-center gap-8"
            >
               <button className="bg-[#5D00D6] hover:bg-[#4c00b0] text-white rounded-full px-12 h-16 text-[16px] font-medium shadow-xl shadow-[#5D00D6]/20 transition-all hover:scale-105 active:scale-95 leading-none">
                  Find Your Number
               </button>
               
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] shadow-sm">
                     <Zap size={20} />
                  </div>
                  <div className="text-left">
                     <p className="text-[14px] font-bold text-[#0c1024] leading-tight mb-0.5">Instant Provisioning</p>
                     <p className="text-[12px] text-slate-400 font-medium tracking-tight">Ready in under 24 hours</p>
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
                    <span className="text-[24px] font-bold text-[#0c1024]">1300 / 1800</span>
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">National Reach</span>
                </div>
                <div className="flex flex-col text-left">
                    <span className="text-[24px] font-bold text-[#0c1024]">99.95%</span>
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Routing SLA</span>
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
            <InboundVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
