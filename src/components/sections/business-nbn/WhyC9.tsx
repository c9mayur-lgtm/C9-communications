'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Zap, ShieldAlert, MonitorCheck, TabletSmartphone } from 'lucide-react';

const reasons = [
  {
    icon: TabletSmartphone,
    title: 'Precision Plan Selection',
    desc: 'We don\'t just sell you a pipe. We analyze your team size, cloud usage, and growth plans to recommend the exact nbn tier your business actually needs.'
  },
  {
    icon: Zap,
    title: 'Expert Setup & Migration',
    desc: 'We handle the entire transition from your old provider. From hardware configuration to nbn activation, we ensure a seamless switch with zero downtime.'
  },
  {
    icon: MonitorCheck,
    title: 'Proactive 24/7 Support',
    desc: 'Our Australian engineers monitor your connection around the clock. We often fix line sync issues before you even notice them, backed by business-grade SLAs.'
  },
  {
    icon: Network,
    title: 'Smarter Network Routing',
    desc: 'Your business traffic is prioritized on the nbn backbone. We engineer the path to minimize latency, ensuring your VoIP and cloud apps run perfectly.'
  }
];

export default function WhyC9() {
  return (
    <section className="w-full bg-[#0c1024] py-24 px-6 md:px-8 overflow-hidden" >
      <div className="container mx-auto max-w-[1240px] text-center">
        
        {/* Dark Header */}
        <div className="flex flex-col items-center mb-20">
           <h2 className="c9-section-heading !text-white">
              The C9 Solution: nbn Done Right
           </h2>
           <div className="w-20 h-1 bg-gradient-to-r from-[#5D00D6] to-[#7C3AED] mt-6 rounded-full" />
        </div>

        {/* Feature 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {reasons.map((r, i) => (
            <motion.div 
               key={i} 
               whileHover={{ y: -5 }}
               className="flex flex-col items-center group text-center lg:text-left"
            >
               <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-[#5D00D6]/20 rounded-full blur-xl group-hover:bg-[#5D00D6]/40 transition-all" />
                  <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 text-white group-hover:scale-110 transition-transform">
                     <r.icon size={32} strokeWidth={1.75} />
                  </div>
               </div>
               <h3 className="text-[20px] font-bold text-white mb-4 tracking-tight leading-tight">{r.title}</h3>
               <p className="text-[14px] text-gray-400 leading-relaxed font-medium">
                  {r.desc}
               </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

