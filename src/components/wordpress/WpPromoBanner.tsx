'use client';
import React from 'react';
import Link from 'next/link';

interface WpPromoBannerProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  disclaimer?: string;
}

export const WpPromoBanner = ({
  eyebrow = "LIMITED OFFER",
  title = "GET UP TO $1,000 REBATES ON ENTERPRISE ETHERNET",
  description = "Future-proof your business with dedicated fibre and we'll cover the transition costs. Rapid deployment within available footprints.",
  ctaText = "Check eligibility",
  ctaHref = "/telco/enterprise-ethernet",
  imageSrc = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1500",
  disclaimer = "*Terms and conditions map to standard service agreements."
}: WpPromoBannerProps) => {
  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid md:grid-cols-2 relative bg-[#0c1024] rounded-[32px] overflow-hidden shadow-2xl shadow-purple-900/40">
          
          <div className="p-8 md:p-20 flex flex-col justify-center relative z-20">
            <span className="text-[#00FF00] text-[12px] font-bold uppercase tracking-[0.2em] mb-4 block">{eyebrow}</span>
            <h2 className="c9-section-heading !text-white mb-6">
              {title}
            </h2>
            <p className="text-gray-300 text-[18px] font-normal leading-relaxed mb-10 max-w-lg">
              {description}
            </p>
            <div>
              <a
                href={ctaHref}
                onClick={(e) => {
                  if (ctaHref.startsWith('#')) {
                    e.preventDefault();
                    document.querySelector(ctaHref)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-10 py-4 bg-[#5D00D6] hover:bg-[#4d00b3] text-white rounded-lg transition-colors c9-button-label"
              >
                {ctaText}
              </a>
            </div>
            <p className="text-[11px] text-gray-500 mt-6">{disclaimer}</p>
          </div>

          <div className="hidden md:block relative bg-gray-900 z-0">
             <img 
               src={imageSrc} 
               alt="Promo Banner" 
               className="absolute inset-0 w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 border-l-[4px] border-[#5D00D6] blur-sm"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
