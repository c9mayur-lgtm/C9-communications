'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Settings, ShoppingCart, Wrench, BadgeCheck, Zap } from 'lucide-react';

const STAGES = [
  { id: '1', title: 'Validate', desc: 'Define requirements, scope, and technical project risks.', icon: <Search /> },
  { id: '2', title: 'Design', desc: 'Complete system architecture and infrastructure mapping.', icon: <Settings /> },
  { id: '3', title: 'Procure', desc: 'Source and stage all required hardware and materials.', icon: <ShoppingCart /> },
  { id: '4', title: 'Deploy', desc: 'On-site installation of infrastructure and technology systems.', icon: <Wrench /> },
  { id: '5', title: 'Commission', desc: 'End-to-end testing under real-world operational conditions.', icon: <BadgeCheck /> },
  { id: '6', title: 'Handover', desc: 'Fully operational handover with documentation and support.', icon: <Zap /> },
];

export const DeliveryProcess = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="c9-eyebrow mb-4"
          >
            Predictable Outcomes
          </motion.div>
          <h2 className="c9-section-heading mb-6">
            Predictable Outcomes. Every Time.
          </h2>
          <p className="c9-body max-w-2xl mx-auto">
            We focus on outcomes, not process jargon. Our 6-stage delivery model ensures your site opens with total technical certainty.
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="absolute top-[60px] left-0 w-full h-0.5 bg-slate-100 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {STAGES.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center px-4"
              >
                <div className="relative z-10 w-[120px] h-[120px] rounded-full bg-white border-4 border-slate-50 shadow-xl shadow-slate-100 flex flex-col items-center justify-center mb-8 group hover:border-[#5D00D6]/20 transition-all duration-300">
                  <div className="text-[#5D00D6] mb-1 group-hover:scale-110 transition-transform">
                    {React.cloneElement(s.icon as React.ReactElement, { size: 32 } as any)}
                  </div>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Stage {s.id}</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-bold text-slate-900 uppercase tracking-tight text-[16px]">{s.title}</h3>
                  <p className="text-[14px] text-slate-500 font-medium leading-relaxed">{s.desc}</p>
                </div>

                {/* Vertical line for mobile */}
                {i < STAGES.length - 1 && (
                  <div className="absolute top-[120px] left-1/2 w-0.5 h-10 bg-slate-100 lg:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
