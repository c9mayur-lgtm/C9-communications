'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useInquiry } from '@/components/context/InquiryContext';

export default function Hero() {
  const { setInquiryMessage } = useInquiry();

  const handleAssessmentRequest = () => {
    setInquiryMessage("I'm interested in a security assessment to understand our current posture and identify any gaps.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center bg-white overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-28">
      <div className="container mx-auto px-6 md:px-8 relative z-10 w-full" style={{ maxWidth: '1240px' }}>
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">
          <div className="flex flex-col items-start max-w-[640px]">
            <h1 className="c9-hero-title mb-6">
              Cybersecurity isn't a product you buy once. It's an <span className="text-[#5D00D6]">environment you maintain.</span>
            </h1>
            
            <p className="c9-body mb-8 max-w-[560px]">
              C9 manages your security baseline as part of every Managed IT engagement — endpoint protection, patch management, access controls, and backup. For organisations requiring continuous monitoring and Essential 8 compliance, C9 Defense extends the coverage.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button 
                onClick={handleAssessmentRequest}
                className="flex-1 sm:flex-none bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-8 h-14 rounded-full font-bold transition-all text-[15px] shadow-lg shadow-purple-900/20"
              >
                Get a Security Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Link href="/c9-defense" className="flex-1 justify-center sm:flex-none flex items-center text-[#1A1A2E] border border-[#5D00D6]/20 hover:bg-slate-50 px-8 h-14 rounded-full font-bold transition-all text-[15px]">
                Explore C9 Defense <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="bg-slate-50 border border-slate-100 rounded-none p-6 md:p-8 flex flex-col gap-2 shadow-xl shadow-purple-900/5">
              <div className="bg-white rounded-none p-8 flex flex-col items-center text-center justify-center border border-[#5D00D6]/10 shadow-sm transition-all hover:-translate-y-1">
                <span className="c9-eyebrow !text-slate-400 !text-[12px] mb-3">Most targeted AU sector</span>
                <span className="text-[64px] md:text-[84px] text-[#5D00D6] font-bold leading-none mb-3 tracking-tighter">#1</span>
                <span className="c9-card-title !text-[18px] md:!text-[20px]">Healthcare</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-none p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-lg shadow-purple-900/5 border border-slate-100 transition-all hover:-translate-y-1">
                <span className="c9-eyebrow !text-slate-400 !text-[11px] mb-2 h-8 flex items-center">Attacks via email</span>
                <span className="text-[44px] md:text-[56px] text-[#0c1024] font-bold leading-none mb-2 tracking-tight">94%</span>
                <span className="c9-eyebrow !text-[#5D00D6] !text-[11px]">ACSC Report</span>
              </div>

              <div className="bg-white rounded-none p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-lg shadow-purple-900/5 border border-slate-100 transition-all hover:-translate-y-1">
                <span className="c9-eyebrow !text-slate-400 !text-[11px] mb-2 h-8 flex items-center">Avg AU breach cost</span>
                <span className="text-[44px] md:text-[56px] text-[#0c1024] font-bold leading-none mb-2 tracking-tight">$3.4M</span>
                <span className="c9-eyebrow !text-[#5D00D6] !text-[11px]">IBM Cost Report</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
