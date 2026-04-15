import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#fcfaff] py-12 md:py-20 border-y border-purple-50">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="bg-[#0c1024] rounded-[48px] px-8 py-16 md:px-16 md:py-24 text-center relative overflow-hidden shadow-2xl shadow-purple-900/40 group transition-all duration-700 hover:scale-[1.01]">
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-[0.4em] mb-8 block" >
              GET STARTED
            </span>
            
            <h2 className="c9-section-heading lg: font-medium !text-white mb-10" >
              Ready to fix your <br /><span className="text-[#5D00D6]">helpdesk experience?</span>
            </h2>

            <p className="text-[18px] md:text-[18px] text-slate-300 mb-12 max-w-[600px] leading-relaxed font-normal" >
              Switch to a helpdesk that actually shows up, knows your business, and takes accountability for every ticket.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto">
              <Link href="#proposal" className="w-full sm:w-auto" passHref>
                <Button size="lg" className="w-full sm:w-auto shadow-2xl hover:gap-6 group bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-bold h-16 px-10 rounded-full border-none text-[17px]" >
                  Request a Proposal <ArrowRight className="transition-transform group-hover:translate-x-1 ml-2" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto" passHref>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white font-bold h-16 px-10 rounded-full hover:bg-white hover:text-[#0c1024] transition-all bg-transparent text-[17px] border-2" >
                  Speak to an Expert
                </Button>
              </Link>
            </div>
          </div>

          {/* BACKGROUND DECORATIONS */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(93,0,214,0.15)_0,transparent_70%)] pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-[300px] h-[300px] bg-[#5D00D6]/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[300px] h-[300px] bg-[#5D00D6]/5 blur-[100px] rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

