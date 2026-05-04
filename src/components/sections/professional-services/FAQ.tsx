'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { question: "How do you protect sensitive client files and confidential documents?", answer: "We implement layered access controls, encrypted storage, and audit logging across your entire IT environment. Every user has role-based access to only what they need. For firms requiring formal compliance evidence, C9 Defense adds continuous monitoring and documented controls." },
    { question: "Can you support a firm with multiple offices across different cities?", answer: "Yes — multi-office management is a core part of our Managed IT offering. We manage network connectivity, devices, and support across all your locations under a single agreement." },
    { question: "Do you have experience with legal or accounting practice management software?", answer: "C9 works with professional services firms using a range of practice management platforms. We assess your specific software environment during onboarding and document everything so our team understands your setup from day one." },
    { question: "How do you handle remote and hybrid working for our staff?", answer: "Secure remote work is built into our Modern Workplace offering — VPN management, M365 configuration, device management, and Teams infrastructure all managed by C9 so your staff work securely from anywhere." },
    { question: "What compliance standards can C9 help us meet?", answer: "C9 implements the ACSC Essential 8 framework as the baseline for all security engagements. For firms with specific obligations — Privacy Act, GDPR for international clients, or professional body requirements — C9 Defense provides a structured compliance program with documented outcomes." },
    { question: "Can we consolidate IT and phones into one agreement?", answer: "Yes — and this is one of the most common outcomes for professional services firms moving to C9. Managed IT and Telco under one agreement means one invoice, one account manager, and no gap between your IT and connectivity providers." }
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
            What professional services firms ask us most.
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

