'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ServiceTestimonialKajabi } from './ServiceTestimonialKajabi';

const FAQS = [
  { q: 'How does C9 handle emergency support?', a: 'We provide 24/7 dedicated local support with priority resolution for infrastructure issues. Our local engineers are always on standby to assist with critical failures.' },
  { q: 'What connectivity options do you provide?', a: 'We offer a full range of business-grade connectivity including nbn™ Enterprise Ethernet, high-speed Fibre (up to 10Gbps), and secure SD-WAN solutions.' },
  { q: 'Do you manage existing IT infrastructure?', a: 'Yes, we specialize in managed services and can take over management of your existing endpoints, servers, and cloud environments while improving security.' },
  { q: 'How secure is my business data with C9?', a: 'All data is stored exclusively in Australian-based data centres, adhering strictly to Australian privacy laws and data sovereignty requirements.' },
  { q: 'Can I scale my services as we grow?', a: 'Absolutely. Our solutions are designed for agility, allowing you to add users, bandwidth, or new office locations seamlessly as your requirements evolve.' }
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
        <section className="py-12 md:py-16 bg-[#FDFDFF] border-t border-gray-100">
          <div className="container mx-auto px-6 md:px-8 max-w-4xl">
            
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#F4F0FA] px-4 py-2 rounded-none border border-[#5D00D6]/10 mb-6 cursor-default">
                <HelpCircle className="text-[#5D00D6]" size={16} />
                <span className="c9-eyebrow !text-[11px] leading-none mt-0.5">Quick Answers</span>
              </div>
              <h2 className="c9-section-heading text-[#0c1024]">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Accordion Container */}
            <div className="flex flex-col w-full max-w-[800px] mx-auto">
              {faqItems.map((item, i) => {
                const isOpen = openIdx === i;
                return (
                  <div key={i} className="border-b border-[#5D00D6]/10">
                    <button 
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left group"
                    >
                      <span 
                        className={`text-[19px] font-medium leading-snug transition-colors ${isOpen ? 'text-[#5D00D6]' : 'text-[#0c1024]'}`} 
                      >
                        {item.q}
                      </span>
                      <ChevronDown size={22} className={`shrink-0 mt-0.5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#5D00D6]' : 'text-gray-400 group-hover:text-[#5D00D6]'}`} />
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
                            <p className="c9-body max-w-[680px]">
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
