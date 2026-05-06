'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Search, FileText } from 'lucide-react';
import { ConsultationFormCore } from "@/components/forms/ConsultationFormCore";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export interface WpConsultationFormProps {
  showHeader?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  formTitle?: string;
  ctaText?: string;
}

export const WpConsultationForm = ({ 
  eyebrow = "STRATEGIC IT ADVISORY",
  title = "High-Authority Infrastructure Control.",
  description = "Schedule a technical review with our senior engineers. We'll audit your current environment, identify exposure gaps, and define a roadmap for operational stability.",
  formTitle = "Schedule Strategy Session",
  ctaText
}: WpConsultationFormProps) => {
  return (
    <section 
      id="consultation-section" 
      className="bg-[#E4E0FD] py-8 md:py-12 overflow-hidden" 
    >
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column (Content) */}
          <div className="max-w-[580px]">
            <FadeIn>
              <span className="c9-eyebrow !text-white bg-[#0c1024] px-4 py-1.5 rounded-lg mb-6 block w-fit">
                {eyebrow}
              </span>
              
              <h2 className="c9-section-heading text-[#0c1024] mb-8">
                {title}
              </h2>

              <p className="c9-body !text-[#0c1024]/70 mb-10">
                {description}
              </p>
              
              <div className="mb-12">
                <p className="c9-card-title !text-[20px] sm:!text-[24px] md:!text-[28px] text-[#0c1024]">
                  Call us today: <a href="tel:1800000299" className="text-[#5D00D6] hover:text-[#4c00b0] transition-colors decoration-[#5D00D6]/20 underline underline-offset-8">1800 000 299</a>
                </p>
              </div>

              <div>
                <h3 className="text-[11px] font-bold text-[#0c1024]/60 uppercase tracking-widest mb-4">WHAT HAPPENS AFTER YOU SUBMIT</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { title: '1. A real Australian calls you', body: 'Not a call centre. Not a script. Someone who actually knows IT.', icon: Phone },
                    { title: '2. We review your current gaps', body: 'We show you exactly where your infrastructure is exposed.', icon: Search },
                    { title: '3. You get a clear roadmap', body: 'Plain English. Exact pricing. No lock-in or pressure.', icon: FileText }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] shrink-0 mt-0.5">
                        <step.icon size={15} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0c1024] text-[15px] mb-0.5">{step.title}</h4>
                        <p className="text-[14px] leading-relaxed text-[#0c1024]/70 font-medium">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (The consistent Form Core) */}
          <FadeIn delay={0.2}>
            <ConsultationFormCore formTitle={formTitle} ctaText={ctaText} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
