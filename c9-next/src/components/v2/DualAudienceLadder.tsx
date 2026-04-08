'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export const DualAudienceLadder = () => {
  return (
    <section className="py-20 md:py-32 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-stretch">
          
          {/* Left Column — SMB lane */}
          <div className="flex flex-col pr-0 md:pr-16 lg:pr-24">
            <span className="bg-[#F4F0FA] text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full w-max mb-8">
              FOR GROWING BUSINESSES
            </span>
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#0c1024] leading-[1.1] tracking-tight mb-6" >
              IT that works like it should — without the IT team.
            </h2>
            <p className="c9-body mb-10">
              You didn't start a business to manage passwords, fix printers, or troubleshoot internet dropouts. We take complete ownership of your technology—from robust cloud phone systems to secure networks—so you can get back to what you're actually good at.
            </p>
            <div className="mt-auto">
              <div className="rounded-[16px] overflow-hidden aspect-[4/3] mb-8 shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200" 
                  alt="Small business owner at desk" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <a href="#smb-guide" className="inline-flex items-center gap-2 text-[#5D00D6] font-bold text-[14px] hover:gap-3 transition-all duration-300 bg-[#F4F0FA] px-5 py-3 rounded-full hover:bg-[#5D00D6]/10">
                Download the Managed IT Blueprint <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Column — Enterprise lane */}
          <div className="flex flex-col pl-0 md:pl-16 lg:pl-24 relative">
            {/* Divider between columns: 1px vertical line #E5E7EB on desktop only */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-[#E5E7EB]" />
            
            <span className="bg-[#1D1D1D] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full w-max mb-8">
              FOR ENTERPRISE & MULTI-SITE
            </span>
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#0c1024] leading-[1.1] tracking-tight mb-6" >
              One managed partner. Every site. Every system.
            </h2>
            <p className="c9-body mb-10">
              Multi-site SD-WAN networks, Microsoft 365 at scale, and comprehensive threat monitoring. C9 operates as your embedded IT and Telco engineering team across every location, delivering sophisticated, fully managed architecture with SLAs that mean something.
            </p>
            <div className="mt-auto">
              <div className="rounded-[16px] overflow-hidden aspect-[4/3] mb-8 shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern office enterprise environment" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <a href="#enterprise-guide" className="inline-flex items-center gap-2 text-[#1D1D1D] font-bold text-[14px] hover:gap-3 transition-all duration-300 bg-gray-100 px-5 py-3 rounded-full hover:bg-gray-200">
                Read the Enterprise Architecture Guide <ArrowRight size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

