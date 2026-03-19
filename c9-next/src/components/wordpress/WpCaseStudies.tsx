'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Play } from 'lucide-react';

const CASE_STUDIES = [
  {
    tag: 'Non-profit organisation',
    title: 'Launch Housing: Connected for change',
    desc: "As essential services moved online, Launch Housing's aging buildings and lean IT capabilities made it difficult to provide the reliable connectivity that residents depended on.",
    img: '/images/case-studies/case-study-1.jpg',
    videoText: 'C9 CONNECTING AUSTRALIA'
  },
  {
    tag: 'Retail',
    title: 'Akubra: Rural setting, old copper',
    desc: 'The rural setting and old copper technology at Akubra posed significant hurdles, with a sluggish internet connection that dropped out frequently.',
    img: '/images/case-studies/case-study-2.jpg',
    videoText: 'C9 CONNECTING AUSTRALIA'
  },
  {
    tag: 'Manufacturing',
    title: 'Pacific Steel: Streamlined Comms',
    desc: 'Modernizing legacy PABX systems with cloud voice and fiber connectivity across multiple factory sites.',
    img: '/images/case-studies/case-study-3.jpg',
    videoText: 'C9 CONNECTING AUSTRALIA'
  }
];

export const WpCaseStudies = () => {
  const [caseStudyIdx, setCaseStudyIdx] = useState(0);

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden relative border-t border-gray-100">
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-[0.3em] mb-4 block">Success Stories</span>
            <h2 className="text-[48px] font-bold text-[#0c1024] leading-tight tracking-tight">
              Hear from businesses like yours
            </h2>
            <p className="text-[18px] text-gray-400 mt-6 leading-relaxed">
              Learn how our telco solutions have empowered Australian businesses to achieve success.
            </p>
          </div>
          
          {/* Nav Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={() => setCaseStudyIdx(prev => Math.max(0, prev - 1))}
              className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${caseStudyIdx === 0 ? 'border-gray-100 text-gray-300 cursor-not-allowed' : 'border-[#5D00D6]/20 text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white shadow-lg'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setCaseStudyIdx(prev => Math.min(CASE_STUDIES.length - 2, prev + 1))}
              className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${caseStudyIdx >= CASE_STUDIES.length - 2 ? 'border-gray-100 text-gray-300 cursor-not-allowed' : 'border-[#5D00D6]/20 text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white shadow-lg'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            className="flex gap-6 md:gap-8"
            animate={{ x: `calc(-${caseStudyIdx * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 50)}% - ${caseStudyIdx * (typeof window !== 'undefined' && window.innerWidth < 768 ? 24 : 16)}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {CASE_STUDIES.map((cs, idx) => (
              <div key={idx} className="min-w-full md:min-w-[calc(50%-16px)] group cursor-pointer">
                <div className="relative aspect-video rounded-none overflow-hidden mb-8 shadow-2xl">
                  <img src={cs.img} alt={cs.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-white text-[24px] lg:text-[32px] font-black tracking-tighter mb-4 px-4 leading-tight">
                        {cs.videoText}
                      </div>
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto hover:bg-white/30 transition-all">
                        <Play size={24} fill="white" className="text-white ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-[14px] font-bold mb-4 block text-[#5D00D6] uppercase tracking-widest">{cs.tag}</span>
                <h3 className="text-[24px] font-bold text-[#0c1024] mb-4 group-hover:text-[#5D00D6] transition-colors line-clamp-1">{cs.title}</h3>
                <p className="text-gray-500 text-[18px] leading-relaxed mb-6 line-clamp-2 font-medium">{cs.desc}</p>
                <a href="#" className="text-[#5D00D6] font-bold text-[14px] underline underline-offset-4 decoration-2 hover:decoration-[#5D00D6]/50">Read case study</a>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
