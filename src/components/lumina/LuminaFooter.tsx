'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export function LuminaFooter() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-black border-t border-[#BF2F70]/20 py-20 relative overflow-hidden">
      {/* Decorative Brand Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-[#BF2F70] to-transparent" />
      
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <img 
              src="/c9-lumina-logo.png" 
              alt="C9 Lumina" 
              className="h-12 w-auto mb-8 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <p className="text-sm text-[#ED9EA2]/60 leading-relaxed mb-8">
              Premium digital signage and content management solutions for modern business environments. From hardware to storytelling.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-[#BF2F70]/30 flex items-center justify-center text-[#BF2F70] hover:bg-[#BF2F70] hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-[#BF2F70]/30 flex items-center justify-center text-[#BF2F70] hover:bg-[#BF2F70] hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Solutions</h4>
            <ul className="space-y-4">
              {['Digital Screens', 'Video Walls', 'Wayfinding', 'Interactive Kiosks', 'Menu Boards'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#808080] hover:text-[#BF2F70] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone size={18} className="text-[#BF2F70] shrink-0" />
                <span className="text-sm text-[#808080]">1300 293 332</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={18} className="text-[#BF2F70] shrink-0" />
                <span className="text-sm text-[#808080]">sales@c9lumina.com.au</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-[#BF2F70] shrink-0" />
                <span className="text-sm text-[#808080]">Sydney • Melbourne • Brisbane</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Service Level Agreement', 'Content Management Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#808080] hover:text-[#BF2F70] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-[#151515] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-[#404040] uppercase tracking-[0.2em]">
            © 2026 C9 COMMUNICATIONS PTY LTD. LUMINA DIVISION.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] font-bold text-[#BF2F70] uppercase tracking-widest hover:text-white transition-colors"
          >
            Back to top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
