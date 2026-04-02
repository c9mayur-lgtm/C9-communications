'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShieldCheck, Zap, ArrowRight, Share2, FileDown, Timer, Info, Globe, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PLANS_DATA = {
  '4G': [
    {
      title: 'Business Fleet 50',
      offer: 'SMALL FIELD TEAMS',
      price: '$149',
      perService: 'Approx. $37 / service',
      priceSub: 'Ideal for 1-4 services',
      data: '50GB Shared Pool',
      desc: 'Professional grade 4G connectivity with shared data pooling for entry-level field operations.',
      features: [
        '50GB shared data allowance',
        'Unlimited local, mobile & 1300',
        'No excess data charges',
        'Standard 4G Optus coverage'
      ],
      recommended: false,
      cta: 'Select 50GB',
      isDark: false,
      badge: null
    },
    {
      title: 'Business Fleet 150',
      offer: 'INTEGRATED OPERATIONS',
      price: '$399',
      perService: 'Approx. $39 / service',
      priceSub: 'Best for up to 10 services',
      data: '150GB Shared Pool',
      desc: 'Our most popular fleet tier. High-capacity shared data designed for growing business teams.',
      features: [
        '150GB shared data allowance',
        'Priority fault escalation path',
        'Dedicated support triage',
        'Zero-waste data banking'
      ],
      recommended: true,
      cta: 'Select 150GB',
      isDark: false,
      badge: 'INTUNE READY'
    },
    {
      title: 'Business Fleet 300',
      offer: 'ENTERPRISE HQ HUB',
      price: '$899',
      perService: 'Approx. $35 / service',
      priceSub: 'For fleets up to 25 services',
      data: '300GB Shared Pool',
      desc: 'Maximum performance for large-scale operations requiring significant monthly data throughput.',
      features: [
        '300GB shared data allowance',
        'Enterprise-grade reliability',
        'Direct account manager access',
        'Priority routing pathing'
      ],
      recommended: false,
      cta: 'Select 300GB',
      isDark: true,
      badge: 'ROAMING READY'
    }
  ],
  '5G': [
    {
      title: 'Enterprise 5G 50',
      offer: 'MOBILE WORKFORCES',
      price: '$179',
      perService: 'Approx. $44 / service',
      priceSub: 'Ideal for 1-4 services',
      data: '50GB Shared Pool',
      desc: 'Ultra-fast 5G connectivity for agile teams requiring high-speed data access on the move.',
      features: [
        '5G high-speed capability',
        'Unlimited local, mobile & 1300',
        'No excess data charges',
        'Premium 5G Optus coverage'
      ],
      recommended: false,
      cta: 'Select 5G 50',
      isDark: false,
      performance: 40,
      badge: null
    },
    {
      title: 'Enterprise 5G 150',
      offer: 'SCALE OPERATIONS',
      price: '$499',
      perService: 'Approx. $49 / service',
      priceSub: 'Best for up to 10 services',
      data: '150GB Shared Pool',
      desc: 'High-performance 5G fleet management for businesses prioritizing speed and redundancy.',
      features: [
        '150GB shared 5G data',
        'Maximum priority access',
        '5G Ultra Wideband support',
        'Zero-waste shared pool'
      ],
      recommended: true,
      cta: 'Select 5G 150',
      isDark: false,
      performance: 75,
      badge: 'ULTRA-LOW LATENCY'
    },
    {
      title: 'Enterprise 5G 300',
      offer: 'MISSION CRITICAL',
      price: '$999',
      perService: 'Approx. $39 / service',
      priceSub: 'For fleets up to 25 services',
      data: '300GB Shared Pool',
      desc: 'Top-tier 5G mobile infrastructure for organizations where connectivity is non-negotiable.',
      features: [
        '300GB ultra-fast 5G data',
        'Mission-critical priority',
        'Direct engineer support',
        'Enterprise fleet dashboard'
      ],
      recommended: false,
      cta: 'Select 5G 300',
      isDark: true,
      performance: 100,
      badge: 'ESTIMATED 1GBPS'
    }
  ]
};

