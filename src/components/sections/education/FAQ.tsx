'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { question: "Can you manage a large student and staff device fleet?", answer: "Yes. Device fleet management is a core part of our Modern Workplace offering — we enrol, configure, patch, and monitor every device in your environment via Microsoft Intune, regardless of whether it's a student laptop, staff workstation, or shared classroom device." },
    { question: "How do you handle student data privacy?", answer: "We design IT environments with Australian Privacy Principles and state-based student data obligations in mind. For institutions requiring formal compliance evidence, C9 Defense provides documented controls and continuous monitoring." },
    { question: "Can you support campus-wide Wi-Fi across multiple buildings?", answer: "Yes. We design, deploy, and manage campus wireless infrastructure built for high-density environments — hundreds of simultaneous devices, consistent coverage across buildings, and proactive monitoring to catch issues before they impact classes." },
    { question: "Do you support Microsoft 365 Education licensing?", answer: "Yes. C9 manages M365 Education licensing, Teams for Education, SharePoint, and Intune device management for both staff and student environments." },
    { question: "How quickly can you respond to a classroom technology failure?", answer: "We define response SLAs based on impact — a classroom-wide outage is treated as a high-priority incident with a response target of under 4 hours. Proactive monitoring means we're often aware of issues before teaching staff report them." },
    { question: "Can we have IT and phones under one agreement?", answer: "Yes — Managed IT and Telco under one agreement is one of the most common outcomes for education providers moving to C9. One invoice, one account manager, and no gap between your IT and connectivity providers." }
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
            What education providers ask us most.
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

