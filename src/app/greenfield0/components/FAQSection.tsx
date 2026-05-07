'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const FAQS = [
  {
    q: 'When is the best time to engage C9 for a greenfield project?',
    a: 'For optimal results, engage us during the design phase, typically 3-6 months before move-in. This allows us to manage long-lead items like enterprise fibre builds (often 60-90 business days) and stage hardware procurement to bypass global supply chain volatility.'
  },
  {
    q: 'Do you coordinate with our builder and electrical fit-out trades?',
    a: 'Yes, absolutely. We integrate seamlessly with your builder and electrical contractors. We manage the technical timeline and coordinate all infrastructure work to align with your construction schedule.'
  },
  {
    q: 'What specific cabling standards and certifications do you provide?',
    a: 'We provide Cat6A cabling with full certification testing. All work complies with Australian standards and includes comprehensive documentation.'
  },
  {
    q: 'How do you handle site delays or builder schedule slips?',
    a: 'We build flexibility into our delivery model. Our staged approach means we can adjust timelines without compromising quality or the Day One Operational Guarantee.'
  },
  {
    q: 'What is the "Day One Operational" guarantee?',
    a: 'It means if your doors open, your systems work. No exceptions. We don\'t leave until every technical layer is fully operational and tested under real-world conditions.'
  }
];

export const FAQSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="c9-eyebrow mb-4"
            >
              Got Questions?
            </motion.div>
            <h2 className="c9-section-heading mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion className="w-full space-y-4">
            {FAQS.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="border border-slate-100 rounded-2xl px-6 bg-slate-50 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-bold text-slate-900 py-6 hover:no-underline hover:text-[#5D00D6] transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-slate-600 font-medium pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
