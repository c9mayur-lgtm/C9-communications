'use client';

import React from 'react';
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
        { label: 'App Latency Visibility', value: 'Full', sub: 'End-to-end tracking' },
        { label: 'Response SLA', value: '15 Mins', sub: 'Guaranteed activation' }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-32 pb-24 overflow-hidden bg-white">
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#5D00D6]/8 text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest mb-8 border border-[#5D00D6]/20">
                OPERATIONAL PROOF
              </span>
              <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-8 text-[#0c1024]">
                Infrastructure Control & <br />
                <span className="text-[#5D00D6]">Migration Success.</span>
              </h1>
              <p className="text-slate-500 text-[18px] md:text-[20px] leading-relaxed mb-12 max-w-2xl">
                Factual breakdowns of real-world environment stabilisations, vendor consolidations, and risk-mitigated migrations. No marketing narratives—just measurable outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#consultation-section"
                  className="px-8 py-4 bg-[#5D00D6] text-white font-bold rounded-full hover:bg-[#4A00AB] transition-all text-center min-w-[240px] shadow-xl shadow-purple-900/20"
                >
                  Request Infrastructure Assessment
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-slate-700 font-bold rounded-full hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all border-2 border-slate-200 text-center min-w-[240px]"
                >
                  Discuss Your Environment
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="space-y-20">
            {caseStudies.map((study, idx) => (
              <FadeUp key={idx}>
                <div className="group bg-white rounded-[48px] border border-gray-100 p-8 md:p-12 shadow-sm hover:shadow-2xl hover:shadow-purple-900/5 transition-all overflow-hidden relative">
                  <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6]">
                          <study.icon size={20} />
                        </div>
                        <span className="text-[#5D00D6] font-bold uppercase tracking-widest text-[11px]">{study.category}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-8 leading-tight">{study.title}</h3>
                      
                      <div className="space-y-8 mb-10">
                        <div className="grid grid-cols-2 gap-4 p-6 bg-gray-50 rounded-2xl">
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Industry</p>
                            <p className="text-[#1A1A2E] font-medium">{study.environment.industry}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Scale</p>
                            <p className="text-[#1A1A2E] font-medium">{study.environment.locations}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Infra Type</p>
                            <p className="text-[#1A1A2E] font-medium">{study.environment.type}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Complexity</p>
                            <p className="text-[#1A1A2E] font-medium">{study.environment.complexity}</p>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle size={14} className="text-red-500" />
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Starting Situation</p>
                          </div>
                          <p className="text-gray-600 text-lg leading-relaxed">{study.situation}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Shield size={14} className="text-amber-500" />
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Risk Identified</p>
                          </div>
                          <p className="text-gray-600 text-lg leading-relaxed">{study.risk}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 size={14} className="text-green-500" />
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">What C9 Implemented</p>
                          </div>
                          <p className="text-gray-600 text-lg leading-relaxed">{study.implementation}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                        <Link 
                          href={`/case-studies/${study.slug}`}
                          className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:gap-4 transition-all"
                        >
                          Read Full Case Study <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-5 h-full">
                      <div className="bg-[#1A1A2E] rounded-[32px] p-8 md:p-10 text-white h-full flex flex-col">
                        <div className="flex items-center gap-2 mb-10">
                          <Activity size={24} className="text-[#A855F7]" />
                          <span className="font-bold uppercase tracking-widest text-[14px]">Operational Outcomes</span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-auto">
                          {study.metrics.map((metric, midx) => (
                            <div key={midx} className="border-l-2 border-white/10 pl-6">
                              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">{metric.label}</p>
                              <p className="text-3xl font-bold text-white mb-1">{metric.value}</p>
                              <p className="text-xs text-gray-400">{metric.sub}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                          <p className="text-sm text-gray-300 italic">
                            "The consolidation solved the finger-pointing between vendors. We now have a single source of truth for our entire infrastructure performance."
                          </p>
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
