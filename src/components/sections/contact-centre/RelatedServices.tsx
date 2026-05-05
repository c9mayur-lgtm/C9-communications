'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Headset, Wifi } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "C9 phone system Cloud Phone System",
    description: "The voice engine powering your contact centre.",
    linkText: "View C9 phone system",
    href: "/telco/phone-system",
    icon: Phone
  },
  {
    title: "Inbound Services",
    description: "1300 and 1800 numbers with smart routing.",
    linkText: "View Inbound Services",
    href: "/telco/inbound-services",
    icon: Headset
  },
  {
    title: "Small Business nbn™",
    description: "Enterprise internet to keep your contact centre online.",
    linkText: "View Small Business nbn™",
    href: "/telco/business-nbn",
    icon: Wifi
  }
];

export default function RelatedServices() {
  return (
    <section className="py-24 bg-[#f8f9fc] relative">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        {/* Header */}
        <div className="mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#5D00D6]/5 px-4 py-2 rounded-full mb-6"
            >
              <span className="text-[#5D00D6] font-bold text-[10px] tracking-widest uppercase">RELATED SERVICES</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[32px] md:text-[46px] font-bold text-[#0c1024] leading-[1.1] tracking-tight"
            >
              Complete the picture with <br className="hidden md:block"/>
              <span className="text-[#5D00D6]">these C9 services.</span>
            </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all duration-300 flex flex-col"
                >
                    <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors duration-300">
                        <service.icon size={20} />
                    </div>
                    
                    <h3 className="text-[20px] font-bold text-[#0c1024] mb-3">
                        {service.title}
                    </h3>
                    
                    <p className="text-[14px] text-gray-500 leading-relaxed mb-8 flex-1">
                        {service.description}
                    </p>
                    
                    <Link 
                        href={service.href} 
                        className="inline-flex items-center gap-2 text-[#5D00D6] font-bold text-[14px] group-hover:gap-3 transition-all mt-auto"
                    >
                        {service.linkText} 
                    </Link>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
