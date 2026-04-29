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
            <h2 className="c9-section-heading !text-white mb-8">
              Compliant, accredited, and<br className="hidden md:block" />
              built for Australian business.
            </h2>
            <p className="c9-body !text-white/85 !text-[18px] mb-12">
              As an Australian telco provider, we meet every mandatory compliance obligation — and hold the accreditations your business needs to trust us with its communications.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#5D00D6] flex items-center justify-center mb-5 shrink-0 shadow-lg shadow-purple-900/20">
                  <ShieldCheck className="text-white" size={24} strokeWidth={2} />
                </div>
                <p className="text-[#CBD5E1] text-[14px] leading-relaxed font-medium pr-4">
                  TCP Code, Privacy Act, Spam Act, Financial Hardship Standard compliant.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#5D00D6] flex items-center justify-center mb-5 shrink-0 shadow-lg shadow-purple-900/20">
                  <Database className="text-white" size={24} strokeWidth={2} />
                </div>
                <p className="text-[#CBD5E1] text-[14px] leading-relaxed font-medium pr-4">
                  All customer data stored exclusively in Australian data centres.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Mosaic Grid) */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 w-full">
            {/* nbn Box */}
            <div className="bg-[#5D00D6] rounded-[24px] aspect-square flex items-center justify-center p-4 md:p-6 group hover:bg-[#5200BD] transition-all duration-500 shadow-xl border border-white/5">
              <img src="/images/compliance/NBN_Co-Logo.wine 1 (1).svg" alt="nbn" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
            </div>

            {/* ISO Box */}
            <div className="bg-[#5D00D6] rounded-[24px] aspect-square flex flex-col items-center justify-center p-3 md:p-4 group hover:bg-[#5200BD] transition-all duration-500 shadow-xl border border-white/5">
              <div className="relative w-12 h-12 md:w-20 md:h-20">
                <img src="/images/compliance/Vector (2).svg" alt="ISO Globe" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>

            {/* APNIC Box */}
            <div className="bg-[#5D00D6] rounded-[24px] aspect-square flex items-center justify-center p-4 md:p-6 group hover:bg-[#5200BD] transition-all duration-500 shadow-xl border border-white/5">
              <img src="/images/compliance/APNIC_logo 1 (1).svg" alt="APNIC" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
            </div>

            {/* Telco Together Foundation */}
            <div className="col-span-3 bg-[#5D00D6] rounded-[24px] h-[120px] md:h-[180px] flex items-center justify-center p-8 group hover:bg-[#5200BD] transition-all duration-500 shadow-xl border border-white/5 overflow-hidden">
              <img src="/images/compliance/TTF.png" alt="TTF" className="h-full w-auto max-h-[100px] md:max-h-[135px] object-contain scale-[1.3] group-hover:scale-[1.4] transition-transform duration-500" />
            </div>

            {/* TIO */}
            <div className="col-span-3 bg-[#5D00D6] rounded-[24px] h-[120px] md:h-[180px] flex items-center justify-center p-10 group hover:bg-[#5200BD] transition-all duration-500 shadow-xl border border-white/5 overflow-hidden">
              <img src="/images/compliance/Page 3.svg" alt="TIO" className="w-full h-full object-contain scale-[1.3] group-hover:scale-[1.4] transition-transform duration-500" />
            </div>

            {/* ACMA (Bottom Box) */}
            <div className="col-span-3 bg-[#5D00D6] rounded-[24px] w-full min-h-[100px] md:min-h-[140px] flex items-center justify-center px-8 md:px-24 group hover:bg-[#5200BD] transition-all duration-500 shadow-xl border border-white/5">
              <img src="/images/compliance/Group (1).svg" alt="ACMA" className="w-full max-w-[300px] md:max-w-[500px] h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
