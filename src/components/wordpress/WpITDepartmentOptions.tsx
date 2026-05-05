'use client';

import React from 'react';
import Link from 'next/link';
;
import { Button } from '@/components/ui/button';

const OPTIONS = [
  {
    tag: 'CO-MANAGED',
    title: "Internal IT Team",
    desc: "We integrate with your existing IT team and strengthen operational control across infrastructure, vendors, and uptime management.\n\n• Infrastructure Visibility\n• Escalation Support\n• System Accountability",
    img: "/images/hero_enterprise.png",
    href: "/managed-it",
    btnText: "Partner With Us"
  },
  {
    tag: 'BROWNFIELD',
    title: "Multi-Vendor Reliance",
    desc: "We consolidate fragmented vendor environments into a single accountable model—removing coordination gaps and reducing operational risk.\n\n• Vendor Consolidation\n• SLA Standardisation\n• Unified Support Structure",
    img: "/images/hero_business.png",
    href: "/managed-it/infrastructure",
    btnText: "Consolidate Control"
  },
  {
    tag: 'GREENFIELD',
    title: "No Dedicated IT Team",
    desc: "We design, deploy, and operate your entire infrastructure environment as a managed operation with full operational detail in accountability.\n\n• Day-Zero Readiness\n• Operational Detail in Ownership\n• Operational Stability",
    img: "/images/greenfield_hero.png",
    href: "/greenfield",
    btnText: "Deploy Managed Model"
  }
];

export const WpITDepartmentOptions = () => {
  return (
    <section className="py-12 md:py-16 bg-[#FCFBFE] overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {OPTIONS.map((opt, idx) => (
            <div
              key={idx}
              className="flex flex-col h-full bg-white rounded-3xl p-6 border border-transparent hover:border-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[12/10] rounded-2xl overflow-hidden mb-8 shadow-2xl shadow-purple-900/10 bg-slate-100">
                <img
                  src={opt.img}
                  alt={opt.title}
                  className="w-full h-full object-cover duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay group-hover:bg-[#5D00D6]/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/60 via-transparent to-transparent" />
              </div>

              <div className="px-2 flex flex-col flex-grow">
                <h3 className="text-[22px] font-bold text-slate-900 mb-4 group-hover:text-[#5D00D6] transition-colors leading-tight">
                  {opt.title}
                </h3>
                <div className="h-[1px] w-full bg-gray-100 mb-6" />
                <p className="c9-body mb-8 whitespace-pre-line flex-grow">
                  {opt.desc}
                </p>
                <Button 
                  size="lg"
                  className="rounded-full shadow-xl px-10 h-14 mt-auto"
                  asChild
                >
                  <Link href={opt.href}>
                    {opt.btnText} 
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
