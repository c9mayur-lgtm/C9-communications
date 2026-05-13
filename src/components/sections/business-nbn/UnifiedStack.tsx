'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Smartphone, ShieldCheck, Zap, Network, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const stackItems = [
  {
    icon: Network,
    title: 'Stable Video Calls',
    subtitle: 'VOIP & MEETINGS',
    desc: 'Enjoy clear audio and consistent video quality for Microsoft Teams, Zoom, and VoIP calls without the frustration of jitter.',
    link: '#',
    label: 'Reliable Voice'
  },
  {
    icon: Zap,
    title: 'Cloud App Performance',
    subtitle: 'M365 & XERO',
    desc: 'Faster access to essential cloud-based tools ensures your team can work efficiently without waiting for pages to load.',
    link: '#',
    label: 'Optimised Access'
  },
  {
    icon: ShieldCheck,
    title: 'Minimal Interruptions',
    subtitle: 'CONSISTENCY',
    desc: 'A properly managed and configured connection means fewer dropouts and more time spent on business-critical tasks.',
    link: '#',
    label: 'Team Productivity'
  }
];

export default function UnifiedStack() {
  return (
    <section className="w-full bg-[#F8F7FF] py-24 px-6 md:px-8 border-y border-gray-100" >
      <div className="container mx-auto max-w-[1240px]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
           <div className="max-w-2xl">
              <span className="c9-eyebrow mb-4 block">THE C9 DIFFERENCE</span>
              <h2 className="c9-section-heading !text-[32px] md:!text-[42px]">
                 What this means <br className="hidden md:block" /> for your business
              </h2>
           </div>
           <p className="c9-body max-w-[420px] font-medium leading-relaxed text-[#6B7280]">
              A reliable setup isn't just about speed — it's about providing your team with the stability they need to perform at their best every day.
           </p>
        </div>

        {/* 3-Column Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {stackItems.map((item, i) => {
             const Icon = item.icon;
             return (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-white rounded-[32px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col hover:shadow-xl transition-all h-full"
               >
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-[#F8F7FF] text-[#5D00D6] flex items-center justify-center mb-8 border border-[#5D00D6]/5 group-hover:scale-110 group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
                     <Icon size={32} strokeWidth={1.5} />
                  </div>

                {/* Content */}
                <span className="c9-eyebrow !text-[#5D00D6] !text-[10px] mb-2 block">{item.subtitle}</span>
                <h3 className="c9-card-title mb-4 group-hover:text-[#5D00D6] transition-colors">{item.title}</h3>
                <p className="c9-body mb-10 flex-1">
                   {item.desc}
                </p>
                </motion.div>
              );
            })}
        </div>

      </div>
    </section>
  );
}

