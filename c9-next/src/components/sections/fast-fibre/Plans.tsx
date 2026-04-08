'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, ShieldCheck, Zap, ArrowRight, Info, Package, Clock } from 'lucide-react';
import Link from 'next/link';
import { useInquiry } from '@/components/context/InquiryContext';

type PlanCard = {
  id: string;
  name: string;
  contract: string;
  speed: string;
  price: string;
  setup: string;
  totalCost: string;
  badge?: string;
  featured?: boolean;
};

const FIBRE_400_PLANS: Record<string, PlanCard[]> = {
  '24': [
    { id: '400-24-std', name: 'Enterprise Fibre400 Standard', contract: '24', speed: '400', price: '599', setup: '2,000', totalCost: '16,376' },
    { id: '400-24-go', name: 'Enterprise Fibre400 GO', contract: '24', speed: '400', price: '699', setup: '0', totalCost: '16,776', badge: '$0 Setup', featured: true }
  ],
  '36': [
    { id: '400-36-std', name: 'Enterprise Fibre400 Standard', contract: '36', speed: '400', price: '399', setup: '2,000', totalCost: '16,364' },
    { id: '400-36-go', name: 'Enterprise Fibre400 GO', contract: '36', speed: '400', price: '499', setup: '0', totalCost: '17,964', badge: '$0 Setup', featured: true }
  ]
};

const FIBRE_1000_PLANS: Record<string, PlanCard[]> = {
  '24': [
    { id: '1000-24-std', name: 'Enterprise Fibre1000 Standard', contract: '24', speed: '1000', price: '899', setup: '4,000', totalCost: '25,576' },
    { id: '1000-24-go', name: 'Enterprise Fibre1000 GO', contract: '24', speed: '1000', price: '1,199', setup: '0', totalCost: '28,776', badge: '$0 Setup', featured: true }
  ],
  '36': [
    { id: '1000-36-std', name: 'Enterprise Fibre1000 Standard', contract: '36', speed: '1000', price: '699', setup: '4,000', totalCost: '29,164' },
    { id: '1000-36-go', name: 'Enterprise Fibre1000 GO', contract: '36', speed: '1000', price: '799', setup: '0', totalCost: '28,764', badge: '$0 Setup', featured: true }
  ],
  '48': [
    { id: '1000-48-std', name: 'Enterprise Fibre1000 Extended', contract: '48', speed: '1000', price: '749', setup: '0', totalCost: '35,952', badge: '$0 Setup · Best Value', featured: true }
  ]
};

