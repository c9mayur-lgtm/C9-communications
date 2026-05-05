'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you have experience with healthcare-specific software like practice management systems?",
      answer: "Yes. C9 works with a range of healthcare providers across Australia and has experience integrating and supporting common practice management platforms. We assess your specific software environment during onboarding and document everything so our team understands your setup from day one."
    },
    {
      question: "How do you handle compliance with Australian healthcare privacy laws?",
      answer: "We design and manage IT environments with Australian Privacy Principles and healthcare-specific obligations in mind. For organisations requiring formal Essential 8 compliance and continuous monitoring, C9 Defense provides a structured compliance framework with documented outcomes."
    },
    {
      question: "Can you support multi-site healthcare networks?",
      answer: "Absolutely. Multi-site management is a core part of our Managed IT offering. We manage network connectivity, devices, and support across all your locations under a single agreement — one bill, one contact, one team that knows every site."
    },
    {
      question: "What happens if our internet goes down during clinical hours?",
      answer: "We design connectivity with redundancy as standard for healthcare clients. This means a failover connection activates automatically if your primary internet fails. We also monitor connectivity proactively — in many cases we're already working on an issue before your staff notice."
    },
    {
      question: "How does C9 Defense differ from standard IT security?",
      answer: "Standard Managed IT includes endpoint protection, patching, and backup. C9 Defense is a dedicated cybersecurity layer that adds Essential 8 compliance, continuous 24/7 threat monitoring, and tested recovery assurance — purpose-built for organisations with regulatory obligations or elevated risk profiles."
    },
    {
      question: "Can we consolidate our IT and phone provider into one agreement?",
      answer: "Yes — and this is one of the most common reasons healthcare providers move to C9. We manage both Managed IT and Telco (internet, voice, mobile) under a single agreement. One invoice, one account manager, no finger-pointing between providers."
    }
  ];

  return (
    <section className="w-full bg-[#FDFDFF] py-12 md:py-16 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#F4F0FA] px-4 py-2 rounded-lg border border-[#5D00D6]/10 mb-6 cursor-default">
            <HelpCircle className="text-[#5D00D6]" size={16} />
            <span className="text-[12px] font-extrabold text-[#5D00D6] uppercase tracking-[0.2em] leading-none mt-0.5" >Quick Answers</span>
          </div>
          <h2 className="c9-section-heading" >
            What healthcare providers ask us most.
          </h2>
        </div>

        <div className="flex flex-col w-full max-w-[800px] mx-auto">
          {faqs.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="border-b border-[#5D00D6]/10">
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left"
                >
                  <span 
                    className={`text-[18px] md:text-[20px] font-bold leading-snug transition-colors ${isOpen ? 'text-[#5D00D6]' : 'text-[#0c1024]'}`} 
                    
                  >
                    {item.question}
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
                        <p className="text-[17px] md:text-[18px] leading-[1.65] text-gray-500 font-normal max-w-[680px]" >
                          {item.answer}
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
  );
}

