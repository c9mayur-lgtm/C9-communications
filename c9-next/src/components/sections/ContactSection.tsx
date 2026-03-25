import React from 'react';
import { Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';
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
              <h2 className="text-text-primary text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-tight font-syne">
                Let's build something<br />that works.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed font-dm-sans max-w-xl">
                Our Australian team is ready to map out a solution tailored for your business outcomes. No high-pressure sales, just expert advice.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              {[
                { icon: Phone, text: "1800 000 299", sub: "Available 24/7/365 for Australian support." },
                { icon: Mail, text: "Contact our team", sub: "Send a message and we'll respond within 1 business day." },
                { icon: MessageSquare, text: "Client Support Portal", sub: "Existing clients can manage tickets and infrastructure." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group cursor-pointer">
                  <div className="p-4 bg-white rounded-2xl border border-brand-purple/10 text-brand-purple transition-all duration-300 transform group-hover:scale-110 shadow-sm group-hover:shadow-md">
                    <item.icon size={24} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-text-primary text-xl font-bold font-syne tracking-tight group-hover:text-brand-purple transition-all duration-300">{item.text}</span>
                    <p className="text-text-secondary text-sm font-dm-sans font-medium">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Form */}
          <div className="relative">
             <div className="absolute inset-0 bg-brand-purple/5 rounded-[40px] transform -rotate-1 scale-105" />
             
             <div className="bg-white p-10 md:p-12 rounded-[40px] border border-brand-purple/10 shadow-2xl relative z-10 flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                   <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                         <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-dm-sans ml-1">Your Name</label>
                         <Input placeholder="Full Name" className="bg-[#F8F9FA] border-none rounded-xl h-12 px-4 font-dm-sans focus:ring-brand-purple focus:ring-1" />
                      </div>
                      <div className="flex flex-col gap-2">
                         <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-dm-sans ml-1">Phone Number</label>
                         <Input placeholder="+61 (0) 000 000 000" className="bg-[#F8F9FA] border-none rounded-xl h-12 px-4 font-dm-sans focus:ring-brand-purple focus:ring-1" />
                      </div>
                   </div>
                   
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-dm-sans ml-1">Email Address</label>
                      <Input placeholder="name@company.com.au" className="bg-[#F8F9FA] border-none rounded-xl h-12 px-4 font-dm-sans focus:ring-brand-purple focus:ring-1" />
                   </div>
                   
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-dm-sans ml-1">I'm interested in</label>
                      <Select>
                        <SelectTrigger className="bg-[#F8F9FA] border-none rounded-xl h-12 px-4 font-dm-sans focus:ring-brand-purple focus:ring-1">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="managed-it">Managed IT</SelectItem>
                          <SelectItem value="telco">Telco</SelectItem>
                          <SelectItem value="modern-workplace">Modern Workplace</SelectItem>
                          <SelectItem value="defense">C9 Defense</SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                   </div>
                   
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-dm-sans ml-1">Message</label>
                      <Textarea placeholder="How can we help your business?" className="bg-[#F8F9FA] border-none rounded-2xl px-4 py-4 min-h-[120px] font-dm-sans focus:ring-brand-purple focus:ring-1" />
                   </div>
                </div>
                
                <div className="flex flex-col gap-4">
                   <Button size="lg" className="bg-brand-purple hover:bg-dark-purple text-white px-10 rounded-full h-14 text-base font-bold font-dm-sans shadow-lg shadow-brand-purple/20">
                     Send Message <ArrowRight className="ml-2 w-5 h-5" />
                   </Button>
                   <p className="text-[11px] text-gray-400 font-bold text-center uppercase tracking-widest font-dm-sans">
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
