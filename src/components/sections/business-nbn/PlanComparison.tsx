'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ShieldCheck, Zap, ArrowRight, Info, Package, Clock } from 'lucide-react';
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
  const [bestEffortIdx, setBestEffortIdx] = useState(0);
  const [committedIdx, setCommittedIdx] = useState(2);

  const handleSelectPlan = (tierName: string, speed: string) => {
    setInquiryMessage(`I'm interested in the Small Business nbn ${tierName} plan at ${speed} Mbps speeds.`);
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getSimulatedStats = (speedStr: string) => {
     const speed = parseInt(speedStr.split('/')[0]);
     const downloadTime = Math.round((4096 * 8) / speed); 
     const minutes = Math.floor(downloadTime / 60);
     const seconds = downloadTime % 60;
     const timeStr = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds} sec`;
     const barCount = Math.min(20, Math.ceil((speed / 1000) * 20) + 4);
     return { timeStr, barCount, speedLimit: speed === 1000 ? 2000 : 1000 };
  };

  const beStats = getSimulatedStats(bestEffortSpeeds[bestEffortIdx]);
  const coStats = getSimulatedStats(committedSpeeds[committedIdx]);

  return (
    <section id="plan-comparison" className="w-full bg-white py-16 px-6 md:px-8 border-y border-gray-100" >
      <div className="container mx-auto max-w-[1240px]">
        
        <div className="flex flex-col items-center text-center mb-20">
            <h2 className="c9-section-heading !text-[32px] md:!text-[42px] max-w-3xl">
               Choosing the right Small Business nbn plan
            </h2>
           <p className="text-[17px] text-gray-500 mt-6 max-w-2xl leading-relaxed">
             We've simplified the options to help you choose the best fit for your team. 
             Actual speeds depend on location, network conditions, and office setup.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
           
           {/* THE "STANDARD" CARD */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-white rounded-[40px] border border-gray-100 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col relative overflow-hidden group"
           >
              <div className="flex justify-between items-start mb-8">
                 <div>
                     <h3 className="text-[24px] md:text-[28px] font-bold text-[#1A1A2E] mb-2">Standard Small Business nbn</h3>
                    <p className="text-[13px] text-gray-500 font-bold uppercase tracking-tight">Best for teams of 1–10 users</p>
                 </div>
                 <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#5D00D6]">
                    <Zap size={24} strokeWidth={1.5} />
                 </div>
              </div>

              <div className="mb-10">
                 <p className="text-[15px] text-[#6B7280] leading-relaxed">
                    Ideal for basic office operations, email, and light cloud usage. A reliable foundation for small teams.
                 </p>
              </div>

              <div className="mb-10 bg-[#FAFAFA] rounded-3xl p-6 border border-gray-100">
                 <div className="flex justify-between items-end mb-4">
                    <div>
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Typical Business Speed</p>
                       <h4 className="text-[24px] font-bold text-[#1A1A2E]">{bestEffortSpeeds[bestEffortIdx]} <span className="text-[14px] text-gray-400 font-medium">Mbps</span></h4>
                    </div>
                 </div>
                 
                 <SpeedBar activeCount={beStats.barCount} />
              </div>

              <div className="mb-10 flex-1">
                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Select Your Plan</p>
                 <div className="grid grid-cols-4 gap-2 mb-8">
                    {bestEffortSpeeds.map((s, i) => (
                       <button 
                         key={s} 
                         onClick={() => setBestEffortIdx(i)}
                         className={`py-3 rounded-full text-[13px] font-bold transition-all border ${bestEffortIdx === i ? 'bg-[#5D00D6] border-[#5D00D6] text-white shadow-lg' : 'bg-white border-gray-100 text-gray-500 hover:border-[#5D00D6]/30'}`}
                       >
                          {s}
                       </button>
                    ))}
                 </div>

                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <Check size={14} className="text-green-500" />
                       <span className="text-[14px] text-gray-600 font-medium">Australian-based support</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Check size={14} className="text-green-500" />
                       <span className="text-[14px] text-gray-600 font-medium">Managed setup included</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Check size={14} className="text-green-500" />
                       <span className="text-[14px] text-gray-600 font-medium">4G LTE failover ready</span>
                    </div>
                 </div>
              </div>

              <button 
                onClick={() => handleSelectPlan('Standard Small Business nbn', bestEffortSpeeds[bestEffortIdx])}
                className="w-full h-16 rounded-full bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#5D00D6]/30 relative z-10 group/btn mt-8"
              >
                  Get My Business Connected <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
           </motion.div>

           {/* THE "PERFORMANCE" CARD (Featured) */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-[#1A1A2E] rounded-[40px] p-8 md:p-12 shadow-[0_30px_60px_rgba(93,0,214,0.15)] flex flex-col relative overflow-hidden group"
           >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5D00D6]/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                 <div>
                    <div className="flex items-center gap-2 mb-2">
                       <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-2">Performance Small Business nbn</h3>
                       <div className="bg-[#5D00D6] text-white text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full ring-4 ring-[#5D00D6]/20">Recommended</div>
                    </div>
                    <p className="text-[13px] text-gray-400 font-bold uppercase tracking-tight">Best for growing teams & video calls</p>
                 </div>
                 <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/20 border border-[#5D00D6]/30 flex items-center justify-center text-[#5D00D6]">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                 </div>
              </div>

              <div className="mb-10 relative z-10">
                 <p className="text-[15px] text-gray-400 leading-relaxed">
                    Built for cloud-heavy businesses that rely on consistent performance for video meetings and large file transfers.
                 </p>
              </div>

              <div className="mb-10 bg-white/5 rounded-3xl p-6 border border-white/10 relative z-10 backdrop-blur-md">
                 <div className="flex justify-between items-end mb-4">
                    <div>
                       <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Prioritised Speed</p>
                       <h4 className="text-[24px] font-bold text-white">{committedSpeeds[committedIdx]} <span className="text-[14px] text-gray-500 font-medium">Mbps</span></h4>
                    </div>
                 </div>
                 
                 <SpeedBar activeCount={coStats.barCount} />
              </div>

              <div className="mb-10 relative z-10 flex-1">
                 <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Select Your Plan</p>
                 <div className="grid grid-cols-4 gap-2 mb-8">
                    {committedSpeeds.map((s, i) => (
                       <button 
                         key={s} 
                         onClick={() => setCommittedIdx(i)}
                         className={`py-3 rounded-full text-[13px] font-bold transition-all border ${committedIdx === i ? 'bg-[#5D00D6] border-[#5D00D6] text-white shadow-[0_10px_30px_rgba(93,0,214,0.5)]' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'}`}
                       >
                          {s}
                       </button>
                    ))}
                 </div>

                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <Check size={14} className="text-[#5D00D6]" />
                       <span className="text-[14px] text-gray-300 font-medium">Prioritised for performance</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Check size={14} className="text-[#5D00D6]" />
                       <span className="text-[14px] text-gray-300 font-medium">Enhanced reliability guarantee</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Check size={14} className="text-[#5D00D6]" />
                       <span className="text-[14px] text-gray-300 font-medium">Dedicated account manager</span>
                    </div>
                 </div>
              </div>

              <button 
                onClick={() => handleSelectPlan('Performance Small Business nbn', committedSpeeds[committedIdx])}
                className="w-full h-16 rounded-full bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#5D00D6]/40 relative z-10 group/btn mt-8"
              >
                  Get My Business Connected <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
           </motion.div>

        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
           <div className="flex items-center gap-2 text-gray-400 text-[13px] font-medium">
              <Info size={16} className="text-[#5D00D6]" />
              <span>Quotes provided reflect 36-month enterprise commitments.</span>
           </div>
           <div className="w-px h-4 bg-gray-200 hidden md:block" />
           <p className="text-[13px] text-[#5D00D6] font-bold uppercase tracking-[0.2em]">
              VERIFY SITE ELIGIBILITY: 1800 000 299
           </p>
        </div>

      </div>
    </section>
  );
}

