'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Smartphone, Video, Headphones, Building2, Zap, PhoneIncoming, CheckCircle2, Wifi } from 'lucide-react';

/* ─── Data ─── */
const PRODUCTS = [
  { icon: Phone,      label: 'Cloud PBX',      desc: 'Hosted desk phones'   },
  { icon: Wifi,       label: 'SIP Trunking',   desc: 'Replace legacy PSTN'  },
  { icon: Video,      label: 'MS Teams',        desc: 'Direct routing'       },
  { icon: Smartphone, label: 'Mobile App',      desc: 'Work from anywhere'   },
  { icon: Headphones, label: 'Contact Centre',  desc: 'C9 phone system Omnichannel'      },
  { icon: Building2,  label: '1300 / 1800',     desc: 'National numbers'     },
];

const CALLS = [
  { from: '1800 C9 VOICE', dest: 'Sydney Office',  status: 'Connected' },
  { from: 'Inbound 1300',  dest: 'Teams Calling',  status: 'Routed'    },
  { from: '+61 498 XXX',   dest: 'Mobile App',     status: 'Forwarded' },
];

export default function VoiceVisualNew() {
  const [callIdx, setCallIdx]       = useState(0);
  const [productIdx, setProductIdx] = useState(0);

  useEffect(() => {
    const t1 = setInterval(() => setCallIdx(i => (i + 1) % CALLS.length), 3000);
    const t2 = setInterval(() => setProductIdx(i => (i + 1) % PRODUCTS.length), 2400);
    return () => { clearInterval(t1); clearInterval(t2); };
  }, []);

  const call    = CALLS[callIdx]    ?? CALLS[0];
  const product = PRODUCTS[productIdx] ?? PRODUCTS[0];

  return (
    <div className="w-full flex flex-col gap-4">

      {/* ═══════════════════════════════════════
          ROW 1: Tiles ABOVE/beside — NOT on image
      ══════════════════════════════════════= */}
      <div className="flex gap-3 items-stretch">

        {/* Tile A: Incoming call (cycles) */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-md p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#5D00D6]/8 flex items-center justify-center shrink-0">
              <PhoneIncoming size={14} className="text-[#5D00D6]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-0.5">Active Call</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={callIdx}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-[14px] font-bold text-[#0c1024] leading-none truncate"
                >
                  {call.from}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={callIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1.5"
            >
              <CheckCircle2 size={11} className="text-green-500 shrink-0" />
              <span className="text-[10px] font-bold text-green-600 truncate">
                → {call.dest} · {call.status}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Tile B: Uptime */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="bg-[#5D00D6] rounded-2xl shadow-lg shadow-[#5D00D6]/20 p-4 flex flex-col justify-between min-w-[110px]"
        >
          <Zap size={14} className="text-white/70" />
          <div>
            <p className="text-[22px] font-bold text-white leading-none">99.95%</p>
            <p className="text-[8px] font-bold text-white/50 uppercase tracking-widest mt-1">Uptime SLA</p>
          </div>
        </motion.div>

        {/* Tile C: 2-week go-live */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-md p-4 flex flex-col justify-between min-w-[110px]"
        >
          <Phone size={14} className="text-[#5D00D6]" />
          <div>
            <p className="text-[22px] font-bold text-[#0c1024] leading-none">2 wks</p>
            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Avg Go-Live</p>
          </div>
        </motion.div>

      </div>

      {/* ═══════════════════════════════════════
          ROW 2: IMAGE — full uncropped display
      ══════════════════════════════════════= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 mt-2 relative"
        style={{ aspectRatio: '16 / 9' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/voice-hero.png"
          alt="C9 Voice managed phone system — professional using IP desk phone"
          className="absolute inset-0 w-full h-full object-cover object-center"
          draggable={false}
        />
      </motion.div>

    </div>
  );
}
