'use client';

import React from 'react';

interface WpClientTickerProps {
  grayscale?: boolean;
  opacity?: number;
  className?: string;
}

export const WpClientTicker = ({ 
  grayscale = true, 
  opacity = 0.4,
  className = "" 
}: WpClientTickerProps) => {
  return (
    <section className={`bg-transparent py-4 md:py-6 overflow-hidden relative ${className}`}>
      <style>{`
        @keyframes ticker-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-row-left {
          display: flex;
          align-items: center;
          width: max-content;
          animation: ticker-left 60s linear infinite;
          will-change: transform;
        }
        .ticker-wrapper:hover .ticker-row-left {
          animation-play-state: paused;
        }
        .ticker-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          white-space: nowrap;
          cursor: default;
          user-select: none;
        }
        .ticker-pill img {
          transition: opacity 0.4s ease, filter 0.4s ease, transform 0.4s ease;
        }
        .ticker-pill:hover img {
          opacity: 1 !important;
          filter: grayscale(0%) !important;
          transform: scale(1.1);
        }
      `}</style>

      {/* Gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-[60px] md:w-[120px]"
        style={{ background: 'linear-gradient(to right, #ffffff 80%, transparent)' }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-[60px] md:w-[120px]"
        style={{ background: 'linear-gradient(to left, #ffffff 80%, transparent)' }} />

      <div className="ticker-wrapper overflow-hidden">
        <div className="ticker-row-left">
          {[
            { name: 'Arthritis',          logo: '/images/clients/Arthritis.png', className: 'h-[45px] md:h-[60px]' },
            { name: 'Baxter Institute',   logo: '/images/clients/Baxter Institute.png', className: 'h-[45px] md:h-[60px]' },
            { name: 'CEVA Logistics',     logo: '/images/clients/CEVA_Logistics_New_Logo.png' },
            { name: 'XWise Group',        logo: '/images/clients/692eaaac9126d3e459fb23df_xwise_group_logo_full_dark_rgb.svg', className: 'h-[25px] md:h-[35px]' },
            { name: 'Forty Winks',        logo: '/images/clients/Forty_Winks_Blue_Logo.png' },
            { name: 'Clarks',             logo: '/images/clients/Clarks-Logo.png' },
            { name: 'DCO',                logo: '/images/clients/DCOLogo-v7z.png', className: 'h-[30px] md:h-[45px]' },
            { name: 'Luxton',             logo: '/images/clients/Luxton_Logo_Black_R.svg', className: 'h-[25px] md:h-[35px]' },
            { name: 'Norris',             logo: '/images/clients/norris_trimmed.png' },
            { name: 'Novo',               logo: '/images/clients/novo.webp' },
            { name: 'Ray White',          logo: '/images/clients/OIP.webp' },
            { name: 'Priceline Pharmacy', logo: '/images/clients/download.png' },
            { name: 'English Path',       logo: '/images/clients/OIP (1).webp' },
            { name: 'Spendless Shoes',    logo: '/images/clients/spendless-shoes-logo-600x600.webp' },
            { name: 'Stockdale & Leggo',  logo: '/images/clients/stockdale & leggo.png' },
            { name: 'Wild Rhino',         logo: '/images/clients/wild-rhino-logo_2x_cab21dc3-cddf-456a-8975-1361e177efce.webp' },
            { name: 'Chobani',            logo: '/images/clients/chobani.png', className: 'h-[20px] md:h-[30px]' },
            // Duplicates
            { name: 'Arthritis',          logo: '/images/clients/Arthritis.png', className: 'h-[45px] md:h-[60px]' },
            { name: 'Baxter Institute',   logo: '/images/clients/Baxter Institute.png', className: 'h-[45px] md:h-[60px]' },
            { name: 'CEVA Logistics',     logo: '/images/clients/CEVA_Logistics_New_Logo.png' },
            { name: 'XWise Group',        logo: '/images/clients/692eaaac9126d3e459fb23df_xwise_group_logo_full_dark_rgb.svg', className: 'h-[25px] md:h-[35px]' },
            { name: 'Forty Winks',        logo: '/images/clients/Forty_Winks_Blue_Logo.png' },
            { name: 'Clarks',             logo: '/images/clients/Clarks-Logo.png' },
            { name: 'DCO',                logo: '/images/clients/DCOLogo-v7z.png', className: 'h-[30px] md:h-[45px]' },
            { name: 'Luxton',             logo: '/images/clients/Luxton_Logo_Black_R.svg', className: 'h-[25px] md:h-[35px]' },
            { name: 'Norris',             logo: '/images/clients/norris_trimmed.png' },
            { name: 'Novo',               logo: '/images/clients/novo.webp' },
            { name: 'Ray White',          logo: '/images/clients/OIP.webp' },
            { name: 'Priceline Pharmacy', logo: '/images/clients/download.png' },
            { name: 'English Path',       logo: '/images/clients/OIP (1).webp' },
            { name: 'Spendless Shoes',    logo: '/images/clients/spendless-shoes-logo-600x600.webp' },
            { name: 'Stockdale & Leggo',  logo: '/images/clients/stockdale & leggo.png' },
            { name: 'Wild Rhino',         logo: '/images/clients/wild-rhino-logo_2x_cab21dc3-cddf-456a-8975-1361e177efce.webp' },
            { name: 'Chobani',            logo: '/images/clients/chobani.png', className: 'h-[20px] md:h-[30px]' },
          ].map((c, i) => (
          <div key={i} className="ticker-pill px-[25px] md:px-[50px]">
              <img
                src={c.logo}
                alt={c.name}
                style={{ 
                  opacity: opacity,
                  filter: grayscale ? 'grayscale(100%)' : 'none'
                }}
                className={`w-auto object-contain ${c.className || 'h-[40px] md:h-[60px]'}`}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

