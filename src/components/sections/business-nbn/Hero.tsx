'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, Wifi, Zap, Shield, Activity, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const speedTiers = [
  { speed: '50/50',     mbps: 50,   unit: 'Mbps', tag: 'Entry',      tagBg: 'bg-blue-50',   tagText: 'text-blue-600',   barWidth: '5%',   latency: 12, uptime: 99.5  },
  { speed: '250/250',   mbps: 250,  unit: 'Mbps', tag: 'Business',   tagBg: 'bg-green-50',  tagText: 'text-green-600',  barWidth: '25%',  latency: 8,  uptime: 99.9  },
  { speed: '500/500',   mbps: 500,  unit: 'Mbps', tag: 'Enterprise', tagBg: 'bg-amber-50',  tagText: 'text-amber-600',  barWidth: '50%',  latency: 5,  uptime: 99.95 },
  { speed: '1000/1000', mbps: 1000, unit: 'Mbps', tag: 'Premium',    tagBg: 'bg-purple-50', tagText: 'text-purple-600', barWidth: '100%', latency: 3,  uptime: 99.99 },
];

const trustSignals = [
  'nbn Accredited Adviser',
  'Up to 1000/1000 Mbps',
  '4G LTE failover included',
  '4-hour eSLA available',
];

function useSimulatedThroughput(maxMbps: number) {
  const [data, setData] = useState<number[]>(Array(16).fill(0));
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const base = maxMbps * 0.65;
        const jitter = maxMbps * 0.28 * Math.random();
        return [...prev.slice(1), Math.min(maxMbps, base + jitter)];
      });
    }, 450);
    return () => clearInterval(interval);
  }, [maxMbps]);
  return data;
}

function useSimulatedLatency(baseLatency: number) {
  const [latency, setLatency] = useState(baseLatency);
  useEffect(() => {
    const interval = setInterval(() => {
      const jitter = Math.round((Math.random() - 0.5) * 4);
      setLatency(Math.max(1, baseLatency + jitter));
    }, 1100);
    return () => clearInterval(interval);
  }, [baseLatency]);
  return latency;
}

function useCounter(target: number, duration = 500) {
  const [val, setVal] = useState(0);
  const prev = useRef(0);
  useEffect(() => {
    const start = prev.current;
    const diff = target - start;
    const steps = 18;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setVal(Math.round(start + diff * (step / steps)));
      if (step >= steps) { clearInterval(timer); prev.current = target; }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, duration]);
  return val;
}

function Sparkline({ data, maxVal }: { data: number[], maxVal: number }) {
  const w = 200, h = 36;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - (v / maxVal) * h}`).join(' ');
  const fill = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - (v / maxVal) * h}`);
  const fillPath = `M${fill[0]} ${fill.slice(1).map(p => `L${p}`).join(' ')} L${w},${h} L0,${h} Z`;
  const lastX = (data.length - 1) / (data.length - 1) * w;
  const lastY = h - (data[data.length - 1] / maxVal) * h;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height: 36 }}>
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5D00D6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#5D00D6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fillPath} fill="url(#sg)" />
      <polyline points={pts} fill="none" stroke="#5D00D6" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={lastX} cy={lastY} r="2.5" fill="#5D00D6" />
    </svg>
  );
}

