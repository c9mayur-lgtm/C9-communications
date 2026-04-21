'use client';

import React from 'react';
import {
  ArrowRight, CheckCircle, HeadphonesIcon, Shield, Activity,
  Users, TrendingUp, Network, Phone, Wifi, Layers, Globe, Building2, MapPin
} from 'lucide-react';
import { motion } from 'framer-motion';

import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpWhyPartner } from '@/components/wordpress/WpWhyPartner';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpVendors } from '@/components/wordpress/WpVendors';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { HeroHighlighter } from '@/components/common/HeroHighlighter';
import { TrustProofSystem } from '@/components/sections/TrustProofSystem';

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPER
   ───────────────────────────────────────────────────────── */
const FadeIn = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO
   ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative pt-6 pb-12 lg:pt-10 lg:pb-20 overflow-hidden bg-white">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-0 right-0 top-0 m-auto h-[310px] w-[310px] rounded-full bg-[#5D00D6] opacity-10 blur-[100px]" />
    </div>

    <div className="container mx-auto px-6 md:px-8 w-full relative z-10" style={{ maxWidth: '1240px' }}>
      <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-6 xl:gap-8 items-center w-full">
        <div className="py-4 pr-0 xl:pr-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/10 border border-[#5D00D6]/20 mb-7">
              <span className="text-[#5D00D6] text-[12px] font-bold uppercase tracking-widest">
                IT & Telco Partner — Australia
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="c9-hero-title mb-5 text-slate-900 leading-[1.05]">
              IT & Telco That Actually Works{' '}
              <span className="text-[#5D00D6]">for Your Business</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="c9-body mb-10 max-w-[550px] text-slate-600 text-lg">
              Whether you're opening a new office, improving your current setup, or managing multiple
              locations, C9 delivers reliable, scalable technology — without the complexity of multiple
              vendors.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-4">
              <a
                href="#consultation-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-8 font-bold text-[15px] hover:bg-[#4d00b3] transition-colors shadow-lg shadow-purple-900/20 group cursor-pointer whitespace-nowrap"
              >
                Talk to an Expert
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#consultation-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-8 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                Get My Setup Plan
              </a>
            </div>
            <p className="text-[13px] text-slate-500 mb-10 ml-1">No obligation. Just clear, practical advice.</p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-5">
              {['One Partner', 'Day One Ready', 'Multi-Site Expertise', '24/7 Support'].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-600 text-[13px] font-bold">
                  <CheckCircle size={16} className="text-[#5D00D6]" /> {t}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="relative hidden lg:block">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/60 aspect-[3/2]">
            <img
              src="/images/c9_support_engineer.png"
              alt="C9 engineer managing IT environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1A003A]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg border border-white/60">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#5D00D6] mb-1">Status</div>
              <div className="text-[17px] font-bold text-slate-900 leading-tight">Live & Operational</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — PERSONA ROUTING
   ───────────────────────────────────────────────────────── */
const TrendingUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const PersonaRouting = () => (
  <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn className="text-center mb-12">
        <p className="c9-eyebrow mb-4">Find Your Solution</p>
        <h2 className="c9-section-heading mb-0">Choose What You Need Help With</h2>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            eyebrow: 'Greenfield',
            title: 'Opening a New Office',
            desc: 'We design and deliver your entire IT and telco setup — ready from day one.',
            cta: 'Explore Greenfield',
            href: '/greenfield1',
            img: '/images/greenfield_consultation.png',
            icon: <Building2 size={20} />,
          },
          {
            eyebrow: 'Business',
            title: 'Running a Business',
            desc: 'We optimise, support, and scale your existing setup so your business runs smoothly.',
            cta: 'Explore Business',
            href: '/business1',
            img: '/images/hero_business.png',
            icon: <TrendingUpIcon />,
          },
          {
            eyebrow: 'Enterprise',
            title: 'Managing Multiple Locations',
            desc: 'We bring control, consistency, and performance across your entire environment.',
            cta: 'Explore Enterprise',
            href: '/enterprise1',
            img: '/images/realistic_business_networking_rack_1776077491291.png',
            icon: <Globe size={20} />,
          },
        ].map((card, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <a
              href={card.href}
              className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#5D00D6]/20 transition-all duration-500 h-full"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="inline-flex items-center gap-2 text-[#5D00D6] mb-3">
                  {card.icon}
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#5D00D6]">{card.eyebrow}</span>
                </div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2 leading-tight">{card.title}</h3>
                <p className="text-[14px] text-slate-600 leading-relaxed mb-5 flex-1">{card.desc}</p>
                <span className="inline-flex items-center gap-2 text-[#5D00D6] font-bold text-[13px] group-hover:gap-3 transition-all">
                  {card.cta}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 3 — CORE BUSINESS VALUE
   ───────────────────────────────────────────────────────── */
const CoreValue = () => {
  const philosophy = [
    {
      icon: <HeadphonesIcon size={24} />,
      title: 'Rapid Response',
      desc: 'We prioritise your uptime with local engineers who act fast.',
    },
    {
      icon: <Users size={24} />,
      title: 'Human Accountability',
      desc: 'No ticket black holes. You get dedicated support that takes ownership.',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Strategic Growth',
      desc: 'We align your technology with your business goals, not just fixing issues.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <FadeIn>
              <p className="c9-eyebrow mb-4">Core Business Value</p>
              <h2 className="c9-section-heading mb-6">We Fix What's Slowing Your Business Down</h2>
              <p className="c9-body text-slate-600 mb-4">
                If your current IT and telco setup is unreliable, difficult to manage, or holding back
                growth, C9 helps you simplify, stabilise, and scale your environment.
              </p>
              <p className="c9-body text-slate-700 mb-10 font-semibold">
                We don't just support your systems — we improve how your business operates.
              </p>
            </FadeIn>
            <div className="space-y-5">
              {philosophy.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:shadow-lg hover:bg-white transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center text-[#5D00D6] shrink-0 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="c9-body !mb-0 !text-[14px] !leading-relaxed text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.15} className="hidden lg:block">
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="/images/c9_team_collaboration.png"
                alt="C9 team working on client solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 4 — CORE SERVICES
   ───────────────────────────────────────────────────────── */
const coreServices = [
  {
    icon: <Wifi size={22} className="text-[#5D00D6]" />,
    title: 'Connectivity & Internet',
    desc: 'Reliable, business-grade connectivity designed to keep your operations running without interruption.',
  },
  {
    icon: <Phone size={22} className="text-[#5D00D6]" />,
    title: 'Voice & Communication',
    desc: 'Modern phone systems that keep your team connected across locations and devices.',
  },
  {
    icon: <Network size={22} className="text-[#5D00D6]" />,
    title: 'Networking & Wi-Fi',
    desc: 'Secure, high-performance infrastructure built for stability and growth.',
  },
  {
    icon: <Shield size={22} className="text-[#5D00D6]" />,
    title: 'Security & Firewall',
    desc: 'Protection built into your environment from day one.',
  },
  {
    icon: <HeadphonesIcon size={22} className="text-[#5D00D6]" />,
    title: 'Managed IT Support',
    desc: 'Responsive, ongoing support that keeps everything running smoothly.',
  },
  {
    icon: <Layers size={22} className="text-white" />,
    title: 'One Integrated Solution',
    desc: 'Every service designed to work together — not bolted on separately.',
    highlight: true,
  },
];

const CoreServices = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn className="text-center mb-14">
        <p className="c9-eyebrow mb-4">Core Services</p>
        <h2 className="c9-section-heading mb-0">What We Deliver</h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreServices.map((s, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div
              className={`rounded-2xl p-7 border h-full flex flex-col transition-all duration-300 group ${
                s.highlight
                  ? 'bg-[#5D00D6] border-[#5D00D6]'
                  : 'bg-white border-slate-100 hover:shadow-lg hover:border-[#5D00D6]/20'
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 shrink-0 transition-colors ${
                  s.highlight
                    ? 'bg-white/15'
                    : 'bg-[#5D00D6]/8 group-hover:bg-[#5D00D6]/15'
                }`}
              >
                {s.icon}
              </div>
              <h3 className={`text-[18px] font-bold mb-2 ${s.highlight ? 'text-white' : 'text-slate-900'}`}>
                {s.title}
              </h3>
              <p className={`text-[14px] leading-relaxed ${s.highlight ? 'text-white/75' : 'text-slate-600'}`}>
                {s.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — ENTERPRISE CONTROL
   ───────────────────────────────────────────────────────── */
const EnterpriseControl = () => (
  <section className="py-16 lg:py-24 bg-[#0c1024] relative overflow-hidden">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.1]"
      style={{ background: 'radial-gradient(ellipse at 60% 50%, #5D00D6, transparent 70%)' }}
    />
    <div className="relative z-10 container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <FadeIn>
          <p className="c9-eyebrow !text-[#a56eff] mb-5">Enterprise Control</p>
          <h2 className="c9-section-heading !text-white mb-6">
            We Bring Control to Complex Environments
          </h2>
          <p className="c9-body !text-white/70 mb-4 max-w-[520px]">
            For businesses managing multiple vendors, systems, and locations, complexity becomes a risk.
          </p>
          <p className="c9-body !text-white/70 mb-4 max-w-[520px]">
            C9 integrates into your existing environment and takes ownership of coordination, support,
            and performance.
          </p>
          <p className="c9-body !text-white/70 mb-8 max-w-[520px]">
            We act as your single point of control — managing vendors, improving visibility, and ensuring
            consistency across your entire operation.
          </p>
          <p className="text-white font-bold text-[16px] mb-10">
            You stay focused on your business. We take responsibility for keeping everything running.
          </p>
          <a
            href="/enterprise1"
            className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all group whitespace-nowrap"
          >
            Explore Enterprise Solutions
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-0">
              {[
                { stat: '1', label: 'Partner for everything' },
                { stat: '100%', label: 'Ownership from day one' },
                { stat: '24/7', label: 'Monitoring & support' },
                { stat: '0', label: 'Vendor complexity' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`text-center p-6 ${i < 2 ? 'border-b border-white/10' : ''} ${
                    i % 2 === 0 ? 'border-r border-white/10' : ''
                  }`}
                >
                  <div className="text-4xl font-extrabold text-[#5D00D6] mb-2">{item.stat}</div>
                  <div className="text-white/50 text-[11px] font-bold uppercase tracking-widest text-balance">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — GREENFIELD HOOK
   ───────────────────────────────────────────────────────── */
const GreenfieldHook = () => (
  <section className="py-16 lg:py-20 bg-white border-b border-slate-100 overflow-hidden">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn delay={0.1}>
          <p className="c9-eyebrow text-[#5D00D6] mb-4">Greenfield Setup</p>
          <h2 className="c9-section-heading mb-6">Opening a New Office?</h2>
          <p className="c9-body text-slate-700 mb-4">
            We handle everything — from internet and phones to network, security, and support — so your
            business is ready from day one.
          </p>
          <p className="c9-body text-slate-700 font-bold mb-8">
            No vendor coordination. No delays. No guesswork.
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {[
              'Full environment designed and delivered before you open',
              'Single point of contact from planning to support',
              'Ready from day one — guaranteed',
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-[#5D00D6] shrink-0 mt-0.5" />
                <span className="font-semibold text-[14px] text-slate-700">{p}</span>
              </div>
            ))}
          </div>
          <a
            href="/greenfield1"
            className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all group whitespace-nowrap"
          >
            Plan My Office Setup
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>

        <FadeIn className="hidden lg:block">
          <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-xl">
            <img
              src="/images/enterprise_office_planner.png"
              alt="C9 team planning new office setup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#5D00D6] mb-1">Delivery</div>
              <div className="text-[17px] font-bold text-slate-900">Ready Before Day One</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — INDUSTRY FOCUS
   ───────────────────────────────────────────────────────── */
const industries = [
  { icon: <Users size={18} />, label: 'Professional Services' },
  { icon: <Shield size={18} />, label: 'Healthcare' },
  { icon: <MapPin size={18} />, label: 'Retail & Hospitality' },
  { icon: <Building2 size={18} />, label: 'Real Estate' },
  { icon: <Globe size={18} />, label: 'Finance & Legal' },
  { icon: <Network size={18} />, label: 'Construction' },
];

const IndustryFocus = () => (
  <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <p className="c9-eyebrow mb-4">Industry Focus</p>
          <h2 className="c9-section-heading mb-2">Built for Real-World Industries</h2>
          <p className="text-[14px] text-[#5D00D6] font-bold mb-6">Supporting industry-specific environments with reliable, scalable systems</p>
          <p className="c9-body text-slate-600 mb-8">
            We support businesses across industries including retail, healthcare, and professional
            services — delivering solutions aligned with real operational needs.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-slate-100 text-slate-700 hover:border-[#5D00D6]/20 hover:shadow-sm transition-all"
              >
                <span className="text-[#5D00D6]">{ind.icon}</span>
                <span className="font-semibold text-[13px]">{ind.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="hidden lg:block">
          <div className="rounded-[32px] overflow-hidden aspect-[4/3] shadow-xl">
            <img
              src="/images/hero_enterprise.png"
              alt="C9 supporting real-world industries"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — VENDOR TRUST STRIP
   ───────────────────────────────────────────────────────── */
const VendorStrip = () => (
  <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn className="text-center mb-12">
        <p className="c9-eyebrow mb-4">Technology Partners</p>
        <h2 className="c9-section-heading mb-4">Powered by Leading Technology Partners</h2>
        <p className="c9-body max-w-2xl mx-auto text-slate-600">
          We work with enterprise-grade vendors across networking, security, and communications — ensuring
          reliability, scalability, and flexibility without locking you into a single provider.
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {[
          { name: 'Microsoft', src: '/partners/microsoft-logo-svgrepo-com.svg' },
          { name: 'Cisco', src: '/partners/ns/cisco.png' },
          { name: 'Fortinet', src: '/partners/ns/fortinet.png' },
          { name: 'HP', src: '/partners/Hewlett_Packard_Enterprise_logo.svg' },
          { name: 'Yealink', src: '/images/clients/yealink.png' },
        ].map((v, i) => (
          <FadeIn key={i} delay={i * 0.07}>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl px-4 py-4 md:px-6 flex items-center justify-center h-28 group hover:border-[#5D00D6]/20 hover:bg-white hover:shadow-sm transition-all">
              <img
                src={v.src}
                alt={v.name}
                className="h-16 md:h-20 w-auto max-w-[160px] object-contain opacity-75 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — HUMAN TRUST
   ───────────────────────────────────────────────────────── */
const HumanTrust = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn className="relative">
          <div className="relative rounded-[32px] overflow-hidden aspect-video lg:aspect-square shadow-2xl">
            <img
              src="/images/greenfield_support.png"
              className="w-full h-full object-cover"
              alt="Real C9 support engineers"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="c9-eyebrow mb-4">Direct Access</p>
          <h2 className="c9-section-heading mb-6 text-[#0c1024]">Real Support. Real People.</h2>
          <p className="c9-body text-slate-700 mb-5">
            When something goes wrong, you're not dealing with tickets or delays.
          </p>
          <p className="c9-body text-slate-700 mb-5">
            You're speaking to a team that understands your environment, takes ownership, and resolves
            issues fast.
          </p>
          <p className="c9-body mb-8 font-bold text-[#5D00D6]">
            We don't just deploy systems — we support your business every day.
          </p>
          <div className="flex flex-col gap-3">
            {[
              'Direct access — no escalation queues',
              'Engineers who know your specific environment',
              'Fast resolution, full ownership',
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle size={16} className="text-[#5D00D6] shrink-0" />
                <span className="font-semibold text-[14px] text-slate-700">{p}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 10 — FINAL CTA
   ───────────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="py-20 lg:py-28 bg-[#0c1024] relative overflow-hidden">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.12]"
      style={{ background: 'radial-gradient(ellipse at center, #5D00D6, transparent 70%)' }}
    />
    <div className="relative z-10 container mx-auto px-6 md:px-8 text-center" style={{ maxWidth: '1240px' }}>
      <FadeIn>
        <p className="c9-eyebrow !text-[#a56eff] mb-5">Get Started</p>
        <h2 className="c9-section-heading !text-white mb-6 max-w-3xl mx-auto">
          Let's Get Your Environment Working the Right Way
        </h2>
        <p className="c9-body !text-white/65 max-w-2xl mx-auto mb-10">
          Whether you're starting fresh, improving your setup, or managing a complex environment, we'll
          help you move forward with clarity and confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/40 group whitespace-nowrap"
          >
            Talk to an Expert
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white rounded-full h-14 px-10 font-bold text-[15px] hover:bg-white/10 transition-all whitespace-nowrap"
          >
            Book a Consultation
          </a>
        </div>
        <p className="text-[13px] text-white/50">No obligation. Just clear, practical advice.</p>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function Home1Page() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      <Hero />
      <HeroHighlighter />
      <WpClientTicker />

      <PersonaRouting />
      <CoreValue />
      <CoreServices />
      <EnterpriseControl />
      <GreenfieldHook />
      <IndustryFocus />
      <VendorStrip />
      <HumanTrust />

      <WpWhyPartner />
      <WpVendors />

      <WpCaseStudies
        articles={[
          {
            tag: 'REAL ESTATE',
            title: 'Multi-Site Network Consolidation for Stockdale & Leggo',
            desc: 'How we unified communications and Internet across 70+ franchise offices into a single, centrally managed network, reducing telecommunications spend by 32%.',
            img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
            videoText: 'Stockdale & Leggo Consolidation',
            href: '/case-studies/retail-pos-stabilisation'
          },
          {
            tag: 'HEALTHCARE',
            title: 'Migrating Arthritis Australia to Agile Cloud Voice',
            desc: 'Replacing end-of-life on-premise systems with a flexible cloud phone system, enabling their team to field critical calls remotely and securely.',
            img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
            videoText: 'Arthritis Foundation Voice',
            href: '/case-studies/legal-firm-takeover'
          },
          {
            tag: 'EDUCATION',
            title: 'Enterprise Ethernet for Baxter Institute',
            desc: 'Delivering direct 1Gbps/1Gbps fibre connectivity to support hundreds of concurrent students and cloud-hosted learning environments without latency.',
            img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
            videoText: 'Baxter Institute Network',
            href: '/case-studies/greenfield-site-rollout'
          },
        ]}
      />

      <WpFAQAndFeedback />

      <TrustProofSystem />

      <FinalCTA />

      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="FREE CONSULTATION"
          title="Let's Get Your Environment Right"
          description="Whether you're starting fresh, optimising your current setup, or managing a complex environment — we'll build the right plan for you."
          formTitle="Book a Consultation"
        />
      </section>
    </main>
  );
}
