'use client';

import { useState } from 'react';
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
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ClipboardCheck, 
  Laptop, 
  LifeBuoy, 
  PackageCheck, 
  Shield, 
  ShieldAlert, 
  Smartphone, 
  Wrench, 
  Download, 
  Users as UsersIcon, 
  Target,
  Monitor,
  Check
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Problem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ScopeItem = {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

type TimelineEvent = {
  label: string;
  title: string;
  detail: string;
};

type Plan = {
  name: string;
  price: string;
  subtitle: string;
  popular?: boolean;
  features: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

const METRICS = [
  { label: 'Onboarding Time', value: '< 15m', desc: 'Zero-touch user self-setup.' },
  { label: 'Security Score', value: '96/100', desc: 'Average managed fleet health.' },
  { label: 'Patch Compliance', value: '100%', desc: 'Automated policy enforcement.' },
  { label: 'Support SLA', value: 'Instant', desc: '24/7 Australian operational help.' },
];

const FAQS = [
  { q: 'What is zero-touch deployment?', a: 'We use Windows Autopilot and Apple Business Manager. Devices are shipped from the factory direct to your staff. Once they login with their C9 credentials, the device automatically configures itself with all required apps and security policies.' },
  { q: 'Can we manage Macs and iPhones too?', a: 'Yes. We provide unified management via Microsoft Intune for Windows, macOS, iOS, and Android—ensuring a consistent security posture across your entire mobile fleet.' },
  { q: 'What happens if a device is lost or stolen?', a: 'We can trigger an immediate remote wipe or lock from our central dashboard. If the device is found, we can restore it; if not, the data remains encrypted and inaccessible.' },
  { q: 'Do you handle the hardware procurement?', a: 'Yes. We manage the entire lifecycle—from selecting the right hardware profiles for your staff to procurement, deployment, and eventual secure decommissioning.' },
  { q: 'How do you handle OS updates?', a: 'We manage update rings. We test updates on a small group of devices first to ensure compatibility before rolling them out across your entire organization, preventing widespread disruption.' }
];

const problems: Problem[] = [
  {
    title: 'Time-consuming onboarding',
    description: 'Manual setup often takes up to 6 hours per device, draining internal IT resources.',
    icon: Wrench,
  },
  {
    title: 'Inconsistent configuration',
    description: 'Different device builds across the fleet create user friction and support overhead.',
    icon: ClipboardCheck,
  },
  {
    title: 'Security gaps',
    description: 'No remote wipe and no compliance visibility leaves endpoints exposed to avoidable risk.',
    icon: ShieldAlert,
  },
];

const scopeItems: ScopeItem[] = [
  {
    title: 'Device Procurement and Lifecycle Planning',
    description: 'We align device standards to role profiles, budget, and refresh timelines.',
    bullets: ['Standard device catalogue', 'Fleet forecasting', 'Budget-aware refresh planning'],
    icon: PackageCheck,
  },
  {
    title: 'Zero-Touch Deployment (Windows Autopilot)',
    description: 'Devices are pre-registered and shipped direct to users for guided self-setup.',
    bullets: ['Autopilot enrollment', 'User-based provisioning', 'Direct-to-door delivery'],
    icon: Laptop,
  },
  {
    title: 'Application Deployment and Management',
    description: 'Apps are deployed by policy and updated automatically without manual reimaging.',
    bullets: ['Role-based app sets', 'Silent installs', 'Version control and rollback'],
    icon: Smartphone,
  },
  {
    title: 'Patch Management and Compliance',
    description: 'Automated patch rings and compliance baselines keep the fleet healthy and audit-ready.',
    bullets: ['Automated patch cycles', 'Compliance policy enforcement', 'Exception reporting'],
    icon: CheckCircle2,
  },
  {
    title: 'Security and Threat Protection (Defender)',
    description: 'Intune policies pair with Microsoft Defender for endpoint hardening and threat response.',
    bullets: ['Endpoint protection baselines', 'Threat detection workflows', 'Isolation and response playbooks'],
    icon: Shield,
  },
  {
    title: 'Device Monitoring and Support',
    description: 'Ongoing monitoring and Australian support ensure reliability across office and remote users.',
    bullets: ['Health monitoring', 'Performance troubleshooting', 'User support and escalation'],
    icon: LifeBuoy,
  },
];

const timelineEvents: TimelineEvent[] = [
  {
    label: 'Day 0',
    title: 'Procurement',
    detail: 'C9 orders devices and pre-registers each asset in Autopilot before dispatch.',
  },
  {
    label: 'Day 3',
    title: 'Delivery to user',
    detail: 'Device ships directly to the user, branch office, or home address.',
  },
  {
    label: 'Day 3 (30 mins)',
    title: 'Auto-configuration',
    detail: 'User signs in with work email and policy-driven setup completes automatically.',
  },
  {
    label: 'Month 1-36',
    title: 'Managed lifecycle',
    detail: 'Automated patching, compliance checks, and endpoint monitoring run continuously.',
  },
  {
    label: 'Month 36',
    title: 'Refresh cycle',
    detail: 'Replacement device is staged and deployed with minimal user disruption.',
  },
  {
    label: 'Retirement',
    title: 'Secure wipe and recycling',
    detail: 'Retired assets are securely wiped, decommissioned, and recycled to policy.',
  },
];

const plans: Plan[] = [
  {
    name: 'Device Monitoring',
    price: '$8/device/month',
    subtitle: 'Visibility and baseline support for existing fleets.',
    features: ['Health and compliance monitoring', 'Monthly reporting', 'Australian support desk'],
  },
  {
    name: 'Full Management',
    price: '$18/device/month',
    subtitle: 'Popular: complete Intune lifecycle management.',
    popular: true,
    features: ['Everything in Monitoring', 'Autopilot onboarding', 'Patch and app management', 'Remote support and remediation'],
  },
  {
    name: 'Device-as-a-Service (DaaS)',
    price: 'From $65/device/month',
    subtitle: 'Includes hardware, lifecycle, and management.',
    features: ['Hardware included', 'Lifecycle refresh program', 'Full Intune + support coverage'],
  },
];

const faqs: FaqItem[] = [
  {
    question: 'What devices can you manage?',
    answer: 'We manage Windows laptops, desktops, mobile devices, and selected macOS/iOS/Android endpoints through Intune-compatible workflows.',
  },
  {
    question: 'Do we buy hardware through C9?',
    answer: 'You can. We provide procurement services, pre-registration, and delivery-ready staging to simplify deployment.',
  },
  {
    question: 'What if a device breaks?',
    answer: 'C9 coordinates troubleshooting, warranty workflow, and replacement provisioning to keep users productive.',
  },
  {
    question: 'Can users work remotely?',
    answer: 'Yes. Policies, apps, and security controls are applied over the internet, enabling secure work from any location.',
  },
  {
    question: 'What about BYOD?',
    answer: 'We support controlled BYOD using conditional access, app protection policies, and data separation controls.',
  },
];

const sectionClassName = 'py-12 md:py-16';
const containerClassName = 'mx-auto w-full max-w-[1240px] px-6';
const cardClassName = 'group rounded-[24px] border border-gray-100 bg-white p-6 md:p-8 hover:border-[#5D00D6]/20 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all duration-500 overflow-hidden relative';

export default function EndpointManagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#F8FAFF] min-h-screen pt-4 text-[#0C1024] overflow-x-hidden" style={{ fontFamily: '"Proxima Nova","Inter",system-ui,sans-serif' }}>
      
      {/* 1. HERO SECTION (Standardized 2-Column) */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F9FBFF] -z-10 hidden lg:block" />
        <div className="c9-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <FadeUp>
                <Eyebrow>Operational Infrastructure Governance</Eyebrow>
                <h1 className="c9-hero-title mb-8 !leading-[1.1] font-bold">
                  Endpoint Authority. <br />
                  <span className="text-[#5D00D6]">Fleet Control.</span>
                </h1>
                <p className="c9-body text-slate-600 mb-10 text-xl max-w-2xl leading-relaxed">
                  Managing a mobile fleet shouldn&apos;t be a manual task. C9 delivers carrier-grade endpoint governance via Microsoft Intune—enabling zero-touch deployment, absolute security, and 100% visibility for your entire device estate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="#consultation" className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-[#5D00D6]/20 group">
                    Request Fleet Audit <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-black/10 text-[#0c1024] rounded-full h-14 px-8 font-bold text-[14px] hover:bg-black/5 transition-all backdrop-blur-sm">
                    View Managed Hardware
                  </Link>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">AU Engineering Active</span>
                  </div>
                  <div className="h-4 w-px bg-black/10" />
                  <div className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">Intune Managed</div>
                </div>
              </FadeUp>
            </div>
            
            <div className="relative">
              <ScaleIn className="relative hidden lg:block">
                <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] border border-black/5 bg-gray-50 group">
                  <img 
                    src="/endpoint_management_hero_v2.png" 
                    alt="Endpoint Management Operations Center"
                    className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-1000"
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
                        <Laptop size={24} />
                      </div>
                      <div>
                        <div className="text-[14px] font-bold text-slate-900">Fleet Security Score</div>
                        <div className="text-[10px] text-[#5D00D6] font-bold uppercase tracking-widest">Baseline Verified: 96%</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Zero Trust Compliant</span>
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

      <section className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <FadeUp className="mb-12 max-w-[720px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">Why DIY device management breaks at scale</h2>
            <p className="text-[18px] text-gray-500 font-medium">Manual workflows create wasted effort, support inconsistency, and avoidable security exposure.</p>
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {problems.map((problem, idx) => {
              const Icon = problem.icon;
              return (
                <ScaleIn key={problem.title} delay={idx * 0.1}>
                  <article className={cardClassName}>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4F0FA] text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors duration-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="c9-card-title mb-3 group-hover:text-[#5D00D6] transition-colors">{problem.title}</h3>
                    <p className="text-[14px] leading-relaxed text-gray-500">{problem.description}</p>
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </article>
                </ScaleIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="endpoint-solutions" className={sectionClassName}>
        <div className={containerClassName}>
          <FadeUp className="mb-10 max-w-[760px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">C9 endpoint management scope</h2>
            <p className="text-[18px] text-gray-500 font-medium">From procurement through support, each capability is structured for automation and measurable outcomes.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScaleIn key={item.title} delay={idx * 0.1}>
                  <article className={`${cardClassName} flex flex-col h-full bg-white`}>
                    <div className="mb-5 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F4F0FA] text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors duration-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="c9-card-title mb-3 group-hover:text-[#5D00D6] transition-colors">{item.title}</h3>
                    <p className="mb-6 text-[14px] leading-relaxed text-gray-500 flex-grow">{item.description}</p>
                    
                    <ul className="space-y-3 border-t border-gray-100 pt-5 mt-auto">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="text-[14px] font-medium text-gray-600 flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-[#BFA2EE] mt-0.5 shrink-0" /> 
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </article>
                </ScaleIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <FadeUp className="mb-10 max-w-[760px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">Device lifecycle timeline</h2>
            <p className="text-[18px] text-gray-500 font-medium">A clear operational sequence from order to retirement with automation at every stage.</p>
          </FadeUp>

          <div className="relative mt-12 max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[39px] top-4 bottom-4 w-[2px] bg-gray-100 hidden md:block" />
            
            <div className="space-y-6">
              {timelineEvents.map((event, idx) => (
                <ScaleIn key={event.label} delay={idx * 0.1} className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                  {/* Timeline Node */}
                  <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full border-4 border-white bg-[#F4F0FA] text-[#5D00D6] shadow-sm z-10 transition-colors duration-500 group-hover:bg-[#5D00D6] group-hover:text-white hidden md:flex">
                    <span className="font-bold text-xl">{`0${idx + 1}`}</span>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-grow bg-white border border-gray-100 rounded-[24px] p-6 md:p-8 hover:shadow-[0_20px_40px_-15px_rgba(93,0,214,0.1)] hover:border-[#5D00D6]/20 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#5D00D6]/5 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="md:hidden w-12 h-12 rounded-full bg-[#F4F0FA] text-[#5D00D6] flex items-center justify-center font-bold mb-4">
                      {`0${idx + 1}`}
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        {event.title}
                      </h3>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#5D00D6]/5 text-[#5D00D6] text-[11px] font-bold uppercase tracking-[0.14em] border border-[#5D00D6]/10">
                        {event.label}
                      </span>
                    </div>
                    <p className="text-slate-600 text-[15px] leading-relaxed">
                      {event.detail}
                    </p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={sectionClassName}>
        <div className={containerClassName}>
          <FadeUp className="mb-12 max-w-[760px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">Device management plans</h2>
            <p className="text-[18px] text-gray-500 font-medium">Choose the support depth that matches your fleet maturity and procurement model.</p>
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((plan, idx) => (
              <ScaleIn key={plan.name} delay={idx * 0.1}>
                <article
                  className={`relative overflow-hidden rounded-[24px] border p-6 shadow-sm md:p-8 hover:-translate-y-1 transition-all duration-500 ${plan.popular ? 'border-[#5D00D6] bg-[#5D00D6] text-white shadow-xl shadow-[#5D00D6]/10' : 'border-gray-100 bg-white text-[#0C1024] hover:shadow-xl hover:border-[#5D00D6]/20'}`}
                >
                  {plan.popular && <p className="mb-3 inline-flex rounded-full border border-white/30 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em]">Popular</p>}
                  <h3 className="c9-card-title mb-2 !text-[24px]">{plan.name}</h3>
                  <p className={`mb-3 text-[28px] font-bold ${plan.popular ? 'text-white' : 'text-[#5D00D6]'}`}>{plan.price}</p>
                  <p className={`mb-5 text-[14px] leading-relaxed ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>{plan.subtitle}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className={`text-[14px] flex items-start gap-2 ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
                        <CheckCircle2 className={`h-4 w-4 mt-0.5 ${plan.popular ? 'text-white/50' : 'text-[#BFA2EE]'}`} /> {feature}
                      </li>
                    ))}
                  </ul>
                  {!plan.popular && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />}
                </article>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <article className="rounded-3xl border border-[#DCCDF8] bg-[#0C1024] p-8 text-white md:p-10">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-[#C7B1F0]">Security integration</p>
            <h2 className="c9-section-heading mb-4 !text-white font-proxima tracking-tight font-bold leading-tight">Endpoint management + C9 Defense = complete security</h2>
            <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              {['Automated patching', 'Endpoint detection and response', '24/7 SOC monitoring', 'Essential 8 compliance'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[14px] text-white/85">
                  <CheckCircle2 className="h-4 w-4 text-[#BFA2EE]" />
                  {item}
                </div>
              ))}
            </div>
            <Link href="/cybersecurity" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-[14px] font-bold text-white transition hover:border-white">
              Explore C9 Defense <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>

      <section className={sectionClassName}>
        <div className={containerClassName}>
          <article className={cardClassName}>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-[#5D00D6]">Case study</p>
            <h2 className="c9-section-heading mb-3 !text-[30px] font-proxima tracking-tight font-bold leading-tight">Sarah Jenkins, CTO - 4 locations, 80 staff</h2>
            <p className="mb-4 text-[16px] leading-relaxed text-[#4C587E]">C9 standardized endpoint provisioning with Intune automation across offices and remote users.</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[#E9E2F7] bg-[#FBFAFE] p-4">
                <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#5D00D6]">Setup time</p>
                <p className="text-[14px] text-[#2E3855]">6 hours per device &rarr; 30 minutes per device</p>
              </div>
              <div className="rounded-2xl border border-[#E9E2F7] bg-[#FBFAFE] p-4">
                <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#5D00D6]">Annual impact</p>
                <p className="text-[14px] text-[#2E3855]">300+ IT hours saved annually through automated lifecycle workflows</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 8. PROTOCOLS (CEO PERSONA ALIGNMENT) */}
      <section className={`${sectionClassName} bg-[#0C1024]`}>
        <div className={containerClassName}>
          <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20 text-left">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-[#5D00D6]/10 px-4 py-2 rounded-full mb-6">
                <span className="text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest">The Brownfield Protocol</span>
              </div>
              <h2 className="text-[32px] md:text-[38px] font-bold leading-[1.1] mb-8 font-proxima tracking-tight text-white">
                The C9 Managed <br />
                <span className="text-[#5D00D6]">Endpoint Takeover.</span>
              </h2>
              <p className="text-[17px] text-slate-300 mb-10 leading-relaxed font-medium">
                Transitioning unmanaged fleets shouldn&apos;t be a risk. We utilize a structured takeover protocol to audit, secure, and enroll your devices into one unified Intune environment.
              </p>
              <div className="space-y-6">
                {[
                  { t: 'Fleet Audit & Enrollment', d: 'Full map of existing assets and current compliance state.' },
                  { t: 'Intune Unification', d: 'Bridging disparate builds into a single security and app baseline.' },
                  { t: 'SLA-Backed Support', d: 'Transitioning endpoint monitoring to C9&apos;s 24/7 Australian operations.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#5D00D6]/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-[16px] mb-1">{item.t}</h4>
                      <p className="text-slate-400 text-[14px] leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-[#5D00D6]/10 px-4 py-2 rounded-full mb-6">
                <span className="text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest">The Greenfield Guarantee</span>
              </div>
              <h2 className="text-[32px] md:text-[38px] font-bold leading-[1.1] mb-8 font-proxima tracking-tight text-white">
                Operational <br />
                <span className="text-[#5D00D6]">Day One Device Readiness.</span>
              </h2>
              <p className="text-[17px] text-slate-300 mb-10 leading-relaxed font-medium">
                For new sites, staff readiness is mandatory from the first hour. We guarantee fully-configured, secure devices on your first day of operation.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#5D00D6]/40 transition-all shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#5D00D6]/10 rounded-bl-full" />
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <ShieldAlert size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[17px] text-white">Guaranteed Asset Security</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Target size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[17px] text-white">Autopilot Policy Calibrated</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <UsersIcon size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[17px] text-white">Full User Readiness</span>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-white/5">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Lifecycle Protocol 6.4 • Managed Endpoint Ops</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="c9-container">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <Eyebrow>Operational Readiness</Eyebrow>
            <h2 className="c9-section-heading">Endpoint Management FAQ.</h2>
          </div>
          <div className="w-full">
            <FAQSection items={FAQS} />
          </div>
        </div>
      </section>

      {/* 10. CROSS-PAGE NAVIGATION */}
      <FullStackSection 
        title="Fleet Control Is One Piece. See the Full Stack."
        description="Unified endpoint management requires robust identity and security governance. Explore the connected services that complete your operational infrastructure."
        services={[
          { title: 'Managed Microsoft 365', href: '/modern-workplace/productivity' },
          { title: 'Secure Remote Work', href: '/modern-workplace/secure-remote-work' },
          { title: 'Compliance & Data Protection', href: '/modern-workplace/compliance-data-protection' },
          { title: 'Managed Print Solution', href: '/modern-workplace/managed-print' },
        ]}
      />

      {/* 11. FINAL CONSULTATION FORM */}
      <section id="consultation">
        <WpConsultationForm 
          showHeader={false}
          eyebrow="Fleet Audit"
          title="Eliminate Manual Provisioning & Security Risks"
          description="Book a 30-minute review with an Australian Intune engineering lead. We'll audit your current device lifecycle and design a zero-touch deployment architecture that works for your entire fleet."
          formTitle="Request Fleet Audit"
        />
      </section>
    </div>
  );
}
