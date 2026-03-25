'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Server, Shield, Cpu, Network, Wifi, Monitor, ShieldCheck } from 'lucide-react';

const VendorCard = ({ card }: { card: any }) => {
  return (
    <div className="group relative bg-[#0D0D0D] border border-white/5 p-6 md:p-8 flex flex-col h-full hover:border-[#5D00D6]/30 transition-all duration-500 overflow-hidden">
        <h3 className="text-[20px] font-bold text-white mb-3 tracking-tight group-hover:text-[#5D00D6] transition-colors" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{card.title}</h3>
        <p className="text-white/60 text-[18px] leading-relaxed mb-8 font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
          {card.description}
        </p>

        <div className="space-y-0">
          <div className="h-[1px] bg-white/30 w-full mb-4"></div>
          <ul className="space-y-0">
            {card.details.map((detail: string, i: number) => (
              <li key={i} className="group/item">
                <div className="py-3 flex items-center justify-between text-white/70 text-[14px] font-bold hover:text-white transition-colors" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                  {detail}
                  <ChevronRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity text-[#5D00D6]" />
                </div>
                {i < card.details.length - 1 && <div className="h-[1px] bg-white/20 w-full"></div>}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Brand Highlight at bottom */}
        {card.brandLogo && (
          <div className="px-8 py-6 bg-black/40 border-t border-white/5 flex items-center gap-3 mt-auto">
            <div className="p-1.5 bg-white/10 rounded-sm">
              <img src={card.brandLogo} alt="" className="w-5 h-5 object-contain filter grayscale brightness-200" />
            </div>
            <span className="text-[12px] font-bold text-white/40 uppercase tracking-[0.2em]">{card.brandName}</span>
          </div>
        )}
    </div>
  );
};

const IT_CHALLENGES = [
  { id: 'challenges', label: 'Your IT Challenges' },
  { id: 'strategy', label: 'Network Strategy' },
  { id: 'devices', label: 'Device Management' },
  { id: 'security', label: 'Security Excellence' },
];

const VENDORS_DATA: Record<string, any[]> = {
  challenges: [
    {
      title: 'Infrastructure Modernization',
      description: 'Replace legacy systems with agile, cloud-native architectures.',
      icon: Server,
      details: ['Legacy hardware retirement', 'Cloud migration strategy', 'Hybrid-cloud connectivity'],
      brandName: 'Microsoft Azure',
      brandLogo: 'https://cdn.simpleicons.org/microsoftazure/white'
    },
    {
      title: 'Cyber Resilience',
      description: 'Proactive threat detection and rapid recovery protocols.',
      icon: Shield,
      details: ['Endpoint protection', '24/7 SIEM monitoring', 'Incident response planning'],
      brandName: 'CrowdStrike',
      brandLogo: 'https://cdn.simpleicons.org/crowdstrike/white'
    },
    {
      title: 'Workflow Automation',
      description: 'Streamline operations with intelligent digital workflows.',
      icon: Cpu,
      details: ['Process mapping', 'SaaS integration', 'Custom API development'],
      brandName: 'ServiceNow',
      brandLogo: 'https://cdn.simpleicons.org/servicenow/white'
    }
  ],
  strategy: [
    {
      title: 'SD-WAN Transformation',
      description: 'Intelligent traffic routing for distributed enterprises.',
      icon: Network,
      details: ['Application steering', 'Direct cloud access', 'Unified management'],
      brandName: 'Cisco',
      brandLogo: 'https://cdn.simpleicons.org/cisco/white'
    },
    {
      title: 'Private 5G Networks',
      description: 'Dedicated wireless infrastructure for high-bandwidth sites.',
      icon: Wifi,
      details: ['Site surveys', 'Spectrum management', 'IoT prioritization'],
      brandName: 'Nokia',
      brandLogo: 'https://cdn.simpleicons.org/nokia/white'
    }
  ],
  devices: [
    {
      title: 'Zero-Touch Provisioning',
      description: 'Ship hardware directly to users; auto-configure on first boot.',
      icon: Monitor,
      details: ['Autopilot deployment', 'Unified endpoint management', 'Compliance enforcement'],
      brandName: 'Apple Business',
      brandLogo: 'https://cdn.simpleicons.org/apple/white'
    }
  ],
  security: [
    {
      title: 'Zero Trust Architecture',
      description: 'Never trust, always verify every access request.',
      icon: ShieldCheck,
      details: ['Identity management', 'Micro-segmentation', 'Continuous verification'],
      brandName: 'Okta',
      brandLogo: 'https://cdn.simpleicons.org/okta/white'
    }
  ]
};

export const WpVendors = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <section className="py-14 md:py-20 bg-[#0c1024] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-10">
          <div className="max-w-2xl w-full">
            <span className="text-[#5D00D6] text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6 block">Strategic Partnerships</span>
            <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.2] md:leading-[1.1] tracking-tight mb-8" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
              Leading the way in IT excellence.
            </h2>
            <div className="flex flex-nowrap overflow-x-auto gap-2 md:gap-3 pb-4 no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 w-full">
              {IT_CHALLENGES.map((cat, idx) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryIndex(idx)}
                  className={`px-5 py-2.5 rounded-full text-[12px] md:text-[13px] font-bold transition-all duration-300 border whitespace-nowrap shrink-0 ${
                    categoryIndex === idx 
                      ? 'bg-[#5D00D6] border-[#5D00D6] text-white shadow-xl shadow-purple-900/40' 
                      : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:flex gap-3 mt-4 lg:mt-0">
            <button 
              onClick={() => setCategoryIndex((prev) => (prev > 0 ? prev - 1 : IT_CHALLENGES.length - 1))}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/50 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={() => setCategoryIndex((prev) => (prev < IT_CHALLENGES.length - 1 ? prev + 1 : 0))}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/50 hover:text-white"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {VENDORS_DATA[IT_CHALLENGES[categoryIndex].id].map((card, idx) => (
                <VendorCard key={idx} card={card} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
