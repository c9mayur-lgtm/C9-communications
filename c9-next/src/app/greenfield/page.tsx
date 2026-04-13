'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Wifi, Phone, Monitor, Shield,
  ShoppingBag, HeadphonesIcon, ChevronLeft, ChevronRight,
  Building2, Zap, Layers, AlertTriangle, TrendingDown, Clock
} from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';


/* ─────────────────────────────────────────────────────────
   FADE-IN ANIMATION WRAPPER
   ───────────────────────────────────────────────────────── */
const FadeIn = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO
   ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-14 lg:pb-32">
    {/* Subtle grid backdrop */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
    <div className="relative z-10 container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — text */}
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-6">
              <Zap size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Greenfield Business Setup</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Starting a New Office or Business?{' '}
              <span className="text-[#5D00D6]">We Set Up Everything</span> — Properly.
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="c9-body mb-10 max-w-[540px]">
              IT, Internet, Phones, Devices, Security, and Workplace — designed, delivered, and
              managed as one seamless system. So you can focus on your business, not your vendors.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#lead-builder"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('lead-builder')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-colors shadow-xl shadow-purple-900/20 group"
              >
                Plan My Setup <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#slider"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('slider')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-colors"
              >
                See What We Set Up
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.28}>
            <div className="flex flex-wrap gap-6 mt-10">
              {['99.99% Uptime SLA', 'Single Vendor', 'Day One Ready'].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-slate-500 text-[13px] font-semibold">
                  <CheckCircle size={16} className="text-[#5D00D6]" /> {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right — hero image */}
        <FadeIn delay={0.1} className="relative">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/80 aspect-[4/3] group cursor-pointer">
            <img
              src="/images/greenfield_hero.png"
              alt="Modern office setup managed by C9 Communications"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/20 via-transparent to-transparent group-hover:from-[#0c1024]/30 transition-colors duration-700" />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg border border-white/60">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#5D00D6] mb-1">Quick Setup</div>
              <div className="text-[18px] font-bold text-slate-900 leading-tight">All tech. One partner.</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — PRIORITY SOLUTIONS (FAQ-STYLE)
   ───────────────────────────────────────────────────────── */
const solutions = [
  { 
    icon: <Zap size={20} className="text-[#5D00D6]" />, 
    q: "Need internet and phones fast?", 
    a: "We deploy rapid 5G internet and cloud phones immediately while your permanent fixed-line services are built."
  },
  { 
    icon: <Layers size={20} className="text-[#5D00D6]" />, 
    q: "Dealing with too many vendors?", 
    a: "We consolidate your telco, IT, and security into a single point of truth with one simple invoice." 
  },
  { 
    icon: <Shield size={20} className="text-[#5D00D6]" />, 
    q: "Worried about making the wrong tech choices?", 
    a: "Our experts architect a scalable, future-proof solution tailored to the exact realities of your industry."
  },
  { 
    icon: <Monitor size={20} className="text-[#5D00D6]" />, 
    q: "Need your team ready to work day one?", 
    a: "We pre-configure all devices, accounts, and networks. Your team comes in, logs on, and hits the ground running."
  },
  { 
    icon: <HeadphonesIcon size={20} className="text-[#5D00D6]" />, 
    q: "What happens when things go wrong?", 
    a: "Our 24/7 Australian-based team treats your business-critical helpdesk issues as our absolute top priority."
  },
  { 
    icon: <Building2 size={20} className="text-[#5D00D6]" />, 
    q: "Don't have time to manage an IT rollout?", 
    a: "We aggressively project-manage the entire end-to-end setup behind the scenes, so you can focus on launch."
  },
];

const PrioritySolutionsBlock = () => (
  <section className="py-24 bg-slate-50 border-y border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn>
        <div className="text-center mb-14">
          <p className="c9-eyebrow mb-4">Fast & Reliable Answers</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Your Priorities, Solved.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We know starting a new site is stressful. We treat your business-critical setup with top priority, delivering rapid solutions so you don't skip a beat.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {solutions.map((s, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-[#5D00D6]/30 transition-all duration-300 h-full flex flex-col group">
              <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center mb-5 group-hover:bg-[#5D00D6]/10 transition-colors">
                {s.icon}
              </div>
              <p className="text-slate-900 font-bold text-[16px] leading-snug mb-3 pr-4">{s.q}</p>
              <p className="text-slate-600 text-[14px] leading-relaxed mt-auto">{s.a}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="bg-[#5D00D6] rounded-3xl px-10 py-8 text-center max-w-3xl mx-auto">
          <p className="text-white text-2xl md:text-3xl font-bold tracking-tight">
            Stop stressing about the tech.
          </p>
          <p className="text-white/75 mt-3 text-lg">
            C9 handles everything end-to-end — your operations are our top priority.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — INTERACTIVE SLIDER
   ───────────────────────────────────────────────────────── */
const slides = [
  {
    icon: <Wifi size={28} />,
    title: 'Internet & Network Setup',
    hook: 'Fast, secure connectivity from day one.',
    bullets: ['Business-grade nbn™ & Fibre', 'Secure WiFi 6 & access points', 'Network design & cable management', 'Failover & redundancy built in'],
    img: '/images/greenfield_internet.png',
    color: '#5D00D6',
  },
  {
    icon: <Phone size={28} />,
    title: 'Phone Systems & Communication',
    hook: 'Professional communication that just works.',
    bullets: ['Cloud VoIP phone systems', 'Call routing & IVR', 'Microsoft Teams & Zoom integration', '1300 / 1800 inbound numbers'],
    img: '/images/greenfield_phones.png',
    color: '#7B2FF7',
  },
  {
    icon: <Monitor size={28} />,
    title: 'Devices & Team Setup',
    hook: 'Your team ready from day one.',
    bullets: ['Laptops, desktops & monitors', 'Secure device configuration', 'User onboarding & accounts', 'Mobile devices & MDM'],
    img: '/images/greenfield_devices.png',
    color: '#5D00D6',
  },
  {
    icon: <Shield size={28} />,
    title: 'Security & Protection',
    hook: 'Physical and digital security handled.',
    bullets: ['AI CCTV & people counting', 'Access control systems', 'Next-gen firewall & antivirus', 'Compliance & data backup'],
    img: '/images/greenfield_security.png',
    color: '#7B2FF7',
  },
  {
    icon: <ShoppingBag size={28} />,
    title: 'Business Tools & Systems',
    hook: 'Everything your operations need.',
    bullets: ['POS systems for retail', 'Managed printers & scanners', 'Business software setup', 'Visitor management systems'],
    img: '/images/greenfield_retail.png',
    color: '#5D00D6',
  },
  {
    icon: <HeadphonesIcon size={28} />,
    title: 'Managed Support',
    hook: "We don't disappear after setup.",
    bullets: ['24/7 monitoring & alerts', 'AU-based helpdesk', 'Proactive maintenance', 'Quarterly optimisation reviews'],
    img: '/images/greenfield_support.png',
    color: '#7B2FF7',
  },
];

const Slider = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(slides.length - 1, a + 1));

  return (
    <section id="slider" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-[#5D00D6] font-bold text-[12px] uppercase tracking-widest mb-3">Complete Coverage</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight max-w-xl">
                Everything Your Business Needs — Already Covered
              </h2>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={prev}
                disabled={active === 0}
                className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#5D00D6] hover:text-[#5D00D6] disabled:opacity-30 transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-[13px] font-bold text-slate-400 min-w-[40px] text-center">
                {active + 1}/{slides.length}
              </span>
              <button
                onClick={next}
                disabled={active === slides.length - 1}
                className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#5D00D6] hover:text-[#5D00D6] disabled:opacity-30 transition-all"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Tab Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 hide-scrollbar">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-bold whitespace-nowrap transition-all duration-300 ${
                active === i
                  ? 'bg-[#5D00D6] text-white shadow-lg shadow-purple-900/20'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {s.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text side */}
              <div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-7"
                  style={{ backgroundColor: slides[active].color }}
                >
                  {slides[active].icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">
                  {slides[active].title}
                </h3>
                <p className="text-[#5D00D6] font-bold text-lg mb-7">{slides[active].hook}</p>
                <ul className="space-y-4">
                  {slides[active].bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-[#5D00D6] shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-semibold text-[15px]">{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#lead-builder"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('lead-builder')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 mt-10 bg-slate-900 text-white rounded-full h-13 px-8 font-bold text-[14px] hover:bg-[#5D00D6] transition-colors group"
                >
                  Include This In My Setup <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Image side */}
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3]">
                <img
                  src={slides[active].img}
                  alt={slides[active].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c1024]/10 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                active === i ? 'bg-[#5D00D6] w-8 h-2' : 'bg-slate-200 w-2 h-2 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 3.5 — VENDOR TECHNOLOGY & INFRASTRUCTURE
   ───────────────────────────────────────────────────────── */
const yealinkProducts = [
  {
    name: "MeetingBar A20",
    desc: "For huddle and small rooms",
    badge: "Certified for Microsoft Teams",
    img: "/images/boardroom-mtr.webp",
    isNew: true
  },
  {
    name: "SIP-T54W",
    desc: "Premium desk phone for executives and managers",
    badge: "Certified for Microsoft Teams",
    img: "/images/yealink-t54w.png",
    isNew: false
  },
  {
    name: "W73P DECT",
    desc: "High-performance cordless phone system",
    badge: "Certified for Microsoft Teams",
    img: "/images/yealink-w73p.png",
    isNew: true
  },
  {
    name: "BH71 Pro",
    desc: "Mono Bluetooth Wireless Headset",
    badge: "Unified Communications",
    img: "/images/yealink-bh71.png",
    isNew: false
  },
  {
    name: "MeetingBoard 65",
    desc: "Smart Interactive Display for Teams",
    badge: "Certified for Microsoft Teams",
    img: "/images/video_collaboration_desk.jpg",
    isNew: true
  }
];

const VendorTechnologyBlock = () => (
  <section className="py-32 bg-white border-y border-slate-100 overflow-hidden relative">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px] text-center mb-20 relative z-20">
      <FadeIn>
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 mb-6 shadow-sm">
          <img src="/images/clients/yealink.png" alt="Yealink" className="h-4 object-contain opacity-90" />
          <div className="w-px h-4 bg-slate-300"></div>
          <span className="text-[13px] font-extrabold text-slate-700 tracking-widest uppercase">Hardware Partner</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          Enterprise Hardware Solutions
        </h2>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          From premium desk phones to intelligent boardroom cameras, we deploy a complete, fully certified communication tier that works seamlessly from day one.
        </p>
      </FadeIn>
    </div>

    {/* Horizontal Ticker Wrapper */}
    <div className="relative w-full max-w-[1800px] mx-auto pb-10 group">
      {/* CSS based infinite scroll animation */}
      <style dangerouslySetContent={{ __html: `
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: ticker-scroll 45s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Gradients to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

      {/* Ticker Track */}
      <div className="overflow-hidden">
        <div className="ticker-track px-6">
          {[...yealinkProducts, ...yealinkProducts, ...yealinkProducts].map((prod, idx) => (
            <div key={idx} className="shrink-0 w-[280px] md:w-[320px] flex flex-col items-center">
              <div className="w-full bg-white border border-slate-100 hover:border-[#5D00D6]/30 hover:shadow-2xl hover:shadow-[#5D00D6]/10 rounded-3xl p-8 transition-all duration-500 aspect-square flex flex-col items-center justify-center relative mb-8 cursor-pointer group/card">
                {prod.isNew && (
                  <div className="absolute top-5 left-5 bg-[#10b981] text-white text-[10px] font-black tracking-widest px-2.5 py-1 rounded">
                    NEW
                  </div>
                )}
                <div className="absolute top-5 right-5 opacity-0 group-hover/card:opacity-100 transition-opacity">
                   <Monitor size={16} className="text-slate-300" />
                </div>
                <img 
                  src={prod.img} 
                  alt={prod.name} 
                  className={`max-h-[160px] w-auto transition-transform duration-500 group-hover/card:scale-110 group-hover/card:-translate-y-2 drop-shadow-xl ${prod.img.includes('boardroom') || prod.img.includes('video_collaboration') ? 'rounded-xl object-cover' : 'object-contain'}`} 
                />
              </div>
              
              <div className="text-center px-4">
                <div className="inline-flex items-center justify-center border border-[#4F46E5] text-[#4F46E5] bg-indigo-50/50 text-[9px] font-extrabold uppercase tracking-wider px-3 py-1 mb-4 rounded-sm">
                  {prod.badge}
                </div>
                <h3 className="text-[19px] font-extrabold text-slate-900 tracking-tight mb-2">{prod.name}</h3>
                <p className="text-[13.5px] font-medium text-slate-500 leading-relaxed min-h-[40px]">{prod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — WHY C9
   ───────────────────────────────────────────────────────── */
const differentiators = [
  {
    icon: <Building2 size={28} className="text-[#5D00D6]" />,
    title: 'One Partner',
    body: "One contract. One invoice. One phone number. We coordinate every vendor, every trade, every component — so you never have to chase anyone.",
  },
  {
    icon: <Layers size={28} className="text-[#5D00D6]" />,
    title: 'Everything Connected',
    body: "Phones talk to your internet. Security connects to access control. Devices sync to your cloud. We engineer the whole system to work as one — not a collection of isolated parts.",
  },
  {
    icon: <Zap size={28} className="text-[#5D00D6]" />,
    title: 'Built Right From Day One',
    body: "Cutting corners in setup creates expensive problems later. We follow enterprise-grade methodologies so you build on a foundation that supports growth, not one that holds it back.",
  },
];

const WhyC9 = () => (
  <section className="py-24 bg-[#0c1024]">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-[#5D00D6] font-bold text-[12px] uppercase tracking-widest mb-4">The C9 Difference</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Greenfield Businesses Choose C9
          </h2>
        </div>
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-8">
        {differentiators.map((d, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-white/5 border border-white/10 rounded-[28px] p-8 hover:bg-white/8 hover:border-[#5D00D6]/40 transition-all duration-400 group">
              <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/10 flex items-center justify-center mb-6 group-hover:bg-[#5D00D6]/20 transition-colors">
                {d.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{d.title}</h3>
              <p className="text-white/60 leading-relaxed text-[15px] font-medium">{d.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — INTERACTIVE LEAD BUILDER
   ───────────────────────────────────────────────────────── */
const setupItems: Record<string, string[]> = {
  Office: ['Business-grade internet & WiFi', 'Cloud phone system & Teams calling', 'Managed workstations & monitors', 'Next-gen firewall & cybersecurity', 'Access control & CCTV', 'M365 & cloud infrastructure'],
  Retail: ['High-speed internet & POS connectivity', 'POS systems & barcode scanners', 'Managed printers & receipt systems', 'AI CCTV & people counting', 'Business SIM & mobile fleet', 'Visitor management & access control'],
  Warehouse: ['Industrial WiFi & network design', 'Fleet mobile devices & MDM', 'Inventory & barcode systems', 'CCTV & perimeter security', 'VoIP phones & intercom', 'Compliance & backup solutions'],
  'Remote Team': ['Secure cloud infrastructure', 'Virtual phone system & 1300 numbers', 'Laptop procurement & secure setup', 'VPN & endpoint security', 'Microsoft Teams & video conferencing', 'IT helpdesk & proactive monitoring'],
};

const LeadBuilder = () => {
  const [bizType, setBizType] = useState('');
  const [employees, setEmployees] = useState('');
  const [location, setLocation] = useState('');
  const [timeline, setTimeline] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isReady = bizType && employees && location && timeline;
  const items = setupItems[bizType] || [];

  return (
    <section id="lead-builder" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-[#5D00D6] font-bold text-[12px] uppercase tracking-widest mb-4">Your Custom Plan</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-5">
              Tell Us What You're Setting Up
            </h2>
            <p className="text-slate-500 text-lg">
              Answer four quick questions and we'll show you exactly what your setup will include — and how we'd approach it.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-100/80 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Business Type */}
                <div>
                  <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Business Type</label>
                  <select
                    value={bizType}
                    onChange={(e) => { setBizType(e.target.value); setSubmitted(false); }}
                    className="w-full h-12 px-4 rounded-xl border-2 border-slate-200 text-slate-800 font-semibold text-[15px] focus:outline-none focus:border-[#5D00D6] transition-colors bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Select your business type…</option>
                    <option>Office</option>
                    <option>Retail</option>
                    <option>Warehouse</option>
                    <option>Remote Team</option>
                  </select>
                </div>

                {/* Number of Employees */}
                <div>
                  <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Team Size</label>
                  <select
                    value={employees}
                    onChange={(e) => setEmployees(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border-2 border-slate-200 text-slate-800 font-semibold text-[15px] focus:outline-none focus:border-[#5D00D6] transition-colors bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Number of employees…</option>
                    <option>1–5</option>
                    <option>6–15</option>
                    <option>16–50</option>
                    <option>50+</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Location</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border-2 border-slate-200 text-slate-800 font-semibold text-[15px] focus:outline-none focus:border-[#5D00D6] transition-colors bg-white appearance-none cursor-pointer"
                  >
                    <option value="">State or city…</option>
                    <option>Sydney, NSW</option>
                    <option>Melbourne, VIC</option>
                    <option>Brisbane, QLD</option>
                    <option>Perth, WA</option>
                    <option>Adelaide, SA</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Timeline</label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border-2 border-slate-200 text-slate-800 font-semibold text-[15px] focus:outline-none focus:border-[#5D00D6] transition-colors bg-white appearance-none cursor-pointer"
                  >
                    <option value="">When do you need this?</option>
                    <option>Within 2 weeks</option>
                    <option>1 month</option>
                    <option>2–3 months</option>
                    <option>Just planning ahead</option>
                  </select>
                </div>
              </div>

              <button
                disabled={!isReady}
                onClick={() => setSubmitted(true)}
                className="w-full h-14 rounded-full bg-[#5D00D6] text-white font-bold text-[16px] hover:bg-[#4d00b3] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xl shadow-purple-900/20"
              >
                Show Me My Setup Plan →
              </button>

              {/* Dynamic output */}
              <AnimatePresence>
                {submitted && isReady && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-8 pt-8 border-t border-slate-100">
                      <p className="text-slate-500 text-[13px] font-bold uppercase tracking-wider mb-5">
                        Here's what your <span className="text-[#5D00D6]">{bizType}</span> setup with{' '}
                        <span className="text-[#5D00D6]">{employees}</span> people may include…
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {items.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                            <CheckCircle size={16} className="text-[#5D00D6] shrink-0" />
                            <span className="text-slate-700 font-semibold text-[14px]">{item}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href="#consultation-section"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-colors shadow-xl shadow-purple-900/20 group"
                      >
                        Get My Setup Plan <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 6 — RISK REVERSAL
   ───────────────────────────────────────────────────────── */
const risks = [
  {
    icon: <TrendingDown size={24} className="text-red-400" />,
    title: 'Poor Performance',
    body: 'Patched-together setups create bottlenecks — slow internet, dropped calls and frustrated teams from the day you open.',
  },
  {
    icon: <Shield size={24} className="text-orange-400" />,
    title: 'Security Gaps',
    body: 'Without a proper security layer, a new business is an easy target. Breaches in the first year can be fatal.',
  },
  {
    icon: <Clock size={24} className="text-yellow-500" />,
    title: 'Expensive Rebuilds',
    body: 'Undoing bad infrastructure is 3–5× the cost of getting it right first time. Every shortcut taken now is a future invoice.',
  },
  {
    icon: <AlertTriangle size={24} className="text-rose-400" />,
    title: 'Vendor Chaos',
    body: "When things go wrong, multiple vendors point fingers at each other. You're the one left without a working business.",

  },
];

const RiskReversal = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn>
        <div className="max-w-2xl mb-16">
          <p className="text-red-500 font-bold text-[12px] uppercase tracking-widest mb-4">Don't Learn This the Hard Way</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            What Happens If You Don't Set This Up Right?
          </h2>
          <p className="text-slate-500 text-lg">
            Most new businesses encounter these problems within the first six months of operating. C9 eliminates them from day one.
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6 mb-14">
        {risks.map((r, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="flex gap-5 p-7 rounded-[24px] border border-slate-100 bg-slate-50 hover:border-red-100 hover:bg-red-50/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0 border border-slate-100">
                {r.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-red-700 transition-colors">{r.title}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed font-medium">{r.body}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="bg-[#5D00D6] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
              We eliminate all of these from day one.
            </h3>
            <p className="text-white/70 text-[15px] max-w-lg">
              Every setup we deliver is engineered, not assembled. That's the difference between a technology foundation and a technology risk.
            </p>
          </div>
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#5D00D6] rounded-full h-14 px-9 font-bold text-[15px] hover:bg-slate-100 transition-colors group"
          >
            Get It Right First Time <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — FINAL CTA
   ───────────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="py-24 bg-slate-50 border-t border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div>
            <p className="text-[#5D00D6] font-bold text-[12px] uppercase tracking-widest mb-5">Ready to Launch?</p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              Let's Get Your Business Ready — Properly.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md">
              Book a free 30-minute setup strategy session with our Australian team. We'll map your internet, phones, IT, devices, and security into one clear plan — before you commit to anything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#consultation-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-colors shadow-xl shadow-purple-900/20 group"
              >
                Book Setup Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#lead-builder"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('lead-builder')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-colors"
              >
                Plan My Business Setup
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {['No obligation', 'Australian-based team', 'One partner, everything handled'].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-slate-500 text-[13px] font-semibold">
                  <CheckCircle size={15} className="text-[#5D00D6]" /> {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group cursor-pointer">
            <img
              src="/images/greenfield_consultation.png"
              alt="Business owner meeting with C9 consultant"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/20 via-transparent to-transparent group-hover:from-[#5D00D6]/30 transition-colors duration-700" />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function GreenfieldPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <PrioritySolutionsBlock />
      <Slider />
      <VendorTechnologyBlock />
      <WhyC9 />
      <LeadBuilder />
      <RiskReversal />
      <FinalCTA />
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="GREENFIELD SETUP CONSULTATION"
          title="Get your complete business setup — before Day One."
          description="Book a free 30-minute strategy session with our senior consultants. We'll map your internet, phones, IT, devices, security and workplace into one seamless plan ready before you open the doors."
          formTitle="Book My Free Setup Call"
        />
      </section>
    </main>
  );
}
