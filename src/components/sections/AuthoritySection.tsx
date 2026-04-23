'use client';

import React from 'react';
import { Globe, MapPin, Zap, UserCheck } from 'lucide-react';
import { useAudience } from '@/components/context/AudienceContext';

export const AuthoritySection = () => {
  const { audience } = useAudience();

  const businessPoints = [
    {
      title: "Local Support (Not a call center)",
      icon: <MapPin className="w-6 h-6" />,
      description: "Our engineers are based right here in Australia. Actual human support that understands your local business context."
    },
    {
      title: "Fast Response Times",
      icon: <Zap className="w-6 h-6" />,
      description: "Zero bureaucracy. Rapid action on critical issues to ensure your business stays online and productive."
    },
    {
      title: "End-to-End Ownership",
      icon: <UserCheck className="w-6 h-6" />,
      description: "We don't point fingers. If there's a problem in your environment, we own the resolution from start to finish."
    }
  ];

  const enterprisePoints = [
    {
      title: "Mission-Critical SLAs",
      icon: <Zap className="w-6 h-6" />,
      description: "Guaranteed 99.99% uptime with enterprise-grade service level agreements backed by 24/7 engineering support."
    },
    {
      title: "Nationwide Infrastructure",
      icon: <Globe className="w-6 h-6" />,
      description: "Private fiber networks and managed SD-WAN backbones supporting multi-site government and corporate deployments."
    },
    {
      title: "Strategic IT Consulting",
      icon: <UserCheck className="w-6 h-6" />,
      description: "Dedicated account managers and solution architects to help align your technology roadmap with business growth."
    }
  ];

  const points = audience === 'enterprise' ? enterprisePoints : businessPoints;

  return (
    <section className="py-24 bg-[#0c1024] text-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-center">
          <div>
            <h2 className="c9-section-heading mb-8">
              Why Australia’s Boldest Businesses Choose C9.
            </h2>
            <div className="flex flex-col gap-8">
              {points.map((point, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="mt-1 w-12 h-12 rounded-xl bg-[#5D00D6]/20 border border-[#5D00D6]/30 flex items-center justify-center text-brand-purple flex-shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                    <p className="text-slate-400 text-[14px] leading-relaxed font-dm-sans">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden bg-slate-900 border border-white/5 relative shadow-2xl">
                {/* Visual Graphic Representation */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#5D00D6_0%,transparent_50%)] opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-20 opacity-10">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white fill-current">
                        <path d="M44.7,-76.4C58.1,-69.2,70.1,-58.5,78.5,-45.3C86.9,-32.1,91.8,-16,91.2,-0.3C90.6,15.4,84.4,30.7,75.4,44C66.3,57.3,54.4,68.6,40.4,75.9C26.4,83.2,10.2,86.5,-5.2,89.5C-20.6,92.5,-35.3,95.3,-48.7,90.5C-62.1,85.8,-74.3,73.5,-82.4,59.3C-90.5,45,-94.5,28.8,-95.1,12.7C-95.7,-3.4,-92.9,-19.4,-85.9,-33.9C-78.9,-48.4,-67.6,-61.4,-54.1,-68.6C-40.6,-75.7,-24.9,-77,-9.1,-76.6C6.7,-76.1,22.4,-73.9,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                </div>
                
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <div className="p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl">
                        <p className="text-2xl font-bold mb-4 font-syne">"C9 doesn't just manage our IT; they own the outcome. It's the most accountable partnership we've ever had."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-700" />
                            <div>
                                <p className="font-bold">Lead Project Engineer</p>
                                <p className="text-sm text-slate-400">National Infrastructure Group</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#5D00D6] rounded-full flex items-center justify-center p-6 text-center shadow-2xl rotate-12 transition-transform hover:rotate-0 duration-500">
                <span className="text-sm font-bold leading-tight">OFFICIAL TECHNOLOGY PARTNER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
