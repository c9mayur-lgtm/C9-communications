'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, ShieldCheck, ShieldPlus, ChevronDown, Wifi, Zap, Timer, ArrowRight } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

const tiers = [
  {
    title: 'C9 Standard',
    offer: 'Enterprise Entry',
    offerBg: 'bg-[#1A1A2E]/5',
    price: '$0',
    priceSub: 'included in all plans',
    esla: '12-hour eSLA',
    desc: 'Professional grade restoration. C9 manages all fault lodgement and escalation on your behalf.',
    features: [
      '12-hour restoration commitment',
      'Unified Business Support team',
      'Standard enterprise priority',
      '24/7 proactive monitoring'
    ],
    recommended: false,
    cta: 'Select Standard'
  },
  {
    title: 'C9 Essential',
    offer: 'Revenue Protection',
    offerBg: 'bg-[#5D00D6]',
    price: '$29',
    priceSub: 'starting from extra',
    esla: '8-hour eSLA',
    desc: 'Faster fault resolution for businesses where internet uptime is revenue-critical.',
    features: [
      '8-hour restoration commitment',
      'Priority fault escalation path',
      'Dedicated support triage',
      'Enhanced data monitoring',
      'Named account advisor'
    ],
    recommended: true,
    cta: 'Select Essential'
  },
  {
    title: 'C9 Ultimate',
    offer: 'Mission Critical',
    offerBg: 'bg-[#1A1A2E]',
    price: '$69',
    priceSub: 'starting from extra',
    esla: '4-hour eSLA',
    desc: 'The fastest available response. For organizations with high-consequence downtime risk.',
    features: [
      '4-hour restoration commitment',
      'Fastest available nbn™ eSLA',
      'Real-time status notifications',
      'Priority routing pathing',
      '24/7 direct engineer access'
    ],
    recommended: false,
    cta: 'Select Ultimate'
  }
];

export default function SupportTiers() {
  const { setInquiryMessage } = useInquiry();

  const handleSelectPackage = (packageName: string, esla: string) => {
    setInquiryMessage(`I'm interested in the ${packageName} support package (${esla}) for my Enterprise Ethernet connection.`);
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 border-y border-gray-50" >
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
           <div className="max-w-[700px]">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#5D00D6] font-black block mb-6">Support Packages</span>
              <h2 className="c9-section-heading">
                Three eSLA tiers — choose your <span className="text-[#5D00D6]">restoration commitment.</span>
              </h2>
           </div>
           <div className="max-w-[400px]">
              <p className="text-[15px] md:text-[16px] text-[#6B7280] leading-relaxed italic border-l-2 border-[#5D00D6]/20 pl-6">
                 * Restoration targets (eSLA) ensure your business has a contractually backed commitment 
                 to service uptime on the nbn™ enterprise backbone.
              </p>
           </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group flex flex-col rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] bg-white border border-gray-100 relative transition-all duration-500 hover:shadow-2xl ${t.recommended ? 'scale-[1.02] z-10' : ''}`}
            >
              {/* TOP SECTION */}
              <div className={`p-8 md:p-10 pb-12 rounded-t-[40px] ${t.recommended ? 'bg-[#5D00D6]' : (i === 2 ? 'bg-[#1A1A2E]' : 'bg-[#FAFAFA]')} ${!t.recommended && i !== 2 ? 'text-[#1A1A2E]' : 'text-white'} relative min-h-[340px] flex flex-col`}>
                 <div className={`w-fit px-4 py-2 rounded-xl border text-[10px] font-black tracking-[0.15em] uppercase mb-12 ${t.recommended || i === 2 ? 'bg-white/10 border-white/20 text-white' : 'bg-gray-200/50 border-gray-200 text-gray-500'}`}>
                    {t.offer}
                 </div>

                 <h3 className="c9-section-heading mb-4">{t.title}</h3>
                 <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-[52px] font-bold">{t.price}</span>
                    <span className="text-[14px] opacity-70 font-bold uppercase tracking-widest leading-none translate-y-[-10px]">/mth</span>
                 </div>
                  
                  <div className="mt-auto flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${t.recommended || i === 2 ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
                        <Timer size={16} className={t.recommended || i === 2 ? 'text-white' : 'text-[#5D00D6]'} />
                     </div>
                     <span className="text-[13px] font-bold opacity-80">{t.priceSub}</span>
                  </div>

                  <button 
                    onClick={() => handleSelectPackage(t.title, t.esla)}
                    className={`absolute -bottom-8 left-8 right-8 py-4 px-6 rounded-full font-bold transition-all shadow-xl group-hover:scale-[1.03] active:scale-[0.97] z-20 flex items-center justify-center gap-2 ${t.recommended || i === 2 ? 'bg-white text-[#5D00D6] hover:bg-gray-50 shadow-purple-900/30' : 'bg-[#5D00D6] text-white hover:bg-[#4c00b0] shadow-[#5D00D6]/20'}`}
                  >
                    {t.cta} <ArrowRight size={18} />
                  </button>
              </div>

              {/* BOTTOM SECTION - Added pt-28 for more gap below button */}
              <div className="p-8 md:p-10 pt-28 flex-1 flex flex-col">
                 <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-50">
                    <div>
                       <p className="text-[10px] font-black text-[#5D00D6] uppercase tracking-[0.2em] mb-1">SERVICE TARGET</p>
                       <p className="text-[20px] font-bold text-[#1A1A2E] leading-none">{t.esla}</p>
                    </div>
                    {/* Icon removed from side */}
                 </div>

                 <p className="text-[15px] text-[#6B7280] leading-relaxed mb-8 font-normal">
                    {t.desc}
                 </p>

                 <div className="flex flex-col gap-4 mt-auto">
                    {t.features.map((f, fi) => (
                      <div key={fi} className="flex items-start gap-4">
                         <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${t.recommended ? 'bg-[#5D00D6]/10 text-[#5D00D6]' : 'bg-green-50 text-green-500'}`}>
                            <Check size={12} strokeWidth={3} />
                         </div>
                         <span className="text-[14px] text-slate-600 font-bold leading-snug">{f}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-20 text-center">
           <div className="inline-flex items-center gap-2 text-[12px] text-slate-400 font-bold uppercase tracking-widest bg-gray-50 px-6 py-2 rounded-full border border-gray-100">
              <Info size={14} className="text-[#5D00D6]" />
              Verify site restoration targets: 1800 000 299
           </div>
        </div>

      </div>
    </section>
  );
}

const Info = ({ size, className }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

