'use client';

import React from 'react';
import { 
  Shield, 
  Globe, 
  Phone, 
  Monitor, 
  Cloud, 
  Headphones, 
  Printer, 
  Wifi, 
  Fingerprint, 
  ChevronLeft, 
  ChevronRight,
  Server,
  Network,
  FileText,
  Laptop
} from 'lucide-react';

const PRODUCTS = [
  { label: 'Managed Infrastructure', icon: Server },
  { label: 'Enterprise Fibre', icon: Wifi },
  { label: 'Managed Cyber Security', icon: Shield },
  { label: 'Microsoft 365 Ops', icon: Laptop },
  { label: 'Teams Calling & Voice', icon: Phone },
  { label: 'Public & Hybrid Cloud', icon: Cloud },
  { label: 'SD-WAN & Network Ops', icon: Network },
  { label: 'Managed Service Desk', icon: Headphones },
  { label: 'Strategic IT Advisory', icon: FileText },
  { label: 'Asset & Device Lifecycle', icon: Monitor },
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
            <span className="c9-eyebrow mb-6 block">INFRASTRUCTURE OPERATIONS</span>
            <h2 className="c9-section-heading mb-8">
              Operational detail for IT, Telco, and Security—operated as a single controlled system.
            </h2>
            <p className="c9-body mb-8 max-w-[640px]">
              We eliminate vendor silos. No gaps. No blame shifting.
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
                <span className="c9-card-title !text-[14px] md:!text-[16px] transition-colors group-hover:text-[#5D00D6]">
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
