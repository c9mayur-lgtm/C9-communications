'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Wifi, Phone, Monitor, Shield,
  HeadphonesIcon, Building2, Zap, Layers, Network,
  ShoppingBag, Stethoscope, Briefcase, MapPin, Users,
} from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';

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
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO (LIGHT THEME)
   ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-6 pb-16 lg:pt-10 lg:pb-24">
    {/* Subtle grid backdrop */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }}
    />
    {/* Soft radial accent — top left */}
    <div
      className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.06]"
      style={{ background: 'radial-gradient(circle, #5D00D6 0%, transparent 70%)' }}
    />

    <div className="relative z-10 container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT */}
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <Zap size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Greenfield Office Setup</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Opening a New Office?{' '}
              <span className="text-[#5D00D6]">We Build Your Entire IT Environment</span>{' '}
              — End to End.
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="c9-body mb-10 max-w-[530px]">
              From internet and phones to network, security, and support — C9 delivers a complete, ready-to-use workplace setup so your business is operational from day one.
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
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 group"
              >
                Get My Setup Plan{' '}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#differentiator"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('differentiator')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-all"
              >
                Talk to a Solutions Architect
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                'One Vendor, One Plan',
                'Day One Ready',
                '99.99% Uptime SLA',
                'Australian Support',
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 text-slate-500 text-[13px] font-semibold"
                >
                  <CheckCircle size={15} className="text-[#5D00D6]" /> {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* RIGHT — hero image */}
        <FadeIn delay={0.12} className="relative hidden lg:block">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/80 aspect-[4/3] group cursor-pointer">
            <img
              src="/images/greenfield_hero.png"
              alt="Brand-new office environment set up by C9 Communications"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/20 via-transparent to-transparent group-hover:from-[#0c1024]/30 transition-colors duration-700" />

            {/* Floating badge — bottom left */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg border border-white/60">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#5D00D6] mb-1">
                Average Go-Live
              </div>
              <div className="text-[18px] font-bold text-slate-900 leading-tight">
                5–10 Business Days
              </div>
            </div>

            {/* Badge — top right */}
            <div className="absolute top-6 right-6 bg-[#5D00D6] text-white rounded-2xl px-4 py-3 text-center shadow-lg">
              <div className="text-[11px] font-bold uppercase tracking-widest opacity-75 mb-0.5">
                Zero Coordination
              </div>
              <div className="text-[14px] font-extrabold">Required</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — SCENARIO / WHO THIS IS FOR
   ───────────────────────────────────────────────────────── */
const scenarios = [
  {
    icon: <Building2 size={22} className="text-[#5D00D6]" />,
    title: 'Opening a New Office',
    desc: 'Launching your first or next location and need everything designed, delivered, and operational before your team arrives.',
  },
  {
    icon: <MapPin size={22} className="text-[#5D00D6]" />,
    title: 'Rolling Out Multiple Locations',
    desc: 'Expanding across sites with a consistent technology standard — deployed at scale without the coordination burden.',
  },
  {
    icon: <Network size={22} className="text-[#5D00D6]" />,
    title: 'Relocating an Existing Business',
    desc: 'Moving premises and needing your entire communications and IT environment re-established without disruption.',
  },
  {
    icon: <Users size={22} className="text-[#5D00D6]" />,
    title: 'Launching Without an Internal IT Team',
    desc: 'No in-house IT capability? We act as your dedicated technology partner — from procurement through to ongoing support.',
  },
];

const ScenarioBlock = () => (
  <section className="py-16 bg-slate-50 border-y border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left — copy */}
        <FadeIn>
          <p className="c9-eyebrow mb-4">Who This Is Built For</p>
          <h2 className="c9-section-heading mb-5">
            Built for Businesses Starting Fresh
          </h2>
          <p className="c9-body mb-5 max-w-lg">
            Whether you&apos;re launching a new office, expanding into a new location, or relocating your operations, setting up IT and communications can quickly become complex.
          </p>
          <p className="c9-body max-w-lg">
            We simplify the entire process by designing, delivering, and supporting everything under one roof.
          </p>
        </FadeIn>

        {/* Right — scenario cards */}
        <div className="grid gap-4">
          {scenarios.map((s, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-white hover:border-[#5D00D6]/25 hover:shadow-md transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center shrink-0 group-hover:bg-[#5D00D6]/15 transition-colors">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-[15px] tracking-tight mb-1">{s.title}</h3>
                  <p className="text-slate-500 text-[13.5px] leading-relaxed">{s.desc}</p>
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
   SECTION 3 — WHAT YOU GET (CORE OFFERING)
   ───────────────────────────────────────────────────────── */
const offerings = [
  {
    icon: <Wifi size={24} className="text-[#5D00D6]" />,
    title: 'Internet & Connectivity',
    desc: 'Fast, reliable business-grade internet designed for your location and future growth.',
  },
  {
    icon: <Phone size={24} className="text-[#5D00D6]" />,
    title: 'Voice & Communication',
    desc: 'Modern phone systems that keep your team connected across locations and devices.',
  },
  {
    icon: <Network size={24} className="text-[#5D00D6]" />,
    title: 'Network & Wi-Fi',
    desc: 'Secure, high-performance network infrastructure built for reliability and scalability.',
  },
  {
    icon: <Shield size={24} className="text-[#5D00D6]" />,
    title: 'Security & Firewall',
    desc: 'Enterprise-grade protection to keep your business safe from day one.',
  },
  {
    icon: <HeadphonesIcon size={24} className="text-[#5D00D6]" />,
    title: 'Managed Support',
    desc: 'Ongoing support and monitoring so you don&apos;t have to worry about IT.',
  },
  {
    icon: <Monitor size={24} className="text-[#5D00D6]" />,
    title: 'Hardware & Devices',
    desc: 'Sourced, configured, and deployed as part of your complete setup.',
  },
];

const WhatYouGet = () => (
  <section id="what-we-deliver" className="py-16 lg:py-20 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn>
        <div className="text-center mb-14">
          <p className="c9-eyebrow mb-4">Complete Coverage</p>
          <h2 className="c9-section-heading mb-5">
            Everything You Need — Delivered as One Solution
          </h2>
          <p className="c9-body max-w-2xl mx-auto">
            From the moment you engage us, we take ownership of every component. You manage one relationship — we manage everything else.
          </p>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offerings.map((o, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:shadow-lg hover:border-[#5D00D6]/25 hover:bg-white transition-all duration-300 group h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center mb-5 group-hover:bg-[#5D00D6]/15 transition-colors shrink-0">
                {o.icon}
              </div>
              <h3 className="c9-card-title mb-3">{o.title}</h3>
              <p className="c9-body mt-auto !text-[14px]">{o.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-12 text-center">
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-colors shadow-xl shadow-purple-900/20 group"
          >
            Get My Setup Plan{' '}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — DIFFERENTIATOR (DARK)
   ───────────────────────────────────────────────────────── */
const differentiatorPoints = [
  'Faster setup and deployment',
  'Reduced risk and downtime',
  'A single point of accountability',
  'A system designed to scale as you grow',
];

const Differentiator = () => (
  <section id="differentiator" className="py-16 lg:py-20 bg-[#0c1024] relative overflow-hidden">
    <div
      className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.12]"
      style={{ background: 'radial-gradient(ellipse 80% 100% at 50% 0%, #5D00D6, transparent)' }}
    />
    <div className="relative z-10 container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Left */}
        <FadeIn>
          <p className="text-[#a56eff] font-bold text-[11px] uppercase tracking-[0.25em] mb-5">
            The C9 Approach
          </p>
          <h2 className="c9-section-heading !text-white mb-6">
            One Partner. Zero Complexity.
          </h2>
          <p className="c9-body !text-white/60 mb-8 max-w-[500px]">
            Instead of managing multiple vendors, timelines, and technical decisions, C9 acts as your single partner — handling everything from planning to deployment and ongoing support.
          </p>
          <p className="text-white/70 font-semibold text-[13px] mb-5 uppercase tracking-wider">
            You get:
          </p>
          <ul className="space-y-4">
            {differentiatorPoints.map((p, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-[#a56eff] shrink-0" />
                <span className="text-white/75 font-medium text-[15px]">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <a
              href="#consultation-section"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-2xl shadow-purple-900/40 group"
            >
              Talk to a Solutions Architect{' '}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeIn>

        {/* Right — metric cards */}
        <FadeIn delay={0.12}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '1', label: 'Partner, not many', sub: 'One contract. One invoice. One call.' },
              { value: '5–10', label: 'Day avg. go-live', sub: 'From sign-off to fully operational.' },
              { value: '100%', label: 'Managed delivery', sub: 'Design, deploy, and support covered.' },
              { value: '24/7', label: 'AU-based support', sub: 'Always on. Always local.' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#5D00D6]/40 hover:bg-white/8 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                <div className="text-[#a56eff] text-[11px] font-bold uppercase tracking-widest mb-1.5">
                  {stat.label}
                </div>
                <div className="text-white/40 text-[12px] font-medium leading-snug">{stat.sub}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — SPEED / DELIVERY
   ───────────────────────────────────────────────────────── */
const deliverySteps = [
  { num: '01', label: 'Assess', title: 'Discovery & Site Assessment', desc: 'We visit your site, understand your business, team structure, and go-live date.' },
  { num: '02', label: 'Design', title: 'Solution Architecture', desc: 'A complete technology blueprint — connectivity, voice, network, security, and devices.' },
  { num: '03', label: 'Deploy', title: 'Managed Installation', desc: 'Our team coordinates all vendors and trades. Every component installed, configured, and tested.' },
  { num: '04', label: 'Go-Live', title: 'Day One Readiness', desc: 'Everything confirmed before your team sets foot in the office. Not after.' },
  { num: '05', label: 'Support', title: 'Ongoing Managed Care', desc: '24/7 monitoring, proactive support, and quarterly reviews — we stay your partner long-term.' },
];

const DeliverySection = () => (
  <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left */}
        <FadeIn>
          <p className="c9-eyebrow mb-4">How We Deliver</p>
          <h2 className="c9-section-heading mb-5">
            Ready Before Day One
          </h2>
          <p className="c9-body mb-4 max-w-[480px]">
            We ensure your internet, phones, network, and systems are fully operational before your team walks in.
          </p>
          <p className="c9-body max-w-[480px]">
            Our structured delivery approach means no delays, no last-minute issues, and no surprises.
          </p>
          <div className="mt-10">
            <a
              href="#consultation-section"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-colors shadow-xl shadow-purple-900/20 group"
            >
              Start My Rollout{' '}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeIn>

        {/* Right — steps */}
        <div className="space-y-4">
          {deliverySteps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-white hover:border-[#5D00D6]/25 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 rounded-full bg-[#5D00D6] flex items-center justify-center text-white font-bold text-[13px] shrink-0">
                  {s.num}
                </div>
                <div>
                  <span className="c9-eyebrow !text-[10px]">{s.label}</span>
                  <h3 className="font-semibold text-slate-900 text-[15px] tracking-tight mt-0.5 mb-1">{s.title}</h3>
                  <p className="text-slate-500 text-[13.5px] leading-relaxed">{s.desc}</p>
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
   SECTION 6 — VENDOR TRUST
   Logos bigger + centered, CTA button centered below logos
   ───────────────────────────────────────────────────────── */
const vendorLogos = [
  { src: '/partners/microsoft-logo-svgrepo-com.svg', alt: 'Microsoft', tier: 'Cloud & Productivity' },
  { src: '/images/clients/cisco.png', alt: 'Cisco', tier: 'Networking & Security' },
  { src: '/images/clients/yealink.png', alt: 'Yealink', tier: 'Voice & Video' },
  { src: '/partners/accreditation/NBN_Co-Logo.wine.svg', alt: 'nbn™', tier: 'Internet Connectivity' },
  { src: '/partners/fortinet.png', alt: 'Fortinet', tier: 'Firewall & SASE' },
  { src: '/partners/Hewlett_Packard_Enterprise_logo.svg', alt: 'HP', tier: 'Devices & Hardware' },
  { src: '/partners/Dell_Technologies_logo.svg', alt: 'Dell', tier: 'Infrastructure' },
  { src: '/partners/Google_Cloud_logo.svg', alt: 'Google Cloud', tier: 'Cloud & Storage' },
];

const VendorTrust = () => (
  <section className="py-14 lg:py-20 bg-white border-b border-slate-100">
    <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <FadeIn>
        <div className="text-center mb-12">
          <p className="c9-eyebrow mb-4">Vendor Ecosystem</p>
          <h2 className="c9-section-heading mb-4">
            Powered by Enterprise-Grade Technology
          </h2>
          <p className="c9-body max-w-2xl mx-auto">
            We work with leading technology partners across networking, security, and communications to deliver reliable, high-performance environments tailored to your business.
          </p>
        </div>
      </FadeIn>

      {/* Logo grid — centered logos + label stacked */}
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-12">
          {vendorLogos.map((v, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-[#5D00D6]/25 hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              {/* Logo — bigger size */}
              <img
                src={v.src}
                alt={v.alt}
                className="h-12 md:h-14 w-auto object-contain opacity-55 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              {/* Label below logo */}
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center leading-tight">
                {v.tier}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* CTA button centered below logos */}
      <FadeIn delay={0.2}>
        <div className="flex justify-center">
          <a
            href="#consultation-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 border-2 border-[#5D00D6] text-[#5D00D6] rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#5D00D6] hover:text-white transition-all group"
          >
            See Our Full Partner Ecosystem{' '}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — INDUSTRY FIT
   ───────────────────────────────────────────────────────── */
const industries = [
  {
    icon: <ShoppingBag size={22} className="text-[#5D00D6]" />,
    name: 'Retail',
    desc: 'POS-ready environments with high-speed internet, AI CCTV, managed printers, and customer Wi-Fi — operational before your doors open.',
  },
  {
    icon: <Stethoscope size={22} className="text-[#5D00D6]" />,
    name: 'Healthcare',
    desc: 'Compliant, segmented clinical networks with secure data handling, multi-room VoIP, and access control aligned to your operational needs.',
  },
  {
    icon: <Briefcase size={22} className="text-[#5D00D6]" />,
    name: 'Professional Services',
    desc: 'Microsoft 365 deployments, cloud infrastructure, enterprise-grade conferencing hardware, and secure client data environments — ready from day one.',
  },
  {
    icon: <Building2 size={22} className="text-[#5D00D6]" />,
    name: 'Multi-Site Businesses',
    desc: 'Standardised technology blueprints per location with centralised network management, unified phone systems, and a scalable delivery model.',
  },
];

const IndustrySection = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
      <div className="container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
        <FadeIn>
          <div className="text-center mb-12">
            <p className="c9-eyebrow mb-4">Industry Fit</p>
            <h2 className="c9-section-heading mb-4">
              Designed for Real-World Business Environments
            </h2>
            <p className="c9-body max-w-2xl mx-auto">
              We support businesses across industries including retail, healthcare, and professional services — ensuring your setup aligns with operational needs from day one.
            </p>
          </div>
        </FadeIn>

        {/* Tabs */}
        <div className="flex gap-3 overflow-x-auto pb-2 mb-8 hide-scrollbar justify-start lg:justify-center">
          {industries.map((ind, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-bold whitespace-nowrap transition-all duration-300 ${
                active === i
                  ? 'bg-[#5D00D6] text-white shadow-lg shadow-purple-900/20'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 md:p-10 flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/8 flex items-center justify-center shrink-0">
                {industries[active].icon}
              </div>
              <div>
                <div className="c9-eyebrow mb-1">Industry</div>
                <h3 className="c9-section-heading !text-[22px] mb-3">
                  {industries[active].name}
                </h3>
                <p className="c9-body max-w-2xl">
                  {industries[active].desc}
                </p>
                <a
                  href="#consultation-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 mt-7 text-[#5D00D6] font-bold text-[14px] hover:gap-3 transition-all group"
                >
                  Get a {industries[active].name} Setup Plan{' '}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 8 — FINAL CTA BAND (DARK)
   ───────────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="py-16 lg:py-24 bg-[#0c1024] relative overflow-hidden">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.15]"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 100%, #5D00D6, transparent)',
      }}
    />
    <div className="relative z-10 container mx-auto px-6 md:px-8" style={{ maxWidth: '1240px' }}>
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <FadeIn>
          <p className="text-[#a56eff] font-bold text-[11px] uppercase tracking-[0.25em] mb-5">
            Ready to Get Started?
          </p>
          <h2 className="c9-section-heading !text-white mb-6">
            Let&apos;s Plan Your New Office Setup
          </h2>
          <p className="c9-body !text-white/60 mb-10 max-w-[480px]">
            Talk to our team and get a clear, tailored plan for your business environment — before you commit to anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#consultation-section"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full h-14 px-9 font-bold text-[15px] hover:bg-[#4d00b3] transition-all shadow-2xl shadow-purple-900/40 group"
            >
              Book a Greenfield Consultation{' '}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#what-we-deliver"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('what-we-deliver')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white rounded-full h-14 px-9 font-bold text-[15px] hover:border-[#5D00D6] hover:bg-[#5D00D6]/15 transition-all"
            >
              Get My Setup Plan
            </a>
          </div>
          <div className="flex flex-wrap gap-6 mt-10">
            {['No obligation', 'Australian-based team', 'One partner, everything handled'].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 text-white/40 text-[13px] font-semibold"
              >
                <CheckCircle size={15} className="text-[#a56eff]" /> {t}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Right — hero image */}
        <FadeIn delay={0.12}>
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-purple-900/30 aspect-[4/3] group hidden lg:block">
            <img
              src="/images/greenfield_consultation.png"
              alt="C9 Communications solutions architect planning a greenfield office setup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/greenfield_hero.png';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/25 via-transparent to-transparent group-hover:from-[#5D00D6]/35 transition-colors duration-700" />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function Greenfield1Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <ScenarioBlock />
      <WhatYouGet />
      <Differentiator />
      <DeliverySection />
      <VendorTrust />
      <IndustrySection />
      <FinalCTA />
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="GREENFIELD SETUP CONSULTATION"
          title="Get your complete office setup — ready before day one."
          description="Talk to our senior solutions architects. We'll map your internet, phones, IT, network, security and support into one seamless plan — before you open the doors."
          formTitle="Book My Greenfield Consultation"
        />
      </section>
    </main>
  );
}
