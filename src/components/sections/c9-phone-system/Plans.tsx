'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Info, Package, Zap } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

const tiers = [
  {
    title: 'C9 Basic',
    offer: 'Cost Efficient',
    price: '$20',
    priceSub: 'per month per line',
    desc: 'Full access to 80+ enterprise features with a flexible pay-as-you-go call structure.',
    features: [
      '80+ Standard features',
      'Local/National: 10c per call',
      'Mobile: 14c per minute',
      'Yealink handset compatible',
      'Australian-based support'
    ],
    recommended: false,
    cta: 'Select Basic'
  },
  {
    title: 'C9 Ultimate',
    offer: 'UNLIMITED CALLS',
    price: '$45',
    priceSub: 'per month per line',
    desc: 'Unbeatable value with unlimited standard calls included. Perfect for active sales and support teams.',
    features: [
      'Everything in Basic',
      'Unlimited Local/National calls',
      'Unlimited Mobile calls',
      'Teams Direct Routing ready',
      'Priority support response'
    ],
    recommended: true,
    cta: 'Select Ultimate'
  }
];

export const Plans = () => {
  const { setInquiryMessage } = useInquiry();

  const handleSelectPlan = (planName: string) => {
    setInquiryMessage(`I'm interested in the ${planName} plan for C9 Voice.`);
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="c9-voice-plans" className="w-full bg-[#F8F7FF] py-20 px-6 md:px-8 border-y border-gray-100">
      <div className="container mx-auto max-w-[1240px]">
        
        {/* Header - Matching Support Packages Style (Centered) */}
        <div className="flex flex-col items-center justify-center mb-16 gap-4 text-center">
           <div className="max-w-[700px]">
              <span className="c9-eyebrow mb-6 block">C9 VOICE PLANS</span>
              <h2 className="c9-section-heading">
                Simple pricing for <br className="hidden md:block" /> <span className="text-[#5D00D6]">powerful telephony.</span>
              </h2>
           </div>
           <div className="max-w-[500px]">
              <p className="c9-body !text-[14px] !text-[#6B7280] italic opacity-80">
                 * Per line (channel) pricing / ex GST. Scale your capacity up or down instantly as your business grows. No hidden lock-ins.
              </p>
           </div>
        </div>

        {/* Card Grid - Centered 2 Card Layout */}
        <div className="flex justify-center flex-wrap gap-8">
          {tiers.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group flex flex-col rounded-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] bg-white border border-gray-100 relative transition-all duration-500 hover:shadow-2xl w-full md:w-[calc(50%-16px)] lg:w-[420px] ${t.recommended ? 'scale-[1.02] z-10' : ''}`}
            >
              {/* TOP SECTION */}
              <div className={`p-8 md:p-10 pb-12 rounded-t-[40px] ${t.recommended ? 'bg-[#5D00D6]' : 'bg-[#FAFAFA]'} ${!t.recommended ? 'text-[#0c1024]' : 'text-white'} relative min-h-[340px] flex flex-col items-start`}>
                 <div className={`w-fit px-4 py-2 rounded-xl border text-[10px] font-bold tracking-[0.15em] uppercase mb-12 ${t.recommended ? 'bg-white/10 border-white/20 text-white' : 'bg-gray-200/50 border-gray-200 text-gray-500'}`}>
                    {t.offer}
                 </div>

                 <h3 className="c9-section-heading mb-4">{t.title}</h3>
                 <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-[52px] font-bold">{t.price}</span>
                    <span className="text-[14px] opacity-70 font-bold uppercase tracking-widest leading-none translate-y-[-10px]">/mth</span>
                 </div>
                  
                  <div className="mt-auto flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${t.recommended ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
                        <Zap size={16} className={t.recommended ? 'text-white' : 'text-[#5D00D6]'} />
                     </div>
                     <span className="text-[14px] font-bold opacity-80">{t.priceSub}</span>
                  </div>

                  <button 
                    onClick={() => handleSelectPlan(t.title)}
                    className={`absolute -bottom-8 left-8 right-8 py-4 px-6 rounded-full font-bold transition-all shadow-xl group-hover:scale-[1.03] active:scale-[0.97] z-20 flex items-center justify-center gap-2 ${t.recommended ? 'bg-white text-[#5D00D6] hover:bg-gray-50 shadow-purple-900/30' : 'bg-[#5D00D6] text-white hover:bg-[#4c00b0] shadow-[#5D00D6]/20'}`}
                  >
                    {t.cta} <ArrowRight size={18} />
                  </button>
              </div>

              {/* BOTTOM SECTION */}
              <div className="p-8 md:p-10 pt-28 flex-1 flex flex-col text-left">
                 <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-50">
                    <div>
                       <p className="c9-eyebrow !text-[#5D00D6] !text-[10px] mb-1">PLAN SUMMARY</p>
                       <p className="text-[20px] font-bold text-[#0c1024] leading-none">Key Features</p>
                    </div>
                    <Package size={20} className="text-gray-100" />
                 </div>

                 <p className="c9-body !text-[14px] !text-[#6B7280] mb-8">
                    {t.desc}
                 </p>

                 <div className="flex flex-col gap-4 mt-auto">
                    {t.features.map((f, fi) => (
                      <div key={fi} className="flex items-start gap-4">
                         <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${t.recommended ? 'bg-[#5D00D6]/10 text-[#5D00D6]' : 'bg-green-50 text-green-500'}`}>
                            <Check size={12} strokeWidth={3} />
                         </div>
                         <span className="text-[14px] text-slate-600 font-medium leading-snug">{f}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center">
           <div className="inline-flex items-center gap-2 text-[12px] text-slate-400 font-bold uppercase tracking-widest bg-gray-50 px-6 py-2 rounded-full border border-gray-100">
              <Info size={14} className="text-[#5D00D6]" />
              Volume pricing available for 100+ seats: 1800 000 299
           </div>
        </div>

      </div>
    </section>
  );
};
