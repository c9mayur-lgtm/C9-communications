'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Fence, 
  Cpu, 
  Users, 
  ArrowRight, 
  CheckCircle2,
  Zap
} from 'lucide-react';
import { C9Button } from '@/components/design-system/C9Button';

const JOURNEY_STEPS = [
  {
    phase: '01',
    title: 'The Empty Shell',
    subtitle: 'Strategic Foundation',
    desc: 'Before the first wall goes up, we audit carrier paths and design the technical blueprint. No technical debt from Day 1.',
    iconName: 'Building2',
    color: 'bg-slate-100 text-slate-400',
    activeColor: 'bg-[#5D00D6] text-white',
    features: ['Carrier Path Audit', 'Infrastructure Design', 'Connectivity Lock-in']
  },
  {
    phase: '02',
    title: 'The Build Phase',
    subtitle: 'Coordinated Integration',
    desc: 'We manage the cabling, hardware staging, and trade coordination. Your site evolves while we build the backend power.',
    iconName: 'Fence',
    color: 'bg-slate-100 text-slate-400',
    activeColor: 'bg-[#5D00D6] text-white',
    features: ['Structured Cabling', 'Off-site Staging', 'Trade Management']
  },
  {
    phase: '03',
    title: 'The Hardware Stack',
    subtitle: 'Full-Stack Deployment',
    desc: 'Firewalls, Wi-Fi 6 APs, CCTV, and POS systems are deployed and integrated into a single managed environment.',
    iconName: 'Cpu',
    color: 'bg-slate-100 text-slate-400',
    activeColor: 'bg-[#5D00D6] text-white',
    features: ['Managed Firewalls', 'Seamless Mesh Wi-Fi', 'POS Integration']
  },
  {
    phase: '04',
    title: 'The Live Venue',
    subtitle: 'Visitor Optimization',
    desc: 'Doors open. Guest Wi-Fi capture, marketing analytics, and 24/7 monitoring are live. A full-fledged digital experience.',
    iconName: 'Users',
    color: 'bg-slate-100 text-slate-400',
    activeColor: 'bg-[#5D00D6] text-white',
    features: ['Guest Captive Portals', 'Operational Analytics', '24/7 Remote Monitoring']
  }
];

export const SolutionSection = ({ onOpenQualifier }: { onOpenQualifier: () => void }) => {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100 font-dm-sans">
      {/* Narrative Header */}
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] mb-20">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="c9-eyebrow mb-4 block"
          >
            END-TO-END OWNERSHIP
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="c9-section-heading !text-[28px] md:!text-[36px] !leading-[1.1] mb-8 font-clash"
          >
            From Empty Shell to Full-Fledged Operations.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="c9-body text-slate-500 max-w-2xl mb-8 font-dm-sans !font-normal !text-[15px]">
              Most vendors join at the end. We start at the beginning. As your Managed Service Provider, we own the technical journey so you can focus on the customer experience.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Fixed Cost Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Zero Trade Chaos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* The Visual Journey Row */}
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="relative">
          {/* Connecting Line Backdrop */}
          <div className="absolute top-[80px] left-0 w-full h-1 bg-slate-50 hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {JOURNEY_STEPS.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <div className="bg-white border border-slate-100 rounded-3xl p-8 h-full flex flex-col hover:border-[#5D00D6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5 group-hover:-translate-y-2">
                  {/* Phase Marker & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-semibold text-[#5D00D6] uppercase tracking-[0.25em] mb-1">Phase {step.phase}</span>
                      <div className="h-1 w-12 bg-[#5D00D6]/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 + 0.5, duration: 1 }}
                          className="h-full bg-[#5D00D6]"
                        />
                      </div>
                    </div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(93,0,214,0.4)] group-hover:bg-[#7C3AED] ${step.activeColor} shadow-lg shadow-purple-900/10`}>
                      {step.iconName === 'Building2' && <Building2 size={24} />}
                      {step.iconName === 'Fence' && <Fence size={24} />}
                      {step.iconName === 'Cpu' && <Cpu size={24} />}
                      {step.iconName === 'Users' && <Users size={24} />}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="mb-6">
                    <h3 className="text-[18px] font-semibold text-[#0c1024] mb-2 font-clash">{step.title}</h3>
                    <p className="text-[10px] font-semibold text-[#5D00D6] uppercase tracking-widest mb-4">{step.subtitle}</p>
                    <p className="text-slate-500 text-[13px] leading-relaxed font-normal font-dm-sans">
                      {step.desc}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="mt-auto pt-6 border-t border-slate-50 space-y-3">
                    {step.features.map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]/30" />
                        <span className="text-[11px] font-medium text-slate-600">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-[#0c1024] rounded-[32px] flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl shadow-purple-900/10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#5D00D6_0%,transparent_50%)] opacity-20" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-2xl bg-[#5D00D6] flex items-center justify-center text-white shadow-2xl">
               <Zap size={40} />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 font-clash">Ready to secure your opening day?</h4>
              <p className="text-slate-400 font-medium font-dm-sans">Join 12+ national brands who trust C9 for zero-day infrastructure readiness.</p>
            </div>
          </div>

          <div className="relative z-10 shrink-0">
            <C9Button 
              onClick={onOpenQualifier}
              size="lg"
              className="rounded-full h-16 px-12"
            >
              Start My Site Audit
            </C9Button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#5D00D6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5D00D6]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
