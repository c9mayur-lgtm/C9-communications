import React from 'react';

const CLIENTS = ["Arthritis Australia", "Baxter", "Norris", "Stockdale & Leggo", "CHO", "Novo"];

export const LogoStrip = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <h2 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-text-secondary mb-10 font-dm-sans">
          Trusted by Australian businesses
        </h2>
        
        <div className="relative overflow-hidden">
          {/* Subtle Faders */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex gap-20 items-center justify-between whitespace-nowrap animate-marquee-custom overflow-visible w-fit">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => (
              <span key={index} className="text-[28px] md:text-[34px] font-bold text-text-primary/20 hover:text-brand-purple transition-colors font-syne pointer-events-none select-none">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
