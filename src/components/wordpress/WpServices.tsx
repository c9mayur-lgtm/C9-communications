'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Radio, Smartphone, Phone, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TELCO_SERVICES_CONTENT } from '@/components/layout/NavbarData';

export const WpServices = () => {
  const [activeTelcoTab, setActiveTelcoTab] = useState('internet');

  return (
    <>
      {/* Telco Services Section (Matching Reference Image) */}
      <section className="py-10 md:py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="mb-8">
            <span className="c9-eyebrow mb-4 block">C9 TELCO & CONNECTIVITY</span>
            <h2 className="c9-section-heading mb-6">
              One provider for every connection your business needs.
            </h2>
            
            {/* Tabs Header */}
            <div className="flex flex-nowrap overflow-x-auto no-scrollbar border-b border-gray-200">
              {[
                { id: 'internet', label: 'Internet', icon: <Wifi size={20} /> },
                { id: 'voice_ai', label: 'Voice AI', icon: <Volume2 size={20} />, isNew: true },
                { id: 'voice', label: 'Voice', icon: <Phone size={20} /> },
                { id: 'network', label: 'Network', icon: <Radio size={20} /> },
                { id: 'mobile', label: 'Mobile', icon: <Smartphone size={20} /> },
              ].map((tab) => {
                const isActive = activeTelcoTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTelcoTab(tab.id)}
                    className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 text-[14px] font-bold transition-all border-b-2 relative shrink-0 ${
                      isActive 
                        ? 'text-[#5D00D6] border-[#5D00D6] bg-[#F4F0FA]' 
                        : 'text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`${isActive ? 'text-[#5D00D6]' : 'text-gray-400'} shrink-0`}>
                      {tab.icon}
                    </span>
                    <span className="whitespace-nowrap">{tab.label}</span>
                    {tab.isNew && (
                      <span className="ml-1.5 px-2 py-0.5 bg-red-500 text-white rounded-sm text-[10px] font-bold uppercase tracking-wider leading-none inline-flex items-center justify-center">
                        NEW
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Area */}
          <div className="py-4 md:py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTelcoTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-16 items-center"
              >
                {/* Left side: Heading, Description & Graphic */}
                <div className="flex flex-col">
                  <div className="mb-4 md:mb-6">
                    <h3 className="c9-card-title !text-[24px] md:!text-[32px] mb-6 leading-tight">
                      {TELCO_SERVICES_CONTENT[activeTelcoTab].heading}
                    </h3>
                    <p className="c9-body leading-relaxed text-gray-600">
                      {TELCO_SERVICES_CONTENT[activeTelcoTab].description}
                    </p>
                  </div>

                  {/* High-Impact Visual */}
                  <div className="w-full relative group/gfx perspective-1000 mt-4">
                    <div className="relative z-10 duration-700 group-hover/gfx:rotate-y-6 group-hover/gfx:scale-[1.02]">
                      {activeTelcoTab === 'internet' ? (
                        <img 
                          src="/images/realistic_business_internet_fiber_box_1776077417680.png" 
                          alt="Business Internet" 
                          className="w-full h-[240px] md:h-[280px] object-cover object-center drop-shadow-2xl rounded-2xl"
                        />
                      ) : activeTelcoTab === 'voice_ai' ? (
                        <img 
                          src="/images/voice_ai_realistic_dashboard.jpg" 
                          alt="Voice AI Intelligence" 
                          className="w-full h-[240px] md:h-[280px] object-cover object-center drop-shadow-2xl rounded-2xl"
                        />
                      ) : activeTelcoTab === 'voice' ? (
                        <img 
                          src="/images/realistic_business_voice_poly_yealink_1776077360073.png" 
                          alt="Business Phone Systems" 
                          className="w-full h-[240px] md:h-[280px] object-cover object-center drop-shadow-2xl rounded-2xl"
                        />
                      ) : activeTelcoTab === 'network' ? (
                        <img 
                          src="/images/realistic_business_networking_rack_1776077491291.png" 
                          alt="Secure Networking" 
                          className="w-full h-[240px] md:h-[280px] object-cover object-center drop-shadow-2xl rounded-2xl"
                        />
                      ) : activeTelcoTab === 'mobile' ? (
                        <img 
                          src="/images/mobile-feature.jpg" 
                          alt="Mobile Fleet Management" 
                          className="w-full h-[240px] md:h-[280px] object-cover object-center drop-shadow-2xl rounded-2xl"
                        />
                      ) : (
                        <div className="w-full aspect-[16/9] flex items-center justify-center bg-gray-50 rounded-2xl uppercase text-[12px] font-bold tracking-widest text-gray-300">
                          Visual for {activeTelcoTab} coming soon
                        </div>
                      )}
                    </div>
                    {/* Decorative Shadow Glow */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-[#5D00D6]/10 blur-3xl rounded-full opacity-0 group-hover/gfx:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>

                {/* Right side: Feature Cards */}
                <div className="flex flex-col gap-4">
                  {TELCO_SERVICES_CONTENT[activeTelcoTab].options.map((option: any, idx: number) => (
                    <div 
                      key={idx} 
                      className="flex items-start justify-between p-4 md:p-5 bg-white border border-gray-100 rounded-xl hover:border-[#5D00D6] hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all cursor-pointer"
                    >
                      <div className="flex items-start gap-5">
                        <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#5D00D6] bg-[#F4F0FA] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors shrink-0 overflow-hidden mt-1">
                          {option.icon}
                        </div>
                        <div>
                          <h4 className="c9-card-title !text-[18px] md:!text-[22px] mb-1 leading-tight">{option.title}</h4>
                          <p className="c9-body !text-[14px] md:!text-[16px] font-normal leading-relaxed">{option.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-8">
            <p className="text-[13px] text-slate-400 font-medium">One provider. One point of accountability. No blame shifting.</p>
            <Button size="lg" className="rounded-full shadow-xl px-8 h-14" asChild>
              <Link href="/telco" className="flex items-center gap-2">
                View All Telco Solutions
                
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
