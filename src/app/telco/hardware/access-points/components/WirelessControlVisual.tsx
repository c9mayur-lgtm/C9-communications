'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Shield, Activity, Radio, Users, Zap } from 'lucide-react';

export const WirelessControlVisual = () => {
  const [signalStrength, setSignalStrength] = useState(99);
  const [activeClients, setActiveClients] = useState(142);

  useEffect(() => {
    const interval = setInterval(() => {
      setSignalStrength(prev => Math.max(95, Math.min(100, prev + (Math.random() * 2 - 1))));
      setActiveClients(prev => Math.max(130, Math.min(160, prev + Math.floor(Math.random() * 5 - 2))));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px] bg-[#f8f9fa] rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden flex flex-col font-sans relative">
      
      {/* Background with abstract grid and gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-slate-100 opacity-60 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

      {/* Top Header Bar */}
      <div className="px-6 py-4 border-b border-white/50 flex items-center justify-between bg-white/80 backdrop-blur-md relative z-20">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Global AP Fabric</span>
        </div>
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2">
              <Shield size={14} className="text-emerald-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hidden sm:inline">WPA3 Active</span>
           </div>
           <div className="flex items-center gap-2">
              <Activity size={14} className="text-[#5D00D6]" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hidden sm:inline">Auto-Optimize</span>
           </div>
        </div>
      </div>

      {/* Main Visual Area */}
      <div className="flex-1 relative flex items-center justify-center p-8">
        
        {/* Animated Signal Waves behind AP */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 2.5 + ring * 0.5, opacity: [0, 0.15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: ring * 1.2, ease: "linear" }}
            className="absolute rounded-full border border-[#5D00D6] aspect-square w-[200px]"
          />
        ))}

        {/* Hardware Image Container */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-64 h-64 flex items-center justify-center"
        >
          <div className="w-56 h-56 flex items-center justify-center relative">
             <img 
               src="/images/hardware/unifi-ap.png" 
               alt="Enterprise Access Point" 
               className="w-full h-full object-contain drop-shadow-2xl scale-[1.2]" 
             />
             {/* Center LED Indicator */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] animate-pulse mix-blend-screen" />
          </div>
        </motion.div>

        {/* Floating Stat Card 1: Performance */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-4 sm:left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100/50 z-20"
        >
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#5D00D6]/10 text-[#5D00D6] flex items-center justify-center shrink-0">
                 <Radio size={14} />
              </div>
              <div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Signal Integrity</div>
                 <div className="text-lg font-black text-slate-900">{signalStrength.toFixed(1)}%</div>
              </div>
           </div>
        </motion.div>

        {/* Floating Stat Card 2: Density */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-16 right-4 sm:right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100/50 z-20"
        >
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                 <Users size={14} />
              </div>
              <div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Clients</div>
                 <div className="text-lg font-black text-slate-900">{activeClients}</div>
              </div>
           </div>
        </motion.div>

        {/* Floating Badge: Load Balance */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute top-1/2 left-8 -translate-y-1/2 px-4 py-2 bg-slate-900 text-white rounded-full shadow-lg flex items-center gap-2 z-20 hidden md:flex"
        >
           <Zap size={12} className="text-amber-400" />
           <span className="text-[10px] font-bold uppercase tracking-widest">Load Balanced</span>
        </motion.div>
      </div>
      
    </div>
  );
};
