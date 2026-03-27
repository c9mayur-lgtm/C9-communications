import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-white py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="container mx-auto max-w-[640px] text-center">
        <h2 className="text-[36px] md:text-[44px] font-bold text-[#1A1A2E] leading-[1.1] font-syne">
          Ready to hand IT over to a team that owns the outcome?
        </h2>
        
        <p className="text-[18px] text-[#6B7280] mt-6 leading-[1.7] font-dm-sans max-w-[640px] mx-auto">
          Tell us about your business and we'll put together a managed IT proposal within 2 business days. No obligation. No jargon. Just a clear picture of what's possible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-10">
          <Button className="bg-[#7B2FBE] hover:bg-[#6b28a8] text-white px-10 h-[52px] rounded-lg font-bold font-dm-sans transition-all text-[15px]">
            Get an IT Outsourcing Proposal <ArrowRight className="ml-2 w-4 h-4" />
          </Button>

          <Button variant="outline" className="border-[#e5e7eb] text-[#1A1A2E] hover:bg-slate-50 px-10 h-[52px] rounded-lg font-bold font-dm-sans transition-all text-[15px]" asChild>
            <a href="tel:1800000299">Call 1800 000 299</a>
          </Button>
        </div>

        <div className="text-[13px] text-[#6B7280] text-center mt-8 font-dm-sans opacity-80 uppercase tracking-widest font-bold">
          Australian team · Responds within 1 business day · No lock-in consultations
        </div>
      </div>
    </section>
  );
}
