'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Lock } from 'lucide-react';
import Link from 'next/link';

export default function DefenseBridge() {
  return (
    <section className="relative w-full bg-white py-12 px-6 overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0A0A14] rounded-[40px] p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-10 lg:gap-12 shadow-2xl shadow-[#5D00D6]/10 max-w-[960px] mx-auto border border-white/5 relative overflow-hidden group hover:border-[#5D00D6]/40 transition-all duration-700"
        >
          
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5D00D6]/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none group-hover:bg-[#5D00D6]/20 transition-colors duration-1000" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          {/* Icon Section with Pulse */}
          <div className="relative shrink-0 z-10">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#5D00D6]/20 rounded-full blur-[30px]"
            />
            <div className="w-20 h-20 md:w-[100px] md:h-[100px] bg-[#161622] rounded-[28px] flex items-center justify-center border border-white/10 shadow-2xl relative z-10 group-hover:rotate-3 transition-transform duration-700">
               <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#5D00D6] rounded-lg flex items-center justify-center text-white shadow-lg shadow-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <Lock size={14} />
               </div>
               <Shield className="w-8 h-8 md:w-[48px] md:h-[48px] text-white/90 group-hover:text-[#9D72FF] transition-colors duration-500" strokeWidth={1.5} />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left z-10 py-2">
            <div className="flex items-center gap-2.5 mb-4 justify-center md:justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5D00D6] animate-pulse" />
              <span className="text-[#5D00D6] text-[11px] font-black uppercase tracking-[0.2em]">Cyber Defense Bridge</span>
            </div>
            <h3 className="font-['Proxima_Nova'] text-[24px] md:text-[32px] lg:text-[34px] font-bold text-white leading-[1.1] tracking-tight mb-4">
              Secure your edge with <span className="text-[#9D72FF]">enterprise cybersecurity.</span>
            </h3>
            <p className="font-['Proxima_Nova'] text-[16px] md:text-[17px] text-[#A0A0B0] font-medium leading-[1.6] max-w-[580px]">
              While our networks include core security, complex environments require the next layer. Integrate <span className="text-white">C9 Defense</span> for Essential 8 compliance.
            </p>
          </div>

          {/* Button */}
          <div className="shrink-0 z-10 w-full md:w-auto flex justify-center md:justify-end">
            <Link 
              href="/c9-defense" 
              className="group/btn flex items-center justify-center gap-3 border-[1.5px] border-[#5D00D6]/60 bg-[#5D00D6]/10 hover:bg-[#5D00D6] text-white font-['Proxima_Nova'] font-bold text-[14px] h-[56px] px-8 rounded-full transition-all w-full md:w-auto shadow-2xl shadow-purple-900/20 active:scale-95"
            >
              Explore C9 Defense 
              <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
