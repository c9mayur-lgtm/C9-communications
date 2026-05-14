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
  Globe,
  Target,
  Mic,
  Router
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
import { WpSupport } from '@/components/wordpress/WpSupport';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
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

const C = "container mx-auto px-6 md:px-8 max-w-[1240px]";

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

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO
   ───────────────────────────────────────────────────────── */
const Hero = ({ openModal }: { openModal: (name: string, type: any) => void }) => (
  <section className="relative overflow-hidden bg-white pt-8 pb-12 lg:pt-16 lg:pb-20">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />

    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12 items-start">
        <div className="order-last lg:order-first">
          <FadeIn>
            <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-8">
              <span className="c9-eyebrow !mb-0 text-[#5D00D6]">BUSINESS PHONES AND INTERNET</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-8 text-slate-900">
              Business Phones and Internet, Managed Properly.
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="c9-body mb-10 max-w-[480px] text-slate-700 text-base leading-relaxed space-y-4">
              <p>
                We help Australian businesses set up and manage the phone systems and internet services their teams rely on every day. 
              </p>
              <p>
                Instead of dealing with multiple providers and disconnected setups, you get one local team that takes accountability for your full environment — from installation to ongoing support.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <C9Button 
                size="lg" 
                className="rounded-full shadow-xl shadow-purple-900/10 h-14 px-10"
                onClick={() => openModal('Telco Consultation Request', 'generic')}
              >
                Talk to C9
              </C9Button>
              <C9Button 
                asChild
                variant="outline"
                size="lg" 
                className="rounded-full border-2 border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all h-14 px-10"
              >
                <a href="#core-products">See Our Services</a>
              </C9Button>
            </div>
          </FadeIn>

        </div>

        <FadeIn delay={0.4} direction="right" className="relative order-first lg:order-last">
           <div className="relative w-full">
             <img 
               src="/Telco hero banner.png" 
               alt="C9 Telco Services Hero" 
               className="w-full h-auto block"
             />
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
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
      goodFor: [
        "Replacing outdated office phones",
        "Supporting remote and hybrid teams",
        "Professional call routing",
        "Better customer call handling",
        "Managing multiple sites easily"
      ],
      cta: "Upgrade My Phone System",
      icon: <PhoneCall className="text-[#5D00D6]" size={28} />
    },
    {
      title: "Business nbn",
      type: 'internet' as const,
      link: '/telco/business-nbn',
      description: "Business internet your team can actually rely on. We help you choose the right Business nbn connection based on where you are and what your business needs to get done every day.",
      goodFor: [
        "Small and growing businesses",
        "Offices, clinics, shops and warehouses",
        "Dependable day-to-day connectivity",
        "Using cloud tools and apps smoothly",
        "Businesses wanting local support"
      ],
      cta: "Check nbn Options",
      icon: <Wifi className="text-[#5D00D6]" size={28} />
    },
    {
      title: "Fast Fibre",
      type: 'internet' as const,
      link: '/telco/fast-fibre',
      description: "High-speed internet for businesses ready to move beyond basic connections. Ideal for teams that need faster uploads, reliable video meetings and better performance across cloud platforms.",
      goodFor: [
        "Growing teams",
        "Heavy cloud and video usage",
        "Faster upload and download needs",
        "Critical online business systems",
        "Moving beyond standard internet"
      ],
      cta: "Upgrade to Fast Fibre",
      icon: <Zap className="text-[#5D00D6]" size={28} />
    },
    {
      title: "Enterprise Ethernet",
      type: 'internet' as const,
      link: '/telco/enterprise-ethernet',
      description: "Business-grade connectivity for larger offices and companies with high connectivity demands. Scalable, dependable and built for organisations that cannot afford to go offline.",
      goodFor: [
        "Larger offices and operations",
        "Multi-site business connectivity",
        "Critical cloud requirements",
        "Scalable high-speed bandwidth",
        "Total connectivity reliability"
      ],
      cta: "Discuss My Ethernet Options",
      icon: <Network className="text-[#5D00D6]" size={28} />
    },
    {
      title: "AI Voice",
      type: 'ai' as const,
      link: '/telco/voice-ai',
      description: "Reduce missed calls and handle customer enquiries smarter. AI Voice helps busy teams manage call overflow, triage enquiries and support customers after hours or during peak periods.",
      goodFor: [
        "Busy reception and support teams",
        "Reducing missed customer calls",
        "Handling after-hours enquiries",
        "Smarter call triage and routing",
        "Supporting staff during peak times"
      ],
      cta: "Explore AI Voice",
      icon: <Mic2 className="text-[#5D00D6]" size={28} />
    }
  ];

  return (
    <section id="core-products" className="py-20 md:py-32 bg-slate-50 border-y border-slate-100">
      <div className={C}>
        <div className="max-w-3xl mb-16 md:mb-24">
          <FadeIn>
            <span className="c9-eyebrow mb-4 block">Our Telco Services</span>
            <h2 className="c9-section-heading mb-6">Business Phone and Internet Services Built Around Your Team</h2>
            <p className="c9-body text-lg">
              We help you choose and install the services that actually fit your business—whether it's a simple office phone system, high-speed business internet, or AI-assisted call handling.
            </p>
          </FadeIn>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 -mx-6 px-6 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {products.map((product, i) => (
            <FadeIn key={i} delay={i * 0.1} className="w-[85vw] md:w-auto shrink-0 snap-center flex h-full">
              <div className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#5D00D6]/20 transition-all duration-500 flex flex-col w-full group h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {product.icon}
                </div>
                
                {/* Product Specific Mini Visuals */}
                {product.type === 'phone' && <PhoneSystemVisual />}
                {product.title === 'Business nbn' && <InternetVisual />}
                {product.title === 'Fast Fibre' && <FibreVisual />}
                {product.title === 'Enterprise Ethernet' && <EthernetVisual />}
                {product.type === 'ai' && <AIVoiceVisual />}

                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-clash">{product.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-8 flex-grow">{product.description}</p>
                
                <div className="mb-10">
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-5">Good for:</p>
                   <ul className="space-y-3">
                      {product.goodFor.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                          <span className="text-[13px] font-bold text-slate-700">{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>

                {product.link ? (
                  <C9Button 
                    asChild
                    variant="outline" 
                    className="w-full rounded-full border-2 border-slate-200 hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all h-14"
                  >
                    <Link href={product.link}>{product.cta}</Link>
                  </C9Button>
                ) : (
                  <C9Button 
                    variant="outline" 
                    className="w-full rounded-full border-2 border-slate-200 hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all h-14"
                    onClick={() => openModal(product.title, product.type)}
                  >
                    {product.cta}
                  </C9Button>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-16 flex justify-center">
              <C9Button size="lg" className="rounded-full shadow-2xl shadow-purple-900/20 px-10 h-15 group" onClick={() => openModal('Telco Health Check Request', 'generic')}>
                Compare My Options <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </C9Button>
        </FadeIn>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 3 — WHY BUSINESSES COME TO C9
   ───────────────────────────────────────────────────────── */
const SectionPains = ({ openModal }: { openModal: (name: string, type: any) => void }) => {
  const pains = [
    { title: "Internet and phones feel disconnected", copy: "Calls drop, support becomes confusing and different providers point fingers instead of solving the problem." },
    { title: "Support disappears after setup", copy: "Businesses are tired of being left alone once the installation is complete." },
    { title: "Old phone systems slow teams down", copy: "Outdated business phones create poor customer experiences and make growth harder to manage." },
    { title: "Business internet cannot keep up", copy: "Slow speeds and unreliable internet start affecting calls, cloud apps, meetings and day-to-day work." },
    { title: "Too many providers to deal with", copy: "Internet, phones, Microsoft 365 and support are spread across different companies with no one taking ownership." },
    { title: "New sites become stressful", copy: "Opening another office, warehouse or shop should not turn into a telco coordination nightmare." }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className={C}>
        <div className="max-w-3xl mb-16 md:mb-24">
          <FadeIn>
            <span className="c9-eyebrow mb-4 block">THE C9 APPROACH</span>
            <h2 className="c9-section-heading mb-6">Why Businesses Work With C9</h2>
            <p className="c9-body text-lg">
              Most businesses come to us because their current phone and internet setup has become hard to manage. We keep things clear, practical, and focused on your day-to-day workflow.
            </p>
          </FadeIn>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 gap-6 md:grid-cols-2 lg:grid-cols-3 -mx-6 px-6 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {pains.map((pain, i) => (
            <FadeIn key={i} delay={i * 0.05} className="w-[85vw] md:w-auto shrink-0 snap-center h-full">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-red-500/20 transition-all group h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-red-500">
                   <ShieldAlert size={24} />
                </div>
                <h3 className="text-[18px] font-bold text-slate-900 mb-4 font-clash">{pain.title}</h3>
                <p className="text-slate-600 text-[14px] leading-relaxed">{pain.copy}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
           <ProblemSolutionVisual />
        </FadeIn>

        <FadeIn delay={0.4} className="mt-16 flex justify-center">
           <C9Button size="lg" className="rounded-full shadow-2xl shadow-purple-900/20 px-12 h-15" onClick={() => openModal('General Telco Consultation', 'generic')}>
              Talk to C9 About My Setup
           </C9Button>
        </FadeIn>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 4 — PHONE SYSTEM + INTERNET TOGETHER
   ───────────────────────────────────────────────────────── */
const SectionUnified = ({ openModal }: { openModal: (name: string, type: any) => void }) => (
  <section className="py-12 md:py-16 bg-[#0c1024] text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5D00D6]/10 blur-[120px] rounded-full -mr-32 -mt-32" />
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow !text-[#a56eff] mb-4 block">ONE MANAGED SETUP</span>
          <h2 className="c9-section-heading !text-white mb-8">Unified Telco Services for Busy Teams</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            A business phone system is only as reliable as the internet behind it. We look at your full setup — phones, internet, routers and backup connections — so everything works properly from day one.
            <br /><br />
            Dealing with multiple providers usually makes support slower and more confusing. We help you choose, install and support the services your business actually relies on, all under one roof.
          </p>
          <C9Button size="lg" className="rounded-full bg-[#5D00D6] hover:bg-[#4c00b0] text-white h-15 px-10" onClick={() => openModal('Full Telco Environment Review', 'generic')}>
            Talk to C9
          </C9Button>
          

        </FadeIn>

        <div className="space-y-6">
          {[
            { title: "For calls", copy: "Cloud phone systems, business numbers, call routing, voicemail and Microsoft Teams Calling that actually works.", icon: <PhoneCall size={24} /> },
            { title: "For internet", copy: "Business nbn, Fast Fibre, Enterprise Ethernet and backup connections planned for your specific site.", icon: <Globe size={24} /> },
            { title: "For growth", copy: "Support for new sites, remote teams and businesses tired of their current provider setup.", icon: <Activity size={24} /> }
          ].map((block, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="right">
               <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] backdrop-blur-sm group hover:bg-white/10 transition-all">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[#5D00D6]/20 flex items-center justify-center text-[#a56eff] group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-500">
                      {block.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1.5 font-clash">{block.title}</h3>
                      <p className="text-white/60 text-[13px] leading-relaxed">{block.copy}</p>
                    </div>
                  </div>
               </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — SUPPORTING TELCO SERVICES
   ───────────────────────────────────────────────────────── */
const SupportingServices = ({ openModal }: { openModal: (name: string, type: any) => void }) => {
  const services = [
    { title: "Microsoft Teams Calling", type: 'phone' as const, link: '/telco/teams-calling', copy: "Make and receive external business calls through Microsoft Teams.", icon: <Smartphone size={18} /> },
    { title: "SIP Trunks", type: 'phone' as const, link: '/telco/sip-trunking', copy: "Connect your phone system to the public phone network with flexible SIP voice services.", icon: <MoveHorizontal size={18} /> },
    { title: "VoIP Handsets", type: 'phone' as const, copy: "Business-grade desk phones and softphone options for office, remote and hybrid teams.", icon: <Monitor size={18} /> },
    { title: "Number Porting", type: 'phone' as const, copy: "Move existing business numbers to your new phone system where possible.", icon: <ArrowRight size={18} /> },
    { title: "4G/5G Backup", type: 'internet' as const, icon: <Wifi size={18} />, copy: "Add backup connectivity so your business has a fallback if the main internet service drops." },
    { title: "Managed Routers", type: 'internet' as const, copy: "Routers configured, managed and supported for your business internet environment.", icon: <Server size={18} /> },
    { title: "Multi-Site Connectivity", type: 'internet' as const, copy: "Standardise phone and internet services across multiple offices, branches or locations.", icon: <Layers size={18} /> },
    { title: "Telco Relocation Support", type: 'generic' as const, copy: "Plan internet and phone services when opening, relocating or expanding a business site.", icon: <Globe size={18} /> },
    { title: "Business Mobile", type: 'generic' as const, link: '/telco/mobile-plans', copy: "Mobile connectivity options to support staff, sites and business continuity.", icon: <Smartphone size={18} /> }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className={C}>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 md:mb-24 gap-6">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="c9-eyebrow mb-4 block">Supporting Services</span>
              <h2 className="c9-section-heading mb-6">Practical Extras for Your Setup</h2>
              <p className="c9-body text-lg">
                Once your core phones and internet are in place, we can help with the additional pieces that make your environment easier to manage.
              </p>
            </FadeIn>
          </div>
          <div className="flex gap-3 sm:hidden mb-2">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-colors" aria-label="Scroll left"><ChevronLeft size={20}/></button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-colors" aria-label="Scroll right"><ChevronRight size={20}/></button>
          </div>
        </div>

        <div ref={scrollRef} className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-8 sm:pb-0 gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 -mx-6 px-6 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth">
          {services.map((service, i) => {
            const content = (
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:bg-white hover:border-[#5D00D6]/20 hover:shadow-lg transition-all duration-300 group flex flex-col gap-3 cursor-pointer h-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-900 font-clash">{service.title}</h3>
                </div>
                <p className="text-slate-600 text-[13px] leading-relaxed font-medium flex-grow">{service.copy}</p>
              </div>
            );

            return (
              <FadeIn key={i} delay={i * 0.04} className="w-[85vw] sm:w-auto shrink-0 snap-center h-full">
                {service.link ? (
                  <Link href={service.link} className="block h-full outline-none">
                    {content}
                  </Link>
                ) : (
                  <div onClick={() => openModal(service.title, service.type)} className="h-full">
                    {content}
                  </div>
                )}
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.4} className="mt-16 flex justify-center">
           <C9Button variant="outline" className="rounded-full border-2 border-slate-200 hover:border-[#5D00D6] hover:text-[#5D00D6] px-10 h-14" onClick={() => openModal('Additional Telco Services', 'generic')}>
              Ask C9 About Other Services
           </C9Button>
        </FadeIn>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 6 — HOW IT WORKS
   ───────────────────────────────────────────────────────── */
const SectionHowItWorks = ({ openModal }: { openModal: (name: string, type: any) => void }) => {
  const steps = [
    { title: "Telco Review", copy: "We look at your current phones, internet, business numbers and site requirements to see where the bottlenecks are." },
    { title: "Practical Advice", copy: "We recommend the right mix of phones, internet and AI voice that fits your team size and how you actually work." },
    { title: "Setup & Migration", copy: "We handle the hard parts — coordination, number porting, router setup and making sure everything goes live smoothly." },
    { title: "Local Support", copy: "Once you're live, we're here to help with responsive service and practical support whenever your team needs it." }
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
      <div className={C}>
        <div className="max-w-3xl mb-16 md:mb-24">
          <FadeIn>
            <span className="c9-eyebrow mb-4 block">HOW IT WORKS</span>
            <h2 className="c9-section-heading mb-6">Straightforward Advice from a Local Team</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="relative">
                  <div className="text-[64px] font-black text-[#5D00D6]/5 absolute -top-8 -left-2 select-none" aria-hidden="true">0{i+1}</div>
                  <div className="relative z-10">
                     <h4 className="text-xl font-bold text-slate-900 mb-4 font-clash">{step.title}</h4>
                     <p className="text-slate-600 text-[14px] leading-relaxed">{step.copy}</p>
                  </div>
               </div>
            </FadeIn>
          ))}
        </div>



        <FadeIn delay={0.4} className="mt-16 flex justify-center">
           <C9Button size="lg" className="rounded-full shadow-2xl shadow-purple-900/20 px-12 h-15" onClick={() => openModal('Initial Telco Review', 'generic')}>
              Plan My Switch
           </C9Button>
        </FadeIn>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 7 — CUSTOMER SCENARIOS
   ───────────────────────────────────────────────────────── */
const SectionScenarios = ({ openModal }: { openModal: (name: string, type: any) => void }) => {
  const scenarios = [
    { title: "Our business is growing quickly.", type: 'phone' as const, link: '/telco/phone-system', image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=800", copy: "Move from basic internet and old phone systems to a setup that supports more staff, more calls and multiple locations.", cta: "Upgrade My Phone System" },
    { title: "We are opening another site.", type: 'internet' as const, link: '/telco/business-nbn', image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800", copy: "Get phones, internet and setup coordinated properly before the new location goes live.", cta: "Plan a New Site" },
    { title: "We keep missing customer calls.", type: 'ai' as const, link: '/telco/voice-ai', image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", copy: "Improve call routing, overflow handling and response management with C9 Phone System and AI Voice.", cta: "Explore AI Voice" },
    { title: "We are tired of provider confusion.", type: 'generic' as const, image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800", copy: "Bring your internet, phones and support together under one managed setup.", cta: "Help Me Switch" },
    { title: "We need internet our team can rely on.", type: 'internet' as const, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", copy: "Choose Business nbn, Fast Fibre or Enterprise Ethernet based on how your business actually works.", cta: "Check My Options" },
    { title: "We want support that actually helps.", type: 'generic' as const, image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800", copy: "Talk to a local team that understands your setup and stays involved after installation.", cta: "Talk to C9" }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className={C}>
        <div className="max-w-3xl mb-16 md:mb-24">
          <FadeIn>
            <span className="c9-eyebrow mb-4 block">BUSINESS MOMENTS</span>
            <h2 className="c9-section-heading mb-6">Where C9 Makes Business Telco Easier</h2>
          </FadeIn>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 -mx-6 px-6 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {scenarios.map((scenario, i) => (
            <FadeIn key={i} delay={i * 0.05} className="w-[85vw] md:w-auto shrink-0 snap-center flex h-full">
               <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col h-full hover:bg-white hover:shadow-xl hover:border-[#5D00D6]/20 transition-all duration-300 overflow-hidden group w-full">
                  <div className="-mx-8 -mt-8 mb-6 h-48 overflow-hidden relative">
                    <img src={scenario.image} alt={scenario.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent opacity-50" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-clash relative z-10">{scenario.title}</h3>
                  <p className="text-slate-600 text-[14px] leading-relaxed mb-8 flex-grow relative z-10">{scenario.copy}</p>
                  {scenario.link ? (
                    <C9Button asChild variant="outline" className="w-full rounded-full border-2 border-slate-200 group-hover:border-[#5D00D6] group-hover:text-[#5D00D6] relative z-10">
                       <Link href={scenario.link}>{scenario.cta}</Link>
                    </C9Button>
                  ) : (
                    <C9Button variant="outline" className="w-full rounded-full border-2 border-slate-200 group-hover:border-[#5D00D6] group-hover:text-[#5D00D6] relative z-10" onClick={() => openModal(scenario.title, scenario.type)}>
                       {scenario.cta}
                    </C9Button>
                  )}
               </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 8 — WHY CHOOSE C9 OVER A STANDARD TELCO
   ───────────────────────────────────────────────────────── */
const SectionComparison = ({ openModal }: { openModal: (name: string, type: any) => void }) => (
  <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
    <div className={C}>
      <div className="max-w-3xl mb-16 md:mb-24 mx-auto text-center">
        <FadeIn>
          <span className="c9-eyebrow mb-4 block">HOW C9 SUPPORTS YOUR BUSINESS</span>
          <h2 className="c9-section-heading mb-6">One Team for Phones, Internet and Support</h2>
          <p className="c9-body text-lg">
            Most providers sell you a connection and leave the rest to you. We take a more practical approach, managing the lot so you can focus on your business.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <FadeIn direction="left">
           <div className="bg-white p-10 rounded-[40px] border border-slate-200 h-full">
              <h3 className="text-2xl font-bold text-slate-400 mb-10 font-clash">Without C9</h3>
              <ul className="space-y-6">
                 {[
                   "Different providers blaming each other",
                   "Slow responses during issues",
                   "Messy phone and internet setups",
                   "Hard-to-manage business communication",
                   "Frustrating migrations and upgrades",
                   "Constant provider confusion"
                 ].map((point, i) => (
                   <li key={i} className="flex items-start gap-4 text-slate-500">
                      <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                         <Plus size={10} className="rotate-45" />
                      </div>
                      <span className="text-[15px] font-medium">{point}</span>
                   </li>
                 ))}
              </ul>
           </div>
        </FadeIn>

        <FadeIn direction="right">
           <div className="bg-[#0c1024] p-10 rounded-[40px] text-white h-full relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/20 blur-[80px] -mr-32 -mt-32 rounded-full" />
              <h3 className="text-2xl font-bold text-white mb-10 font-clash">With C9</h3>
              <ul className="space-y-6">
                 {[
                   "One team managing the setup",
                   "Phones and internet planned together",
                   "Clear support and communication",
                   "Easier upgrades and business growth",
                   "Better visibility during changes",
                   "Ongoing support after setup"
                 ].map((point, i) => (
                   <li key={i} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full bg-[#5D00D6] flex items-center justify-center shrink-0 mt-0.5 text-white">
                         <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-[15px] font-bold text-white/90">{point}</span>
                   </li>
                 ))}
              </ul>
              <div className="mt-12 pt-10 border-t border-white/10">
                <p className="text-xl font-bold text-[#a56eff] font-clash">Less provider chaos. More confidence in your setup.</p>
              </div>
           </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.4}>
         <ComparisonStackVisual />
      </FadeIn>

      <FadeIn delay={0.4} className="mt-16 flex justify-center">
         <C9Button size="lg" className="rounded-full shadow-2xl shadow-purple-900/20 px-12 h-15" onClick={() => openModal('C9 Telco Advantage Inquiry', 'generic')}>
            Get My Setup Reviewed
         </C9Button>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — TRUST / LOCAL BUSINESS SUPPORT
   ───────────────────────────────────────────────────────── */
const SectionTrust = ({ openModal }: { openModal: (name: string, type: any) => void }) => (
  <section className="py-20 md:py-32 bg-white">
    <div className={C}>
      <div className="text-center mb-16">
         <FadeIn>
            <span className="c9-eyebrow mb-4 block">COMMERCIAL SUPPORT</span>
            <h2 className="c9-section-heading mb-6">From Small Teams to Multi-Site Organisations</h2>
         </FadeIn>
      </div>



      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
         <FadeIn direction="left">
            <p className="c9-body text-xl leading-relaxed text-slate-800 mb-10 font-medium">
              We help businesses of all sizes establish the right connectivity. Whether you are a small team needing reliability or a growing organisation with multiple sites, we build a setup that fits.
            </p>
             <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  "Coordinated phones and internet",
                  "Support for hybrid and office teams",
                  "Clear switching assistance",
                  "Local Australian-based support",
                  "Honest advice before you commit",
                  "Ongoing service after setup"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                     <CheckCircle size={16} className="text-[#5D00D6] shrink-0" />
                     <span className="text-[14px] font-bold text-slate-700">{point}</span>
                  </div>
                ))}
             </div>
             <div className="mt-12 pt-8 border-t border-slate-100">
               <p className="text-slate-600 italic">"We focus on building setups that support your growth, without the unnecessary complexity."</p>
               <C9Button size="lg" className="mt-8 rounded-full bg-[#5D00D6] hover:bg-[#4c00b0] text-white h-15 px-10" onClick={() => openModal('Enterprise Telco Discussion', 'generic')}>
                 See What Fits My Business
               </C9Button>
             </div>
         </FadeIn>

         <FadeIn direction="right">
            <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3] border border-slate-100">
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
                 alt="C9 operations centre providing local Australian support"
                 className="w-full h-full object-cover"
               />
            </div>
         </FadeIn>
      </div>
    </div>
  </section>
);

const telcoFaqs = [
  { q: "What telco services does C9 provide?", a: "We provide modern business essentials including cloud phone systems, Business nbn, Fibre, Enterprise Ethernet and AI Voice. We also handle the technical layers like Teams Calling, SIP trunks, and managed router setups." },
  { q: "Can you help us switch providers?", a: "Yes. We take the stress out of switching. We review your current environment, manage the transition and ensure everything is working correctly before we retire your old services." },
  { q: "Do you support modern phone systems?", a: "Yes. We set up phone systems for office and mobile teams, with all the features you'd expect—like intelligent routing, voicemail-to-email and Microsoft Teams integration." },
  { q: "Which internet connection is right for us?", a: "That depends on your workflow. We'll recommend Business nbn if you need everyday reliability, or Fibre/Ethernet options if your team requires high capacity and speed for cloud applications." },
  { q: "How can AI Voice help my team?", a: "AI Voice acts as a digital assistant for your business, handling missed calls and triaging enquiries so your team can focus on their core work." },
  { q: "Can we keep our phone numbers?", a: "In almost every case, yes. We manage the porting process as part of your switch to ensure you don't lose your existing identity." },
  { q: "Do you work with multi-site businesses?", a: "Absolutely. We excel at synchronising communications across multiple branches so your entire organisation feels like a single, well-connected team." },
  { q: "Is C9 suitable for small businesses?", a: "Yes, we work with Australian businesses of all sizes who want their phone and internet managed by a local team that actually cares about the outcome." }
];

/* ─────────────────────────────────────────────────────────
   SECTION 11 — FINAL CTA / FORM
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

   const services = [
     "C9 Phone System", "Business nbn", "Fast Fibre", "Enterprise Ethernet", 
     "AI Voice", "Microsoft Teams Calling", "SIP / VoIP", "4G/5G Backup", 
     "Multi-Site Connectivity", "Switching Provider", "New Site Setup", "Not Sure Yet"
   ];

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
         const { submitConsultationForm } = await import("@/app/actions/form-actions");
         const result = await submitConsultationForm({
            ...formData,
            path: `Telco: ${formData.service}`,
            message: `Service Interest: ${formData.service}\n\n${formData.message}`
         });

         if (result.success) {
            setIsSuccess(true);
         }
      } catch (error) {
         console.error('Submission error:', error);
         alert('There was an error sending your request. Please try again later.');
      } finally {
         setIsSubmitting(false);
      }
   };

   if (isSuccess) {
      return (
         <section id="consultation-section" className="py-20 md:py-32 bg-[#E4E0FD] overflow-hidden">
            <div className={C}>
               <div className="bg-white rounded-[40px] p-12 md:p-20 shadow-2xl border border-slate-100 text-center max-w-4xl mx-auto">
                  <div className="w-20 h-20 bg-[#5D00D6] rounded-3xl flex items-center justify-center text-white mb-8 mx-auto shadow-xl shadow-purple-900/20">
                     <Zap size={40} />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-clash">Thanks for Reaching Out</h2>
                  <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                     We’ve got your details. A C9 engineer is already looking into it and will get back to you within 2 hours with a clear, honest plan.
                  </p>
                  <C9Button 
                     onClick={() => setIsSuccess(false)}
                     size="lg"
                     className="rounded-full shadow-2xl shadow-purple-900/20 px-12 h-15"
                  >
                     Send Another Request
                  </C9Button>
               </div>
            </div>
         </section>
      );
   }

   return (
     <section id="consultation-section" className="py-20 md:py-32 bg-[#E4E0FD] overflow-hidden">
       <div className={C}>
         <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
            <div className="max-w-[580px]">
               <FadeIn>
                  <span className="c9-eyebrow !text-white bg-[#0c1024] px-4 py-1.5 rounded-lg mb-8 block w-fit uppercase tracking-widest text-[10px] font-bold">
                    READY TO GET STARTED?
                  </span>
                  
                  <h2 className="c9-section-heading text-[#0c1024] mb-8 !text-3xl md:!text-5xl leading-tight">
                    Get Straightforward Advice From a Local Team
                  </h2>

                  <p className="c9-body !text-[#0c1024]/70 mb-10 text-lg leading-relaxed">
                    Tell us about your current phone system or internet setup. We’ll help you work out the right way forward and keep things clear and practical from day one.
                  </p>
                  
                  <div className="mb-12">
                    <p className="text-[20px] sm:text-[24px] font-bold text-[#0c1024] font-clash">
                      Call us anytime: <a href="tel:1800000299" className="text-[#5D00D6] hover:text-[#4c00b0] transition-colors decoration-[#5D00D6]/20 underline underline-offset-8">1800 000 299</a>
                    </p>
                  </div>

                  <div className="space-y-4">
                     {[
                       { title: "No confusing telco jargon", icon: <ShieldCheck size={14} /> },
                       { title: "Response within 2 hours", icon: <Clock size={14} /> },
                       { title: "Direct talk with engineers", icon: <MessageSquare size={14} /> }
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 text-[#0c1024]/60">
                          <div className="text-[#5D00D6]">{item.icon}</div>
                          <span className="text-[12px] font-black uppercase tracking-widest">{item.title}</span>
                       </div>
                     ))}
                  </div>
               </FadeIn>
            </div>

            <FadeIn delay={0.2}>
               <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-slate-100">
                  <div className="mb-8 text-center">
                     <h3 className="text-2xl font-bold text-slate-900 mb-2 font-clash">Start the conversation</h3>
                     <p className="text-slate-500 text-sm">Tell us a bit about what your business needs.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                           <label htmlFor="firstName" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">First Name</label>
                           <input 
                              id="firstName"
                              name="firstName"
                              type="text" 
                              required
                              value={formData.firstName}
                              onChange={handleInputChange}
                              placeholder="John" 
                              className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-sm font-semibold" 
                           />
                        </div>
                        <div className="space-y-1.5">
                           <label htmlFor="lastName" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Name</label>
                           <input 
                              id="lastName"
                              name="lastName"
                              type="text" 
                              required
                              value={formData.lastName}
                              onChange={handleInputChange}
                              placeholder="Doe" 
                              className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-sm font-semibold" 
                           />
                        </div>
                     </div>
                     <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Work Email</label>
                        <input 
                           id="email"
                           name="email"
                           type="email" 
                           required
                           value={formData.email}
                           onChange={handleInputChange}
                           placeholder="john@company.com.au" 
                           className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-sm font-semibold" 
                        />
                     </div>
                     <div className="space-y-1.5">
                        <label htmlFor="organisation" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Organisation</label>
                        <input 
                           id="organisation"
                           name="organisation"
                           type="text" 
                           required
                           value={formData.organisation}
                           onChange={handleInputChange}
                           placeholder="Organisation name" 
                           className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-sm font-semibold" 
                        />
                     </div>
                     <div className="space-y-1.5">
                        <label htmlFor="service" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Required</label>
                        <select 
                           id="service"
                           name="service"
                           value={formData.service} 
                           onChange={handleInputChange}
                           className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-sm font-semibold appearance-none"
                        >
                           {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                     </div>
                     <div className="space-y-1.5">
                        <label htmlFor="message" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">What's your current setup like?</label>
                        <textarea 
                           id="message"
                           name="message"
                           required
                           value={formData.message}
                           onChange={handleInputChange}
                           placeholder="Tell us about your current phone system or internet setup..." 
                           className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#5D00D6] outline-none transition-all text-sm font-semibold min-h-[120px] resize-none" 
                        />
                     </div>
                     
                     <div className="pt-4">
                        <C9Button 
                           type="submit"
                           disabled={isSubmitting}
                           size="lg" 
                           className="w-full rounded-full shadow-2xl shadow-purple-900/30 h-15 text-lg"
                        >
                           {isSubmitting ? "Sending..." : "Request My Telco Quote"}
                        </C9Button>
                        <p className="mt-6 text-center text-[12px] font-medium text-slate-400">
                          No confusing telco language. No pressure. Just clear advice.
                        </p>
                     </div>
                  </form>
               </div>
            </FadeIn>
         </div>
       </div>
     </section>
   );
};

/* ─────────────────────────────────────────────────────────
   SECTION — SUCCESS STORIES
   ───────────────────────────────────────────────────────── */
const SectionOperationalProof = () => (
  <section className="py-10 bg-slate-50 border-y border-slate-100">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-10">
          <FadeIn>
             <span className="c9-eyebrow mb-4">Success Stories</span>
             <h2 className="c9-section-heading">Trusted by Australian Businesses</h2>
             <p className="c9-body text-slate-900 mt-6">
               Real results from real businesses who made the switch to a managed telco environment.
             </p>
          </FadeIn>
       </div>

       <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              tag: 'RETAIL', 
              title: 'Multi-Site Retail Chain', 
              desc: 'Consolidated 4 different providers across 12 locations into a single, managed SD-WAN network. Achieved 100% visibility.',
              metric: '$40K',
              metricLabel: 'Annual Savings'
            },
            { 
              tag: 'HEALTHCARE', 
              title: 'Medical Group', 
              desc: 'Replaced legacy PBX systems with Cloud Voice, enabling receptionists to work remotely and never miss a patient call.',
              metric: '99.9%',
              metricLabel: 'Uptime Achieved'
            },
            { 
              tag: 'PROFESSIONAL SERVICES', 
              title: 'National Law Firm', 
              desc: 'Upgraded to Enterprise Ethernet fibre to support heavy cloud workloads, eliminating daily bottlenecks.',
              metric: '10x',
              metricLabel: 'Speed Increase'
            }
          ].map((caseStudy, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="group bg-white p-10 rounded-3xl border border-slate-100 h-full hover:border-[#5D00D6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5 hover:-translate-y-2">
                  <span className="text-[11px] font-black text-[#5D00D6] uppercase tracking-[0.2em] mb-4 block">{caseStudy.tag}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">{caseStudy.title}</h3>
                  <p className="text-slate-900 text-[14px] leading-relaxed mb-10">{caseStudy.desc}</p>
                  <div className="flex items-center gap-4 mt-auto">
                     <div className="text-4xl font-black text-slate-900 group-hover:text-[#5D00D6] transition-colors">{caseStudy.metric}</div>
                     <div className="text-xs font-black text-slate-900 uppercase tracking-widest">{caseStudy.metricLabel}</div>
                  </div>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION — STATS BAR
   ───────────────────────────────────────────────────────── */
const SectionStats = () => (
  <section className="py-10 bg-white border-b border-slate-100">
    <div className={C}>
      <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
        {[
          { value: '1,200+', label: 'Active Lines Managed' },
          { value: '3,500+', label: 'Voice Calls Daily' },
          { value: '500+',   label: 'Business Clients' },
          { value: '10Gbps', label: 'Max Fibre Speed' },
        ].map((stat, idx) => (
          <FadeIn key={idx} delay={idx * 0.08} className="flex-1 py-8 sm:py-0 px-4 sm:px-8 first:pt-0 sm:first:pt-0 sm:first:pl-0 last:pb-0 sm:last:pb-0 sm:last:pr-0 text-center sm:text-left">
            <div className="space-y-2 sm:space-y-3">
              <div className="text-[40px] sm:text-[clamp(32px,4vw,52px)] font-normal text-[#0c1024] leading-none tracking-tight font-proxima">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#5D00D6]">
                {stat.label}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION — SWITCH STRIP
   ───────────────────────────────────────────────────────── */
const SectionStrip = ({ openModal }: { openModal: (name: string, type: any) => void }) => (
  <section className="py-6">
    <div className={`${C}`}>
      <div className="bg-[#f0ebff] rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#5D00D6]/10 shadow-sm">
      <div className="flex items-center gap-5">
        <div>
          <p className="text-[13px] font-black uppercase tracking-[0.15em] text-slate-900 mb-1">LOCAL SUPPORT & PRACTICAL ADVICE</p>
          <p className="text-[14px] text-slate-600 leading-snug max-w-xl">
            Talk to a team that actually understands business phones and internet. No confusing jargon. No endless provider loops.
          </p>
        </div>
      </div>
      <button
        onClick={() => openModal('Setup Review Request', 'generic')}
        className="shrink-0 inline-flex items-center gap-2 bg-[#0c1024] text-white text-[11px] font-black uppercase tracking-[0.2em] px-7 py-4 rounded-full hover:bg-[#5D00D6] transition-colors whitespace-nowrap shadow-md"
      >
        Talk to C9 <ArrowRight size={14} />
      </button>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 10 — FEATURE BANNER
   ───────────────────────────────────────────────────────── */
const SectionBanner = ({ openModal }: { openModal: (name: string, type: any) => void }) => (
  <section className="py-6 md:py-10 bg-white">
    <div className={C}>
      <div className="bg-[#0c1024] rounded-[32px] overflow-hidden relative min-h-[280px] flex items-center shadow-xl">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch w-full">
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center relative z-10">
            <FadeIn>
              <span className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-3 block">ACCOUNTABILITY & SUPPORT</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight font-clash">
                Ongoing Support That Keeps Things Running Properly
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
                We stay involved after installation to ensure your phones and internet remain reliable — clear communication and practical help whenever your team needs it.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <C9Button 
                  className="rounded-full px-8 bg-[#5D00D6] text-white border-none shadow-lg shadow-[#5D00D6]/20"
                  onClick={() => openModal('Post-Setup Support Inquiry', 'generic')}
                >
                  Talk to C9
                </C9Button>
              </div>
            </FadeIn>
          </div>
          <div className="relative hidden lg:block min-h-[280px]">
            <img 
              src="/Enterprise Ethernet_Telco.png" 
              alt="C9 Support" 
              className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c1024] via-[#0c1024]/40 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* 
   3. MSP POSITIONING (The Solution)
*/
const SectionMSPPositioning = () => (
  <section id="msp-positioning" className="py-10 md:py-14 bg-white overflow-hidden">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <FadeIn direction="left">
           <span className="c9-eyebrow mb-4">The Solution</span>
           <h2 className="c9-section-heading mb-6">One Accountable Partner.</h2>
           <p className="c9-body text-slate-800 mb-10 leading-relaxed">
             We consolidate your internet, phones, and communications infrastructure into a single, managed solution. If there's a problem, you call us. We fix it.
           </p>
           <div className="space-y-8">
              {[
                { 
                  title: 'One Point of Contact', 
                  icon: <Target aria-hidden="true" />, 
                  desc: 'No more waiting on hold with massive telcos. You get direct access to our Australian engineering team.' 
                },
                { 
                  title: 'Guaranteed Reliability', 
                  icon: <ShieldCheck aria-hidden="true" />, 
                  desc: 'We use enterprise-grade connections with built-in 4G/5G failover. Your business stays online.' 
                },
                { 
                  title: 'Simplified Billing', 
                  icon: <Layers aria-hidden="true" />, 
                  desc: 'One clear, predictable monthly invoice for all your locations and services.' 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                   <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] shrink-0">
                      {item.icon}
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-800 leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </FadeIn>

        <FadeIn direction="right" className="relative">
           <div className="bg-slate-900 rounded-[32px] p-12 text-white shadow-2xl relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/10 blur-3xl rounded-full" />
              <h3 className="text-2xl font-bold mb-8 text-white">Before vs. After C9</h3>
              <div className="space-y-6">
                 {[
                   { label: 'Support Numbers', before: 'Multiple', after: 'One' },
                   { label: 'Accountability', before: 'Finger-Pointing', after: 'C9 Ownership' },
                   { label: 'Issue Resolution', before: 'Days', after: 'Minutes' },
                   { label: 'Billing', before: 'Confusing', after: 'Transparent' }
                 ].map((row, i) => (
                   <div key={i} className="flex items-center justify-between pb-4 border-b border-white/10 last:border-0">
                      <span className="text-sm font-semibold text-white/95 w-1/3">{row.label}</span>
                      <span className="text-xs font-medium text-rose-300 w-1/3 text-center">{row.before}</span>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#5D00D6] text-white w-1/3 text-center">{row.after}</span>
                   </div>
                 ))}
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* 
   4. SERVICES (Offerings)
*/
const SectionOfferings = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services-section" className="py-10 bg-slate-50 border-y border-slate-100">
      <div className={C}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="c9-eyebrow mb-4">Our Services</span>
              <h2 className="c9-section-heading">
                Enterprise-Grade Connectivity & Voice
              </h2>
              <p className="c9-body text-slate-800 mt-6 text-lg">
                Everything you need to keep your business connected, communicating, and operating smoothly.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.1} className="shrink-0 hidden md:flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </FadeIn>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 pt-4 -mx-6 px-6 md:-mx-8 md:px-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {[
            { icon: <Globe size={20} aria-hidden="true" />, title: 'Business NBN™ & Fibre', desc: 'High-speed, reliable internet connections scaled to your business needs, from standard NBN to dedicated Enterprise Ethernet.' },
            { icon: <PhoneCall size={20} aria-hidden="true" />, title: 'Cloud Phone Systems', desc: 'Modern VoIP and Microsoft Teams calling solutions that allow your team to work from anywhere, on any device.' },
            { icon: <Users size={20} aria-hidden="true" />, title: 'Contact Centre Solutions', desc: 'Advanced routing, IVR, and omnichannel queue management to improve your customer experience.' },
            { icon: <Mic size={20} aria-hidden="true" />, title: 'AI Voice Assistants', desc: 'Automate repetitive calls and routine inquiries with intelligent voice AI, freeing your team for complex tasks.' },
            { icon: <Router size={20} aria-hidden="true" />, title: 'SD-WAN & Networking', desc: 'Securely connect multiple office locations and manage your network traffic for optimal performance.' },
            { icon: <ShieldCheck size={20} aria-hidden="true" />, title: '4G/5G Failover', desc: 'Automatic backup connections ensuring your critical systems stay online even if the primary line goes down.' }
          ].map((item, i) => (
            <div key={i} className="w-[85vw] md:w-[45vw] lg:w-[320px] shrink-0 snap-start">
              <FadeIn delay={i * 0.05} className="h-full">
                <div className="group bg-white p-6 rounded-3xl border border-slate-100 h-full hover:border-[#5D00D6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5 hover:-translate-y-2 flex flex-col">
                   <div className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(93,0,214,0.4)] group-hover:bg-[#5D00D6] group-hover:text-white bg-[#5D00D6]/5 text-[#5D00D6] mb-4">
                      {item.icon}
                   </div>
                   <h3 className="text-[15px] font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                   <p className="text-sm text-slate-800 leading-relaxed flex-grow">{item.desc}</p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function TelcoPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState({ name: '', type: 'generic' as any });

  const openModal = (name: string, type: 'phone' | 'internet' | 'ai' | 'generic') => {
    setActiveProduct({ name, type });
    setModalOpen(true);
  };

  const telcoCards = [
    {
      title: 'C9 Phone System',
      descriptor: 'A modern business phone system for office, remote and mobile teams. Manage calls, users, voicemail, call routing and business numbers through a flexible cloud-based setup that can grow with your organisation.',
      image: '/Phone system telco.png',
      imageAlt: 'C9 Phone System interface and management',
      link: '/telco/phone-system',
      tag: 'Voice',
    },
    {
      title: 'Business nbn',
      descriptor: 'Reliable business internet for everyday operations, cloud apps, EFTPOS, video calls, email, browsing and office connectivity. C9 helps you choose the right Business nbn option based on your location, speed requirements and usage.',
      image: '/images/nbn-feature.png',
      imageAlt: 'Business nbn connectivity',
      link: '/telco/business-nbn',
      tag: 'Internet',
    },
    {
      title: 'Fast Fibre',
      descriptor: 'High-speed fibre internet for businesses that need faster, more reliable connectivity than standard internet services. Fast Fibre is suited to teams using cloud platforms, voice, video, large file transfers and business-critical online systems.',
      image: '/Fast Fibre_Telco.png',
      imageAlt: 'Fast Fibre high speed connection',
      link: '/telco/fast-fibre',
      tag: 'Fiber',
    },
    {
      title: 'Enterprise Ethernet',
      descriptor: 'Enterprise-grade connectivity for organisations that need stronger performance, scalable bandwidth and dependable business internet across critical environments. Ideal for larger offices, multi-site businesses and companies with high connectivity demands.',
      image: '/Enterprise Ethernet_Telco.png',
      imageAlt: 'Enterprise Ethernet network nodes',
      link: '/telco/enterprise-ethernet',
      tag: 'Networking',
    },
    {
      title: 'AI Voice',
      descriptor: 'AI Voice helps businesses handle calls smarter with AI-assisted call answering, routing, enquiry handling and customer interaction support. It can help reduce missed calls, improve response times and support teams that receive regular customer enquiries.',
      image: '/Media.jpg',
      imageAlt: 'AI Voice assistant workflows',
      link: '/telco/ai-voice',
      tag: 'AI Voice',
    },
  ];

  return (
    <main className="bg-white selection:bg-[#5D00D6]/10 selection:text-[#5D00D6]">
      <Hero openModal={openModal} />
      <WpClientTicker />
      <SectionStats />
      <SectionStrip openModal={openModal} />

      <WpCapabilityNavigator 
        eyebrow="THE FULL TELCO SETUP"
        headline="A Complete Setup for Your Business"
        subtext="From business phone systems and nbn to managed fibre and AI voice — we handle the lot so you only have one team to call."
        cards={telcoCards}
        ctaLabel=""
        ctaHref=""
      />

      <SectionPains openModal={openModal} />
      <SectionMSPPositioning />
      <SectionUnified openModal={openModal} />
      <SectionHowItWorks openModal={openModal} />
      
      <SectionOfferings />
      {/* <SectionScenarios openModal={openModal} /> */}
      <SectionOperationalProof />
      <WpSupport />
      <SectionBanner openModal={openModal} />
      <SectionStrip openModal={openModal} />

      <WpFAQAndFeedback faqItems={telcoFaqs} showTestimonials={false} />
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
