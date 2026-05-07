'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MapPin, CheckCircle, BadgeCheck } from 'lucide-react';
import { C9Button } from '@/components/design-system/C9Button';

const FadeIn = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const HeroSection = ({ onOpenQualifier }: { onOpenQualifier: () => void }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-16 lg:pt-20 lg:pb-24 font-dm-sans">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-100/50 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          {/* Left Column: Text */}
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 mb-6">
                <Zap size={14} className="text-[#5D00D6]" />
                <span className="c9-eyebrow !mb-0 font-bold uppercase tracking-widest text-[10px]">Greenfield Site Solutions</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="c9-hero-title !text-[32px] md:!text-[42px] lg:!text-[52px] mb-8 font-clash">
                Your New Site. <br/>
                <span className="text-[#5D00D6]">Fully Operational from Day One.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="c9-body mb-10 max-w-xl text-slate-500">
                Single partner for IT, Telco, and infrastructure — delivered, tested, and ready before your doors open.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <C9Button 
                  size="lg"
                  onClick={onOpenQualifier}
                  className="rounded-full h-14 px-10 shadow-xl shadow-purple-200"
                >
                  Plan My New Site
                </C9Button>
                <C9Button 
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full h-14 px-10"
                >
                  <a href="#how-it-works">See How It Works</a>
                </C9Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-8 border-t border-slate-100">
                {[
                  { text: '12+ sites delivered across 3 states', icon: <MapPin size={16} /> },
                  { text: 'Fully commissioned in under 6 weeks', icon: <Zap size={16} /> },
                  { text: 'Single point of accountability', icon: <CheckCircle size={16} /> },
                  { text: 'National rollout capability', icon: <BadgeCheck size={16} /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-500 font-semibold text-[14px]">
                    <span className="text-[#5D00D6]">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Image */}
          <FadeIn delay={0.3} direction="left" className="relative hidden lg:block">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#5D00D6]/10 rounded-[32px] rotate-3 group-hover:rotate-2 transition-transform duration-500" />
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/5] border border-slate-100">
                <img 
                  src="/images/greenfield_hero.png" 
                  alt="Professional team delivering modern IT infrastructure" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                
                {/* Floating UI elements */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50">
                   <div className="flex items-center justify-between mb-3">
                      <span className="c9-eyebrow !mb-0 font-bold uppercase tracking-widest text-[10px]">Operational Status</span>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6] animate-pulse" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6] animate-pulse delay-75" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6] animate-pulse delay-150" />
                      </div>
                   </div>
                   <div className="text-xl font-bold text-[#0c1024] leading-tight font-clash">Systems Fully Verified</div>
                   <div className="text-[14px] text-slate-500 font-medium mt-1">Ready for Opening Day ✓</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
