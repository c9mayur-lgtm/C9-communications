import React from "react";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight } from "lucide-react";

export default function SocialProof() {
  const reviews = [
    {
      quote: "We used to dread calling IT support. Now our staff actually pick up the phone because they know someone will answer, know who they are, and fix the problem.",
      name: "Operations Manager",
      company: "Professional Services Client",
      badge: "Managed IT",
      avatar: "https://i.pravatar.cc/150?img=33"
    },
    {
      quote: "The monthly reporting alone changed how we think about IT. We can actually see what's happening and where we're improving — that never existed with our previous provider.",
      name: "IT Manager",
      company: "Healthcare Client",
      badge: "Helpdesk Support",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
      quote: "C9 has provided us with great product technology, IT consultation and advice that has lifted our telecommunications and network capabilities beyond our expectations.",
      name: "Zoran Radevski",
      company: "C9 Client",
      badge: "Managed IT",
      avatar: "https://i.pravatar.cc/150?img=35"
    }
  ];

  return (
    <section className="w-full bg-[#fcfaff] py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="mb-16">
          <span className="text-[#5D00D6] text-[13px] font-bold uppercase tracking-[0.3em] mb-4 block" >
            WHAT OUR CLIENTS SAY
          </span>
          <h2 className="text-[28px] md:text-[36px] font-medium text-[#0c1024] mt-4 leading-[1.1] tracking-tight max-w-[700px]" >
            From businesses that <span className="text-[#5D00D6]">made the switch.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="group bg-white border border-purple-50 rounded-[32px] p-8 md:p-10 flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200/50"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={18} fill="#F59E0B" color="#F59E0B" className="group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${idx * 100}ms` }} />
                ))}
              </div>
              
              <p className="text-[15px] md:text-[16px] text-[#0c1024] font-medium leading-relaxed italic mb-10 flex-grow" >
                "{review.quote}"
              </p>

              <div className="pt-8 border-t border-slate-50 flex items-center gap-5">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-50 shadow-sm shrink-0">
                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-[16px] font-medium text-[#0c1024] tracking-tight" >
                    {review.name}
                  </div>
                  <div className="text-[13px] text-slate-500 font-medium" >
                    {review.company} · {review.badge}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

