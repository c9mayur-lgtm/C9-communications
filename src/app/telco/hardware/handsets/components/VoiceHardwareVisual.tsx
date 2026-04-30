'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Shield, Activity, Volume2, CheckCircle2, ChevronRight, Mic } from 'lucide-react';

const P = '#5D00D6';

export const VoiceHardwareVisual = () => {
  return (
    <div className="w-full h-[420px] bg-white rounded-[24px] border border-slate-200 shadow-lg overflow-hidden flex flex-col font-sans">
      
      {/* 1. COMPACT TOP BAR */}
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-[#5D00D6]" />
            <span className="text-[10px] font-black text-slate-900 uppercase">Voice Terminal</span>
          </div>
          <div className="w-px h-3 bg-slate-200" />
          <div className="flex items-center gap-2">
            <Volume2 size={14} className="text-emerald-500" />
            <span className="text-[10px] font-black text-slate-900 uppercase">HD Audio</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono font-bold">
           <span className="text-slate-400">CODEC:</span>
           <span className="text-[#5D00D6]">G.722</span>
           <span className="text-slate-400 ml-2">STATUS:</span>
           <span className="text-emerald-500">READY</span>
        </div>
      </div>

      {/* 2. UNIFIED HARDWARE CORE */}
      <div className="flex-1 p-8 flex items-center justify-center bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(${P} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

        <div className="w-full max-w-[320px]">
          <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Mic size={18} className="text-white/40" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">C9 Enterprise Voice</span>
              </div>
            </div>

            {/* Simulated UI Screen */}
            <div className="aspect-video bg-slate-800 rounded-xl mb-8 p-4 border border-white/10 flex flex-col justify-between">
               <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                     <span className="text-[8px] text-white/40 uppercase font-bold">Extension</span>
                     <span className="text-xs font-bold text-white">1002 - IT Desk</span>
                  </div>
                  <div className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[8px] font-black uppercase">Active</div>
               </div>
               
               <div className="flex items-end justify-between">
                  <div className="flex gap-1">
                     {[1, 2, 3].map(i => (
                        <div key={i} className="w-4 h-1 bg-[#5D00D6] rounded-full" />
                     ))}
                  </div>
                  <span className="text-[18px] font-bold text-white">12:45</span>
               </div>
            </div>

            {/* Simulated Keypad Area */}
            <div className="grid grid-cols-3 gap-2 opacity-30">
               {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="h-6 rounded-lg bg-white/10 border border-white/5" />
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. MINIMALIST FOOTER TICKER */}
      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-tight">
          <ChevronRight size={10} className="text-[#5D00D6]" />
          <span>Provisioning Status: Configuration Sync Complete</span>
        </div>
        <div className="flex items-center gap-2">
           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Firmware v2.4</span>
           <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
        </div>
      </div>
    </div>
  );
};
