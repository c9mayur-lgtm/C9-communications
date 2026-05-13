'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Zap, ShieldAlert, MonitorCheck, TabletSmartphone } from 'lucide-react';

const reasons = [
  {
    icon: TabletSmartphone,
    title: 'Plan Selection',
    desc: 'We recommend the right plan based on your actual usage and number of users, ensuring you don’t overpay for unused capacity.'
  },
  {
    icon: Zap,
    title: 'Managed Setup',
    desc: 'We handle the entire setup and configuration process properly, from hardware to activation, so you don’t have to.'
  },
  {
    icon: Network,
    title: 'Optimised Reliability',
    desc: 'We optimise your connection and internal office setup to ensure maximum reliability for your critical team applications.'
  },
  {
    icon: MonitorCheck,
    title: 'Ongoing Support',
    desc: 'We provide ongoing support and monitoring when needed, acting as your single point of contact for any connectivity issues.'
  }
];

export default function WhyC9() {
  return (
    <section className="w-full bg-[#0c1024] py-24 px-6 md:px-8 overflow-hidden" >
      <div className="container mx-auto max-w-[1240px] text-center">
        
        {/* Dark Header */}
        <div className="flex flex-col items-center mb-20 text-center">
           <h2 className="c9-section-heading !text-white !text-[32px] md:!text-[42px] max-w-4xl">
              We don’t just connect your internet — we make sure it works for your business
           </h2>
           <p className="text-[17px] text-gray-400 mt-8 max-w-2xl leading-relaxed">
             Getting connected is only the first step. We handle the technical heavy lifting, so you can focus on running your business without worrying about your connection.
           </p>
           <div className="w-20 h-1 bg-gradient-to-r from-[#5D00D6] to-[#7C3AED] mt-8 rounded-full" />
        </div>

        {/* Feature 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div 
                 key={i} 
                 whileHover={{ y: -5 }}
                 className="flex flex-col items-center text-center lg:text-left"
              >
                 <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-[#5D00D6]/20 rounded-full blur-xl group-hover:bg-[#5D00D6]/40 transition-all" />
                    <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 text-white group-hover:scale-110">
                       <Icon size={32} strokeWidth={1.75} />
                    </div>
                 </div>
                 <h3 className="text-[20px] font-bold text-white mb-4 tracking-tight leading-tight">{r.title}</h3>
                 <p className="text-[14px] text-gray-400 leading-relaxed font-medium">
                    {r.desc}
                 </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

