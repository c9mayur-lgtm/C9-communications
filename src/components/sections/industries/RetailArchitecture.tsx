'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Cloud, Store, ShieldCheck, Zap, Network, Activity, ArrowRight } from 'lucide-react';

const fontStyle = { fontFamily: '"Proxima Nova", sans-serif' };

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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const nodes = [
  {
    id: 'hq',
    icon: Building2,
    title: 'Headquarters',
    desc: 'Central Management & Core Infrastructure',
    points: ['Direct Fibre Links', 'Core SD-WAN Controller', 'Central Security Policy'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Core',
    desc: 'AWS / Azure / SaaS Peering',
    points: ['Private Cloud Interconnect', 'Managed SaaS Acceleration', 'Backup & Continuity'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    id: 'stores',
    icon: Store,
    title: 'Stores (Multi-site)',
    desc: 'Distributed Retail Footprint',
    points: ['LTE Failover Standard', 'Local POS Resilience', 'Plug-and-Play Setup'],
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
];

export default function RetailArchitecture() {
  return (
    <section className="py-20 lg:py-28 bg-[#fafafa] overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <span className="text-[#5D00D6] text-[12px] font-bold uppercase tracking-[0.35em] mb-5 block" style={fontStyle}>
              ARCHITECTURE LOGIC
            </span>
            <h2 className="c9-section-heading mb-6" style={fontStyle}>
              Enterprise Retail <span className="text-slate-400 font-normal">Connectivity Framework</span>
            </h2>
            <p className="c9-body text-slate-600 max-w-2xl" style={fontStyle}>
              We don't just connect stores; we build a resilient ecosystem where HQ, Cloud, and every retail location operate as a single, unified environment under 24/7 surveillance.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-y-1/2 z-0" />
          
          {nodes.map((node, i) => (
            <FadeIn key={node.id} delay={i * 0.1} className="relative z-10">
              <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#5D00D6]/20 transition-all duration-500 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl ${node.bgColor} ${node.color} flex items-center justify-center mb-8 group-hover:scale-110 duration-500 shadow-inner`}>
                  <node.icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-[22px] font-bold text-slate-900 mb-3" style={fontStyle}>
                  {node.title}
                </h3>
                <p className="text-[14px] text-slate-500 font-medium mb-8" style={fontStyle}>
                  {node.desc}
                </p>
                
                <div className="space-y-4 mt-auto">
                  {node.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]/30 group-hover:bg-[#5D00D6] transition-colors" />
                      <span className="text-[14px] text-slate-600 font-medium" style={fontStyle}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* NOC Overlay Banner */}
        <FadeIn delay={0.4} className="mt-12">
          <div className="bg-[#0c1024] rounded-[32px] p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5D00D6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <Activity size={20} className="animate-pulse" />
                  </div>
                  <span className="text-white font-bold tracking-widest text-[11px] uppercase" style={fontStyle}>
                    NOC/SOC Overlay
                  </span>
                </div>
                <h3 className="text-white text-[24px] md:text-[28px] font-bold mb-4" style={fontStyle}>
                  24/7 Managed Operations & Security
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed" style={fontStyle}>
                  Your entire architecture is under constant supervision by our AU-managed NOC. We detect and resolve store connectivity issues before your managers even pick up the phone.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Proactive Detection', icon: Zap },
                  { label: 'Security Response', icon: ShieldCheck },
                  { label: 'Performance Audit', icon: Network },
                  { label: 'Remote Resolution', icon: ArrowRight }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <item.icon size={14} className="text-indigo-400" />
                    <span className="text-white/80 text-[12px] font-bold" style={fontStyle}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
