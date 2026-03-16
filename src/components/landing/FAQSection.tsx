import { FadeIn } from '../shared/FadeIn';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Why should we consolidate our IT, telco, and cloud services?",
      answer: "Managing multiple providers creates complexity, technical gaps, and finger-pointing during outages. We integrate IT management, telecommunications infrastructure, and workplace technology into one connected environment. This approach allows businesses to improve reliability, simplify technology management, and support modern ways of working.",
    },
    {
      question: "How difficult is it to migrate to C9 Communications?",
      answer: "Systems are implemented with minimal disruption to operations. We assess your connectivity and IT infrastructure requirements, design a bespoke technology solution, and handle the migration entirely so you can focus on running your business.",
    },
    {
      question: "Do you provide ongoing support after deployment?",
      answer: "Yes. Our team monitors and manages your infrastructure to keep everything running reliably. We offer 24/7 Australian-based support, ensuring proactive issue resolution and immediate assistance when needed.",
    },
    {
      question: "Are your solutions scalable for growing businesses?",
      answer: "Absolutely. Our infrastructure is built to scale alongside your organization. Whether you're adding new office locations, transitioning to remote workpaces, or expanding your team, our connectivity and managed IT solutions adapt to your growing requirements.",
    }
  ];

  return (
    <section className="sp-section" style={{ background: 'var(--c9-surface)' }}>
      <div className="sp-container" style={{ maxWidth: '800px' }}>
        <FadeIn style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="sp-eyebrow">FAQ</span>
          <h2 className="sp-h2">
            Frequently Asked <span className="sp-gradient-text">Questions</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                style={{
                  borderBottom: '1px solid var(--c9-border)',
                  padding: '8px 0'
                }}
              >
                <AccordionTrigger style={{ 
                    fontSize: '18px', 
                    fontWeight: 600, 
                    color: 'hsl(var(--foreground))',
                    padding: '16px 0',
                    textAlign: 'left'
                }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent style={{ 
                    color: 'var(--c9-muted)',
                    lineHeight: 1.6,
                    fontSize: '16px',
                    paddingBottom: '16px'
                }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
};
