import React from 'react';
import { Signal, Shield, Monitor, Smartphone, Headphones, Phone } from 'lucide-react';
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
                { name: "C9 phone system Managed Handset", icon: Phone, color: "from-blue-500/10 to-transparent" },
                { name: "Wireless Enterprise AP", icon: Signal, color: "from-brand-purple/10 to-transparent" },
                { name: "Premium Headset", icon: Headphones, color: "from-indigo-500/10 to-transparent" },
                { name: "Security Gateway / Router", icon: Shield, color: "from-cyan-500/10 to-transparent" }
              ].map((product, i) => {
                const Icon = product.icon;
                return (
                  <div key={i} className="bg-white p-8 rounded-[32px] border border-brand-purple/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden relative">
                     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-brand-purple/5 to-transparent pointer-events-none" />
                     
                     <div className="flex flex-col items-center gap-6 relative z-10">
                        <div className={`p-6 rounded-2xl bg-gradient-to-br ${product.color} group-hover:scale-110 duration-500`}>
                          <Icon className="text-[#5D00D6] w-8 h-8" />
                        </div>
                        <span className="c9-eyebrow !text-[#0c1024] !text-[12px] text-center">
                          {product.name}
                        </span>
                     </div>
                     
                     <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#5D00D6]/5 rounded-tl-full translate-x-4 translate-y-4 group-hover:scale-150 duration-700" />
                  </div>
                );
              })}
              
              {/* Promo Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-[#5D00D6] text-white rounded-3xl shadow-[0_20px_60px_-10px_rgba(93,0,214,0.6)] z-20 flex flex-col items-center gap-2 w-56 text-center transform -rotate-6 hover:rotate-0 cursor-pointer">
                 <span className="c9-eyebrow !text-white opacity-80">Upgrade to C9 phone system</span>
                 <span className="text-[28px] font-black leading-none">Save 70%</span>
                 <span className="c9-body !text-white !text-xs">on your call costs</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Content */}
          <div className="flex flex-col gap-10 order-1 lg:order-2">
            <div className="flex flex-col gap-4">
              <span className="c9-eyebrow mb-2 block">
                Telco
              </span>
              <h2 className="c9-section-heading">
                One provider for internet,<br />voice, and mobile.
              </h2>
            </div>
            
            <div className="flex flex-col gap-6 max-w-xl">
              <p className="c9-body">
                Eliminate the finger-pointing and the hold queues. C9 Telco provides the full stack of business connectivity on one simplified account.
              </p>
            </div>
            
            <Accordion className="w-full flex flex-col gap-4">
              <AccordionItem value="internet" className="bg-white border border-[#5D00D6]/5 px-8 rounded-2xl shadow-sm overflow-hidden data-[state=open]:border-[#5D00D6] transition-all duration-300">
                <AccordionTrigger className="c9-card-title !text-[18px] hover:no-underline hover:text-[#5D00D6] transition-all duration-300 py-6">
                  Internet solutions
                </AccordionTrigger>
                <AccordionContent className="c9-body pb-6 flex flex-col gap-3">
                  <p>Fast, reliable, and Australian-supported business connectivity.</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 c9-eyebrow !text-[#5D00D6] mt-2">
                    <li>• Small Business nbn™</li>
                    <li>• Fast Fibre</li>
                    <li>• Enterprise Ethernet</li>
                    <li>• Fixed Wireless</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="voice" className="bg-white border border-[#5D00D6]/5 px-8 rounded-2xl shadow-sm data-[state=open]:border-[#5D00D6] transition-all duration-300">
                <AccordionTrigger className="c9-card-title !text-[18px] hover:no-underline hover:text-[#5D00D6] transition-all duration-300 py-6">
                  Cloud Voice & Unified Comms
                </AccordionTrigger>
                <AccordionContent className="c9-body pb-6 flex flex-col gap-3">
                  <p>Professional phone systems that scale with your team, anywhere.</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 c9-eyebrow !text-[#5D00D6] mt-2">
                    <li>• C9 phone system Cloud Voice</li>
                    <li>• MS Teams Calling</li>
                    <li>• SIP Trunking</li>
                    <li>• Contact Centre</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="mobile" className="bg-white border border-[#5D00D6]/5 px-8 rounded-2xl shadow-sm data-[state=open]:border-[#5D00D6] transition-all duration-300">
                <AccordionTrigger className="c9-card-title !text-[18px] hover:no-underline hover:text-[#5D00D6] transition-all duration-300 py-6">
                  Mobile & Hardware
                </AccordionTrigger>
                <AccordionContent className="c9-body pb-6 flex flex-col gap-3">
                  <p>Seamlessly connected mobile fleets and enterprise-grade hardware.</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 c9-eyebrow !text-[#5D00D6] mt-2">
                    <li>• Business Mobile</li>
                    <li>• Handsets & Headsets</li>
                    <li>• Routers & Switches</li>
                    <li>• Access Points</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="flex items-center gap-6 pt-4">
              <Button size="lg" className="bg-[#5D00D6] hover:bg-[#4c00b0] text-white px-10 rounded-full h-14 text-[14px] font-bold shadow-lg shadow-[#5D00D6]/20">
                Explore Telco Solutions 
              </Button>
            </div>
            
            {/* Defense Bridge Callout */}
            <div className="p-6 bg-[#0c1024] rounded-2xl border-l-[6px] border-[#5D00D6] flex items-center gap-6 shadow-xl relative overflow-hidden cursor-pointer hover:bg-[#5D00D6]/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5D00D6]/10 to-transparent pointer-events-none" />
              <Shield className="text-[#5D00D6] w-8 h-8 shrink-0 relative z-10" />
              <div className="flex flex-col gap-1 relative z-10">
                <p className="c9-card-title !text-white !text-[16px]">
                  🛡 Secure your network.
                </p>
                <p className="c9-body !text-gray-400 !text-[14px]">
                  C9 Defense adds continuous monitoring and threat response to your connectivity stack.
                </p>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
