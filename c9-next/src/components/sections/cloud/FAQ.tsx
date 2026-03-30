'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FONT_FAMILY = { fontFamily: "'Proxima Nova', sans-serif" };

const faqData = [
  {
    q: "Do you manage the cloud environment after migration or just do the migration?",
    a: "Both — and the managed service is the point. C9 does not migrate businesses to cloud and hand off. Your cloud environment is managed as part of your Managed IT engagement from go-live day one. Monitoring, patching, administration, cost optimisation, and support — all included in the fixed monthly fee."
  },
  {
    q: "Can you take over management of a cloud environment we already have?",
    a: "Yes. C9 regularly onboards clients who migrated to cloud with another provider or managed it internally and now want proper ongoing management. We audit your current environment, identify gaps, and take over management — usually within two to four weeks."
  },
  {
    q: "What is the difference between public, private, and hybrid cloud?",
    a: "Public cloud is shared infrastructure managed entirely by C9 — easy to scale, ideal for most business workloads. Private cloud is dedicated infrastructure for a single organisation — used when data isolation is required, typically in healthcare, finance, or government. Hybrid cloud combines both — sensitive data in private cloud, day-to-day workloads in public cloud, managed through a single C9 interface."
  },
  {
    q: "Does my data stay in Australia?",
    a: "Yes. C9's cloud infrastructure and Backup as a Service are hosted within Australian data centres. Your data does not leave Australia. This is particularly important for organisations with data sovereignty obligations — healthcare, finance, government, and legal."
  },
  {
    q: "What cloud platforms do you support and manage?",
    a: "C9 specialises in Microsoft 365 and Azure management. We also manage IaaS environments, Backup as a Service powered by Veeam on the Vocus cloud platform, Firewall as a Service, and hybrid cloud environments that combine on-premise infrastructure with public and private cloud."
  },
  {
    q: "Will moving to cloud reduce our costs?",
    a: "Sometimes — but not automatically. Cloud can eliminate capital expenditure on hardware and reduce maintenance overhead, but unmanaged cloud spend can quickly exceed what on-premise infrastructure cost. C9 models the cost comparison during the assessment phase so you make a genuinely informed decision, and reviews your cloud spend monthly after go-live to prevent cost creep."
  },
  {
    q: "What is Firewall as a Service and do we need it?",
    a: "Firewall as a Service delivers cloud-based network security managed entirely by C9 — protecting your organisation without the overhead of managing security hardware and software in-house. Whether you need it depends on your current security posture and risk profile. C9 will advise honestly based on your specific environment."
  },
  {
    q: "How does cloud security work and is it different from on-premise security?",
    a: "Cloud security requires a different approach to on-premise security — identity and access management, conditional access policies, data governance, and cloud security posture monitoring are all critical controls that on-premise security tools do not cover. C9 manages these as part of the ongoing cloud engagement. For organisations requiring Essential 8 compliance in their cloud environment, C9 Defense provides a dedicated security layer."
  }
];

export default function FAQ() {
  return (
    <section className="bg-white py-24" style={FONT_FAMILY}>
      <div className="container mx-auto px-6 md:px-8 max-w-[760px] w-full">
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-purple" style={FONT_FAMILY}>
            COMMON QUESTIONS
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold text-text-primary mt-4 tracking-tight" style={FONT_FAMILY}>
            What businesses ask about cloud services.
          </h2>
        </div>

        <Accordion className="mt-10 border-t border-[rgba(123,47,190,0.15)]">
          {faqData.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-bottom border-[rgba(123,47,190,0.15)] py-2">
              <AccordionTrigger 
                className="text-left text-[16px] font-medium text-text-primary hover:text-brand-purple hover:no-underline transition-colors py-4"
                style={FONT_FAMILY}
              >
                {item.q}
              </AccordionTrigger>
              <AccordionContent 
                className="text-[16px] text-text-secondary leading-[1.7] pb-6 font-normal"
                style={FONT_FAMILY}
              >
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
