'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FadeUp, 
  ScaleIn, 
  Eyebrow,
  FAQSection,
  FullStackSection
} from '../components';
import { C9Button } from '@/components/design-system/C9Button';
import { handleCtaClick } from '@/lib/utils';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { Scan, ShieldCheck, UserPlus, History, Smartphone, Bell, CheckCircle2, ShieldAlert, Target, Users as UsersIcon, Shield, UserCheck } from 'lucide-react';

const sectionClassName = 'py-16 md:py-24 relative overflow-hidden';
const containerClassName = 'c9-container relative z-10';
const cardClassName = 'group rounded-[32px] border border-gray-100 bg-white p-8 hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-[#5D00D6]/5 transition-all duration-500 overflow-hidden relative';

const METRICS = [
  { label: 'Check-in Speed', value: '< 30s', desc: 'Average time for return visitors.' },
  { label: 'Data Sovereignty', value: 'AU', desc: '100% Australian-hosted data.' },
  { label: 'SLA Reliability', value: '99.9%', desc: 'Carrier-grade system uptime.' },
  { label: 'Emergency Alert', value: 'Instant', desc: 'One-click SMS evacuation.' },
];

const FAQS = [
  { q: 'Can we customize the kiosk branding?', a: 'Yes. The interface is fully white-labeled. You can incorporate your company logo, primary colors, and specific background imagery to ensure the kiosk matches your office aesthetics.' },
  { q: 'How are hosts notified when a visitor arrives?', a: 'We support instant notifications via Microsoft Teams, SMS, and Email. The visitor selects their host on the kiosk, and the alert is triggered immediately.' },
  { q: 'Is the visitor data stored securely in Australia?', a: 'Absolutely. All visitor logs, photos, and signed documents are encrypted and stored in Australian-based data centers, ensuring compliance with local privacy laws.' },
  { q: 'Can we handle multi-tenant lobby scenarios?', a: 'Yes. Our system is designed for complex environments. A single lobby kiosk can support multiple businesses, routing visitors and notifications to the correct office suite.' },
  { q: 'Does it support digital NDAs and safety inductions?', a: 'Yes. You can require visitors to read and digitally sign NDAs or complete safety inductions before the check-in is finalized. These documents are stored as secure PDFs.' },
  { q: 'How does the emergency evacuation reporting work?', a: 'In an emergency, admins can trigger a live manifest with one click. A list of all active visitors is instantly sent to safety wardens via SMS or accessible on any mobile device.' }
];

const features = [
  {
    title: 'Digital Governance',
    description: 'Replace manual paper logs with a secure, compliant digital entry system that captures every visitor interaction.',
    icon: Scan,
  },
  {
    title: 'Host Notifications',
    description: 'Automatic instant alerts (SMS/Email/Teams) to the host upon visitor arrival for seamless lobby flow.',
    icon: Bell,
  },
  {
    title: 'Compliance & Legal',
    description: 'Ensure every visitor acknowledges NDAs, health & safety protocols, and privacy policies before entry.',
    icon: ShieldCheck,
  }
];