const PlanCard = ({ plan, index, isRecommended }: { plan: any; index: number; isRecommended: boolean }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group flex flex-col rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] bg-white border border-gray-100 relative transition-all duration-500 hover:shadow-2xl ${isRecommended ? 'scale-[1.03] z-10' : ''}`}
    >
      {/* TOP SECTION */}
      <div className={`p-8 md:p-12 pb-14 rounded-t-[40px] ${isRecommended ? 'bg-[#5D00D6]' : (plan.isDark ? 'bg-[#1A1A2E]' : 'bg-[#FAFAFA]')} ${isRecommended || plan.isDark ? 'text-white' : 'text-[#1A1A2E]'} relative min-h-[360px] flex flex-col`}>
          <div className="flex justify-between items-start mb-12">
            <div className={`w-fit px-4 py-2 rounded-xl border text-[10px] font-bold tracking-[0.15em] uppercase ${isRecommended || plan.isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-gray-200/50 border-gray-200 text-gray-400'}`}>
              {plan.offer}
            </div>
            {plan.badge && (
               <div className="bg-emerald-500 text-white text-[9px] font-black px-3 py-1 rounded-full animate-pulse shadow-lg shadow-emerald-500/20">
                  {plan.badge}
               </div>
            )}
         </div>

         <h3 className="text-[26px] font-bold leading-tight mb-4 tracking-tight">{plan.title}</h3>
         <div className="flex items-baseline gap-2 mb-2">
            <span className="text-[48px] font-bold tracking-tighter">{plan.price}</span>
            <div className={`flex flex-col leading-none ${isRecommended || plan.isDark ? 'text-white/60' : 'text-slate-400'}`}>
               <span className="text-[13px] font-bold uppercase tracking-widest">/mth</span>
               <span className="text-[9px] font-bold uppercase tracking-widest">Ex. GST</span>
            </div>
         </div>
         
         <div className={`text-[12px] font-bold mb-6 ${isRecommended || plan.isDark ? 'text-white/40' : 'text-slate-400'}`}>
            {plan.perService}
         </div>
          
          <div className="mt-auto flex items-center gap-3">
             <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isRecommended || plan.isDark ? 'bg-white/10' : 'bg-white shadow-sm border border-gray-100'}`}>
                <Zap size={14} className={isRecommended || plan.isDark ? 'text-white' : 'text-[#5D00D6]'} />
             </div>
             <span className="text-[12px] font-bold opacity-70 tracking-tight">{plan.priceSub}</span>
          </div>

          <button 
            onClick={() => document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' })}
            className={`absolute -bottom-8 left-8 right-8 py-4 px-6 rounded-full font-bold transition-all shadow-xl group-hover:scale-[1.03] active:scale-[0.97] z-20 flex items-center justify-center gap-2 ${isRecommended || plan.isDark ? 'bg-white text-[#5D00D6] hover:bg-gray-50 shadow-purple-900/30' : 'bg-[#5D00D6] text-white hover:bg-[#4c00b0] shadow-[#5D00D6]/20'}`}
          >
            {plan.cta} <ArrowRight size={18} />
          </button>
      </div>

      {/* BOTTOM SECTION */}
      <div className="p-8 md:p-12 pt-36 flex-1 flex flex-col">
         <div className="flex flex-col gap-6 mb-8 pb-6 border-b border-gray-50">
            <div className="flex items-center justify-between">
               <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1.5">DATA CAPACITY</p>
                  <div className="flex items-center gap-2">
                     <p className="text-[22px] font-bold text-[#1A1A2E] leading-none tracking-tight">{plan.data}</p>
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
               </div>
               {plan.performance && (
                  <div className="text-right">
                     <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1.5 text-right">NETWORK RATIO</p>
                     <div className="flex items-center gap-1.5 justify-end">
                        {[1,2,3,4,5].map((b) => (
                           <div key={b} className={`w-1.5 h-4 rounded-full ${b <= (plan.performance / 20) ? 'bg-[#5D00D6]' : 'bg-gray-100'}`} />
                        ))}
                     </div>
                  </div>
               )}
            </div>
         </div>

         <p className="text-[14px] text-slate-500 leading-relaxed mb-8 font-medium">
            {plan.desc}
         </p>

         <div className="flex flex-col gap-4 mt-auto">
            {plan.features.map((f: string, fi: number) => (
              <div key={fi} className="flex items-start gap-4">
                 <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isRecommended ? 'bg-[#5D00D6]/10 text-[#5D00D6]' : 'bg-[#5D00D6]/5 text-[#5D00D6]'}`}>
                    <Check size={11} strokeWidth={3} />
                 </div>
                 <span className="text-[13.5px] text-slate-600 font-medium leading-snug">{f}</span>
              </div>
            ))}
         </div>

         <div className="mt-10 pt-6 border-t border-gray-50">
            <a 
              href="https://c9communications.com.au/wp-content/uploads/2022/02/Critical-Summary-Mobiles-FEB-11-2022.pdf"
              target="_blank"
              className="group/cis inline-flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-[#5D00D6] transition-colors"
            >
              <FileDown size={13} className="transition-transform group-hover/cis:-translate-y-0.5" /> Download Summary (CIS)
            </a>
         </div>
      </div>
    </motion.div>
  );
};

