'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneCall, 
  Users, 
  ShieldCheck, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Building2, 
  RefreshCcw, 
  Layout, 
  Settings, 
  ChevronRight, 
  Package, 
  Truck, 
  ClipboardCheck, 
  Headphones, 
  BarChart3,
  Globe,
  Plus,
  Minus,
  Check,
  ChevronDown,
  Download,
  AlertCircle,
  Clock,
  LineChart,
  MessageSquare,
  Phone,
  Smartphone,
  Video,
  Monitor
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { C9Button } from '@/components/design-system/C9Button';

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPERS
   ───────────────────────────────────────────────────────── */
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
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

/* ─────────────────────────────────────────────────────────
   SECTION: HERO
   ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-12 pb-0 lg:pt-20 border-b border-slate-50">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
    
    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-12 lg:gap-16 items-center pb-16 lg:pb-24">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/5 border border-[#5D00D6]/10 mb-7">
               <PhoneCall size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Enterprise-Grade Voice Delivery</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
             <h1 className="c9-hero-title mb-6 !leading-[1.1]">
                Business Phone Systems That Are Supplied, Set Up and <span className="text-[#5D00D6]">Managed for You.</span>
             </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
             <p className="c9-body mb-10 max-w-[620px] text-lg text-slate-600">
                Get a complete phone system for your office, retail site, warehouse, clinic or multi-site business — with Yealink devices, calling plans, number porting, call routing, installation and local Australian support handled entirely by C9.
             </p>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                <C9Button className="w-full sm:w-auto h-14 px-8 rounded-full bg-[#5D00D6] hover:bg-[#4c00b0] text-white text-[15px] font-bold shadow-xl shadow-purple-900/20" asChild>
                  <Link href="#builder">Build My Phone System</Link>
                </C9Button>
                <C9Button variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] bg-white text-[15px] font-bold" asChild>
                  <Link href="#consultation-section">Talk to a Voice Specialist</Link>
                </C9Button>
             </div>

             <div className="flex flex-wrap gap-x-8 gap-y-4">
                {[
                  { label: "AU Business Support", icon: <Globe size={14} /> },
                  { label: "Yealink Hardware Partner", icon: <Check size={14} /> },
                  { label: "Teams Calling Ready", icon: <Check size={14} /> },
                  { label: "Setup & Migration Included", icon: <RefreshCcw size={14} /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[13px] font-bold text-slate-500">
                    <span className="text-[#5D00D6]">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="relative">
           <div className="relative w-full mx-auto">
              <img 
                src="/Phone System Hero.png" 
                alt="C9 Phone System" 
                className="w-full h-auto" 
              />
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION: REAL BUSINESS STATS
   ───────────────────────────────────────────────────────── */
/* ─────────────────────────────────────────────────────────
   SECTION: BUSINESS STATS (ANIMATED)
   ───────────────────────────────────────────────────────── */
const AnimatedNumber = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const BusinessStats = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-50 overflow-hidden">
       <div className={C}>
          <motion.div 
            onViewportEnter={() => setIsInView(true)}
            className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 items-center text-center"
          >
             {[
               { label: "Active Extensions", val: 12000, suffix: "+" },
               { label: "Calls Handled Daily", val: 45000, suffix: "+" },
               { label: "Porting Success Rate", val: 100, suffix: "%" },
               { label: "System Uptime", val: 99, suffix: ".99%" }
             ].map((item, i) => (
               <div key={i} className="relative px-4">
                  <FadeIn delay={i * 0.1}>
                     <div className="text-[44px] md:text-[56px] lg:text-[64px] font-medium text-[#0c1024] tracking-tight leading-none mb-4">
                        {isInView ? <AnimatedNumber value={item.val} /> : 0}{item.suffix}
                     </div>
                     <div className="text-[11px] md:text-[12px] font-bold text-[#5D00D6] uppercase tracking-[0.25em] whitespace-nowrap">
                        {item.label}
                     </div>
                  </FadeIn>
                  {i < 3 && (
                    <div className="hidden lg:block absolute right-[-2px] top-1/2 -translate-y-1/2 h-20 w-[1.5px] bg-slate-100" />
                  )}
               </div>
             ))}
          </motion.div>
       </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION: USE CASES
   ───────────────────────────────────────────────────────── */
const UseCases = () => (
  <section className="py-20 lg:py-32 bg-slate-50 border-b border-slate-100">
    <div className={C}>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <FadeIn>
          <span className="c9-eyebrow mb-4 text-[#5D00D6]">Scenarios</span>
          <h2 className="c9-section-heading">Choose the Setup That Matches Your Business</h2>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "New Office or Site Opening",
            desc: "Get critical communications active from Day One. We handle the hardware supply, cabling review, and service setup for a risk-free opening.",
            icon: <Plus className="text-[#5D00D6]" />,
            cta: "Plan Opening"
          },
          {
            title: "Replace an Old Phone System",
            desc: "Modernise your calling environment without the migration headache. We port your existing numbers and build smart routing to improve reachability.",
            icon: <RefreshCcw className="text-[#5D00D6]" />,
            cta: "Upgrade System"
          },
          {
            title: "Multi-Site Business",
            desc: "Consolidate your voice environment across sites. Unified internal dialling, shared receptionist features, and central management.",
            icon: <Building2 className="text-[#5D00D6]" />,
            cta: "Scale Voice"
          },
          {
            title: "Teams Calling Setup",
            desc: "Turn Microsoft Teams into your primary phone system. We provide direct routing, compatible handsets, and expert configuration.",
            icon: <Layout className="text-[#5D00D6]" />,
            cta: "Enable Teams"
          }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
             <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                {item.icon}
             </div>
             <h4 className="text-[18px] font-bold text-slate-900 mb-4 leading-tight">{item.title}</h4>
             <p className="text-slate-500 text-[14px] leading-relaxed mb-8 flex-1">{item.desc}</p>
             <Link href="#consultation-section" className="inline-flex items-center gap-2 text-[13px] font-bold text-[#5D00D6] uppercase tracking-widest hover:gap-3 transition-all mt-auto pt-4 border-t border-slate-100">
               {item.cta} <ArrowRight size={14} />
             </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION: WHAT YOU GET / MSP ACCOUNTABILITY
   ───────────────────────────────────────────────────────── */
