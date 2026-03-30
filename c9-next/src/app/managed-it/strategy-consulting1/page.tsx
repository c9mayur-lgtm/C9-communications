import React from 'react';
import { ServiceHero } from "@/components/layout/ServiceHero";
import { ServiceDetailBenefits } from "@/components/wordpress/ServiceDetailBenefits";
import { ServiceImageText } from "@/components/wordpress/ServiceImageText";
import { ServiceFeatureScroll } from "@/components/wordpress/ServiceFeatureScroll";
import { ServiceTestimonialKajabi } from "@/components/wordpress/ServiceTestimonialKajabi";
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";

const STRATEGY_BULLETS = [
  'Align technology investments with core business goals.',
  'Reduce IT sprawl and minimize unnecessary expenditure.',
  'Accelerate digital transformation through proven frameworks.',
  'Enhance security posture with industry-leading risk audits.'
];

const STRATEGY_SUB_BENEFITS = [
  { 
    title: 'Custom IT Strategy', 
    description: 'We build tailored roadmaps that reflect your specific industry challenges and growth targets.' 
  },
  { 
    title: 'Cloud Maturity', 
    description: 'Enable secure, remote work with a modern cloud strategy built on Azure and Microsoft 365.' 
  },
  { 
    title: 'Predictable ROI', 
    description: 'Stop guessing. We measure the impact of every technology dollar to ensure maximum ROI.' 
  },
  { 
    title: 'Future-Ready Security', 
    description: 'We build resilient security frameworks that proactively evolve alongside the modern threat landscape.' 
  }
];

const STRATEGY_FEATURES = [
  { title: 'Technical Implementation', description: 'Execute your technology roadmap with precision-engineered solutions that scale with your growth.' },
  { title: 'IT Helpdesk Support', description: 'Empower your workforce with strategic support that resolves issues before they impact productivity.' },
  { title: 'Managed IT Services', description: 'Offload the complexity of infrastructure management to our experts, allowing you to focus on core strategy.' },
  { title: 'IT Consulting', description: 'Leverage senior-level expertise to navigate digital transformation and complex architecture decisions.' },
  { title: 'Network Support', description: 'Build a resilient, high-performance foundation for your business operations with our strategic network design.' },
  { title: 'Field Tech Support', description: 'On-site expertise whenever you need it, ensuring your physical infrastructure is always optimized.' }
];

const STRATEGY_FAQS = [
  { 
    q: 'How do you help with IT strategy?', 
    a: 'We conduct a deep-dive analysis of your current systems, processes, and business goals to develop a 12-24 month technology roadmap that prioritizes high-impact projects.' 
  },
  { 
    q: 'What is a risk assessment?', 
    a: 'We evaluate your security posture, data handling, and disaster recovery plans against industry standards like the ACSC Essential Eight to ensure your business is resilient.' 
  },
  { 
    q: 'Can you help with migrating to the cloud?', 
    a: 'Yes, we specialize in architecting and executing cloud migrations. Whether you are moving from on-premise servers to Azure or AWS, or consolidating workloads in M365, we manage the entire process.' 
  },
  { 
    q: 'How often should we review our IT strategy?', 
    a: 'We recommend a major strategic review annually, with quarterly progress check-ins to ensure your technology roadmap continues to align with your evolving business goals.' 
  }
];

export default function StrategyConsulting() {
  return (
    <main className="min-h-screen bg-white">
      <ServiceHero 
        eyebrow="SOLUTIONS"
        title="Strategy & Consulting"
        description="Align your technology with your business goals. Our strategic IT consulting services help you navigate complex technology landscapes and drive sustainable growth for your Australian business."
        bgImage="/images/strategy-hero-banner.png"
      />
      
      <ServiceDetailBenefits 
        title="Why partner with C9 for IT strategy?"
        intro="Turn technology into a competitive advantage. Our senior consultants provide the roadmap and expertise you need to align your IT infrastructure with your core business goals."
        bullets={STRATEGY_BULLETS}
        subBenefits={STRATEGY_SUB_BENEFITS}
        imageSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000"
      />

      <ServiceImageText 
        reverse={false}
        title="Unlocking Your Full Business Potential"
        description="Our strategic advisors work closely with you to understand your unique business requirements and challenges. We provide expert guidance on how technology can be used as a strategic lever to drive growth, increase efficiency, and gain a competitive edge in your market."
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
      />

      <ServiceFeatureScroll 
        title="Cutting-edge tools that drive performance"
        description="If your technology is draining resources rather than optimizing them, we can get you back on track. A professionally managed services provider can give you the decisive edge to:"
        features={STRATEGY_FEATURES}
      />

      <ServiceTestimonialKajabi />

      <WpFAQAndFeedback 
        showFAQ={true}
        showTestimonials={false}
        faqItems={STRATEGY_FAQS}
        showStillQuestions={false}
      />

      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="STRATEGIC IT ADVISORY"
          title="The IT partner your business deserves."
          description="Book a 30-minute strategy session with our senior consultants. We'll review your current infrastructure and security posture — no obligation, just expert advice."
          formTitle="Schedule Strategy Session"
        />
      </section>
    </main>
  );
}
