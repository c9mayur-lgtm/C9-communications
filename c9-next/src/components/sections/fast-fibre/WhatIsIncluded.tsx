'use client';

import React from 'react';
import { Router, Network, Globe, Cloud, Shield, Headphones } from 'lucide-react';

const items = [
  {
    icon: Router,
    title: "Managed Router",
    body: "C9 supplies and manages a business-grade router with next-generation firewall and security built in. Your connection is protected from day one without additional hardware costs. SD-WAN upgrade available on request."
  },
  {
    icon: Network,
    title: "IP VPN / E-LAN",
    body: "A comprehensive private networking solution for multi-site customers — featuring six classes of service and extensive management options. Privately connect your locations without using the public internet."
  },
  {
    icon: Globe,
    title: "Unlimited Internet",
    body: "Enterprise-grade internet access with unlimited usage on every plan. No data caps, no throttling, no surprise overage charges at the end of the month."
  },
  {
    icon: Cloud,
    title: "Virtual Data Centre Connectivity",
    body: "Privately connect to your C9 Virtual Data Centre or directly to cloud services including Amazon Web Services and Microsoft Azure — keeping your critical workloads on a dedicated private connection."
  },
  {
    icon: Shield,
    title: "Australian Carrier Network",
    body: "Your connection runs on infrastructure from AAPT, Vocus, Optus, Telstra, and Aussie Broadband — Australia's most trusted and extensive fibre carrier networks, giving you coverage and redundancy options across the country."
  },
  {
    icon: Headphones,
    title: "Dedicated Account Manager",
    body: "From installation through to ongoing management — a dedicated C9 account manager is your single point of contact. One person who knows your connection, your environment, and your business."
  }
];

export default function WhatIsIncluded() {
  return (
    <section 
      className="w-full bg-white py-16 md:py-24" 
      style={{ fontFamily: '"Proxima Nova", sans-serif' }}
    >
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-20">
          <span className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-[0.3em] block mb-6">WHAT'S INCLUDED</span>
          <h2 className="text-[36px] md:text-[48px] font-bold text-[#1A1A2E] leading-tight mb-8">
            More than just fast internet.
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#6B7280] leading-relaxed">
            Every C9 fast fibre plan includes infrastructure, management, and support that most ISPs charge extra for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#5D00D6] flex items-center justify-center p-3.5 shadow-[0_10px_20px_rgba(93,0,182,0.15)]">
                <item.icon size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#1A1A2E] mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[16px] text-[#6B7280] leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
