'use client';

import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-white">
        <div className="container mx-auto px-6 max-w-[1240px] relative z-10 text-center">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#5D00D6]/10 text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest mb-8">
              TESTIMONIALS & TRUST
            </span>
            <h1 className="text-[40px] md:text-[64px] font-bold text-[#1A1A2E] leading-tight mb-8">
              Trusted by 5,000+ <br />
              <span className="text-[#5D00D6]">Australian Businesses.</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-12">
                {[1,2,3,4,5].map(i => <Star key={i} size={28} className="fill-[#5D00D6] text-[#5D00D6]" />)}
                <span className="text-2xl font-bold text-[#1A1A2E] ml-4">4.9/5 Google Rating</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-24 bg-slate-50 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The migration to C9 Fibre was seamless. We haven't had a single second of downtime since the cutover, and our cloud apps are significantly faster.",
                author: "James Wilson",
                role: "Operations Director, Retail Group"
              },
              {
                quote: "No overseas call centres makes a massive difference. When I call C9, I speak to someone who actually understands my network and can help immediately.",
                author: "Sarah Chen",
                role: "Founder, Professional Services Firm"
              },
              {
                quote: "Their security expertise is what set them apart. They helped us achieve Essential 8 compliance while staying within a realistic budget.",
                author: "Michael Ross",
                role: "IT Manager, Manufacturing Corp"
              },
              {
                quote: "The symmetrical upload speeds on their Business NBN plans transformed how our design team works with large video files.",
                author: "Emma Thompson",
                role: "Creative Lead, Media Agency"
              },
              {
                quote: "Reliable, professional, and technical. C9 is exactly what a business telco should be. No fluff, just results.",
                author: "David Knight",
                role: "CEO, Tech Startup"
              },
              {
                quote: "Managed to reduce our telecommunications spend by 30% while actually improving our internet speed and office phone system.",
                author: "Lisa Moore",
                role: "Finance Manager, Healthcare Clinic"
              }
            ].map((review, idx) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="mb-6"><Quote size={40} className="text-[#5D00D6] opacity-10" /></div>
                  <p className="text-gray-600 italic text-lg leading-relaxed mb-8 flex-grow">"{review.quote}"</p>
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="font-bold text-[#1A1A2E] text-lg">{review.author}</h4>
                    <p className="text-[#5D00D6] text-sm font-bold uppercase tracking-widest mt-1">{review.role}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-[1240px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                {[
                    { label: 'Uptime Commitment', val: '99.95%' },
                    { label: 'Customer Retention', val: '96%' },
                    { label: 'Support Resolution', val: '< 2hrs' },
                    { label: 'Industry Awards', val: '12+' }
                ].map((m, i) => (
                    <FadeUp key={i} delay={i * 0.05}>
                        <div className="text-[40px] md:text-[52px] font-black text-[#5D00D6] mb-2 tracking-tighter">{m.val}</div>
                        <div className="text-[#1A1A2E] font-bold uppercase tracking-[0.2em] text-[11px]">{m.label}</div>
                    </FadeUp>
                ))}
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <WpConsultationForm
        eyebrow="JOIN OUR SUCCESS STORIES"
        title="Experience the quality of C9 support"
        description="Join thousands of Australian businesses who have upgraded to a more reliable, technical partner."
        formTitle="Speak with Our Team"
      />
    </main>
  );
}
