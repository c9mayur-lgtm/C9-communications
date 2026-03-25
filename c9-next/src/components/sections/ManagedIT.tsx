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
              <span className="text-brand-purple text-[13px] font-bold uppercase tracking-[0.2em] font-dm-sans">
                Managed IT
              </span>
              <h2 className="text-text-primary text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-tight font-syne">
                Your IT, fully managed.<br />Your team, fully focused.
              </h2>
            </div>
            
            <div className="flex flex-col gap-6 text-text-secondary text-lg leading-relaxed font-dm-sans max-w-xl">
              <p>
                We handle the complexity of your technology stack, from 24/7 helpdesk support to strategic infrastructure design, ensuring your operations remain fast, secure, and resilient.
              </p>
              <p>
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
                  <div className="p-1 bg-light-purple-bg rounded-full border border-brand-purple/10">
                    <Check className="text-brand-purple w-4 h-4" />
                  </div>
                  <span className="text-text-primary font-bold text-sm tracking-tight font-dm-sans whitespace-nowrap">
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
            <div className="p-6 bg-dark-surface rounded-2xl border-l-[6px] border-brand-purple flex items-center gap-6 shadow-xl relative overflow-hidden group cursor-pointer hover:bg-dark-purple/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-transparent pointer-events-none" />
              <Shield className="text-brand-purple w-8 h-8 shrink-0 relative z-10" />
              <div className="flex flex-col gap-1 relative z-10">
                <p className="text-white text-sm md:text-base font-bold font-syne tracking-tight group-hover:translate-x-1 transition-transform">
                  🛡 Need compliance assurance?
                </p>
                <p className="text-gray-400 text-xs md:text-sm font-dm-sans leading-relaxed">
                  C9 Defense delivers Essential 8 + continuous monitoring for regulated industries.
                </p>
              </div>
              <ArrowRight className="text-brand-purple w-5 h-5 ml-auto shrink-0 relative z-10 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
          
          {/* Right Column: Interactive Tabs */}
          <div className="relative">
            <div className="absolute inset-0 bg-light-purple-bg rounded-[40px] transform rotate-1 scale-105" />
            
            <Tabs defaultValue="infrastructure" className="w-full relative z-10 bg-white p-8 md:p-12 rounded-[40px] border border-brand-purple/10 shadow-[0_40px_100px_-20px_rgba(93,0,214,0.15)] flex flex-col gap-10">
              <TabsList className="bg-light-purple-bg/50 p-1 rounded-full w-fit mx-auto h-auto">
                <TabsTrigger value="infrastructure" className="rounded-full px-8 py-3 text-sm font-bold data-[state=active]:bg-brand-purple data-[state=active]:text-white data-[state=active]:shadow-md transition-all font-dm-sans">
                  Infrastructure
                </TabsTrigger>
                <TabsTrigger value="helpdesk" className="rounded-full px-8 py-3 text-sm font-bold data-[state=active]:bg-brand-purple data-[state=active]:text-white data-[state=active]:shadow-md transition-all font-dm-sans">
                  Helpdesk
                </TabsTrigger>
                <TabsTrigger value="strategy" className="rounded-full px-8 py-3 text-sm font-bold data-[state=active]:bg-brand-purple data-[state=active]:text-white data-[state=active]:shadow-md transition-all font-dm-sans">
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
                    <Card key={i} className="p-6 bg-white border border-gray-100 shadow-sm hover:border-brand-purple/20 transition-all rounded-2xl group cursor-default h-full">
                      <div className="p-3 bg-light-purple-bg rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                        <item.icon className="text-brand-purple w-6 h-6" />
                      </div>
                      <h4 className="text-text-primary text-[15px] font-bold font-syne mb-1">{item.title}</h4>
                      <p className="text-text-secondary text-[12px] leading-tight font-dm-sans">{item.desc}</p>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="helpdesk" className="mt-0 outline-none animate-in fade-in zoom-in-95 duration-500">
                <div className="flex flex-col gap-8">
                  <div className="p-8 bg-brand-purple/5 rounded-3xl border border-brand-purple/10">
                    <h4 className="text-[20px] font-bold text-text-primary mb-3 font-syne">Unlimited Australian Support</h4>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6 font-dm-sans font-medium">
                      One flat monthly fee for all your remote support needs. No hidden hourly rates. No quotas. Just experts when you need them.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-[24px] font-bold text-brand-purple font-syne">15 min</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Avg. Response Time</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[24px] font-bold text-brand-purple font-syne">24/7/365</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Coverage Hours</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full h-12 rounded-full border-brand-purple/20 text-brand-purple text-sm font-bold font-dm-sans hover:bg-brand-purple/5">
                    View Ticketing Demo
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="strategy" className="mt-0 outline-none animate-in fade-in zoom-in-95 duration-500">
                 <div className="flex flex-col gap-8">
                    <div className="flex items-start gap-6">
                       <div className="p-4 bg-brand-purple text-white rounded-2xl shadow-lg shadow-brand-purple/30 group-hover:rotate-12 transition-transform h-fit">
                         <Lightbulb size={24} />
                       </div>
                       <div className="flex flex-col gap-2">
                         <h4 className="text-[20px] font-bold text-text-primary font-syne">vCIO Services</h4>
                         <p className="text-text-secondary text-sm leading-relaxed font-dm-sans">
                           Quarterly strategy sessions, technology roadmapping, and budget planning to ensure your IT scales with your business goals.
                         </p>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                         <h5 className="text-[14px] font-bold text-text-primary mb-2 font-syne">Risk Assessment</h5>
                         <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                           <div className="bg-brand-purple h-full w-[70%]" />
                         </div>
                       </div>
                       <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                         <h5 className="text-[14px] font-bold text-text-primary mb-2 font-syne">Vendor Audit</h5>
                         <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                           <div className="bg-brand-purple h-full w-[90%]" />
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
