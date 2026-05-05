'use client';

import React from 'react';

export const WpClientTickerV2 = () => {
  const clients = [
    { name: 'Arthritis', logo: '/images/clients/Arthritis.png' },
    { name: 'Baxter Institute', logo: '/images/clients/Baxter Institute.png' },
    { name: 'Stockdale & Leggo', logo: '/images/clients/stockdale & leggo.png' },
    { name: 'Your logo here', isPlaceholder: true },
    { name: 'Your logo here', isPlaceholder: true },
    { name: 'Your logo here', isPlaceholder: true },
  ];

  const partners = [
    { name: 'Cisco', logo: '/images/clients/cisco.png' },
    { name: 'Yealink', logo: '/images/clients/yealink.png' },
    { name: 'Poly', logo: '/images/clients/poly.png' },
    { name: 'Grandstream', logo: '/images/clients/Grandstream.png' },
    { name: 'Snom', logo: '/images/clients/snom.png' },
    { name: 'Fanvii', logo: '/images/clients/Fanvii.png' },
    { name: 'Gigaset', logo: '/images/clients/Gigaset.png' },
    { name: 'HTek', logo: '/images/clients/htek.png' },
  ];

  return (
    <section className="bg-white py-12 md:py-16 border-t border-b border-gray-100 overflow-hidden relative">
      <style>{`
        @keyframes ticker-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-row-left {
          display: flex;
          align-items: center;
          width: max-content;
          animation: ticker-left 50s linear infinite;
          will-change: transform;
        }
        .ticker-wrapper:hover .ticker-row-left {
          animation-play-state: paused;
        }
        .ticker-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          cursor: default;
          transition: all 0.4s ease;
          user-select: none;
        }
      `}</style>

      {/* Gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-[60px] md:w-[120px]"
        style={{ background: 'linear-gradient(to right, #ffffff 80%, transparent)' }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-[60px] md:w-[120px]"
        style={{ background: 'linear-gradient(to left, #ffffff 80%, transparent)' }} />

      <div className="container mx-auto px-6 max-w-[1240px]">
        {/* Carousel 1 — Trusted by Australian businesses */}
        <div className="mb-12">
          <p className="font-bold tracking-[0.2em] uppercase text-[#5D00D6] text-[11px] md:text-[14px] mb-8 text-center"
            >
            Trusted by Australian businesses
          </p>
          <div className="ticker-wrapper overflow-hidden py-2">
            <div className="ticker-row-left">
              {[...clients, ...clients].map((c, i) => (
                <div key={i} className="ticker-pill px-[25px] md:px-[50px]">
                  {c.isPlaceholder ? (
                    <div className="w-[160px] h-[40px] bg-[#E5E7EB] rounded-[4px] flex items-center justify-center">
                      <span className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider" >
                        Your logo here
                      </span>
                    </div>
                  ) : (
                    <>
                      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                      <img
                        src={c.logo}
                        alt={c.name}
                        className="h-[50px] md:h-[70px] w-auto object-contain transition-all duration-500 grayscale opacity-40 hover:grayscale-0 hover:opacity-100"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel 2 — Powered by world-class technology partners */}
        <div>
          <p className="font-bold tracking-[0.2em] uppercase text-[#5D00D6] text-[11px] md:text-[14px] mb-8 text-center"
            >
            Powered by world-class technology partners
          </p>
          <div className="ticker-wrapper overflow-hidden py-2">
            <div className="ticker-row-left" style={{ animationDirection: 'reverse' }}>
              {[...partners, ...partners].map((p, i) => (
                <div key={i} className="ticker-pill px-[25px] md:px-[50px]">
                  {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-[50px] md:h-[70px] w-auto object-contain transition-all duration-500 grayscale opacity-40 hover:grayscale-0 hover:opacity-100"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

