'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Share2, Linkedin, Twitter, Mail, ArrowLeft, ChevronRight, TrendingUp, Zap, Target, CheckCircle, CheckCircle2, BarChart3, Activity } from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const ShieldAlert = ({ size, className }: { size: number; className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);

const CASE_STUDIES: Record<string, any> = {
  'multi-site-retail-stabilisation': {
    eyebrow: 'Multi-Site Environment',
    title: 'Consolidating National Retail Operations: 142 Sites Stabilised',
    summary: 'Eliminating 40+ hours of monthly downtime through vendor consolidation and SD-WAN deployment.',
    author: 'David Peterson',
    role: 'Head of Infrastructure @ C9',
    time: '6 Min Read',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'situation', label: 'Fragmented Environment' },
      { id: 'risk', label: 'Operational Exposure' },
      { id: 'implementation', label: 'Consolidation Layer' },
      { id: 'outcomes', label: 'Measurable Impact' }
    ],
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          A national retail distribution  was suffering from systemic revenue leakage caused by fragmented vendor management across 142 locations.
        </p>
        <h2 id="situation">Fragmented Environment</h2>
        <p>The client was managing over 9 different ISP and MSP contracts. This fragmentation led to 40+ hours of monthly aggregate downtime, with zero visibility into store-level latency. Support was entirely reactive, relying on store managers to report outages manually.</p>
        <h2 id="risk">Operational Exposure</h2>
        <p>Audit identified a single point of failure in the legacy MPLS backbone. Unpatched edge devices at store locations created critical security vulnerabilities, and there was a high probability of a site-wide POS blackout during peak seasonal trading.</p>
        <h2 id="implementation">Consolidation Layer</h2>
        <p>C9 implemented a centralised SD-WAN overlay, consolidating all 142 sites under a single management plane. We integrated 4G failover at every location and established a proactive monitoring layer that alerts engineers before a site goes offline.</p>
      </>
    )
  },
  'smb-internet': {
    eyebrow: 'Business Continuity',
    title: 'Retail Group Stability: Eliminating Outages for 12 Locations',
    summary: 'How a growing retail brand eliminated $2k/hour revenue losses through redundant internet infrastructure.',
    author: 'James Wilson',
    role: 'SMB Solutions Lead @ C9',
    time: '4 Min Read',
    img: 'https://images.unsplash.com/photo-1556740734-7f1a02de30f4?auto=format&fit=crop&q=80&w=1200',
    sections: [{ id: 'problem', label: 'Outages' }, { id: 'solution', label: 'Redundancy' }],
    content: (
      <>
        <h2 id="problem">The Cost of Outages</h2>
        <p>A retail business with 12 locations was losing approximately $2,000 per hour during internet outages. Their reliance on a single ISP created a critical single point of failure that halted sales and frustrated customers.</p>
        <h2 id="solution">Dual-Carrier Redundancy</h2>
        <p>C9 implemented a primary and backup internet connection model with automatic failover. Since implementation, the client has maintained 100% uptime across all locations for over 18 months.</p>
      </>
    )
  },
  'smb-networking': {
    eyebrow: 'Infrastructure Optimization',
    title: 'Mesh WiFi Revolution: Eliminating Dead Zones for Retail Excellence',
    summary: 'A 90% reduction in WiFi-related customer complaints through enterprise-grade mesh networking.',
    author: 'David Peterson',
    role: 'Network Architect @ C9',
    time: '4 Min Read',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    sections: [{ id: 'problem', label: 'Dead Zones' }, { id: 'solution', label: 'Mesh Overlay' }],
    content: (
      <>
        <h2 id="problem">Connectivity Dead Zones</h2>
        <p>A large retail store suffered from significant WiFi dead zones, leading to constant dropouts for staff tablets and customer guest networks.</p>
        <h2 id="solution">Enterprise Mesh Overlay</h2>
        <p>We installed a high-density mesh WiFi network with a dedicated guest portal. Customer complaints regarding WiFi dropped by 90%.</p>
      </>
    )
  },
  'smb-phone': {
    eyebrow: 'Communications Management',
    title: 'Cloud PBX Migration: Empowering the Remote Workforce',
    summary: 'Reducing scaling costs from $1,000 to $0 per line while enabling 100% remote work integration.',
    author: 'Sarah Jenkins',
    role: 'Cloud Comms Specialist @ C9',
    time: '5 Min Read',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    sections: [{ id: 'problem', label: 'Legacy Constraints' }, { id: 'solution', label: 'Unified Cloud' }],
    content: (
      <>
        <h2 id="problem">Legacy Hardware Constraints</h2>
        <p>A professional services firm was trapped by an aging PBX system. Remote workers were completely disconnected from the office line.</p>
        <h2 id="solution">Unified Cloud Comms</h2>
        <p>C9 migrated the firm to a modern Cloud Phone System. Adding new users now takes 5 minutes instead of weeks, and the firm reduced operational costs by 60%.</p>
      </>
    )
  },
  'smb-cctv': {
    eyebrow: 'Security & Surveillance',
    title: 'Retail Security Overhaul: 75% Reduction in Theft Incidents',
    summary: 'Implementing professional CCTV with cloud storage to deterrent shrinkage and provide evidence.',
    author: 'Mark Thompson',
    role: 'Security Specialist @ C9',
    time: '4 Min Read',
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200',
    sections: [{ id: 'problem', label: 'Shrinkage' }, { id: 'solution', label: 'Cloud CCTV' }],
    content: (
      <>
        <h2 id="problem">Unmanaged Security Risk</h2>
        <p>A multi-location retail business was suffering from constant theft and shrinkage with no evidence to resolve disputes.</p>
        <h2 id="solution">Professional CCTV with Cloud Storage</h2>
        <p>C9 installed HD/4K cameras with 30-day rolling cloud storage. Theft incidents dropped 75% in the first month.</p>
      </>
    )
  },
  'smb-print': {
    eyebrow: 'Managed Print',
    title: 'Legal Firm Optimization: Reducing Print Costs by 35%',
    summary: 'Consolidating unmanaged printer fleets into a single, proactive managed service.',
    author: 'Emma Davis',
    role: 'Managed Print Lead @ C9',
    time: '4 Min Read',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
    sections: [{ id: 'problem', label: 'Cost Overruns' }, { id: 'solution', label: 'Managed Fleet' }],
    content: (
      <>
        <h2 id="problem">Unpredictable Print Costs</h2>
        <p>A legal firm had scattered, unmanaged printers causing constant downtime and high toner costs.</p>
        <h2 id="solution">Managed Print Services</h2>
        <p>We replaced old units with modern multifunction printers and automated toner replenishment. Costs dropped 35% and issues reduced by 80%.</p>
      </>
    )
  },
  'smb-modern-workplace': {
    eyebrow: 'Digital Workplace',
    title: 'Modernizing Collaboration: Onboarding Time Reduced by 85%',
    summary: 'Unifying collaboration and security for a professional services firm.',
    author: 'James Wilson',
    role: 'Modern Workplace Lead @ C9',
    time: '5 Min Read',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    sections: [{ id: 'problem', label: 'Siloed Tools' }, { id: 'solution', label: 'Unified Stack' }],
    content: (
      <>
        <h2 id="problem">Fragmented Collaboration</h2>
        <p>Staff used personal devices and siloed tools, creating security risks and onboarding delays of up to a week.</p>
        <h2 id="solution">Unified Digital Workplace</h2>
        <p>C9 implemented unified device management and cloud collaboration. Onboarding now takes 1 day, and security incidents have dropped by 70%.</p>
      </>
    )
  },
  'smb-visitor': {
    eyebrow: 'Access Control',
    title: 'Distribution Center Security: 95% Reduction in Unauthorized Access',
    summary: 'Moving from manual sign-in to integrated digital visitor management.',
    author: 'Sarah Jenkins',
    role: 'Security Operations @ C9',
    time: '4 Min Read',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    sections: [{ id: 'problem', label: 'Access Gaps' }, { id: 'solution', label: 'Digital Sign-In' }],
    content: (
      <>
        <h2 id="problem">Manual Access Risks</h2>
        <p>A distribution center had no reliable record of visitors, and unauthorized people were frequently accessing restricted zones.</p>
        <h2 id="solution">Digital Visitor Management</h2>
        <p>We implemented a digital sign-in system with badge printing and CCTV integration. Unauthorized access dropped 95%, and check-in time reduced to 30 seconds.</p>
      </>
    )
  },
  'ent-internet': {
    eyebrow: 'Enterprise Resilience',
    title: 'National Carrier-Grade Redundancy: 50+ Sites, 99.99% Uptime',
    summary: 'Eliminating unplanned outages across a national multi-site estate.',
    author: 'David Peterson',
    role: 'Head of Infrastructure @ C9',
    time: '6 Min Read',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200',
    sections: [{ id: 'risk', label: 'Continuity Risk' }, { id: 'solution', label: 'Carrier Redundancy' }],
    content: (
      <>
        <h2 id="risk">Multi-Site Continuity Risk</h2>
        <p>Reliance on single ISPs across 50 locations created critical failure points for national operations.</p>
        <h2 id="solution">Carrier-Grade Architecture</h2>
        <p>C9 implemented multi-carrier failover and 24/7 NOC monitoring. The client has maintained 99.99% uptime for 24 months across the entire estate.</p>
      </>
    )
  },
  'ent-networking': {
    eyebrow: 'Unified Governance',
    title: 'Enterprise Networking for 10,000 Users: 40% Ticket Reduction',
    summary: 'Unifying network governance across 20 enterprise locations.',
    author: 'Michael Chen',
    role: 'Enterprise Architect @ C9',
    time: '7 Min Read',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    sections: [{ id: 'gap', label: 'Security Gaps' }, { id: 'solution', label: 'Unified Control' }],
    content: (
      <>
        <h2 id="gap">Fragmented Network Management</h2>
        <p>Decentralized management led to security vulnerabilities and high support overhead across 20 locations.</p>
        <h2 id="solution">Centrally Managed Architecture</h2>
        <p>We deployed a unified network with micro-segmentation and compliance enforcement. IT tickets dropped 40% and security standards are now 100% consistent.</p>
      </>
    )
  },
  'ent-communications': {
    eyebrow: 'Compliance Comms',
    title: 'Financial Communications: 100% Compliance for 15 locations',
    summary: 'Unified communications with built-in audit trails and CRM integration.',
    author: 'Sarah Jenkins',
    role: 'Enterprise Comms @ C9',
    time: '6 Min Read',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    sections: [{ id: 'problem', label: 'Audit Gaps' }, { id: 'solution', label: 'Unified Platform' }],
    content: (
      <>
        <h2 id="problem">Legacy Communication Risks</h2>
        <p>Legacy PBX systems lacked audit trails and call recording required for financial regulatory compliance.</p>
        <h2 id="solution">Enterprise Comms Platform</h2>
        <p>C9 implemented a cloud-based platform with automatic recording and CRM integration, achieving 100% compliance and 50% cost reduction.</p>
      </>
    )
  },
  'ent-security': {
    eyebrow: 'Surveillance Ops',
    title: 'Enterprise Security: 30 Locations Integrated Monitoring',
    summary: 'Centralizing surveillance and security protocols for 30 multi-site locations.',
    author: 'Mark Thompson',
    role: 'Security Strategist @ C9',
    time: '6 Min Read',
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200',
    sections: [{ id: 'risk', label: 'Liability Risks' }, { id: 'solution', label: 'Centralized Ops' }],
    content: (
      <>
        <h2 id="risk">Fragmented Liability Exposure</h2>
        <p>Disconnected security systems across 30 locations made incident response slow and audit trails impossible.</p>
        <h2 id="solution">Integrated Security System</h2>
        <p>We deployed 4K surveillance with centralized monitoring and automatic retention policies. Security incidents reduced by 60% with instant audit readiness.</p>
      </>
    )
  },
  'ent-workplace': {
    eyebrow: 'Zero-Trust',
    title: 'Digital Workplace for 5,000 Employees: 80% Incident Reduction',
    summary: 'Deploying zero-trust architecture and unified device management at scale.',
    author: 'Emma Davis',
    role: 'Workplace Architect @ C9',
    time: '7 Min Read',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    sections: [{ id: 'problem', label: 'Endpoint Risk' }, { id: 'solution', label: 'Zero-Trust Stack' }],
    content: (
      <>
        <h2 id="problem">Unmanaged Endpoint Vulnerabilities</h2>
        <p>With 5,000 employees, the organization faced massive security risks from unmanaged personal and work devices.</p>
        <h2 id="solution">Enterprise Workplace Platform</h2>
        <p>C9 implemented a zero-trust architecture with unified device management. Result: 80% reduction in security incidents and 35% lower IT costs.</p>
      </>
    )
  },
  'ent-print': {
    eyebrow: 'Fleet Management',
    title: 'Enterprise Print Infrastructure: Managing 1,000+ Devices',
    summary: 'Optimizing print costs and security across a massive multi-site estate.',
    author: 'Michael Chen',
    role: 'Print Solutions Lead @ C9',
    time: '6 Min Read',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
    sections: [{ id: 'problem', label: 'Waste & Cost' }, { id: 'solution', label: 'Fleet Optimization' }],
    content: (
      <>
        <h2 id="problem">Unmanaged Print Waste</h2>
        <p>The enterprise was overspending by 40% due to unmanaged printing and high device downtime across 20 locations.</p>
        <h2 id="solution">Managed Print Infrastructure</h2>
        <p>We centralized management for 1,000+ devices with secure printing and predictive maintenance. Print costs dropped 40% with 100% security compliance.</p>
      </>
    )
  },
  'ent-access': {
    eyebrow: 'Identity & Access',
    title: 'Enterprise Access Control: 95% Unauthorized Access Reduction',
    summary: 'Implementing biometric access and centralized protocols across 25 locations.',
    author: 'Sarah Jenkins',
    role: 'Security Operations @ C9',
    time: '6 Min Read',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    sections: [{ id: 'risk', label: 'Physical Security' }, { id: 'solution', label: 'Biometric Access' }],
    content: (
      <>
        <h2 id="risk">Physical Security Gaps</h2>
        <p>Fragmented access systems across 25 locations created significant security vulnerabilities and liability risks.</p>
        <h2 id="solution">Integrated Access & Identity</h2>
        <p>C9 implemented centralized access control with biometric options and emergency protocols. Unauthorized access dropped 95% with complete audit trails.</p>
      </>
    )
  }
};


