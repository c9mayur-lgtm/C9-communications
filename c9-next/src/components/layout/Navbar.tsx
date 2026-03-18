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
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { MEGA_MAP, TABS } from './NavbarData';

/* ─────────────────────────────────────────────
   MEGA PANEL COMPONENT (LIGHT THEME)
   ───────────────────────────────────────────── */
const TecnologiaMegaPanel = ({ data, visible }: { data: any; visible: boolean }) => {
  // Premium 3-column layout: Navigation Stack | Interactive Feature | Specialized Sidebar
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
          {/* Main Content Area */}
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
                    
                    {col.promo && (
                      <div className="bg-[#5D00D6]/5 p-5 rounded-[20px] border border-[#5D00D6]/10 relative overflow-hidden group">
                        <div className="relative z-10">
                          <h5 className="text-[14px] font-semibold text-[#0c1024] mb-3 leading-relaxed pr-10">{col.promo.title}</h5>
                          <Button size="sm" className="rounded-full font-bold uppercase tracking-wider">
                            {col.promo.button}
                          </Button>
                        </div>
                        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl transition-all group-hover:bg-purple-500/20"></div>
                      </div>
                    )}
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
                          <span className="text-[13px] font-semibold text-slate-800 leading-tight tracking-tight">{c.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {data.hardware && (
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D00D6]/40 mb-8">Enterprise Gear</h4>
                    <div className="grid grid-cols-2 gap-5">
                      {data.hardware.map((h: any, i: number) => (
                        <div key={i} className="border border-gray-100 rounded-[20px] overflow-hidden flex flex-col hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500 cursor-pointer group">
                          <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center p-6 transition-colors group-hover:bg-white">
                            <img src={h.image} alt={h.title} className="max-h-full object-contain grayscale-[40%] group-hover:grayscale-0 transition-all duration-500" />
                          </div>
                          <div className="p-4 bg-white text-center border-t border-gray-50">
                            <span className="text-[13px] font-semibold text-slate-800 tracking-tight">{h.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {data.modernization && (
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D00D6]/40 mb-8">Workplace Evolution</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {data.modernization.map((m: any, i: number) => (
                        <div key={i} className="aspect-square p-7 border border-gray-100 rounded-[24px] flex flex-col items-center justify-center text-center hover:border-[#5D00D6] hover:bg-[#F4F0FA] hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500 cursor-pointer group">
                          <div className="mb-5 p-4 rounded-2xl bg-slate-50 text-[#5D00D6]/30 group-hover:bg-white group-hover:text-[#5D00D6] group-hover:scale-110 transition-all duration-500">{m.icon}</div>
                          <span className="text-[14px] font-semibold text-slate-800 leading-tight tracking-tight">{m.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* FOCUS LANE (Lane 3) */}
            <div style={{ 
              background: '#F9F7FE', 
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D00D6]/40 mb-6">{data.sidebar?.heading}</h4>
              
              <div className="flex-1">
                {data.layout === 'it-solutions' && (
                  <div className="flex flex-col gap-4">
                    {data.sidebar?.items?.map((item: string, i: number) => (
                      <Link key={i} href="#" className="group flex items-center justify-between text-[15px] font-semibold text-slate-600 hover:text-[#5D00D6] transition-all">
                        {item}
                        <ArrowRight size={16} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                )}

                {data.layout === 'telco' && (
                  <div className="flex flex-col gap-4">
                    {data.sidebar?.items?.map((item: any, i: number) => (
                      <div key={i} className="group cursor-pointer bg-white/40 p-4 rounded-[16px] border border-transparent hover:border-[#5D00D6]/10 hover:bg-white hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-500">
                        <h5 className="text-[13px] font-semibold text-slate-900 mb-1 group-hover:text-[#5D00D6] transition-colors">{item.title}</h5>
                        <p className="text-[11px] text-slate-400 font-medium leading-relaxed line-clamp-1">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {data.layout === 'modern-workplace' && (
                  <div className="flex flex-col">
                    <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden mb-8 shadow-2xl shadow-purple-900/10 group cursor-pointer">
                      <img src={data.sidebar?.image} alt="Workplace" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                        <h5 className="text-white font-semibold text-[20px] leading-tight mb-4">{data.sidebar?.title}</h5>
                        <div className="w-16 h-1 bg-[#5D00D6] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
                      </div>
                    </div>
                    <Button size="default" className="w-full shadow-lg">
                      {data.sidebar?.button}
                    </Button>
                  </div>
                )}
              </div>

              <Link href="#" className="inline-flex items-center gap-2 text-[12px] font-bold text-[#5D00D6] mt-auto uppercase tracking-widest border-b-2 border-transparent hover:border-[#5D00D6] transition-all self-start">
                Explore All Opportunities <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* COMPACT CTA BANNER */}
          {data.ctaBanner && (
            <div style={{ background: 'linear-gradient(90deg, #5D00D6 0%, #3a0088 100%)', padding: '16px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="max-w-xl">
                <h4 className="text-white font-semibold text-[18px] mb-0.5 leading-tight tracking-tight">{data.ctaBanner.title}</h4>
                <p className="text-white/60 text-[12px] font-medium">{data.ctaBanner.body}</p>
              </div>
              <Button size="default" className="bg-white text-[#5D00D6] hover:bg-white/95 rounded-full shadow-xl">
                {data.ctaBanner.button}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(key);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 180);
  };

  return (
    <div className="fixed w-full z-50 transition-all bg-white border-b border-gray-100 shadow-sm" onMouseLeave={handleLeave}>
      <nav className="relative z-50 py-4 px-6 lg:px-8 flex justify-between items-center text-slate-900 font-sans mx-auto" style={{ maxWidth: '1240px' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
            <img src="/images/c9_logo_light.svg" alt="C9 Communications" className="h-[34px] md:h-[36px]" />
        </Link>
        
        <div className="hidden xl:flex gap-2 font-semibold text-[14px] items-center">
          {/* Nav items with mega menus */}
          {TABS.map(tab => {
            const isOpen = openMenu === tab.menuKey;
            return (
              <div key={tab.name} className="relative h-full flex items-center" onMouseEnter={() => handleEnter(tab.menuKey)}>
                <button className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-[600] transition-colors ${isOpen ? 'text-[#5D00D6]' : 'text-[#0c1024] hover:text-[#5D00D6]'}`}>
                  {tab.name}
                  <ChevronDown size={14} className={`transition-transform duration-200 opacity-60 ${isOpen ? 'rotate-180 text-[#5D00D6]' : ''}`} />
                </button>
              </div>
            );
          })}
        </div>
        
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden lg:flex flex-col items-end border-r border-gray-200 pr-6 mr-1">
              <Link href="#" className="text-[11px] font-bold text-slate-500 hover:text-[#5D00D6] flex items-center gap-1 mb-0.5">
                Client Support <ArrowRight size={12} strokeWidth={3} />
              </Link>
              <a href="tel:1800000299" className="text-[16px] font-[700] tracking-tight text-[#0c1024] hover:text-[#5D00D6] transition-colors leading-none mt-0.5">
                1800 000 299
              </a>
          </div>
          
          <Button variant="outline" size="sm" className="hidden sm:inline-flex rounded-xl">
            C9 Defense
          </Button>
          <Button size="sm" className="hidden xs:inline-flex rounded-xl shadow-md cursor-pointer">
            Contact Us
          </Button>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden p-2 text-slate-900 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} className="text-[#5D00D6]" /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {TABS.map(tab => (
                <div key={tab.name} className="flex flex-col gap-4">
                  <button className="flex items-center justify-between text-[18px] font-bold text-[#0c1024] text-left">
                    {tab.name}
                    <ChevronRight size={18} className="text-gray-300" />
                  </button>
                  <div className="h-px bg-gray-50"></div>
                </div>
              ))}
              <div className="flex flex-col gap-4 pt-4">
                <a href="tel:1800000299" className="text-[20px] font-bold text-[#5D00D6]">1800 000 299</a>
                <p className="text-[14px] text-gray-400">Client Support Available 24/7</p>
                <Button size="lg" className="w-full rounded-2xl cursor-pointer">Contact Us</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mega Menus Overlay */}
      {TABS.map(tab => (
        <TecnologiaMegaPanel 
          key={tab.menuKey} 
          data={MEGA_MAP[tab.menuKey]} 
          visible={openMenu === tab.menuKey} 
        />
      ))}
    </div>
  );
}
