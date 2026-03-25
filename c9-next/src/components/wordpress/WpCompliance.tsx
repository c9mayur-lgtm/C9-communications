'use client';

import React from 'react';
import { ShieldCheck, Database } from 'lucide-react';

export const WpCompliance = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0A0D14] overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          
          {/* Left Column */}
          <div className="max-w-xl">
            <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.1] mb-6 text-[#9F7AEA] tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
              Compliant, accredited, and<br className="hidden md:block" />
              built for Australian business.
            </h2>
            <p className="text-[#E2E8F0] text-[16px] md:text-[18px] leading-relaxed mb-12 font-medium opacity-80">
              As an Australian telco provider, we meet every mandatory compliance obligation — and hold the accreditations your business needs to trust us with its communications.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#5D00D6] flex items-center justify-center mb-5 shrink-0 shadow-lg shadow-purple-900/20">
                  <ShieldCheck className="text-white" size={24} strokeWidth={2} />
                </div>
                <p className="text-[#CBD5E1] text-[15px] leading-relaxed font-medium pr-4">
                  TCP Code, Privacy Act, Spam Act, Financial Hardship Standard compliant.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#5D00D6] flex items-center justify-center mb-5 shrink-0 shadow-lg shadow-purple-900/20">
                  <Database className="text-white" size={24} strokeWidth={2} />
                </div>
                <p className="text-[#CBD5E1] text-[15px] leading-relaxed font-medium pr-4">
                  All customer data stored exclusively in Australian data centres.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (High-Fidelity Restored Structure) */}
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            {/* Top Row: 3 Squares */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {/* NBN Box */}
              <div className="bg-[#5D00D6] rounded-[24px] aspect-square flex items-center justify-center p-6 group hover:bg-[#5200BD] transition-all duration-500 shadow-xl border border-white/5">
                <img src="/images/compliance/NBN_Co-Logo.wine 1 (1).svg" alt="NBN" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* ISO Box (With Text as per Image) */}
              <div className="bg-[#5D00D6] rounded-[24px] aspect-square flex flex-col items-center justify-center p-4 group hover:bg-[#5200BD] transition-all duration-500 shadow-xl border border-white/5">
                <div className="relative w-16 h-16 md:w-20 md:h-20 mb-2">
                  <img src="/images/compliance/Vector (2).svg" alt="ISO Globe" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="text-white font-black text-[14px] md:text-[16px] tracking-tight">ISO 27001</span>
              </div>

              {/* APNIC Box */}
              <div className="bg-[#5D00D6] rounded-[24px] aspect-square flex items-center justify-center p-6 group hover:bg-[#5200BD] transition-all duration-500 shadow-xl border border-white/5">
                <img src="/images/compliance/APNIC_logo 1 (1).svg" alt="APNIC" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>

            {/* Middle Row: 2 Wide Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {/* Telco Together Foundation */}
              <div className="bg-[#5D00D6] rounded-[24px] h-[160px] md:h-[180px] flex items-center justify-center p-8 group hover:bg-[#5200BD] transition-all duration-500 shadow-xl border border-white/5 overflow-hidden">
                <img src="/images/compliance/TTF.png" alt="TTF" className="h-full w-auto max-h-[135px] object-contain scale-[1.3] group-hover:scale-[1.4] transition-transform duration-500" />
              </div>

              {/* TIO */}
              <div className="bg-[#5D00D6] rounded-[24px] h-[160px] md:h-[180px] flex items-center justify-center p-10 group hover:bg-[#5200BD] transition-all duration-500 shadow-xl border border-white/5 overflow-hidden">
                <img src="/images/compliance/Page 3.svg" alt="TIO" className="w-full h-full object-contain scale-[1.3] group-hover:scale-[1.4] transition-transform duration-500" />
              </div>
            </div>

            {/* Bottom Row: 1 Full-Width Box */}
            <div className="bg-[#5D00D6] rounded-[24px] w-full min-h-[140px] flex items-center justify-center px-12 md:px-24 group hover:bg-[#5200BD] transition-all duration-500 shadow-xl border border-white/5">
              <img src="/images/compliance/Group (1).svg" alt="ACMA" className="w-full max-w-[500px] h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
