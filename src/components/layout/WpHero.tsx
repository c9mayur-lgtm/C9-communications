'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';

import { useAudience } from '@/components/context/AudienceContext';
import { HeroHighlighter } from '@/components/common/HeroHighlighter';

export const WpHero = () => {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '/business' || pathname === '/greenfield' || pathname === '/enterprise';
  const { audience } = useAudience();

  const paddingClass = isHome
    ? "pt-20 pb-10 md:pt-28 md:pb-12 lg:pt-32 lg:pb-14"
    : "pt-4 pb-10 md:pt-6 md:pb-12 lg:pt-8 lg:pb-14";

  const content = {
    startup: {
      title: "Focus on your product.\nWe'll build your platform.",
      description: "One partner. Total IT & Telco infrastructure. We manage the logic, the security, and the connectivity so you can scale faster.",
      cta1: "Get Complete Launch Plan",
      cta1Href: "#consultation-section",
      cta2: "View Startup Packages",
      cta2Href: "/solutions",
      tags: ["End-to-End Setup", "nbn® Fast Fiber", "Secure Office IT"],
      image: "/images/hero_startup.png"
    },
    business: {
      title: "From Setup to Scale — We Run Your Entire IT, Telco & Workplace",
      description: "No vendors. No coordination. No downtime.\nWe design, deliver, and manage everything.",
      cta1: "Get Complete Setup Plan",
      cta1Href: "#consultation-section",
      cta2: "Talk to an Expert",
      cta2Href: "tel:1300293332",
      tags: ["Managed IT & Telco", "Switch & Upgrade", "System Optimization"],
      image: "/images/hero_business.png"
    },
    enterprise: {
      title: "Enterprise IT, Telco & Workplace — Controlled as One System",
      description: "Replace fragmented vendors with a single accountable operational layer across all locations.",
      cta1: "Book Enterprise Consultation",
      cta1Href: "#consultation-section",
      cta2: "Review Enterprise Capability",
      cta2Href: "#capabilities-section",
      tags: ["Single Operational Control", "Vendor Consolidation", "Multi-Site Standardization"],
      image: "/images/hero_enterprise.png"
    }
  };

  const activeContent = content[audience as keyof typeof content] || content.business;

  const handlePrimaryCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = activeContent.cta1Href;
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <>
    <section className={`${paddingClass} relative overflow-hidden min-h-[520px] lg:min-h-[600px]`}>

      {/* ── Mobile/Tablet: full-bleed background image with overlay ── */}
      <div className="absolute inset-0 xl:hidden">
        <img
          src={activeContent.image}
          alt={activeContent.title}
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1024]/80 via-[#0c1024]/70 to-[#0c1024]/90" />
        <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay" />
      </div>

      {/* ── Desktop: white background ── */}
      <div className="absolute inset-0 hidden xl:block bg-white" />

      <div className="container mx-auto px-6 md:px-8 w-full relative z-10" style={{ maxWidth: '1240px' }}>
        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-6 xl:gap-8 items-center w-full">

          {/* Text column */}
          <div className="py-4 pr-0 xl:pr-6">
            <h1 className="c9-hero-title mb-5 whitespace-pre-line xl:text-slate-900 text-white">
              {activeContent.title}
            </h1>
            <p className="c9-body mb-8 max-w-[550px] whitespace-pre-line xl:text-slate-600 text-white/80">
              {activeContent.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href={activeContent.cta1Href}
                onClick={handlePrimaryCta}
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-colors shadow-xl shadow-purple-900/30 group"
              >
                {activeContent.cta1}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={activeContent.cta2Href}
                className="inline-flex items-center justify-center gap-2 border-2 border-white xl:border-[#5D00D6] text-white xl:text-[#5D00D6] rounded-full h-14 px-8 font-bold text-[14px] hover:bg-white/10 xl:hover:bg-[#5D00D6] xl:hover:text-white transition-colors"
              >
                {activeContent.cta2}
              </a>
            </div>

            {/* Quick Tags for Homepage */}
            {isHome && (
              <div className="flex flex-wrap gap-3 mt-8">
                {activeContent.tags.map((tag: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 xl:bg-slate-50 border border-white/20 xl:border-slate-100 text-white xl:text-slate-600 text-[14px] font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                    {tag}
                  </div>
                ))}
              </div>
            )}

            {/* Trust marks — driven by per-audience tags */}
            {!isHome && (
              <div className="flex items-center gap-5 md:gap-8 mt-10 flex-wrap">
                {activeContent.tags.map((t: string, i: number) => (
                  <span key={i} className="inline-flex items-center gap-2">
                    <CheckCircle size={12} className="text-[#5D00D6] shrink-0 xl:text-[#5D00D6]" />
                    <span className="c9-eyebrow !text-white xl:!text-slate-500 tracking-widest leading-none pt-0.5 whitespace-nowrap">
                      {t}
                    </span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right side image — desktop only */}
          <div className="hidden xl:block w-full h-[480px] relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={activeContent.image}
              alt={activeContent.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/60 via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </section>
    <HeroHighlighter />
  </>
  );
};
