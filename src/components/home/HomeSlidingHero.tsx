'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Store, Building2, Briefcase } from 'lucide-react';

const slides = [
  {
    id: 'greenfield',
    eyebrow: 'GREENFIELD',
    dotColor: '#10b981',
    title: 'Managed IT & Network Readiness for\nNew Site Rollouts',
    desc: 'Ensure every new site opens with fully operational connectivity, infrastructure, devices, and support—without vendor delays or deployment risk.',
    cta: 'View Rollout Approach',
    href: '#consultation-section',
    image: '/images/hero/greenfield.png',
    icon: <Briefcase size={18} />,
    tags: ['Zero-Delay Deployment', 'Standardised Infrastructure', 'On-Site Integration', 'Ready-to-Trade Delivery']
  },
  {
    id: 'brownfield',
    eyebrow: 'BROWNFIELD',
    dotColor: '#f59e0b',
    title: 'Consolidate IT, Telco, and Support\ninto One Accountable Model',
    desc: 'Reduce vendor fragmentation, improve operational visibility, and stabilise business-critical systems without disrupting day-to-day operations.',
    cta: 'View Stabilisation Model',
    href: '#consultation-section',
    image: '/images/hero/brownfield.png',
    icon: <Store size={18} />,
    tags: ['Vendor Consolidation', 'Visibility Mapping', 'No Transition Disruption', '24/7 Monitoring']
  },
  {
    id: 'enterprise',
    eyebrow: 'ENTERPRISE',
    dotColor: '#3b82f6',
    title: 'Enterprise Infrastructure Operations\nfor Multi-Site Organisations',
    desc: 'C9 Communications delivers enterprise-grade managed IT, network, and security services for multi-site organisations across Australia, backed by 24/7 operations, SLA-driven support, and proven large-scale deployments.',
    cta: 'Review Enterprise Operations',
    href: '#consultation-section',
    image: '/images/hero/enterprise.png',
    icon: <Building2 size={18} />,
    tags: ['SLA-Backed Performance', 'Governance Compliance', 'Root-Cause Ownership', 'Multi-Site Stability']
  }
];

export const HomeSlidingHero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[550px] lg:h-[600px] bg-white overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-6 md:px-8 h-full relative z-10" style={{ maxWidth: '1240px' }}>
        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-12 items-center h-full pt-2 md:pt-4">
          
          {/* Content Area */}
          <div className="relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="inline-flex items-center gap-2 mb-4 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: slide.dotColor }} />
                  <span className="c9-eyebrow !text-slate-600">{slide.eyebrow}</span>
                </div>
                
                <h1 className="c9-hero-title mb-4 whitespace-pre-line">
                  {slide.title}
                </h1>
                
                <p className="c9-body mb-8 max-w-[550px]">
                  {slide.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={slide.href}
                    className="inline-flex items-center justify-center gap-3 bg-[#5D00D6] text-white rounded-full h-14 px-10 c9-button-label hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group"
                  >
                    {slide.cta}
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#solutions"
                    className="inline-flex items-center justify-center gap-3 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-10 c9-button-label hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all"
                  >
                    Explore Solutions
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-4">
                  {slide.tags.map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-500 font-bold text-[11px] uppercase tracking-wider">
                      <CheckCircle size={14} className="text-[#5D00D6]" />
                      {tag}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Area - Desktop Only */}
          <div className="hidden xl:block h-[420px] relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#5D00D6]/5 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-6 left-6 md:left-[max(24px,calc(50%-620px))] flex items-center gap-4 z-30">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setDirection(i > current ? 1 : -1); }}
            className="flex flex-col items-start gap-1.5 group"
            aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
          >
            {/* Slide label */}
            <span className={`text-[9px] font-black uppercase tracking-[0.2em] leading-none transition-colors duration-300 ${
              i === current ? 'text-[#5D00D6]' : 'text-slate-300 group-hover:text-slate-400'
            }`}>
              {s.eyebrow}
            </span>
            {/* Progress bar track */}
            <div className={`h-[3px] rounded-full transition-all duration-300 overflow-hidden ${
              i === current ? 'w-16 bg-slate-200' : 'w-8 bg-slate-100 group-hover:bg-slate-200'
            }`}>
              {i === current && (
                <motion.div
                  key={current}
                  className="h-full rounded-full"
                  style={{ backgroundColor: s.dotColor }}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 8, ease: 'linear' }}
                />
              )}
              {i !== current && (
                <div className="h-full w-full rounded-full" style={{ backgroundColor: s.dotColor, opacity: 0.3 }} />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Selector Tabs - Desktop Overlay */}
      <div className="absolute right-8 bottom-1/2 translate-y-1/2 hidden 2xl:flex flex-col gap-3 z-30">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrent(i)}
            className={`w-[300px] text-left p-6 rounded-2xl transition-all border group ${
              i === current 
                ? 'bg-white border-[#5D00D6]/20 shadow-xl shadow-slate-200 ring-2 ring-[#5D00D6]/10 translate-x-[-10px]' 
                : 'bg-slate-50/80 border-transparent text-slate-400 hover:bg-white hover:border-slate-100'
            }`}
          >
            <div className={`flex items-center gap-3 mb-1 ${i === current ? 'text-slate-900' : 'text-slate-400'}`}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.dotColor }} />
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">
                {s.eyebrow}
              </span>
            </div>
            <p className={`font-bold text-[14px] leading-tight ${i === current ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
              {s.title.split('\n').join(' ')}
            </p>
          </button>
        ))}
      </div>

      {/* Lighter decorative accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
    </section>
  );
};

