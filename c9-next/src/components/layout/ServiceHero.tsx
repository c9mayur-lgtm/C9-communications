import React from 'react';
import { ArrowRight } from 'lucide-react';
import { C9Button } from "@/components/design-system/C9Button";

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  ctaText?: string;
  bgImage?: string;
}

export const ServiceHero = ({ 
  eyebrow, 
  title, 
  description, 
  ctaText = "Schedule a Free Consultation",
  bgImage
}: ServiceHeroProps) => {
  return (
    <section 
      className="relative pt-8 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20 overflow-hidden bg-[#001968] bg-no-repeat bg-cover bg-[center_right_10%]"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      {/* Background Image Layer */}
      {bgImage && (
        <div 
          className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-[center_right_10%]"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Gradient Overlay: Darker on left for text, transparent on right for arrow */}
      <div className={`absolute inset-0 z-10 ${bgImage ? 'bg-gradient-to-r from-black/85 via-black/50 to-transparent' : 'bg-gradient-to-br from-[#001968] via-[#012FB7] to-[#001968]'}`} />
      
      {/* Abstract Dot Pattern */}
      {!bgImage && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-20 pointer-events-none z-20 hidden lg:block">
          <div className="w-full h-full bg-[radial-gradient(#C6D4F9_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
      )}

      <div className="container mx-auto px-6 md:px-8 relative z-30 max-w-[1240px]">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Pill Tag */}
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-6 transition-all hover:bg-white/20">
            <span className="text-white text-[11px] font-bold uppercase tracking-[0.2em]">
              {eyebrow}
            </span>
          </div>

          <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] font-semibold text-white leading-[1.05] tracking-tight mb-5" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
            {title}
          </h1>
          
          <p className="text-[17px] md:text-[18px] lg:text-[19px] text-white/85 mb-8 max-w-xl leading-relaxed font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <C9Button size="lg" className="min-w-[240px] shadow-2xl shadow-purple-900/40">
              {ctaText} <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </C9Button>
          </div>
        </div>
      </div>
    </section>
  );
};
