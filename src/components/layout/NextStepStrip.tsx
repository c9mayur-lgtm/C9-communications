'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useAudience } from '@/components/context/AudienceContext';
import { Button } from '@/components/ui/button';
import { PhoneCall, FileDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const NextStepStrip = () => {
  const pathname = usePathname();
  const { audience } = useAudience();

  const getDynamicText = () => {
    // Audience-based defaults
    const audienceDefaults = {
      startup: "Need a complete setup?",
      business: "Looking to switch providers?",
      enterprise: "Scaling your operations?",
    };

    // Page-specific overrides could be added here
    if (pathname.includes('/managed-it')) {
      return audience === 'enterprise' ? "Need 24/7 Managed IT?" : "Looking for Better IT Support?";
    }

    if (pathname.includes('/telco')) {
      return "Want a faster, more reliable connection?";
    }

    return audienceDefaults[audience] || audienceDefaults.business;
  };

  return (
    <div className="w-full bg-[#fdfdff] text-[#0c1024] py-8 border-y border-gray-100 shadow-sm relative z-20">
      <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1240px]">
        {/* Left: Dynamic Text */}
        <div className="text-center md:text-left">
          <h3 className="c9-section-heading text-2xl md:">
            {getDynamicText()}
          </h3>
          <p className="text-gray-500 mt-2 font-normal">
            Our Australian-based experts are ready to design your solution.
          </p>
        </div>

        {/* Right: CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button 
            className="bg-[#5D00D6] hover:bg-[#4d00b3] text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-[#5D00D6]/10 transition-all flex items-center gap-2"
          >
            <PhoneCall size={18} />
            Talk to a Solutions Expert
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-200 hover:bg-gray-50 text-[#0c1024] font-bold rounded-full px-8 h-12 transition-all flex items-center gap-2 shadow-sm"
          >
            <FileDown size={18} />
            Download Solution Brochure
          </Button>
        </div>
      </div>
    </div>
  );
};
