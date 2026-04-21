'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const OPTIONS = [
  {
    tag: 'GREENFIELD',
    title: "Open New Sites Without IT Delays",
    desc: "Launch fully operational locations with IT, connectivity, and devices ready from day one—without coordinating multiple vendors. Outcome: Your business opens on time. Everything works.",
    img: "/images/greenfield_hero.png",
    href: "/greenfield",
    btnText: "Plan My Launch"
  },
  {
    tag: 'SMB / BROWNFIELD',
    title: "Simplify and Take Control of Existing Systems",
    desc: "Replace fragmented vendors with one accountable partner who stabilises, secures, and manages your entire environment. Outcome: Less downtime. Less complexity. Full control.",
    img: "/images/hero_business.png",
    href: "/business2",
    btnText: "Get Full Control"
  },
  {
    tag: 'ENTERPRISE',
    title: "Operate Complex Environments with Confidence",
    desc: "Manage multi-site infrastructure with SLA-backed support, integrated systems, and enterprise-grade security. Outcome: Scalable, secure, and predictable operations.",
    img: "/images/hero_enterprise.png",
    href: "/enterprise",
    btnText: "Scale My Operations"
  }
];

export const WpITDepartmentOptions = () => {
  return (
    <section className="py-12 md:py-16 bg-[#FCFBFE] overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {OPTIONS.map((opt, idx) => (
            <Link
              key={idx}
              href={opt.href}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-[12/10] rounded-none overflow-hidden mb-10 shadow-2xl shadow-purple-900/10 bg-slate-100">
                <img
                  src={opt.img}
                  alt={opt.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay group-hover:bg-[#5D00D6]/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/60 via-transparent to-transparent" />
              </div>

              <div className="px-2">
                <h3 className="text-[24px] font-bold text-slate-900 mb-4 group-hover:text-[#5D00D6] transition-colors leading-tight">
                  {opt.title}
                </h3>
                <div className="h-[1px] w-full bg-gray-100 mb-6" />
                <p className="c9-body mb-8">
                  {opt.desc}
                </p>
                <div className="flex items-center gap-2 text-[#5D00D6] font-bold text-[13px] leading-none uppercase tracking-[0.2em] whitespace-nowrap">
                  {opt.btnText}
                  <ArrowUpRight size={16} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
