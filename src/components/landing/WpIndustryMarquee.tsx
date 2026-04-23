'use client';

import { useMemo } from 'react';
import { 
  HeartPulse, Briefcase, Heart, GraduationCap, 
  ShoppingBag, Home, ArrowRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const INDUSTRIES = [
  {
    tag: 'HEALTHCARE',
    title: 'Healthcare IT & Compliance',
    desc: 'Secure patient data, HIPAA-compliant infrastructure, and 24/7 uptime for clinics and hospitals — so your staff focuses on care, not IT tickets.',
    metrics: [
      { label: 'uptime guaranteed', value: '99.9%' },
      { label: 'avg setup time', value: '48h' }
    ],
    icon: HeartPulse,
  },
  {
    tag: 'PROFESSIONAL SERVICE',
    title: 'IT for Law, Finance & Consulting',
    desc: "Reliable internet, secure cloud storage, and Microsoft 365 management for firms that can't afford downtime — or a data breach.",
    metrics: [
      { label: 'AU data sovereignty', value: '100%' },
      { label: 'avg response time', value: '4hr' }
    ],
    icon: Briefcase,
  },
  {
    tag: 'NON-PROFIT',
    title: 'Affordable IT for Good Causes',
    desc: 'We stretch every dollar with tailored IT packages, nbn, and Microsoft nonprofit licensing — so more of your budget goes to the mission, not infrastructure.',
    metrics: [
      { label: 'avg cost savings', value: '40%' },
      { label: 'Setup fees', value: '$0' }
    ],
    icon: Heart,
  },
  {
    tag: 'EDUCATION',
    title: 'Connected Classrooms & Campuses',
    desc: 'Moving office? We connect your voice, internet, IT, and print before you walk through the door. 500+ relocations completed. Zero downtime reported.',
    metrics: [
      { label: 'Devices Managed', value: '500+' },
      { label: 'Network Uptime', value: '99%' }
    ],
    icon: GraduationCap,
  },
  {
    tag: 'RETAIL',
    title: 'IT That Keeps Your Stores Running',
    desc: 'EFTPOS-ready connectivity, multi-site networking, and instant support when your POS goes down — because every minute of downtime costs you a sale.',
    metrics: [
      { label: 'avg fault response', value: '15min' },
      { label: 'Downtime reported', value: '0' }
    ],
    icon: ShoppingBag,
  },
  {
    tag: 'REAL ESTATE',
    title: 'Fast IT for Fast-Moving Agencies',
    desc: 'Every support call is answered by someone in Australia who knows your account. No offshore centres. No ticket queues. No runaround.',
    metrics: [
      { label: 'Integrations supported', value: '20+' },
      { label: 'Deployment', value: '1 Day' }
    ],
    icon: Home,
  }
];

export const IndustryCard = ({ industry }: { industry: any }) => (
  <div className="bg-[#F9F7FF] border border-[#E9E4FF] rounded-[32px] p-10 shadow-sm hover:shadow-2xl hover:border-[#5D00D6]/30 transition-all group flex flex-col h-full w-full">
    <div className="flex justify-between items-start mb-8">
      <span className="px-4 py-1.5 rounded-full bg-[#5D00D6]/10 text-[#5D00D6] text-[11px] font-bold tracking-widest uppercase">
        {industry.tag}
      </span>
      <div className="w-12 h-12 rounded-2xl bg-white border border-[#E9E4FF] flex items-center justify-center text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors shadow-sm">
        <industry.icon size={24} />
      </div>
    </div>
    
    <h3 className="text-[20px] font-bold text-[#0c1024] mb-3 tracking-tight leading-tight" >
      {industry.title}
    </h3>
    
    <p className="text-gray-500 text-[16px] leading-relaxed mb-10 flex-grow" >
      {industry.desc}
    </p>
    
    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#E9E4FF]">
      {industry.metrics.map((m: any, i: number) => (
        <div key={i} className="flex flex-col">
          <span className="text-[24px] font-bold text-[#5D00D6] leading-none mb-1" >{m.value}</span>
          <span className="text-[11px] text-gray-400 font-bold uppercase tracking-tight">{m.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export const WpIndustryMarquee = () => {
  const col1 = useMemo(() => INDUSTRIES.slice(0, 2), []);
  const col2 = useMemo(() => INDUSTRIES.slice(2, 4), []);
  const col3 = useMemo(() => INDUSTRIES.slice(4, 6), []);

  return (
    <section className="py-12 md:py-16 bg-[#f8f7fc] border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="text-center mb-10">
          <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-[0.3em] mb-4 block" >What we do</span>
          <h2 className="c9-section-heading mb-8">
            Solving IT challenges in every industry, every day.
          </h2>
        </div>

        <div className="relative h-[750px] overflow-hidden mask-fade-v">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start h-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-8 animate-marquee-v-up hover:pause">
              {[...col1, ...col1, ...col1, ...col1].map((item, idx) => (
                <IndustryCard key={`col1-${idx}`} industry={item} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8 animate-marquee-v-down hover:pause">
              {[...col2, ...col2, ...col2, ...col2].map((item, idx) => (
                <IndustryCard key={`col2-${idx}`} industry={item} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="hidden lg:flex flex-col gap-8 animate-marquee-v-up hover:pause">
              {[...col3, ...col3, ...col3, ...col3].map((item, idx) => (
                <IndustryCard key={`col3-${idx}`} industry={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" className="shadow-2xl hover:gap-4 transition-all group rounded-xl">
            Explore Industry Solutions <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

