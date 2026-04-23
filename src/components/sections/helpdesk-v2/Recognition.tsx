'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Server, AlertTriangle, CheckCircle2, ShieldCheck, Activity } from "lucide-react";

const fontStyle = { fontFamily: '"Proxima Nova", sans-serif' };

// --- INTERACTIVE VISUALS ---

const VisualOne = () => (
  // Fast Ticket Assignment & Resolution
  <div className="absolute inset-0 bg-[#f8fafc] flex flex-col items-center justify-center p-6 overflow-hidden w-full h-full">
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(93,0,214,0.06)_0,transparent_60%)]" />
     
     <motion.div 
       className="w-full max-w-[320px] bg-white rounded-xl shadow-xl shadow-purple-900/5 overflow-hidden flex flex-col relative z-10 border border-slate-100"
       initial={{ y: 20, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       exit={{ y: -20, opacity: 0 }}
       transition={{ duration: 0.5, ease: "easeOut" }}
     >
        {/* Header */}
        <div className="px-5 py-3 border-b border-slate-100 flex justify-between items-center bg-white">
           <div className="text-[11px] font-semibold text-[#0c1024] uppercase tracking-widest flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-sm" />
             C9 Service Desk
           </div>
           <div className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-semibold rounded-full border border-emerald-100 uppercase tracking-widest flex items-center gap-1">
             SLA MET
           </div>
        </div>
        
        {/* Chat / Ticket Body */}
        <div className="p-5 bg-slate-50/50 flex flex-col gap-4 relative">
           {/* Client Complaint Log */}
           <motion.div 
             className="bg-white p-3.5 rounded-lg shadow-sm border border-slate-200 self-start w-[90%]"
             initial={{ x: -20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 0.4 }}
           >
              <div className="flex justify-between items-center mb-2">
                 <span className="text-[9px] font-semibold text-red-600 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded uppercase tracking-wider">P1 Critical</span>
                 <span className="text-[9px] text-slate-500 font-semibold tracking-widest uppercase">00:03m ago</span>
              </div>
              <div className="text-[14px] font-medium text-[#0c1024] leading-tight">Server Outage at Main Office affecting 50+ staff members.</div>
           </motion.div>
           
           {/* C9 Response */}
           <motion.div 
             className="bg-[#5D00D6] p-4 rounded-lg shadow-md border border-[#5D00D6] text-white self-end w-[95%] relative overflow-hidden"
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.4, delay: 0.8 }}
           >
              {/* Shine effect */}
              <motion.div 
                className="absolute top-0 bottom-0 w-[50px] bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-12"
                initial={{ left: '-100%' }}
                animate={{ left: '200%' }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              />

              <div className="flex justify-between items-center mb-2.5 relative z-10">
                 <span className="text-[9px] font-semibold text-white bg-white/20 border border-white/10 px-1.5 py-0.5 rounded flex items-center gap-1.5 uppercase tracking-widest shadow-sm"><Users size={10}/> Pod Alpha Engineer</span>
                 <span className="text-[9px] text-[#e0ccff] font-semibold tracking-widest uppercase">Just Now</span>
              </div>
              <div className="text-[14px] font-medium leading-snug relative z-10 text-white">We've received the alert and are rebooting the cluster remotely. Estimated downtime remaining: 4 minutes. No action required on your end.</div>
           </motion.div>
        </div>
     </motion.div>
  </div>
);

