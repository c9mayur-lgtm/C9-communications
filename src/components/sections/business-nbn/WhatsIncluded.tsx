'use client';

import React from 'react';
import { Router, Smartphone, UserCheck, Zap, Award, BarChart2 } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

const inclusions = [
  {
    icon: Router,
    title: 'Managed Router',
    desc: 'C9 supplies and manages a business-grade router with your nbn connection. Next-generation firewall and security features built in — ask us about a SD-WAN solution to extend this further.',
    tags: ['Next-Gen Firewall', 'Hardware Included', 'Managed Support'],
    link: { label: 'Ask about SD-WAN', href: '/managed-it/network-solutions' }
  },
  {
    icon: Smartphone,
    title: '4G LTE Failover',
    desc: 'In the rare event your nbn service experiences an outage, 4G LTE failover activates automatically — keeping your business online without any manual intervention required. No downtime. No disruption.',
    tags: ['Auto-Failover', '4G LTE Backup', 'Uptime Guarantee'],
    link: null
  },
  {
    icon: UserCheck,
    title: 'Dedicated Account Manager',
    desc: 'A named account manager who knows your connection, your environment, and your business. One person to call — not a call centre. Your account manager manages all fault lodgement, escalation, and billing queries.',
    tags: ['Named Contact', 'Direct Access', 'No Call Centres'],
    link: null
  },
  {
    icon: Zap,
    title: 'End-to-End Fibre to Site',
    desc: 'High bandwidth reserved and guaranteed through full end-to-end Small Business nbn fibre direct to your site. Lightning-fast connectivity supporting your internet, telephony, and bandwidth-intensive applications.',
    tags: ['Symmetrical Speeds', 'Reserved Bandwidth', 'Dedicated Fibre'],
    link: null
  },
  {
    icon: Award,
    title: 'nbn Accredited Support',
    desc: 'C9 is an nbn Accredited Business Adviser — meaning our team is certified to design, quote, and manage Small Business nbn connections. You\'re not dealing with a reseller. You\'re dealing with an accredited partner.',
    tags: ['Accredited Partner', 'Expert Design', 'nbn Certified'],
    link: null
  },
  {
    icon: BarChart2,
    title: 'Monthly Reporting',
    desc: 'Monthly usage and connection reporting delivered to your team. Visibility over your bandwidth consumption, connection health, and any incidents from the previous month.',
    tags: ['Usage Insights', 'Health Reports', 'SLA Tracking'],
    link: null
  }
];

export default function WhatsIncluded() {
  const { setInquiryMessage } = useInquiry();

  const handleGetStarted = () => {
    setInquiryMessage("I'm interested in the Small Business nbn solutions from C9.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-14 md:py-16 overflow-hidden" >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#7D38E2] to-white z-0" />

      <div className="container mx-auto px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col mb-16 gap-4">
          <span className="text-white text-[14px] font-bold uppercase tracking-[0.25em] mb-4 block">WHAT'S INCLUDED</span>
          <h2 className="c9-section-heading !text-white">
            More than just an<br />internet connection.
          </h2>
          <p className="text-white/85 text-[18px] md:text-[20px] max-w-[720px] leading-relaxed mt-2 font-medium">
            Every C9 Small Business nbn plan includes infrastructure, support, and management that most ISPs charge extra for — or simply don't offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((item, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100">
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
            className="inline-flex items-center justify-center gap-2 shadow-2xl hover:gap-4 transition-all bg-[#5D00D6] text-white rounded-full h-14 px-8 text-[15px] font-bold"
          >
            Get Started Now 
          </button>
        </div>
      </div>
    </section>
  );
}

