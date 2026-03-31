import React from 'react';
import { Button } from "@/components/ui/button";

const FONT_FAMILY = { fontFamily: "'Proxima Nova', sans-serif" };

export default function FinalCTA() {
  return (
    <section className="bg-white py-24" style={FONT_FAMILY}>
      <div className="container mx-auto px-6 md:px-8 max-w-[640px] w-full text-center">
        <h2 className="text-[34px] md:text-[46px] font-bold text-text-primary leading-[1.2] tracking-tight" style={FONT_FAMILY}>
          Cloud is the future.<br className="hidden md:block" /> C9 will take you there — and keep you there.
        </h2>
        
        <p className="text-[16px] text-text-secondary mt-6 leading-[1.7] font-normal" style={FONT_FAMILY}>
          Whether you're migrating for the first time, managing an existing cloud environment, or trying to reduce cloud costs — C9 starts with a conversation about your specific situation, not a product pitch.
        </p>

        <div className="flex flex-row flex-wrap gap-4 justify-center mt-10">
          <Button 
            className="bg-brand-purple hover:bg-[#4c00b0] text-white px-8 h-14 rounded-full font-bold text-[16px] transition-all shadow-xl hover:-translate-y-0.5"
            style={FONT_FAMILY}
          >
            Discuss My Cloud Environment →
          </Button>
          <a href="tel:1800000299">
            <Button 
              variant="outline" 
              className="border-[1.5px] border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8 h-14 rounded-full font-bold text-[16px] transition-all"
              style={FONT_FAMILY}
            >
              Call 1800 000 299
            </Button>
          </a>
        </div>

        <div className="mt-8">
          <p className="text-[13px] text-text-secondary font-medium uppercase tracking-tight" style={FONT_FAMILY}>
            Australian team · Responds within 1 business day · Data stays in Australia
          </p>
        </div>
      </div>
    </section>
  );
}
