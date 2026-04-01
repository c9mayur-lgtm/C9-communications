'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Wifi, Cloud } from 'lucide-react';
import Link from 'next/link';

export default function FutureProof() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-8 border-y border-gray-50" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
      <div className="container mx-auto max-w-[1240px]">
        
        {/* Horizontal Call-out Card */}
        <div className="bg-[#1A1A2E] rounded-[32px] overflow-hidden flex flex-col lg:flex-row relative border border-[#5D00D6]/10">
           
           {/* Pure C9 Gradient Right Decor */}
           <div className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 bg-gradient-to-br from-[#5D00D6] to-[#7C3AED] opacity-90" />
           
           {/* Left Content */}
           <div className="relative z-10 p-10 lg:p-12 lg:w-1/2 flex flex-col items-start justify-center">
              <h2 className="text-[28px] md:text-[34px] font-bold text-white leading-tight tracking-tight">
                Future-proof your <br className="hidden md:block" /> business internet
              </h2>
              <p className="text-[15px] md:text-[17px] text-[#9CA3AF] mt-4 max-w-[400px] leading-relaxed">
                NBN™ upgrades are rolling out nationwide. Is your office ready? Stay productive and connected with C9 managed connectivity.
              </p>
              
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#5D00D6] hover:bg-[#4B00AD] text-white font-bold py-3 px-8 rounded-full transition-all group active:scale-95 shadow-xl shadow-purple-900/20 text-[14px]">
                 Get Started Now <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
           </div>

           {/* Right Visual (Icons & Network flow) */}
           <div className="relative z-10 p-10 lg:p-12 lg:w-1/2 flex items-center justify-center gap-5 md:gap-8 overflow-hidden">
              
              {/* Connecting Dashed Line (Background) */}
              <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-white/20 -translate-y-1/2 hidden md:block w-3/4 mx-auto" />

              {/* Animated Icon Set */}
              {[
                { icon: Building2, label: 'OFFICE' },
                { icon: Wifi, label: 'LINK' },
                { icon: Cloud, label: 'CORE' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 group relative z-10">
                   <motion.div 
                     whileHover={{ scale: 1.05 }}
                     className="w-16 h-16 md:w-22 md:h-22 rounded-2xl bg-white shadow-xl flex items-center justify-center p-4"
                   >
                      <item.icon size={28} className="text-[#5D00D6]" strokeWidth={1.5} />
                   </motion.div>
                   <span className="text-[9px] font-bold text-white uppercase tracking-widest opacity-50">{item.label}</span>
                </div>
              ))}
           </div>

        </div>

      </div>
    </section>
  );
}
