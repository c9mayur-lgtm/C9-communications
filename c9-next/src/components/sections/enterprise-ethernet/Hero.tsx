'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ShieldCheck, MapPin, Search, Loader2 } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

export default function Hero() {
  const { setInquiryMessage } = useInquiry();
  const [address, setAddress] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) return;

    setIsChecking(true);
    // Simulate a check
    setTimeout(() => {
      setIsChecking(false);
      setInquiryMessage(`I'd like to check NBN™ Enterprise Ethernet availability for the following address: ${address}. Please run a formal site qualification.`);
      const el = document.getElementById('consultation-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
  };

  const handleCompareClick = () => {
    const el = document.getElementById('ee-plans');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <section className="relative py-8 md:py-12 bg-white overflow-hidden min-h-[70vh] flex items-center" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
        {/* Ambient background effect */}
        <div className="absolute top-0 right-[-10%] w-[60%] h-full bg-[#5D00D6]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            
            {/* LEFT COLUMN */}
            <div className="flex flex-col items-start">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="bg-[#5D00D6]/10 text-[#5D00D6] px-4 py-1.5 rounded-none text-[11px] font-bold uppercase tracking-[0.2em] border border-[#5D00D6]/20">
                  Telco · NBN™ Enterprise Ethernet
                </div>
                <div className="bg-[#1A1A2E]/5 text-[#1A1A2E]/60 px-4 py-1.5 rounded-none text-[11px] font-bold uppercase tracking-[0.2em] border border-[#1A1A2E]/10 flex items-center gap-2">
                   <ShieldCheck size={12} className="text-[#5D00D6]" /> NBN™ Accredited Adviser
                </div>
              </div>

              <h1 className="text-[38px] md:text-[52px] lg:text-[62px] font-bold tracking-tight text-[#1A1A2E] leading-[1.05] mb-6">
                Dedicated enterprise connectivity. <span className="text-[#5D00D6]">Symmetrical speeds.</span>
              </h1>

              <p className="text-[18px] md:text-[20px] text-slate-600 mb-8 max-w-[620px] leading-relaxed font-normal">
                NBN™ Enterprise Ethernet delivers dedicated, symmetrical connectivity from 50/50 Mbps up to 1000/1000 Mbps — with guaranteed bandwidth, enhanced SLAs, and the infrastructure to connect multiple sites across Australia.
              </p>

              {/* SALES FUNNEL HOOK: ADDRESS CHECKER */}
              <div className="w-full max-w-[580px] mb-8 bg-white rounded-3xl p-2 shadow-[0_20px_50px_-12px_rgba(213,0,214,0.15)] border border-[#5D00D6]/10">
                 <form onSubmit={handleCheckAvailability} className="flex flex-col sm:flex-row items-center gap-2">
                    <div className="flex-1 flex items-center gap-3 px-4 w-full">
                       <MapPin size={20} className="text-[#5D00D6]" />
                       <input 
                          type="text" 
                          placeholder="Check your site availability..." 
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full h-12 bg-transparent border-none outline-none text-[#1A1A2E] font-bold text-[15px] placeholder:text-slate-400 placeholder:font-medium"
                       />
                    </div>
                    <Button 
                       type="submit"
                       disabled={isChecking}
                       className="w-full sm:w-auto h-12 bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-bold px-8 rounded-2xl flex items-center gap-2 shadow-lg shadow-[#5D00D6]/20 transition-all active:scale-95 border-none"
                    >
                       {isChecking ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                       {isChecking ? "Checking..." : "Check Availability"}
                    </Button>
                 </form>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
                <Button 
                  onClick={handleCompareClick}
                  className="bg-[#5D00D6] text-white hover:bg-[#4c00b0] font-bold h-14 px-10 rounded-full transition-all text-[16px] shadow-lg shadow-[#5D00D6]/20 transform hover:-translate-y-0.5"
                >
                  View Plans & Pricing
                </Button>
                <div className="flex items-center gap-2 px-6">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[13px] font-bold text-slate-400 tracking-tight uppercase">Special: $0 Fibre Build Offer</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                {[
                  "50/50 to 1000/1000 Mbps",
                  "Equal upload and download",
                  "100% committed bandwidth",
                  "4G LTE failover included",
                  "4-hour restoration target"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0">
                       <CheckCircle size={14} className="text-[#5D00D6]" />
                    </div>
                    <span className="text-[14px] font-bold text-slate-500 tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN - VISUAL DESKTOP PREVIEW */}
            <div className="hidden lg:flex justify-end pr-0 lg:pr-12 relative">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }}
                 className="relative w-full max-w-[480px] aspect-[4/5] bg-white rounded-[40px] p-8 shadow-[0_40px_80px_-15px_rgba(93,0,214,0.15)] border border-gray-100 overflow-hidden group"
               >
                  {/* Scanner Sweep */}
                  <motion.div 
                    animate={{ y: ['-20%', '120%'] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#5D00D6]/20 to-transparent z-50 pointer-events-none" 
                  />
                  <div className="absolute top-0 right-0 w-full h-full bg-[#5D00D6]/5 blur-[100px] pointer-events-none" />
                  
                  {/* Dashboard Mockup detail */}
                  <div className="relative z-10">
                     <div className="flex items-center justify-between mb-12">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-400/80" />
                           <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                           <div className="w-3 h-3 rounded-full bg-green-400/80" />
                        </div>
                        <div className="bg-[#5D00D6]/5 px-3 py-1.5 rounded-full border border-[#5D00D6]/10 flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6] animate-pulse" />
                           <span className="text-[10px] text-[#5D00D6] font-bold tracking-widest uppercase">CORE ONLINE</span>
                        </div>
                     </div>

                     <div className="space-y-8">
                        <div>
                           <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.25em] mb-4">Dedicated Symmetrical Link</p>
                           <div className="flex items-end gap-3 mb-2">
                              <span className="text-[#1A1A2E] text-[48px] font-bold leading-none tracking-tighter">1000</span>
                              <span className="text-[#5D00D6] text-[20px] font-bold mb-2">Mbps</span>
                           </div>
                           <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden relative">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-[#5D00D6] shadow-[0_0_15px_rgba(93,0,214,0.2)]" 
                              />
                              <motion.div 
                                animate={{ x: ['-200%', '300%'] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 1.5 }}
                                className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12"
                              />
                           </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                           <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                              <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">UPTIME</p>
                              <p className="text-[#1A1A2E] text-[18px] font-bold">99.95%</p>
                           </div>
                           <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                              <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">RESTORATION</p>
                              <p className="text-[#5D00D6] text-[18px] font-bold">4-HOUR</p>
                           </div>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                               <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.25em]">Multi-site Traffic</p>
                               <div className="flex items-end gap-1 h-3">
                                  {[1,2,3,4,5].map(i => (
                                     <motion.div 
                                       key={i} 
                                       animate={{ height: ['4px', '12px', '6px', '12px', '4px'] }}
                                       transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: i * 0.15 }}
                                       className={`w-1 rounded-full ${i < 4 ? 'bg-[#5D00D6]' : 'bg-gray-200'}`} 
                                     />
                                  ))}
                               </div>
                            </div>
                            <div className="flex flex-col gap-3">
                               {[
                                  { label: 'Sydney HQ', value: 'Active', latency: '4ms' },
                                  { label: 'Melbourne DC', value: 'Active', latency: '12ms' },
                                  { label: 'Brisbane Office', value: 'Active', latency: '18ms' }
                               ].map((site, i) => (
                                  <div key={i} className="flex items-center justify-between border-t border-gray-100 pt-2 group-hover:first:bg-white transition-colors -mx-2 px-2 rounded-lg">
                                     <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-slate-600 text-[12px] font-medium">{site.label}</span>
                                     </div>
                                     <span className="text-[#5D00D6] text-[11px] font-bold font-mono">{site.latency}</span>
                                  </div>
                               ))}
                            </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>

          </div>
        </div>
      </section>
  );
}
