'use client';

import React from 'react';
import { useAudience } from '@/components/context/AudienceContext';
import { cn } from '@/lib/utils';

export const AudienceSwitcher = () => {
  const { audience, setAudience } = useAudience();

  const options = [
    { id: 'startup', label: 'Greenfield' },
    { id: 'business', label: 'Small Business' },
    { id: 'enterprise', label: 'Enterprise' },
  ] as const;

  return (
    <div className="w-full bg-[#0c1024] text-white hidden lg:block">
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between max-w-[1240px]">
        {/* Left Side Options (Audience segments) */}
        <div className="flex items-center">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setAudience(option.id)}
              className={cn(
                "px-6 py-2 text-[12px] font-extrabold uppercase tracking-widest transition-all duration-300 border-t-4",
                audience === option.id 
                  ? "bg-[#161c3a] border-[#5D00D6] text-white" 
                  : "border-transparent text-slate-400 hover:text-white hover:bg-[#161c3a]"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Right Side Utilities */}
        <div className="flex items-center gap-6">
          <a href="tel:1300000299" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
            Support
          </a>
          <a href="https://webmail.c9communications.com.au" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
            Webmail
          </a>
          <a href="/contact" className="flex items-center gap-2 bg-[#5D00D6] px-4 py-1 rounded text-[11px] font-bold uppercase tracking-widest hover:bg-[#4d00b3] transition-colors">
            My C9
          </a>
        </div>
      </div>
    </div>
  );
};
