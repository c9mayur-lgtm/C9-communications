'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Store, Building2, Briefcase } from 'lucide-react';

const slides = [
  {
    id: 'greenfield',
    eyebrow: 'New Business & Site Setups',
    title: 'Starting from Zero?\nZero Day-One Failures.',
    desc: 'Focus on opening your doors. We handle the complete IT, Telco and infrastructure setup—fully operational from the moment you open.',
    cta: 'Plan My New Site',
    href: '/greenfield',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    icon: <Store size={18} />,
    tags: ['Network Readiness', 'Procurement', 'Day 1 Guarantee']
  },
  {
    id: 'small-business',
    eyebrow: 'Managed IT & Connectivity',
    title: 'Upgrade Your Operations.\nEliminate Juggling.',
    desc: 'Stop managing multiple vendors. Consolidate your Managed IT, Business nbn® and Voice into a single, high-performance operational layer.',
    cta: 'Optimize My Business',
    href: '/business2',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200',
    icon: <Briefcase size={18} />,
    tags: ['Managed IT', 'nbn® Fast Fiber', 'Cloud Voice']
  },
  {
    id: 'enterprise',
    eyebrow: 'Multi-Site & Strategic IT',
    title: 'Unified Control for\nMulti-Site Operations.',
    desc: 'Scalable infrastructure and total vendor consolidation across every location. Enterprise-grade IT that actually moves as fast as you do.',
    cta: 'Explore Enterprise IT',
    href: '/enterprise',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    icon: <Building2 size={18} />,
    tags: ['Vendor Consolidation', 'SDA/SD-WAN', 'SLA Managed']
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
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="text-[#5D00D6]">{slide.icon}</div>
                  <span className="c9-eyebrow">{slide.eyebrow}</span>
                </div>
                
                <h1 className="c9-hero-title mb-4 whitespace-pre-line text-slate-900">
                  {slide.title}
                </h1>
                
                <p className="c9-body mb-8 max-w-[550px] text-slate-500">
                  {slide.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={slide.href}
                    className="inline-flex items-center justify-center gap-3 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group"
                  >
                    {slide.cta}
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-10 font-bold text-[15px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all"
                  >
                    Talk to an Expert
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {slide.tags.map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-500 font-bold text-[13px] uppercase tracking-wider">
                      <CheckCircle size={16} className="text-[#5D00D6]" />
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
      <div className="absolute bottom-10 left-6 md:left-[50%] md:-translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all rounded-full ${
              i === current ? 'w-10 bg-[#5D00D6]' : 'w-4 bg-slate-200 hover:bg-slate-300'
            }`}
          />
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
            <div className={`flex items-center gap-3 mb-1 ${i === current ? 'text-[#5D00D6]' : 'text-slate-400'}`}>
              {s.icon}
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">
                {s.id.split('-').join(' ')}
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

