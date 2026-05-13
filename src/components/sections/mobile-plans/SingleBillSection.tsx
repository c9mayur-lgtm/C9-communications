'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Network, Zap, Cloud } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    title: "Small Business nbn™",
    body: "Enterprise-grade nbn™ with guaranteed bandwidth.",
    link: "View Small Business nbn™ →",
    href: "/telco/business-nbn",
    icon: Network
  },
  {
    title: "Fast Fibre",
    body: "Fibre400 and Fibre1000 for demanding business environments.",
    link: "View Fast Fibre →",
    href: "/telco/fast-fibre",
    icon: Zap
  },
  {
    title: "C9 Managed Phone System",
    body: "Business-grade communication with full accountability and ownership.",
    link: "View Phone System →",
    href: "/telco/phone-system",
    icon: Cloud
  }
];

export default function SingleBillSection() {
  return (
    <section className="bg-white py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        {/* HEADER */}
        <div className="flex flex-col mb-10 gap-4">
          <span className="c9-eyebrow mb-4 block">C9 SINGLE BILL</span>
          <h2 className="c9-section-heading mb-4">
            Your internet, mobile, and voice. <br /><span className="text-[#5D00D6]">One bill. One contact. One C9.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10">
            <div className="c9-body flex flex-col gap-6 max-w-xl">
              <p>
                Most Australian businesses manage their internet, mobile, and voice services with separate providers — separate bills, separate contacts, and separate headaches when something goes wrong.
              </p>
              <p>
                C9 combines your Small Business nbn™ or fibre internet, mobile fleet, and voice services on a single monthly bill — one invoice, one payment run, and one dedicated account manager who handles everything.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {[
                "Internet, mobile, and voice on one bill",
                "Single account manager for all services",
                "One point of contact for faults and changes",
                "Simplified expense management",
                "Dedicated manager for 10+ services"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-[#5D00D6]" />
                  </div>
                  <span className="text-[14px] font-medium text-[#1A1A2E] tracking-tight whitespace-nowrap">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
               <Button 
                onClick={() => document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#5D00D6] text-white hover:bg-[#4c00b0] font-medium h-[56px] px-10 rounded-full transition-all text-[14px] shadow-xl shadow-[#5D00D6]/20 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                Bundle My Quote 
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
             <p className="c9-eyebrow !text-[#5D00D6] mb-4">Related Services</p>
             <div className="flex flex-col gap-5">
                {SERVICES.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <motion.a 
                      key={i}
                      href={service.href}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-8 bg-gray-50 border border-gray-100 rounded-[32px] hover:border-[#5D00D6]/20 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all flex gap-6 items-center"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#5D00D6] shrink-0">
                         <Icon size={26} strokeWidth={1.5} />
                      </div>
                    <div className="flex flex-col gap-1 items-start text-left">
                      <h4 className="text-[18px] font-medium text-[#1A1A2E] leading-tight group-hover:text-[#5D00D6] transition-colors">{service.title}</h4>
                      <p className="c9-body !text-[14px] mb-1">{service.body}</p>
                      <span className="c9-eyebrow !text-[#5D00D6] !text-[10px]">{service.link}</span>
                    </div>
                    </motion.a>
                  );
                })}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
