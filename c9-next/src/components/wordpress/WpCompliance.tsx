'use client';

import React from 'react';
import { ShieldCheck, Database, Globe } from 'lucide-react';

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
            {/* Top row: 4 blocks */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              {/* NBN Box */}
              <div className="bg-[#5D00D6] rounded-2xl aspect-[3/4] sm:aspect-[3/4.5] flex flex-col items-center justify-center p-4 relative overflow-hidden group hover:bg-[#5200BD] transition-colors shadow-xl">
                <div className="flex items-center gap-1.5 text-white">
                  <span className="font-bold text-[28px] tracking-tight">nbn</span>
                  <span className="text-[10px] self-start mt-2">™</span>
                  <div className="w-8 h-8 rounded-full border-[2px] border-dotted border-white/60 ml-1 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border border-white/60 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Telco Together Box */}
              <div className="bg-[#5D00D6] rounded-2xl aspect-[3/4] sm:aspect-[3/4.5] flex flex-col items-center justify-center p-5 relative group hover:bg-[#5200BD] transition-colors shadow-xl">
                <div className="text-white flex flex-col items-start leading-none font-medium">
                  <div className="flex items-center text-[22px]">
                    Telc<span className="text-green-400">o</span>
                  </div>
                  <div className="text-[26px] tracking-tight italic" style={{ fontFamily: 'serif' }}>Together</div>
                  <div className="text-[9px] uppercase tracking-widest mt-1 opacity-80">Foundation</div>
                </div>
              </div>

              {/* ISO Box */}
              <div className="bg-[#5D00D6] rounded-2xl aspect-[3/4] sm:aspect-[3/4.5] flex flex-col items-center justify-center p-6 relative group hover:bg-[#5200BD] transition-colors shadow-xl text-white">
                <Globe size={48} strokeWidth={1} className="mb-4 opacity-90" />
                <span className="font-black text-[15px] tracking-widest mt-auto">ISO 27001</span>
              </div>

              {/* APNIC Box */}
              <div className="bg-[#5D00D6] rounded-2xl aspect-[3/4] sm:aspect-[3/4.5] flex flex-col items-center justify-center p-4 relative group hover:bg-[#5200BD] transition-colors shadow-xl">
                 <div className="text-white font-black text-[22px] tracking-wider flex items-center gap-1">
                   <span className="text-[16px] font-normal tracking-tight opacity-80">(::)</span> APNIC
                 </div>
              </div>

            </div>

            {/* Bottom Row: ACMA */}
            <div className="bg-[#5D00D6] rounded-[24px] w-full p-6 sm:p-8 flex items-center justify-center hover:bg-[#5200BD] transition-colors shadow-xl gap-6 flex-wrap sm:flex-nowrap">
               <div className="flex items-center gap-4 border-r-0 sm:border-r border-white/20 pr-0 sm:pr-8">
                 <div className="w-12 h-16 flex items-center justify-center opacity-80">
                   <img src="/images/compliance/aus-gov.png" alt="" className="h-full object-contain" onError={(e) => {
                     (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNOSAxMmwyIDIgNC00Ii8+PC9zdmc+';
                   }} />
                 </div>
                 <div className="flex text-white font-black text-[32px] tracking-tighter">
                   <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2 mt-1 hidden xs:block">
                     <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500"></div>
                     <div className="absolute bottom-0 left-0 w-4 h-4 rounded-full bg-yellow-400"></div>
                     <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-teal-400"></div>
                   </div>
                   acma
                 </div>
               </div>
               
               <div className="text-white font-bold leading-tight text-[15px] sm:text-[18px] max-w-[200px]">
                 Australian<br/>
                 Communications<br/>
                 and Media Authority
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
