'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ChevronDown, HelpCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

function FAQItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className={`overflow-hidden border transition-all duration-500 rounded-[32px] ${isOpen ? 'bg-white shadow-[0_32px_64px_-16px_rgba(93,0,214,0.12)] border-[#5D00D6]/20' : 'bg-gray-50/40 hover:bg-gray-50 border-gray-100'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left group cursor-pointer"
      >
        <span className={`text-[18px] md:text-[22px] font-bold transition-colors pr-8 leading-tight ${isOpen ? 'text-[#5D00D6]' : 'text-[#0c1024]'}`} style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{question}</span>
        <div className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#5D00D6] text-white rotate-180 shadow-lg shadow-purple-900/20' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-[#5D00D6]/30 group-hover:text-[#5D00D6]'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 md:px-8 pb-8 pt-0">
              <div className="h-px bg-gray-100 w-full mb-8"></div>
              <p className="text-gray-500 leading-relaxed text-[17px] md:text-[19px] font-medium max-w-2xl" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const TESTIMONIALS = [
  { name: "Craig Bator", role: "CEO & Co Founder at Zendesk", content: "I've been using C9 for a year now and it's made managing our multi-site connectivity so much easier and quick.", avatar: "CB" },
  { name: "Martin Dorwart", role: "Product manager at Orbit", content: "With C9 Communications, I can easily track our network performance and see how our systems are running in real-time.", avatar: "MD" },
  { name: "Sarah Johnson", role: "Lead Designer at Figma", content: "The custom IT solutions are beautifully architected and incredibly easy to manage. It's transformed our business workflow.", avatar: "SJ" },
  { name: "Alex Chen", role: "Frontend Developer at Vercel", content: "C9 has saved us countless hours in infrastructure management. Their team is remarkably proactive.", avatar: "AC" },
  { name: "James Wilson", role: "CTO at Atlassian", content: "The transition to C9's managed infrastructure was seamless. Their technical expertise is world-class.", avatar: "JW" }
];

export interface TestimonialData {
  name: string;
  role: string;
  content: string;
  avatar: string | React.ReactNode;
}

export const WpFAQAndFeedback = ({ 
  showFAQ = true, 
  showTestimonials = true, 
  testimonials = TESTIMONIALS 
}: { 
  showFAQ?: boolean; 
  showTestimonials?: boolean; 
  testimonials?: TestimonialData[]; 
} = {}) => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth < 1024 ? 1 : 2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSteps = Math.ceil(testimonials.length / cardsPerView);
  const maxIdx = Math.max(0, testimonials.length - cardsPerView);

  return (
    <>
      {/* FAQ Section */}
      {showFAQ && (
        <section className="py-20 md:py-32 bg-white border-t border-gray-50">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-start">
            {/* Left side */}
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 bg-[#F4F0FA] px-4 py-2 rounded-full border border-[#5D00D6]/10 mb-8">
                <HelpCircle className="text-[#5D00D6]" size={16} />
                <span className="text-[12px] font-extrabold text-[#5D00D6] uppercase tracking-[0.2em] leading-none mt-0.5">Quick Answers</span>
              </div>
              <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-bold text-[#0c1024] leading-[1.1] tracking-tight mb-8" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                Frequently Asked<br />Questions
              </h2>
              <p className="text-gray-500 text-[18px] md:text-[20px] mb-12 leading-relaxed font-medium" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                Everything you need to know about our business telco and managed IT solutions. Can't find what you're looking for?
              </p>

              <div className="bg-[#0A0D14] p-10 md:p-12 rounded-[40px] border border-white/5 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-[26px] font-bold mb-4 text-white">Still have questions?</h3>
                  <p className="text-gray-400 mb-10 font-medium leading-relaxed">Our experts are ready to help you architect the perfect system for your business needs.</p>
                  <Button size="lg" className="bg-[#5D00D6] hover:bg-[#4a00ab] rounded-2xl px-10 h-14 gap-3 group border-none shadow-2xl shadow-purple-900/40 text-[16px] font-bold">
                    Talk to an Expert <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#5D00D6]/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>

            {/* Right side - Custom Accordion */}
            <div className="space-y-5">
              {[
                { q: 'How does C9 handle emergency support?', a: 'We provide 24/7 dedicated local support with priority resolution for infrastructure issues. Our local engineers are always on standby to assist with critical failures.' },
                { q: 'What connectivity options do you provide?', a: 'We offer a full range of business-grade connectivity including NBN™ Enterprise Ethernet, high-speed Fibre (up to 10Gbps), and secure SD-WAN solutions.' },
                { q: 'Do you manage existing IT infrastructure?', a: 'Yes, we specialize in managed services and can take over management of your existing endpoints, servers, and cloud environments while improving security.' },
                { q: 'How secure is my business data with C9?', a: 'All data is stored exclusively in Australian-based data centres, adhering strictly to Australian privacy laws and data sovereignty requirements.' },
                { q: 'Can I scale my services as we grow?', a: 'Absolutely. Our solutions are designed for agility, allowing you to add users, bandwidth, or new office locations seamlessly as your requirements evolve.' }
              ].map((item, i) => <FAQItem key={i} question={item.q} answer={item.a} defaultOpen={i === 0} />)}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Testimonials Section */}
      {showTestimonials && (
        <section className="py-20 md:py-32 bg-[#F9FBFE] border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
            <div className="max-w-2xl">
              <span className="text-[#5D00D6] text-[12px] font-extrabold uppercase tracking-[0.2em] mb-4 block" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>Customer Success</span>
              <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-bold text-[#0c1024] leading-[1.1] tracking-tight mb-6" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                 Success Stories From<br className="hidden md:block" /> Our Trusted Partners
              </h2>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button 
                onClick={() => setTestimonialIdx(prev => Math.max(0, prev - 1))}
                disabled={testimonialIdx === 0}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-sm ${testimonialIdx === 0 ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-white border border-gray-100 text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white hover:shadow-xl hover:shadow-[#5D00D6]/20'}`}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => setTestimonialIdx(prev => Math.min(maxIdx, prev + 1))}
                disabled={testimonialIdx >= maxIdx}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all bg-[#5D00D6] text-white hover:bg-[#4c00b0] shadow-xl shadow-purple-900/20 ${testimonialIdx >= maxIdx ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-visible">
              <motion.div 
                className="flex gap-8"
                animate={{ x: `calc(-${testimonialIdx * (100 / cardsPerView)}% - ${testimonialIdx * 32}px)` }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {testimonials.map((t, idx) => (
                  <div key={idx} className="w-[100vw] lg:w-[calc(50%-16px)] shrink-0 bg-white border border-gray-100/60 p-8 md:p-12 rounded-[40px] hover:border-[#5D00D6]/30 hover:shadow-[0_40px_80px_-15px_rgba(93,0,214,0.08)] transition-all flex flex-col h-full group relative">
                    <div className="flex items-center gap-5 mb-10">
                      <div className="w-16 h-16 rounded-2xl bg-[#F4F0FA] flex items-center justify-center text-[18px] font-bold text-[#5D00D6] shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-500">
                        {t.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-[22px] md:text-[24px] text-[#0c1024] leading-tight mb-1" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{t.name}</h4>
                        <p className="text-[14px] md:text-[15px] text-[#64748b] font-bold uppercase tracking-wider opacity-60" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{t.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex text-[#f59e0b] mb-10 gap-1 opacity-80">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} fill="currentColor" size={20} strokeWidth={0} />
                      ))}
                    </div>

                    <p className="text-[18px] md:text-[20px] text-[#2D3748] leading-relaxed font-medium italic" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                      "{t.content}"
                    </p>

                    <div className="absolute top-12 right-12 text-[#5D00D6]/5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="60" height="45" viewBox="0 0 60 45" fill="currentColor">
                        <path d="M13.3333 45L0 31.6667V0H26.6667V26.6667H13.3333V45ZM46.6667 45L33.3333 31.6667V0H60V26.6667H46.6667V45Z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-16 flex gap-2 justify-center">
              {[...Array(totalSteps)].map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${testimonialIdx >= i * cardsPerView && testimonialIdx < (i + 1) * cardsPerView ? 'w-12 bg-[#5D00D6]' : 'w-2 bg-gray-200'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}
    </>
  );
};
