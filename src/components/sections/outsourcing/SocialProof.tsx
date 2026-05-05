import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      quote: "We were the IT department — the owner, the office manager, and one stressed admin. Handing it to C9 was the best business decision we made that year. We haven't thought about IT since.",
      name: "Business Owner",
      company: "Professional Services Client",
      badge: "IT Outsourcing"
    },
    {
      quote: "Our previous MSP was technically managing our IT. C9 showed us what that actually looks like when someone takes ownership. The difference was immediate.",
      name: "Operations Director",
      company: "Managed IT Client",
      badge: "IT Outsourcing"
    },
    {
      quote: "C9 has provided us with great product technology, IT consultation and advice that has lifted our telecommunications and network capabilities beyond our expectations.",
      name: "Zoran Radevski",
      company: "C9 Client",
      badge: "Managed IT"
    }
  ];

  return (
    <section className="bg-[#F3EEFF] py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="container mx-auto max-w-[1240px]">
        <div className="text-left mb-12 font-sans">
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7B2FBE] font-sans">
            WHAT OUR CLIENTS SAY
          </span>
          <h2 className="c9-section-heading -[1.1] font-sans">
            From businesses that made the switch.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <Card 
              key={i} 
              className="h-full bg-white rounded-lg border-[0.5px] border-[#7B2FBE]/15 p-8 flex flex-col gap-4 hover:border-[#7B2FBE] hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
            >
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((_, star) => (
                  <Star key={star} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B] font-sans" />
                ))}
              </div>

              <p className="text-[16px] text-[#0c1024] italic leading-[1.7] flex-1 font-sans">
                "{t.quote}"
              </p>

              <div className="mt-auto pt-4 border-t border-[#F3F4F6] flex flex-col gap-1">
                <span className="text-[14px] font-bold text-[#0c1024] uppercase tracking-[0.02em] font-sans">
                  {t.name}
                </span>
                <span className="text-[14px] text-slate-600 leading-none opacity-80 font-sans">
                  {t.company}
                </span>
                <Badge variant="outline" className="mt-3 w-fit bg-[#F3EEFF] text-[#7B2FBE] border-[#7B2FBE] text-[11px] font-bold px-3 py-0.5 font-sans">
                  {t.badge}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
