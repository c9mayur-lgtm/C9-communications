'use client';

import React from 'react';
import Link from 'next/link';
import { Target, TrendingUp, Shield, Activity, ArrowRight, ExternalLink, Network, Zap, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      slug: 'multi-site-retail-stabilisation',
      icon: Network,
      category: 'Multi-Site Environment',
      title: 'Consolidating National Retail Operations',
      environment: {
        industry: 'National Retail Distribution',
        locations: '142 locations',
        type: 'Hybrid (On-prem Edge + Azure Core)',
        complexity: 'High (9+ ISP/MSP contracts)'
      },
      situation: 'Fragmented vendor management across states led to 40+ hours of monthly aggregate downtime. Zero visibility into store-level latency and a reactive support model caused significant revenue leakage.',
      risk: 'Single point of failure in legacy MPLS backbone. High probability of site-wide POS blackout. Unpatched edge devices created massive security vulnerabilities.',
      implementation: 'Deployed SD-WAN overlay for vendor consolidation, centralised proactive monitoring, integrated 4G failover, and established a single-point-of-contact SLA structure.',
      metrics: [
        { label: 'Uptime Improvement', value: '99.99%', sub: 'from 94%' },
        { label: 'MTTR Reduction', value: '70%', sub: 'Mean Time to Repair' },
        { label: 'Vendor Reduction', value: '9 → 1', sub: 'Consolidated to C9' },
        { label: 'Incident Reduction', value: '85%', sub: 'Proactive resolution' }
      ]
    },
    {
      slug: 'financial-vendor-consolidation',
      icon: Zap,
      category: 'Vendor Consolidation',
      title: 'Simplifying Mid-Market Infrastructure',
      environment: {
        industry: 'Financial Services',
        locations: 'Head Office + Distributed Remote',
        type: 'Cloud-Native (SaaS Heavy)',
        complexity: 'Extreme (12+ billing entities)'
      },
      situation: 'Internal IT was managing 12 different telco and IT invoices. Overlapping security tools and a lack of ownership on cross-vendor issues resulted in inconsistent uptime and support delays.',
      risk: 'Hidden costs in redundant licensing. Critical security gaps between uncoordinated vendor stacks. Business impact from delayed troubleshooting in a regulated environment.',
      implementation: 'Conducted full infrastructure audit, consolidated vendor contracts into a single managed agreement, unified the security stack, and stabilised core connectivity links.',
      metrics: [
        { label: 'OpEx Reduction', value: '35%', sub: 'Licensing & Management' },
        { label: 'Accountability', value: '1 Vendor', sub: 'Single point of contact' },
        { label: 'Security Visibility', value: '100%', sub: 'Unified posture' },
        { label: 'Resolution Speed', value: '50% Faster', sub: 'Incident handling' }
      ]
    },
    {
      slug: 'enterprise-migration-success',
      icon: TrendingUp,
      category: 'Infrastructure Migration',
      title: 'Zero-Disruption Enterprise Migration',
      environment: {
        industry: 'Industrial Manufacturing',
        locations: 'Multi-state Operations',
        type: 'Legacy On-prem to Hybrid Cloud',
        complexity: 'High (Production critical)'
      },
      situation: 'Operating on end-of-life hardware with unstable legacy servers. High risk of data loss during migration and no viable disaster recovery path for production-line applications.',
      risk: 'Catastrophic hardware failure was imminent. Migration disruption could halt manufacturing lines. Significant operational gaps in remote site connectivity.',
      implementation: 'Staged migration plan with parallel run environments. Infrastructure stabilisation prior to cutover. Cloud-hosted disaster recovery and ongoing operational control layer.',
      metrics: [
        { label: 'Migration Downtime', value: '0 Mins', sub: 'Zero disruption' },
        { label: 'Data Integrity', value: '100%', sub: 'Maintained throughout' },
        { label: 'Operational Visibility', value: '60% ↑', sub: 'Real-time telemetry' },
        { label: 'Monitoring Coverage', value: '24/7', sub: 'Proactive alerting' }
      ]
    },
    {
      slug: 'healthcare-uptime-stabilisation',
      icon: Shield,
      category: 'Stability & Uptime',
      title: 'Protecting Life-Critical Connectivity',
      environment: {
        industry: 'Critical Healthcare Provider',
        locations: '24/7 Medical Centres',
        type: 'Hybrid Cloud',
        complexity: 'Medium (High availability required)'
      },
      situation: 'Frequent network instability impacting patient data access. Lack of visibility into application performance. High risk of downtime during peak operational hours.',
      risk: 'Life-critical data unavailability. Potential for compliance breaches. Business impact of operational paralysis during medical emergencies.',
      implementation: 'Infrastructure hardening and link redundancy deployment. Real-time performance monitoring and 15-minute response SLA activation.',
      metrics: [
        { label: 'System Uptime', value: '100%', sub: 'Over 18 months' },
        { label: 'Critical Incidents', value: '90% ↓', sub: 'Proactive mitigation' },
        { label: 'App Latency Visibility', value: 'Full', sub: 'Operational detail tracking' },
        { label: 'Response SLA', value: '15 Mins', sub: 'Guaranteed activation' }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#5D00D6] opacity-[0.05] blur-[100px]" />

        <div className="container mx-auto px-6 max-w-[1240px] relative z-10">
          <FadeUp>
            <div className="max-w-3xl">
              <span className="c9-eyebrow mb-8">
                THE PROOF ENGINE
              </span>
              <h1 className="c9-hero-title mb-8">
                Factual Evidence of <br />
                <span className="text-[#5D00D6]">Operational Success.</span>
              </h1>
              <p className="c9-body mb-12 !text-[18px] md:!text-[20px]">
                Factual breakdowns of real-world environment stabilisations, vendor consolidations, and risk-mitigated migrations. No marketing narratives—just measurable technical outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#consultation-section"
                  className="px-8 py-4 bg-[#5D00D6] text-white font-bold rounded-full hover:bg-[#4A00AB] transition-all text-center min-w-[240px] shadow-xl shadow-purple-900/20 c9-button-label"
                >
                  Request Infrastructure Assessment
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-slate-700 font-bold rounded-full hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all border-2 border-slate-200 text-center min-w-[240px] c9-button-label"
                >
                  Discuss Your Environment
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="space-y-16">
            {caseStudies.map((study, idx) => (
              <FadeUp key={idx}>
                <div className="group bg-white rounded-[48px] border border-gray-100 p-8 md:p-12 shadow-sm hover:shadow-2xl hover:shadow-purple-900/5 transition-all overflow-hidden relative">
                  <div className="grid lg:grid-cols-12 gap-12 items-stretch">
                    <div className="lg:col-span-7 flex flex-col">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6]">
                          <study.icon size={20} />
                        </div>
                        <span className="c9-eyebrow !text-[#5D00D6] !text-[10px]">{study.category}</span>
                      </div>
                      <h3 className="c9-card-title !text-3xl md:!text-4xl mb-8 leading-tight">{study.title}</h3>
                      
                      <div className="space-y-8 mb-10 flex-1">
                        <div className="grid grid-cols-2 gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <div>
                            <p className="c9-eyebrow !text-slate-400 !text-[9px] mb-1">CLIENT TYPE</p>
                            <p className="text-[#1A1A2E] font-bold text-[14px]">{study.environment.industry}</p>
                          </div>
                          <div>
                            <p className="c9-eyebrow !text-slate-400 !text-[9px] mb-1">SCALE</p>
                            <p className="text-[#1A1A2E] font-bold text-[14px]">{study.environment.locations}</p>
                          </div>
                          <div>
                            <p className="c9-eyebrow !text-slate-400 !text-[9px] mb-1">SYSTEM TYPE</p>
                            <p className="text-[#1A1A2E] font-bold text-[14px]">{study.environment.type}</p>
                          </div>
                          <div>
                            <p className="c9-eyebrow !text-slate-400 !text-[9px] mb-1">COMPLEXITY</p>
                            <p className="text-[#1A1A2E] font-bold text-[14px]">{study.environment.complexity}</p>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle size={14} className="text-red-500" />
                            <p className="c9-eyebrow !text-red-500/60 !text-[10px]">THE PROBLEM</p>
                          </div>
                          <p className="c9-body !text-slate-600 !text-[16px]">{study.situation}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 size={14} className="text-[#5D00D6]" />
                            <p className="c9-eyebrow !text-[#5D00D6]/60 !text-[10px]">THE SOLUTION</p>
                          </div>
                          <p className="c9-body !text-slate-600 !text-[16px]">{study.implementation}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6 pt-6 border-t border-slate-100 mt-auto">
                        <Link 
                          href={`/case-studies/${study.slug}`}
                          className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:gap-4 transition-all c9-button-label"
                        >
                          Access Full Technical Review <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-5">
                      <div className="bg-[#1A1A2E] rounded-[32px] p-8 md:p-10 text-white h-full flex flex-col relative overflow-hidden">
                        {/* Decorative Background Accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#A855F7]/10 blur-3xl rounded-full" />
                        
                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex items-center gap-2 mb-10">
                            <Activity size={24} className="text-[#A855F7]" />
                            <span className="c9-eyebrow !text-white !text-[12px]">MEASURABLE OUTCOMES</span>
                          </div>
                          
                          <div className="grid grid-cols-1 gap-8 mb-auto">
                            {study.metrics.map((metric, midx) => (
                              <div key={midx} className="border-l-2 border-[#A855F7]/30 pl-6 group/metric">
                                <p className="c9-eyebrow !text-white/40 !text-[9px] mb-2">{metric.label}</p>
                                <div className="flex items-baseline gap-2">
                                  <p className="text-4xl font-black text-white group-hover/metric:text-[#A855F7] transition-colors">{metric.value}</p>
                                  <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest">{metric.sub}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group/audit">
                             <div>
                               <p className="c9-eyebrow !text-[#A855F7] !text-[9px] mb-1">AUDIT STATUS</p>
                               <p className="text-[13px] font-bold text-white/90">Verified Operations Proof</p>
                             </div>
                             <CheckCircle2 size={12} className="text-[#A855F7]/40 group-hover/audit:text-[#A855F7] transition-colors" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <WpConsultationForm
        eyebrow="REDUCE INFRASTRUCTURE EXPOSURE"
        title="Is your environment looking similar?"
        description="If you recognise these fragmentation patterns in your own business, risk already exists. Delaying action increases exposure to downtime and security breaches."
        ctaText="Request Infrastructure Assessment"
        formTitle="Schedule Risk Audit"
      />
    </main>
  );
}
