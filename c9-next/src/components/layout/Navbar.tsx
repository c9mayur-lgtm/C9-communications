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
  ShieldCheck,
  PhoneCall,
  LayoutGrid,
  Users
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { MEGA_MAP, TABS } from './NavbarData';

/* ─────────────────────────────────────────────
   MEGA PANEL COMPONENT (LIGHT THEME)
   ───────────────────────────────────────────── */
const TecnologiaMegaPanel = ({ data, visible }: { data: any; visible: boolean }) => {
  const gridTemplate = '420px 1fr 320px';

  return (
    <div style={{
      position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 99,
      opacity: visible ? 1 : 0, visibility: visible ? 'visible' : 'hidden',
      transform: visible ? 'translateY(0)' : 'translateY(-10px)',
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)', 
      pointerEvents: visible ? 'auto' : 'none',
    }}>
      <div className="container mx-auto" style={{ maxWidth: '1240px', padding: '0 2rem' }}>
        <div style={{
          background: '#ffffff', border: '1px solid #eaeaea', borderTop: 'none',
          borderRadius: '0 0 32px 32px', boxShadow: '0 50px 100px rgba(0,0,0,0.15)',
          overflow: 'hidden', display: 'flex', flexDirection: 'column',
          fontFamily: '"Proxima Nova", sans-serif'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: gridTemplate,
            alignItems: 'stretch'
          }}>
            {/* NAVIGATION LANE (Lane 1) */}
            <div style={{ 
              padding: '28px 32px', 
              borderRight: '1px solid #f2f2f2',
              backgroundColor: '#fff' 
            }}>
              <div className="flex flex-col gap-8">
                {data.columns?.map((col: any, ci: number) => (
                  <div key={ci} className="flex flex-col gap-8">
                    {col.sections.map((sec: any, si: number) => (
                      <div key={si}>
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D00D6]/50 mb-5">{sec.heading}</h4>
                        <div className="flex flex-col gap-3">
                          {sec.items.map((item: any, ii: number) => (
                            <Link 
                              key={ii} 
                              href={item.path} 
                              className={`group flex items-center gap-2 transition-all ${item.active ? 'text-[#5D00D6]' : 'text-slate-600 hover:text-[#5D00D6]'}`}
                            >
                              <div className={`w-1.5 h-1.5 rounded-full transition-all ${item.active ? 'bg-[#5D00D6] scale-100' : 'bg-[#5D00D6] scale-0 font-bold group-hover:scale-100'}`}></div>
                              <span className="text-[14px] font-semibold tracking-tight transition-transform group-hover:translate-x-1">{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* VISUAL LANE (Lane 2) */}
            <div style={{ 
              padding: '28px 40px', 
              borderRight: '1px solid #f2f2f2',
              backgroundColor: '#fff' 
            }}>
              <div className="max-w-[500px]">
                {data.challenges && (
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D00D6]/40 mb-8">Primary Focus</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {data.challenges.map((c: any, i: number) => (
                        <div key={i} className="aspect-[4/3] p-5 border border-gray-100 rounded-[20px] flex flex-col items-center justify-center text-center hover:border-[#5D00D6] hover:bg-[#F4F0FA] hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500 cursor-pointer group">
                          <div className="mb-3 p-3 rounded-xl bg-slate-50 text-[#5D00D6]/30 group-hover:bg-white group-hover:text-[#5D00D6] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">{c.icon}</div>
                          <span className="text-[13px] font-bold text-[#0c1024] leading-tight px-2">{c.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ACTION LANE (Lane 3) */}
            <div style={{ 
              padding: '28px 40px', 
              backgroundColor: '#fcfcfd' 
            }}>
              <div className="flex flex-col gap-10">
                {data.resources && (
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D00D6]/40 mb-6">Resources</h4>
                    <div className="flex flex-col gap-4">
                      {data.resources.map((res: any, i: number) => (
                        <Link key={i} href={res.path} className="group flex flex-col gap-1">
                          <span className="text-[14px] font-bold text-[#0c1024] group-hover:text-[#5D00D6] transition-colors">{res.title}</span>
                          <span className="text-[12px] text-slate-500 leading-relaxed">{res.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-gray-200">
                  <Link href="/consultation" className="group flex items-center justify-between p-5 bg-[#5D00D6] rounded-2xl shadow-xl shadow-purple-900/20 hover:bg-[#4d00b3] transition-all">
                    <span className="text-white font-bold text-[14px]">Free Consultation</span>
                    <ArrowRight size={18} className="text-white transition-transform group-hover:translate-x-1" />
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
                <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#5D00D6] mb-6">{tab.name}</h3>
                <div className="flex flex-col gap-5">
                  {MEGA_MAP[tab.menuKey as keyof typeof MEGA_MAP]?.columns?.[0]?.sections?.[0]?.items.map((item: any, i: number) => (
                    <Link key={i} href={item.path} onClick={onClose} className="flex items-center justify-between group">
                      <span className="text-[18px] font-bold text-[#0c1024]">{item.label}</span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[#5D00D6] transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-gray-100 bg-slate-50">
            <div className="flex flex-col gap-4">
              <a href="tel:1800000299" className="flex items-center justify-center gap-3 w-full py-4 bg-white border border-gray-200 rounded-2xl font-bold text-[#0c1024]">
                <PhoneCall size={18} /> 1800 000 299
              </a>
              <Button size="lg" className="w-full py-7 text-[16px] font-bold rounded-2xl shadow-xl shadow-purple-900/20">
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
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white border-b border-gray-100 shadow-sm py-3"
      onMouseLeave={handleLeave}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between" style={{ maxWidth: '1240px' }}>
        <Link href="/" className="flex items-center gap-3">
            <img 
              src="/images/c9_logo.svg" 
              alt="C9 Communications" 
              className="h-[34px] md:h-[36px]" 
            />
        </Link>
        
        <div className="hidden xl:flex gap-2 font-semibold text-[14px] items-center">
          {TABS.map(tab => {
            const isOpen = openMenu === tab.menuKey;
            return (
              <div key={tab.name} className="relative h-full flex items-center" onMouseEnter={() => handleEnter(tab.menuKey)}>
                <button className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-[600] transition-colors ${
                  isOpen ? 'text-[#5D00D6]' : 'text-[#0c1024] hover:text-[#5D00D6]'
                }`}>
                  {tab.name}
                  <ChevronDown size={14} className={`transition-transform duration-200 opacity-60 ${isOpen ? 'rotate-180 text-[#5D00D6]' : ''}`} />
                </button>
              </div>
            );
          })}
        </div>
        
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden lg:flex flex-col items-end border-r pr-6 mr-1 border-gray-200">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] mb-0.5 text-gray-400">Client Support</span>
            <a href="tel:1800000299" className="text-[15px] font-bold tracking-tight hover:text-[#5D00D6] transition-colors text-[#0c1024]">1800 000 299</a>
          </div>
          
          <Button variant="outline" className="hidden sm:flex border-2 font-bold px-6 h-11 border-gray-200 text-gray-400 hover:bg-gray-800 hover:text-white transition-all rounded-xl">
            C9 DEFENSE 🛡️
          </Button>

          <Button 
            className="md:px-8 h-11 shadow-2xl hover:gap-3 transition-all group font-bold rounded-xl"
            onClick={() => document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
          
          <button 
            className="xl:hidden p-2 rounded-lg transition-colors text-[#0c1024] hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 z-50"
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
