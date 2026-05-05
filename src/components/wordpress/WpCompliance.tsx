'use client';

import React from 'react';
import { ShieldCheck, Database, Lock, Headset } from 'lucide-react';

const complianceLogos = [
  {
    src: "/images/compliance/NBN_Co-Logo.wine 1 (1).svg",
    alt: "nbn",
    imgClass: "w-[120px] md:w-[140px] h-auto",
    colClass: "md:col-span-1"
  },
  {
    src: "/images/compliance/Vector (2).svg",
    alt: "ISO 27001",
    imgClass: "w-[65px] md:w-[80px] h-auto",
    colClass: "md:col-span-1"
  },
  {
    src: "/images/compliance/APNIC_logo 1 (1).svg",
    alt: "APNIC",
    imgClass: "w-[110px] md:w-[130px] h-auto",
    colClass: "md:col-span-1"
  },
  {
    src: "/images/compliance/TTF.png",
    alt: "Telco Together Foundation",
    imgClass: "w-[100px] md:w-[120px] h-auto",
    colClass: "md:col-span-1"
  },
  {
    src: "/images/compliance/Page 3.svg",
    alt: "TIO",
    imgClass: "w-[180px] md:w-[220px] h-auto",
    colClass: "md:col-span-2 border-t"
  },
  {
    src: "/images/compliance/Group (1).svg",
    alt: "ACMA",
    imgClass: "w-[190px] md:w-[240px] h-auto",
    colClass: "md:col-span-2 border-t"
  }
];

export const WpCompliance = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">

        {/* Centered heading block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="c9-eyebrow mb-5 block">Trust &amp; Compliance</span>
          <h2 className="c9-section-heading mb-6 !text-[#0c1024]">
            Compliant, accredited, and built for Australian business.
          </h2>
          <p className="c9-body !text-gray-500 max-w-xl mx-auto">
            As an Australian telco provider, we meet every mandatory compliance obligation — and hold the accreditations your business needs to trust us with its communications.
          </p>
        </div>

        {/* 4-column Logo grid with 2 larger items at the bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">
          {complianceLogos.map((logo, index) => (
            <div
              key={index}
              className={`
                flex items-center justify-center px-4 py-10 md:py-12
                transition-all duration-300  hover:bg-[#f9f9fb] cursor-default
                ${logo.colClass}
                ${(index === 0 || index === 2 || index === 4) ? 'border-r border-gray-200' : ''} 
                ${(index === 1 || index === 3) ? 'md:border-r border-gray-200' : ''}
                ${index < 4 ? 'border-b md:border-b-0 border-gray-200' : ''}
              `}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`object-contain transition-all duration-500 grayscale opacity-100 brightness-[0.4] contrast-[1.2] ${logo.imgClass}`}
              />
            </div>
          ))}
        </div>

        {/* 4-point compliance and trust grid below strip */}
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 mt-16 max-w-4xl mx-auto">
          {/* Item 1 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="text-[#5D00D6]" size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[#0c1024] text-[15px] font-semibold mb-1">Mandatory Standards</p>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                TCP Code, Privacy Act, Spam Act &amp; Financial Hardship Standard compliant.
              </p>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center shrink-0 mt-0.5">
              <Database className="text-[#5D00D6]" size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[#0c1024] text-[15px] font-semibold mb-1">100% Data Sovereignty</p>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                All customer infrastructure, backups, and data are stored exclusively in Australian data centres.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center shrink-0 mt-0.5">
              <Lock className="text-[#5D00D6]" size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[#0c1024] text-[15px] font-semibold mb-1">Essential Eight Aligned</p>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                We design environments that align with ASD Essential Eight maturity models to mitigate targeted cyber intrusions.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center shrink-0 mt-0.5">
              <Headset className="text-[#5D00D6]" size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[#0c1024] text-[15px] font-semibold mb-1">100% On-Shore Support</p>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Zero off-shoring. Our Level 2/3 engineering teams and Network Operations Centre are proudly Australian-based.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
