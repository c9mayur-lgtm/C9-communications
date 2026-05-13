'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useAnimationControls } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

/* ─── Types ──────────────────────────────────────────────── */
export interface CapabilityCard {
  title: string;
  descriptor: string;
  image: string;
  imageAlt: string;
  link: string;
  tag?: string;
}

/* ─── Default Offerings ──────────────────────────────────── */
const DEFAULT_CARDS: CapabilityCard[] = [
  {
    title: 'Managed IT',
    descriptor: 'Proactive infrastructure, helpdesk, and full IT lifecycle management — one team accountable for everything.',
    image: '/images/c9_team_collaboration.png',
    imageAlt: 'C9 IT operations team managing business environments',
    link: '/managed-it',
    tag: 'IT Operations',
  },
  {
    title: 'Connectivity',
    descriptor: 'nbn™, Fast Fibre, SIP, mobile fleet, and failover — all provisioned and managed under one provider.',
    image: '/images/business_internet_hero.png',
    imageAlt: 'Enterprise connectivity and communications environment',
    link: '/telco',
    tag: 'Telco',
  },
  {
    title: 'Cybersecurity',
    descriptor: 'Essential 8, endpoint detection, compliance monitoring, and continuous threat response.',
    image: '/images/c9_risk_team.png',
    imageAlt: 'Security operations team protecting business environments',
    link: '/managed-it/security-solutions',
    tag: 'Security',
  },
  {
    title: 'Modern Workplace',
    descriptor: 'M365, device management, hybrid collaboration tools, and managed productivity — fully operated.',
    image: '/modern_m365_conference_room.png',
    imageAlt: 'Hybrid workforce collaboration across office and remote environments',
    link: '/modern-workplace',
    tag: 'Workplace',
  },
  {
    title: 'Cloud Voice',
    descriptor: 'Cloud phone systems, Teams-native calling, and SIP trunking — enterprise voice without the overhead.',
    image: '/modern_workplace_teams_unified_comms_1777367199429.png',
    imageAlt: 'Business communication and Teams collaboration environment',
    link: '/telco/teams-calling',
    tag: 'Voice',
  },
  {
    title: 'Contact Centre',
    descriptor: 'Inbound, IVR, omnichannel queues, and live agent support — managed for uptime and customer experience.',
    image: '/modern_communication_collaboration.png',
    imageAlt: 'Customer support and contact centre team managing live interactions',
    link: '/telco/contact-centre',
    tag: 'Contact Centre',
  },
  {
    title: 'Infrastructure',
    descriptor: 'Server, cloud, and network environments — converged, monitored, and managed as one controlled system.',
    image: '/images/c9_support_engineer.png',
    imageAlt: 'Enterprise cloud and infrastructure management operations',
    link: '/managed-it/infrastructure',
    tag: 'Cloud & Infra',
  },
  {
    title: 'AI Voice',
    descriptor: 'Managed AI call workflows with human escalation paths, governance reporting, and operational oversight.',
    image: '/human-ai-collaboration.png',
    imageAlt: 'AI-assisted customer communication workflows with human oversight',
    link: '/telco/ai-voice',
    tag: 'AI Voice',
  },
];

/* ─────────────────────────────────────────────────────────
   CAROUSEL CARD COMPONENT
───────────────────────────────────────────────────────── */
const CarouselCard = ({ 
  card, 
  isActive, 
  onMouseEnter, 
  onMouseLeave 
}: { 
  card: CapabilityCard; 
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const router = useRouter();

  return (
    <div
      className="relative h-[600px] flex-shrink-0 cursor-pointer overflow-hidden border-r border-white/10 last:border-r-0 group/card"
      style={{
        width: isActive ? '500px' : '160px',
        transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => router.push(card.link)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={card.image}
          alt={card.imageAlt}
          className="w-full h-full object-cover select-none brightness-[0.7] group-hover/card:brightness-[0.4] transition-all duration-700"
          draggable={false}
        />
      </div>

      {/* Overlays */}
      <div className={`absolute inset-0 bg-gradient-to-t from-[#0c1024] via-transparent to-transparent opacity-80 ${isActive ? 'opacity-90' : 'opacity-60'} transition-opacity duration-500`} />
      <div className={`absolute inset-0 bg-[#5D00D6]/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`} />

      {/* Content Container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        {/* Inactive Title (Vertical) */}
        {!isActive && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <span 
               className="text-[14px] font-semibold text-white uppercase tracking-[0.2em] whitespace-nowrap"
               style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
             >
               {card.title}
             </span>
          </div>
        )}

        {/* Top Icon */}
        <div className="absolute top-8 left-8">
           <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${isActive ? 'bg-[#5D00D6] border-[#5D00D6]' : 'bg-white/5 border-white/20'} transition-all duration-500`}>
              {isActive ? <ArrowRight size={18} className="text-white" /> : <Plus size={16} className="text-white/60" />}
           </div>
        </div>

        {/* Active Content */}
        <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
           <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-4">
              {card.tag ?? 'C9 Managed'}
           </span>
           <h3 className="text-[28px] md:text-[32px] font-semibold text-white leading-tight mb-4">{card.title}</h3>
           <p className="text-white/60 text-[14px] leading-relaxed max-w-[340px] mb-8">
              {card.descriptor}
           </p>
           <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white group-hover/card:gap-3 transition-all">
              Learn more <ArrowRight size={14} />
           </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   MAIN COMPONENT — INFINITE CAROUSEL
───────────────────────────────────────────────────────── */
export const WpCapabilityCarousel = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();
  
  // Duplicate cards for infinite loop
  const cards = [...DEFAULT_CARDS, ...DEFAULT_CARDS];

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: [0, -100 * (DEFAULT_CARDS.length / cards.length) + '%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls, cards.length]);

  return (
    <section className="relative w-full overflow-hidden bg-[#0c1024] py-0 border-y border-white/5">
      {/* Title/Header (Optional, but usually nice) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none opacity-20">
         <h2 className="text-[12vw] font-black text-white/5 uppercase tracking-tighter leading-none select-none">
            Operational Pillars
         </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex items-center">
        <motion.div
          className="flex"
          animate={controls}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setActiveIndex(null);
          }}
        >
          {cards.map((card, i) => (
            <CarouselCard
              key={i}
              card={card}
              isActive={activeIndex === i}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            />
          ))}
        </motion.div>
      </div>

      {/* Side Vignettes for depth */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0c1024] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0c1024] to-transparent z-10 pointer-events-none" />
    </section>
  );
};
