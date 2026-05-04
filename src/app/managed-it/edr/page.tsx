'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, AlertTriangle, Shield, Activity,
  Eye, Users, Lock, CheckCircle, Server,
  BarChart3, Zap, Globe
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpDefenseBanner } from '@/components/wordpress/WpDefenseBanner';
import { ContinueJourney } from '@/components/sections/ContinueJourney';

/* ─────────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────────── */
const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

const FadeIn = ({
  children, delay = 0, className = '', direction = 'up',
}: {
  children: React.ReactNode; delay?: number; className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}) => {
  const y = direction === 'up' ? 24 : 0;
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

/* ─────────────────────────────────────────────────────────
   EDR HERO VISUAL
   ───────────────────────────────────────────────────────── */
const EdrVisual = () => {
  const endpoints = [
    { label: 'Sydney HQ', status: 'Protected', count: 84, color: 'emerald' },
    { label: 'Melbourne', status: 'Protected', count: 61, color: 'emerald' },
    { label: 'Remote Users', status: 'Monitored', count: 43, color: 'blue' },
    { label: 'Unmanaged', status: 'Risk', count: 7, color: 'red' },
  ];

  return (
    <div className="w-full bg-[#0c1024] rounded-lg border border-white/10 overflow-hidden shadow-2xl font-sans">
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-emerald-400"
          />
          <span className="text-[11px] font-bold text-white/70 uppercase tracking-widest">C9 Endpoint Operations Centre</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
          <Activity size={12} /> Live
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 border-b border-white/10">
        {[
          { label: 'Endpoints Monitored', value: '188' },
          { label: 'Threats Detected', value: '3' },
          { label: 'Response Time', value: '<4 min' },
        ].map((s, i) => (
          <div key={i} className={`px-6 py-5 ${i < 2 ? 'border-r border-white/10' : ''}`}>
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">{s.label}</div>
            <div className="text-2xl font-black text-white">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Endpoint list */}
      <div className="p-6 space-y-3">
        {endpoints.map((ep, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 + 0.3 }}
            className="flex items-center justify-between bg-white/5 rounded-2xl px-5 py-4 border border-white/5"
          >
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${
                ep.color === 'emerald' ? 'bg-emerald-400' :
                ep.color === 'blue' ? 'bg-blue-400' : 'bg-red-400'
              }`} />
              <span className="text-white font-bold text-[13px]">{ep.label}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/40 text-[11px] font-bold">{ep.count} devices</span>
              <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                ep.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                ep.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                'bg-red-500/20 text-red-400'
              }`}>{ep.status}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Alert bar */}
      <div className="mx-6 mb-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl px-5 py-4 flex items-center gap-3">
        <AlertTriangle size={16} className="text-amber-400 shrink-0" />
        <div>
          <div className="text-[11px] font-black text-amber-400 uppercase tracking-widest">Active Investigation</div>
          <div className="text-[12px] text-white/70 mt-0.5">Anomalous process execution detected — endpoint isolated. Response underway.</div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   1. HERO
   ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-12 pb-0 lg:pt-20 border-b border-slate-100">
    <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
      backgroundSize: '40px 40px',
    }} />

    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center pb-16 lg:pb-24">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <Shield size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Endpoint Detection & Response</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Continuous Protection <br /><span className="text-[#5D00D6]">Across All Endpoints.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-8 max-w-[600px]">
              Endpoints are the primary attack surface. Every laptop, workstation, and remote device is a potential entry point. C9 monitors, detects, and responds to threats across your entire device environment — in real time.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a href="#consultation" className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap">
                Request Security Assessment
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#consultation" className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full h-14 px-8 font-bold text-[14px] hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white">
                Review Endpoint Protection
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block">
          <EdrVisual />
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   2. OPERATIONAL RISK
   ───────────────────────────────────────────────────────── */
const SectionRisk = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className={C}>
      <div className="max-w-3xl mb-12">
        <FadeIn>
          <h2 className="c9-section-heading">When Endpoints Are Not Properly Protected</h2>
          <p className="c9-body text-slate-600 mt-4">
            Unmonitored devices operate without detection. Threats persist unnoticed. By the time an incident is identified, the damage is done.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { icon: <Eye className="text-red-500" />, title: 'Threats Go Undetected', desc: 'Malicious activity runs uninterrupted across devices. No alert is raised. No containment occurs.' },
          { icon: <AlertTriangle className="text-amber-500" />, title: 'Delayed Response', desc: 'Without real-time detection, response is reactive. The window for containment closes fast.' },
          { icon: <Lock className="text-[#5D00D6]" />, title: 'Data Compromise', desc: 'Sensitive files, credentials, and customer data are accessed and exfiltrated without notification.' },
          { icon: <Activity className="text-red-400" />, title: 'Operational Disruption', desc: 'Systems lock, applications fail, and staff lose access — often during peak operational hours.' },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm flex items-start gap-6">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div>
              <h4 className="c9-card-title mb-2">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   3. WHERE ENDPOINTS ARE EXPOSED
   ───────────────────────────────────────────────────────── */
const SectionExposure = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className={C}>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <FadeIn>
          <span className="c9-eyebrow mb-4">Exposure Points</span>
          <h2 className="c9-section-heading">Where Endpoints Are Most at Risk</h2>
          <p className="c9-body text-slate-600 mt-4">
            Distributed environments create fragmented visibility. Every location gap is a protection gap.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Remote Users', desc: 'Staff working outside the office operate on uncontrolled networks. Devices are beyond traditional perimeter controls.' },
          { title: 'Multi-Site Environments', desc: 'Inconsistent configuration across locations creates uneven protection. A gap at one site is a gap across the organisation.' },
          { title: 'Unmanaged Devices', desc: 'Personally owned or unregistered devices accessing company systems introduce risk that is invisible to IT.' },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="p-8 bg-slate-50 rounded-lg border border-slate-100">
            <h4 className="text-[18px] font-bold text-slate-900 mb-3">{item.title}</h4>
            <p className="text-slate-600 text-[14px] leading-relaxed">{item.desc}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   4. HOW C9 OPERATES ENDPOINT PROTECTION
   ───────────────────────────────────────────────────────── */
const SectionHowWeOperate = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className={C}>
      <div className="max-w-3xl mb-16">
        <FadeIn>
          <span className="c9-eyebrow mb-4">Core Capability</span>
          <h2 className="c9-section-heading">How C9 Operates Endpoint Protection</h2>
          <p className="c9-body text-slate-600 mt-4">
            This is an active protection system. Not a software installation. Every device is continuously monitored. Every anomaly is investigated. Every threat is contained.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Continuous Monitoring', desc: 'All enrolled endpoints are monitored around the clock. Activity is assessed against known threat patterns.' },
          { title: 'Real-Time Detection', desc: 'Anomalous behaviour triggers an immediate alert. No manual scanning. No scheduled checks.' },
          { title: 'Containment', desc: 'Compromised devices are isolated from the network before threats spread to other systems.' },
          { title: 'Remediation', desc: 'Threats are neutralised. Root cause is identified. Systems are returned to a clean, verified state.' },
        ].map((s, i) => (
          <FadeIn key={i} delay={i * 0.1} className="relative bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/10 text-[#5D00D6] flex items-center justify-center font-bold text-[15px] mb-6">
              0{i + 1}
            </div>
            <h4 className="font-bold text-slate-900 mb-3">{s.title}</h4>
            <p className="text-slate-500 text-[14px] leading-relaxed">{s.desc}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   5. RESPONSE MODEL
   ───────────────────────────────────────────────────────── */
const SectionResponseModel = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <FadeIn>
          <span className="c9-eyebrow mb-4">Incident Response</span>
          <h2 className="c9-section-heading">How Incidents Are Handled</h2>
          <p className="c9-body text-slate-600 mb-8">
            Speed of response determines the scale of damage. Our response model is structured to contain threats before they cascade.
          </p>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Detection', desc: 'Threat activity is identified in real time across all monitored endpoints.' },
              { step: '02', title: 'Prioritisation', desc: 'Severity is assessed immediately. Critical threats receive immediate escalation.' },
              { step: '03', title: 'Containment', desc: 'The affected device is isolated. Lateral spread is blocked.' },
              { step: '04', title: 'Resolution', desc: 'The threat is removed. Evidence is preserved. Systems are restored to verified state.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#5D00D6] text-white flex items-center justify-center text-[12px] font-black">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[16px] mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="left">
          <div className="bg-[#0c1024] rounded-lg p-10 text-white">
            <Zap className="w-10 h-10 text-[#a56eff] mb-6" />
            <h3 className="text-[24px] font-bold text-white mb-4">Response Speed Determines Outcome</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-8">
              The average time to detect a breach without active monitoring is measured in days. With C9 EDR, response is initiated within minutes.
            </p>
            <div className="space-y-4">
              {[
                'Threats contained before lateral movement.',
                'Incidents documented with full audit trail.',
                'Recovery coordinated across affected systems.',
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-[#a56eff] shrink-0" size={18} />
                  <span className="text-white font-medium text-[14px]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   6 & 7. INTEGRATION + VISIBILITY
   ───────────────────────────────────────────────────────── */
const SectionIntegrationAndVisibility = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-8">
        <FadeIn className="bg-white p-10 md:p-12 rounded-lg border border-slate-200">
          <Server className="w-10 h-10 text-[#5D00D6] mb-6" />
          <h3 className="text-[24px] font-bold text-slate-900 mb-4">Integration with Security Environment</h3>
          <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
            Endpoint protection does not operate in isolation. It feeds into the broader security posture — aligned with identity management, network controls, and cloud security.
          </p>
          <ul className="space-y-3">
            {[
              'Aligned with Microsoft 365 and identity security.',
              'Integrates with network and firewall monitoring.',
              'Supports hybrid and multi-site environments.',
            ].map((point, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-[14px]">
                <div className="w-1.5 h-1.5 bg-[#5D00D6] rounded-full shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.2} className="bg-[#0c1024] p-10 md:p-12 rounded-lg border border-white/10 text-white">
          <BarChart3 className="w-10 h-10 text-[#a56eff] mb-6" />
          <h3 className="text-[24px] font-bold text-white mb-4">Centralised Visibility & Control</h3>
          <p className="text-white/70 text-[15px] leading-relaxed mb-6">
            Every enrolled device is visible. Every event is logged. Every incident is tracked from detection to resolution.
          </p>
          <ul className="space-y-3">
            {[
              'Real-time health status across all endpoints.',
              'Alerting on suspicious or anomalous activity.',
              'Full incident timeline with resolution evidence.',
            ].map((point, i) => (
              <li key={i} className="flex items-center gap-3 text-white/90 font-medium text-[14px]">
                <div className="w-1.5 h-1.5 bg-[#a56eff] rounded-full shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   8. BUSINESS IMPACT
   ───────────────────────────────────────────────────────── */
const SectionBusinessImpact = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className={C}>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <FadeIn>
          <span className="c9-eyebrow mb-4">Operational Outcome</span>
          <h2 className="c9-section-heading">Business Impact</h2>
          <p className="c9-body text-slate-600 mt-4">
            Effective endpoint protection reduces risk, supports continuity, and protects the assets your business depends on.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-4 gap-6 text-center">
        {[
          { title: 'Reduced Risk', desc: 'Threats are stopped before they reach critical systems.' },
          { title: 'Operational Stability', desc: 'Incidents are contained fast. Disruption is minimised.' },
          { title: 'Data Protection', desc: 'Sensitive data remains secure and within your control.' },
          { title: 'Business Continuity', desc: 'Recovery is structured. Downtime is measured in minutes.' },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="p-8 bg-slate-50 rounded-lg h-full border border-slate-100">
              <h4 className="text-[17px] font-bold mb-3 text-slate-900">{item.title}</h4>
              <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   9. WHY THIS MATTERS
   ───────────────────────────────────────────────────────── */
const SectionWhyItMatters = () => (
  <section className="py-16 lg:py-24 bg-[#0c1024] text-white">
    <div className={C}>
      <div className="max-w-3xl">
        <FadeIn direction="left">
          <h2 className="c9-section-heading !text-white mb-6">
            Endpoint Exposure Is the Most Common Entry Point
          </h2>
          <p className="text-white/80 text-[18px] leading-relaxed mb-8">
            Most attacks begin at the device level. Passive protection is not sufficient. Detection without response is not sufficient. The only effective model is continuous monitoring with immediate, structured response.
          </p>
          <div className="space-y-4">
            {[
              'Most breaches originate from endpoint compromise.',
              'Dwell time without detection is measured in weeks.',
              'Speed of containment determines the scope of damage.',
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-[#a56eff]" size={20} />
                <span className="text-white font-medium">{point}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function EdrPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionRisk />
      <SectionExposure />
      <SectionHowWeOperate />
      <SectionResponseModel />
      <SectionIntegrationAndVisibility />
      <SectionBusinessImpact />
      <SectionWhyItMatters />

      <WpDefenseBanner
        title={<>Security Starts <span className="text-[#a56eff]">At the Device.</span></>}
        description="Endpoint protection is one layer. Pair it with network security and identity management for complete coverage."
        buttonText="View Security Solutions"
        href="/managed-it/security-solutions"
      />

      <ContinueJourney 
        title="Device Security is the First Line."
        description="Protecting the endpoint is critical. See how we secure the rest of your environment, from network to cloud."
        links={[
          { label: 'Helpdesk Support', path: '/managed-it/helpdesk-support' },
          { label: 'Network Solutions', path: '/managed-it/network-solutions' },
          { label: 'IT Outsourcing', path: '/managed-it/outsourcing' },
          { label: 'Strategy & Consulting', path: '/managed-it/strategy-consulting' }
        ]}
      />

      <section id="consultation" className="bg-white border-t border-slate-100">
        <WpConsultationForm
          showHeader={false}
          eyebrow="TAKE CONTROL"
          title="Strengthen Endpoint Protection Before an Incident Occurs"
          description="Talk to a Security Specialist to review your current endpoint coverage."
          formTitle="Request Security Assessment"
        />
      </section>
    </main>
  );
}
