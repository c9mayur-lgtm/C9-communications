import React from 'react';
import { Cpu, ShieldAlert, RefreshCcw, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const BusinessChallenges = () => {
  const challenges = [
    {
      slug: 'digital-transformation',
      title: 'Digital Transformation',
      desc: 'Modernise infrastructure and unlock productivity with cloud-first architecture and M365 integration.',
      icon: Cpu,
      badge: 'Managed IT + Modern Workplace',
      secondary: false
    },
    {
      slug: 'security-compliance',
      title: 'Security & Compliance',
      desc: 'Protect your organisation with Essential 8 compliance, continuous threat monitoring, and tested recovery.',
      icon: ShieldAlert,
      badge: 'C9 Defense',
      secondary: true
    },
    {
      slug: 'business-continuity',
      title: 'Business Continuity',
      desc: 'Backup, disaster recovery, and failover — designed to keep your business running no matter what.',
      icon: RefreshCcw,
      badge: 'Managed IT + C9 Defense',
      secondary: false
    },
    {
      slug: 'growth-scalability',
      title: 'Growth & Scalability',
      desc: 'Scale your connectivity, workforce tools, and IT capability as your business expands.',
      icon: TrendingUp,
      badge: 'Telco + Managed IT',
      secondary: false
    }
  ];

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
          {challenges.map((item, idx) => (
            <Link key={idx} href={`/challenges/${item.slug}`} className="flex">
              <Card className={`p-10 border shadow-sm rounded-3xl group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 flex flex-col w-full ${
                item.secondary 
                  ? 'bg-[#0F0F1A] border-[#A855F7]/10 hover:border-[#A855F7]' 
                  : 'bg-white border-[#5D00D6]/5 hover:border-[#5D00D6]'
              }`}>
                <div className={`p-4 rounded-2xl w-fit mb-8 transition-colors duration-300 ${
                  item.secondary 
                    ? 'bg-[#A855F7]/20 group-hover:bg-[#A855F7]' 
                    : 'bg-[#5D00D6]/5 group-hover:bg-[#5D00D6]'
                }`}>
                  <item.icon className={`w-8 h-8 transition-colors duration-300 ${
                    item.secondary 
                      ? 'text-[#A855F7] group-hover:text-white' 
                      : 'text-[#5D00D6] group-hover:text-white'
                  }`} />
                </div>
                <h3 className={`c9-card-title mb-4 ${item.secondary ? '!text-white' : ''}`}>
                  {item.title}
                </h3>
                <p className={`c9-body mb-8 ${item.secondary ? '!text-gray-400' : ''}`}>
                  {item.desc}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <Badge className={`px-4 py-1.5 rounded-full c9-eyebrow border ${
                    item.secondary 
                      ? 'bg-slate-900 text-[#A855F7] border-[#A855F7]/20' 
                      : 'bg-[#5D00D6]/5 text-[#5D00D6] border-[#5D00D6]/10'
                  }`}>
                    {item.badge}
                  </Badge>
                  <ArrowRight className={`${
                    item.secondary ? 'text-[#A855F7]' : 'text-[#5D00D6]'
                  } opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1`} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

