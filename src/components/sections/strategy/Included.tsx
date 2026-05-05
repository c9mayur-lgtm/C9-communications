import React from 'react';
import { Map, DollarSign, Users, ShieldCheck, BarChart2, ShoppingBag } from 'lucide-react';

export default function Included() {
  const ITEMS = [
    {
      icon: Map,
      title: "IT Roadmap Development",
      body: "A 12-month prioritised technology roadmap built around your business goals, updated quarterly as your business evolves."
    },
    {
      icon: DollarSign,
      title: "Technology Budget Planning",
      body: "Annual IT budget modelling with clear capital and operational cost breakdown — no surprises, no reactive spend."
    },
    {
      icon: Users,
      title: "Vendor Management",
      body: "C9 manages all your technology vendors — SLA enforcement, contract renewals, and independent procurement advice."
    },
    {
      icon: ShieldCheck,
      title: "Risk & Security Assessment",
      body: "Ongoing identification and prioritisation of technology risks — with a clear remediation plan and timeline."
    },
    {
      icon: BarChart2,
      title: "Board & Leadership Reporting",
      body: "Quarterly technology reports for leadership and boards — risk status, roadmap progress, and investment summary."
    },
    {
      icon: ShoppingBag,
      title: "Technology Procurement",
      body: "Vendor-agnostic procurement advice and coordination — ensuring you buy the right technology at the right price."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F3EEFF] overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        <div className="flex flex-col items-start gap-4 mb-20">
          <span className="text-[14px] font-bold text-brand-purple uppercase tracking-[0.2em] font-dm-sans">
            SCOPE OF SERVICE
          </span>
          <h2 className="c9-section-heading font-syne mt-2">
            Everything included in a strategic<br />IT engagement with C9.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ITEMS.map((item, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-10 border-[0.5px] border-[rgba(123,47,190,0.15)] hover:border-brand-purple hover:-translate-y-1 transition-all duration-200 shadow-sm hover:shadow-xl flex flex-col items-start text-left"
            >
              <div className="w-[48px] h-[48px] rounded-xl bg-[#EDE9FE] flex items-center justify-center text-brand-purple flex-shrink-0 group-hover:scale-110 mb-8">
                <item.icon size={22} strokeWidth={2.5} />
              </div>

              <h3 className="text-[18px] md:text-[20px] font-bold text-[#1A1A2E] font-syne mb-4 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-[14px] text-[#6B7280] leading-[1.65] font-dm-sans opacity-95">
                {item.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
