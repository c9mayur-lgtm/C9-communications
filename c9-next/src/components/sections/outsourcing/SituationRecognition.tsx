'use client';

import React from 'react';
import { Card } from "@/components/ui/card";
import { User, UserMinus, ThumbsDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SituationRecognition() {
  const cards = [
    {
      label: "The overwhelmed owner",
      title: "I'm the IT department and I'm running out of time.",
      body: "You know more about your IT setup than anyone — because you built it yourself. But every hour you spend on IT is an hour not spent on your business.",
      features: ["Legacy hardware retirement", "Resource reallocation", "Focus on core growth"],
      partner: "TYPICAL FOR 10-50 STAFF",
      logo: "/images/icons/microsoft.svg"
    },
    {
      label: "The business outgrown",
      title: "Our IT person left and we're exposed.",
      body: "One person managing IT for a growing business is a single point of failure. When they leave — or can't keep up — the gap is immediately visible.",
      features: ["Documentation recovery", "Cloud migration strategy", "Infrastructure security"],
      partner: "TYPICAL FOR 30-150 STAFF",
      logo: "/images/icons/crowdstrike.svg"
    },
    {
      label: "The failing provider",
      title: "We have an IT provider but nothing gets resolved.",
      body: "Tickets that go nowhere. No proactive communication. No strategic input. C9 transitions businesses away without gaps in coverage.",
      features: ["Service Level Agreement", "Proactive SIEM monitoring", "24/7 Priority Support"],
      partner: "SWITCHING AFTER 12 MONTHS+",
      logo: "/images/icons/servicenow.svg"
    }
  ];

  return (
    <section className="bg-[#0c1024] py-24 px-6 md:px-8 lg:px-12 overflow-hidden relative border-t border-white/5" >
      {/* Background Lighting Effect */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[120%] bg-[#5D00D6]/10 blur-[120px] rounded-full pointer-events-none -z-1" />
      
      <div className="container mx-auto max-w-[1240px] relative z-10">
        
        {/* Header Block (Text Only, matching page content) */}
        <div className="mb-20">
          <div className="max-w-[800px]">
            <p className="text-[#a855f7] text-[13px] font-bold uppercase tracking-[0.25em] mb-6 block">
              WE'VE HEARD THIS BEFORE
            </p>
            <h2 className="c9-section-heading !text-white mb-8">
              Three situations.<br/>One solution.
            </h2>
            <p className="text-white/60 text-[18px] md:text-[20px] max-w-[600px] leading-relaxed font-normal">
              From the overwhelmed owner to the growing team – we've seen it all. Let's find your path forward.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid (Dark Style) */}
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
                className="bg-[#0b0e18] rounded-[24px] border border-white/5 p-8 flex flex-col items-start min-h-[500px] hover:border-[#5D00D6]/40 transition-all duration-500 group relative overflow-hidden"
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
                     {card.partner}
                   </span>
                   {/* Decorative circle */}
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

