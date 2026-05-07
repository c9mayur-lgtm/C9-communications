'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Network, Shield, Monitor, Phone, Globe, Printer, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CAPABILITIES = [
  {
    id: 'networking',
    icon: <Network className="w-5 h-5" />,
    title: 'Networking',
    description: 'Build a high-performance network foundation that scales with your business. From enterprise-grade fibre to secure SD-WAN, we ensure your site is connected and secure from day one.',
    includes: ['Fibre connectivity', 'SD-WAN', 'Network design', 'Cabling', 'Testing'],
    cta: 'Explore Networking Solutions',
  },
  {
    id: 'security',
    icon: <Shield className="w-5 h-5" />,
    title: 'CCTV & Security',
    description: 'Protect your physical assets with intelligent surveillance and AI-driven occupancy tracking. Our integrated security systems provide real-time visibility and absolute control over your new premises.',
    includes: ['Surveillance systems', 'AI tracking', 'Monitoring', 'Compliance'],
    cta: 'Explore CCTV & Security Solutions',
  },
  {
    id: 'workplace',
    icon: <Monitor className="w-5 h-5" />,
    title: 'Modern Workplace',
    description: 'Empower your team with the tools they need to succeed. We deploy and manage your entire Microsoft 365 environment, productivity tools, and secure remote access protocols.',
    includes: ['M365 deployment', 'Device management', 'Security policies', 'Training'],
    cta: 'Explore Modern Workplace Solutions',
  },
  {
    id: 'phone',
    icon: <Phone className="w-5 h-5" />,
    title: 'Phone System',
    description: 'Crystal clear communication tailored for modern business. Our Teams-integrated cloud voice platform replaces legacy hardware with a scalable, feature-rich system.',
    includes: ['Cloud voice', 'Teams integration', 'Call management', 'Support'],
    cta: 'Explore Phone System Solutions',
  },
  {
    id: 'connectivity',
    icon: <Globe className="w-5 h-5" />,
    title: 'Internet & Connectivity',
    description: 'Reliable, always-on connectivity with primary and failover connections. Tested for performance and automatic failover to keep your business running.',
    includes: ['Primary connection', 'Failover', 'Speed testing', 'SLA monitoring'],
    cta: 'Explore Connectivity Solutions',
  },
];

export const CoreCapabilities = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="c9-eyebrow mb-4"
          >
            Our Service Spectrum
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="c9-section-heading mb-6"
          >
            Everything Your New Site Needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="c9-body max-w-2xl mx-auto"
          >
            Select a capability to see how we deliver enterprise-grade infrastructure for your greenfield project.
          </motion.p>
        </div>

        <Tabs defaultValue="networking" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full bg-white p-1 rounded-2xl h-auto shadow-sm border border-slate-100 mb-12">
            {CAPABILITIES.map((cap) => (
              <TabsTrigger
                key={cap.id}
                value={cap.id}
                className="flex flex-col gap-2 py-4 rounded-xl data-[state=active]:bg-purple-50 data-[state=active]:text-[#5D00D6] transition-all"
              >
                {cap.icon}
                <span className="text-[12px] font-bold uppercase tracking-tight">{cap.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {CAPABILITIES.map((cap) => (
            <TabsContent key={cap.id} value={cap.id} className="focus-visible:outline-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="c9-section-heading mb-6">{cap.title}</h3>
                    <p className="c9-body leading-relaxed mb-8">
                      {cap.description}
                    </p>
                    <div className="space-y-4 mb-10">
                      {cap.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#5D00D6]" />
                          <span className="font-bold text-slate-800 text-[14px]">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="bg-[#5D00D6] hover:bg-[#4d00b3] text-white rounded-full px-8 h-12 text-[14px] font-bold group"
                    >
                      {cap.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className="bg-slate-50 rounded-2xl aspect-video md:aspect-square flex items-center justify-center p-12 overflow-hidden relative">
                    {/* Placeholder for interactive visual or image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-30" />
                    <div className="relative z-10 text-[#5D00D6]/20">
                      {React.cloneElement(cap.icon as React.ReactElement, { className: 'w-48 h-48' } as any)}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-lg">
                      <p className="c9-eyebrow !text-[#5D00D6] !mb-1">Standard Implementation</p>
                      <p className="text-sm font-bold text-slate-900">Validated Architecture {cap.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
