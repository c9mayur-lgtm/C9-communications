// components/sections/PricingCard.tsx

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { PackageTier } from '@/data/smb-packages';

interface PricingCardProps {
  tier: PackageTier;
  isAnnual: boolean;
}

export const PricingCard = ({ tier, isAnnual }: PricingCardProps) => {
  const displayPrice = isAnnual 
    ? Math.floor((tier.price * 12 * (1 - (tier.savingsPercentage || 0) / 100)) / 12)
    : tier.price;
    
  const annualTotal = Math.floor(tier.price * 12 * (1 - (tier.savingsPercentage || 0) / 100));

  return (
    <div className={`relative flex flex-col h-full bg-white border ${tier.highlighted ? 'border-[#5D00D6] shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'} rounded-none transition-all duration-300 hover:shadow-lg`}>
      {tier.badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#5D00D6] text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">
          {tier.badge}
        </div>
      )}

      <div className="p-8 md:p-10 flex flex-col flex-1">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">{tier.subtitle}</p>
        </div>

        <div className="mb-8">
          <div className="flex items-baseline gap-1 font-clash">
            <span className="text-sm font-bold text-slate-400 mr-1">AUD</span>
            <span className="text-4xl font-bold text-slate-900">${displayPrice.toLocaleString()}</span>
            <span className="text-slate-500 text-sm font-medium">/month</span>
          </div>
          <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">+ GST</p>
          {isAnnual && (
            <div className="mt-3 text-[#5D00D6] text-[11px] font-black uppercase tracking-wider font-dm-sans">
              AUD ${annualTotal.toLocaleString()} billed annually (Save {tier.savingsPercentage}%)
            </div>
          )}
        </div>

        <div className="h-px bg-slate-100 mb-8" />

        <div className="mb-8 flex-1">
          <p className="text-sm text-slate-700 leading-relaxed mb-8">{tier.description}</p>
          
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-black text-[#5D00D6] uppercase tracking-widest mb-4">CORE SERVICES</p>
              <ul className="space-y-3">
                {tier.coreServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#5D00D6] mt-0.5 shrink-0" />
                    <span className="text-[13px] text-slate-800 leading-tight">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">BEST FOR</p>
              <ul className="space-y-2">
                {tier.bestFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                    <span className="text-[12px] text-slate-600 italic leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-8 border-t border-slate-50">
          <Link href={tier.primaryCTA.link} className="block w-full">
            <button className="w-full bg-[#5D00D6] text-white font-bold py-4 px-6 rounded-none hover:bg-[#4d00b3] transition-all duration-200 uppercase tracking-widest text-[12px] flex items-center justify-center gap-2">
              {tier.primaryCTA.text}
              <ArrowRight size={16} />
            </button>
          </Link>
          
          <Link href={tier.secondaryCTA.link} className="block w-full text-center">
            <span className="text-[11px] font-bold text-slate-900 hover:text-[#5D00D6] transition-colors uppercase tracking-widest cursor-pointer">
              {tier.secondaryCTA.text}
            </span>
          </Link>

          {tier.tertiaryCTA && (
            <Link href={tier.tertiaryCTA.link} className="block w-full text-center">
              <span className="text-[10px] font-medium text-slate-500 hover:text-slate-800 transition-colors uppercase tracking-widest cursor-pointer">
                {tier.tertiaryCTA.text}
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
