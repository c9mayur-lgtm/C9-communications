'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WhatIsSip() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Headings */}
          <div className="flex-1 lg:max-w-md">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="c9-eyebrow bg-[#5D00D6]/5 px-4 py-2 rounded-full">WHAT IS SIP TRUNKING?</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="c9-section-heading"
            >
              Replace physical phone lines with cloud-based connectivity <br className="hidden lg:block"/>
              <span className="text-[#5D00D6]">— without replacing your PBX.</span>
            </motion.h2>
          </div>

          {/* Right Column - Body Text */}
          <div className="flex-1 space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="c9-body !text-gray-600 !font-semibold"
            >
              C9X uses VoIP to connect you to the internet rather than traditional phone systems, where bundles of physical wires join your business to a service provider. With SIP Trunking, you can secure your IP phone systems via a business-grade data service.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="c9-body"
            >
              The result: crystal-clear, seamless calls at just a fraction of the cost and physical burden. Unlike other telcos, C9 owns its network — giving full control over service, reliability, and performance, and passing the benefits directly onto you.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="c9-body"
            >
              Global, future-ready connectivity — connect anywhere, anytime, and feel like you&apos;re in the same room. We work with you to make the most of your on-premises phone system.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
