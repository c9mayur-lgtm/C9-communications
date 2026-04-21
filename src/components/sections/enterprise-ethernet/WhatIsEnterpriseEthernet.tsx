'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Zap, Globe, Users, Check, X, ArrowRight } from 'lucide-react';
import { useInquiry } from '@/components/context/InquiryContext';

const Card = ({ icon: Icon, title, body, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_-16px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-8 group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-500">
      <Icon size={28} strokeWidth={1.5} />
    </div>
    <h3 className="c9-card-title mb-6 group-hover:text-[#5D00D6] transition-colors">
      {title}
    </h3>
    <p className="c9-body">
      {body}
    </p>
  </motion.div>
);

const ComparisonTable = () => {
  const { setInquiryMessage } = useInquiry();
  
  return (
    <div className="w-full bg-white rounded-[44px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06),0_16px_32px_-8px_rgba(93,0,214,0.04)] border border-gray-100 overflow-hidden mt-20 relative">
       <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-separate border-spacing-0">
             <thead>
                <tr>
                   <th className="text-left py-10 px-10 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] bg-gray-50/50 border-b border-gray-100">Comparison Feature</th>
                   <th className="text-center py-10 px-8 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] bg-gray-50/50 border-b border-gray-100">Standard Small Business nbn™</th>
                   <th className="text-center py-10 px-8 text-[12px] font-black text-[#5D00D6] uppercase tracking-[0.2em] bg-[#5D00D6]/[0.03] border-b border-[#5D00D6]/10 relative">
                      Enterprise Ethernet
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#5D00D6]" />
                   </th>
                </tr>
             </thead>
             <tbody>
                {[
                   { f: 'Architecture', n: 'Shared local network', e: 'Dedicated point-to-point fibre', desc: 'Reserved infrastructure' },
                   { f: 'Maximum Speeds', n: 'Limited up to 100/40 Mbps', e: 'Scalable up to 1,000/1,000 Mbps', desc: 'True gigabit symmetry' },
                   { f: 'Symmetrical Bandwidth', n: <X className="mx-auto text-slate-300" size={20} strokeWidth={3} />, e: <div className="flex flex-col items-center gap-1"><Check className="text-[#5D00D6]" size={22} strokeWidth={3} /><span className="text-[10px] uppercase font-black opacity-40 leading-none">Guaranteed</span></div> },
                   { f: 'Committed Bandwidth', n: <X className="mx-auto text-slate-300" size={20} strokeWidth={3} />, e: <div className="flex flex-col items-center gap-1"><Check className="text-[#5D00D6]" size={22} strokeWidth={3} /><span className="text-[10px] uppercase font-black opacity-40 leading-none">High CoS (TC2)</span></div> },
                   { f: 'Service Restoration', n: 'Best effort (Standard)', e: '4hr / 8hr / 12hr eSLA targets', desc: 'Contractual commitment' },
                   { f: 'Equipment Management', n: 'Consumer grade (usually)', e: 'Enterprise-grade fully managed', desc: 'Cisco / Juniper options', last: true }
                ].map((row, i) => (
                   <tr key={i} className="group transition-colors">
                      <td className={`py-8 px-10 border-b border-gray-50 transition-colors group-hover:bg-gray-50/30`}>
                         <div className="flex flex-col">
                            <span className="text-[16px] font-bold text-[#1A1A2E] mb-1">{row.f}</span>
                            {row.desc && <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{row.desc}</span>}
                         </div>
                      </td>
                      <td className="py-8 px-8 text-center border-b border-gray-50 text-[14px] font-bold text-slate-400 italic">
                         {row.n}
                      </td>
                      <td className={`py-8 px-8 text-center border-b border-[#5D00D6]/5 bg-[#5D00D6]/[0.03] text-[16px] font-bold text-[#1A1A2E] relative`}>
                         {row.e}
                      </td>
                   </tr>
                ))}
             </tbody>
          </table>
       </div>
       
       {/* Bottom CTA bar inside table card */}
       <div className="bg-gray-50/80 border-t border-gray-100 p-6 flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-[14px] font-bold text-slate-500">Need helping deciding between Small Business nbn™ and Enterprise Ethernet?</p>
          <button 
             onClick={() => {
                setInquiryMessage("I'm comparing Standard nbn and Enterprise Ethernet. Can you help me decide which is better for my current business scale?");
                document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
             }}
             className="bg-[#5D00D6] text-white px-8 py-3.5 rounded-full font-bold text-[13px] hover:bg-[#4B00AD] transition-all shadow-lg shadow-[#5D00D6]/20 active:scale-95 flex items-center gap-2"
          >
             Speak with an Enterprise Advisor <ArrowRight size={14} />
          </button>
       </div>
    </div>
  );
};

export default function WhatIsEnterpriseEthernet() {
  return (
    <section className="bg-[#FAFAFA] py-12 md:py-16 overflow-hidden" >
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        {/* HEADER */}
        <div className="max-w-[800px] mb-20">
          <div className="mb-6 px-4 py-1.5 bg-[#5D00D6]/5 rounded-none border border-[#5D00D6]/10 inline-block">
             <span className="c9-eyebrow">nbn™ ENTERPRISE ETHERNET</span>
          </div>
          <h2 className="c9-section-heading mb-10">
            Rethink what business internet looks like at an <span className="text-[#5D00D6]">enterprise level.</span>
          </h2>
          <p className="c9-body !text-[18px] md:!text-[21px] !text-slate-600 max-w-[700px] font-normal">
            nbn™ Enterprise Ethernet is not standard Small Business nbn™. It is a dedicated, symmetrical connectivity product designed for larger businesses with complex needs — delivering guaranteed bandwidth, multiple classes of service, and SLA-backed performance.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          <Card 
            icon={Zap}
            title="Symmetrical speeds — up and down"
            body="Unlike standard nbn™ plans where download speeds are significantly higher than upload, Enterprise Ethernet delivers equal upload and download speeds — from 50/50 to 1000/1000 Mbps. Critical for businesses with cloud workloads, hosted applications, and video conferencing at scale."
            delay={0.1}
          />
          <Card 
            icon={Network}
            title="Guaranteed bandwidth options"
            body="Choose between Low CoS (Best Effort) for high-quality business internet at a lower price point, or High CoS (100% committed guaranteed bandwidth via Traffic Class 2) for organisations where performance consistency is non-negotiable."
            delay={0.2}
          />
          <Card 
            icon={Globe}
            title="End-to-end fibre to your site"
            body="High bandwidth reserved and guaranteed through full end-to-end fibre direct to your premises — supporting business internet, network services, IP telephony, and other bandwidth-intensive applications simultaneously without degradation."
            delay={0.3}
          />
          <Card 
            icon={Users}
            title="Built for multi-site organisations"
            body="Enterprise Ethernet is the right foundation for businesses connecting multiple offices, data centres, and remote sites. C9 designs the full network architecture — not just the individual connections."
            delay={0.4}
          />
        </div>

        {/* COMPARISON TABLE */}
        <ComparisonTable />

      </div>
    </section>
  );
}

