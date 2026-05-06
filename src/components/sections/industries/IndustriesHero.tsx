'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { C9Button } from '@/components/design-system/C9Button';

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
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-20 border-b border-slate-100">
      {/* Subtle grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse at center top, #5D00D6, transparent 70%)' }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-[1240px] text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-8">
            <span className="c9-eyebrow !mb-0">Industry Solutions</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1 className="c9-hero-title mb-6 max-w-4xl mx-auto">
            Technology Solutions Built for the{' '}
            <span className="text-[#5D00D6]">Way Your Industry Operates</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="c9-body text-slate-700 text-[18px] mb-2 max-w-2xl mx-auto">
            Every industry has different demands. We design, deliver, and support IT and
            communications environments that align with how your business actually runs.
          </p>
          <p className="text-[14px] text-[#5D00D6] font-bold mb-10">Supporting industry-specific environments with reliable, scalable systems</p>
        </FadeIn>

        <FadeIn delay={0.24}>
          <div className="flex flex-col items-center gap-4">
            <C9Button
              size="lg"
              className="rounded-full shadow-xl"
              onClick={() => {
                document.getElementById('industry-grid')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Industries
            </C9Button>
            <p className="text-[14px] text-slate-600">No obligation. Just clear, practical advice.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
