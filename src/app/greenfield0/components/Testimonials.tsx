'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'David Chen',
    role: 'Operations Director',
    quote: 'Consolidating our nationwide connectivity and IT infrastructure under C9 Communications was the best strategic move we made. Their enterprise Fibre nbn eliminated our downtime, and having a single, proactive Australian support team means zero IT headaches.',
    stat: '99.99%',
    label: 'Network Uptime',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Michael Ross',
    role: 'Managing Director',
    quote: 'The strategic roadmap provided by C9 aligned our technology stack perfectly with our aggressive growth targets. They don\'t just fix issues; they engineer sophisticated, centralized infrastructure that scales dynamically. Truly unmatched.',
    stat: '4X',
    label: 'Capacity Growth',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 rounded-[40px] p-10 md:p-14 relative flex flex-col h-full border border-slate-100 group hover:bg-[#7C3AED] transition-all duration-700"
            >
              <div className="absolute top-10 right-10 text-purple-100 group-hover:text-white/20 transition-colors">
                <Quote size={80} />
              </div>
              
              <div className="flex-1 relative z-10">
                <p className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-10 group-hover:text-white transition-colors">
                  &ldquo;{t.quote}&rdquo;
                </p>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-tight group-hover:text-white transition-colors">{t.name}</h4>
                    <p className="c9-eyebrow !text-[10px] !mb-0 group-hover:text-white/60 transition-colors">{t.role}</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200 group-hover:border-white/20 flex justify-between items-center relative z-10">
                <div>
                  <div className="text-4xl font-black text-[#5D00D6] group-hover:text-white transition-colors">{t.stat}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">{t.label}</div>
                </div>
                <div className="flex gap-1">
                   {[1,2,3,4,5].map(s => (
                     <div key={s} className="w-1 h-4 bg-[#5D00D6]/20 rounded-full group-hover:bg-white/30 transition-colors" />
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
