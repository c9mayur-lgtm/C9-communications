import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fontStyle = { fontFamily: '"Proxima Nova", sans-serif' };

export default function IndustriesHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white border-b border-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#5D00D6]/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] text-center relative z-10">
        <span className="text-[#5D00D6] text-[13px] font-bold uppercase tracking-[0.3em] mb-6 block" style={fontStyle}>
          INDUSTRY SOLUTIONS
        </span>
        <h1 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold text-[#0c1024] leading-[1.05] tracking-tight mb-8 max-w-4xl mx-auto" style={fontStyle}>
          Technology tailored to the way your industry works.
        </h1>
        <p className="text-[18px] md:text-[20px] lg:text-[22px] text-slate-600 mb-12 max-w-2xl mx-auto font-normal leading-relaxed" style={fontStyle}>
          Generic IT doesn't solve specific industry problems. We've built managed IT and Telco stacks designed for the unique compliance, connectivity, and performance requirements of Australian business sectors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#industry-grid" passHref>
                <Button size="lg" className="bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-bold h-14 px-10 rounded-full border-none shadow-xl shadow-purple-900/20 group" style={fontStyle}>
                    Explore Industries <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