const VisualTwo = () => (
  // Dedicated Teams & Instant Context (Light Theme)
  <div className="absolute inset-0 bg-[#f8fafc] flex items-center justify-center p-6 w-full h-full overflow-hidden">
     <div className="absolute inset-0 bg-[linear-gradient(to_right,#5D00D605_1px,transparent_1px),linear-gradient(to_bottom,#5D00D605_1px,transparent_1px)] bg-[size:16px_16px]" />
     
     <motion.div 
       className="w-full max-w-[420px] h-[280px] border border-slate-200 rounded-xl bg-white flex flex-col overflow-hidden relative shadow-xl shadow-purple-900/5 z-10"
       initial={{ scale: 0.95, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       exit={{ scale: 0.95, opacity: 0 }}
       transition={{ duration: 0.5, ease: "easeOut" }}
     >
         {/* Top Bar */}
         <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-300"/>
            <div className="w-2 h-2 rounded-full bg-slate-300"/>
            <div className="w-2 h-2 rounded-full bg-slate-300"/>
            <div className="ml-3 h-4 w-40 bg-white border border-slate-200 rounded flex items-center px-2 shadow-sm">
               <div className="text-[7px] text-[#5D00D6] font-semibold uppercase tracking-widest">C9 AI / Context Engine</div>
            </div>
         </div>
         {/* Internal Dashboard */}
         <div className="flex-1 p-5 flex gap-5 h-full bg-white">
            {/* Caller Info */}
            <div className="w-[45%] flex flex-col gap-4 border-r border-slate-100 pr-5 h-full">
               <motion.div 
                 className="flex items-center gap-3"
                 initial={{ x: -20, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
               >
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 shadow-sm">
                     <span className="font-semibold text-xs uppercase tracking-widest">JD</span>
                  </div>
                  <div className="flex flex-col">
                     <div className="text-[14px] font-semibold text-[#0c1024] leading-tight">John Doe</div>
                     <div className="flex items-center gap-1 mt-0.5">
                       <Activity size={8} className="text-emerald-500" />
                       <div className="text-[8px] text-emerald-600 font-semibold tracking-widest uppercase truncate">Incoming Call...</div>
                     </div>
                  </div>
               </motion.div>
               <motion.div 
                 className="border border-[#5D00D6]/10 rounded-lg bg-[#fcfaff] p-3 text-xs flex flex-col gap-2 shadow-sm"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.4 }}
               >
                  <div className="text-[#5D00D6] uppercase text-[8px] font-semibold tracking-widest">Active Flags</div>
                  <div className="text-red-700 font-medium bg-red-50 border border-red-100 px-2 py-1 rounded text-[10px] truncate shadow-sm">VPN Edge Firewall - Port 443 Limit</div>
               </motion.div>
            </div>
            
            {/* Quick Actions */}
            <div className="flex-1 flex flex-col">
               <motion.div 
                 className="text-[8px] font-semibold text-[#5D00D6] uppercase tracking-widest mb-3"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.6 }}
               >Context Pre-loaded</motion.div>
               <div className="flex flex-col gap-1.5 mb-auto">
                  {[
                    'Site: Melbourne HQ (Local)', 
                    'Gateway: Fortinet 60F Edge', 
                    'Endpoint: Mac MDM Verified'
                  ].map((tag, i) => (
                      <motion.div 
                        key={i}
                        className="px-2 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-[#0c1024] text-[10px] font-medium flex items-center gap-2 shadow-sm"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + (i * 0.1) }}
                      >
                         <ShieldCheck size={10} className="text-emerald-500 shrink-0" />
                         {tag}
                      </motion.div>
                  ))}
               </div>
               
               <motion.div 
                 className="w-full bg-[#5D00D6] rounded-md shadow-md py-2 px-3 flex justify-center items-center mt-4 border border-[#5D00D6] hover:bg-[#4a00b0] transition-colors cursor-default"
                 initial={{ y: 10, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 1.4 }}
               >
                  <span className="text-[10px] font-semibold text-white tracking-widest uppercase">Accept Call & Connect</span>
               </motion.div>
            </div>
         </div>
     </motion.div>
  </div>
);

