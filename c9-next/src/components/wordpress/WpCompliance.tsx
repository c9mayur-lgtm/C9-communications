'use client';

import React from 'react';
import { ShieldCheck, Database } from 'lucide-react';

export const WpCompliance = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0A0D14] overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column */}
          <div className="max-w-xl">
            <h2 className="text-[32px] md:text-[40px] lg:text-[42px] font-bold leading-tight mb-6 text-[#9F7AEA] tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
              Compliant, accredited, and<br className="hidden md:block" />
              built for Australian business.
            </h2>
            <p className="text-[#E2E8F0] text-[16px] md:text-[18px] leading-relaxed mb-12 font-medium">
              As an Australian telco provider, we meet every mandatory compliance obligation — and hold the accreditations your business needs to trust us with its communications.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#5D00D6] flex items-center justify-center mb-5 shrink-0">
                  <ShieldCheck className="text-white" size={24} strokeWidth={2} />
                </div>
                <p className="text-[#CBD5E1] text-[15px] leading-relaxed font-medium pr-4">
                  TCP Code, Privacy Act, Spam Act, Financial Hardship Standard compliant.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#5D00D6] flex items-center justify-center mb-5 shrink-0">
                  <Database className="text-white" size={24} strokeWidth={2} />
                </div>
                <p className="text-[#CBD5E1] text-[15px] leading-relaxed font-medium pr-4">
                  All customer data stored exclusively in Australian data centres.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Compliance Grid) */}
          <div className="flex flex-col gap-4 w-full">
            
            {/* Top row: 3 square blocks */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

              {/* NBN Box */}
              <div className="bg-[#5D00D6] rounded-2xl aspect-square flex items-center justify-center p-8 group hover:bg-[#5200BD] transition-colors shadow-xl overflow-hidden">
                <img
                  src="/images/compliance/nbn.png"
                  alt="NBN"
                  className="w-[75%] h-[75%] object-contain"
                />
              </div>

              {/* ISO Box */}
              <div className="bg-[#5D00D6] rounded-2xl aspect-square flex items-center justify-center p-7 group hover:bg-[#5200BD] transition-colors shadow-xl overflow-hidden">
                <img
                  src="/images/compliance/ISO.png"
                  alt="ISO 27001"
                  className="w-[80%] h-[80%] object-contain"
                />
              </div>

              {/* APNIC Box */}
              <div className="bg-[#5D00D6] rounded-2xl aspect-square flex items-center justify-center p-6 group hover:bg-[#5200BD] transition-colors shadow-xl overflow-hidden">
                <img
                  src="/images/compliance/APNIC.png"
                  alt="APNIC"
                  className="w-[85%] h-[85%] object-contain"
                />
              </div>
            </div>

            {/* Middle row: 2 wider blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Telco Together Foundation Box */}
              <div className="bg-[#5D00D6] rounded-2xl h-[160px] flex items-center justify-center px-10 py-6 group hover:bg-[#5200BD] transition-colors shadow-xl overflow-hidden">
                <img
                  src="/images/compliance/TTF.png"
                  alt="Telco Together Foundation"
                  className="h-[110px] w-auto object-contain"
                />
              </div>

              {/* TIO Box */}
              <div className="bg-[#5D00D6] rounded-2xl h-[160px] flex items-center justify-center px-10 py-6 group hover:bg-[#5200BD] transition-colors shadow-xl overflow-hidden">
                <img
                  src="/images/compliance/TIO.png"
                  alt="Telecommunications Industry Ombudsman"
                  className="h-[100px] w-auto object-contain"
                />
              </div>
            </div>

            {/* Bottom Row: ACMA full-width */}
            <div className="bg-[#5D00D6] rounded-2xl w-full py-5 px-12 flex items-center justify-center hover:bg-[#5200BD] transition-colors shadow-xl overflow-hidden">
              <img
                src="/images/compliance/ACMA.png"
                alt="ACMA - Australian Communications and Media Authority"
                className="h-[52px] w-auto object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
