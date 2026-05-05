'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function LuminaNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Software', href: '#managed-content' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 border-b ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <Link href="/lumina" className="relative z-10">
          <img 
            src="/c9-lumina-logo.png" 
            alt="C9 Lumina" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-sm font-semibold text-[#ED9EA2] hover:text-[#BF2F70] transition-colors uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="#contact"
            className="bg-[#BF2F70] text-white px-6 py-2.5 text-sm font-bold hover:bg-[#A32469] transition-all active:scale-95 flex items-center gap-2"
          >
            Get a Quote 
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black z-[190] pt-32 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-[#BF2F70]"
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#BF2F70] text-white px-8 py-4 text-center font-bold text-lg"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
