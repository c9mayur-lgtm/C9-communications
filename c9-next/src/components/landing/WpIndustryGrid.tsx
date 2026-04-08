'use client';

import React from 'react';
import { 
  PhoneCall, 
  Wifi, 
  ShieldCheck, 
  Truck, 
  Layers, 
  Headphones 
} from 'lucide-react';

const INDUSTRIES = [
  {
    tag: 'HEALTHCARE',
    title: 'Healthcare IT & Compliance',
    desc: 'Secure patient data, HIPAA-compliant infrastructure, and 24/7 uptime for clinics and hospitals — so your staff focuses on care, not IT tickets.',
    metrics: [
      { label: 'uptime guaranteed', value: '99.9%' },
      { label: 'avg setup time', value: '48h' }
    ],
    icon: PhoneCall,
  },
  {
    tag: 'PROFESSIONAL SERVICE',
    title: 'IT for Law, Finance & Consulting',
    desc: "Reliable internet, secure cloud storage, and Microsoft 365 management for firms that can't afford downtime — or a data breach.",
    metrics: [
      { label: 'Australian data sovereignty', value: '100%' },
      { label: 'avg response time', value: '4hr' }
    ],
    icon: Wifi,
  },
  {
    tag: 'NON-PROFIT',
    title: 'Affordable IT for Good Causes',
    desc: 'We stretch every dollar with tailored IT packages, NBN, and Microsoft nonprofit licensing — so more of your budget goes to the mission, not infrastructure.',
    metrics: [
      { label: 'avg cost savings', value: '40%' },
      { label: 'Setup fees', value: '0$' }
    ],
    icon: ShieldCheck,
  },
  {
    tag: 'EDUCATION',
    title: 'Connected Classrooms & Campuses',
    desc: 'Moving office? We connect your voice, internet, IT, and print before you walk through the door. 500+ relocations completed. Zero downtime reported.',
    metrics: [
      { label: 'Devices Managed', value: '500+' },
      { label: 'Network Uptime', value: '99%' }
    ],
    icon: Truck,
  },
  {
    tag: 'RETAIL',
    title: 'IT That Keeps Your Stores Running',
    desc: 'EFTPOS-ready connectivity, multi-site networking, and instant support when your POS goes down — because every minute of downtime costs you a sale.',
    metrics: [
      { label: 'avg fault response', value: '15min' },
      { label: 'Downtime reported', value: '0' }
    ],
    icon: Layers,
  },
  {
    tag: 'REAL ESTATE',
    title: 'Fast IT for Fast-Moving Agencies',
    desc: 'Every support call is answered by someone in Australia who knows your account. No offshore centres. No ticket queues. No runaround.',
    metrics: [
      { label: 'Integrations supported', value: '20+' },
      { label: 'Deployment', value: '1Day' }
    ],
    icon: Headphones,
  }
];

export const WpIndustryGrid = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="text-center mb-16 max-w-3xl mx-auto px-6">
          <span className="text-[#5D00D6] text-[13px] font-bold uppercase tracking-[0.25em] mb-6 block" >WHY PARTNER WITH US</span>
          <h2 className="text-[36px] md:text-[48px] font-bold text-[#0c1024] leading-[1.05] tracking-tight" >
            Solving IT challenges in every industry, every day.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {INDUSTRIES.map((block, i) => (
            <div key={i} className="p-8 md:p-10 border-r border-b border-gray-200 flex flex-col bg-white cursor-default">
              <div className="mb-6 self-start">
                <span className="px-3 py-1 rounded-full bg-[#F4F0FA] text-[#5D00D6] text-[10px] font-bold uppercase tracking-[0.1em]" >
                  {block.tag}
                </span>
              </div>
              <div className="mb-6 text-[#5D00D6]">
                <block.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-[#0c1024] mb-4 tracking-tight leading-tight" >{block.title}</h3>
              <p className="text-gray-500 text-[18px] leading-relaxed font-normal mb-8 flex-grow" >
                {block.desc}
              </p>

              {/* Metrics Row */}
              <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-6">
                {block.metrics.map((m, mi) => (
                  <React.Fragment key={mi}>
                    <div className="flex-1 shrink-0">
                      <div className="text-[24px] md:text-[28px] font-bold text-[#5D00D6] leading-none tracking-tight line-clamp-1" >
                        {m.value}
                      </div>
                      <div className="text-[10px] md:text-[11px] text-gray-400 mt-2 font-medium uppercase tracking-wider font-proxima leading-tight pr-2 line-clamp-2 min-h-[24px]">
                        {m.label}
                      </div>
                    </div>
                    {mi === 0 && <div className="h-8 md:h-12 w-[1px] bg-[#5D00D6]/20 shrink-0"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

