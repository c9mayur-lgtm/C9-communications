'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall,
  Zap,
  Building2,
  Shield
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useAudience } from "@/components/context/AudienceContext";
import { getMegaMap, TABS } from './NavbarData';

const AUDIENCE_INFO: Record<string, any> = {
  startup:    { phone: '1800 000 299' },
  business:   { phone: '1800 000 299' },
  enterprise: { phone: '1300 480 905' }
};

/* ───────────────────────────────────────────── */
const TecnologiaMegaPanel = ({ data, visible }: { data: any; visible: boolean }) => {
  const colCount = data.columns ? data.columns.length : 3;
  const hasMiddle = data.hardware || data.challenges || data.modernization || data.partners;

  return (
    <div className="w-full">
      <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: data.maxWidth || '1240px' }}>
        <div className="bg-white border border-gray-100 border-top-0 rounded-b-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="flex">
            
            {/* PRODUCT/SOLUTION LISTS (DYNAMIC COLUMNS) */}
            <div className="flex-1 grid" style={{ gridTemplateColumns: `repeat(${colCount}, minmax(200px, 1fr)) ${hasMiddle ? '1.2fr' : ''}` }}>
              {data.columns?.map((col: any, ci: number) => (
                <div key={ci} className="p-5 border-r border-gray-50 flex flex-col gap-6">
                  <div className="space-y-5">
                    {col.sections.map((sec: any, si: number) => (
                      <div key={si}>
                        <div className="flex items-center justify-between mb-2 border-b border-gray-50 pb-1.5">
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5D00D6] opacity-60 leading-none">{sec.heading}</h4>
                          {sec.action && (
                            <Link 
                              href={sec.action.path || '#'} 
                              className="bg-[#1c1c1c] text-white text-[10px] font-bold px-3 py-1.5 rounded-full hover:bg-black transition-all active:scale-95 shrink-0"
                            >
                              {sec.action.label}
                            </Link>
                          )}
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {sec.items.map((item: any, ii: number) => (
                            <Link 
                              key={ii} 
                              href={item.path || '#'} 
                              className="group flex items-center gap-3 text-slate-500 hover:text-[#5D00D6] transition-all"
                            >
                              <span className="text-[14px] font-medium transition-colors" style={{ color: item.color || 'inherit' }}>{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {col.footerLogo && (
                    <div className="mt-auto pt-6">
                       <img src={col.footerLogo} alt="Logo" className="h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all border border-gray-100 rounded-xl p-2 inline-block" />
                    </div>
                  )}

                  {col.promoCard && (
                    <div className="mt-6 p-6 bg-[#F8F9FB] rounded-[32px] border border-gray-100 relative overflow-hidden group">
                      <div className="relative z-10">
                        <p className="text-[12px] font-medium text-slate-800 leading-tight mb-4 pr-12">{col.promoCard.title}</p>
                        <Link href={col.promoCard.path || '#'} className="inline-flex items-center justify-center px-6 py-2.5 bg-[#5D00D6] text-white text-[11px] font-bold rounded-xl hover:bg-[#4d00b3] transition-all shadow-lg shadow-purple-900/10">
                          {col.promoCard.button}
                        </Link>
                      </div>
                      {/* Geometric background pattern */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gray-200/20 translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl" />
                    </div>
                  )}
                </div>
              ))}

              {/* VISUAL HIGHLIGHTS COLUMN (HARDWARE OR CHALLENGES OR PARTNERS) */}
              {hasMiddle && (
                <div className="p-5 border-r border-gray-50">
                  {data.hardware ? (
                    <>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5D00D6] opacity-60 mb-6">Hardware</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {data.hardware.map((h: any, i: number) => (
                          <Link key={i} href={h.path || '#'} className="group bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:shadow-xl hover:border-[#5D00D6]/20 transition-all duration-500">
                            <div className="aspect-[1.5/1] w-full mb-2 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-2">
                              <img src={h.img} alt={h.title} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <span className="text-[12px] font-semibold text-slate-700">{h.title}</span>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5D00D6] opacity-60 mb-6">
                        {data.layout === 'modern-workplace' ? 'Workplace Modernization' : 'Business Challenges'}
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {(data.challenges || data.modernization)?.map((c: any, i: number) => (
                          <div key={i} className="group relative p-6 bg-white border border-gray-100 rounded-[28px] flex flex-col items-center justify-center text-center hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all duration-500 cursor-pointer overflow-hidden aspect-square">
                            <div className="mb-4 p-4 rounded-2xl bg-purple-50 text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-500">
                              {c.icon}
                            </div>
                            <span className="text-[12px] font-semibold text-slate-800 leading-tight px-1">{c.title}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* SIDEBAR COLUMN */}
            <div className={`w-[300px] p-5 transition-colors ${data.sidebar?.variant === 'purple' ? 'bg-[#F9F8FF]' : 'bg-white'}`}>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5D00D6] opacity-60 mb-8">
                    {data.sidebar?.heading || "Actionable Support"}
                  </h4>
                  
                  {data.sidebar?.slider ? (
                    <div className="space-y-6">
                       {data.sidebar.slider.map((slide: any, i: number) => (
                         <div key={i} className="space-y-6">
                           <div className="aspect-[1.8/1] w-full rounded-2xl overflow-hidden relative group cursor-pointer shadow-xl shadow-purple-900/5">
                              <img 
                                src={slide.img} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                alt={slide.title}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/90 via-transparent to-transparent opacity-80" />
                              <div className="absolute inset-x-0 bottom-0 p-6">
                                 <span className="text-white font-semibold text-[18px] leading-tight block">{slide.title}</span>
                              </div>
                           </div>
                           <div className="flex items-center gap-1.5 justify-center">
                              <div className="w-6 h-1.5 rounded-full bg-[#5D00D6]" />
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                           </div>
                         </div>
                       ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {/* Check if items are logos (e.g. Strategic Partners) */}
                      {data.sidebar?.items && data.sidebar.items[0]?.logo ? (
                        <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-2">
                          {data.sidebar.items.map((item: any, i: number) => (
                            <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
                              <div className="h-10 w-full flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                                <img src={item.logo} alt={item.title} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500" />
                              </div>
                              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-600 transition-colors">{item.title}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        (data.sidebar?.items || []).map((item: any, i: number) => (
                          <Link 
                            key={i} 
                            href={item.path || '#'} 
                            className="group flex flex-col gap-1 transition-all"
                          >
                            <div className="flex items-center gap-3">
                              {item.icon && <div className="text-[#5D00D6] group-hover:scale-110 transition-transform shrink-0">{item.icon}</div>}
                              <span className="text-[14px] font-semibold text-slate-800 group-hover:text-[#5D00D6] transition-colors leading-tight">
                                {item.label || item.title}
                              </span>
                            </div>
                            {item.desc && <p className="text-[11px] text-slate-400 leading-normal mt-1.5 line-clamp-2">{item.desc}</p>}
                          </Link>
                        ))
                      )}
                    </div>
                  )}

                  {data.sidebar?.viewAllPath && (
                    <Link href={data.sidebar.viewAllPath} className="inline-block mt-8 text-[#5D00D6] font-bold text-[12px] hover:underline">
                      View all
                    </Link>
                  )}
                </div>

                {!data.sidebar?.hideCTA && !data.sidebar?.variant && (
                  <div className="mt-8 pt-8 border-t border-gray-200/60">
                    <Link href="/contact" className="group flex items-center justify-between p-5 bg-[#5D00D6] rounded-[24px] shadow-2xl shadow-purple-900/20 hover:bg-[#4d00b3] transition-all hover:-translate-y-1">
                      <div className="flex flex-col">
                        <span className="text-white/60 text-[10px] uppercase font-bold mb-1 tracking-wider">Expert Led</span>
                        <span className="text-white font-bold text-[15px]">Free Consultation</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center transition-all group-hover:bg-white/20">
                        <ArrowRight size={20} className="text-white" />
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* FULL WIDTH CTA BANNER (e.g. IT Solutions) */}
          {data.ctaBanner && (
            <div className="px-7 pb-7">
              <div className="bg-[#5D00D6] rounded-2xl p-6 lg:p-7 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 group">
                <div className="relative z-10 max-w-2xl">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-1.5">{data.ctaBanner.title}</h3>
                  <p className="text-white/70 text-[13px] lg:text-[14px] font-medium leading-relaxed">{data.ctaBanner.body}</p>
                </div>
                <Link 
                  href={data.ctaBanner.path || '#'} 
                  className="relative z-10 px-10 py-4 bg-white text-[#5D00D6] font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-xl shadow-black/20 shrink-0"
                >
                  {data.ctaBanner.button}
                </Link>
                {/* Background decorative element */}
                <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-white opacity-[0.03] rounded-full blur-[80px] translate-x-1/2 translate-y-1/2" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   TOP UTILITY BAR
   ───────────────────────────────────────────── */
const TopUtilityBar = () => {
  const { audience } = useAudience();

  return (
    <div className="bg-[#f8f9fa] border-b border-gray-100 py-3.5 hidden lg:block">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] flex items-center justify-end">
        <div className="flex items-center gap-6 divide-x divide-gray-200">
          <a
            href={`tel:${AUDIENCE_INFO[audience].phone}`}
            className="flex items-center gap-2.5 group pr-6"
          >
            <span className="text-[12px] font-semibold uppercase text-slate-500 group-hover:text-[#5D00D6] transition-colors tracking-wide">Priority Support</span>
            <span className="text-[13px] font-black text-slate-800 group-hover:text-[#5D00D6] transition-colors">{AUDIENCE_INFO[audience].phone}</span>
          </a>
          <Link href="/contact" className="text-[12px] font-bold uppercase text-slate-600 hover:text-[#5D00D6] transition-colors pl-6 tracking-wide">
            Contact Us
          </Link>
          <Link href="/defense" className="text-[12px] font-bold uppercase text-slate-600 hover:text-[#5D00D6] transition-colors pl-6 tracking-wide">
            C9 Defense
          </Link>
          <Link href="/login" className="text-[12px] font-bold uppercase text-slate-500 hover:text-slate-900 transition-colors pl-6 tracking-wide">
            Portal Login
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MOBILE MENU COMPONENT
   ───────────────────────────────────────────── */
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { audience, setAudience } = useAudience();
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const MEGA_MAP = getMegaMap(audience);

  const toggleAccordion = (key: string) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[200] bg-white flex flex-col h-[100dvh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
            <Link href="/" onClick={onClose}>
              <img src="/images/c9_logo_scrolled.svg" alt="C9" className="h-[36px]" />
            </Link>
            <button onClick={onClose} className="p-2 text-slate-900 hover:bg-slate-50 rounded-lg">
              <X size={24} />
            </button>
          </div>
          
          {/* Audience Switcher - Fixed Mobile View */}
          <div className="px-6 py-3 border-b border-gray-100 shrink-0 bg-[#f8f9fa]">
            <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-full border border-gray-200/50">
              {[
                { key: 'startup', label: 'Greenfield' },
                { key: 'business', label: 'Business' },
                { key: 'enterprise', label: 'Enterprise' }
              ].map((track) => (
                <button
                  key={track.key}
                  onClick={() => setAudience(track.key as any)}
                  className={`flex-1 py-2 text-[12px] font-bold  rounded-full transition-all duration-300 ${
                    audience === track.key
                      ? 'bg-[#5D00D6] text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {track.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-6">
            <div className="flex flex-col gap-2">
              {TABS.map((tab: { name: string; menuKey: string; path: string }) => {
                const menuData: any = MEGA_MAP[tab.menuKey as keyof typeof MEGA_MAP];
                const isActive = activeAccordion === tab.menuKey;

                return (
                  <div key={tab.name} className="border-b border-gray-50 last:border-none pb-2">
                    <button 
                      onClick={() => toggleAccordion(tab.menuKey)}
                      className="flex items-center justify-between w-full py-4 text-left group"
                    >
                      <span className={`text-[18px] font-semibold  transition-colors ${isActive ? 'text-[#5D00D6]' : 'text-slate-800'}`}>
                        {tab.name}
                      </span>
                      <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${isActive ? 'rotate-180 text-[#5D00D6]' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-8 pb-6 pt-2 pl-2">
                            {/* Rendering Columns & Sections */}
                            {menuData?.columns?.map((col: any, ci: number) => (
                              <div key={ci} className="flex flex-col gap-6">
                                {col.sections.map((sec: any, si: number) => (
                                  <div key={si}>
                                    <div className="flex items-center justify-between mb-4 border-b border-gray-50 pb-2 pr-2">
                                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5D00D6] opacity-40 leading-none">{sec.heading}</h4>
                                      {sec.action && (
                                        <Link 
                                          href={sec.action.path || '#'} 
                                          onClick={onClose}
                                          className="bg-[#1c1c1c] text-white text-[12px] font-bold px-4 py-2 rounded-full shadow-lg shadow-black/10 active:scale-95 shrink-0"
                                        >
                                          {sec.action.label}
                                        </Link>
                                      )}
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                      {sec.items?.map((item: any, ii: number) => (
                                        <Link 
                                          key={ii} 
                                          href={item.path || '#'} 
                                          onClick={onClose}
                                          className="flex items-center gap-3 group"
                                        >
                                          <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                      <span className="text-[16px] font-medium text-slate-600 group-hover:text-[#5D00D6] transition-colors">{item.label}</span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ))}

                            {/* Middle Highlights (Hardware or Challenges) */}
                            {menuData?.hardware && (
                              <div className="grid grid-cols-2 gap-3 pb-4">
                                {menuData.hardware.map((h: any, i: number) => (
                                  <Link key={i} href={h.path || '#'} onClick={onClose} className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                                    <img src={h.img} alt={h.title} className="w-12 h-12 object-contain mb-2" />
                                    <span className="text-[11px] font-bold text-slate-700">{h.title}</span>
                                  </Link>
                                ))}
                              </div>
                            )}

                            {(menuData?.challenges || menuData?.modernization) && (
                              <div className="grid grid-cols-2 gap-3 pb-4">
                                {(menuData.challenges || menuData.modernization).map((c: any, i: number) => (
                                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center aspect-square">
                                    <div className="mb-2 text-[#5D00D6]">{c.icon}</div>
                                    <span className="text-[11px] font-bold text-slate-700">{c.title}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Industry Focus / Sidebar Items */}
                            {menuData?.sidebar && menuData.sidebar.items && (
                              <div className="bg-[#F8F7FF] p-6 rounded-3xl mt-2 border border-[#5D00D6]/5">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5D00D6] mb-6">
                                  {menuData.sidebar.heading}
                                </h4>
                                
                                {menuData.sidebar.items[0]?.logo ? (
                                  <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                                    {menuData.sidebar.items.map((item: any, i: number) => (
                                      <div key={i} className="flex flex-col items-center gap-2">
                                        <div className="h-8 w-full flex items-center justify-center">
                                          <img src={item.logo} alt={item.title} className="max-h-full max-w-full object-contain grayscale opacity-60" />
                                        </div>
                                        <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400">{item.title}</span>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="grid grid-cols-1 gap-3">
                                    {menuData.sidebar.items.map((item: any, i: number) => (
                                      <Link 
                                        key={i} 
                                        href={item.path || '#'} 
                                        onClick={onClose}
                                        className="flex flex-col gap-1 py-1"
                                      >
                                        <span className="text-[14px] font-semibold text-slate-700 leading-tight">{item.label || item.title}</span>
                                        {item.desc && <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{item.desc}</p>}
                                      </Link>
                                    ))}
                                  </div>
                                )}

                                {menuData.sidebar.viewAllPath && (
                                  <Link 
                                    href={menuData.sidebar.viewAllPath} 
                                    onClick={onClose}
                                    className="inline-block mt-6 text-[#5D00D6] font-bold text-[12px] hover:underline"
                                  >
                                    View all
                                  </Link>
                                )}
                              </div>
                            )}

                            {/* Handling Slider/Sidebar without items */}
                            {menuData?.sidebar && !menuData.sidebar.items && (
                                <div className="bg-[#F8F7FF] p-5 rounded-3xl mt-2 border border-[#5D00D6]/5">
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5D00D6] mb-4 opacity-40">
                                        {menuData.sidebar.heading}
                                    </h4>
                                    <div className="flex flex-col gap-1.5">
                                        {menuData.sidebar.slider && menuData.sidebar.slider[0] && (
                                          <div className="space-y-4">
                                            <div className="aspect-[1.6/1] w-full rounded-2xl overflow-hidden relative">
                                              <img src={menuData.sidebar.slider[0].img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                                            </div>
                                            <p className="text-[16px] font-bold text-slate-800 leading-snug">{menuData.sidebar.slider[0].title}</p>
                                          </div>
                                        )}
                                        {menuData.sidebar.viewAllPath && (
                                          <Link 
                                            href={menuData.sidebar.viewAllPath} 
                                            onClick={onClose}
                                            className="text-[#5D00D6] font-bold text-[12px] hover:underline"
                                          >
                                            View all
                                          </Link>
                                        )}
                                    </div>
                                </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <div className="border-b border-gray-50 last:border-none pb-2">
                <Link 
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-between w-full py-4 text-left group"
                >
                  <span className="text-[18px] font-semibold text-slate-800 transition-colors">
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="p-6 border-t border-gray-100 bg-white shrink-0">
            <div className="flex flex-col gap-3">
              <a href={`tel:${AUDIENCE_INFO[audience].phone}`} className="flex items-center justify-center gap-3 w-full py-4 bg-gray-50 rounded-2xl font-bold text-slate-800 hover:bg-gray-100 transition-colors">
                <PhoneCall size={18} className="text-[#5D00D6]" /> {AUDIENCE_INFO[audience].phone}
              </a>
              <Link href="/contact" onClick={onClose} className="w-full">
                <Button size="lg" className="w-full py-7 text-[16px] font-bold rounded-2xl shadow-xl shadow-purple-900/20 bg-[#5D00D6] border-none text-white transition-transform active:scale-95">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ─────────────────────────────────────────────
   MAIN NAVBAR COMPONENT
   ───────────────────────────────────────────── */
export const Navbar = () => {
  const { audience, setAudience } = useAudience();
  const MEGA_MAP = getMegaMap(audience);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(key);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  return (
    <div className="w-full relative">
      <TopUtilityBar />
      <nav 
        className={`transition-all duration-500 border-b bg-white/95 backdrop-blur-md ${
          isScrolled ? 'py-1 shadow-sm border-gray-100' : 'py-1.5 border-gray-100'
        }`}
        onMouseLeave={handleLeave}
      >
        <div className="container mx-auto px-6 md:px-8 flex items-center justify-between" style={{ maxWidth: '1240px' }}>
          <div className="flex items-center gap-6 md:gap-10 shrink-0">
            <Link href="/" className="transition-transform active:scale-95">
                <img 
                  src="/images/c9_logo_scrolled.svg" 
                  alt="C9 Communications" 
                  className="h-[34px] w-auto object-contain" 
                />
            </Link>
          </div>
        
        <div className="hidden lg:flex gap-1 items-center">
          {/* Homepage Link */}
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
              pathname === '/'
                ? 'bg-[#5D00D6]/10 text-[#5D00D6]'
                : 'text-slate-400 hover:text-[#5D00D6] hover:bg-[#5D00D6]/5'
            }`}
          >
            Homepage
          </Link>

          {/* Audience Persona Pills */}
          {[
            { key: 'startup',    label: 'Greenfield',    path: '/greenfield' },
            { key: 'business',   label: 'Small Business', path: '/business' },
            { key: 'enterprise', label: 'Enterprise',     path: '/enterprise' },
          ].map((track) => (
            <Link
              key={track.key}
              href={track.path}
              onClick={() => setAudience(track.key as any)}
              className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                pathname === track.path
                  ? 'bg-[#5D00D6]/10 text-[#5D00D6]'
                  : 'text-slate-400 hover:text-[#5D00D6] hover:bg-[#5D00D6]/5'
              }`}
            >
              {track.label}
            </Link>
          ))}

          {/* Divider */}
          <div className="w-px h-4 bg-gray-200 mx-1" />

          {/* Main Nav Tabs */}
          {TABS.map(tab => {
            const isOpen = openMenu === tab.menuKey;
            return (
              <div key={tab.name} className="relative h-full flex items-center" onMouseEnter={() => handleEnter(tab.menuKey)}>
                <button className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-[13px] font-medium transition-all duration-300 ${
                  isOpen ? 'text-[#5D00D6] bg-purple-50/80 shadow-sm' : (isScrolled ? 'text-slate-600 hover:bg-gray-50' : 'text-slate-500 hover:text-[#5D00D6]')
                }`}>
                  {tab.name}
                  <ChevronDown size={13} className={`transition-transform duration-300 opacity-40 ${isOpen ? 'rotate-180 text-[#5D00D6] opacity-100' : ''}`} />
                </button>
              </div>
            );
          })}
        </div>
        
        <div className="flex items-center gap-4 md:gap-7">
          <button 
            className="lg:hidden p-2.5 rounded-xl transition-colors text-[#0c1024] hover:bg-gray-50 border border-gray-100"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 z-[110] pointer-events-auto"
            onMouseEnter={() => handleEnter(openMenu)}
            onMouseLeave={handleLeave}
          >
            <TecnologiaMegaPanel data={MEGA_MAP[openMenu as keyof typeof MEGA_MAP]} visible={true} />
          </motion.div>
        )}
      </AnimatePresence>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </nav>
    </div>
  );
};
