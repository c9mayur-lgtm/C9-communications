'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CASE_STUDIES = [
  {
    category: 'Multi-Site Architecture',
    title: 'Rapid Infrastructure Rollout for National Expansion',
    description: 'Successfully commissioned 12 new sites across 3 states in under 6 weeks, providing unified networking and zero-day operational readiness.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    tag: 'National Site Rollout'
  },
  {
    category: 'Retail Operations',
    title: 'Full Technical Readiness for National Retail Launch',
    description: 'End-to-end delivery of POS connectivity, secure guest Wi-Fi, and back-office integration for a multi-site retail rollout.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    tag: 'Retail Rollout'
  },
  {
    category: 'Industrial Logistics',
    title: 'High-Stakes Site Setup for Global Logistics Hub',
    description: 'Delivery of secure networking, enterprise Wi-Fi, and integrated IP security systems for a mission-critical 10,000sqm logistics facility.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    tag: 'Logistics Site Setup'
  },
];

export const CaseStudies = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="c9-eyebrow !text-blue-600 mb-4"
            >
              Social Proof
            </motion.div>
            <h2 className="c9-section-heading leading-tight">
              Greenfield Success Stories
            </h2>
          </div>
          <Button variant="outline" className="rounded-full border-2 font-bold px-8 h-12">
            View All Case Studies
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[32px] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={study.img} 
                  alt={study.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full c9-eyebrow !text-[#5D00D6] !mb-0">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="c9-card-title mb-4 leading-tight group-hover:text-[#5D00D6] transition-colors">
                  {study.title}
                </h3>
                <p className="text-[14px] text-slate-500 font-medium leading-relaxed mb-8 flex-1">
                  {study.description}
                </p>
                <div className="pt-6 border-t border-slate-50">
                  <button className="flex items-center gap-2 text-[#5D00D6] font-bold uppercase tracking-widest text-[12px] group/btn">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
