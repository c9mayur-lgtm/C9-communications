'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Shield, Activity, Radio, CheckCircle2, ChevronRight } from 'lucide-react';

const P = '#5D00D6';

export const WirelessControlVisual = () => {
  const [signalStrength, setSignalStrength] = useState(94);

  useEffect(() => {
    const interval = setInterval(() => {
      setSignalStrength(prev => {
        const next = prev + (Math.random() * 4 - 2);
        return Math.max(85, Math.min(99, next));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[420px] bg-white rounded-[24px] border border-slate-200 shadow-lg overflow-hidden flex flex-col font-sans">
      
      {/* 1. COMPACT TOP BAR */}
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Radio size={14} className="text-[#5D00D6]" />
            <span className="text-[10px] font-black text-slate-900 uppercase">Wireless Core</span>
          </div>
          <div className="w-px h-3 bg-slate-200" />
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-emerald-500" />
            <span className="text-[10px] font-black text-slate-900 uppercase">Encrypted</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono font-bold">
           <span className="text-slate-400">SIGNAL:</span>
           <span className="text-[#5D00D6]">{signalStrength.toFixed(0)}%</span>
           <span className="text-slate-400 ml-2">USERS:</span>
           <span className="text-slate-900">42</span>
        </div>
      </div>

      {/* 2. UNIFIED WIRELESS VISUAL */}
      <div className="flex-1 p-8 flex items-center justify-center bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(${P} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

        <div className="relative">
          {/* Pulsing signal rings */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5 + ring * 0.2, opacity: [0, 0.2, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: ring * 0.8 }}
              className="absolute inset-0 rounded-full border border-[#5D00D6]"
            />
          ))}

          <div className="w-32 h-32 bg-slate-900 rounded-3xl flex items-center justify-center relative z-10 shadow-2xl">
            <Wifi size={48} className="text-white" />
            <div className="absolute -top-1 -right-1 flex gap-1">
               <motion.div 
                 animate={{ opacity: [0.3, 1, 0.3] }}
                 transition={{ duration: 1, repeat: Infinity }}
                 className="w-2 h-2 rounded-full bg-emerald-400" 
               />
            </div>
          </div>
        </div>
      </div>

      {/* 3. MINIMALIST FOOTER TICKER */}
      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-tight">
          <ChevronRight size={10} className="text-[#5D00D6]" />
          <span>Operational Event: Auto-Channel Optimization Complete</span>
        </div>
        <div className="flex items-center gap-2">
           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Active Roaming</span>
           <div className="flex -space-x-1">
              {[1,2,3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border border-white bg-slate-200 shadow-sm" />
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};
