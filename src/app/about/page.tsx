'use client';

import React from 'react';
import { Users, ShieldCheck, Zap, Server, Headphones, CheckCircle2, Monitor, Lock, Rocket, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Section } from '@/components/design-system/Section';
import { H1, H2, H3, Body, Label } from '@/components/design-system/Typography';
import { C9Button } from '@/components/design-system/C9Button';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpWhyPartner } from '@/components/wordpress/WpWhyPartner';
import EngineeringStructure from '@/components/sections/enterprise/EngineeringStructure';
import { AuthorityCta } from '@/components/sections/shared/AuthorityCta';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';

const FadeIn = ({ children, delay = 0, className, direction = 'up' }: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' 
}) => {
  const variants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 }
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

export default function AboutPage() {
  return (
    <div className="pt-0 bg-white overflow-x-hidden">
      
      {/* ══ 1. HERO ══════════════════════════════════════════════════ */}
      <Section className="relative overflow-hidden" bg="none">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <div>
            <FadeIn>
              <Label>About C9 Communications</Label>
            </FadeIn>
            <FadeIn delay={0.1}>
              <H1 className="mb-6 !text-left">
                A Managed IT Partner You Can Rely On <span className="text-[#5D00D6]">When It Matters</span>
              </H1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Body className="mb-10 text-lg md:text-xl text-left">
                C9 Communications delivers secure, scalable IT and telco operations with clear ownership, fast response, and zero vendor confusion. We don’t just support systems — we take responsibility for keeping your business running.
              </Body>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <C9Button className="px-10 h-14 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl shadow-purple-900/20 rounded-full" asChild>
                   <Link href="#consultation-section">Speak to Our Team</Link>
                </C9Button>
                <C9Button variant="outline" className="px-10 h-14 border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] rounded-full bg-white" asChild>
                   <Link href="#accountability">Our Accountability Model</Link>
                </C9Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="right" className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-square lg:aspect-[4/5]">
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                 alt="C9 Operational Centre" 
                 className="w-full h-full object-cover grayscale opacity-90"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/20 to-transparent" />
               <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-md rounded-lg p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#5D00D6] flex items-center justify-center text-white">
                      <ShieldCheck size={20} />
                    </div>
                    <div className="text-[16px] font-bold text-slate-900 leading-none">Operational Maturity</div>
                  </div>
                  <Body className="text-[14px]">Engineering-first support for high-stakes environments.</Body>
               </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ══ 2. POSITIONING ══════════════════════════════════════════ */}
      <Section id="accountability" bg="gray" className="py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="left">
            <div className="bg-[#0c1024] p-10 md:p-12 rounded-lg text-white">
               <H3 className="text-white mb-8">Business Continuity Focus</H3>
               <p className="text-white/60 mb-10 leading-relaxed">
                 We don't just "help businesses grow"—we provide the stable, secure foundation that makes growth possible. Our focus is on removing technical friction so your leadership can focus on strategy.
               </p>
               <div className="p-8 bg-white/5 rounded-lg">
                  <div className="text-3xl font-black text-[#A855F7] mb-2 leading-none tracking-tight">99.99%</div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-white/40">Core Network Uptime</div>
               </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} direction="right">
            <Label className="mb-4 block text-rose-600">The C9 Differentiator</Label>
            <H2 className="mb-6">Built for Businesses That Can’t Afford Downtime</H2>
            <Body className="mb-8">
              Most Managed Service Providers (MSPs) operate on a volume-based model. C9 operates on an accountability model. We treat your infrastructure as a business-critical utility, not just a list of support tickets.
            </Body>
            <div className="space-y-6">
              {[
                { title: "Single Partner Ownership", desc: "We manage your entire stack—IT, network, and security—eliminating the gap between providers." },
                { title: "Operational Responsibility", desc: "We own the uptime. If there is a fault, we own the resolution, regardless of which vendor is at fault." },
                { title: "Eliminating Fragmentation", desc: "No more juggling multiple telco and IT contracts. One partner, one invoice, one point of contact." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="text-[#5D00D6] shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <Body className="text-sm">{item.desc}</Body>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ══ 2.5 VALUES & NUMBERS ══════════════════════════════════════ */}
      <Section bg="white" className="py-24 border-y border-slate-100">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Values */}
          <div>
            <FadeIn>
              <Label className="mb-4 block">Our Core Values</Label>
              <H2 className="mb-10 text-4xl">Principles That Drive Performance</H2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-10">
              {[
                { title: "Absolute Accountability", desc: "No finger-pointing. If it's on our network, we own the resolution." },
                { title: "Engineering First", desc: "You speak to Level 2/3 engineers immediately. No script-readers." },
                { title: "Radical Transparency", desc: "Real-time visibility into your infrastructure performance and security." },
                { title: "100% On-Shore", desc: "Proudly Australian based. Every support ticket is handled on-shore." }
              ].map((val, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-bold text-slate-900">{val.title}</h4>
                    <Body className="text-sm leading-relaxed text-slate-600">{val.desc}</Body>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Numbers */}
          <div className="bg-[#0c1024] p-12 md:p-16 rounded-lg text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <FadeIn>
              <Label className="mb-4 block text-white/40">C9 by the Numbers</Label>
              <H2 className="text-white mb-12">Measurable Operational Excellence</H2>
            </FadeIn>
            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
              {[
                { val: "15+", label: "Years Experience" },
                { val: "24/7", label: "NOC Monitoring" },
                { val: "99.9%", label: "Client Retention" },
                { val: "2.5k+", label: "Endpoints Managed" }
              ].map((stat, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex flex-col border-l border-white/10 pl-6">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">{stat.val}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ══ 3. WHAT WE DO (RESPONSIBILITY) ═══════════════════════════ */}
      <Section bg="white" className="py-20 md:py-24">
        <div className="text-center mb-16">
          <Label className="mb-4 block">Responsibility Framework</Label>
          <H2>What We Take Responsibility For</H2>
          <Body className="max-w-2xl mx-auto mt-4">
            You don’t manage multiple providers. We own the outcome for your entire technology environment.
          </Body>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {[
            { 
              icon: Server, 
              title: "Managed IT & Infrastructure", 
              desc: "Full ownership of server environments, cloud infrastructure (Azure/AWS), and core network routing. We ensure your systems are resilient, patched, and performing at peak levels." 
            },
            { 
              icon: Monitor, 
              title: "Modern Workplace & Endpoints", 
              desc: "Management of the entire end-user experience. From hardware procurement and automated deployment to Microsoft 365 governance and endpoint security." 
            },
            { 
              icon: Lock, 
              title: "Cybersecurity & Protection", 
              desc: "Continuous security operations including EDR monitoring, identity protection, and risk visibility. Security is not an add-on; it is baked into every layer of our management." 
            },
            { 
              icon: Headphones, 
              title: "Support & Operations", 
              desc: "Australia-wide support with direct access to senior engineers. We focus on root-cause resolution, not just closing tickets, to ensure long-term stability." 
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 md:p-10 rounded-lg bg-slate-50 transition-all h-full flex flex-col">
                <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center text-[#5D00D6] mb-8 group-hover:scale-110">
                  <item.icon size={28} />
                </div>
                <H3 className="mb-4 text-2xl tracking-tight">{item.title}</H3>
                <Body className="flex-grow">{item.desc}</Body>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ══ 4. ENGINEERING STRUCTURE ═══════════════════════════════ */}
      <EngineeringStructure />

      {/* ══ 5. TRUST SIGNALS: LOGO STRIP ═══════════════════════════ */}
      <WpClientTicker />

      {/* ══ 6. OPERATIONAL CERTAINTY ════════════════════════════════ */}
      <WpWhyPartner />

      {/* ══ 7. THE C9 ECOSYSTEM (Trust Funnel Transition) ════════════ */}
      <AuthorityCta 
        variant="funnel"
        eyebrow="THE C9 ECOSYSTEM"
        title="Operational Proof Across the Entire Lifecycle."
        description="About Us is just the foundation. Explore the specific layers of our operational capability and cultural standard."
        primaryText="Review Our Differentiation"
        primaryHref="/about/why-c9"
        secondaryText="Meet the Team"
        secondaryHref="/about/team"
      />

      {/* ══ 8. FUNNEL NAVIGATION CARDS ══════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white border-y border-slate-100">
        <div className={C}>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                name: "Why C9 Communications", 
                path: "/about/why-c9",
                subtitle: "Risk Reduction", 
                desc: "How we eliminate the standard MSP accountability gap." 
              },
              { 
                icon: Users, 
                name: "The C9 Team", 
                path: "/about/team",
                subtitle: "Capability Proof", 
                desc: "The senior engineering team owning your outcomes." 
              },
              { 
                icon: Rocket, 
                name: "Careers & Culture", 
                path: "/about/careers",
                subtitle: "Culture Validation", 
                desc: "The standards that define our technical performance." 
              }
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={card.path} className="block">
                  <div className="p-10 bg-[#F4F0FA] rounded-lg transition-all h-full group-hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#5D00D6] mb-8 group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
                      <card.icon size={24} />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5D00D6] mb-2">{card.subtitle}</div>
                    <h3 className="c9-card-title !text-2xl mb-4 text-[#0c1024]">{card.name}</h3>
                    <p className="c9-body !text-sm text-slate-600">{card.desc}</p>
                    <div className="mt-8 flex items-center gap-2 text-[#5D00D6] font-bold text-sm">
                      Explore Layer 
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. FAQ & FEEDBACK ═══════════════════════════════════════ */}
      <WpFAQAndFeedback />

      {/* ══ 10. FINAL CTA (Authority Style) ═════════════════════════ */}
      <AuthorityCta 
        pillIcon={PhoneCall}
        eyebrow="READY TO START?"
        title="Experience Operational Maturity Firsthand"
        description="Book a technical strategy session to discuss how our infrastructure management model can scale your business and eliminate operational risk."
        primaryText="Schedule Strategy Session"
        primaryHref="#consultation-section"
        secondaryText="Call 1800 000 299"
        secondaryHref="tel:1800000299"
        footerText="Zero-day operational readiness. Guaranteed."
      />

      <section id="consultation-section" className="bg-white border-t border-slate-100">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="READY TO START?"
          title="Build Your Foundation with C9"
          description="Schedule a technical strategy session to discuss how our infrastructure management model can scale your business."
          formTitle="Start Strategy Session"
        />
      </section>
    </div>
  );
}
