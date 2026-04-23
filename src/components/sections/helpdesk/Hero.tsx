import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex items-center bg-white py-20 lg:py-0">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN */}
          <div>
            <Badge variant="outline" className="border-[#7B2FBE] text-[#7B2FBE] mb-6">
              Managed IT · Helpdesk Support
            </Badge>

            <h1 className="text-[38px] md:text-[52px] lg:text-[62px] tracking-tight font-bold text-[#0c1024] leading-[1.08] mb-6" >
              Your staff deserve IT support that <span className="text-[#5D00D6]">actually shows up.</span>
            </h1>

            <p className="text-[18px] text-[#6B7280] max-w-[560px] leading-[1.7] mb-8" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
              C9's helpdesk team becomes your staff's first call for every IT problem — remote and on-site, with defined response times, a team that knows your environment, and an account manager who owns the outcome.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button className="bg-[#7B2FBE] hover:bg-[#64249c] text-white">
                Get a Helpdesk Proposal →
              </Button>
              <Link href="#sla-section" passHref>
                <Button variant="outline" className="border-gray-200 hover:bg-gray-50 text-[#1A1A2E]">
                  See Our Response Times →
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-6">
              {[
                "Australian-based team",
                "Remote + on-site support",
                "Dedicated account manager"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-[6px] h-[6px] rounded-full bg-[#7B2FBE]" />
                  <span className="text-[14px] text-[#6B7280]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-[#1A1A2E] rounded-2xl p-6 flex flex-col gap-3">
            
            {/* Ticket Card 1 */}
            <div className="bg-[#0F0F1A] rounded-xl px-5 py-4">
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-[#9CA3AF]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  #1042
                </span>
                <Badge className="bg-[#FEF3C7] text-[#92400E] hover:bg-[#FEF3C7] text-[10px] sm:text-[12px]">
                  ● High Priority
                </Badge>
              </div>
              
              <h4 className="text-[14px] font-medium text-white mt-2" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Outlook not loading for 3 staff
              </h4>
              
              <div className="flex justify-between items-center mt-3">
                <span className="text-[12px] text-[#6B7280]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Assigned: C9 Helpdesk
                </span>
                <span className="text-[12px] text-[#6B7280]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Response: 47 min ago
                </span>
              </div>
              
              <div className="mt-3">
                <div className="text-[11px] text-[#6B7280] mb-1.5" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  In Progress
                </div>
                <div className="w-full h-1 bg-[#374151] rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-[#7B2FBE] rounded-full" />
                </div>
              </div>
            </div>

            {/* Ticket Card 2 */}
            <div className="bg-[#0F0F1A] rounded-xl px-5 py-4">
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-[#9CA3AF]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  #1041
                </span>
                <Badge className="bg-[#D1FAE5] text-[#065F46] hover:bg-[#D1FAE5] text-[10px] sm:text-[12px]">
                  ✓ Resolved
                </Badge>
              </div>
              
              <h4 className="text-[14px] font-medium text-white mt-2" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                New starter setup — 3 devices
              </h4>
              
              <div className="flex justify-between items-center mt-3">
                <span className="text-[12px] text-[#6B7280]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Resolution time: 2h 14m
                </span>
                <span className="text-[12px] font-medium text-[#7B2FBE]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Documented ✓
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

