'use client';

import React from 'react';
import { CheckCircle, Activity, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function MonitoringBlock() {
  const features = [
    "24/7 proactive infrastructure monitoring",
    "Issue detection before business impact",
    "Full documentation and config history audits",
    "Incident response within defined SLAs",
    "Monthly infrastructure health reports",
  ];

  return (
    <section className="w-full bg-[#0F0F1A] py-24 px-6">
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-20 items-center">
        <div>
          <Badge className="bg-[color:var(--brand-purple)] text-white border-0 font-['Proxima_Nova'] text-[11px] font-semibold uppercase tracking-[0.08em] px-3 py-1.5 rounded-full mb-6">
            Managed Network Monitoring
          </Badge>
          
          <h2 className="font-['Proxima_Nova'] text-[32px] md:text-[42px] text-white font-bold mb-6 leading-[1.3]">
            We keep a proactive eye on your infrastructure — 24 hours a day, 7 days a week.
          </h2>
          
          <p className="font-['Proxima_Nova'] text-[17px] text-[#9CA3AF] leading-[1.75] mb-5">
            C9 uses all available tools, staff, and expertise to keep your infrastructure running smoothly. We diagnose and resolve issues before they impact your business — not after you've already lost downtime.
          </p>
          
          <p className="font-['Proxima_Nova'] text-[17px] text-[#9CA3AF] leading-[1.75] mb-10">
            We don't rest until your networks and applications are locked down and running seamlessly. And we document everything — full configuration history audits so every part of your environment is accounted for.
          </p>
          
          <div className="flex flex-col gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-3 items-center">
                <CheckCircle className="w-4 h-4 text-[color:var(--brand-purple)] flex-shrink-0" />
                <span className="font-['Proxima_Nova'] text-[15px] text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div className="bg-[#1A1A2E] rounded-2xl border-[0.5px] border-[color:var(--brand-purple)] p-8 transition-transform hover:-translate-y-1">
            <div className="w-10 h-10 bg-[color:var(--brand-purple)]/10 rounded-lg flex items-center justify-center mb-5">
              <Activity className="w-6 h-6 text-[color:var(--brand-purple)]" />
            </div>
            <h3 className="font-['Proxima_Nova'] text-[18px] text-white font-semibold mb-3">Proactive monitoring</h3>
            <p className="font-['Proxima_Nova'] text-[14px] text-[#9CA3AF] leading-[1.6]">
              We see infrastructure issues before your staff do — and resolve them before they become incidents.
            </p>
            <div className="mt-8 pt-6 border-t border-[#374151]">
              <p className="font-['Proxima_Nova'] text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-purple)]">
                NOT SET AND FORGET
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1A1A2E] rounded-2xl border-[0.5px] border-[#374151] p-8 transition-transform hover:-translate-y-1">
            <div className="w-10 h-10 bg-[color:var(--brand-purple)]/10 rounded-lg flex items-center justify-center mb-5">
              <FileText className="w-6 h-6 text-[color:var(--brand-purple)]" />
            </div>
            <h3 className="font-['Proxima_Nova'] text-[18px] text-white font-semibold mb-3">Full documentation</h3>
            <p className="font-['Proxima_Nova'] text-[14px] text-[#9CA3AF] leading-[1.6]">
              Every configuration change documented. Full audit history maintained. Nothing in your environment is unaccounted for.
            </p>
            <div className="mt-8 pt-6 border-t border-[#374151]">
              <p className="font-['Proxima_Nova'] text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-purple)]">
                COMPLETE AUDIT TRAIL
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
