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
}

export const WpConsultationForm = ({ 
  eyebrow = "STRATEGIC IT ADVISORY",
  title = "The IT partner your business deserves.",
  description = "Book a 30-minute strategy session with our senior consultants. We'll review your current infrastructure and security posture — no obligation, just expert advice.",
  formTitle = "Schedule Strategy Session"
}: WpConsultationFormProps) => {
  return (
    <section 
      id="consultation-section" 
      className="bg-[#E4E0FD] py-12 md:py-20 overflow-hidden" 
    >
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          
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
                <p className="c9-card-title !text-[24px] md:!text-[28px] text-[#0c1024]">
                  Call us today: <a href="tel:1800000299" className="text-[#5D00D6] hover:text-[#4c00b0] transition-colors decoration-[#5D00D6]/20 underline underline-offset-8">1800 000 299</a>
                </p>
              </div>

              <div>
                <h3 className="c9-eyebrow !text-[11px] mb-6">WHAT HAPPENS AFTER YOU SUBMIT</h3>
                <div className="flex flex-col gap-6">
                  {[
                    { title: '1. A real Australian calls you', body: 'Not a call centre. Not a script. Someone who actually knows IT.', icon: Phone },
                    { title: '2. We review your current gaps', body: 'We show you exactly where your infrastructure is exposed.', icon: Search },
                    { title: '3. You get a clear roadmap', body: 'Plain English. Exact pricing. No lock-in or pressure.', icon: FileText }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[#D6CEFD] flex items-center justify-center text-[#5D00D6] shrink-0">
                        <step.icon size={18} />
                      </div>
                      <div className="pt-0.5">
                        <h4 className="c9-eyebrow !text-[#0c1024] !text-[11px] mb-1">{step.title}</h4>
                        <p className="c9-body !text-[14px] !leading-relaxed !text-[#0c1024]/60">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (The consistent Form Core) */}
          <FadeIn delay={0.2}>
            <ConsultationFormCore formTitle={formTitle} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
