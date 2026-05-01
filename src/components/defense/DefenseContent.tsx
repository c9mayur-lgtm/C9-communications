'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, FileCheck, Target, ArrowRight, Phone, Mail, ChevronRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

const CDN = 'https://c9defense.com.au/wp-content/uploads';

const IMGS = {
  hero: `${CDN}/2026/01/hero2-scaled.png`,
  heroVideo: `${CDN}/2025/12/hero-video_c9.mp4`,
  sentinel: `${CDN}/2026/01/Sentinel.png`,
  compliance: `${CDN}/2023/03/Compliance.png`,
  validation: `${CDN}/2023/03/Security-Validation.png`,
  beyondEssential: `${CDN}/2026/01/Beyond-Essential.png`,
  iso: `${CDN}/2026/01/ISO.png`,
  irap: `${CDN}/2026/01/IRAP-Logo-2.png`,
  soc2: `${CDN}/2026/01/Soc-2.png`,
  e8: `${CDN}/2026/01/Essential-8-Sqr-800-1.png`,
  phishing: `${CDN}/2026/01/Phishing-Prevention.png`,
  identity: `${CDN}/2025/12/Identity-Access.png`,
};

/* ── Hero ─────────────────────────────────────────────────────── */
export function DefenseHero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative min-h-screen bg-black flex items-center overflow-hidden"
    >
      {/* Video BG */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
        poster={IMGS.hero}
      >
        <source src={IMGS.heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 pt-36 pb-24">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#808080] mb-6">
            Australian Cybersecurity Specialists
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8">
            Essential 8 is not enough.{' '}
            <span className="text-[#C0C0C0]">Build resilience that</span>{' '}
            survives real attacks.
          </h1>
          <p className="text-lg text-[#808080] leading-relaxed max-w-xl mb-10">
            Enterprise-grade security programs for Australian organisations combining compliance readiness,
            continuous defence, and tested recovery capabilities.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/defense/compliance/gap-assessment"
              className="bg-white text-black font-semibold text-sm px-8 py-4 hover:bg-[#C0C0C0] hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] active:scale-[0.97] transition-all duration-200"
            >
              Get Compliance Gap Assessment
            </Link>
            <Link
              href="#contact-form"
              className="border border-[#404040] text-white font-semibold text-sm px-8 py-4 hover:bg-white hover:text-black hover:border-white active:scale-[0.97] transition-all duration-200"
            >
              Book a Confidential Security Briefing
            </Link>
          </div>

          <p className="text-xs text-[#404040] mb-10">No obligation • Response within 1 business day</p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: Shield, label: 'Australian Security Specialists' },
              { icon: FileCheck, label: 'Essential 8 + C9 Framework' },
              { icon: Target, label: '24/7 SOC Operations' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm text-[#808080]">
                <div className="w-7 h-7 border border-[#303030] flex items-center justify-center">
                  <Icon size={13} className="text-[#606060]" />
                </div>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Program bars */}
      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-1 md:grid-cols-2">
        {[
          { label: 'Our Sentinel Security Program', href: '/defense/security/sentinel' },
          { label: 'Our Compliance Accelerator Program', href: '/defense/compliance/accelerator' },
        ].map((bar, i) => (
          <Link
            key={bar.label}
            href={bar.href}
            className={`flex items-center justify-between px-8 py-5 text-sm font-semibold transition-all duration-200 group ${
              i === 0 ? 'bg-[#202020] text-white hover:bg-[#303030] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]' : 'bg-[#101010] text-[#C0C0C0] hover:bg-[#1a1a1a] hover:text-white'
            }`}
          >
            {bar.label}
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
          </Link>
        ))}
      </div>
    </motion.section>
  );
}

