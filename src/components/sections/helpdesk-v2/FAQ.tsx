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
    <div className="bg-[#fcfaff] border border-purple-50 rounded-[24px] px-6 md:px-10 mb-5 overflow-hidden hover:border-[#5D00D6]/20 transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-8 text-left group"
      >
        <span className="text-[18px] md:text-[18px] font-medium text-[#0c1024] group-hover:text-[#5D00D6] transition-colors leading-tight pr-6" >
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#5D00D6] text-white' : 'bg-[#5D00D6]/5 text-[#5D00D6] group-hover:bg-[#5D00D6]/10'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8">
              <p className="text-slate-600 text-[17px] md:text-[18px] leading-relaxed max-w-4xl font-normal" >
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "Is your helpdesk based in Australia?",
      answer: "Yes. Every single technician in our helpdesk team is based in Australia. We do not use offshore call centres or routing. When your staff call, they speak to an expert in a similar time zone who understands the Australian business landscape."
    },
    {
      question: "Do we get a dedicated account manager?",
      answer: "Yes. Every managed IT engagement includes a named account manager. They are your point of escalation and are responsible for the overall health of your IT environment and our service delivery."
    },
    {
      question: "How do you handle on-site issues?",
      answer: "We always try to resolve issues remotely first to ensure the fastest possible resolution. If a hardware fault or network issue requires physical attendance, we dispatch a technician to your site as part of our managed service agreement."
    },
    {
      question: "Can you support our specific industry software?",
      answer: "We support a wide range of industry-specific applications (practice management, legal software, ERPs, etc.). While we may not be software developers, our team acts as the liaison between your staff and the software vendor to ensure issues are resolved without your staff being 'stuck in the middle'."
    },
    {
      question: "What happens if we have an emergency after hours?",
      answer: "Standard helpdesk operates during business hours. We offer 24/7/365 critical support options for businesses that require around-the-clock coverage for outages or urgent security incidents."
    }
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-[0.3em] mb-4 block" 
          >
            COMMON QUESTIONS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] md:text-[36px] font-medium text-[#0c1024] leading-tight tracking-tight" 
          >
            Everything you need to <span className="text-[#5D00D6]">know.</span>
          </motion.h2>
        </div>

        <div className="mt-12">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
            >
              <FAQAccordionItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

