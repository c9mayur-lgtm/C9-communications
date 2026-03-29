'use client';

import React from 'react';

export const WpClientTicker = () => {
  return (
    <section className="bg-white py-12 md:py-16 border-t border-b border-gray-100 overflow-hidden relative">
      <style>{`
        @keyframes ticker-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ticker-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .ticker-row-left {
          display: flex;
          align-items: center;
          width: max-content;
          animation: ticker-left 40s linear infinite;
          will-change: transform;
        }
        .ticker-row-right {
          display: flex;
          align-items: center;
          width: max-content;
          animation: ticker-right 44s linear infinite;
          will-change: transform;
        }
        .ticker-wrapper:hover .ticker-row-left,
        .ticker-wrapper:hover .ticker-row-right {
          animation-play-state: paused;
        }
        .ticker-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          white-space: nowrap;
          cursor: default;
          transition: all 0.4s ease;
          user-select: none;
        }
      `}</style>

      {/* Heading */}
      <p
        className="text-center font-bold tracking-[0.1em] md:tracking-[0.3em] uppercase text-[#5D00D6] text-[11px] md:text-[13px] mb-6 md:mb-10 px-4 font-sans"
        style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
        Trusted by leading Australian businesses
      </p>

      {/* Gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-[40px] md:w-[100px]"
        style={{ background: 'linear-gradient(to right, #ffffff 80%, transparent)' }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-[40px] md:w-[100px]"
        style={{ background: 'linear-gradient(to left, #ffffff 80%, transparent)' }} />

      <div className="ticker-wrapper overflow-hidden py-4 md:py-8">
        <div className="ticker-row-left" style={{ animationDuration: '60s' }}>
          {[
            { name: 'Arthritis',        logo: '/images/clients/Arthritis.png' },
            { name: 'Baxter Institute', logo: '/images/clients/Baxter Institute.png' },
            { name: 'Fanvii',           logo: '/images/clients/Fanvii.png' },
            { name: 'Gigaset',          logo: '/images/clients/Gigaset.png' },
            { name: 'Grandstream',      logo: '/images/clients/Grandstream.png' },
            { name: 'Cisco',            logo: '/images/clients/cisco.png' },
            { name: 'HTek',               logo: '/images/clients/htek.png' },
            { name: 'Poly',               logo: '/images/clients/poly.png' },
            { name: 'Snom',               logo: '/images/clients/snom.png' },
            { name: 'Stockdale & Leggo',  logo: '/images/clients/stockdale & leggo.png' },
            { name: 'Yealink',            logo: '/images/clients/yealink.png' },
            // Duplicates for seamless loop
            { name: 'Arthritis',        logo: '/images/clients/Arthritis.png' },
            { name: 'Baxter Institute', logo: '/images/clients/Baxter Institute.png' },
            { name: 'Fanvii',           logo: '/images/clients/Fanvii.png' },
            { name: 'Gigaset',          logo: '/images/clients/Gigaset.png' },
            { name: 'Grandstream',      logo: '/images/clients/Grandstream.png' },
            { name: 'Cisco',            logo: '/images/clients/cisco.png' },
            { name: 'HTek',               logo: '/images/clients/htek.png' },
            { name: 'Poly',               logo: '/images/clients/poly.png' },
            { name: 'Snom',               logo: '/images/clients/snom.png' },
            { name: 'Stockdale & Leggo',  logo: '/images/clients/stockdale & leggo.png' },
            { name: 'Yealink',            logo: '/images/clients/yealink.png' },
          ].map((c, i) => (
            <div key={i} className="ticker-pill group px-[20px] md:px-[40px]">
              <img
                src={c.logo}
                alt={c.name}
                className="h-[60px] md:h-[80px] lg:h-[110px] w-auto object-contain transition-all duration-500 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
