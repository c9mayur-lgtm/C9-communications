'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle, 
  Activity, 
  Server, 
  RefreshCw, 
  Zap, 
  Clock, 
  Layers,
  ArrowRight,
  Shield,
  ShieldAlert,
  Check,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  Network,
  Smartphone,
  MoveHorizontal,
  Plus,
  HelpCircle,
  Users,
  Mic2,
  Cpu,
  Monitor,
  Search,
  Globe
} from 'lucide-react';

// Custom Components
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { C9Button } from '@/components/design-system/C9Button';
import { handleCtaClick } from '@/lib/utils';
import { ConsultationFormCore } from '@/components/forms/ConsultationFormCore';
import { TelcoProductModal } from '@/components/forms/TelcoForms';
import { WpCapabilityNavigator } from '@/components/wordpress/WpCapabilityNavigator';
import { 
  HeroVisual, 
  PhoneSystemVisual, 
  InternetVisual, 
  FibreVisual, 
  EthernetVisual, 
  AIVoiceVisual,
  ProblemSolutionVisual,
  ComparisonStackVisual,
  FinalCtaVisual
} from '@/components/telco/TelcoVisuals';

/* ─────────────────────────────────────────────────────────
   DESIGN SYSTEM TOKENS (Synthflow Inspired)
   ───────────────────────────────────────────────────────── */
const THEME = {
  colors: {
    navyDark: '#110229',
    vibrantPurple: '#9747FF',
    deepPurple: '#5B0DD5',
    offWhite: '#F9F9F9',
    white: '#FFFFFF',
    lightPurpleTint: '#F2EFFE',
    softerPurpleTint: '#FAF9FE',
    darkGray: '#595959',
    charcoal: '#141414',
    borderGray: '#D9D9D9',
    teal: '#00C8A3',
    magenta: '#DD00A4',
    brightBlue: '#005EFF',
  },
  shadows: {
    base: 'rgba(73, 69, 80, 0.12) 0px 4px 20px 0px',
    hover: 'rgba(73, 69, 80, 0.18) 0px 6px 24px 0px',
    high: 'rgba(179, 179, 179, 0.25) 0px 8px 20px 0px',
  },
  radius: {
    button: '6px',
    card: '8px',
    input: '12px',
  }
};

const C = "container mx-auto px-6 md:px-8 max-w-[1280px]";

