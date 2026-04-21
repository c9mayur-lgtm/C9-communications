'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones, Shield, Globe, BarChart, Cloud, Activity, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInquiry } from '@/components/context/InquiryContext';

export default function Hero() {
  const { setInquiryMessage } = useInquiry();

  const handleProposalRequest = () => {
    setInquiryMessage("I'm interested in receiving a managed IT outsourcing proposal for my business.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToScope = () => {
    const element = document.getElementById('scope-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden pt-8 pb-24 px-6 md:px-8 lg:px-12 border-b border-gray-50">
      <div className="absolute top-0 right-[-10%] w-[60%] h-full bg-[#5D00D6]/5 blur-[120px] rounded-full pointer-events-none -z-1" />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-[#0027E2]/5 blur-[100px] rounded-full pointer-events-none -z-1" 
      />

      <div className="container mx-auto max-w-[1240px] relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center">
          
          <div className="flex flex-col items-start">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[36px] sm:text-[42px] md:text-[52px] lg:text-[56px] tracking-tight font-bold text-[#0c1024] leading-[1.1] mb-8 font-sans"
              
            >
              You didn't start a business to <span className="text-[#5D00D6]">manage IT.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18px] md:text-[20px] text-slate-600/90 max-w-[580px] leading-relaxed mb-12 font-normal font-sans"
              
            >
              C9 becomes your complete IT department — or replaces the one that's letting you down. Helpdesk, infrastructure, strategy, and security. All managed under one Aussie roof.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="flex flex-wrap gap-4 mb-16"
            >
              <Button 
                onClick={handleProposalRequest}
                className="bg-[#5D00D6] hover:bg-[#4c00b0] text-white px-10 h-14 rounded-none font-bold transition-all duration-300 shadow-2xl shadow-purple-900/30 group font-sans text-[16px]"
              >
                Request IT Proposal <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="ghost" onClick={handleScrollToScope} className="text-[#0c1024] hover:bg-slate-100 px-8 h-14 rounded-none font-bold transition-all font-sans text-[16px]">
                View Scope Details
              </Button>
            </motion.div>

            <div className="flex flex-col gap-5">
               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D00D6]/60">THE C9 PROMISE</span>
              <div className="flex flex-wrap gap-x-10 gap-y-4 items-center">
                {[
                  "Complete IT Governance",
                  "Australian Support Team",
                  "Fixed Monthly Pricing"
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#5D00D6]/10 flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                    </div>
                    <span className="text-[14px] text-slate-700 font-semibold font-sans">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex justify-end relative"
          >
            <div className="w-full max-w-[540px] aspect-square bg-white border border-gray-100 rounded-[48px] p-10 shadow-[0_32px_80px_-20px_rgba(93,0,214,0.12)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-50 rounded-full blur-[80px] -mr-32 -mt-32 opacity-60" />
              <div className="absolute bottom-0 left-0 w-[240px] h-[240px] bg-blue-50 rounded-full blur-[60px] -ml-20 -mb-20 opacity-60" />
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                  style={{ width: 180 + i * 40, height: 180 + i * 40 }}
                >
                  <motion.div 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className="w-2 h-2 bg-[#5D00D6] rounded-full blur-[2px]" 
                  />
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute top-8 left-8 z-30 flex flex-col gap-1.5 pointer-events-none"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Live Activity Log</span>
                </div>
                {[
                  { time: '14:02', text: 'Daily Backup Verified' },
                  { time: '14:05', text: 'Security Patch Deployed' },
                  { time: '14:12', text: 'Network Optimization' }
                ].map((log, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 2 + i * 0.5 }} className="flex gap-2 text-[8px] font-bold font-sans">
                    <span className="text-[#5D00D6]">{log.time}</span>
                    <span className="text-slate-500">{log.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                animate={{ boxShadow: ["0 0 0px 0px rgba(93,0,214,0)", "0 0 40px 10px rgba(93,0,214,0.15)", "0 0 0px 0px rgba(93,0,214,0)"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full border border-gray-100 shadow-2xl flex items-center justify-center z-20"
              >
                <div className="w-40 h-40 bg-[#5D00D6] rounded-full flex flex-col items-center justify-center text-white relative overflow-hidden group">
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                    <span className="text-[32px] font-black tracking-tighter">C9</span>
                  </motion.div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Operations</span>
                  <motion.div animate={{ top: ['-10%', '110%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-px bg-white/40 blur-[1px] shadow-[0_0_10px_white]" />
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1.5, opacity: 0 }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-white/20 rounded-full" />
                </div>
              </motion.div>

              {[
                { label: "Helpdesk", icon: <Headphones className="w-7 h-7" />, delay: 0, x: -140, y: -120, color: "text-blue-500" },
                { label: "Security", icon: <Shield className="w-7 h-7" />, delay: 1, x: 140, y: -90, color: "text-green-500" },
                { label: "Network", icon: <Globe className="w-7 h-7" />, delay: 2, x: 160, y: 70, color: "text-purple-500" },
                { label: "Strategy", icon: <BarChart className="w-7 h-7" />, delay: 3, x: -140, y: 80, color: "text-orange-500" },
                { label: "Cloud", icon: <Cloud className="w-7 h-7" />, delay: 4, x: 0, y: -180, color: "text-sky-500" },
              ].map((node, idx) => (
                <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1, x: node.x, y: node.y }} transition={{ duration: 0.8, delay: 0.5 + idx * 0.1 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
                  <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut", delay: node.delay }} className="flex flex-col items-center gap-2 group/node cursor-pointer">
                    <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl shadow-lg flex items-center justify-center group-hover/node:border-[#5D00D6] group-hover/node:shadow-purple-900/10 transition-all duration-300">
                      <div className={node.color}>{node.icon}</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1 border border-gray-100 rounded-full shadow-sm">
                      <span className="text-[11px] font-bold text-[#0c1024] uppercase tracking-wider">{node.label}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-none p-5 shadow-xl flex items-center justify-between z-30">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-green-500 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#0c1024]">Service Status: Active</div>
                    <div className="text-[11px] text-slate-500 font-normal tracking-tight">Australian Support Team Standby</div>
                  </div>
                </div>
                <div className="text-right">
                   <CheckCircle2 className="w-5 h-5 text-[#5D00D6] ml-auto mb-1" />
                   <div className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">99.9% Compliance</div>
                </div>
              </motion.div>
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.15]" viewBox="0 0 540 540">
                <circle cx="270" cy="270" r="180" fill="none" stroke="#5D00D6" strokeWidth="1" strokeDasharray="4 8" />
                <circle cx="270" cy="270" r="140" fill="none" stroke="#5D00D6" strokeWidth="0.5" />
                <line x1="270" y1="270" x2="130" y2="150" stroke="#5D00D6" strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="270" y1="270" x2="410" y2="180" stroke="#5D00D6" strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="270" y1="270" x2="130" y2="390" stroke="#5D00D6" strokeWidth="0.5" strokeDasharray="2 4" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

