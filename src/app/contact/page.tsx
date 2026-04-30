'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight, Zap, Shield, BarChart3, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '@/components/design-system/Section';
import { H1, H2, H3, Body, Label } from '@/components/design-system/Typography';
import { C9Button } from '@/components/design-system/C9Button';
import CapabilityPack from '@/components/sections/enterprise/CapabilityPack';
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

const ConversionOption = ({ 
  icon: Icon, 
  title, 
  description, 
  isSelected, 
  onClick 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  isSelected: boolean; 
  onClick: () => void;
}) => (
  <div 
    onClick={onClick}
    className={cn(
      "cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-start gap-4 h-full",
      isSelected 
        ? "border-[#5D00D6] bg-[#5D00D6]/5 shadow-lg shadow-purple-900/5" 
        : "border-gray-100 bg-white hover:border-gray-200"
    )}
  >
    <div className={cn(
      "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
      isSelected ? "bg-[#5D00D6] text-white" : "bg-gray-50 text-gray-400 group-hover:text-gray-600"
    )}>
      <Icon size={20} />
    </div>
    <div>
      <h4 className={cn("font-bold text-sm mb-1 uppercase tracking-wider", isSelected ? "text-[#5D00D6]" : "text-gray-900")}>
        {title}
      </h4>
      <p className="text-xs text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default function ContactPage() {
  const [selectedPath, setSelectedPath] = useState<'consultation' | 'sla' | 'assessment'>('consultation');

  const paths = [
    {
      id: 'consultation',
      icon: Calendar,
      title: 'Book a 30-min consultation',
      description: 'Discuss your multi-site environment with a senior infrastructure architect.',
      buttonText: 'Book My Consultation'
    },
    {
      id: 'sla',
      icon: Shield,
      title: 'Request SLA & Capability Pack',
      description: 'Review our operational standards, response guarantees, and enterprise benchmarks.',
      buttonText: 'Request Capability Pack'
    },
    {
      id: 'assessment',
      icon: BarChart3,
      title: 'Get a Network Assessment',
      description: 'Identify fragmentation risk, vendor gaps, and latency exposure across your sites.',
      buttonText: 'Get Network Assessment'
    }
  ];

  const currentPath = paths.find(p => p.id === selectedPath)!;

  return (
    <div className="pt-16 md:pt-24 bg-white">
      
      {/* ── HERO ── */}
      <Section className="text-center pb-12" bg="none">
        <FadeIn>
          <Label>Enterprise Intake</Label>
        </FadeIn>
        <FadeIn delay={0.1}>
          <H1 className="mb-6">
            Secure Your <span className="text-[#5D00D6]">Operational Future.</span>
          </H1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Body className="max-w-xl mx-auto">
            Choose your engagement path. Whether you need immediate technical insights or operational proof, we provide direct access to our infrastructure engineering team.
          </Body>
        </FadeIn>
      </Section>

      <Section bg="white" className="pb-16 md:pb-24 pt-0">
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 md:gap-12">
          
          {/* ── CONVERSION ENGINE ── */}
          <div className="space-y-12">
            {/* Path Selection */}
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {paths.map((path) => (
                  <ConversionOption 
                    key={path.id}
                    icon={path.icon}
                    title={path.title}
                    description={path.description}
                    isSelected={selectedPath === path.id}
                    onClick={() => setSelectedPath(path.id as any)}
                  />
                ))}
              </div>
            </FadeIn>

            {/* FORM ── */}
            <FadeIn delay={0.4}>
              <div className="bg-gray-50/50 border border-gray-100 rounded-[32px] p-6 md:p-12 relative overflow-hidden shadow-sm">
                <div className="flex items-center gap-4 mb-8 md:mb-10">
                  <div className="w-1.5 h-8 bg-[#5D00D6] rounded-full" />
                  <H3 className="text-2xl md:text-3xl tracking-tight">Requirement Details</H3>
                </div>
                
                <form onSubmit={e => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-3">Full Name</label>
                    <input type="text" placeholder="Your name" className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-3">Work Email</label>
                    <input type="email" placeholder="you@company.com.au" className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-3">Organisation Name</label>
                    <input type="text" placeholder="Company or business name" className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-3">
                      {selectedPath === 'sla' ? 'Infrastructure Footprint' : 'Current Environment & Pain Points'}
                    </label>
                    <textarea 
                      placeholder={
                        selectedPath === 'sla' 
                          ? "Briefly describe your site count and current network requirements so we can tailor the SLA documentation to your scale."
                          : "Briefly describe your setup — number of sites, vendors you manage, and what you'd like assessed."
                      }
                      rows={4} 
                      className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#5D00D6]/20 focus:border-[#5D00D6] transition-all resize-none" 
                    />
                  </div>
                  <div className="sm:col-span-2 mt-4">
                    <C9Button className="w-full py-5 text-lg shadow-lg shadow-purple-900/10">
                      {currentPath.buttonText} <ArrowRight size={18} className="ml-2" />
                    </C9Button>
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 mt-8 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-1.5 whitespace-nowrap"><Shield size={12} className="text-[#5D00D6]" /> Senior Engineer Review</span>
                      <span className="flex items-center gap-1.5 whitespace-nowrap"><Clock size={12} className="text-[#5D00D6]" /> 2-Hour Response</span>
                      <span className="flex items-center gap-1.5 whitespace-nowrap"><Zap size={12} className="text-[#5D00D6]" /> No Sales Fluff</span>
                    </div>
                  </div>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* ── INFO ── */}
          <div className="space-y-6">
            <FadeIn delay={0.5}>
              <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-8 hover:border-[#5D00D6]/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors shadow-sm">
                  <Phone size={22} />
                </div>
                <H3 className="text-xl mb-2">Speak Directly</H3>
                <Body className="text-sm mb-4">Critical fault or urgent escalation? Our team answers 24/7.</Body>
                <a href="tel:1800000299" className="text-xl font-black text-[#5D00D6] hover:underline tracking-tight">1800 000 299</a>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-8 hover:border-[#5D00D6]/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors shadow-sm">
                  <Mail size={22} />
                </div>
                <H3 className="text-xl mb-2">Email Intake</H3>
                <Body className="text-sm mb-4">Send requirements directly to our infrastructure team.</Body>
                <a href="mailto:hello@c9communications.com.au" className="text-[17px] font-black text-[#5D00D6] hover:underline tracking-tight">hello@c9comms.com.au</a>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-8 hover:border-[#5D00D6]/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors shadow-sm">
                  <MapPin size={22} />
                </div>
                <H3 className="text-xl mb-2">Headquarters</H3>
                <Body className="text-sm leading-relaxed text-gray-500">
                  Level 32, 101 Miller Street<br />
                  North Sydney, NSW 2060
                </Body>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <Section className="pb-32 bg-gray-50/50 border-t border-gray-100">
        <div className="text-center mb-16">
          <Label className="mb-4">Engagement Protocol</Label>
          <H2 className="text-3xl">What Happens After You Submit</H2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
           {[
             { icon: MessageSquare, title: "Engineer Review", text: "A senior infrastructure engineer reviews your requirements against known risk patterns in your sector." },
             { icon: Clock, title: "Direct Contact", text: "We respond within 2 business hours to confirm receipt and schedule your selected engagement path." },
             { icon: Zap, title: "Actionable Output", text: "Whether it's a capability pack, assessment report, or consultation, you receive technical documentation with no fluff." }
           ].map((item, i) => (
             <FadeIn key={i} delay={i * 0.1}>
               <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#5D00D6]/20 transition-all text-center group">
                 <div className="text-[#5D00D6] mb-4 flex justify-center group-hover:scale-110 transition-transform"><item.icon size={32} strokeWidth={1.5} /></div>
                 <h5 className="text-[#0c1024] font-bold text-lg mb-2">{item.title}</h5>
                 <Body className="text-sm text-gray-500">{item.text}</Body>
               </div>
             </FadeIn>
           ))}
        </div>
      </Section>

      {/* ── ENTERPRISE RESOURCES ── */}
      <CapabilityPack />
    </div>
  );
}
