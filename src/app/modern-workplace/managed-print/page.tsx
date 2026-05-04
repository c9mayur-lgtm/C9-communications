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
import { 
  Printer, 
  ShieldCheck, 
  BarChart3, 
  RefreshCw, 
  FileLock2, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Target,
  Users as UsersIcon,
  Shield
} from 'lucide-react';

const sectionClassName = 'py-16 md:py-24 relative overflow-hidden';
const containerClassName = 'c9-container relative z-10';
const cardClassName = 'group rounded-[32px] border border-gray-100 bg-white p-8 hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-[#5D00D6]/5 transition-all duration-500 overflow-hidden relative';

const METRICS = [
  { label: 'Incident Response', value: '< 15m', desc: 'Critical security alerts triage.' },
  { label: 'Fleet Visibility', value: '100%', desc: 'Real-time print compliance.' },
  { label: 'Toner Fulfillment', value: 'Auto', desc: 'SLA-backed consumables supply.' },
  { label: 'Support Origin', value: 'AU', desc: '100% Australian-based desk.' },
];

const FAQS = [
  { q: 'How does the "cost-per-page" billing work?', a: 'You pay a single, transparent rate for every page printed. This includes the hardware, all toner, and all maintenance—eliminating unpredictable office expenses.' },
  { q: 'Can we keep our existing printer fleet?', a: 'Yes. Our "Brownfield Protocol" allows us to takeover and manage your existing equipment, standardising support and security while we plan a phased upgrade to a more efficient fleet.' },
  { q: 'How do you secure documents in a shared office?', a: 'We implement Secure Print Release. Documents are encrypted in the queue and only print when the user authenticated at the device via card, PIN, or mobile app.' },
  { q: 'What happens when a printer runs out of toner?', a: 'Our systems monitor your fleet 24/7. When toner hits 15%, we automatically ship a replacement directly to the machine\'s location, arriving before you run out.' },
  { q: 'Do you support both Mac and Windows users?', a: 'Absolutely. We provide unified print drivers and cloud-print solutions that work seamlessly across Windows, macOS, and mobile operating systems.' },
  { q: 'Is there a minimum number of devices required?', a: 'We manage environments ranging from single-site startups with one device to multi-state enterprises with hundreds of machines. Our service scales with your business.' }
];

const solutions = [
  {
    title: 'Fleet Standardisation',
    description: 'Consolidate fragmented printer brands into a single, managed fleet with unified drivers and support.',
    icon: Printer,
  },
  {
    title: 'Secure Print Release',
    description: 'Documents only print when the user is physically present, eliminating abandoned sensitive data.',
    icon: FileLock2,
  },
  {
    title: 'Cost Governance',
    description: 'Real-time visibility into print volumes, waste reduction, and departmental cost allocation.',
    icon: BarChart3,
  }
];

