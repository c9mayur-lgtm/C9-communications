import React from "react";
import { CheckCircle } from 'lucide-react';

export default function C9Difference() {
  const rows = [
    { label: "Environment knowledge", generic: "❌ Explained every call", c9: "✓ Documented from day one" },
    { label: "Accountability", generic: "❌ Ticket closed, problem returns", c9: "✓ Pattern detection + follow-up" },
    { label: "Escalation", generic: "❌ You chase for updates", c9: "✓ Proactive communication" },
    { label: "Account management", generic: "❌ No dedicated contact", c9: "✓ Named account manager" },
    { label: "Reporting", generic: "❌ No visibility", c9: "✓ Monthly performance report" },
    { label: "Team location", generic: "❌ Offshore routing", c9: "✓ Australian-based team" }
  ];

  return (
    <section className="w-full bg-[#F3EEFF] py-24">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* LEFT COLUMN */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.1em] text-[#7B2FBE]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
              THE C9 DIFFERENCE
            </span>
            <h2 className="c9-section-heading mt-4" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              Not a call centre. A team that knows your business.
            </h2>
            
            <p className="text-[17px] text-[#6B7280] leading-[1.75] mt-6" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Most IT helpdesks operate as volume-based call centres — a different technician every time, no knowledge of your environment, and no accountability for outcomes. You explain your setup on every single call.
            </p>
            
            <p className="text-[17px] text-[#6B7280] leading-[1.75] mt-4" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
              C9 operates differently. From day one we document your entire environment — your systems, your users, your priorities, your quirks. Every technician who touches your tickets knows your business before they pick up the call.
            </p>

            <div className="flex flex-col gap-3 mt-8">
              {[
                "Dedicated account manager who owns your relationship",
                "Full environment documentation maintained and updated by C9",
                "Proactive updates — we tell you what's happening, you don't chase us",
                "Australian-based team, no offshore routing"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle size={12} className="text-[#7B2FBE] shrink-0 mt-[2px]" />
                  <span className="text-[14px] text-[#1A1A2E]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-white border border-[#7B2FBE]/15 rounded-2xl overflow-hidden shadow-sm self-start">
            <div className="grid grid-cols-[3fr_3.5fr_3.5fr]">
              <div className="bg-white p-3.5" />
              <div className="bg-[#F9FAFB] p-3.5 text-center flex items-center justify-center">
                <span className="text-[14px] font-semibold uppercase text-[#6B7280]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>Generic helpdesk</span>
              </div>
              <div className="bg-[#F3EEFF] p-3.5 text-center flex items-center justify-center">
                <span className="text-[14px] font-semibold uppercase text-[#7B2FBE]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>C9 Helpdesk</span>
              </div>
            </div>

            {rows.map((row, i) => (
              <div key={i} className="grid grid-cols-[3fr_3.5fr_3.5fr] border-t border-[#F3F4F6]">
                <div className="bg-white px-4 py-3.5 flex items-center">
                  <span className="text-[14px] text-[#6B7280]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.label}</span>
                </div>
                <div className="bg-[#F9FAFB] px-4 py-3.5 text-center flex items-center justify-center">
                  <span className="text-[14px] text-[#9CA3AF]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.generic}</span>
                </div>
                <div className="bg-[#F3EEFF] px-4 py-3.5 text-center flex items-center justify-center">
                  <span className="text-[14px] font-medium text-[#1A1A2E]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.c9}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
