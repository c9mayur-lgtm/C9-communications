'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, Instagram, ArrowRight, LayoutDashboard } from 'lucide-react';

export default function OmniChannel() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Headings & Text */}
          <div className="flex-1 lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#5D00D6]/5 px-4 py-2 rounded-full mb-8"
            >
              <span className="text-[#5D00D6] font-bold text-[10px] tracking-widest uppercase">OMNI CHANNEL SOLUTION</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[32px] md:text-[46px] font-bold text-[#0c1024] leading-[1.1] tracking-tight mb-8"
            >
              Your customers choose the channel. <br className="hidden lg:block"/>
              <span className="text-[#5D00D6]">Your agents handle it all — in one place.</span>
            </motion.h2>

            <div className="space-y-6 text-[16px] text-gray-600 leading-relaxed">
                <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                >
                Contact centres need to handle much more than phone calls — and so do your customers. A simple phone system is limited. You need to be ready to respond in real-time on your customers&apos; channel of choice — via your website, social media, or app.
                </motion.p>
                
                <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                >
                C9&apos;s Omni Channel Solution allows your contact centre team to interact with your customers&apos; channel of choice while having full access to their interaction history and preferences. A true converged system that rolls a suite of different interaction channels into one manageable solution — avoiding crossed wires, miscommunication, and multiple suppliers.
                </motion.p>

                <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-medium text-gray-800"
                >
                Say goodbye to dipping customer satisfaction levels, exhausted budgets, and staff turnover — and hello to increased efficiencies, productivity, and a stellar customer experience.
                </motion.p>
            </div>
          </div>

          {/* Right Column - Conceptual Diagram */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="flex-1 w-full mx-auto"
          >
             <div className="bg-[#f8f9fc] rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-xl relative">
                
                <div className="grid grid-cols-2 gap-6 relative z-10">
                    {/* Input Channels */}
                    <div className="space-y-4">
                        <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest text-center mb-6">Omni Channels</p>
                        {[
                            { icon: Phone, name: 'Voice', color: 'text-blue-500' },
                            { icon: MessageCircle, name: 'Web Chat', color: 'text-green-500' },
                            { icon: Mail, name: 'Email', color: 'text-orange-500' },
                            { icon: Instagram, name: 'Social', color: 'text-pink-500' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-gray-100 hover:scale-105 transition-transform">
                                <span className="font-bold text-[#0c1024]">{item.name}</span>
                                <div className={`w-8 h-8 rounded-full bg-slate-50 flex flex-col items-center justify-center ${item.color}`}>
                                    <item.icon size={16} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Convergence Arrow & Dashboard */}
                    <div className="flex flex-col items-center justify-center relative">
                        <ArrowRight size={40} strokeWidth={1} className="text-[#5D00D6]/30 absolute left-[-24px] top-1/2 -translate-y-1/2" />
                        
                        <div className="w-full bg-[#0c1024] rounded-3xl p-6 text-center shadow-2xl relative">
                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#5D00D6]/20 blur-xl rounded-3xl -z-10" />

                            <div className="w-16 h-16 mx-auto bg-[#5D00D6] rounded-2xl shadow-lg shadow-[#5D00D6]/30 flex items-center justify-center text-white mb-6 animate-pulse">
                                <LayoutDashboard size={32} />
                            </div>
                            <p className="text-[#5D00D6] text-[10px] uppercase font-bold tracking-widest mb-2">One Platform</p>
                            <p className="text-white font-bold text-[18px] leading-tight">C9 phone system Agent Interface</p>
                        </div>
                    </div>
                </div>

             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
