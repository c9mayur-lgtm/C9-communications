'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Play, ArrowUpRight } from 'lucide-react';

const CASE_STUDIES = [
  {
    tag: 'RETAIL TRANSITION',
    title: 'National Retailer Stabilisation',
    desc: 'Successfully reduced 4 fragmented vendors into 1 managed partner. Achieved 99.9% uptime with zero downtime.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    videoText: 'Retail Stabilisation',
    href: '/case-studies/multi-site-retail-stabilisation'
  },
  {
    tag: 'LEGAL FIRM TAKEOVER',
    title: 'Wilson & Co Proactive Migration',
    desc: 'Took over failing on-premise infrastructure for a high-volume law firm. Improved response time by 60%.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    videoText: 'Legal Firm Takeover',
    href: '/case-studies/financial-vendor-consolidation'
  },
  {
    tag: 'NEW BUSINESS',
    title: 'National Greenfield Rollout',
    desc: 'Rapidly commissioned 12 new sites across 3 states in under 6 weeks with zero-day operational readiness.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    videoText: 'Greenfield Rollout',
    href: '/case-studies/enterprise-migration-success'
  }
];

interface CaseStudy {
  tag: string;
  title: string;
  desc: string;
  img: string;
  videoText: string;
  href?: string;
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

  const maxIdx = Math.max(0, articles.length - cardsPerView);

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden relative border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
          <div className="max-w-2xl">
            <span className="c9-eyebrow mb-4 block">{eyebrow}</span>
            <h2 className="c9-section-heading text-[#0c1024]">
              {title}
            </h2>
          </div>
          
          {/* Nav Arrows - Only show if there are more articles than visible cards */}
          {articles.length > cardsPerView && (
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
          )}
        </div>

        <div className="relative">
          <motion.div 
            className="flex gap-8"
            animate={{ x: `calc(-${caseStudyIdx * (100 / cardsPerView)}% - ${caseStudyIdx * 32}px)` }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {articles.map((cs, idx) => (
              <div key={idx} className="w-full lg:w-[calc(50%-16px)] shrink-0 group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-10 shadow-2xl shadow-purple-900/10 bg-slate-100">
                  <img src={cs.img} alt={cs.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  
                  {/* Brand Tint Overlays */}
                  <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay group-hover:bg-[#5D00D6]/20 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-10">
                    <div className="flex items-center gap-2 c9-eyebrow !text-white/60 !text-[8.5px] mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]"></div>
                      {cs.tag}
                    </div>
                    <div className="text-white text-[20px] sm:text-[24px] md:text-[28px] font-medium leading-[1.1] mb-2 tracking-tight">
                       {cs.videoText}
                    </div>
                  </div>
                </div>

                <div className="px-2">
                   <h3 className="c9-card-title text-[#0c1024] mb-3 group-hover:text-[#5D00D6] transition-colors">
                     {cs.title}
                   </h3>
                   <p className="c9-body mb-8 line-clamp-2">
                     {cs.desc}
                   </p>
                   <a
                     href={cs.href || '/about/case-studies'}
                     className="flex items-center gap-2 text-[#5D00D6] text-[10px] font-bold uppercase tracking-[0.15em] hover:underline whitespace-nowrap group/cta"
                   >
                      Read full article 
                      <ArrowUpRight size={14} className="shrink-0 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                   </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
