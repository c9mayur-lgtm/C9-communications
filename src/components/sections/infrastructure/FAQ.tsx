'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you manage on-premise, cloud, or hybrid infrastructure?",
    answer: "All three. C9 designs and manages on-premise, cloud (Azure, AWS, Google Cloud), and hybrid infrastructure environments. We recommend the right model for your business based on your requirements, compliance obligations, and cost profile — not based on what's easiest for us to deliver."
  },
  {
    question: "What does managed infrastructure actually include day to day?",
    answer: "Ongoing infrastructure management includes 24/7 monitoring, proactive patch and update management, performance and capacity monitoring, incident response within defined SLAs, full configuration documentation, and a monthly health report. Everything needed to keep your environment running — before you need to ask."
  },
  {
    question: "Can you take over management of infrastructure we already have?",
    answer: "Yes. C9 regularly onboards clients with existing infrastructure — on-premise or cloud — that needs proper management. We start with a full environment audit, document everything, identify gaps, and take over management within a structured onboarding window. Usually two to four weeks."
  },
  {
    question: "What hardware vendors do you procure from?",
    answer: "C9 has certified partnerships with HP Enterprise, Dell Technologies, and Microsoft — and works with a range of other vendors depending on your requirements. We are vendor-agnostic in our recommendations and procurement-agnostic in our sourcing — we get the right equipment at the right price."
  },
  {
    question: "How does infrastructure management relate to your helpdesk service?",
    answer: "They are part of the same Managed IT engagement. Infrastructure management covers the design, deployment, and ongoing health of your underlying environment. Helpdesk covers your staff's day-to-day IT support. Both sit under the same fixed monthly agreement — one team, one point of contact, one bill."
  },
  {
    question: "What does your security infrastructure management include?",
    answer: "Standard infrastructure management includes firewall management, endpoint security, patch management, and network security configuration. For organisations requiring Essential 8 compliance, continuous threat monitoring, and formal security assurance — C9 Defense provides a dedicated security layer on top of infrastructure management."
  },
  {
    question: "Do you offer project-based infrastructure work or only ongoing management?",
    answer: "Both. C9 can deliver specific infrastructure projects — server refreshes, cloud migrations, office network installations — as standalone engagements. Most clients move to ongoing managed services after the initial project, because that's where the real value is: proactive management that prevents problems rather than fixing them."
  }
];

export default function FAQ() {
  return (
    <section className="w-full bg-white py-24 px-6 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div className="text-center mb-16">
          <span className="font-['Proxima_Nova'] text-[11px] uppercase tracking-[0.1em] text-[color:var(--brand-purple)] font-semibold mb-3 block">
            COMMON QUESTIONS
          </span>
          <h2 className="font-['Proxima_Nova'] text-[36px] md:text-[44px] text-[#1A1A2E] font-bold mt-2 leading-tight">
            What technical buyers ask about IT infrastructure management.
          </h2>
        </div>

        <Accordion className="w-full border-t border-[rgba(93,0,214,0.15)] mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-[rgba(93,0,214,0.15)]">
              <AccordionTrigger className="hover:no-underline py-6">
                <span className="font-['Proxima_Nova'] font-semibold text-[16px] text-[#1A1A2E] text-left hover:text-[color:var(--brand-purple)] transition-colors">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                <p className="font-['Proxima_Nova'] text-[14px] text-[#6B7280] leading-[1.7] max-w-[95%]">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
