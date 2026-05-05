'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TrendingUp, DollarSign, Sliders, LayoutGrid, Cloud, GitMerge, Shield, Database, ShieldCheck, Globe, Lock, Layers, ChevronRight } from 'lucide-react';

const FONT_FAMILY = { fontFamily: "'Proxima Nova', sans-serif" };

const SECONDS_PER_SUBITEM = 1; // logical units for scroll

interface SubItem {
  id: string;
  title: string;
  body: string;
  tags: string[];
  icon: any;
  visual: React.ReactNode;
}

interface MainSection {
  number: string;
  title: string;
  description: string;
  subItems: SubItem[];
}

const cloudMegaData: MainSection[] = [
  {
    number: '01',
    title: 'Strategy',
    description: 'Cloud done right removes complexity — not just hardware. We align your infrastructure with your business goals.',
    subItems: [
      {
        id: 'scale',
        title: 'Infinite Scalability',
        body: 'Scale your business without the infrastructure headache. C9 provides the platform and management layer that grows as you do.',
        tags: ['Scalable', 'On-Demand', 'Managed'],
        icon: TrendingUp,
        visual: (
          <div className="w-full h-full bg-[#1A1A2E] rounded-3xl p-8 flex flex-col justify-center border border-white/5 shadow-2xl">
            <div className="flex items-end gap-3 h-48">
              {[40, 60, 45, 80, 55, 95].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                  className="flex-1 bg-brand-purple rounded-t-lg opacity-80"
                />
              ))}
            </div>
            <p className="text-white font-bold text-center mt-8 text-xl">Auto-Scaling Infrastructure</p>
          </div>
        )
      },
      {
        id: 'cost',
        title: 'Cost Optimization',
        body: 'Forget expensive initial investments. C9 delivers cloud as a fixed monthly managed service with predictable costs.',
        tags: ['OpEx', 'Predictable', 'Savings'],
        icon: DollarSign,
        visual: (
          <div className="w-full h-full bg-light-purple-bg rounded-3xl p-10 flex flex-col justify-center items-center shadow-2xl border border-brand-purple/10">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="absolute inset-0 border-[12px] border-brand-purple/10 rounded-full" />
              <motion.div 
                className="absolute inset-0 border-[12px] border-brand-purple rounded-full border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <span className="text-brand-purple font-bold text-4xl">-$4.2k</span>
            </div>
            <p className="text-text-primary font-bold mt-8 text-xl">Monthly Cloud Savings</p>
          </div>
        )
      },
      {
        id: 'agility',
        title: 'Business Agility',
        body: 'Adjust your environment as your business changes. Expand, contract, or pivot without penalty or legacy hardware lock-in.',
        tags: ['Agile', 'Flexible', 'Speed'],
        icon: Sliders,
        visual: (
          <div className="grid grid-cols-2 gap-4 w-full h-full">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-[#0c1024] p-6 rounded-2xl border border-white/5 flex flex-col justify-center items-center">
                <Sliders className="text-brand-purple mb-4" size={32} />
                <div className="h-2 w-16 bg-white/10 rounded" />
              </div>
            ))}
          </div>
        )
      }
    ]
  },
  {
    number: '02',
    title: 'Build',
    description: 'We build and maintain your entire cloud ecosystem — engineered for reliability and high performance.',
    subItems: [
      {
        id: 'm365',
        title: 'Microsoft 365',
        body: 'Licensing, security, governance, and onboarding. We don’t just deploy M365 — we ensure it’s done correctly and securely.',
        tags: ['Teams', 'SharePoint', 'Intune'],
        icon: LayoutGrid,
        visual: (
          <div className="w-full h-full bg-white rounded-3xl p-8 border border-gray-100 flex flex-col items-center justify-center shadow-2xl">
             <div className="grid grid-cols-3 gap-3 w-48 mb-6">
                {Array(9).fill(0).map((_, i) => (
                  <div key={i} className="aspect-square bg-light-purple-bg rounded-lg border border-brand-purple/10" />
                ))}
             </div>
             <p className="text-text-primary font-bold text-xl">Centralised Workspace</p>
          </div>
        )
      },
      {
        id: 'azure',
        title: 'Azure (IaaS)',
        body: 'Virtual machines, storage, and networking mapped to your needs. Best-in-class infrastructure without on-site hardware.',
        tags: ['Compute', 'Storage', 'Virtualisation'],
        icon: Cloud,
        visual: (
          <div className="relative w-full h-full bg-[#0c1024] rounded-3xl p-8 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-purple/20 to-transparent" />
            <Cloud className="text-white relative z-10 mx-auto" size={120} strokeWidth={1} />
            <div className="relative z-10 grid grid-cols-2 gap-4 mt-8">
              <div className="h-1 lg:h-2 bg-white/20 rounded w-full" />
              <div className="h-1 lg:h-2 bg-white/20 rounded w-1/2" />
            </div>
          </div>
        )
      },
      {
        id: 'hybrid',
        title: 'Hybrid Management',
        body: 'Connect public, private, and on-premise infrastructure into one managed layer. One environment, not three separate ones.',
        tags: ['Connect', 'Sync', 'Simplify'],
        icon: GitMerge,
        visual: (
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="w-32 h-32 rounded-full border-2 border-brand-purple/40 animate-ping absolute" />
            <GitMerge size={80} className="text-brand-purple relative z-10" />
          </div>
        )
      }
    ]
  },
  {
    number: '03',
    title: 'Monitor',
    description: 'Proactive security and monitoring to protect your organisation from threats before they become incidents.',
    subItems: [
      {
        id: 'fwaas',
        title: 'Firewall as a Service',
        body: 'Agile, cloud-based network security. We handle the heavy lifting while protecting your organisation remotely.',
        tags: ['Security', 'Cloud FW', 'Managed'],
        icon: Shield,
        visual: (
          <div className="w-full h-full bg-red-500/5 rounded-3xl p-10 flex flex-col justify-center items-center border border-red-500/10 transition-all shadow-2xl">
            <Shield size={100} className="text-red-500 mb-6" />
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-500 font-bold uppercase tracking-widest text-[11px]">Threat Filter Active</span>
            </div>
          </div>
        )
      },
      {
        id: 'baas',
        title: 'Backup (BaaS)',
        body: 'Veeam-powered backup on the Vocus cloud platform. All data safely stored off-site while remaining in Australia.',
        tags: ['Veeam', 'Vocus', 'Local Data'],
        icon: Database,
        visual: (
          <div className="w-full h-full bg-green-500/5 rounded-3xl p-10 flex flex-col justify-center items-center border border-green-500/10 shadow-2xl">
            <Database size={100} className="text-green-500 mb-6" />
            <p className="text-green-500 font-bold text-xl">Sovereign Data Protection</p>
          </div>
        )
      },
      {
        id: 'private',
        title: 'Private Cloud Isolation',
        body: 'Dedicated infrastructure for highly sensitive data typical in banking, finance, healthcare, and government.',
        tags: ['Isolated', 'Banking', 'Healthcare'],
        icon: ShieldCheck,
        visual: (
          <div className="w-full h-full bg-brand-purple rounded-3xl p-10 flex flex-col items-center justify-center text-white shadow-2xl">
            <div className="w-24 h-24 rounded-2xl border-2 border-white/40 flex items-center justify-center mb-6">
              <Lock size={48} className="text-white" />
            </div>
            <p className="font-bold text-xl">Compliant Isolation</p>
          </div>
        )
      }
    ]
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Tailored delivery models to fit your specific data sensitivity and regulatory requirements.',
    subItems: [
      {
        id: 'public-model',
        title: 'Public Delivery',
        body: 'Scalable infrastructure for most business workloads. Modernise without complexity or legacy hardware.',
        tags: ['Rapid', 'Modern', 'Global'],
        icon: Globe,
        visual: (
          <div className="w-full h-full flex items-center justify-center bg-brand-purple/5 rounded-3xl shadow-2xl">
            <Globe className="text-brand-purple animate-slow-spin" size={120} strokeWidth={1} />
          </div>
        )
      },
      {
        id: 'private-model',
        title: 'Private Infrastructure',
        body: 'Dedicated resources serving your organisation alone. Isolated, compliant, and fully managed by C9.',
        tags: ['High Security', 'Dedicated', 'Compliant'],
        icon: Lock,
        visual: (
          <div className="w-full h-full bg-[#0c1024] rounded-3xl p-12 border border-brand-purple flex flex-col items-center justify-center shadow-2xl">
            <Lock className="text-brand-purple" size={80} />
            <div className="mt-8 space-y-2 w-full max-w-[200px]">
              <div className="h-1 bg-brand-purple rounded" />
              <div className="h-1 bg-brand-purple/20 rounded w-1/2" />
            </div>
          </div>
        )
      },
      {
        id: 'hybrid-model',
        title: 'Hybrid Integration',
        body: 'Sensitive data in private cloud, day-to-day loads in public cloud. Single-interface management for the whole mix.',
        tags: ['Unified', 'Mixed', 'Seamless'],
        icon: Layers,
        visual: (
          <div className="w-full h-full flex flex-col items-center justify-center gap-6">
            <div className="flex gap-4">
               <div className="w-20 h-20 bg-brand-purple rounded-xl flex items-center justify-center"><Globe text-white /></div>
               <div className="w-20 h-20 bg-[#0c1024] rounded-xl flex items-center justify-center border border-white/10"><Lock text-white /></div>
            </div>
            <p className="text-brand-purple font-bold">One Managed Interface</p>
          </div>
        )
      }
    ]
  }
];

