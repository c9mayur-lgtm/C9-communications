'use client';

import React from 'react';

export default function Credibility() {
  const stats = [
    { stat: "100%", sub: "Australian support" },
    { stat: "24/7", sub: "Network monitoring" },
    { stat: "<30s", sub: "Call answer time" },
    { stat: "1 day", sub: "Resolution target" },
  ];

  return (
    <section className="w-full bg-[#0A0A14] py-24 px-6 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div className="text-center md:text-left flex flex-col items-center md:items-start text-white">
          <span className="font-['Proxima_Nova'] text-[11px] uppercase tracking-[0.1em] text-[#9D72FF] font-bold mb-4 block">
            THE C9 INFRASTRUCTURE PRACTICE
          </span>
          <h2 className="font-['Proxima_Nova'] text-[36px] md:text-[44px] lg:text-[48px] text-white font-bold mt-2 leading-[1.15] max-w-[800px] tracking-tight text-center md:text-left">
            Premium IT management with genuine technical depth.
          </h2>
          <p className="font-['Proxima_Nova'] text-[18px] text-[#A0A0B0] mt-6 max-w-[680px] leading-[1.6] text-center md:text-left font-medium">
            C9 designs, deploys, migrates, and manages complete IT infrastructure environments for Australian businesses. We apply deep expertise to improve system availability, performance, and security — tailored to your scale and complexity.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16">
          {stats.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#161622] rounded-2xl border border-white/5 p-8 text-center transition-all duration-300 hover:border-[#5D00D6]/50 hover:bg-[#1A1A2E] shadow-xl hover:-translate-y-1"
            >
              <h3 className="font-['Proxima_Nova'] text-[36px] md:text-[42px] text-white font-bold mb-2 tracking-tight">
                {item.stat}
              </h3>
              <p className="font-['Proxima_Nova'] text-[11px] lg:text-[12px] text-[#A0A0B0] uppercase tracking-widest font-bold">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
