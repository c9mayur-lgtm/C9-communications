import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function SocialProof() {
  const reviews = [
    {
      quote: "We used to dread calling IT support. Now our staff actually pick up the phone because they know someone will answer, know who they are, and fix the problem.",
      name: "Operations Manager",
      company: "Professional Services Client",
      badge: "Managed IT"
    },
    {
      quote: "The monthly reporting alone changed how we think about IT. We can actually see what's happening and where we're improving — that never existed with our previous provider.",
      name: "IT Manager",
      company: "Healthcare Client",
      badge: "Helpdesk Support"
    },
    {
      quote: "C9 has provided us with great product technology, IT consultation and advice that has lifted our telecommunications and network capabilities beyond our expectations.",
      name: "Zoran Radevski",
      company: "C9 Client",
      badge: "Managed IT"
    }
  ];

  return (
    <section className="w-full bg-[#F3EEFF] py-24">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.1em] text-[#7B2FBE]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
            WHAT OUR CLIENTS SAY
          </span>
          <h2 className="c9-section-heading mt-4" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            From businesses that made the switch.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <Card 
              key={i} 
              className="bg-white border border-[#7B2FBE]/15 rounded-2xl flex flex-col overflow-hidden shadow-sm"
            >
              <CardContent className="p-8 flex flex-col h-full flex-1">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                
                <p className="text-[16px] text-[#1A1A2E] italic leading-[1.7] mt-3 flex-1" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  "{review.quote}"
                </p>

                <div className="mt-8 pt-4 border-t border-[#F3F4F6]">
                  <div className="text-[14px] font-medium text-[#1A1A2E]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    {review.name}
                  </div>
                  <div className="text-[14px] text-[#6B7280]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    {review.company}
                  </div>
                  <Badge variant="outline" className="mt-2 text-[11px] bg-[#F3EEFF] text-[#7B2FBE] border-[#7B2FBE] hover:bg-[#F3EEFF]">
                    {review.badge}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
