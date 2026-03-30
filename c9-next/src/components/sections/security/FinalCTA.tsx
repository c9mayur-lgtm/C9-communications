import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-white py-24 overflow-hidden" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
      <div className="container mx-auto px-6 md:px-8 w-full text-center" style={{ maxWidth: '640px' }}>
        <h2 className="text-[36px] md:text-[44px] font-bold text-[#1A1A2E] leading-[1.05] tracking-tight">
          Find out where your organisation actually stands.
        </h2>
        
        <p className="text-[18px] text-[#6B7280] mt-6 leading-[1.7] font-normal">
          A C9 security assessment identifies your current posture, highlights the gaps, and gives you a clear remediation roadmap. No obligation. No jargon.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-10 w-full">
          <Button className="w-full sm:w-auto bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-10 h-[56px] rounded-full font-bold transition-all text-[16px] shadow-lg shadow-purple-900/20">
            Get a Security Assessment <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <a 
            href="tel:1800000299"
            className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-[#1A1A2E]/10 text-[#1A1A2E] hover:bg-slate-50 px-10 h-[56px] rounded-full font-bold transition-all text-[16px]"
          >
            Call 1800 000 299
          </a>
        </div>

        <div className="text-[12px] text-[#6B7280] text-center mt-10 opacity-80 uppercase tracking-widest font-bold">
          Australian team · Responds within 1 business day · No lock-in consultations
        </div>
      </div>
    </section>
  );
}
