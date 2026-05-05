'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ShieldCheck, Zap, Info, Package, Clock } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

const bestEffortSpeeds = ['50/20', '100/20', '250/25', '1000/50'];
const committedSpeeds = ['20/20', '50/50', '100/100'];

const bestEffortIncludes = [
  'Managed router included',
  '4G LTE failover connectivity',
  'nbn accredited support',
  'Dedicated account manager',
  'Month-to-month flexibility'
];

const committedIncludes = [
  '100% committed guaranteed bandwidth',
  'Traffic Class 2 (TC2) prioritisation',
  'SLA-backed performance guarantee',
  'Priority fault resolution',
  'Managed Enterprise Firewall'
];

const SpeedBar = ({ activeCount }: { activeCount: number }) => {
   const totalBars = 20;
   return (
     <div className="flex gap-1 h-3 mt-4 relative overflow-hidden rounded-sm group/speed">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5D00D6]/20 to-transparent animate-speed-slide pointer-events-none" />

        {[...Array(totalBars)].map((_, i) => {
           let colorClass = 'bg-gray-100'; 
           let glowClass = '';
           if (i < activeCount) {
              if (i < 5) colorClass = 'bg-cyan-400';
              else if (i < 10) colorClass = 'bg-green-400';
              else if (i < 15) colorClass = 'bg-yellow-400 font-bold';
              else if (i < 18) colorClass = 'bg-orange-500';
              else colorClass = 'bg-purple-600';

              if (i >= activeCount - 2) {
                 glowClass = 'shadow-[0_0_12px_rgba(168,85,247,0.8)] border-t border-white/40';
              }
           }
           
           return (
             <motion.div 
               key={i}
               initial={{ opacity: i < activeCount ? 1 : 0.2 }}
               animate={{ 
                 opacity: i < activeCount ? [0.8, 1, 0.8] : 0.2,
                 scaleY: i < activeCount ? [1, 1.15, 1] : 1,
                 filter: i < activeCount ? ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] : 'none'
               }}
               transition={{ duration: 0.8, delay: i * 0.05, repeat: Infinity, ease: "easeInOut" }}
               className={`flex-1 rounded-[2px] transition-all relative overflow-hidden ${colorClass} ${glowClass}`}
             >
                {i < activeCount && (
                   <motion.div 
                     animate={{ x: ['-200%', '200%'] }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                   />
                )}
             </motion.div>
           );
        })}
     </div>
   );
};

export default function PlanComparison() {
  const { setInquiryMessage } = useInquiry();

  const handleSelectPlan = (tierName: string) => {
    setInquiryMessage(`I'm interested in the ${tierName} plan.`);
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      title: 'Basic Business NBN',
      bestFor: '1–5 users',
      desc: 'Ideal for small offices focusing on email, light browsing, and basic cloud usage.',
      icon: Zap,
      featured: false,
    },
    {
      title: 'Standard Business NBN',
      bestFor: '5–15 users',
      desc: 'Built for teams using cloud apps, video calls, and daily office operations.',
      icon: ShieldCheck,
      featured: true,
    },
    {
      title: 'High Usage Business NBN',
      bestFor: '15+ users',
      desc: 'Best for larger teams with frequent video calls and heavy cloud app usage.',
      icon: Package,
      featured: false,
    }
  ];

  return (
    <section id="plan-comparison" className="w-full bg-white py-16 px-6 md:px-8 border-y border-gray-100" >
      <div className="container mx-auto max-w-[1240px]">
        
        <div className="flex flex-col items-center text-center mb-20">
            <h2 className="c9-section-heading !text-[32px] md:!text-[42px] max-w-3xl">
               Choosing the right NBN plan for your business
            </h2>
           <p className="text-[17px] text-gray-500 mt-6 max-w-2xl leading-relaxed">
             We've simplified our plans to help you choose the right connection for your team's size and daily needs.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
           {plans.map((plan, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className={`${plan.featured ? 'bg-[#1A1A2E] text-white' : 'bg-white border-gray-100 border'} rounded-[40px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col relative overflow-hidden `}
             >
                {plan.featured && (
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#5D00D6]/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                )}

                <div className="flex justify-between items-start mb-8 relative z-10">
                   <div>
                       <h3 className={`text-[22px] md:text-[24px] font-bold mb-2 ${plan.featured ? 'text-white' : 'text-[#1A1A2E]'}`}>{plan.title}</h3>
                      <p className={`text-[12px] font-bold uppercase tracking-tight ${plan.featured ? 'text-[#5D00D6]' : 'text-gray-500'}`}>Best for: {plan.bestFor}</p>
                   </div>
                   <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${plan.featured ? 'bg-[#5D00D6]/20 text-[#5D00D6]' : 'bg-gray-50 text-[#5D00D6]'}`}>
                      <plan.icon size={24} strokeWidth={1.5} />
                   </div>
                </div>

                <div className="mb-10 relative z-10 flex-1">
                   <p className={`text-[14px] leading-relaxed ${plan.featured ? 'text-gray-400' : 'text-[#6B7280]'}`}>
                      {plan.desc}
                   </p>
                </div>

                <div className="space-y-4 mb-10 relative z-10">
                   <div className="flex items-center gap-3">
                      <Check size={14} className="text-green-500" />
                      <span className={`text-[14px] font-medium ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>Managed Setup</span>
                   </div>
                   <div className={`flex items-center gap-3 ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                      <Check size={14} className="text-green-500" />
                      <span className="text-[14px] font-medium">Australian Support</span>
                   </div>
                </div>

                <button 
                  onClick={() => handleSelectPlan(plan.title)}
                  className={`w-full h-14 rounded-full font-bold flex items-center justify-center gap-2 transition-all relative z-10 group/btn mt-auto ${plan.featured ? 'bg-[#5D00D6] hover:bg-[#4c00b0] text-white' : 'bg-[#5D00D6] hover:bg-[#4c00b0] text-white shadow-lg'}`}
                >
                    Get My Business Connected 
                </button>
             </motion.div>
           ))}
        </div>

        <div className="mt-16 text-center">
           <p className="text-[14px] text-gray-400 italic">
              Actual speeds vary based on location, connection type, and network conditions.
           </p>
        </div>

      </div>
    </section>
  );
}

