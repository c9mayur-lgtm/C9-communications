'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Router, Smartphone, UserCheck, Zap, Award, BarChart2, Activity, ShieldCheck, Timer } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

const inclusions = [
  {
    icon: Router,
    title: 'Managed Enterprise Router',
    desc: 'C9 supplies and manages a high-throughput business-grade router with every Enterprise Ethernet connection. Native firewalling and advanced security configurations are standard.',
  },
  {
    icon: Smartphone,
    title: '4G LTE Automatic Failover',
    desc: 'Keep your business online during primary link incidents. Our redundant 4G backup pathing activates instantly and automatically, ensuring zero-handoff connectivity.',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Account Advisor',
    desc: 'A named enterprise advisor who understands your multi-site architecture and connection requirements. No scripts, no call centres — just direct senior support.',
  },
  {
    icon: ShieldCheck,
    title: 'Low or High CoS Options',
    desc: 'Choose between Best Effort (Low CoS) for standard enterprise use, or 100% committed guaranteed bandwidth (High CoS via TC-2) for high-impact mission critical operations.',
  },
  {
    icon: Timer,
    title: 'Up to 4-hour Enhanced SLA',
    desc: 'Backed by the fastest restoration commitment on the nbn™ network. Choose from 4, 8, or 12-hour eSLA targets to ensure your organisation is back online within hours.',
  },
  {
    icon: BarChart2,
    title: 'Monthly Performance Insights',
    desc: 'Comprehensive monthly reporting on your bandwidth consumption, route health, and SLA achievement metrics. Visibility that keeps your technical team informed.',
  }
];

export default function Features() {
  const { setInquiryMessage } = useInquiry();

  const handleGetStarted = () => {
    setInquiryMessage("I'm interested in the nbn™ Enterprise Ethernet solutions from C9.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Full-width purple-to-white gradient matches homepage */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#2D1EB8] to-white z-0" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col mb-16 gap-4">
          <span className="text-white text-[14px] font-bold uppercase tracking-[0.25em] mb-4 block">WHAT'S INCLUDED</span>
          <h2 className="c9-section-heading !text-white max-w-[1000px]">
             Engineering your scale with more than just <span className="text-white/60">an internet connection.</span>
          </h2>
          <p className="text-white/85 text-[18px] md:text-[20px] max-w-[800px] leading-relaxed mt-4 font-medium">
            C9 Enterprise Ethernet builds reliability directly into the contract. We include enterprise-grade hardware, redundant pathing, and senior technical accountability as standard features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((item, i) => (
            <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100"
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <item.icon size={44} className="text-[#5D00D6]" strokeWidth={1.2} />
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-bold mb-3 text-[#0c1024] tracking-tight leading-tight">{item.title}</h3>
              
              {/* Description */}
              <p className="text-gray-600 text-[17px] leading-relaxed font-normal">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button 
            onClick={handleGetStarted}
            className="inline-flex items-center justify-center gap-3 shadow-[0_20px_50px_-15px_rgba(93,0,214,0.4)] hover:gap-5 transition-all bg-[#5D00D6] text-white rounded-full h-14 px-8 text-[15px] font-bold"
          >
            Start Site Qualification 
          </button>
        </div>
      </div>
    </section>
  );
}
