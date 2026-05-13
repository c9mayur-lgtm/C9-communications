'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

/* ─── Types ──────────────────────────────────────────────── */
export interface CapabilityCard {
  title: string;
  descriptor: string;
  image: string;
  imageAlt: string;
  link: string;
  tag?: string;
}

interface WpCapabilityNavigatorProps {
  eyebrow?: string;
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  cards?: CapabilityCard[];
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
   MOBILE CARD — Full image card for swipe carousel
───────────────────────────────────────────────────────── */
const MobileCard = ({ card }: { card: CapabilityCard }) => (
  <Link
    href={card.link}
    className="relative flex-shrink-0 w-[80vw] max-w-[320px] rounded-2xl overflow-hidden snap-start"
    style={{ height: '340px' }}
    aria-label={`Explore ${card.title}`}
  >
    {/* Image */}
    <img
      src={card.image}
      alt={card.imageAlt}
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
      draggable={false}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/92 via-[#0c1024]/35 to-transparent" />

    {/* Top tag */}
    <div className="absolute top-4 left-4">
      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/55 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">
        {card.tag ?? 'C9 Managed'}
      </span>
    </div>

    {/* Bottom content */}
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <h3 className="text-[18px] font-bold text-white leading-tight tracking-tight mb-1.5">
        {card.title}
      </h3>
      <p className="text-[12px] text-white/55 leading-relaxed mb-4 line-clamp-2">
        {card.descriptor}
      </p>
      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
        Learn more <ArrowRight size={11} />
      </span>
    </div>

    {/* Left accent */}
    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#5D00D6]" />
  </Link>
);

/* ─────────────────────────────────────────────────────────
   DESKTOP ACCORDION STRIP
───────────────────────────────────────────────────────── */
const DesktopAccordion = ({
  cards,
  activeIndex,
  setActiveIndex,
}: {
  cards: CapabilityCard[];
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) => (
  <div
    className="hidden md:flex gap-[4px] rounded-2xl overflow-hidden"
    style={{ height: '500px' }}
  >
    {cards.map((card, i) => {
      const isActive = i === activeIndex;
      return (
        <div
          key={i}
          className="relative overflow-hidden cursor-pointer"
          style={{
            flex: isActive ? '5 0 0%' : '1 0 72px',
            transition: 'flex 550ms cubic-bezier(0.22, 1, 0.36, 1)',
            minWidth: 0,
          }}
          onClick={() => setActiveIndex(i)}
          onMouseEnter={() => setActiveIndex(i)}
          role="button"
          aria-label={`Explore ${card.title}`}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setActiveIndex(i)}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              transform: isActive ? 'scale(1.04)' : 'scale(1.1)',
              transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <img
              src={card.image}
              alt={card.imageAlt}
              className="w-full h-full object-cover select-none"
              draggable={false}
              loading="lazy"
            />
          </div>

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: isActive
                ? 'linear-gradient(to top, rgba(12,16,36,0.90) 0%, rgba(12,16,36,0.28) 55%, rgba(12,16,36,0.08) 100%)'
                : 'linear-gradient(to top, rgba(12,16,36,0.94) 0%, rgba(12,16,36,0.75) 50%, rgba(12,16,36,0.65) 100%)',
              transition: 'background 500ms ease',
            }}
          />

          {/* Top Icon */}
          <div className="absolute top-5 left-5 z-20">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center border"
              style={{
                backgroundColor: isActive ? '#5D00D6' : 'rgba(255,255,255,0.08)',
                borderColor: isActive ? '#5D00D6' : 'rgba(255,255,255,0.20)',
                transition: 'background-color 400ms ease, border-color 400ms ease',
              }}
            >
              {isActive
                ? <ArrowRight size={14} className="text-white" />
                : <Plus size={13} className="text-white/50" />
              }
            </div>
          </div>

          {/* Left accent bar */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#5D00D6]"
            style={{ opacity: isActive ? 1 : 0, transition: 'opacity 400ms ease' }}
          />

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
            {/* Non-active: vertical title */}
            <div
              style={{
                opacity: isActive ? 0 : 1,
                transition: 'opacity 200ms ease',
                pointerEvents: isActive ? 'none' : 'auto',
                position: isActive ? 'absolute' : 'relative',
              }}
            >
              <span
                className="text-[13px] font-bold text-white/80 tracking-wide leading-none whitespace-nowrap block"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                {card.title}
              </span>
            </div>

            {/* Active: full content */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  key={`content-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.28, delay: 0.15, ease: 'easeOut' }}
                >
                  <span className="inline-block text-[9px] font-bold uppercase tracking-[0.22em] text-white/50 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full mb-3">
                    {card.tag ?? 'C9 Managed'}
                  </span>
                  <h3 className="text-[22px] font-bold text-white leading-tight tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-white/55 leading-relaxed mb-5 max-w-[300px]">
                    {card.descriptor}
                  </p>
                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors group/link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn more
                    <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      );
    })}
  </div>
);

/* ─────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────── */
export const WpCapabilityNavigator = ({
  eyebrow = 'Operational Capabilities',
  headline = 'Operational detail for IT, Telco, and Security — operated as a single controlled system.',
  subtext = 'From managed infrastructure and connectivity to cybersecurity, cloud voice, and AI automation — C9 manages every operational layer with a single point of accountability.',
  ctaLabel = 'Explore Full Service Ecosystem',
  ctaHref = '/managed-it',
  cards = DEFAULT_CARDS,
}: WpCapabilityNavigatorProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [mobileCard, setMobileCard] = useState(0);

  const scrollMobile = (dir: 'left' | 'right') => {
    const next = dir === 'right'
      ? Math.min(mobileCard + 1, cards.length - 1)
      : Math.max(mobileCard - 1, 0);
    setMobileCard(next);
    const container = mobileScrollRef.current;
    if (!container) return;
    const cardEl = container.children[next] as HTMLElement;
    if (cardEl) cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-100 overflow-hidden relative">
      {/* Dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#5D00D6 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Section Header ─────────────────────────────────── */}
      <div className="container mx-auto px-6 md:px-8 max-w-[1400px] mb-10 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div className="max-w-2xl">
            <span className="c9-eyebrow !text-[#5D00D6] mb-3 md:mb-4 block">{eyebrow}</span>
            <h2 className="c9-section-heading text-[#0c1024] leading-[1.1] mb-4 md:mb-5">{headline}</h2>
            <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed max-w-[560px]">{subtext}</p>
          </div>
          {/* Desktop CTA */}
          <Link
            href={ctaHref}
            className="hidden md:flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[#5D00D6] transition-colors flex-shrink-0 group"
          >
            {ctaLabel}
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      {/* ── MOBILE: Swipe Carousel ──────────────────────────── */}
      <div className="md:hidden">
        <div
          ref={mobileScrollRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory pl-6 pr-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {cards.map((card, i) => (
            <MobileCard key={i} card={card} />
          ))}
        </div>

        {/* Mobile nav dots + arrows */}
        <div className="flex items-center justify-center gap-4 mt-6 px-6">
          <button
            onClick={() => scrollMobile('left')}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#5D00D6] hover:text-[#5D00D6] transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-1.5">
            {cards.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === mobileCard ? '20px' : '6px',
                  height: '6px',
                  backgroundColor: i === mobileCard ? '#5D00D6' : '#e2e8f0',
                }}
              />
            ))}
          </div>
          <button
            onClick={() => scrollMobile('right')}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#5D00D6] hover:text-[#5D00D6] transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Mobile CTA */}
        <div className="flex justify-center mt-8 px-6">
          <Link
            href={ctaHref}
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[#5D00D6] transition-colors"
          >
            {ctaLabel} <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* ── DESKTOP: Accordion Strip ────────────────────────── */}
      <div className="hidden md:block px-6 md:px-8 max-w-[1400px] mx-auto">
        <DesktopAccordion
          cards={cards}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>

      {/* ── Trust Footer ─────────────────────────────────────── */}
      <div className="container mx-auto px-6 md:px-8 max-w-[1400px]">
        <div className="mt-10 md:mt-12 h-px w-full bg-slate-100" />
        <div className="flex flex-wrap gap-x-6 md:gap-x-10 gap-y-3 md:gap-y-4 mt-6 md:mt-8">
          {[
            '500+ Sites Delivered Across AU & NZ',
            'Single Accountable Provider',
            'Human-Staffed Support',
            'Enterprise-Grade SLAs',
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400"
            >
              <span className="w-1 h-1 rounded-full bg-[#5D00D6] inline-block flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
