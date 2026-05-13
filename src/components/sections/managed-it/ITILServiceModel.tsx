'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Settings, CheckCircle, ShieldCheck, RefreshCw, Layers } from 'lucide-react';



const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const serviceStages = [
  {
    title: 'Onboarding & Audit',
    desc: 'Total mapping of environment assets, dependencies, and security posture before service transition.',
    icon: Settings,
    tag: 'DAY 1-30'
  },
  {
    title: 'Service Transition',
    desc: 'Controlled handover of operational responsibility with zero disruption to business-critical systems.',
    icon: RefreshCw,
    tag: 'PHASE 1'
  },
  {
    title: 'L1–L3 Support Tiers',
    desc: 'Tiered technical response framework providing rapid triage through to principal architect resolution.',
    icon: Layers,
    tag: 'CONTINUOUS'
  },
  {
    title: 'Account Management',
    desc: 'Dedicated governance leads focused on SLA compliance, risk mitigation, and strategic alignment.',
    icon: Users,
    tag: 'GOVERNANCE'
  }
];

export default function ITILServiceModel() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-[45%_55%] gap-16 lg:gap-24 items-start">
          <FadeIn>
            <span className="c9-eyebrow mb-6">
              SERVICE DELIVERY SYSTEM
            </span>
            <h2 className="c9-section-heading mb-8">
              ITIL-Aligned <br />
              <span className="text-[#5D00D6]">Operating Model.</span>
            </h2>
            <p className="c9-body mb-10 text-slate-800">
              We don't just "fix IT." We provide a structured service delivery framework based on ITIL standards, ensuring every transition, incident, and strategic review is governed by documented protocols.
            </p>
            
            <div className="bg-white rounded-none p-10 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#5D00D6]/5 rounded-bl-full group-hover:scale-150 duration-700" />
              <h4 className="c9-card-title mb-6">The Transition Protocol</h4>
                {/* Check List */}
                <div className="space-y-6">
                  {[
                    'Zero-Disruption Handover Strategy',
                    'Legacy Technical Debt Identification',
                    'Baseline Security Enforcement',
                    'Standardised Documentation Framework'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle size={12} className="text-[#5D00D6]" aria-hidden="true" />
                      <span className="text-[15px] font-bold text-slate-900">{item}</span>
                    </div>
                  ))}
                </div>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6 relative">
            {serviceStages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-none p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#5D00D6]/20 transition-all duration-500 h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-none bg-[#5D00D6]/5 text-[#5D00D6] flex items-center justify-center group-hover:scale-110 duration-500">
                        <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <span className="c9-eyebrow !text-slate-800 !text-[9px] bg-slate-50 px-3 py-1.5 rounded-none group-hover:!text-[#5D00D6] group-hover:bg-[#5D00D6]/5 transition-colors">
                        {stage.tag}
                      </span>
                    </div>
                    <h3 className="c9-card-title mb-4">
                      {stage.title}
                    </h3>
                    <p className="c9-body !text-sm text-slate-800">
                      {stage.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
