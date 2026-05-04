'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Linkedin, Twitter, ArrowLeft, ArrowRight, ChevronRight, Target, ShieldCheck, CheckCircle, Clock, Calendar } from 'lucide-react';
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

const INSIGHTS: Record<string, any> = {
  'state-of-australian-it-2026': {
    eyebrow: 'Infrastructure Strategy',
    title: 'State of Australian IT: Transitioning to Managed Cloud',
    summary: 'The ongoing costs of self-managed hardware are eclipsing the benefits. Here is why Australian mid-market firms are shifting to fully managed infrastructure.',
    author: 'James Wilson',
    role: 'Infrastructure Strategist @ C9',
    time: '8 min read',
    date: 'Apr 30, 2026',
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'hardware-costs', label: 'The Hardware Debt' },
      { id: 'managed-shift', label: 'Why Managed Cloud?' },
      { id: 'performance', label: 'Operational Performance' }
    ],
    content: (
      <>
        <p>The Australian mid-market is at a tipping point. For years, the default strategy was to own and manage the physical hardware that powered business operations. However, in 2026, the technical debt associated with aging server rooms and fragmented cloud setups has become a primary bottleneck for growth.</p>
        <h2 id="hardware-costs">The Hardware Debt</h2>
        <p>Managing your own hardware means owning the risk. Every component failure, power surge, or firmware vulnerability requires direct intervention from your internal IT team—time that should be spent on strategic initiatives.</p>
        <div className="my-10 bg-slate-50 border-l-4 border-[#5D00D6] p-8">
          <p className="font-bold text-slate-900 leading-relaxed m-0">"The true cost of hardware is not the purchase price; it's the operational drag of maintaining it."</p>
        </div>
        <h2 id="managed-shift">Why Managed Cloud?</h2>
        <p>A fully managed infrastructure layer removes the risk from your balance sheet. By shifting to a managed model, businesses gain access to enterprise-grade security and redundancy that is impossible to achieve in a local server room.</p>
      </>
    )
  },
  'scaling-network-architecture': {
    eyebrow: 'Network Fabric',
    title: 'Scaling Your Network Architecture for 2026',
    summary: 'How multi-site organizations are solving the lag and security challenges of distributed workforces.',
    author: 'David Peterson',
    role: 'Head of Infrastructure @ C9',
    time: '6 min read',
    date: 'Apr 25, 2026',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'distributed-lag', label: 'The Distributed Lag' },
      { id: 'sd-wan', label: 'SD-WAN Mastery' }
    ],
    content: (
      <>
        <p>As organisations expand, the traditional hub-and-spoke network model begins to fracture. High latency and inconsistent security policies across regional sites are no longer just IT issues—they are operational risks.</p>
        <h2 id="distributed-lag">Solving the Distributed Lag</h2>
        <p>In 2026, the user experience is the primary metric for network success. If your staff in a regional office cannot access cloud resources as fast as those in HQ, your productivity is leaking.</p>
        <h2 id="sd-wan">SD-WAN Mastery</h2>
        <p>Managed SD-WAN provides a unified command layer over your entire national network, allowing for real-time traffic prioritisation and absolute security at the edge.</p>
      </>
    )
  },
  'ceo-security-governance': {
    eyebrow: 'Cyber Resilience',
    title: 'The CEO Guide to Managed Security Governance',
    summary: 'A technical deep-dive into the Essential Eight and why software alone is not a security strategy.',
    author: 'C9 Security Team',
    role: 'Cyber Operations',
    time: '12 min read',
    date: 'Apr 05, 2026',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'essential-eight', label: 'Essential Eight' },
      { id: 'software-myth', label: 'The Software Myth' }
    ],
    content: (
      <>
        <p>Cybersecurity is often treated as a product to be bought. For a CEO, the reality is more complex: security is an operational discipline that must be governed, measured, and continuously validated.</p>
        <h2 id="essential-eight">Mastering the Essential Eight</h2>
        <p>The ASD Essential Eight is not a checkbox exercise; it is a maturity model. Moving from Level 1 to Level 3 requires structural changes to how your organisation handles data and access.</p>
        <h2 id="software-myth">The Software Myth</h2>
        <p>Installing an antivirus is not a security strategy. True resilience comes from having a 24/7 Security Operations Centre (SOC) monitoring every endpoint for anomalous behavior.</p>
      </>
    )
  },
  'onshore-soc-benefits': {
    eyebrow: 'SOC Operations',
    title: 'Why Onshore SOC Matters for Australian Enterprise',
    summary: 'Understanding the operational and compliance benefits of local security monitoring and response.',
    author: 'Sarah Chen',
    role: 'SOC Manager @ C9',
    time: '5 min read',
    date: 'Mar 28, 2026',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'sovereignty', label: 'Data Sovereignty' },
      { id: 'response-time', label: 'Response Parity' }
    ],
    content: (
      <>
        <p>When a security incident occurs at 3 AM AEST, having a team in a different timezone and a different legal jurisdiction is a massive liability. An onshore SOC provides the immediate, culturally aligned response required to contain threats.</p>
        <h2 id="sovereignty">Data Sovereignty & Compliance</h2>
        <p>For many Australian industries, where your security data is stored and who has access to it is a matter of strict legal compliance. A local SOC ensures your data never leaves Australian soil.</p>
      </>
    )
  },
  'modern-workplace-control': {
    eyebrow: 'Modern Workplace',
    title: 'Modern Workplace: Beyond Microsoft 365',
    summary: 'Controlling the user environment is the next frontier of business productivity and security.',
    author: 'Mark Thompson',
    role: 'Workplace Architect',
    time: '7 min read',
    date: 'Mar 02, 2026',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'user-experience', label: 'The User Gap' },
      { id: 'endpoint-control', label: 'Endpoint Control' }
    ],
    content: (
      <>
        <p>Providing staff with a laptop and an M365 login is not a modern workplace strategy. It's the bare minimum. True workplace maturity is about ensuring every user has a consistent, secure, and friction-free experience regardless of their location.</p>
        <h2 id="endpoint-control">Total Endpoint Control</h2>
        <p>By leveraging automated deployment and unified endpoint management, IT teams can maintain absolute control over the device environment without ever touching the physical hardware.</p>
      </>
    )
  },
  'set-and-forget-myth': {
    eyebrow: 'Operational Discipline',
    title: 'The Myth of "Set and Forget" IT',
    summary: 'Why continuous operational discipline is the only way to maintain infrastructure stability.',
    author: 'James Wilson',
    role: 'Infrastructure Strategist @ C9',
    time: '4 min read',
    date: 'Feb 20, 2026',
    img: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'the-drift', label: 'Operational Drift' },
      { id: 'discipline', label: 'The Discipline Model' }
    ],
    content: (
      <>
        <p>The most dangerous phrase in IT is "it's working fine." Infrastructure that is not actively governed is undergoing "operational drift"—a slow degradation of security, performance, and stability.</p>
        <h2 id="the-drift">The Reality of Operational Drift</h2>
        <p>Systems that are not patched, monitored, and reviewed monthly eventually fail. Stability is not a state you reach; it is a process you maintain.</p>
      </>
    )
  }
};

