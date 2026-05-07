'use client';

import React from 'react';

export const WpClientTicker = () => {
  return (
    <section className="bg-white py-8 md:py-10 border-t border-b border-gray-100 overflow-hidden relative">
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
        className="text-center font-bold tracking-[0.1em] md:tracking-[0.3em] uppercase text-[#5D00D6] text-[11px] md:text-[14px] mb-4 md:mb-6 px-4 font-sans"
        >
        Trusted by leading Australian businesses
      </p>

      {/* Gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-[40px] md:w-[100px]"
        style={{ background: 'linear-gradient(to right, #ffffff 80%, transparent)' }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-[40px] md:w-[100px]"
        style={{ background: 'linear-gradient(to left, #ffffff 80%, transparent)' }} />

      <div className="ticker-wrapper overflow-hidden py-2 md:py-4">
        <div className="ticker-row-left" style={{ animationDuration: '60s' }}>
          {[
            { name: 'Arthritis',          logo: '/images/clients/Arthritis.png', className: 'h-[55px] md:h-[70px] lg:h-[90px]' },
            { name: 'Baxter Institute',   logo: '/images/clients/Baxter Institute.png', className: 'h-[55px] md:h-[70px] lg:h-[90px]' },
            { name: 'CEVA Logistics',     logo: '/images/clients/CEVA_Logistics_New_Logo.png' },
            { name: 'XWise Group',        logo: '/images/clients/692eaaac9126d3e459fb23df_xwise_group_logo_full_dark_rgb.svg', className: 'h-[30px] md:h-[40px] lg:h-[55px]' },
            { name: 'Forty Winks',        logo: '/images/clients/Forty_Winks_Blue_Logo.png' },
            { name: 'Clarks',             logo: '/images/clients/Clarks-Logo.png' },
            { name: 'DCO',                logo: '/images/clients/DCOLogo-v7z.png', className: 'h-[40px] md:h-[55px] lg:h-[70px]' },
            { name: 'Luxton',             logo: '/images/clients/Luxton_Logo_Black_R.svg', className: 'h-[30px] md:h-[40px] lg:h-[55px]' },
            { name: 'Norris',             logo: '/images/clients/norris_trimmed.png' },
            { name: 'Novo',               logo: '/images/clients/novo.webp' },
            { name: 'Ray White',          logo: '/images/clients/OIP.webp' },
            { name: 'Priceline Pharmacy', logo: '/images/clients/download.png' },
            { name: 'English Path',       logo: '/images/clients/OIP (1).webp' },
            { name: 'Spendless Shoes',    logo: '/images/clients/spendless-shoes-logo-600x600.webp' },
            { name: 'Stockdale & Leggo',  logo: '/images/clients/stockdale & leggo.png' },
            { name: 'Wild Rhino',         logo: '/images/clients/wild-rhino-logo_2x_cab21dc3-cddf-456a-8975-1361e177efce.webp' },
            { name: 'Chobani',            logo: '/images/clients/chobani.png', className: 'h-[25px] md:h-[35px] lg:h-[45px]' },
            // Duplicates for seamless loop
            { name: 'Arthritis',          logo: '/images/clients/Arthritis.png', className: 'h-[55px] md:h-[70px] lg:h-[90px]' },
            { name: 'Baxter Institute',   logo: '/images/clients/Baxter Institute.png', className: 'h-[55px] md:h-[70px] lg:h-[90px]' },
            { name: 'CEVA Logistics',     logo: '/images/clients/CEVA_Logistics_New_Logo.png' },
            { name: 'XWise Group',        logo: '/images/clients/692eaaac9126d3e459fb23df_xwise_group_logo_full_dark_rgb.svg', className: 'h-[30px] md:h-[40px] lg:h-[55px]' },
            { name: 'Forty Winks',        logo: '/images/clients/Forty_Winks_Blue_Logo.png' },
            { name: 'Clarks',             logo: '/images/clients/Clarks-Logo.png' },
            { name: 'DCO',                logo: '/images/clients/DCOLogo-v7z.png', className: 'h-[40px] md:h-[55px] lg:h-[70px]' },
            { name: 'Luxton',             logo: '/images/clients/Luxton_Logo_Black_R.svg', className: 'h-[30px] md:h-[40px] lg:h-[55px]' },
            { name: 'Norris',             logo: '/images/clients/norris_trimmed.png' },
            { name: 'Novo',               logo: '/images/clients/novo.webp' },
            { name: 'Ray White',          logo: '/images/clients/OIP.webp' },
            { name: 'Priceline Pharmacy', logo: '/images/clients/download.png' },
            { name: 'English Path',       logo: '/images/clients/OIP (1).webp' },
            { name: 'Spendless Shoes',    logo: '/images/clients/spendless-shoes-logo-600x600.webp' },
            { name: 'Stockdale & Leggo',  logo: '/images/clients/stockdale & leggo.png' },
            { name: 'Wild Rhino',         logo: '/images/clients/wild-rhino-logo_2x_cab21dc3-cddf-456a-8975-1361e177efce.webp' },
            { name: 'Chobani',            logo: '/images/clients/chobani.png', className: 'h-[25px] md:h-[35px] lg:h-[45px]' },
          ].map((c, i) => (
            <div key={i} className="group ticker-pill px-[20px] md:px-[40px]">
              {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
              <img
                src={c.logo}
                alt={c.name}
                className={`w-auto object-contain transition-all duration-500 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 ${c.className || 'h-[50px] md:h-[70px] lg:h-[90px]'}`}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

