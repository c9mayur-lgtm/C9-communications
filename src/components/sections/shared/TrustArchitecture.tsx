'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/shared/FadeIn';
import { Settings2 } from 'lucide-react';

/* ─── Compliance logos — SVG preferred for clean monochrome rendering ────── */
const COMPLIANCE_LOGOS = [
  { src: "/images/compliance/NBN_Co-Logo.wine 1 (1).svg", alt: "nbn" },
  { src: "/images/compliance/Vector (2).svg",              alt: "ISO 27001" },
  { src: "/images/compliance/APNIC_logo 1 (1).svg",        alt: "APNIC" },
  { src: "/images/compliance/Page 3.svg",                  alt: "TIO" },
  { src: "/images/compliance/Group (1).svg",               alt: "ACMA" },
];

/* ─── Certification cards ────────────────────────────────────────────────── */
const CERTIFICATIONS = [
  {
    logo: "/ccna-logo.png",
    title: "Cisco CCNA",
    descriptor: "Enterprise-grade networking expertise",
    accentColor: "#1B77BF",
    accentBg: "#EBF5FF",
  },
  {
    logo: "/OIP.webp",
    title: "ISACA",
    descriptor: "Audit-ready security governance",
    accentColor: "#1D4ED8",
    accentBg: "#EFF6FF",
  },
  {
    logo: "/ITIL 4 Foundation-1200x1200.png",
    title: "ITIL® 4 Foundation",
    descriptor: "Best-practice service delivery",
    accentColor: "#5D00D6",
    accentBg: "#F4F0FA",
  },
];

export const TrustArchitecture = () => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">

        {/* ── Top Intro Block ── */}
        <div className="text-center max-w-[720px] mx-auto mb-20 md:mb-28">
          <FadeIn>
            <span className="c9-eyebrow mb-5 block">TRUST & COMPLIANCE</span>
            <h2 className="c9-section-heading mb-6 !text-[#0c1024]">
              Trusted. Certified. Built for Australian business.
            </h2>
            <p className="c9-body !text-slate-600">
              From regulatory compliance to globally recognised technical certifications,
              C9 meets the standards enterprise buyers expect.
            </p>
          </FadeIn>
        </div>

        {/* ── Main 2-Column Asymmetric Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 relative">

          {/* LEFT — Sticky Narrative Panel */}
          <div className="lg:sticky lg:top-32 h-fit">
            <FadeIn direction="right">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#5D00D6] uppercase mb-4 block">
                WHY THIS MATTERS
              </span>
              <h3 className="text-2xl md:text-[28px] font-medium text-[#0c1024] mb-5 leading-tight tracking-tight">
                Proof your provider can actually deliver.
              </h3>
              <p className="c9-body !text-slate-500 mb-10 text-[15px]">
                Anyone can claim capability. Our certifications, accreditations,
                and operational standards prove it.
              </p>


            </FadeIn>
          </div>

          {/* RIGHT — Stacked Modular Cards */}
          <div className="space-y-10">

            {/* ── Module 1 — Compliance & Accreditation ── */}
            <FadeIn delay={0.1}>
              <div className="bg-[#fafafa] rounded-[28px] border border-slate-100 p-8 md:p-10 shadow-sm transition-all duration-500 hover:shadow-[0_16px_40px_rgba(93,0,214,0.06)]">
                <div className="mb-8">
                  <h4 className="text-xl md:text-2xl font-bold text-[#0c1024] mb-2 tracking-tight">
                    Regulatory & Industry Compliance
                  </h4>
                  <p className="text-slate-500 text-sm md:text-[15px]">
                    Mandatory trust standards required to operate and support Australian businesses.
                  </p>
                </div>

                {/* Logo Grid — monochrome on white tiles */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {COMPLIANCE_LOGOS.map((logo, i) => (
                    <div
                      key={i}
                      className="bg-white border border-slate-150 rounded-2xl px-6 py-7 flex items-center justify-center h-[110px] transition-all duration-300 hover:border-[#5D00D6]/20 hover:shadow-md group/logo"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-h-20 max-w-[150px] w-auto object-contain grayscale brightness-[0.35] contrast-[1.3] group-hover/logo:brightness-[0.15] group-hover/logo:contrast-[1.5] transition-all duration-400"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-6 border-t border-slate-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <p className="text-xs text-slate-400 font-medium tracking-wide">
                    &ldquo;Operational legitimacy and regulatory compliance built in.&rdquo;
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* ── Module 2 — Technical Certifications ── */}
            <FadeIn delay={0.2}>
              <div className="bg-[#fafafa] rounded-[28px] border border-slate-100 p-8 md:p-10 shadow-sm transition-all duration-500 hover:shadow-[0_16px_40px_rgba(93,0,214,0.06)]">
                <div className="mb-8">
                  <h4 className="text-xl md:text-2xl font-bold text-[#0c1024] mb-2 tracking-tight">
                    Certified Technical Expertise
                  </h4>
                  <p className="text-slate-500 text-sm md:text-[15px]">
                    Globally recognised certifications held by our engineering and security teams.
                  </p>
                </div>

                {/* Certification Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                  {CERTIFICATIONS.map((cert, i) => {
                    const hasLogo = !!cert.logo;
                    const Icon = (cert as any).Icon;

                    return (
                      <div
                        key={i}
                        className="group/cert relative bg-white border border-slate-100 p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 overflow-hidden"
                      >
                        {/* Hover gradient tint */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover/cert:opacity-100 transition-opacity duration-500"
                          style={{ background: `linear-gradient(135deg, ${cert.accentBg} 0%, transparent 65%)` }}
                        />

                        <div className="relative z-10">
                          {/* Logo or Icon badge */}
                          <div className="h-20 flex items-center mb-5">
                            {hasLogo ? (
                              <img
                                src={cert.logo!}
                                alt={cert.title}
                                className="max-h-16 max-w-[160px] w-auto object-contain transition-transform duration-300 group-hover/cert:scale-105"
                              />
                            ) : (
                              <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover/cert:scale-110"
                                style={{ background: cert.accentBg }}
                              >
                                {Icon && <Icon size={28} style={{ color: cert.accentColor }} strokeWidth={1.8} />}
                              </div>
                            )}
                          </div>

                          {/* Cert label pill (for ITIL only) */}
                          {!hasLogo && (cert as any).badgeLabel && (
                            <span
                              className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-2 py-1 rounded-md mb-3"
                              style={{ color: cert.accentColor, background: cert.accentBg }}
                            >
                              {(cert as any).badgeLabel}
                            </span>
                          )}

                          <h5 className="font-bold text-[#0c1024] text-[15px] mb-1 leading-tight">
                            {cert.title}
                          </h5>
                          <p className="text-slate-500 text-[13px] leading-relaxed">
                            {cert.descriptor}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2 pt-6 border-t border-slate-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <p className="text-xs text-slate-400 font-medium tracking-wide">
                    &ldquo;Delivered by certified professionals—not generic support teams.&rdquo;
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
};