export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = CASE_STUDIES[slug];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!study) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#5D00D6] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* ARTICLE HEADER CONTEXT */}
      <section className="bg-[#0c1024] pt-32 pb-20 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5D00D6] opacity-[0.06] rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        
        <div className="container mx-auto max-w-[1000px] relative z-10">
          <FadeIn>
            <a href="/case-studies" className="inline-flex items-center text-slate-400 font-medium text-[13px] hover:text-white transition-colors mb-10">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1" /> Back to Case Studies
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full border border-[#5D00D6] text-[#A855F7] text-[11px] font-bold uppercase tracking-widest bg-[#5D00D6]/10">
                Managed IT
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-bold uppercase tracking-widest">
                {study.eyebrow}
              </span>
              <span className="text-slate-400 text-[13px] font-medium ml-2">— {study.time}</span>
            </div>
            <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-bold text-white leading-[1.1] mb-8 max-w-[900px] tracking-tight whitespace-pre-line">
              {study.title}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              {study.summary}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 pt-8 mt-12 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-800 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                  alt={study.author} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-white font-bold text-[15px]">{study.author}</div>
                <div className="text-slate-400 text-[13px] font-medium">{study.role}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-slate-400 text-[13px] font-bold uppercase tracking-widest mr-2">Share Impact</span>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#5D00D6] hover:text-white text-slate-300 border border-white/10 transition-all flex items-center justify-center">
                <Linkedin size={16} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#5D00D6] hover:text-white text-slate-300 border border-white/10 transition-all flex items-center justify-center">
                <Twitter size={16} />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-16 md:py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
            
            {/* L SIDEBAR - TABLE OF CONTENTS (Sticky) */}
            <div className="hidden lg:block w-[240px] shrink-0">
              <div className="sticky top-32">
                <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#5D00D6] mb-6">Outcome Structure</h4>
                <ul className="space-y-4">
                  {study.sections.map((link: any, i: number) => (
                    <li key={i}>
                      <a 
                        href={`#${link.id}`} 
                        className={`text-[14px] font-medium transition-colors hover:text-[#5D00D6] ${i === 0 ? 'text-[#5D00D6] font-bold' : 'text-slate-500'}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                
                {/* Visual Anchor Block */}
                <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-lg shadow-[#5D00D6]/5">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={12} />
                  </div>
                  <h5 className="font-bold text-slate-900 text-[15px] mb-2">Verified Result</h5>
                  <p className="text-slate-500 text-[13px] mb-5">This case study represents actual operational outcomes achieved by C9.</p>
                  <a href="#consultation-section" className="block w-full py-2 bg-[#5D00D6] hover:bg-[#4d00b3] text-white rounded-lg text-[13px] font-bold transition-colors">
                    Talk to the Team
                  </a>
                </div>
              </div>
            </div>

            {/* MAIN CONTENT (Centered Reading Column) */}
            <div className="grow max-w-[700px] w-full bg-white rounded-[32px] p-8 md:p-14 lg:p-16 border border-slate-100 shadow-xl shadow-slate-200/50 lg:-mt-32 relative z-20">
              
              <div className="max-w-none text-slate-600 [&>p]:mb-6 [&>p]:text-[18px] [&>p]:leading-relaxed [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-3 [&>ul>li]:text-[18px] [&>ul>li]:leading-relaxed [&>a]:text-[#5D00D6] [&>a]:underline [&>figure>img]:rounded-[24px]">
                {study.content}
                
                <hr className="my-12 border-slate-100" />
                
                {/* Executive Closing */}
                <div className="bg-slate-50 p-8 lg:p-10 rounded-3xl border border-slate-100">
                   <h4 className="text-xl font-bold text-slate-900 mb-4">Executive Summary</h4>
                   <p className="text-slate-600 text-[16px] mb-6 leading-relaxed">
                      By consolidating vendors and moving to a managed infrastructure model, this partner transitioned from reactive "firefighting" to proactive growth. They no longer manage IT; they use it as a tool for scale.
                   </p>
                   <div className="flex items-center gap-3 text-[#5D00D6] font-bold">
                      <Target size={18} />
                      <span>Outcome: 100% Stability Achieved</span>
                   </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* MORE CASE STUDIES */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
               <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Other Success Stories</h3>
               <p className="text-slate-500 text-[18px]">See how we solve complexity across different sectors.</p>
            </div>
            <a href="/case-studies" className="inline-flex items-center gap-2 text-[#5D00D6] font-bold hover:gap-4 transition-all mt-6 md:mt-0">
               View All Stories 
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(CASE_STUDIES).filter(k => k !== slug).slice(0, 3).map((key) => {
               const item = CASE_STUDIES[key];
               return (
                  <a href={`/case-studies/${key}`} key={key} className="flex flex-col h-full bg-slate-50 rounded-[28px] overflow-hidden border border-slate-100 hover:border-[#5D00D6]/30 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all group">
                     <div className="aspect-[16/10] overflow-hidden">
                        <img 
                           src={item.img} 
                           alt={item.title} 
                           className="w-full h-full object-cover group-hover:scale-105 duration-700"
                        />
                     </div>
                     <div className="p-8 pb-10 flex flex-col grow">
                        <span className="text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest mb-4">{item.eyebrow}</span>
                        <h4 className="text-[20px] font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#5D00D6] transition-colors">
                           {item.title}
                        </h4>
                        <p className="text-slate-500 text-[15px] mb-8 line-clamp-2">
                           {item.summary}
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-6">
                           <span className="text-slate-500 text-[13px] font-medium border-b border-transparent group-hover:border-[#5D00D6]">Read Impact Report</span>
                           <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                              <ChevronRight size={16} />
                           </div>
                        </div>
                     </div>
                  </a>
               )
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="GET STARTED"
          title="Ready for your own success story?"
          description="Speak with an Australian infrastructure expert to map out your own path to reliability and scale."
          formTitle="Book Discovery Call"
        />
      </section>
    </div>
  );
}
