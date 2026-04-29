'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, PhoneIncoming, ShieldCheck, Zap, Mic, Video, Phone, Users, CheckCircle2 } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────
   CONCEPT: Clean vertical card that tells the story clearly:
   "External call comes in → routes through C9 → answers in Teams"
   ───────────────────────────────────────────────────────────────── */

export default function TeamsCallingVisual() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none">

      {/* ── MAIN CARD ─────────────────────────────────── */}
      <div className="bg-white rounded-[28px] border border-gray-100 shadow-[0_24px_80px_rgba(0,0,0,0.07)] overflow-hidden">

        {/* ── HEADER: MS TEAMS BRANDING BAR ─────────────────── */}
        <div className="bg-[#5D00D6] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Teams "T" SVG */}
            <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="9" width="11" height="10" rx="1.5" fill="white"/>
                <path d="M14 9h4a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 18 17h-2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M7 9V7.5A1.5 1.5 0 0 1 8.5 6h4A1.5 1.5 0 0 1 14 7.5V9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="8.5" y1="12" x2="11.5" y2="12" stroke="#5D00D6" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="10" y1="12" x2="10" y2="16" stroke="#5D00D6" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="text-white text-[14px] font-bold leading-none">Microsoft Teams</p>
              <p className="text-white/60 text-[10px] font-medium mt-0.5">Calls — Direct Routing via C9</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Live</span>
          </div>
        </div>

        {/* ── ACTIVE CALL SECTION ────────────────────────────── */}
        <div className="p-6">

          {/* Incoming call card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#f8f4ff] border border-[#5D00D6]/10 rounded-2xl p-5 mb-5"
          >
            <div className="flex items-center gap-4">
              {/* Avatar with pulse ring */}
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full bg-[#5D00D6] flex items-center justify-center text-white shadow-lg shadow-purple-900/20">
                  <Users size={24} />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="absolute inset-0 rounded-full border-2 border-[#5D00D6]"
                />
              </div>

              {/* Caller info */}
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-[#5D00D6] font-bold uppercase tracking-widest mb-1">Incoming External Call</p>
                <p className="text-[18px] font-bold text-[#0c1024] leading-none mb-1 truncate">+61 2 9000 0000</p>
                <p className="text-[12px] text-gray-400">Sydney, NSW · Australian PSTN</p>
              </div>

              {/* Duration counter */}
              <div className="text-right shrink-0">
                <motion.p
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="text-[14px] font-bold text-[#5D00D6] tabular-nums"
                >00:42</motion.p>
                <p className="text-[10px] text-gray-400 font-medium">Active</p>
              </div>
            </div>

            {/* Audio waveform */}
            <div className="mt-4 flex items-center gap-0.5 h-8">
              {[...Array(28)].map((_, i) => {
                const heights = [4,6,10,14,8,12,16,10,6,8,14,10,6,4,8,12,10,14,8,6,10,12,8,6,10,8,6,4];
                return (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-full bg-[#5D00D6]/30"
                    style={{ height: `${heights[i]}px` }}
                    animate={{ height: [`${heights[i]}px`, `${heights[(i + 4) % 28]}px`, `${heights[i]}px`] }}
                    transition={{ duration: 0.8 + i * 0.06, repeat: Infinity, ease: 'easeInOut' }}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* ── CALL CONTROLS ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#111827] rounded-2xl px-6 py-4 flex items-center justify-between mb-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <Mic size={16} className="text-white" />
              </div>
              <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                <Video size={16} className="text-white/30" />
              </div>
              <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                <PhoneCall size={16} className="text-white/30" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-400 transition-colors">
                <Phone size={18} className="text-white" />
              </button>
              <button className="w-11 h-11 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30 hover:bg-red-400 transition-colors">
                <Phone size={18} className="text-white rotate-[135deg]" />
              </button>
            </div>
          </motion.div>

          {/* ── STATUS / ROUTE INDICATORS ─────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-3"
          >
            {[
              { icon: <ShieldCheck size={14} />, label: 'TLS Encrypted' },
              { icon: <Zap size={14} />, label: 'C9 Gateway' },
              { icon: <PhoneIncoming size={14} />, label: '1300 · 1800' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 bg-gray-50 rounded-xl py-3 px-2">
                <div className="text-[#5D00D6]">{item.icon}</div>
                <span className="text-[10px] font-bold text-gray-500 text-center leading-tight">{item.label}</span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* ── BOTTOM STAT STRIP ─────────────────────────────── */}
        <div className="border-t border-gray-50 px-6 py-4 grid grid-cols-3 divide-x divide-gray-100">
          {[
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '< 1hr', label: 'Setup Time' },
            { value: '70%', label: 'Cost Savings' },
          ].map((s, i) => (
            <div key={i} className="text-center px-4">
              <p className="text-[16px] font-bold text-[#0c1024] leading-none">{s.value}</p>
              <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

      </div>

      {/* ── FLOATING BADGE ────────────────────────────────── */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-4 hidden lg:block"
      >
        <div className="bg-white border border-gray-100 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#5D00D6] flex items-center justify-center">
            <CheckCircle2 size={12} className="text-white" />
          </div>
          <div>
            <p className="text-[12px] font-bold text-[#0c1024] leading-none mb-0.5">Microsoft Certified</p>
            <p className="text-[10px] text-gray-400">Direct Routing Partner</p>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
