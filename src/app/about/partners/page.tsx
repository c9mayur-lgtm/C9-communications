'use client';

import React from 'react';
import { ShieldCheck, Cloud, LayoutGrid, CheckCircle2, Network, Server, Activity, Lock, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import Link from 'next/link';

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

const ScaleIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${light ? 'bg-white/10' : 'bg-[#5D00D6]/10'}`}>
    <span className={`text-[10px] font-bold uppercase tracking-widest ${light ? 'text-white' : 'text-[#5D00D6]'}`}>
      {children}
    </span>
  </div>
);

export default function PartnersPage() {
  return (
    <main className="bg-white min-h-screen text-[#0C1024] selection:bg-[#5D00D6]/10 overflow-x-hidden">
      {/* 1. HERO SECTION — TRUST POSITIONING */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F9FBFF] -z-10 hidden lg:block" />
        <div className="c9-container relative z-10 text-center w-full max-w-[1000px] mx-auto px-6">
          <FadeUp>
            <Eyebrow>Enterprise Trust Architecture</Eyebrow>
            <h1 className="c9-hero-title mb-8 !leading-[1.1] font-bold">
              Built on Trusted Partnerships.<br />
              <span className="text-[#5D00D6]">Backed by Proven Standards.</span>
            </h1>
            <p className="c9-body text-slate-600 mb-10 text-xl max-w-3xl mx-auto leading-relaxed">
              We do not experiment with your infrastructure. We deploy, manage, and secure environments using recognised enterprise vendors and validated technical frameworks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-lg shadow-[#5D00D6]/20 h-14 px-8 text-[15px] font-bold">
                  Discuss Your Environment 
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-black/10 text-[#0c1024] rounded-full hover:bg-black/5 transition-all backdrop-blur-sm h-14 px-8 text-[15px] font-bold">
                  Request Infrastructure Assessment
                </Link>
            </div>
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">AU Engineering Desk Active</span>
              </div>
              <div className="h-4 w-px bg-black/10" />
              <div className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">Certified Delivery Partner</div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. STRATEGIC PARTNERS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="c9-container">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="c9-section-heading mb-6">Strategic Platform Alignment.</h2>
            <p className="c9-body text-xl">
              We align with vendors that guarantee operational resilience. This ensures deep compatibility, direct escalation paths, and enterprise-grade reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                icon: LayoutGrid,
                title: 'Microsoft Ecosystem',
                desc: 'Deep integration across Azure, Microsoft 365, and enterprise security policies. Ensures seamless workplace productivity and access to premier engineering support.',
                points: ['Cloud Architecture', 'Security Compliance', 'Workplace Optimisation']
              },
              {
                icon: Server,
                title: 'Cisco Infrastructure',
                desc: 'Providing the backbone for mission-critical connectivity. Guarantees hardware reliability, network resilience, and advanced threat defense at the edge.',
                points: ['Network Resilience', 'Edge Security', 'Hardware Reliability']
              },
              {
                icon: Activity,
                title: 'Tier 1 Connectivity',
                desc: 'Strategic alignment with primary fibre and mobile infrastructure providers. Secures diverse routes, absolute redundancy, and priority fault resolution.',
                points: ['Diverse Routing', 'High Availability', 'Priority Resolution']
              },
              {
                icon: ShieldCheck,
                title: 'Threat Mitigation Partners',
                desc: 'Uncompromising perimeter defense and endpoint protection through industry-leading security vendors. Ensures alignment with global compliance standards.',
                points: ['Perimeter Defense', 'Endpoint Protection', 'Compliance Alignment']
              }
            ].map((partner, idx) => (
              <ScaleIn key={idx} delay={idx * 0.1}>
                <div className="rounded-[32px] p-10 border border-black/10 transition-all duration-500 h-full bg-white hover:shadow-2xl hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-[20px] bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-8 duration-500 group-hover:scale-[1.1] group-hover:-rotate-3">
                    <partner.icon size={32} />
                  </div>
                  <h3 className="c9-card-title mb-4">{partner.title}</h3>
                  <p className="c9-body mb-8 flex-grow">{partner.desc}</p>
                  <ul className="space-y-4 pt-6 border-t border-black/5 mt-auto">
                    {partner.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-3 text-[13px] font-bold text-slate-900">
                        <CheckCircle2 size={16} className="text-[#5D00D6] shrink-0" /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CERTIFICATIONS & ACCREDITATIONS */}
      <section className="py-16 md:py-24" style={{ background: '#F9FBFF' }}>
        <div className="c9-container">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="c9-section-heading mb-6">Validated Operational Capability.</h2>
            <p className="c9-body text-xl">
              Certifications are proof of accountability. They validate our capability to manage complex environments securely and effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Cloud,
                title: 'Microsoft Partner Status',
                desc: 'Validated technical capability in delivering complex cloud and workplace transformations. We operate to highest engineering standards.'
              },
              {
                icon: Lock,
                title: 'Security & Compliance Alignment',
                desc: 'Operations structured to align with Essential 8 and global security frameworks. We reduce compliance hesitation and systemic risk.'
              },
              {
                icon: Layers,
                title: 'Vendor Engineering Certifications',
                desc: 'Our engineering teams hold top-tier vendor certifications. This guarantees complex issues are resolved by experts without generic escalation delays.'
              }
            ].map((cert, idx) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-[32px] bg-white border border-black/10 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1A1A2E] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors duration-300">
                    <cert.icon size={28} />
                  </div>
                  <h3 className="c9-card-title !text-[20px] mb-4">{cert.title}</h3>
                  <p className="c9-body !text-[15px]">{cert.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW PARTNERSHIPS IMPROVE DELIVERY */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-[#0c1024] text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px]" style={{ background: 'radial-gradient(ellipse, rgba(93,0,214,0.2) 0%, transparent 70%)' }} />
        </div>
        <div className="c9-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <FadeUp>
                <Eyebrow light>Operational Advantages</Eyebrow>
                <h2 className="c9-section-heading !text-white mb-6">How Ecosystem Alignment Improves Delivery.</h2>
                <p className="c9-body !text-slate-300 mb-10 text-xl">
                  Working with validated partners directly translates into operational advantages. We remove the friction of multi-vendor environments.
                </p>
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#5D00D6] shrink-0 mt-1" />
                    <div>
                      <strong className="block text-white mb-2 text-xl tracking-tight">Accelerated Escalation Paths</strong>
                      <span className="text-slate-400 leading-relaxed block text-[15px]">Bypass standard support queues. Our partner status grants direct access to vendor engineering teams for rapid critical issue resolution.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#5D00D6] shrink-0 mt-1" />
                    <div>
                      <strong className="block text-white mb-2 text-xl tracking-tight">Stronger Implementation Quality</strong>
                      <span className="text-slate-400 leading-relaxed block text-[15px]">Deployments follow vendor-validated architectures. This eliminates guesswork and ensures systems perform exactly as designed.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#5D00D6] shrink-0 mt-1" />
                    <div>
                      <strong className="block text-white mb-2 text-xl tracking-tight">Reduced Operational Risk</strong>
                      <span className="text-slate-400 leading-relaxed block text-[15px]">Supported hardware and software ecosystems reduce vulnerabilities. Continuous vendor patching and lifecycle management secure your environment.</span>
                    </div>
                  </li>
                </ul>
              </FadeUp>
              <ScaleIn delay={0.2}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/30 to-transparent rounded-[40px] transform rotate-3"></div>
                  <div className="bg-[#12162B] border border-white/10 rounded-[40px] p-10 md:p-12 relative z-10 shadow-2xl">
                    <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">Single-Point Accountability</h3>
                    <p className="text-slate-400 mb-10 leading-relaxed text-[15px]">
                      We manage the vendor ecosystem on your behalf. You get one accountable partner for telco, infrastructure, and security. No finger-pointing. No gaps in delivery.
                    </p>
                    <ul className="space-y-5">
                      <li className="flex items-center justify-between border-b border-white/5 pb-5">
                        <span className="text-white/80 font-medium">Vendor Management</span>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#5D00D6]" />
                            <span className="text-[#5D00D6] font-bold text-[13px] uppercase tracking-widest">Included</span>
                        </div>
                      </li>
                      <li className="flex items-center justify-between border-b border-white/5 pb-5">
                        <span className="text-white/80 font-medium">Licensing Optimisation</span>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#5D00D6]" />
                            <span className="text-[#5D00D6] font-bold text-[13px] uppercase tracking-widest">Included</span>
                        </div>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-white/80 font-medium">Technical Escalation</span>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#5D00D6]" />
                            <span className="text-[#5D00D6] font-bold text-[13px] uppercase tracking-widest">Included</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScaleIn>
          </div>
        </div>
      </section>

      {/* 5. ENTERPRISE CONFIDENCE BLOCK */}
      <section className="py-16 md:py-24 bg-white">
        <div className="c9-container">
          <ScaleIn>
            <div className="bg-[#5D00D6]/5 border border-[#5D00D6]/10 rounded-[40px] p-12 md:p-20 text-center max-w-4xl mx-auto shadow-sm">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm border border-black/5">
                <Network className="w-10 h-10 text-[#5D00D6]" />
              </div>
              <h2 className="c9-section-heading mb-6">Procurement Confidence.</h2>
              <p className="c9-body text-xl">
                Enterprise buyers choose vendors with real partner ecosystems to eliminate delivery gaps. 
                When infrastructure, telco, and security are backed by primary vendors, project risk drops and accountability increases.
              </p>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* 6. WORKING WITH YOUR EXISTING STACK */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-gray-100">
        <div className="c9-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="c9-section-heading mb-6">We Support Your Existing Stack.</h2>
            <p className="c9-body text-xl">
              We do not force "rip and replace" implementations. We integrate with the enterprise platforms you already trust.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <FadeUp delay={0.1}>
              <div className="bg-white p-10 rounded-[32px] border border-black/10 shadow-sm h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <h3 className="c9-card-title mb-4">No Forced Replacements</h3>
                <p className="c9-body !text-[15px]">We work within your current infrastructure boundaries, optimising existing investments before recommending changes.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-white p-10 rounded-[32px] border border-black/10 shadow-sm h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <h3 className="c9-card-title mb-4">Hybrid Vendor Support</h3>
                <p className="c9-body !text-[15px]">Expertise in managing complex, multi-vendor environments. We act as the single point of accountability for your whole stack.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="bg-white p-10 rounded-[32px] border border-black/10 shadow-sm h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <h3 className="c9-card-title mb-4">Seamless Integration</h3>
                <p className="c9-body !text-[15px]">We deploy network and security services that natively connect with your established cloud and core systems.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section>
        <WpConsultationForm
          showHeader={false}
          eyebrow="ENTERPRISE CAPABILITY"
          title="Need a Partner That Can Operate at Enterprise Standard?"
          description="Validate our capabilities against your infrastructure requirements. Speak directly with a solution architect."
          formTitle="Request Infrastructure Assessment"
        />
      </section>
    </main>
  );
}
