'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { IndustryMarquee } from './IndustryMarquee';

export const WpSolutions = () => {
  return (
    <section className="py-12 md:py-16 bg-[#f8f7fc] border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="text-center mb-10">
          <span className="text-[#5D00D6] text-[13px] font-bold uppercase tracking-[0.3em] mb-4 block">Industry Solutions</span>
          <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-[#0c1024] tracking-tight mb-8">
            Solving IT challenges in every industry, every day.
          </h2>
        </div>

        <IndustryMarquee />

        <div className="flex justify-center mt-12">
          <Button size="lg" className="shadow-2xl hover:gap-4 transition-all group">
            Explore Industry Solutions <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

