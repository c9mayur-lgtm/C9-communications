'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  PhoneCall,
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { MEGA_MAP, TABS } from './NavbarData';

/* ─────────────────────────────────────────────
   MEGA PANEL COMPONENT (LIGHT THEME)
   ───────────────────────────────────────────── */
const TecnologiaMegaPanel = ({ data, visible }: { data: any; visible: boolean }) => {
  // Use a more responsive grid template
  const gridTemplate = 'minmax(300px, 350px) 1fr minmax(300px, 350px)';

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
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="bg-white border border-gray-100 border-top-0 rounded-b-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="grid" style={{ gridTemplateColumns: gridTemplate }}>
            
            {/* COLUMN 1: NAVIGATION / HEADING */}
            <div className="p-8 border-r border-gray-50 flex flex-col gap-10">
              {data.heading && (
                <div className="max-w-[280px]">
                  <h2 className="text-[32px] md:text-[40px] font-semibold text-slate-800 leading-[1.2] tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                    {data.heading}
                  </h2>
                </div>
              )}
              {data.columns?.map((col: any, ci: number) => (
                <div key={ci} className="space-y-8">
                  {col.sections.map((sec: any, si: number) => (
                    <div key={si}>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5D00D6] mb-5 opacity-30">{sec.heading}</h4>
                      <div className="flex flex-col gap-3.5">
                        {sec.items.map((item: any, ii: number) => (
                          <Link 
                            key={ii} 
                            href={item.path} 
                            className="group flex items-center gap-3 text-slate-500 hover:text-[#5D00D6] transition-all"
                          >
                            <div className="w-1 h-1 rounded-full bg-[#5D00D6] scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                            <span className="text-[14px] font-medium tracking-tight transition-transform group-hover:translate-x-1">{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* COLUMN 2: HIGHLIGHTS/CHALLENGES */}
            <div className="p-10 border-r border-gray-50 bg-[#FCFBFE]/30">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5D00D6] mb-8 opacity-30">Modern Infrastructure</h4>
              <div className="grid grid-cols-2 gap-5">
                {(data.challenges || data.modernization)?.map((c: any, i: number) => (
                  <div key={i} className="group relative p-6 bg-white border border-gray-100 rounded-[24px] flex flex-col items-center justify-center text-center hover:border-[#5D00D6]/20 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all duration-500 cursor-pointer overflow-hidden leading-tight">
                    <div className="mb-4 p-4 rounded-full bg-slate-50 text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white group-hover:scale-110 transition-all duration-500">
                      {c.icon}
                    </div>
                    <span className="text-[13px] font-semibold text-slate-700 px-2">{c.title}</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 3: SIDEBAR / RESOURCES */}
            <div className="p-10 bg-[#FCFBFE]">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5D00D6] mb-8 opacity-30">Support & Resources</h4>
                  <div className="flex flex-col gap-6">
                    {(data.sidebar?.items || []).slice(0, 3).map((item: any, i: number) => (
                      typeof item === 'string' ? (
                        <div key={i} className="group flex items-start gap-4 cursor-pointer">
                          <div className="mt-1 p-2 bg-white rounded-lg border border-gray-100 text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                            {<ChevronRight size={14} />}
                          </div>
                          <span className="text-[14px] font-semibold text-slate-700 group-hover:text-[#5D00D6] transition-colors">{item}</span>
                        </div>
                      ) : item.path && item.path !== '#' ? (
                        <Link key={i} href={item.path} className="group flex items-start gap-4">
                          <div className="mt-1 p-2 bg-white rounded-lg border border-gray-100 text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                            {item.icon || <ChevronRight size={14} />}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[14px] font-semibold text-slate-700 group-hover:text-[#5D00D6] transition-colors">{item.label || item.title}</span>
                            {item.desc && <p className="text-[12px] text-slate-400 leading-tight mt-1 line-clamp-2">{item.desc}</p>}
                          </div>
                        </Link>
                      ) : (
                        <div key={i} className="group flex items-start gap-4 cursor-pointer">
                          <div className="mt-1 p-2 bg-white rounded-lg border border-gray-100 text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                            {item.icon || <ChevronRight size={14} />}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[14px] font-semibold text-slate-700 group-hover:text-[#5D00D6] transition-colors">{item.label || item.title}</span>
                            {item.desc && <p className="text-[12px] text-slate-400 leading-tight mt-1 line-clamp-2">{item.desc}</p>}
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200/60">
                  <Link href="/consultation" className="group flex items-center justify-between p-5 bg-[#5D00D6] rounded-2xl shadow-xl shadow-purple-900/20 hover:bg-[#4d00b3] transition-all">
                    <div className="flex flex-col">
                      <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest mb-1">Tailored for you</span>
                      <span className="text-white font-bold text-[14px]">Free Consultation</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center transition-transform group-hover:rotate-12">
                      <ArrowRight size={20} className="text-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

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
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[200] bg-white flex flex-col"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <img src="/images/c9_logo.svg" alt="C9" className="h-[28px]" />
            <button onClick={onClose} className="p-2 text-slate-900 hover:bg-slate-50 rounded-lg">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
            {TABS.map(tab => (
              <div key={tab.name}>
                <h3 className="text-[20px] font-bold uppercase tracking-[0.2em] text-[#5D00D6] mb-6">{tab.name}</h3>
                <div className="flex flex-col gap-5">
                  {MEGA_MAP[tab.menuKey as keyof typeof MEGA_MAP]?.columns?.[0]?.sections?.map((section: any) => 
                    section.items.map((item: any, i: number) => (
                      <Link key={i} href={item.path} onClick={onClose} className="flex items-center justify-between group">
                        <span className="text-[18px] font-semibold text-slate-800">{item.label}</span>
                        <ChevronRight size={18} className="text-slate-300 group-hover:text-[#5D00D6] transition-colors" />
                      </Link>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-gray-100 bg-slate-50">
            <div className="flex flex-col gap-4">
              <a href="tel:1800000299" className="flex items-center justify-center gap-3 w-full py-4 bg-white border border-gray-200 rounded-2xl font-semibold text-slate-800">
                <PhoneCall size={18} /> 1800 000 299
              </a>
              <Button size="lg" className="w-full py-7 text-[16px] font-semibold rounded-2xl shadow-xl shadow-purple-900/20 bg-[#5D00D6]">
                Get Started
              </Button>
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
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b bg-white ${
        isScrolled ? 'py-3 shadow-sm border-gray-100' : 'py-5 border-gray-100'
      }`}
      onMouseLeave={handleLeave}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between" style={{ maxWidth: '1240px' }}>
        <Link href="/" className="flex items-center gap-3 shrink-0">
            <img 
              src="/images/c9_logo_scrolled.svg" 
              alt="C9 Communications" 
              className="h-[45px] w-auto object-contain" 
            />
        </Link>
        
        <div className="hidden lg:flex gap-1 font-semibold text-[14px] items-center">
          {TABS.map(tab => {
            const isOpen = openMenu === tab.menuKey;
            return (
              <div key={tab.name} className="relative h-full flex items-center" onMouseEnter={() => handleEnter(tab.menuKey)}>
                <button className={`flex items-center gap-1 px-4 py-2 rounded-xl font-semibold transition-all tracking-tight ${
                  isOpen ? 'text-[#5D00D6] bg-[#5D00D6]/5' : (isScrolled ? 'text-slate-600 hover:bg-gray-50' : 'text-slate-500 hover:text-[#5D00D6]')
                }`}>
                  {tab.name}
                  <ChevronDown size={14} className={`transition-transform duration-300 opacity-40 ${isOpen ? 'rotate-180 text-[#5D00D6] opacity-100' : ''}`} />
                </button>
              </div>
            );
          })}
        </div>
        
        <div className="flex items-center gap-4 md:gap-6">
          <div className={`hidden lg:flex flex-col items-end border-r pr-6 mr-1 ${isScrolled ? 'border-gray-200' : 'border-gray-300'}`}>
            <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] mb-0.5 ${isScrolled ? 'text-slate-400' : 'text-slate-500'}`}>Client Support</span>
            <a href="tel:1800000299" className={`text-[15px] font-bold tracking-tight hover:text-[#5D00D6] transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-800'}`}>1800 000 299</a>
          </div>
          
          <Button 
            size="sm"
            className="hidden sm:flex transition-all bg-[#1c1c1c] text-white hover:bg-black font-semibold tracking-tight px-6 rounded-full"
          >
            C9 defense
          </Button>
          
          <button 
            className="lg:hidden p-2 rounded-lg transition-colors text-[#0c1024] hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
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
  );
};
