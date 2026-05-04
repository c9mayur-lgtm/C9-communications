'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const strategyFaqs = [
  {
    q: "What is a virtual CIO and how is it different from a regular IT consultant?",
    a: "A virtual CIO is an ongoing strategic relationship — not a one-off engagement. Unlike a consultant who delivers a report and moves on, a C9 vCIO attends your planning meetings, manages your vendors, updates your roadmap quarterly, and is accountable for the outcomes of your technology investment over time."
  },
  {
    q: "Is this only available as part of a Managed IT agreement?",
    a: "The strategic engagement is most effective when paired with Managed IT — because C9 can both set the strategy and execute it directly. However, we can discuss standalone strategic consulting for businesses with existing IT resources who need strategic oversight only."
  },
  {
    q: "How often does the vCIO meet with our team?",
    a: "At minimum, quarterly reviews are included as standard. Most clients engage more frequently during active roadmap phases or when significant technology decisions are being made. Your account manager is available between formal reviews."
  },
  {
    q: "Will you recommend technology we don't actually need?",
    a: "No. C9's strategic advice is vendor-agnostic — we are not incentivised to recommend any specific product or vendor. Our job is to identify what your business needs and source the best-fit solution, regardless of who makes it."
  },
  {
    q: "What does a technology roadmap actually look like?",
    a: "A C9 roadmap is a prioritised 12-month plan covering: initiatives ranked by business impact and urgency, budget requirements per initiative, dependencies and sequencing, risk items requiring attention, and quick wins achievable within 90 days. It is updated every quarter to reflect your evolving business priorities."
  },
  {
    q: "Can you help us prepare for a board technology presentation?",
    a: "Yes — board-level technology reporting is included in the strategic engagement. C9 translates your IT environment into language your board understands: risk exposure, investment rationale, and roadmap progress — without technical jargon."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-[#FDFDFF] border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F4F0FA] px-4 py-2 rounded-lg border border-[#5D00D6]/10 mb-6 cursor-default">
            <HelpCircle className="text-[#5D00D6]" size={16} />
            <span className="text-[12px] font-extrabold text-[#5D00D6] uppercase tracking-[0.2em] leading-none mt-0.5">Quick Answers</span>
          </div>
          <h2 className="c9-section-heading" >
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col w-full max-w-[800px] mx-auto">
          {strategyFaqs.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="border-b border-[#5D00D6]/10">
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left group"
                >
                  <span 
                    className={`text-[18px] md:text-[20px] font-bold leading-snug transition-colors ${isOpen ? 'text-[#5D00D6]' : 'text-[#0c1024]'}`} 
                    
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
                        <p className="text-[18px] leading-[1.65] text-gray-500 font-normal max-w-[680px]" >
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
  );
}