const fiberIncludes = [
  'Unlimited data allowance',
  '99.95% Network Availability SLA',
  'Managed Enterprise Router included',
  'Dedicated account manager',
  'Australian based support'
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

export default function Plans() {
  const { setInquiryMessage } = useInquiry();
  const [activeTier, setActiveTier] = useState<'400' | '1000'>('400');
  const [contract400, setContract400] = useState<'24' | '36'>('36');
  const [contract1000, setContract1000] = useState<'24' | '36' | '48'>('36');

  const currentPlans = activeTier === '400' ? FIBRE_400_PLANS[contract400] : FIBRE_1000_PLANS[contract1000];

  const handleSelectPlan = (plan: PlanCard) => {
    setInquiryMessage(`I am interested in the ${plan.name} plan (${plan.speed} Mbps) on a ${plan.contract}-month contract for $${plan.price}/mo.`);
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="fast-fibre-plans" className="w-full bg-[#FAFAFA] py-16 md:py-24 border-y border-gray-100" >
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        {/* HEADER */}
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <span className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-[0.3em] block mb-6">FIBRE PLANS</span>
          <h2 className="text-[36px] md:text-[48px] font-bold text-[#1A1A2E] leading-tight mb-8">
            Choose your fast fibre plan.
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#6B7280] leading-relaxed">
            Select your bandwidth tier and contract term. All plans feature the premium Enterprise Ethernet foundation with reliable guaranteed data limits. 
          </p>
        </div>

        {/* TIER TOGGLE */}
        <div className="flex justify-center mb-10">
          <div className="bg-white border p-1 rounded-2xl flex items-center shadow-sm">
            <button 
              onClick={() => setActiveTier('400')}
              className={`px-8 py-3 rounded-full font-bold text-[15px] transition-all ${activeTier === '400' ? 'bg-[#5D00D6] text-white' : 'text-gray-500 hover:text-[#5D00D6]'}`}
            >
              Fibre 400
            </button>
            <button 
              onClick={() => setActiveTier('1000')}
              className={`px-8 py-3 rounded-xl font-bold text-[15px] transition-all ${activeTier === '1000' ? 'bg-[#5D00D6] text-white' : 'text-gray-500 hover:text-[#5D00D6]'}`}
            >
              Fibre 1000
            </button>
          </div>
        </div>

        {/* CONTRACT TOGGLE */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-4 bg-gray-100 p-1.5 rounded-xl border">
            {activeTier === '400' ? (
              <>
                <button onClick={() => setContract400('24')} className={`px-5 py-2 rounded-full font-bold text-[13px] transition-all ${contract400 === '24' ? 'bg-white text-[#5D00D6] shadow-sm' : 'text-gray-500'}`}>24 Months</button>
                <button onClick={() => setContract400('36')} className={`px-5 py-2 rounded-full font-bold text-[13px] transition-all ${contract400 === '36' ? 'bg-white text-[#5D00D6] shadow-sm' : 'text-gray-500'}`}>36 Months</button>
              </>
            ) : (
              <>
                <button onClick={() => setContract1000('24')} className={`px-5 py-2 rounded-full font-bold text-[13px] transition-all ${contract1000 === '24' ? 'bg-white text-[#5D00D6] shadow-sm' : 'text-gray-500'}`}>24 Months</button>
                <button onClick={() => setContract1000('36')} className={`px-5 py-2 rounded-full font-bold text-[13px] transition-all ${contract1000 === '36' ? 'bg-white text-[#5D00D6] shadow-sm' : 'text-gray-500'}`}>36 Months</button>
                <button onClick={() => setContract1000('48')} className={`px-5 py-2 rounded-full font-bold text-[13px] transition-all ${contract1000 === '48' ? 'bg-white text-[#5D00D6] shadow-sm' : 'text-gray-500'}`}>48 Months</button>
              </>
            )}
          </div>
        </div>

        {/* PLANS GRID */}
        <div className={`grid grid-cols-1 ${currentPlans.length === 1 ? 'max-w-[600px] mx-auto' : 'lg:grid-cols-2'} gap-8 items-stretch`}>
          <AnimatePresence mode="wait">
            {currentPlans.map((plan) => {
              const isDark = plan.featured;
              const barCount = plan.speed === '1000' ? 20 : 12;

              return (
                <motion.div 
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`${isDark ? 'bg-[#1A1A2E] shadow-[0_30px_60px_rgba(93,0,214,0.15)] ring-1 ring-white/10' : 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-gray-100'} rounded-[40px] p-8 md:p-12 flex flex-col relative overflow-hidden group`}
                >
                  {isDark && <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5D00D6]/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />}
                  
                  {/* HEADER */}
                  <div className="flex justify-between items-start mb-8 relative z-10">
                     <div>
                        <div className="flex items-center gap-2 mb-2">
                           <h3 className={`text-[28px] font-bold ${isDark ? 'text-white' : 'text-[#1A1A2E]'} leading-tight`}>{plan.name}</h3>
                           {plan.badge && <div className={`${isDark ? 'bg-[#5D00D6] ring-4 ring-[#5D00D6]/20' : 'bg-[#F3EEFF] text-[#5D00D6]'} text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full`}>{plan.badge}</div>}
                        </div>
                        <p className={`text-[14px] ${isDark ? 'text-gray-400' : 'text-gray-500'} font-medium tracking-tight uppercase`}>{plan.contract}-month contract</p>
                     </div>
                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isDark ? 'bg-[#5D00D6]/20 border border-[#5D00D6]/30 text-[#5D00D6]' : 'bg-gray-50 text-[#5D00D6]'}`}>
                        {isDark ? <ShieldCheck size={24} strokeWidth={1.5} /> : <Zap size={24} strokeWidth={1.5} />}
                     </div>
                  </div>

                  {/* SPEED VISUAL */}
                  <div className={`mb-10 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-[#FAFAFA] border border-gray-100'} rounded-3xl p-6 relative z-10 backdrop-blur-md`}>
                     <div className="flex justify-between items-end mb-4">
                        <div>
                           <p className={`text-[10px] font-bold ${isDark ? 'text-gray-500' : 'text-gray-400'} uppercase tracking-widest mb-1`}>Guaranteed Speed</p>
                           <h4 className={`text-[24px] font-bold ${isDark ? 'text-white' : 'text-[#1A1A2E]'}`}>{plan.speed} <span className={`text-[14px] ${isDark ? 'text-gray-500' : 'text-gray-400'} font-medium`}>Mbps</span></h4>
                        </div>
                        <div className="text-right">
                           <p className={`text-[10px] font-bold ${isDark ? 'text-gray-500' : 'text-gray-400'} uppercase tracking-widest mb-1`}>MONTHLY COST</p>
                           <div className="flex flex-col items-end">
                              <p className={`text-[28px] font-bold ${isDark ? 'text-[#A855F7]' : 'text-[#5D00D6]'}`}>${plan.price}</p>
                           </div>
                        </div>
                     </div>
                     <SpeedBar activeCount={barCount} />
                  </div>

                  {/* INCLUSIONS */}
                  <div className="space-y-4 mb-10 flex-1 relative z-10">
                     {fiberIncludes.map((item, i) => (
                       <div key={i} className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full ${isDark ? 'bg-[#5D00D6]/20' : 'bg-[#F3EEFF]'} flex items-center justify-center shrink-0`}>
                             <Check size={12} className="text-[#5D00D6]" />
                          </div>
                          <span className={`text-[14px] ${isDark ? 'text-gray-300' : 'text-gray-600'} font-medium`}>{item}</span>
                       </div>
                     ))}
                  </div>

                  {/* HIGHLIGHTED CONTRACT BOX */}
                  <div className={`mb-8 p-6 ${isDark ? 'bg-white/5 border border-white/5' : 'bg-[#F8F7FF] border border-[#5D00D6]/5'} rounded-[24px] relative z-10 flex flex-col gap-4`}>
                     <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl ${isDark ? 'bg-[#5D00D6] text-white shadow-lg' : 'bg-white text-[#5D00D6] shadow-sm'} flex items-center justify-center`}>
                           <Package size={20} fill={isDark ? "currentColor" : "none"} />
                        </div>
                        <div>
                           <p className={`text-[14px] font-bold ${isDark ? 'text-white' : 'text-[#1A1A2E]'} tracking-tight`}>Setup Fee: ${plan.setup === '0' ? 'FREE' : plan.setup}</p>
                           <p className={`text-[11px] ${isDark ? 'text-purple-300' : 'text-[#5D00D6]'} font-bold uppercase tracking-widest mt-0.5`}>Total cost: ${plan.totalCost} over {plan.contract}mo</p>
                        </div>
                     </div>
                  </div>

                  <button 
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full h-16 rounded-full font-bold flex items-center justify-center gap-2 transition-all relative z-10 group/btn ${isDark ? 'bg-[#5D00D6] hover:bg-[#4c00b0] text-white shadow-xl shadow-[#5D00D6]/40' : 'bg-[#5D00D6] hover:bg-[#4c00b0] text-white shadow-xl shadow-[#5D00D6]/20'}`}
                  >
                     Select This Plan <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* DISCLAIMER */}
        <div className="max-w-[700px] mx-auto mt-16 md:mt-20">
           <p className="text-[12px] text-gray-400 leading-relaxed text-center font-medium">
              All prices exclude GST. Total minimum cost includes monthly charges and setup fee over the contract term. Speeds are maximum speeds and may vary. Subject to site qualification and availability. Fibre build cost may apply pending site qualification check.
           </p>
        </div>
      </div>
    </section>
  );
}

