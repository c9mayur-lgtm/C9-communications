import React from 'react';
import { Laptop, ShieldCheck, Share2, Globe, Database, Monitor, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MODERN_WORKPLACE_CARDS } from '@/lib/constants';

export const ModernWorkplace = () => {
  const icons = [Laptop, ShieldCheck, Globe, Database, Monitor, Share2];

  return (
    <section className="py-24 md:py-32 bg-light-purple-bg relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[50%] bg-brand-purple/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[50%] bg-dark-purple/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
        <div className="flex flex-col gap-10 max-w-4xl mb-16">
          <div className="flex flex-col gap-4">
            <span className="c9-eyebrow mb-2 block">
              Modern Workplace
            </span>
            <h2 className="c9-section-heading">
              The tools your team needs.<br />Secured and managed.
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {MODERN_WORKPLACE_CARDS.map((card, i) => {
            const Icon = icons[i];
            const isEDR = card.title.includes("Endpoint Detection");
            
            return (
              <Card key={i} className="p-8 bg-white border border-[#5D00D6]/5 shadow-sm rounded-3xl hover:border-[#5D00D6] transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full relative">
                <div className="p-4 bg-[#5D00D6]/5 rounded-2xl w-fit mb-6 group-hover:bg-[#5D00D6] transition-colors duration-300">
                  <Icon size={24} className="text-[#5D00D6] group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="c9-card-title mb-2 group-hover:text-[#5D00D6] transition-colors">
                  {card.title}
                </h3>
                
                <p className="c9-body !text-[14px]">
                  {card.desc}
                </p>
                
                {isEDR && (
                   <div className="mt-auto pt-4">
                      <div className="c9-eyebrow !text-[#5D00D6] cursor-help border-b border-[#5D00D6]/20 pb-1">
                        Pairs with C9 Defense →
                      </div>
                   </div>
                )}
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                   
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Horizontal Promo Strip */}
        <div className="p-10 bg-[#5D00D6] text-white rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
           <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
           <div className="flex items-center gap-6 relative z-10 text-center md:text-left">
              <div className="p-4 bg-white/10 rounded-2xl border border-white/20 shrink-0">
                <Briefcase size={28} />
              </div>
              <h4 className="c9-section-heading !text-white !text-[24px] md:!text-[32px]">Ready to build a smarter workplace?</h4>
           </div>
           <Button className="bg-white text-[#5D00D6] hover:bg-white/90 rounded-full px-10 py-7 h-auto text-[14px] font-bold relative z-10 shadow-lg">
             Book a Workplace Assessment 
           </Button>
        </div>
        
      </div>
    </section>
  );
};
