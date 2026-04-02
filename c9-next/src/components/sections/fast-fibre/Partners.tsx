'use client';

import React from 'react';
import { Cloud, Server, Database, Info } from 'lucide-react';

const partners = [
  {
    icon: Cloud,
    alt: "Amazon Web Services",
    name: "Amazon Web Services",
    description: "Direct private connectivity to AWS infrastructure — bypassing the public internet for your cloud workloads."
  },
  {
    icon: Database,
    alt: "Microsoft Azure",
    name: "Microsoft Azure",
    description: "Private connection to Azure services for businesses running Microsoft cloud infrastructure and Microsoft 365 environments."
  },
  {
    icon: Server,
    alt: "C9 Virtual Data Centre",
    name: "C9 Virtual Data Centre",
    description: "Connect directly to your C9-hosted Virtual Data Centre for maximum performance and security on your business-critical applications."
  }
];

export default function Partners() {
  return (
    <section 
      className="w-full bg-[#0c1024] py-16 md:py-24 overflow-hidden relative" 
      style={{ fontFamily: '"Proxima Nova", sans-serif' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(93,0,182,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px] relative z-10">
        <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-20">
          <span className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-[0.3em] block mb-6">CLOUD CONNECTIVITY</span>
          <h2 className="text-[36px] md:text-[48px] font-bold text-white leading-tight mb-8">
            More than just internet <br /> with unlimited data.
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#94A3B8] leading-relaxed">
            Connect your network privately to one of many cloud services. Privately connect your fibre to AWS, Azure, or your C9 Virtual Data Centre — keeping your critical data traffic off the public internet entirely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/10 hover:border-[#5D00D6]/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/10 flex items-center justify-center mb-10 border border-[#5D00D6]/20 transition-transform group-hover:scale-110">
                <partner.icon size={28} className="text-[#5D00D6]" />
              </div>
              <h3 className="text-[20px] font-bold text-white mb-4 leading-tight">{partner.name}</h3>
              <p className="text-[16px] text-gray-400 leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
              <Info size={16} className="text-[#5D00D6]" />
              <p className="text-[13px] md:text-[14px] text-gray-300 font-medium">
                 Don't see a particular service? Ask us — there are many private connectivity options available.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}
