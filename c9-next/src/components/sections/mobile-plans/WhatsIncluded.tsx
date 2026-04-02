'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Headphones, Gauge, Globe, RefreshCcw, Smartphone, Share2, Timer, Shield } from 'lucide-react';

const CountUp = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const nodeRef = useRef<HTMLSpanElement>(null);
  const startValue = 0;
  
  const numericMatch = value.match(/[\d.]+/);
  const suffix = value.replace(/[\d.]+/, "");
  const target = numericMatch ? parseFloat(numericMatch[0]) : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start: number | null = null;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / (duration * 1000), 1);
            const current = Math.floor(progress * (target - startValue) + startValue);
            setDisplayValue(current.toString() + suffix);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [value, target, suffix, duration]);

  return <span ref={nodeRef}>{displayValue}</span>;
};

const ITEMS = [
  {
    title: 'Nationwide 5G Access',
    desc: 'Powered by the Optus 4G and 5G network. Access ultra-fast mobile data across Australia with Tier-1 priority pathing for business mobility.',
    icon: Zap,
    tag: 'NETWORK PERFORMANCE',
    metrics: [
      { value: '5G', label: 'network coverage' },
      { value: '98.5%', label: 'population reach' }
    ]
  },
  {
    title: 'Shared Data Pooling',
    desc: "Single data pool for your entire fleet. When one team member uses less, another uses more, with zero waste and zero individual overage charges.",
    icon: Share2,
    tag: 'FLEET EFFICIENCY',
    metrics: [
      { value: '0%', label: 'individual waste' },
      { value: '100%', label: 'shared pool' }
    ]
  },
  {
    title: 'Enterprise Security (MDM)',
    desc: 'Compatible with Microsoft Intune and top MDM platforms. Deploy security policies, remote wipe devices, and manage mobile fleet security from one console.',
    icon: ShieldCheck,
    tag: 'COMPLIANCE',
    metrics: [
      { value: 'ISO', label: 'compliance ready' },
      { value: 'OTA', label: 'remote wipe' }
    ]
  },
  {
    title: 'Unlimited National Calling',
    desc: 'Unlimited standard national calls, mobile calls, and 13/1300/1800 numbers included on every fleet service. Communicate freely without watching the clock.',
    icon: Smartphone,
    tag: 'CONNECTIVITY',
    metrics: [
      { value: '∞', label: 'standard calls' },
      { value: '0$', label: 'extra call fees' }
    ]
  },
  {
    title: 'Australian Support Hub',
    desc: 'Bypass offshore call centres. Access a dedicated Australian-based mobile support desk with Tier-1 escalation paths to network engineers.',
    icon: Headphones,
    tag: 'HUMAN EXPERTISE',
    metrics: [
      { value: '2min', label: 'avg answer time' },
      { value: '100%', label: 'Australian support' }
    ]
  },
  {
    title: 'Global Roaming Capability',
    desc: 'Stay connected beyond the mainland. High-speed international roaming available in 100+ countries with simple, cost-effective daily data packs.',
    icon: Globe,
    tag: 'GLOBAL REACH',
    metrics: [
      { value: '100+', label: 'countries' },
      { value: '4G/5G', label: 'intl speeds' }
    ]
  }
];

export default function WhatsIncluded() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-gray-100" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        <div className="text-center mb-10 md:mb-12 max-w-4xl mx-auto">
          <span className="text-[#5D00D6] text-[13px] font-bold uppercase tracking-[0.4em] mb-6 block">The Enterprise Edge</span>
          <h2 className="text-[36px] md:text-[52px] font-bold text-[#1A1A2E] leading-[1.1] tracking-tight">
            The Business Fleet Upgrade.<br /> What the Pros use.
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#6B7280] mt-8 leading-relaxed max-w-3xl mx-auto">
            When your business scales beyond retail SIM packs, you need a mobile fleet that is professionally managed, contractually transparent, and built for 24/7 operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-100 rounded-none overflow-hidden">
          {ITEMS.map((block, i) => (
            <div key={i} className="p-10 md:p-12 border-r border-b border-gray-100 flex flex-col group transition-all duration-300 hover:bg-[#F8F7FF]">
              <div className="mb-6 self-start">
                <span className="px-3 py-1 rounded-full bg-[#5D00D6]/5 border border-[#5D00D6]/10 text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest">
                  {block.tag}
                </span>
              </div>
              <div className="mb-6">
                <block.icon size={32} strokeWidth={1.5} className="text-[#5D00D6]" />
              </div>
              <h3 className="text-[20px] font-bold text-[#1A1A2E] mb-4 tracking-tight">{block.title}</h3>
              <p className="text-[#6B7280] text-[15.5px] leading-relaxed mb-10 flex-grow font-medium">
                {block.desc}
              </p>

              {/* Metrics Row */}
              <div className="mt-auto pt-8 border-t border-gray-100 flex items-center gap-0">
                {block.metrics.map((m, mi) => (
                  <React.Fragment key={mi}>
                    <div className="flex-1">
                      <div className="text-[26px] font-bold text-[#5D00D6] leading-none tracking-tight">
                        <CountUp value={m.value} />
                      </div>
                      <div className="text-[11px] text-[#9CA3AF] mt-1.5 font-bold uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                    {mi === 0 && <div className="h-10 w-px bg-gray-200 mx-6"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
