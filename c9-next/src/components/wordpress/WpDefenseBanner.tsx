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
  title = <>Protecting Australian organisations <br className="hidden lg:block" /> with enterprise cybersecurity</>,
  description = "Essential 8 compliance, continuous defence, and tested recovery.",
  buttonText = "Discover C9 Defense",
  href = "https://c9defense.com.au/"
}: WpDefenseBannerProps) => {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div 
          className="bg-[#0c1024] rounded-[32px] overflow-hidden shadow-2xl shadow-purple-950/20 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 min-h-[250px] md:min-h-[280px] relative group"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-[#5D00D6]/20 to-transparent blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 relative z-10 w-full md:w-auto">
            {/* Shield Icon Container */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-[24px] bg-[#1a1a2e] border border-white/5 flex items-center justify-center text-[#946CE2] shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-500">
               <Shield size={40} className="md:size-[48px]" strokeWidth={1.5} />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="c9-section-heading !text-white mb-3">
                {title}
              </h2>
              <p className="c9-body !text-white/60">
                {description}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 md:mt-0 relative z-10 w-full md:w-auto">
            <a 
              href={href} 
              target={href.startsWith('http') ? "_blank" : undefined}
              rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-[#5D00D6]/30 text-white rounded-full font-medium text-[16px] hover:bg-[#5D00D6] hover:border-[#5D00D6] transition-all duration-300 shadow-xl shadow-purple-900/10 group/btn whitespace-nowrap"
            >
              {buttonText} <ArrowRight size={20} className="ml-3 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
