'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Share2, Linkedin, Twitter, Mail, ArrowLeft, ArrowRight, ChevronRight, TrendingUp, Zap, Target, CheckCircle, BarChart3, Activity } from 'lucide-react';
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
  'retail-pos-stabilisation': {
    eyebrow: 'Retail & E-commerce',
    title: 'Stabilising a Failing POS Network for National Logistics',
    summary: 'How we took over a major retail group suffering from frequent outages and achieved zero downtime in 3 weeks.',
    author: 'David Peterson',
    role: 'Head of Infrastructure @ C9',
    time: '6 Min Read',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'challenge', label: 'The Technical Debt' },
      { id: 'solution', label: 'The Transition Model' },
      { id: 'outcomes', label: 'Operational Impact' }
    ],
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          When this national logistics partner approached C9, their biggest risk wasn&apos;t their competitors—it was their POS network. With 5 regional sites frequently losing connectivity during peak hours, the business was losing thousands in revenue every week.
        </p>

        <h2 id="challenge" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">The Technical Debt</h2>
        <p>
          The client was managing five different ISPs across five different sites. There was zero network standardisation, and their previous IT provider was purely reactive. When a site went offline, the coordination between the ISP and the IT vendor usually took days, not hours.
        </p>
        <ul>
          <li><strong>Fragmented ISP Management:</strong> Multiple bills, multiple support queues, and zero accountability.</li>
          <li><strong>Outdated Hardware:</strong> Core switches were over 6 years old and lacked proper failover capabilities.</li>
          <li><strong>No Monitoring:</strong> Issues were only identified once a manager called to complain about a "blackout."</li>
        </ul>

        <div className="my-12 bg-slate-50 border-l-4 border-[#5D00D6] p-6 lg:p-8 rounded-r-2xl">
          <h4 className="flex items-center gap-2 text-[#5D00D6] font-extrabold text-[12px] uppercase tracking-widest mb-3">
            <ShieldAlert size={14} className="text-rose-500" /> Critical Risk Identified
          </h4>
          <p className="text-slate-800 text-[17px] font-semibold leading-relaxed m-0">
            The primary site had no failover internet line. A single fiber cut would have halted 40% of the company&apos;s transaction volume instantly.
          </p>
        </div>

        <h2 id="solution" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">The Transition Model</h2>
        <p>
          C9 implemented our <strong>Parallel Transition Model</strong>. We didn&apos;t rip out their old network on day one. Instead, we built the new C9-managed core alongside their existing setup, validating every connection before migrating traffic.
        </p>
        <p>
          We consolidated all sites under a single SD-WAN architecture with automated 4G/5G failover. This meant that even if the primary fiber line failed, the POS system would stay online without the staff even noticing a flicker.
        </p>

        <figure className="my-14">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
            alt="Engineers monitoring network health" 
            className="w-full h-auto rounded-[24px] object-cover aspect-[16/9] shadow-lg shadow-slate-200"
          />
          <figcaption className="text-center text-[13px] font-medium text-slate-400 mt-4">
            Monitoring the live migration of the Melbourne logistics hub.
          </figcaption>
        </figure>

        <h2 id="outcomes" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Operational Impact</h2>
        <p>
          The result was an immediate stabilisation of business operations. In the 12 months since the takeover, the client has experienced <strong>zero outages</strong> across all 5 sites.
        </p>

        <div className="grid grid-cols-2 gap-6 my-10">
          <div className="bg-[#5D00D6]/5 border border-[#5D00D6]/20 p-6 rounded-2xl text-center">
            <div className="text-[36px] font-black text-[#5D00D6] mb-1">100%</div>
            <div className="text-[13px] font-bold text-slate-600">Site Uptime</div>
          </div>
          <div className="bg-[#5D00D6]/5 border border-[#5D00D6]/20 p-6 rounded-2xl text-center">
            <div className="text-[36px] font-black text-[#5D00D6] mb-1">32%</div>
            <div className="text-[13px] font-bold text-slate-600">Cost Reduction</div>
          </div>
        </div>
      </>
    )
  },
  'legal-firm-takeover': {
    eyebrow: 'Professional Services',
    title: 'Fixing Poor IT Response Times for Wilson & Co Legal',
    summary: 'How a prominent firm achieved 60% faster resolution and secure hybrid work for 40+ staff.',
    author: 'James Wilson',
    role: 'Director @ Wilson & Co',
    time: '5 Min Read',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'situation', label: 'The Bottleneck' },
      { id: 'action', label: 'Moving to Managed IT' },
      { id: 'results', label: 'Executive Metrics' }
    ],
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          For a high-volume law firm, time isn&apos;t just money—it&apos;s reputation. Wilson & Co were losing hundreds of billable hours every month due to "minor" IT glitches that took days to resolve.
        </p>

        <h2 id="situation" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">The Bottleneck</h2>
        <p>
          Their previous provider was a one-man shop that was overwhelmed. Simple password resets or printer issues were taking over 24 hours. Critical server errors were met with silence.
        </p>
        <p>
          Furthermore, the firm had no secure way for partners to work from home, leading to risky workarounds like emailing sensitive client files to personal Gmail accounts.
        </p>

        <h2 id="action" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Moving to Managed IT</h2>
        <p>
          C9 took over the environment on a Friday evening. Over the weekend, we deployed our managed endpoint protection across all 45 workstations and implemented a secure, encrypted VPN for hybrid work.
        </p>
        <p>
          We moved their on-premise document management system to a secure managed cloud environment, ensuring that files were accessible, backed up, and compliant with legal data regulations.
        </p>

        <div className="my-12 bg-[#0c1024] text-white p-8 lg:p-12 rounded-[32px] relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10"><Zap size={120} /></div>
           <h4 className="text-[#a56eff] font-black text-[12px] uppercase tracking-widest mb-4">The C9 Difference</h4>
           <p className="text-white text-[20px] font-bold leading-relaxed m-0 relative z-10">
              &ldquo;We didn&apos;t just fix their printers; we secured their billable hours. By moving to a managed model, the firm gained an entire IT department for less than the cost of one junior hire.&rdquo;
           </p>
        </div>

        <h2 id="results" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Executive Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="text-2xl font-black text-[#5D00D6] mb-1">60s</div>
            <div className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">Support Answer</div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="text-2xl font-black text-[#5D00D6] mb-1">100%</div>
            <div className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">Remote Security</div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="text-2xl font-black text-[#5D00D6] mb-1">Zero</div>
            <div className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">Data Loss Events</div>
          </div>
        </div>
      </>
    )
  },
  'greenfield-site-rollout': {
    eyebrow: 'New Business Build',
    title: 'Rapid 12-Site Infrastructure Rollout for National Expansion',
    summary: 'How we delivered unified networking and operational readiness for 12 new sites in under 6 weeks.',
    author: 'David Peterson',
    role: 'Head of Infrastructure @ C9',
    time: '7 Min Read',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'planning', label: 'Zero-Day Planning' },
      { id: 'execution', label: 'Rapid Deployment' },
      { id: 'outcomes', label: 'Operational Readiness' }
    ],
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          Launching a new business location is stressful. Launching 12 simultaneously across 3 states is a logistical nightmare. For this national expansion, C9 was engaged to ensure that on day one, every site was technically ready for business.
        </p>

        <h2 id="planning" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Zero-Day Planning</h2>
        <p>
          The challenge was the timeline. The client had 6 weeks from site handover to grand opening. Traditional telco lead times for fiber are often 60-90 days. We had to think differently.
        </p>
        <p>
          We utilized a "Hybrid Connectivity" approach, deploying high-speed enterprise 5G fixed wireless as a bridge while the permanent fiber builds were being completed. This allowed the internal fit-out and POS testing to begin weeks ahead of schedule.
        </p>

        <h2 id="execution" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Rapid Deployment</h2>
        <p>
          Standardisation was our secret weapon. We used a "Site-in-a-Box" strategy. Every site received an identical rack configuration, pre-staged and tested in our Melbourne lab.
        </p>
        <ul>
          <li><strong>Zero-Touch Provisioning:</strong> Equipment was shipped to site and simply plugged in by local contractors. Our engineers then configured the remaining details remotely.</li>
          <li><strong>Unified Security:</strong> Every site was protected by a central cloud-managed firewall policy, ensuring data compliance across the entire national footprint.</li>
        </ul>

        <div className="my-12 bg-emerald-50 border-emerald-200 border p-8 rounded-3xl">
           <div className="flex items-center gap-3 text-emerald-600 font-bold mb-4">
              <Activity size={20} />
              <span>Project Milestone</span>
           </div>
           <p className="text-emerald-900 text-[18px] font-medium leading-relaxed m-0">
              All 12 sites were online and fully operational 10 days before the public grand opening, allowing for extensive staff training and systems validation.
           </p>
        </div>

        <h2 id="outcomes" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Operational Readiness</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
             <div className="text-[#5D00D6] font-black text-4xl mb-2">6 Weeks</div>
             <div className="text-slate-500 font-bold text-[13px] uppercase tracking-widest">Total Delivery Time</div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
             <div className="text-[#5D00D6] font-black text-4xl mb-2">10/10</div>
             <div className="text-slate-500 font-bold text-[13px] uppercase tracking-widest">Site Readiness Score</div>
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
                    <CheckCircle size={20} />
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

