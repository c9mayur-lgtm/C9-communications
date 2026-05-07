import React from "react";
import { CheckCircle, XCircle } from 'lucide-react';

export default function C9Difference() {
  const compared = [
    { label: "Environment knowledge", generic: "Explained every call", c9: "Documented from day one", genericOk: false },
    { label: "Accountability", generic: "Ticket closed, problem returns", c9: "Pattern detection + follow-up", genericOk: false },
    { label: "Escalation", generic: "You chase for updates", c9: "Proactive communication", genericOk: false },
    { label: "Account management", generic: "No dedicated contact", c9: "Named account manager", genericOk: false },
    { label: "Reporting", generic: "No visibility on trends", c9: "Monthly performance reports", genericOk: false },
    { label: "Team location", generic: "Offshore routing", c9: "AU-managed technical team", genericOk: false }
  ];

  return (
    <section className="w-full bg-[#fcfaff] py-12 md:py-16 border-y border-purple-50">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-[1.2fr_1.8fr] gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN */}
          <div>
            <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-[0.3em] mb-4 block" >
              THE C9 DIFFERENCE
            </span>
            <h2 className="c9-section-heading mt-4 max-w-[500px]" >
              Not a call centre. <br />A <span className="text-[#5D00D6]">partner</span> that knows your business.
            </h2>
            
            <p className="text-[14px] md:text-[16px] text-slate-600 leading-relaxed mt-6 font-normal" >
              Most IT helpdesks operate as volume-based call centres — a different technician every time, no knowledge of your environment, and no accountability for outcomes. 
            </p>
            
            <p className="text-[14px] md:text-[16px] text-slate-600 leading-relaxed mt-4 font-normal" >
              C9 operates differently. From day one we document your entire environment — your systems, your users, your priorities, and your quirks. Every technician who touches your tickets knows your business before they pick up the call.
            </p>

            <div className="flex flex-col gap-6 mt-10">
              {[
                "Dedicated account manager who owns your relationship",
                "Full environment documentation maintained and updated",
                "Proactive communication — we call you first"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110">
                      <CheckCircle size={14} className="text-[#5D00D6]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[14px] md:text-[16px] text-[#0c1024] font-bold leading-snug" >{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - MODERN COMPARISON CARDS */}
          <div className="space-y-4 md:space-y-5">
            {compared.map((row, i) => (
              <div 
                key={i} 
                className="bg-white rounded-[24px] overflow-hidden shadow-lg shadow-purple-100/30 border border-purple-50/50 flex flex-col md:flex-row shadow-sm hover:shadow-xl hover:translate-x-1 transition-all duration-300"
              >
                {/* Aspect Header - Label */}
                <div className="md:w-[35%] p-5 md:p-8 flex items-center bg-slate-50/30 border-b md:border-b-0 md:border-r border-purple-50">
                   <div className="space-y-1">
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Service Aspect</span>
                     <span className="text-[14px] md:text-[16px] font-bold text-[#0c1024] leading-tight" >
                       {row.label}
                     </span>
                   </div>
                </div>

                {/* Legacy Way */}
                <div className="md:w-[32.5%] p-5 md:p-8 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-2 mb-2 text-red-300/60">
                    <XCircle size={14} />
                    <span className="text-[11px] font-bold uppercase tracking-widest">Legacy Helpdesk</span>
                  </div>
                  <p className="text-[14px] text-slate-400 font-medium leading-[1.3]" >
                    {row.generic}
                  </p>
                </div>

                {/* The C9 Way */}
                <div className="md:w-[32.5%] p-5 md:p-8 flex flex-col justify-center bg-[#5D00D6]/5 group-hover:bg-[#5D00D6]/10 transition-colors relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2 text-[#5D00D6]">
                      <CheckCircle size={14} strokeWidth={3} />
                      <span className="text-[11px] font-black uppercase tracking-widest">The C9 Standard</span>
                    </div>
                    <p className="text-[14px] font-bold text-[#5D00D6] leading-[1.3]" >
                      {row.c9}
                    </p>
                  </div>
                  {/* Subtle Decorative Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#5D00D6]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

