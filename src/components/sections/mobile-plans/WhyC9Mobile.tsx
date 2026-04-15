'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Share2, FileCheck, Shield, Headphones, Globe, MessageSquare } from 'lucide-react';

const cards = [
  {
    icon: Share2,
    title: 'No nasty surprises — shared data pool',
    desc: 'All employees share your data and voice volumes through a single pooled data allowance — reducing waste and eliminating individual overage charges. One user uses less, another uses more, with zero penalty.',
    tags: ['Pooled Allowance', 'No Overage', 'Fleet Ready'],
  },
  {
    icon: FileCheck,
    title: 'Streamlined and simplified — one bill',
    desc: 'Take control of your mobile expenses with a single plan covering your entire fleet — less admin, less invoice reconciliation, and all services presented on one clearly itemised monthly bill.',
    tags: ['One Invoice', 'Less Admin', 'Audit Ready'],
  },
  {
    icon: Shield,
    title: 'Enterprise Security & MDM Ready',
    desc: 'Fully compatible with Microsoft Intune and standard MDM platforms. Push security policies, remote wipe lost devices, and manage your entire mobile fleet security from a single console.',
    tags: ['Intune Ready', 'Remote Wipe', 'Policy Control'],
  },
  {
    icon: Headphones,
    title: 'Onshore 24/7 Fleet Support',
    desc: 'Direct access to our Australian-based support team. No offshore call centres, no scripts — just expert mobile technicians who understand the urgency of business connectivity.',
    tags: ['Onshore Support', 'Tier 1 Access', '24/7 Available'],
  },
  {
    icon: Globe,
    title: 'Global Roaming & Connectivity',
    desc: 'Stay connected in 100+ countries with flexible daily roaming packs. High-speed 4G/5G data and unlimited standard calls even when your team is working overseas.',
    tags: ['100+ Countries', 'Daily Packs', '5G Roaming'],
  },
  {
    icon: MessageSquare,
    title: 'Unlimited National Fleet Calls',
    desc: 'Unlimited standard national calls, mobile calls, 1300, 13, and 1800 numbers plus unlimited national SMS and MMS on every single fleet service. Communicate without limits.',
    tags: ['Unlimited SMS', 'No Call Caps', '1300 Included'],
  },
];

export default function WhyC9Mobile() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden" >
      {/* Full-width purple-to-white gradient to match homepage WpSolutions */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#946CE2] to-[#FAFAFA] z-0" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col mb-12 gap-4">
          <span className="text-white text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">WHY C9 MOBILE</span>
          <h2 className="c9-section-heading !text-white">
            Keeping Australian businesses <br />connected — your way.
          </h2>
          <p className="text-white/85 text-[18px] md:text-[20px] max-w-[800px] leading-relaxed mt-2 font-medium">
             C9 keeps your business mobile fleet connected with flexible shared plans, Tier 1 Optus network coverage, and Australian-based support that actually answers the phone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-none shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all group flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100"
            >
              {/* Icon */}
              <div className="mb-8">
                <s.icon size={40} className="text-[#5D00D6]" strokeWidth={1.2} />
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-bold mb-4 text-[#1A1A2E] tracking-tight leading-tight transition-colors group-hover:text-[#5D00D6]">{s.title}</h3>

              {/* Description */}
              <p className="text-[#6B7280] text-[16px] leading-relaxed flex-grow font-medium">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