const VisualThree = () => (
  // Root Cause VS Symptom patching
  <div className="absolute inset-0 bg-slate-50 flex items-center justify-center p-6 w-full h-full overflow-hidden relative">
     <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px]" />
     
     <div className="w-[85%] max-w-[340px] flex items-center gap-6 z-10 relative h-full">
        {/* Cause / Node */}
        <div className="flex-1 h-full flex items-center">
            <motion.div 
              className="w-full bg-white rounded-[20px] shadow-xl border border-slate-200 p-5 flex flex-col items-center gap-3 relative z-20"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
               {/* Red Alert to Green Secure state transformation */}
               <motion.div 
                 className="w-16 h-16 rounded-full flex items-center justify-center mb-1 relative"
                 animate={{ 
                   backgroundColor: ['#fef2f2', '#fef2f2', '#ecfdf5', '#ecfdf5'], 
                   borderColor: ['#fecaca', '#fecaca', '#a7f3d0', '#a7f3d0'], 
                   borderWidth: ['2px', '2px', '2px', '2px'] 
                 }}
                 transition={{ duration: 3, times: [0, 0.4, 0.6, 1], ease: "easeInOut", repeat: Infinity }}
               >
                 <motion.div
                    animate={{ rotateY: [0, 0, 180, 180] }}
                    transition={{ duration: 3, times: [0, 0.4, 0.6, 1], ease: "easeInOut", repeat: Infinity }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="w-full h-full flex items-center justify-center absolute inset-0"
                 >
                    <AlertTriangle size={24} className="text-red-500 absolute" style={{ backfaceVisibility: 'hidden' }} />
                    <Server size={24} className="text-emerald-500 absolute rotate-y-180" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} />
                 </motion.div>
               </motion.div>
               <div className="text-center">
                  <div className="text-[14px] font-semibold text-slate-800 leading-tight">Switch Controller</div>
                  <div className="h-4 relative w-full flex items-center justify-center mt-1">
                      <motion.div 
                        className="text-[9px] font-bold text-red-500 absolute uppercase tracking-widest whitespace-nowrap"
                        animate={{ opacity: [1, 1, 0, 0] }}
                        transition={{ duration: 3, times: [0, 0.4, 0.5, 1], repeat: Infinity }}
                      >Memory Leak Warning</motion.div>
                      <motion.div 
                        className="text-[9px] font-bold text-emerald-500 absolute uppercase tracking-widest whitespace-nowrap"
                        animate={{ opacity: [0, 0, 1, 1] }}
                        transition={{ duration: 3, times: [0, 0.5, 0.6, 1], repeat: Infinity }}
                      >Firmware Patched</motion.div>
                  </div>
               </div>
            </motion.div>
        </div>

        {/* Symptoms Eliminated Dropdown */}
        <div className="flex-1 flex flex-col justify-center relative">
           {/* Lines connecting symptoms to root cause */}
           <div className="absolute top-1/2 -left-3 w-3 h-px bg-emerald-300" />
           <div className="absolute top-[35%] -left-3 w-3 h-[15%] border-l border-t border-emerald-300 rounded-tl" />
           <div className="absolute bottom-[35%] -left-3 w-3 h-[15%] border-l border-b border-emerald-300 rounded-bl" />
           
           <div className="flex flex-col gap-2.5 w-full items-end z-20 translate-x-2">
               {['VOIP STABLE', 'WIFI CONNECTED', 'VPN SECURE'].map((symptom, i) => (
                 <motion.div 
                   key={i} 
                   className="bg-white border w-full border-slate-200 pl-2 pr-3 py-2 rounded-lg shadow-sm text-[9px] font-semibold text-slate-600 flex items-center gap-2 relative"
                   initial={{ x: 20, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.6 + (i * 0.15) }}
                 >
                   <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                   <span className="truncate uppercase tracking-widest">{symptom}</span>
                 </motion.div>
               ))}
           </div>
        </div>
     </div>
  </div>
);

// Tab Data Configuration
const OVERCOME_CHALLENGES = [
  {
    id: 0,
    complaint: "Tickets vanish into a black hole",
    quote: "We log a ticket and hear nothing for days. We have to constantly chase up simple issues just to get an ETA.",
    c9Way: "Our SLAs guarantee response times within 15 minutes for critical issues. Every ticket is logged, prioritized, and immediately assigned to a local engineer with full visibility on its timeline.",
    visual: <VisualOne />,
  },
  {
    id: 1,
    complaint: "Explaining everything from scratch",
    quote: "Every time we call, we talk to a different person and have to explain our entire network setup all over again.",
    c9Way: "We assign dedicated multi-tier engineering pods to your account. When you call, you speak to an expert who already knows your infrastructure, history, and staff by name — instantly loading your diagnostic context.",
    visual: <VisualTwo />,
  },
  {
    id: 2,
    complaint: "Fixing symptoms, ignoring causes",
    quote: "Our IT support fixes the immediate symptom — like restarting a stuck server — but the actual problem happens again next week.",
    c9Way: "We deploy proactive monitoring and perform root-cause analysis on recurring issues. Our goal isn't just to close the current ticket; it's to permanently patch the underlying fault so it never happens again.",
    visual: <VisualThree />,
  }
];

