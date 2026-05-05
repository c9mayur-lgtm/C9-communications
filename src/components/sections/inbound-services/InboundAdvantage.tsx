'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AdvantageItem = ({ title, description, metric, isLast }: { title: string, description: string, metric: string, isLast?: boolean }) => (
  <div className={`p-8 md:p-10 lg:p-12 flex flex-col items-start text-left min-h-[380px] relative  ${!isLast ? 'border-b lg:border-b-0 lg:border-r border-gray-200' : ''}`}>
    
    {/* 1. SMALL CHECKMARK AT TOP */}
    <div className="mb-6">
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#5D00D6]/10 group-hover:text-[#5D00D6] transition-colors duration-300">
            <CheckCircle2 size={12} strokeWidth={2.5} />
        </div>
    </div>

    {/* 2. BOLD TITLE */}
    <h3 className="text-[18px] font-bold text-[#0c1024] mb-4 leading-tight tracking-tight group-hover:text-[#5D00D6] transition-colors duration-300">
        {title}
    </h3>

    {/* 3. DESCRIPTION */}
    <p className="text-gray-500 text-[14px] leading-relaxed font-normal mb-auto max-w-[280px]">
      {description}
    </p>

    {/* 4. HUGE NUMBER AT BOTTOM */}
    <div className="mt-12">
        <span className="block text-[64px] md:text-[80px] font-medium text-[#0c1024] leading-none tracking-tighter group-hover:text-[#5D00D6] transition-colors duration-500">
            {metric}
        </span>
    </div>

    {/* Subtle Background Hover Effect */}
    <div className="absolute inset-x-0 bottom-0 h-1 bg-[#5D00D6] scale-x-0 group-hover:scale-x-100 duration-500 origin-left" />
  </div>
);

export const InboundAdvantage = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Cinematic Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-24 max-w-4xl mx-auto px-6">
           <motion.div
             initial={{ opacity: 0, y: -10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 bg-[#5D00D6]/5 px-4 py-2 rounded-full mb-8"
           >
             <span className="c9-eyebrow !text-[#5D00D6] !text-[10px]">C9 INBOUND ADVANTAGE</span>
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="c9-section-heading !text-[32px] md:!text-[46px]"
           >
              Advanced inbound services <br className="hidden md:block" />
              <span className="text-[#5D00D6]">designed to capture every customer.</span>
           </motion.h2>
        </div>

        {/* 4-COLUMN UNIFIED STAT PLANK - REPLICATING C9 VOICE STYLE EXACTLY */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border-y border-gray-200 lg:border-none"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                <AdvantageItem 
                    title="Global Numbers"
                    description="Access our pool of 1300, 1800, and 13 numbers instantly. Reach all of Australia from one touchpoint."
                    metric="1800"
                />
                <AdvantageItem 
                    title="Smarter Routing"
                    description="100% cloud-based routing logic including Time-of-Day and Geographic forwarding."
                    metric="100%"
                />
                <AdvantageItem 
                    title="Uptime Guarantee"
                    description="Our inbound core is backed by a 99.95% availability SLA for mission-critical voice traffic."
                    metric="99.9"
                />
                <AdvantageItem 
                    title="Live Insights"
                    description="Real-time analytics and CDR reporting. Monitor your call volumes and answer rates instantly."
                    metric="24/7"
                    isLast={true}
                />
            </div>
        </motion.div>

      </div>
    </section>
  );
};
