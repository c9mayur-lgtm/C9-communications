'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Radio, Smartphone, Phone, ArrowRight, Volume2 } from 'lucide-react';
import { TELCO_SERVICES_CONTENT } from '@/components/layout/NavbarData';

export const WpServices = () => {
  const [activeTelcoTab, setActiveTelcoTab] = useState('internet');

  return (
    <>
      {/* Telco Services Section (Matching Reference Image) */}
      <section className="py-10 md:py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="mb-10">
            <span className="text-[#5D00D6] text-[13px] font-bold uppercase tracking-[0.3em] mb-4 block" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>Our Expertise</span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#0c1024] tracking-tight mb-8">
              Telco services, tailored for business.
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
                    className={`flex items-center gap-2 md:gap-3 px-4 md:px-8 py-4 md:py-5 text-[14px] md:text-[15px] font-bold transition-all border-b-2 relative shrink-0 ${
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
                      <span className="ml-1.5 px-1.5 py-0.5 bg-red-500 text-white text-[9px] font-bold rounded-sm uppercase tracking-tighter leading-none inline-flex items-center justify-center">
                        NEW
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Area */}
          <div className="py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTelcoTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid lg:grid-cols-2 gap-16 items-start"
              >
                {/* Left side: Heading & Description */}
                <div className="flex flex-col h-full">
                  <div className="mb-10 lg:mb-12">
                    <h3 className="text-[20px] font-bold text-[#0c1024] mb-6 tracking-tight leading-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                      {TELCO_SERVICES_CONTENT[activeTelcoTab].heading}
                    </h3>
                    <p className="text-[17px] md:text-[19px] text-gray-500 leading-relaxed font-medium" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                      {TELCO_SERVICES_CONTENT[activeTelcoTab].description}
                    </p>
                  </div>

                  {/* Native Rectangle Visuals (As Provided) */}
                  <div className="mt-auto w-full group/gfx">
                    {activeTelcoTab === 'internet' ? (
                      <img 
                        src="/images/business_internet_hero.png" 
                        alt="Business Internet" 
                        className="w-full h-auto transition-transform duration-700 group-hover/gfx:scale-[1.02]"
                      />
                    ) : (activeTelcoTab === 'voice' || activeTelcoTab === 'voice_ai') ? (
                      <img 
                        src="/images/voice_service_graphic.png" 
                        alt="Voice AI & Comms" 
                        className="w-full h-auto transition-transform duration-700 group-hover/gfx:scale-[1.02]"
                      />
                    ) : activeTelcoTab === 'network' ? (
                      <img 
                        src="/images/networking_graphic.png" 
                        alt="Business Networking" 
                        className="w-full h-auto transition-transform duration-700 group-hover/gfx:scale-[1.02]"
                      />
                    ) : activeTelcoTab === 'mobile' ? (
                      <img 
                        src="/images/mobile_service_graphic.png" 
                        alt="Mobile 5G Coverage" 
                        className="w-full h-auto transition-transform duration-700 group-hover/gfx:scale-[1.02]"
                      />
                    ) : (
                      <div className="w-full aspect-[16/9] flex items-center justify-center bg-gray-50 rounded-none uppercase text-[12px] font-bold tracking-widest text-gray-300">
                        Visual for {activeTelcoTab} coming soon
                      </div>
                    )}
                  </div>
                </div>

                {/* Right side: Feature Cards */}
                <div className="flex flex-col gap-4">
                  {TELCO_SERVICES_CONTENT[activeTelcoTab].options.map((option: any, idx: number) => (
                    <div 
                      key={idx} 
                      className="group flex items-center justify-between p-6 bg-white border border-gray-100 rounded-xl hover:border-[#5D00D6] hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#5D00D6] bg-[#F4F0FA] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors shrink-0 overflow-hidden">
                          <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ 
                              duration: 4, 
                              repeat: Infinity, 
                              ease: "easeInOut",
                              delay: idx * 0.2 
                            }}
                          >
                            {option.icon}
                          </motion.div>
                        </div>
                        <div>
                          <h4 className="font-bold text-[18px] md:text-[24px] text-[#0c1024] mb-1 leading-tight">{option.title}</h4>
                          <p className="text-[14px] md:text-[18px] text-gray-500 font-normal leading-relaxed">{option.desc}</p>
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-gray-300 group-hover:text-[#5D00D6] group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};
