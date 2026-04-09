'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useAudience } from '@/components/context/AudienceContext';

export const Hero = () => {
  const { audience } = useAudience();

  const businessContent = {
    headline: "Simplify Your Business IT, Telco & Workplace",
    subheadline: "Complete technology setups for growing Australian businesses. One partner for your nbn, phone systems, and managed IT.",
    cta1: { label: "Get Your Business Setup Plan", href: "/consultation" },
    cta2: { label: "View Business Broadband", href: "/telco/business-nbn" },
    tags: ["Fast nbn™ Connectivity", "Cloud Phone Systems", "On-site IT Support"]
  };

  const enterpriseContent = {
    headline: "Mission-Critical Enterprise Connectivity & Managed IT",
    subheadline: "High-SLA networking, dedicated fibre, and managed cyber defense for large-scale Australian organizations and government.",
    cta1: { label: "Partner with C9 Enterprise", href: "/consultation" },
    cta2: { label: "Explore Fiber Solutions", href: "/enterprise/ethernet" },
    tags: ["99.99% Uptime SLAs", "Dedicated Fiber up to 10Gbps", "Managed SIEM / SOC"]
  };

  const content = audience === 'enterprise' ? enterpriseContent : businessContent;

  return (
    <section className="relative min-h-[90vh] bg-white flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-dark-purple/5 rounded-full blur-[100px] animate-pulse delay-700" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">

          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-light-purple-bg border border-brand-purple/10 w-fit">
              <span className="text-[12px] font-bold text-brand-purple uppercase tracking-widest font-dm-sans">
                Managed IT · Telco · Modern Workplace
              </span>
            </div>

            <h1 className="text-text-primary text-[56px] md:text-[64px] font-bold leading-[1.05] tracking-tight font-syne">
              {content.headline}
            </h1>

            <p className="text-text-secondary text-[20px] leading-[1.6] font-dm-sans max-w-xl whitespace-pre-line">
              {content.subheadline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href={content.cta1.href}>
                <Button size="lg" className="bg-brand-purple hover:bg-dark-purple text-white px-8 rounded-full h-14 text-base font-bold font-dm-sans shadow-lg shadow-brand-purple/20">
                  {content.cta1.label} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href={content.cta2.href}>
                <Button variant="outline" size="lg" className="border-brand-purple text-brand-purple hover:bg-light-purple-bg px-8 rounded-full h-14 text-base font-bold font-dm-sans">
                  {content.cta2.label} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Quick Tags */}
            <div className="flex flex-wrap gap-3 mt-4">
              {content.tags.map((tag, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-slate-600 text-[13px] font-bold font-dm-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                  {tag}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <a href="/defense" className="text-brand-purple font-bold text-sm hover:underline flex items-center gap-1 font-dm-sans">
                Enterprise cybersecurity? → See C9 Defense
              </a>


              <div className="flex items-center gap-8 pt-8 opacity-40 grayscale">
                <span className="text-xs font-bold uppercase tracking-widest text-text-primary">Accreditations</span>
                <div className="flex gap-6 items-center">
                  <div className="h-4 w-12 bg-text-primary rounded" /> {/* Placeholder for nbn Co */}
                  <div className="h-4 w-12 bg-text-primary rounded" /> {/* Placeholder for APNIC */}
                  <div className="h-4 w-12 bg-text-primary rounded" /> {/* Placeholder for TIO */}
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-square md:aspect-[1.2/1]">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-transparent to-dark-purple/10 rounded-[48px] overflow-hidden">
              {/* Purple Mesh Placeholder */}
              <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(circle_at_20%_20%,var(--brand-purple)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,var(--dark-purple)_0%,transparent_50%)]" />
              <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.05]" />
            </div>

            {/* Floating Cards */}
            <div className="absolute top-[10%] left-[-5%] p-6 bg-white rounded-2xl shadow-sm border border-brand-purple/5 flex flex-col gap-1 w-48 animate-bounce delay-0 duration-[5s]">
              <span className="text-brand-purple text-2xl font-bold font-syne">15+ Years</span>
              <span className="text-text-secondary text-xs font-medium font-dm-sans">Delivering IT & Telco</span>
            </div>

            <div className="absolute bottom-[20%] right-[-5%] p-6 bg-white rounded-2xl shadow-sm border border-brand-purple/5 flex flex-col gap-1 w-48 animate-bounce delay-1000 duration-[5s]">
              <span className="text-brand-purple text-2xl font-bold font-syne">1 Partner</span>
              <span className="text-text-secondary text-xs font-medium font-dm-sans">For IT, Telco & Security</span>
            </div>

            <div className="absolute top-[50%] right-[10%] p-6 bg-white rounded-2xl shadow-sm border border-brand-purple/5 flex flex-col gap-1 w-40 animate-bounce delay-2000 duration-[5s]">
              <span className="text-brand-purple text-xl font-bold font-syne">Australian</span>
              <span className="text-text-secondary text-xs font-medium font-dm-sans whitespace-nowrap">Owned & Supported</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
