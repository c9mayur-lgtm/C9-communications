'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FadeUp, 
  ScaleIn, 
  Eyebrow,
  FAQSection,
  FullStackSection
} from '../components';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { ShieldCheck, Lock, FileCheck2, UserCheck, Activity, AlertTriangle, CheckCircle2, ShieldAlert, Target, Users as UsersIcon, Fingerprint, Shield } from 'lucide-react';

const sectionClassName = 'py-16 md:py-24 relative overflow-hidden';
const containerClassName = 'c9-container relative z-10';
const cardClassName = 'group rounded-[32px] border border-gray-100 bg-white p-8 hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-[#5D00D6]/5 transition-all duration-500 overflow-hidden relative';

const METRICS = [
  { label: 'Incident Response', value: '< 15m', desc: 'Critical alert triage SLA.' },
  { label: 'Data Residency', value: '100%', desc: 'Sovereign Australian storage.' },
  { label: 'Security Score', value: '94/100', desc: 'Average managed fleet health.' },
  { label: 'Monitoring', value: '24/7', desc: 'Active AU-managed SOC coverage.' },
];

const FAQS = [
  { q: 'What is the ACSC Essential Eight?', a: 'The Essential Eight is a series of baseline security controls developed by the Australian Cyber Security Centre (ACSC) to help organizations mitigate cyber threats. We implement and manage these controls persistently across your environment.' },
  { q: 'How does Zero Trust differ from traditional security?', a: 'Traditional security assumes everything inside the network is safe. Zero Trust assumes the network is compromised and requires strict identity verification and device health checks for every single access request.' },
  { q: 'Is all our data stored in Australia?', a: 'Yes. We ensure your Microsoft 365 tenancy and all backup data are locked to Australian data centers, satisfying data sovereignty requirements and local regulatory standards.' },
  { q: 'How do you manage personal devices (BYOD) safely?', a: 'We use App Protection Policies (MAM) to create a secure container for corporate data on personal devices. This allows you to secure company data without managing the entire personal device or invading employee privacy.' },
  { q: 'What is the response time for a security incident?', a: 'Our SLA guarantees critical security triage within 15 minutes. Our AU-managed SOC engineers are alerted immediately to any suspicious lateral movement or anomalous login behavior.' },
  { q: 'Can you help us achieve ISO 27001 or SOC2 compliance?', a: 'Yes. While we provide the technical infrastructure and persistent governance required for these certifications, we also work with your auditors to provide the necessary logs and evidence of control enforcement.' }
];

const corePrinciples = [
  {
    title: 'Essential Eight Alignment',
    description: 'We harden your environment against the ACSC Essential Eight framework to mitigate targeted cyber attacks.',
    icon: ShieldCheck,
  },
  {
    title: 'Zero Trust Governance',
    description: 'Eliminate the concept of "trusted networks" and enforce strict identity verification for every resource access.',
    icon: Fingerprint,
  },
  {
    title: 'Data Loss Prevention',
    description: 'Proactive monitoring and policy enforcement to ensure sensitive information never leaves your secure perimeter.',
    icon: Lock,
  }
];

