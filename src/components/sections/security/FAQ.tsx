'use client';

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What security is included in a standard Managed IT engagement?",
      a: "Every C9 Managed IT engagement includes endpoint protection, patch management, MFA enforcement, email security, managed backup, and basic security awareness. These controls are included in the fixed monthly fee — not billed as extras."
    },
    {
      q: "What is the difference between Managed IT security and C9 Defense?",
      a: "Managed IT security covers your baseline — the controls every business should have. C9 Defense is a dedicated enterprise cybersecurity program for organisations with elevated risk profiles or formal compliance obligations. It adds Essential 8 implementation, continuous 24/7 monitoring, incident response, and tested recovery assurance on top of the baseline."
    },
    {
      q: "Do I need C9 Defense if I am already a Managed IT client?",
      a: "Not necessarily. Most small and mid-sized businesses are well served by the Managed IT security baseline. C9 Defense is recommended for organisations in regulated industries, those that have experienced a security incident, or those facing compliance audit requirements. Your account manager will be honest about which level of coverage your organisation actually needs."
    },
    {
      q: "What is Essential 8 and do I need to comply with it?",
      a: "The Essential 8 is a set of eight cybersecurity mitigation strategies published by the Australian Cyber Security Centre. It is mandatory for Australian Government entities and increasingly required by cyber insurers and enterprise clients. C9 Defense implements and maintains Essential 8 compliance with formal evidence and reporting."
    },
    {
      q: "What happens if we have a security incident?",
      a: "Managed IT clients receive incident response support as part of their engagement — C9 will assist with containment, investigation, and recovery. C9 Defense clients additionally have continuous monitoring that detects threats before they become incidents, and a formal incident response process with defined response times."
    },
    {
      q: "Can you do a security assessment without committing to a full engagement?",
      a: "Yes. C9 offers a security posture assessment that identifies your current state against the Essential 8 framework, highlights gaps, and provides a remediation roadmap — with no obligation to proceed to a full engagement."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 px-6 md:px-8 lg:px-12" >
      <div className="container mx-auto max-w-[800px]">
        <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#7B2FBE] block mb-4">
          COMMON QUESTIONS
        </span>
        <h2 className="c9-section-heading mb-16">
          What businesses ask about<br/>IT security.
        </h2>

        <div className="flex flex-col border-t border-purple-50">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-purple-50">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left"
                >
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#1A1A2E] tracking-tight pr-8 group-hover:text-[#7B2FBE] transition-colors">
                    {faq.q}
                  </h3>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${isOpen ? 'bg-[#7B2FBE] border-[#7B2FBE] text-white rotate-90' : 'bg-white border-purple-100 text-[#7B2FBE] group-hover:border-[#7B2FBE] group-hover:bg-[#F3EEFF]'}`}>
                    {isOpen ? <X size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-[16px] md:text-[17px] text-[#6B7280] leading-[1.8] font-normal">
                        {faq.a}
                      </p>
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

