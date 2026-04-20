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
    title: 'Frustratingly Slow Speeds',
    desc: 'Residential nbn plans are often congested during peak hours, leading to slow load times and buffering when you need to be productive.',
    icon: Gauge,
    tag: 'PERFORMANCE GAP',
    metrics: [
      { value: '70%', label: 'congestion risk' },
      { value: 'Peak', label: 'slowdowns' }
    ]
  },
  {
    title: 'Frequent Connection Dropouts',
    desc: 'Unreliable hardware and poor line quality lead to dropouts. Every time you lose connection, your team loses focus and your customers lose patience.',
    icon: RefreshCcw,
    tag: 'RELIABILITY GAP',
    metrics: [
      { value: 'N/A', label: 'uptime guarantee' },
      { value: 'Zero', label: 'failover' }
    ]
  },
  {
    title: 'Generic Support Queues',
    desc: "When things go wrong, you're stuck in a loop with a generic call centre. They don't know your business and haven't seen your setup before.",
    icon: Headphones,
    tag: 'SUPPORT GAP',
    metrics: [
      { value: '60m+', label: 'hold times' },
      { value: 'Level 1', label: 'only' }
    ]
  },
  {
    title: 'Slow Upload Speeds',
    desc: 'Standard nbn is asymmetrical, meaning your uploads are a fraction of your downloads. This makes cloud backups and video calls painful.',
    icon: Zap,
    tag: 'BANDWIDTH GAP',
    metrics: [
      { value: '10:1', label: 'download ratio' },
      { value: 'Bottleneck', label: 'impact' }
    ]
  },
  {
    title: 'No Repair Commitments',
    desc: 'Residential plans have no guaranteed repair times. If yours goes down, you could be offline for days with no accountability from your provider.',
    icon: ShieldCheck,
    tag: 'SERVICE GAP',
    metrics: [
      { value: 'None', label: 'repair SLA' },
      { value: 'Risk', label: 'financial loss' }
    ]
  },
  {
    title: 'Residential Routing',
    desc: 'Your traffic is treated the same as Netflix and gaming traffic. This higher latency can cause issues for VoIP and remote desktop applications.',
    icon: Globe,
    tag: 'PATH GAP',
    metrics: [
      { value: 'High', label: 'core latency' },
      { value: 'Shared', label: 'backbone' }
    ]
  }
];

export default function TheBusinessUpgrade() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-gray-100" >
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="text-rose-500 text-[13px] font-bold uppercase tracking-[0.4em] mb-6 block">Common Frustrations</span>
          <h2 className="c9-section-heading">
            Tired of internet that<br />lets you down?
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#6B7280] mt-8 leading-relaxed">
            Standard residential-grade connections weren't built for the demands of a modern business. If you're experiencing these issues, you're not alone.
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

