'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Headphones, Gauge, Globe, RefreshCcw } from 'lucide-react';

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

const upgradeBlocks = [
  {
    title: 'Symmetrical Bandwidth',
    desc: 'Unlike standard nbn where uploads are throttled, C9 Enterprise Ethernet provides identical upload and download speeds. Critical for cloud backups and teams.',
    icon: Gauge,
    tag: 'PERFORMANCE',
    metrics: [
      { value: '1:1', label: 'ratio guaranteed' },
      { value: '1000M', label: 'upload capacity' }
    ]
  },
  {
    title: 'Financial Uptime SLA',
    desc: "Standard nbn has no time-bound repair commitment. C9 provides a contractually backed eSLA with financial rebates if we don't meet our 4-hour target.",
    icon: ShieldCheck,
    tag: 'RELIABILITY',
    metrics: [
      { value: '4hr', label: 'restoration target' },
      { value: '99.95%', label: 'uptime guarantee' }
    ]
  },
  {
    title: 'Priority Data Class',
    desc: 'Your data travels on a reserved "Class 2" virtual pipe, bypassing residential congestion. No slow-downs during peak Netflix or gaming hours.',
    icon: Zap,
    tag: 'NETWORK CLASS',
    metrics: [
      { value: 'TC2', label: 'priority traffic' },
      { value: '0%', label: 'congestion risk' }
    ]
  },
  {
    title: 'nbn™ Accredited Support',
    desc: 'Bypass the generic call centers. Every C9 account is assigned a dedicated Network Advisor with direct access to nbn™ engineering escalations.',
    icon: Headphones,
    tag: 'HUMAN EXPERTISE',
    metrics: [
      { value: '2min', label: 'avg answer time' },
      { value: '100%', label: 'Australian support' }
    ]
  },
  {
    title: 'Managed Edge Hardware',
    desc: 'We provide enterprise-grade managed routers with real-time telemetry. We often find and fix line sync issues before your staff even notices.',
    icon: RefreshCcw,
    tag: 'HARDWARE',
    metrics: [
      { value: '24/7', label: 'proactive sync' },
      { value: 'OTA', label: 'remote patches' }
    ]
  },
  {
    title: 'Direct Cloud Pathing',
    desc: 'Our network is peered directly with major cloud providers (AWS, Azure, Google). Your traffic takes the shortest possible path to the data center.',
    icon: Globe,
    tag: 'CONNECTIVITY',
    metrics: [
      { value: '4ms', label: 'core latency' },
      { value: '0.1ms', label: 'jitter avg' }
    ]
  }
];

export default function TheBusinessUpgrade() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-gray-100" >
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="text-[#5D00D6] text-[13px] font-bold uppercase tracking-[0.4em] mb-6 block">The Enterprise Edge</span>
          <h2 className="c9-section-heading">
            The Business Upgrade.<br /> What the Pros use.
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#6B7280] mt-8 leading-relaxed">
            When your business scales beyond standard fibre, you need a dedicated ethernet pipe that is contractually backed, professionally managed, and built for 24/7 operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-100 rounded-none overflow-hidden">
          {upgradeBlocks.map((block, i) => (
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
              <p className="text-gray-500 text-[15px] leading-relaxed mb-10 flex-grow">
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

