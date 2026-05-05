import React from 'react';
import { Button } from "@/components/ui/button";
;

export default function FinalCTA() {
  return (
    <section className="bg-white py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="container mx-auto max-w-[700px] text-center font-sans">
        <h2 className="c9-section-heading font-sans" >
          Ready to turn your IT spend into a strategic asset?
        </h2>
        
        <p className="text-[18px] md:text-[20px] text-slate-600/90 mt-8 leading-relaxed font-normal font-sans" >
          Book a strategy session with C9 — no obligation, no jargon, no product pitch. Just a clear conversation about where your technology is today and where it needs to be.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-10">
          <Button className="bg-[#5D00D6] hover:bg-[#4B00AD] text-white px-10 h-[56px] rounded-full font-bold transition-all text-[14px] font-sans">
            Book a Strategy Session 
          </Button>

          <a 
            href="tel:1800000299"
            className="inline-flex items-center justify-center border-2 border-[#E5E7EB] text-[#0c1024] hover:bg-slate-50 h-[56px] rounded-full transition-all font-sans px-8 text-[14px] font-bold gap-2"
          >
            Call 1800 000 299 
          </a>
        </div>

        <div className="text-[14px] text-slate-600 text-center mt-8 opacity-80 uppercase tracking-widest font-bold font-sans">
          Australian team · Responds within 1 business day · No lock-in consultations
        </div>
      </div>
    </section>
  );
}

