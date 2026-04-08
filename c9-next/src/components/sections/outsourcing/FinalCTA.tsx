'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

export default function FinalCTA() {
  const { setInquiryMessage } = useInquiry();

  const handleGetProposal = () => {
    setInquiryMessage("I'd like to get an IT Outsourcing proposal for my business. Please contact me to discuss our requirements.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="container mx-auto max-w-[700px] text-center font-sans">
        <h2 className="text-[36px] md:text-[48px] font-bold text-[#0c1024] leading-[1.05] tracking-tight font-sans" >
          Ready to hand IT over to a team that owns the outcome?
        </h2>
        
        <p className="text-[18px] md:text-[20px] text-slate-600/90 mt-8 leading-relaxed font-normal font-sans" >
          Tell us about your business and we'll put together a managed IT proposal within 2 business days. No obligation. No jargon. Just a clear picture of what's possible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-10">
          <Button 
            onClick={handleGetProposal}
            className="bg-[#5D00D6] hover:bg-[#4B00AD] text-white px-10 h-[56px] rounded-none font-bold transition-all text-[16px] font-sans border-none"
            
          >
            Get an IT Outsourcing Proposal <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <a 
            href="tel:1800000299"
            className="inline-flex items-center justify-center border-2 border-[#E5E7EB] text-[#0c1024] hover:bg-slate-50 px-10 h-[56px] rounded-none font-bold transition-all text-[16px] font-sans no-underline"
            
          >
            Call 1800 000 299
          </a>
        </div>

        <div className="text-[13px] text-slate-600 text-center mt-8  opacity-80 uppercase tracking-widest font-bold font-sans" >
          Australian team · Responds within 1 business day · No lock-in consultations
        </div>
      </div>
    </section>
  );
}

