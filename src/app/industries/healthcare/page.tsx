'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Wifi, Phone, Network, Shield, HeadphonesIcon,
  AlertTriangle, Activity, Lock
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
      className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.05]"
      style={{ background: 'radial-gradient(circle, #5D00D6 0%, transparent 70%)' }}
    />

    <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-[1240px]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <Activity size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Healthcare</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Reliable, Secure IT & Telco for{' '}
              <span className="text-[#5D00D6]">Healthcare Environments</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body text-slate-600 mb-10 max-w-[530px]">
              We deliver stable, secure systems that support patient care and day-to-day operations —
              without the disruptions that put continuity at risk.
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
                Talk to a Healthcare Specialist
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
              {['Stable Infrastructure', 'Data Protection', 'Secure Connectivity', 'Full Support'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-slate-500 text-[13px] font-bold">
                  <CheckCircle size={16} className="text-[#5D00D6]" /> {t}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Visual stat panel */}
        <FadeIn delay={0.12} className="hidden lg:block">
          <div className="bg-white border border-slate-100 rounded-[32px] p-10 shadow-sm">
            <div className="grid grid-cols-2 gap-0 divide-x divide-y divide-slate-100">
              {[
                { stat: '99.9%', label: 'System uptime target' },
                { stat: '1', label: 'Managed service partner' },
                { stat: '24/7', label: 'Monitoring & response' },
                { stat: '0', label: 'Disruptions to patient ops' },
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
          <p className="c9-eyebrow mb-4">Healthcare IT Reality</p>
          <h2 className="c9-section-heading mb-6">
            In Healthcare, Systems Must Work — Every Time
          </h2>
          <p className="c9-body text-slate-600 mb-4">
            Healthcare environments require three things above everything else: reliability, security,
            and consistency. Your systems need to support patient care, protect sensitive information,
            and operate without disruption — regardless of the complexity behind the scenes.
          </p>
          <p className="c9-body text-slate-600">
            Whether you're a general practice, specialist clinic, or multi-site health network, the
            cost of system failures goes beyond inconvenience. It affects care delivery, staff productivity,
            and the trust of every patient who walks through your door.
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
    title: 'System downtime affecting patient experience',
    desc: 'Even brief outages disrupt appointments, access to records, and the ability for staff to do their jobs.',
  },
  {
    icon: <Lock size={20} />,
    title: 'Security and data protection concerns',
    desc: 'Patient records are high-value targets. Security needs to be built in — not bolted on after something goes wrong.',
  },
  {
    icon: <Network size={20} />,
    title: 'Disconnected or inconsistent systems',
    desc: 'Multiple systems that don\'t talk to each other create gaps, manual workarounds, and unnecessary complexity.',
  },
  {
    icon: <HeadphonesIcon size={20} />,
    title: 'Limited internal IT capability',
    desc: 'Most healthcare operators don\'t have a large IT team — which means external support needs to be reliable and responsive.',
  },
  {
    icon: <Activity size={20} />,
    title: 'Performance issues under load',
    desc: 'Slow systems during peak hours — whether from network congestion or aging hardware — reduce care efficiency.',
  },
];

const Challenges = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <FadeIn className="mb-12">
        <p className="c9-eyebrow mb-4">Common Challenges</p>
        <h2 className="c9-section-heading max-w-2xl">
          What Healthcare Operators Are Up Against
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
          <p className="c9-eyebrow mb-4">The C9 Approach</p>
          <h2 className="c9-section-heading mb-6">
            Secure, Stable, and Well-Structured Healthcare Systems
          </h2>
          <p className="c9-body text-slate-600 mb-4">
            C9 provides structured IT and communications environments built specifically for healthcare
            operations. We focus on reliability first — ensuring systems work consistently, support
            staff effectively, and protect patient data at every layer.
          </p>
          <p className="c9-body text-slate-600 mb-8">
            We act as your managed technology partner, taking ownership of your environment so your
            team can focus on delivering care — not managing IT.
          </p>
          <div className="space-y-3">
            {[
              'Stable, well-maintained infrastructure across your practice or network',
              'Security built into the environment — not added as an afterthought',
              'Responsive support that understands healthcare urgency',
              'Single point of contact for all IT and telco issues',
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
              Why It Matters
            </p>
            <h3 className="text-[26px] font-bold mb-6 leading-snug">
              Your IT shouldn't require constant attention from your clinical team.
            </h3>
            <p className="text-white/70 text-[15px] leading-relaxed">
              When your technology partner takes full ownership of the environment — monitoring,
              maintaining, securing, and supporting it proactively — your staff can focus entirely
              on patient care. That's the difference a well-managed system makes.
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
    desc: 'Reliable, high-availability internet for uninterrupted access to clinical systems and records.',
  },
  {
    icon: <Phone size={20} />,
    title: 'Voice',
    desc: 'Clear, dependable communication across reception, clinical staff, and multiple locations.',
  },
  {
    icon: <Network size={20} />,
    title: 'Network',
    desc: 'A secure, high-performance infrastructure foundation that supports every device and system in your practice.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Security',
    desc: 'Built-in protection for sensitive patient environments — firewalls, access management, and ongoing monitoring.',
  },
  {
    icon: <HeadphonesIcon size={20} />,
    title: 'Support',
    desc: 'Responsive, knowledgeable support that treats your issues with the urgency a healthcare environment demands.',
  },
];

const Capabilities = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <FadeIn className="text-center mb-14">
        <p className="c9-eyebrow mb-4">What We Deliver</p>
        <h2 className="c9-section-heading">Core Capabilities for Healthcare</h2>
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
                Responsive support built for healthcare environments.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="c9-eyebrow mb-4">Reliability Where It Counts</p>
          <h2 className="c9-section-heading mb-6">
            We Understand the Importance of Reliability in Healthcare
          </h2>
          <p className="c9-body text-slate-600 mb-5">
            When a system goes down in a healthcare environment, it's not just an inconvenience —
            it affects real people and real care outcomes.
          </p>
          <p className="c9-body text-slate-600 mb-5">
            Our team responds quickly and takes ownership. We don't hand you off to a call centre.
            You get direct access to a team that knows your environment and resolves issues fast.
          </p>
          <p className="c9-body font-bold text-[#5D00D6] mb-8">
            We treat your systems with the same urgency your practice deserves.
          </p>
          <div className="space-y-3">
            {[
              'Direct contact — no escalation queues',
              'Engineers who understand healthcare operations',
              'Issues resolved fully, not just temporarily patched',
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
        <h2 className="c9-section-heading mb-6">Let's Strengthen Your Healthcare Systems</h2>
        <p className="c9-body text-slate-600 mb-10">
          Talk to a specialist who understands healthcare environments. We'll review your current
          setup and outline what a reliable, secure, well-supported system looks like for your practice.
        </p>
        <a
          href="#consultation-section"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group cursor-pointer"
        >
          Talk to a Healthcare Specialist
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </FadeIn>
    </div>
  </section>
);

/* ─── Page ──────────────────────────────────────── */
export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Context />
      <Challenges />
      <Solution />
      <Capabilities />
      <Trust />
      <FinalCTA />
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="HEALTHCARE IT ADVISORY"
          title="Let's Strengthen Your Healthcare Systems"
          description="Tell us about your practice or network and we'll outline the right technology approach — secure, reliable, and built around operational continuity."
          formTitle="Talk to a Healthcare Specialist"
        />
      </section>
    </main>
  );
}
