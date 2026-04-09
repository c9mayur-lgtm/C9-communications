'use client';

import React from 'react';
import { useAudience } from '@/components/context/AudienceContext';
import { cn } from '@/lib/utils';

export const AudienceSwitcher = () => {
  const { audience, setAudience } = useAudience();

  const options = [
    { id: 'startup', label: 'Starting a New Business' },
    { id: 'business', label: 'Existing Business / Upgrade' },
    { id: 'enterprise', label: 'Enterprise Solutions' },
  ] as const;

  return (
    <div className="w-full bg-[#f8f9fa] border-b border-gray-100 py-1 hidden lg:block">
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between max-w-[1240px]">
        {/* Left Side Label */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Who is this for?
          </span>
        </div>

        {/* Right Side Options */}
        <div className="flex items-center gap-1 bg-gray-200/40 p-1 rounded-full">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setAudience(option.id)}
              className={cn(
                "px-4 py-1.5 rounded-full text-[12px] font-bold transition-all duration-300",
                audience === option.id 
                  ? "bg-[#5D00D6] text-white shadow-sm" 
                  : "text-slate-500 hover:text-slate-800"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
