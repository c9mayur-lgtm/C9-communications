'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Globe, Shield, Wifi, ArrowRight, Star } from 'lucide-react';

const trustSignals = [
  'Up to 1000 Mbps',
  'Unlimited data',
  'Managed router included',
  'Australian carrier network',
];

export default function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById('consultation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPlans = () => {
    const el = document.getElementById('fast-fibre-plans');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative w-full bg-white pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden" 
      style={{ fontFamily: '"Proxima Nova", sans-serif' }}
    >
      <div className="container mx-auto px-6 md:px-8 w-full max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F3EEFF] border border-[#5D00D6]/20 rounded-full px-4 py-1.5 mb-8">
              <Award size={14} className="text-[#5D00D6]" />
              <span className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-[0.2em]">Telco · Fast Fibre</span>
            </div>

            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold text-[#1A1A2E] leading-[1.05] tracking-tight mb-8">
              Up to 1000 Mbps fibre internet. <br />
              <span className="text-[#5D00D6]">Unlimited data. Built for business.</span>
            </h1>

            <p className="text-[18px] md:text-[20px] text-[#6B7280] leading-relaxed mb-10 max-w-[580px]">
              C9 delivers enterprise-grade fast fibre through Fibre400 and Fibre1000 — powered by Australia's most trusted carrier networks including AAPT, Vocus, Optus, Telstra, and Aussie Broadband. High bandwidth reserved and guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <button 
                onClick={scrollToForm}
                className="w-full sm:w-auto bg-[#5D00D6] text-white px-8 py-4 rounded-full font-bold hover:bg-[#4E00AD] transition-all flex items-center justify-center gap-2 shadow-xl shadow-purple-900/20"
              >
                Get a Fibre Quote <ArrowRight size={18} />
              </button>
              <button 
                onClick={scrollToPlans}
                className="w-full sm:w-auto bg-white text-[#1A1A2E] border border-[#E5E7EB] px-8 py-4 rounded-full font-bold hover:bg-gray-50 hover:border-[#5D00D6] transition-all flex items-center justify-center gap-2"
              >
                View Plans <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustSignals.map((signal, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0">
                    <Zap size={10} className="text-[#5D00D6]" />
                  </div>
                  <span className="text-[14px] text-[#374151] font-medium">{signal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL MOCKUP */}
          <div className="relative flex justify-center lg:justify-end">
             {/* Simple but premium abstract network visualization */}
             <div className="relative w-full aspect-square max-w-[500px] bg-gradient-to-br from-[#F3EEFF] to-white rounded-3xl border border-[#5D00D6]/10 overflow-hidden shadow-[0_20px_50px_rgba(93,0,182,0.05)]">
                <div className="absolute inset-0 opacity-20">
                   <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#5D00D6_0%,transparent_50%)]" />
                   <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,#5D00D6_0%,transparent_50%)]" />
                </div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                   <div className="w-full bg-white rounded-2xl p-6 border shadow-sm mb-4">
                      <div className="flex justify-between items-center mb-4">
                         <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Network Throughput</span>
                         <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] text-green-600 font-bold">1.0 Gbps Link</span>
                         </div>
                      </div>
                      <div className="h-24 flex items-end gap-1">
                         {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85, 60, 100].map((h, i) => (
                            <motion.div 
                               key={i}
                               className="flex-1 bg-[#5D00D6]/20 rounded-t-sm"
                               initial={{ height: 0 }}
                               animate={{ height: `${h}%` }}
                               transition={{ duration: 1, delay: i * 0.05, repeat: Infinity, repeatType: 'reverse' }}
                            />
                         ))}
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="bg-white rounded-xl p-4 border shadow-sm">
                         <Shield className="text-[#5D00D6] mb-2" size={20} />
                         <p className="text-[11px] text-gray-400 font-bold uppercase mb-1">Security</p>
                         <p className="text-[16px] font-bold text-[#1A1A2E]">Active</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 border shadow-sm">
                         <Wifi className="text-[#5D00D6] mb-2" size={20} />
                         <p className="text-[11px] text-gray-400 font-bold uppercase mb-1">Latency</p>
                         <p className="text-[16px] font-bold text-green-600">2ms</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
