'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const INDUSTRIES = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    headline: 'Healthcare IT & Compliance',
    description: 'Customer experience matters, but patient data security is critical. Secure patient data, HIPAA-compliant infrastructure, and 24/7 uptime for clinics and hospitals — so your staff focuses on care, not IT tickets.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
    color: '#5D00D6',
    href: '/industries/healthcare'
  },
  {
    id: 'banking',
    label: 'Banking & Finance',
    headline: 'IT for Law, Finance & Consulting',
    description: "Reliable internet, secure cloud storage, and Microsoft 365 management for firms that can't afford downtime — or a data breach. We ensure 100% Australian data sovereignty and 4-hour SLA response times.",
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    color: '#5D00D6',
    href: '/industries/professional-services'
  },
  {
    id: 'education',
    label: 'Education',
    headline: 'Connected Classrooms & Campuses',
    description: 'We scale high-density Wi-Fi and safe internet environments for schools and universities. Keeping thousands of concurrent devices connected while adhering to strict child-safety filtering.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200',
    color: '#5D00D6',
    href: '/industries/education'
  },
  {
    id: 'retail',
    label: 'Retail',
    headline: 'IT That Keeps Your Stores Running',
    description: 'Customer experience is everything in retail, and reliable communication can make or break a sale. C9 helps retailers manage high customer demand, streamline order inquiries, and provide fast EFTPOS-ready connectivity — enhancing the shopping experience both online and in-store.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    color: '#5D00D6',
    href: '/industries/retail'
  },
  {
    id: 'government',
    label: 'Government',
    headline: 'Mission-Critical Architecture',
    description: 'Providing secure SD-WAN and highly-available unified communications for local and state government entities. Compliant with strict regulatory postures including Essential 8 reporting.',
    image: 'https://images.unsplash.com/photo-1523292562811-8fa7962ba7fa?auto=format&fit=crop&q=80&w=1200',
    color: '#5D00D6',
    href: '/enterprise'
  },
  {
    id: 'real-estate',
    label: 'Real Estate',
    headline: 'Fast IT for Fast-Moving Agencies',
    description: 'Always-on mobility and cloud communications so agents never miss a listing. Integrated with standard prop-tech CRMs and offering zero downtime during agency expansions.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    color: '#5D00D6',
    href: '/industries/real-estate'
  },
  {
    id: 'professional-services',
    label: 'Professional Services',
    headline: 'Data-driven Operational Efficiency',
    description: 'From accounting firms to architecture studios, we provide high-bandwidth storage networks and uncompromised Teams calling solutions so your professionals can bill more hours with less friction.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200',
    color: '#5D00D6',
    href: '/industries/professional-services'
  }
];

export const WpIndustryTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-12 md:py-16 bg-[#FCFBFE] overflow-hidden border-t border-gray-100">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Header Area */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="c9-section-heading mb-4">
            C9 has earned the trust of Australian SMBs and Enterprises across diverse industries for over 15 years
          </h2>
        </div>

        {/* Tab Navigation Container */}
        <div className="flex flex-wrap border-b border-gray-200 mb-12 justify-center lg:justify-between px-2 gap-y-4 relative">
          {INDUSTRIES.map((tab, i) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={`relative px-4 py-4 text-[14px] md:text-[15px] transition-colors whitespace-nowrap cursor-pointer ${activeTab === i ? 'text-[#0c1024] font-bold' : 'text-gray-500 hover:text-[#0c1024] font-medium'}`}
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`text-${activeTab}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-lg"
            >
              <h3 className="text-[20px] font-bold text-[#0c1024] mb-4">
                {INDUSTRIES[activeTab].headline}
              </h3>
              <p className="text-[16px] text-[#0c1024]/70 font-normal leading-relaxed mb-8">
                {INDUSTRIES[activeTab].description}
              </p>
              
              <Link 
                href={INDUSTRIES[activeTab].href}
                className="inline-flex items-center gap-2 font-bold transition-all hover:gap-3 text-[#5D00D6] hover:text-[#4d00b3] text-[15px] uppercase tracking-[0.05em]"
              >
                Explore {INDUSTRIES[activeTab].label} Solutions <ArrowRight size={18} />
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
              className="relative overflow-hidden rounded-[24px] aspect-[4/3] w-full shadow-lg"
            >
              <img 
                src={INDUSTRIES[activeTab].image} 
                alt={INDUSTRIES[activeTab].label}
                className="absolute inset-0 w-full h-full object-cover" 
              />
              
              {/* Soft Gradient Overlay (The C9 shade) */}
              <div 
                 className="absolute inset-0 z-10"
                 style={{ 
                   background: 'linear-gradient(to right, rgba(93, 0, 214, 0.7) 0%, rgba(93, 0, 214, 0.2) 50%, transparent 100%)' 
                 }}
              />
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
