'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ChevronDown, HelpCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

function FAQItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className={`overflow-hidden border transition-all duration-300 rounded-[24px] ${isOpen ? 'bg-white shadow-2xl shadow-[#5D00D6]/10 border-[#5D00D6]/20' : 'bg-gray-50/50 hover:bg-gray-50 border-gray-100'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 md:p-7 text-left group cursor-pointer"
      >
        <span className={`text-[24px] font-bold transition-colors pr-8 ${isOpen ? 'text-[#5D00D6]' : 'text-[#0c1024]'}`} style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{question}</span>
        <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#5D00D6] text-white rotate-180' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-[#5D00D6]/30 group-hover:text-[#5D00D6]'}`}>
          <ChevronDown size={18} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 md:px-7 pb-6 md:pb-8 pt-0">
              <div className="h-px bg-gray-100 w-full mb-6"></div>
              <p className="text-gray-500 leading-relaxed text-[18px] font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
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

export const WpFAQAndFeedback = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <>
      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20">
            {/* Left side */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F4F0FA] px-4 py-1.5 rounded-full border border-[#5D00D6]/10 mb-6">
                <div className="w-4 h-4 text-[#5D00D6]"><HelpCircle size={16} /></div>
                <span className="text-[12px] font-bold text-[#5D00D6] uppercase tracking-wider">FAQ</span>
              </div>
              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#0c1024] leading-tight tracking-tight mb-6">
                Have more questions?
              </h2>
              <p className="text-gray-500 text-[18px] mb-12 leading-relaxed">
                Our team is designed to make managing your IT easy and stress-free. With intuitive features, you can track your needs and support effortlessly.
              </p>

              <div className="bg-[#F9F7FE] p-8 md:p-10 rounded-[32px] border border-[#5D00D6]/5">
                <h3 className="text-[24px] font-bold mb-4 text-[#0c1024]">Can't find answers?</h3>
                <p className="text-gray-500 mb-8 font-medium">We're here to help you out whenever you need! Get in touch with our dedicated support team.</p>
                <Button size="lg" className="bg-[#5D00D6] hover:bg-[#4a00ab] rounded-full px-8 gap-3 group border-none shadow-xl shadow-purple-900/20">
                  Contact us <ArrowRight className="size-4 transition-transform group-hover:rotate-[-45deg]" />
                </Button>
              </div>
            </div>

            {/* Right side - Custom Accordion */}
            <div className="space-y-4">
              {[
                { q: 'How does C9 handle emergency support?', a: 'We provide 24/7 emergency support with a 15-minute response guarantee for critical infrastructure issues. Our on-call engineers are always ready to assist.' },
                { q: 'Is there a minimum contract period?', a: 'We offer flexible terms ranging from monthly rolling to 12-36 month commitments, depending on the level of managed services and infrastructure requirements.' },
                { q: 'Which payment methods do you accept?', a: 'We support all major credit cards, direct debits, and bank transfers. Enterprise clients can also opt for monthly invoicing with standard terms.' },
                { q: 'How does C9 keep my financial data secure?', a: 'Security is in our DNA. We use enterprise-grade encryption, multi-factor authentication, and comply with strict Australian privacy and data sovereignty laws.' },
                { q: 'How can I contact support?', a: 'You can reach us via our customer portal, live chat, email, or by calling our priority Australian support line at 1800 000 299.' }
              ].map((item, i) => <FAQItem key={i} question={item.q} answer={item.a} defaultOpen={i === 0} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="grid lg:grid-cols-[1fr_2.4fr] gap-16 items-start">
            {/* Left Column: Heading & Navigation */}
            <div className="md:sticky top-32 lg:static">
              <span className="text-[#5D00D6] text-[12px] font-bold uppercase tracking-[0.2em] mb-4 block" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>Real Customers</span>
              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#0c1024] leading-[1.1] tracking-tight mb-6" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                Customers Feedback
              </h2>
              <p className="text-[16px] text-[#64748b] mb-10 leading-relaxed font-medium" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                From startups to global enterprises, here's how C9 Communications is transforming business connectivity.
              </p>
              
              {/* Navigation Arrows (Desktop) */}
              <div className="hidden lg:flex gap-3">
                <button 
                  onClick={() => setTestimonialIdx(prev => Math.max(0, prev - 1))}
                  className={`w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all ${testimonialIdx === 0 ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-[#F4F0FA] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white'}`}
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => setTestimonialIdx(prev => Math.min((typeof window !== 'undefined' && window.innerWidth < 768 ? TESTIMONIALS.length - 1 : TESTIMONIALS.length - 2), prev + 1))}
                  className={`w-12 h-12 rounded-full cursor-pointer bg-[#5D00D6] text-white flex items-center justify-center transition-all hover:bg-[#4c00b0] shadow-lg shadow-purple-900/20 ${testimonialIdx >= (typeof window !== 'undefined' && window.innerWidth < 768 ? TESTIMONIALS.length - 1 : TESTIMONIALS.length - 2) ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Right Column: Cards Slider */}
            <div className="relative">
              <div className="flex gap-6 overflow-hidden">
                <motion.div 
                  className="flex gap-6"
                  animate={{ x: `calc(-${testimonialIdx * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 50)}% - ${testimonialIdx * 24}px)` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {TESTIMONIALS.map((t, idx) => (
                    <div key={idx} className="min-w-full md:min-w-[calc(50%-12px)] bg-white border border-gray-100 p-6 md:p-10 rounded-[32px] hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-purple-900/5 transition-all flex flex-col h-full group">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 rounded-full bg-[#F4F0FA] flex items-center justify-center text-[15px] font-bold text-[#5D00D6] shrink-0">
                          {t.avatar}
                        </div>
                        <div>
                          <h4 className="font-bold text-[20px] md:text-[24px] text-[#0c1024] leading-none mb-1.5" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{t.name}</h4>
                          <p className="text-[14px] md:text-[16px] text-[#64748b] font-medium" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{t.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex text-[#f59e0b] mb-8 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} fill="currentColor" size={18} strokeWidth={0} />
                        ))}
                      </div>

                      <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                        "{t.content}"
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Navigation Arrows (Mobile) */}
              <div className="flex lg:hidden gap-6 justify-center mt-12 items-center">
                <button 
                  onClick={() => setTestimonialIdx(prev => Math.max(0, prev - 1))}
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all cursor-pointer ${testimonialIdx === 0 ? 'bg-gray-100 text-gray-300' : 'bg-[#F4F0FA] text-[#5D00D6]'}`}
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex gap-1.5">
                  {TESTIMONIALS.map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-all ${testimonialIdx === i ? 'w-6 bg-[#5D00D6]' : 'bg-gray-200'}`}></div>
                  ))}
                </div>
                <button 
                  onClick={() => setTestimonialIdx(prev => Math.min(TESTIMONIALS.length - 1, prev + 1))}
                  className={`w-14 h-14 rounded-full bg-[#5D00D6] text-white flex items-center justify-center cursor-pointer transition-all ${testimonialIdx >= TESTIMONIALS.length - 1 ? 'opacity-50' : ''}`}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
