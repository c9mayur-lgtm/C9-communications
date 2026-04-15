'use client';

import React, { useState } from 'react';
import { PenTool, Wrench, Repeat, Activity, CheckCircle, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const phases = [
  {
    label: 'Design',
    duration: 'Week 0–2',
    Icon: PenTool,
    heading: 'Infrastructure designed around your business — not a generic template.',
    body: 'C9 starts with a full requirements discovery — understanding your current environment, performance needs, compliance obligations, and growth trajectory. We design an infrastructure architecture that fits your business today and scales with you tomorrow.',
    checklist: [
      'Current environment audit and documentation',
      'Performance and capacity requirements',
      'Security and compliance design',
      'Cloud vs on-premise vs hybrid recommendation',
      'Cost modelling and budget planning',
      'Architecture document signed off before build',
    ],
    outcome: 'You receive an architecture document before any deployment begins.',
    meta: [
      { label: 'Duration', val: '2–3 weeks', sub: 'Requirements and design', hi: false },
      { label: 'Output', val: 'Architecture document', sub: 'Signed off before deployment', hi: true },
      { label: 'Approach', val: 'Vendor agnostic', sub: 'Best fit for your business', hi: false },
    ],
  },
  {
    label: 'Deploy',
    duration: 'Week 2–6',
    Icon: Wrench,
    heading: 'Professional, reliable deployment — on time and on scope.',
    body: 'C9 manages the full deployment process — hardware procurement, installation, configuration, and testing. We work with your team through professional installation and cutover, with minimal disruption to your operations.',
    checklist: [
      'Hardware procurement from certified partners',
      'Physical and virtual deployment',
      'Network and security configuration',
      'System testing and validation',
      'Staff communication and change management',
      'Signed off before handover to management',
    ],
    outcome: 'Full deployment sign-off before management phase begins.',
    meta: [
      { label: 'Partners', val: 'HP, Dell, Microsoft', sub: 'Certified procurement', hi: false },
      { label: 'Approach', val: 'Minimal disruption', sub: 'Staged deployment where required', hi: true },
      { label: 'Sign-off', val: 'Before go-live', sub: 'Nothing goes live untested', hi: false },
    ],
  },
  {
    label: 'Migrate',
    duration: 'Where applicable',
    Icon: Repeat,
    heading: 'Migrations managed with zero data loss and minimal downtime.',
    body: "Whether you're moving from on-premise to cloud, consolidating data centres, or migrating between platforms — C9 manages the migration with a tested cutover plan, rollback capability, and a team on-call throughout the process.",
    checklist: [
      'Pre-migration environment audit',
      'Data migration plan and sequencing',
      'Test migration before production cutover',
      'Rollback plan documented and ready',
      'Post-migration validation and testing',
      'Zero data loss commitment in agreement',
    ],
    outcome: 'Test migration completed before production cutover begins.',
    meta: [
      { label: 'Data loss', val: 'Zero', sub: 'Committed in agreement', hi: true },
      { label: 'Testing', val: 'Pre-cutover', sub: 'Full test migration first', hi: false },
      { label: 'Rollback', val: 'Always ready', sub: 'At every migration stage', hi: false },
    ],
  },
  {
    label: 'Manage',
    duration: 'Ongoing',
    Icon: Activity,
    heading: 'Ongoing management — proactive, not reactive.',
    body: 'Once deployed, C9 manages your infrastructure environment as part of your Managed IT engagement. 24/7 monitoring, proactive maintenance, patch management, and a monthly report showing the health of your environment.',
    checklist: [
      '24/7 infrastructure monitoring',
      'Proactive patch and update management',
      'Performance and capacity monitoring',
      'Full documentation and config history audits',
      'Monthly infrastructure health report',
      'Incident response with defined SLAs',
    ],
    outcome: 'Monthly infrastructure health report delivered to your team.',
    meta: [
      { label: 'Monitoring', val: '24/7', sub: 'Proactive — not reactive', hi: false },
      { label: 'Reporting', val: 'Monthly health report', sub: 'Environment visibility always', hi: true },
      { label: 'Model', val: 'Fixed monthly', sub: 'No project billing post go-live', hi: false },
    ],
  },
];

export default function HowWeWork() {
  const [activeTab, setActiveTab] = useState(0);
  const currentPhase = phases[activeTab];
  const Icon = currentPhase.Icon;

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="container mx-auto px-6 md:px-8 w-full" style={{ maxWidth: '1240px' }}>
        <div className="text-center md:text-left mb-16">
          <span className="font-['Proxima_Nova'] text-[11px] uppercase tracking-[0.1em] text-[color:var(--brand-purple)] font-semibold mb-4 block">
            HOW WE WORK
          </span>
          <h2 className="font-['Proxima_Nova'] text-[36px] md:text-[44px] text-[#1A1A2E] font-bold mt-3 leading-tight">
            We work with you every step of the way.
          </h2>
          <p className="font-['Proxima_Nova'] text-[17px] text-[#6B7280] mt-4 max-w-[640px] leading-[1.7]">
            From initial requirements through to ongoing management — C9 applies a consistent, disciplined methodology to every infrastructure engagement.
          </p>
        </div>

        {/* Phase Stepper */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12">
          {phases.map((phase, idx) => {
            const PhaseIcon = phase.Icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "flex-1 flex items-center gap-4 p-6 rounded-2xl border transition-all duration-300 text-left group",
                  activeTab === idx 
                    ? "bg-white border-[color:var(--brand-purple)] shadow-xl shadow-purple-900/5 translate-y-[-2px]" 
                    : "bg-white/50 border-[rgba(93,0,214,0.1)] hover:border-[color:var(--brand-purple)]"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300",
                  activeTab === idx ? "bg-[color:var(--brand-purple)] text-white" : "bg-[#EDE9FE] text-[color:var(--brand-purple)]"
                )}>
                  <PhaseIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-['Proxima_Nova'] text-[11px] font-bold text-[#6B7280] uppercase tracking-widest">{phase.duration}</div>
                  <div className={cn(
                    "font-['Proxima_Nova'] font-bold text-[18px] transition-colors",
                    activeTab === idx ? "text-[#1A1A2E]" : "text-[#6B7280]"
                  )}>{phase.label}</div>
                </div>
                <ChevronRight className={cn(
                  "w-5 h-5 ml-auto transition-all",
                  activeTab === idx ? "text-[color:var(--brand-purple)] translate-x-1" : "text-[#6B7280] opacity-0 group-hover:opacity-100"
                )} />
              </button>
            );
          })}
        </div>

        {/* Detail Panel */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/5 border border-purple-100">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px]">
            {/* Left Content */}
            <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-purple-50">
              <div className="bg-[#F3EEFF] text-[color:var(--brand-purple)] text-[11px] font-bold tracking-widest uppercase px-4 py-2 rounded-full w-fit mb-8 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5" />
                Phase 0{activeTab + 1} · {currentPhase.label}
              </div>
              
              <h3 className="font-['Proxima_Nova'] text-[24px] lg:text-[32px] font-bold text-[#1A1A2E] leading-tight mb-6">
                {currentPhase.heading}
              </h3>
              
              <p className="font-['Proxima_Nova'] text-[16px] text-[#6B7280] leading-relaxed mb-10">
                {currentPhase.body}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {currentPhase.checklist.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#F3EEFF] flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-[color:var(--brand-purple)]" />
                    </div>
                    <span className="font-['Proxima_Nova'] text-[15px] font-medium text-[#1A1A2E] leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-purple-50 flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[color:var(--brand-purple)] animate-pulse" />
                <span className="font-['Proxima_Nova'] text-[15px] font-bold text-[color:var(--brand-purple)]">Outcome: {currentPhase.outcome}</span>
              </div>
            </div>

            {/* Right Meta Column */}
            <div className="p-8 bg-slate-50/50 flex flex-col gap-5">
              <p className="font-['Proxima_Nova'] text-[11px] font-bold uppercase tracking-widest text-[#6B7280] mb-2">PHASE METRICS</p>
              {currentPhase.meta.map((m, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "p-5 rounded-2xl border transition-all duration-300 bg-white",
                    m.hi ? "border-[color:var(--brand-purple)] shadow-lg shadow-purple-900/5 ring-1 ring-[color:var(--brand-purple)]/5" : "border-purple-100"
                  )}
                >
                  <p className={cn(
                    "font-['Proxima_Nova'] text-[10px] font-black uppercase tracking-widest mb-1.5",
                    m.hi ? "text-[color:var(--brand-purple)]" : "text-[#6B7280]"
                  )}>{m.label}</p>
                  <p className={cn(
                    "font-['Proxima_Nova'] text-[17px] font-bold mb-0.5",
                    m.hi ? "text-[color:var(--brand-purple)]" : "text-[#1A1A2E]"
                  )}>{m.val}</p>
                  <p className="font-['Proxima_Nova'] text-[13px] text-[#6B7280] leading-tight">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
