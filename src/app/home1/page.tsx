'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Wifi, Phone, Network, Shield,
  HeadphonesIcon, Building2, Users, Globe, Layers,
  Zap, TrendingUp, MapPin
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

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
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO
   ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-6 pb-14 lg:pt-10 lg:pb-20">
    {/* Grid backdrop */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }}
    />
    {/* Radial purple glow */}
    <div
      className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-[0.05]"
      style={{ background: 'radial-gradient(circle, #5D00D6 0%, transparent 70%)' }}
    />

    <div className="relative z-10 container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <Zap size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">IT & Telco Partner — Australia</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              End-to-End IT & Telco —{' '}
              <span className="text-[#5D00D6]">
                From New Office Setup to Enterprise-Scale Infrastructure
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body mb-10 max-w-[540px]">
              Whether you're opening a new location, running a growing business, or managing multiple
              sites, C9 delivers reliable, scalable IT and communications — without the complexity of
              multiple vendors.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#consultation-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group whitespace-nowrap"
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
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-all whitespace-nowrap"
              >
                Get My Setup Plan
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="flex flex-wrap gap-6 mt-10">
              {['One Vendor', 'Day One Ready', 'Multi-Site Expertise', '24/7 Support'].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-slate-500 text-[13px] font-semibold">
                  <CheckCircle size={15} className="text-[#5D00D6]" /> {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} className="relative hidden lg:block">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/80 aspect-[3/2] group">
            <img
              src="/images/c9_support_engineer.png"
              alt="C9 engineer managing enterprise infrastructure"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/20 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg border border-white/60">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#5D00D6] mb-1">Status</div>
              <div className="text-[18px] font-bold text-slate-900 leading-tight">Live & Operational</div>
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
const personaCards = [
  {
    icon: <Building2 size={28} className="text-[#5D00D6]" />,
    eyebrow: 'Greenfield',
    title: 'Opening a New Office?',
    desc: 'We design and deliver your entire IT and telco setup — ready from day one.',
    cta: 'Explore Greenfield',
    href: '/greenfield1',
    img: '/images/greenfield_consultation.png',
  },
  {
    icon: <TrendingUp size={28} className="text-[#5D00D6]" />,
    eyebrow: 'Business',
    title: 'Running a Growing Business?',
    desc: 'We optimise, support, and scale your existing setup so your business runs smoothly.',
    cta: 'Explore Business',
    href: '/business1',
    img: '/images/hero_business.png',
  },
  {
    icon: <Globe size={28} className="text-[#5D00D6]" />,
    eyebrow: 'Enterprise',
    title: 'Managing Multiple Locations?',
    desc: 'We bring control, consistency, and performance across your entire environment.',
    cta: 'Explore Enterprise',
    href: '/enterprise1',
    img: '/images/realistic_business_networking_rack_1776077491291.png',
  },
];

const TrendingUpIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5D00D6]">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const PersonaRouting = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn className="text-center mb-14">
        <p className="c9-eyebrow mb-4">Find Your Solution</p>
        <h2 className="c9-section-heading mb-0">Built for Every Stage of Your Business</h2>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            eyebrow: 'Greenfield',
            title: 'Opening a New Office?',
            desc: 'We design and deliver your entire IT and telco setup — ready from day one.',
            cta: 'Explore Greenfield',
            href: '/greenfield1',
            img: '/images/greenfield_consultation.png',
            icon: <Building2 size={22} />,
          },
          {
            eyebrow: 'Business',
            title: 'Running a Growing Business?',
            desc: 'We optimise, support, and scale your existing setup so your business runs smoothly.',
            cta: 'Explore Business',
            href: '/business1',
            img: '/images/hero_business.png',
            icon: <TrendingUpIcon />,
          },
          {
            eyebrow: 'Enterprise',
            title: 'Managing Multiple Locations?',
            desc: 'We bring control, consistency, and performance across your entire environment.',
            cta: 'Explore Enterprise',
            href: '/enterprise1',
            img: '/images/realistic_business_networking_rack_1776077491291.png',
            icon: <Globe size={22} />,
          },
        ].map((card, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <a href={card.href} className="group flex flex-col bg-white rounded-[28px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#5D00D6]/20 transition-all duration-500 h-full">
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="inline-flex items-center gap-2 text-[#5D00D6] mb-4">
                  {card.icon}
                  <span className="c9-eyebrow !mb-0 !text-[#5D00D6]">{card.eyebrow}</span>
                </div>
                <h3 className="text-[22px] font-bold text-slate-900 mb-3 leading-tight">{card.title}</h3>
                <p className="c9-body !text-[15px] text-slate-600 mb-6 flex-1">{card.desc}</p>
                <span className="inline-flex items-center gap-2 text-[#5D00D6] font-bold text-[14px] group-hover:gap-3 transition-all">
                  {card.cta}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
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
   SECTION 3 — POSITIONING
   ───────────────────────────────────────────────────────── */
const Positioning = () => (
  <section className="py-16 lg:py-24 bg-[#0c1024] relative overflow-hidden">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.08]"
      style={{ background: 'radial-gradient(ellipse at 60% 50%, #5D00D6, transparent)' }}
    />
    <div className="relative z-10 container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <FadeIn>
          <p className="c9-eyebrow !text-[#a56eff] mb-5">Positioning</p>
          <h2 className="c9-section-heading !text-white mb-6">One Partner. Complete Technology Coverage.</h2>
          <p className="c9-body !text-white/70 mb-6 max-w-[520px]">
            C9 combines telco and managed IT services into a single, structured solution — giving you
            one partner to design, deploy, and support your entire environment.
          </p>
          <p className="c9-body !text-white/70 mb-10 max-w-[520px]">
            We remove the need to manage multiple vendors and ensure everything works together seamlessly.
          </p>
          <div className="flex flex-col gap-4">
            {[
              'Single point of accountability — no vendor blame-shifting',
              'Design, deployment, and support in one relationship',
              'Telco + IT under one roof — delivered as one solution',
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#a56eff] shrink-0 mt-0.5" />
                <span className="text-white/80 font-medium text-[15px]">{point}</span>
              </div>
            ))}
          </div>
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
                  className={`text-center p-6 ${
                    i < 2 ? 'border-b border-white/10' : ''
                  } ${i % 2 === 0 ? 'border-r border-white/10' : ''}`}
                >
                  <div className="text-4xl font-extrabold text-[#5D00D6] mb-2">{item.stat}</div>
                  <div className="text-white/50 text-[11px] font-bold uppercase tracking-widest text-balance">{item.label}</div>
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
   SECTION 4 — CORE SERVICES
   ───────────────────────────────────────────────────────── */
const services = [
  {
    icon: <Wifi size={22} className="text-[#5D00D6]" />,
    title: 'Connectivity & Internet',
    desc: 'Reliable, business-grade connectivity designed for performance and uptime.',
  },
  {
    icon: <Phone size={22} className="text-[#5D00D6]" />,
    title: 'Voice & Communication',
    desc: 'Modern phone and collaboration systems across teams and locations.',
  },
  {
    icon: <Network size={22} className="text-[#5D00D6]" />,
    title: 'Networking & Wi-Fi',
    desc: 'Secure, scalable infrastructure built for reliability and growth.',
  },
  {
    icon: <Shield size={22} className="text-[#5D00D6]" />,
    title: 'Security & Firewall',
    desc: 'Protection built into your environment from day one.',
  },
  {
    icon: <HeadphonesIcon size={22} className="text-[#5D00D6]" />,
    title: 'Managed IT Support',
    desc: 'Ongoing monitoring, support, and optimisation.',
  },
];

const CoreServices = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn className="text-center mb-14">
        <p className="c9-eyebrow mb-4">Core Services</p>
        <h2 className="c9-section-heading mb-0">What We Deliver</h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:shadow-lg hover:border-[#5D00D6]/20 hover:bg-white transition-all duration-300 group h-full flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center mb-5 group-hover:bg-[#5D00D6]/15 transition-colors shrink-0">
                {s.icon}
              </div>
              <h3 className="c9-card-title mb-2">{s.title}</h3>
              <p className="c9-body !text-[14px] text-slate-600">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
        {/* Wide card spanning remaining space */}
        <FadeIn delay={0.3} className="sm:col-span-2 lg:col-span-1">
          <div className="bg-[#5D00D6] rounded-2xl p-7 border border-[#5D00D6] h-full flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                <Layers size={22} className="text-white" />
              </div>
              <h3 className="text-[20px] font-bold text-white mb-2">Everything, Together</h3>
              <p className="text-white/75 text-[14px] leading-relaxed">
                Every service is designed to work as one integrated environment — not separate products bolted together.
              </p>
            </div>
            <a
              href="#consultation-section"
              onClick={(e) => { e.preventDefault(); document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="mt-6 inline-flex items-center gap-2 text-white font-bold text-[14px] hover:gap-3 transition-all"
            >
              See How It Works <ArrowRight size={16} />
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — ENTERPRISE CONTROL
   ───────────────────────────────────────────────────────── */
const EnterpriseControl = () => (
  <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100 overflow-hidden">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn className="relative">
          <div className="rounded-[32px] overflow-hidden aspect-[4/3] shadow-xl">
            <img
              src="/images/greenfield_support.png"
              alt="C9 managing complex enterprise environments"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-6 right-6 bg-[#5D00D6] text-white rounded-2xl px-5 py-4 shadow-xl">
            <div className="text-[11px] font-bold uppercase tracking-widest opacity-70 mb-1">Control</div>
            <div className="text-[18px] font-bold leading-tight">Single Point</div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="c9-eyebrow text-[#5D00D6] mb-4">Enterprise Control</p>
          <h2 className="c9-section-heading mb-6">We Bring Control to Complex Environments</h2>
          <p className="c9-body text-slate-700 mb-4">
            For businesses managing multiple vendors, locations, and systems, C9 acts as a single point of control.
          </p>
          <p className="c9-body text-slate-700 mb-4">
            We integrate into your existing environment, manage vendor coordination, and bring visibility, consistency, and performance across your entire operation.
          </p>
          <p className="c9-body text-slate-700 mb-8 font-semibold text-[#0c1024]">
            You focus on your business — we take responsibility for keeping everything running.
          </p>
          <a
            href="/enterprise1"
            className="inline-flex items-center gap-2 bg-[#0c1024] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#5D00D6] transition-all group"
          >
            Explore Enterprise Solutions
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — INDUSTRY FOCUS
   ───────────────────────────────────────────────────────── */
const industries = [
  { icon: <Users size={20} />, label: 'Professional Services' },
  { icon: <Shield size={20} />, label: 'Healthcare' },
  { icon: <MapPin size={20} />, label: 'Retail & Hospitality' },
  { icon: <Building2 size={20} />, label: 'Real Estate' },
  { icon: <Globe size={20} />, label: 'Finance & Legal' },
  { icon: <Network size={20} />, label: 'Construction' },
];

const IndustryFocus = () => (
  <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <p className="c9-eyebrow mb-4">Industry Focus</p>
          <h2 className="c9-section-heading mb-6">Built for Real-World Industries</h2>
          <p className="c9-body text-slate-700 mb-8">
            We support businesses across industries including retail, healthcare, and professional
            services — delivering solutions aligned with real operational needs.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {industries.map((ind, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-2xl px-4 py-3 border border-slate-100 text-slate-700">
                <span className="text-[#5D00D6]">{ind.icon}</span>
                <span className="font-semibold text-[14px]">{ind.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="hidden lg:block">
          <div className="rounded-[32px] overflow-hidden aspect-[4/3] shadow-xl">
            <img
              src="/images/c9_team_collaboration.png"
              alt="C9 team working across industries"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — VENDOR TRUST STRIP
   ───────────────────────────────────────────────────────── */
const VendorStrip = () => (
  <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn className="text-center mb-12">
        <p className="c9-eyebrow mb-4">Technology Partners</p>
        <h2 className="c9-section-heading mb-4">Powered by Leading Technology Partners</h2>
        <p className="c9-body max-w-2xl mx-auto text-slate-600">
          We work with enterprise-grade vendors across networking, security, and communications — ensuring
          reliability, scalability, and flexibility without locking you into a single provider.
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { name: 'Microsoft', src: '/partners/microsoft-logo-svgrepo-com.svg' },
          { name: 'Cisco', src: '/partners/ns/cisco.png' },
          { name: 'Fortinet', src: '/partners/ns/fortinet.png' },
          { name: 'HP', src: '/partners/Hewlett_Packard_Enterprise_logo.svg' },
          { name: 'Yealink', src: '/images/clients/yealink.png' },
        ].map((v, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 flex items-center justify-center h-32 group hover:border-[#5D00D6]/20 transition-all shadow-sm">
              <img
                src={v.src}
                alt={v.name}
                className="h-14 w-auto max-w-[120px] object-contain opacity-75 group-hover:opacity-100 transition-all"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — HUMAN TRUST
   ───────────────────────────────────────────────────────── */
const HumanTrust = () => (
  <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn className="relative">
          <div className="rounded-[32px] overflow-hidden aspect-[4/3] shadow-2xl">
            <img
              src="/images/c9_support_engineer.png"
              alt="C9 support engineer working with client"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="c9-eyebrow mb-4">Human Support</p>
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
              'Team that knows your environment',
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
   SECTION 9 — FINAL CTA
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#consultation-section"
            onClick={(e) => { e.preventDefault(); document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-10 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/40 group whitespace-nowrap"
          >
            Book a Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#consultation-section"
            onClick={(e) => { e.preventDefault(); document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white rounded-full h-14 px-10 font-bold text-[15px] hover:bg-white/10 transition-all whitespace-nowrap"
          >
            Talk to an Expert
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function Home1Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <PersonaRouting />
      <Positioning />
      <CoreServices />
      <EnterpriseControl />
      <IndustryFocus />
      <VendorStrip />
      <HumanTrust />
      <FinalCTA />
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="FREE CONSULTATION"
          title="Let's Plan Your Technology Together"
          description="Tell us about your business and we'll put together the right plan — no commitment, no complexity."
          formTitle="Book Your Consultation"
        />
      </section>
    </main>
  );
}
