import React from 'react';
import { ArrowRight, Signal, Shield, Monitor, Smartphone, Headphones, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const TelcoSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Hardware Showcase */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute top-[-10%] left-[-10%] w-full h-full bg-brand-purple/5 rounded-[60px] blur-3xl" />
            
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {[
                { name: "C9X Managed Handset", icon: Phone, color: "from-blue-500/10 to-transparent" },
                { name: "Wireless Enterprise AP", icon: Signal, color: "from-brand-purple/10 to-transparent" },
                { name: "Premium Headset", icon: Headphones, color: "from-indigo-500/10 to-transparent" },
                { name: "Security Gateway / Router", icon: Shield, color: "from-cyan-500/10 to-transparent" }
              ].map((product, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-brand-purple/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden relative">
                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-brand-purple/5 to-transparent pointer-events-none" />
                   
                   <div className="flex flex-col items-center gap-6 relative z-10">
                      <div className={`p-6 rounded-2xl bg-gradient-to-br ${product.color} group-hover:scale-110 transition-transform duration-500`}>
                        <product.icon className="text-brand-purple w-8 h-8" />
                      </div>
                      <span className="text-text-primary text-[14px] font-bold font-syne text-center tracking-tight leading-tight">
                        {product.name}
                      </span>
                   </div>
                   
                   <div className="absolute bottom-0 right-0 w-16 h-16 bg-brand-purple/5 rounded-tl-full translate-x-4 translate-y-4 group-hover:scale-150 transition-transform duration-700" />
                </div>
              ))}
              
              {/* Promo Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-brand-purple text-white rounded-3xl shadow-[0_20px_60px_-10px_rgba(93,0,214,0.6)] z-20 flex flex-col items-center gap-2 w-56 text-center transform -rotate-6 hover:rotate-0 transition-transform cursor-pointer">
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-dm-sans">Upgrade to C9X</span>
                 <span className="text-[28px] font-bold font-syne leading-none">Save 70%</span>
                 <span className="text-xs font-dm-sans">on your call costs</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Content */}
          <div className="flex flex-col gap-10 order-1 lg:order-2">
            <div className="flex flex-col gap-4">
              <span className="text-brand-purple text-[13px] font-bold uppercase tracking-[0.2em] font-dm-sans">
                Telco
              </span>
              <h2 className="text-text-primary text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-tight font-syne">
                One provider for internet,<br />voice, and mobile.
              </h2>
            </div>
            
            <div className="flex flex-col gap-6 text-text-secondary text-lg leading-relaxed font-dm-sans max-w-xl">
              <p>
                Eliminate the finger-pointing and the hold queues. C9 Telco provides the full stack of business connectivity on one simplified account.
              </p>
            </div>
            
            <Accordion className="w-full flex flex-col gap-4">
              <AccordionItem value="internet" className="bg-white border border-brand-purple/5 px-8 rounded-2xl shadow-sm overflow-hidden data-[state=open]:border-brand-purple transition-all duration-300">
                <AccordionTrigger className="text-text-primary font-bold font-syne text-lg hover:no-underline hover:text-brand-purple transition-all duration-300 py-6">
                  Internet solutions
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary font-dm-sans text-base pb-6 leading-relaxed flex flex-col gap-3">
                  <p>Fast, reliable, and Australian-supported business connectivity.</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-bold font-dm-sans text-brand-purple uppercase tracking-wider mt-2">
                    <li>• Business NBN™</li>
                    <li>• Fast Fibre</li>
                    <li>• Enterprise Ethernet</li>
                    <li>• Fixed Wireless</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="voice" className="bg-white border border-brand-purple/5 px-8 rounded-2xl shadow-sm data-[state=open]:border-brand-purple transition-all duration-300">
                <AccordionTrigger className="text-text-primary font-bold font-syne text-lg hover:no-underline hover:text-brand-purple transition-all duration-300 py-6">
                  Cloud Voice & Unified Comms
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary font-dm-sans text-base pb-6 leading-relaxed flex flex-col gap-3">
                  <p>Professional phone systems that scale with your team, anywhere.</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-bold font-dm-sans text-brand-purple uppercase tracking-wider mt-2">
                    <li>• C9X Cloud Voice</li>
                    <li>• MS Teams Calling</li>
                    <li>• SIP Trunking</li>
                    <li>• Contact Centre</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="mobile" className="bg-white border border-brand-purple/5 px-8 rounded-2xl shadow-sm data-[state=open]:border-brand-purple transition-all duration-300">
                <AccordionTrigger className="text-text-primary font-bold font-syne text-lg hover:no-underline hover:text-brand-purple transition-all duration-300 py-6">
                  Mobile & Hardware
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary font-dm-sans text-base pb-6 leading-relaxed flex flex-col gap-3">
                  <p>Seamlessly connected mobile fleets and enterprise-grade hardware.</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-bold font-dm-sans text-brand-purple uppercase tracking-wider mt-2">
                    <li>• Business Mobile</li>
                    <li>• Handsets & Headsets</li>
                    <li>• Routers & Switches</li>
                    <li>• Access Points</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="flex items-center gap-6 pt-4">
              <Button size="lg" className="bg-brand-purple hover:bg-dark-purple text-white px-10 rounded-full h-14 text-base font-bold font-dm-sans">
                Explore Telco Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            {/* Defense Bridge Callout */}
            <div className="p-6 bg-dark-surface rounded-2xl border-l-[6px] border-brand-purple flex items-center gap-6 shadow-xl relative overflow-hidden group cursor-pointer hover:bg-dark-purple/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-transparent pointer-events-none" />
              <Shield className="text-brand-purple w-8 h-8 shrink-0 relative z-10" />
              <div className="flex flex-col gap-1 relative z-10">
                <p className="text-white text-sm md:text-base font-bold font-syne tracking-tight group-hover:translate-x-1 transition-transform">
                  🛡 Secure your network.
                </p>
                <p className="text-gray-400 text-xs md:text-sm font-dm-sans leading-relaxed">
                  C9 Defense adds continuous monitoring and threat response to your connectivity stack.
                </p>
              </div>
              <ArrowRight className="text-brand-purple w-5 h-5 ml-auto shrink-0 relative z-10 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
