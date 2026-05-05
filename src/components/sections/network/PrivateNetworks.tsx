'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, EyeOff, Lock, ShieldOff, Shield } from 'lucide-react';

const features = [
  { 
    icon: UserCheck, 
    text: "Accessible by authorised users only",
    desc: "Identity-based authentication layer"
  },
  { 
    icon: EyeOff, 
    text: "Non-routable private IP addresses",
    desc: "Completely invisible to the public internet"
  },
  { 
    icon: Lock, 
    text: "Dedicated network for your business",
    desc: "Full logical separation of your traffic"
  },
  { 
    icon: ShieldOff, 
    text: "No internet breakouts — fully isolated",
    desc: "Zero public cloud exposure routing"
  }
];

const MobileMockup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3500); // 3.5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-[320px] mx-auto bg-white rounded-[44px] border-[10px] md:border-[12px] border-[#161622] shadow-[0_30px_60px_rgba(93,0,214,0.2)] overflow-hidden flex flex-col h-[600px] ring-1 ring-white/20 isolate"
    >
      {/* Physical Top Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[#161622] rounded-b-[18px] z-40" />
      
      {/* Screen Header */}
      <div className="bg-[#5D00D6] pt-14 pb-6 px-6 relative z-30 shadow-lg shrink-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        <div className="w-12 h-12 bg-white/20 rounded-2xl mx-auto mb-3 flex items-center justify-center backdrop-blur-md border border-white/20">
          <Shield size={24} className="text-white" />
        </div>
        <h4 className="text-white font-['Proxima_Nova'] font-bold text-[18px] text-center tracking-tight">Security Protocol</h4>
        <div className="flex items-center justify-center gap-2 mt-1.5 bg-white/10 w-fit mx-auto px-3 py-1 rounded-full border border-white/10">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]" />
          <p className="text-white/90 text-[10px] uppercase tracking-widest font-black leading-none">Scanning Active</p>
        </div>
      </div>

      {/* Animated Slide Canvas */}
      <div className="flex-1 bg-slate-50 relative z-10 p-6 flex flex-col items-center justify-center overflow-hidden">
         {/* Ambient glow inside screen */}
         <div className="absolute inset-0 bg-gradient-to-b from-[#5D00D6]/5 to-transparent pointer-events-none" />
         
         {/* Carousel */}
         <div className="w-full relative h-[240px]">
           <AnimatePresence mode="wait">
             <motion.div
               key={currentIndex}
               initial={{ opacity: 0, x: 60, scale: 0.95 }}
               animate={{ opacity: 1, x: 0, scale: 1 }}
               exit={{ opacity: 0, x: -60, scale: 0.95 }}
               transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
               className="absolute inset-0 bg-white rounded-3xl p-6 shadow-[0_10px_30px_rgba(93,0,214,0.1)] border border-slate-100 flex flex-col items-center justify-center text-center gap-5"
             >
               <div className="w-16 h-16 bg-[#F4F0FA] rounded-2xl flex items-center justify-center shrink-0 border border-white shadow-sm relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/10 to-transparent pointer-events-none" />
                 {React.createElement(features[currentIndex].icon, { 
                   size: 32, 
                   className: "text-[#5D00D6]",
                   strokeWidth: 2
                 })}
               </div>
               <div>
                 <h5 className="font-['Proxima_Nova'] text-[17px] text-[#1A1A2E] font-bold leading-tight tracking-tight mb-2">
                   {features[currentIndex].text}
                 </h5>
                 <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                   {features[currentIndex].desc}
                 </p>
               </div>
             </motion.div>
           </AnimatePresence>
         </div>

         {/* Pagination Indicators */}
         <div className="flex gap-2.5 mt-10">
           {features.map((_, i) => (
             <button 
               key={i} 
               onClick={() => setCurrentIndex(i)}
               className={`h-1.5 rounded-full transition-all duration-500 hover:bg-[#5D00D6]/50 ${
                 i === currentIndex ? 'w-8 bg-[#5D00D6]' : 'w-1.5 bg-slate-200'
               }`} 
               aria-label={`Go to slide ${i + 1}`}
             />
           ))}
         </div>
      </div>

      {/* Physical Bottom Home Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[100px] h-1.5 bg-slate-200 rounded-full z-40" />
    </motion.div>
  );
}

export default function PrivateNetworks() {
  return (
    <section className="relative w-full bg-white py-20 px-6 overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ 
        backgroundImage: `radial-gradient(#5D00D6 0.6px, transparent 0.6px)`,
        backgroundSize: '24px 24px',
      }} />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 via-transparent to-transparent z-1" />

      <div className="container relative z-10 mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="font-['Proxima_Nova'] text-[11px] font-black uppercase tracking-[0.2em] text-[#5D00D6] mb-5 block">
              SECURE CONNECTIVITY
            </span>
            <h2 className="font-['Proxima_Nova'] text-[38px] md:text-[52px] lg:text-[56px] text-[#1A1A2E] font-bold mt-2 leading-[1.05] tracking-tight">
              Connect privately, securely, and <span className="text-[#5D00D6]">without compromise.</span>
            </h2>
            <div className="mt-8 space-y-8">
              <p className="font-['Proxima_Nova'] text-[19px] text-[#4B5563] md:text-[20px] leading-[1.65] font-medium max-w-2xl">
                A private network is the ideal solution when your organisation needs to integrate data, voice, video, and business applications securely between all sites and staff. Unlike the public internet, private networks give you complete control over how traffic flows.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-10 bg-[#5D00D6] rounded-full mt-1 shrink-0" />
                  <p className="font-['Proxima_Nova'] text-[17px] text-[#6B7280] leading-[1.6] font-medium max-w-xl">
                    C9 combines the right mix of carrier technologies to deliver a fully managed, powerful, and secure private network that suits your business needs and supports your growth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="w-full relative py-8">
            {/* Ambient glow behind the mobile mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#5D00D6]/20 rounded-full blur-[100px] -z-10" />
            <MobileMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
