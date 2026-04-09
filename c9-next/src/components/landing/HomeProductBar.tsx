'use client';
import React from 'react';
import { ShieldCheck, Lock, Globe2, Phone, MonitorSmartphone } from 'lucide-react';

const PRODUCTS = [
  { label: 'Managed IT Support', icon: ShieldCheck },
  { label: 'Cyber Security', icon: Lock },
  { label: 'Fibre & SD-WAN', icon: Globe2 },
  { label: 'Cloud Voice & Mobiles', icon: Phone },
  { label: 'M365 & Hardware', icon: MonitorSmartphone },
];

export const HomeProductBar = () => {
  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-block bg-[#5D00D6] text-white px-4 py-1.5 rounded-full text-[13px] font-bold tracking-wide mb-6 shadow-md shadow-purple-900/20">
            Our products
          </div>
          <h2 className="c9-section-heading font-black uppercase" >
            We've got something to suit every need
          </h2>
        </div>

        {/* Outline Box for Products */}
        <div className="border border-gray-300/80 rounded-[20px] bg-white py-10 px-4 md:px-10 mt-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4 justify-items-center items-center">
            {PRODUCTS.map((prod, i) => {
              const Icon = prod.icon;
              return (
                <div key={i} className="flex flex-col items-center justify-center gap-4 group text-center cursor-pointer">
                  {/* Icon Wrapper mimicking the green outline style in the image, but with C9 Purple */}
                  <div className="text-[#5D00D6] transition-transform duration-300 group-hover:-translate-y-1.5 opacity-90">
                    <Icon size={46} strokeWidth={1.5} />
                  </div>
                  <span className="text-[#0c1024] font-semibold text-[16px] md:text-[17px] group-hover:text-[#5D00D6] transition-colors">
                    {prod.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

