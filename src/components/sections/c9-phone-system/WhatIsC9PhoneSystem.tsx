'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AdvantageItem = ({ title, description, metric, isLast }: { title: string, description: string, metric: string, isLast?: boolean }) => (
  <div className={`p-8 md:p-10 lg:p-12 flex flex-col items-start text-left min-h-[380px] relative group ${!isLast ? 'border-b lg:border-b-0 lg:border-r border-gray-200' : ''}`}>
    
    {/* 1. SMALL CHECKMARK AT TOP */}
    <div className="mb-6">
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#5D00D6]/10 group-hover:text-[#5D00D6] transition-colors duration-300">
            <CheckCircle2 size={18} strokeWidth={2.5} />
        </div>
    </div>

    {/* 2. BOLD TITLE */}
    <h3 className="c9-card-title mb-4">
        {title}
    </h3>

    {/* 3. DESCRIPTION (Fills space) */}
    <p className="c9-body mb-auto max-w-[280px]">
      {description}
    </p>

    {/* 4. HUGE NUMBER AT BOTTOM */}
    <div className="mt-12">
        <span className="block text-[64px] md:text-[80px] font-medium text-[#0c1024] leading-none tracking-tighter group-hover:text-[#5D00D6] transition-colors duration-500">
            {metric}
        </span>
    </div>

    {/* Subtle Background Hover Effect */}
    <div className="absolute inset-x-0 bottom-0 h-1 bg-[#5D00D6] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
  </div>
);

export const WhatIsC9PhoneSystem = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Cinematic Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        
        {/* Header Block (Optional for context, but keeping it premium) */}
        <div className="text-center mb-24 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#5D00D6]/5 px-4 py-2 rounded-full mb-8"
          >
            <span className="c9-eyebrow !text-[#5D00D6] !text-[10px]">C9 VOICE ADVANTAGE</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="c9-section-heading"
          >
             Australia's leading cloud-based phone system <br className="hidden md:block" />
            <span className="text-[#5D00D6]">designed to move your business forward.</span>
          </motion.h2>
        </div>

        {/* 4-COLUMN UNIFIED STAT PLANK - REPLICATING REFERENCE IMAGE */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border-y border-gray-200 lg:border-none"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                <AdvantageItem 
                    title="Unified Communications"
                    description="Move entirely to the cloud. Cernel removes the manual work by unifying voice, video, and messaging."
                    metric="80+"
                />
                <AdvantageItem 
                    title="Zero Upfront Costs"
                    description="Ecommerce teams can move entire collections, or new sites, without high setup costs."
                    metric="$0"
                />
                <AdvantageItem 
                    title="Cost Optimization"
                    description="Drastically reduce monthly communication overheads by leveraging our global VoIP architecture."
                    metric="70%"
                />
                <AdvantageItem 
                    title="Network Reliability"
                    description="Ensure your business becomes fully visible and connected anywhere with redunant fail-safe architecture."
                    metric="All"
                    isLast={true}
                />
            </div>
        </motion.div>

      </div>
    </section>
  );
};
