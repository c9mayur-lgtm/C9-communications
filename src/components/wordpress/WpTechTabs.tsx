'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Phone, Laptop, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const TECH_CATEGORIES = [
  {
    id: 'networking',
    label: 'Networking',
    icon: Network,
    cards: [
      {
        title: 'Enterprise Ethernet',
        desc: 'Dedicated fibre-optic connectivity up to 10Gbps with 99.95% uptime guarantees and priority 4-hour SLA remediation.',
        img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
        href: '/telco/enterprise-ethernet'
      },
      {
        title: 'Managed SD-WAN',
        desc: 'Intelligent multi-site routing leveraging Cisco Meraki. Prioritize critical application traffic automatically over dynamic active-active links.',
        img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        href: '/managed-it/network'
      },
      {
        title: 'High-Density Wi-Fi',
        desc: 'Campus and warehouse scale wireless deployments. Heat-mapped and engineered for zero dead spots and thousands of concurrent clients.',
        img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
        href: '/managed-it/network'
      }
    ]
  },
  {
    id: 'voice',
    label: 'Voice & Unified Comms',
    icon: Phone,
    cards: [
      {
        title: 'C9 phone system Cloud PBX',
        desc: 'Our proprietary hosted PBX offering enterprise call routing, IVR, and seamless failover. Built on ultra-resilient redundant architecture.',
        img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800',
        href: '/telco/voice'
      },
      {
        title: 'Microsoft Teams Calling',
        desc: 'Native PSTN routing directly into Microsoft Teams. Enable your staff to make external calls natively from within the Teams desktop or mobile app.',
        img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
        href: '/managed-it/modern-workplace'
      },
      {
        title: 'SIP Trunking',
        desc: 'High-capacity SIP channels for existing on-premise hardware. Scale your call capacity instantly over dedicated private connections.',
        img: 'https://images.unsplash.com/photo-1544621935-430c5e683344?auto=format&fit=crop&q=80&w=800',
        href: '/telco/sip'
      }
    ]
  },
  {
    id: 'security',
    label: 'Cybersecurity',
    icon: ShieldCheck,
    cards: [
      {
        title: 'SOC-as-a-Service',
        desc: '24/7/365 active threat hunting and managed response. Backed by elite Australian security analysts monitoring your entire edge network.',
        img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
        href: '/managed-it/cybersecurity'
      },
      {
        title: 'Essential Eight Compliance',
        desc: 'Strategic engineering to align your infrastructure with the ACSC Essential Eight mitigation strategies, hardening you against 85% of targeted cyber attacks.',
        img: 'https://images.unsplash.com/photo-1510511459019-5d0197411bc6?auto=format&fit=crop&q=80&w=800',
        href: '/managed-it/cybersecurity'
      },
      {
        title: 'Zero Trust Architecture',
        desc: 'Continuous verification and strict identity access controls. Assume breach protocols ensuring lateral movement is impossible within your network.',
        img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800',
        href: '/managed-it/cybersecurity'
      }
    ]
  }
];

export const WpTechTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-[#fafafc] border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#5D00D6] text-[12px] font-bold uppercase tracking-[0.2em] mb-4 block">ENTERPRISE SOLUTIONS</span>
          <h2 className="c9-section-heading">
            TAP INTO CUSTOMISED, ENTERPRISE-LEVEL TECH
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-[16px] md:text-[18px]">
            We deploy scalable, highly resilient technology stacks designed specifically for high-volume environments and critical operations.
          </p>
        </div>

        {/* Custom Tabs Navigation */}
        <div className="flex border-b border-gray-200 justify-center mb-12 gap-8 md:gap-16">
          {TECH_CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            const isActive = activeTab === i;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(i)}
                className={`relative pb-6 flex flex-col items-center gap-3 transition-colors ${isActive ? 'text-[#0c1024]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <div className={`p-4 rounded-full transition-colors ${isActive ? 'bg-[#5D00D6]/10 text-[#5D00D6]' : 'bg-gray-100'}`}>
                  <Icon size={24} strokeWidth={isActive ? 2 : 1.5} />
                </div>
                <span className={`font-bold text-[14px] md:text-[16px] tracking-wide ${isActive ? 'text-[#5D00D6]' : ''}`}>
                  {cat.label}
                </span>

                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div 
                    layoutId="techTabIndicator"
                    className="absolute bottom-[-1px] left-[-20px] right-[-20px] h-[3px] bg-[#5D00D6]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Cards */}
        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {TECH_CATEGORIES[activeTab].cards.map((card, i) => (
                <div key={i} className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
                  <div className="aspect-[16/9] w-full relative overflow-hidden">
                    <img 
                      src={card.img} 
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-[20px] font-bold text-[#0c1024] mb-3">{card.title}</h3>
                    <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow">
                      {card.desc}
                    </p>
                    <Link 
                      href={card.href}
                      className="inline-flex items-center justify-center w-full py-3.5 bg-[#5D00D6] hover:bg-[#4d00b3] text-white rounded-lg transition-colors h-14 px-8 text-[15px] font-bold"
                    >
                      Find out more
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
