'use client';

import React from 'react';
import { ArrowRight, Building2, Rocket, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useAudience } from '@/components/context/AudienceContext';
import { cn } from '@/lib/utils';

export const AudienceSolutions = () => {
  const { setAudience } = useAudience();

  const cards = [
    {
      id: 'startup',
      icon: <Rocket className="w-8 h-8 text-[#5D00D6]" />,
      title: "Greenfield Business Launch",
      description: "Opening a new office, showroom, or shop? We synchronize your entire technology stack—from internet and 5G backup to CCTV, printers, and monitors—before your launch day.",
      cta: "Full Growth Solution",
      href: "/greenfield"
    },
    {
      id: 'business',
      icon: <ShieldAlert className="w-8 h-8 text-[#5D00D6]" />,
      title: "Already Running but Facing Issues",
      description: "We take over, fix gaps, and manage everything. Get out of the 'break-fix' cycle and into optimized, scalable performance.",
      cta: "See Full Solution",
      href: "/managed-it/strategy-consulting"
    },
    {
      id: 'enterprise',
      icon: <Building2 className="w-8 h-8 text-[#5D00D6]" />,
      title: "Enterprise & Multi-site Operations",
      description: "Scalable, secure, fully managed infrastructure. High-availability connectivity and compliance-first IT for complex environments.",
      cta: "See Full Solution",
      href: "/telco/enterprise-ethernet"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="text-center mb-16">
          <h2 className="c9-section-heading">
            How can we help you today?
          </h2>
          <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
            Choose the path that best describes your situation and discover how C9 can streamline your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div 
              key={card.id}
              className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-purple/20 transition-all duration-500 flex flex-col h-full"
            >
              <div className="mb-6 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-brand-purple/5 transition-colors">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-purple transition-colors">
                {card.title}
              </h3>

              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                {card.description}
              </p>

              <Link href={card.href}>
                <Button 
                  onClick={() => setAudience(card.id as any)}
                  variant="outline" 
                  className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white rounded-full h-12 font-bold group-hover:shadow-md transition-all"
                >
                  {card.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