export default function ManagedPrintPage() {
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
                  Managed Print. <br />
                  <span className="text-[#5D00D6]">Fleet Accountability.</span>
                </h1>
                <p className="c9-body text-slate-600 mb-10 text-xl max-w-2xl leading-relaxed">
                  Stop managing printers and start managing your infrastructure. C9 provides a fully governed, carrier-grade print utility with automated fulfillment, secure release, and 100% Australian support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="#consultation" className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-[#5D00D6]/20 group">
                    Request Print Audit <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-black/10 text-[#0c1024] rounded-full h-14 px-8 font-bold text-[14px] hover:bg-black/5 transition-all backdrop-blur-sm">
                    View Fleet Options
                  </Link>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">AU Support Active</span>
                  </div>
                  <div className="h-4 w-px bg-black/10" />
                  <div className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">Auto-Toner Active</div>
                </div>
              </FadeUp>
            </div>
            
            <div className="relative">
              <ScaleIn>
                <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] border border-black/5 bg-gray-50">
                  <img 
                    src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&q=80&w=1200" 
                    alt="Managed Print Infrastructure Control"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-10 opacity-60" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60" />
                
                
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

      {/* 2. CORE SOLUTIONS */}
      <section className={sectionClassName}>
        <div className={containerClassName}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((item, i) => (
              <ScaleIn key={item.title} delay={i * 0.1}>
                <div className={cardClassName}>
                  <div className="w-14 h-14 rounded-2xl bg-[#F4F0FA] flex items-center justify-center mb-6 text-[#5D00D6]">
                    <item.icon size={28} />
                  </div>
                  <h3 className="c9-card-title mb-4 font-proxima font-bold tracking-tight">{item.title}</h3>
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
                <span className="text-[#5D00D6]">Print Takeover.</span>
              </h2>
              <p className="text-[17px] text-gray-500 mb-10 leading-relaxed font-medium">
                Transitioning from fragmented, expiring print contracts shouldn&apos;t be a risk. We utilize a structured takeover protocol to audit, secure, and unify your print environment.
              </p>
              <div className="space-y-6">
                {[
                  { t: 'Contract & Usage Audit', d: 'Full map of current lease obligations and actual volume metrics.' },
                  { t: 'Fleet Consolidation', d: 'Standardising hardware to reduce driver complexity and support overhead.' },
                  { t: 'SLA-Backed Consumables', d: 'Automated toner and maintenance fulfillment without manual ticket entry.' }
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
                <span className="text-[#5D00D6]">Day One Printing.</span>
              </h2>
              <p className="text-[17px] text-gray-500 mb-10 leading-relaxed font-medium">
                For new sites, document workflows are mandatory from the first hour. We guarantee fully-operational, secure print infrastructure on your first day of operation.
              </p>
              <div className="bg-[#0C1024] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#5D00D6]/40 transition-all shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#5D00D6]/10 rounded-bl-full" />
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <ShieldAlert size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[17px] text-white">Guaranteed Fleet Uptime</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Target size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[17px] text-white">Security Profiles Calibrated</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <UsersIcon size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[17px] text-white">Total Staff Readiness</span>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-white/5">
                  <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest">Print Protocol 5.1 • Managed Physical Ops</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 4. FLEET VISUAL */}
      <section className="bg-white py-12">
        <div className={containerClassName}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScaleIn>
              <div className="rounded-[40px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] border border-gray-100">
                <img 
                  src="/modern_workplace_managed_print_solution_1777367941424.png" 
                  alt="Managed Print Fleet" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScaleIn>
            <FadeUp>
              <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight text-[#0C1024]">
                Visibility Into <br /><span className="text-[#5D00D6]">Every Page Printed.</span>
              </h2>
              <p className="text-[18px] text-gray-500 mb-8 leading-relaxed font-medium">
                C9 Managed Print removes the mystery from your printing costs. We provide a real-time dashboard that tracks usage by department, user, and device—allowing you to implement smart waste-reduction policies that actually work.
              </p>
              <div className="space-y-4">
                {[
                  'Unified Billing (One Cost per Page)',
                  'Automated Maintenance Ticketing',
                  'Proactive Toner Fulfillment',
                  'Departmental Cost Allocation Reports'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#5D00D6] shrink-0" size={18} />
                    <span className="font-bold text-[#0C1024] text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 5. COST GOVERNANCE MATRIX */}
      <section className={sectionClassName}>
        <div className={containerClassName}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">Managed Print Matrix</h2>
            <p className="text-gray-500 text-[17px] font-medium leading-relaxed">
              Eliminating the administrative overhead and unpredictable costs of traditional printing.
            </p>
          </div>
          
          <div className="overflow-x-auto rounded-[32px] border border-gray-100 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-8 text-[12px] font-bold uppercase tracking-widest text-gray-400">Operational Layer</th>
                  <th className="p-8 text-[12px] font-bold uppercase tracking-widest text-gray-400">Managed Outcome</th>
                  <th className="p-8 text-[12px] font-bold uppercase tracking-widest text-gray-400">C9 Accountability</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { l: 'Consumables', o: 'Auto-shipped before you run out.', c: 'Toner Uptime Guarantee' },
                  { l: 'Support', o: 'One ticket for IT and Hardware.', c: 'Onshore Support Ownership' },
                  { l: 'Security', o: 'Zero documents left in trays.', c: 'Secure Print Enforcement' },
                  { l: 'Licensing', o: 'Drivers updated automatically.', c: 'Intune Policy Management' },
                  { l: 'Costing', o: 'Fixed, predictable monthly spend.', c: 'Zero Hidden Fees' }
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-50 hover:bg-[#F8FAFF] transition-colors">
                    <td className="p-8 font-bold text-[#0C1024]">{row.l}</td>
                    <td className="p-8 text-gray-500 font-medium">{row.o}</td>
                    <td className="p-8">
                      <span className="inline-flex items-center gap-2 text-[#5D00D6] font-bold">
                        <CheckCircle2 size={12} /> {row.c}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. WHY C9 MANAGED PRINT */}
      <section className={`${sectionClassName} bg-[#F8FAFF]`}>
        <div className={containerClassName}>
          <div className="rounded-[40px] bg-[#0C1024] p-12 md:p-20 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.05]" style={{ background: 'radial-gradient(circle, #5D00D6 0%, transparent 70%)' }} />
            
            <div className="max-w-3xl relative z-10">
              <h2 className="c9-section-heading mb-8 font-proxima tracking-tight font-bold leading-tight text-white">Print is a critical utility. <br /><span className="text-[#5D00D6]">Manage it like one.</span></h2>
              <p className="text-[18px] text-slate-300 mb-12 leading-relaxed font-medium">
                We remove the administrative burden of print. By folding your print fleet into our broader Managed IT ecosystem, we eliminate vendor finger-pointing and ensure your drivers, security, and costs are unified.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {[
                  { t: 'Security Aligned', d: 'Print security integrated with your M365 identity governance.' },
                  { t: 'Cost Recovery', d: 'Detailed auditing to identify and eliminate wasteful volume.' },
                  { t: 'One Support Point', d: 'Printers are IT. We support them through our primary onshore desk.' },
                  { t: 'Vendor Agnostic', d: 'We recommend the best hardware for your specific layout.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-[#5D00D6] shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.t}</h4>
                      <p className="text-slate-400 text-[14px]">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link 
                href="#consultation" 
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#5D00D6] px-10 text-[16px] font-bold text-white transition-all hover:bg-[#4B00AD] hover:-translate-y-1 hover:shadow-xl"
              >
                Start Your Print Audit <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="c9-container">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <Eyebrow>Operational Readiness</Eyebrow>
            <h2 className="c9-section-heading">Print Management FAQ.</h2>
          </div>
          <div className="w-full">
            <FAQSection items={FAQS} />
          </div>
        </div>
      </section>

      {/* 7. CROSS-PAGE NAVIGATION */}
      <FullStackSection 
        title="Print Is One Piece. See the Full Stack."
        description="Managed print is just the beginning. Explore the connected workplace services that complete your operational infrastructure."
        services={[
          { title: 'Endpoint Management', href: '/modern-workplace/endpoint-management' },
          { title: 'Compliance & Data Protection', href: '/modern-workplace/compliance-data-protection' },
          { title: 'Visitor Solution', href: '/modern-workplace/visitor-solution' },
          { title: 'Managed Microsoft 365', href: '/modern-workplace/productivity' },
        ]}
      />

      {/* 8. FINAL CONSULTATION FORM */}
      <section id="consultation">
        <WpConsultationForm 
          showHeader={false}
          eyebrow="Managed Print Audit"
          title="Eliminate Print Waste & Security Risks"
          description="Book a 30-minute review with an Australian print engineering lead. We'll audit your current fleet, identifying cost leaks and document security vulnerabilities."
          formTitle="Request Print Audit"
        />
      </section>

    </div>
  );
}
