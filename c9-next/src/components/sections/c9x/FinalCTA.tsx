'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInquiry } from '@/components/context/InquiryContext';

const trustItems = [
  "No upfront fees",
  "Save up to 70% on calls",
  "80+ standard features",
  "Australian voice engineers"
];

export const FinalCTA = () => {
  const { setInquiryMessage } = useInquiry();

  const scrollToForm = () => {
    setInquiryMessage("I'd like to request a proposal for the C9 Voice cloud phone system.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#0F0F1A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#5D00D6]/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[800px] text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* NBN Accredited Style Eyebrow */}
          <div className="rounded-full text-[11px] font-medium uppercase tracking-[0.2em] px-5 py-2 mx-auto mb-10 w-fit bg-[#5D00D6]/20 text-[#A855F7] border border-[#5D00D6]/10">
            NBN™ Accredited Adviser
          </div>

          <h2 className="c9-section-heading !text-white !text-[40px] md:!text-[52px] mb-8 text-balance">
            Ready to future-proof your<br className="hidden lg:block" /> business communications?
          </h2>
          
          <p className="c9-body !text-slate-400 max-w-2xl mx-auto mb-14 text-balance">
            Tell us how many lines you need, what CRM you use, and whether you need multi-site connectivity — C9 will design a C9 Voice solution and come back with a proposal within one business day.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="bg-[#5D00D6] hover:bg-[#4c00b0] text-white rounded-full px-12 h-16 text-[16px] font-medium w-full sm:w-auto shadow-2xl shadow-[#5D00D6]/40 transition-all hover:scale-105 border-none"
            >
              Get a C9 Voice Quote <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
            <a 
              href="tel:1800000299" 
              className="flex items-center justify-center h-16 px-10 rounded-full text-[16px] text-slate-400 border border-slate-700 bg-transparent hover:border-white hover:text-white transition-all duration-300 w-full sm:w-auto group"
            >
              <Phone size={18} className="mr-3 text-slate-500 group-hover:text-[#5D00D6] transition-colors" />
              Call 1800 000 299
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-x-10 gap-y-5 pt-12 border-t border-white/5 w-full"
          >
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#5D00D6]" />
                <span className="c9-eyebrow !text-slate-500 !text-[11px] !tracking-wider normal-case">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
