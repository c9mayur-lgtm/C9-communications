'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Scaling as ScaleIcon, Building2, Share2, MessageSquare, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useInquiry } from '@/components/context/InquiryContext';

const items = [
  {
    title: "Unified Communications",
    body: "Ultimate efficiency in business communications — voice, video, messaging, and collaboration unified in a single cloud-based platform your staff can access from any device, anywhere.",
    icon: Share2
  },
  {
    title: "Highly Scalable",
    body: "Scale up or down as your business grows. Add lines, connect new sites, and expand features without new hardware or costly infrastructure upgrades. Make calls directly through your CRM.",
    icon: ScaleIcon
  },
  {
    title: "Connect Multiple Sites",
    body: "Easily connect multiple offices and locations to one single C9 Voice cloud-based phone system — consistent features, one management interface, one provider.",
    icon: Building2
  },
  {
    title: "Infinite CRM Integration",
    body: "C9 Voice integrates with Salesforce, ZOHO, MS Dynamics, SugarCRM, Zendesk, Bullhorn, vTiger, Pipedrive, and SuiteCRM via REST or SOAP API. Integrates with any CRM through the C9 Voice SDK.",
    icon: Network
  },
  {
    title: "Microsoft Teams Direct Routing",
    body: "C9 Voice enables direct Microsoft Teams calling — adding high-quality PSTN calling to and from the public telephone network directly from your Teams application.",
    icon: MessageSquare,
    link: { label: "Learn about Teams Calling", href: "/telco/teams-calling" }
  },
  {
    title: "No Upfront Fees",
    body: "Gain access to over 80 standard, high-calibre features to customise your own C9 Voice cloud-based system — with absolutely no upfront fees and no on-site hardware to purchase.",
    icon: Zap
  }
];

export const C9PhoneSystemAdvantage = () => {
  const { setInquiryMessage } = useInquiry();

  const handleGetStarted = () => {
    setInquiryMessage("I'm interested in the C9 Voice cloud phone system.");
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#7D38E2] to-white z-0" />
      
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="c9-eyebrow !text-white mb-4 block"
          >
            WHAT'S INCLUDED
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="c9-section-heading !text-white mb-6 max-w-3xl"
          >
            Everything a modern business<br className="hidden md:block" /> phone system should be.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="c9-body !text-white/80 max-w-2xl"
          >
            Every C9 Voice plan includes infrastructure and management that most providers charge extra for.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.05 }}
               className="bg-white p-7 md:p-10 rounded-none shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all flex flex-col group border border-transparent hover:border-gray-100"
            >
               <div className="mb-8">
                  <item.icon size={44} className="text-[#5D00D6]" strokeWidth={1.2} />
               </div>

               <h3 className="c9-card-title text-[#0c1024] mb-3 group-hover:text-[#5D00D6] transition-colors">{item.title}</h3>
               <p className="c9-body mb-6 flex-grow">
                 {item.body}
               </p>

               {item.link && (
                 <Link 
                   href={item.link.href} 
                   className="inline-flex items-center gap-2 text-[#5D00D6] c9-eyebrow !text-[10px] hover:gap-3 transition-all"
                 >
                   {item.link.label} <ArrowRight size={14} />
                 </Link>
               )}
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={handleGetStarted}
            className="group inline-flex items-center justify-center gap-2 bg-white text-[#5D00D6] rounded-full h-14 px-10 text-[14px] font-medium shadow-xl hover:shadow-2xl hover:bg-slate-50 transition-all duration-300 active:scale-95"
          >
            Upgrade Your Phone System <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
