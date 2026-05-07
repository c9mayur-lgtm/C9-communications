'use client';

import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { metric: '500+', label: 'Sites Delivered', sub: 'Across Aus and NZ' },
  { metric: '<6 wks', label: 'Rapid Deployment', sub: 'Project Average' },
  { metric: 'Zero', label: 'Day-One Failures', sub: 'Guaranteed' },
  { metric: '100%', label: 'Operational at Launch', sub: 'Success Rate' },
];

export const StatsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="grid grid-cols-2 md:flex md:flex-nowrap items-center justify-between">
          {STATS.map((s, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex-1 px-4 py-6 text-center md:text-left"
              >
                <div className="text-[42px] md:text-[54px] font-semibold text-[#0c1024] tracking-tight leading-none mb-3">
                  {s.metric}
                </div>
                <div className="space-y-1">
                  <div className="text-[12px] md:text-[13px] font-bold text-[#5D00D6] uppercase tracking-[0.15em]">
                    {s.label}
                  </div>
                  <div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
                    {s.sub}
                  </div>
                </div>
              </motion.div>
              
              {/* Vertical Separator - Hidden on Mobile */}
              {i < STATS.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-slate-100 self-center opacity-60" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
