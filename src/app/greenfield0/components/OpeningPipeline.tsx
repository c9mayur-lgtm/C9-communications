'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardCheck, 
  Settings2, 
  Truck, 
  Zap, 
  CheckCircle2,
  ChevronRight,
  Search,
  ArrowRight
} from 'lucide-react';

const PIPELINE_STAGES = [
  {
    id: 1,
    title: 'Site Qualification',
    desc: 'Engineering audit of local fibre, copper, and 5G availability.',
    iconName: 'Search',
    longDesc: 'Our engineers conduct a deep-dive audit of your site’s physical and digital infrastructure. We identify the fastest available paths and potential bottlenecks before you sign a lease.',
    features: ['Carrier path verification', '5G signal mapping', 'Existing rack audit']
  },
  {
    id: 2,
    title: 'Design & Procurement',
    desc: 'Hardware specification and fixed-cost project scope lock-in.',
    iconName: 'ClipboardCheck',
    longDesc: 'We move from audit to architecture. C9 designs a custom technical stack tailored to your operational needs and locks in a fixed-cost quote with no hidden variations.',
    features: ['Custom network topology', 'Hardware procurement', 'Bill of Materials lock-in']
  },
  {
    id: 3,
    title: 'Deployment Sync',
    desc: 'Hardware staging, cabling, and rack installation on-site.',
    iconName: 'Truck',
    longDesc: 'While your site is being built, we stage your hardware off-site for pre-configuration. On deployment day, our team arrives for a seamless, coordinated hardware install.',
    features: ['Off-site pre-config', 'On-site cabling teams', 'Hardware staging']
  },
  {
    id: 4,
    title: 'Day One Go-Live',
    desc: 'Final cutover with engineering team on-site for launch support.',
    iconName: 'Zap',
    longDesc: 'The critical moment. We provide on-site engineering support during your opening hours to ensure every system—from POS to CCTV—is 100% operational.',
    features: ['On-site cutover support', 'System stress testing', 'Post-launch training']
  }
];

export const OpeningPipeline = ({ onOpenQualifier }: { onOpenQualifier: () => void }) => {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="text-center mb-16">
          <span className="c9-eyebrow mb-4 block">PREDICTABLE ROLLOUT</span>
          <h2 className="c9-section-heading mb-6">
            The Opening Day Pipeline.
          </h2>
          <p className="c9-body text-slate-500 max-w-2xl mx-auto text-lg">
            New sites are chaotic. Our structured deployment pipeline removes the guesswork, ensuring every infrastructure layer is active before your first customer arrives.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-start">
          {/* Left: Phase Selectors */}
          <div className="space-y-4">
            {PIPELINE_STAGES.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`w-full text-left p-6 transition-all duration-300 border-2 rounded-2xl flex items-center gap-6 group ${
                  activeStage === stage.id 
                    ? 'border-[#5D00D6] bg-[#5D00D6]/5 shadow-lg shadow-purple-900/5' 
                    : 'border-slate-50 hover:border-slate-200 bg-white'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  activeStage === stage.id ? 'bg-[#5D00D6] text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                }`}>
                  {stage.iconName === 'Search' && <Search size={22} />}
                  {stage.iconName === 'ClipboardCheck' && <ClipboardCheck size={22} />}
                  {stage.iconName === 'Truck' && <Truck size={22} />}
                  {stage.iconName === 'Zap' && <Zap size={22} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${
                      activeStage === stage.id ? 'text-[#5D00D6]' : 'text-slate-400'
                    }`}>Phase 0{stage.id}</span>
                  </div>
                  <h4 className={`text-lg font-bold ${activeStage === stage.id ? 'text-[#0c1024]' : 'text-slate-500'}`}>
                    {stage.title}
                  </h4>
                </div>
                <div className={`transition-transform duration-300 ${activeStage === stage.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                  <ArrowRight size={20} className="text-[#5D00D6]" />
                </div>
              </button>
            ))}
          </div>

          {/* Right: Stage Detail Content */}
          <div className="bg-slate-50 rounded-[32px] p-6 md:p-12 min-h-[320px] md:min-h-[480px] relative overflow-hidden flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex-1"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#5D00D6]">
                    {activeStage === 1 && <Search size={22} />}
                    {activeStage === 2 && <ClipboardCheck size={22} />}
                    {activeStage === 3 && <Truck size={22} />}
                    {activeStage === 4 && <Zap size={22} />}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-[#0c1024]">
                      {PIPELINE_STAGES.find(s => s.id === activeStage)?.title}
                    </h3>
                    <p className="text-[#5D00D6] font-black uppercase tracking-widest text-[11px] mt-1">
                      Phase 0{activeStage} Outcomes
                    </p>
                  </div>
                </div>

                <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed mb-8 md:mb-10">
                  {PIPELINE_STAGES.find(s => s.id === activeStage)?.longDesc}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {PIPELINE_STAGES.find(s => s.id === activeStage)?.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-sm font-bold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0c1024] flex items-center justify-center text-white">
                     <Settings2 size={18} />
                  </div>
                  <p className="text-[13px] font-bold text-slate-500 leading-tight">
                    Technical Ownership from Day Zero. <br/> We coordinate with all stakeholders.
                  </p>
               </div>
               <button 
                 onClick={onOpenQualifier}
                 className="bg-[#5D00D6] text-white px-10 h-14 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-[#4d00b3] transition-all flex items-center gap-2 shadow-lg shadow-purple-900/10"
               >
                 Start Site Audit <ChevronRight size={16} />
               </button>
            </div>

            {/* Decorative BG element */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#5D00D6]/5 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
