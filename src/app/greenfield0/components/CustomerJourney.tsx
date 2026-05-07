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
  ChevronRight
} from 'lucide-react';
import { C9Button } from '@/components/design-system/C9Button';
import Link from 'next/link';

const JOURNEY_STEPS = [
  {
    id: 'internet',
    label: 'Internet',
    icon: <Globe size={20} />,
    heading: 'Business Internet & Fibre',
    description: 'The foundation of your digital site. We perform free service qualifications, handle LOC ID creation, and ensure your business is connected with high-speed enterprise fibre from day one.',
    image: '/images/realistic_business_internet_fiber_box_1776077417680.png',
    options: [
      { icon: <Wifi size={20} />, title: 'Free Service Qualification', desc: 'We verify exact speeds and technology available at your specific site.' },
      { icon: <Zap size={20} />, title: 'LOC ID Management', desc: 'We handle all infrastructure registrations to avoid connection delays.' },
      { icon: <CheckCircle2 size={20} />, title: 'Enterprise nbn®', desc: 'Symmetrical high-speed fibre backed by enterprise-grade SLAs.' }
    ]
  },
  {
    id: 'networking',
    label: 'Networking & WiFi',
    icon: <Network size={20} />,
    heading: 'Managed Site Connectivity',
    description: 'High-density connectivity that reaches every corner of your new premises. Our comprehensive scope includes professional cabling, secure switching, and enterprise-grade WiFi access points.',
    image: '/images/realistic_business_networking_rack_1776077491291.png',
    options: [
      { icon: <Network size={20} />, title: 'Professional Cabling', desc: 'Full Cat6A data cabling included as part of your infrastructure setup.' },
      { icon: <Wifi size={20} />, title: 'WiFi 6E Rollout', desc: 'High-density wireless coverage optimized for high-traffic environments.' },
      { icon: <ShieldCheck size={20} />, title: 'Secure SD-WAN', desc: 'Centralized network control with built-in security and failover paths.' }
    ]
  },
  {
    id: 'phone',
    label: 'Phone System',
    icon: <Phone size={20} />,
    heading: 'Modern Cloud Voice',
    description: 'Crystal clear communication for your team and customers. Modern cloud-based systems that integrate perfectly with Microsoft Teams and your mobile workforce.',
    image: '/images/realistic_business_voice_poly_yealink_1776077360073.png',
    options: [
      { icon: <Phone size={20} />, title: 'Teams Integration', desc: 'Make and receive calls directly through your Microsoft Teams environment.' },
      { icon: <CheckCircle2 size={20} />, title: 'Cloud PBX', desc: 'A full-featured phone system managed in the cloud — no local hardware.' },
      { icon: <Zap size={20} />, title: 'Number Porting', desc: 'We handle all existing number migrations for a seamless cutover.' }
    ]
  },
  {
    id: 'cctv',
    label: 'CCTV',
    icon: <Camera size={20} />,
    heading: 'AI-Driven Surveillance',
    description: 'Absolute visibility over your new site. Intelligent surveillance with AI-driven motion detection and mobile access to keep your physical assets secure.',
    image: '/images/greenfield/cctv.png',
    options: [
      { icon: <Camera size={20} />, title: '4K AI Cameras', desc: 'Intelligent people-counting and motion analytics built directly in.' },
      { icon: <ShieldCheck size={20} />, title: 'Remote Monitoring', desc: 'Secure mobile and desktop access to live feeds from anywhere.' },
      { icon: <CheckCircle2 size={20} />, title: 'Secure Storage', desc: 'Compliance-certified local and cloud recording for total protection.' }
    ]
  },
  {
    id: 'print',
    label: 'Print Solutions',
    icon: <Printer size={20} />,
    heading: 'Managed Print Services',
    description: 'Seamless document management tailored for your operations. Reliable, managed print services that work perfectly across your network.',
    image: '/images/greenfield/networking.png',
    options: [
      { icon: <Printer size={20} />, title: 'Smart Fleet Management', desc: 'High-performance hardware tailored to your specific site volumes.' },
      { icon: <Zap size={20} />, title: 'Auto-Replenishment', desc: 'Toner and supplies arrive automatically before you run out.' },
      { icon: <CheckCircle2 size={20} />, title: 'Secure Printing', desc: 'User-based authentication to ensure document confidentiality.' }
    ]
  },
  {
    id: 'workplace',
    label: 'Modern Workplace',
    icon: <Monitor size={20} />,
    heading: 'Digital Employee Ecosystem',
    description: 'Empower your Aussie workforce with a secure, productive digital environment. Full M365 deployment and device management ready for launch.',
    image: '/images/greenfield/modern-workplace.png',
    options: [
      { icon: <Monitor size={20} />, title: 'M365 Deployment', desc: 'Full configuration of your email, collaboration, and file systems.' },
      { icon: <ShieldCheck size={20} />, title: 'Endpoint Security', desc: 'Protection for every laptop and mobile device in your fleet.' },
      { icon: <CheckCircle2 size={20} />, title: 'User Onboarding', desc: 'Automated setup for new staff to ensure they are productive day one.' }
    ]
  },
  {
    id: 'visitor',
    label: 'Visitor Solutions',
    icon: <Users size={20} />,
    heading: 'Managed Site Induction',
    description: 'The first impression your site makes. Seamless, digital visitor check-ins and contractor management that ensures safety and compliance.',
    image: '/images/greenfield/networking.png',
    options: [
      { icon: <Users size={20} />, title: 'Digital Sign-in', desc: 'Branded, contactless visitor registration at your front desk.' },
      { icon: <CheckCircle2 size={20} />, title: 'Safety Inductions', desc: 'Automated health and safety walkthroughs for every visitor.' },
      { icon: <ShieldCheck size={20} />, title: 'Contractor Compliance', desc: 'Verify insurance and certifications automatically before entry.' }
    ]
  },
];

