'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Network, Globe, Plus, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

const RelatedService = ({ title, body, link, href }: any) => (
  <Link href={href} className="group bg-white rounded-3xl p-8 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all duration-500 no-underline">
    <div className="flex justify-between items-center mb-2">
       <h4 className="text-[20px] font-bold text-[#1A1A2E] leading-tight group-hover:text-[#5D00D6] transition-colors">{title}</h4>
       <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-[#5D00D6] group-hover:text-white flex items-center justify-center transition-all duration-500 group-hover:rotate-[45deg]">
          <LinkIcon size={16} />
       </div>
    </div>
    <p className="text-[14px] md:text-[14px] text-slate-500 font-normal leading-relaxed">{body}</p>
    <div className="flex items-center gap-2 text-[#5D00D6] text-[14px] font-black uppercase tracking-widest mt-auto">
       {link} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </div>
  </Link>
);

export default function MultiSiteSection() {
  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden border-y border-gray-100" >
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        {/* HEADER */}
        <div className="text-center max-w-[800px] mx-auto mb-20 md:mb-24">
          <span className="text-[#5D00D6] text-[11px] font-black uppercase tracking-[0.3em] block mb-6">MULTI-SITE CONNECTIVITY</span>
          <h2 className="c9-section-heading mb-8">
            Connecting multiple sites? <span className="text-[#5D00D6]">C9 designs the whole network.</span>
          </h2>
          <p className="text-[17px] md:text-[19px] text-slate-600 leading-relaxed font-normal">
            Enterprise Ethernet is the foundation. C9 builds the full network architecture on top — connecting your offices, data centres, and remote sites into a single managed network.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
          
          {/* LEFT COLUMN - CONTENT */}
          <div>
            <p className="text-[17px] md:text-[18px] text-slate-600 mb-12 leading-relaxed font-normal">
               Most businesses with multiple locations need more than individual internet connections at each site. They need those connections to talk to each other — securely, reliably, and with the right traffic priorities for voice, video, and business applications.
            </p>
            <p className="text-[17px] md:text-[18px] text-slate-600 mb-14 leading-relaxed font-normal">
               C9 combines Enterprise Ethernet connectivity with private networking solutions including MPLS, SD-WAN, and IP VPN — giving you a complete network architecture managed under a single agreement with a single point of contact.
            </p>

            <div className="space-y-6">
               {[
                  "Enterprise Ethernet at each site",
                  "Private network connectivity between sites",
                  "Centralised management and monitoring",
                  "Single bill — all sites, one agreement",
                  "Scalable as you open new locations"
               ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                     <div className="w-6 h-6 rounded-full bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] shrink-0">
                        <Plus size={12} strokeWidth={4} />
                     </div>
                     <span className="text-[14px] md:text-[17px] font-bold text-slate-600 tracking-tight">{item}</span>
                  </div>
               ))}
            </div>
          </div>

          {/* RIGHT COLUMN - RELATED SERVICES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
             <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#5D00D6]/5 blur-[100px] pointer-events-none rounded-full" />
             
             <RelatedService 
               title="MPLS"
               body="Dedicated private network connecting all your sites."
               link="View MPLS"
               href="/managed-it/network-solutions"
             />
             <RelatedService 
               title="SD-WAN"
               body="Software-defined network with integrated security."
               link="View SD-WAN"
               href="/managed-it/network-solutions"
             />
             <RelatedService 
               title="Network Solutions"
               body="Full private network design, deployment and management."
               link="View Network Solutions"
               href="/managed-it/network-solutions"
             />
          </div>

        </div>

      </div>
    </section>
  );
}

