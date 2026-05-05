'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TabCardProps {
  badge: string;
  title: string;
  para: string;
  features: string[];
  note: string;
  bestFor: string[];
  notIdealFor: string[];
}

const TabCard = ({ 
  badge, title, para, features, note, bestFor, notIdealFor 
}: TabCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 bg-white rounded-[40px] border border-[rgba(93,0,214,0.1)] p-10 lg:p-14 mt-6 shadow-2xl shadow-purple-900/5 overflow-hidden"
    >
      {/* Left side */}
      <div className="flex flex-col">
        <div className="inline-flex items-center bg-[#EDE9FE] text-[#5D00D6] text-[11.5px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-full w-fit mb-8 shadow-sm">
          {badge}
        </div>
        
        <h3 className="font-['Proxima_Nova'] text-[32px] md:text-[38px] text-[#1A1A2E] font-bold mt-2 leading-[1.05] tracking-tight">
          {title}
        </h3>
        
        <p className="font-['Proxima_Nova'] text-[18px] text-[#6B7280] leading-[1.65] mt-10 font-medium">
          {para}
        </p>
        
        <div className="flex flex-col gap-5 mt-10">
          {features.map((feat, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#5D00D6] transition-colors duration-300">
                 <CheckCircle size={12} className="text-[#5D00D6] group-hover:text-white transition-colors" />
              </div>
              <span className="font-['Proxima_Nova'] text-[16px] text-[#1A1A2E] font-bold leading-tight tracking-tight">{feat}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-50 flex items-start gap-4">
           <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6] mt-2 shrink-0" />
           <p className="font-['Proxima_Nova'] text-[14.5px] text-[#9CA3AF] italic font-medium leading-relaxed">
             {note}
           </p>
        </div>
      </div>

      {/* Right side (Dark Card) */}
      <div className="bg-[#1A1A2E] rounded-[32px] p-10 flex flex-col gap-10 shadow-2xl shadow-black/15 border border-white/10 relative overflow-hidden">
        {/* Absolute Background Accent */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#5D00D6]/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <h4 className="font-['Proxima_Nova'] text-[11px] uppercase text-[#6B7280] tracking-[0.25em] font-black mb-7 flex items-center gap-3">
             <div className="w-10 h-px bg-[#374151]" />
             BEST FOR
          </h4>
          <div className="flex flex-col gap-4">
            {bestFor.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-5 h-5 rounded-md bg-[#5D00D6]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#5D00D6] transition-colors">
                   <ChevronRight size={14} className="text-[#5D00D6] group-hover:text-white group-hover:translate-x-0.5" />
                </div>
                <span className="font-['Proxima_Nova'] text-[14px] text-[#E5E7EB] font-bold leading-[1.4] tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-[#374151]/50 pt-10 mt-auto relative z-10">
          <h4 className="font-['Proxima_Nova'] text-[11px] uppercase text-[#EF4444]/60 tracking-[0.25em] font-black mb-7 flex items-center gap-3">
             <div className="w-10 h-px bg-[#374151]" />
             NOT IDEAL FOR
          </h4>
          <div className="flex flex-col gap-4">
            {notIdealFor.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-5 h-5 rounded-md bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                   <XCircle size={14} className="text-[#EF4444]" />
                </div>
                <span className="font-['Proxima_Nova'] text-[14px] text-[#9CA3AF] font-bold leading-[1.4] tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function TechComparison() {
  return (
    <section id="network-comparison" className="w-full bg-white py-18 px-6 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="font-['Proxima_Nova'] text-[11px] font-black uppercase tracking-[0.3em] text-[#5D00D6] mb-5 block">
            NETWORK COMPARISON
          </span>
          <h2 className="font-['Proxima_Nova'] text-[40px] md:text-[54px] lg:text-[56px] text-[#1A1A2E] font-bold mt-2 leading-[1.0] tracking-[-0.03em]">
            MPLS, SD-WAN, or Hybrid?
          </h2>
          <p className="font-['Proxima_Nova'] text-[19px] text-[#6B7280] mt-8 font-medium leading-[1.65]">
             The right answer depends on your requirements for performance, security, and cost. 
             Select a technology to see the detailed breakdown.
          </p>
        </div>

        <Tabs defaultValue="mpls" className="w-full">
          <div className="flex justify-center mb-16 relative">
            {/* Pill Container */}
            <TabsList className="bg-transparent p-0 h-auto border-0 flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">
              <TabsTrigger 
                value="mpls" 
                className="rounded-full px-8 md:px-10 py-3 md:py-3.5 font-bold text-[14px] md:text-[16px] text-[#4B5563] bg-white border border-slate-200 shadow-sm data-[state=active]:bg-[#5D00D6] data-[state=active]:text-white data-[state=active]:border-[#5D00D6] data-[state=active]:shadow-lg data-[state=active]:shadow-purple-900/20 hover:text-[#1A1A2E] transition-all duration-300"
              >
                MPLS
              </TabsTrigger>
              <TabsTrigger 
                value="sd-wan" 
                className="rounded-full px-8 md:px-10 py-3 md:py-3.5 font-bold text-[14px] md:text-[16px] text-[#4B5563] bg-white border border-slate-200 shadow-sm data-[state=active]:bg-[#5D00D6] data-[state=active]:text-white data-[state=active]:border-[#5D00D6] data-[state=active]:shadow-lg data-[state=active]:shadow-purple-900/20 hover:text-[#1A1A2E] transition-all duration-300"
              >
                SD-WAN
              </TabsTrigger>
              <TabsTrigger 
                value="hybrid" 
                className="rounded-full px-8 md:px-10 py-3 md:py-3.5 font-bold text-[14px] md:text-[16px] text-[#4B5563] bg-white border border-slate-200 shadow-sm data-[state=active]:bg-[#5D00D6] data-[state=active]:text-white data-[state=active]:border-[#5D00D6] data-[state=active]:shadow-lg data-[state=active]:shadow-purple-900/20 hover:text-[#1A1A2E] transition-all duration-300"
              >
                Hybrid
              </TabsTrigger>
            </TabsList>
            
            {/* Structural accent line behind */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-0 translate-y-1/2 md:block hidden" />
          </div>

          <AnimatePresence mode="wait">
            <TabsContent value="mpls">
              <TabCard 
                badge="MPLS — Dedicated Connectivity"
                title="SLA-backed performance on dedicated private circuits."
                para="MPLS delivers reliable connectivity using dedicated network circuits — completely partitioned from the public internet. This ensures consistent performance for critical real-time traffic."
                features={[
                  "Dedicated circuits — zero internet noise",
                  "Guaranteed performance for voice and video",
                  "Deep-layer traffic prioritisation (QoS)",
                  "Absolute isolation from public threats",
                  "Carrier-grade SLA and throughput"
                ]}
                note="While inherently private, MPLS traffic is not encrypted by default. C9 recommends SD-WAN overlays for end-to-end data encryption."
                bestFor={[
                  "Multi-site organisations with heavy inter-office VoIP",
                  "Fixed location environments requiring reliability",
                  "Businesses with strict internal performance SLAs"
                ]}
                notIdealFor={[
                  "Highly agile environments requiring rapid changes",
                  "Cloud-first organisations without site-to-site needs",
                  "Lowest possible cost-per-megabit deployments"
                ]}
              />
            </TabsContent>

            <TabsContent value="sd-wan">
              <TabCard 
                badge="SD-WAN — Software Defined intelligence"
                title="Centralised, encrypted, and agile network management."
                para="SD-WAN aggregates broadband, LTE, and MPLS into a single managed fabric. It uses software intelligence to route traffic dynamically based on security and performance requirements."
                features={[
                  "Aggregates multiple connection types",
                  "Integrated end-to-end data encryption",
                  "Centralised policy and security control",
                  "Sub-second failover between circuits",
                  "Zero-touch deployment for new sites"
                ]}
                note="SD-WAN provides high agility and built-in security, making it the modern standard for geographically distributed organizations."
                bestFor={[
                  "Agile businesses requiring rapid remote office setups",
                  "Organisations with heavy Microsoft 365 / SaaS traffic",
                  "Multi-homed sites needing circuit diversification"
                ]}
                notIdealFor={[
                  "Legacy environments without internet breakout capacity",
                  "Simplistic single-site organisations"
                ]}
              />
            </TabsContent>

            <TabsContent value="hybrid">
              <TabCard 
                badge="Hybrid — Unified Mesh"
                title="The security of MPLS with the cloud-agility of SD-WAN."
                para="Hybrid architecture uses MPLS for mission-critical core traffic and SD-WAN for edge flexibility and internet overflow. It delivers the best balance of reliability, speed, and cost-efficiency."
                features={[
                  "MPLS reliability for core site-to-site traffic",
                  "SD-WAN agility for remote access and cloud",
                  "Unified management plane for all circuits",
                  "Intelligent cost-optimised traffic routing",
                  "Future-proof architecture for scaling"
                ]}
                note="Most C9 enterprise clients eventually adopt a Hybrid approach to balance legacy reliability with modern agility."
                bestFor={[
                  "Complex enterprises transitioning to the cloud",
                  "Organisations with diverse branch performance needs",
                  "Businesses optimising WAN spend without performance loss"
                ]}
                notIdealFor={[
                  "Small businesses where single technology is sufficient"
                ]}
              />
            </TabsContent>
          </AnimatePresence>
        </Tabs>

      </div>
    </section>
  );
}