export default function CloudMegaExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate high-level progress
  // Total 4 sections, 3 subitems each = 12 subitems.
  const totalSubItems = 12;
  
  // Smoothly interpolated active index [0..11]
  const scrollIndex = useTransform(scrollYProgress, [0, 1], [0, totalSubItems - 1]);
  const activeIdx = useSpring(scrollIndex, { stiffness: 100, damping: 30 });

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    return activeIdx.onChange(v => {
      const rounded = Math.round(v);
      if (rounded !== currentIdx) setCurrentIdx(rounded);
    });
  }, [activeIdx, currentIdx]);

  // Derived current main section
  const mainIdx = Math.floor(currentIdx / 3);
  const subIdx = currentIdx % 3;
  const currentSection = cloudMegaData[mainIdx];
  const currentSubItem = currentSection.subItems[subIdx];

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-white" style={FONT_FAMILY}>
      
      {/* STICKY LAYOUT WRAPPER */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        <div className="container mx-auto px-8 max-w-[1440px] w-full grid grid-cols-[1fr_2.5fr_1.5fr] gap-12 lg:gap-24 h-[80vh] items-center">
          
          {/* COLUMN 1: STICKY HEADING (NUMBER + TITLE) */}
          <div className="flex flex-col h-full justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={mainIdx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-start"
              >
                <span className="text-brand-purple font-bold text-[14px] mb-4">■ {currentSection.number}</span>
                <h2 className="c9-section-heading text-text-primary leading-none">
                  {currentSection.title}
                </h2>
                <p className="text-text-secondary text-[16px] mt-8 leading-relaxed max-w-[240px]">
                  {currentSection.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* COLUMN 2: STICKY VISUAL */}
          <div className="relative h-full w-full flex items-center justify-center p-8 bg-gray-50/50 rounded-[40px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -10 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full max-h-[500px]"
              >
                {currentSubItem.visual}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* COLUMN 3: SUB-ITEMS NAVIGATION + PROGRESS */}
          <div className="flex flex-col gap-10 h-full justify-center">
            <div className="space-y-12">
              {currentSection.subItems.map((item, idx) => {
                const isSubActive = subIdx === idx;
                return (
                  <div key={item.id} className="relative">
                    <h3 className={cn(
                      "text-[22px] font-bold transition-all duration-300",
                      isSubActive ? "text-text-primary" : "text-text-primary/20"
                    )}>
                      {item.title}
                    </h3>
                    
                    <p className={cn(
                      "text-[16px] leading-relaxed mt-4 transition-all duration-300 overflow-hidden",
                      isSubActive ? "h-auto opacity-100" : "h-0 opacity-0"
                    )}>
                      {item.body}
                    </p>

                    {/* Progress indicator matching Bland.ai */}
                    <div className="mt-8 h-[2px] w-full bg-gray-100 relative">
                       {isSubActive && (
                        <motion.div 
                          className="absolute inset-0 bg-brand-purple origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.8 }}
                        />
                       )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-2 mt-auto pb-4">
              {cloudMegaData.map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "h-1 transition-all duration-500 rounded-full",
                    mainIdx === i ? "w-12 bg-brand-purple" : "w-6 bg-gray-200"
                  )} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Decorative gradient for scroll smoothness */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
