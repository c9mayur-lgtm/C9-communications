'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Wifi, ShieldAlert, Activity, Users, ArrowRight, CheckCircle2, 
  Zap, Clock, Layers, ShieldCheck, Building2, TrendingUp,
  Server, Smartphone, PhoneCall, Monitor, CheckCircle
} from 'lucide-react';
import { Section } from '@/components/design-system/Section';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { C9Button } from '@/components/design-system/C9Button';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { ContinueJourney } from '@/components/sections/ContinueJourney';

const FadeIn = ({ children, delay = 0, className, direction = 'up' }: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}) => {
  const y = direction === 'up' ? 24 : direction === 'down' ? -24 : 0;
  const x = direction === 'left' ? -24 : direction === 'right' ? 24 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

export default function BusinessNbnPage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      
      {/* ══ 1. HERO ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pt-12 pb-0 lg:pt-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className={`${C} relative z-10`}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center pb-16 lg:pb-24">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
                   <Activity size={13} className="text-[#5D00D6]" />
                   <span className="c9-eyebrow !mb-0">Always-On Business Connectivity</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                 <h1 className="c9-hero-title mb-6">
                    Reliable Business nbn™ That Keeps Your <span className="text-[#5D00D6]">Operations Running.</span>
                 </h1>
              </FadeIn>

              <FadeIn delay={0.15}>
                 <p className="c9-body mb-8 max-w-[580px]">
                    Downtime costs revenue. Unreliable providers create operational risk. C9 provides accountability and continuous connectivity, not just a link.
                 </p>
              </FadeIn>

              <FadeIn delay={0.22}>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                    {[
                       'Single partner accountability',
                       'Proactive 24/7 monitoring',
                       'Automated 4G/5G failover',
                       'Australian senior support'
                    ].map((item) => (
                       <div key={item} className="flex items-center gap-3">
                          <CheckCircle size={12} className="text-[#5D00D6] shrink-0" />
                          <span className="text-slate-700 font-bold text-[14px]">{item}</span>
                       </div>
                    ))}
                 </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <C9Button className="px-9 h-14 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl shadow-purple-900/20 rounded-full" asChild>
                      <Link href="#consultation">Get a Connectivity Assessment</Link>
                    </C9Button>
                    <C9Button variant="outline" className="px-9 h-14 border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] rounded-full bg-white" asChild>
                      <Link href="#solutions">Explore Solutions</Link>
                    </C9Button>
                 </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
               <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group">
                  <img
                     src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000"
                     alt="Operational IT Center"
                     className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/40 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/60 shadow-xl">
                     <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Network State</span>
                        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[10px] uppercase tracking-wider">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active & Secure
                        </span>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Visibility</div>
                           <div className="text-[14px] font-bold text-slate-900 leading-none">Full Access ✓</div>
                        </div>
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Failover</div>
                           <div className="text-[14px] font-bold text-slate-900 leading-none">Ready</div>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <WpClientTicker />

      {/* ══ 2. THE REAL BUSINESS PROBLEM ═════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left" className="order-2 lg:order-1">
               <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200 aspect-square max-w-md mx-auto lg:max-w-none">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop" 
                    alt="Network Hardware Exposure and downtime risk" 
                    className="w-full h-full object-cover grayscale object-center" 
                  />
                  <div className="absolute inset-0 bg-rose-500/10 mix-blend-overlay" />
                  <div className="absolute top-6 right-6 bg-white/95 p-6 rounded-2xl shadow-xl border border-rose-100">
                    <div className="flex items-center gap-2 text-rose-600 font-bold text-[10px] uppercase tracking-widest mb-1">
                       <ShieldAlert size={14} /> Risk Detected
                    </div>
                    <div className="text-xl font-bold text-slate-900">Link Failure Exposure</div>
                  </div>
               </div>
            </FadeIn>

            <FadeIn direction="right" className="order-1 lg:order-2">
               <span className="c9-eyebrow mb-4">Operational Risk</span>
               <h2 className="c9-section-heading mb-6">
                  When Connectivity Stops, Business Stops.
               </h2>
               <div className="space-y-6 mb-8">
                  {[
                     { title: 'Retail & Hospitality', desc: 'Broken POS systems and missed payments due to link dropouts.' },
                     { title: 'Warehouses & Logistics', desc: 'Inventory delays and operational blind spots in the rollout.' },
                     { title: 'Multi-Site Offices', desc: 'Fragmented vendors and finger-pointing during regional outages.' }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0 mt-0.5">
                           <span className="w-2 h-2 rounded-full bg-rose-500" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-[16px] mb-1">{item.title}</h4>
                           <p className="text-slate-500 text-[16px] leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm mb-6">
                  <p className="text-slate-900 font-bold text-[18px]">
                     Unreliable providers leave you exposed. C9 removes the risk.
                  </p>
               </div>
               <a href="#consultation" className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:gap-3 transition-all group">
                  Assess your connectivity risk <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
               </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 3. HOW C9 SOLVES IT ══════════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className={C}>
          <FadeIn className="text-center mb-16">
            <span className="c9-eyebrow mb-4">The Managed Solution</span>
            <h2 className="c9-section-heading">Operational Continuity, Not Just a Connection.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Zap />, title: "Primary & Backup Path", desc: "We architect primary and redundant paths (4G/5G) to ensure you never go offline." },
              { icon: <Activity />, title: "Proactive Monitoring", desc: "Our NOC monitors your link 24/7. We resolve issues before your team notices." },
              { icon: <Users />, title: "Escalation Ownership", desc: "Stop chasing carriers. C9 owns the entire ticket lifecycle. We fight the battle for you." },
              { icon: <Clock />, title: "Managed Installation", desc: "A senior engineer oversees your deployment, ensuring Day One operational readiness." },
              { icon: <ShieldCheck />, title: "Senior Local Support", desc: "Speak directly to a senior Australian engineer. No offshore queues, no scripts." },
              { icon: <Layers />, title: "Single Vendor Model", desc: "Consolidate internet, voice, and security into one managed, accountable environment." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:bg-white hover:border-[#5D00D6]/20 hover:shadow-xl transition-all group text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-5 transform group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="c9-card-title mb-2 text-[18px]">{item.title}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. BUILT FOR YOUR BUSINESS STAGE ═════════════════════════ */}
      <section id="solutions" className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Strategic Relevance</span>
               <h2 className="c9-section-heading mb-6">
                  Infrastructure That Adapts to Your Stage.
               </h2>
               <div className="space-y-8">
                  {[
                    { 
                      icon: <Building2 />, 
                      title: "Opening a New Site?", 
                      context: "Greenfield Deployment",
                      desc: "Fast installation and Day-One readiness. We manage the site survey and ensure you are live before opening day." 
                    },
                    { 
                      icon: <TrendingUp />, 
                      title: "Running an Existing Business?", 
                      context: "Migration & Stability",
                      desc: "Safe migration without disruption. We takeover fragmented environments and consolidate regional providers." 
                    },
                    { 
                      icon: <Monitor />, 
                      title: "Managing Enterprise Operations?", 
                      context: "Governance & Scale",
                      desc: "Centralized visibility and guaranteed uptime confidence across dozens or hundreds of locations." 
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group">
                       <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#5D00D6] group-hover:text-white transition-all shadow-sm shrink-0 mt-1">
                          {item.icon}
                       </div>
                       <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">{item.context}</span>
                          <h3 className="c9-card-title !text-[20px] mb-2">{item.title}</h3>
                          <p className="c9-body text-slate-500">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right" className="bg-[#0c1024] p-10 lg:p-14 rounded-[40px] text-white relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
               <div className="relative z-10">
                  <h2 className="c9-section-heading !text-white mb-6 leading-tight">Identify Your <br/> Connectivity Gaps.</h2>
                  <p className="c9-body !text-white/60 mb-10 text-lg">
                    Most failures happen because of poor planning, not bad hardware. Let our engineers audit your environment and identify the risks.
                  </p>
                  <C9Button className="w-full h-14 bg-[#5D00D6] hover:bg-[#4d00b3] rounded-full shadow-2xl shadow-purple-900/40" asChild>
                    <Link href="#consultation">Book a Connectivity Review</Link>
                  </C9Button>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 5. WHEN THINGS GO WRONG ══════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-[#0c1024] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        <div className={C}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <span className="c9-eyebrow !text-[#a56eff] mb-4">The Accountability Layer</span>
              <h2 className="c9-section-heading !text-white mb-6">
                When Things Go Wrong, Who Owns the Outcome?
              </h2>
              <p className="c9-body text-white/70">
                Generic providers leave you waiting in queues while vendors blame each other. C9 removes that layer entirely by taking absolute ownership.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Direct Engineer Access", text: "Speak directly to a senior Australian engineer who knows your environment. No junior scripts." },
               { title: "Proactive Response", text: "We often detect faults via our NOC before you do, initiating restoration before the business is impacted." },
               { title: "Vendor Orchestration", text: "We handle all carriers and hardware vendors. We don't hand you off; we fix the problem end-to-end." }
             ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-white/60 text-[16px] leading-relaxed">{item.text}</p>
               </FadeIn>
             ))}
          </div>
        </div>
      </section>

      {/* ══ 6. BUSINESS OUTCOMES / PROOF ═════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <FadeIn direction="left">
                <span className="c9-eyebrow mb-4">Measurable Impact</span>
                <h2 className="c9-section-heading mb-6">Predictable Connectivity. Predictable Revenue.</h2>
                <p className="c9-body mb-10 text-slate-600">
                  When you shift from a generic connection to a managed environment, the outcomes are immediate and commercially significant.
                </p>

                <div className="grid grid-cols-2 gap-4">
                   {[
                     { label: "Uptime Confidence", val: "99.9%" },
                     { label: "Install Readiness", val: "Day 1" },
                     { label: "Vendor Management", val: "Single Owner" },
                     { label: "Accountability", val: "Absolute" }
                   ].map((stat, i) => (
                     <div key={i} className="bg-slate-50/80 border border-slate-100 rounded-[32px] p-8 hover:bg-white hover:border-[#5D00D6]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#5D00D6]/10 group">
                        <div className="text-3xl font-bold text-[#5D00D6] mb-1 leading-none tracking-tight group-hover:translate-x-1 transition-transform duration-500">{stat.val}</div>
                        <div className="text-slate-500 font-bold text-[12px] uppercase tracking-widest leading-tight">{stat.label}</div>
                     </div>
                   ))}
                </div>
             </FadeIn>

             <FadeIn direction="right" delay={0.1}>
               <div className="bg-white p-6 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-200/50">
                 <WpCaseStudies 
                    articles={[
                      {
                        tag: 'RETAIL & POS',
                        title: '15-staff office stops the dropouts',
                        desc: "A business was experiencing slow speeds and call dropouts. C9 stabilized the link and added automated failover. Result: 100% uptime through peak season.",
                        img: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Stability Restored',
                        href: '/case-studies/retail-pos-stabilisation'
                      },
                      {
                        tag: 'LOGISTICS HUB',
                        title: 'Warehouse Operations Restored',
                        desc: "A regional warehouse had fragmented internet across 3 buildings. C9 consolidated the infrastructure with managed nbn™ and 4G failover. Result: Zero lost orders.",
                        img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Zero Lost Orders',
                        href: '#'
                      },
                      {
                        tag: 'PROFESSIONAL SERVICES',
                        title: 'Law Firm Infrastructure Takeover',
                        desc: "A mid-tier law firm was plagued by inconsistent speeds. C9 took over the management and optimized the nbn™ path. Result: Fast, consistent file syncing.",
                        img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Consistent Syncing',
                        href: '#'
                      }
                    ]}
                  />
               </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 7. FINAL CTA ═════════════════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
        <div className={C}>
           <div className="bg-[#5D00D6] rounded-[48px] p-10 lg:p-20 relative overflow-hidden shadow-2xl shadow-purple-900/40 text-center">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.05] rounded-full blur-[100px] -mr-64 -mt-64" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white opacity-[0.05] rounded-full blur-[80px] -ml-32 -mb-32" />
              
              <div className="relative z-10">
                <span className="c9-eyebrow !text-white/80 mb-4">Strategic Next Step</span>
                <h2 className="c9-section-heading !text-white mb-6">Speak With C9 About Your <br/> Connectivity Strategy</h2>
                <p className="c9-body !text-white/70 mb-10 max-w-2xl mx-auto text-lg">
                  Stop accepting downtime as a cost of business. Partner with an accountable leader who takes full ownership of your infrastructure.
                </p>
                <C9Button className="px-10 h-16 bg-white text-[#5D00D6] hover:bg-slate-50 shadow-xl rounded-full text-lg" asChild>
                  <Link href="#consultation">Request Connectivity Audit</Link>
                </C9Button>
              </div>
           </div>
        </div>
      </section>

      {/* ══ 8. RELATED SOLUTIONS ═════════════════════════════════════ */}
      <ContinueJourney 
        title="Connectivity Is the Foundation. Here's What Runs on Top."
        description="Businesses that lock in reliable nbn™ typically consolidate their voice, mobile, and IT infrastructure next. These are the services that complete a resilient business stack."
        links={[
          { label: "Microsoft Teams Calling", path: "/telco/teams-calling" },
          { label: "Business Mobile Fleet", path: "/telco/mobile-plans" },
          { label: "Fast Fibre", path: "/telco/fast-fibre" },
          { label: "Managed IT Infrastructure", path: "/managed-it/infrastructure" }
        ]} 
      />

      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="GET CONNECTED"
          title="Ready for internet that just works?"
          description="Speak with an expert about your business needs. We'll audit your address and recommend the most reliable connection for your team."
          formTitle="Request Connectivity Audit"
        />
      </section>

      <WpFAQAndFeedback 
        faqItems={[
          { q: "How long does a typical business nbn install take?", a: "Standard installs are usually completed in 2-5 business days. For new sites requiring nbn construction, we manage the entire process and provide interim connectivity to get you live on Day 1." },
          { q: "Do you offer backup connectivity?", a: "Yes. Every C9 business connection can be paired with an automated 4G or 5G failover link. If the primary line ever drops, your operations stay online." },
          { q: "Who provides support if my internet goes down?", a: "You call C9 directly. You'll speak to a senior Australian engineer who owns the ticket until it's resolved. We handle all carrier coordination." }
        ]}
      />
    </main>
  );
}
