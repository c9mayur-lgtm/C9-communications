'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, ShieldCheck, ShieldPlus, ChevronDown, Wifi, ArrowRight } from 'lucide-react';

const supportValues = [
  {
    title: 'Australian-based support',
    desc: 'Talk directly to our local nbn experts in Perth and Melbourne. No call centres, no scripted answers — just engineers who know your setup.',
    icon: ShieldCheck,
    tag: 'LOCAL EXPERTS'
  },
  {
    title: 'Fast response times',
    desc: 'When an issue occurs, we prioritize business-grade resolution. We handle the coordination with nbn co to get you back online as fast as possible.',
    icon: ShieldPlus,
    tag: 'PRIORITY CARE'
  },
  {
    title: 'One point of contact',
    desc: 'Stop being bounced between departments. You get a direct point of contact who owns your issue from the first call to the final fix.',
    icon: Shield,
    tag: 'ACCOUNTABILITY'
  },
  {
    title: 'Ongoing monitoring',
    desc: 'We don’t wait for you to call us. We proactively monitor your connection stability and line sync to identify problems before they affect your work.',
    icon: Wifi,
    tag: 'PROACTIVE MONITOR'
  }
];

export default function SupportTiers() {
  return (
    <section className="w-full bg-[#F8F7FF] py-20 px-6 md:px-8 border-y border-gray-100" >
      <div className="container mx-auto max-w-[1240px]">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
               <span className="text-[11px] uppercase tracking-[0.2em] text-[#5D00D6] font-bold block mb-4">Service & Support</span>
               <h2 className="c9-section-heading">
                 Support that actually <br className="hidden md:block" /> supports your business.
               </h2>
            </div>
            <p className="text-[17px] text-[#6B7280] max-w-[500px] leading-relaxed italic">
              No call centres. Just Australian-based nbn experts who provide a single point of contact and proactive monitoring for your connection.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportValues.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col p-10 rounded-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 group"
            >
              <div className="mb-8 self-start">
                <span className="px-3 py-1 rounded-full bg-[#5D00D6]/5 border border-[#5D00D6]/10 text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest">
                  {v.tag}
                </span>
              </div>
              <div className="mb-8">
                <v.icon size={40} strokeWidth={1.5} className="text-[#5D00D6]" />
              </div>
              <h3 className="text-[20px] font-bold text-[#1A1A2E] mb-4 tracking-tight leading-tight">{v.title}</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
