'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQAccordionItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-8 text-left group"
      >
        <span className="text-[20px] md:text-[24px] font-bold text-[#0c1024] group-hover:text-[#5D00D6] transition-colors leading-tight" >
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#5D00D6] text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-8">
              <p className="text-gray-500 text-[16px] md:text-[18px] leading-relaxed max-w-4xl font-normal" >
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface ServiceFAQProps {
  eyebrow: string;
  title: string;
  faqs: FAQItemProps[];
}

export const ServiceFAQ = ({ eyebrow, title, faqs }: ServiceFAQProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 px-4 py-1.5 rounded-full mb-6">
            <span className="text-gray-500 text-[12px] font-bold uppercase tracking-[0.2em]">
              {eyebrow}
            </span>
          </div>
          <h2 className="c9-section-heading" >
            {title}
          </h2>
        </div>

        <div className="mt-12">
          {faqs.map((faq, i) => (
            <FAQAccordionItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