const WhatYouGet = () => (
  <section className="py-20 lg:py-32 bg-white">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4 text-[#5D00D6]">The Standard</span>
          <h2 className="c9-section-heading mb-8 text-[#0c1024]">Everything Required to Run Business Calling</h2>
          <p className="c9-body text-lg text-slate-600 mb-10">
            C9 handles the entire system. We provide the accountable layer that ensures your phones, calling, and support are managed together as one unified outcome.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { t: "Yealink Devices", d: "Pre-configured handsets." },
              { t: "Business Calling", d: "Unlimited AU call plans." },
              { t: "Number Porting", d: "Keep your current numbers." },
              { t: "Call Routing", d: "IVR, Queues & Auto-Attendant." },
              { t: "Installation", d: "Professional on-site setup." },
              { t: "Ongoing Support", d: "Local expert AU management." }
            ].map((item, i) => (
              <div key={i} className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Check size={12} strokeWidth={3} />
                </div>
                <h4 className="font-bold text-slate-900 text-[16px] mb-1">{item.t}</h4>
                <p className="text-slate-400 text-[13px] font-medium">{item.d}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.2} className="relative">
           <div className="bg-[#0c1024] rounded-[48px] p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/20 blur-[100px] rounded-full" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#5D00D6] flex items-center justify-center mb-8 shadow-xl">
                   <ShieldCheck size={32} />
                </div>
                <h3 className="text-[28px] lg:text-[36px] font-bold mb-6 leading-tight">
                  One partner responsible for every call.
                </h3>
                <p className="text-white/60 mb-10 text-lg leading-relaxed">
                  We treat phones as a managed endpoint. C9 owns the hardware, the network, and the support layer — so you only have one team to call when you need help.
                </p>
                <C9Button className="bg-white text-[#0c1024] hover:bg-slate-100 rounded-full px-8 h-12 font-bold" asChild>
                   <Link href="#consultation-section">Learn About Managed Voice</Link>
                </C9Button>
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION: SIMPLIFY YOUR COMMUNICATION
   ───────────────────────────────────────────────────────── */
const SimplifyCommunication = () => (
  <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-100">
     <div className={C}>
        <div className="max-w-4xl mx-auto text-center mb-16">
           <FadeIn>
              <span className="c9-eyebrow mb-4 text-[#5D00D6]">Operational Capability</span>
              <h2 className="c9-section-heading">Simplify Business Communication Without Sacrificing Capability</h2>
              <p className="c9-body text-lg text-slate-600 mt-6">
                 We translate complex technical features into reliable business outcomes. Your communication tools should make your team faster, not create operational friction.
              </p>
           </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
             { title: "Route Calls Faster", desc: "Smart auto-attendants direct customers to the right team immediately.", icon: <Settings /> },
             { title: "Keep Teams Connected", desc: "Unified internal dialling across all your business locations.", icon: <Building2 /> },
             { title: "Work From Anywhere", desc: "Mobile calling apps ensure remote staff are always reachable.", icon: <Globe /> },
             { title: "Never Miss a Message", desc: "Voicemail-to-email ensures critical messages are logged instantly.", icon: <MessageSquare /> },
             { title: "Manage Reception", desc: "Clear call queue visibility for efficient frontline handling.", icon: <Users /> },
             { title: "Seamless Meetings", desc: "Conference and Teams calling built right into your hardware.", icon: <Layout /> }
           ].map((feat, i) => (
             <FadeIn key={i} delay={i * 0.1} className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#5D00D6] flex items-center justify-center shrink-0 border border-slate-100">
                   {feat.icon}
                </div>
                <div>
                   <h4 className="font-bold text-slate-900 text-[15px] mb-1.5">{feat.title}</h4>
                   <p className="text-slate-500 text-[13px] leading-relaxed">{feat.desc}</p>
                </div>
             </FadeIn>
           ))}
        </div>
     </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION: PRODUCT CATEGORIES (ECOSYSTEMS)
   ───────────────────────────────────────────────────────── */
const ECOSYSTEM_STEPS = [
  {
    id: 'pbx',
    label: 'Business Phone System / Hosted PBX',
    icon: <Building2 size={20} />,
    heading: 'Hosted PBX & Business Voice',
    phase: 'Enterprise Delivery',
    description: 'Our enterprise-grade hosted PBX provides smart call routing, IVR, and seamless multi-site connectivity with zero maintenance and local AU support.',
    image: '/Phone system telco.png',
    options: [
      { icon: <Zap size={20} />, title: 'Smart Call Routing', desc: 'Direct calls to the right team based on time, site, or IVR.' },
      { icon: <ShieldCheck size={20} />, title: 'Local AU Redundancy', desc: 'Geographically redundant servers for 99.99% uptime.' },
      { icon: <RefreshCcw size={20} />, title: 'Seamless Porting', desc: 'We manage the move of your existing numbers with zero downtime.' },
      { icon: <LineChart size={20} />, title: 'Live Dashboards', desc: 'Real-time visibility into call volumes and queue performance.' },
    ]
  },
  {
    id: 'desk',
    label: 'Yealink Desk Phones',
    icon: <Phone size={20} />,
    heading: 'Yealink Desk Phones & Executive Terminals',
    phase: 'Office Productivity',
    description: 'Industry-leading HD audio handsets designed for receptionists, sales teams, and management who need reliable, acoustic-first hardware.',
    image: '/Desk Phone.png',
    options: [
      { icon: <Phone size={20} />, title: 'HD Voice Quality', desc: 'Acoustic shield technology blocks background noise.' },
      { icon: <CheckCircle size={20} />, title: 'Reception Modules', desc: 'Expansion sidecars for heavy call routing and visibility.' },
      { icon: <Zap size={20} />, title: 'Zero-Touch Setup', desc: 'Pre-configured handsets that work the moment they are plugged in.' },
      { icon: <Settings size={20} />, title: 'Gigabit Passthrough', desc: 'Daisy-chain your PC through the phone to save cabling costs.' },
    ]
  },
  {
    id: 'wireless',
    label: 'DECT / Wireless Phones',
    icon: <Smartphone size={20} />,
    heading: 'Wireless Mobility & DECT Handsets',
    phase: 'Warehouses & Clinics',
    description: 'Maintain reachability across your entire site with ruggedised, long-range wireless handsets designed for mobile staff and demanding environments.',
    image: '/DECT Phones.png',
    options: [
      { icon: <CheckCircle size={20} />, title: 'Extended DECT Range', desc: 'Multi-cell capability to cover large floorplates and sites.' },
      { icon: <ShieldCheck size={20} />, title: 'Ruggedised Build', desc: 'Drop-proof and water-resistant handset options available.' },
      { icon: <Clock size={20} />, title: 'Long Battery Life', desc: 'Up to 35 hours talk time for multi-shift continuity.' },
      { icon: <RefreshCcw size={20} />, title: 'Seamless Roaming', desc: 'Walk between base stations without dropping active calls.' }
    ]
  },
  {
    id: 'meeting',
    label: 'Conference & Meeting Room Phones',
    icon: <Video size={20} />,
    heading: 'Teams & Meeting Room Solutions',
    phase: 'Hybrid Collaboration',
    description: 'Standardise your meeting spaces with native Microsoft Teams devices, featuring AI tracking, one-touch joining, and crystal-clear conference audio.',
    image: '/conference phone.png',
    options: [
      { icon: <Video size={20} />, title: 'One-Touch Join', desc: 'Walk in and start your Teams meeting instantly from the controller.' },
      { icon: <Phone size={20} />, title: 'AI Audio Tracking', desc: 'Microphones automatically focus on the active speaker in the room.' },
      { icon: <Layout size={20} />, title: 'Dual Display Support', desc: 'Share content while keeping participant video feeds visible.' },
      { icon: <Smartphone size={20} />, title: 'Wireless Sharing', desc: 'Cable-free content sharing from any laptop or mobile device.' }
    ]
  },
  {
    id: 'ai',
    label: 'AI Voice / Call Handling',
    icon: <Zap size={20} />,
    heading: 'AI Voice & Automated Handling',
    phase: 'Next-Gen Voice',
    description: 'Modernise your front desk with AI call handling, live transcription, and smart sentiment analysis to improve caller experience and reduce wait times.',
    image: '/AI Voice_Telco.png',
    options: [
      { icon: <MessageSquare size={20} />, title: 'AI Auto-Attendant', desc: 'Natural language processing for smarter call routing.' },
      { icon: <Layout size={20} />, title: 'Live Transcription', desc: 'Convert calls to text for searchable records and compliance.' },
      { icon: <Zap size={20} />, title: 'Sentiment Analysis', desc: 'Real-time detection of caller tone and urgency levels.' },
      { icon: <CheckCircle size={20} />, title: 'Virtual Reception', desc: 'Automate routine inquiries and booking requests effortlessly.' }
    ]
  }
];

const CommunicationEcosystems = () => {
  const [activeTab, setActiveTab] = useState('pbx');
  const activeStep = ECOSYSTEM_STEPS.find(s => s.id === activeTab) || ECOSYSTEM_STEPS[0];

  return (
    <section className="py-20 lg:py-32 bg-white border-y border-slate-100">
      <div className={C}>
        <div className="mb-12 text-center">
          <span className="c9-eyebrow mb-4 block text-[#5D00D6]">HARDWARE ECOSYSTEMS</span>
          <h2 className="c9-section-heading mb-6 mx-auto max-w-2xl text-[#0c1024]">
            Communication That Flows Through Your Business
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {ECOSYSTEM_STEPS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 md:gap-3 px-5 md:px-6 py-2.5 md:py-3 text-[12px] md:text-[13px] font-bold transition-all rounded-full border-2 ${
                    isActive 
                      ? 'bg-[#5D00D6] text-white border-[#5D00D6] shadow-lg shadow-purple-900/20 scale-105' 
                      : 'bg-white text-gray-500 border-gray-100 hover:border-[#5D00D6]/30 hover:text-[#5D00D6] hover:bg-purple-50/50'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-[#5D00D6]'}>{tab.icon}</span>
                  <span className="uppercase tracking-wider">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="py-4 md:py-6 min-h-[300px] md:min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-[1.3fr_1fr] gap-8 md:gap-16 items-start"
            >
              <div className="w-full relative group">
                <div className="relative z-10">
                  <img 
                    src={activeStep.image} 
                    alt={activeStep.heading} 
                    className="w-full h-[280px] sm:h-[380px] md:h-[450px] lg:h-[550px] object-contain p-4 object-center"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#5D00D6]/5 rounded-full blur-3xl -z-10" />
              </div>

              <div className="flex flex-col">
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-4 py-1.5 bg-[#5D00D6]/5 text-[#5D00D6] text-[11px] font-bold uppercase tracking-[0.25em] rounded-full border border-[#5D00D6]/10">
                      Ideal for • {activeStep.phase}
                    </div>
                  </div>
                  <h3 className="text-[24px] md:text-[32px] font-bold mb-4 leading-[1.2] text-[#0c1024] tracking-tight">
                    {activeStep.heading}
                  </h3>
                  <p className="text-[14px] md:text-[15px] leading-relaxed text-slate-500 font-medium">
                    {activeStep.description}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="mb-6 flex items-center justify-between">
                     <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#5D00D6]">
                        Included Features
                     </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
                    {activeStep.options.map((option, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-6 h-6 rounded-lg bg-[#5D00D6]/10 text-[#5D00D6] flex items-center justify-center shrink-0 shadow-sm">
                            {option.icon}
                          </div>
                          <h4 className="text-[15px] font-bold text-[#0c1024] group-hover:text-[#5D00D6] transition-colors leading-tight">
                            {option.title}
                          </h4>
                        </div>
                        <p className="text-[12px] font-medium text-slate-400 leading-normal pl-9">
                          {option.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-100">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div>
                        <h4 className="text-[15px] font-bold text-[#0c1024] mb-1 text-center sm:text-left">Need this setup?</h4>
                        <p className="text-[13px] text-slate-400 font-medium text-center sm:text-left">Configure this hardware in your system.</p>
                      </div>
                      <C9Button 
                        asChild
                        variant="outline"
                        className="rounded-full border-[#5D00D6]/20 text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-all px-8 h-12 font-bold flex items-center justify-center"
                      >
                        <Link href="#builder">
                          Build Setup
                        </Link>
                      </C9Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION: INTERACTIVE BUILDER (PREMIUM CONSULTATION)
   ───────────────────────────────────────────────────────── */
const HARDWARE = [
  { id: 'desk', name: 'Desk Terminals', price: 15, desc: 'Enterprise Grade', image: '/images/yealink-t54w.png' },
  { id: 'cordless', name: 'DECT Cordless', price: 12, desc: 'Mobile Mobility', image: '/images/yealink-w73p.png' },
  { id: 'headset', name: 'Wireless Headsets', price: 8, desc: 'Bluetooth Audio', image: '/images/yealink-bh71.png' }
  /* { id: 'meeting', name: 'Meeting Rooms', price: 25, desc: 'Conference Audio', image: '/images/yealink-phone-4.jpg' } */
];

const FEATURES = [
  { id: 'teams', name: 'MS Teams Integration', icon: Video },
  { id: 'mobile', name: 'Mobile App Support', icon: Smartphone },
  { id: 'contact', name: 'Contact Centre Layer', icon: Headphones },
  { id: 'routing', name: 'Smart Call Routing', icon: Phone }
];

const ACCESSORIES = [
  { id: 'exp', name: 'Expansion Modules', price: 5, desc: 'Sidecar Displays', icon: Layout },
  { id: 'wifi', name: 'USB WiFi Dongles', price: 2, desc: 'Wireless Connect', icon: Zap },
  { id: 'bt', name: 'Bluetooth Adapters', price: 3, desc: 'Headset Sync', icon: Smartphone },
  { id: 'ups', name: 'PoE Power Supplies', price: 4, desc: 'Device Power', icon: Zap }
];

const STEPS = [
  { id: 'users', label: 'Users', title: 'Staff Capacity', icon: Users },
  { id: 'hardware', label: 'Hardware', title: 'Device Setup', icon: Phone },
  { id: 'accessories', label: 'Add-ons', title: 'Optional Accessories', icon: Package },
  { id: 'features', label: 'Features', title: 'System Logic', icon: ShieldCheck }
];

const VoiceConfigurator = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [users, setUsers] = useState(10);
  const [hardware, setHardware] = useState<string[]>(['desk']);
  const [features, setFeatures] = useState<string[]>(['mobile']);
  const [accessories, setAccessories] = useState<string[]>([]);

  const toggleHardware = (id: string) => {
    setHardware(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const toggleFeature = (id: string) => {
    setFeatures(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const toggleAccessory = (id: string) => {
    setAccessories(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const basePrice = 20; // Competitive base price per user
  const hardwarePrice = hardware.reduce((acc, id) => acc + (HARDWARE.find(h => h.id === id)?.price || 0), 0);
  const accessoryPrice = accessories.reduce((acc, id) => acc + (ACCESSORIES.find(a => a.id === id)?.price || 0), 0);
  const totalPerMonth = (basePrice + hardwarePrice + accessoryPrice) * users;

  return (
    <section id="builder" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden border-y border-slate-100">
      <div className={C}>
        
        <div className="text-center mb-16">
          <FadeIn>
            <span className="c9-eyebrow mb-4 text-[#5D00D6]">Self-Qualify</span>
            <h2 className="c9-section-heading mb-6">Build your <span className="text-[#5D00D6]">Phone System</span></h2>
            <p className="c9-body text-lg text-slate-500 max-w-2xl mx-auto">
              Modern Business Phone Systems Backed By<br />Local Support And Practical Advice
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* ── STEPPED SELECTION AREA ── */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
              
              {/* STEP INDICATOR */}
              <div className="bg-slate-50/50 border-b border-slate-100 px-8 py-6 flex items-center justify-between">
                <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
                  {STEPS.map((s, idx) => {
                    const Icon = s.icon;
                    const isActive = idx === activeStep;
                    const isDone = idx < activeStep;
                    return (
                      <button 
                        key={s.id} 
                        onClick={() => setActiveStep(idx)}
                        className={`flex items-center gap-3 shrink-0 transition-all ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[13px] ${isActive ? 'bg-[#5D00D6] text-white' : isDone ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                          {isDone ? <Check size={14} strokeWidth={3} /> : idx + 1}
                        </div>
                        <span className={`text-[13px] font-bold uppercase tracking-widest ${isActive ? 'text-[#0c1024]' : 'text-slate-500'}`}>{s.label}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="hidden sm:block text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Step {activeStep + 1} of 4</div>
              </div>

              <div className="p-8 md:p-12 min-h-[420px] flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6]">
                        {React.createElement(STEPS[activeStep].icon, { size: 24 })}
                      </div>
                      <div>
                        <h3 className="text-[20px] font-bold text-[#0c1024]">{STEPS[activeStep].title}</h3>
                        <p className="text-[13px] text-slate-400 font-medium italic">Customize your configuration</p>
                      </div>
                    </div>

                    {/* RENDER STEP CONTENT */}
                    {activeStep === 0 && (
                      <div className="pt-8">
                        <div className="px-4">
                          <input 
                            type="range" 
                            min="5" 
                            max="100" 
                            step="5"
                            value={users}
                            onChange={(e) => setUsers(parseInt(e.target.value))}
                            className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#5D00D6]"
                          />
                          <div className="flex justify-between mt-8 text-[14px] font-bold text-slate-400 uppercase tracking-widest items-center">
                            <span className="bg-slate-50 px-4 py-2 rounded-xl">5 Staff</span>
                            <div className="text-center">
                               <span className="block text-[42px] font-bold text-[#5D00D6] leading-none mb-1">{users}</span>
                               <span className="text-[11px] text-slate-400 tracking-[0.2em]">STAFF MEMBERS</span>
                            </div>
                            <span className="bg-slate-50 px-4 py-2 rounded-xl">100+ Staff</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {HARDWARE.map((hw) => (
                          <button
                            key={hw.id}
                            onClick={() => toggleHardware(hw.id)}
                            className={`flex flex-col items-center gap-3 p-4 rounded-[32px] border transition-all relative overflow-hidden group ${
                              hardware.includes(hw.id) 
                                ? 'border-[#5D00D6] bg-purple-50/30' 
                                : 'border-gray-100 hover:border-[#5D00D6]/30 bg-white'
                            }`}
                          >
                            <div className="h-16 w-full flex items-center justify-center">
                              <img src={hw.image} alt={hw.name} className={`w-auto h-full object-contain transition-transform ${hardware.includes(hw.id) ? 'scale-110' : 'group-hover:scale-105'}`} />
                            </div>
                            <div className="text-center">
                               <p className="text-[13px] font-bold text-[#0c1024] leading-tight mb-1">{hw.name}</p>
                               <p className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">{hw.desc}</p>
                            </div>
                            {hardware.includes(hw.id) && (
                              <div className="absolute top-3 right-3 w-6 h-6 bg-[#5D00D6] rounded-full flex items-center justify-center">
                                <Check size={14} className="text-white" strokeWidth={3} />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="grid sm:grid-cols-2 gap-4">
                        {ACCESSORIES.map((acc) => {
                          const Icon = acc.icon;
                          return (
                            <button
                              key={acc.id}
                              onClick={() => toggleAccessory(acc.id)}
                              className={`flex items-center gap-4 p-3.5 rounded-full border transition-all relative overflow-hidden group ${
                                accessories.includes(acc.id) 
                                  ? 'border-[#5D00D6] bg-purple-50/30' 
                                  : 'border-gray-100 hover:border-[#5D00D6]/30 bg-white'
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${accessories.includes(acc.id) ? 'bg-[#5D00D6] text-white' : 'bg-slate-50 text-slate-400 border border-slate-100'}`}>
                                <Icon size={16} />
                              </div>
                              <div className="text-left flex-1">
                                 <p className="text-[14px] font-bold text-[#0c1024] leading-tight">{acc.name}</p>
                                 <p className="text-[10px] text-slate-400 font-medium mt-0.5 uppercase tracking-wide">{acc.desc}</p>
                              </div>
                              {accessories.includes(acc.id) && (
                                <div className="w-5 h-5 bg-[#5D00D6] rounded-full flex items-center justify-center shrink-0">
                                  <Check size={12} className="text-white" strokeWidth={3} />
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div className="grid sm:grid-cols-2 gap-4">
                        {FEATURES.map((feat) => {
                          const Icon = feat.icon;
                          return (
                            <button
                              key={feat.id}
                              onClick={() => toggleFeature(feat.id)}
                              className={`flex items-center gap-4 p-3.5 rounded-full border transition-all ${
                                features.includes(feat.id) 
                                  ? 'border-[#5D00D6] bg-purple-50/30' 
                                  : 'border-gray-100 hover:border-[#5D00D6]/30 bg-white'
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${features.includes(feat.id) ? 'bg-[#5D00D6] text-white' : 'bg-slate-50 text-slate-400 border border-slate-100'}`}>
                                <Icon size={16} />
                              </div>
                              <div className="text-left">
                                 <span className="block text-[14px] font-bold text-[#0c1024] leading-tight">{feat.name}</span>
                                 <span className="block text-[10px] text-slate-400 mt-0.5 italic uppercase tracking-wider">Managed Logic</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* NAVIGATION BUTTONS */}
                <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-between">
                  <button 
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className={`flex items-center gap-2 text-[14px] font-bold uppercase tracking-widest transition-all ${activeStep === 0 ? 'opacity-0 pointer-events-none' : 'text-slate-400 hover:text-[#5D00D6]'}`}
                  >
                    <ArrowRight className="rotate-180" size={16} /> Back
                  </button>

                  <div className="flex gap-2">
                    {STEPS.map((_, i) => (
                      <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeStep ? 'bg-[#5D00D6] w-6' : 'bg-slate-200'}`} />
                    ))}
                  </div>

                  {activeStep < 3 ? (
                    <button 
                      onClick={() => setActiveStep(Math.min(3, activeStep + 1))}
                      className="bg-[#5D00D6] text-white px-8 py-3 rounded-xl font-bold text-[14px] uppercase tracking-widest hover:bg-[#4c00b0] transition-all flex items-center gap-2 shadow-lg shadow-purple-900/10"
                    >
                      Next Step <ArrowRight size={16} />
                    </button>
                  ) : (
                    <div className="text-[13px] font-bold text-emerald-600 flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-lg">
                      <CheckCircle size={16} /> Final Configuration
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ── SUMMARY STICKY ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <FadeIn delay={0.4} direction="right">
              <div className="bg-[#0c1024] rounded-[32px] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/20 blur-[80px] rounded-full pointer-events-none" />
                
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D00D6] mb-8">System Summary</h4>
                
                <div className="space-y-6 mb-12 relative z-10">
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <div>
                      <p className="text-white font-bold text-[18px]">{users} Users</p>
                      <p className="text-white/40 text-[12px]">Cloud PBX Configuration</p>
                    </div>
                    <p className="text-white font-medium">${(users * basePrice).toLocaleString()}/mo</p>
                  </div>
                  
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <div>
                      <p className="text-white font-bold text-[18px]">{hardware.length + accessories.length} Devices & Acc</p>
                      <p className="text-white/40 text-[12px]">Yealink Provisioned</p>
                    </div>
                    <p className="text-white font-medium">${(users * (hardwarePrice + accessoryPrice)).toLocaleString()}/mo</p>
                  </div>
                  
                  <div className="flex justify-between items-center text-[#5D00D6] pt-2">
                    <p className="text-[14px] font-bold uppercase tracking-widest">Est. Monthly Total</p>
                    <p className="text-[32px] font-bold text-white tracking-tighter">${totalPerMonth.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 relative z-10">
                  <C9Button className="w-full bg-[#5D00D6] hover:bg-[#4c00b0] text-white rounded-full h-14 text-[15px] font-bold flex items-center justify-center gap-2" asChild>
                    <Link href="#consultation-section">Get Formal Quote</Link>
                  </C9Button>
                  <C9Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 rounded-full h-12 text-[13px] font-bold flex items-center justify-center gap-2" asChild>
                    <Link href="#consultation-section">Request Price Match</Link>
                  </C9Button>
                </div>

              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.5} className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 px-8 py-6 bg-white rounded-full border border-slate-100 shadow-sm max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[13px] text-slate-600 font-bold tracking-wide uppercase">Zero-downtime porting</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[13px] text-slate-600 font-bold tracking-wide uppercase">100% Australian support</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[13px] text-slate-600 font-bold tracking-wide uppercase">Custom call flow design</p>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION: MIGRATION
   ───────────────────────────────────────────────────────── */
const Migration = () => (
  <section className="py-20 lg:py-32 bg-[#0c1024] text-white relative overflow-hidden">
     <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#5D00D6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
     <div className={C}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
           <FadeIn direction="left">
              <span className="text-[#5D00D6] font-bold uppercase tracking-[0.2em] text-[11px] mb-4 block">BROWNFIELD TRANSITION</span>
              <h2 className="text-[32px] lg:text-[48px] font-bold mb-8 leading-tight">Moving From an Old Phone System?</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Migration is where most phone system upgrades fail. C9 uses a structured transition framework to ensure your business stays reachable throughout the entire cutover process. No dropped numbers. No unexpected downtime.
              </p>
              
              <div className="space-y-6">
                 {[
                   { t: "Number Porting", d: "We handle the entire AU porting process with zero loss of ownership." },
                   { t: "Logic Mapping", d: "We review and rebuild your call flows to improve customer experience." },
                   { t: "Site Audit", d: "We check cabling and internet to ensure the new system works flawlessly." },
                   { t: "Go-Live Support", d: "C9 engineers are on standby during your first day of operation." }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                       <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 mt-0.5 border border-white/20">
                          <span className="text-[12px] font-bold">{i+1}</span>
                       </div>
                       <div>
                          <h4 className="font-bold text-white text-[16px] mb-1">{item.t}</h4>
                          <p className="text-white/40 text-[14px]">{item.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </FadeIn>

           <FadeIn direction="right" delay={0.2} className="relative">
              <div className="bg-white/5 border border-white/10 p-10 lg:p-16 rounded-[48px] backdrop-blur-sm shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#5D00D6]/30 blur-[60px] rounded-full" />
                 <h3 className="text-2xl font-bold mb-6">Review My Current Setup</h3>
                 <p className="text-white/60 mb-10 leading-relaxed">
                   Already have pricing from another provider, or looking to replace a legacy PBX? Send us your current bill and we’ll show where C9 can simplify your system.
                 </p>
                 <C9Button className="w-full bg-[#5D00D6] hover:bg-[#4c00b0] text-white rounded-full h-14 font-bold shadow-lg" asChild>
                    <Link href="#consultation-section">Request Setup Review</Link>
                 </C9Button>
              </div>
           </FadeIn>
        </div>
     </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION: ADVERTISING BANNER (URGENCY)
   ───────────────────────────────────────────────────────── */
const AdvertisingBanner = () => (
   <section className="py-16 bg-[#5D00D6] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-[80px]" />
      <div className={C}>
         <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
            <div className="max-w-2xl text-center lg:text-left">
               <h2 className="text-[28px] lg:text-[36px] font-bold text-white leading-tight mb-4">
                  Switch Your Business Phone System Without the Usual Disruption.
               </h2>
               <p className="text-white/80 text-lg">
                  C9 helps businesses replace outdated setups with modern managed communication — without vendor runaround or migration stress.
               </p>
            </div>
            <div className="shrink-0">
               <C9Button className="bg-white text-[#0c1024] hover:bg-slate-100 px-8 h-14 rounded-full font-bold shadow-2xl" asChild>
                  <Link href="#consultation-section">Plan My Migration</Link>
               </C9Button>
            </div>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION: YEALINK PARTNER
   ───────────────────────────────────────────────────────── */
const YealinkPartner = () => (
  <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-slate-50 -z-10 rounded-l-[80px]" />
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn direction="left">
           <div className="flex items-center gap-4 mb-8">
              <div className="font-bold text-3xl text-slate-900 tracking-tight">Yealink</div>
              <div className="h-6 w-[2px] bg-slate-200" />
              <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Certified Hardware Partner</span>
           </div>
           <h2 className="c9-section-heading mb-8">Professional-grade business communication hardware.</h2>
           <p className="c9-body text-lg text-slate-600 mb-10 leading-relaxed">
             Yealink is the industry standard for high-performance voice terminals. As a certified partner, C9 supplies, provisions, and manages every device — ensuring your hardware works in lockstep with your system logic.
           </p>

           <div className="space-y-4">
              {[
                { t: "Centralised Provisioning", d: "Zero-touch deployment directly to your desks." },
                { t: "Firmware Management", d: "Automatic updates handled entirely by C9." },
                { t: "Native Teams Support", d: "Standardised room and desk terminals." },
                { t: "Acoustic Excellence", d: "Noise-cancelling & HD Voice technology." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 bg-white hover:border-[#5D00D6]/30 transition-colors shadow-sm">
                   <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#5D00D6] shrink-0">
                      <Settings size={20} />
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 text-[15px] mb-1">{item.t}</h4>
                      <p className="text-slate-500 text-[13px]">{item.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.2} className="relative">
           <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                 <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-500">
                    <img src="/images/yealink-t54w.png" alt="Desk Phone" className="w-full h-auto mb-6" />
                    <p className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-widest">Desk Terminals</p>
                 </div>
                 <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-500">
                    <img src="/images/yealink-w73p.png" alt="Cordless Phone" className="w-full h-auto mb-6" />
                    <p className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-widest">DECT Cordless</p>
                 </div>
              </div>
              <div className="space-y-6">
                 {/* <div className="bg-[#0c1024] p-8 rounded-[32px] shadow-2xl hover:-translate-y-2 transition-transform duration-500">
                    <img src="/images/yealink-phone-4.jpg" alt="Conference Room" className="w-full h-auto rounded-2xl mb-6 opacity-90" />
                    <p className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Meeting Rooms</p>
                 </div> */}
                 <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-500">
                    <img src="/images/yealink-bh71.png" alt="Headset" className="w-full h-auto mb-6" />
                    <p className="text-[11px] font-bold text-[#5D00D6] uppercase tracking-widest">Wireless Headsets</p>
                 </div>
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION: DOWNLOADABLE GUIDE
   ───────────────────────────────────────────────────────── */
const DownloadableGuide = () => (
   <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className={C}>
         <div className="bg-white rounded-[48px] p-10 lg:p-16 border border-slate-200 shadow-xl flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
            
            <FadeIn direction="left" className="flex-1 relative z-10">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6 text-slate-600 font-bold text-[12px] uppercase tracking-widest">
                  <Download size={14} /> Free Resource
               </div>
               <h2 className="text-[32px] lg:text-[40px] font-bold text-slate-900 leading-tight mb-6">
                  Business Phone System Planning Guide
               </h2>
               <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Download our practical guide to modernising your business communications. Learn how to map out multi-site setups, prepare for migration, and select the right devices for your team.
               </p>
               <ul className="space-y-3 mb-10">
                  {["Migration checklists & timelines", "Teams calling vs PBX considerations", "Device selection framework"].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-[15px]">
                        <CheckCircle size={16} className="text-[#5D00D6]" /> {item}
                     </li>
                  ))}
               </ul>
               <C9Button className="bg-[#0c1024] text-white hover:bg-slate-800 rounded-full px-8 h-14 font-bold shadow-lg">
                  Download the Guide
               </C9Button>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="w-full max-w-md mx-auto lg:mx-0 relative z-10">
               <div className="relative aspect-[3/4] bg-slate-100 rounded-[24px] shadow-2xl border border-slate-200 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500 flex flex-col">
                  <div className="bg-[#5D00D6] p-8 text-white flex-1 flex flex-col justify-between">
                     <div>
                        <div className="font-bold text-[14px] opacity-80 mb-2">C9 Communications</div>
                        <div className="text-[28px] font-bold leading-tight">The Modern Phone System Playbook</div>
                     </div>
                     <div className="text-[12px] uppercase tracking-widest opacity-60">2026 Edition</div>
                  </div>
                  <div className="h-1/3 bg-white p-6 relative">
                     <div className="absolute -top-12 right-6 w-24 h-24 bg-white rounded-full border-4 border-slate-100 shadow-xl flex items-center justify-center p-4">
                        <img src="/images/yealink-t54w.png" alt="Phone" className="w-full" />
                     </div>
                     <div className="space-y-2 mt-4">
                        <div className="w-1/2 h-2 bg-slate-100 rounded-full" />
                        <div className="w-3/4 h-2 bg-slate-100 rounded-full" />
                        <div className="w-2/3 h-2 bg-slate-100 rounded-full" />
                     </div>
                  </div>
               </div>
            </FadeIn>
         </div>
      </div>
   </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function PhoneSystemPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <VoiceConfigurator />
      <CommunicationEcosystems />
      <BusinessStats />
      <UseCases />
      <WhatYouGet />
      <SimplifyCommunication />
      
      <Migration />
      <AdvertisingBanner />
      <YealinkPartner />
      <DownloadableGuide />

      {/* SUPPORT SECTION */}
      <section className="py-20 lg:py-32 bg-white">
         <div className={C}>
            <div className="max-w-4xl mx-auto text-center">
               <FadeIn>
                  <span className="c9-eyebrow mb-4 text-[#5D00D6]">Managed Support</span>
                  <h2 className="c9-section-heading mb-8">Local AU-Managed Ownership</h2>
                  <p className="c9-body text-xl text-slate-600 mb-12">
                    We don't just supply the hardware. We manage the logic, the routing, and the performance every single day. One accountable partner.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8 text-left">
                     {[
                       { t: "AU Engineering", d: "Speak to real experts, not scripts." },
                       { t: "Zero-Downtime Guarantee", d: "Reliable failover path configuration." },
                       { t: "Active Monitoring", d: "We spot issues before your team does." }
                     ].map((item, i) => (
                        <div key={i} className="p-8 rounded-[32px] bg-slate-50 border border-slate-100">
                           <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#5D00D6] mb-6 shadow-sm">
                              <CheckCircle size={20} />
                           </div>
                           <h4 className="font-bold text-slate-900 mb-2">{item.t}</h4>
                           <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                        </div>
                     ))}
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      <section id="consultation-section" className="bg-slate-50 border-t border-slate-100">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="PHONE SYSTEM REVIEW"
          title="Ready to Build a Phone System That Fits Your Business?"
          description="Speak with an AU-managed voice specialist to identify where your current system is failing and how C9 can modernise your setup."
          formTitle="Request Phone System Plan"
        />
      </section>

      <WpFAQAndFeedback 
        faqItems={[
          { q: "Can we keep our existing phone numbers?", a: "Yes. C9 manages the entire porting process to move your existing landline or VoIP numbers into your new system with zero downtime." },
          { q: "Do you provide on-site installation?", a: "Absolutely. We can provide on-site installation and testing across Australia to ensure your phones are configured correctly from Day One." },
          { q: "Does the system work across multiple office locations?", a: "Yes. C9 builds unified phone environments where multiple sites operate as one system with internal dialling and shared call flows." },
          { q: "Can we use Microsoft Teams as our phone system?", a: "Yes. We offer Direct Routing for Microsoft Teams, allowing you to use the Teams app as your primary business phone while keeping your business numbers." },
          { q: "What happens if our internet goes down?", a: "We configure automatic failover paths. Calls can be instantly rerouted to mobile apps, secondary internet lines, or an automated overflow message." },
          { q: "Can C9 review our current phone bill?", a: "Yes. We often identify significant savings or hidden inclusions by reviewing your current bill and comparing it to a managed C9 setup." }
        ]}
      />

      {/* STICKY MOBILE CTA */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-[100]">
         <div className="bg-[#0c1024] rounded-full p-2 shadow-2xl border border-white/10 flex items-center gap-2">
            <Link href="#builder" className="flex-1 h-12 bg-[#5D00D6] text-white rounded-full flex items-center justify-center font-bold text-[13px] uppercase tracking-wider">
               Build Setup
            </Link>
            <Link href="#consultation-section" className="flex-1 h-12 bg-white/10 text-white rounded-full flex items-center justify-center font-bold text-[13px] uppercase tracking-wider">
               Get Quote
            </Link>
         </div>
      </div>
    </main>
  );
}

