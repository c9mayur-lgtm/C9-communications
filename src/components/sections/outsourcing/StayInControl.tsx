import React from 'react';
import { Card } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

export default function StayInControl() {
  const features = [
    "Named account manager — one person who owns your relationship",
    "Monthly reporting — tickets, SLAs, trends, and recommendations",
    "IT roadmap — 12-month forward view of your technology environment",
    "Full environment documentation — nothing lives only in someone's head"
  ];

  const metrics = [
    { label: "Tickets logged", value: "All incidents this month" },
    { label: "SLA compliance", value: "% of SLAs met" },
    { label: "Open items", value: "What's in progress" },
    { label: "Upcoming", value: "Planned work next 30 days" }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="container mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN */}
          <div>
            <span className="text-[14px] font-bold uppercase tracking-[0.25em] text-[#5D00D6] mb-6 block font-sans">
              TRANSPARENCY
            </span>
            <h2 className="c9-section-heading font-sans">
              Outsourcing IT doesn't mean handing over control. It means getting it back.
            </h2>
            <p className="text-[18px] md:text-[20px] text-slate-600/90 leading-relaxed mt-8 font-normal font-sans">
              The businesses most nervous about outsourcing IT are usually the ones who built everything themselves. They know every cable, every password, every quirk. The fear is: what happens to all that knowledge when C9 takes over?
            </p>
            <p className="text-[18px] md:text-[20px] text-slate-600/90 leading-relaxed mt-4 font-normal font-sans">
              Answer: it gets documented, structured, and managed properly for the first time. You don't lose visibility — you gain a monthly report, a named account manager, a strategic roadmap, and a team that is accountable to you for every outcome.
            </p>

            <div className="flex flex-col gap-3 mt-8">
              {features.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-[18px] h-[18px] text-[#5D00D6] shrink-0 mt-0.5 font-sans" />
                  <span className="text-[14px] text-[#0c1024] font-normal  leading-tight font-sans">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex justify-center md:justify-end">
            <Card className="w-full max-w-[440px] bg-[#0c1024] rounded-none p-8 border-none shadow-2xl">
              <h3 className="text-[22px] font-semibold text-white  mb-6 font-sans">
                What you see every month
              </h3>

              <div className="flex flex-col gap-0 mt-6">
                {metrics.map((m, i) => (
                  <div key={i} className="flex justify-between items-center py-[0.875rem] border-b border-[#374151]">
                    <span className="text-[14px] text-slate-600  font-sans">{m.label}</span>
                    <span className="text-[14px] text-white font-normal  font-sans">{m.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#374151]">
                <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#5D00D6] mb-3  font-sans">
                  PLUS QUARTERLY
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-white  text-[14px] font-sans">
                    <span className="text-[#5D00D6] font-bold font-sans">›</span> IT roadmap review
                  </div>
                  <div className="flex items-center gap-2 text-white  text-[14px] font-sans">
                    <span className="text-[#5D00D6] font-bold font-sans">›</span> Budget and lifecycle planning
                  </div>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
