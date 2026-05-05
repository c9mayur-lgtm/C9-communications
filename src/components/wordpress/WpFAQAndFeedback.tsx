'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
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
  showStillQuestions = true
}: { 
  showFAQ?: boolean; 
  showTestimonials?: boolean; 
  testimonials?: TestimonialData[];
  faqItems?: FAQItemData[];
  showStillQuestions?: boolean;
} = {}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      {/* FAQ Section */}
      {showFAQ && (
        <section className="py-16 md:py-24 bg-[#FDFDFF] border-t border-gray-100">
          <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
            
            <div className="flex flex-col items-start mb-12">
              <div className="inline-flex items-center gap-2 bg-[#F4F0FA] px-4 py-2 rounded-lg border border-[#5D00D6]/10 mb-6 cursor-default">
                <HelpCircle className="text-[#5D00D6]" size={16} />
                <span className="c9-eyebrow !text-[11px] leading-none mt-0.5">Quick Answers</span>
              </div>
              <h2 className="c9-section-heading text-[#0c1024]">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Accordion Container */}
            <div className="flex flex-col w-full">
              {faqItems.map((item, i) => {
                const isOpen = openIdx === i;
                return (
                  <div key={i} className="border-b border-[#5D00D6]/10">
                    <button 
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left"
                    >
                      <span 
                        className={`text-[19px] md:text-[22px] font-medium leading-snug transition-colors ${isOpen ? 'text-[#5D00D6]' : 'text-[#0c1024]'}`} 
                      >
                        {item.q}
                      </span>
                      <ChevronDown size={22} className={`shrink-0 mt-0.5 duration-300 ${isOpen ? 'rotate-180 text-[#5D00D6]' : 'text-gray-400 group-hover:text-[#5D00D6]'}`} />
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
                          <div className="pb-8 pt-0 pr-8">
                            <p className="c9-body max-w-[840px]">
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
            image: t.image
          })) : undefined} 
        />
      )}
    </>
  );
};