export default function Hero() {
  const [activeSpeed, setActiveSpeed] = useState(3);
  const tier = speedTiers[activeSpeed];
  const throughput = useSimulatedThroughput(tier.mbps);
  const liveLatency = useSimulatedLatency(tier.latency);
  const displaySpeed = useCounter(tier.mbps);
  const [failoverActive, setFailoverActive] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setFailoverActive(true);
      setTimeout(() => setFailoverActive(false), 2200);
    }, 9000);
    return () => clearTimeout(t);
  }, []);

  const scrollToPlanComparison = () => {
    const el = document.getElementById('plan-comparison');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="w-full bg-white flex items-center overflow-hidden pt-4 pb-8 md:pt-6 md:pb-10"
      
    >
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-center w-full">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-[#5D00D6]/5 border border-[#5D00D6]/20 rounded-full px-4 py-1.5 flex items-center gap-2">
                <Award size={14} className="text-[#5D00D6] shrink-0" />
                <span className="c9-eyebrow !text-[11px]">nbn Accredited Business Adviser</span>
              </div>
            </div>

            <h1 className="c9-hero-title text-[#1A1A2E] mt-8">
              Reliable business internet <br className="hidden lg:block" /> that just works —{' '}
              <span className="text-[#5D00D6]">no downtime, <br className="hidden lg:block" /> no confusion.</span>
            </h1>

            <p className="c9-body text-[#6B7280] max-w-[580px] mt-6 md:text-[18px]">
              We help you choose, set up, and manage the right nbn connection for your business. 
              Get enterprise-grade speeds and local support you can actually talk to.
            </p>

            {/* Address Checker Input */}
            <div className="relative mt-10 w-full lg:max-w-[540px]">
              <div className="flex bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden focus-within:ring-4 focus-within:ring-[#5D00D6]/5 focus-within:border-[#5D00D6] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.04)] h-14 md:h-16">
                <div className="flex items-center pl-4 md:pl-5 pr-2 text-gray-400">
                  <Globe size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="Enter address..." 
                  className="flex-1 bg-transparent outline-none text-[14px] md:text-[16px] font-medium text-[#1A1A2E] placeholder:text-gray-400 w-full"
                />
                <button 
                  onClick={() => {
                    const el = document.getElementById('consultation-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#5D00D6] text-white px-6 md:px-10 font-bold text-[14px] md:text-[15px] hover:bg-[#4B00AD] transition-all whitespace-nowrap h-full"
                >
                  Check
                </button>
              </div>


            </div>

            <div className="mt-10 flex items-center gap-8">
              <button 
                onClick={scrollToPlanComparison} 
                className="text-[15px] font-bold text-[#1A1A2E] hover:text-[#5D00D6] flex items-center gap-2 group transition-colors cursor-pointer"
              >
                Or, compare all plans <Zap size={16} className="text-[#5D00D6] transition-transform group-hover:scale-110" />
              </button>
              
              <div className="w-px h-4 bg-gray-200" />
              
              <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
                <Shield size={14} className="text-green-500" />
                SLA Backed
              </div>
            </div>
          </div>

          {/* RIGHT — Light theme live dashboard */}
          <div
            className="rounded-2xl p-4 flex flex-col gap-3 border"
            style={{ background: '#FAFAFA', border: '1px solid rgba(93,0,214,0.12)' }}
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wider">C9 Live Connection Monitor</span>
              <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-2.5 py-0.5">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
                <span className="text-[10px] text-green-600 font-semibold">Live</span>
              </div>
            </div>

            {/* Speed counter + sparkline */}
            <div className="bg-white rounded-xl p-3 flex items-center gap-4 border border-[rgba(93,0,214,0.08)]">
              <div className="shrink-0">
                <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wider mb-0.5">Active Throughput</p>
                <div className="flex items-baseline gap-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeSpeed}
                      className="text-[32px] font-bold text-[#1A1A2E] leading-none"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                    >
                      {displaySpeed}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-[12px] text-[#9CA3AF]">Mbps</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <Sparkline data={throughput} maxVal={tier.mbps} />
              </div>
            </div>

            {/* Speed tier buttons — compact 2x2 grid */}
            <div className="grid grid-cols-2 gap-1.5">
              {speedTiers.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSpeed(i)}
                  className={`rounded-xl p-2.5 px-3 flex justify-between items-center border transition-all duration-200 cursor-pointer text-left ${
                    activeSpeed === i
                      ? 'bg-[#F3EEFF] border-[#5D00D6]'
                      : 'bg-white border-gray-200 hover:border-[#5D00D6]'
                  }`}
                >
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[14px] text-[#1A1A2E] font-bold">{t.speed}</span>
                    <span className="text-[9px] text-[#9CA3AF]"> Mbps</span>
                  </div>
                  <span className={`text-[9px] font-semibold rounded-full px-1.5 py-0.5 ${t.tagBg} ${t.tagText}`}>
                    {t.tag}
                  </span>
                </button>
              ))}
            </div>

            {/* Live stats: latency / uptime / failover */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white border border-gray-100 rounded-xl p-2.5 flex flex-col gap-0.5">
                <div className="flex items-center gap-1 mb-0.5">
                  <Activity size={10} className="text-[#9CA3AF]" />
                  <span className="text-[9px] text-[#9CA3AF] uppercase tracking-wider">Latency</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={liveLatency}
                    className="text-[18px] font-bold text-green-600 leading-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {liveLatency}ms
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-2.5 flex flex-col gap-0.5">
                <div className="flex items-center gap-1 mb-0.5">
                  <Shield size={10} className="text-[#9CA3AF]" />
                  <span className="text-[9px] text-[#9CA3AF] uppercase tracking-wider">Uptime</span>
                </div>
                <span className="text-[18px] font-bold text-[#1A1A2E] leading-none">{tier.uptime}%</span>
              </div>

              <div className={`rounded-xl p-2.5 flex flex-col gap-0.5 border transition-all duration-500 ${failoverActive ? 'bg-purple-50 border-[#5D00D6]' : 'bg-white border-gray-100'}`}>
                <div className="flex items-center gap-1 mb-0.5">
                  <Wifi size={10} className={failoverActive ? 'text-[#5D00D6]' : 'text-[#9CA3AF]'} />
                  <span className="text-[9px] text-[#9CA3AF] uppercase tracking-wider">Failover</span>
                </div>
                <span className={`text-[13px] font-bold leading-none ${failoverActive ? 'text-[#5D00D6]' : 'text-green-600'}`}>
                  {failoverActive ? '4G LTE' : 'Ready'}
                </span>
              </div>
            </div>

            {/* Network path */}
            <div className="bg-white border border-gray-100 rounded-xl p-3">
              <p className="text-[9px] text-[#9CA3AF] uppercase tracking-wider mb-2">Network Path</p>
              <div className="flex items-center gap-1.5">
                <div className="flex flex-col items-center gap-0.5 shrink-0">
                  <div className="w-7 h-7 rounded-lg bg-[#F3EEFF] border border-[#5D00D6]/20 flex items-center justify-center">
                    <Globe size={13} className="text-[#5D00D6]" />
                  </div>
                  <span className="text-[7px] text-[#9CA3AF]">Office</span>
                </div>
                <div className="flex-1 relative h-1.5 flex items-center">
                  <div className="w-full h-px bg-gray-200" />
                  <motion.div
                    className="absolute w-2 h-2 rounded-full bg-[#5D00D6]"
                    style={{ boxShadow: '0 0 5px #5D00D6' }}
                    animate={{ left: ['0%', '100%'] }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
                <div className="flex flex-col items-center gap-0.5 shrink-0">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                    <Zap size={13} className="text-blue-500" />
                  </div>
                  <span className="text-[7px] text-[#9CA3AF]">nbn Node</span>
                </div>
                <div className="flex-1 relative h-1.5 flex items-center">
                  <div className="w-full h-px bg-gray-200" />
                  <motion.div
                    className="absolute w-2 h-2 rounded-full bg-blue-400"
                    style={{ boxShadow: '0 0 5px #60A5FA' }}
                    animate={{ left: ['0%', '100%'] }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: 'linear', delay: 0.55 }}
                  />
                </div>
                <div className="flex flex-col items-center gap-0.5 shrink-0">
                  <div className="w-7 h-7 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center">
                    <Globe size={13} className="text-green-500" />
                  </div>
                  <span className="text-[7px] text-[#9CA3AF]">Internet</span>
                </div>
              </div>
            </div>

            <p className="text-[9px] text-[#D1D5DB] text-center italic">
              Speeds above 100/40 Mbps on FTTP only. Actual speeds confirmed on connection.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

