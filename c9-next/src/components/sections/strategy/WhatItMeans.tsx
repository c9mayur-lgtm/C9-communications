import React from 'react';
import { Map, DollarSign, Users, ShieldCheck, BarChart2, ShoppingBag, ArrowRight } from 'lucide-react';

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
        <div className="flex flex-col mb-16 gap-4 font-sans text-white">
          <span className="text-white text-[13px] font-bold uppercase tracking-[0.25em] mb-6 block" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
            WHAT WE ACTUALLY DO
          </span>
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight leading-[1.05]" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
            Strategy without execution<br />is just a document. We do both.
          </h2>
          <p className="text-white/85 text-[16px] max-w-[720px] leading-relaxed mt-2 font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
            A virtual CIO from C9 is not a consultant who delivers a report and disappears. It is an ongoing strategic relationship — someone who attends your planning meetings, manages your vendors, and ensures your technology investment is aligned with your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategyServices.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-none shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all group flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100">
              <div className="mb-6">
                <s.icon size={40} className="text-[#5D00D6]" strokeWidth={1.5} />
              </div>

              <h3 className="text-[22px] font-bold mb-3 text-[#0c1024] tracking-tight leading-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                {s.title}
              </h3>

              <p className="text-[#4B5563] text-[16px] mb-6 leading-relaxed flex-grow font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                {s.body}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {s.tags.map((tag, ti) => (
                  <span key={ti} className="text-[11px] font-semibold uppercase tracking-wider text-[#5D00D6] bg-[#5D00D6]/10 px-3 py-1 rounded-none font-sans">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="w-full h-[1px] bg-gray-100 mt-auto mb-5"></div>
              
              <div className="flex items-center text-[13px] font-bold text-[#5D00D6] group-hover:underline uppercase tracking-wider font-sans">
                {s.link ? 'Explore Defense' : 'Strategic Outcome'}
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
