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
    title: 'Slow Loading During Busy Hours',
    desc: 'Standard nbn plans are often congested during business hours. When your team needs to be productive, your connection slows down to a crawl.',
    icon: Gauge,
    tag: 'CONGESTION',
  },
  {
    title: 'Calls and Meetings Dropping',
    desc: 'Unreliable hardware and poor connection quality lead to dropouts. Every time you lose your connection, you lose focus and client trust.',
    icon: RefreshCcw,
    tag: 'INTERRUPTIONS',
  },
  {
    title: 'Shared Network Performance',
    desc: "Standard connections share a 'neighborhood pool' with residential users. This means your business performance is affected by people around you streaming video.",
    icon: Globe,
    tag: 'SHARED ACCESS',
  },
  {
    icon: Headphones,
    title: 'No Direct Support',
    desc: "When the internet goes down, you're stuck in a loop with a generic call centre. No one knows your business, and no one is accountable for the fix.",
    tag: 'SUPPORT GAP',
  }
];

export default function TheBusinessUpgrade() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-gray-100" >
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="text-rose-500 text-[13px] font-bold uppercase tracking-[0.4em] mb-6 block">The Problem</span>
          <h2 className="c9-section-heading !text-[32px] md:!text-[42px]">
            Why standard nbn setups<br />cause problems
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#6B7280] mt-8 leading-relaxed">
            Residential-grade internet wasn't built for the demands of a modern office. If your team is struggling with these issues, you're on a connection meant for home use, not business.
          </p>
          <p className="text-[15px] font-bold text-[#1A1A2E] mt-6">
            This is where most small businesses struggle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-100 rounded-none overflow-hidden">
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
              <p className="text-gray-500 text-[15px] leading-relaxed flex-grow">
                {block.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

