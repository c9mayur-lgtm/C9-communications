import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, ShieldCheck } from "lucide-react";

export default function SLACommitment() {
  const rows = [
    {
      priority: "P1 Critical",
      badgeColor: "bg-red-50 text-red-600 border-red-200",
      what: "Business-wide outage or active security incident",
      response: "< 1 hour",
      resolution: "< 4 hours"
    },
    {
      priority: "P2 High",
      badgeColor: "bg-amber-50 text-amber-600 border-amber-200",
      what: "Multiple users impacted, no workaround available",
      response: "< 4 hours",
      resolution: "< 8 hours"
    },
    {
      priority: "P3 Medium",
      badgeColor: "bg-sky-50 text-sky-600 border-sky-200",
      what: "Single user impacted, workaround available",
      response: "< 8 hours",
      resolution: "Next business day"
    },
    {
      priority: "P4 Low",
      badgeColor: "bg-slate-50 text-slate-500 border-slate-200",
      what: "Minor request, no operational impact",
      response: "< 1 business day",
      resolution: "Scheduled"
    }
  ];

  return (
    <section id="sla-section" className="w-full bg-white py-12 md:py-16 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN */}
          <div>
            <span className="text-[#5D00D6] text-[13px] font-bold uppercase tracking-[0.3em] mb-4 block" >
              RESPONSE SLAs
            </span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#0c1024] mt-4 leading-[1.1] tracking-tight" >
              Defined response times. <br /><span className="text-[#5D00D6]">Not estimates.</span>
            </h2>
            <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed mt-6 max-w-[560px] font-normal" >
              Every ticket C9 receives is assigned a priority level based on business impact. Response and resolution targets are defined in your agreement — and we report against them monthly so you always know if we're hitting them.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
              {rows.map((row, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-[24px] border border-gray-100 p-6 md:p-8 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-[#5D00D6]/10 hover:border-[#5D00D6]/20 transition-all duration-300 group flex flex-col justify-between"
                  
                >
                  <div className="mb-6">
                    <div className="flex justify-between items-start mb-5">
                      <Badge variant="outline" className={`${row.badgeColor} px-3 py-1 font-bold text-[10px] uppercase tracking-[0.15em] rounded-full`}>
                        {row.priority}
                      </Badge>
                    </div>
                    <h4 className="text-[15px] md:text-[16px] font-normal text-slate-600 leading-[1.5] tracking-tight">
                      {row.what}
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-6 border-t border-gray-100 flex-shrink-0">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-[#5D00D6]" />
                        Response
                      </div>
                      <div className="text-[14px] md:text-[15px] font-semibold text-[#5D00D6] whitespace-nowrap">
                        {row.response}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-slate-300" />
                        Resolution
                      </div>
                      <div className="text-[14px] md:text-[15px] font-semibold text-slate-500 whitespace-nowrap">
                        {row.resolution}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-2 mt-6 text-slate-400 font-medium text-[14px]" >
              <Clock size={16} />
              <span>Standard SLAs apply during business hours. 24/7 coverage available on select plans.</span>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:sticky lg:top-32 h-full">
            <div className="bg-[#0c1024] rounded-[32px] p-10 text-white relative overflow-hidden shadow-2xl border border-white/5">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#5D00D6] rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-[#5D00D6]/20">
                    <ShieldCheck size={28} className="text-white" />
                </div>
                <h3 className="text-[18px] md:text-[28px] font-bold text-white leading-tight mb-4" >
                  Full transparency. <br />Monthly accountability.
                </h3>
                <p className="text-[16px] text-slate-400 leading-relaxed mb-10 font-normal" >
                  We don't just promise results — we prove them. Every month, you'll receive a performance report covering:
                </p>
                
                <div className="space-y-6">
                  {[
                    "Total tickets logged and resolved within SLAs",
                    "Average response and resolution time trends",
                    "SLA compliance rate vs previous periods",
                    "Repeat issue trends and hardware recommendations",
                    "Open items and engineering pending actions"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full bg-[#5D00D6] flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-[#5D00D6]/30">
                        <CheckCircle size={12} className="text-white" strokeWidth={3} />
                      </div>
                      <span className="text-[15px] text-slate-200 leading-snug font-medium" >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <span className="text-[#5D00D6] text-[13px] font-bold uppercase tracking-[0.2em]" >
                    Zero Extra Charge. Built-in Accountability.
                  </span>
                </div>
              </div>

              {/* Decorative Gradient */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#5D00D6]/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#5D00D6]/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

