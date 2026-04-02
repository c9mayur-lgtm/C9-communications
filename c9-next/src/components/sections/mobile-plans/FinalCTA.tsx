'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const trustItems = [
  'Optus 4G & 5G network coverage',
  'Fleet proposal within 1 business day',
  'Australian onshore team',
  'No hidden bill shock or individual overage fees',
];

export default function FinalCTA() {
  const handleQuoteClick = () => {
    document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="w-full bg-[#0F0F1A] py-20"
      style={{ fontFamily: '"Proxima Nova", sans-serif' }}
    >
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[700px] text-center">

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.4 }}
          className="rounded-full text-[11px] font-semibold uppercase tracking-wider px-4 py-1.5 mx-auto mb-6 w-fit"
          style={{ background: 'rgba(93,0,214,0.2)', color: '#A855F7' }}
        >
          Dedicated Fleet Manager
        </motion.div>

        <motion.h2 
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="text-[40px] md:text-[48px] text-white font-bold leading-[1.2]"
        >
          Ready to simplify your business mobile fleet?
        </motion.h2>

        <motion.p 
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="text-[18px] text-[#9CA3AF] mt-4 leading-[1.7]"
        >
          Tell us how many services you need, which network you prefer, and whether you want to bundle with your internet or voice — C9 will put together a fleet proposal within one business day.
        </motion.p>

        <motion.div 
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.3 }}
           className="flex flex-wrap items-center justify-center gap-3 mt-8"
        >
          <button
            onClick={handleQuoteClick}
            className="inline-flex items-center justify-center h-[56px] px-10 rounded-full text-[15px] font-semibold bg-[#5D00D6] hover:bg-[#4B00AD] text-white transition-colors duration-200"
          >
            Get a Mobile Fleet Quote →
          </button>
          <a
            href="tel:1800000299"
            className="inline-flex items-center justify-center h-[56px] px-10 rounded-full text-[15px] text-[#9CA3AF] border bg-transparent hover:border-white hover:text-white transition-all duration-200"
            style={{ borderColor: '#4B5563', fontFamily: '"Proxima Nova", sans-serif' }}
          >
            Call 1800 000 299
          </a>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8"
        >
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle size={14} className="text-[#5D00D6] shrink-0" />
              <span className="text-[12px] text-[#6B7280]">{item}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
