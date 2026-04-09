import React from "react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-6 max-w-[640px] text-center">
        <h2 className="c9-section-heading" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
          Let's talk about what your staff actually need from IT support.
        </h2>
        
        <p className="text-[18px] text-[#6B7280] mt-4 leading-[1.7]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
          Tell us your team size, your current frustrations, and what good looks like — we'll put together a helpdesk proposal within 2 business days.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Button className="bg-[#7B2FBE] hover:bg-[#64249c] h-[52px] px-8 text-white rounded-md">
            Get a Helpdesk Proposal →
          </Button>
          
          <a href="tel:1800000299" className="inline-block">
            <Button variant="outline" className="h-[52px] px-8 text-[#1A1A2E] border-gray-200 hover:bg-gray-50 rounded-md w-full">
              Call 1800 000 299
            </Button>
          </a>
        </div>

        <p className="text-[13px] text-[#6B7280] text-center mt-5" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
          Australian team · Responds within 1 business day · No lock-in consultations
        </p>
      </div>
    </section>
  );
}
