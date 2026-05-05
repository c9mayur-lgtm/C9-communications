'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Wifi, Phone, Network, Shield, HeadphonesIcon, AlertTriangle, MapPin, BarChart3, Clock, TrendingUp, Zap, Activity, Building2 } from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { TrustProofSystem } from '@/components/sections/TrustProofSystem';
import RetailArchitecture from '@/components/sections/industries/RetailArchitecture';

/* ─── Animation Helper ─────────────────────────── */
const FadeIn = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Hero ─────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-slate-50 pt-24 pb-14 md:pt-32 md:pb-20">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
    <div
      className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.05]"
      style={{ background: 'radial-gradient(circle, #5D00D6 0%, transparent 70%)' }}
    />

    <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <Building2 size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Primary Enterprise Use Case</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Enterprise Infrastructure for <span className="text-[#5D00D6]">Multi-Site Retail</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body text-slate-600 mb-2 max-w-[530px]">
              We deliver bulletproof, multi-site architecture designed for the unique demands of high-volume retail. From POS reliability to holiday trading resilience, we ensure your entire footprint stays operational.
            </p>
            <p className="text-[14px] text-[#5D00D6] font-bold mb-10">Accountable IT & Network operations for distributed retail environments.</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-4">
              <a
                href="#consultation-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 cursor-pointer whitespace-nowrap h-14 px-8 text-[15px] font-bold"
              >
                Request Retail Brief
                
              </a>
              <a
                href="/industries"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full hover:bg-[#5D00D6] hover:text-white transition-all cursor-pointer whitespace-nowrap h-14 px-8 text-[15px] font-bold"
              >
                View All Industries
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="flex flex-wrap gap-5">
              {['Multi-Site Standardisation', 'Holiday Trading Resilience', '24/7 NOC Overlay', 'POS Continuity'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-slate-500 text-[14px] font-bold">
                  <CheckCircle size={12} className="text-[#5D00D6]" /> {t}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Visual panel */}
        <FadeIn delay={0.12} className="relative h-full hidden lg:block">
          <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-2xl">
            <img 
              src="/images/greenfield_retail.png" 
              alt="Retail Enterprise Infrastructure" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/90 via-[#0c1024]/20 to-transparent flex items-end p-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full">
                <div className="flex items-center gap-4 text-white">
                  <Activity className="text-green-400" size={24} />
                  <div>
                    <div className="font-bold text-[14px]">NOC Overlay Active</div>
                    <div className="text-white/70 text-[14px]">Proactive store monitoring across 150+ sites.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── Operational Focus ─────────────────────────── */
const OperationalFocus = () => (
  <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
        <FadeIn>
          <p className="c9-eyebrow mb-5">Enterprise Resilience</p>
          <h2 className="c9-section-heading mb-6">Built for Holiday Trading <span className="text-[#5D00D6]">Resilience</span></h2>
          <p className="c9-body text-slate-600 mb-8 leading-relaxed">
            Black Friday, Christmas, and peak trading periods are when your infrastructure is tested most. A single network failure during these peaks doesn't just cost sales; it damages brand trust.
          </p>
          <div className="space-y-6">
            {[
              { title: 'POS Continuity', desc: 'Local cache and LTE failover ensure your registers keep ringing even during local exchange outages.' },
              { title: 'POS Reliability', desc: 'Bulletproof POS networking with dedicated VLANs and prioritised traffic to ensure zero latency at checkout.' },
              { title: 'Remote Support Model', desc: 'Australian-based NOC that understands retail logic. We don’t troubleshoot routers; we fix store operations.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0">
                  <Zap size={18} className="text-[#5D00D6]" />
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="relative aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border border-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop" 
            alt="Retail Store Operations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/20 max-w-[240px]">
             <div className="flex items-center gap-3 mb-3">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Active Store Health</span>
             </div>
             <div className="text-[24px] font-bold text-[#5D00D6] mb-1 leading-none">99.99%</div>
             <div className="text-[11px] text-slate-500 font-medium">Uptime maintained across national fleet during peak trading.</div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── Final CTA ─────────────────────────────────── */
const FinalCTA = () => (
  <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[760px] text-center">
      <FadeIn>
        <p className="c9-eyebrow mb-5">Retail Audit</p>
        <h2 className="c9-section-heading mb-6">Is your network ready for the next peak?</h2>
        <p className="c9-body text-slate-600 mb-10">
          We offer a comprehensive Infrastructure Audit for multi-site retailers. We'll identify failure points in your current store architecture and show you exactly how to stabilise your operations.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 cursor-pointer"
          >
            Get a Retail Infrastructure Audit
            
          </a>
          <p className="text-[14px] text-slate-500">No obligation. Just clear, operational insight.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── Page ──────────────────────────────────────── */
export default function RetailPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <OperationalFocus />
      <RetailArchitecture />
      <TrustProofSystem 
        testimonials={[
          {
            quote: "Our POS systems used to drop out every time the local internet flared up. C9's LTE failover has kept us 100% online for 12 months straight.",
            author: "National Retail Manager"
          },
          {
            quote: "Support is actually fast. We aren't stuck on hold with a generic provider while customers wait in line.",
            author: "Operations Director"
          },
          {
            quote: "Standardising our 15 stores with one IT partner has saved us countless hours of troubleshooting.",
            author: "Retail Group Owner"
          }
        ]}
        cases={[
          {
            title: "50-Store Failover Rollout",
            desc: "Implemented automated 4G failover across national retail fleet to ensure zero transaction loss."
          },
          {
            title: "Network Standardisation",
            desc: "Replaced fragmented local setups with a unified, high-performance network for consistent store operations."
          },
          {
            title: "Rapid POS Migration",
            desc: "Seamlessly transitioned all stores to cloud-based POS with zero operational downtime."
          }
        ]}
      />
      <FinalCTA />
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="RETAIL ENTERPRISE ADVISORY"
          title="Stabilise your retail fleet."
          description="Drop your details below for a direct conversation about your multi-site infrastructure. We'll show you how we guarantee uptime and fast support across your entire footprint."
          formTitle="Talk to a Retail Specialist"
        />
      </section>
    </main>
  );
}
