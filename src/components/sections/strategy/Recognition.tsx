'use client';

import React from 'react';
import { Card } from "@/components/ui/card";
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Recognition() {
  const cards = [
    {
      label: "The Blind Investment",
      title: "We spend on IT every year but have no idea if it's the right things.",
      body: "Money goes out the door for hardware, software, and support, but there's no clear link between that spend and your business goals. You're buying products, not outcomes.",
      features: ["IT Spend Benchmarking", "Investment ROI analysis", "Asset Lifecycle Review"],
      context: "STRATEGIC GAP identified"
    },
    {
      label: "The Reactive Cycle",
      title: "Every IT decision is reactive — we fix problems instead of preventing them.",
      body: "Technology choices are made in isolation based on whatever is shouting loudest today. There is no long-term roadmap, so you're always playing catch-up.",
      features: ["12-Month IT Roadmap", "Proactive Risk Assessment", "Strategic Budget Model"],
      context: "REACTIVE PATTERN detected"
    },
    {
      label: "The Product Vendor",
      title: "Our vendor just sells us more products. No one thinks bigger picture.",
      body: "Your IT supplier is incentivised to sell boxes and licenses, not to help you grow. You're missing an independent advisor who is on YOUR side of the table.",
      features: ["Independent vCIO Advice", "Vendor-Agnostic Approach", "Board-Level Reporting"],
      context: "VENDOR LOCK-IN pressure"
    }
  ];

  return (
    <section className="bg-[#0c1024] py-24 px-6 md:px-8 lg:px-12 overflow-hidden relative border-t border-white/5" >
      {/* Background Lighting Effect */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[120%] bg-[#5D00D6]/10 blur-[120px] rounded-lg pointer-events-none -z-1" />
      
      <div className="container mx-auto max-w-[1240px] relative z-10">
        
        {/* Header Block */}
        <div className="mb-20">
          <div className="max-w-[800px]">
            <p className="text-[#a855f7] text-[14px] font-bold uppercase tracking-[0.25em] mb-6 block">
              DOES THIS SOUND FAMILIAR?
            </p>
            <h2 className="c9-section-heading !text-white mb-8">
              Most businesses have IT.<br/>Very few have an IT strategy.
            </h2>
            <p className="text-white/60 text-[18px] md:text-[20px] max-w-[600px] leading-relaxed font-normal">
              These are the conversations that lead businesses to C9. Strategy before products. Outcomes before invoices.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid (Dark Style) - Keeping Card Layout Sharp, but Buttons Rounded */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card 
                className="bg-[#0b0e18] rounded-lg border border-white/5 p-8 flex flex-col items-start min-h-[500px] hover:border-[#5D00D6]/40 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#5D00D6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Card Top Label */}
                <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#a855f7] mb-6 block">
                   {card.label}
                </div>

                <h3 className="c9-section-heading !text-white mb-4">
                  {card.title}
                </h3>
                
                <p className="text-white/40 text-[16px] leading-relaxed mb-8">
                  {card.body}
                </p>

                {/* Bullet Points with separators */}
                <div className="w-full space-y-4 mb-auto">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="w-full">
                      <div className="pt-4 border-t border-white/10">
                        <span className="text-white/80 text-[14px] font-normal tracking-tight">
                          {feature}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Context Info */}
                <div className="mt-12 w-full pt-8 border-t border-white/5 flex items-center justify-between">
                   <span className="text-[12px] font-bold text-white/30 tracking-[0.1em] uppercase group-hover:text-[#a855f7] transition-colors">
                     {card.context}
                   </span>
                   {/* Decorative circle (Button-like) - Set to rounded-full */}
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:border-[#5D00D6]/40">
                      <ChevronRight size={14} className="text-white/20 group-hover:text-[#a855f7]" />
                   </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

