"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "Is the helpdesk team based in Australia?",
      a: "Yes. C9's helpdesk is AU-managed. When your staff call, they speak to a technician overseeing your environment under local technical leadership. There is no offshore routing."
    },
    {
      q: "What hours does the helpdesk operate?",
      a: "Standard helpdesk coverage operates during business hours Monday to Friday. Extended hours and 24/7 monitoring are available on select plans — your account manager will recommend the right coverage level based on your business."
    },
    {
      q: "How do staff log a support ticket?",
      a: "Staff can log tickets via phone, email, or the C9 self-service portal — whichever they prefer. All three methods create a tracked ticket with the same SLA commitment applied."
    },
    {
      q: "Can you take over from our existing IT provider or internal IT person?",
      a: "Yes — and this is one of the most common transitions we manage. C9 handles the documentation, knowledge transfer, and cutover so there is no gap in support coverage during the transition. Your staff won't notice the change except that things work better."
    },
    {
      q: "What if our issue isn't resolved within the SLA?",
      a: "SLA breaches are escalated automatically within C9 and flagged in your monthly report. Your account manager is accountable for SLA performance and will discuss any breach with you directly — not wait for you to ask."
    },
    {
      q: "Is helpdesk included in a Managed IT agreement or billed separately?",
      a: "Helpdesk is included as part of C9's Managed IT engagement. It can also be scoped as a standalone service for organisations that manage their own infrastructure but need a reliable support layer for staff."
    },
    {
      q: "How quickly can you onboard our business?",
      a: "Most helpdesk onboardings are completed within 2 to 4 weeks depending on the size and complexity of your environment. C9 handles environment documentation, portal setup, and staff communication so the transition is invisible to your team."
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-6 max-w-[760px]">
        <div className="mb-10 text-center">
          <span className="text-[11px] uppercase tracking-[0.1em] text-[#7B2FBE]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
            COMMON QUESTIONS
          </span>
          <h2 className="c9-section-heading mt-4" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            What businesses ask before switching helpdesk providers.
          </h2>
        </div>

        <Accordion className="w-full border-t border-[#E5E7EB]">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#E5E7EB] py-2">
              <AccordionTrigger className="text-left text-[16px] font-medium text-[#1A1A2E] hover:text-[#7B2FBE] hover:no-underline transition-colors" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-[#6B7280] leading-[1.7] pb-4" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
