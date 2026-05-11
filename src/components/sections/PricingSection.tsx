// components/sections/PricingSection.tsx

'use client';

import React, { useState } from 'react';
import { SMB_PACKAGES } from '@/data/smb-packages';
import { PricingCard } from './PricingCard';
import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="inline-block text-[11px] font-black text-[#5D00D6] uppercase tracking-[0.2em] mb-4 bg-[#5D00D6]/5 px-3 py-1 font-dm-sans">
                SIMPLE, TRANSPARENT PRICING
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight font-clash">
                Packages Built for <br />Growing Businesses.
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed max-w-xl font-dm-sans">
                Choose the package that fits your business. All packages include 24/7 support, 
                no setup fees, and the flexibility to upgrade or downgrade anytime. 
                Save 17% with annual billing.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="flex flex-col items-center lg:items-end gap-3">
              <div className="flex items-center gap-4 bg-white p-1.5 border border-slate-200 rounded-none shadow-sm">
                <button 
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2.5 text-[11px] font-black uppercase tracking-widest transition-all font-dm-sans ${!isAnnual ? 'bg-[#5D00D6] text-white' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2.5 text-[11px] font-black uppercase tracking-widest transition-all font-dm-sans ${isAnnual ? 'bg-[#5D00D6] text-white' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Annual (Save 17%)
                </button>
              </div>
              <p className="text-[10px] font-bold text-[#5D00D6] uppercase tracking-widest font-dm-sans">
                Recommended: Annual Billing
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {SMB_PACKAGES.map((tier, idx) => (
            <FadeIn key={tier.name} delay={idx * 0.1}>
              <PricingCard tier={tier} isAnnual={isAnnual} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-20 p-10 bg-white border border-slate-200 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-4 font-clash">Looking for a Custom Enterprise Solution?</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-sm leading-relaxed font-dm-sans">
              For businesses with 250+ employees or complex multi-site requirements, we offer tailored infrastructure governance and SLA management.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/enterprise" className="text-[11px] font-black text-[#5D00D6] uppercase tracking-widest hover:underline font-dm-sans">
                View Enterprise Solutions
              </a>
              <div className="hidden sm:block w-px h-4 bg-slate-200" />
              <a href="#consultation-section" className="text-[11px] font-black text-slate-900 uppercase tracking-widest hover:underline font-dm-sans">
                Speak to a specialist
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
