'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Handshake, 
  Monitor, 
  Lock, 
  Users, 
  MessageSquare, 
  AlertTriangle, 
  ChevronRight, 
  Activity, 
  ShieldAlert,
  Search,
  FileText,
  BarChart3,
  RefreshCw,
  Eye,
  Settings,
  HelpCircle,
  Store,
  Utensils,
  Warehouse,
  Briefcase
} from 'lucide-react';

// UI Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { WpSupport } from '@/components/wordpress/WpSupport';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import { PricingSection } from '@/components/sections/PricingSection';


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
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO (Pain + Accountability)
   ───────────────────────────────────────────────────────── */
const HeroV3 = () => (
  <section className="relative overflow-hidden bg-white pt-12 pb-0 lg:pt-20">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />
    
    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center pb-16 lg:pb-24">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <ShieldCheck size={13} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0">Single Accountable Partner</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Your Business Has Outgrown <span className="text-[#5D00D6]">Reactive Support</span>. Switch to Single-Vendor Accountability.
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-8 max-w-[620px]">
              C9 helps established businesses move away from fragmented IT and communication providers. We take full accountability for your existing environment, providing the stability and proactive support your current provider is missing.
            </p>
          </FadeIn>


          <FadeIn delay={0.22}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {[
                { label: 'SLA-backed support', icon: <Activity /> },
                { label: '24/7 managed stability', icon: <Clock /> },
                { label: 'Phased, safe migrations', icon: <RefreshCw /> },
                { label: 'Single accountable partner', icon: <Handshake /> }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="text-[#5D00D6] shrink-0">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 14 })}</div>
                  <span className="text-slate-700 font-bold text-[14px] uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#consultation-section"
                className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-xl shadow-purple-900/20 whitespace-nowrap c9-button-label h-14 px-10 text-[15px] font-bold"
              >
                Review Your Current Environment
              </a>
              <a
                href="#transition-framework"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 rounded-full hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all whitespace-nowrap bg-white c9-button-label h-14 px-10 text-[15px] font-bold"
              >
                See Why Businesses Switch to C9
              </a>
            </div>
          </FadeIn>

        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/5] bg-slate-100 border border-slate-100">
            <img
              src="/images/hero/business-new.png"
              alt="Professional managing complex business infrastructure issues"
              className="w-full h-full object-cover object-center duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/40 via-transparent to-transparent" />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION — INDUSTRY SPECIFIC (Tabs)
   ───────────────────────────────────────────────────────── */
