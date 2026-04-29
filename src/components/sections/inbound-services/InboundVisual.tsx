'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Navigation, Clock, CheckCircle, Smartphone, Building2 } from 'lucide-react';

export default function InboundVisual() {
  return (
    <div className="relative w-full aspect-[1/0.85] max-w-[620px] mx-auto bg-white p-4 md:p-8 overflow-visible">
      {/* NO BACKGROUND COLOR OR GRAY LINES - CLEANING UP AS REQUESTED */}

      {/* DASHBOARD HEADER */}
      <div className="flex items-center justify-between mb-12 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#5D00D6] flex items-center justify-center text-white shadow-xl shadow-purple-900/10">
            <Phone size={24} />
          </div>
          <div>
            <p className="text-[16px] font-bold text-[#0c1024] leading-none mb-1.5">Live Routing Logic</p>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Global Status: Active</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 px-4 py-2 bg-green-50 rounded-full border border-green-100">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-[11px] font-bold text-green-600 uppercase tracking-widest">Network Optimized</span>
        </div>
      </div>

      {/* MAIN LOGIC FLOW - REMOVED SVG BACKGROUND LINES FOR PURITY */}
      <div className="relative h-[300px] w-full">
        
        {/* INPUT: 1300 / 1800 */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20"
        >
            <div className="bg-white p-8 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 w-[200px] text-center">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 leading-none">Incoming Call</p>
                <p className="text-[28px] font-bold text-[#5D00D6] tracking-tight leading-none mb-1">1300 000</p>
                <div className="flex items-center justify-center gap-2.5 mt-6">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                   <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6] opacity-50" />
                   <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6] opacity-25" />
                </div>
            </div>
        </motion.div>

        {/* DECISION NODE: ROUTING ENGINE */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[140px] h-[140px]">
            <div className="absolute inset-4 rounded-full bg-[#5D00D6] flex flex-col items-center justify-center text-white shadow-2xl shadow-purple-900/40 border-[6px] border-white ring-1 ring-gray-100">
                <Navigation size={28} className="mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Routing</span>
            </div>
            
            {/* Pulsing signal from center */}
            <div className="absolute inset-0 rounded-full bg-[#5D00D6]/5 animate-ping opacity-25" />
        </div>

        {/* OUTPUT DESTINATIONS */}
        <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between items-end w-[200px] py-2">
            
            {/* DEST 1: MELBOURNE OFFICE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-50 w-full flex items-center gap-4 relative"
            >
               <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-slate-400">
                  <Building2 size={20} />
               </div>
               <div>
                  <p className="text-[14px] font-bold text-[#0c1024] leading-tight mb-1">Melbourne</p>
                  <p className="text-[11px] text-green-500 font-bold uppercase tracking-widest">Available</p>
               </div>
               <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <CheckCircle size={12} className="text-green-500" />
               </div>
            </motion.div>

            {/* DEST 2: MOBILE OVERFLOW */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-50 w-full flex items-center gap-4"
            >
               <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6]">
                  <Smartphone size={20} />
               </div>
               <div>
                  <p className="text-[14px] font-bold text-[#0c1024] leading-tight mb-1">Team Leader</p>
                  <p className="text-[11px] text-[#5D00D6] font-bold uppercase tracking-widest">Active Link</p>
               </div>
            </motion.div>

        </div>

        {/* SIMPLE ANIMATED PARTICLES (FLOATING ON WHITE) */}
        <div className="absolute inset-0 pointer-events-none">
            <motion.div 
                animate={{ x: [200, 300], opacity: [0, 1, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-0 w-2 h-2 bg-[#5D00D6] rounded-full blur-[1px]"
            />
            <motion.div 
                animate={{ x: [360, 480], y: [150, 60], opacity: [0, 1, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 0.5 }}
                className="absolute top-1/2 left-0 w-2 h-2 bg-[#5D00D6] rounded-full blur-[1px]"
            />
        </div>

      </div>

      <div className="mt-16 flex items-center gap-10 justify-center">
         <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#5D00D6]" />
            <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest italic">Smart Routing Active</span>
         </div>
         <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest italic">Encrypted Secure Line</span>
         </div>
      </div>
    </div>
  );
}
