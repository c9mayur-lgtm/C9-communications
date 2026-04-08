'use client';

import React from 'react';
import { Search, PenTool, ClipboardCheck, Settings, Activity } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Site qualification",
    body: "C9 checks your address against available fibre infrastructure — confirming available technology, maximum speeds, setup costs, and lead times before you commit to anything."
  },
  {
    icon: PenTool,
    title: "Design and recommendation",
    body: "Based on your business needs, user count, and applications — C9 recommends the right speed tier, contract length, and any additional services like IP VPN or cloud connectivity."
  },
  {
    icon: ClipboardCheck,
    title: "Order and provisioning",
    body: "C9 manages the carrier order, provisioning, and installation scheduling. Complex provisioning processes handled with care to ensure minimal business impact."
  },
  {
    icon: Settings,
    title: "Installation and configuration",
    body: "Physical fibre installation and managed router configuration — completed by certified technicians. C9 is on-hand throughout to ensure your service is live and performing to specification."
  },
  {
    icon: Activity,
    title: "Monitoring and ongoing support",
    body: "Your connection is monitored from go-live. Your dedicated account manager handles any faults, upgrades, or changes — and you receive monthly reporting on connection health and usage."
  }
];

export default function HowItWorks() {
  return (
    <section 
      className="w-full bg-white py-16 md:py-24" 
      
    >
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-20">
          <span className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-[0.3em] block mb-6">HOW IT WORKS</span>
          <h2 className="text-[36px] md:text-[48px] font-bold text-[#1A1A2E] leading-tight mb-8">
            From quote to connected — <br /> here's exactly what happens.
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#6B7280] leading-relaxed">
            C9 manages the entire process from site qualification through to installation, configuration, and ongoing monitoring. You focus on your business.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-gray-100 -translate-x-[0.5px] hidden md:block" />

          <div className="space-y-16 relative">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className="flex-1 w-full bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all">
                  <span className="text-[10px] font-bold text-[#5D00D6] uppercase tracking-widest mb-4 block">Step 0{idx + 1}</span>
                  <h3 className="text-[22px] font-bold text-[#1A1A2E] mb-4">{step.title}</h3>
                  <p className="text-[16px] text-[#6B7280] leading-relaxed">{step.body}</p>
                </div>

                {/* Counter Circle */}
                <div className="shrink-0 w-16 h-16 rounded-full bg-white border-4 border-[#F3EEFF] flex items-center justify-center relative z-10 shadow-md">
                   <div className="w-10 h-10 rounded-full bg-[#5D00D6] flex items-center justify-center text-white font-bold text-[18px]">
                      <step.icon size={20} />
                   </div>
                </div>

                {/* Empty Flex Space for alignment */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

