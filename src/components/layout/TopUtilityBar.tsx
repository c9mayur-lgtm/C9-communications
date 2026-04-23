'use client';

import React from 'react';
import { PhoneCall } from 'lucide-react';
import { useAudience } from '@/components/context/AudienceContext';
import { cn } from '@/lib/utils';

export const TopUtilityBar = () => {
  const { audience, setAudience } = useAudience();

  return (
    <div className="w-full bg-[#f8f9fa] border-b border-gray-100 py-1.5 hidden lg:block">
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between max-w-[1240px]">
        {/* Audience Switcher */}
        <div className="flex items-center gap-1 bg-gray-200/50 p-1.5 rounded-full">
          <button
            onClick={() => setAudience('business')}
            className={cn(
              "px-5 py-2 rounded-full text-[14px] font-bold transition-all duration-300",
              audience === 'business' 
                ? "bg-[#5D00D6] text-white shadow-md" 
                : "text-slate-500 hover:text-slate-800"
            )}
          >
            Business
          </button>
          <button
            onClick={() => setAudience('enterprise')}
            className={cn(
              "px-5 py-2 rounded-full text-[14px] font-bold transition-all duration-300",
              audience === 'enterprise' 
                ? "bg-[#5D00D6] text-white shadow-md" 
                : "text-slate-500 hover:text-slate-800"
            )}
          >
            Enterprise
          </button>
        </div>

        {/* Top Bar CTA */}
        <div className="flex items-center gap-6">
          <a 
            href="tel:1800000299" 
            className="flex items-center gap-2 text-slate-600 hover:text-[#5D00D6] transition-colors group"
          >
            <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
              <PhoneCall size={12} />
            </div>
            <span className="text-[12px] font-bold tracking-tight">
              Talk to a Consultant — <span className="text-slate-900">1800 000 299</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
