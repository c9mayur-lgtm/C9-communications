'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { question: "Can you support our POS systems?", answer: "C9 manages the IT infrastructure that POS systems run on — networking, connectivity, workstations, and helpdesk support. We work alongside your POS vendor to ensure the underlying IT environment is always reliable and supported." },
    { question: "What happens if our store internet goes down?", answer: "We implement redundant connectivity with automatic failover as standard for retail clients. If your primary connection fails, a backup connection activates immediately — your store stays open and payments keep processing." },
    { question: "Can you manage IT across multiple store locations?", answer: "Yes — multi-site retail management is a core strength. We manage every location under a single agreement with consistent standards, centralised monitoring, and one account manager across your entire retail network." },
    { question: "How do you help us meet PCI-DSS requirements?", answer: "C9 implements network segmentation, access controls, and documented security policies that support PCI-DSS compliance. For retailers requiring formal compliance evidence and continuous monitoring, C9 Defense provides a structured program with auditable outputs." },
    { question: "Can you manage our in-store digital displays?", answer: "Yes. Digital signage and in-store display technology is part of our Modern Workplace offering. We deploy, configure, and maintain display systems as part of your broader IT environment — including content management where required." },
    { question: "Can IT and phones be on one agreement?", answer: "Yes — Managed IT and Telco under one agreement is standard for our retail clients. One invoice, one account manager, and no finger-pointing between your IT and connectivity providers." }
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
            What retail businesses ask us most.
          </h2>
        </div>
        <div className="flex flex-col w-full max-w-[800px] mx-auto">
          {faqs.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="border-b border-[#5D00D6]/10">
                <button onClick={() => setOpenIdx(isOpen ? null : i)} className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left group">
                  <span className={`text-[18px] md:text-[20px] font-bold leading-snug transition-colors ${isOpen ? 'text-[#5D00D6]' : 'text-[#0c1024]'}`} >{item.question}</span>
                  <ChevronDown size={22} className={`shrink-0 mt-0.5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#5D00D6]' : 'text-gray-400 group-hover:text-[#5D00D6]'}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                      <div className="pb-8 pt-0 pr-8">
                        <p className="text-[17px] md:text-[18px] leading-[1.65] text-gray-500 font-normal max-w-[680px]" >{item.answer}</p>
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

