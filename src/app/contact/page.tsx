'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '@/components/design-system/Section';
import { H1, H2, H3, Body, Label } from '@/components/design-system/Typography';
import { C9Button } from '@/components/design-system/C9Button';
import { cn } from '@/lib/utils';

const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-24 bg-white">
      
      {/* ── HERO ── */}
      <Section className="text-center" bg="none">
        <FadeIn>
          <Label>Contact Us</Label>
        </FadeIn>
        <FadeIn delay={0.1}>
          <H1 className="mb-6">
            Let's talk about<br />
            <span className="text-[#5D00D6]">your connectivity.</span>
          </H1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Body className="max-w-xl mx-auto">
            Whether you're looking for an audit, a quote, or technical support, our Australian-based team is ready to help.
          </Body>
        </FadeIn>
      </Section>

      <Section bg="white" className="pb-24">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12">
          
          {/* ── FORM ── */}
          <FadeIn delay={0.3}>
            <div className="bg-gray-50/50 border border-gray-100 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
              <H3 className="mb-10 text-3xl tracking-tight">Send us a message</H3>
              
              <form onSubmit={e => e.preventDefault()} className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-3">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-3">Work Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-3">Company Name</label>
                  <input type="text" placeholder="Acme Corp" className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-3">Message</label>
                  <textarea placeholder="How can we help your business?" rows={5} className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all resize-none" />
                </div>
                <div className="sm:col-span-2 mt-4 text-center">
                  <C9Button className="w-full py-5 text-lg">
                    Send Inquiry <Send size={18} className="ml-2" />
                  </C9Button>
                  <p className="text-gray-400 text-sm mt-6 font-medium">
                    We typically respond to business inquiries within 2 business hours.
                  </p>
                </div>
              </form>
            </div>
          </FadeIn>

          {/* ── INFO ── */}
          <div className="space-y-6">
            <FadeIn delay={0.4}>
              <div className="bg-[#F4F0FA]/50 border border-[#5D00D6]/5 rounded-2xl p-8 hover:border-[#5D00D6]/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors shadow-sm">
                  <Phone size={22} />
                </div>
                <H3 className="text-xl mb-2">Call Support</H3>
                <Body className="text-sm mb-4">Available 24/7 for critical faults.</Body>
                <a href="tel:1800000299" className="text-xl font-black text-[#5D00D6] hover:underline tracking-tight">1800 000 299</a>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-[#F4F0FA]/50 border border-[#5D00D6]/5 rounded-2xl p-8 hover:border-[#5D00D6]/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors shadow-sm">
                  <Mail size={22} />
                </div>
                <H3 className="text-xl mb-2">Email Us</H3>
                <Body className="text-sm mb-4">For general sales and quotes.</Body>
                <a href="mailto:hello@c9communications.com.au" className="text-[17px] font-black text-[#5D00D6] hover:underline tracking-tight">hello@c9comms.com.au</a>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="bg-[#F4F0FA]/50 border border-[#5D00D6]/5 rounded-2xl p-8 hover:border-[#5D00D6]/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors shadow-sm">
                  <MapPin size={22} />
                </div>
                <H3 className="text-xl mb-2">Headquarters</H3>
                <Body className="text-sm leading-relaxed">
                  Level 32, 101 Miller Street<br />
                  North Sydney, NSW 2060
                </Body>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ── QUICK LINKS ── */}
      <Section className="pb-32" bg="gray">
        <div className="text-center mb-16">
          <H2 className="text-3xl">Quick Support</H2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
           {[
             { icon: MessageSquare, title: "Live Chat", text: "Talk to an engineer instantly via our portal." },
             { icon: Clock, title: "Support Times", text: "Phone support is live 24/7/365 for critical issues." },
             { icon: Zap, title: "Service Status", text: "Check up-to-the-minute status of our core networks." }
           ].map((item, i) => (
             <FadeIn key={i} delay={i * 0.1}>
               <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#5D00D6]/20 transition-all text-center group">
                 <div className="text-[#5D00D6] mb-4 flex justify-center group-hover:scale-110 transition-transform"><item.icon size={32} strokeWidth={1.5} /></div>
                 <h5 className="text-[#0c1024] font-bold text-lg mb-2">{item.title}</h5>
                 <Body className="text-sm">{item.text}</Body>
               </div>
             </FadeIn>
           ))}
        </div>
      </Section>
    </div>
  );
}
