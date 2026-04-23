'use client';

import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export interface WpDefenseBannerProps {
  title?: React.ReactNode;
  description?: string;
  buttonText?: string;
  href?: string;
}

export const WpDefenseBanner = ({
  title = <>Security is embedded in operations <br className="hidden lg:block" /> — not a separate service</>,
  description = "Continuous monitoring, threat visibility, and structured incident response with compliance-aligned logging.",
  buttonText = "View Security Model",
  href = "/managed-it"
}: WpDefenseBannerProps) => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div 
          className="bg-[#0c1024] rounded-[24px] overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between p-6 md:px-10 md:py-8 relative group border border-white/5"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-[300px] h-full bg-gradient-to-l from-[#5D00D6]/15 to-transparent blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 relative z-10 w-full md:w-auto">
            {/* Shield Icon Container */}
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#1a1a2e] border border-white/5 flex items-center justify-center text-[#946CE2] shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-500">
               <Shield size={24} className="md:size-[28px]" strokeWidth={1.5} />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="text-[20px] md:text-[22px] font-bold text-white mb-1 leading-tight tracking-tight">
                {typeof title === 'string' ? title.replace('#5D00D6', '#a56eff') : title}
              </h2>
              <p className="text-[14px] text-white font-medium leading-relaxed max-w-[600px]">
                {description}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6 md:mt-0 relative z-10 w-full md:w-auto">
            <a 
              href={href} 
              target={href.startsWith('http') ? "_blank" : undefined}
              rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center px-7 py-3 bg-[#5D00D6]/10 border border-[#5D00D6]/30 text-white rounded-full c9-button-label hover:bg-[#5D00D6] hover:border-[#5D00D6] transition-all duration-300 group/btn whitespace-nowrap"
            >
              {buttonText} <ArrowRight size={16} className="ml-2.5 shrink-0 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
