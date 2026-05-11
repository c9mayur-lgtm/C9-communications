'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ServiceTestimonialKajabi } from './ServiceTestimonialKajabi';

const FAQS = [
  { q: 'Is C9 the right fit for every organisation?', a: 'No. We are not a fit if you only require break-fix IT support, if you are not ready to consolidate multiple vendors, or if you expect advisory-only services without operational change.' },
  { q: 'What is a "single accountable model"?', a: 'It means C9 takes full responsibility for the uptime and performance of your integrated systems. We own the root cause of issues, coordinate across all vendors, and provide a single escalation path for your entire environment.' },
  { q: 'Does this model require changing our existing vendors?', a: 'Not necessarily. While we help consolidate where possible to reduce risk, we can take over the management and coordination of your existing third-party IT, cloud, and telco contracts to establish control.' },
  { q: 'How do you handle migrations without downtime?', a: 'We use a controlled transition model involving infrastructure discovery, parallel validation, and rollback-ready execution. We stabilize your critical systems first before making any structural changes.' },
  { q: 'Who owns the responsibility when a third-party vendor fails?', a: 'C9 does. We manage the incident response and vendor coordination on your behalf. You have one operational owner to hold accountable, regardless of which component of the stack is fluctuating.' }
];

export interface TestimonialData {
  name: string;
  role: string;
  content: string;
  avatar?: string | React.ReactNode;
  image?: string;
  metric?: string;
  metricLabel?: string;
  cta?: React.ReactNode;
}

export interface FAQItemData {
  q: string;
  a: string;
}

export const WpFAQAndFeedback = ({ 
  showFAQ = true, 
  showTestimonials = true, 
  testimonials,
  faqItems = FAQS,
  showStillQuestions = true,
  maxWidth = "1240px",
  compact = false
}: { 
  showFAQ?: boolean; 
  showTestimonials?: boolean; 
  testimonials?: TestimonialData[];
  faqItems?: FAQItemData[];
  showStillQuestions?: boolean;
  maxWidth?: string;
  compact?: boolean;
} = {}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      {/* FAQ Section */}
      {showFAQ && (
        <section className="py-16 md:py-20 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: maxWidth }}>
            
            <div className="flex flex-col items-start mb-10">
              <span className="c9-eyebrow mb-4 block">Common Questions</span>
              <h2 className={`font-bold font-clash text-[#0c1024] ${compact ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'}`}>
                Frequently Asked Questions
              </h2>
            </div>

            {/* Accordion Container */}
            <div className="flex flex-col w-full">
              {faqItems.map((item, i) => {
                const isOpen = openIdx === i;
                return (
                  <div key={i} className="border-b border-slate-100 last:border-0">
                    <button 
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="w-full flex items-start justify-between gap-6 py-5 md:py-6 text-left group"
                    >
                      <span 
                        className={`text-[17px] md:text-[19px] font-medium font-clash leading-snug transition-colors ${isOpen ? 'text-[#5D00D6]' : 'text-slate-800'}`} 
                      >
                        {item.q}
                      </span>
                      <ChevronDown size={20} className={`shrink-0 mt-0.5 duration-300 ${isOpen ? 'rotate-180 text-[#5D00D6]' : 'text-slate-300 group-hover:text-[#5D00D6]'}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pt-0 pr-8">
                            <p className="text-slate-500 text-[15px] leading-relaxed font-dm-sans max-w-3xl">
                              {item.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {showTestimonials && (
        <ServiceTestimonialKajabi 
          testimonials={testimonials ? testimonials.map((t, i) => ({
            id: i,
            name: t.name,
            role: t.role,
            content: t.content,
            avatar: t.avatar,
            metric: t.metric,
            metricLabel: t.metricLabel,
            image: t.image,
            cta: t.cta
          })) : undefined} 
        />
      )}
    </>
  );
};
