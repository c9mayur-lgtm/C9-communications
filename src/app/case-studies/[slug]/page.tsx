'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Share2, Linkedin, Twitter, Mail, ArrowLeft, ArrowRight, ChevronRight, TrendingUp, Zap, Target, CheckCircle, CheckCircle2, BarChart3, Activity } from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const ShieldAlert = ({ size, className }: { size: number; className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);

/* ─────────────────────────────────────────────────────────
   REPRESENTATIVE CASE STUDY DATA
   ───────────────────────────────────────────────────────── */
const CASE_STUDIES: Record<string, any> = {
  'multi-site-retail-stabilisation': {
    eyebrow: 'Multi-Site Environment',
    title: 'Consolidating National Retail Operations: 142 Sites Stabilised',
    summary: 'Eliminating 40+ hours of monthly downtime through vendor consolidation and SD-WAN deployment.',
    author: 'David Peterson',
    role: 'Head of Infrastructure @ C9',
    time: '6 Min Read',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'situation', label: 'Fragmented Environment' },
      { id: 'risk', label: 'Operational Exposure' },
      { id: 'implementation', label: 'Consolidation Layer' },
      { id: 'outcomes', label: 'Measurable Impact' }
    ],
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          A national retail distribution group was suffering from systemic revenue leakage caused by fragmented vendor management across 142 locations.
        </p>

        <h2 id="situation" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Fragmented Environment</h2>
        <p>
          The client was managing over 9 different ISP and MSP contracts. This fragmentation led to 40+ hours of monthly aggregate downtime, with zero visibility into store-level latency. Support was entirely reactive, relying on store managers to report outages manually.
        </p>

        <h2 id="risk" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Operational Exposure</h2>
        <p>
          Audit identified a single point of failure in the legacy MPLS backbone. Unpatched edge devices at store locations created critical security vulnerabilities, and there was a high probability of a site-wide POS blackout during peak seasonal trading.
        </p>

        <div className="my-12 bg-slate-50 border-l-4 border-[#5D00D6] p-6 lg:p-8 rounded-r-2xl">
          <h4 className="flex items-center gap-2 text-[#5D00D6] font-extrabold text-[12px] uppercase tracking-widest mb-3">
            <Activity size={14} className="text-rose-500" /> Critical Risk Identified
          </h4>
          <p className="text-slate-800 text-[17px] font-semibold leading-relaxed m-0">
            Site-wide POS dependency on a single unmanaged link was identified as the primary risk to Q4 revenue targets.
          </p>
        </div>

        <h2 id="implementation" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Consolidation Layer</h2>
        <p>
          C9 implemented a centralised SD-WAN overlay, consolidating all 142 sites under a single management plane. We integrated 4G failover at every location and established a proactive monitoring layer that alerts engineers before a site goes offline.
        </p>

        <h2 id="outcomes" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Measurable Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10">
          <div className="bg-[#5D00D6]/5 border border-[#5D00D6]/20 p-6 rounded-2xl text-center">
            <div className="text-[28px] font-black text-[#5D00D6] mb-1">99.99%</div>
            <div className="text-[11px] font-bold text-slate-600 uppercase">Uptime</div>
          </div>
          <div className="bg-[#5D00D6]/5 border border-[#5D00D6]/20 p-6 rounded-2xl text-center">
            <div className="text-[28px] font-black text-[#5D00D6] mb-1">70%</div>
            <div className="text-[11px] font-bold text-slate-600 uppercase">MTTR Reduction</div>
          </div>
          <div className="bg-[#5D00D6]/5 border border-[#5D00D6]/20 p-6 rounded-2xl text-center">
            <div className="text-[28px] font-black text-[#5D00D6] mb-1">9 → 1</div>
            <div className="text-[11px] font-bold text-slate-600 uppercase">Vendors</div>
          </div>
          <div className="bg-[#5D00D6]/5 border border-[#5D00D6]/20 p-6 rounded-2xl text-center">
            <div className="text-[28px] font-black text-[#5D00D6] mb-1">85%</div>
            <div className="text-[11px] font-bold text-slate-600 uppercase">Incidents ↓</div>
          </div>
        </div>
      </>
    )
  },
  'financial-vendor-consolidation': {
    eyebrow: 'Vendor Consolidation',
    title: 'Financial Services: Reducing OpEx by 35% through Consolidation',
    summary: 'Moving from 12 uncoordinated vendors to a single accountable partner for core infrastructure.',
    author: 'James Wilson',
    role: 'Infrastructure Strategist @ C9',
    time: '5 Min Read',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'situation', label: 'Billing Fragmentation' },
      { id: 'risk', label: 'Security Gaps' },
      { id: 'implementation', label: 'Unified Stack' },
      { id: 'results', label: 'Financial Outcomes' }
    ],
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          A mid-market financial services firm was managing 12 different telco and IT invoices, leading to massive administrative overhead and critical support delays.
        </p>

        <h2 id="situation" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Billing Fragmentation</h2>
        <p>
          Internal IT staff were spending 15+ hours weekly just on invoice reconciliation and chasing vendors for status updates on cross-platform issues. There was no single point of accountability for system-wide failures.
        </p>

        <h2 id="risk" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Security Gaps</h2>
        <p>
          Audit revealed overlapping security tools that were not communicating. This created blind spots in the threat detection layer, posing a significant risk to the firm&apos;s compliance posture and client data integrity.
        </p>

        <h2 id="implementation" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Unified Stack</h2>
        <p>
          C9 executed a full infrastructure takeover, consolidating all vendor contracts into a single managed agreement. We unified the security stack under a centralised SOC and stabilised core connectivity links with a primary-secondary failover model.
        </p>

        <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="text-2xl font-black text-[#5D00D6] mb-1">35%</div>
            <div className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">OpEx Reduction</div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="text-2xl font-black text-[#5D00D6] mb-1">100%</div>
            <div className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">Visibility</div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="text-2xl font-black text-[#5D00D6] mb-1">50%</div>
            <div className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">Faster Resolution</div>
          </div>
        </div>
      </>
    )
  },
  'enterprise-migration-success': {
    eyebrow: 'Infrastructure Migration',
    title: 'Zero-Disruption Migration for Industrial Manufacturing',
    summary: 'Migrating legacy on-prem servers to Hybrid Cloud with zero minutes of production downtime.',
    author: 'David Peterson',
    role: 'Head of Infrastructure @ C9',
    time: '7 Min Read',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'planning', label: 'Technical Debt Audit' },
      { id: 'execution', label: 'Staged Migration' },
      { id: 'outcomes', label: 'Operational Control' }
    ],
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          An industrial manufacturer with multi-state operations needed to migrate from end-of-life hardware without halting production lines.
        </p>

        <h2 id="planning" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Technical Debt Audit</h2>
        <p>
          The client was operating on unstable legacy servers with no viable disaster recovery path. The primary risk was a catastrophic hardware failure that could stop manufacturing for days.
        </p>

        <h2 id="execution" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Staged Migration</h2>
        <p>
          C9 developed a phased migration plan using parallel-run environments. We stabilised the legacy infrastructure first to de-risk the move, then migrated workloads in waves. We established a cloud-hosted DR site before the final cutover.
        </p>

        <div className="my-12 bg-emerald-50 border-emerald-200 border p-8 rounded-3xl">
           <div className="flex items-center gap-3 text-emerald-600 font-bold mb-4">
              <CheckCircle2 size={12} />
              <span>Migration Milestone</span>
           </div>
           <p className="text-emerald-900 text-[18px] font-medium leading-relaxed m-0">
              Migration was completed with 0 minutes of induced downtime, maintaining 100% data integrity across all manufacturing systems.
           </p>
        </div>

        <div className="grid grid-cols-2 gap-8 my-10">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
             <div className="text-[#5D00D6] font-black text-4xl mb-2">60% ↑</div>
             <div className="text-slate-500 font-bold text-[13px] uppercase tracking-widest">Visibility Gain</div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
             <div className="text-[#5D00D6] font-black text-4xl mb-2">24/7</div>
             <div className="text-slate-500 font-bold text-[13px] uppercase tracking-widest">Control Layer</div>
          </div>
        </div>
      </>
    )
  },
  'healthcare-uptime-stabilisation': {
    eyebrow: 'Stability & Uptime',
    title: 'Healthcare Provider: Achieving 100% Uptime for Life-Critical Apps',
    summary: 'Hardening hybrid cloud infrastructure to protect patient data access and operational continuity.',
    author: 'James Wilson',
    role: 'Infrastructure Strategist @ C9',
    time: '5 Min Read',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'situation', label: 'Network Instability' },
      { id: 'risk', label: 'Life-Critical Gaps' },
      { id: 'action', label: 'Hardening & Redundancy' },
      { id: 'outcomes', label: 'Stability Metrics' }
    ],
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          A critical healthcare provider was experiencing frequent network instability, impacting patient data access during peak medical hours.
        </p>

        <h2 id="situation" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Network Instability</h2>
        <p>
          Frequent dropouts and high latency were causing patient records to be unavailable when needed most. The lack of visibility into application performance made troubleshooting a manual, slow process.
        </p>

        <h2 id="risk" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Life-Critical Gaps</h2>
        <p>
          Audit identified that data unavailability posed a direct risk to patient care and compliance. There was no redundancy for the primary cloud link, leaving the provider exposed to ISP-level failures.
        </p>

        <h2 id="action" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Hardening & Redundancy</h2>
        <p>
          C9 deployed redundant connectivity links and implemented real-time application telemetry. We hardened the infrastructure to prioritise life-critical data traffic and established a 15-minute response SLA.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <div className="bg-[#1A1A2E] p-8 rounded-3xl text-white">
            <div className="text-3xl font-black text-[#A855F7] mb-2">100%</div>
            <div className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Uptime over 18m</div>
          </div>
          <div className="bg-[#1A1A2E] p-8 rounded-3xl text-white">
            <div className="text-3xl font-black text-[#A855F7] mb-2">90% ↓</div>
            <div className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Critical Incidents</div>
          </div>
        </div>
      </>
    )
  }
};


