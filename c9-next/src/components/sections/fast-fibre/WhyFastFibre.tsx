'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Settings, Cloud, Globe, Shield, Server } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

const cards = [
  {
    icon: Zap,
    title: 'Reserved & Guaranteed Bandwidth',
    desc: 'High bandwidth is reserved and guaranteed — not shared with residential users or subject to congestion. Your fibre connection performs at speed during business hours when it matters most.',
  },
  {
    icon: Settings,
    title: 'Unlimited Data — No Quotas, No Throttling',
    desc: 'Enterprise-grade internet access with unlimited usage on all Fibre400 and Fibre1000 plans. Never worry about hitting a data cap mid-month when your business depends on cloud applications and video.',
  },
  {
    icon: Cloud,
    title: 'Bespoke Plans for Complex Needs',
    desc: 'From research to recommendation, installation and ongoing monitoring — C9 partners with you at every step to find the most scalable, flexible, and reliable solution for your specific business environment.',
  },
  {
    icon: Globe,
    title: "Australia's Most Trusted Carrier Networks",
    desc: "C9 accesses fibre infrastructure through Australia's leading carriers — AAPT, Vocus, Optus, Telstra, and Aussie Broadband. You get best-in-market fibre coverage backed by multiple network partners.",
  },
  {
    icon: Shield,
    title: 'Managed Router & Firewall',
    desc: 'Next-generation firewall and security solutions included without compromise. C9 supplies, configures, and manages your router so your connection is protected from day one. SD-WAN solutions available on request.',
  },
  {
    icon: Server,
    title: 'Private Cloud & VDC Connectivity',
    desc: 'Privately connect your fibre to your C9 Virtual Data Centre or to cloud services including AWS and Microsoft Azure — keeping your critical data traffic off the public internet.',
  }
];

export default function WhyFastFibre() {
  const { setInquiryMessage } = useInquiry();
  return (
    <section className="relative py-14 md:py-16 overflow-hidden" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
      {/* Full-width purple-to-white gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#7D38E2] to-white z-0" />

      <div className="container mx-auto px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col mb-16 gap-4">
          <span className="text-white text-[13px] font-bold uppercase tracking-[0.25em] mb-4 block">WHY FAST FIBRE</span>
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-white leading-[1.05]">
            When your business demands<br />connectivity — your way.
          </h2>
          <p className="text-white/85 text-[18px] md:text-[20px] max-w-[720px] leading-relaxed mt-2 font-medium">
            Fibre-rich networks purpose-built for businesses with complex needs. Reserved and guaranteed bandwidth so your internet is always on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-none shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all group flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100">
              {/* Icon */}
              <div className="mb-6">
                <item.icon size={40} className="text-[#5D00D6]" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-bold mb-3 text-[#0c1024] tracking-tight leading-tight">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-[16px] md:text-[17px] mb-6 leading-relaxed flex-grow font-normal group-hover:text-[#1A1A2E] transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              setInquiryMessage("I'm interested in learning more about C9 Fast Fibre solutions for my business.");
              const el = document.getElementById('consultation-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 shadow-2xl hover:gap-4 transition-all group bg-[#5D00D6] text-white rounded-full h-14 px-10 text-base font-bold"
          >
            Get Started Now <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
