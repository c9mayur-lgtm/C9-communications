'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Cpu, Headphones, Briefcase, Zap } from 'lucide-react';



const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const tiers = [
  {
    title: 'L1 Operations Support',
    role: 'Incident Identification & Triage',
    desc: '24/7 AU-based monitoring and rapid response for standard service requests and incident classification.',
    icon: Headphones,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    title: 'L2 Systems Engineering',
    role: 'Advanced Troubleshooting',
    desc: 'Senior technicians specialising in network fabric, security enforcement, and complex system resolution.',
    icon: Cpu,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    title: 'L3 Principal Architects',
    role: 'Infrastructure & Strategy',
    desc: 'Strategic design leads overseeing core network integrity, enterprise integrations, and high-level governance.',
    icon: ShieldCheck,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10'
  },
  {
    title: 'Account Management',
    role: 'Governance & SLA Compliance',
    desc: 'Dedicated commercial leads ensuring operational alignment with business objectives and SLA standards.',
    icon: Briefcase,
    color: 'text-slate-700',
    bgColor: 'bg-slate-700/10'
  }
];

export default function EngineeringStructure() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-[40%_60%] gap-16 lg:gap-24 items-start">
          <FadeIn>
            <span className="c9-eyebrow mb-6">
              ENGINEERING DNA
            </span>
            <h2 className="c9-section-heading mb-8">
              Structural <span className="text-[#5D00D6]">Accountability.</span>
            </h2>
            <p className="c9-body mb-10">
              We are an engineering-led organisation. Our team structure is designed to eliminate the "helpdesk bottleneck" by ensuring high-level technical expertise is available at every stage of the incident lifecycle.
            </p>
            <div className="space-y-6">
              {[
                '100% Onshore Australian Engineering',
                'No Level 1 "Script" Support',
                'Direct Access to Senior Technicians',
                'Outcome-Based Performance Metrics'
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                  <span className="text-[15px] font-bold text-slate-900">{point}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6 relative">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#5D00D6]/5 blur-[100px] -z-10 rounded-full" />
            
            {tiers.map((tier, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-none p-8 transition-all duration-500 h-full group">
                  <div className={`w-14 h-14 rounded-2xl ${tier.bgColor} ${tier.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <tier.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="c9-eyebrow !text-slate-400 mb-2">
                    {tier.role}
                  </span>
                  <h3 className="c9-card-title mb-4">
                    {tier.title}
                  </h3>
                  <p className="c9-body !text-sm">
                    {tier.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
