'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Activity, Shield, Zap } from 'lucide-react';

// --- Background Component ---
const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Clean Grid Background Only */}
    <div 
      className="absolute inset-0 opacity-[0.4]" 
      style={{ 
        backgroundImage: `radial-gradient(#5D00D6 0.5px, transparent 0.5px)`,
        backgroundSize: '30px 30px',
      }} 
    />
  </div>
);

export default function Hero() {
  const scrollToComparison = () => {
    const el = document.getElementById('network-comparison');
    if(el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAssessment = () => {
    const el = document.getElementById('consultation-section');
    if(el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[85vh] bg-white flex items-center overflow-hidden py-20 lg:py-20">
      <BackgroundGrid />
      
      <div className="container relative z-10 mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            
            <h1 className="font-['Proxima_Nova'] font-bold text-[42px] lg:text-[62px] text-[#1A1A2E] leading-[1.05] mb-8 tracking-[-0.03em]">
              High-performance network solutions for <span className="text-[#5D00D6]">complex</span> organisations.
            </h1>
            
            <p className="font-['Proxima_Nova'] text-[19px] text-[#6B7280] leading-[1.65] max-w-[580px] mb-12 font-medium">
              C9 designs and delivers private network architectures for Australian businesses — from single sites to geographically distributed multi-location enterprises. We unify your infrastructure into a single, high-performance ecosystem.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-14">
              <Button 
                onClick={scrollToAssessment}
                className="bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-['Proxima_Nova'] font-bold h-15 px-10 rounded-full flex items-center gap-2 shadow-2xl shadow-purple-900/40 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">Get a Network Assessment</span> 
                <ArrowRight className="w-4 h-4 ml-1 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToComparison}
                className="border-gray-200 text-[#1A1A2E] font-['Proxima_Nova'] font-bold h-15 px-10 rounded-full bg-white hover:bg-slate-50 transition-all border-2"
              >
                Technical Options
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-x-10 gap-y-5 opacity-80">
              {[
                { icon: Activity, text: "SLA-Backed Uptime" },
                { icon: Shield, text: "Private & Partitioned" },
                { icon: Zap, text: "Zero-Latency Core" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-[#5D00D6]">
                    <item.icon size={16} strokeWidth={2.5} />
                  </div>
                  <span className="font-['Proxima_Nova'] text-[14px] text-slate-600 font-bold tracking-tight">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN - HIGH FIDELITY NETWORK VISUAL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-10"
          >
            {/* Visual Decorative Element */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#5D00D6]/20 via-blue-500/10 to-transparent rounded-[40px] blur-3xl -z-10 opacity-70" />
            
            <div className="bg-[#0A0A14] rounded-[32px] md:rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl shadow-[#5D00D6]/20 w-full aspect-square md:aspect-[4/3] flex items-center justify-center p-4">
               {/* Deep purple glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#5D00D6]/20 blur-[120px] rounded-full pointer-events-none" />
               
               {/* Ambient Grid bg */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
                 backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                 backgroundSize: '30px 30px' 
               }} />

               {/* SVG Routing Map Setup */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-[500px] max-h-[400px]">
                     
                     <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice">
                        {/* Define gradients for the paths */}
                        <defs>
                          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#5D00D6" stopOpacity="1" />
                            <stop offset="100%" stopColor="#9D72FF" stopOpacity="0.2" />
                          </linearGradient>
                        </defs>

                        {/* Path: Sydney (Top Left) to Core */}
                        <path d="M 120 100 Q 250 100 250 180" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
                        <motion.path 
                           d="M 120 100 Q 250 100 250 180" stroke="#5D00D6" strokeWidth="2.5" fill="none" strokeLinecap="round"
                           initial={{ pathLength: 0, opacity: 0 }} 
                           animate={{ pathLength: 1, opacity: 1 }} 
                           transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.circle r="3" fill="#fff" className="blur-[1px]">
                           <animateMotion dur="1.5s" repeatCount="indefinite" path="M 120 100 Q 250 100 250 180" />
                        </motion.circle>

                        {/* Path: Melbourne (Top Right) to Core */}
                        <path d="M 380 100 Q 250 100 250 180" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
                        <motion.path 
                           d="M 380 100 Q 250 100 250 180" stroke="#9D72FF" strokeWidth="2.5" fill="none" strokeLinecap="round"
                           initial={{ pathLength: 0, opacity: 0 }} 
                           animate={{ pathLength: 1, opacity: 1 }} 
                           transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                        />
                        <motion.circle r="3" fill="#9D72FF" className="blur-[1px]">
                           <animateMotion dur="2s" repeatCount="indefinite" path="M 380 100 Q 250 100 250 180" />
                        </motion.circle>

                        {/* Path: Core to Cloud */}
                        <path d="M 250 220 L 250 320" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                        <motion.path 
                           d="M 250 220 L 250 320" stroke="#10B981" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="4 4"
                           initial={{ pathLength: 1, opacity: 0 }} 
                           animate={{ pathLength: 0, opacity: 1 }} 
                           transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.circle r="3" fill="#10B981" className="blur-[1px]">
                           <animateMotion dur="1.2s" repeatCount="indefinite" path="M 250 320 L 250 220" />
                        </motion.circle>
                     </svg>

                     {/* Central Node: C9 Core */}
                     <motion.div 
                        animate={{ boxShadow: ["0 0 0px 0px rgba(93,0,214,0)", "0 0 40px 10px rgba(93,0,214,0.3)", "0 0 0px 0px rgba(93,0,214,0)"] }} 
                        transition={{ duration: 3, repeat: Infinity }} 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#161622] border-[1.5px] border-[#5D00D6]/50 rounded-2xl flex flex-col items-center justify-center shadow-2xl z-20"
                     >
                        <Shield size={20} className="text-[#5D00D6] mb-2" />
                        <span className="font-['Proxima_Nova'] font-black text-white text-[12px] tracking-widest uppercase">C9 Core</span>
                        <div className="w-12 h-0.5 mt-2 bg-gradient-to-r from-transparent via-[#9D72FF] to-transparent animate-pulse" />
                     </motion.div>
                     
                     {/* Top Left Node: Sydney */}
                     <div className="absolute top-[10%] left-[10%] w-24 h-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center flex-col z-20 gap-1 shadow-lg">
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Sydney HQ</span>
                        <span className="text-[9px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded">2ms LATENCY</span>
                     </div>

                     {/* Top Right Node: Melbourne */}
                     <div className="absolute top-[10%] right-[10%] w-24 h-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center flex-col z-20 gap-1 shadow-lg">
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Melbourne</span>
                        <span className="text-[9px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded">4ms LATENCY</span>
                     </div>

                     {/* Bottom Node: Cloud Provider */}
                     <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-32 h-16 bg-[#5D00D6]/10 backdrop-blur-md border border-[#5D00D6]/30 rounded-xl flex items-center justify-center flex-col z-20 gap-1 shadow-[0_10px_30px_rgba(93,0,214,0.15)]">
                        <span className="text-[10px] font-black text-[#9D72FF] uppercase tracking-widest">AWS / AZURE</span>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Direct Connect</span>
                     </div>

                  </div>
               </div>

               {/* UI Overlay Panels */}
               {/* Status Floating Pill */}
               <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-[#161622]/80 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 flex items-center gap-3 z-30 shadow-2xl">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_#10B981] animate-pulse" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-widest">Network Stable</span>
               </div>

               {/* Throughput Floating Pill */}
               <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-[#161622]/90 border border-[#5D00D6]/30 rounded-xl px-5 py-3 flex flex-col z-30 shadow-2xl shadow-purple-900/30 backdrop-blur-lg">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.25em] mb-1.5 flex items-center gap-1.5">
                     <Activity size={10} className="text-[#5D00D6]" /> Throughput
                  </span>
                  <div className="flex items-end gap-1.5">
                    <span className="font-mono text-[22px] text-white font-bold leading-none">9.8</span>
                    <span className="text-[12px] text-[#5D00D6] font-bold mb-0.5">Gbps</span>
                  </div>
               </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
