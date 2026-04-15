'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Eye, FileText, Activity } from 'lucide-react';

const MonitoringVisual = () => (
  <div className="relative w-full h-[400px] bg-[#161622] rounded-[40px] border border-white/5 overflow-hidden shadow-2xl p-8 group">
    {/* Grid Overlay */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
      backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
      backgroundSize: '30px 30px'
    }} />
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em]">Live network stream</span>
        </div>
        <Badge className="bg-emerald-500/10 text-emerald-500 border-none text-[10px] uppercase font-black">All systems operational</Badge>
      </div>

      {/* Animated Waveform / Activity */}
      <div className="flex-1 flex items-end gap-[3px] h-32 mb-10 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: 20 }}
            animate={{ height: [20, Math.random() * 80 + 20, 20] }}
            transition={{ duration: 1.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
            className="w-full bg-gradient-to-t from-[#5D00D6] to-[#8B5CF6] rounded-t-sm opacity-60"
          />
        ))}
      </div>

      {/* Nodes / Status List */}
      <div className="space-y-4">
        {[
          { label: "SYD-CORE-01", status: "Active", time: "1.2ms" },
          { label: "MEL-SDW-HQ", status: "Active", time: "2.4ms" },
          { label: "BNE-MPLS-PE", status: "Active", time: "4.8ms" }
        ].map((node, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="flex items-center justify-between p-3.5 bg-white/5 rounded-xl border border-white/5 hover:border-[#5D00D6]/40 transition-colors group/node"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#5D00D6]/20 flex items-center justify-center text-[#5D00D6]">
                <Activity size={14} />
              </div>
              <span className="text-[13px] font-bold text-white group-hover/node:text-[#5D00D6] transition-colors">{node.label}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-medium text-slate-500">{node.time}</span>
              <div className="px-2 py-0.5 bg-emerald-500/10 rounded text-emerald-500 text-[10px] font-bold uppercase tracking-widest">{node.status}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Hover highlight overlay */}
    <div className="absolute inset-0 bg-[#5D00D6]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
  </div>
);

export default function MonitoringBlock() {
  return (
    <section className="relative w-full bg-[#0A0A14] py-20 px-6 overflow-hidden">
      {/* Structural decoration */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#5D00D6]/5 to-transparent blur-3xl opacity-40" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-20 items-center">
          
          <div className="text-left text-white max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-[#5D00D6] text-white font-['Proxima_Nova'] text-[11px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-8 border-none shadow-lg shadow-purple-900/20">
                Continuous Managed Monitoring
              </Badge>
              
              <h2 className="font-['Proxima_Nova'] text-[40px] md:text-[52px] lg:text-[56px] font-bold mt-4 leading-[1.05] tracking-tight">
                Proactive eyes on your <span className="text-[#5D00D6]">private core</span> — before issues become incidents.
              </h2>
              
              <div className="mt-10 space-y-8">
                <p className="font-['Proxima_Nova'] text-[19px] text-[#A0A0B0] leading-[1.7] font-medium max-w-xl">
                  C9 monitors your private network continuously — diagnosing and resolving anomalies before they impact your business performance.
                </p>
                <div className="flex flex-col gap-5">
                   <div className="flex gap-4 items-start">
                      <div className="w-1.5 h-12 bg-white/10 rounded-full" />
                      <p className="font-['Proxima_Nova'] text-[17px] text-[#808090] leading-[1.65] font-medium italic">
                        "Full configuration history audits mean every part of your network is accounted for — when something changes, we know exactly why."
                      </p>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 mt-14 pt-10 border-t border-white/5">
                {[
                  "Continuous proactive monitoring",
                  "Issue detection & resolution",
                  "Full config documentation",
                  "Performance & capacity tracking",
                  "24/7 technical helpdesk",
                  "Monthly network health report"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center group">
                    <CheckCircle size={16} className="text-[#5D00D6] shrink-0" />
                    <span className="font-['Proxima_Nova'] text-[15.5px] text-white/90 font-bold leading-tight tracking-tight group-hover:text-white group-hover:translate-x-1 duration-300 transition-all">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <MonitoringVisual />
            
            <div className="mt-8 flex flex-col gap-4">
               <div className="p-6 bg-[#161622] rounded-[24px] border border-white/5 hover:border-[#5D00D6]/40 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#5D00D6] group-hover:scale-110 transition-transform">
                      <FileText size={22} />
                    </div>
                    <div>
                       <h5 className="text-[16px] font-bold text-white mb-0.5 tracking-tight group-hover:text-purple-300 transition-colors">Config history & audits</h5>
                       <p className="text-[13px] text-slate-500 font-medium">Automatic change detection logs</p>
                    </div>
                  </div>
                  <CheckCircle className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
