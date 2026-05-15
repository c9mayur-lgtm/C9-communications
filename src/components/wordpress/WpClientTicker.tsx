'use client';

import React from 'react';

interface WpClientTickerProps {
  grayscale?: boolean;
  opacity?: number;
  className?: string;
}

export const WpClientTicker = ({ 
  grayscale = true, 
  opacity = 0.6,
  className = "" 
}: WpClientTickerProps) => {
  return (
    <section className={`bg-transparent py-6 md:py-10 overflow-hidden relative ${className}`}>
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
          width: 140px;
          height: 80px;
          margin: 0 15px;
          border: 1px solid rgba(0, 0, 0, 0.03);
          background: transparent;
          transition: all 0.4s ease;
          cursor: default;
          user-select: none;
        }
        @media (min-width: 768px) {
          .ticker-pill {
            width: 180px;
            height: 100px;
            margin: 0 20px;
          }
        }
        .ticker-pill:hover {
          border-color: rgba(93, 0, 214, 0.1);
          background: rgba(93, 0, 214, 0.01);
        }
        .ticker-pill img {
          max-width: 75%;
          max-height: 60%;
          transition: all 0.4s ease;
        }
        .ticker-pill:hover img {
          opacity: 1 !important;
          filter: grayscale(0%) !important;
          transform: scale(1.05);
        }
      `}</style>

      {/* Ticker Title */}
      <div className="container mx-auto px-6 max-w-[1240px] mb-8 text-center">
        <span className="c9-eyebrow !text-[#6B7280]">Trust Infrastructure & Enterprise Partners</span>
      </div>

      {/* Gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-[40px] md:w-[180px]"
        style={{ background: 'linear-gradient(to right, #ffffff 60%, transparent 100%)' }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-[40px] md:w-[180px]"
        style={{ background: 'linear-gradient(to left, #ffffff 60%, transparent 100%)' }} />

      <div className="ticker-wrapper overflow-hidden">
        <div className="ticker-row-left">
          {[
            { name: 'Arthritis',          logo: '/images/clients/Arthritis.png' },
            { name: 'CEVA Logistics',     logo: '/images/clients/CEVA_Logistics_New_Logo.png' },
            { name: 'XWise Group',        logo: '/images/clients/692eaaac9126d3e459fb23df_xwise_group_logo_full_dark_rgb.svg' },
            { name: 'Forty Winks',        logo: '/images/clients/Forty_Winks_Blue_Logo.png' },
            { name: 'Clarks',             logo: '/images/clients/Clarks-Logo.png' },
            { name: 'DCO',                logo: '/images/clients/DCOLogo-v7z.png' },
            { name: 'Luxton',             logo: '/images/clients/Luxton_Logo_Black_R.svg' },
            { name: 'Novo',               logo: '/images/clients/novo.webp' },
            { name: 'Ray White',          logo: '/images/clients/OIP.webp' },
            { name: 'Priceline Pharmacy', logo: '/images/clients/download.png' },
            { name: 'English Path',       logo: '/images/clients/OIP (1).webp' },
            { name: 'Spendless Shoes',    logo: '/images/clients/spendless-shoes-logo-600x600.webp' },
            { name: 'Stockdale & Leggo',  logo: '/images/clients/stockdale & leggo.png' },
            { name: 'Wild Rhino',         logo: '/images/clients/wild-rhino-logo_2x_cab21dc3-cddf-456a-8975-1361e177efce.webp' },
            { name: 'Chobani',            logo: '/images/clients/chobani.png' },
            { name: 'Above Zero',         logo: '/images/clients/footer-logo.svg' },
            // Duplicates for seamless loop
            { name: 'Arthritis',          logo: '/images/clients/Arthritis.png' },
            { name: 'CEVA Logistics',     logo: '/images/clients/CEVA_Logistics_New_Logo.png' },
            { name: 'XWise Group',        logo: '/images/clients/692eaaac9126d3e459fb23df_xwise_group_logo_full_dark_rgb.svg' },
            { name: 'Forty Winks',        logo: '/images/clients/Forty_Winks_Blue_Logo.png' },
            { name: 'Clarks',             logo: '/images/clients/Clarks-Logo.png' },
            { name: 'DCO',                logo: '/images/clients/DCOLogo-v7z.png' },
            { name: 'Luxton',             logo: '/images/clients/Luxton_Logo_Black_R.svg' },
            { name: 'Novo',               logo: '/images/clients/novo.webp' },
            { name: 'Ray White',          logo: '/images/clients/OIP.webp' },
            { name: 'Priceline Pharmacy', logo: '/images/clients/download.png' },
            { name: 'English Path',       logo: '/images/clients/OIP (1).webp' },
            { name: 'Spendless Shoes',    logo: '/images/clients/spendless-shoes-logo-600x600.webp' },
            { name: 'Stockdale & Leggo',  logo: '/images/clients/stockdale & leggo.png' },
            { name: 'Wild Rhino',         logo: '/images/clients/wild-rhino-logo_2x_cab21dc3-cddf-456a-8975-1361e177efce.webp' },
            { name: 'Chobani',            logo: '/images/clients/chobani.png' },
            { name: 'Above Zero',         logo: '/images/clients/footer-logo.svg' },
          ].map((c, i) => (
          <div key={i} className="ticker-pill">
              <img
                src={c.logo}
                alt={c.name}
                style={{ 
                  opacity: opacity,
                  filter: grayscale ? 'grayscale(100%)' : 'none'
                }}
                className="w-auto h-auto object-contain"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

