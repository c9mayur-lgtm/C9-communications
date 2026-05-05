'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Calendar, Info } from 'lucide-react';
import Link from 'next/link';

export const FloatingCEO = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-28 right-6 z-[400] font-sans">
      <motion.div
        layout
        transition={{ 
          layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        }}
        className={`
          relative overflow-hidden bg-[#0c1024] rounded-xl shadow-2xl border-4 border-white  cursor-pointer
          ${isOpen ? 'w-[320px] md:w-[350px] h-[520px] md:h-[580px]' : 'w-28 h-44 md:w-32 md:h-52'}
        `}
        onClick={() => !isOpen && setIsOpen(true)}
      >
        {/* Video Background */}
        <motion.div layout="position" className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className={`w-full h-full object-cover transition-all duration-700 ${isOpen ? 'opacity-90' : 'opacity-70 grayscale group-hover:grayscale-0'}`}
          >
            <source src="/videos/ceo-intro.mp4" type="video/mp4" />
          </video>
          <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent ${isOpen ? 'opacity-90' : 'opacity-40'}`} />
        </motion.div>

        {/* Close Button */}
        {isOpen && (
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white z-40 border border-white/10 hover:bg-black/40 pointer-events-auto"
          >
            <X size={16} />
          </motion.button>
        )}

        {/* --- SMALL CARD CONTENT --- */}
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col justify-end items-center p-4 text-center pointer-events-none"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/30 mb-3 group-hover:bg-[#5D00D6] group-hover:border-[#5D00D6] transition-all">
              <Play size={16} fill="currentColor" />
            </div>
            <p className="text-[8px] font-bold text-white/50 uppercase tracking-widest mb-1">Meet Jaspreet</p>
            <p className="text-[10px] font-bold text-white leading-tight">Founder's Note</p>
          </motion.div>
        )}

        {/* --- EXPANDED REEL CONTENT --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none"
            >
              {/* Text Info */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full border border-white/30 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" alt="CEO" />
                  </div>
                  <span className="text-xs font-bold text-white">jaspreet_m <span className="text-white/40 font-normal ml-1">· Managing Director</span></span>
                </div>
                <p className="text-xl font-bold text-white leading-tight mb-2">
                  "Building infrastructure with absolute accountability."
                </p>
                <p className="text-[11px] text-white/60 leading-relaxed">
                  We take responsibility for keeping your business running. No excuses.
                </p>
              </div>

              {/* CTAS */}
              <div className="flex flex-col gap-2 pointer-events-auto">
                <Link 
                  href="/contact" 
                  className="w-full bg-white text-black font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors shadow-lg text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <Calendar size={16} /> Book Technical Session
                </Link>
                <Link 
                  href="/about" 
                  className="w-full bg-white/10 backdrop-blur-md text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 border border-white/20 hover:bg-white/20 transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <Info size={16} /> Our Operational Model
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