export default function Plans() {
  const [network, setNetwork] = useState<'4G' | '5G'>('5G');

  return (
    <section id="mobile-plans" className="bg-[#FAFAFA] py-16 md:py-20 overflow-hidden border-y border-gray-100" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-[750px]">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-[#5D00D6]/5 rounded-none border border-[#5D00D6]/10">
               <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6] animate-pulse" />
               <span className="text-[#5D00D6] text-[11px] font-black uppercase tracking-[0.3em]">MOBILE PLAN OPTIONS</span>
            </div>
            <h2 className="text-[36px] md:text-[56px] font-bold tracking-tight text-[#1A1A2E] leading-[1.05]">
              Simple business pricing. <br /><span className="text-[#5D00D6]">No hidden costs.</span>
            </h2>
          </div>
          <div className="max-w-[400px]">
              <p className="text-[15px] md:text-[16px] text-slate-500 leading-relaxed italic border-l-2 border-[#5D00D6]/20 pl-6">
                 Choose the network speed and data volume that fits your team. We don't believe in excess data fees or multi-year lock-ins.
              </p>
          </div>
        </div>

        {/* TOGGLE */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-[24px] border border-gray-100 shadow-sm flex items-center gap-2">
            {[
              { id: '4G', icon: Share2, label: 'Standard 4G' },
              { id: '5G', icon: Zap, label: 'Premium 5G' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setNetwork(t.id as any)}
                className={`flex items-center gap-3 px-8 py-4 rounded-[18px] text-[14px] font-bold transition-all ${network === t.id ? 'bg-[#5D00D6] text-white shadow-xl shadow-[#5D00D6]/20' : 'text-slate-400 hover:text-[#5D00D6]'}`}
              >
                <t.icon size={18} /> {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* PLANS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-8">
          {PLANS_DATA[network].map((plan, i) => (
            <PlanCard key={i} plan={plan} index={i} isRecommended={plan.recommended} />
          ))}
        </div>

        {/* FOOTER INFO */}
        <div className="mt-16 text-center">
           <div className="inline-flex flex-col md:flex-row items-center gap-6 md:gap-12 text-[12px] text-slate-400 font-bold uppercase tracking-widest bg-gray-50 px-8 py-4 rounded-3xl border border-gray-100">
              <div className="flex items-center gap-2">
                 <Info size={14} className="text-[#5D00D6]" />
                 <span>Shared pool applies to same account</span>
              </div>
              <div className="flex items-center gap-2">
                 <Globe size={14} className="text-[#5D00D6]" />
                 <span>100+ Roaming Countries supported</span>
              </div>
              <div className="text-[#5D00D6] font-black">
                 FLEETS OVER 50: 1800 000 299
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
