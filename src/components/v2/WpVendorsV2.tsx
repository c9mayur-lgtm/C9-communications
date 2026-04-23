'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Server, Shield, Cpu, Network, Wifi, Monitor, ShieldCheck, LayoutGrid } from 'lucide-react';

const VendorCard = ({ card }: { card: any }) => {
  return (
    <div className="group relative bg-[#0D0D0D] border border-white/5 p-6 md:p-8 flex flex-col h-full hover:border-[#5D00D6]/30 transition-all duration-500 overflow-hidden">
        <h3 className="c9-card-title !text-[20px] text-white mb-3 group-hover:text-[#5D00D6] transition-colors leading-tight">
          {card.title}
        </h3>
        <p className="c9-body !text-white/60 mb-6">
          {card.description}
        </p>

        {card.details && card.details.length > 0 && (
          <div className="space-y-0 mt-auto">
            <div className="h-[1px] bg-white/30 w-full mb-4"></div>
            <ul className="space-y-0">
              {card.details.map((detail: string, i: number) => (
                <li key={i} className="group/item">
                  <div className="py-3 flex items-center justify-between text-white/70 text-[14px] font-medium hover:text-white transition-colors">
                    {detail}
                    <ChevronRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity text-[#5D00D6]" />
                  </div>
                  {i < card.details.length - 1 && <div className="h-[1px] bg-white/20 w-full"></div>}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Brand Highlight at bottom */}
        {card.brandLogo && (
          <div className={`px-8 py-6 bg-black/40 border-t border-white/5 flex items-center gap-3 ${!card.details || card.details.length === 0 ? 'mt-auto' : ''}`}>
            <div className="p-1.5 bg-white/10 rounded-sm">
              <img src={card.brandLogo} alt="" className="w-5 h-5 object-contain filter grayscale brightness-200" />
            </div>
            <span className="c9-eyebrow !text-[10px] !text-white/40">{card.brandName}</span>
          </div>
        )}
    </div>
  );
};

const IT_CHALLENGES = [
  { id: 'challenges', label: 'Your IT Challenges' },
  { id: 'strategy', label: 'Network Strategy' },
  { id: 'modern-workplace', label: 'Modern Workplace' },
  { id: 'telco', label: 'Business Telco' },
  { id: 'devices', label: 'Device Management' },
  { id: 'security', label: 'Security Excellence' },
];

const VENDORS_DATA: Record<string, any[]> = {
  challenges: [
    {
      title: "We've seen it before. We know how to fix it.",
      description: "Slow internet. Phones that drop out. Devices that aren't patched. Staff who can't work from home properly. These aren't unique problems — and C9 has solved every one of them, for businesses your size.",
      icon: Server,
      details: [], // Removed bullet list as per instructions
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
      title: 'SASE Architecture',
      description: 'Unify network and security at the edge for seamless access.',
      icon: ShieldCheck,
      details: ['Cloud access security broker', 'Secure web gateway', 'Zero-trust network access'],
      brandName: 'Palo Alto Networks',
      brandLogo: 'https://cdn.simpleicons.org/paloaltonetworks/white'
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
  'modern-workplace': [
    {
      title: 'Hybrid Workplace Governance',
      description: 'Control your digital estate with enterprise-grade policy management.',
      icon: Monitor,
      details: ['Teams/Slack optimization', 'Digital whiteboarding', 'Async work patterns'],
      brandName: 'Microsoft Teams',
      brandLogo: 'https://cdn.simpleicons.org/microsoftteams/white'
    },
    {
      title: 'Intelligent Productivity',
      description: 'Empower hybrid teams with seamless digital collaboration tools.',
      icon: Cpu,
      details: ['AI-powered search & discover', 'Modern intranet portals', 'Centralized knowledge hubs'],
      brandName: 'Microsoft 365',
      brandLogo: 'https://cdn.simpleicons.org/microsoft/white'
    },
    {
      title: 'App Ecosystem Integration',
      description: 'Unified your fragmented toolset into one cohesive work hub.',
      icon: LayoutGrid,
      details: ['Single Sign-On (SSO)', 'Workflow cross-integration', 'Contextual team spaces'],
      brandName: 'Slack',
      brandLogo: 'https://cdn.simpleicons.org/slack/white'
    }
  ],
  telco: [
    {
      title: 'Private Dark Fiber',
      description: 'Ultra-fast connectivity for mission-critical operations.',
      icon: Network,
      details: ['Dedicated 100Gbps links', 'P2P data center interconnect', 'Low-latency direct routing'],
      brandName: 'nbn Australia',
      brandLogo: 'https://cdn.simpleicons.org/nbn/white'
    },
    {
      title: 'Next-Gen Cloud Voice',
      description: 'Enterprise telephony that moves with your business.',
      icon: Wifi,
      details: ['Global SIP trunking', 'CRM-integrated dialers', 'AI sentiment analysis'],
      brandName: 'C9 Communications',
      brandLogo: 'https://cdn.simpleicons.org/c9/white'
    },
    {
      title: 'Edge Connectivity',
      description: 'Bringing high-speed access to remote and temporary sites.',
      icon: Server,
      details: ['Satellite/Starlink backup', 'Carrier-neutral peering', 'Rapid site deployment'],
      brandName: 'Telstra Business',
      brandLogo: 'https://cdn.simpleicons.org/telstra/white'
    }
  ],
  devices: [
    {
      title: 'Fleet Management (MDM)',
      description: 'Control every device in your organization from a single console.',
      icon: Monitor,
      details: ['Security policy enforcement', 'Remote wipe & lock', 'App distribution profiles'],
      brandName: 'Jamf Pro',
      brandLogo: 'https://cdn.simpleicons.org/jamf/white'
    },
    {
      title: 'Secure Device Lifecycle',
      description: 'Ship hardware directly to users; auto-configure on first boot.',
      icon: LayoutGrid,
      details: ['Autopilot deployment', 'Asset tracking & refresh', 'Secure e-waste disposal'],
      brandName: 'Apple Business',
      brandLogo: 'https://cdn.simpleicons.org/apple/white'
    }
  ],
  security: [
    {
      title: '24/7 Managed SOC',
      description: 'Continuous monitoring by experts to find and kill threats.',
      icon: ShieldCheck,
      details: ['Threat hunting', 'Vulnerability scanning', 'Compliance reporting'],
      brandName: 'Tenable',
      brandLogo: 'https://cdn.simpleicons.org/tenable/white'
    },
    {
      title: 'Identity Protection',
      description: 'Never trust, always verify every access request.',
      icon: Shield,
      details: ['MFA enforcement', 'Conditional access scoring', 'Privileged identity management'],
      brandName: 'Okta',
      brandLogo: 'https://cdn.simpleicons.org/okta/white'
    }
  ]
};

export const WpVendorsV2 = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <section className="py-14 md:py-20 bg-[#0c1024] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-10">
          <div className="w-full">
            <span className="c9-eyebrow !text-[#5D00D6] mb-6 block">STRATEGIC PARTNERSHIPS</span>
            <h2 className="c9-section-heading !text-white mb-8" >
              Leading the way in IT & Telco excellence.
            </h2>
            <div className="flex flex-wrap gap-2 md:gap-3 w-full">
              {IT_CHALLENGES.map((cat, idx) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryIndex(idx)}
                  className={`px-5 py-2.5 rounded-full text-[12px] md:text-[14px] font-bold transition-all duration-300 border whitespace-nowrap ${
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
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#5D00D6]/20 hover:border-[#5D00D6]/40 transition-all text-white/50 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={() => setCategoryIndex((prev) => (prev < IT_CHALLENGES.length - 1 ? prev + 1 : 0))}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#5D00D6]/20 hover:border-[#5D00D6]/40 transition-all text-white/50 hover:text-white"
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

