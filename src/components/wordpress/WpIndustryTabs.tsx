'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Search, Map, ShieldCheck, RefreshCw, Users, Wifi, AlertTriangle, Lock, FileText, Activity, Phone, Shield, Layers, CheckCircle } from 'lucide-react';

const OPERATING_MODEL = [
  {
    id: 'discovery',
    label: '1. Discovery',
    headline: 'Infrastructure Discovery',
    description: 'We map your entire environment to identify every system, vendor, and hidden dependency before making a single change.',
    image: '/images/c9_discovery_human.png',
    color: '#5D00D6',
    href: '/managed-it/infrastructure',
    options: [
      { title: "System Audit", desc: "Full inventory of hardware and software.", icon: <Search size={20} /> },
      { title: "Vendor Audit", desc: "Identifying all active contracts.", icon: <Users size={20} /> },
      { title: "Connectivity Review", desc: "Mapping all circuits and links.", icon: <Wifi size={20} /> }
    ]
  },
  {
    id: 'risk_map',
    label: '2. Risk Mapping',
    headline: 'Operational Risk Mapping',
    description: 'Identifying single points of failure, security exposures, and vendor accountability gaps that threaten your uptime.',
    image: '/images/c9_risk_team.png',
    color: '#5D00D6',
    href: '/managed-it/infrastructure',
    options: [
      { title: "Failure Analysis", desc: "Pinpointing cascading outage risks.", icon: <AlertTriangle size={20} /> },
      { title: "Security Posture", desc: "Benchmarking against industry standards.", icon: <Lock size={20} /> },
      { title: "Accountability Map", desc: "Defining owners for each stack layer.", icon: <FileText size={20} /> }
    ]
  },
  {
    id: 'stabilisation',
    label: '3. Stabilisation',
    headline: 'The Stabilisation Layer',
    description: 'Before any migration or change, we install monitoring and incident control to stabilise critical systems first.',
    image: '/images/c9_stabilisation_human.png',
    color: '#5D00D6',
    href: '/managed-it/infrastructure',
    options: [
      { title: "Unified Monitoring", desc: "Real-time visibility across all vendors.", icon: <Activity size={20} /> },
      { title: "Incident Control", desc: "Single escalation path for all issues.", icon: <Phone size={20} /> },
      { title: "Patch Management", desc: "Closing immediate security gaps.", icon: <Shield size={20} /> }
    ]
  },
  {
    id: 'transition',
    label: '4. Transition',
    headline: 'Controlled Transition',
    description: 'Methodical execution with parallel validation and rollback-ready planning. No blind migration events.',
    image: '/images/c9_transition_human.png',
    color: '#5D00D6',
    href: '/managed-it/infrastructure',
    options: [
      { title: "Phased Migration", desc: "Moving systems in logical blocks.", icon: <Layers size={20} /> },
      { title: "Parallel Validation", desc: "Running systems concurrently for testing.", icon: <CheckCircle size={20} /> },
      { title: "Rollback Readiness", desc: "Pre-defined plans to revert instantly.", icon: <RefreshCw size={20} /> }
    ]
  }
];

export const WpIndustryTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-12 md:py-24 bg-[#FCFBFE] overflow-hidden border-t border-gray-100">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Header Area */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="c9-eyebrow mb-6 block">HOW C9 OPERATES</span>
          <h2 className="c9-section-heading mb-6">
            We operate your infrastructure as a single controlled system.
          </h2>
          <p className="c9-body">
            Our operating model is designed to eliminate vendor silos and establish a single point of accountability for your entire environment.
          </p>
        </div>

        {/* Tab Navigation Container */}
        <div className="flex flex-wrap border-b border-gray-200 mb-12 justify-center lg:justify-between px-2 gap-y-4 relative">
          {OPERATING_MODEL.map((tab, i) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={`relative px-4 py-4 text-[14px] md:text-[14px] transition-colors whitespace-nowrap cursor-pointer ${activeTab === i ? 'text-[#0c1024] font-bold' : 'text-gray-500 hover:text-[#0c1024] font-medium'}`}
            >
               {tab.label}
               {activeTab === i && (
                 <motion.div 
                   layoutId="industryTabIndicator"
                   className="absolute bottom-[-1px] left-0 right-0 h-[3px] z-10" 
                   style={{ background: '#5D00D6' }} 
                 />
               )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`text-${activeTab}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <h3 className="text-[28px] md:text-[36px] font-bold text-[#0c1024] mb-6 leading-tight">
                {OPERATING_MODEL[activeTab].headline}
              </h3>
              <p className="text-[17px] text-[#0c1024]/70 font-normal leading-relaxed mb-10">
                {OPERATING_MODEL[activeTab].description}
              </p>

              {/* Sub-options grid */}
              <div className="grid grid-cols-1 gap-4 mb-10">
                {OPERATING_MODEL[activeTab].options.map((opt, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl">
                    <div className="text-[#5D00D6] shrink-0">
                      {opt.icon}
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-[#0c1024]">{opt.title}</h4>
                      <p className="text-[14px] text-gray-500">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link 
                href={OPERATING_MODEL[activeTab].href}
                className="inline-flex items-center gap-2 c9-button-label transition-all hover:gap-3 text-[#5D00D6] hover:text-[#4d00b3] uppercase whitespace-nowrap"
              >
                Learn More About Our Approach <ArrowRight size={18} className="shrink-0" />
              </Link>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`image-${activeTab}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-[32px] aspect-[4/4] w-full shadow-2xl"
            >
              <img 
                src={OPERATING_MODEL[activeTab].image} 
                alt={OPERATING_MODEL[activeTab].label}
                className="absolute inset-0 w-full h-full object-cover" 
              />
              
              {/* Soft Gradient Overlay */}
              <div 
                 className="absolute inset-0 z-10"
                 style={{ 
                   background: 'linear-gradient(to right, rgba(12, 16, 36, 0.4) 0%, transparent 100%)' 
                 }}
              />
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
