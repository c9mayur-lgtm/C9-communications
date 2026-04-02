'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

const BackgroundElements = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.2] z-0">
    <div style={{ 
      backgroundImage: `radial-gradient(#5D00D6 0.8px, transparent 0.8px)`,
      backgroundSize: '40px 40px',
    }} className="absolute inset-0" />
    <motion.div 
      animate={{ opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5D00D6]/20 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" 
    />
  </div>
);

export default function FinalCTA() {
  const { setInquiryMessage } = useInquiry();

  const scrollToAssessment = () => {
    setInquiryMessage("I'd like to schedule a senior network engineering assessment to re-architect our core network infrastructure.");
    const el = document.getElementById('consultation-section');
    if(el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-white py-20 px-6 overflow-hidden">
      <BackgroundElements />
      
      <div className="container relative z-10 mx-auto px-6 md:px-8 w-full max-w-[1240px] text-center font-['Proxima_Nova']">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-3 mb-10 px-6 py-2 bg-purple-50 rounded-full border border-purple-100">
             <MessageCircle size={14} className="text-[#5D00D6]" />
             <span className="text-[#5D00D6] text-[11px] font-black uppercase tracking-[0.25em]">Strategic Engagement</span>
          </div>
          
          <h2 className="text-[42px] md:text-[58px] lg:text-[62px] font-bold text-[#1A1A2E] leading-[1.0] tracking-[-0.03em] max-w-[900px] mx-auto">
            Ready to <span className="text-[#5D00D6]">re-architect</span> your core network?
          </h2>
          
          <p className="text-[19px] md:text-[21px] text-[#6B7280] mt-10 leading-[1.65] font-medium max-w-[700px] mx-auto">
             Diagnose your current setup with our senior network engineers. We'll identify bottlenecks and design the ideal MPLS, SD-WAN, or Hybrid architecture for your business.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center mt-16 mb-16">
            <Button 
              onClick={scrollToAssessment}
              className="bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-bold h-16 px-12 rounded-full text-[17px] transition-all shadow-[0_15px_40px_rgba(93,0,214,0.3)] group flex items-center gap-3 active:scale-95 border-none"
            >
              Get a Network Assessment 
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <a href="tel:1800000299" className="inline-block no-underline">
              <Button 
                variant="outline" 
                className="border-2 border-slate-100 text-[#1A1A2E] font-bold h-16 px-12 rounded-full text-[17px] transition-all hover:bg-[#5D00D6] hover:text-white hover:border-[#5D00D6] bg-white flex items-center gap-3 active:scale-95 shadow-xl shadow-slate-900/5 group"
              >
                <div className="w-7 h-7 bg-slate-50 text-slate-500 rounded-lg flex items-center justify-center group-hover:bg-[#5D00D6]/20 group-hover:text-white transition-colors duration-300">
                  <Phone size={14} />
                </div>
                Call 1800 000 299
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-12 pt-12 border-t border-gray-100 max-w-3xl mx-auto opacity-70">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">AU-based support</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">24-hour response</span>
             </div>
             <div className="flex items-center gap-2 hidden md:flex">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Zero lock-in</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
