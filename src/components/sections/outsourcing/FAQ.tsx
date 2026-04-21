'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "What size businesses do you work with?",
      a: "C9 works with Australian businesses from around 10 staff through to 300+. The managed IT model works across this range because it scales with your business — you're not paying for a full-time hire when you need part-time coverage, and you're not under-resourced when you grow."
    },
    {
      q: "Can you take over from our existing IT provider?",
      a: "Yes — and this is one of the most common transitions we manage. C9 handles the documentation, knowledge transfer, and cutover directly with your existing provider. There is no gap in support coverage during the transition and your staff won't notice the change except that things work better."
    },
    {
      q: "What's the minimum contract term?",
      a: "Contract terms are discussed during the proposal stage based on the scope of your engagement. C9 does not believe in locking businesses into long contracts when the service isn't delivering — your account manager will walk you through the commercial structure during your initial consultation."
    },
    {
      q: "How does pricing work — per user, per device, or fixed monthly?",
      a: "C9 proposals are typically structured as a fixed monthly fee based on the scope of your environment — number of users, devices, sites, and complexity. Fixed pricing means no surprise invoices and predictable IT costs you can budget for confidently."
    },
    {
      q: "Do you provide on-site support or is everything remote?",
      a: "Both. Remote support handles the majority of day-to-day issues efficiently. On-site dispatch is available when required — hardware failures, new office setups, infrastructure installations, and anything that genuinely needs a technician in the room."
    },
    {
      q: "What happens to our current IT setup when we transition to C9?",
      a: "C9 performs a full environment audit during onboarding. We document everything, identify what needs immediate attention, and build a remediation and improvement plan into your first 90 days. Nothing gets thrown out — everything gets understood and managed properly."
    },
    {
      q: "Can we include Telco — internet and phones — in the same agreement?",
      a: "Yes — and this is one of the most common outcomes for businesses moving to C9. Managed IT and Telco under one agreement means one invoice, one account manager, and no finger-pointing between your IT and connectivity providers when something goes wrong."
    }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="container mx-auto max-w-[760px]">
        <div className="text-left mb-12 font-sans">
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7B2FBE]  font-sans">
            COMMON QUESTIONS
          </span>
          <h2 className="c9-section-heading -[1.1] font-sans">
            What businesses ask before<br className="hidden md:block" /> outsourcing their IT.
          </h2>
        </div>

        <Accordion className="mt-10 border-t border-[#E5E7EB]">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#E5E7EB] py-2">
              <AccordionTrigger className="text-[16px] font-normal text-[#0c1024] hover:text-[#5D00D6] hover:no-underline transition-colors  text-left font-sans">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] text-slate-600 leading-[1.7] pb-4  font-sans">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
