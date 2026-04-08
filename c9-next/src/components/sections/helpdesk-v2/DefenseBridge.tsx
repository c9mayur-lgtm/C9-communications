import React from "react";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DefenseBridge() {
  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="bg-[#0c1024] rounded-[32px] border border-white/5 px-8 py-10 md:px-12 md:py-12 flex flex-col lg:flex-row gap-10 items-start lg:items-center justify-between relative overflow-hidden shadow-2xl shadow-blue-900/40">
          
          <div className="flex flex-col md:flex-row items-start gap-8 flex-1 relative z-10">
            <div className="w-16 h-16 bg-[#5D00D6] rounded-[20px] flex items-center justify-center shrink-0 shadow-lg shadow-[#5D00D6]/20">
                <Shield size={32} className="text-white" strokeWidth={2.5} />
            </div>
            <div className="max-w-[700px]">
                <h3 className="text-[28px] md:text-[36px] font-medium text-white mb-4 leading-tight tracking-tight" >
                    Security incidents need more <span className="text-[#5D00D6]">than helpdesk.</span>
                </h3>
                <p className="text-[15px] md:text-[16px] text-slate-300 leading-relaxed font-normal" >
                    When your team is facing a potential breach, ransomware, or active threat — C9 Defense provides continuous monitoring and incident response so helpdesk is never your only line of defence.
                </p>
            </div>
          </div>

          <Link href="/c9-defense" className="shrink-0 relative z-10 w-full lg:w-auto" passHref>
            <Button className="w-full lg:w-auto shadow-2xl hover:gap-6 group bg-white hover:bg-slate-100 text-[#0c1024] font-bold h-14 px-8 rounded-full transition-all duration-300" >
              Learn About C9 Defense <ArrowRight className="transition-transform group-hover:translate-x-1 ml-2 text-[#5D00D6]" />
            </Button>
          </Link>

          {/* Decorative Gradients */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-[#5D00D6]/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#5D00D6]/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

