'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Play, ArrowUpRight } from 'lucide-react';

const CASE_STUDIES = [
  {
    tag: 'NON-PROFIT ORGANISATION',
    title: 'Launch Housing Case Study',
    desc: "Launch Housing helps hundreds of Melburnians find stable housing every single day. But their aging phone system and...",
    img: '/images/case-studies/case-study-1.jpg',
    videoText: 'Launch Housing Case Study'
  },
  {
    tag: 'RETAIL',
    title: 'Akubra Case Study',
    desc: 'The rural setting and old copper technology at Akubra posed significant hurdles, with a sluggish internet connection that dropped out frequently.',
    img: '/images/case-studies/case-study-2.jpg',
    videoText: 'Akubra Case Study'
  },
  {
    tag: 'MANUFACTURING',
    title: 'Pacific Steel Case Study',
    desc: 'Modernizing legacy PABX systems with cloud voice and fiber connectivity across multiple factory sites.',
    img: '/images/case-studies/case-study-3.jpg',
    videoText: 'Pacific Steel Case Study'
  }
];

interface CaseStudy {
  tag: string;
  title: string;
  desc: string;
  img: string;
  videoText: string;
}

interface CaseStudiesProps {
  title?: string;
  eyebrow?: string;
  articles?: CaseStudy[];
}

export const WpCaseStudies = ({ 
  title = "Hear From Businesses Like Yours", 
  eyebrow = "IMPACT REALIZED",
  articles = CASE_STUDIES
}: CaseStudiesProps) => {
  const [caseStudyIdx, setCaseStudyIdx] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth < 1024 ? 1 : 2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIdx = CASE_STUDIES.length - cardsPerView;

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden relative border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
          <div className="max-w-2xl">
            <span className="text-[#5D00D6] text-[13px] font-bold uppercase tracking-[0.25em] mb-6 block" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{eyebrow}</span>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#0c1024] leading-[1.05] tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
              {title}
            </h2>
          </div>
          
          {/* Nav Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={() => setCaseStudyIdx(prev => Math.max(0, prev - 1))}
              disabled={caseStudyIdx === 0}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${caseStudyIdx === 0 ? 'bg-gray-100 text-gray-300' : 'bg-white border border-gray-100 text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white shadow-xl shadow-purple-900/10'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setCaseStudyIdx(prev => Math.min(maxIdx, prev + 1))}
              disabled={caseStudyIdx >= maxIdx}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all bg-[#5D00D6] text-white hover:bg-[#4c00b0] shadow-xl shadow-purple-900/20 ${caseStudyIdx >= maxIdx ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            className="flex gap-8"
            animate={{ x: `calc(-${caseStudyIdx * (100 / cardsPerView)}% - ${caseStudyIdx * 32}px)` }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {articles.map((cs, idx) => (
              <div key={idx} className="w-full lg:w-[calc(50%-16px)] shrink-0 group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-none overflow-hidden mb-10 shadow-2xl shadow-purple-900/10 bg-slate-100">
                  <img src={cs.img} alt={cs.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  
                  {/* Brand Tint Overlays */}
                  <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay group-hover:bg-[#5D00D6]/20 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-10">
                    <div className="flex items-center gap-2 text-white/60 text-[12px] font-bold uppercase tracking-widest mb-4">
                      <div className="w-2 h-2 rounded-full bg-[#5D00D6]"></div>
                      {cs.tag}
                    </div>
                    <div className="text-white text-[24px] md:text-[32px] font-bold leading-tight mb-2 tracking-tight">
                       {cs.videoText}
                    </div>
                  </div>
                </div>

                <div className="px-2">
                   <h3 className="text-[20px] font-bold text-[#0c1024] mb-4 group-hover:text-[#5D00D6] transition-colors leading-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                     {cs.title}
                   </h3>
                   <p className="text-gray-500 text-[17px] md:text-[18px] leading-relaxed mb-8 line-clamp-2 font-medium">
                     {cs.desc}
                   </p>
                   <div className="flex items-center gap-2 text-[#5D00D6] font-semibold text-[14px] uppercase tracking-wider group/link">
                      Read full article 
                      <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                   </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
