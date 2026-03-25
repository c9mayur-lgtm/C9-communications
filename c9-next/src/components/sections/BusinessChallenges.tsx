import React from 'react';
import { Cpu, ShieldAlert, RefreshCcw, TrendingUp, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const BusinessChallenges = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-6">
          <h2 className="text-text-primary text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-tight font-syne">
            What's your business challenge?
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed font-dm-sans max-w-xl mx-auto">
            We map solutions to outcomes, not just products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-8">
          
          {/* Digital Transformation */}
          <Card className="p-10 bg-white border border-brand-purple/5 shadow-sm rounded-3xl group cursor-pointer hover:border-brand-purple transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="p-4 bg-light-purple-bg rounded-2xl w-fit mb-8 group-hover:bg-brand-purple transition-colors duration-300">
              <Cpu className="text-brand-purple w-8 h-8 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary font-syne mb-4">Digital Transformation</h3>
            <p className="text-text-secondary text-base leading-relaxed font-dm-sans mb-8">
              Modernise infrastructure and unlock productivity with cloud-first architecture and M365 integration.
            </p>
            <div className="mt-auto flex items-center justify-between">
              <Badge className="bg-light-purple-bg text-brand-purple font-bold px-4 py-1.5 rounded-full font-dm-sans text-[11px] uppercase tracking-widest border border-brand-purple/10">
                Managed IT + Modern Workplace
              </Badge>
              <ArrowRight className="text-brand-purple opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </div>
          </Card>

          {/* Security & Compliance */}
          <Card className="p-10 bg-[#0F0F1A] border border-defense-accent/10 shadow-sm rounded-3xl group cursor-pointer hover:border-defense-accent transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="p-4 bg-defense-accent/20 rounded-2xl w-fit mb-8 group-hover:bg-defense-accent transition-colors duration-300">
              <ShieldAlert className="text-defense-accent w-8 h-8 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-white text-2xl font-bold font-syne mb-4">Security & Compliance</h3>
            <p className="text-gray-400 text-base leading-relaxed font-dm-sans mb-8">
              Protect your organisation with Essential 8 compliance, continuous threat monitoring, and tested recovery.
            </p>
            <div className="mt-auto flex items-center justify-between">
              <Badge className="bg-dark-surface text-defense-accent font-bold px-4 py-1.5 rounded-full font-dm-sans text-[11px] uppercase tracking-widest border border-defense-accent/20">
                C9 Defense
              </Badge>
              <ArrowRight className="text-defense-accent opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </div>
          </Card>

          {/* Business Continuity */}
          <Card className="p-10 bg-white border border-brand-purple/5 shadow-sm rounded-3xl group cursor-pointer hover:border-brand-purple transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="p-4 bg-light-purple-bg rounded-2xl w-fit mb-8 group-hover:bg-brand-purple transition-colors duration-300">
              <RefreshCcw className="text-brand-purple w-8 h-8 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary font-syne mb-4 text-left">Business Continuity</h3>
            <p className="text-text-secondary text-base leading-relaxed font-dm-sans mb-8">
              Backup, disaster recovery, and failover — designed to keep your business running no matter what.
            </p>
            <div className="mt-auto flex items-center justify-between">
              <Badge className="bg-light-purple-bg text-brand-purple font-bold px-4 py-1.5 rounded-full font-dm-sans text-[11px] uppercase tracking-widest border border-brand-purple/10">
                Managed IT + C9 Defense
              </Badge>
              <ArrowRight className="text-brand-purple opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </div>
          </Card>

          {/* Growth */}
          <Card className="p-10 bg-white border border-brand-purple/5 shadow-sm rounded-3xl group cursor-pointer hover:border-brand-purple transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="p-4 bg-light-purple-bg rounded-2xl w-fit mb-8 group-hover:bg-brand-purple transition-colors duration-300">
              <TrendingUp className="text-brand-purple w-8 h-8 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary font-syne mb-4">Growth</h3>
            <p className="text-text-secondary text-base leading-relaxed font-dm-sans mb-8">
              Scale your connectivity, workforce tools, and IT capability as your business expands.
            </p>
            <div className="mt-auto flex items-center justify-between">
              <Badge className="bg-light-purple-bg text-brand-purple font-bold px-4 py-1.5 rounded-full font-dm-sans text-[11px] uppercase tracking-widest border border-brand-purple/10">
                Telco + Managed IT
              </Badge>
              <ArrowRight className="text-brand-purple opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </div>
          </Card>
          
        </div>
      </div>
    </section>
  );
};
