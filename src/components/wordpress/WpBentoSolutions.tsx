'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MonitorPlay, Monitor, Camera, LayoutGrid, 
  ShieldCheck, BadgeCheck, ArrowRight, Video, 
  Cpu, Smartphone, Laptop, Settings, Lock,
  Mic, MonitorUp, PhoneOff, User, Mail, FileText,
  PieChart, Calendar, Bell, Info, ShieldAlert, SmartphoneNfc,
  Search, ScanLine, Activity, Zap
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as any;

export const WpBentoSolutions = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-[#F8FAFC] overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        {/* Section Header */}
        <div className="flex flex-col mb-12 max-w-2xl px-2 text-left">
          <span className="c9-eyebrow mb-3 block">
            COMPLETE WORKPLACE MANAGEMENT
          </span>
          <h2 className="c9-section-heading text-[#0c1024] mb-6">
            Your entire workplace.<br />Managed from one place.
          </h2>
          <p className="c9-body !text-gray-500">
            From the boardroom screen to the front-door camera — C9 manages every layer so your team can focus on work.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="flex flex-col gap-6">
          
          {/* Top Row: 2 Equal Width Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Meeting Rooms & Displays */}
            <div className="bg-white rounded-[40px] p-8 border border-gray-100 flex flex-col overflow-hidden group min-h-[520px] shadow-sm relative transition-all hover:shadow-xl hover:shadow-[#5D00D6]/5">
              
              {/* Visual Container - Standardized Height */}
              <div className="relative flex items-center justify-center h-[300px] md:h-[340px] w-full perspective-1000 mb-8">
                <AnimatePresence mode="wait">
                  {activeScreen === 0 && (
                    <motion.div 
                      key="boardroom-photo"
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.05, y: -10 }}
                      transition={{ duration: 0.8, ease }}
                      className="w-full max-w-[480px] aspect-[16/10] rounded-2xl border border-gray-100 shadow-2xl relative overflow-hidden flex"
                    >
                        <img 
                          src="/images/boardroom-mtr.webp" 
                          alt="Managed Boardroom Solution" 
                          className="w-full h-full object-cover select-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </motion.div>
                  )}

                  {activeScreen === 1 && (
                    <motion.div 
                      key="mtr"
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.05, y: -10 }}
                      transition={{ duration: 0.8, ease }}
                      className="w-full max-w-[480px] aspect-[16/10] bg-[#1a1a1a] rounded-2xl border-[6px] border-[#2d2d2d] shadow-2xl relative overflow-hidden flex flex-col"
                    >
                        <div className="h-[20%] bg-[#111111] border-b border-[#333] flex items-center gap-1.5 px-3">
                          {[1, 2, 3, 4].map((user, i) => (
                            <div key={i} className="flex-1 h-full py-1.5">
                              <div className={`w-full h-full rounded-md bg-[#2d2d2d] relative flex items-center justify-center overflow-hidden ${i === 1 ? 'ring-2 ring-[#5D00D6]/40' : ''}`}>
                                  <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[7px] text-white/50 font-medium border border-white/5">{['JD', 'MS', 'AK', 'PR'][i]}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex-1 bg-[#151515] p-4 flex gap-4">
                          <div className="w-1/3 bg-[#1e1e1e] rounded-lg border border-white/5 p-3 flex flex-col gap-2.5">
                            <div className="h-1.5 w-1/2 bg-white/10 rounded-full" />
                            <motion.div className="h-1.5 w-full bg-[#5D00D6] rounded-full" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
                            <div className="h-1.5 w-3/4 bg-white/5 rounded-full" />
                          </div>
                          <div className="flex-1 bg-gradient-to-br from-[#222] to-[#111] rounded-lg border border-white/5 flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                            <LayoutGrid size={24} className="text-[#5D00D6] opacity-60" />
                            <div className="flex gap-1 items-end h-6">
                              {[0.6, 1, 0.4].map((h, i) => (
                                <motion.div key={i} className="w-2 bg-[#5D00D6] rounded-t-sm" initial={{ height: h * 8 }} animate={{ height: [h * 8, h * 24, h * 8] }} transition={{ duration: 2 + i, repeat: Infinity }} />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="h-10 bg-[#111111] border-t border-[#333] flex items-center justify-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#2d2d2d] flex items-center justify-center"><Mic size={10} className="text-white" /></div>
                          <div className="w-6 h-6 rounded-full bg-[#2d2d2d] flex items-center justify-center"><Video size={10} className="text-white" /></div>
                          <div className="w-10 h-6 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/20"><PhoneOff size={10} className="text-white" /></div>
                        </div>
                    </motion.div>
                  )}

                  {activeScreen === 2 && (
                    <motion.div 
                      key="board"
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.05, y: -10 }}
                      transition={{ duration: 0.8, ease }}
                      className="w-full max-w-[480px] aspect-[16/10] bg-[#0c1024] rounded-2xl border-[8px] border-[#1e293b] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center p-8"
                    >
                        <div className="absolute top-4 left-6 flex items-center gap-2">
                          <motion.div className="w-1.5 h-1.5 rounded-full bg-red-500" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                          <span className="c9-eyebrow !text-white/50 !text-[8.5px]">Smart Display</span>
                        </div>
                        <div className="w-full h-full border border-dashed border-[#5D00D6]/40 rounded-[30px] flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#5D00D6]/10 to-transparent relative">
                          <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-14 h-14 rounded-full bg-[#5D00D6] flex items-center justify-center text-white shadow-[0_0_30px_rgba(93,0,214,0.4)] relative z-10">
                              <MonitorPlay size={28} />
                          </motion.div>
                          <div className="flex flex-col items-center gap-1 relative z-10">
                              <div className="text-white text-[13px] font-medium tracking-tight">Active Mode</div>
                              <div className="c9-eyebrow !text-white/30 !text-[8.5px]">C9 Managed</div>
                          </div>
                        </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Scene Indicators */}
                <div className="absolute bottom-2 flex gap-2 z-30">
                    {[0, 1, 2].map(i => (
                      <button 
                        key={i} 
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1 rounded-full transition-all duration-700 ${activeScreen === i ? 'w-10 bg-[#5D00D6] shadow-[0_0_10px_rgba(93,0,214,0.5)]' : 'w-2 bg-gray-200/50 hover:bg-white/50 pointer-events-auto cursor-pointer'}`}
                        onClick={() => setActiveScreen(i)}
                      />
                    ))}
                </div>
              </div>

              {/* Content Area - Aligned */}
              <div className="flex flex-col flex-1 text-left px-1">
                <h3 className="c9-card-title text-[#0c1024] mb-3">
                  Video Conferencing & Displays
                </h3>
                <p className="c9-body mb-6 max-w-[95%]">
                  End-to-end deployment for Teams-certified rooms. Procuring, installing, and managing smart boards and signage.
                </p>
                
                {/* Push tags to bottom */}
                <div className="mt-auto flex flex-nowrap gap-2 overflow-x-auto no-scrollbar pb-1">
                  {['MTR Rooms', 'Digital Signage', 'Boardrooms'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-[#F8FAFC] border border-gray-100 text-[#5D00D6] shadow-sm c9-eyebrow !text-[9px] rounded-full whitespace-nowrap">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: Microsoft 365 (Equal Width & Aligned) */}
            <div className="bg-white rounded-[40px] p-8 border border-gray-100 flex flex-col overflow-hidden group min-h-[520px] shadow-sm transition-all hover:shadow-xl hover:shadow-[#5D00D6]/5">
              
              {/* Visual Container - Standardized Height */}
              <div className="relative h-[300px] md:h-[340px] flex items-center justify-center mb-8">
                {/* Enhanced Orbital Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                    <div className="absolute w-[160px] h-[160px] rounded-full border border-gray-100" />
                    <div className="absolute w-[230px] h-[230px] rounded-full border border-gray-100" />
                    <div className="absolute w-[300px] h-[300px] rounded-full border border-gray-50" />
                </div>
                
                {/* Center Logo */}
                <motion.div 
                  className="w-24 h-24 rounded-full bg-[#0c1024] flex items-center justify-center shadow-2xl relative z-10 border-4 border-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="grid grid-cols-2 gap-1.5 w-10 h-10">
                    <div className="bg-[#f25022] w-full h-full rounded-sm" />
                    <div className="bg-[#7fbb00] w-full h-full rounded-sm" />
                    <div className="bg-[#00a1f1] w-full h-full rounded-sm" />
                    <div className="bg-[#ffbb00] w-full h-full rounded-sm" />
                  </div>
                </motion.div>

                {/* Larger Orbital Path */}
                <motion.div className="absolute inset-0 z-20 flex items-center justify-center" animate={{ rotate: [0, 360] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
                  {[
                    { src: 'https://api.iconify.design/vscode-icons:file-type-word.svg', label: 'Word', degree: 0 },
                    { src: 'https://api.iconify.design/vscode-icons:file-type-excel.svg', label: 'Excel', degree: 45 },
                    { src: 'https://api.iconify.design/vscode-icons:file-type-powerpoint.svg', label: 'PowerPoint', degree: 90 },
                    { src: 'https://api.iconify.design/vscode-icons:file-type-outlook.svg', label: 'Outlook', degree: 135 },
                    { src: 'https://api.iconify.design/logos:microsoft-teams.svg', label: 'Teams', degree: 180 },
                    { src: 'https://api.iconify.design/vscode-icons:file-type-vscode.svg', label: 'VS Code', degree: 225 },
                    { src: 'https://api.iconify.design/logos:microsoft-azure.svg', label: 'Azure', degree: 270 },
                    { src: 'https://api.iconify.design/logos:microsoft-edge.svg', label: 'Edge', degree: 315 }
                  ].map((app) => (
                    <div key={app.label} className="absolute" style={{ transform: `rotate(${app.degree}deg) translateY(-120px)` }}>
                      <motion.div className="w-12 h-12 -ml-6 -mt-6 rounded-xl bg-white shadow-xl border border-gray-100 flex items-center justify-center p-2.5 z-30 transition-all hover:scale-110" animate={{ rotate: [-app.degree, -(360 + app.degree)] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
                        <img src={app.src} alt={app.label} className="w-full h-full object-contain select-none" />
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>
              
              {/* Content Area - Aligned */}
              <div className="flex flex-col flex-1 text-left px-1">
                <h3 className="c9-card-title text-[#0c1024] mb-3">
                  Microsoft 365 Managed
                </h3>
                <p className="c9-body mb-6 max-w-[95%]">
                  Licensing, governance, and architecture done properly. Complete ecosystem management for your enterprise.
                </p>
                
                {/* Push tags to bottom */}
                <div className="mt-auto flex flex-nowrap gap-2">
                  <span className="px-3 py-1.5 bg-[#F4F0FA] border border-gray-100 text-[#5D00D6] shadow-sm c9-eyebrow !text-[9px] rounded-full whitespace-nowrap">M365 Ecosystem</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Equal Width Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 3: Endpoint Security */}
            <div className="bg-white rounded-[40px] p-8 border border-gray-100 flex flex-col overflow-hidden group min-h-[460px] shadow-sm transition-all hover:shadow-xl hover:shadow-[#5D00D6]/5">
              <div className="relative pt-4 h-44 flex items-center justify-center mb-8">
                <motion.div className="relative z-20 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 w-[95%] group-hover:-translate-y-2 transition-all duration-500">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                          <ShieldCheck className="text-[#5D00D6]" size={16} />
                      </motion.div>
                      <span className="text-[11px] font-medium text-[#0c1024]">Security Active</span>
                    </div>
                    <div className="text-[8px] text-green-500 font-medium bg-green-50 px-1.5 py-0.5 rounded uppercase tracking-wider">PATCHED</div>
                  </div>
                  
                  <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden mb-2 relative">
                      <motion.div className="h-full bg-[#5D00D6] relative z-10" initial={{ width: "10%" }} whileInView={{ width: '100%' }} transition={{ duration: 1.5 }} />
                      <motion.div 
                        className="absolute inset-0 bg-white/40 z-20 w-8 h-full blur-sm"
                        animate={{ left: ['-20%', '120%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                  </div>
                  
                  <div className="flex justify-between items-center text-[8px] text-gray-400 font-medium uppercase tracking-wider mb-2">
                      <span>Threat Status</span>
                      <span className="text-[#5D00D6] flex items-center gap-1"><Zap size={8} fill="currentColor" /> CLEAN</span>
                  </div>
                  
                  <div className="flex gap-1">
                      {[1, 2, 3, 4, 5, 6].map(i => (
                        <motion.div 
                          key={i} 
                          className="h-1 flex-1 bg-gray-50 rounded-full"
                          animate={{ backgroundColor: ['#F9FAFB', '#F5F3FF', '#F9FAFB'] }}
                          transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                        />
                      ))}
                  </div>
                </motion.div>
                
                <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                    <motion.div animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-4 left-10"><Laptop size={24} /></motion.div>
                    <motion.div animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-4 right-10"><Smartphone size={24} /></motion.div>
                </div>
              </div>
              
              <div className="flex flex-col flex-1 text-left">
                <h3 className="c9-card-title !text-[20px] text-[#0c1024] mb-3">
                  Endpoint Security
                </h3>
                <p className="c9-body mb-4">
                  Laptops and tablets monitored, patched, and protected 24/7.
                </p>
                <div className="mt-auto flex flex-nowrap gap-2">
                  <span className="px-3 py-1.5 bg-[#F4F0FA] border border-gray-100 text-[#5D00D6] shadow-sm c9-eyebrow !text-[9px] rounded-full whitespace-nowrap">Security First</span>
                </div>
              </div>
            </div>

            {/* Card 4: CCTV & Space Analytics */}
            <div className="bg-white rounded-[40px] p-8 border border-gray-100 flex flex-col overflow-hidden group min-h-[460px] shadow-sm transition-all hover:shadow-xl hover:shadow-[#5D00D6]/5">
              <div className="grid grid-cols-2 gap-2.5 w-full mt-2 relative mb-8 h-44">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-video bg-[#0c1024] rounded-lg relative overflow-hidden ring-1 ring-white/10 group-hover:ring-[#5D00D6]/30 transition-all">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Camera size={18} className="text-white opacity-5" />
                      </div>
                      
                      <motion.div 
                        className="absolute top-0 left-0 w-full h-[1px] bg-[#5D00D6]/40 shadow-[0_0_10px_#5D00D6] z-20"
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                      />
                      
                      {i % 2 === 0 && (
                        <motion.div className="absolute w-6 h-6 border border-[#5D00D6]/60 rounded-sm z-10" style={{ top: '20%', left: '30%' }} animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }} transition={{ duration: 2, delay: i, repeat: Infinity }}>
                          <div className="absolute -top-1.5 left-0 c9-eyebrow !text-[#5D00D6] !text-[5px]">Person 98%</div>
                        </motion.div>
                      )}

                      <div className="absolute top-1.5 left-1.5 flex items-center gap-1 z-30">
                        <motion.div className="w-1 h-1 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.6)]" animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                        <span className="c9-eyebrow !text-white/40 !text-[6px]">CH_0{i}</span>
                      </div>
                  </div>
                ))}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-[#0c1024]/80 backdrop-blur-sm rounded px-2 py-1 flex items-center gap-2 border border-white/5">
                      <Activity size={8} className="text-[#5D00D6]" />
                      <div className="c9-eyebrow !text-white/60 !text-[6px]">Processing...</div>
                    </div>
                </div>
              </div>
              
              <div className="flex flex-col flex-1 text-left">
                <h3 className="c9-card-title !text-[20px] text-[#0c1024] mb-3">
                  CCTV & Analytics
                </h3>
                <p className="c9-body mb-4">
                  Cloud dashboards and real-time people-counting intelligence.
                </p>
                <div className="mt-auto flex flex-nowrap gap-2">
                  <span className="px-3 py-1.5 bg-[#F4F0FA] border border-gray-100 text-[#5D00D6] shadow-sm c9-eyebrow !text-[9px] rounded-full whitespace-nowrap">Smart Vision</span>
                </div>
              </div>
            </div>

            {/* Card 5: Visitor Management */}
            <div className="bg-white rounded-[40px] p-8 border border-gray-100 flex flex-col overflow-hidden group min-h-[460px] shadow-sm transition-all hover:shadow-xl hover:shadow-[#5D00D6]/5">
              <div className="relative pt-4 h-48 flex items-center justify-center mb-8">
                <motion.div className="absolute w-24 h-24 rounded-full border-[2px] border-[#5D00D6]/20" animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-[#5D00D6]/10" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
                
                <motion.div className="w-20 h-20 rounded-full bg-[#F4F0FA] flex items-center justify-center border-[6px] border-white shadow-xl z-20 relative" animate={{ y: [-3, 3, -3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                    <div className="w-11 h-11 rounded-full bg-[#5D00D6] flex justify-center items-end overflow-hidden pb-1 shadow-inner shadow-purple-900/40">
                      <User size={32} className="text-white" />
                    </div>
                </motion.div>

                <motion.div className="absolute -left-2 top-2 w-[130px] bg-white rounded-xl shadow-xl border border-gray-50 p-3 z-30 flex flex-col gap-2 group-hover:-translate-x-1 transition-transform" animate={{ y: [-5, 5, -5], rotateZ: [-1, 1, -1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                    <div className="flex gap-1 mb-1">
                      {[0, 0.2].map(d => (
                        <motion.div key={d} className="w-1 h-1 rounded-full bg-gray-200" animate={{ scale: [1, 1.4, 1], backgroundColor: ['#E5E7EB', '#5D00D6', '#E5E7EB'] }} transition={{ duration: 2, repeat: Infinity, delay: d }} />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#F4F0FA] flex items-center justify-center text-[#5D00D6] shadow-sm"><Mail size={14} fill="currentColor" stroke="none" /></div>
                      <div className="flex flex-col gap-1.5 flex-1">
                          <div className="w-full h-1 bg-gray-100 rounded-full" />
                          <div className="w-2/3 h-1 bg-gray-50 rounded-full" />
                      </div>
                    </div>
                </motion.div>

                <motion.div className="absolute -right-2 bottom-4 w-[130px] bg-white rounded-xl shadow-xl border border-gray-50 p-4 z-30 flex flex-col gap-4 group-hover:translate-x-1 transition-transform" animate={{ y: [5, -5, 5], rotateZ: [1, -1, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                    <div className="flex items-center gap-3 relative">
                      <div className="absolute left-[7.5px] top-4 bottom-[-16px] w-[1px] bg-gray-100" />
                      <div className="w-4 h-4 rounded-full bg-[#0c1024] flex items-center justify-center text-white relative z-10 shadow-lg"><FileText size={8} /></div>
                      <div className="h-1 w-12 bg-gray-100 rounded-full" />
                    </div>
                    <div className="flex items-center gap-3 relative">
                      <div className="absolute left-[7.5px] top-4 bottom-[-16px] w-[1px] border-l border-dashed border-[#5D00D6]/40" />
                      <motion.div className="w-4 h-4 rounded-full bg-[#5D00D6] flex items-center justify-center text-white relative z-10 shadow-[0_0_10px_rgba(93,0,214,0.5)]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}><BadgeCheck size={10} /></motion.div>
                      <motion.div className="h-1 bg-[#5D00D6] rounded-full flex-1" animate={{ width: ['0%', '100%', '100%', '0%'] }} transition={{ duration: 5, repeat: Infinity, ease: "circIn" }} style={{ originX: 0 }} />
                    </div>
                </motion.div>
              </div>
              
              <div className="flex flex-col flex-1 text-left">
                <h3 className="c9-card-title !text-[20px] text-[#0c1024] mb-3">
                  Visitor & Access Control
                </h3>
                <p className="c9-body mb-4">
                  Visitor sign-in, notifications, and encrypted access control.
                </p>
                <div className="mt-auto flex flex-nowrap gap-2 overflow-x-auto no-scrollbar pb-1">
                  {['Sign-in', 'NDA', 'Audit'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-[#F4F0FA] border border-gray-100 text-[#5D00D6] shadow-sm c9-eyebrow !text-[9px] rounded-full whitespace-nowrap">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Global CTA - Updated to C9 Brand Purple */}
        <div className="flex justify-center mt-16">
          <Button size="lg" className="rounded-full bg-[#5D00D6] hover:bg-[#4c00b0] px-10 py-7 text-[16px] font-medium group shadow-2xl shadow-[#5D00D6]/20 transition-all border-none">
            View All Workplace Solutions <ArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
