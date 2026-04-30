'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Shield, Activity, Volume2, CheckCircle2, ChevronRight, Mic2 } from 'lucide-react';

const P = '#5D00D6';

export const AcousticPerformanceVisual = () => {
  return (
    <div className="w-full h-[420px] bg-white rounded-[24px] border border-slate-200 shadow-lg overflow-hidden flex flex-col font-sans">
      
      {/* 1. COMPACT TOP BAR */}
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Headphones size={14} className="text-[#5D00D6]" />
            <span className="text-[10px] font-black text-slate-900 uppercase">Acoustic Endpoint</span>
          </div>
          <div className="w-px h-3 bg-slate-200" />
          <div className="flex items-center gap-2">
            <Activity size={14} className="text-emerald-500" />
            <span className="text-[10px] font-black text-slate-900 uppercase">Active Cancellation</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono font-bold">
           <span className="text-slate-400">ISOLATION:</span>
           <span className="text-[#5D00D6]">32dB</span>
           <span className="text-slate-400 ml-2">LATENCY:</span>
           <span className="text-slate-900">LOW</span>
        </div>
      </div>

      {/* 2. UNIFIED HARDWARE VISUAL */}
      <div className="flex-1 p-8 flex items-center justify-center bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(${P} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

        <div className="relative">
          {/* Sound waves visual */}
          <div className="absolute inset-0 flex items-center justify-center">
             {[1, 2, 3].map(i => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0.2, scale: 1 }}
                   animate={{ opacity: 0, scale: 2 }}
                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                   className="absolute w-40 h-40 border border-[#5D00D6]/20 rounded-full"
                />
             ))}
          </div>

          <div className="w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center relative z-10 shadow-2xl">
            <Headphones size={48} className="text-white" />
            <motion.div 
               animate={{ y: [0, -4, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute -bottom-2 bg-[#5D00D6] px-3 py-1 rounded-full text-[8px] font-black text-white uppercase tracking-widest"
            >
               Noise Shield
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. MINIMALIST FOOTER TICKER */}
      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-tight">
          <ChevronRight size={10} className="text-[#5D00D6]" />
          <span>Acoustic Profile: Unified Workplace Standard</span>
        </div>
        <div className="flex items-center gap-2">
           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Wireless Range: 30m</span>
           <div className="w-2 h-2 rounded-full bg-[#5D00D6] shadow-[0_0_8px_#5D00D6]" />
        </div>
      </div>
    </div>
  );
};
