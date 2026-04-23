'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const HumanDifference = () => {
  const cards = [
    {
      photo: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
      tag: "FOR SMALL BUSINESS",
      tagColor: "#5D00D6",
      tagBg: "#F4F0FA",
      quote: "Before C9, I was my own IT department. Now I just call one number and it gets sorted — usually before I've finished my coffee.",
      attribution: "— Retail owner, Melbourne"
    },
    {
      photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200",
      tag: "FOR GROWING TEAMS",
      tagColor: "#3B5BDB",
      tagBg: "#F0F4FF",
      quote: "We went from 3 offices to 12 in two years. C9 scaled with us — same team, same number, zero disruption.",
      attribution: "— Operations Manager, Professional Services"
    },
    {
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200",
      tag: "FOR ENTERPRISE",
      tagColor: "#2D6A4F",
      tagBg: "#F0FFF4",
      quote: "C9 replaced three separate vendors. One SLA, one invoice, one team that actually knows our infrastructure.",
      attribution: "— IT Director, National Healthcare Group"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#FDFDFF]">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-[0.25em] mb-6 block" >THE C9 DIFFERENCE</span>
          <h2 className="c9-section-heading mb-6" >
            Technology is the tool. People are the point.
          </h2>
          <p className="c9-body">
            Every ticket, every call, every site visit is handled by an Australian who knows your account. Not a chatbot. Not an offshore queue. A person with your name in front of them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, i) => (
            <div key={i} className="bg-white rounded-[16px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.07)] border border-[#E5E7EB] flex flex-col h-full transition-transform duration-300 hover:-translate-y-2">
              <div className="h-[220px] overflow-hidden">
                <img src={card.photo} alt={card.tag} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span 
                  className="text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-max mb-6"
                  style={{ color: card.tagColor, backgroundColor: card.tagBg }}
                >
                  {card.tag}
                </span>
                <p className="text-[17px] md:text-[19px] text-[#0c1024] font-medium leading-relaxed mb-6 italic" >
                  "{card.quote}"
                </p>
                <p className="mt-auto text-[12px] text-[#6B7280] italic">
                  {card.attribution}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="bg-[#5D00D6] hover:bg-[#5D00D6]/90 rounded-full px-10 h-14 font-bold">
            Read our client stories <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

