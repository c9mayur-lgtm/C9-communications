'use client';

import React from 'react';
import { PhoneCall, ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface AuthorityCtaProps {
  variant?: 'centered' | 'funnel';
  eyebrow?: string;
  title: string;
  description: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  footerText?: string;
  pillIcon?: LucideIcon;
  bg?: string;
}

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const AuthorityCta = ({
  variant = 'centered',
  eyebrow = "READY TO START?",
  title,
  description,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  footerText,
  pillIcon: PillIcon = PhoneCall,
  bg
}: AuthorityCtaProps) => {
  if (variant === 'funnel') {
    return (
      <section className={`py-16 lg:py-24 ${bg || 'bg-[#F4F0FA]'}`}>
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          <FadeIn>
            <div className="text-center relative overflow-hidden group">
              <div className="relative z-10">
                <span className="c9-eyebrow !text-[#5D00D6] mb-4 block uppercase tracking-[0.2em]">{eyebrow}</span>
                <h2 className="c9-section-heading mb-6 text-4xl md:text-5xl leading-tight text-[#0c1024]">
                  {title}
                </h2>
                <p className="c9-body max-w-2xl mx-auto mb-10 text-lg text-slate-600">
                  {description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link 
                    href={primaryHref}
                    className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group/btn whitespace-nowrap c9-button-label"
                  >
                    {primaryText}
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                  {secondaryText && secondaryHref && (
                    <Link 
                      href={secondaryHref}
                      className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-10 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white c9-button-label"
                    >
                      {secondaryText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 lg:py-24 ${bg || 'bg-white'}`}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
            <PillIcon size={13} className="text-[#5D00D6]" />
            <span className="c9-eyebrow !mb-0 !text-[#5D00D6] uppercase tracking-[0.2em]">{eyebrow}</span>
          </div>
          <h2 className="c9-section-heading mb-5 max-w-3xl mx-auto text-[#0c1024]">
            {title}
          </h2>
          <p className="c9-body mb-10 max-w-2xl mx-auto text-slate-600">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
             <Link 
               href={primaryHref}
               className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group/btn whitespace-nowrap c9-button-label"
             >
                {primaryText}
                <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
             </Link>
             {secondaryText && secondaryHref && (
               <Link 
                 href={secondaryHref}
                 className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-10 font-bold text-[14px] hover:bg-[#5D00D6] hover:text-white transition-all whitespace-nowrap bg-white c9-button-label"
               >
                  {secondaryText}
               </Link>
             )}
          </div>
          {footerText && (
            <p className="text-[14px] text-slate-400 font-medium">
              {footerText}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
};