/* ── Cyber Challenge ──────────────────────────────────────────── */
export function CyberChallenge() {
  return (
    <section className="bg-[#0a0a0a] py-24 relative">
      <motion.div 
        {...fadeIn}
        className="max-w-[1280px] mx-auto px-6"
      >
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#606060] mb-4">The Cyber Security Challenge</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            We help business leaders move from cyber anxiety to{' '}
            <span className="text-[#808080]">cyber assurance</span>
          </h2>
        </div>

        {/* Stats row */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#202020] mb-16"
        >
          {[
            { stat: '0%', sub: 'BREACH RATE FOR SENTINEL CLIENTS', desc: 'Continuous monitoring prevents incidents before they cause disruption' },
            { stat: '0%', sub: 'RANSOMWARE INCIDENTS IN MANAGED CLIENTS', desc: 'Advanced EDR and SOC response contain threats before encryption occurs' },
            { stat: '0', sub: 'DATA LOSS EVENTS ACROSS CLIENT BASE', desc: 'Tested backup and recovery ensures business continuity in every scenario' },
          ].map(({ stat, sub, desc }) => (
            <motion.div 
              variants={fadeIn}
              key={sub} 
              className="bg-[#0a0a0a] p-10 hover:bg-[#0f0f0f] transition-colors duration-300 group"
            >
              <div className="text-5xl font-black text-white mb-2 group-hover:text-[#C0C0C0] transition-colors">{stat}</div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#404040] uppercase mb-4">{sub}</div>
              <p className="text-sm text-[#606060] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Challenge columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Email & Credential Threats',
              body: 'Email threats and credential compromise remain the primary attack vector for Australian businesses, with phishing attacks increasing 40% year-over-year.',
            },
            {
              title: 'Compliance Doesn\'t Equal Security',
              body: 'Having checkboxes ticked won\'t stop attackers targeting your identities and exploiting access weaknesses. Real security requires layered defence.',
            },
            {
              title: 'Traditional IT Support Falls Short',
              body: 'Traditional IT support focuses on availability, not threat detection and response. When ransomware hits, recovery capabilities make the difference.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="border-t border-[#202020] pt-8">
              <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
              <p className="text-sm text-[#606060] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ── C9 Essential Framework ───────────────────────────────────── */
export function EssentialFramework() {
  return (
    <section className="bg-black py-24 relative">
      <motion.div 
        {...fadeIn}
        className="max-w-[1280px] mx-auto px-6"
      >
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#606060] mb-4">The C9 Essential Framework</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Essential 8 creates the baseline,{' '}
            <span className="text-[#808080]">C9 Essential builds the layers required</span>{' '}
            to stop modern attacks
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Baseline */}
          <div className="border border-[#202020] p-10">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#404040] mb-6">Baseline Security Controls</div>
            <p className="text-[#606060] text-sm mb-8">The foundation — but only the starting point.</p>
            <div className="flex flex-wrap gap-3">
              {['Application Patching', 'Hardening', 'Basic MFA Implementation'].map((tag) => (
                <span key={tag} className="border border-[#303030] text-[#808080] text-xs px-4 py-2">{tag}</span>
              ))}
            </div>
          </div>

          {/* Beyond Essential image */}
          <div className="relative">
            <img
              src={IMGS.beyondEssential}
              alt="C9 Essential Framework - Beyond Essential 8"
              className="w-full h-auto object-contain grayscale"
            />
          </div>
        </div>

        {/* Layer cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#151515]">
          {[
            {
              img: IMGS.phishing,
              title: 'Email & Phishing Protection',
              body: 'API-based scanning to catch phishing before it hits the inbox, plus DMARC enforcement.',
            },
            {
              img: IMGS.identity,
              title: 'Identity & Access Management',
              body: 'Conditional access policies, privilege management, and identity governance.',
            },
            {
              title: 'Endpoint Detection & Response',
              body: 'Real-time threat detection, automated containment, and 24/7 SOC monitoring.',
              icon: Shield,
            },
            {
              title: 'Incident Response Readiness',
              body: 'A pre-deployed "Crash Crew" and tested playbooks to restore operations in hours, not weeks.',
              icon: Target,
            },
          ].map((card, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5, borderColor: '#404040' }}
              className="bg-black p-8 hover:bg-[#0a0a0a] hover:border-[#2a2a2a] border border-transparent transition-all duration-200 group"
            >
              {card.img ? (
                <img src={card.img} alt={card.title} className="w-12 h-12 object-contain grayscale mb-6" />
              ) : (
                card.icon && (
                  <div className="w-12 h-12 border border-[#202020] flex items-center justify-center mb-6">
                    <card.icon size={20} className="text-[#606060]" />
                  </div>
                )
              )}
              <h3 className="text-base font-bold text-white mb-3">{card.title}</h3>
              <p className="text-sm text-[#606060] leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/defense/security" className="text-sm text-[#808080] hover:text-white transition-colors flex items-center justify-center gap-2">
            View all services <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ── Security Path Tabs ───────────────────────────────────────── */
const PROGRAMS = [
  {
    id: 'sentinel',
    label: 'Sentinel Security Program',
    tag: 'Best for organisations needing ongoing protection',
    badge: '24/7 Monitoring & Response',
    img: IMGS.sentinel,
    features: ['Continuous Security Monitoring', 'Monthly Security Improvements', 'Recovery Assurance Testing', 'Executive Reporting Dashboard'],
    cta: 'Explore Sentinel Program',
    href: '/defense/security/sentinel',
  },
  {
    id: 'compliance',
    label: 'Compliance Accelerator',
    tag: 'Best for audit and certification readiness',
    badge: '90-Day Implementation',
    img: IMGS.compliance,
    features: ['Essential 8 Maturity Assessment', 'ISO 27001 Gap Analysis', 'SMB1001 Documentation', 'Audit Support Services'],
    cta: 'Start Compliance Journey',
    href: '/defense/compliance/gap-assessment',
  },
  {
    id: 'validation',
    label: 'Security Validation',
    tag: 'Best for proof and assurance testing',
    badge: '10-Day VAPT Delivery',
    img: IMGS.validation,
    features: ['Vulnerability Assessment Scanning', 'Penetration Testing (VAPT)', 'Red Team Attack Simulation', 'Executive Reporting Dashboard'],
    cta: 'Book VAPT Consultation',
    href: '#contact-form',
  },
];

export function SecurityPath() {
  const [active, setActive] = useState('sentinel');
  const program = PROGRAMS.find((p) => p.id === active)!;

  return (
    <section className="bg-[#0a0a0a] py-24 relative">
      <motion.div 
        {...fadeIn}
        className="max-w-[1280px] mx-auto px-6"
      >
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#606060] mb-4">Your Security Path</p>
          <h2 className="text-4xl font-bold text-white tracking-tight">Choose Your Security Path</h2>
        </div>

        {/* Tab bar */}
        <div className="flex border-b border-[#202020] mb-0 overflow-x-auto relative">
          {PROGRAMS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-8 py-4 text-sm font-semibold whitespace-nowrap transition-colors relative ${
                active === p.id
                  ? 'text-white'
                  : 'text-[#606060] hover:text-[#C0C0C0]'
              }`}
            >
              {p.label}
              {active === p.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white z-10"
                />
              )}
            </button>
          ))}
        </div>

        {/* Program card */}
        <div className="bg-[#111111] border border-[#202020] border-t-0">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left */}
            <div className="p-12 border-r border-[#202020]">
              <span className="text-xs border border-[#303030] text-[#808080] px-4 py-2 inline-block mb-6">
                {program.badge}
              </span>
              <h3 className="text-3xl font-bold text-white mb-3">{program.label}</h3>
              <p className="text-sm text-[#606060] mb-10">{program.tag}</p>
              <ul className="space-y-4 mb-10">
                {program.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#C0C0C0]">
                    <CheckCircle2 size={16} className="text-[#606060] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={program.href}
                className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-8 py-4 hover:bg-[#C0C0C0] hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] active:scale-[0.97] transition-all duration-200"
              >
                {program.cta} <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right - image */}
            <div className="relative min-h-[400px] flex items-center justify-center p-12 bg-[#0d0d0d]">
              <img
                src={program.img}
                alt={program.label}
                className="max-h-[380px] w-auto object-contain grayscale"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ── Certifications ───────────────────────────────────────────── */
export function Certifications() {
  return (
    <section className="bg-black py-24 border-t border-[#151515] relative">
      <motion.div 
        {...fadeIn}
        className="max-w-[1280px] mx-auto px-6"
      >
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#606060] mb-4">Certified & Trusted</p>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
            Our commitment to security excellence is validated through rigorous certification and continuous assessment
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#151515]">
          {[
            { img: IMGS.iso, label: 'ISO 27001', sub: 'Information Security Management System certified to international standards' },
            { img: IMGS.irap, label: 'IRAP Assessment', sub: 'Infosec Registered Assessors Program evaluation underway.' },
            { img: IMGS.soc2, label: 'SOC 2 Type II', sub: 'Service Organization Controls audit scheduled for 2025' },
            { img: IMGS.e8, label: 'Essential 8 Maturity', sub: 'Full Essential 8 maturity assessment and validation' },
          ].map(({ img, label, sub }) => (
            <motion.div 
              key={label} 
              whileHover={{ backgroundColor: '#0a0a0a', y: -2 }}
              className="bg-black p-10 flex flex-col items-center text-center transition-all duration-300"
            >
              <motion.img 
                src={img} 
                alt={label} 
                whileHover={{ scale: 1.1, filter: 'grayscale(0%) brightness(1.2)' }}
                className="w-20 h-20 object-contain grayscale mb-6 transition-all duration-300" 
              />
              <h3 className="text-base font-bold text-white mb-2">{label}</h3>
              <p className="text-xs text-[#606060] leading-relaxed">{sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#606060] max-w-2xl mx-auto mb-8">
            Our certification roadmap demonstrates our dedication to maintaining the highest security standards.
            We continuously invest in third-party validation to ensure our clients receive enterprise-grade protection
            backed by internationally recognized frameworks.
          </p>
          <Link
            href="#contact-form"
            className="inline-flex items-center gap-2 border border-[#404040] text-white font-semibold text-sm px-8 py-4 hover:bg-white hover:text-black hover:border-white active:scale-[0.97] transition-all duration-200"
          >
            Schedule a Free Consultation <ChevronRight size={14} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ── Methodology ──────────────────────────────────────────────── */
export function Methodology() {
  return (
    <section className="bg-[#0a0a0a] py-24 border-t border-[#151515]">
      <div className="max-w-[1280px] mx-auto px-6">
          {/* Methodology row */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-px bg-[#202020]"
        >
          {[
            { step: '01', label: 'Assess', body: 'Establish your risk baseline and security maturity level through comprehensive technical analysis.' },
            { step: '02', label: 'Build', body: 'Deploy controls and implement the C9 Essential framework tailored to your business requirements.' },
            { step: '03', label: 'Validate', body: 'Continuous monitoring, quarterly testing, and verified recovery capabilities with executive reporting.' },
          ].map(({ step, label, body }) => (
            <motion.div 
              variants={fadeIn}
              key={step} 
              className="bg-[#0a0a0a] p-12 hover:bg-[#0f0f0f] transition-all duration-300 group"
            >
              <div className="text-5xl font-black text-[#1a1a1a] mb-4 group-hover:text-[#303030] transition-colors">{step}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{label}</h3>
              <p className="text-sm text-[#606060] leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <Link
            href="#contact-form"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-10 py-4 hover:bg-[#C0C0C0] hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] active:scale-[0.97] transition-all duration-200"
          >
            Book a Confidential Security Briefing <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Contact Form ─────────────────────────────────────────────── */
export function DefenseContactForm() {
  return (
    <section id="contact-form" className="bg-black py-24 border-t border-[#151515] relative">
      <motion.div 
        {...fadeIn}
        className="max-w-[1280px] mx-auto px-6"
      >
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#606060] mb-6">Schedule a Free Consultation</p>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-6">
              Get a clear roadmap aligned to your risk profile and compliance requirements.
            </h2>
            <p className="text-sm text-[#606060] mb-10 leading-relaxed">No sales pressure — just expert guidance.</p>

            <div className="flex flex-col gap-3 mb-10">
              {[
                'Security before IT',
                'Independent',
                'Certified & Competent',
                'Results-driven (Measurable Risk Reduction)',
                'Proactive threat hunting',
                'Transparent (Clear scope, Honest assessment)',
              ].map((b) => (
                <div key={b} className="flex items-center gap-3 text-sm text-[#C0C0C0]">
                  <CheckCircle2 size={15} className="text-[#606060] shrink-0" />
                  {b}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <Link href="tel:1800000299" className="flex items-center gap-3 text-sm text-[#808080] hover:text-white transition-colors">
                <Phone size={15} /> T: 1800 000 299
              </Link>
              <Link href="mailto:info@c9defense.com.au" className="flex items-center gap-3 text-sm text-[#808080] hover:text-white transition-colors">
                <Mail size={15} /> E: info@c9defense.com.au
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="border border-[#202020] p-10 bg-[#080808]">
            <h3 className="text-xl font-bold text-white mb-8">Schedule a Free Consultation</h3>
            <form className="space-y-5">
              {[
                { id: 'def-name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                { id: 'def-email', label: 'Business Email', type: 'email', placeholder: 'john@company.com.au' },
                { id: 'def-phone', label: 'Phone Number', type: 'tel', placeholder: '1300 XXX XXX' },
                { id: 'def-company', label: 'Company Name', type: 'text', placeholder: 'Your Organisation' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-xs font-semibold text-[#808080] uppercase tracking-wider mb-2">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-black border border-[#202020] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#606060] transition-colors placeholder:text-[#303030]"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="def-message" className="block text-xs font-semibold text-[#808080] uppercase tracking-wider mb-2">
                  Tell us about your security needs
                </label>
                <textarea
                  id="def-message"
                  rows={4}
                  placeholder="Describe your current security posture or concerns..."
                  className="w-full bg-black border border-[#202020] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#606060] transition-colors placeholder:text-[#303030] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black font-bold text-sm py-4 hover:bg-[#C0C0C0] hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] active:scale-[0.97] transition-all duration-200 mt-2"
              >
                Schedule My Free Consultation
              </button>
              <p className="text-xs text-[#404040] text-center">Response within 1 business day. No obligation.</p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
