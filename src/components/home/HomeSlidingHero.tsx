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
    href: '/greenfield',
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
    href: '/business',
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
    href: '/enterprise',
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
    <section className="relative h-auto pt-0 pb-12 xl:py-0 xl:h-[600px] bg-white overflow-hidden border-b border-slate-100 flex items-center">
      <div className="container mx-auto px-6 md:px-8 h-full relative z-10" style={{ maxWidth: '1240px' }}>
        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-4 xl:gap-12 items-center h-full pt-0 xl:pt-8 pb-20 md:pt-4 md:pb-4">
          
          {/* Image Area - Responsive (Comes first on mobile/tablet) */}
          <div className="order-1 xl:order-2 relative h-[250px] sm:h-[350px] xl:h-[420px] rounded-[24px] xl:rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200 mb-4 xl:mb-0">
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

          {/* Content Area - Responsive (Comes second on mobile/tablet) */}
          <div className="order-2 xl:order-1 relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="mb-4">
                  <span className="c9-eyebrow !text-[#5D00D6] uppercase tracking-[0.2em]">{slide.eyebrow}</span>
                </div>
                
                <h1 className="c9-hero-title mb-4 whitespace-normal sm:whitespace-pre-line">
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
                    href="/managed-it"
                    className="inline-flex items-center justify-center gap-3 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-10 c9-button-label hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all"
                  >
                    Explore Services
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

        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setDirection(i > current ? 1 : -1); }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? 'w-10 bg-[#5D00D6]' : 'w-2 bg-slate-200 hover:bg-slate-300'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Lighter decorative accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
    </section>
  );
};

