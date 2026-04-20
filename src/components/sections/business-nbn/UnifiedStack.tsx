'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Smartphone, ShieldCheck, ArrowRight, Zap, Network, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const stackItems = [
  {
    icon: PhoneCall,
    title: 'Business Phones',
    subtitle: 'Phones & Teams',
    desc: 'Run your business phone system or Microsoft Teams calling over your reliable nbn backbone for crystal-clear voice quality.',
    link: '/voice/microsoft-teams-calling',
    label: 'Explore Business Phones'
  },
  {
    icon: Zap,
    title: 'Managed IT Services',
    subtitle: 'IT Support & Management',
    desc: 'Beyond internet, we can handle your entire IT environment — from user support to secure cloud migrations.',
    link: '/managed-it/network-solutions',
    label: 'See Managed IT Services'
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Solutions',
    subtitle: 'Protection & Security',
    desc: 'Secure your business with managed firewalls, multi-site VPNs, and proactive threat monitoring layer on your connection.',
    link: '/managed-it/network-solutions', // Assuming common link for now or generic cybersecurity path if exists
    label: 'View Cybersecurity Solutions'
  }
];

export default function UnifiedStack() {
  return (
    <section className="w-full bg-[#F8F7FF] py-24 px-6 md:px-8 border-y border-gray-100" >
      <div className="container mx-auto max-w-[1240px]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
           <div className="max-w-2xl">
              <span className="c9-eyebrow mb-4 block">C9 Small Business nbn STACK</span>
              <h2 className="c9-section-heading !text-[32px] md:!text-[42px]">
                 What this means <br className="hidden md:block" /> for your business.
              </h2>
           </div>
           <p className="c9-body max-w-[420px] font-medium leading-relaxed">
              A reliable Small Business nbn connection is the foundation. It means stable calls, faster access to cloud apps, and a team that stays productive without interruptions.
           </p>
        </div>

        {/* 3-Column Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {stackItems.map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-white rounded-[32px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col group hover:shadow-xl transition-all h-full"
             >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-2xl bg-[#F8F7FF] text-[#5D00D6] flex items-center justify-center mb-8 border border-[#5D00D6]/5 group-hover:scale-110 group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
                   <item.icon size={32} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <span className="c9-eyebrow !text-[#5D00D6] !text-[10px] mb-2 block">{item.subtitle}</span>
                <h3 className="c9-card-title mb-4 group-hover:text-[#5D00D6] transition-colors">{item.title}</h3>
                <p className="c9-body mb-10 flex-1">
                   {item.desc}
                </p>

                {/* Link */}
                <Link 
                  href={item.link} 
                  className="inline-flex items-center gap-2 c9-eyebrow group/link hover:gap-4 transition-all"
                >
                   {item.label} <ArrowRight size={18} className="text-[#5D00D6] group-hover/link:translate-x-1" />
                </Link>
             </motion.div>
           ))}
        </div>

        {/* Interactive Banner footer */}
        <div className="mt-16 bg-[#1A1A2E] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
           {/* Decorative Background Pulsing Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5D00D6]/10 blur-[120px] rounded-full group-hover:bg-[#5D00D6]/20 transition-all pointer-events-none" />
           
           <div className="relative z-10 text-center md:text-left flex-1 max-w-2xl">
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="c9-eyebrow">Unified Network Live</span>
              </div>
              <h3 className="c9-section-heading !text-white !text-[26px] md:!text-[32px] mb-3">
                 Looking for a multi-site solution?
              </h3>
              <p className="c9-body !text-gray-400 leading-relaxed">
                 We specialise in connecting complex multi-site organisations via private IP networks, MPLS, or SD-WAN fabric. Talk to our engineering team about a custom-scoped enterprise network.
              </p>
           </div>

           <div className="relative z-10">
              <Link href="/contact" className="h-[60px] px-10 rounded-full bg-[#5D00D6] hover:bg-[#4c00b0] text-white font-bold flex items-center justify-center transition-all shadow-xl shadow-purple-900/30">
                 Request Engineering Consult
              </Link>
           </div>
        </div>

      </div>
    </section>
  );
}

