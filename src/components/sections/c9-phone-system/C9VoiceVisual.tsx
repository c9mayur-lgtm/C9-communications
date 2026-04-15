'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Laptop, Smartphone, Tablet, Video, Cloud, Globe, User, ArrowRight } from 'lucide-react';

const FlowLine = ({ path, delay = 0 }: { path: string; delay?: number }) => (
  <>
    <path 
      d={path} 
      stroke="#E5E7EB" 
      strokeWidth="2" 
      strokeDasharray="4 4"
      fill="none"
    />
    <motion.circle
      r="4"
      fill="#A855F7"
      initial={{ offsetDistance: "0%", opacity: 0 }}
      animate={{ 
        offsetDistance: "100%", 
        opacity: [0, 1, 1, 0],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
        delay
      }}
      style={{
        offsetPath: `path('${path}')`,
        filter: 'blur(1px) drop-shadow(0 0 4px #A855F7)'
      }}
    />
  </>
);

export const C9VoiceVisual = () => {
  return (
    <div className="relative w-full max-w-[800px] h-[500px] mx-auto overflow-visible translate-x-4 lg:translate-x-12">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/5 via-transparent to-[#06B6D4]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* SVG Canvas for all flow lines - UPDATED VIEWBOX */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 500" preserveAspectRatio="none">
        {/* Office to Network */}
        <FlowLine path="M280 80 H400" />
        {/* Network to IP Telephony */}
        <FlowLine path="M500 130 V260" delay={1.5} />
        {/* IP Telephony to PSTN */}
        <FlowLine path="M400 320 H280" delay={0.5} />
        {/* PSTN to Destination */}
        <FlowLine path="M140 320 H100" delay={2} />
      </svg>

      {/* TOP LEFT: Office or Remote User */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-0 left-0 w-[280px] bg-white rounded-[24px] border border-slate-100 p-5 shadow-xl shadow-slate-200/20 z-10"
      >
        <p className="text-[9px] font-bold text-center uppercase tracking-[0.2em] mb-5 text-[#5D00D6]">Office or Remote User</p>
        <div className="grid grid-cols-5 gap-1">
          {[
            { icon: <Phone size={18} />, label: 'Phone' },
            { icon: <Laptop size={18} />, label: 'Laptop' },
            { icon: <Smartphone size={18} />, label: 'Mobile' },
            { icon: <Tablet size={18} />, label: 'Tablet' },
            { icon: <Video size={18} />, label: 'Video' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="text-slate-400">
                {item.icon}
              </div>
              <span className="text-[7px] font-bold text-slate-400 uppercase tracking-tighter text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* TOP RIGHT: C9 Voice Network - SPREAD OUT */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-10 right-40 w-[180px] h-[80px] rounded-2xl bg-gradient-to-r from-[#5D00D6] to-[#06B6D4] p-[1.5px] shadow-lg shadow-purple-500/10 z-10"
      >
        <div className="w-full h-full bg-white rounded-[14.5px] flex items-center justify-center p-3 text-center">
          <span className="text-[11px] font-bold text-[#0c1024] leading-tight">C9 Voice or 3rd Party Network</span>
        </div>
      </motion.div>

      {/* BOTTOM RIGHT: C9 Voice IP Telephony - POSITIONED LOW */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-10 right-20 w-[240px] bg-white rounded-[32px] border-2 border-dashed border-[#5D00D6]/10 p-6 shadow-sm z-10"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[13px] font-bold text-[#0c1024]">C9 Voice IP Telephony</span>
          <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] relative">
            <Cloud size={24} />
            <div className="absolute inset-0 bg-[#5D00D6]/10 rounded-2xl animate-ping opacity-20" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
              {['IVR', 'Hunt Groups', 'Voicemail'].map((f, i) => (
                  <span key={i} className="text-[7px] font-bold bg-slate-50 border border-slate-100 px-2 py-1 rounded text-slate-500 uppercase">{f}</span>
              ))}
          </div>
        </div>
      </motion.div>

      {/* BOTTOM CENTER: Public Telephony - CLEAR SPACE */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-24 left-[140px] w-[140px] h-[70px] rounded-2xl bg-gradient-to-r from-[#5D00D6] to-[#06B6D4] p-[2px] shadow-lg shadow-cyan-500/10 z-20"
      >
        <div className="w-full h-full bg-white rounded-[14px] flex flex-col items-center justify-center p-3 text-center">
          <span className="text-[11px] font-bold text-[#0c1024]">Public Telephony</span>
          <span className="text-[9px] font-bold text-cyan-500 opacity-70">(PSTN)</span>
        </div>
      </motion.div>

      {/* BOTTOM LEFT: Call Destination - SEPARATE */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-0 w-[150px] bg-white rounded-[24px] border border-cyan-500/20 p-5 shadow-sm z-20"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[12px] font-bold text-[#0c1024]">Call Destination</span>
          <div className="relative">
             <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center">
                <User size={24} className="text-[#A855F7]" />
             </div>
             <Globe size={12} className="absolute -top-1 -right-1 text-cyan-600 bg-white rounded-full p-0.5 shadow-sm" />
          </div>
        </div>
      </motion.div>

      {/* Small annotation shifted */}
      <div className="absolute top-[100px] left-[50px] text-[8px] text-slate-400 italic font-medium w-[150px] text-center">
        *C9 Voice is accessible via a public network connection
      </div>

    </div>
  );
};
