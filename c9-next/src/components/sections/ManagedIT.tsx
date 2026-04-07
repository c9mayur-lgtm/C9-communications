import React from 'react';
import { Check, Shield, Server, Headphones, Lightbulb, ArrowRight, Activity, Cloud, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

export const ManagedIT = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Content */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="c9-eyebrow mb-2 block">
                Managed IT
              </span>
              <h2 className="c9-section-heading">
                Your IT, fully managed.<br />Your team, fully focused.
              </h2>
            </div>
            
            <div className="flex flex-col gap-6 max-w-xl">
              <p className="c9-body">
                We handle the complexity of your technology stack, from 24/7 helpdesk support to strategic infrastructure design, ensuring your operations remain fast, secure, and resilient.
              </p>
              <p className="c9-body">
                Our managed service model is built for Australian SMEs and mid-market organisations that require enterprise-grade IT capability without the overhead of building it internally.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Helpdesk & 24/7 support",
                "IT infrastructure design & management",
                "Cloud migrations & management",
                "Backup, DR, and continuity"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-1 bg-[#5D00D6]/5 rounded-full border border-[#5D00D6]/10">
                    <Check className="text-[#5D00D6] w-4 h-4" />
                  </div>
                  <span className="c9-body !text-[14px] font-bold whitespace-nowrap">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <Button size="lg" className="bg-brand-purple hover:bg-dark-purple text-white px-10 rounded-full h-14 text-base font-bold font-dm-sans shadow-lg shadow-brand-purple/20">
                Get a Managed IT Assessment <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            {/* Defense Bridge Callout */}
            <div className="p-6 bg-[#0c1024] rounded-2xl border-l-[6px] border-[#5D00D6] flex items-center gap-6 shadow-xl relative overflow-hidden group cursor-pointer hover:bg-[#5D00D6]/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5D00D6]/10 to-transparent pointer-events-none" />
              <Shield className="text-[#5D00D6] w-8 h-8 shrink-0 relative z-10" />
              <div className="flex flex-col gap-1 relative z-10">
                <p className="c9-card-title !text-white !text-[16px] group-hover:translate-x-1 transition-transform">
                  🛡 Need compliance assurance?
                </p>
                <p className="c9-body !text-gray-400 !text-[14px]">
                  C9 Defense delivers Essential 8 + continuous monitoring for regulated industries.
                </p>
              </div>
              <ArrowRight className="text-[#5D00D6] w-5 h-5 ml-auto shrink-0 relative z-10 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
          
          {/* Right Column: Interactive Tabs */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#5D00D6]/5 rounded-[40px] transform rotate-1 scale-105" />
            
            <Tabs defaultValue="infrastructure" className="w-full relative z-10 bg-white p-8 md:p-12 rounded-[40px] border border-[#5D00D6]/10 shadow-[0_40px_100px_-20px_rgba(93,0,214,0.15)] flex flex-col gap-10">
              <TabsList className="bg-[#5D00D6]/5 p-1 rounded-full w-fit mx-auto h-auto">
                <TabsTrigger value="infrastructure" className="rounded-full px-8 py-3 c9-eyebrow !text-slate-500 data-[state=active]:bg-[#5D00D6] data-[state=active]:text-white data-[state=active]:shadow-md transition-all">
                  Infrastructure
                </TabsTrigger>
                <TabsTrigger value="helpdesk" className="rounded-full px-8 py-3 c9-eyebrow !text-slate-500 data-[state=active]:bg-[#5D00D6] data-[state=active]:text-white data-[state=active]:shadow-md transition-all">
                  Helpdesk
                </TabsTrigger>
                <TabsTrigger value="strategy" className="rounded-full px-8 py-3 c9-eyebrow !text-slate-500 data-[state=active]:bg-[#5D00D6] data-[state=active]:text-white data-[state=active]:shadow-md transition-all">
                  Strategy
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="infrastructure" className="mt-0 outline-none animate-in fade-in zoom-in-95 duration-500">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { title: "Network", desc: "Enterprise scale connectivity", icon: Activity },
                    { title: "Cloud", desc: "Private & public management", icon: Cloud },
                    { title: "Storage", desc: "Fast & distributed systems", icon: Server },
                    { title: "Software", desc: "Custom business logic", icon: Terminal }
                  ].map((item, i) => (
                    <Card key={i} className="p-6 bg-white border border-gray-100 shadow-sm hover:border-[#5D00D6]/20 transition-all rounded-2xl group cursor-default h-full">
                      <div className="p-3 bg-[#5D00D6]/5 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                        <item.icon className="text-[#5D00D6] w-6 h-6" />
                      </div>
                      <h4 className="c9-card-title !text-[15px] mb-1">{item.title}</h4>
                      <p className="c9-body !text-[12px] leading-tight">{item.desc}</p>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="helpdesk" className="mt-0 outline-none animate-in fade-in zoom-in-95 duration-500">
                <div className="flex flex-col gap-8">
                  <div className="p-8 bg-[#5D00D6]/5 rounded-3xl border border-[#5D00D6]/10">
                    <h4 className="text-[20px] font-bold text-[#0c1024] mb-3">Unlimited Australian Support</h4>
                    <p className="c9-body !text-[14px]">
                      One flat monthly fee for all your remote support needs. No hidden hourly rates. No quotas. Just experts when you need them.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-[24px] font-bold text-[#5D00D6]">15 min</span>
                        <span className="c9-eyebrow !text-gray-500 !text-[10px]">Avg. Response Time</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[24px] font-bold text-[#5D00D6]">24/7/365</span>
                        <span className="c9-eyebrow !text-gray-500 !text-[10px]">Coverage Hours</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full h-12 rounded-full border-[#5D00D6]/20 text-[#5D00D6] text-sm font-bold hover:bg-[#5D00D6]/5">
                    View Ticketing Demo
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="strategy" className="mt-0 outline-none animate-in fade-in zoom-in-95 duration-500">
                 <div className="flex flex-col gap-8">
                    <div className="flex items-start gap-6">
                       <div className="p-4 bg-[#5D00D6] text-white rounded-2xl shadow-lg shadow-[#5D00D6]/30 group-hover:rotate-12 transition-transform h-fit">
                         <Lightbulb size={24} />
                       </div>
                       <div className="flex flex-col gap-2">
                         <h4 className="text-[20px] font-bold text-[#0c1024]">vCIO Services</h4>
                         <p className="c9-body !text-[14px]">
                           Quarterly strategy sessions, technology roadmapping, and budget planning to ensure your IT scales with your business goals.
                         </p>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                         <h5 className="c9-eyebrow !text-[#0c1024] mb-2">Risk Assessment</h5>
                         <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                           <div className="bg-[#5D00D6] h-full w-[70%]" />
                         </div>
                       </div>
                       <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                         <h5 className="c9-eyebrow !text-[#0c1024] mb-2">Vendor Audit</h5>
                         <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                           <div className="bg-[#5D00D6] h-full w-[90%]" />
                         </div>
                       </div>
                    </div>
                 </div>
              </TabsContent>
            </Tabs>
          </div>
          
        </div>
      </div>
    </section>
  );
};
