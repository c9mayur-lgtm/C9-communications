'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const navItems = [
  { label: 'Overview', id: 'ee-overview' },
  { label: 'Features', id: 'ee-features' },
  { label: 'Plans', id: 'ee-plans' },
  { label: 'Support', id: 'ee-support' },
  { label: 'Multi-site', id: 'ee-multi-site' }
];

export default function StickySubNav() {
  const [isFixed, setIsFixed] = useState(false);
  const [activeTab, setActiveTab] = useState('ee-overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsFixed(scrollPos > 600);

      // Simple active state detection
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && scrollPos >= el.offsetTop - 150) {
          setActiveTab(item.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 145,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {isFixed && (
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="fixed top-[71px] left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 z-[90] h-[72px] flex items-center shadow-lg shadow-black/5"
          
        >
          <div className="container mx-auto px-8 max-w-[1240px] flex items-center justify-between">
            <div className="flex items-center gap-2">
               <div className="bg-[#5D00D6] w-6 h-6 rounded flex items-center justify-center text-white text-[10px] font-black italic shadow-lg shadow-[#5D00D6]/20">C9</div>
               <span className="text-[14px] font-black text-[#1A1A2E] hidden md:block uppercase tracking-widest">Enterprise Ethernet</span>
            </div>

            <div className="flex items-center gap-1 md:gap-4 overflow-x-auto no-scrollbar">
               {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-full text-[14px] font-bold transition-all whitespace-nowrap ${activeTab === item.id ? 'bg-[#5D00D6]/10 text-[#5D00D6]' : 'text-slate-500 hover:text-[#5D00D6]'}`}
                  >
                    {item.label}
                  </button>
               ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
               <a href="tel:1800000299" className="text-[14px] font-bold text-[#1A1A2E] no-underline hover:text-[#5D00D6] transition-colors">Call 1800 000 299</a>
               <Button 
                  onClick={() => scrollToSection('consultation-section')}
                  className="bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-bold h-10 px-6 rounded-full text-[14px] shadow-lg shadow-[#5D00D6]/20 border-none"
               >
                  Get Quote 
               </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

