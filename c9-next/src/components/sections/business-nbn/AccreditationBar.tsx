'use client';

import { motion } from 'framer-motion';

const accreditations = [
  { name: 'ACMA', src: '/partners/accreditation/Acma_logo.svg', className: 'h-10 md:h-13 w-auto' },
  { name: 'APNIC', src: '/partners/accreditation/APNIC_logo.svg', className: 'h-8 md:h-10 w-auto' },
  { name: 'NBN Co', src: '/partners/accreditation/NBN_Co-Logo.wine.svg', className: 'h-18 md:h-28 w-auto' },
  { name: 'TTF', src: '/partners/accreditation/TTF_Logo-01-2048x2048.png', className: 'h-18 md:h-26 w-auto' },
];

export default function AccreditationBar() {
  const tickerItems = [...accreditations, ...accreditations];

  return (
    <section
      className="w-full bg-white py-12 md:py-14 border-y border-gray-100 overflow-hidden"
      style={{ fontFamily: '"Proxima Nova", sans-serif' }}
    >
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#9CA3AF] text-center font-bold block mb-12">
          IN COMPLIANCE WITH AND ACCREDITED BY
        </span>
        
        <div className="relative">
          {/* Edge Faders */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          {/* Marquee Container */}
          <div className="flex overflow-hidden">
            <div className="flex items-center gap-16 md:gap-24 lg:gap-32 shrink-0 py-4 animate-marquee-custom hover:pause cursor-pointer" style={{ animationDuration: '40s' }}>
              {tickerItems.map((logo, index) => (
                <div 
                  key={`${logo.name}-${index}`} 
                  className="flex items-center justify-center grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                >
                   <img 
                     src={logo.src} 
                     alt={logo.name} 
                     className={`${logo.className} object-contain pointer-events-none`}
                   />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
