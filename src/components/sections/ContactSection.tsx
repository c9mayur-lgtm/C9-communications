import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const ContactSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F8F9FA]" id="contact">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Info */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h2 className="c9-section-heading font-sans" >
                Let's build something<br />that works.
              </h2>
              <p className="text-slate-600/90 text-[18px] md:text-[20px] leading-relaxed font-sans max-w-xl" >
                Our Australian team is ready to map out a solution tailored for your business outcomes. No high-pressure sales, just expert advice.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              {[
                { icon: Phone, text: "1800 000 299", sub: "Available 24/7/365 for Australian support." },
                { icon: Mail, text: "Contact our team", sub: "Send a message and we'll respond within 1 business day." },
                { icon: MessageSquare, text: "Client Support Portal", sub: "Existing clients can manage tickets and infrastructure." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 cursor-pointer">
                  <div className="p-4 bg-white rounded-2xl border border-[#5D00D6]/10 text-[#5D00D6] transition-all duration-300 transform group-hover:scale-110 shadow-sm group-hover:shadow-md">
                    <item.icon size={24} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#0c1024] text-[18px] md:text-[20px] font-bold font-sans tracking-tight group-hover:text-[#5D00D6] transition-all duration-300" >{item.text}</span>
                    <p className="text-slate-500 text-[14px] font-sans font-medium" >{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Form */}
          <div className="relative">
             <div className="absolute inset-0 bg-[#5D00D6]/5 rounded-lg transform -rotate-1 scale-105" />
             
             <div className="bg-white p-10 md:p-12 rounded-lg border border-[#5D00D6]/10 shadow-2xl relative z-10 flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                   <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                         <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-sans ml-1" >Your Name</label>
                         <Input placeholder="Full Name" className="bg-[#F8F9FA] border-none rounded-lg h-12 px-4 font-sans focus:ring-[#5D00D6] focus:ring-1"  />
                      </div>
                      <div className="flex flex-col gap-2">
                         <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-sans ml-1" >Phone Number</label>
                         <Input placeholder="+61 (0) 000 000 000" className="bg-[#F8F9FA] border-none rounded-lg h-12 px-4 font-sans focus:ring-[#5D00D6] focus:ring-1"  />
                      </div>
                   </div>
                   
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-sans ml-1" >Email Address</label>
                      <Input placeholder="name@company.com.au" className="bg-[#F8F9FA] border-none rounded-lg h-12 px-4 font-sans focus:ring-[#5D00D6] focus:ring-1"  />
                   </div>
                   
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-sans ml-1" >I'm interested in</label>
                      <Select>
                        <SelectTrigger className="bg-[#F8F9FA] border-none rounded-lg h-12 px-4 font-sans focus:ring-[#5D00D6] focus:ring-1" >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="rounded-lg">
                          <SelectItem value="managed-it">Managed IT</SelectItem>
                          <SelectItem value="telco">Telco</SelectItem>
                          <SelectItem value="modern-workplace">Modern Workplace</SelectItem>
                          <SelectItem value="defense">C9 Defense</SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                   </div>
                   
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-sans ml-1" >Message</label>
                      <Textarea placeholder="How can we help your business?" className="bg-[#F8F9FA] border-none rounded-lg px-4 py-4 min-h-[120px] font-sans focus:ring-[#5D00D6] focus:ring-1"  />
                   </div>
                </div>
                
                <div className="flex flex-col gap-4">
                   <Button size="lg" className="bg-[#5D00D6] hover:bg-[#4c00b0] text-white px-10 rounded-full h-14 text-[14px] font-bold font-sans shadow-lg shadow-[#5D00D6]/20">
                     Send Message 
                   </Button>
                   <p className="text-[11px] text-gray-400 font-bold text-center uppercase tracking-widest font-sans">
                     Australian team responds within 1 business day
                   </p>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

