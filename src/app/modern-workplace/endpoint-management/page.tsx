'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeUp, ScaleIn, Eyebrow, FAQSection } from '../components';
import { ArrowRight, CheckCircle2, ChevronDown, ClipboardCheck, Laptop, LifeBuoy, PackageCheck, Shield, ShieldAlert, Smartphone, Wrench, Download } from 'lucide-react';
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
      
      {/* 1. HERO SECTION */}
      <section className="pt-8 pb-12 md:pt-10 md:pb-16 relative bg-gradient-to-b from-white via-[#F8FAFF]/50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5D00D6]/[0.02] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className={`${containerClassName} relative z-10`}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
            
            {/* Left */}
            <div className="max-w-[700px] pt-2 md:pt-6">
              <FadeUp>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DCCDF8] bg-white px-3 py-1.5 shadow-sm">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5D00D6]">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  </div>
                  <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#5D00D6] pr-1">Endpoint Management</span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="c9-hero-title mb-6 !leading-[1.15]">
                  Zero-touch deployment. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D00D6] to-[#00875A]">Secure endpoints.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="mb-10 text-[18px] md:text-[21px] leading-relaxed text-[#4C587E]">
                  Managing laptops, tablets, and mobiles shouldn't consume your IT team's time. C9 delivers complete endpoint lifecycle management and security via Microsoft Intune.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="mb-8 flex flex-wrap gap-4">
                  <Link
                    href="#endpoint-solutions"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#5D00D6] px-8 text-[16px] font-bold text-white transition-all hover:bg-[#7116FF] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(93,0,214,0.3)]"
                  >
                    See Endpoint Solutions
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center rounded-full border border-[#DCCDF8] bg-white px-8 text-[16px] font-bold text-[#5D00D6] transition-all hover:border-[#5D00D6] hover:bg-gray-50"
                  >
                    Request a Demo
                  </Link>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-gray-100 bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    100% Australian Support
                  </span>
                  <span className="rounded-full border border-gray-100 bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Microsoft Partner
                  </span>
                </div>
              </FadeUp>
            </div>

            {/* Right: Rich Interactive Visual */}
            <ScaleIn delay={0.4} className="relative hidden lg:block h-[560px] w-full">
              <div className="absolute top-8 right-0 w-[500px] h-[460px] rounded-[32px] bg-[#f0f4fa] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-200 group flex items-center justify-center relative">
                 
                 {/* Internal Tech Grid */}
                 <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 pointer-events-none" />

                 {/* Dashboard UI mock inside */}
                 <div className="w-[85%] h-[85%] bg-white rounded-[20px] shadow-2xl border border-gray-200 overflow-hidden flex flex-col z-10 transition-transform group-hover:scale-105 duration-1000">
                   <div className="h-12 bg-gray-50 border-b border-gray-100 flex items-center px-4 justify-between shrink-0">
                     <div className="text-[12px] font-bold text-[#0c1024]">Intune Device Manager</div>
                     <div className="w-6 h-6 rounded-full bg-[#5D00D6] text-white flex items-center justify-center text-[10px] font-bold">C9</div>
                   </div>
                   <div className="flex-1 p-4 bg-white relative">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="border border-gray-100 rounded-xl p-3 flex flex-col gap-1 items-start bg-green-50/50">
                          <CheckCircle2 size={16} className="text-green-500" />
                          <div className="text-[18px] font-bold text-[#0c1024] mt-1">1,240</div>
                          <div className="text-[10px] font-bold text-gray-400 uppercase">Compliant</div>
                        </div>
                        <div className="border border-gray-100 rounded-xl p-3 flex flex-col gap-1 items-start bg-red-50/50">
                          <ShieldAlert size={16} className="text-red-500" />
                          <div className="text-[18px] font-bold text-[#0c1024] mt-1">3</div>
                          <div className="text-[10px] font-bold text-gray-400 uppercase">Action Needed</div>
                        </div>
                      </div>
                      
                      {/* Enrolling Animation */}
                      <div className="mt-6 border border-[#5D00D6]/20 bg-[#f8fbff] rounded-xl p-3 flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-white border border-[#5D00D6]/20 flex items-center justify-center text-[#5D00D6] relative shrink-0">
                           <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} className="absolute inset-0 rounded-full border-2 border-dashed border-[#5D00D6]/40" />
                           <Laptop size={16} />
                         </div>
                         <div className="min-w-0">
                           <div className="text-[11px] font-bold text-[#0c1024] truncate">Configuring Device...</div>
                           <div className="text-[10px] text-gray-500 truncate">AutoPilot: Standard User</div>
                         </div>
                         <div className="ml-auto text-[11px] font-bold text-[#5D00D6]">68%</div>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mt-2">
                        <motion.div initial={{ width: "0%" }} animate={{ width: "68%" }} transition={{ duration: 10, ease: "easeOut" }} className="h-full bg-[#5D00D6]" />
                      </div>
                   </div>
                 </div>

                 {/* Floating Element */}
                 <motion.div animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-10 -left-6 bg-white rounded-xl shadow-xl border border-gray-100 p-3 flex gap-3 items-center z-30">
                  <div className="w-10 h-10 rounded-full bg-[#f4f0fa] text-[#5D00D6] flex items-center justify-center"><Download size={16} /></div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-400">Zero-Touch</div>
                    <div className="text-[14px] font-bold text-[#0c1024]">Pre-configured</div>
                  </div>
                 </motion.div>
              </div>
            </ScaleIn>

          </div>
        </div>
      </section>

      <section className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <FadeUp className="mb-12 max-w-[720px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-black leading-tight">Why DIY device management breaks at scale</h2>
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
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-black leading-tight">C9 endpoint management scope</h2>
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
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-black leading-tight">Device lifecycle timeline</h2>
            <p className="text-[18px] text-gray-500 font-medium">A clear operational sequence from order to retirement with automation at every stage.</p>
          </FadeUp>

          <FadeUp delay={0.2} className="hidden rounded-[24px] border border-gray-100 bg-gray-50/50 p-8 lg:block">
            <div className="grid grid-cols-6 gap-4">
              {timelineEvents.map((event, idx) => (
                <div key={event.label} className="relative group/timeline transition-all hover:-translate-y-1">
                  {idx < timelineEvents.length - 1 && <div className="absolute left-[calc(100%-6px)] top-4 h-[2px] w-[calc(100%+8px)] bg-gray-200" />}
                  <div className="mb-3 h-3 w-3 rounded-full bg-[#5D00D6] group-hover/timeline:scale-150 transition-transform duration-300" />
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5D00D6]">{event.label}</p>
                  <h3 className="mb-1 text-[16px] font-bold">{event.title}</h3>
                  <p className="text-[14px] leading-relaxed text-gray-500">{event.detail}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          <div className="space-y-4 lg:hidden">
            {timelineEvents.map((event, idx) => (
              <article key={event.label} className="relative rounded-3xl border border-[#E9E2F7] bg-white p-6 shadow-sm">
                {idx < timelineEvents.length - 1 && <div className="absolute bottom-[-16px] left-8 h-4 w-[2px] bg-[#DCCDF8]" />}
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5D00D6]">{event.label}</p>
                <h3 className="mb-2 text-[20px] font-bold">{event.title}</h3>
                <p className="text-[14px] leading-relaxed text-[#4C587E]">{event.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionClassName}>
        <div className={containerClassName}>
          <FadeUp className="mb-12 max-w-[760px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-black leading-tight">Device management plans</h2>
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
            <h2 className="c9-section-heading mb-4 !text-white font-proxima tracking-tight font-black leading-tight">Endpoint management + C9 Defense = complete security</h2>
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
            <h2 className="c9-section-heading mb-3 !text-[30px] font-proxima tracking-tight font-black leading-tight">Sarah Jenkins, CTO - 4 locations, 80 staff</h2>
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

      <section className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <h2 className="c9-section-heading mb-4 mx-auto font-proxima tracking-tight font-black leading-tight">Frequently asked questions</h2>
            <p className="mx-auto text-[17px] text-[#4C587E]">Clear answers for procurement, support, and remote workforce requirements.</p>
          </div>
          <div className="mx-auto max-w-[900px]">
            <FAQSection items={faqs.map(faq => ({ q: faq.question, a: faq.answer }))} />
          </div>
        </div>
      </section>

      <section className={`${sectionClassName} bg-[#0C1024]`}>
        <div className={containerClassName}>
          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 md:p-12">
            <h2 className="c9-section-heading mb-4 max-w-[960px] !text-white font-proxima tracking-tight font-black leading-tight">
              Stop manually configuring devices. Automate with Australian-managed Intune.
            </h2>
            <p className="mb-8 max-w-[860px] text-[17px] leading-relaxed text-white/75">
              Move from reactive endpoint setup to a repeatable lifecycle model with local support and measurable time savings.
            </p>
            <div className="mb-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#5D00D6] px-7 text-[14px] font-bold text-white transition hover:bg-[#7116FF]"
              >
                Request Audit
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-[14px] font-bold text-white transition hover:border-white"
              >
                See Demo
              </Link>
              <a
                href="tel:1800000299"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-[14px] font-bold text-white transition hover:border-white"
              >
                Call 1800 000 299
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/20 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-white/85">
                100% Australian support
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-white/85">
                Microsoft Partner
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