const FadeIn = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}) => {
  const y = direction === 'up' ? 24 : 0;
  const x = direction === 'left' ? -24 : direction === 'right' ? 24 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Styled Components based on DESIGN.md
const SectionHeading = ({ children, className = '', dark = false }: { children: React.ReactNode, className?: string, dark?: boolean }) => (
  <h2 className={`font-geist text-[32px] md:text-[42px] font-normal leading-[1.05] tracking-[-0.04em] ${dark ? 'text-white' : 'text-[#110229]'} ${className}`}>
    {children}
  </h2>
);

const BodyText = ({ children, className = '', large = false, dark = false }: { children: React.ReactNode, className?: string, large?: boolean, dark?: boolean }) => (
  <p className={`${large ? 'font-geist text-[24px] md:text-[30px] font-semibold leading-[1.2]' : 'font-inter text-[14px] font-normal leading-[1.4]'} ${dark ? 'text-white/70' : 'text-[#141414]/80'} ${className}`}>
    {children}
  </p>
);

const PrimaryCTA = ({ children, onClick, className = '', variant = 'primary' }: { children: React.ReactNode, onClick?: () => void, className?: string, variant?: 'primary' | 'secondary' | 'ghost' }) => {
  const styles = {
    primary: "bg-[#110229] text-white hover:bg-[#0A0118] hover:shadow-[rgba(179,179,179,0.15)_0px_6px_16px_0px]",
    secondary: "bg-[#5B0DD5] text-white hover:bg-[#4A0BAA] hover:shadow-[rgba(179,179,179,0.2)_0px_8px_20px_0px]",
    ghost: "bg-transparent text-[#110229] hover:bg-[#F9F9F9] hover:text-[#5B0DD5]"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`h-[46px] px-4 py-[14px] rounded-[6px] font-inter text-[15px] font-medium leading-[18px] transition-all duration-300 flex items-center justify-center gap-2 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO (Synthflow Redesign)
   ───────────────────────────────────────────────────────── */
const Hero = ({ openModal }: { openModal: (name: string, type: any) => void }) => (
  <section className="relative overflow-hidden bg-[#F2EFFE] pt-16 pb-24 lg:pt-24 lg:pb-40">
    {/* Subtle grid pattern */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: 'linear-gradient(#9747FF 1px, transparent 1px), linear-gradient(90deg, #9747FF 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />

    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
        <div className="order-last lg:order-first">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-white border border-[#D9D9D9] mb-10 shadow-sm">
              <span className="font-inter text-[12px] font-bold uppercase tracking-wider text-[#9747FF]">BUSINESS PHONES AND INTERNET</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="font-geist text-[48px] md:text-[64px] font-normal leading-[1.1] tracking-[-0.02em] text-[#110229] mb-10">
              Business Phones and Internet, Managed Properly.
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mb-12 max-w-[620px] space-y-6">
              <BodyText large>
                We help Australian businesses set up and manage the phone systems and internet services their teams rely on every day. 
              </BodyText>
              <BodyText>
                Instead of dealing with multiple providers and disconnected setups, you get one local team that takes accountability for your full environment — from installation to ongoing support.
              </BodyText>
            </div>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <PrimaryCTA 
                variant="secondary"
                className="px-10 h-[56px] text-lg rounded-[8px]"
                onClick={() => openModal('Telco Consultation Request', 'generic')}
              >
                Talk to C9
              </PrimaryCTA>
              <PrimaryCTA 
                variant="ghost"
                className="px-10 h-[56px] text-lg rounded-[8px] border border-[#D9D9D9]"
                onClick={() => {
                   const el = document.getElementById('core-products');
                   el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See Our Services
              </PrimaryCTA>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 border-t border-[#D9D9D9] pt-12">
              {[
                { label: 'One team for phones and internet', icon: <Wifi size={16} className="text-[#9747FF]" /> },
                { label: 'Migration and setup handled for you', icon: <RefreshCw size={16} className="text-[#9747FF]" /> },
                { label: 'Local Australian business support', icon: <ShieldCheck size={16} className="text-[#9747FF]" /> },
                { label: 'Built for office and multi-site teams', icon: <Activity size={16} className="text-[#9747FF]" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">{item.icon}</div>
                  <span className="font-inter text-[14px] font-bold text-[#110229]">{item.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} direction="right" className="relative order-first lg:order-last">
           <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[650px] rounded-[12px] overflow-hidden shadow-[rgba(0,0,0,0.04)_0px_2px_3px_0px,rgba(0,0,0,0.03)_0px_6px_6px_0px,rgba(0,0,0,0.02)_0px_14px_8px_0px,rgba(0,0,0,0.01)_0px_25px_10px_0px]">
             <img 
               src="/Telco hero banner.png" 
               alt="C9 Telco Services Hero" 
               className="w-full h-full object-cover object-center"
             />
             <div className="absolute inset-0 bg-[#110229]/5 mix-blend-multiply" />
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION — RELIANCE STRIP
   ───────────────────────────────────────────────────────── */
const RelianceStrip = () => (
  <div className="py-12 bg-white overflow-hidden border-y border-[#D9D9D9]">
     <div className={`${C}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="text-center md:text-left">
              <p className="font-inter text-[12px] font-bold text-[#110229]/40 uppercase tracking-[0.3em]">RELIED ON BY AUSTRALIAN TEAMS</p>
           </div>
           <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="font-geist text-2xl font-bold text-[#110229]">NBN Co</div>
              <div className="font-geist text-2xl font-bold text-[#110229]">Microsoft</div>
              <div className="font-geist text-2xl font-bold text-[#110229]">Yealink</div>
              <div className="font-geist text-2xl font-bold text-[#110229]">Cisco</div>
           </div>
        </div>
     </div>
  </div>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — CORE TELCO PRODUCTS
   ───────────────────────────────────────────────────────── */
const CoreProducts = ({ openModal }: { openModal: (name: string, type: any) => void }) => {
  const products = [
    {
      title: "C9 Phone System",
      type: 'phone' as const,
      link: '/telco/phone-system',
      description: "A business phone system that works for office, remote and hybrid teams. Manage your calls, voicemail and business numbers properly through a setup that can grow as fast as your business.",
      goodFor: ["Replacing outdated office phones", "Supporting remote and hybrid teams", "Professional call routing"],
      cta: "Upgrade My Phone System",
      icon: <PhoneCall className="text-[#5B0DD5]" size={24} />
    },
    {
      title: "Business nbn",
      type: 'internet' as const,
      link: '/telco/business-nbn',
      description: "Business internet your team can actually rely on. We help you choose the right Business nbn connection based on where you are and what your business needs to get done.",
      goodFor: ["Small and growing businesses", "Offices and clinics", "Dependable day-to-day connectivity"],
      cta: "Check nbn Options",
      icon: <Wifi className="text-[#5B0DD5]" size={24} />
    },
    {
      title: "Fast Fibre",
      type: 'internet' as const,
      link: '/telco/fast-fibre',
      description: "High-speed internet for businesses ready to move beyond basic connections. Ideal for teams that need faster uploads and better performance across cloud platforms.",
      goodFor: ["Growing teams", "Heavy cloud and video usage", "Faster upload needs"],
      cta: "Upgrade to Fast Fibre",
      icon: <Zap className="text-[#5B0DD5]" size={24} />
    }
  ];

  return (
    <section id="core-products" className="py-24 md:py-32 bg-[#F9F9F9]">
      <div className={C}>
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <FadeIn>
            <span className="font-inter text-[12px] font-bold uppercase tracking-[0.2em] text-[#9747FF] mb-6 block">Our Telco Services</span>
            <SectionHeading className="mb-8">Business Phone and Internet Services Built Around Your Team</SectionHeading>
            <BodyText>
              We help you choose and install the services that actually fit your business—whether it's a simple office phone system, high-speed business internet, or AI-assisted call handling.
            </BodyText>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <FadeIn key={i} delay={i * 0.1} className="flex h-full">
              <div className="bg-white p-10 rounded-[8px] border border-white shadow-[rgba(73,69,80,0.12)_0px_4px_20px_0px] hover:shadow-[rgba(73,69,80,0.18)_0px_6px_24px_0px] transition-all duration-500 flex flex-col w-full group">
                <div className="w-14 h-14 rounded-[8px] bg-[#F2EFFE] flex items-center justify-center mb-10 group-hover:bg-[#5B0DD5] group-hover:text-white transition-all duration-500">
                  {product.icon}
                </div>
                
                <h3 className="font-geist text-[18px] font-medium text-[#110229] mb-6 tracking-tight">{product.title}</h3>
                <BodyText className="mb-10 flex-grow">{product.description}</BodyText>
                
                <div className="mb-12 space-y-4">
                   <p className="font-inter text-[12px] font-bold uppercase tracking-[0.1em] text-[#595959]">Good for:</p>
                   <ul className="space-y-4">
                      {product.goodFor.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <CheckCircle size={16} className="text-[#00C8A3] mt-0.5 shrink-0" />
                          <span className="font-inter text-[14px] font-semibold text-[#110229]">{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>

                <PrimaryCTA 
                  variant="primary" 
                  className="w-full"
                  onClick={() => product.link ? window.location.href = product.link : openModal(product.title, product.type)}
                >
                  {product.cta}
                </PrimaryCTA>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 3 — THE C9 APPROACH (Synthflow Style)
   ───────────────────────────────────────────────────────── */
const SectionApproach = ({ openModal }: { openModal: (name: string, type: any) => void }) => {
  const points = [
    { title: "One Managed Setup", copy: "We look at your full setup — phones, internet, routers and backup connections — so everything works properly from day one." },
    { title: "No Blame Game", copy: "Instead of dealing with multiple providers pointing fingers, you get one local team that takes total accountability." },
    { title: "Engineered for Growth", copy: "Support for new sites, remote teams and businesses tired of their current complex provider setups." }
  ];

  return (
    <section className="py-24 md:py-40 bg-white">
      <div className={C}>
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <FadeIn direction="left">
             <span className="font-inter text-[12px] font-bold uppercase tracking-[0.2em] text-[#9747FF] mb-6 block">THE C9 APPROACH</span>
             <SectionHeading className="mb-10">Why Businesses Work With C9</SectionHeading>
             <BodyText className="mb-12">
                Most businesses come to us because their current phone and internet setup has become hard to manage. We keep things clear, practical, and focused on your day-to-day workflow.
             </BodyText>
             
             <div className="space-y-10">
                {points.map((point, i) => (
                   <div key={i} className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-[8px] bg-[#FAF9FE] border border-[#D9D9D9] flex items-center justify-center shrink-0 group-hover:border-[#9747FF] transition-colors">
                         <Check size={20} className="text-[#9747FF]" />
                      </div>
                      <div>
                         <h4 className="font-geist text-[18px] font-medium text-[#110229] mb-3">{point.title}</h4>
                         <BodyText>{point.copy}</BodyText>
                      </div>
                   </div>
                ))}
             </div>
             
             <PrimaryCTA variant="secondary" className="mt-16 px-12" onClick={() => openModal('Approach Consultation', 'generic')}>
                Talk to C9 About My Setup
             </PrimaryCTA>
          </FadeIn>

          <FadeIn direction="right" className="relative">
             <div className="bg-[#110229] rounded-[12px] p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#9747FF]/20 blur-[100px] -mr-32 -mt-32 rounded-full" />
                <h3 className="font-geist text-[24px] font-medium mb-10">Enterprise Reliability, Local Accountability.</h3>
                <div className="space-y-8">
                   <div className="flex items-center gap-6 p-6 rounded-[8px] bg-white/5 border border-white/10">
                      <div className="w-12 h-12 rounded-full bg-[#9747FF]/20 flex items-center justify-center text-[#9747FF]">
                         <Activity size={24} />
                      </div>
                      <BodyText dark>99.9% Uptime Commitment</BodyText>
                   </div>
                   <div className="flex items-center gap-6 p-6 rounded-[8px] bg-white/5 border border-white/10">
                      <div className="w-12 h-12 rounded-full bg-[#00C8A3]/20 flex items-center justify-center text-[#00C8A3]">
                         <Clock size={24} />
                      </div>
                      <BodyText dark>2-Hour Response Time</BodyText>
                   </div>
                   <div className="flex items-center gap-6 p-6 rounded-[8px] bg-white/5 border border-white/10">
                      <div className="w-12 h-12 rounded-full bg-[#DD00A4]/20 flex items-center justify-center text-[#DD00A4]">
                         <ShieldCheck size={24} />
                      </div>
                      <BodyText dark>Direct Access to Engineers</BodyText>
                   </div>
                </div>
             </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 4 — HOW IT WORKS
   ───────────────────────────────────────────────────────── */
const SectionHowItWorks = ({ openModal }: { openModal: (name: string, type: any) => void }) => {
  const steps = [
    { title: "Telco Review", copy: "We look at your current phones, internet and site requirements to see where the bottlenecks are." },
    { title: "Practical Advice", copy: "We recommend the right mix of phones and internet that fits your team size and how you actually work." },
    { title: "Setup & Migration", copy: "We handle the hard parts — coordination, number porting, router setup and smooth cutover." },
    { title: "Local Support", copy: "Once live, we're here to help with responsive service whenever your team needs it." }
  ];

  return (
    <section className="py-24 md:py-40 bg-[#FAF9FE]">
      <div className={C}>
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <FadeIn>
            <span className="font-inter text-[12px] font-bold uppercase tracking-[0.2em] text-[#9747FF] mb-6 block">PROCESS</span>
            <SectionHeading className="mb-8">Straightforward Advice from a Local Team</SectionHeading>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="relative group">
                  <div className="font-geist text-[64px] font-bold text-[#9747FF]/10 absolute -top-12 -left-4 select-none group-hover:text-[#9747FF]/20 transition-colors">0{i+1}</div>
                  <div className="relative z-10 pt-4">
                     <h4 className="font-geist text-[20px] font-semibold text-[#110229] mb-6 tracking-tight">{step.title}</h4>
                     <BodyText>{step.copy}</BodyText>
                  </div>
               </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-24 flex justify-center">
           <PrimaryCTA variant="secondary" className="px-16 h-[56px] rounded-[8px]" onClick={() => openModal('Step-by-Step Plan', 'generic')}>
              Plan My Switch
           </PrimaryCTA>
        </FadeIn>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 5 — SUPPORTING TELCO SERVICES
   ───────────────────────────────────────────────────────── */
const SupportingServices = ({ openModal }: { openModal: (name: string, type: any) => void }) => {
  const services = [
    { title: "Microsoft Teams Calling", icon: <Smartphone size={18} />, copy: "Make and receive external business calls through Microsoft Teams." },
    { title: "SIP Trunks", icon: <MoveHorizontal size={18} />, copy: "Connect your phone system to the public network with flexible SIP voice." },
    { title: "VoIP Handsets", icon: <Monitor size={18} />, copy: "Business-grade desk phones and softphone options for hybrid teams." },
    { title: "4G/5G Backup", icon: <Wifi size={18} />, copy: "Add backup connectivity so your business has a fallback if main fiber drops." },
    { title: "Managed Routers", icon: <Server size={18} />, copy: "Routers configured and managed for your business internet environment." },
    { title: "Relocation Support", icon: <Globe size={18} />, copy: "Plan internet and phone services when opening or relocating a site." }
  ];

  return (
    <section className="py-24 md:py-40 bg-white">
      <div className={C}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
           <div className="max-w-2xl">
              <FadeIn>
                <span className="font-inter text-[12px] font-bold uppercase tracking-[0.2em] text-[#9747FF] mb-6 block">Supporting Services</span>
                <SectionHeading className="mb-8">Practical Extras for Your Setup</SectionHeading>
                <BodyText>
                  Once your core phones and internet are in place, we can help with the additional pieces that make your environment easier to manage.
                </BodyText>
              </FadeIn>
           </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {services.map((service, i) => (
             <FadeIn key={i} delay={i * 0.05}>
                <div className="p-8 rounded-[8px] bg-[#F9F9F9] border border-[#D9D9D9] hover:bg-white hover:shadow-[rgba(73,69,80,0.12)_0px_4px_20px_0px] transition-all duration-300 group cursor-pointer" onClick={() => openModal(service.title, 'generic')}>
                   <div className="flex items-center gap-5 mb-6">
                      <div className="w-10 h-10 rounded-[6px] bg-white flex items-center justify-center text-[#5B0DD5] shadow-sm group-hover:bg-[#5B0DD5] group-hover:text-white transition-all">
                         {service.icon}
                      </div>
                      <h4 className="font-geist text-[16px] font-semibold text-[#110229]">{service.title}</h4>
                   </div>
                   <BodyText className="text-[13px]">{service.copy}</BodyText>
                </div>
             </FadeIn>
           ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 6 — SCENARIOS (Synthflow Use-Case Style)
   ───────────────────────────────────────────────────────── */
const SectionScenarios = ({ openModal }: { openModal: (name: string, type: any) => void }) => {
  const scenarios = [
    { 
      title: "Our business is growing quickly.", 
      tag: "Growth", 
      tagColor: "#9747FF",
      copy: "Move from basic internet and old phone systems to a setup that supports more staff, more calls and multiple locations.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "We are opening another site.", 
      tag: "Expansion", 
      tagColor: "#00C8A3",
      copy: "Get phones, internet and setup coordinated properly before the new location goes live.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "We want support that actually helps.", 
      tag: "Service", 
      tagColor: "#DD00A4",
      copy: "Talk to a local team that understands your setup and stays involved after installation.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-[#FAF9FE]">
      <div className={C}>
        <div className="max-w-3xl mb-20">
          <FadeIn>
            <span className="font-inter text-[12px] font-bold uppercase tracking-[0.2em] text-[#9747FF] mb-6 block">BUSINESS MOMENTS</span>
            <SectionHeading className="mb-8">Where C9 Makes Business Telco Easier</SectionHeading>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {scenarios.map((scenario, i) => (
             <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-[8px] overflow-hidden border border-[#D9D9D9] shadow-[rgba(73,69,80,0.12)_0px_4px_20px_0px] group cursor-pointer" onClick={() => openModal(scenario.title, 'generic')}>
                   <div className="h-56 overflow-hidden relative">
                      <img src={scenario.image} alt={scenario.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-4 left-4">
                         <span className="px-3 py-1 rounded-[6px] text-white text-[12px] font-bold font-inter" style={{ backgroundColor: scenario.tagColor }}>
                            {scenario.tag}
                         </span>
                      </div>
                   </div>
                   <div className="p-8">
                      <h4 className="font-geist text-[18px] font-medium text-[#110229] mb-4">{scenario.title}</h4>
                      <BodyText className="mb-8">{scenario.copy}</BodyText>
                      <PrimaryCTA variant="ghost" className="w-full justify-between px-0 hover:bg-transparent">
                         <span>Learn more</span>
                         <ArrowRight size={16} />
                      </PrimaryCTA>
                   </div>
                </div>
             </FadeIn>
           ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 7 — SUPPORT BANNER
   ───────────────────────────────────────────────────────── */
const SectionBanner = ({ openModal }: { openModal: (name: string, type: any) => void }) => (
  <section className="py-24 md:py-40 bg-white">
    <div className={C}>
       <div className="bg-[#110229] rounded-[12px] overflow-hidden flex flex-col lg:flex-row items-center shadow-2xl">
          <div className="p-10 md:p-20 flex-1">
             <FadeIn>
                <span className="text-[#00C8A3] font-inter text-[12px] font-bold uppercase tracking-[0.2em] mb-8 block">ACCOUNTABILITY</span>
                <h2 className="font-geist text-[36px] md:text-[52px] text-white font-normal leading-tight mb-10 tracking-tight">
                   Ongoing Support That Keeps Things Running Properly
                </h2>
                <BodyText dark className="mb-12 text-lg">
                   We believe that support matters just as much after your phones and internet are installed. We stay involved to ensure your setup remains reliable.
                </BodyText>
                <PrimaryCTA variant="secondary" className="px-12" onClick={() => openModal('Support Banner CTA', 'generic')}>
                   Talk to C9
                </PrimaryCTA>
             </FadeIn>
          </div>
          <div className="hidden lg:block w-1/3 self-stretch relative">
             <img 
               src="/Enterprise Ethernet_Telco.png" 
               alt="C9 Support" 
               className="absolute inset-0 w-full h-full object-cover opacity-50"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#110229] via-[#110229]/40 to-transparent" />
          </div>
       </div>
    </div>
  </section>
);

const telcoFaqs = [
  { q: "What telco services does C9 provide?", a: "We provide modern business essentials including cloud phone systems, Business nbn, Fibre, Enterprise Ethernet and AI Voice." },
  { q: "Can you help us switch providers?", a: "Yes. We take the stress out of switching. We review your current environment and manage the transition smoothly." },
  { q: "Do you support modern phone systems?", a: "Yes. We set up phone systems for office and mobile teams, with features like intelligent routing and Teams integration." },
  { q: "Which internet connection is right for us?", a: "Depends on your workflow. We'll recommend Business nbn for everyday reliability, or Fibre for high capacity needs." },
  { q: "How can AI Voice help my team?", a: "AI Voice acts as a digital assistant, handling missed calls and triaging enquiries so your team can focus on core work." },
  { q: "Can we keep our phone numbers?", a: "In almost every case, yes. We manage the porting process as part of your switch." }
];

/* ─────────────────────────────────────────────────────────
   SECTION 8 — FAQ
   ───────────────────────────────────────────────────────── */
const SectionFAQ = () => (
  <section className="py-24 md:py-40 bg-[#FAF9FE]">
    <div className={C}>
       <div className="max-w-3xl mb-20">
          <FadeIn>
             <span className="font-inter text-[12px] font-bold uppercase tracking-[0.2em] text-[#9747FF] mb-6 block">FAQ</span>
             <SectionHeading className="mb-8">Frequently Asked Questions</SectionHeading>
          </FadeIn>
       </div>
       
       <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {telcoFaqs.map((faq, i) => (
             <FadeIn key={i} delay={i * 0.05}>
                <div className="space-y-4">
                   <h4 className="font-geist text-[18px] font-semibold text-[#110229] tracking-tight">{faq.q}</h4>
                   <BodyText>{faq.a}</BodyText>
                </div>
             </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   FINAL CTA / FORM (Synthflow Redesign)
   ───────────────────────────────────────────────────────── */
const FinalCTA = () => {
   const [formData, setFormData] = useState({
     firstName: '',
     lastName: '',
     email: '',
     organisation: '',
     message: '',
     service: 'Not Sure Yet'
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSuccess, setIsSuccess] = useState(false);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setTimeout(() => {
         setIsSuccess(true);
         setIsSubmitting(false);
      }, 1500);
   };

   if (isSuccess) {
      return (
         <section className="py-24 md:py-40 bg-[#110229] text-white">
            <div className={C}>
               <div className="max-w-3xl mx-auto text-center">
                  <div className="w-20 h-20 bg-[#9747FF] rounded-[12px] flex items-center justify-center mb-10 mx-auto shadow-2xl shadow-[#9747FF]/40">
                     <Check size={40} strokeWidth={3} />
                  </div>
                  <SectionHeading dark className="mb-8">Thanks for Reaching Out</SectionHeading>
                  <BodyText dark className="mb-12 text-lg">
                     We’ve got your details. A C9 engineer will review your requirements and get back to you within 2 hours with a clear, honest plan.
                  </BodyText>
                  <PrimaryCTA variant="secondary" onClick={() => setIsSuccess(false)} className="px-12 mx-auto">
                     Send Another Request
                  </PrimaryCTA>
               </div>
            </div>
         </section>
      );
   }

   return (
     <section className="py-24 md:py-40 bg-[#F2EFFE]">
       <div className={C}>
         <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="lg:sticky lg:top-32">
               <FadeIn>
                  <span className="font-inter text-[12px] font-bold uppercase tracking-[0.2em] text-[#9747FF] mb-8 block">CONTACT</span>
                  <SectionHeading className="mb-10 !text-[48px] md:!text-[60px]">Ready to Get Started?</SectionHeading>
                  <BodyText className="mb-12 text-lg max-w-lg">
                    Tell us about your current phone system or internet setup. We’ll help you work out the right way forward and keep things clear and practical.
                  </BodyText>
                  
                  <div className="space-y-8">
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-[#110229] flex items-center justify-center text-white shrink-0">
                           <PhoneCall size={20} />
                        </div>
                        <p className="font-geist text-[24px] font-semibold text-[#110229]">1800 000 299</p>
                     </div>
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-white border border-[#D9D9D9] flex items-center justify-center text-[#9747FF] shrink-0">
                           <ShieldCheck size={20} />
                        </div>
                        <p className="font-inter text-[14px] font-bold text-[#110229]/60 uppercase tracking-widest">No Jargon. Direct Support.</p>
                     </div>
                  </div>
               </FadeIn>
            </div>

            <FadeIn delay={0.2}>
               <div className="bg-white rounded-[12px] p-10 md:p-16 shadow-[rgba(0,0,0,0.1)_0px_20px_50px_-12px] border border-[#D9D9D9]">
                  <h3 className="font-geist text-[24px] font-medium text-[#110229] mb-10">Start the conversation</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                     <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                           <label className="font-inter text-[14px] font-bold text-[#110229] block">First Name</label>
                           <input 
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="w-full h-[48px] px-4 rounded-[12px] border border-[#D9D9D9] bg-[#F9F9F9] focus:bg-white focus:border-[#5B0DD5] outline-none transition-all font-inter text-[14px]"
                              placeholder="John"
                           />
                        </div>
                        <div className="space-y-3">
                           <label className="font-inter text-[14px] font-bold text-[#110229] block">Last Name</label>
                           <input 
                              name="lastName"
                              required
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="w-full h-[48px] px-4 rounded-[12px] border border-[#D9D9D9] bg-[#F9F9F9] focus:bg-white focus:border-[#5B0DD5] outline-none transition-all font-inter text-[14px]"
                              placeholder="Doe"
                           />
                        </div>
                     </div>
                     
                     <div className="space-y-3">
                        <label className="font-inter text-[14px] font-bold text-[#110229] block">Work Email</label>
                        <input 
                           name="email"
                           type="email"
                           required
                           value={formData.email}
                           onChange={handleInputChange}
                           className="w-full h-[48px] px-4 rounded-[12px] border border-[#D9D9D9] bg-[#F9F9F9] focus:bg-white focus:border-[#5B0DD5] outline-none transition-all font-inter text-[14px]"
                           placeholder="john@company.com.au"
                        />
                     </div>

                     <div className="space-y-3">
                        <label className="font-inter text-[14px] font-bold text-[#110229] block">Organisation</label>
                        <input 
                           name="organisation"
                           required
                           value={formData.organisation}
                           onChange={handleInputChange}
                           className="w-full h-[48px] px-4 rounded-[12px] border border-[#D9D9D9] bg-[#F9F9F9] focus:bg-white focus:border-[#5B0DD5] outline-none transition-all font-inter text-[14px]"
                           placeholder="Your company name"
                        />
                     </div>

                     <div className="space-y-3">
                        <label className="font-inter text-[14px] font-bold text-[#110229] block">What do you need help with?</label>
                        <textarea 
                           name="message"
                           required
                           value={formData.message}
                           onChange={handleInputChange}
                           rows={4}
                           className="w-full p-4 rounded-[12px] border border-[#D9D9D9] bg-[#F9F9F9] focus:bg-white focus:border-[#5B0DD5] outline-none transition-all font-inter text-[14px] resize-none"
                           placeholder="Tell us about your current setup..."
                        />
                     </div>

                     <PrimaryCTA variant="secondary" className="w-full h-[56px] text-lg rounded-[8px] mt-10">
                        {isSubmitting ? "Sending..." : "Request My Telco Quote"}
                     </PrimaryCTA>
                     
                     <p className="text-center font-inter text-[12px] text-[#595959] mt-6">
                        No confusing jargon. No pressure. Just clear, engineered advice.
                     </p>
                  </form>
               </div>
            </FadeIn>
         </div>
       </div>
     </section>
   );
};

export default function TelcoPageRedesign() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState({ name: '', type: 'generic' as any });

  const openModal = (name: string, type: 'phone' | 'internet' | 'ai' | 'generic') => {
    setActiveProduct({ name, type });
    setModalOpen(true);
  };

  return (
    <main className="bg-white selection:bg-[#9747FF]/10 selection:text-[#9747FF]">
      <Hero openModal={openModal} />
      <RelianceStrip />
      <CoreProducts openModal={openModal} />
      <SectionApproach openModal={openModal} />
      <SectionHowItWorks openModal={openModal} />
      <SupportingServices openModal={openModal} />
      <SectionScenarios openModal={openModal} />
      <SectionBanner openModal={openModal} />
      <SectionFAQ />
      <FinalCTA />

      <TelcoProductModal 
        isOpen={modalOpen} 
        onOpenChange={setModalOpen} 
        productName={activeProduct.name} 
        productType={activeProduct.type} 
      />
    </main>
  );
}
