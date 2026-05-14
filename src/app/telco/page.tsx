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
  ConnectivityDiagram,
  ComparisonStackVisual,
  ProcessTimeline,
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
  <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-20 lg:pb-32">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />

    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <div className="order-last lg:order-first">
          <FadeIn>
            <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-8">
              <span className="c9-eyebrow !mb-0 text-[#5D00D6]">BUSINESS TELCO THAT ACTUALLY CONNECTS THE DOTS</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-8">
              Stop Chasing Telco Providers. Get Phones, Internet and AI Voice Managed by C9.
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="c9-body mb-10 max-w-[620px] text-slate-800 text-lg leading-relaxed space-y-4">
              <p>
                C9 gives Australian businesses one clear place to manage the telco services they actually depend on — C9 Phone System, Business nbn, Fast Fibre, Enterprise Ethernet and AI Voice.
              </p>
              <p>
                No messy provider runaround. No disconnected phone and internet setup. Just the right business telco services, installed and supported by a team that understands how your business needs to work.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <C9Button 
                size="lg" 
                className="rounded-full shadow-xl shadow-purple-900/20 h-14 px-10"
                onClick={() => openModal('Telco Health Check Request', 'generic')}
              >
                Telco Health Check
              </C9Button>
              <C9Button 
                asChild
                variant="outline"
                size="lg" 
                className="rounded-full border-2 border-[#5D00D6] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-all h-14 px-10"
              >
                <a href="#core-products">View C9 Telco Services</a>
              </C9Button>
            </div>
          </FadeIn>



          <FadeIn delay={0.35}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 border-t border-slate-100 pt-10">
              {[
                { label: 'Business internet and phone systems', icon: <Wifi size={14} className="text-[#5D00D6]" /> },
                { label: 'Setup, migration and support', icon: <RefreshCw size={14} className="text-[#5D00D6]" /> },
                { label: 'Australian business telco partner', icon: <ShieldCheck size={14} className="text-[#5D00D6]" /> },
                { label: 'Built for small, growing and multi-site businesses', icon: <Activity size={14} className="text-[#5D00D6]" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-[#5D00D6]">{item.icon}</div>
                  <span className="text-[12px] font-bold text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} direction="right" className="relative order-first lg:order-last">
           <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-[32px] overflow-hidden shadow-2xl">
             <img 
               src="/Telco hero.png" 
               alt="C9 Telco Services Hero" 
               className="w-full h-full object-cover object-center"
             />
             <div className="absolute inset-0 border border-slate-900/10 rounded-[32px]" />
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
      description: "A modern business phone system for office, remote and mobile teams. Manage calls, users, voicemail, call routing and business numbers through a flexible cloud-based setup that can grow with your organisation.",
      goodFor: [
        "Replacing outdated office phones",
        "Supporting hybrid and remote teams",
        "Keeping business numbers professional",
        "Improving call routing and customer experience",
        "Managing users across one or multiple sites"
      ],
      cta: "Upgrade Your Phone System",
      icon: <PhoneCall className="text-[#5D00D6]" size={28} />
    },
    {
      title: "Business nbn",
      type: 'internet' as const,
      link: '/telco/business-nbn',
      description: "Reliable business internet for everyday operations, cloud apps, EFTPOS, video calls, email, browsing and office connectivity. C9 helps you choose the right Business nbn option based on your location, speed requirements and usage.",
      goodFor: [
        "Small and growing businesses",
        "Offices, clinics, shops and warehouses",
        "General business connectivity",
        "Cloud applications and online tools",
        "Businesses needing managed internet support"
      ],
      cta: "Check Business nbn Options",
      icon: <Wifi className="text-[#5D00D6]" size={28} />
    },
    {
      title: "Fast Fibre",
      type: 'internet' as const,
      link: '/telco/fast-fibre',
      description: "High-speed fibre internet for businesses that need faster, more reliable connectivity than standard internet services. Fast Fibre is suited to teams using cloud platforms, voice, video, large file transfers and business-critical online systems.",
      goodFor: [
        "Growing teams",
        "High cloud usage",
        "Video meetings and VoIP",
        "Faster upload and download needs",
        "Businesses ready to move beyond basic internet"
      ],
      cta: "Explore Fast Fibre",
      icon: <Zap className="text-[#5D00D6]" size={28} />
    },
    {
      title: "Enterprise Ethernet",
      type: 'internet' as const,
      link: '/telco/enterprise-ethernet',
      description: "Enterprise-grade connectivity for organisations that need stronger performance, scalable bandwidth and dependable business internet across critical environments. Ideal for larger offices, multi-site businesses and companies with high connectivity demands.",
      goodFor: [
        "Larger offices",
        "Multi-site businesses",
        "Critical cloud applications",
        "High bandwidth requirements",
        "Businesses needing enterprise-grade reliability"
      ],
      cta: "Discuss Enterprise Ethernet",
      icon: <Network className="text-[#5D00D6]" size={28} />
    },
    {
      title: "AI Voice",
      type: 'ai' as const,
      link: '/telco/voice-ai',
      description: "AI Voice helps businesses handle calls smarter with AI-assisted call answering, routing, enquiry handling and customer interaction support. It can help reduce missed calls, improve response times and support teams that receive regular customer enquiries.",
      goodFor: [
        "Busy reception teams",
        "Customer service-heavy businesses",
        "Missed-call reduction",
        "After-hours enquiry handling",
        "Smarter call triage and routing"
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
            <span className="c9-eyebrow mb-4 block">Core Telco Products</span>
            <h2 className="c9-section-heading mb-6">Choose the Telco Service Your Business Needs</h2>
            <p className="c9-body text-lg">
              C9’s telco services are built around the products businesses actually search for, buy and rely on every day — phone systems, business internet, fibre, Enterprise Ethernet and AI-powered voice solutions.
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
                Telco Health Check <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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
    { title: "Our phone system is outdated", copy: "Your current phones are hard to manage, call routing is poor, remote staff are difficult to support or customers are not reaching the right person quickly." },
    { title: "Our internet is too slow or unreliable", copy: "Dropouts, slow speeds or poor upload performance are affecting cloud apps, EFTPOS, calls, video meetings, customer service or everyday work." },
    { title: "We need a better setup for a new site", copy: "You are opening or relocating an office, shop, clinic, warehouse or branch and need internet, phones, routers and backup ready before launch." },
    { title: "We are stuck with too many providers", copy: "Internet, phones, routers, Microsoft 365 and IT support are handled by different vendors, making every issue harder to resolve." },
    { title: "We are missing calls or responding too slowly", copy: "Your reception or customer service team needs better call routing, voicemail, overflow handling or AI-assisted voice support." },
    { title: "We need stronger business-grade connectivity", copy: "Your business has grown beyond basic internet and now needs fibre, Enterprise Ethernet or a better multi-site connectivity setup." }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className={C}>
        <div className="max-w-3xl mb-16 md:mb-24">
          <FadeIn>
            <span className="c9-eyebrow mb-4 block">Why Businesses Come to C9</span>
            <h2 className="c9-section-heading mb-6">When Your Phone System or Internet Starts Holding the Business Back</h2>
            <p className="c9-body text-lg">
              Most businesses do not look for a new telco provider unless something is already frustrating the team, customers or day-to-day workflow. C9 helps businesses replace weak phone systems, improve internet performance and simplify telco support.
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
              Talk to a Telco Specialist
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
  <section className="py-20 md:py-32 bg-[#0c1024] text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5D00D6]/10 blur-[120px] rounded-full -mr-32 -mt-32" />
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow !text-[#a56eff] mb-4 block">The C9 Difference</span>
          <h2 className="c9-section-heading !text-white mb-8">Phone Systems and Business Internet Work Better When They Are Designed Together</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            A business phone system is only as reliable as the internet and network behind it. C9 looks at the full telco environment — phones, internet, routers, Microsoft Teams, fibre, backup connections and site requirements — so your business gets a setup that works properly from day one.
            <br /><br />
            This is where C9 is different from a basic telco provider. We do not just sell one connection or one phone product. We help you choose, install and support the telco services your business actually depends on.
          </p>
          <C9Button size="lg" className="rounded-full bg-[#5D00D6] hover:bg-[#4c00b0] text-white h-15 px-10" onClick={() => openModal('Full Telco Environment Review', 'generic')}>
            Review My Telco Setup
          </C9Button>
          
          <div className="mt-12 hidden lg:block">
             <ConnectivityDiagram />
          </div>
        </FadeIn>

        <div className="space-y-6">
          {[
            { title: "For calls", copy: "C9 helps with cloud phone systems, business numbers, call routing, voicemail, SIP, VoIP and Microsoft Teams Calling options.", icon: <PhoneCall size={24} /> },
            { title: "For internet", copy: "C9 helps with Business nbn, Fast Fibre, Enterprise Ethernet, managed routers and backup connectivity.", icon: <Globe size={24} /> },
            { title: "For growth", copy: "C9 supports new sites, multiple locations, remote teams, relocations and businesses moving from old telco setups to modern services.", icon: <Activity size={24} /> }
          ].map((block, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="right">
               <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] backdrop-blur-sm group hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/20 flex items-center justify-center text-[#a56eff] group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-500">
                      {block.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-clash">{block.title}</h3>
                      <p className="text-white/60 text-[14px] leading-relaxed">{block.copy}</p>
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
              <span className="c9-eyebrow mb-4 block">Supporting Telco Services</span>
              <h2 className="c9-section-heading mb-6">Everything Else Your Business May Need Around Phone and Internet</h2>
              <p className="c9-body text-lg">
                Once your core phone and internet services are in place, C9 can support the additional pieces that make your telco environment easier to manage.
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
              Ask About Add-On Services
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
    { title: "Review", copy: "We look at your current phone system, internet services, business numbers, site requirements, contracts and user needs." },
    { title: "Recommend", copy: "We recommend the right mix of C9 Phone System, Business nbn, Fast Fibre, Enterprise Ethernet, AI Voice and supporting services." },
    { title: "Set Up or Migrate", copy: "We help coordinate internet setup, phone system configuration, number porting, router configuration, call routing and service activation." },
    { title: "Support", copy: "Once live, C9 supports your telco environment with clear escalation, responsive service and practical help when your team needs it." }
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-100">
      <div className={C}>
        <div className="max-w-3xl mb-16 md:mb-24">
          <FadeIn>
            <span className="c9-eyebrow mb-4 block">How It Works</span>
            <h2 className="c9-section-heading mb-6">From Telco Review to Setup, Migration and Support</h2>
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

        <FadeIn delay={0.4} className="mt-12">
           <ProcessTimeline />
        </FadeIn>

        <FadeIn delay={0.4} className="mt-16 flex justify-center">
           <C9Button size="lg" className="rounded-full shadow-2xl shadow-purple-900/20 px-12 h-15" onClick={() => openModal('Initial Telco Review', 'generic')}>
              Start With a Telco Review
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
    { title: "I need a new phone system", type: 'phone' as const, link: '/telco/phone-system', image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=800", copy: "C9 can help you move to a modern business phone system with call routing, voicemail, business numbers, remote user support and optional Teams Calling.", cta: "Upgrade My Phone System" },
    { title: "I need better business internet", type: 'internet' as const, link: '/telco/business-nbn', image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800", copy: "C9 can review your current connection and help you choose from Business nbn, Fast Fibre or Enterprise Ethernet based on your location and usage.", cta: "Check Internet Options" },
    { title: "I am opening a new site", type: 'internet' as const, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", copy: "C9 can help plan internet, phones, routers, backup connectivity and setup support before your new office, shop, clinic or warehouse goes live.", cta: "Plan a New Site" },
    { title: "I want smarter call handling", type: 'ai' as const, link: '/telco/voice-ai', image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", copy: "C9 AI Voice can help with call answering, routing, enquiry handling and reducing missed calls during busy periods or after hours.", cta: "Explore AI Voice" },
    { title: "I want to switch telco provider", type: 'generic' as const, image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800", copy: "C9 can review your current provider setup, identify what needs to move and help manage the transition with less confusion.", cta: "Help Me Switch" },
    { title: "I manage multiple locations", type: 'internet' as const, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", copy: "C9 can help standardise internet, phone systems and support across branches, offices or operational sites.", cta: "Connect My Sites" }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className={C}>
        <div className="max-w-3xl mb-16 md:mb-24">
          <FadeIn>
            <span className="c9-eyebrow mb-4 block">Real Business Scenarios</span>
            <h2 className="c9-section-heading mb-6">Find the Right Telco Setup for Your Situation</h2>
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
  <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-100 overflow-hidden">
    <div className={C}>
      <div className="max-w-3xl mb-16 md:mb-24 mx-auto text-center">
        <FadeIn>
          <span className="c9-eyebrow mb-4 block">Why Choose C9</span>
          <h2 className="c9-section-heading mb-6">More Than a Connection Provider</h2>
          <p className="c9-body text-lg">
            Many telco providers sell the service and leave the rest to you. C9 takes a more complete approach by helping with the phone system, internet connection, setup, migration, routers, Microsoft environment and ongoing support.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <FadeIn direction="left">
           <div className="bg-white p-10 rounded-[40px] border border-slate-200 h-full">
              <h3 className="text-2xl font-bold text-slate-400 mb-10 font-clash">Standard Telco Provider</h3>
              <ul className="space-y-6">
                 {[
                   "Sells internet or phone services separately",
                   "May not understand your IT environment",
                   "Support can become slow or fragmented",
                   "Phone, internet and network issues may sit with different providers",
                   "Limited help with business setup, migration or user experience"
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
              <h3 className="text-2xl font-bold text-white mb-10 font-clash">C9 Communications</h3>
              <ul className="space-y-6">
                 {[
                   "Provides core telco products including C9 Phone System, Business nbn, Fast Fibre, Enterprise Ethernet and AI Voice",
                   "Helps design the right phone and internet setup for your business",
                   "Understands how telco connects with Microsoft 365, networking, devices and support",
                   "Helps with migration, setup, number porting and ongoing support",
                   "Gives your business one accountable technology partner"
                 ].map((point, i) => (
                   <li key={i} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full bg-[#5D00D6] flex items-center justify-center shrink-0 mt-0.5 text-white">
                         <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-[15px] font-bold text-white/90">{point}</span>
                   </li>
                 ))}
              </ul>
           </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.4}>
         <ComparisonStackVisual />
      </FadeIn>

      <FadeIn delay={0.4} className="mt-16 flex justify-center">
         <C9Button size="lg" className="rounded-full shadow-2xl shadow-purple-900/20 px-12 h-15" onClick={() => openModal('C9 Telco Advantage Inquiry', 'generic')}>
            See If C9 Is the Right Fit
         </C9Button>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — TRUST / LOCAL BUSINESS SUPPORT
   ───────────────────────────────────────────────────────── */
const SectionTrust = () => (
  <section className="py-20 md:py-32 bg-white">
    <div className={C}>
      <div className="text-center mb-16">
         <FadeIn>
            <span className="c9-eyebrow mb-4 block">Trusted by Australian Organisations</span>
            <h2 className="c9-section-heading mb-6">Telco, IT and Support Working Together</h2>
         </FadeIn>
      </div>



      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
         <FadeIn direction="left">
            <p className="c9-body text-xl leading-relaxed text-slate-800 mb-10">
              C9 supports Australian businesses across telco, managed IT, cloud, networking and security. Our telco services are designed for businesses that need more than a basic connection — they need the right products, the right setup and a partner who understands the full technology environment.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
               {[
                 "Australian business support",
                 "Phone systems and business internet expertise",
                 "Telco and IT knowledge under one roof",
                 "Support for office, remote and multi-site teams",
                 "Practical advice before you commit",
                 "Help with setup, migration and ongoing service"
               ].map((point, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#5D00D6] shrink-0" />
                    <span className="text-[14px] font-bold text-slate-700">{point}</span>
                 </div>
               ))}
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
  { q: "What telco products does C9 provide?", a: "C9 provides C9 Phone System, Business nbn, Fast Fibre, Enterprise Ethernet, AI Voice and supporting telco services including Microsoft Teams Calling, SIP trunks, VoIP handsets, number porting, 4G/5G backup, managed routers and multi-site connectivity." },
  { q: "Does C9 provide business phone systems?", a: "Yes. C9 provides modern business phone systems for office, remote and mobile teams. This can include call routing, voicemail, business numbers, VoIP, SIP, handsets, softphones and Microsoft Teams Calling options." },
  { q: "Can C9 help with Business nbn?", a: "Yes. C9 can help businesses review available Business nbn options and choose a suitable service based on location, speed needs, usage and support requirements." },
  { q: "What is Fast Fibre used for?", a: "Fast Fibre is suited to businesses that need higher-speed internet for cloud apps, voice, video calls, file transfers and growing teams that need stronger connectivity than basic services." },
  { q: "Who is Enterprise Ethernet for?", a: "Enterprise Ethernet is suited to organisations that need scalable, business-grade connectivity for larger offices, multi-site environments, critical cloud systems or higher bandwidth requirements." },
  { q: "What is AI Voice?", a: "AI Voice helps businesses handle calls smarter with AI-assisted answering, routing, enquiry support and call triage. It can help reduce missed calls and improve response times for busy teams." },
  { q: "Can C9 help us switch from our current telco provider?", a: "Yes. C9 can review your current phone and internet setup, recommend suitable replacement options and help manage the transition, including setup, number porting and service coordination where required." },
  { q: "Can we keep our existing business phone numbers?", a: "In many cases, yes. C9 can review your existing numbers and help manage number porting as part of your phone system migration." },
  { q: "Can C9 support multiple business locations?", a: "Yes. C9 can help businesses standardise phone systems, internet services, backup connectivity and support across multiple offices, branches or sites." },
  { q: "Is C9 only for large enterprises?", a: "No. C9 works with small businesses, growing companies, new sites, multi-site businesses and larger organisations that need reliable phone, internet and telco support." }
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
         // Import the server action dynamically to avoid issues if needed, 
         // but since it's a client component, we should import it at the top.
         // For now, I'll assume it's imported.
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
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-clash">Request Received</h2>
                  <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                     Thank you for your telco quote request. A C9 engineer has been notified and will review your requirements. You can expect a response within **2 hours**.
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
                    Ready to Improve Your Business Telco?
                  </span>
                  
                  <h2 className="c9-section-heading text-[#0c1024] mb-8 !text-3xl md:!text-5xl leading-tight">
                    Get Phone Systems, Business Internet and AI Voice Managed by One Australian Partner
                  </h2>

                  <p className="c9-body !text-[#0c1024]/70 mb-10 text-lg leading-relaxed">
                    Tell us what you need help with — C9 Phone System, Business nbn, Fast Fibre, Enterprise Ethernet, AI Voice, backup connectivity, multi-site telco or switching providers. C9 will review your requirements and recommend the right next step.
                  </p>
                  
                  <div className="mb-12">
                    <p className="text-[20px] sm:text-[24px] font-bold text-[#0c1024] font-clash">
                      Call us today: <a href="tel:1800000299" className="text-[#5D00D6] hover:text-[#4c00b0] transition-colors decoration-[#5D00D6]/20 underline underline-offset-8">1800 000 299</a>
                    </p>
                  </div>

                  <div className="space-y-4">
                     {[
                       { title: "Direct Engineer Response", icon: <ShieldCheck size={14} /> },
                       { title: "2-Hour Response Time", icon: <Clock size={14} /> },
                       { title: "No confusing telco language", icon: <MessageSquare size={14} /> }
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 text-[#0c1024]/60">
                          <div className="text-[#5D00D6]">{item.icon}</div>
                          <span className="text-[12px] font-black uppercase tracking-widest">{item.title}</span>
                       </div>
                     ))}
                  </div>
               </FadeIn>
            </div>

            {/* FinalCtaVisual removed as per request */}


            <FadeIn delay={0.2}>
               <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-slate-100">
                  <div className="mb-8 text-center">
                     <h3 className="text-2xl font-bold text-slate-900 mb-2 font-clash">Request a Telco Quote</h3>
                     <p className="text-slate-500 text-sm">Select the service you're interested in below.</p>
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
                        <label htmlFor="message" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Current Setup / Requirements</label>
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
   SECTION — SWITCH STRIP
   ───────────────────────────────────────────────────────── */
const SectionStrip = ({ openModal }: { openModal: (name: string, type: any) => void }) => (
  <section className="py-8">
    <div className={`${C}`}>
      <div className="bg-[#f0ebff] rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#5D00D6]/10 shadow-sm">
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 rounded-2xl bg-white border border-[#5D00D6]/10 flex items-center justify-center shrink-0 shadow-sm">
          <ArrowRight size={20} className="text-[#5D00D6]" />
        </div>
        <div>
          <p className="text-[13px] font-black uppercase tracking-[0.15em] text-slate-900 mb-1">SWITCH YOUR TELCO TO C9</p>
          <p className="text-[14px] text-slate-600 leading-snug max-w-xl">
            Get business phones, internet, fibre and AI Voice supported by one team — without chasing separate providers when something needs fixing.
          </p>
        </div>
      </div>
      <button
        onClick={() => openModal('Setup Review Request', 'generic')}
        className="shrink-0 inline-flex items-center gap-2 bg-[#0c1024] text-white text-[11px] font-black uppercase tracking-[0.2em] px-7 py-4 rounded-full hover:bg-[#5D00D6] transition-colors whitespace-nowrap shadow-md"
      >
        Review My Setup <ArrowRight size={14} />
      </button>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 10 — FEATURE BANNER
   ───────────────────────────────────────────────────────── */
const SectionBanner = ({ openModal }: { openModal: (name: string, type: any) => void }) => (
  <section className="py-12 md:py-24 bg-white">
    <div className={C}>
      <div className="bg-[#0c1024] rounded-[48px] overflow-hidden relative min-h-[500px] flex items-center shadow-2xl">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch w-full">
          <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center relative z-10">
            <FadeIn>
              <span className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-[11px] mb-6 block">Enterprise Telco Management</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight font-clash">
                BUSINESS TELCO THAT WORKS FROM DAY ONE
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-xl">
                Get your phone system, business internet, fibre and AI Voice set up properly — with C9 managing the advice, installation and support behind it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <C9Button 
                  className="rounded-full h-15 px-10 bg-[#5D00D6] text-white border-none shadow-xl shadow-[#5D00D6]/20"
                  onClick={() => openModal('Telco Services Inquiry', 'generic')}
                >
                  Explore C9 Telco Services
                </C9Button>
                <C9Button 
                  variant="outline"
                  className="rounded-full h-15 px-10 border-white/20 text-white hover:bg-white hover:text-[#0c1024] transition-all"
                  onClick={() => openModal('Telco Quote Request', 'generic')}
                >
                  Get a Telco Quote
                </C9Button>
              </div>
            </FadeIn>
          </div>
          <div className="relative hidden lg:block min-h-[500px]">
            <img 
              src="/Enterprise Ethernet_Telco.png" 
              alt="C9 Enterprise Ethernet" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Gradient overlay to blend the image into the dark text area */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c1024] via-[#0c1024]/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

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
      image: '/images/realistic_business_voice_poly_yealink_1776077360073.png',
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
      image: '/images/fibre-feature.png',
      imageAlt: 'Fast Fibre high speed connection',
      link: '/telco/fast-fibre',
      tag: 'Fiber',
    },
    {
      title: 'Enterprise Ethernet',
      descriptor: 'Enterprise-grade connectivity for organisations that need stronger performance, scalable bandwidth and dependable business internet across critical environments. Ideal for larger offices, multi-site businesses and companies with high connectivity demands.',
      image: '/images/realistic_business_networking_rack_1776077491291.png',
      imageAlt: 'Enterprise Ethernet network nodes',
      link: '/telco/enterprise-ethernet',
      tag: 'Networking',
    },
    {
      title: 'AI Voice',
      descriptor: 'AI Voice helps businesses handle calls smarter with AI-assisted call answering, routing, enquiry handling and customer interaction support. It can help reduce missed calls, improve response times and support teams that receive regular customer enquiries.',
      image: '/images/voice_ai_realistic_dashboard.jpg',
      imageAlt: 'AI Voice assistant workflows',
      link: '/telco/ai-voice',
      tag: 'AI Voice',
    },
  ];

  return (
    <main className="bg-white selection:bg-[#5D00D6]/10 selection:text-[#5D00D6]">
      <Hero openModal={openModal} />
      <SectionStrip openModal={openModal} />

      <WpCapabilityNavigator 
        eyebrow="Managed Operational Capabilities"
        headline="Phone, Internet, and AI Managed as a Single Controlled System."
        subtext="From cloud phone systems and business internet to managed fibre and AI voice automation — C9 handles every operational layer with a single point of accountability."
        cards={telcoCards}
        ctaLabel=""
        ctaHref=""
      />

      <SectionBanner openModal={openModal} />

      <SupportingServices openModal={openModal} />
      <SectionScenarios openModal={openModal} />
      <SectionComparison openModal={openModal} />
      <SectionTrust />
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