export default function VisitorSolutionPage() {
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
                  Visitor Governance. <br />
                  <span className="text-[#5D00D6]">Lobby Automation.</span>
                </h1>
                <p className="c9-body text-slate-700 mb-10 text-xl max-w-2xl leading-relaxed">
                  First impressions are critical. C9 delivers a high-authority visitor experience with automated sign-ins, digital NDAs, and instant host notifications—ensuring 100% compliance from the moment they enter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <C9Button 
                    size="lg" 
                    className="rounded-full shadow-xl"
                    onClick={handleCtaClick}
                  >
                    Schedule Consultation 
                  </C9Button>
                  <C9Button 
                    variant="outline"
                    size="lg"
                    className="rounded-full border-black/10 text-[#0c1024] hover:bg-black/5"
                    onClick={handleCtaClick}
                  >
                    View Hardware Options
                  </C9Button>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-600 text-[11px] font-bold uppercase tracking-widest">AU Hosted Infrastructure</span>
                  </div>
                  <div className="h-4 w-px bg-black/10" />
                  <div className="text-slate-600 text-[11px] font-bold uppercase tracking-widest">Instant Host Alerts</div>
                </div>
              </FadeUp>
            </div>
            
            <div className="relative">
              <ScaleIn>
                <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] border border-black/5 bg-gray-50 aspect-[4/3]">
                  <Image 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                    alt="Premium Visitor Management Kiosk"
                    fill
                    className="object-cover"
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1280px) 100vw, 50vw"
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
                <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">{m.label}</div>
                <p className="text-[12px] text-slate-600 font-medium mt-1">{m.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CORE FEATURES */}
      <section className={sectionClassName}>
        <div className={containerClassName}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, i) => (
              <ScaleIn key={item.title} delay={i * 0.1}>
                <div className={cardClassName}>
                  <div className="w-14 h-14 rounded-2xl bg-[#F4F0FA] flex items-center justify-center mb-6 text-[#5D00D6]">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-[22px] font-bold mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed text-[15px] font-medium">{item.description}</p>
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
                <span className="text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest">The Small Business Protocol</span>
              </div>
              <h2 className="text-[32px] md:text-[38px] font-bold leading-[1.1] mb-8 font-proxima tracking-tight text-[#0C1024]">
                The C9 Managed <br />
                <span className="text-[#5D00D6]">Visitor Takeover.</span>
              </h2>
              <p className="text-[17px] text-gray-500 mb-10 leading-relaxed font-medium">
                Transitioning from manual visitor logs or failing third-party systems shouldn&apos;t be a risk. We utilize a structured takeover protocol to secure, calibrate, and unify your physical entry governance.
              </p>
              <div className="space-y-6">
                {[
                  { t: 'Entry Flow Audit', d: 'Analysing peak visitor times and identifying reception bottlenecks.' },
                  { t: 'Policy Integration', d: 'Enforcing legal NDAs and site-specific safety protocols digitally.' },
                  { t: 'Staff Notification Sync', d: 'Unifying visitor alerts with your existing Teams/Comms ecosystem.' }
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
              <h2 className="text-[32px] md:text-[38px] font-bold leading-[1.1] mb-8 font-proxima tracking-tight text-[#0C1024]">
                Operational <br />
                <span className="text-[#5D00D6]">Day One Hospitality.</span>
              </h2>
              <p className="text-[17px] text-gray-500 mb-10 leading-relaxed font-medium">
                For new sites, professionalism is mandatory from the first hour. We guarantee a fully-operational, compliant visitor experience on your first day of operation.
              </p>
              <div className="bg-[#0C1024] border border-white/10 rounded-3xl p-8 relative overflow-hidden hover:border-[#5D00D6]/40 transition-all shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#5D00D6]/10 rounded-bl-full" />
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <ShieldAlert size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[17px] text-white">Guaranteed System Uptime</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Target size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[17px] text-white">Analytics Dashboard Calibrated</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <UsersIcon size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[17px] text-white">Reception Staff Ready</span>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-white/5">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Visitor Protocol 2.4 • Managed Physical Ops</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 4. KEY CAPABILITIES */}
      <section className={sectionClassName}>
        <div className={containerClassName}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="c9-section-heading mb-8 font-proxima tracking-tight font-bold leading-tight">More than a check-in. <br /><span className="text-[#5D00D6]">Physical Data Intelligence.</span></h2>
              <p className="text-[18px] text-slate-700 mb-12 leading-relaxed font-medium">
                C9 Visitor Solution provides real-time analytics into visitor frequency, duration, and intent, allowing you to optimize your lobby operations and security protocols.
              </p>
              
              <div className="space-y-6">
                {[
                  { t: 'Contactless Check-in', d: 'QR-code driven entry for a touch-free, hygienic visitor experience.' },
                  { t: 'Badge Printing', d: 'Automated high-fidelity badge printing with visitor photo capture.' },
                  { t: 'Emergency Evacuation', d: 'Real-time visitor manifest accessible via mobile during emergencies.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F4F0FA] flex items-center justify-center shrink-0 text-[#5D00D6]">
                      <CheckCircle2 size={12} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0C1024] mb-1">{item.t}</h4>
                      <p className="text-slate-600 text-[14px]">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-[40px] bg-[#0C1024] p-8 md:p-12 text-white relative overflow-hidden aspect-square flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/20 to-transparent" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#5D00D6] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[#5D00D6]/50">
                    <Smartphone size={40} className="text-white" />
                  </div>
                  <h3 className="text-[28px] font-proxima font-bold mb-4 text-white">Host Management</h3>
                  <p className="text-slate-300 mb-8 max-w-sm mx-auto font-medium">
                    Instant notifications across all devices ensure your team is always ready for their next meeting.
                  </p>
                  <div className="flex justify-center gap-3">
                    <div className="px-4 py-2 bg-white/10 rounded-full text-[12px] font-bold uppercase tracking-widest border border-white/10">Teams</div>
                    <div className="px-4 py-2 bg-white/10 rounded-full text-[12px] font-bold uppercase tracking-widest border border-white/10">SMS</div>
                    <div className="px-4 py-2 bg-white/10 rounded-full text-[12px] font-bold uppercase tracking-widest border border-white/10">Email</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#5D00D6] rounded-[32px] -z-10 blur-[60px] opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. KIOSK VISUAL */}
      <section className="bg-white py-12">
        <div className={containerClassName}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="c9-section-heading mb-8 font-proxima tracking-tight font-bold leading-tight text-[#0C1024]">
                The First Impression <br /><span className="text-[#5D00D6]">Your Lobby Deserves.</span>
              </h2>
              <p className="text-[18px] text-slate-700 mb-8 leading-relaxed font-medium">
                C9 Visitor Management isn&apos;t just about check-ins; it&apos;s about creating a premium, secure gateway to your workplace. Our sleek kiosk interfaces reflect your brand authority while ensuring every entry is documented and compliant.
              </p>
              <div className="space-y-4">
                {[
                  'Custom Branded Check-In Flows',
                  'Instant Host Notifications (Teams/SMS)',
                  'Digital NDA & Safety Inductions',
                  'Real-Time Evacuation Manifests'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#5D00D6] shrink-0" size={18} />
                    <span className="font-bold text-[#0C1024] text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <ScaleIn delay={0.2}>
              <div className="rounded-[40px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] border border-gray-100 relative aspect-video">
                <Image 
                  src="/modern_workplace_visitor_management_kiosk_1777367997443.png" 
                  alt="Visitor Management Kiosk" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 50vw"
                />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* 6. VISITOR GOVERNANCE MATRIX */}
      <section className={sectionClassName}>
        <div className={containerClassName}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">Visitor Governance Matrix</h2>
            <p className="text-gray-500 text-[17px] font-medium leading-relaxed">
              Managing the intersection of physical security and professional hospitality.
            </p>
          </div>
          
          <div className="overflow-x-auto rounded-[32px] border border-gray-100 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-8 text-[12px] font-bold uppercase tracking-widest text-slate-600">Governance Layer</th>
                  <th className="p-8 text-[12px] font-bold uppercase tracking-widest text-slate-600">Managed Protocol</th>
                  <th className="p-8 text-[12px] font-bold uppercase tracking-widest text-slate-600">Operational Outcome</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { g: 'Health & Safety', p: 'Mandatory Site Inductions', o: '100% Safety Compliance' },
                  { g: 'Legal', p: 'Digital NDA Acknowledgement', o: 'Enforceable Privacy Protection' },
                  { g: 'Emergency', p: 'Live Presence Tracking', o: 'Instant Evacuation Reporting' },
                  { g: 'Security', p: 'Photo Capture & Badge Print', o: 'Verified Physical Identity' },
                  { g: 'Experience', p: 'Automated Host Arrival Alerts', o: 'Frictionless Meeting Starts' }
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-50 hover:bg-[#F8FAFF] transition-colors">
                    <td className="p-8 font-bold text-[#0C1024]">{row.g}</td>
                    <td className="p-8 text-slate-700 font-medium">{row.p}</td>
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

      {/* 7. FAQ SECTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="c9-container">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <Eyebrow>Operational Readiness</Eyebrow>
            <h2 className="c9-section-heading mb-8 font-proxima tracking-tight font-bold leading-tight">Visitor Management FAQ.</h2>
          </div>
          <div className="w-full">
            <FAQSection items={FAQS} />
          </div>
        </div>
      </section>

      {/* 7. CROSS-PAGE NAVIGATION */}
      <FullStackSection 
        title="Visitor Experience Is One Piece. See the Full Stack."
        description="A premium lobby experience requires secure backend infrastructure. Explore the connected workplace services that complete your operational ecosystem."
        services={[
          { title: 'CCTV & People Count', href: '/modern-workplace/cctv-people-count' },
          { title: 'Endpoint Management', href: '/modern-workplace/endpoint-management' },
          { title: 'Compliance & Data Protection', href: '/modern-workplace/compliance-data-protection' },
          { title: 'Managed Microsoft 365', href: '/modern-workplace/productivity' },
        ]}
      />

      {/* 8. FINAL CONSULTATION FORM */}
      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false}
          eyebrow="Visitor Governance Audit"
          title="Secure Your Lobby & Simplify Entry"
          description="Book a 30-minute review with an Australian workplace automation lead. We'll identify gaps in your visitor compliance and design a professional entry experience."
          formTitle="Request Visitor Audit"
        />
      </section>

    </div>
  );
}
