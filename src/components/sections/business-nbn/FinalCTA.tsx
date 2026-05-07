'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

const trustItems = [
  'No lock-in beyond contract term',
  'Site qualification within 1 business day',
  'AU-managed support team',
  'Fully managed setup',
];

export default function FinalCTA() {
  const { setInquiryMessage } = useInquiry();

  const handleCheck = () => {
    setInquiryMessage("I'm interested in getting my business connected to NBN.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="w-full bg-[#0F0F1A] py-20 border-t border-white/5"
      
    >
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[750px] text-center">

        <div
          className="rounded-full text-[11px] font-semibold uppercase tracking-wider px-4 py-1.5 mx-auto mb-6 w-fit"
          style={{ background: 'rgba(93,0,214,0.2)', color: '#A855F7' }}
        >
          FULLY MANAGED BUSINESS NBN
        </div>

        <h2 className="c9-section-heading !text-white">
          Get the right nbn setup for your business
        </h2>

        <p className="text-[18px] text-[#9CA3AF] mt-4 leading-[1.7]">
          We’ll help you choose the right plan and manage everything from setup to support.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          <button
            onClick={handleCheck}
            className="inline-flex items-center justify-center h-[60px] rounded-full bg-[#5D00D6] hover:bg-[#4B00AD] text-white transition-all shadow-xl shadow-purple-900/30 h-14 px-8 text-[15px] font-bold"
          >
            Get My Business Connected
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('consultation-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center h-[60px] rounded-full text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all h-14 px-8 text-[15px] font-bold"
            style={{ fontFamily: '"Proxima Nova", sans-serif' }}
          >
            Speak to an Expert
          </button>
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

