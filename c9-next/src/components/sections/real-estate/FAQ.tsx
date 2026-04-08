'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { question: "Can you support agents who work across multiple locations and in the field?", answer: "Yes. We manage mobile plans, secure remote access, and device management for agents working across offices and in the field — giving them reliable, secure access to your systems from anywhere." },
    { question: "How do you protect our client data?", answer: "We implement access controls, encrypted storage, and audit logging across your entire IT environment. For agencies with elevated data sensitivity, C9 Defense adds continuous monitoring and formal compliance documentation." },
    { question: "Can you manage our shopfront window displays?", answer: "Yes. Digital signage and property display screens are part of our Modern Workplace offering. We deploy, configure, and maintain display systems as part of your broader IT environment — including content updates where required." },
    { question: "Can you manage IT across multiple office locations?", answer: "Yes — multi-office management is a core part of our Managed IT offering. Every location managed under one agreement, consistent standards, and one account manager across your entire agency network." },
    { question: "What phone system options do you recommend for real estate agencies?", answer: "C9X is our cloud-based phone system — designed for businesses with mobile workforces. It gives agents a professional number that follows them on any device, with features like call recording, voicemail to email, and seamless transfer between office and mobile." },
    { question: "Can IT and phones be on one agreement?", answer: "Yes — and this is one of the most common outcomes for real estate agencies moving to C9. Managed IT and Telco under one agreement means one invoice, one account manager, and no gap between your IT and phone providers." }
  ];

  return (
    <section className="w-full bg-[#FDFDFF] py-12 md:py-16 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#F4F0FA] px-4 py-2 rounded-none border border-[#5D00D6]/10 mb-6 cursor-default">
            <HelpCircle className="text-[#5D00D6]" size={16} />
            <span className="text-[12px] font-extrabold text-[#5D00D6] uppercase tracking-[0.2em] leading-none mt-0.5" >Quick Answers</span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0c1024] leading-[1.1] tracking-tight" >
            What real estate agencies ask us most.
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