const IndustrySections = () => {
  const [activeInd, setActiveInd] = useState('retail');

  const industries = [
    {
      id: 'retail',
      label: 'Retail & POS',
      icon: <Store size={16} />,
      pains: ['POS downtime = lost sales', 'Multiple vendors = finger-pointing', 'Guest WiFi issues = complaints'],
      solution: 'One partner owns your entire stack. POS, WiFi, security, and networking. Guaranteed uptime.',
      caseStudy: {
        title: 'Local Retail Chain (12 locations)',
        problem: '4 vendors for POS & WiFi. No coordination during outages. High operational friction.',
        results: ['99.9% uptime (from 94%)', 'Zero downtime transition', '$40K annual savings', '2-hour critical response'],
        quote: 'We now have one number to call. Issues are fixed in minutes, not hours.',
        author: 'Sarah Chen, Ops Manager'
      }
    },
    {
      id: 'professional',
      label: 'Professional Services',
      icon: <Briefcase size={16} />,
      pains: ['Security risks', 'Compliance headaches', 'Scattered collaboration tools'],
      solution: 'Unified security and integrated collaboration tools. One partner for compliance.',
      caseStudy: {
        title: 'Professional Services Firm (3 offices)',
        problem: 'Disconnected cloud and telco systems. No unified security. Compliance audit nightmare.',
        results: ['100% security compliance', '60% faster collaboration', '$25K annual savings', 'Zero security incidents'],
        quote: 'C9 took the compliance burden off us. We focus on clients, not vendor chaos.',
        author: 'Michael Ross, CEO'
      }
    },
    {
      id: 'hospitality',
      label: 'Hospitality',
      icon: <Utensils size={16} />,
      pains: ['Unreliable Guest WiFi', 'POS downtime during service', 'Slow vendor response'],
      solution: 'Managed WiFi, POS, and security. We guarantee 24/7 reliability during service peaks.',
      caseStudy: {
        title: 'Hospitality Group (5 venues)',
        problem: 'Fragmented WiFi and POS vendors. Frequent guest connectivity complaints during peak hours.',
        results: ['99.9% WiFi uptime', 'Zero guest complaints', '1-hour response time', '$35K annual savings'],
        quote: 'Reliable WiFi is now our competitive edge. C9 understands our peak operational needs.',
        author: 'James Thompson, GM'
      }
    },
    {
      id: 'manufacturing',
      label: 'Manufacturing',
      icon: <Warehouse size={16} />,
      pains: ['Production downtime', 'Inventory system risk', 'Data security gaps'],
      solution: '24/7 production system monitoring and proactive maintenance. Zero-downtime operations.',
      caseStudy: {
        title: 'Manufacturing SME (2 locations)',
        problem: 'Multiple vendors for production & inventory. High risk of downtime during critical runs.',
        results: ['99.9% system uptime', '$500K+ saved/year', 'Zero unplanned downtime', '24/7 proactive care'],
        quote: 'C9 prevented a $100K event by catching an issue before it happened. Essential partner.',
        author: 'David Lee, Ops Director'
      }
    }
  ];

  const current = industries.find(ind => ind.id === activeInd)!;

  return (
    <section className="py-10 md:py-16 bg-white border-t border-slate-100 overflow-hidden">
      <div className={C}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Navigation - More Compact */}
          <div className="lg:w-[260px] shrink-0">
            <FadeIn>
              <span className="c9-eyebrow mb-4 block">Proven Transitions</span>
              <h2 className="c9-section-heading mb-8">Switching Outcomes</h2>
            </FadeIn>

            
            <div className="space-y-1.5 mb-6">
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveInd(ind.id)}
                  className={`w-full text-left px-5 py-3.5 rounded-xl transition-all flex items-center justify-between group ${
                    activeInd === ind.id 
                      ? 'bg-[#5D00D6] text-white shadow-lg shadow-purple-900/10' 
                      : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`transition-colors ${activeInd === ind.id ? 'text-white' : 'text-[#5D00D6]'}`}>
                      {ind.icon}
                    </div>
                    <span className="font-bold text-[13px] font-clash">{ind.label}</span>
                  </div>
                  <ChevronRight size={14} className={`transition-transform ${activeInd === ind.id ? 'translate-x-1 opacity-100' : 'opacity-0'}`} />
                </button>
              ))}
            </div>

            <FadeIn delay={0.2}>
              <div className="p-5 rounded-xl bg-[#0c1024] text-white">
                <p className="text-[12px] font-medium text-white/70 mb-4 font-dm-sans">Need a custom audit for your specific operation?</p>
                <a href="#consultation-section" className="text-[#5D00D6] font-bold text-[11px] uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  Request Review <ChevronRight size={12} />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Impact Content - Compact & Dense */}
          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInd}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 rounded-[32px] p-6 lg:p-10 border border-slate-100 relative overflow-hidden h-full"
              >
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
                  <div>
                    <Badge className="mb-4 bg-[#5D00D6]/10 text-[#5D00D6] border-none px-3 py-1 font-bold uppercase tracking-widest text-[8px] hover:bg-[#5D00D6]/10">
                      CASE STUDY: {current.label}
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0c1024] font-clash leading-snug mb-4">
                      {current.caseStudy.title}
                    </h3>
                    <p className="text-slate-500 text-[14px] leading-relaxed font-dm-sans mb-8">
                      {current.caseStudy.problem}
                    </p>

                    <div className="space-y-3">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">The C9 Outcome</p>
                      {current.caseStudy.results.map((r, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle size={14} className="text-green-500 shrink-0" />
                          <span className="text-slate-900 font-bold text-[13px] font-dm-sans">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-8">
                    <div className="bg-[#5D00D6] p-6 rounded-2xl text-white shadow-xl shadow-purple-900/10">
                      <p className="text-white font-bold uppercase tracking-[0.2em] text-[9px] mb-3">Our Single-Vendor Solution</p>
                      <p className="text-white text-[16px] font-normal font-dm-sans leading-relaxed">{current.solution}</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
                       <p className="text-[15px] font-medium text-[#0c1024] italic font-clash leading-relaxed mb-4">
                         "{current.caseStudy.quote}"
                       </p>
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden shrink-0">
                             <img src={`https://i.pravatar.cc/100?u=${current.id}`} alt={current.caseStudy.author} />
                          </div>
                          <div>
                             <p className="font-bold text-slate-900 text-[12px] font-dm-sans leading-none">{current.caseStudy.author}</p>
                             <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Client Verified</p>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-4">
                   <p className="text-[8px] font-black text-rose-400 uppercase tracking-[0.2em] shrink-0">Legacy Provider Pains Resolved:</p>

                   <div className="flex flex-wrap gap-2">
                      {current.pains.map((p, i) => (
                        <span key={i} className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-[10px] font-normal border border-rose-100 flex items-center gap-1.5">
                          <AlertTriangle size={10} /> {p}
                        </span>
                      ))}
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};



import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   SECTION 2 — OPERATIONAL CHAOS (Pain Slider)
   ───────────────────────────────────────────────────────── */
