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
      className="bg-[#E4E0FD] py-20 md:py-28 overflow-hidden" 
      style={{ fontFamily: '"Proxima Nova", sans-serif' }}
    >
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          
          {/* Left Column (Content) */}
          <div className="max-w-[580px]">
            <FadeIn>
              <div className="inline-block bg-[#0c1024] text-white px-4 py-1.5 rounded-lg text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
                {eyebrow}
              </div>
              
              <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#0c1024] leading-[1.05] mb-8 tracking-tight">
                {title}
              </h2>

              <p className="text-[16px] md:text-[18px] text-[#0c1024]/70 leading-relaxed mb-10 font-normal">
                {description}
              </p>
              
              <div className="mb-12">
                <p className="font-bold text-[#0c1024] text-[24px] md:text-[28px] tracking-tight">
                  Call us today: <a href="tel:1800000299" className="text-[#5D00D6] hover:text-[#4c00b0] transition-colors decoration-[#5D00D6]/20 underline underline-offset-8">1800 000 299</a>
                </p>
              </div>

              <div>
                <h3 className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-[0.2em] mb-6">WHAT HAPPENS AFTER YOU SUBMIT</h3>
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
                        <h4 className="text-[15px] font-bold text-[#0c1024] mb-1 uppercase tracking-tight">{step.title}</h4>
                        <p className="text-[14px] font-normal text-[#0c1024]/60 leading-relaxed">{step.body}</p>
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