export default function InsightArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = INSIGHTS[slug];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!article) {
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
            <Link href="/insights" className="inline-flex items-center text-slate-400 font-medium text-[13px] hover:text-white transition-colors mb-10 group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Insights
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-lg border border-[#5D00D6] text-[#A855F7] text-[11px] font-bold uppercase tracking-widest bg-[#5D00D6]/10">
                Industry Insights
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[11px] font-bold uppercase tracking-widest">
                {article.eyebrow}
              </span>
              <span className="text-slate-400 text-[13px] font-medium ml-2">— {article.time}</span>
            </div>
            <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-bold text-white leading-[1.1] mb-8 max-w-[900px] tracking-tight whitespace-pre-line">
              {article.title}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              {article.summary}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 pt-8 mt-12 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#5D00D6] flex items-center justify-center text-white font-bold">
                C9
              </div>
              <div>
                <div className="text-white font-bold text-[15px]">{article.author}</div>
                <div className="text-slate-400 text-[13px] font-medium">{article.role}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-slate-400 text-[13px] font-bold uppercase tracking-widest mr-2">Share Insight</span>
              <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#5D00D6] hover:text-white text-slate-300 border border-white/10 transition-all flex items-center justify-center">
                <Linkedin size={16} />
              </button>
              <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#5D00D6] hover:text-white text-slate-300 border border-white/10 transition-all flex items-center justify-center">
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
                <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#5D00D6] mb-6">In This Insight</h4>
                <ul className="space-y-4">
                  {article.sections.map((link: any, i: number) => (
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
              </div>
            </div>

            {/* MAIN CONTENT (Centered Reading Column) */}
            <div className="grow max-w-[700px] w-full bg-white rounded-lg p-8 md:p-14 lg:p-16 lg:-mt-32 relative z-20">
              <div className="max-w-none text-slate-600 [&>p]:mb-6 [&>p]:text-[18px] [&>p]:leading-relaxed [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-3 [&>ul>li]:text-[18px] [&>ul>li]:leading-relaxed [&>a]:text-[#5D00D6] [&>a]:underline [&>figure>img]:rounded-lg">
                {article.content}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE INSIGHTS */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
               <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">More Industry Insights</h3>
               <p className="text-slate-500 text-[18px]">Stay ahead of infrastructure complexity.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(INSIGHTS).filter(k => k !== slug).slice(0, 3).map((key) => {
               const item = INSIGHTS[key];
               return (
                  <Link href={`/insights/${key}`} key={key} className="group flex flex-col h-full bg-slate-50 rounded-lg overflow-hidden hover:bg-white transition-all">
                     <div className="aspect-[16/10] overflow-hidden">
                        <img 
                           src={item.img} 
                           alt={item.title} 
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale"
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
                        
                        <div className="mt-auto flex items-center justify-between pt-6">
                           <span className="text-slate-500 text-[13px] font-medium border-b border-transparent group-hover:border-[#5D00D6]">Read Insight</span>
                           <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-slate-400 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                              <ChevronRight size={16} />
                           </div>
                        </div>
                     </div>
                  </Link>
               )
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section id="consultation">
        <WpConsultationForm
          showHeader={false}
          eyebrow="STRATEGY & EXECUTION"
          title="Ready to mature your infrastructure?"
          description="Speak with an Australian technology strategist to map out your own path to reliability and scale."
          formTitle="Book Strategy Call"
        />
      </section>
    </div>
  );
}
