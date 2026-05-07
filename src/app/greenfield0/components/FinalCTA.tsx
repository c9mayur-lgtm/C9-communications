'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { C9Button } from '@/components/design-system/C9Button';

export const FinalCTA = ({ onOpenQualifier }: { onOpenQualifier: () => void }) => {
  return (
    <section className="py-16 bg-white font-dm-sans">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0c1024] rounded-[32px] p-12 md:p-24 text-center relative overflow-hidden"
        >
          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white"
            >
              <PhoneCall size={14} className="text-purple-400" />
              <span className="c9-eyebrow !text-[12px] !mb-0">Secure Your Timeline</span>
            </motion.div>
            
            <h2 className="c9-hero-title !text-white max-w-3xl mx-auto font-clash">
              Open Your Next Site Without the Risk
            </h2>
            
            <p className="c9-body !text-slate-400 max-w-xl mx-auto font-dm-sans text-lg">
              Plan, deliver, and operate with total confidence. Let&apos;s make your opening day a business milestone, not a technical gamble.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <C9Button 
                size="lg"
                onClick={onOpenQualifier}
                className="rounded-full h-16 px-12 shadow-2xl shadow-purple-900/40"
              >
                Plan My New Site
              </C9Button>
              <C9Button 
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-white/20 text-white rounded-full h-16 px-12 hover:bg-white/5 transition-all"
              >
                <a href="tel:1300000000">Speak to an Expert</a>
              </C9Button>
            </div>
            
            <div className="pt-8 flex items-center justify-center gap-6 opacity-40">
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Australia Wide</span>
              <div className="w-1 h-1 rounded-full bg-white" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white">24/7 Support</span>
              <div className="w-1 h-1 rounded-full bg-white" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Guaranteed Readiness</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
