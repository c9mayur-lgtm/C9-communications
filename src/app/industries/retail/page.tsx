'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Wifi, Phone, Network, Shield, HeadphonesIcon,
  AlertTriangle, MapPin, BarChart3
} from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

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
              <MapPin size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Retail</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              IT & Telco Built for{' '}
              <span className="text-[#5D00D6]">Multi-Site Retail Environments</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body text-slate-600 mb-10 max-w-[530px]">
              From single stores to nationwide rollouts, we deliver reliable, consistent technology
              across every location — so your stores stay open and your transactions keep moving.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-10">
              <a
                href="#consultation-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group cursor-pointer whitespace-nowrap"
              >
                Talk to a Retail Specialist
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/industries"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-8 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                View All Industries
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="flex flex-wrap gap-5">
              {['Multi-Site Expertise', 'POS Reliability', 'Standardised Infrastructure', 'Fast Support'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-slate-500 text-[13px] font-bold">
                  <CheckCircle size={16} className="text-[#5D00D6]" /> {t}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Stats panel */}
        <FadeIn delay={0.12} className="hidden lg:block">
          <div className="bg-white border border-slate-100 rounded-[32px] p-10 shadow-sm">
            <div className="grid grid-cols-2 gap-0 divide-x divide-y divide-slate-100">
              {[
                { stat: '100%', label: 'Store uptime focus' },
                { stat: '1', label: 'Partner for all sites' },
                { stat: '24/7', label: 'Monitoring & support' },
                { stat: '0', label: 'Vendor coordination needed' },
              ].map((item, i) => (
                <div key={i} className="text-center p-8">
                  <div className="text-[38px] font-extrabold text-[#5D00D6] mb-2 leading-none">
                    {item.stat}
                  </div>
                  <div className="text-slate-500 text-[12px] font-bold uppercase tracking-wider text-balance">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── Context ───────────────────────────────────── */
const Context = () => (
  <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="max-w-3xl">
        <FadeIn>
          <p className="c9-eyebrow mb-4">The Reality of Retail IT</p>
          <h2 className="c9-section-heading mb-6">
            Downtime in Retail Isn't an IT Problem — It's a Revenue Problem
          </h2>
          <p className="c9-body text-slate-600 mb-4">
            Retail businesses depend on uptime. Every store, every system, every transaction needs
            to work without interruption. POS systems, connectivity, and staff communications can't
            fail during trading hours.
          </p>
          <p className="c9-body text-slate-600">
            From single-location operators to multi-site networks, even small disruptions have a
            direct impact — on revenue, on customer experience, and on staff efficiency.
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── Challenges ────────────────────────────────── */
const challenges = [
  {
    icon: <AlertTriangle size={20} />,
    title: 'Downtime affecting sales',
    desc: 'POS failures, connectivity drops, and system outages directly stop transactions during trading hours.',
  },
  {
    icon: <Network size={20} />,
    title: 'Inconsistent systems across locations',
    desc: 'Different configurations at different stores create management complexity and unpredictable failures.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Multiple vendors, no single owner',
    desc: 'Coordinating between internet, hardware, and support providers wastes time and delays resolution.',
  },
  {
    icon: <MapPin size={20} />,
    title: 'Slow rollout of new stores',
    desc: 'Without a structured process, every new store opening is a project that takes longer than it should.',
  },
  {
    icon: <Shield size={20} />,
    title: 'No visibility across sites',
    desc: 'Problems at remote locations go undetected until they escalate — by which point the damage is done.',
  },
];

const Challenges = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <FadeIn className="mb-12">
        <p className="c9-eyebrow mb-4">Common Challenges</p>
        <h2 className="c9-section-heading max-w-2xl">
          What Retail Businesses Deal with Every Day
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((item, i) => (
          <FadeIn key={i} delay={i * 0.07}>
            <div className="bg-white rounded-[20px] border border-slate-100 p-7 h-full hover:shadow-lg hover:border-[#5D00D6]/20 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center text-[#5D00D6] mb-5 group-hover:bg-[#5D00D6]/15 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Solution ──────────────────────────────────── */
const Solution = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <p className="c9-eyebrow mb-4">How C9 Helps</p>
          <h2 className="c9-section-heading mb-6">
            A Structured, Scalable Approach to Retail IT
          </h2>
          <p className="c9-body text-slate-600 mb-4">
            C9 delivers a consistent technology model across your retail network — ensuring every
            store runs the same way, supported by the same team, with the same level of reliability.
          </p>
          <p className="c9-body text-slate-600 mb-8">
            We standardise your infrastructure, simplify vendor management, and build the systems
            your stores need to stay operational and ready to grow.
          </p>
          <div className="space-y-3">
            {[
              'Standardised setup across every store location',
              'Single point of contact for all IT and telco needs',
              'Proactive monitoring — not just break-fix response',
              'Structured process for new store rollouts',
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={17} className="text-[#5D00D6] shrink-0 mt-0.5" />
                <span className="font-semibold text-[14px] text-slate-700">{point}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-[#5D00D6] rounded-[32px] p-10 text-white">
            <p className="text-[#C084FC] text-[11px] font-bold uppercase tracking-widest mb-6">
              What This Means for You
            </p>
            <h3 className="text-[26px] font-bold mb-6 leading-snug">
              Every store operates the same way. Every problem gets resolved fast.
            </h3>
            <p className="text-white/70 text-[15px] leading-relaxed">
              Instead of managing different systems, different vendors, and different configurations
              at each location — you have one consistent environment, one team who knows your setup,
              and a support model built around keeping your stores open.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── Capabilities ──────────────────────────────── */
const capabilities = [
  {
    icon: <Wifi size={20} />,
    title: 'Connectivity',
    desc: 'Reliable business-grade internet designed to keep stores online at all times — including failover for critical trading periods.',
  },
  {
    icon: <Phone size={20} />,
    title: 'Voice',
    desc: 'Clear, consistent communication between stores, head office, and support teams across every location.',
  },
  {
    icon: <Network size={20} />,
    title: 'Network',
    desc: 'Standardised network infrastructure across all locations — built for performance and easy management.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Security',
    desc: 'Protection across every store and endpoint. Firewalls, access control, and security monitoring built into the environment.',
  },
  {
    icon: <HeadphonesIcon size={20} />,
    title: 'Support',
    desc: 'Fast, responsive support when issues arise. Our team knows your environment and responds with urgency.',
  },
];

const Capabilities = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <FadeIn className="text-center mb-14">
        <p className="c9-eyebrow mb-4">What We Deliver</p>
        <h2 className="c9-section-heading">Core Capabilities for Retail</h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((cap, i) => (
          <FadeIn key={i} delay={i * 0.07}>
            <div className="bg-white rounded-[20px] border border-slate-100 p-7 h-full hover:shadow-lg hover:border-[#5D00D6]/20 transition-all duration-300 group flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center text-[#5D00D6] mb-5 group-hover:bg-[#5D00D6]/15 transition-colors shrink-0">
                {cap.icon}
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-2">{cap.title}</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed flex-1">{cap.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Scale ─────────────────────────────────────── */
const Scale = () => (
  <section className="py-16 lg:py-24 bg-[#0c1024] relative overflow-hidden">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.08]"
      style={{ background: 'radial-gradient(ellipse at 60% 50%, #5D00D6, transparent 70%)' }}
    />
    <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <FadeIn>
          <p className="c9-eyebrow !text-[#a56eff] mb-5">Scale with Confidence</p>
          <h2 className="c9-section-heading !text-white mb-6">
            One Store or a Hundred — We've Done Both
          </h2>
          <p className="c9-body !text-white/70 mb-4 max-w-[520px]">
            Whether you're opening one new store or rolling out across multiple locations,
            C9 ensures your systems are ready, consistent, and easy to manage from day one.
          </p>
          <p className="c9-body !text-white/70 mb-10 max-w-[520px]">
            We build a repeatable deployment model so that every site comes online quickly —
            without the delays, surprises, or vendor coordination that slow most rollouts down.
          </p>
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all group cursor-pointer"
          >
            Let's Talk About Your Retail Network
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8 space-y-4">
            {[
              'One structured setup model applied to every store',
              'Same hardware, same config, same performance across locations',
              'Proactive monitoring prevents issues before they impact trading',
              'New store openings completed on time, every time',
              'Single phone call for all your locations — no runaround',
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-white/8 last:border-0">
                <CheckCircle className="text-[#a56eff] shrink-0" size={18} />
                <span className="text-white/85 font-medium text-[15px]">{point}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── Trust ─────────────────────────────────────── */
const Trust = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <div className="relative rounded-[32px] overflow-hidden aspect-video lg:aspect-square bg-slate-50 shadow-xl border border-slate-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
                style={{ background: 'radial-gradient(circle, rgba(93,0,214,0.12), transparent)' }}
              >
                <HeadphonesIcon size={40} className="text-[#5D00D6]" />
              </div>
              <div className="text-[28px] font-bold text-slate-900 mb-3 leading-snug">
                Real Support.<br />Real People.
              </div>
              <p className="text-slate-500 text-[15px]">
                A team who knows your stores and responds with urgency.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="c9-eyebrow mb-4">Direct Access</p>
          <h2 className="c9-section-heading mb-6">When a Store Has a Problem, We Fix It Fast</h2>
          <p className="c9-body text-slate-600 mb-5">
            Retail can't wait. When a system goes down during trading hours, every minute matters.
          </p>
          <p className="c9-body text-slate-600 mb-5">
            Our team responds quickly, understands the urgency of retail environments, and resolves
            issues with minimal disruption. We don't forward you to someone else — we take
            ownership of the problem and see it through.
          </p>
          <p className="c9-body font-bold text-[#5D00D6] mb-8">
            Fast response isn't a promise we make. It's how we operate.
          </p>
          <div className="space-y-3">
            {[
              'Direct access — no hold queues or ticket portals',
              'Engineers who know your store configurations',
              'Issues resolved and root cause addressed — not just patched',
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle size={16} className="text-[#5D00D6] shrink-0" />
                <span className="font-semibold text-[14px] text-slate-700">{p}</span>
              </div>
            ))}
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
        <p className="c9-eyebrow mb-5">Get Started</p>
        <h2 className="c9-section-heading mb-6">Let's Improve Your Retail Environment</h2>
        <p className="c9-body text-slate-600 mb-10">
          Whether you have one store or fifty, we'll build the right technology model for your
          retail business — reliable, consistent, and easy to manage.
        </p>
        <a
          href="#consultation-section"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group cursor-pointer"
        >
          Talk to a Retail Specialist
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </FadeIn>
    </div>
  </section>
);

/* ─── Page ──────────────────────────────────────── */
export default function RetailPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Context />
      <Challenges />
      <Solution />
      <Capabilities />
      <Scale />
      <Trust />
      <FinalCTA />
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="RETAIL IT ADVISORY"
          title="Let's Improve Your Retail Environment"
          description="Tell us about your stores and we'll put together a technology plan built around keeping every location online, consistent, and easy to manage."
          formTitle="Talk to a Retail Specialist"
        />
      </section>
    </main>
  );
}
