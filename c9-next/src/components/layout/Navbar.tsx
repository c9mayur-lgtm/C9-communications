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
import { getMegaMap, getTabs, AUDIENCE_INFO } from './NavbarDataTracks';

/* ───────────────────────────────────────────── */
const TecnologiaMegaPanel = ({ data, visible }: { data: any; visible: boolean }) => {
  // Use a 5-column flexible grid for the high-density layout
  const gridTemplate = 'repeat(3, minmax(180px, 1fr)) 1.2fr minmax(300px, 320px)';

  return (
    <div 
      className="absolute top-full left-0 right-0 z-[100]"
      style={{
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        transform: visible ? 'translateY(0)' : 'translateY(-8px)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
        <div className="bg-white border border-gray-100 border-top-0 rounded-b-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="grid" style={{ gridTemplateColumns: gridTemplate }}>
            
            {/* PRODUCT/SOLUTION LISTS (DYNAMIC COLUMNS) */}
            {data.columns?.map((col: any, ci: number) => (
              <div key={ci} className="p-8 border-r border-gray-50 flex flex-col gap-10">
                <div className="space-y-8">
                  {col.sections.map((sec: any, si: number) => (
                    <div key={si}>
                      <div className="flex items-center justify-between mb-5 border-b border-gray-50 pb-2">
                        <h4 className="c9-eyebrow !text-[9px] !text-[#5D00D6]/40 leading-none">{sec.heading}</h4>
                      </div>
                      <div className="flex flex-col gap-3.5">
                        {sec.items.map((item: any, ii: number) => (
                          <Link 
                            key={ii} 
                            href={item.path} 
                            className="group flex items-center gap-3 text-slate-500 hover:text-[#5D00D6] transition-all"
                          >
                            <div className="w-1 h-1 rounded-full bg-[#5D00D6] scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                            <span className="text-[13.5px] font-semibold tracking-tight transition-transform group-hover:translate-x-1">{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* SPACER FOR UNUSED COLUMNS TO PUSH GRID/SIDEBAR TO RIGHT */}
            {data.columns && data.columns.length < 3 && (
              <div className={`border-r border-gray-50 ${data.columns.length === 1 ? 'col-span-2' : ''}`}></div>
            )}

            {/* VISUAL HIGHLIGHTS COLUMN (HARDWARE OR CHALLENGES) */}
            <div className="p-10 border-r border-gray-50 bg-[#FCFBFE]/30">
              {data.hardware ? (
                <>
                  <h4 className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#5D00D6] mb-8 opacity-40">Hardware Selection</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {data.hardware.map((h: any, i: number) => (
                      <Link key={i} href={h.path} className="group bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all border-b-2 border-b-transparent hover:border-b-[#5D00D6] duration-300">
                        <div className="aspect-square w-full mb-3 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-2">
                          <img src={h.img} alt={h.title} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-700">{h.title}</span>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h4 className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#5D00D6] mb-8 opacity-40">
                    {data.layout === 'solutions' ? 'Strategic Challenges' : 'Workplace Evolution'}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {(data.challenges || data.modernization)?.map((c: any, i: number) => (
                      <div key={i} className="group relative p-6 bg-white border border-gray-100 rounded-[28px] flex flex-col items-center justify-center text-center hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all duration-500 cursor-pointer overflow-hidden leading-tight aspect-square">
                        <div className="mb-4 p-4 rounded-2xl bg-purple-50 text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white group-hover:rotate-[10deg] transition-all duration-500">
                          {c.icon}
                        </div>
                        <span className="text-[11px] font-bold text-slate-700 px-1">{c.title}</span>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <ArrowRight size={12} className="text-[#5D00D6]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* SIDEBAR COLUMN */}
            <div className="p-10 bg-[#FCFBFE]">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h4 className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#5D00D6] mb-8 opacity-40">
                    {data.sidebar?.heading || "Actionable Support"}
                  </h4>
                  
                  {data.sidebar?.title ? (
                    <div className="space-y-6">
                       <div className="aspect-[4/3] w-full rounded-2xl bg-[#5D00D6] overflow-hidden relative group cursor-pointer shadow-lg shadow-purple-900/10">
                          <img 
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" 
                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-110 transition-transform duration-1000"
                            alt="Smart Workplace"
                          />
                          <div className="absolute inset-x-0 bottom-0 p-6 pt-10 bg-gradient-to-t from-[#0c1024] to-transparent">
                             <span className="text-white font-bold text-[18px] leading-tight block mb-3">{data.sidebar.title}</span>
                             <div className="flex gap-2">
                                <div className="w-8 h-1 rounded-full bg-white opacity-100"></div>
                                <div className="w-2 h-1 rounded-full bg-white opacity-30"></div>
                                <div className="w-2 h-1 rounded-full bg-white opacity-30"></div>
                             </div>
                          </div>
                       </div>
                       <Link href={data.sidebar.path} className="inline-flex items-center gap-2 text-[#5D00D6] font-bold text-[13px] hover:translate-x-2 transition-transform py-2 group">
                          {data.sidebar.button} 
                          <div className="p-1 rounded-full bg-[#5D00D6]/10 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                            <ChevronRight size={14} />
                          </div>
                       </Link>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-6">
                      {(data.sidebar?.items || []).map((item: any, i: number) => (
                        <Link key={i} href={item.path} className="group flex items-center gap-4 transition-all">
                          <div className="p-2.5 bg-white rounded-xl border border-gray-100 text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-all shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5">
                            {item.icon || <ChevronRight size={14} />}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[12.5px] font-bold text-slate-700 group-hover:text-[#5D00D6] transition-colors leading-[1.1]">{item.label || item.title}</span>
                            {item.desc && <p className="text-[10.5px] text-slate-400 leading-tight mt-1 line-clamp-2">{item.desc}</p>}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {!data.sidebar?.title && (
                  <div className="mt-8 pt-8 border-t border-gray-200/60">
                    <Link href="/consultation" className="group flex items-center justify-between p-5 bg-[#5D00D6] rounded-2xl shadow-xl shadow-purple-900/20 hover:bg-[#4d00b3] transition-all hover:-translate-y-1">
                      <div className="flex flex-col">
                        <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest mb-1">Expert Led</span>
                        <span className="text-white font-bold text-[14px]">Free Consultation</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center transition-all group-hover:bg-white/20 group-hover:scale-110">
                        <ArrowRight size={20} className="text-white" />
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   TOP UTILITY BAR (ICP SWITCHER)
   ───────────────────────────────────────────── */
const TopUtilityBar = () => {
  const { audience, setAudience } = useAudience();

  const tracks = [
    { key: 'startup', label: 'STARTUPS' },
    { key: 'business', label: 'BUSINESS' },
    { key: 'enterprise', label: 'ENTERPRISE' }
  ];

  return (
    <div className="bg-[#f8f9fa] border-b border-gray-100 py-2.5 hidden lg:block">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] flex items-center justify-between">
        <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-full border border-gray-200/50">
          {tracks.map((track) => (
            <button
              key={track.key}
              onClick={() => setAudience(track.key as any)}
              className={`px-6 py-2 text-[12px] font-black tracking-[0.1em] rounded-full transition-all duration-300 ${
                audience === track.key 
                  ? 'bg-[#5D00D6] text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {track.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            <a href={`tel:${AUDIENCE_INFO[audience].phone}`} className="flex items-center gap-2 text-slate-500 hover:text-[#5D00D6] transition-colors border-r pr-6 border-gray-200">
               <PhoneCall size={12} strokeWidth={3} />
               <span className="text-[11px] font-black tracking-wider">{AUDIENCE_INFO[audience].phone}</span>
            </a>
            <Link href="/login" className="text-[10px] font-black uppercase tracking-wider text-slate-400 hover:text-slate-800 transition-colors">Portal Login</Link>
          </div>
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
  const TABS = getTabs(audience);

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
          
          {/* Audience Switcher Pills */}
          <div className="px-6 py-3 border-b border-gray-100 shrink-0 bg-[#f8f9fa]">
            <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-full border border-gray-200/50">
              {[
                { key: 'startup', label: 'Startups' },
                { key: 'business', label: 'Business' },
                { key: 'enterprise', label: 'Enterprise' }
              ].map((track) => (
                <button
                  key={track.key}
                  onClick={() => setAudience(track.key as any)}
                  className={`flex-1 py-2 text-[12px] font-black tracking-wide rounded-full transition-all duration-300 ${
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
              {TABS.map(tab => {
                const menuData = MEGA_MAP[tab.menuKey as keyof typeof MEGA_MAP];
                const isActive = activeAccordion === tab.menuKey;

                return (
                  <div key={tab.name} className="border-b border-gray-50 last:border-none pb-2">
                    <button 
                      onClick={() => toggleAccordion(tab.menuKey)}
                      className="flex items-center justify-between w-full py-4 text-left group"
                    >
                      <span className={`text-[18px] font-bold tracking-tight transition-colors ${isActive ? 'text-[#5D00D6]' : 'text-slate-800'}`}>
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
                                          href={sec.action.path} 
                                          onClick={onClose}
                                          className="bg-[#1c1c1c] text-white text-[12px] font-bold px-4 py-2 rounded-full shadow-lg shadow-black/10 active:scale-95 shrink-0"
                                        >
                                          {sec.action.label}
                                        </Link>
                                      )}
                                    </div>
                                    <div className="flex flex-col gap-4">
                                      {sec.items?.map((item: any, ii: number) => (
                                        <Link 
                                          key={ii} 
                                          href={item.path} 
                                          onClick={onClose}
                                          className="flex items-center gap-3 group"
                                        >
                                          <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                          <span className="text-[16px] font-semibold text-slate-600 group-hover:text-[#5D00D6] transition-colors">{item.label}</span>
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
                                  <Link key={i} href={h.path} onClick={onClose} className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
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
                                <div className="grid grid-cols-1 gap-4">
                                  {menuData.sidebar.items.map((item: any, i: number) => (
                                    <Link 
                                      key={i} 
                                      href={item.path || '#'} 
                                      onClick={onClose}
                                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm"
                                    >
                                      <div className="w-8 h-8 rounded-lg bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6]">
                                        {item.icon || <ChevronRight size={14} />}
                                      </div>
                                      <div className="flex flex-col">
                                        <span className="text-[14px] font-bold text-slate-700 leading-tight">{item.label || item.title}</span>
                                        {item.desc && <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{item.desc}</p>}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Handling Sidebar without items (like Modern Workplace) */}
                            {menuData?.sidebar && !menuData.sidebar.items && (
                                <div className="bg-[#F8F7FF] p-6 rounded-3xl mt-2 border border-[#5D00D6]/5">
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5D00D6] mb-4 opacity-40">
                                        {menuData.sidebar.heading}
                                    </h4>
                                    <div className="flex flex-col gap-4">
                                        {menuData.sidebar.title && <p className="text-[16px] font-bold text-slate-800 leading-snug">{menuData.sidebar.title}</p>}
                                        <Link 
                                            href="/contact" 
                                            onClick={onClose}
                                            className="inline-flex items-center justify-center py-3 bg-[#5D00D6] text-white rounded-xl font-bold text-[14px] hover:bg-[#4d00b3] transition-colors"
                                        >
                                            {(menuData.sidebar as any).button || 'Learn More'}
                                        </Link>
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
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="p-6 border-t border-gray-100 bg-white shrink-0">
            <div className="flex flex-col gap-3">
              <a href={`tel:${AUDIENCE_INFO[audience].phone}`} className="flex items-center justify-center gap-3 w-full py-4 bg-gray-50 rounded-2xl font-bold text-slate-800 hover:bg-gray-100 transition-colors">
                <PhoneCall size={18} className="text-[#5D00D6]" /> {AUDIENCE_INFO[audience].phone}
              </a>
              <Link href="/consultation" onClick={onClose} className="w-full">
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
  const pathname = usePathname();
  const { audience } = useAudience();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const MEGA_MAP = getMegaMap(audience);
  const TABS = getTabs(audience);

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
    <div className="w-full">
      <TopUtilityBar />
      <nav 
        className={`transition-all duration-500 border-b bg-white/95 backdrop-blur-md ${
          isScrolled ? 'py-2.5 shadow-sm border-gray-100' : 'py-4 border-gray-100'
        }`}
        onMouseLeave={handleLeave}
      >
        <div className="container mx-auto px-6 md:px-8 flex items-center justify-between" style={{ maxWidth: '1240px' }}>
          <div className="flex items-center gap-6 md:gap-10 shrink-0">
            <Link href="/" className="transition-transform active:scale-95">
                <img 
                  src="/images/c9_logo_scrolled.svg" 
                  alt="C9 Communications" 
                  className="h-[44px] w-auto object-contain" 
                />
            </Link>
          </div>
        
        <div className="hidden lg:flex gap-1.5 items-center">
          {TABS.map(tab => {
            const isOpen = openMenu === tab.menuKey;
            return (
              <div key={tab.name} className="relative h-full flex items-center" onMouseEnter={() => handleEnter(tab.menuKey)}>
                <button className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[13px] font-medium tracking-tight transition-all duration-300 ${
                  isOpen ? 'text-[#5D00D6] bg-purple-50/80 shadow-sm' : (isScrolled ? 'text-slate-600 hover:bg-gray-50' : 'text-slate-500 hover:text-[#5D00D6]')
                }`}>
                  {tab.name}
                  <ChevronDown size={14} className={`transition-transform duration-300 opacity-40 ${isOpen ? 'rotate-180 text-[#5D00D6] opacity-100' : ''}`} />
                </button>
              </div>
            );
          })}
        </div>
        
        <div className="flex items-center gap-4 md:gap-7">
          <div className={`hidden lg:flex flex-col items-end border-r pr-7 mr-1 ${isScrolled ? 'border-gray-200' : 'border-gray-300'}`}>
            <span className="c9-eyebrow !text-[9px] !text-slate-400 mb-1 leading-none">Priority Support</span>
            <a href={`tel:${AUDIENCE_INFO[audience].phone}`} className={`text-[14px] font-medium tracking-tight hover:text-[#5D00D6] transition-colors leading-none font-dm-sans ${isScrolled ? 'text-slate-600' : 'text-slate-800'}`}>
              {AUDIENCE_INFO[audience].phone}
            </a>
          </div>
          
          <Button 
            size="sm"
            className="hidden sm:flex transition-all bg-[#0c1024] text-white hover:bg-black font-bold tracking-tight px-6 rounded-full text-[11px] h-10 border-none shadow-lg shadow-black/5"
          >
            C9 defense
          </Button>
          
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
            className="absolute top-full left-0 right-0 z-50 pointer-events-none"
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
