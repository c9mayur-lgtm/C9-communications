import React from 'react';
import { MessageSquare, Search, FileText, Repeat, CheckCircle } from 'lucide-react';

export default function TheTransition() {
  const steps = [
    {
      step: 1,
      week: "Week 0",
      icon: MessageSquare,
      title: "Discovery call",
      body: "We understand your business, current environment, pain points, and what good looks like. No obligation."
    },
    {
      step: 2,
      week: "Week 1",
      icon: Search,
      title: "Environment audit",
      body: "C9 documents your entire IT environment — hardware, software, network, users, and vendors."
    },
    {
      step: 3,
      week: "Week 1–2",
      icon: FileText,
      title: "Proposal and agreement",
      body: "A fixed monthly proposal scoped to your actual environment. No surprise costs. Clear inclusions."
    },
    {
      step: 4,
      week: "Week 2–4",
      icon: Repeat,
      title: "Managed transition",
      body: "C9 takes over your IT in a structured handover. No gap in support coverage during transition."
    },
    {
      step: 5,
      week: "Week 4+",
      icon: CheckCircle,
      title: "Business as usual",
      body: "Your staff have a number to call. Your infrastructure is monitored. You go back to running your business."
    }
  ];

  return (
    <section className="bg-[#F3EEFF] py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="container mx-auto max-w-[1240px]">
        <div className="text-left mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7B2FBE] font-dm-sans">
            GETTING STARTED
          </span>
          <h2 className="text-[28px] md:text-[40px] font-bold text-[#1A1A2E] mt-4 font-syne leading-tight">
            The part everyone worries about.<br className="hidden md:block" /> Here's exactly how it works.
          </h2>
          <p className="text-[18px] text-[#6B7280] max-w-[680px] mt-4 font-dm-sans leading-relaxed">
            Moving to a new IT provider — or outsourcing IT for the first time — feels risky. C9 has a structured onboarding process that removes the risk entirely.
          </p>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:block relative mt-20">
          <div className="absolute top-[20px] left-0 right-0 h-[2px] bg-[#7B2FBE]/20 z-0" />
          
          <div className="flex justify-between relative z-10">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center flex-1 px-4">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#7B2FBE] flex items-center justify-center font-bold text-[14px] text-[#7B2FBE] font-dm-sans">
                  {s.step}
                </div>
                <div className="text-[11px] text-[#9CA3AF] mt-2 font-dm-sans">
                  {s.week}
                </div>
                <s.icon className="w-5 h-5 text-[#7B2FBE] mt-4" />
                <h3 className="text-[15px] font-bold text-[#1A1A2E] mt-3 font-dm-sans">
                  {s.title}
                </h3>
                <p className="text-[13px] text-[#6B7280] mt-2 leading-[1.6] max-w-[160px] font-dm-sans">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden relative flex flex-col mt-12">
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-[#7B2FBE]/20 z-0" />
          
          <div className="flex flex-col gap-0 z-10">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-row gap-6 relative pb-10">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#7B2FBE] flex items-center justify-center font-bold text-[14px] text-[#7B2FBE] shrink-0 font-dm-sans">
                  {s.step}
                </div>
                <div className="flex flex-col pt-1">
                  <div className="text-[11px] text-[#9CA3AF] font-dm-sans uppercase font-bold tracking-wider">
                    {s.week}
                  </div>
                  <h3 className="text-[16px] font-bold text-[#1A1A2E] mt-1 font-dm-sans">
                    {s.title}
                  </h3>
                  <p className="text-[14px] text-[#6B7280] mt-1 leading-[1.6] font-dm-sans">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
