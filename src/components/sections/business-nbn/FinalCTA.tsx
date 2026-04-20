'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

const trustItems = [
  'No lock-in beyond contract term',
  'Site qualification within 1 business day',
  'Australian team',
  '$0 fibre install on 36-month contracts',
];

export default function FinalCTA() {
  const { setInquiryMessage } = useInquiry();

  const handleCheck = () => {
    setInquiryMessage("I'd like to check my address availability and indicative pricing for Small Business nbn.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="w-full bg-[#0F0F1A] py-20"
      
    >
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[700px] text-center">

        <div
          className="rounded-full text-[11px] font-semibold uppercase tracking-wider px-4 py-1.5 mx-auto mb-6 w-fit"
          style={{ background: 'rgba(93,0,214,0.2)', color: '#A855F7' }}
        >
          nbn Accredited Adviser
        </div>

        <h2 className="c9-section-heading !text-white">
          Ready to get your business connected?
        </h2>

        <p className="text-[18px] text-[#9CA3AF] mt-4 leading-[1.7]">
          Tell us your address and we'll handle the rest — from site qualification to seamless setup.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <button
            onClick={handleCheck}
            className="inline-flex items-center justify-center h-[56px] px-10 rounded-full text-[15px] font-semibold bg-[#5D00D6] hover:bg-[#4B00AD] text-white transition-colors duration-200"
          >
            Get My Business Connected →
          </button>
          <a
            href="tel:1800000299"
            className="inline-flex items-center justify-center h-[56px] px-10 rounded-full text-[15px] text-[#9CA3AF] border bg-transparent hover:border-white hover:text-white transition-all duration-200"
            style={{ borderColor: '#4B5563', fontFamily: '"Proxima Nova", sans-serif' }}
          >
            Call 1800 000 299
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle size={14} className="text-[#5D00D6] shrink-0" />
              <span className="text-[12px] text-[#6B7280]">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

