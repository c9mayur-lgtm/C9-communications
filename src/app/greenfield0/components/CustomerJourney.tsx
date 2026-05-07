'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, 
  Network, 
  Phone, 
  Camera, 
  Printer, 
  Monitor, 
  Users, 
  ShieldCheck, 
  Shield,
  Globe,
  Zap,
  CheckCircle2,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { C9Button } from '@/components/design-system/C9Button';
import Link from 'next/link';

const JOURNEY_STEPS = [
  {
    id: 'internet',
    label: 'Internet',
    icon: <Globe size={20} />,
    heading: 'Business Internet & Fibre',
    phase: 'The Empty Shell',
    link: '/telco',
    description: 'The foundation of your digital site. We handle the entire connectivity lifecycle from initial qualification to live high-speed fibre delivery.',
    image: '/images/greenfield/internet.png',
    options: [
      { icon: <Wifi size={20} />, title: 'Free Service Qualification', desc: 'Exact speeds and technology audits for your site.' },
      { icon: <Zap size={20} />, title: 'LOC ID & Registrations', desc: 'Managing all infrastructure IDs to avoid delays.' },
      { icon: <CheckCircle2 size={20} />, title: 'Enterprise nbn® Fibre', desc: 'Symmetrical high-speed fibre with enterprise SLAs.' },
      { icon: <Network size={20} />, title: 'Carrier Path Audits', desc: 'Ensuring diverse entry points for maximum uptime.' },
      { icon: <ShieldCheck size={20} />, title: 'Redundancy Design', desc: 'Failover paths via secondary carriers or 5G.' },
      { icon: <Monitor size={20} />, title: '24/7 Link Monitoring', desc: 'Proactive alerts and engineering support.' }
    ]
  },
  {
    id: 'networking',
    label: 'Networking & WiFi',
    icon: <Network size={20} />,
    heading: 'Managed Site Connectivity',
    phase: 'The Build Phase',
    link: '/managed-it/network-solutions',
    description: 'High-density connectivity that reaches every corner. We design, stage, and deploy the entire internal network fabric.',
    image: '/images/greenfield/networking.png',
    options: [
      { icon: <Network size={20} />, title: 'Structured Cabling', desc: 'Certified Cat6A and Fibre backbone installation.' },
      { icon: <Wifi size={20} />, title: 'WiFi 6E Rollout', desc: 'High-density coverage for guests and staff.' },
      { icon: <ShieldCheck size={20} />, title: 'Managed SD-WAN', desc: 'Centralised control with built-in security.' },
      { icon: <Zap size={20} />, title: 'Hardware Staging', desc: 'Off-site configuration for rapid Day 1 rollout.' },
      { icon: <Monitor size={20} />, title: 'VLAN Segmentation', desc: 'Secure isolation for POS, Guest, and Staff traffic.' },
      { icon: <Shield size={20} />, title: 'Network Security', desc: 'Integrated firewalls and intrusion prevention.' }
    ]
  },
  {
    id: 'phone',
    label: 'Phone System',
    icon: <Phone size={20} />,
    heading: 'Modern Cloud Voice',
    phase: 'The Hardware Stack',
    link: '/telco/phone-system',
    description: 'Crystal clear communication from Day 1. Modern cloud-based systems that integrate perfectly with your workflows.',
    image: '/images/greenfield/phone-system.png',
    options: [
      { icon: <Phone size={20} />, title: 'Teams Integration', desc: 'Direct routing for calling within Microsoft Teams.' },
      { icon: <CheckCircle2 size={20} />, title: 'Cloud PBX Setup', desc: 'Full-featured system without on-site hardware.' },
      { icon: <Zap size={20} />, title: 'Number Porting', desc: 'Seamless migration of your existing business numbers.' },
      { icon: <Users size={20} />, title: 'IVR & Call Routing', desc: 'Professional greetings and smart call distribution.' },
      { icon: <Monitor size={20} />, title: 'Softphone Apps', desc: 'Unified communication across mobile and desktop.' },
      { icon: <ShieldCheck size={20} />, title: 'Voice AI', desc: 'Smart AI receptionists to handle routine enquiries.' }
    ]
  },
  {
    id: 'cctv',
    label: 'CCTV',
    icon: <Camera size={20} />,
    heading: 'AI-Driven Surveillance',
    phase: 'The Hardware Stack',
    link: '/defense',
    description: 'Absolute visibility over your new site. Intelligent surveillance that integrates with your core network.',
    image: '/images/greenfield/cctv.png',
    options: [
      { icon: <Camera size={20} />, title: '4K AI Cameras', desc: 'Intelligent people-counting and motion analytics.' },
      { icon: <ShieldCheck size={20} />, title: 'Remote Monitoring', desc: 'Live feeds accessible from mobile and desktop.' },
      { icon: <CheckCircle2 size={20} />, title: 'Secure Storage', desc: 'Compliance-certified local and cloud recording.' },
      { icon: <Zap size={20} />, title: 'Mobile Alerts', desc: 'Instant notifications for unusual site activity.' },
      { icon: <Users size={20} />, title: 'Face Recognition', desc: 'Secure access control for staff and contractors.' }
    ]
  },
  {
    id: 'print',
    label: 'Print Solutions',
    icon: <Printer size={20} />,
    heading: 'Managed Print Services',
    phase: 'The Hardware Stack',
    link: '/managed-it',
    description: 'Reliable, managed print services that work perfectly across your network from the moment you open.',
    image: '/images/greenfield/print-solutions.png',
    options: [
      { icon: <Printer size={20} />, title: 'Smart Fleet Management', desc: 'Hardware tailored to your site-specific volumes.' },
      { icon: <Zap size={20} />, title: 'Auto-Replenishment', desc: 'Toner arrives before you ever run out.' },
      { icon: <CheckCircle2 size={20} />, title: 'Secure Printing', desc: 'Authentication to ensure document confidentiality.' },
      { icon: <Monitor size={20} />, title: 'Fleet Monitoring', desc: 'Real-time visibility into usage and performance.' }
    ]
  },
  {
    id: 'workplace',
    label: 'Modern Workplace',
    icon: <Monitor size={20} />,
    heading: 'Digital Employee Ecosystem',
    phase: 'The Live Venue',
    link: '/modern-workplace',
    description: 'Empower your workforce with a secure digital environment. M365 and device management ready for launch.',
    image: '/images/greenfield/modern-workplace.png',
    options: [
      { icon: <Monitor size={20} />, title: 'M365 Deployment', desc: 'Full config of email and collaboration systems.' },
      { icon: <ShieldCheck size={20} />, title: 'Endpoint Security', desc: 'Protection for every laptop and mobile device.' },
      { icon: <CheckCircle2 size={20} />, title: 'User Onboarding', desc: 'Automated setup for day-one productivity.' },
      { icon: <Zap size={20} />, title: 'Intune Enrollment', desc: 'Simplified remote management of all company assets.' }
    ]
  },
  {
    id: 'visitor',
    label: 'Visitor Solutions',
    icon: <Users size={20} />,
    heading: 'Managed Site Induction',
    phase: 'The Live Venue',
    link: '/modern-workplace',
    description: 'The first impression your site makes. Seamless digital visitor check-ins and contractor management.',
    image: '/images/greenfield/visitors-solution.png',
    options: [
      { icon: <Users size={20} />, title: 'Digital Sign-in', desc: 'Contactless visitor registration at the front desk.' },
      { icon: <CheckCircle2 size={20} />, title: 'Safety Inductions', desc: 'Automated health and safety walkthroughs.' },
      { icon: <ShieldCheck size={20} />, title: 'Contractor Compliance', desc: 'Automatic verification of insurance and certs.' },
      { icon: <Zap size={20} />, title: 'Evacuation Mgmt', desc: 'Real-time digital roll-call during emergencies.' }
    ]
  },
];

