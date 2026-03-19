'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const WpFloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[200] group cursor-pointer"
      >
        <div className="absolute inset-0 bg-[#5D00D6] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <div className="relative w-16 h-16 bg-[#5D00D6] rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
          <MessageSquare size={28} />
          {/* Pulsing effect */}
          <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping"></div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-28 right-8 z-[201] w-[360px] max-w-[calc(100vw-4rem)] bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="bg-[#0c1024] p-8 text-white relative">
              <button 
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="text-[24px] font-bold mb-2">How can we help?</h3>
              <p className="text-white/60 text-[14px]">Our experts are ready to assist you. Select your preferred contact method.</p>
            </div>
            
            <div className="p-6 flex flex-col gap-4">
              <a href="tel:1800000299" className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-gray-100 group hover:border-[#5D00D6] hover:bg-[#F4F0FA] transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#5D00D6] shadow-sm">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Call us</div>
                    <div className="text-[16px] font-bold text-[#0c1024]">1800 000 299</div>
                  </div>
                </div>
                <ArrowRight size={18} className="text-gray-300 group-hover:text-[#5D00D6] group-hover:translate-x-1 transition-all" />
              </a>

              <a href="mailto:office@c9communications.com.au" className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-gray-100 group hover:border-[#5D00D6] hover:bg-[#F4F0FA] transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#5D00D6] shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Email us</div>
                    <div className="text-[16px] font-bold text-[#0c1024]">Send a message</div>
                  </div>
                </div>
                <ArrowRight size={18} className="text-gray-300 group-hover:text-[#5D00D6] group-hover:translate-x-1 transition-all" />
              </a>

              <Button 
                className="w-full py-7 text-[16px] font-bold rounded-2xl shadow-xl shadow-purple-900/20 mt-2"
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book a consultation
              </Button>
            </div>
            
            <div className="p-4 bg-slate-50/50 text-center border-t border-gray-50">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Available 24/7 for critical support</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[199] bg-black/20 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </>
  );
};
