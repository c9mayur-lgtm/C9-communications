'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BadgePercent } from 'lucide-react';

export const FinanceBanner = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#E4E0FD] border border-purple-100 rounded-[32px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#5D00D6] shadow-sm shrink-0">
              <BadgePercent size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0c1024] mb-1">Flexible Financing for Your Site</h3>
              <p className="text-slate-600 font-medium text-sm md:text-[15px] max-w-lg">
                Get your site operational today with custom finance options for hardware and comprehensive leasing plans tailored for Aussie businesses.
              </p>
            </div>
          </div>
          
          <div className="shrink-0">
            <button 
              className="bg-[#0c1024] text-white px-10 h-14 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-black transition-all flex items-center gap-2 hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
            >
              Explore Finance Options
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
