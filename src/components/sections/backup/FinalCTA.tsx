'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInquiry } from '@/components/context/InquiryContext';

const F = '"Proxima Nova", sans-serif';

export default function FinalCTA() {
  const { setInquiryMessage } = useInquiry();

  const handleAssessmentRequest = () => {
    setInquiryMessage("I'd like to request a backup assessment for my business to review our current environment and test our recovery capabilities.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#0c1024] py-24" style={{ fontFamily: F }}>
      <div className="container mx-auto px-6 md:px-8 text-center w-full" style={{ maxWidth: '760px' }}>
        <h2 className="c9-section-heading !text-white mb-6" style={{ fontFamily: F }}>
          Find out if your backup would <span className="text-[#5D00D6]">actually save you.</span>
        </h2>
        <p className="text-[18px] text-[#9CA3AF] leading-[1.7] mb-10 font-normal" style={{ fontFamily: F }}>
          A C9 backup assessment reviews your current environment — what's being backed up, how often, where it's stored, and whether recovery has ever been tested. No obligation. Plain language report.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleAssessmentRequest}
            className="bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-8 h-14 rounded-full font-bold transition-all text-[14px] shadow-lg shadow-purple-900/30 flex items-center gap-2 border-none"
            style={{ fontFamily: F }}
          >
            Assess My Backup Environment 
          </Button>
          <a
            href="tel:1800000299"
            className="flex items-center gap-2 text-[#9CA3AF] hover:text-white font-bold text-[14px] transition-colors no-underline"
            style={{ fontFamily: F }}
          >
            <Phone size={16} /> Call 1800 000 299
          </a>
        </div>

        <p className="text-[14px] text-[#6B7280] mt-8 font-normal tracking-wide uppercase font-bold" style={{ fontFamily: F }}>
          Australian team · Responds within 1 business day · No lock-in consultations
        </p>
      </div>
    </section>
  );
}
