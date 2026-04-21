'use client';

import React from 'react';
import Image from 'next/image';

const VendorCard = ({ logo, title }: { logo: string, title: string }) => (
  <div className="bg-white rounded-[32px] border border-[rgba(93,0,214,0.08)] p-8 text-center flex flex-col items-center justify-center transition-all duration-700 hover:border-[#5D00D6] hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-2 group min-h-[180px]">
    <div className="relative w-full h-[100px] flex items-center justify-center group-hover:scale-110 duration-1000 transition-transform ease-out">
      <div className="relative w-full h-full max-w-[250px]">
        <Image 
          src={logo} 
          alt={title} 
          fill
          className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
        />
      </div>
    </div>
  </div>
);

export default function VendorPartners() {
  const vendors = [
    { logo: "/partners/ns/cisco.png", title: "Cisco" },
    { logo: "/partners/ns/fortinet.png", title: "Fortinet" },
    { logo: "/partners/ns/vocus.png", title: "Vocus" },
    { logo: "/partners/ns/juniper.png", title: "Juniper Networks" }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="font-['Proxima_Nova'] text-[11px] font-black uppercase tracking-[0.3em] text-[#5D00D6] mb-6 block">
            TECHNOLOGY PARTNERS
          </span>
          <h2 className="font-['Proxima_Nova'] text-[42px] md:text-[56px] text-[#1A1A2E] font-bold mt-4 leading-[1.0] tracking-tight">
            Stronger networks with <span className="text-[#5D00D6]">world-leading</span> engineering partners.
          </h2>
          <p className="font-['Proxima_Nova'] text-[20px] text-[#6B7280] mt-10 font-medium leading-[1.7] max-w-2xl mx-auto">
            C9 architects solutions using best-in-class hardware and software from global leaders to ensure your infrastructure remains resilient and performant.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-14">
          {vendors.map((vendor, i) => (
            <VendorCard key={i} {...vendor} />
          ))}
        </div>

      </div>
    </section>
  );
}
