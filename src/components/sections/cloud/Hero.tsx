'use client';

import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Server, Globe, Shield, Database, RefreshCw } from "lucide-react";
import { useInquiry } from '@/components/context/InquiryContext';

const CloudMonitorVisual = () => {
  const [phase, setPhase] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPhase(p => (p + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const phases = [
    { label: "01 Discovery", desc: "Audit & Architecture", color: "#64748b" },
    { label: "02 Migration", desc: "Moving to C9 Cloud",   color: "#5D00D6" },
    { label: "03 Managed",   desc: "Ongoing Optimization", color: "#10b981" }
  ];

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-[40px] overflow-hidden shadow-[0_40px_80px_-16px_rgba(93,0,214,0.1)] border border-slate-100 relative p-6">
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex gap-1.5">
          {phases.map((p, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <div className={`h-1 w-16 rounded-full transition-colors duration-500 ${phase === i ? "bg-[#5D00D6]" : "bg-slate-100"}`} />
              {phase === i && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] font-bold text-[#5D00D6] uppercase tracking-wider">
                  {p.label}
                </motion.span>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F4F0FA] border border-[#5D00D6]/10">
          <RefreshCw size={12} className="text-[#5D00D6] animate-spin-slow" />
          <span className="text-[10px] font-bold text-[#5D00D6] uppercase tracking-widest">{phases[phase].desc}</span>
        </div>
      </div>

      <div className="flex-1 relative flex items-center justify-center mb-8 bg-slate-50/50 rounded-3xl border border-slate-100 scale-75 sm:scale-100 transition-transform duration-500">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div key="discovery" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200" />
                <Globe size={40} className="text-slate-400" />
                <motion.div animate={{ scale: [1, 1.5], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 border-2 border-[#5D00D6] rounded-full" />
              </div>
              <p className="mt-4 text-[13px] font-bold text-slate-500 uppercase tracking-widest">Auditing Infrastructure</p>
            </motion.div>
          )}

          {phase === 1 && (
            <motion.div key="migration" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full px-6 sm:px-12">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center text-slate-500">
                  <Database size={20} />
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#5D00D6] flex items-center justify-center text-white shadow-lg">
                  <Server size={20} />
                </div>
              </div>
              <div className="relative h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ left: ["-20%", "100%"] }} 
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 w-20 h-full bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent" 
                />
              </div>
              <p className="text-center mt-6 text-[13px] font-bold text-[#5D00D6] uppercase tracking-widest">Migrating Workloads</p>
            </motion.div>
          )}

          {phase === 2 && (
            <motion.div key="managed" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
               <div className="relative w-40 h-40 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-3xl bg-[#5D00D6] flex items-center justify-center text-white shadow-[0_20px_40px_rgba(93,0,214,0.3)] z-10">
                    <Shield size={32} />
                  </div>
                  {[0, 60, 120, 180, 240, 300].map(deg => (
                    <motion.div 
                      key={deg}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, delay: deg/100 }}
                      className="absolute w-2 h-2 rounded-full bg-[#5D00D6]"
                      style={{ transform: `rotate(${deg}deg) translateY(-60px)` }}
                    />
                  ))}
               </div>
               <p className="mt-4 text-[13px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 Managed & Optimized
               </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Network Load</p>
          <div className="flex items-end gap-1 h-8">
            {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
              <motion.div 
                key={i} 
                animate={{ height: [`${h}%`, `${h+10}%`, `${h}%`] }} 
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                className="flex-1 bg-slate-200 rounded-t-sm" 
              />
            ))}
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col justify-center">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">C9 Core Status</p>
           <p className="text-[16px] font-bold text-[#0c1024]">HEALTHY</p>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const { setInquiryMessage } = useInquiry();
  
  const handleProposalRequest = () => {
    setInquiryMessage("I'm interested in receiving a cloud proposal for my business.");
    const el = document.getElementById('consultation-section');
    if(el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSeeScope = () => {
    const el = document.getElementById('cloud-scope');
    if(el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-4 pb-8 md:pt-6 md:pb-10 lg:pt-8 lg:pb-12 bg-white overflow-hidden min-h-[450px] lg:min-h-[640px] flex items-center border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center relative z-10 w-full">
          <div className="py-4 pr-0 xl:pr-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h1 className="text-[36px] sm:text-[42px] md:text-[52px] lg:text-[58px] font-bold tracking-tight mb-6 text-[#0c1024] leading-[1.05]" >
                 Cloud infrastructure that <span className="text-[#5D00D6]" style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>actually works.</span>
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="text-[17px] md:text-[19px] lg:text-[20px] text-slate-600 mb-8 max-w-[580px] leading-relaxed font-normal" >
                C9 migrates Australian businesses to cloud and manages the environment ongoing — Microsoft 365, Azure, IaaS, private and hybrid cloud. Not a one-off project. A managed service with your data staying in Australia.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-8">
                <Button 
                  size="lg" 
                  onClick={handleProposalRequest}
                  className="w-full sm:w-auto shadow-2xl hover:gap-4 group bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-bold h-14 px-8 rounded-full border-none" 
                  
                >
                  Request a Cloud Proposal <ArrowRight className="transition-transform group-hover:translate-x-1 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                   size="lg" 
                  onClick={handleSeeScope}
                  className="w-full sm:w-auto border-gray-200 text-[#0c1024] font-bold h-14 px-8 rounded-full hover:bg-[#5D00D6] hover:text-white hover:border-[#5D00D6] bg-white transition-colors" 
                  
                >
                  See What We Manage
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <div className="flex flex-wrap gap-5 md:gap-8 mt-10 md:mt-12 pb-4">
                {[
                  "Microsoft 365 & Azure managed",
                  "Australian data centres",
                  "Migration + ongoing management"
                ].map((text, i) => (
                  <span key={i} className="flex items-center gap-2 text-[14px] font-bold text-slate-500 tracking-tight" >
                    <CheckCircle size={16} className="text-[#5D00D6]" /> {text}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="block w-full h-[450px] sm:h-[500px] mt-12 lg:mt-0">
            <CloudMonitorVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

