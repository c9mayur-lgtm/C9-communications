'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Store, ShoppingCart, Globe, Wifi, CheckCircle, ArrowRight, Zap, Layers, Cpu } from 'lucide-react';



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

const features = [
  {
    title: 'POS Uptime Assurance',
    desc: 'High-availability infrastructure designed specifically for point-of-sale resilience and transaction continuity.',
    icon: ShoppingCart,
    tag: 'RELIABILITY'
  },
  {
    title: 'Enterprise SD-WAN',
    desc: 'Intelligent traffic steering to ensure business-critical applications (POS, Inventory) always have priority.',
    icon: Wifi,
    tag: 'CONNECTIVITY'
  },
  {
    title: 'National Rollout Support',
    desc: 'Rapid site deployment framework for standardising infrastructure across new and existing locations.',
    icon: Globe,
    tag: 'SCALABILITY'
  },
  {
    title: 'Central vs Local IT',
    desc: 'Role-based governance model balancing centralised control with local execution requirements.',
    icon: Layers,
    tag: 'GOVERNANCE'
  }
];

export default function MultiSiteRetailCapability() {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <FadeIn>
            <span className="c9-eyebrow mb-6">
              SPECIALISED CAPABILITY
            </span>
            <h2 className="c9-section-heading mb-8">
              Multi-Site <span className="text-[#5D00D6]">Retail Operations.</span>
            </h2>
            <p className="c9-body">
              Retail environments require a specific operational posture. We manage thousands of endpoints across national retail estates, ensuring POS uptime and site consistency at scale.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 hover:border-[#5D00D6]/20 hover:bg-white hover:shadow-xl transition-all duration-500 group h-full">
                  <div className="w-12 h-12 rounded-2xl bg-white text-[#5D00D6] flex items-center justify-center mb-8 group-hover:bg-[#5D00D6] group-hover:text-white shadow-sm transition-all duration-500">
                    <f.icon size={24} strokeWidth={2} />
                  </div>
                  <span className="c9-eyebrow !text-slate-400 !text-[9px] mb-3">
                    {f.tag}
                  </span>
                  <h3 className="c9-card-title mb-4">
                    {f.title}
                  </h3>
                  <p className="c9-body !text-sm">
                    {f.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} direction="right">
            <div className="bg-[#0c1024] rounded-[48px] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl shadow-purple-900/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/20 blur-3xl rounded-full" />
              
              <div className="relative z-10">
                <Store size={48} className="text-[#a56eff] mb-8" />
                <h3 className="c9-card-title !text-white !text-2xl mb-8">Retail Infrastructure Audit</h3>
                <p className="c9-body !text-white/70 mb-10">
                  Our audit protocol for retail estates identifies single points of failure in store connectivity, POS hardware vulnerabilities, and SD-WAN optimisation gaps.
                </p>
                
                <div className="space-y-6 mb-12">
                  {[
                    'POS Continuity Hardening',
                    'Store-to-HQ Tunnel Optimisation',
                    '4G/5G Failover Validation',
                    'Holiday Trading Readiness Check'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#a56eff]" />
                      <span className="text-[15px] font-bold text-white/90">{item}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="#consultation" 
                  className="inline-flex items-center justify-center gap-3 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl group"
                >
                  Request Retail Briefing
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
