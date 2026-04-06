'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const WpHero = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  
  // If it's the home page, add huge top padding to clear the fixed navbar.
  // If it's a subpage, the global Breadcrumbs already handle the navbar offset.
  const paddingClass = isHome 
    ? "pt-16 pb-10 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20" 
    : "pt-4 pb-10 md:pt-6 md:pb-16 lg:pt-8 lg:pb-20";

  return (
    <section className={`${paddingClass} bg-white overflow-hidden min-h-[450px] lg:min-h-[580px] flex items-center`}>
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-4 xl:gap-6 items-center relative z-10 w-full">
          <div className="py-4 pr-0 xl:pr-6">
            <h1 className="c9-hero-title mb-6 text-[#0c1024]">
              We manage your IT & Telco, so you can manage your business.
            </h1>
            <p className="c9-body mb-8 max-w-[500px]">
              Take charge of your business continuity with innovative IT solutions designed for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button size="lg" className="w-full sm:w-auto shadow-2xl hover:gap-4 group">
                Schedule a Free Consultation <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-200">
                Services
              </Button>
            </div>

            {/* Uptime, Support, No Lock-In marks */}
            <div className="flex items-center gap-5 md:gap-8 mt-10 md:mt-12 flex-wrap pb-4">
              {['99.99% Uptime', '24/7 AU Support', 'No Lock-In'].map((t, i) => (
                <span key={i} className="flex items-center gap-2 text-[14px] font-bold text-slate-500 tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                  <CheckCircle size={16} className="text-[#5D00D6]" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right side rectangular image */}
          <div className="hidden xl:block w-full h-[400px] lg:h-[500px] relative rounded-none overflow-hidden shadow-2xl">
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
  );
};
