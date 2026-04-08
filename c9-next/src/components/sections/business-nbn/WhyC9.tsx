'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Zap, ShieldAlert, MonitorCheck, TabletSmartphone } from 'lucide-react';

const reasons = [
  {
    icon: TabletSmartphone,
    title: 'Seamless switching',
    desc: 'With prioritised service on a range of affordable plans, we’ve made it easy to switch your business internet to a reliable high-speed network built for business needs.'
  },
  {
    icon: Network,
    title: 'Direct peering & low latency',
    desc: 'C9 optimizes every route to ensure your traffic hits the global backbone immediately. We don’t just rent a pipe; we engineer the path for the ultimate work-day experience.'
  },
  {
    icon: ShieldAlert,
    title: 'Carrier-grade transparency',
    desc: 'We monitor the C9 Core 24/7 with zero-contention guarantees. We don’t just rent a pipe; we provide real-time visibility into the health of your critical business infrastructure.'
  },
  {
    icon: MonitorCheck,
    title: 'Business-tailored everything',
    desc: 'Regardless of the size of your business or industry, it’s our mission to shape internet and connectivity solutions to fit your needs — backed by locally based engineering pods.'
  }
];

export default function WhyC9() {
  return (
    <section className="w-full bg-[#0c1024] py-24 px-6 md:px-8 overflow-hidden" >
      <div className="container mx-auto max-w-[1240px] text-center">
        
        {/* Dark Header */}
        <div className="flex flex-col items-center mb-20">
           <h2 className="text-[32px] md:text-[46px] font-bold text-white leading-tight">
              Why businesses choose C9
           </h2>
           <div className="w-20 h-1 bg-gradient-to-r from-[#5D00D6] to-[#7C3AED] mt-6 rounded-full" />
        </div>

        {/* Feature 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {reasons.map((r, i) => (
            <motion.div 
               key={i} 
               whileHover={{ y: -5 }}
               className="flex flex-col items-center group text-center lg:text-left"
            >
               <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-[#5D00D6]/20 rounded-full blur-xl group-hover:bg-[#5D00D6]/40 transition-all" />
                  <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 text-white group-hover:scale-110 transition-transform">
                     <r.icon size={32} strokeWidth={1.75} />
                  </div>
               </div>
               <h3 className="text-[20px] font-bold text-white mb-4 tracking-tight leading-tight">{r.title}</h3>
               <p className="text-[14px] text-gray-400 leading-relaxed font-medium">
                  {r.desc}
               </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

