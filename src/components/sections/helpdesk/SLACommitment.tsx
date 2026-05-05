import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

export default function SLACommitment() {
  const rows = [
    {
      priority: "P1 Critical",
      badgeColor: "bg-[#FEE2E2] text-[#991B1B]",
      what: "Business-wide outage or active security incident",
      response: "< 1 hour",
      resolution: "< 4 hours"
    },
    {
      priority: "P2 High",
      badgeColor: "bg-[#FEF3C7] text-[#92400E]",
      what: "Multiple users impacted, no workaround available",
      response: "< 4 hours",
      resolution: "< 8 hours"
    },
    {
      priority: "P3 Medium",
      badgeColor: "bg-[#E0F2FE] text-[#0369A1]",
      what: "Single user impacted, workaround available",
      response: "< 8 hours",
      resolution: "Next business day"
    },
    {
      priority: "P4 Low",
      badgeColor: "bg-[#F3F4F6] text-[#374151]",
      what: "Minor request, no operational impact",
      response: "< 1 business day",
      resolution: "Scheduled"
    }
  ];

  return (
    <section id="sla-section" className="w-full bg-white py-24 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-[60%_40%] gap-16 items-start">
          
          {/* LEFT COLUMN */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.1em] text-[#7B2FBE]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
              RESPONSE SLAs
            </span>
            <h2 className="c9-section-heading mt-4" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              Defined response times. Not estimates. Not 'as soon as possible.'
            </h2>
            <p className="text-[17px] text-[#6B7280] leading-[1.75] mt-4 max-w-[520px]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Every ticket C9 receives is assigned a priority level based on business impact. Response and resolution targets are defined in your agreement — and we report against them monthly so you always know if we're hitting them.
            </p>

            <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#F3EEFF] border-b border-[#F3F4F6]">
                    <th className="py-3.5 px-4 text-[12px] font-semibold text-[#7B2FBE] uppercase tracking-[0.06em]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>Priority</th>
                    <th className="py-3.5 px-4 text-[12px] font-semibold text-[#7B2FBE] uppercase tracking-[0.06em]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>What it means</th>
                    <th className="py-3.5 px-4 text-[12px] font-semibold text-[#7B2FBE] uppercase tracking-[0.06em]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>Response target</th>
                    <th className="py-3.5 px-4 text-[12px] font-semibold text-[#7B2FBE] uppercase tracking-[0.06em]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>Resolution target</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {rows.map((row, i) => (
                    <tr key={i} className={`border-b border-[#F3F4F6] ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>
                      <td className="py-3.5 px-4">
                        <Badge className={`${row.badgeColor} border-none hover:${row.badgeColor} whitespace-nowrap`}>
                          {row.priority}
                        </Badge>
                      </td>
                      <td className="py-3.5 px-4 text-[14px] text-[#1A1A2E]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.what}</td>
                      <td className="py-3.5 px-4 text-[14px] text-[#1A1A2E]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.response}</td>
                      <td className="py-3.5 px-4 text-[14px] text-[#1A1A2E]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.resolution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-[14px] text-[#6B7280] italic mt-3" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Standard SLAs apply during business hours. 24/7 coverage available on select plans.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <Card className="bg-[#1A1A2E] rounded-2xl border-none">
              <CardContent className="p-8">
                <h3 className="text-[22px] font-semibold text-white" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                  Monthly reporting included
                </h3>
                <p className="text-[14px] text-[#9CA3AF] leading-[1.6] mt-3" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Every month C9 provides a helpdesk performance report showing:
                </p>
                
                <div className="flex flex-col gap-3 mt-6">
                  {[
                    "Total tickets logged and resolved",
                    "Average response and resolution time",
                    "SLA compliance rate",
                    "Repeat issue trends and recommendations",
                    "Open items and pending actions"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={12} className="text-[#7B2FBE] shrink-0" />
                      <span className="text-[14px] text-white leading-snug" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[#374151]">
                  <span className="text-[14px] text-[#6B7280]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    No extra charge. Built into every engagement.
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
