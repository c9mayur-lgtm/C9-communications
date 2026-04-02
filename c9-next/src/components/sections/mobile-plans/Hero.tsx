'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform, animate } from 'framer-motion';
import { ArrowRight, Smartphone, Share2, ShieldCheck, FileText, Globe, FileDown, Wifi, CheckCircle2, TrendingUp, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

// ─── Animated Count-Up Number ─────────────────────────────────────
function CountUp({ to, duration = 1.4, delay = 0, suffix = '' }: { to: number; duration?: number; delay?: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        const start = performance.now() + delay * 1000;
        const tick = (now: number) => {
          const elapsed = Math.max(0, now - start);
          const p = Math.min(elapsed / (duration * 1000), 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(eased * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration, delay]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ─── Smart Usage Bar with shimmer ─────────────────────────────────
function UsageBar({ label, used, total, color, delay = 0 }: { label: string; used: number; total: number; color: string; delay?: number }) {
  const pct = Math.round((used / total) * 100);
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="text-[12px] font-bold text-slate-500">{label}</span>
        <span className="text-[12px] font-bold" style={{ color }}>
          <CountUp to={used} delay={delay} />GB
          <span className="text-slate-300 font-normal"> / {total}GB</span>
        </span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ delay, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: color }}
        >
          {/* shimmer sweep */}
          <motion.div
            animate={{ x: ['-200%', '200%'] }}
            transition={{ delay: delay + 1.4, duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
          />
        </motion.div>
      </div>
    </div>
  );
}

// ─── Live Activity Feed item ──────────────────────────────────────
const EVENTS = [
  { msg: 'Field Team 1 — data balanced automatically', dot: 'bg-emerald-500' },
  { msg: 'New SIM activated: Sydney CBD office', dot: 'bg-[#5D00D6]' },
  { msg: 'Invoice generated: $399.00 ex. GST', dot: 'bg-amber-400' },
  { msg: 'Support ticket #4821 resolved in 4 min', dot: 'bg-emerald-500' },
  { msg: 'International roaming activated: Singapore', dot: 'bg-blue-500' },
  { msg: 'Fleet data synced: 28 services online', dot: 'bg-emerald-500' },
];

function LiveFeed() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex(p => (p + 1) % EVENTS.length), 2800);
    return () => clearInterval(t);
  }, []);
  const ev = EVENTS[index];
  return (
    <div className="px-6 py-3 bg-[#F8F7FF] border-b border-[#5D00D6]/5 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-2.5"
        >
          <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${ev.dot}`} />
          <span className="text-[11px] font-medium text-slate-500 truncate">{ev.msg}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Service Row with stagger ─────────────────────────────────────
function ServiceRow({ name, signal, type, delay }: { name: string; signal: string; type: string; delay: number }) {
  const [bars, setBars] = useState(4);
  useEffect(() => {
    const t = setInterval(() => setBars(b => b === 4 ? 3 : 4), 3000 + delay * 400);
    return () => clearInterval(t);
  }, [delay]);
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
    >
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, delay: delay + 0.5, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"
        />
        <span className="text-[13.5px] font-bold text-[#1A1A2E]">{name}</span>
      </div>
      <div className="flex items-center gap-3">
        {/* Signal bars */}
        <div className="flex items-end gap-[2px] h-3.5">
          {[1,2,3,4].map(b => (
            <motion.div
              key={b}
              animate={{ opacity: b <= bars ? 1 : 0.2 }}
              transition={{ duration: 0.3 }}
              style={{ height: `${b * 25}%`, backgroundColor: b <= bars ? '#5D00D6' : '#E2E8F0' }}
              className="w-1 rounded-sm"
            />
          ))}
        </div>
        <span className="text-[10px] font-black text-[#5D00D6] bg-[#5D00D6]/8 px-2 py-0.5 rounded">{signal}</span>
        <span className="text-[10px] font-medium text-slate-400">{type}</span>
      </div>
    </motion.div>
  );
}

// ─── Animated total pool used ─────────────────────────────────────
function LivePool() {
  const [val, setVal] = useState(842);
  useEffect(() => {
    const t = setInterval(() => setVal(v => v + Math.floor(Math.random() * 3 + 1)), 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <motion.div
      className="flex items-baseline gap-1.5"
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 2.2, repeat: Infinity }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={val}
          initial={{ opacity: 0.7, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[22px] font-bold text-[#5D00D6]"
        >
          {val}GB
        </motion.span>
      </AnimatePresence>
      <span className="text-[12px] text-slate-300 font-medium">/ 1200GB used</span>
    </motion.div>
  );
}

export default function Hero() {
  const handleQuoteClick = () => document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      className="relative py-12 md:py-16 bg-white overflow-hidden min-h-[65vh] flex items-center"
      style={{ fontFamily: '"Proxima Nova", sans-serif' }}
    >
      {/* Ambient BG */}
      <div className="absolute top-0 right-[-5%] w-[50%] h-[80%] bg-[#5D00D6]/4 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-0 w-[25%] h-[50%] bg-[#5D00D6]/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-12 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col items-start lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 bg-[#5D00D6]/8 text-[#5D00D6] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] border border-[#5D00D6]/15 mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]"
              />
              Telco · Business Mobile Plans
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold tracking-tight mb-6 text-[#1A1A2E] leading-[1.05]"
            >
              Business mobile fleet plans.<br />
              One pool. One bill.<br />
              <span className="text-[#5D00D6]">One C9.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-[17px] md:text-[18px] text-[#6B7280] max-w-[540px] leading-relaxed font-medium"
            >
              Optus coverage, 5G speeds, and Australian-based support that actually answers the phone — all on a single fleet bill.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-4 mt-10"
            >
              <Button
                onClick={handleQuoteClick}
                className="bg-[#5D00D6] text-white hover:bg-[#4c00b0] font-bold h-14 px-10 rounded-full text-[15px] shadow-xl shadow-purple-900/20 flex items-center gap-2 hover:-translate-y-0.5 transition-all"
              >
                Build My Mobile Fleet <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-slate-200 bg-white text-[#1A1A2E] hover:bg-[#5D00D6]/5 hover:border-[#5D00D6] hover:text-[#5D00D6] font-bold h-14 px-10 rounded-full text-[15px] flex items-center gap-2 hover:-translate-y-0.5 transition-all group"
              >
                <FileDown size={17} className="text-[#5D00D6] group-hover:text-[#5D00D6] transition-colors" /> Download Fleet Guide
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10 mt-12"
            >
              {[
                { icon: Globe, text: "Optus network coverage" },
                { icon: Smartphone, text: "4G and 5G plans available" },
                { icon: Share2, text: "Shared data pool — no waste" },
                { icon: FileText, text: "Single bill for all services" },
                { icon: ShieldCheck, text: "Dedicated account manager" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.75 + i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0">
                    <item.icon size={12} className="text-[#5D00D6]" />
                  </div>
                  <span className="text-[14px] font-medium text-[#6B7280]">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — ANIMATED DASHBOARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="block mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-[440px] mx-auto lg:ml-auto rounded-[32px] shadow-[0_32px_80px_-10px_rgba(93,0,214,0.14)] border border-gray-100 overflow-hidden bg-white">

              {/* Subtle top glow */}
              <div className="absolute -top-10 -right-10 w-[180px] h-[180px] bg-[#5D00D6]/8 blur-[60px] pointer-events-none rounded-full" />

              {/* ── HEADER ── */}
              <div className="flex items-center justify-between px-7 pt-7 pb-5 border-b border-gray-50">
                <div className="flex items-center gap-2.5">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="w-8 h-8 rounded-xl bg-[#5D00D6] flex items-center justify-center"
                  >
                    <Wifi size={15} className="text-white" strokeWidth={2} />
                  </motion.div>
                  <span className="text-[13px] font-bold text-[#1A1A2E]">C9 Fleet Dashboard</span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                  <motion.div
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                  />
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Live</span>
                </div>
              </div>

              {/* ── LIVE ACTIVITY FEED ── */}
              <LiveFeed />

              {/* ── SHARED POOL ── */}
              <div className="px-7 py-5 border-b border-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Shared Data Pool</p>
                  <div className="flex items-center gap-1.5 text-emerald-500">
                    <TrendingUp size={11} />
                    <span className="text-[10px] font-bold">70% pool used</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <UsageBar label="Sales Team"   used={312} total={1200} color="#5D00D6" delay={0.8} />
                  <UsageBar label="Operations"   used={218} total={1200} color="#8B5CF6" delay={0.95} />
                  <UsageBar label="Field Staff"  used={312} total={1200} color="#A78BFA" delay={1.1} />
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Live Total</span>
                  <LivePool />
                </div>
              </div>

              {/* ── SERVICE STATUS ── */}
              <div className="px-7 py-4 border-b border-gray-50">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Service Status</p>
                <ServiceRow name="Field Team 1"  signal="5G" type="Active" delay={1.0} />
                <ServiceRow name="Office Fleet"  signal="5G" type="Active" delay={1.1} />
                <ServiceRow name="Regional Site" signal="4G" type="Active" delay={1.2} />
              </div>

              {/* ── BILL FOOTER ── */}
              <div className="px-7 py-5 bg-[#1A1A2E] flex items-center justify-between relative overflow-hidden">
                {/* scanning light */}
                <motion.div
                  animate={{ x: ['-100%', '400%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
                  className="absolute inset-0 w-16 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
                />
                <div>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-1">Current Bill Cycle</p>
                  <p className="text-white text-[14px] font-bold tracking-tight">One Invoice · 28 Services</p>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="flex items-center gap-2 bg-emerald-500 text-white text-[10px] font-bold px-3 py-2 rounded-xl uppercase tracking-wider"
                >
                  <CheckCircle2 size={12} />
                  Synced
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