export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = CASE_STUDIES[slug];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!study) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#5D00D6] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* ARTICLE HEADER CONTEXT */}
      <section className="bg-[#0c1024] pt-32 pb-20 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5D00D6] opacity-[0.06] rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        
        <div className="container mx-auto max-w-[1000px] relative z-10">
          <FadeIn>
            <a href="/about/case-studies" className="inline-flex items-center text-slate-400 font-medium text-[13px] hover:text-white transition-colors mb-10 group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Case Studies
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full border border-[#5D00D6] text-[#A855F7] text-[11px] font-bold uppercase tracking-widest bg-[#5D00D6]/10">
                Managed IT
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-bold uppercase tracking-widest">
                {study.eyebrow}
              </span>
              <span className="text-slate-400 text-[13px] font-medium ml-2">— {study.time}</span>
            </div>
            <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-bold text-white leading-[1.1] mb-8 max-w-[900px] tracking-tight whitespace-pre-line">
              {study.title}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              {study.summary}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 pt-8 mt-12 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-800 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                  alt={study.author} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-white font-bold text-[15px]">{study.author}</div>
                <div className="text-slate-400 text-[13px] font-medium">{study.role}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-slate-400 text-[13px] font-bold uppercase tracking-widest mr-2">Share Impact</span>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#5D00D6] hover:text-white text-slate-300 border border-white/10 transition-all flex items-center justify-center">
                <Linkedin size={16} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#5D00D6] hover:text-white text-slate-300 border border-white/10 transition-all flex items-center justify-center">
                <Twitter size={16} />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-16 md:py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
            
            {/* L SIDEBAR - TABLE OF CONTENTS (Sticky) */}
            <div className="hidden lg:block w-[240px] shrink-0">
              <div className="sticky top-32">
                <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#5D00D6] mb-6">Outcome Structure</h4>
                <ul className="space-y-4">
                  {study.sections.map((link: any, i: number) => (
                    <li key={i}>
                      <a 
                        href={`#${link.id}`} 
                        className={`text-[14px] font-medium transition-colors hover:text-[#5D00D6] ${i === 0 ? 'text-[#5D00D6] font-bold' : 'text-slate-500'}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                
                {/* Visual Anchor Block */}
                <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-lg shadow-[#5D00D6]/5">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={12} />
                  </div>
                  <h5 className="font-bold text-slate-900 text-[15px] mb-2">Verified Result</h5>
                  <p className="text-slate-500 text-[13px] mb-5">This case study represents actual operational outcomes achieved by C9.</p>
                  <a href="#consultation" className="block w-full py-2 bg-[#5D00D6] hover:bg-[#4d00b3] text-white rounded-lg text-[13px] font-bold transition-colors">
                    Talk to the Team
                  </a>
                </div>
              </div>
            </div>

            {/* MAIN CONTENT (Centered Reading Column) */}
            <div className="grow max-w-[700px] w-full bg-white rounded-[32px] p-8 md:p-14 lg:p-16 border border-slate-100 shadow-xl shadow-slate-200/50 lg:-mt-32 relative z-20">
              
              <div className="max-w-none text-slate-600 [&>p]:mb-6 [&>p]:text-[18px] [&>p]:leading-relaxed [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-3 [&>ul>li]:text-[18px] [&>ul>li]:leading-relaxed [&>a]:text-[#5D00D6] [&>a]:underline [&>figure>img]:rounded-[24px]">
                {study.content}
                
                <hr className="my-12 border-slate-100" />
                
                {/* Executive Closing */}
                <div className="bg-slate-50 p-8 lg:p-10 rounded-3xl border border-slate-100">
                   <h4 className="text-xl font-bold text-slate-900 mb-4">Executive Summary</h4>
                   <p className="text-slate-600 text-[16px] mb-6 leading-relaxed">
                      By consolidating vendors and moving to a managed infrastructure model, this partner transitioned from reactive "firefighting" to proactive growth. They no longer manage IT; they use it as a tool for scale.
                   </p>
                   <div className="flex items-center gap-3 text-[#5D00D6] font-bold">
                      <Target size={18} />
                      <span>Outcome: 100% Stability Achieved</span>
                   </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* MORE CASE STUDIES */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
               <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Other Success Stories</h3>
               <p className="text-slate-500 text-[18px]">See how we solve complexity across different sectors.</p>
            </div>
            <a href="/about/case-studies" className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:gap-4 transition-all mt-6 md:mt-0">
               View All Stories <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(CASE_STUDIES).filter(k => k !== slug).map((key) => {
               const item = CASE_STUDIES[key];
               return (
                  <a href={`/case-studies/${key}`} key={key} className="group flex flex-col h-full bg-slate-50 rounded-[28px] overflow-hidden border border-slate-100 hover:border-[#5D00D6]/30 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all">
                     <div className="aspect-[16/10] overflow-hidden">
                        <img 
                           src={item.img} 
                           alt={item.title} 
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                     </div>
                     <div className="p-8 pb-10 flex flex-col grow">
                        <span className="text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest mb-4">{item.eyebrow}</span>
                        <h4 className="text-[20px] font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#5D00D6] transition-colors">
                           {item.title}
                        </h4>
                        <p className="text-slate-500 text-[15px] mb-8 line-clamp-2">
                           {item.summary}
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-6">
                           <span className="text-slate-500 text-[13px] font-medium border-b border-transparent group-hover:border-[#5D00D6]">Read Impact Report</span>
                           <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                              <ChevronRight size={16} />
                           </div>
                        </div>
                     </div>
                  </a>
               )
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section id="consultation">
        <WpConsultationForm
          showHeader={false}
          eyebrow="GET STARTED"
          title="Ready for your own success story?"
          description="Speak with an Australian infrastructure expert to map out your own path to reliability and scale."
          formTitle="Book Discovery Call"
        />
      </section>
    </div>
  );
}

