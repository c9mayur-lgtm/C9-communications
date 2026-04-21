'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, DollarSign, Sliders, LayoutGrid, Cloud, 
  GitMerge, Shield, Database, ShieldCheck, Globe, Lock, Layers,
  ChevronRight, ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const FONT_FAMILY = { fontFamily: "'Proxima Nova', sans-serif" };

const features = [
  {
    id: 'why-cloud',
    title: 'Why Cloud with C9',
    description: 'Built for optimum speed, agility, and managed simplicity. Cloud done right removes complexity — not just hardware.',
    items: [
      { icon: TrendingUp, label: 'Scale without headache', desc: 'C9 handles the infrastructure while you focus on business growth.' },
      { icon: DollarSign, label: 'Predictable costs', desc: 'Fixed monthly managed service with no surprise capital spend.' },
      { icon: Sliders, label: 'On-demand adjustments', desc: 'Expand or contract your environment as your business evolves.' }
    ],
    visual: (
      <div className="grid gap-4">
        {[
          { t: "99.9% Uptime SLA", d: "Guaranteed availability for your cloud workloads." },
          { t: "Local AU Support", d: "Speak to Australian engineers who know your stack." }
        ].map((v, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl">
            <p className="text-white font-bold text-[18px]">{v.t}</p>
            <p className="text-white/60 text-[14px] mt-1">{v.d}</p>
          </div>
        ))}
      </div>
    ),
    bgColor: 'from-brand-purple to-dark-purple'
  },
  {
    id: 'managed-services',
    title: 'Managed Cloud Services',
    description: 'From Microsoft 365 licensing to fully isolated private cloud infrastructure — our managed services remove the complexity of day-to-day cloud administration.',
    items: [
      { icon: LayoutGrid, label: 'Microsoft 365', desc: 'Licensing, security, governance, and ongoing administration.' },
      { icon: Cloud, label: 'Azure IaaS', desc: 'Virtual machines, storage, and networking fully managed.' },
      { icon: GitMerge, label: 'Hybrid Cloud', desc: 'Connect all your infrastructure environments into one managed layer.' }
    ],
    visual: (
      <div className="relative aspect-square w-full max-w-[400px] border border-white/10 rounded-2xl overflow-hidden bg-[#0c1024] p-1 shadow-2xl">
        <div className="bg-[#1C223A] h-full rounded-xl p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="space-y-4">
            <div className="h-4 bg-white/5 rounded w-3/4" />
            <div className="h-4 bg-white/5 rounded w-1/2" />
            <div className="pt-4 grid grid-cols-2 gap-3">
              <div className="h-20 bg-brand-purple/20 rounded-lg border border-brand-purple/30" />
              <div className="h-20 bg-white/5 rounded-lg" />
            </div>
            <div className="h-32 bg-white/5 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    ),
    bgColor: 'from-[#0c1024] to-[#1C223A]'
  },
  {
    id: 'security-protection',
    title: 'Cloud Security & Protection',
    description: 'Cloud environments need security governance. C9 manages your cloud security posture as part of the ongoing engagement.',
    items: [
      { icon: Shield, label: 'Firewall as a Service', desc: 'Agile, cloud-based network security managed entirely by C9.' },
      { icon: Database, label: 'Backup as a Service', desc: 'Veeam-powered backup hosted in local Australian data centres.' },
      { icon: ShieldCheck, label: 'Private Cloud', desc: 'Dedicated infrastructure for highly sensitive or regulated data.' }
    ],
    visual: (
      <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 max-w-[440px]">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-light-purple-bg rounded-full flex items-center justify-center">
            <ShieldCheck size={24} className="text-brand-purple" />
          </div>
          <div>
            <h4 className="text-[18px] font-bold text-text-primary">Compliance Secure</h4>
            <p className="text-[12px] text-text-secondary">Essential 8 Aligned</p>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { l: "Identity Guard", s: "Active" },
            { l: "Conditional Access", s: "Enforced" },
            { l: "Data Sovereignty", s: "AU Only" }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50">
              <span className="text-[14px] text-text-primary font-medium">{item.l}</span>
              <span className="text-[11px] font-bold text-brand-purple bg-light-purple-bg px-2 py-0.5 rounded uppercase">{item.s}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    bgColor: 'from-brand-purple/80 to-brand-purple'
  },
  {
    id: 'delivery-models',
    title: 'Cloud Delivery Models',
    description: 'Whether you need public, private, or a combination of both — C9 delivers and manages the right model for your business.',
    items: [
      { icon: Globe, label: 'Public Cloud', desc: 'Scalable and modern infrastructure for general business workloads.' },
      { icon: Lock, label: 'Private Cloud', desc: 'Isolated infrastructure for sensitive and regulated data.' },
      { icon: Layers, label: 'Hybrid Cloud', desc: 'The best of both worlds managed through a single C9 interface.' }
    ],
    visual: (
      <div className="grid grid-cols-2 gap-4 max-w-[480px]">
        <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100 shadow-xl">
          <Globe size={32} className="text-brand-purple mb-4" />
          <p className="text-[16px] font-bold text-text-primary">Public</p>
          <p className="text-[12px] text-text-secondary mt-1">Scale instantly</p>
        </div>
        <div className="bg-[#0c1024] p-6 rounded-2xl border border-white/5 shadow-2xl text-white">
          <Lock size={32} className="text-brand-purple mb-4" />
          <p className="text-[16px] font-bold">Private</p>
          <p className="text-[12px] text-white/50 mt-1">Isolated data</p>
        </div>
      </div>
    ),
    bgColor: 'from-gray-100 to-white'
  }
];

export default function CloudFeatureExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // We handle clicks - scroll is optional but for this component click-and-explore is best
  // like the Bland.ai component behavior.

  return (
    <section className="bg-white py-24 relative" style={FONT_FAMILY}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] w-full">
        
        <div className="mb-16">
          <span className="text-brand-purple text-[13px] font-bold uppercase tracking-[0.2em] mb-4 block">EXPLORE THE PLATFORM</span>
          <h2 className="c9-section-heading text-text-primary">
            Managed cloud, simplified.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_450px] gap-12 lg:gap-24 items-start">
          
          {/* LEFT CONTENT — DYNAMIC VISUAL & TEXT */}
          <div className="relative min-h-[500px] lg:sticky lg:top-32 rounded-3xl overflow-hidden shadow-2xl shadow-brand-purple/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={cn(
                  "absolute inset-0 bg-gradient-to-br p-12 flex flex-col justify-center items-center text-center",
                  features[activeTab].bgColor
                )}
              >
                <div className="w-full flex justify-center mb-8">
                  {features[activeTab].visual}
                </div>
                
                <div className="max-w-[480px]">
                  <h3 className={cn(
                    "text-[28px] font-bold mb-4",
                    activeTab === 3 ? "text-text-primary" : "text-white"
                  )}>
                    {features[activeTab].title}
                  </h3>
                  <p className={cn(
                    "text-[16px] leading-[1.6]",
                    activeTab === 3 ? "text-text-secondary" : "text-white/80"
                  )}>
                    {features[activeTab].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT CONTENT — INTERACTIVE ACCORDION */}
          <div className="flex flex-col gap-4">
            {features.map((feature, idx) => {
              const isActive = activeTab === idx;
              return (
                <div 
                  key={feature.id}
                  className={cn(
                    "border-b transition-all duration-500",
                    isActive ? "border-brand-purple pb-8" : "border-gray-100 pb-4 hover:border-gray-300"
                  )}
                >
                  <button
                    onClick={() => setActiveTab(idx)}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <span className={cn(
                      "text-[20px] font-bold tracking-tight transition-colors duration-300",
                      isActive ? "text-brand-purple" : "text-text-primary/40 group-hover:text-text-primary"
                    )}>
                      {feature.title}
                    </span>
                    <div className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300",
                      isActive ? "bg-brand-purple text-white rotate-90" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                    )}>
                      <ChevronRight size={14} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 space-y-6">
                          <p className="text-[15px] text-text-secondary leading-relaxed">
                            {feature.description}
                          </p>
                          <div className="space-y-4">
                            {feature.items.map((item, i) => (
                              <div key={i} className="flex gap-4">
                                <div className="mt-1 shrink-0 w-8 h-8 rounded-lg bg-light-purple-bg flex items-center justify-center">
                                  <item.icon size={16} className="text-brand-purple" />
                                </div>
                                <div>
                                  <p className="text-[14px] font-bold text-text-primary">{item.label}</p>
                                  <p className="text-[13px] text-text-secondary leading-relaxed mt-0.5">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="pt-4">
                            <button className="flex items-center gap-2 text-[13px] font-bold text-brand-purple uppercase tracking-wider hover:gap-3 transition-all">
                              Learn more about {feature.id.replace('-', ' ')} <ArrowRight size={14} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Progress bar — Bland.ai style */}
                  {isActive && (
                    <div className="h-[2px] w-full bg-gray-100 mt-8 relative overflow-hidden">
                      <motion.div 
                        initial={{ x: '-100%' }}
                        animate={{ x: '0%' }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-brand-purple"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
