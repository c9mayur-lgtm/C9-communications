'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Download, ShieldCheck } from 'lucide-react';
import { C9Button } from '@/components/design-system/C9Button';
import Link from 'next/link';

const CERTIFICATIONS = [
  {
    name: 'Cisco Certified Network Associate (CCNA)',
    description: 'Enterprise-grade networking expertise',
    logo: '/images/certifications/ccna.svg',
    alt: 'CCNA Certification Logo'
  },
  {
    name: 'Certified Information Systems Auditor (CISA)',
    description: 'Audit-ready security governance',
    logo: '/images/certifications/cisa.svg',
    alt: 'CISA Certification Logo'
  },
  {
    name: 'ITIL® 4 Foundation',
    description: 'Best-practice service delivery',
    logo: '/images/certifications/itil.svg',
    alt: 'ITIL 4 Foundation Certification Logo'
  }
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function CapabilityPack() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="bg-white rounded-none p-8 md:p-12 lg:p-20 shadow-2xl shadow-purple-900/5 border border-slate-100 relative overflow-hidden">
          {/* Decorative Gradient */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#5D00D6]/5 to-transparent rounded-none pointer-events-none" />

          {/* Custom Architecture Content (Moved from EnterpriseOfferings) */}
          <div className="max-w-4xl mx-auto text-center relative z-10 mb-24">
            <FadeIn>
              <span className="c9-eyebrow mb-6">ENTERPRISE RESOURCES</span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-clash leading-tight text-slate-900">
                Complex Environments Require <br/><span className="text-[#5D00D6]">Custom Architecture.</span>
              </h3>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                If your enterprise operates across 50+ locations, maintains strict regulatory compliance, 
                or requires deep integration with legacy industrial systems, our architects will design 
                a bespoke governance model for you.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 mb-12 max-w-2xl mx-auto text-left">
                {[
                  "Multi-site redundancy design",
                  "Regulatory compliance mapping",
                  "Custom incident hierarchies",
                  "Executive operational dashboarding"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#5D00D6]" />
                    <span className="text-[15px] font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <C9Button 
                  size="lg"
                  className="rounded-full shadow-xl shadow-purple-900/20"
                  onClick={() => {
                    document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Schedule Executive Briefing
                </C9Button>
                <C9Button 
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-[#5D00D6] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-all"
                  onClick={() => {
                    window.location.href = '/enterprise/capabilities-guide';
                  }}
                >
                  Download Capabilities Guide
                </C9Button>
              </div>
            </FadeIn>
          </div>

          {/* Certifications Section (Light Theme) */}
          <div className="border-t border-slate-100 pt-20">
            <div className="text-center mb-16">
              <FadeIn>
                <h3 className="c9-section-heading !text-3xl mb-4 text-slate-900">Certified Expertise. Proven Delivery.</h3>
                <p className="c9-body max-w-2xl mx-auto text-slate-600">
                  Backed by globally recognised certifications in networking, cybersecurity, and service operations.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {CERTIFICATIONS.map((cert, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div 
                    className={`
                      flex flex-col items-center text-center p-10 bg-slate-50 border border-slate-200 
                      rounded-none transition-all duration-300 group
                      hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 hover:border-[#5D00D6]/20
                      h-full
                      ${index === 2 ? 'sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none' : ''}
                    `}
                  >
                    {/* Logo Container */}
                    <div className="mb-8 flex items-center justify-center h-16 w-full">
                      <img 
                        src={cert.logo} 
                        alt={cert.alt}
                        className="max-h-full max-w-[160px] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