export const CustomerJourney = ({ onOpenQualifier }: { onOpenQualifier: () => void }) => {
  const [activeTab, setActiveTab] = useState('internet');

  const activeStep = JOURNEY_STEPS.find(s => s.id === activeTab)!;

  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100 font-dm-sans">
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="mb-12 text-center">
          <span className="c9-eyebrow mb-4 block">STARTING FROM SCRATCH?</span>
          <h2 className="c9-section-heading mb-6 font-clash mx-auto max-w-2xl">
            Everything your new site needs.
          </h2>
          
          {/* Navigation Pills - Cleaner, non-congested wrapping */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {JOURNEY_STEPS.map((tab) => {
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

        {/* Tab Content Area */}
        <div className="py-4 md:py-6 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-start"
            >
              {/* Left side: Focused Hero Image */}
              <div className="w-full relative group">
                <div className="relative z-10">
                  <img 
                    src={activeStep.image} 
                    alt={activeStep.heading} 
                    className="w-full h-[550px] object-cover object-center rounded-[32px] border border-slate-100 shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#5D00D6]/5 rounded-full blur-3xl -z-10" />
              </div>

              <div className="flex flex-col">
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-4 py-1.5 bg-[#5D00D6]/5 text-[#5D00D6] text-[11px] font-bold uppercase tracking-[0.25em] rounded-full border border-[#5D00D6]/10">
                      Phase {activeStep.id.toUpperCase()} • {activeStep.phase}
                    </div>
                  </div>
                  <h3 className="text-[24px] md:text-[32px] font-bold mb-4 leading-[1.2] text-[#0c1024] font-clash tracking-tight">
                    {activeStep.heading}
                  </h3>
                  <p className="text-[14px] md:text-[15px] leading-relaxed text-slate-500 font-medium font-dm-sans">
                    {activeStep.description}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="mb-6 flex items-center justify-between">
                     <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#5D00D6]">
                        What we handle end-to-end
                     </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
                    {activeStep.options.map((option: any, idx: number) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
                            <CheckCircle2 size={14} strokeWidth={3} />
                          </div>
                          <h4 className="text-[15px] font-bold text-[#0c1024] group-hover:text-[#5D00D6] transition-colors font-clash leading-tight">
                            {option.title}
                          </h4>
                        </div>
                        <p className="text-[12px] font-medium text-slate-400 leading-normal font-dm-sans pl-9">
                          {option.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-100">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div>
                        <h4 className="text-[15px] font-bold text-[#0c1024] mb-1 font-clash text-center sm:text-left">Want to know more?</h4>
                        <p className="text-[13px] text-slate-400 font-medium font-dm-sans text-center sm:text-left">Explore our dedicated {activeStep.label} solutions.</p>
                      </div>
                      <C9Button 
                        asChild
                        variant="outline"
                        className="rounded-full border-[#5D00D6]/20 text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-all px-8 h-12"
                      >
                        <Link href={activeStep.link}>
                          Go to {activeStep.label} Page
                        </Link>
                      </C9Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Extra Divisional Cards - RESTORED */}
        <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-[#0c1024] rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between h-full border border-white/5"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-8 right-8">
              <img src="/c9-defense-logo.png" alt="C9 Defense" className="h-10 w-auto object-contain opacity-100" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-purple-400 mb-6">
                <Shield size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight font-clash">Want to secure your business?</h4>
              <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed font-dm-sans">
                Take protection to the next level with our specialised security and surveillance division.
              </p>
            </div>
            <C9Button 
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10 rounded-full h-14"
              asChild
            >
              <a href="/defense" className="flex items-center justify-center gap-2">
                Make sure you visit C9 Defense 
              </a>
            </C9Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-white rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between h-full border border-slate-100 shadow-xl shadow-slate-200/50"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5D00D6]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-8 right-8">
              <img 
                src="/c9-lumina-logo.png" 
                alt="C9 Lumina" 
                className="h-12 w-auto object-contain opacity-100" 
                style={{ filter: 'invert(1) hue-rotate(180deg)' }}
              />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-6">
                <Monitor size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight font-clash">
                Want complete managed <span style={{ color: '#BF2F70' }}>digital signages</span>?
              </h4>
              <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed font-dm-sans">
                Transform your site with immersive, managed visual communication and <span style={{ color: '#BF2F70' }}>digital signage</span> solutions.
              </p>
            </div>
            <C9Button 
              className="w-full rounded-full h-14 shadow-xl shadow-purple-900/20"
              asChild
            >
              <a href="/lumina" className="flex items-center justify-center gap-2">
                Visit C9 Lumina 
              </a>
            </C9Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
