'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const PlanCard = ({ title, price, features, isPopular, link }: { title: string, price: string, features: {name: string, value: string}[], isPopular?: boolean, link: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`relative flex flex-col p-8 md:p-10 rounded-[32px] ${isPopular ? 'bg-[#0c1024] shadow-2xl border border-white/10 text-white transform md:-translate-y-4' : 'bg-white border border-gray-200 shadow-sm text-slate-900'}`}
  >
    {isPopular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-gradient-to-r from-purple-500 to-[#5D00D6] text-white py-1.5 px-4 rounded-full shadow-lg c9-eyebrow !text-white">
          Best Value
        </div>
      </div>
    )}

    <div className="mb-8">
      <h3 className={`c9-card-title mb-2 ${isPopular ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className={`text-[48px] font-black tracking-tighter leading-none ${isPopular ? 'text-white' : 'text-slate-900'}`}>{price}</span>
        <span className={`c9-body !text-[14px] ${isPopular ? 'text-slate-400' : 'text-gray-500'}`}>/month per line</span>
      </div>
      <p className={`c9-body !text-[12px] mt-2 ${isPopular ? 'text-slate-400' : 'text-gray-400'}`}>ex GST</p>
    </div>

    <div className={`space-y-4 flex-1 mb-10 ${isPopular ? 'text-slate-300' : 'text-gray-600'}`}>
      {features.map((feature, i) => (
        <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200/20 last:border-0">
          <div className="flex items-center gap-3">
              <CheckCircle2 size={18} className={isPopular ? 'text-purple-400' : 'text-[#5D00D6]'} />
              <span className="c9-body !text-[14px] font-medium">{feature.name}</span>
          </div>
          <span className={`c9-body !text-[14px] font-bold ${isPopular ? 'text-white' : 'text-[#0c1024]'}`}>{feature.value}</span>
        </div>
      ))}
    </div>

    <Link 
      href={link}
      className={`w-full h-14 rounded-full flex items-center justify-center font-bold text-[16px] transition-all hover:scale-[1.02] active:scale-95 ${
        isPopular 
          ? 'bg-[#5D00D6] text-white shadow-lg shadow-[#5D00D6]/20 hover:bg-[#4c00b0]' 
          : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
      }`}
    >
      Get Started
      <ChevronRight size={18} className="ml-2" />
    </Link>
    
    <div className="text-center mt-6">
        <Link href="/service-terms-and-conditions/#CIS" className={`c9-body !text-[12px] underline ${isPopular ? 'text-slate-500 hover:text-white' : 'text-gray-400 hover:text-[#5D00D6]'}`}>
            Critical Information Summary
        </Link>
    </div>
  </motion.div>
);

export default function SipTrunkingPlans() {
  return (
    <section id="plans" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
        
        {/* Header Block */}
        <div className="text-center mb-16 md:mb-20">
           <motion.div
             initial={{ opacity: 0, y: -10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 bg-[#5D00D6]/5 px-4 py-2 rounded-full mb-8"
           >
             <span className="c9-eyebrow !text-[#5D00D6]">SIP TRUNKING PLANS</span>
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="c9-section-heading mb-6"
           >
             Two plans — Basic and Ultimate. <br className="hidden md:block" />
             <span className="text-[#5D00D6]">Per line (channel) pricing.</span>
           </motion.h2>
           
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="c9-body max-w-2xl mx-auto"
           >
             Pay only for the lines you need. Scale up or down at any time with no infrastructure changes.
           </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            <PlanCard 
                title="Basic"
                price="$20"
                link="#quote"
                features={[
                    { name: 'Local and national', value: '10c per call' },
                    { name: 'Mobile', value: '14c per minute' },
                    { name: 'Calls to 1300 numbers', value: '35c per call' }
                ]}
            />
            <PlanCard 
                title="Ultimate"
                price="$45"
                isPopular={true}
                link="#quote"
                features={[
                    { name: 'Local and national', value: 'FREE' },
                    { name: 'Mobile', value: 'FREE' },
                    { name: 'Calls to 1300 numbers', value: '35c per call' }
                ]}
            />
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="c9-body !text-[14px]">
                Pricing per line (channel) ex GST. Contact C9 for multi-line volume pricing. Critical Information Summary available at the link above.
            </p>
        </div>

      </div>
    </section>
  );
}
