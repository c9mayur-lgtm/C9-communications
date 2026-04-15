'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, ShieldCheck, ShieldPlus, ChevronDown, Wifi, ArrowRight } from 'lucide-react';

const tiers = [
  {
    title: 'C9 Standard',
    offer: 'Free 4G Backup Included',
    offerBg: 'bg-[#5D00D6]',
    price: '$0',
    priceSub: 'Included with all plans',
    esla: '12-hour eSLA',
    desc: 'Best for standard business operations. Backed by the nbn™ enhanced SLA program.',
    features: [
      '12-hour restoration commitment',
      'Unified Business Support team',
      'Standard data priority',
      '4G LTE failover standby'
    ],
    recommended: false,
    cta: 'Select Standard'
  },
  {
    title: 'C9 Essential',
    offer: 'Priority Restore Upgrade',
    offerBg: 'bg-[#5D00D6]',
    price: '$29',
    priceSub: 'per month extra',
    esla: '8-hour eSLA',
    desc: 'Faster fault resolution for businesses that are revenue-sensitive to internet uptime.',
    features: [
      '8-hour restoration commitment',
      'Priority fault escalation',
      'Enhanced data monitoring',
      'Named support triage manager'
    ],
    recommended: true,
    cta: 'Select Essential'
  },
  {
    title: 'C9 Ultimate',
    offer: 'Enterprise Mission Critical',
    offerBg: 'bg-[#1A1A2E]',
    price: '$69',
    priceSub: 'per month extra',
    esla: '4-hour eSLA',
    desc: 'The fastest response available. For organizations where internet downtime is unacceptable.',
    features: [
      '4-hour restoration commitment',
      'Fastest available nbn™ eSLA',
      'Real-time status notifications',
      'Priority routing pathing'
    ],
    recommended: false,
    cta: 'Select Ultimate'
  }
];

export default function SupportTiers() {
  return (
    <section className="w-full bg-[#F8F7FF] py-14 px-6 md:px-8 border-y border-gray-100" >
      <div className="container mx-auto max-w-[1240px]">
        
        {/* Telstra-inspired Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#5D00D6] font-bold block mb-4">Support Packages</span>
              <h2 className="c9-section-heading">
                Premium support <br className="hidden md:block" /> for premium business.
              </h2>
           </div>
           <p className="text-[17px] text-[#6B7280] max-w-[500px] leading-relaxed italic">
             * Fault restoration targets (eSLA) ensure your business has a contractually backed commitment 
             to getting you back online within hours, not days.
           </p>
        </div>

        {/* Telstra Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col rounded-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] bg-white border border-gray-100 relative"
            >
              {/* TOP: Blue/Dark Area (The Offer) */}
              <div className={`p-8 pb-10 rounded-t-[40px] ${t.recommended ? 'bg-[#5D00D6]' : (i === 2 ? 'bg-[#1A1A2E]' : 'bg-[#1A1A2E]/5')} ${!t.recommended && i !== 2 ? 'text-[#1A1A2E]' : 'text-white'} relative min-h-[300px] md:h-[360px] flex flex-col`}>
                 <div className={`w-fit px-4 py-2 rounded-xl border text-[10px] font-bold tracking-[0.15em] uppercase mb-10 ${t.recommended || i === 2 ? 'bg-white/10 border-white/20 text-white' : 'bg-gray-100 border-gray-200 text-gray-500'}`}>
                    {t.offer}
                 </div>

                 <h3 className="c9-section-heading mb-4">{t.title}</h3>
                 <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-[52px] font-bold">{t.price}</span>
                    <span className="text-[16px] opacity-70">/mth</span>
                 </div>
                  <div className="flex justify-between mt-auto">
                     <span className="text-[12px] opacity-70">Incl. in all plans</span>
                     <Wifi size={14} className="opacity-40" />
                  </div>

                  <button className={`absolute -bottom-7 left-8 right-8 py-4 rounded-full font-bold transition-all shadow-xl group-hover:scale-[1.02] active:scale-[0.98] z-20 flex items-center justify-center gap-2 ${t.recommended || i === 2 ? 'bg-white text-[#5D00D6] hover:bg-gray-50 shadow-purple-900/20' : 'bg-[#5D00D6] text-white hover:bg-[#4c00b0] shadow-[#5D00D6]/20'}`}>
                    {t.cta} <ArrowRight size={16} />
                  </button>
              </div>

              {/* BOTTOM: White Area (The Technical Specs) */}
              <div className="p-8 pt-14 flex-1 flex flex-col">
                 <div className="flex items-center justify-between mb-6 group/spec cursor-pointer">
                    <div>
                       <p className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-wider mb-0.5">SERVICE GUARANTEE</p>
                       <p className="text-[18px] font-bold text-[#1A1A2E]">{t.esla}</p>
                    </div>
                    <ChevronDown size={20} className="text-gray-300 transition-transform group-hover/spec:translate-y-0.5" />
                 </div>

                 <p className="text-[14px] text-[#6B7280] leading-relaxed mb-8">
                    {t.desc}
                 </p>

                 <div className="flex flex-col gap-4 mt-auto">
                    {t.features.map((f, fi) => (
                      <div key={fi} className="flex items-start gap-3">
                         <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={12} className="text-green-500" />
                         </div>
                         <span className="text-[14px] text-gray-700 font-medium">{f}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