export const CustomerJourney = ({ onOpenQualifier }: { onOpenQualifier: () => void }) => {
  const [activeTab, setActiveTab] = useState('internet');

  const activeStep = JOURNEY_STEPS.find(s => s.id === activeTab)!;

  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100 font-dm-sans">
      <div className="container mx-auto px-8 max-w-[1240px]">
        <div className="mb-12">
          <span className="c9-eyebrow mb-4 block">STARTING FROM SCRATCH?</span>
          <h2 className="c9-section-heading mb-6 font-clash">
            Everything your new site needs.
          </h2>
          
          {/* Tabs Header - Matching WpServices UI */}
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar border-b border-gray-200">
            {JOURNEY_STEPS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 text-[13px] font-bold transition-all border-b-2 relative shrink-0 ${
                    isActive 
                      ? 'text-[#5D00D6] border-[#5D00D6] bg-[#F4F0FA]' 
                      : 'text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className={`${isActive ? 'text-[#5D00D6]' : 'text-gray-400'} shrink-0`}>
                    {tab.icon}
                  </span>
                  <span className="whitespace-nowrap uppercase tracking-wider">{tab.label}</span>
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
              className="grid lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-16 items-start"
            >
              {/* Left side: Heading, Description & Image */}
              <div className="flex flex-col">
                <div className="mb-8 md:mb-10">
                  <h3 className="c9-card-title !text-[28px] md:!text-[36px] mb-6 leading-tight text-[#0c1024] font-clash">
                    {activeStep.heading}
                  </h3>
                  <p className="c9-body leading-relaxed text-slate-500 text-lg font-dm-sans">
                    {activeStep.description}
                  </p>
                </div>

                <div className="w-full relative group perspective-1000">
                  <div className="relative z-10 duration-700">
                    <img 
                      src={activeStep.image} 
                      alt={activeStep.heading} 
                      className="w-full h-[300px] object-cover object-center rounded-2xl border border-slate-100"
                    />
                  </div>
                </div>
              </div>

              {/* Right side: Feature Cards */}
              <div className="flex flex-col gap-5 pt-2">
                {activeStep.options.map((option: any, idx: number) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start justify-between p-6 bg-white border border-slate-100 rounded-2xl hover:border-[#5D00D6] hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-10 h-10 rounded-xl bg-[#F4F0FA] text-[#5D00D6] flex items-center justify-center group-hover:bg-[#5D00D6] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(93,0,214,0.3)] transition-all shrink-0 mt-1">
                        {option.icon}
                      </div>
                      <div>
                        <h4 className="c9-card-title !text-[20px] mb-2 leading-tight text-[#0c1024] group-hover:text-[#5D00D6] transition-colors font-clash">
                          {option.title}
                        </h4>
                        <p className="c9-body !text-[15px] font-medium text-slate-500 leading-relaxed font-dm-sans">
                          {option.desc}
                        </p>
                      </div>
                    </div>
                    <div className="self-center text-slate-200 group-hover:text-[#5D00D6] transition-colors">
                       <ChevronRight size={24} />
                    </div>
                  </motion.div>
                ))}

                <div className="mt-8 p-8 bg-[#0c1024] rounded-3xl text-white flex items-center justify-between group overflow-hidden relative">
                   <div className="absolute inset-0 bg-[#5D00D6]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="relative z-10">
                      <h4 className="text-xl font-bold mb-1 font-clash text-white">Operational Ready</h4>
                      <p className="text-white/60 text-sm font-dm-sans">We handle all technical dependencies for you.</p>
                   </div>
                   <C9Button 
                      onClick={onOpenQualifier}
                      size="lg" 
                      className="rounded-full relative z-10"
                   >
                      Build Site Plan
                   </C9Button>
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
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-6">
                <Monitor size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight font-clash">Want complete managed digital signages?</h4>
              <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed font-dm-sans">
                Transform your site with immersive, managed visual communication and digital signage solutions.
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
