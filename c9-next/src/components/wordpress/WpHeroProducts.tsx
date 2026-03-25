'use client';

import React from 'react';
import { Shield, Lock, Globe, Phone, Monitor, Cloud, Headphones, Printer, Wifi, Fingerprint, ChevronLeft, ChevronRight } from 'lucide-react';

const PRODUCTS = [
  { label: 'Managed IT Support', icon: Shield },
  { label: 'Cyber Security', icon: Lock },
  { label: 'Fibre & SD-WAN', icon: Globe },
  { label: 'Cloud Voice & Mobiles', icon: Phone },
  { label: 'M365 & Hardware', icon: Monitor },
  { label: 'Cloud Infrastructure', icon: Cloud },
  { label: '24/7 Service Desk', icon: Headphones },
  { label: 'NBN & Starlink', icon: Wifi },
  { label: 'Print Solutions', icon: Printer },
  { label: 'Compliance & E8', icon: Fingerprint },
];

export const WpHeroProducts = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-50">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        {/* Header Area following the Page's "Regular Pattern" */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#5D00D6] text-[13px] font-bold uppercase tracking-[0.3em] mb-4 block" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>Our products</span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#0c1024] leading-[1.1] tracking-tight mb-6" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
              Strategic solutions tailored to your unique challenges.
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed max-w-[640px] font-medium">
              Explore our core service pillars — built to scale, secured by design, and managed by our Australian expert team.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-[#5D00D6] bg-white border border-[#5D00D6]/10 hover:bg-[#5D00D6] hover:text-white transition-all shadow-xl shadow-purple-900/5"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-[#5D00D6] hover:bg-[#4c00b0] transition-all shadow-xl shadow-purple-900/20"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Product Card Row using a horizontal scroll container */}
        <div className="relative group/container">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
          >
            {PRODUCTS.map((product, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center gap-6 group cursor-pointer text-center min-w-[200px] md:min-w-[220px] snap-start bg-white border border-gray-100/60 rounded-[28px] p-8 hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500"
              >
                {/* Icon Container (Homepage Style) */}
                <div className="text-[#5D00D6] transition-transform duration-300 group-hover:-translate-y-1.5 opacity-90">
                  <product.icon size={46} strokeWidth={1.5} />
                </div>
                
                {/* Product Label */}
                <span className="text-[14px] md:text-[16px] font-bold text-[#0c1024] tracking-tight transition-colors group-hover:text-[#5D00D6]" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                  {product.label}
                </span>
              </div>
            ))}
          </div>

          {/* Subtle Right Fade Gradient */}
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block" />
        </div>
      </div>
    </section>
  );
};
