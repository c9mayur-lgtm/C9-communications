'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

/* ─── Types ──────────────────────────────────────────────── */
export interface CapabilityCard {
  title: string;
  descriptor?: string;
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

/* ─── Default Cards ──────────────────────────────────────── */
const DEFAULT_CARDS: CapabilityCard[] = [
  {
    title: 'Managed IT Operations',
    descriptor: 'Proactive infrastructure management with a human-first helpdesk.',
    image: '/images/c9_team_collaboration.png',
    imageAlt: 'C9 IT operations team managing business environments',
    link: '/managed-it',
    tag: 'Managed IT',
  },
  {
    title: 'Business Connectivity',
    descriptor: 'nbn™, Fast Fibre, SIP and failover — all under one accountable provider.',
    image: '/images/business_internet_hero.png',
    imageAlt: 'Enterprise connectivity and communications environment',
    link: '/telco',
    tag: 'Telco',
  },
  {
    title: 'Cybersecurity Operations',
    descriptor: 'Essential 8, endpoint protection, and continuous threat monitoring.',
    image: '/images/c9_risk_team.png',
    imageAlt: 'Security operations team protecting business environments',
    link: '/managed-it/security-solutions',
    tag: 'Security',
  },
  {
    title: 'Modern Workplace',
    descriptor: 'M365, hybrid collaboration, and managed productivity across every device.',
    image: '/modern_m365_conference_room.png',
    imageAlt: 'Hybrid workforce collaboration across office and remote environments',
    link: '/modern-workplace',
    tag: 'Workplace',
  },
  {
    title: 'Teams Calling & Voice',
    descriptor: 'Cloud phone systems, SIP trunking, and Teams-native calling.',
    image: '/modern_workplace_teams_unified_comms_1777367199429.png',
    imageAlt: 'Business communication and Teams collaboration environment',
    link: '/telco/teams-calling',
    tag: 'Voice',
  },
  {
    title: 'Contact Centre Operations',
    descriptor: 'Live customer interactions managed across inbound, IVR, and omnichannel.',
    image: '/modern_communication_collaboration.png',
    imageAlt: 'Customer support and contact centre team managing live interactions',
    link: '/telco/contact-centre',
    tag: 'Contact Centre',
  },
  {
    title: 'Cloud & Infrastructure',
    descriptor: 'Server, cloud, and network environments managed as one.',
    image: '/images/c9_support_engineer.png',
    imageAlt: 'Enterprise cloud and infrastructure management operations',
    link: '/managed-it/infrastructure',
    tag: 'Infrastructure',
  },
  {
    title: 'AI Voice & Automation',
    descriptor: 'Managed AI call workflows with human escalation and full governance.',
    image: '/human-ai-collaboration.png',
    imageAlt: 'AI-assisted customer communication workflows with human oversight',
    link: '/telco/ai-voice',
    tag: 'AI Voice',
  },
];

/* ─── Single Card ────────────────────────────────────────── */
const CapabilityCardItem = ({ card }: { card: CapabilityCard }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={card.link}
      className="relative flex-shrink-0 w-[300px] md:w-[340px] h-[420px] md:h-[480px] rounded-2xl overflow-hidden cursor-pointer group outline-none focus-visible:ring-2 focus-visible:ring-[#5D00D6]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Explore ${card.title}`}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={card.image}
          alt={card.imageAlt}
          fill
          sizes="(max-width: 768px) 300px, 340px"
          className="object-cover"
          priority={false}
        />
      </motion.div>

      {/* Gradient Overlay — darkens on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/90 via-[#0c1024]/40 to-[#0c1024]/10"
        animate={{ opacity: hovered ? 1 : 0.82 }}
        transition={{ duration: 0.4 }}
      />

      {/* Top Tag */}
      <div className="absolute top-5 left-5 z-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full">
          {card.tag ?? 'C9 Managed'}
        </span>
      </div>

      {/* Content Block — slides slightly up on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 p-7"
        animate={{ y: hovered ? -6 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Descriptor — fades in on hover */}
        {card.descriptor && (
          <motion.p
            className="text-[13px] text-white/65 leading-relaxed mb-3 max-w-[240px]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.35, delay: hovered ? 0.05 : 0 }}
          >
            {card.descriptor}
          </motion.p>
        )}

        <h3 className="text-[20px] font-bold text-white leading-tight tracking-tight mb-4">
          {card.title}
        </h3>

        {/* CTA Row */}
        <motion.div
          className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80"
          animate={{ opacity: hovered ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <span>Explore</span>
          <motion.span
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <ArrowRight size={13} />
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Subtle purple glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl ring-2 ring-[#5D00D6]"
        animate={{ opacity: hovered ? 0.6 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ pointerEvents: 'none' }}
      />
    </Link>
  );
};

/* ─── Main Component ─────────────────────────────────────── */
export const WpCapabilityNavigator = ({
  eyebrow = 'Operational Capabilities',
  headline = 'Real Business Operations — Supported as One Managed Environment',
  subtext = 'From managed IT and connectivity to cybersecurity, collaboration, and customer communication, C9 helps Australian businesses operate through integrated technology environments with clear accountability and operational support.',
  ctaLabel = 'Explore Service Ecosystem',
  ctaHref = '/managed-it',
  cards = DEFAULT_CARDS,
}: WpCapabilityNavigatorProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 360;
    scrollRef.current.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-20 md:py-28 bg-[#0c1024] overflow-hidden relative">
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#5D00D6]/12 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1400px]">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="c9-eyebrow !text-[#5D00D6] mb-4 block">
              {eyebrow}
            </span>
            <h2 className="c9-section-heading !text-white leading-[1.12] mb-5">
              {headline}
            </h2>
            <p className="text-[15px] text-white/50 leading-relaxed max-w-[600px]">
              {subtext}
            </p>
          </div>

          {/* Desktop CTA + Scroll Controls */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href={ctaHref}
              className="hidden md:flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors group"
            >
              {ctaLabel}
              <motion.span
                className="inline-flex"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={14} />
              </motion.span>
            </Link>

            {/* Scroll Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="snap-start flex-shrink-0"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <CapabilityCardItem card={card} />
            </motion.div>
          ))}

          {/* Trailing spacer */}
          <div className="flex-shrink-0 w-2" />
        </div>

        {/* Mobile CTA */}
        <div className="flex justify-center mt-10 md:hidden">
          <Link
            href={ctaHref}
            className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors"
          >
            {ctaLabel}
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Bottom Rule */}
        <div className="mt-16 h-px w-full bg-white/5" />

        {/* Trust Footer Row */}
        <div className="flex flex-wrap gap-x-10 gap-y-4 mt-8 items-center">
          {['500+ Sites Delivered Across AU & NZ', 'Single Accountable Provider', 'Human-Staffed Support', 'Enterprise-Grade SLAs'].map(
            (item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/30"
              >
                <span className="w-1 h-1 rounded-full bg-[#5D00D6] inline-block" />
                {item}
              </div>
            )
          )}
        </div>
      </div>

      <style>{`
        section::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};
