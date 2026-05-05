'use client';

import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInquiry } from '@/components/context/InquiryContext';

export default function FinalCTA() {
  const { setInquiryMessage } = useInquiry();

  const handleAssessmentRequest = () => {
    setInquiryMessage("I'm interested in an infrastructure assessment. We'd like to discuss what we're currently running and what we need to achieve with C9.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-white py-32 px-6">
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div className="max-w-[700px] mx-auto text-center mb-12">
          <h2 className="font-['Proxima_Nova'] text-[38px] md:text-[46px] text-[#1A1A2E] font-bold leading-[1.2] mb-6 whitespace-normal">
            Ready to talk infrastructure with people who actually get it?
          </h2>
          <p className="font-['Proxima_Nova'] text-[18px] text-[#6B7280] leading-[1.7] max-w-[600px] mx-auto">
            Tell us what you're running, what's not working, and what you need to achieve. We'll come back with an honest assessment and a proposal that fits.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleAssessmentRequest}
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-[#5D00D6] text-white font-['Proxima_Nova'] font-bold text-[14px] h-[52px] px-10 rounded-full hover:bg-[#4c00b0] shadow-xl shadow-purple-900/10 transition-all border-none flex items-center gap-2"
            )}
          >
            Get an Infrastructure Assessment 
          </button>
          
          <a 
            href="tel:1800000299" 
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-[rgba(93,0,214,0.2)] text-[#1A1A2E] font-['Proxima_Nova'] font-bold text-[14px] h-[52px] px-10 rounded-full hover:bg-[#5D00D6] hover:text-white transition-all flex items-center gap-2 no-underline bg-white"
            )}
          >
            <Phone className="w-4 h-4 mr-1" /> Call 1800 000 299
          </a>
        </div>
        
        <div className="mt-8 flex justify-center flex-wrap gap-y-2 divide-x divide-slate-200">
          <span className="font-['Proxima_Nova'] text-[14px] text-[#6B7280] px-4 font-bold uppercase tracking-tight">Australian team</span>
          <span className="font-['Proxima_Nova'] text-[14px] text-[#6B7280] px-4 font-bold uppercase tracking-tight">Responds within 1 business day</span>
          <span className="font-['Proxima_Nova'] text-[14px] text-[#5D00D6] px-4 font-bold uppercase tracking-tight">No lock-in consultations</span>
        </div>
      </div>
    </section>
  );
}
