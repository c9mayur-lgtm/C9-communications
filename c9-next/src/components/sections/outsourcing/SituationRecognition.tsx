import React from 'react';
import { Card } from "@/components/ui/card";
import { User, UserMinus, ThumbsDown } from 'lucide-react';

export default function SituationRecognition() {
  const cards = [
    {
      icon: User,
      label: "The business owner doing IT themselves",
      title: "I'm the IT department and I'm running out of time.",
      body: "You know more about your IT setup than anyone — because you built it yourself. But every hour you spend on IT is an hour not spent on your business. C9 takes the whole thing off your plate, permanently.",
      bottom: "Most common in: businesses with 10–50 staff"
    },
    {
      icon: UserMinus,
      label: "The business that outgrew its IT",
      title: "Our IT person left and we're exposed.",
      body: "One person managing IT for a growing business is a single point of failure. When they leave — or can't keep up — the gap is immediately visible. C9 steps in with a full team, not a replacement hire.",
      bottom: "Most common in: businesses with 30–150 staff"
    },
    {
      icon: ThumbsDown,
      label: "The business with a failing MSP",
      title: "We have an IT provider but nothing gets resolved.",
      body: "Tickets that go nowhere. No proactive communication. No strategic input. A managed IT provider that manages nothing. C9 transitions businesses away from underperforming providers without gaps in coverage.",
      bottom: "Most common in: businesses switching after 12–24 months of frustration"
    }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="container mx-auto max-w-[1240px]">
        <div className="text-left">
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7B2FBE] font-dm-sans">
            WE'VE HEARD THIS BEFORE
          </span>
          <h2 className="text-[28px] md:text-[40px] font-bold text-[#1A1A2E] mt-4 font-syne leading-tight">
            Three situations. One solution.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {cards.map((card, i) => (
            <Card 
              key={i} 
              className="group h-full bg-white rounded-2xl border-[0.5px] border-[#7B2FBE]/15 p-8 flex flex-col items-start gap-3 hover:border-[#7B2FBE] hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-[#EDE9FE] rounded-xl flex items-center justify-center shrink-0">
                <card.icon className="w-[22px] h-[22px] text-[#7B2FBE]" />
              </div>

              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#7B2FBE] mt-6 font-dm-sans leading-none">
                {card.label}
              </div>

              <h3 className="text-[18px] font-medium text-[#1A1A2E] mt-2 font-dm-sans leading-snug">
                {card.title}
              </h3>

              <p className="text-[14px] text-[#6B7280] leading-[1.6] mt-3 font-dm-sans">
                {card.body}
              </p>

              <div className="mt-auto pt-4 border-t border-[#F3F4F6] w-full">
                <p className="text-[13px] text-[#9CA3AF] italic font-dm-sans">
                  {card.bottom}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
