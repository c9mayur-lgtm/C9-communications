'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Smartphone, Video, Headphones, PhoneIncoming, Building2, Zap, Mic, CheckCircle, Wifi, Shield, Globe } from 'lucide-react';

// ──────────────────────────────────────────────
// Constants (defined outside to avoid re-creation)
// ──────────────────────────────────────────────
const CALL_DESTINATIONS = [
  { label: 'Sydney CBD Office', sub: '(02) 8000 4321', icon: Building2, status: 'Available',  color: 'text-green-500', dot: 'bg-green-400' },
  { label: 'James — Mobile',    sub: '+61 498 XXX XXX', icon: Smartphone, status: 'Forwarded', color: 'text-blue-500',  dot: 'bg-blue-400'  },
  { label: 'Support Queue',     sub: 'IVR → Agent',     icon: Headphones, status: 'In Queue',  color: 'text-amber-500', dot: 'bg-amber-400' },
];

const FEATURE_PILLS = ['Cloud PBX', 'SIP Trunking', 'MS Teams', '1300 / 1800', 'Mobile', 'Contact Centre'];

// ──────────────────────────────────────────────
// Animated Data Packet: travels from left → right
// ──────────────────────────────────────────────
const DataPacket = ({ delay, yOffset }: { delay: number; yOffset: number }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full bg-[#5D00D6] shadow-[0_0_6px_2px_rgba(93,0,214,0.5)] pointer-events-none z-20"
    style={{ top: `calc(50% + ${yOffset}px)`, left: 0 }}
    animate={{ x: ['0px', '560px'], opacity: [0, 1, 1, 0] }}
    transition={{ duration: 2.4, delay, repeat: Infinity, repeatDelay: 1.2, ease: 'linear' }}
  />
);

// ──────────────────────────────────────────────
// Main Visual
// ──────────────────────────────────────────────
export default function VoiceVisual() {
  const [activeDest, setActiveDest] = useState(0);
  const [callCount, setCallCount] = useState(12);

  useEffect(() => {
    const t1 = setInterval(() => setActiveDest(i => (i + 1) % CALL_DESTINATIONS.length), 2800);
    const t2 = setInterval(() => setCallCount(c => (c % 15) + 8), 3200);
    return () => { clearInterval(t1); clearInterval(t2); };
  }, []);

  const dest = CALL_DESTINATIONS[activeDest] ?? CALL_DESTINATIONS[0];

  return (
    <div className="relative w-full max-w-[600px] mx-auto select-none" style={{ aspectRatio: '1 / 0.9' }}>

      {/* ── BACKGROUND CARD ── */}
      <div className="absolute inset-0 rounded-[32px] bg-white border border-gray-100 shadow-2xl shadow-[#5D00D6]/8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4F0FA]/60 via-white to-white" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* ── HEADER ── */}
      <div className="absolute top-0 inset-x-0 px-7 pt-7 pb-5 border-b border-gray-100 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#5D00D6] flex items-center justify-center shadow-lg shadow-[#5D00D6]/30">
            <Phone size={18} className="text-white" />
          </div>
          <div>
            <p className="text-[14px] font-bold text-[#0c1024] leading-none mb-1">C9 Voice System</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Managed Cloud PBX</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-3 py-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">All Systems Live</span>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="absolute inset-0 top-[84px] px-7 pb-7 flex flex-col gap-5 z-10">

        {/* Row 1: Call Flow */}
        <div className="flex-1 flex items-center gap-4 relative">

          {/* Source: Incoming Call */}
          <div className="w-[140px] shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-4 text-center">
              <div className="w-10 h-10 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/15 flex items-center justify-center mx-auto mb-3">
                <PhoneIncoming size={18} className="text-[#5D00D6]" />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Incoming</p>
              <p className="text-[16px] font-bold text-[#5D00D6] tracking-tight">1300 555</p>
              <div className="flex justify-center gap-1 mt-2">
                {[0, 1, 2].map(i => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full animate-bounce bg-[#5D00D6]`} style={{ opacity: 1 - i * 0.3, animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Connector with animated packets */}
          <div className="flex-1 relative h-[2px] flex items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5D00D6]/20 to-[#5D00D6]/20" />
            {/* Central routing node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-[60px] h-[60px] rounded-full bg-[#5D00D6] flex flex-col items-center justify-center shadow-xl shadow-[#5D00D6]/30 border-4 border-white">
                <Wifi size={16} className="text-white" />
                <span className="text-[7px] font-bold text-white/80 uppercase mt-0.5">Route</span>
              </div>
              <div className="absolute inset-[-6px] rounded-full border-2 border-[#5D00D6]/20 animate-ping opacity-30" />
            </div>
            {/* Data packets */}
            <DataPacket delay={0} yOffset={0} />
            <DataPacket delay={0.8} yOffset={-6} />
            <DataPacket delay={1.6} yOffset={6} />
          </div>

          {/* Destination Card */}
          <div className="w-[160px] shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDest}
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-md p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center">
                    <dest.icon size={14} className="text-[#5D00D6]" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${dest.dot}`} />
                    <span className={`text-[9px] font-bold uppercase tracking-widest ${dest.color}`}>{dest.status}</span>
                  </div>
                </div>
                <p className="text-[12px] font-bold text-[#0c1024] leading-tight mb-1">{dest.label}</p>
                <p className="text-[10px] text-slate-400 font-medium">{dest.sub}</p>
                <CheckCircle size={12} className="text-green-500 mt-2" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Row 2: Bottom Stats Strip */}
        <div className="grid grid-cols-3 gap-3">

          {/* Live calls */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Live Calls</p>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            </div>
            <div className="flex items-end gap-0.5 h-6 mb-1">
              {[4, 7, 5, 9, 6, callCount % 15, 8].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: `${(Math.min(h, 14) / 14) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className={`flex-1 rounded-t-[1px] ${i === 5 ? 'bg-[#5D00D6]' : 'bg-[#5D00D6]/20'}`}
                />
              ))}
            </div>
            <span className="text-[18px] font-bold text-[#0c1024] leading-none">{callCount}</span>
          </div>

          {/* Uptime */}
          <div className="bg-[#5D00D6] rounded-xl p-3 flex flex-col justify-between shadow-lg shadow-[#5D00D6]/20">
            <p className="text-[9px] font-bold text-white/60 uppercase tracking-widest">Uptime SLA</p>
            <p className="text-[22px] font-bold text-white leading-none">99.95%</p>
            <p className="text-[8px] font-bold text-white/50 uppercase tracking-widest">Always On</p>
          </div>

          {/* AU Hosted */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 flex flex-col justify-between">
            <Shield size={14} className="text-[#5D00D6]" />
            <div>
              <p className="text-[12px] font-bold text-[#0c1024] leading-tight">AU Hosted</p>
              <p className="text-[9px] text-slate-400 font-medium">Encrypted</p>
            </div>
          </div>
        </div>

        {/* Row 3: Feature Pills (animated scroll) */}
        <div className="flex gap-2 overflow-hidden">
          {FEATURE_PILLS.map((pill, i) => (
            <motion.div
              key={pill}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="shrink-0 bg-[#5D00D6]/6 border border-[#5D00D6]/15 text-[#5D00D6] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap"
            >
              {pill}
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
