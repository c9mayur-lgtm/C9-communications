'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Radio, Smartphone, Phone, ArrowRight, Volume2 } from 'lucide-react';
import { TELCO_SERVICES_CONTENT } from '@/components/layout/NavbarData';

export const WpServices = () => {
  const [activeTelcoTab, setActiveTelcoTab] = useState('internet');

  return (
    <>
      {/* Simplifying IT Section (Updated to Light Theme) */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-widest mb-4 block">Proven Experience</span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#0c1024] tracking-tight leading-tight">
              Simplifying IT for a complex world.
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {[
              { 
                title: 'Cost-effectiveness', 
                desc: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.',
                icon: '/images/icons/cost-effectiveness.png?v=2'
              },
              { 
                title: 'Innovative Technology', 
                desc: 'We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead.',
                icon: '/images/icons/innovative-technology.png?v=2'
              },
              { 
                title: 'Industry Expertise', 
                desc: 'We specialize in serving specific industries, such as healthcare, finance, or manufacturing.',
                icon: '/images/icons/industry-expertise.png?v=2'
              },
              { 
                title: 'Scalability', 
                desc: 'Our solutions are scalable and can grow with your business, ensuring that you get the most value.',
                icon: '/images/icons/scalability.png?v=2'
              }
            ].map((f, i) => (
              <div key={i} className={`flex flex-col items-start flex-1 ${
                i === 0 ? 'pb-8 lg:pb-0 lg:pr-8' : 
                i === 3 ? 'pt-8 lg:pt-0 lg:pl-8' : 
                'py-8 lg:py-0 lg:px-8'
              }`}>
                <div className="w-14 h-14 mb-6 flex items-center justify-start">
                  <img src={f.icon} alt={f.title} className="max-w-full max-h-full object-contain object-left" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold mb-3 text-[#0c1024] tracking-tight">{f.title}</h3>
                <p className="text-gray-600 text-[14px] md:text-[18px] leading-relaxed font-normal">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Telco Services Section (Matching Reference Image) */}
      <section className="py-10 md:py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="mb-10">
            <span className="text-[#5D00D6] text-[13px] font-bold uppercase tracking-[0.3em] mb-4 block" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>Our Expertise</span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-[#0c1024] tracking-tight mb-8">
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
                <div>
                  <h3 className="text-[32px] font-bold text-[#0c1024] mb-6 tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                    {TELCO_SERVICES_CONTENT[activeTelcoTab].heading}
                  </h3>
                  <p className="text-[18px] text-gray-500 leading-relaxed font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                    {TELCO_SERVICES_CONTENT[activeTelcoTab].description}
                  </p>
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
