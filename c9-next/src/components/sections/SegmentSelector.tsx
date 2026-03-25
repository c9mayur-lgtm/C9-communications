import React from 'react';
import { Server, Laptop, Signal, Shield, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const SegmentSelector = () => {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <h2 className="text-center text-[40px] md:text-[48px] font-bold text-text-primary tracking-tight font-syne mb-16 px-4">
          One partner. Every layer.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
          
          {/* Managed IT */}
          <Card className="p-10 bg-white border border-brand-purple/5 shadow-sm rounded-3xl flex flex-col hover:border-brand-purple transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="p-4 bg-light-purple-bg rounded-2xl w-fit mb-8 group-hover:bg-brand-purple transition-colors duration-300">
              <Server className="text-brand-purple w-8 h-8 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary font-syne mb-4">Managed IT</h3>
            <p className="text-text-secondary text-base leading-relaxed font-dm-sans mb-8 flex-grow">
              Full-stack IT management — helpdesk, infrastructure, cloud, backup, and strategic consulting for Australian businesses.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {['Helpdesk', 'Cloud Services', 'Strategy & Consulting'].map(pill => (
                <Badge key={pill} variant="secondary" className="bg-light-purple-bg text-brand-purple font-bold px-3 py-1 font-dm-sans rounded-full">
                  {pill}
                </Badge>
              ))}
            </div>
            <Button variant="link" className="text-brand-purple font-bold p-0 flex items-center gap-1 group/btn w-fit">
              Explore Managed IT <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Card>

          {/* Modern Workplace - Elevated */}
          <Card className="p-10 bg-white border border-brand-purple/5 shadow-sm rounded-3xl flex flex-col hover:border-brand-purple transition-all duration-300 transform md:scale-105 z-10 hover:-translate-y-2 group relative overflow-hidden ring-4 ring-brand-purple/5">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-brand-purple" />
            <div className="mb-4">
               <Badge className="bg-brand-purple text-white font-bold px-4 py-1.5 rounded-full font-dm-sans text-[11px] uppercase tracking-widest">
                Included with Managed IT
               </Badge>
            </div>
            <div className="p-4 bg-brand-purple/10 rounded-2xl w-fit mb-8 group-hover:bg-brand-purple transition-colors duration-300">
              <Laptop className="text-brand-purple w-8 h-8 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary font-syne mb-4">Modern Workplace</h3>
            <p className="text-text-secondary text-base leading-relaxed font-dm-sans mb-8 flex-grow">
              Microsoft 365, secure remote work, endpoint protection, collaboration tools, and smart office technology.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {['Microsoft 365', 'EDR', 'Smart Boards'].map(pill => (
                <Badge key={pill} variant="secondary" className="bg-light-purple-bg text-brand-purple font-bold px-3 py-1 font-dm-sans rounded-full">
                  {pill}
                </Badge>
              ))}
            </div>
            <Button variant="link" className="text-brand-purple font-bold p-0 flex items-center gap-1 group/btn w-fit">
              Explore Modern Workplace <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Card>

          {/* Telco */}
          <Card className="p-10 bg-white border border-brand-purple/5 shadow-sm rounded-3xl flex flex-col hover:border-brand-purple transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="p-4 bg-light-purple-bg rounded-2xl w-fit mb-8 group-hover:bg-brand-purple transition-colors duration-300">
              <Signal className="text-brand-purple w-8 h-8 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary font-syne mb-4">Telco</h3>
            <p className="text-text-secondary text-base leading-relaxed font-dm-sans mb-8 flex-grow">
              Business NBN, cloud voice, mobile plans, and hardware — all on one bill with one point of contact.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {['Business NBN', 'C9X Voice', 'Mobile'].map(pill => (
                <Badge key={pill} variant="secondary" className="bg-light-purple-bg text-brand-purple font-bold px-3 py-1 font-dm-sans rounded-full">
                  {pill}
                </Badge>
              ))}
            </div>
            <Button variant="link" className="text-brand-purple font-bold p-0 flex items-center gap-1 group/btn w-fit">
              Explore Telco <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Card>
          
        </div>
        
        {/* Defense Barrier */}
        <div className="mt-20 p-8 md:p-12 bg-dark-surface rounded-3xl border border-defense-accent/20 flex flex-col md:flex-row items-center gap-8 shadow-2xl overflow-hidden relative group">
           <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
           
           <div className="p-4 bg-defense-accent/20 rounded-2xl border border-defense-accent/20 z-10 shrink-0">
             <Shield className="text-defense-accent w-10 h-10" />
           </div>
           
           <div className="flex-grow z-10 text-center md:text-left">
             <h4 className="text-white text-[18px] md:text-[22px] font-bold font-syne mb-2 tracking-tight">
               Protecting Australian organisations with enterprise cybersecurity
             </h4>
             <p className="text-gray-400 text-sm md:text-base font-dm-sans max-w-2xl">
               Essential 8 compliance, continuous defence, and tested recovery.
             </p>
           </div>
           
           <Button variant="outline" className="border-defense-accent text-white hover:bg-defense-accent/10 rounded-full px-8 py-6 h-auto font-bold font-dm-sans z-10 shrink-0">
             Discover C9 Defense <ArrowRight className="ml-2 w-5 h-5" />
           </Button>
        </div>
        
      </div>
    </section>
  );
};
