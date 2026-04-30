import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

const FONT_FAMILY = { fontFamily: "'Proxima Nova', sans-serif" };

export default function DefenseBridge() {
  return (
    <section className="bg-white py-12" style={FONT_FAMILY}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1000px] w-full">
        <div className="bg-[#0c1024] rounded-2xl flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-[300px] h-full bg-gradient-to-l from-[#5D00D6]/10 to-transparent blur-3xl pointer-events-none" />

          {/* Icon Box */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#16162a] border border-white/5 flex items-center justify-center shrink-0 z-10">
            <Shield size={28} className="text-[#946CE2]" strokeWidth={1.5} />
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-3 z-10">
            <div className="flex flex-col">
              <h3 className="c9-section-heading !text-white !leading-none">
                Cloud security needs more <br className="hidden md:block" />
                <span className="text-[#5D00D6] !text-[inherit]">than standard management.</span>
              </h3>
            </div>
            <p className="text-[14px] font-medium text-white/50 leading-relaxed font-sans max-w-[700px]">
              Cloud environments without proper security governance are one of the most common attack surfaces for Australian businesses. C9 Defense extends cloud security to include Essential 8 compliance, continuous monitoring of your cloud environment, and tested recovery for cloud-hosted workloads.
            </p>
          </div>

          {/* Button */}
          <div className="shrink-0 z-10 mt-2 md:mt-0">
            <a 
              href="https://c9defense.com.au/"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-[#5D00D6]/40 text-white rounded-full font-bold text-[14px] hover:bg-[#5D00D6] hover:border-[#5D00D6] transition-all duration-300"
            >
              Learn About C9 Defense <ArrowRight size={16} className="ml-2" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
