import React from 'react';
import { Cpu, ShieldAlert, RefreshCcw, TrendingUp, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const BusinessChallenges = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-6">
          <h2 className="c9-section-heading">
            What's your business challenge?
          </h2>
          <p className="c9-body mx-auto max-w-xl font-medium">
            We map solutions to outcomes, not just products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-8">
          
          {/* Digital Transformation */}
          <Card className="p-10 bg-white border border-[#5D00D6]/5 shadow-sm rounded-3xl group cursor-pointer hover:border-[#5D00D6] transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="p-4 bg-[#5D00D6]/5 rounded-2xl w-fit mb-8 group-hover:bg-[#5D00D6] transition-colors duration-300">
              <Cpu className="text-[#5D00D6] w-8 h-8 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="c9-card-title mb-4">Digital Transformation</h3>
            <p className="c9-body mb-8">
              Modernise infrastructure and unlock productivity with cloud-first architecture and M365 integration.
            </p>
            <div className="mt-auto flex items-center justify-between">
              <Badge className="bg-[#5D00D6]/5 text-[#5D00D6] px-4 py-1.5 rounded-full c9-eyebrow border border-[#5D00D6]/10">
                Managed IT + Modern Workplace
              </Badge>
              <ArrowRight className="text-[#5D00D6] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </div>
          </Card>

          {/* Security & Compliance */}
          <Card className="p-10 bg-[#0F0F1A] border border-[#A855F7]/10 shadow-sm rounded-3xl group cursor-pointer hover:border-[#A855F7] transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="p-4 bg-[#A855F7]/20 rounded-2xl w-fit mb-8 group-hover:bg-[#A855F7] transition-colors duration-300">
              <ShieldAlert className="text-[#A855F7] w-8 h-8 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="c9-card-title !text-white mb-4">Security & Compliance</h3>
            <p className="c9-body !text-gray-400 mb-8">
              Protect your organisation with Essential 8 compliance, continuous threat monitoring, and tested recovery.
            </p>
            <div className="mt-auto flex items-center justify-between">
              <Badge className="bg-slate-900 text-[#A855F7] px-4 py-1.5 rounded-full c9-eyebrow border border-[#A855F7]/20">
                C9 Defense
              </Badge>
              <ArrowRight className="text-[#A855F7] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </div>
          </Card>

          {/* Business Continuity */}
          <Card className="p-10 bg-white border border-[#5D00D6]/5 shadow-sm rounded-3xl group cursor-pointer hover:border-[#5D00D6] transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="p-4 bg-[#5D00D6]/5 rounded-2xl w-fit mb-8 group-hover:bg-[#5D00D6] transition-colors duration-300">
              <RefreshCcw className="text-[#5D00D6] w-8 h-8 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="c9-card-title mb-4">Business Continuity</h3>
            <p className="c9-body mb-8">
              Backup, disaster recovery, and failover — designed to keep your business running no matter what.
            </p>
            <div className="mt-auto flex items-center justify-between">
              <Badge className="bg-[#5D00D6]/5 text-[#5D00D6] px-4 py-1.5 rounded-full c9-eyebrow border border-[#5D00D6]/10">
                Managed IT + C9 Defense
              </Badge>
              <ArrowRight className="text-[#5D00D6] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </div>
          </Card>

          {/* Growth */}
          <Card className="p-10 bg-white border border-[#5D00D6]/5 shadow-sm rounded-3xl group cursor-pointer hover:border-[#5D00D6] transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="p-4 bg-[#5D00D6]/5 rounded-2xl w-fit mb-8 group-hover:bg-[#5D00D6] transition-colors duration-300">
              <TrendingUp className="text-[#5D00D6] w-8 h-8 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="c9-card-title mb-4">Growth</h3>
            <p className="c9-body mb-8">
              Scale your connectivity, workforce tools, and IT capability as your business expands.
            </p>
            <div className="mt-auto flex items-center justify-between">
              <Badge className="bg-[#5D00D6]/5 text-[#5D00D6] px-4 py-1.5 rounded-full c9-eyebrow border border-[#5D00D6]/10">
                Telco + Managed IT
              </Badge>
              <ArrowRight className="text-[#5D00D6] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </div>
          </Card>
          
        </div>
      </div>
    </section>
  );
};