const OperationalChaos = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  });

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const pains = [
    { icon: <Users />, title: 'Multiple Vendors', desc: 'Managing 4+ different IT and telco providers with no coordination.' },
    { icon: <Handshake />, title: 'No Accountability', desc: 'Vendors blaming each other while your operations remain halted.' },
    { icon: <Clock />, title: 'Support Delays', desc: 'Waiting hours or days for basic issue resolution across disparate vendors.' },
    { icon: <RefreshCw />, title: 'Disconnected Systems', desc: 'IT, voice, and cloud systems that don\'t talk to each other.' },
    { icon: <BarChart3 />, title: 'Rising Support Costs', desc: 'Paying for overlapping services and emergency reactive fixes.' },
    { icon: <ShieldAlert />, title: 'Cybersecurity Risks', desc: 'Unpatched legacy systems creating invisible entry points for threats.' },
    { icon: <Monitor />, title: 'Legacy Infrastructure', desc: 'Outdated hardware affecting daily staff productivity and morale.' },
    { icon: <Activity />, title: 'Downtime Impact', desc: 'Frequent micro-outages that cumulatively erode business profitability.' },
    { icon: <HelpCircle />, title: 'Reactive Support', desc: 'IT support that only responds after a failure, never preventing one.' },
    { icon: <MessageSquare />, title: 'Communication Breakdowns', desc: 'Staff confused about who to call for specific technical problems.' }
  ];

  return (
    <section className="py-12 lg:py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className={C}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <FadeIn className="max-w-2xl">
            <span className="c9-eyebrow mb-4">Operational Reality</span>
            <h2 className="c9-section-heading mb-6">Stop Accepting Operational Friction</h2>
            <p className="c9-body">
              When your current provider is reactive and fragmented, your business carries the risk. It’s time to move to an environment designed for accountability.
            </p>
          </FadeIn>

          
          <FadeIn delay={0.1} className="flex gap-3">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all"
            >
              <ChevronLeftIcon size={20} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all"
            >
              <ChevronRightIcon size={20} />
            </button>
          </FadeIn>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {pains.map((item, i) => (
              <div key={i} className="embla__slide flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0">
                <FadeIn delay={i * 0.05} className="h-full bg-white p-8 rounded-3xl border border-slate-200 flex flex-col gap-4 shadow-sm hover:border-[#5D00D6]/20 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors duration-500">
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 22 })}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[16px] mb-2 font-clash">{item.title}</h4>
                    <p className="text-slate-500 text-[14px] leading-relaxed font-dm-sans">{item.desc}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 3 — SINGLE ACCOUNTABILITY
   ───────────────────────────────────────────────────────── */
const AccountabilityPositioning = () => (
  <section className="py-12 lg:py-24 bg-white overflow-hidden">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">Total Ownership</span>
          <h2 className="c9-section-heading mb-6">Leave the Vendor Finger-Pointing Behind</h2>
          <p className="c9-body mb-10 text-slate-600">
            Most businesses outgrow their IT provider when support becomes reactive. C9 provides the centralized management and single-point accountability required for modern, stable operations.
          </p>

          
          <div className="space-y-6">
            {[
              { title: 'One Accountable Partner', desc: 'No more vendor finger-pointing. We own the resolution.' },
              { title: 'One Support Relationship', desc: 'Your staff calls one number for any technical requirement.' },
              { title: 'One Escalation Path', desc: 'Clear, direct hierarchy for critical operational events.' },
              { title: 'Simplified Operations', desc: 'We handle the technical complexity while you lead the business.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] shrink-0 mt-1">
                  <CheckCircle size={14} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[16px] mb-1 font-clash">{item.title}</h4>
                  <p className="text-slate-500 text-[14px] font-dm-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="right" className="relative">
          <div className="bg-[#0c1024] p-10 lg:p-16 rounded-[48px] text-white relative shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6] opacity-10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <h3 className="text-3xl font-bold mb-8 font-clash leading-tight">Switching to C9 isn't just a provider change—it's an operational upgrade.</h3>
            <p className="text-white/60 mb-10 font-dm-sans">We eliminate the "gray areas" where current providers fail. By centralizing your infrastructure, we remove the friction that slows your business down.</p>

            <div className="pt-8 border-t border-white/10 flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#5D00D6] flex items-center justify-center shadow-lg">
                <ShieldCheck size={32} />
              </div>
              <div>
                <p className="text-2xl font-bold font-clash">99.9% Uptime</p>
                <p className="text-white/40 text-[12px] font-bold uppercase tracking-widest">Guaranteed operational stability</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 4 — TRANSITION FRAMEWORK
   ───────────────────────────────────────────────────────── */
const TransitionFramework = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      step: '01', 
      title: 'Environment & Vendor Audit', 
      icon: <Search />,
      desc: 'Inventory every system, provider, and contract. Identify hidden dependencies and technical debt before anything moves.',
      role: 'Provide access to current vendor contracts and system credentials.',
      impact: 'Zero risk. Full picture of your environment.',
      duration: 'Week 1'
    },
    { 
      step: '02', 
      title: 'Operational Risk Assessment', 
      icon: <ShieldAlert />,
      desc: 'Map potential failure points during transition and build specific contingency plans for your critical business workflows.',
      role: 'Validate which systems are mission-critical during business hours.',
      impact: 'Every risk identified and mitigated before migration.',
      duration: 'Week 1–2'
    },
    { 
      step: '03', 
      title: 'Consolidation Strategy', 
      icon: <BarChart3 />,
      desc: 'Design a unified environment that replaces fragmentation with centralized accountability. You approve the plan.',
      role: 'Sign off on the proposed architecture and priority order.',
      impact: 'Clear roadmap to a single-vendor environment.',
      duration: 'Week 2'
    },
    { 
      step: '04', 
      title: 'Phased Migration Planning', 
      icon: <FileText />,
      desc: 'Create a step-by-step roadmap that moves services in low-impact, validated windows with a rollback path at every stage.',
      role: 'Approve migration windows (typically after-hours).',
      impact: 'Staff and customers experience zero disruption.',
      duration: 'Week 2–3'
    },
    { 
      step: '05', 
      title: 'Managed Transition', 
      icon: <Settings />,
      desc: 'Execute the move with on-site support and real-time monitoring to handle any anomalies the moment they appear.',
      role: 'Remain available during cutover for business validation.',
      impact: 'Full operational handover with live safety net.',
      duration: 'Week 3–5'
    },
    { 
      step: '06', 
      title: 'Active Monitoring & Support', 
      icon: <Eye />,
      desc: 'Finalize the takeover and activate 24/7 governance, proactive maintenance, and dedicated SLA-backed support.',
      role: 'Single point of contact established. Operations normalized.',
      impact: '99.9% uptime guarantee now in effect.',
      duration: 'Week 5+'
    }
  ];

  const current = steps[activeStep];

  return (
    <section className="py-10 lg:py-16 bg-slate-50 border-y border-slate-100" id="transition-framework">
      <div className={C}>
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          
          {/* Left: Header + Step Nav */}
          <div>
            <FadeIn>
              <span className="c9-eyebrow mb-4 block">Safe Provider Migration</span>
              <h2 className="c9-section-heading mb-4">
                Switching is Safer Than Staying.
              </h2>
              <p className="text-slate-500 text-[14px] leading-relaxed font-dm-sans mb-8">
                Our structured transition framework ensures your business operations never pause while we migrate your systems.
              </p>
            </FadeIn>


            <div className="space-y-1">
              {steps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left flex items-center gap-4 px-4 py-3 rounded-xl transition-all group ${
                    activeStep === i
                      ? 'bg-[#5D00D6] text-white'
                      : 'hover:bg-white text-slate-500'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 transition-all ${
                    i < activeStep 
                      ? 'bg-green-500 text-white'
                      : activeStep === i 
                        ? 'bg-white/20 text-white' 
                        : 'bg-slate-100 text-slate-400'
                  }`}>
                    {i < activeStep ? <CheckCircle size={14} /> : i + 1}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[12px] font-bold leading-tight truncate ${activeStep === i ? 'text-white' : 'text-slate-700'}`}>
                      {s.title}
                    </p>
                    <p className={`text-[10px] font-bold uppercase tracking-widest mt-0.5 ${activeStep === i ? 'text-white/60' : 'text-slate-400'}`}>
                      {s.duration}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Detail Panel */}
          <div>
            {/* Progress Bar */}
            <div className="flex gap-1 mb-8">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    i <= activeStep ? 'bg-[#5D00D6]' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm"
              >
                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-[#5D00D6] text-white flex items-center justify-center shrink-0 shadow-lg shadow-purple-900/20">
                      {React.cloneElement(current.icon as React.ReactElement<any>, { size: 22 })}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-black text-[#5D00D6] uppercase tracking-[0.2em]">Stage {activeStep + 1} of 6</span>
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">·</span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{current.duration}</span>
                      </div>
                      <h3 className="text-2xl font-bold font-clash text-[#0c1024]">{current.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-[16px] leading-relaxed font-dm-sans mb-8">
                    {current.desc}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Your Role</p>
                      <p className="text-slate-700 text-[14px] font-medium font-dm-sans leading-relaxed">{current.role}</p>
                    </div>
                    <div className="bg-[#5D00D6]/5 rounded-2xl p-5 border border-[#5D00D6]/10">
                      <p className="text-[9px] font-black text-[#5D00D6] uppercase tracking-[0.2em] mb-2">Business Outcome</p>
                      <p className="text-[#5D00D6] text-[14px] font-bold font-dm-sans leading-relaxed">{current.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="px-8 lg:px-10 py-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStep(s => Math.max(0, s - 1))}
                    disabled={activeStep === 0}
                    className="flex items-center gap-2 text-[13px] font-bold text-slate-400 hover:text-[#5D00D6] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    <ChevronRight size={16} className="rotate-180" /> Previous
                  </button>
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">{activeStep + 1} / {steps.length}</span>
                  {activeStep < steps.length - 1 ? (
                    <button
                      onClick={() => setActiveStep(s => Math.min(steps.length - 1, s + 1))}
                      className="flex items-center gap-2 text-[13px] font-bold text-[#5D00D6] hover:gap-3 transition-all"
                    >
                      Next Stage <ChevronRight size={16} />
                    </button>
                  ) : (
                    <a
                      href="#consultation-section"
                      className="flex items-center gap-2 text-[13px] font-bold text-[#5D00D6] hover:gap-3 transition-all"
                    >
                      Start Assessment <ChevronRight size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 5 — OFFERINGS (Business Outcomes)
   ───────────────────────────────────────────────────────── */
const OutcomesOfferings = () => (
  <section className="py-10 lg:py-16 bg-white border-t border-slate-100">
    <div className={C}>
      <FadeIn className="mb-10">
        <span className="c9-eyebrow mb-4 block">Why Businesses Switch</span>
        <h2 className="c9-section-heading">Replace Fragmented Support With C9</h2>

      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { 
            icon: <RefreshCw />, 
            title: 'Vendor Consolidation', 
            problem: 'Fragmented bills, multiple helpdesks, no coordination.',
            outcome: 'One accountable partner for your entire IT and telco ecosystem.'
          },
          { 
            icon: <Activity />, 
            title: 'Business Continuity', 
            problem: 'Micro-outages eroding daily productivity and staff morale.',
            outcome: '99.9% uptime SLA backed by proactive monitoring.'
          },
          { 
            icon: <Users />, 
            title: 'Managed IT & Comms', 
            problem: 'Legacy phone systems causing customer friction.',
            outcome: 'Integrated voice and data networks that just work.'
          },
          { 
            icon: <Lock />, 
            title: 'Secure Infrastructure', 
            problem: 'Unmanaged legacy vulnerabilities and growing cyber risk.',
            outcome: 'Enterprise-grade security baked into every layer.'
          },
          { 
            icon: <Monitor />, 
            title: 'Legacy Modernisation', 
            problem: '5+ year old hardware with no clear upgrade path.',
            outcome: 'A safe, structured path to modern systems.'
          },
          { 
            icon: <Eye />, 
            title: 'Proactive Monitoring', 
            problem: 'Support only reacts after systems already fail.',
            outcome: '24/7 visibility that catches issues before they escalate.'
          }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.04} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:bg-white hover:border-[#5D00D6]/20 hover:shadow-lg transition-all duration-300 group flex flex-col gap-4">
            {/* Icon + Title row */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#5D00D6] shrink-0 shadow-sm group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 18 })}
              </div>
              <h3 className="text-[15px] font-bold text-[#0c1024] font-clash leading-tight">{item.title}</h3>
            </div>

            {/* Problem */}
            <div className="flex gap-2 items-start">
              <ShieldAlert size={12} className="text-rose-400 mt-0.5 shrink-0" />
              <p className="text-slate-600 text-[13px] leading-snug font-dm-sans">{item.problem}</p>
            </div>

            {/* Benefit */}
            <div className="mt-auto bg-[#5D00D6]/5 px-4 py-3 rounded-xl border border-[#5D00D6]/10">
              <p className="text-[9px] font-bold text-[#5D00D6] uppercase tracking-[0.18em] mb-1.5">Simplification Benefit</p>
              <p className="text-slate-900 text-[13px] font-normal font-dm-sans leading-snug">{item.outcome}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 6 — RISK REDUCTION
   ───────────────────────────────────────────────────────── */
const RiskReduction = () => (
  <section className="py-12 lg:py-20 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">Transition Security</span>
          <h2 className="c9-section-heading mb-6">A Smarter Path to Operational Stability</h2>
          <p className="c9-body mb-8">
            Moving to C9 is a guided, professional transition. We reduce the anxiety of switching by ensuring your staff remains productive at every stage of the onboarding process.
          </p>

          <div className="space-y-4">
             {[
               'Phased onboarding windows',
               'Zero-downtime cutover planning',
               'Legacy system compatibility audits',
               'Full rollback contingency paths'
             ].map(item => (
               <div key={item} className="flex items-center gap-3">
                 <CheckCircle size={14} className="text-green-500 shrink-0" />
                 <span className="text-slate-900 font-bold text-[14px] uppercase tracking-wider">{item}</span>
               </div>
             ))}
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'SLA-Backed Response', desc: 'Critical issue response times guaranteed in writing.' },
            { title: 'Dedicated Onboarding', desc: 'A senior engineer assigned to your transition from Day 1.' },
            { title: 'Proactive Monitoring', desc: 'Continuous health checks to catch issues before they escalate.' },
            { title: 'Full Documentation', desc: 'Total visibility into your network, assets, and service history.' }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.05} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-[#0c1024] text-[16px] mb-3 font-clash">{item.title}</h4>
              <p className="text-slate-500 text-[13px] leading-relaxed font-dm-sans">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 7 — SOCIAL PROOF (Operational Proof)
   ───────────────────────────────────────────────────────── */
const OperationalProof = () => (
  <section className="py-12 lg:py-24 bg-white">
    <div className={C}>
      <FadeIn className="text-center mb-16">
        <span className="c9-eyebrow mb-4">Operational Proof</span>
        <h2 className="c9-section-heading mb-6">Transition Success Stories</h2>
        <p className="c9-body max-w-2xl mx-auto">Real outcomes from businesses that switched to C9 to end vendor chaos and stabilize their infrastructure.</p>
      </FadeIn>


      <div className="grid md:grid-cols-2 gap-8 font-dm-sans">
        {[
          {
            title: 'Multi-Site Retail Switching',
            before: '4 vendors, inconsistent POS uptime, 4-hour support delays.',
            after: 'Single accountable partner, 99.9% uptime, 15-minute response.',

            metric: '99.9%',
            metricLabel: 'Stability Boost'
          },
          {
            title: 'Professional Services Takeover',
            before: 'Legacy server debt, unmanaged security, fragmented voice providers.',
            after: 'Managed cloud environment, integrated voice, 100% security visibility.',

            metric: 'Zero',
            metricLabel: 'Transition Downtime'
          }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 hover:border-[#5D00D6]/20 transition-all group">
            <h3 className="text-xl font-bold text-[#0c1024] mb-8 font-clash">{item.title}</h3>
            
            <div className="space-y-6 mb-10">
              <div className="p-5 bg-white rounded-2xl border border-slate-200">
                <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-2">Before Rework</p>
                <p className="text-slate-500 text-[14px]">{item.before}</p>
              </div>
              <div className="p-5 bg-[#5D00D6] text-white rounded-2xl shadow-xl shadow-purple-900/10">
                <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-2 text-white">After Consolidation</p>
                <p className="text-white text-[14px] font-medium">{item.after}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-8 border-t border-slate-200/50">
               <div className="w-16 h-16 rounded-2xl bg-white flex flex-col items-center justify-center text-[#5D00D6] shadow-sm">
                  <p className="text-xl font-black font-clash leading-none">{item.metric}</p>
               </div>
               <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{item.metricLabel}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 8 — MANAGED IT & HELPDESK (The Human Element)
   ───────────────────────────────────────────────────────── */
const ManagedITHighlight = () => (
  <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="left">
          <span className="c9-eyebrow mb-4">Accountable Managed IT</span>
          <h2 className="c9-section-heading mb-6">
            An Australian Helpdesk That <span className="text-[#5D00D6]">Actually Owns</span> the Outcome.
          </h2>
          <p className="c9-body mb-10 text-slate-600">
            Most "Managed IT" providers stop at the ticket. C9 provides a dedicated operational hub that manages your entire environment—from your local network and WiFi to your cloud security and vendor relationships.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { 
                title: 'AU-Based Helpdesk', 
                desc: 'Speak directly to senior Australian engineers who know your site history.' 
              },
              { 
                title: 'Proactive Governance', 
                desc: 'We monitor your systems 24/7, resolving 80% of issues before your staff notices.' 
              },
              { 
                title: 'Vendor Accountability', 
                desc: 'We manage your other technical vendors so you never have to play middleman.' 
              },
              { 
                title: 'Lifecycle Management', 
                desc: 'Continuous tracking of hardware and software to prevent "surprise" failures.' 
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-[#5D00D6]/20 transition-colors">
                <h4 className="font-bold text-slate-900 text-[15px] mb-2 font-clash">{item.title}</h4>
                <p className="text-slate-500 text-[13px] leading-relaxed font-dm-sans">{item.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="#consultation-section"
            className="inline-flex items-center justify-center gap-2 bg-[#0c1024] text-white rounded-full h-14 px-8 text-[14px] font-bold hover:bg-[#5D00D6] transition-all"
          >
            Review Your Managed IT Requirements
          </a>
        </FadeIn>

        <FadeIn direction="right" className="relative">
          <div className="relative rounded-[48px] overflow-hidden shadow-2xl border border-slate-100 aspect-square lg:aspect-auto lg:h-[600px] bg-slate-100">
             <img 
               src="/Managed IT_SMB.png" 
               alt="Managed IT Helpdesk Operations" 
               className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/60 via-transparent to-transparent" />
             
             {/* Floating Info Card */}
             <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-10 h-10 rounded-full bg-[#5D00D6] flex items-center justify-center text-white shrink-0">
                      <Activity size={20} />
                   </div>
                   <div>
                      <p className="text-[14px] font-bold text-slate-900 font-clash">Real-Time Accountability</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active System Governance</p>
                   </div>
                </div>
                <p className="text-[13px] text-slate-600 font-dm-sans leading-relaxed">
                  "Unlike traditional MSPs, C9's Managed IT layer is built into your infrastructure. We don't just fix problems; we govern your entire technical environment to prevent them."
                </p>
             </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — SUPPORT & SLA
   ───────────────────────────────────────────────────────── */
const SupportStructure = () => (
  <section className="py-12 lg:py-20 bg-slate-900 text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#5D00D6] rounded-full blur-[120px]" />
       <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#5D00D6] rounded-full blur-[120px]" />
    </div>

    <div className={C}>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10">
        <FadeIn direction="left">
          <span className="c9-eyebrow !text-[#5D00D6] mb-4">Support Governance</span>
          <h2 className="c9-section-heading !text-white mb-8">Commercially Structured Accountability</h2>

          <p className="text-white/60 text-lg mb-10 max-w-xl font-dm-sans">
            Our support model is designed for business continuity, not just "fixing things." We operate with defined commitment levels and transparent escalation hierarchies.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { title: '24/7 Monitoring', desc: 'Continuous oversight of infrastructure health and security layers.' },
              { title: '15-Min Response', desc: 'Defined SLA for critical operational incidents, 24/7/365.' },
              { title: 'AU-Based Team', desc: 'Managed by local engineers who understand Australian infrastructure.' },
              { title: 'Account Governance', desc: 'Quarterly reviews to ensure ongoing alignment and optimization.' }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <h4 className="font-bold text-white text-[16px] font-clash">{item.title}</h4>
                <p className="text-white/40 text-[13px] leading-relaxed font-dm-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="right" className="bg-white/5 border border-white/10 p-10 rounded-[48px] backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-8 font-clash">Escalation Commitment</h3>
          <div className="space-y-6">
            {[
              { level: 'Level 1', title: 'Transition Desk', time: '< 60 Seconds', desc: 'Immediate incident logging and triage during and after migration.' },
              { level: 'Level 2', title: 'Managed Ops', time: '< 15 Minutes', desc: 'Active remediation and multi-vendor coordination.' },
              { level: 'Level 3', title: 'Senior Engineering', time: 'Immediate', desc: 'Direct accountability for critical business systems.' }

            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#5D00D6] flex items-center justify-center shrink-0 font-black text-[12px]">
                  {item.level}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-bold text-[16px] font-clash">{item.title}</p>
                    <p className="text-[#5D00D6] font-bold text-[11px] uppercase tracking-widest">{item.time}</p>
                  </div>
                  <p className="text-white/40 text-[13px] font-dm-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 9 — FAQ + TESTIMONIALS
   ───────────────────────────────────────────────────────── */
const FAQV3 = () => (
  <WpFAQAndFeedback 
    maxWidth="1240px"
    compact={false}
    showTestimonials={true}
    faqItems={[
      { 
        q: 'Will our business experience downtime during the transition?', 
        a: 'No. Our framework uses a parallel transition model where we build and validate your new environment in the background. We only switch over once everything is verified, usually in a low-impact window (after-hours) with a guaranteed rollback path.' 
      },
      { 
        q: 'How long does a full consolidation usually take?', 
        a: 'A typical transition for an established business takes 4-6 weeks from initial audit to full managed control. This timeline ensures we move safely without disrupting your staff or customers.' 
      },
      { 
        q: 'Can you work with our existing legacy systems?', 
        a: 'Yes. Our audit phase identifies how to integrate or safely isolate legacy hardware. We specialize in "Small Business" environments where legacy operational dependencies must be maintained during modernization.' 
      },
      { 
        q: 'What happens to our current vendor contracts?', 
        a: 'As your accountable partner, we coordinate with your outgoing vendors. We handle the technical handover and communication, allowing you to focus on your business instead of managing awkward vendor exits.' 
      },
      { 
        q: 'How do you handle cybersecurity in a fragmented environment?', 
        a: 'We implement a unified security layer across all your systems. By centralizing management, we can monitor for threats across the entire environment, closing the gaps that fragmented vendors often miss.' 
      },
      { 
        q: 'What is your ongoing support and response commitment?', 
        a: 'We provide an Australian-managed helpdesk with defined SLAs. Critical issues receive an immediate response, and we commit to 99.9% uptime for the systems under our direct operational control.' 
      }
    ]}
    testimonials={[
      {
        name: "James Wilson",
        role: "CEO, Regional Logistics",
        content: "Switching to C9 was about accountability. We no longer spend hours on hold with three different vendors. When something fluctuates, C9 owns it. Period.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
        metric: "99.9%",
        metricLabel: "Uptime Guaranteed",
        cta: <a href="#consultation-section" className="inline-flex items-center justify-center bg-[#5D00D6] text-white rounded-full h-16 px-12 text-[16px] font-bold hover:bg-[#4d00b3] transition-all shadow-2xl shadow-purple-900/30 w-full sm:w-auto">Review Your Current Environment</a>
      },
      {
        name: "Dr. Amira K.",
        role: "Clinical Director, MedGroup",
        content: "The zero-disruption promise was real. Our systems were stabilized within 48 hours, and we haven't had a major outage since they took over the environment.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
        metric: "24/7",
        metricLabel: "Active Monitoring",
        cta: <a href="#transition-framework" className="inline-flex items-center justify-center border-2 border-slate-200 text-slate-600 rounded-full h-16 px-12 text-[16px] font-bold hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all bg-white w-full sm:w-auto">How the Transition Works</a>
      },
      {
        name: "Robert P.",
        role: "COO, National Retail",
        content: "C9 consolidated our 15 separate internet and phone bills into one predictable monthly cost. The savings were immediate, but the peace of mind was the real win.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
        metric: "$80K+",
        metricLabel: "Annual Savings"
      }
    ]}
  />
);

/* ─────────────────────────────────────────────────────────
   SECTION 10 — FINAL CTA
   ───────────────────────────────────────────────────────── */
const FinalCTAV3 = () => (
  <section className="py-16 md:py-24 bg-white border-t border-slate-100 relative overflow-hidden">
     <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#5D00D6 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
     
     <div className={C}>
        <div className="max-w-4xl mx-auto text-center relative z-10">
           <FadeIn>
              <span className="c9-eyebrow mb-6 block">Replace Fragmented Support</span>
              <h2 className="c9-hero-title mb-8">
                Consolidate Your Environment. <br className="hidden md:block" /> Upgrade Your Operations.
              </h2>
              <p className="c9-body mb-12 max-w-2xl mx-auto">
                Stop managing vendor finger-pointing. Book a Business Systems Assessment to review your current environment and map out a safe path to C9 accountability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                 <a
                   href="#consultation-section"
                   className="inline-flex items-center justify-center bg-[#5D00D6] text-white rounded-full h-16 px-12 text-[16px] font-bold hover:bg-[#4d00b3] transition-all shadow-2xl shadow-purple-900/30 w-full sm:w-auto"
                 >
                    Book Your Business Infrastructure Assessment
                 </a>
                 <a
                   href="#transition-framework"
                   className="inline-flex items-center justify-center border-2 border-slate-200 text-slate-600 rounded-full h-16 px-12 text-[16px] font-bold hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all bg-white w-full sm:w-auto"
                 >
                    Explore Transition Process
                 </a>
              </div>
              <div className="flex flex-wrap justify-center gap-8 items-center pt-8 border-t border-slate-100">
                 {[
                    { label: 'SLA-BACKED SUPPORT', icon: <CheckCircle /> },
                    { label: 'ZERO-DISRUPTION MIGRATION', icon: <RefreshCw /> },
                    { label: '99.9% UPTIME GUARANTEE', icon: <ShieldCheck /> }
                 ].map(item => (
                    <div key={item.label} className="flex items-center gap-2">
                       <div className="text-[#5D00D6]">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 14 })}</div>
                       <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">{item.label}</span>
                    </div>
                 ))}
              </div>
           </FadeIn>
        </div>
     </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function SmallBusinessPageV3() {
  return (
    <main className="min-h-screen bg-white">
      <HeroV3 />
      
      <WpClientTicker grayscale={true} opacity={0.3} />
      
      <ProblemSolutionSection />


      <OperationalChaos />
      <AccountabilityPositioning />
      <IndustrySections />
      <TransitionFramework />
      <ManagedITHighlight />
      <OutcomesOfferings />
      <PricingSection />
      <RiskReduction />
      {/* <OperationalProof /> */}
      <WpSupport />
      <SupportStructure />
      <FAQV3 />
      
      <FinalCTAV3 />

      <WpConsultationForm
        showHeader={false}
        eyebrow="READY TO SWITCH?"
        title="Start Your Business Systems Assessment"
        description="Expose the friction in your current environment and map out a safe, accountable strategy to move to C9. Zero disruption. Total accountability."
        formTitle="Speak With a Transition Specialist"
      />

    </main>
  );
}
