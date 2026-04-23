'use client';

import React from 'react';
import { ArrowRight, Route, Cable, BarChart3, MessageSquare, Headphones, ShieldCheck } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

const inclusions = [
  { title: "Advanced Call Routing", desc: "Intelligent skills-based, time-of-day, and caller-ID routing ensures every customer is instantly connected to the best available agent. Cut wait times and improve first-call resolution.", icon: Route },
  { title: "Native CRM Integration", desc: "Out-of-the-box integration with Salesforce, Zendesk, Microsoft Dynamics, Hubspot, and more. Screen-pops and automated call logging give your agents full context before they say hello.", icon: Cable },
  { title: "Real-time Analytics", desc: "Live wallboards, historical reporting, and sentiment analysis. Monitor agent performance, queue wait times, and SLA breaches in real-time so managers can intervene before customers complain.", icon: BarChart3 },
  { title: "Omni Channel Unified", desc: "Voice, email, web chat, SMS, and social media all queue into the same interface. Agents don't need to switch screens to handle different interactions, providing a truly unified customer journey.", icon: MessageSquare },
  { title: "AI-Powered Co-pilot", desc: "Equip your supervisors with AI that transcribes calls in real-time, suggests responses to agents, and automatically flags calls where the customer's sentiment turns negative.", icon: Headphones },
  { title: "PCI-DSS Call Recording", desc: "Secure, encrypted call recording that automatically pauses and resumes when credit card details are spoken. Remain compliant while keeping a permanent record for training and disputes.", icon: ShieldCheck }
];

export default function ContactCentreFeatures() {
  const { setInquiryMessage } = useInquiry();

  const handleGetStarted = () => {
    setInquiryMessage("I'm interested in the Omni Channel Contact Centre solutions from C9.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-14 md:py-16 overflow-hidden" >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0c1024] via-[#1A1A2E] to-white z-0" />

      <div className="container mx-auto px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col mb-16 gap-4">
          <span className="text-white text-[14px] font-bold uppercase tracking-[0.25em] mb-4 block">WHAT'S INCLUDED</span>
          <h2 className="c9-section-heading !text-white">
            Everything your team needs<br />to deliver world-class service.
          </h2>
          <p className="text-white/85 text-[18px] md:text-[20px] max-w-[720px] leading-relaxed mt-2 font-medium">
            Every C9 Contact Centre deployment is fully managed out of the box — packing enterprise-grade features into an easy-to-use platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((item, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-none shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all group flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100">
              <div className="mb-6">
                <item.icon size={40} className="text-[#5D00D6]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[22px] font-bold mb-3 text-[#0c1024] tracking-tight leading-tight">{item.title}</h3>
              <p className="text-gray-600 text-[16px] md:text-[17px] mb-6 leading-relaxed flex-grow font-normal group-hover:text-[#1A1A2E] transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button 
            onClick={handleGetStarted}
            className="inline-flex items-center justify-center gap-2 shadow-2xl hover:gap-4 transition-all group bg-[#5D00D6] text-white rounded-full h-14 px-10 text-base font-bold"
          >
            Get Started Now <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