export default function Recognition() {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-changing logic for the interactive accordion
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % OVERCOME_CHALLENGES.length);
    }, 6000); // 6 seconds per slide

    return () => clearInterval(interval);
  }, [activeTab, isHovered]);

  return (
    <section 
      className="w-full bg-white py-10 md:py-14 border-y border-gray-100"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        {/* Top Header */}
        <div className="text-center md:text-left max-w-2xl mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#5D00D6] text-[12px] font-bold uppercase tracking-[0.3em] mb-4 block" style={fontStyle}
          >
            SOUND FAMILIAR?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[40px] font-bold text-[#0c1024] leading-[1.15] tracking-tight" style={fontStyle}
          >
            Most businesses switch to us after facing the exact same frustrations.
          </motion.h2>
        </div>

        {/* Dynamic Split Layout - Set to a tall fixed min-height to preserve viewport stability */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch lg:min-h-[660px]">
            
            {/* Left Box: Animated Visuals - Fills height of stretched row on desktop */}
            <div className="w-full lg:w-[55%] h-[400px] md:h-[500px] lg:min-h-[660px] bg-slate-100 rounded-[20px] overflow-hidden relative shadow-inner border border-gray-100">
               <AnimatePresence mode="wait">
                  <motion.div 
                     key={activeTab}
                     className="absolute inset-0 w-full h-full"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.4 }}
                  >
                     {OVERCOME_CHALLENGES[activeTab].visual}
                  </motion.div>
               </AnimatePresence>
            </div>

            {/* Right Box: Interactive Accordion Tabs - Fixed height to match visuals and avoid shifts */}
            <div className="w-full lg:w-[45%] flex flex-col h-full lg:min-h-0 min-h-[500px]">
               {OVERCOME_CHALLENGES.map((tab, idx) => {
                 const isActive = activeTab === idx;
                 
                 return (
                   <div 
                     key={idx} 
                     onClick={() => setActiveTab(idx)}
                     className={`cursor-pointer transition-all duration-500 py-6 md:py-8 border-t-[2px] first:border-t-[2px] flex flex-col relative group ${isActive ? 'border-transparent' : 'border-gray-100 hover:border-gray-200'}`}
                   >
                      {/* Timer Progress Line (Only animates if active and not paused) */}
                      {isActive && (
                        <motion.div 
                          className="absolute top-[-2px] left-0 h-[2px] bg-[#5D00D6] z-10"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ 
                            duration: isHovered ? 0 : 6, 
                            ease: "linear" 
                          }}
                          key={`timer-${activeTab}-${isHovered}`}
                        />
                      )}
                      
                      {/* Background track for the active tab */}
                      {isActive && (
                        <div className="absolute top-[-2px] left-0 h-[2px] bg-[#5D00D6]/10 w-full z-0" />
                      )}

                      {/* Softened tab headers */}
                      <h3 
                        className={`text-[20px] md:text-[22px] tracking-tight transition-colors duration-300 mb-1 ${isActive ? 'text-[#0c1024] font-semibold' : 'text-slate-500 font-medium group-hover:text-slate-800'}`} 
                        style={fontStyle}
                      >
                        {tab.complaint}
                      </h3>
                      
                      {/* Animated expansion body */}
                      <AnimatePresence initial={false}>
                         {isActive && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                              className="overflow-hidden"
                            >
                               <div className="pt-3 pb-2 text-left">
                                  {/* The quote/complaint reference - Softened font */}
                                  <div className="mb-6 border-l-[3px] border-[#5D00D6]/20 pl-4 py-0.5">
                                     <p className="text-[14px] font-medium text-slate-500 italic font-serif leading-relaxed">
                                       "{tab.quote}"
                                     </p>
                                  </div>
                                  
                                  {/* C9 Solution */}
                                  <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-5 relative mt-3 shadow-sm">
                                     <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#5D00D6] text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-sm">The C9 Solution</div>
                                     {/* Softened body text */}
                                     <p className="text-[14px] leading-relaxed text-slate-600 font-medium" style={fontStyle}>
                                       {tab.c9Way}
                                     </p>
                                  </div>
                               </div>
                            </motion.div>
                         )}
                      </AnimatePresence>
                   </div>
                 );
               })}
            </div>
        </div>
      </div>
    </section>
  );
}