export default function CompliancePage() {
  return (
    <div className="bg-[#F8FAFF] min-h-screen pt-4 text-[#0C1024] overflow-x-hidden" style={{ fontFamily: '"Proxima Nova","Inter",system-ui,sans-serif' }}>
      
      {/* 1. HERO SECTION */}
      {/* 1. HERO SECTION (Standardized 2-Column) */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F9FBFF] -z-10 hidden lg:block" />
        <div className="c9-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <FadeUp>
                <Eyebrow>Operational Infrastructure Governance</Eyebrow>
                <h1 className="c9-hero-title mb-8 !leading-[1.1] font-bold">
                  Sovereign Compliance. <br />
                  <span className="text-[#5D00D6]">Persistent Protection.</span>
                </h1>
                <p className="c9-body text-slate-600 mb-10 text-xl max-w-2xl leading-relaxed">
                  Enterprise security is not a checkbox. C9 implements multi-layered data protection frameworks, Zero Trust identity governance, and Essential Eight alignment to ensure your data stays defended and compliant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="#consultation-section" className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-lg shadow-[#5D00D6]/20 h-14 px-8 text-[15px] font-bold">
                    Request Security Audit 
                  </Link>
                  <Link href="#consultation-section" className="inline-flex items-center justify-center gap-2 border-2 border-black/10 text-[#0c1024] rounded-full hover:bg-black/5 transition-all backdrop-blur-sm h-14 px-8 text-[15px] font-bold">
                    View Governance Framework
                  </Link>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">24/7 SOC Active</span>
                  </div>
                  <div className="h-4 w-px bg-black/10" />
                  <div className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">100% AU-Managed Sovereignty</div>
                </div>
              </FadeUp>
            </div>
            
            <div className="relative">
              <ScaleIn className="relative hidden lg:block">
                <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] border border-black/5 bg-gray-50">
                  <img 
                    src="/compliance_data_protection_hero.png" 
                    alt="Modern Cybersecurity Operations Center"
                    className="w-full h-full object-cover aspect-square group-hover:scale-105 duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/10 to-transparent mix-blend-overlay" />
                </div>
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-10 opacity-60" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60" />
                
                {/* Floating Meta-Info Card (Half-Overlap) */}
                <motion.div 
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-10 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-[32px] border border-slate-100 shadow-[0_20px_50px_rgba(93,0,214,0.15)] z-30"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#5D00D6] text-white flex items-center justify-center shadow-lg shadow-purple-900/20">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <div className="text-[14px] font-bold text-slate-900">Active Security Posture</div>
                        <div className="text-[10px] text-[#5D00D6] font-bold uppercase tracking-widest">Fleet Security Health: 94/100</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Zero Trust Verified</span>
                    </div>
                  </div>
                </motion.div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>
      {/* 1.5 TRUST METRICS STRIP */}
      <section className="bg-white border-y border-gray-100">
        <div className="c9-container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {METRICS.map((m, i) => (
              <FadeUp key={m.label} delay={i * 0.1} className="text-center md:text-left">
                <div className="text-[32px] md:text-[42px] font-bold leading-none tracking-tight mb-3 text-[#5D00D6]">{m.value}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">{m.label}</div>
                <p className="text-[12px] text-gray-400 font-medium mt-1">{m.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CORE PRINCIPLES */}
      <section className={sectionClassName}>
        <div className={containerClassName}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePrinciples.map((item, i) => (
              <ScaleIn key={item.title} delay={i * 0.1}>
                <div className={cardClassName}>
                  <div className="w-14 h-14 rounded-2xl bg-[#F4F0FA] flex items-center justify-center mb-6 text-[#5D00D6]">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-[22px] font-bold mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-[15px] font-medium">{item.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROTOCOLS (CEO PERSONA ALIGNMENT) */}
      <section className={`${sectionClassName} bg-white border-y border-gray-100`}>
        <div className={containerClassName}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-[#5D00D6]/10 px-4 py-2 rounded-full mb-6">
                <span className="text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest">The Brownfield Protocol</span>
              </div>
              <h2 className="c9-section-heading mb-8 font-proxima tracking-tight font-bold leading-[1.1] text-[#0C1024]">
                The C9 Managed <br />
                <span className="text-[#5D00D6]">Security Takeover.</span>
              </h2>
              <p className="text-[17px] text-gray-500 mb-10 leading-relaxed font-medium">
                Transitioning from unmanaged or aging security stacks shouldn&apos;t be a risk. We utilize a structured takeover protocol to audit, harden, and stabilize your data protection environment.
              </p>
              <div className="space-y-6">
                {[
                  { t: 'Vulnerability Assessment', d: 'Deep scan of your existing environment for active security holes.' },
                  { t: 'Compliance Hardening', d: 'Immediate implementation of MFA, Conditional Access, and DLP baselines.' },
                  { t: 'AU-Managed SOC Transition', d: 'Migrating your monitoring to C9&apos;s 24/7 AU-managed Security Operations Centre.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0C1024] text-[16px] mb-1">{item.t}</h4>
                      <p className="text-gray-500 text-[14px] leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="inline-flex items-center gap-2 bg-[#5D00D6]/10 px-4 py-2 rounded-full mb-6">
                <span className="text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest">The Greenfield Guarantee</span>
              </div>
              <h2 className="c9-section-heading mb-8 font-proxima tracking-tight font-bold leading-[1.1] text-[#0C1024]">
                Operational <br />
                <span className="text-[#5D00D6]">Day One Compliance.</span>
              </h2>
              <p className="text-[17px] text-gray-500 mb-10 leading-relaxed font-medium">
                For new sites, security is mandatory from the first hour. We guarantee a fully-compliant, hardened environment on your first day of operation.
              </p>
              <div className="bg-[#0C1024] border border-white/10 rounded-3xl p-8 relative overflow-hidden hover:border-[#5D00D6]/40 transition-all shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#5D00D6]/10 rounded-bl-full" />
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <ShieldAlert size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[17px] text-white">Guaranteed Compliance Uptime</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Target size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[17px] text-white">Baseline Policies Enforced</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <UsersIcon size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[17px] text-white">Full Identity Governance Ready</span>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-white/5">
                  <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest">Compliance Protocol 8.2 • Managed Security Ops</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 4. DASHBOARD VISUAL */}
      <section className="bg-white py-12">
        <div className={containerClassName}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="c9-section-heading mb-8 font-proxima tracking-tight font-bold leading-tight text-[#0C1024]">
                Total Sovereignty. <br /><span className="text-[#5D00D6]">Zero Blind Spots.</span>
              </h2>
              <p className="text-[18px] text-gray-500 mb-8 leading-relaxed font-medium">
                C9 provides a unified governance dashboard where you can monitor your Essential Eight alignment, data residency, and identity health in real-time. We don&apos;t just secure your data; we give you the tools to prove it.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time Essential 8 Scorecard',
                  'Data Residency Verification (AU-Managed)',
                  'Identity Risk & MFA Health Monitoring',
                  'Automated Compliance Drift Alerts'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#5D00D6] shrink-0" size={18} />
                    <span className="font-bold text-[#0C1024] text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <ScaleIn delay={0.2}>
              <div className="rounded-[40px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] border border-gray-100">
                <img 
                  src="/modern_workplace_compliance_dashboard_1777368050122.png" 
                  alt="C9 Compliance Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* 5. COMPLIANCE MATRIX */}
      <section className={sectionClassName}>
        <div className={containerClassName}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">C9 Governance Matrix</h2>
            <p className="text-gray-500 text-[17px] font-medium leading-relaxed">
              Standardised data protection across every layer of your workplace infrastructure.
            </p>
          </div>
          
          <div className="overflow-x-auto rounded-[32px] border border-gray-100 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-8 text-[12px] font-bold uppercase tracking-widest text-gray-400">Control Category</th>
                  <th className="p-8 text-[12px] font-bold uppercase tracking-widest text-gray-400">Standard (C9 Baseline)</th>
                  <th className="p-8 text-[12px] font-bold uppercase tracking-widest text-gray-400">Operational Outcome</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: 'Identity', s: 'MFA + Conditional Access', o: 'Zero unauthorised tenant access.' },
                  { c: 'Endpoint', s: 'Intune + Defender EDR', o: 'Compromised devices auto-quarantined.' },
                  { c: 'Data', s: 'DLP + Sensitivity Labels', o: 'Confidential data cannot leave the tenant.' },
                  { c: 'Sovereignty', s: '100% Australian Tenancy', o: 'No data subject to foreign access laws.' },
                  { c: 'Monitoring', s: '24/7 AU-Managed SOC', o: 'Incident response in < 15 minutes.' }
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-50 hover:bg-[#F8FAFF] transition-colors">
                    <td className="p-8 font-bold text-[#0C1024]">{row.c}</td>
                    <td className="p-8 text-gray-500 font-medium">{row.s}</td>
                    <td className="p-8">
                      <span className="inline-flex items-center gap-2 text-[#00875A] font-bold">
                        <CheckCircle2 size={12} /> {row.o}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL AUTHORITY SECTION */}
      <section className={`${sectionClassName} bg-[#0C1024] text-white`}>
        <div className={containerClassName}>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="c9-section-heading mb-8 font-proxima tracking-tight font-bold leading-tight text-white">Enterprise Data Protection. <br /><span className="text-[#5D00D6]">Uncompromising Accountability.</span></h2>
            <p className="text-slate-300 text-[18px] font-medium leading-relaxed">
              We provide total visibility into your security posture. Our AU-managed team manages the complexity of modern compliance so you can focus on operational outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: 'Identity Protection', d: 'MFA, Conditional Access, and Privileged Identity Management.', icon: UserCheck },
              { t: 'Threat Hunting', d: 'Proactive detection of lateral movement and suspicious activity.', icon: Activity },
              { t: 'Risk Mitigation', d: 'Automated remediation of configuration drift and policy violations.', icon: AlertTriangle },
              { t: 'Audit Readiness', d: 'Persistent logging and reporting for regulatory compliance.', icon: FileCheck2 }
            ].map((item, i) => (
              <ScaleIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/20 flex items-center justify-center mb-6 text-[#5D00D6]">
                    <item.icon size={24} />
                  </div>
                  <h4 className="font-bold text-white mb-3 text-[18px]">{item.t}</h4>
                  <p className="text-slate-400 text-[14px] leading-relaxed">{item.d}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="c9-container">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <Eyebrow>Enterprise Readiness</Eyebrow>
            <h2 className="c9-section-heading mb-8 font-proxima tracking-tight font-bold leading-tight">Security & Compliance FAQ.</h2>
          </div>
          <div className="w-full">
            <FAQSection items={FAQS} />
          </div>
        </div>
      </section>

      {/* 7. CROSS-PAGE NAVIGATION */}
      <FullStackSection 
        title="Compliance Is One Piece. See the Full Stack."
        description="Persistent protection requires managed infrastructure. Explore the connected workplace services that complete your security posture."
        services={[
          { title: 'Endpoint Management', href: '/modern-workplace/endpoint-management' },
          { title: 'Managed Microsoft 365', href: '/modern-workplace/productivity' },
          { title: 'Secure Remote Work', href: '/modern-workplace/secure-remote-work' },
          { title: 'Managed Print Solution', href: '/modern-workplace/managed-print' },
        ]}
      />

      {/* 8. FINAL CONSULTATION FORM */}
      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false}
          eyebrow="Security Posture Audit"
          title="Protect Your Data. Prove Your Compliance."
          description="Book a 30-minute security review with an AU-managed SOC lead. We'll identify architectural gaps in your defense and provide a prioritized hardening roadmap."
          formTitle="Request Security Audit"
        />
      </section>

    </div>
  );
}
