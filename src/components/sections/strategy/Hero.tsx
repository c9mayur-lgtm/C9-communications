'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, BarChart3, CalendarDays, Rocket, ShieldAlert, Globe, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % 3);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const scrollToEngagement = () => {
    const element = document.getElementById('engagement-model');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center bg-[#FDFDFF] overflow-hidden py-16 md:py-20 px-6 md:px-8 lg:px-12 border-b border-gray-50">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#5D00D6]/5 blur-[120px] rounded-lg pointer-events-none -z-1" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] bg-blue-50/30 blur-[100px] rounded-lg pointer-events-none -z-1" />

      <div className="container mx-auto max-w-[1240px] relative z-10 font-sans">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-start max-w-[580px]">
            {/* Tag/Pill removed as per request */}

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="c9-hero-title mb-6"
            >
              Your technology should be driving your business. <span className="text-[#5D00D6]">Not holding it back.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="c9-body mb-10 max-w-[500px]"
            >
              C9 provides professional vCIO advisory and a prioritised 12-month technology roadmap designed for long-term Australian business growth.
            </motion.p>

            {/* FULLY ROUNDED BUTTONS (Corrected to rounded-full) */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="flex flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button className="flex-1 sm:flex-none bg-[#5D00D6] hover:bg-[#4c00b0] text-white px-8 h-12 rounded-full font-bold transition-all duration-300 shadow-xl shadow-purple-900/30 group font-sans text-[14px]">
                Book Session <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" onClick={scrollToEngagement} className="flex-1 sm:flex-none text-[#0c1024] bg-white hover:bg-slate-50 border-[#5D00D6]/20 px-8 h-12 rounded-full font-bold transition-all font-sans text-[14px]">
                View Model
              </Button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - COMPACT MACBOOK MOCKUP */}
          <div className="relative w-full h-full flex items-center justify-center p-2">
            
            <motion.div 
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[640px] z-10"
            >
              
              {/* MacBook Top Lid (The Container) */}
              <div className="relative bg-[#0c1024] rounded-[24px] p-[10px] pb-[40px] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.3)] border border-white/5 transition-all">
                 
                 {/* Internal Screen Area */}
                 <div className="relative bg-[#ffffff] aspect-[16/10] rounded-[6px] overflow-hidden shadow-inner flex flex-col">
                    <div className="absolute inset-0 z-40 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-50 pointer-events-none" />

                    <AnimatePresence mode="wait">
                       {activeScreen === 0 && (
                         <motion.div
                           key="screen1"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.5 }}
                           className="absolute inset-0 p-6 md:p-8 flex flex-col h-full bg-[#fcfcff]"
                         >
                            <div className="flex justify-between items-center mb-8">
                               <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-2xl bg-[#5D00D6] flex items-center justify-center text-white shadow-lg">
                                     <CalendarDays size={20} />
                                  </div>
                                  <div className="flex flex-col">
                                     <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Strategic Planning</span>
                                     <span className="text-[18px] font-black text-[#0c1024] tracking-tight">12-Month Roadmap</span>
                                  </div>
                               </div>
                               <div className="bg-[#5D00D6]/5 text-[#5D00D6] px-4 py-1.5 rounded-xl border border-[#5D00D6]/10 flex items-center gap-2 font-bold text-[9px] uppercase shadow-sm">
                                  Q3 Active
                               </div>
                            </div>
                            
                            <div className="space-y-4 flex-1">
                               {[
                                 { l: "Security Remediation", p: 100, s: "Complete", c: "text-emerald-500" },
                                 { l: "Cloud Risk Governance", p: 68, s: "Active", c: "text-[#5D00D6]" },
                                 { l: "Project Transformation", p: 0, s: "Planning", c: "text-slate-300" }
                               ].map((item, i) => (
                                 <div key={i} className="flex flex-col gap-2">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest leading-none">
                                       <span className="text-slate-500">{item.l}</span>
                                       <span className={item.c}>{item.s}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-50 rounded-lg overflow-hidden border border-slate-100/50">
                                       <motion.div initial={{ width: 0 }} animate={{ width: `${item.p}%` }} transition={{ duration: 1.5, delay: 0.2 }} className={`h-full ${item.p === 100 ? 'bg-emerald-500' : 'bg-[#5D00D6]'}`} />
                                    </div>
                                 </div>
                               ))}
                            </div>
                         </motion.div>
                       )}

                       {activeScreen === 1 && (
                         <motion.div
                           key="screen2"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           className="absolute inset-0 p-8 flex flex-col h-full bg-[#ffffff]"
                         >
                            <div className="flex items-center gap-4 mb-8">
                               <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm">
                                  <ShieldCheck size={20} />
                               </div>
                               <div>
                                  <h4 className="text-[18px] font-black text-[#0c1024] tracking-tight leading-none mb-1">Security Posture</h4>
                                  <p className="text-[9px] text-emerald-500 font-bold uppercase tracking-widest leading-none mt-1">Status: Essential 8 Level 2</p>
                               </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 flex-1">
                               <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 flex flex-col justify-between">
                                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider mb-2 block">Risk Score</span>
                                  <span className="text-[20px] font-bold text-[#0c1024]">92/100</span>
                                  <div className="w-full h-1 bg-emerald-200 mt-2 rounded-lg" />
                               </div>
                               <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 flex flex-col justify-between">
                                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider mb-2 block">Mitigation Progress</span>
                                  <div className="flex gap-1 items-end h-6">
                                     {[3, 7, 4, 8, 2].map((h, i) => (
                                       <motion.div key={i} animate={{ height: [`${h * 10}%`, `${(h-2) * 10}%`, `${h * 10}%`] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }} className="flex-1 bg-emerald-100 rounded-t-[1px]" />
                                     ))}
                                  </div>
                               </div>
                            </div>
                         </motion.div>
                       )}

                       {activeScreen === 2 && (
                         <motion.div
                           key="screen3"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           className="absolute inset-0 p-8 flex flex-col h-full bg-[#fafbff]"
                         >
                            <div className="flex items-center gap-4 mb-8">
                               <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                                  <BarChart3 size={20} />
                               </div>
                               <div>
                                  <h4 className="text-[18px] font-black text-[#0c1024] tracking-tight leading-none mb-1">Executive Value</h4>
                                  <p className="text-[9px] text-blue-500 font-bold uppercase tracking-widest leading-none mt-1">+18% Optimization</p>
                               </div>
                            </div>
                            <div className="bg-white border border-slate-100/60 rounded-2xl p-6 shadow-sm flex-1 flex flex-col justify-center text-center">
                               <div className="grid grid-cols-3 gap-3 mb-4">
                                  <div className="flex flex-col">
                                     <span className="text-[16px] font-black text-[#0c1024]">$84k</span>
                                     <span className="text-[7px] font-bold text-slate-400 uppercase">Saved</span>
                                  </div>
                                  <div className="flex flex-col">
                                     <span className="text-[16px] font-black text-[#0c1024]">11</span>
                                     <span className="text-[7px] font-bold text-slate-400 uppercase">Vendors</span>
                                  </div>
                                  <div className="flex flex-col text-emerald-500">
                                     <span className="text-[16px] font-black">+14%</span>
                                     <span className="text-[7px] font-bold uppercase">ROI</span>
                                  </div>
                               </div>
                               <p className="text-[11px] text-slate-400 leading-tight">Consolidated licensing sprawl and optimized tenant costs for Q3.</p>
                            </div>
                         </motion.div>
                       )}
                    </AnimatePresence>
                 </div>

                 {/* MacBook Base Detail */}
                 <div className="absolute bottom-[0px] left-0 right-0 h-[40px] bg-[#0c1024] flex items-center justify-center">
                    <span className="text-white/20 text-[8px] font-bold uppercase tracking-[0.4em]">Strategic Board View</span>
                 </div>
                 
              </div>

              {/* Shadow Reflection */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[110%] h-16 bg-black/5 blur-[40px] pointer-events-none -z-1 opacity-60" />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
