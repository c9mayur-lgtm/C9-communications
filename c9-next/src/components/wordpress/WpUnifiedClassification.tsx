'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronRight, 
  Shapes, 
  HeartHandshake, 
  Building2,
  Box,
  Monitor,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { PRODUCTS_MENU, SOLUTIONS_MENU, INDUSTRIES_MENU } from '@/components/layout/NavbarDataTracks';

const CATEGORIES = [
  { id: 'products', label: 'By product', icon: <Shapes size={28} strokeWidth={1} /> },
  { id: 'solutions', label: 'By solution', icon: <HeartHandshake size={28} strokeWidth={1} /> },
  { id: 'industries', label: 'By industry', icon: <Building2 size={28} strokeWidth={1} /> },
];

interface WpUnifiedClassificationProps {
  showSidebar?: boolean;
  onlySidebar?: boolean;
}

export const WpUnifiedClassification = ({ 
  showSidebar = false,
  onlySidebar = false 
}: WpUnifiedClassificationProps) => {
  const [activeTrack, setActiveTrack] = useState('products');

  const getActiveData = () => {
    switch (activeTrack) {
      case 'products': return PRODUCTS_MENU;
      case 'solutions': return SOLUTIONS_MENU;
      case 'industries': return INDUSTRIES_MENU;
      default: return PRODUCTS_MENU;
    }
  };

  const menuData: any = getActiveData();
  const activeData: any = getActiveData();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Cinematic Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(93,0,214,0.03)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(93,0,214,0.02)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-[1240px] relative z-10">
        
        {/* HEADER SECTION - Hidden if onlySidebar is true */}
        {!onlySidebar && (
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#5D00D6] text-[12px] font-bold uppercase tracking-[0.2em] mb-4 block">
                EXPLORE THE C9 ECOSYSTEM
              </span>
              <h1 className="text-[42px] md:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                The right technology, <br />
                <span className="text-[#5D00D6]">organized for you.</span>
              </h1>
              <p className="text-[18px] text-slate-600 leading-relaxed font-medium">
                Browse our comprehensive technology stack. Whether you know the specific product you need, have a unique challenge to solve, or want industry-specific expertise, we have categorized our capabilities to simplify your search.
              </p>
            </motion.div>
          </div>
        )}

        {/* TRACK SWITCHER - Hidden if onlySidebar is true */}
        {!onlySidebar && (
          <div className="grid grid-cols-3 gap-3 md:flex md:items-center md:justify-center md:gap-6 mb-12 md:mb-16">
            {CATEGORIES.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                className={`flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 px-3 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-full transition-all duration-300 border ${
                  activeTrack === track.id
                    ? 'bg-[#5D00D6] border-[#5D00D6] text-white shadow-xl shadow-purple-900/40'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-[#5D00D6]/50 hover:bg-slate-50'
                }`}
              >
                <span className={`${activeTrack === track.id ? 'text-white' : 'text-[#5D00D6]'} [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-7 md:[&>svg]:h-7`}>
                  {track.icon}
                </span>
                <span className="text-[10px] md:text-[14px] font-bold uppercase tracking-wider leading-tight text-center">
                  {track.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* MAIN CONTENT AREA */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrack + (onlySidebar ? '-only-sidebar' : '')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* GRID SECTIONS - Hidden if onlySidebar is true */}
              {!onlySidebar && (
                <div className="space-y-16">
                  {activeData.columns?.map((col: any, ci: number) => (
                    <div key={ci} className="space-y-16">
                      {col.sections.map((sec: any, si: number) => (
                        <div key={si}>
                          <div className="flex items-center gap-4 mb-10">
                            <div className="w-1.5 h-6 bg-[#5D00D6] rounded-full" />
                            <h3 className="text-[24px] font-bold text-slate-900 tracking-tight leading-none capitalize">
                               {sec.heading}
                            </h3>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sec.items.map((item: any, ii: number) => (
                              <Link 
                                key={ii} 
                                href={item.path || '#'} 
                                className="group flex flex-col bg-white border border-gray-200 p-8 rounded-[24px] hover:border-[#5D00D6] hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all duration-500 overflow-hidden"
                              >
                                <h4 className="text-[20px] font-bold text-slate-900 mb-4 group-hover:text-[#5D00D6] transition-colors leading-tight tracking-tight pt-2">
                                   {item.label || item.title}
                                </h4>
                                <p className="text-[14px] text-slate-500 leading-relaxed mb-4 flex-grow">
                                   {item.desc || `Explore integrated ${item.label?.toLowerCase() || 'solutions'} designed for seamless organisational growth.`}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* Actionable Feature Sections (Sidebar equivalent) */}
              {(showSidebar || onlySidebar) && activeData.sidebar && (
                <div className={onlySidebar ? "pt-0" : "pt-10"}>
                  <div className="bg-[#F8F9FF] rounded-[32px] p-8 md:p-12 text-slate-900 relative overflow-hidden group border border-slate-200 shadow-xl">
                     <div className="relative z-10 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div>
                           <span className="text-[#5D00D6] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">
                              {activeData.sidebar.heading}
                           </span>
                           <h3 className="text-[28px] md:text-[36px] font-bold leading-tight mb-6 tracking-tight">
                              {activeData.sidebar.title || "Ready to transform your workplace?"}
                           </h3>
                           <Link 
                             href={activeData.sidebar.path || "/contact"} 
                             className="inline-flex items-center gap-3 px-8 py-4 bg-[#5D00D6] text-white rounded-full font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group/btn"
                           >
                             {activeData.sidebar.button || "Schedule consultation"} <ArrowRight size={18} className="translate-x-0 group-hover/btn:translate-x-1 transition-transform" />
                           </Link>
                        </div>

                        {activeData.sidebar.items && (
                           <div className="grid gap-3">
                              {activeData.sidebar.items.map((item: any, idx: number) => (
                                <Link key={idx} href={item.path} className="flex items-center gap-5 p-5 bg-white hover:bg-slate-50 border border-slate-200 rounded-[20px] transition-all group/item shadow-sm">
                                   <div className="w-10 h-10 rounded-lg bg-[#5D00D6]/10 text-[#5D00D6] flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                      {item.icon || <Monitor size={18} strokeWidth={2} />}
                                   </div>
                                   <div>
                                      <p className="text-[15px] font-bold text-slate-900 mb-0.5">{item.title || item.label}</p>
                                      {item.desc && <p className="text-[12px] text-slate-500 leading-tight font-medium">{item.desc}</p>}
                                   </div>
                                </Link>
                              ))}
                           </div>
                        )}
                     </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
