import React from 'react';
import { Map, DollarSign, Users, ShieldCheck, BarChart2, ShoppingBag } from 'lucide-react';

const strategyServices = [
  {
    icon: Map,
    title: "IT Roadmap development",
    body: "A prioritised 12-month technology plan built around your business goals — not your vendor's sales targets. Built to be updated as you grow.",
    tags: ['12-Month Plan', 'Updated Quarterly', 'Goal-Aligned'],
    link: null
  },
  {
    icon: DollarSign,
    title: "Technology budget planning",
    body: "Annual IT budget modelling with clear capital and operational cost breakdown — predictable costs and no surprise expenditure.",
    tags: ['Predictable', 'Quarterly Review', 'Cost Control'],
    link: null
  },
  {
    icon: Users,
    title: "Vendor management",
    body: "C9 manages your technology suppliers, holds them to SLAs, and negotiates renewals on your behalf as your independent advocate.",
    tags: ['SLA Enforcement', 'Renewals', 'Independent'],
    link: null
  },
  {
    icon: ShieldCheck,
    title: "Risk & security assessment",
    body: "Ongoing identification and prioritisation of technology risks — with a clear remediation plan and timeline tailored to your threat profile.",
    tags: ['Proactive', 'Security Posture', 'Compliant'],
    link: "/managed-it/defense"
  },
  {
    icon: BarChart2,
    title: "Board-level reporting",
    body: "Clear, jargon-free technology reporting for leadership and boards — risk, investment, and roadmap progress in plain language.",
    tags: ['Jargon-Free', 'Board Ready', 'Executive View'],
    link: null
  },
  {
    icon: ShoppingBag,
    title: "Technology procurement",
    body: "Vendor-agnostic procurement advice and coordination — ensuring you buy the right technology at the right price, every time.",
    tags: ['Agnostic', 'Cost Saving', 'Professional'],
    link: null
  }
];

export default function WhatItMeans() {
  return (
    <section id="scope-section" className="relative py-24 scroll-mt-20 overflow-hidden">
      {/* Background Gradient matching Outsourcing */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#7B2FBE] to-white z-0" />

      <div className="container mx-auto px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col mb-16 gap-4 text-white text-left">
          <span className="c9-eyebrow !text-white opacity-80 mb-6 block">
            WHAT WE ACTUALLY DO
          </span>
          <h2 className="c9-section-heading !text-white">
            Strategy without execution<br className="hidden md:block" /> is just a document. We do both.
          </h2>
          <p className="c9-body !text-white/85 max-w-[720px] mt-2">
            A virtual CIO from C9 is not a consultant who delivers a report and disappears. It is an ongoing strategic relationship — someone who attends your planning meetings, manages your vendors, and ensures your technology investment is aligned with your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategyServices.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100">
                <div className="mb-6">
                  <Icon size={40} className="text-[#5D00D6]" strokeWidth={1.5} />
                </div>

              <h3 className="c9-card-title mb-3 !text-[20px]">
                {s.title}
              </h3>

              <p className="c9-body mb-6 flex-grow !text-[14px]">
                {s.body}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {s.tags.map((tag, ti) => (
                  <span key={ti} className="c9-eyebrow !text-[10px] !text-[#5D00D6] bg-[#5D00D6]/10 px-3 py-1 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="w-full h-[1px] bg-gray-100 mt-auto mb-5"></div>
              
              <div className="flex items-center c9-eyebrow !text-[12px] group-hover:underline">
                {s.link ? 'Explore Defense' : 'Strategic Outcome'}
                
              </div>
            </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
