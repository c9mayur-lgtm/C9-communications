'use client';

import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const WpHeroV2 = () => {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-white overflow-hidden min-h-[580px] flex items-center">
        <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
          <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-4 xl:gap-6 items-center relative z-10 w-full">
            <div className="py-4 pr-0 xl:pr-6">
              <h1 className="c9-hero-title mb-6 text-[#0c1024]">
                We don't just supply hardware. We engineer complete managed IT & Telco solutions.
              </h1>
              <p className="c9-body mb-8 max-w-[550px]">
                Whether you need reliable cloud voice, enterprise fibre, or a fully outsourced IT department, C9 delivers seamless, fully managed infrastructure. One provider, one fully onshore team, zero IT headaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Button size="lg" className="w-full sm:w-auto shadow-2xl hover:gap-4 group bg-[#5D00D6] hover:bg-[#5D00D6]/90 rounded-full font-bold">
                  Get Your Free IT Audit <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-200 rounded-full font-bold">
                  Download Enterprise Playbook
                </Button>
              </div>

              {/* Uptime, Support, No Lock-In marks */}
              <div className="flex items-center gap-5 md:gap-8 mt-10 md:mt-12 flex-wrap pb-4">
                {['99.99% SLA Uptime', '24/7 AU Local Support', '0 Lock-In Contracts'].map((t, i) => (
                  <span key={i} className="flex items-center gap-2 text-[14px] font-bold text-slate-500 tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                    <CheckCircle size={16} className="text-[#5D00D6]" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right side rectangular image */}
            <div className="hidden xl:block w-full h-[400px] lg:h-[500px] relative rounded-[16px] overflow-hidden shadow-2xl">
              <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2850" 
                 alt="Office Team" 
                 className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/60 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* CHANGE 1 — Human Proof Strip */}
      <div className="w-full bg-[#F9F9F9] h-[80px] flex items-center border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-8 w-full flex flex-col md:flex-row items-center justify-between" style={{ maxWidth: '1240px' }}>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[
                "photo-1438761681033-6461ffad8d80",
                "photo-1573497019940-1c28c88b4f3e",
                "photo-1560250097-0b93528c311a",
                "photo-1600486913747-55e5470d0d44"
              ].map((id, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src={`https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=100`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-[14px] font-bold text-[#4B5563]" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
              Join 500+ Australian businesses already managed by C9
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-4 text-[13px] text-[#6B7280] font-medium" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
            <span>20 years in business</span>
            <span className="opacity-30">·</span>
            <span>100% AU-based support</span>
            <span className="opacity-30">·</span>
            <span>4.9★ on Google</span>
          </div>
        </div>
      </div>
    </>
  );
};
