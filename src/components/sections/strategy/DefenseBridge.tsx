'use client';

import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DefenseBridge() {
  return (
    <section className="bg-white py-12 px-6 md:px-8 lg:px-12 font-sans">
      <div className="container mx-auto max-w-[1240px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0c1024] rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group shadow-2xl"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5D00D6]/10 rounded-lg blur-[100px] -mr-48 -mt-48 pointer-events-none" />
          
          {/* Icon Container (Keeping it sharp to match aesthetic) */}
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0 shadow-inner group-hover:border-[#5D00D6]/30 transition-colors">
            <Shield className="w-10 h-10 md:w-12 md:h-12 text-[#5D00D6]" />
          </div>

          {/* Content Area */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="c9-section-heading !text-white mb-3" >
              Strategic roadmap meets enterprise cybersecurity
            </h2>
            <p className="text-[14px] md:text-[16px] text-white/50 leading-relaxed max-w-[700px] font-normal font-sans" >
              Every strategic IT engagement includes a security posture review. For organisations with compliance obligations — <strong>C9 Defense</strong> provides Essential 8 implementation and continuous monitoring as a formal program alongside your strategy.
            </p>
          </div>

          {/* Action Button (Set to rounded-full) */}
          <div className="shrink-0 w-full md:w-auto">
             <Link href="/managed-it/defense">
                <Button variant="outline" className="w-full md:w-auto border-white/20 bg-white/5 hover:bg-[#5D00D6] hover:border-[#5D00D6] text-white rounded-full px-8 h-14 font-bold transition-all duration-300 flex items-center justify-between gap-4 border-[1.5px]">
                  Learn About C9 Defense <ArrowRight size={18} className="group-hover:text-white transition-colors" />
                </Button>
             </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

