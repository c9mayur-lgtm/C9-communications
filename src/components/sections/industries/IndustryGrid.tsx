'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Stethoscope, Briefcase, Building2, UtensilsCrossed, GraduationCap } from 'lucide-react';

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

const industries = [
  {
    icon: ShoppingCart,
    title: 'Retail',
    desc: 'Reliable, multi-site infrastructure designed to keep every store connected and operational.',
    path: '/industries/retail',
    tier: 'Tier 1',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    desc: 'Secure, stable systems that support patient care and operational continuity.',
    path: '/industries/healthcare',
    tier: 'Tier 1',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    desc: 'High-performance environments that support productivity, communication, and growth.',
    path: '/industries/professional-services',
    tier: 'Standard',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    desc: 'Flexible, scalable systems built for distributed teams and fast-moving operations.',
    path: '/industries/real-estate',
    tier: 'Standard',
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality',
    desc: 'Consistent connectivity and communication systems designed for seamless guest experience.',
    path: '/industries/hospitality',
    tier: 'Standard',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Reliable infrastructure that supports learning, administration, and access at scale.',
    path: '/industries/education',
    tier: 'Standard',
  },
];

export default function IndustryGrid() {
  return (
    <section id="industry-grid" className="py-20 md:py-28 bg-slate-50 border-b border-slate-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        {/* Intro block */}
        <FadeIn className="text-center mb-14">
          <p className="c9-eyebrow mb-4">What We Cover</p>
          <h2 className="c9-section-heading mb-6 max-w-2xl mx-auto">
            Built for the Industries We Know Best
          </h2>
          <p className="c9-body text-slate-700 max-w-xl mx-auto">
            We support businesses across multiple industries — from multi-site retail and healthcare
            environments to professional services and real estate. We focus on reliable, scalable
            systems that reduce complexity and support day-to-day operations.
          </p>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <Link
                href={industry.path}
                className="flex flex-col bg-white rounded-[24px] border border-slate-100 p-8 h-full hover:shadow-xl hover:border-[#5D00D6]/25 transition-all duration-400"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors duration-300">
                  <industry.icon size={22} strokeWidth={1.75} />
                </div>

                {/* Content */}
                <h3 className="text-[20px] font-bold text-slate-900 mb-3 leading-tight">
                  {industry.title}
                </h3>
                <p className="text-[14px] text-slate-600 leading-relaxed flex-1 mb-6">
                  {industry.desc}
                </p>

                {/* CTA */}
                <span className="inline-flex items-center gap-2 text-[#5D00D6] font-bold text-[14px] uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                  Explore {industry.title}
                  
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
