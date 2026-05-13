'use client';

import React from 'react';
import { Repeat, HardHat, Wifi, Network, Layers, LayoutGrid } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

const inclusions = [
  { title: "Keep existing numbers", desc: "Bring your existing phone, fax, 1800, 1300, and 13 numbers with you — no number changes, no disruption to your customers. Too easy.", icon: Repeat },
  { title: "Business-grade connectivity", desc: "C9's expert pre-sales engineers are dedicated and equipped to connect your business to scale for maximum uptime and productivity — configuration to installation fully managed.", icon: HardHat },
  { title: "nbn ready", desc: "Move with the times and put your calls into the cloud with safety, security, and reliability guaranteed. SIP Trunking works across nbn, fibre, and enterprise ethernet connections.", icon: Wifi },
  { title: "Fully owned C9 network", desc: "Unlike other telcos, C9 owns its network — giving full control over service and reliability and passing the benefits directly to you. No middle layer, no dependency on third-party infrastructure.", icon: Network },
  { title: "Flexible call plans", desc: "From basic timed call plans to fully unlimited — there is a SIP Trunk plan to suit your business and your budget. Scale lines up or down as your business needs change.", icon: Layers },
  { title: "Inbound services integration", desc: "Combine SIP Trunking with C9's inbound 1300 and 1800 services for a complete inbound and outbound voice solution on a single platform.", icon: LayoutGrid }
];

export default function SipTrunkingFeatures() {
  const { setInquiryMessage } = useInquiry();

  const handleGetStarted = () => {
    setInquiryMessage("I'm interested in the SIP Trunking solutions from C9.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-14 md:py-16 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0c1024] via-[#1A1A2E] to-white z-0" />

      <div className="container mx-auto px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col mb-16 gap-4 text-left">
          <span className="c9-eyebrow !text-white opacity-80 mb-2">WHAT'S INCLUDED</span>
          <h2 className="c9-section-heading !text-white max-w-3xl">
            Everything your business needs<br className="hidden md:block" /> from a modern SIP Trunk provider.
          </h2>
          <p className="c9-body !text-white/80 max-w-[720px] mt-2">
            Every C9 SIP Trunk connection includes infrastructure, support, and management that traditional telcos charge extra for — or simply don't offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100">
                <div className="mb-6">
                  <Icon size={40} className="text-[#5D00D6]" strokeWidth={1.5} />
                </div>
                <h3 className="c9-card-title !text-[20px] mb-3">{item.title}</h3>
                <p className="c9-body !text-[14px] !text-gray-600 mb-6 flex-grow group-hover:text-[#0c1024] transition-colors">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <button 
            onClick={handleGetStarted}
            className="inline-flex items-center justify-center gap-2 shadow-2xl hover:gap-4 transition-all bg-[#5D00D6] text-white rounded-full shadow-lg shadow-[#5D00D6]/20 h-14 px-8 text-[15px] font-bold"
          >
            Get Started Now 
          </button>
        </div>
      </div>
    </section>
  );
}
