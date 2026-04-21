'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TABS = [
  {
    id: 'managed-it',
    label: 'Managed IT',
    headline: 'Engineering support & proactive strategy',
    description: 'We provide full-spectrum engineering support from L1 helpdesk to L3 architecture. Enjoy 24/7 proactive security monitoring and targeted threat response alongside strategic roadmap planning aligned closely to your business growth.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
    color: '#5D00D6',
    link: '/managed-it'
  },
  {
    id: 'telco',
    label: 'Business Telco',
    headline: 'Enterprise connectivity and voice',
    description: 'Deploy enterprise-grade Fibre nbn and highly resilient SD-WAN networks perfectly suited for your office. Centralize your high-volume mobile fleet management and enable your remote teams with C9 phone system cloud voice and unified communications.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000',
    color: '#012FB7',
    link: '/telco'
  },
  {
    id: 'modern-workplace',
    label: 'Modern Workplace',
    headline: 'Zero-touch collaboration environment',
    description: 'Execute a complete Microsoft 365 migration with optimal licensing and expert management. Benefit from zero-touch hardware device deployment powered by Microsoft Intune and secure hybrid collaboration environments centralized in Teams.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    color: '#D946EF',
    link: '/modern-workplace'
  }
];

export const HomePillarsTabbed = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <section className="py-24 bg-[#FDFDFF] relative overflow-hidden font-sans">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Main Architectural Container */}
        <div className="border border-gray-200 rounded-none overflow-hidden bg-white shadow-[0_8px_40px_rgba(0,0,0,0.02)]">
          
          {/* Header Area */}
          <div className="p-8 md:p-14 lg:p-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="max-w-2xl">
               <div className="text-[12px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6 flex items-center gap-3">
                 OUR CORE PILLARS
                 <div className="h-[1px] w-12 bg-gray-200" />
               </div>
               <h2 className="c9-section-heading mb-6" >
                 Three core divisions. <br className="hidden md:block"/> One powerful partner.
               </h2>
               <p className="text-[18px] text-gray-500 font-normal leading-relaxed max-w-xl">
                 C9 provides full-spectrum enterprise technology services. Whether you need autonomous IT support, enormous Telco bandwidth, or total Modern Workplace solutions, our expert divisions deliver flawless execution.
               </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
               <Link 
                 href="/contact" 
                 className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-[#E00A3F] hover:bg-[#C20935] text-white font-bold rounded-lg transition-colors text-[16px]"
                 style={{ backgroundColor: '#5D00D6' }}
               >
                 Get access now
               </Link>
            </div>
          </div>

          {/* Tab Bar Area (Border Grid) */}
          <div className="flex flex-col md:flex-row border-y border-gray-200 bg-white">
            {TABS.map((tab, i) => (
               <button 
                 key={tab.id}
                 onClick={() => setActiveTab(i)}
                 className={`relative flex-1 p-6 md:p-8 flex justify-center items-center border-b md:border-b-0 md:border-r last:border-r-0 border-gray-200 transition-colors group cursor-pointer ${activeTab === i ? 'bg-[#FCFCFD]' : 'bg-white hover:bg-gray-50/50'}`}
               >
                  <span className={`text-[18px] md:text-[22px] font-bold transition-colors ${activeTab === i ? 'text-[#0c1024]' : 'text-gray-400 group-hover:text-gray-600'}`} >
                    {tab.label}
                  </span>
                  {/* Subtle Active Bottom Border matching the exact style of the image */}
                  {activeTab === i && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute bottom-[-1px] left-0 w-full h-[3px] z-10" 
                      style={{ background: tab.color }} 
                    />
                  )}
               </button>
            ))}
          </div>

          {/* Content Area (Left Text, Right Image) */}
          <div className="grid lg:grid-cols-2 min-h-[500px] lg:min-h-[600px] bg-white">
            
            <AnimatePresence mode="wait" initial={false}>
              {/* Wrapping the content changes in AnimatePresence so they fade as tabs switch */}
              <motion.div
                key={`text-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-14 lg:p-16 flex flex-col justify-end border-r-0 lg:border-r border-gray-200 relative lg:col-start-1 lg:row-start-1"
              >
                <div className="relative z-10 w-full">
                  <h3 className="text-[20px] font-bold text-[#0c1024] mb-4 leading-tight tracking-tight" >
                    {TABS[activeTab].headline}
                  </h3>
                  <p className="text-[18px] text-gray-500 font-normal leading-relaxed mb-8 max-w-[90%]">
                    {TABS[activeTab].description}
                  </p>
                  
                  <Link href={TABS[activeTab].link} className="inline-flex items-center gap-2 font-bold transition-colors hover:gap-3 text-[15px] uppercase tracking-wider" style={{ color: TABS[activeTab].color }}>
                    Explore Details <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* In the target layout, the image spans the entire Right column */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`image-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden bg-gray-100 h-[400px] lg:h-auto lg:col-start-2 lg:row-start-1 border-t lg:border-t-0 border-gray-200"
              >
                <img 
                  src={TABS[activeTab].image} 
                  alt={TABS[activeTab].label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" 
                />
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
};

