'use client';

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, HardDrive, Wifi, Activity, ShieldCheck, Globe } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

const InfraMonitorVisual = () => {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-[40px] overflow-hidden shadow-[0_40px_80px_-16px_rgba(93,0,214,0.1)] border border-slate-100 p-5 md:p-6 pb-6 relative">
      <div className="flex justify-between items-center mb-6 relative z-10 w-full shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0">
            <Activity size={18} className="text-[#5D00D6]" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">C9 Managed Infrastructure</p>
            <p className="text-[14px] font-bold text-[#1A1A2E]">Systems Online</p>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        </div>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-4 relative z-10 h-full min-h-0">
        <div className="col-span-2 bg-[#F8FAFC] rounded-[24px] border border-slate-100 p-5 relative overflow-hidden flex flex-col justify-center items-center min-h-[140px] shadow-inner">
          <p className="absolute top-4 left-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Network Edge</p>
          <div className="w-full max-w-[280px] h-[80px] relative mt-6">
             <div className="absolute top-0 left-0 w-12 h-12 bg-white rounded-xl shadow border border-slate-200 flex items-center justify-center z-10">
               <Globe size={20} className="text-slate-400" />
             </div>
             <div className="absolute top-0 right-0 w-12 h-12 bg-[#5D00D6] rounded-xl shadow border border-[#5D00D6] flex items-center justify-center z-10">
               <Wifi size={20} className="text-white" />
             </div>
             <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-14 h-14 bg-[#1A1A2E] rounded-2xl shadow-lg shadow-black/10 border border-[#1A1A2E] flex items-center justify-center z-10">
               <HardDrive size={24} className="text-white" />
             </div>
             <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
               <path d="M 24 48 Q 24 85, 140 85" stroke="#CBD5E1" strokeWidth={2} strokeDasharray="4 4" fill="none" />
               <motion.path d="M 24 48 Q 24 85, 140 85" stroke="#5D00D6" strokeWidth={2} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity }} />
               <path d="M 256 48 Q 256 85, 140 85" stroke="#CBD5E1" strokeWidth={2} strokeDasharray="4 4" fill="none" />
               <motion.path d="M 256 48 Q 256 85, 140 85" stroke="#10B981" strokeWidth={2} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
             </svg>
          </div>
        </div>

        <div className="bg-[#1A1A2E] rounded-[24px] border border-slate-800 p-5 relative overflow-hidden flex flex-col justify-end min-h-[140px] shadow-lg">
          <p className="absolute top-4 left-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Compute Core</p>
          <div className="flex items-end gap-1.5 h-16 w-full pt-6 relative z-10">
            {[40, 65, 45, 80, 50, 60, 90, 70].map((h, i) => (
              <motion.div key={i} animate={{ height: [`${h}%`, `${h+15}%`, `${h}%`] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }} className="flex-1 bg-[#5D00D6] rounded-t-sm opacity-80" />
            ))}
          </div>
        </div>

        <div className="bg-[#F8FAFC] rounded-[24px] border border-slate-100 p-5 relative overflow-hidden flex flex-col justify-end min-h-[140px] shadow-sm">
          <p className="absolute top-4 left-5 text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5 whitespace-nowrap">
            <ShieldCheck size={14} className="text-emerald-500" /> Active Defences
          </p>
          <div className="flex flex-col gap-2 mt-8 w-full relative z-10">
            {[ { label: "IP blocked", time: "Just now", color: "bg-red-400" }, { label: "Scan averted", time: "2m ago", color: "bg-emerald-400" }, { label: "Backup OK", time: "5m ago", color: "bg-[#5D00D6]" } ].map((log, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.3 }} className="flex items-center justify-between py-1 border-b border-slate-200 last:border-0">
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${log.color}`} />
                  <span className="text-[11px] font-bold text-slate-600 truncate">{log.label}</span>
                </div>
                <span className="text-[9px] font-bold text-slate-400 shrink-0">{log.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const { setInquiryMessage } = useInquiry();

  const handleAssessmentRequest = () => {
    setInquiryMessage("I'm interested in an expert infrastructure assessment for our business to optimize our server, storage, and networking setup.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToInfraScope = () => {
    const element = document.getElementById('infra-scope');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-4 pb-8 md:pt-6 md:pb-10 lg:pt-8 lg:pb-12 bg-white overflow-hidden min-h-[450px] lg:min-h-[640px] flex items-center border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center relative z-10 w-full">
          <div className="py-4 pr-0 xl:pr-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h1 className="text-[36px] sm:text-[42px] md:text-[52px] lg:text-[54px] font-bold tracking-tight mb-6 text-[#1A1A2E] leading-none lg:leading-[1.05]" >
                The infrastructure your business runs on — <span className="text-[#5D00D6]">designed, deployed, and managed by C9.</span>
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="text-[17px] md:text-[19px] lg:text-[20px] text-slate-600 mb-8 max-w-[580px] leading-relaxed font-normal" >
                 C9 builds and manages IT infrastructure for Australian businesses — servers, storage, networking, cloud, security, and backup. Not a one-off project. A fully managed environment with Australian support and a team that owns the outcome.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-8">
                <Button onClick={handleAssessmentRequest} size="lg" className="w-full sm:w-auto shadow-2xl hover:gap-4 bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-bold h-14 px-8 rounded-full border-none text-[14px]" >
                  Get an Infrastructure Assessment 
                </Button>
                <Button variant="outline" size="lg" onClick={scrollToInfraScope} className="w-full sm:w-auto border-gray-200 text-[#0c1024] font-bold h-14 px-8 rounded-full hover:bg-[#5D00D6] hover:text-white hover:border-[#5D00D6] bg-white transition-colors text-[14px]" >
                  See What We Manage
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <div className="flex flex-wrap gap-5 md:gap-8 mt-10 md:mt-12 pb-4">
                {[ "Design, deploy and manage", "Australian-based team", "HP, Dell and Microsoft partners" ].map((text, i) => (
                  <span key={i} className="flex flex-row items-center gap-2 text-[14px] font-bold text-slate-500 tracking-tight" >
                    <CheckCircle size={12} className="text-[#5D00D6]" /> {text}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="block w-full h-[450px] sm:h-[500px] mt-12 lg:mt-0">
            <InfraMonitorVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

