'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, Server, CheckCircle2, ChevronRight } from 'lucide-react';

const P = '#5D00D6';

export const RouterControlVisual = () => {
  const [latency, setLatency] = useState(12.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => {
        const next = prev + (Math.random() * 0.4 - 0.2);
        return Math.max(10, Math.min(15, next));
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
            <Shield size={14} className="text-[#5D00D6]" />
            <span className="text-[10px] font-black text-slate-900 uppercase">Controlled</span>
          </div>
          <div className="w-px h-3 bg-slate-200" />
          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-emerald-500" />
            <span className="text-[10px] font-black text-slate-900 uppercase">Consistent</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono font-bold">
           <span className="text-slate-400">LATENCY:</span>
           <span className="text-[#5D00D6]">{latency.toFixed(1)}ms</span>
           <span className="text-slate-400 ml-2">LOAD:</span>
           <span className="text-slate-900">24%</span>
        </div>
      </div>

      {/* 2. UNIFIED HARDWARE CORE - Minimalist */}
      <div className="flex-1 p-8 flex items-center justify-center bg-white relative overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(${P} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

        <div className="w-full max-w-[480px]">
          <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Server size={18} className="text-white/40" />
                <span className="text-[11px] font-black text-white uppercase tracking-widest">C9 Managed Edge Node</span>
              </div>
              <div className="flex gap-1">
                {[0,1,2].map(i => (
                  <motion.div 
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1 h-1 rounded-full bg-emerald-400" 
                  />
                ))}
              </div>
            </div>

            {/* Compact Port Activity */}
            <div className="grid grid-cols-12 gap-1.5 opacity-80">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-[2px] bg-white/5 border border-white/10 relative overflow-hidden">
                  <motion.div 
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{ duration: Math.random() * 4 + 1, repeat: Infinity }}
                    className="absolute inset-0 bg-[#5D00D6]" 
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
               <div className="flex gap-4">
                  <div className="flex flex-col">
                     <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Backbone</span>
                     <span className="text-[10px] font-bold text-white/80">FIBER_ACTIVE</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Failover</span>
                     <span className="text-[10px] font-bold text-white/80">READY</span>
                  </div>
               </div>
               <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-[#5D00D6] opacity-50 shadow-[0_0_10px_#5D00D6]"
                  />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MINIMALIST FOOTER TICKER */}
      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-tight">
          <ChevronRight size={10} className="text-[#5D00D6]" />
          <span>Operational Event: Global Config Sync Verified</span>
        </div>
        <div className="flex items-center gap-2">
           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Oversight 24/7</span>
           <div className="flex -space-x-1">
              {[1,2].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border border-white bg-slate-200 shadow-sm" />
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};
