'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, ShieldCheck, Activity, Cpu } from 'lucide-react';

const P = '#5D00D6';
const ease = [0.22, 1, 0.36, 1];

export const InfrastructureBackboneVisual = () => {
  return (
    <div className="relative w-full h-[540px] bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl group">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />

      <div className="p-10 relative h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/10 flex items-center justify-center border border-[#5D00D6]/20">
                 <Server size={20} className="text-[#5D00D6]" />
              </div>
              <div>
                 <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Backbone Status</span>
                 <span className="block text-[14px] font-black text-slate-900 uppercase">Resilient Architecture</span>
              </div>
           </div>
           <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-600 uppercase">99.999% Active</span>
           </div>
        </div>

        {/* Animated Racks / Server Simulation */}
        <div className="grid grid-cols-2 gap-6 flex-grow">
           {[1, 2].map((rack) => (
             <div key={rack} className="bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col relative overflow-hidden group/rack">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#5D00D6] opacity-[0.02] rounded-full blur-3xl -mr-16 -mt-16" />
                
                <div className="flex items-center justify-between mb-6">
                   <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Rack Unit 0{rack}</span>
                   <Cpu size={14} className="text-slate-300" />
                </div>

                <div className="space-y-3 flex-grow">
                   {[...Array(6)].map((_, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 + rack * 0.5 }}
                        className="h-2 w-full bg-white rounded-full flex items-center px-1 overflow-hidden border border-slate-100/50"
                     >
                        <div className="h-full bg-[#5D00D6]/20 rounded-full w-full relative">
                           <motion.div 
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5D00D6]/40 to-transparent w-1/2"
                           />
                        </div>
                     </motion.div>
                   ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/50 flex justify-between items-center">
                   <div className="flex gap-1.5">
                      {[...Array(4)].map((_, i) => (
                        <motion.div 
                           key={i}
                           animate={{ backgroundColor: ['#10b981', '#059669', '#10b981'] }}
                           transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                           className="w-1.5 h-1.5 rounded-full"
                        />
                      ))}
                   </div>
                   <span className="text-[10px] font-black text-slate-400 uppercase">LOAD: {20 + Math.floor(Math.random() * 10)}%</span>
                </div>
             </div>
           ))}
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-8 grid grid-cols-3 gap-4">
           {[
             { label: 'Compute', val: 'Optimized', icon: <Cpu size={14} /> },
             { label: 'Storage', val: 'Immutable', icon: <Database size={14} /> },
             { label: 'Security', val: 'Protected', icon: <ShieldCheck size={14} /> }
           ].map((m, i) => (
             <div key={i} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className="text-[#5D00D6] mb-1.5">{m.icon}</div>
                <div className="text-[9px] font-bold text-slate-400 uppercase mb-0.5">{m.label}</div>
                <div className="text-[11px] font-black text-slate-900">{m.val}</div>
             </div>
           ))}
        </div>
      </div>

      {/* Floating Status Card */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 z-30">
         <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#0c1024] p-5 rounded-2xl shadow-2xl border border-white/10 max-w-[180px]"
         >
            <div className="flex items-center gap-2 mb-3">
               <Activity size={14} className="text-emerald-400" />
               <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">Real-time IO</span>
            </div>
            <div className="space-y-1.5 mb-4">
               {[...Array(4)].map((_, i) => (
                 <div key={i} className="flex gap-1 h-4 items-end">
                    {[...Array(12)].map((_, j) => (
                      <motion.div 
                        key={j}
                        animate={{ height: [`${20 + Math.random() * 80}%`, `${20 + Math.random() * 80}%`] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="flex-1 bg-[#5D00D6]/40 rounded-t-[1px]"
                      />
                    ))}
                 </div>
               ))}
            </div>
            <div className="text-[12px] font-black text-white leading-none">SYNC COMPLETE</div>
         </motion.div>
      </div>
    </div>
  );
};
