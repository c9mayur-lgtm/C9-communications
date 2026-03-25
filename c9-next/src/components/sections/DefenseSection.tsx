import React from 'react';
import { ShieldCheck, Eye, RefreshCw, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const DefenseSection = () => {
  return (
    <section className="py-24 md:py-32 bg-dark-surface relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-purple/30" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Content */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-purple/20 border border-brand-purple/30 w-fit">
                <span className="text-[12px] font-bold text-defense-accent uppercase tracking-widest font-dm-sans">
                  C9 Defense
                </span>
              </div>
              <h2 className="text-white text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-tight font-syne">
                Enterprise cybersecurity built for Australian organisations.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-dm-sans max-w-xl">
                The threat landscape is evolving faster than most businesses can defend. C9 Defense provides continuous assurance for your most critical assets.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              {[
                { icon: ShieldCheck, title: "Essential 8 Compliance", desc: "ACSC framework implementation and ongoing assurance." },
                { icon: Eye, title: "Continuous Defence Operations", desc: "24/7 monitoring, threat detection, and response." },
                { icon: RefreshCw, title: "Tested Recovery Assurance", desc: "Verified backup and tested incident recovery workflows." }
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-6 group">
                   <div className="p-4 bg-brand-purple/20 rounded-2xl border border-brand-purple/20 group-hover:bg-brand-purple/30 transition-colors duration-300">
                     <feature.icon className="text-defense-accent w-6 h-6" />
                   </div>
                   <div className="flex flex-col gap-1">
                      <h4 className="text-white text-lg font-bold font-syne tracking-tight">{feature.title}</h4>
                      <p className="text-gray-500 text-sm font-dm-sans leading-relaxed">{feature.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Scorecard */}
          <div className="relative">
            <Card className="p-10 bg-[#1A1A2E] border border-brand-purple/20 shadow-2xl rounded-[40px] flex flex-col gap-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 bg-brand-purple/10 rounded-bl-[40px] opacity-20 transform scale-150 rotate-12">
                 <Shield size={120} strokeWidth={1} className="text-defense-accent" />
               </div>
               
               <div className="relative z-10 flex flex-col gap-2">
                 <h3 className="text-white text-2xl font-bold font-syne">Defense Readiness</h3>
                 <p className="text-gray-500 text-sm font-dm-sans">Live assessment report for your infrastructure.</p>
               </div>
               
               <div className="flex flex-col gap-8 relative z-10">
                 {/* Essential 8 Meter */}
                 <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-xs font-bold font-dm-sans uppercase tracking-[0.2em]">
                       <span className="text-gray-400">Essential 8 Coverage</span>
                       <span className="text-defense-accent">100% Secure</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-brand-purple w-full animate-pulse" />
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                       <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest font-dm-sans">Mean Time to Detect</span>
                       <span className="text-white text-2xl font-bold font-syne tracking-tight">&lt; 15 min</span>
                    </div>
                    <div className="flex flex-col gap-2">
                       <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest font-dm-sans">Recovery Assurance</span>
                       <span className="text-defense-accent text-2xl font-bold font-syne tracking-tight">Verified</span>
                    </div>
                 </div>
               </div>
               
               <Button size="lg" className="bg-brand-purple hover:bg-defense-accent text-white px-10 rounded-full h-14 text-base font-bold font-dm-sans mt-4 relative z-10">
                 Assess My Organisation <ArrowRight className="ml-2 w-5 h-5" />
               </Button>
            </Card>
          </div>
          
        </div>
      </div>
    </section>
  );
};
