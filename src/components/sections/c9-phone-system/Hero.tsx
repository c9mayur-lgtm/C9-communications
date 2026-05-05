'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import C9VoiceNetworkDiagram from './C9VoiceNetworkDiagram';

export const Hero = () => {
  return (
    <section className="relative pt-12 pb-12 md:pt-20 md:pb-20 overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#5D00D6]/5 border border-[#5D00D6]/10 px-4 py-2 rounded-full w-fit"
            >
               <Phone size={14} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !text-[10px]">Telco · C9 Voice Cloud Phone System</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="c9-hero-title text-[#0c1024]"
            >
              The new frontier in telephony. <br />
              <span className="text-[#5D00D6]">Save up to 70% on your business calls.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="c9-body max-w-xl"
            >
              C9 Voice is Australia's next generation in smart, future-ready cloud-based phone systems — with over 80 features, infinite CRM integrations, multi-site connectivity, and no upfront fees. Get off your legacy PBX and onto the cloud.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button size="lg" className="bg-[#5D00D6] hover:bg-[#4c00b0] text-white rounded-full px-10 h-14 text-[14px] font-medium w-full sm:w-auto shadow-lg shadow-[#5D00D6]/20">
                Get a C9 Voice Quote 
              </Button>
              <Button variant="outline" size="lg" className="border-gray-200 text-[#0c1024] hover:bg-gray-50 rounded-full px-10 h-14 text-[14px] font-medium w-full sm:w-auto">
                See All Features
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-4"
            >
              {[
                "80+ standard features",
                "No upfront fees",
                "Multi-site connectivity",
                "Yealink certified engineers",
                "Microsoft Teams direct routing"
              ].map((signal, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#5D00D6]" />
                  <span className="text-[12px] font-medium text-gray-500">{signal}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block relative"
          >
             <C9VoiceNetworkDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

