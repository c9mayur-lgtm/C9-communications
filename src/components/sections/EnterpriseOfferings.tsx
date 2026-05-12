'use client';

import React from 'react';
import { Check, ArrowRight, ChevronDown, TrendingUp, Info } from 'lucide-react';
import { ENTERPRISE_OFFERINGS_DATA, EnterpriseTier } from '@/data/enterprise-offerings';
import { FadeIn } from '../animations/FadeIn';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const C = "max-w-[1400px] mx-auto px-6 md:px-10";

export const EnterpriseOfferingsSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className={C}>
        {/* Section Header */}
        <div className="mb-20">
          <FadeIn>
            <span className="c9-eyebrow mb-4 bg-[#5D00D6]/5 px-3 py-1 inline-block rounded-full">
              ENTERPRISE CAPABILITIES
            </span>
            <h2 className="c9-section-heading mb-6">
              Strategic Infrastructure <br />for <span className="text-[#5D00D6]">Enterprise Scale.</span>
            </h2>
            <p className="c9-body max-w-3xl text-slate-600">
              We don't believe in one-size-fits-all. Every enterprise has unique operational constraints and 
              compliance mandates. Our solutions are designed to consolidate complexity into a single, 
              accountable managed environment.
            </p>
          </FadeIn>
        </div>

        {/* Capability Matrix - Desktop View */}
        <FadeIn delay={0.2} className="hidden lg:block">
          <div className="overflow-hidden border border-slate-200 rounded-[32px] shadow-sm bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200">
                  <th className="text-left py-6 px-8 font-clash font-bold text-slate-900 text-lg w-1/3">Capability</th>
                  <th className="text-center py-6 px-4 font-clash font-bold text-slate-900 text-lg">Foundation</th>
                  <th className="text-center py-6 px-4 font-clash font-bold text-[#5D00D6] text-lg bg-[#5D00D6]/5 relative">
                    Strategic
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#5D00D6] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                      Most Popular
                    </span>
                  </th>
                  <th className="text-center py-6 px-4 font-clash font-bold text-slate-900 text-lg">Premium</th>
                  <th className="text-center py-6 px-4 font-clash font-bold text-slate-900 text-lg">Custom</th>
                </tr>
              </thead>
              <tbody>
                {/* Core Services Section */}
                <tr className="bg-slate-50/30">
                  <td colSpan={5} className="py-3 px-8 font-black text-[10px] text-slate-400 uppercase tracking-widest">
                    Core Managed Infrastructure
                  </td>
                </tr>
                <MatrixRow label="Internet Infrastructure" foundation strategic premium custom />
                <MatrixRow label="Network & Security Controls" foundation strategic premium custom />
                <MatrixRow label="Unified Communications" foundation strategic premium custom />
                <MatrixRow label="Email & Collaboration" foundation strategic premium custom />

                {/* Advanced Services */}
                <tr className="bg-slate-50/30 border-t border-slate-100">
                  <td colSpan={5} className="py-3 px-8 font-black text-[10px] text-slate-400 uppercase tracking-widest">
                    Advanced Digital Services
                  </td>
                </tr>
                <MatrixRow label="Security & Surveillance (CCTV)" foundation={false} strategic premium custom />
                <MatrixRow label="Managed Print Infrastructure" foundation={false} strategic premium custom />
                <MatrixRow label="Modern Workplace (MDM/Zero Trust)" foundation={false} strategic={false} premium custom />
                <MatrixRow label="Enterprise Access Control" foundation={false} strategic={false} premium custom />
                <MatrixRow label="Cyber Governance & Auditing" foundation={false} strategic={false} premium custom />

                {/* Guarantees */}
                <tr className="bg-slate-50/30 border-t border-slate-100">
                  <td colSpan={5} className="py-3 px-8 font-black text-[10px] text-slate-400 uppercase tracking-widest">
                    Governance & Support SLAs
                  </td>
                </tr>
                <MatrixRow label="Uptime SLA" foundation="99.99%" strategic="99.99%" premium="99.99%" custom="Custom" />
                <MatrixRow label="Incident Response Guarantee" foundation="2 Hours" strategic="1 Hour" premium="30 Min" custom="Custom" />
                <MatrixRow label="Support Model" foundation="24/7" strategic="24/7" premium="24/7" custom="Custom" />
                <MatrixRow label="Financial Downtime Penalties" foundation strategic premium custom />
                <MatrixRow label="Dedicated Account Management" foundation={false} strategic premium custom />
                <MatrixRow label="Operational Strategic Reviews" foundation="Monthly" strategic="Quarterly" premium="Monthly" custom="Custom" />
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* Expandable Details Section */}
        <div className="mt-24">
          <FadeIn>
            <h3 className="text-3xl font-bold text-slate-900 mb-10 font-clash">Detailed Solution Matrix</h3>
          </FadeIn>
          
          <div className="space-y-6">
            {ENTERPRISE_OFFERINGS_DATA.map((tier, idx) => (
              <FadeIn key={tier.id} delay={idx * 0.1}>
                <OfferingAccordion tier={tier} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Custom Quote Section */}
        <FadeIn delay={0.4}>
          <div className="mt-24 p-10 md:p-20 bg-slate-900 text-white rounded-[48px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
               <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-[#5D00D6] rounded-full blur-[120px]" />
            </div>

            <div className="max-w-3xl relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold mb-8 font-clash leading-tight">
                Complex Environments Require <span className="text-[#5D00D6]">Custom Architecture.</span>
              </h3>
              
              <p className="text-lg text-white/60 mb-10 leading-relaxed font-dm-sans">
                If your enterprise operates across 50+ locations, maintains strict regulatory compliance, 
                or requires deep integration with legacy industrial systems, our architects will design 
                 a bespoke governance model for you.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                {[
                  "Multi-site redundancy design",
                  "Regulatory compliance mapping",
                  "Custom incident hierarchies",
                  "Executive operational dashboarding"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#5D00D6]" />
                    <span className="text-[15px] font-medium font-dm-sans text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="#consultation-section">
                  <button className="bg-[#5D00D6] text-white font-bold py-4 px-10 rounded-full hover:bg-[#4d00b3] transition-all duration-300 uppercase tracking-widest text-[13px] shadow-xl shadow-purple-900/40">
                    Schedule Executive Briefing
                  </button>
                </Link>
                <Link href="/enterprise/capabilities-guide">
                  <button className="bg-transparent border-2 border-white/20 text-white font-bold py-4 px-10 rounded-full hover:border-white transition-all duration-300 uppercase tracking-widest text-[13px]">
                    Download Capabilities Guide
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const MatrixRow = ({ label, foundation, strategic, premium, custom }: { 
  label: string; 
  foundation: boolean | string; 
  strategic: boolean | string; 
  premium: boolean | string; 
  custom: boolean | string; 
}) => {
  const renderCell = (val: boolean | string, isStrategic: boolean = false) => {
    if (typeof val === 'string') return <span className="text-sm font-bold text-slate-600">{val}</span>;
    return val ? (
      <div className="flex justify-center">
        <div className={`w-8 h-8 rounded-full ${isStrategic ? 'bg-[#5D00D6] text-white' : 'bg-[#5D00D6]/10 text-[#5D00D6]'} flex items-center justify-center`}>
          <Check size={18} strokeWidth={3} />
        </div>
      </div>
    ) : (
      <span className="text-slate-300 font-bold">—</span>
    );
  };

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
      <td className="py-6 px-8 text-slate-700 font-bold text-[15px] group-hover:text-slate-900">{label}</td>
      <td className="text-center py-6 px-4">{renderCell(foundation)}</td>
      <td className="text-center py-6 px-4 bg-[#5D00D6]/[0.02]">{renderCell(strategic, true)}</td>
      <td className="text-center py-6 px-4">{renderCell(premium)}</td>
      <td className="text-center py-6 px-4">{renderCell(custom)}</td>
    </tr>
  );
};

const OfferingAccordion = ({ tier }: { tier: EnterpriseTier }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={tier.id} className="border border-slate-200 rounded-[32px] px-8 bg-white mb-4 overflow-hidden">
        <AccordionTrigger className="hover:no-underline py-8 group">
          <div className="flex items-center justify-between w-full pr-6">
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tier.badge ? 'bg-[#5D00D6] text-white' : 'bg-slate-100 text-slate-400'}`}>
                <Zap size={24} />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold text-slate-900 font-clash">{tier.name}</h3>
                  {tier.badge && (
                    <span className="bg-[#5D00D6] text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">
                      {tier.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-500 font-medium font-dm-sans">{tier.subtitle}</p>
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-10 pt-4">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 border-t border-slate-100 pt-10">
            <div className="space-y-12">
              <p className="c9-body !text-lg !text-slate-700">{tier.description}</p>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="c9-eyebrow !text-[#5D00D6] mb-6">Core Capability Set</h4>
                  <ul className="space-y-4">
                    {tier.coreServices.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#5D00D6] mt-0.5 shrink-0" />
                        <span className="text-[15px] text-slate-700 font-dm-sans leading-tight">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="c9-eyebrow !text-slate-400 mb-6">Guarantees & Compliance</h4>
                  <ul className="space-y-4">
                    {tier.guarantees.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-[15px] text-slate-600 font-dm-sans leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="c9-eyebrow !text-slate-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#5D00D6]" />
                  Strategic Business Value
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                   {tier.strategicValue.map((value, idx) => (
                     <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                        <span className="text-[14px] text-slate-600 font-medium">{value}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:border-l lg:border-slate-100 lg:pl-12">
              <div>
                <h4 className="c9-eyebrow !text-slate-400 mb-4">Best Suited For</h4>
                <div className="flex flex-wrap gap-2">
                  {tier.bestFor.map((item, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-600 text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <Link href={tier.primaryCTA.link} className="block w-full">
                  <button className="w-full bg-[#5D00D6] text-white font-bold py-5 px-6 rounded-full hover:bg-[#4d00b3] transition-all duration-300 uppercase tracking-widest text-[12px] flex items-center justify-center gap-3 shadow-xl shadow-purple-900/20">
                    {tier.primaryCTA.text}
                    <ArrowRight size={18} />
                  </button>
                </Link>
                
                <Link href={tier.secondaryCTA.link} className="block w-full text-center">
                  <span className="text-[11px] font-bold text-slate-900 hover:text-[#5D00D6] transition-colors uppercase tracking-widest cursor-pointer font-dm-sans">
                    {tier.secondaryCTA.text}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
