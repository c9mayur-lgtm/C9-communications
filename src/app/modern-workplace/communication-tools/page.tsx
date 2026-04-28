'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeUp, ScaleIn, Eyebrow } from '../components';
import { Phone, MessageCircle, Video, CircleUserRound, Mic, Smartphone, Users as UsersIcon, Cloud, ArrowRight, PackageCheck, Target, ShieldAlert } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type StackItem = {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

type UseCase = {
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
};

type ComparisonRow = {
  label: string;
  teamsCalling: string;
  c9Voice: string;
};

type HardwareTab = {
  id: 'desk-phones' | 'meeting-rooms' | 'mobile-dect';
  label: string;
  headline: string;
  description: string;
  models: string[];
  fit: string;
};

type MigrationStep = {
  step: string;
  title: string;
  detail: string;
};

const stackItems: StackItem[] = [
  {
    title: 'Microsoft Teams',
    description: 'Chat, calling, meetings, and shared files in one secure Microsoft experience.',
    bullets: ['Persistent team chat', 'HD video meetings', 'File collaboration in channels'],
    icon: UsersIcon,
  },
  {
    title: 'Cloud Voice',
    description: 'Choose C9 Voice or Teams Calling with Australian-grade call quality and support.',
    bullets: ['Inbound and outbound calling', 'Auto-attendant and queues', 'Local number porting'],
    icon: Cloud,
  },
  {
    title: 'Desk Phones',
    description: 'Yealink certified hardware configured and supported by C9 engineers.',
    bullets: ['T5 business desk phones', 'Native Teams and SIP support', 'Remote provisioning'],
    icon: Phone,
  },
  {
    title: 'Mobile Integration',
    description: 'One business number across desk phone, laptop, and mobile app.',
    bullets: ['Simultaneous ring', 'Call handoff between devices', 'Work SMS and voicemail sync'],
    icon: Smartphone,
  },
];

const useCases: UseCase[] = [
  {
    title: 'Hybrid Team',
    subtitle: 'Office + remote workforce',
    description:
      'Keep office desks, remote staff, and mobile users connected on one number with simultaneous ring and shared presence.',
    outcomes: ['No missed calls', 'Consistent caller experience', 'Faster internal handoff'],
  },
  {
    title: 'Meeting Room Collaboration',
    subtitle: 'Teams Rooms across 3 locations',
    description:
      'Standardise room systems so every site joins meetings the same way, with one-touch join and central device management.',
    outcomes: ['Reduced meeting delays', 'Consistent AV experience', 'Centralised room support'],
  },
  {
    title: 'Customer Support Queue',
    subtitle: 'Auto-attendant + smart distribution',
    description:
      'Route customer calls to the right team with queue logic, time-of-day handling, and visibility into response performance.',
    outcomes: ['Improved answer rates', 'Balanced team load', 'Better customer wait times'],
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Best for',
    teamsCalling: 'Microsoft-first businesses already living in Teams',
    c9Voice: 'Businesses needing flexible telephony and advanced queue controls',
  },
  {
    label: 'Pricing model',
    teamsCalling: 'Per-user licensing with Microsoft calling add-ons',
    c9Voice: 'Per-user and call-flow bundles optimised by C9',
  },
  {
    label: 'CRM integration',
    teamsCalling: 'Available via Microsoft ecosystem and supported connectors',
    c9Voice: 'Built for broad CRM integrations with tailored call workflows',
  },
  {
    label: 'Hardware support',
    teamsCalling: 'Teams-certified desk phones and room systems',
    c9Voice: 'Yealink SIP and multi-vendor endpoints with custom provisioning',
  },
  {
    label: 'Feature depth',
    teamsCalling: 'Strong Teams-native calling, meetings, and collaboration',
    c9Voice: 'Advanced queueing, routing, reporting, and multi-site controls',
  },
];

const hardwareTabs: HardwareTab[] = [
  {
    id: 'desk-phones',
    label: 'Desk Phones (T5 Series)',
    headline: 'Yealink T5 desk phones for power users and front desks',
    description:
      'Deploy premium desk phones with HD audio, busy lamp support, and quick provisioning for office and reception teams.',
    models: ['SIP-T54W', 'SIP-T57W', 'MP56 Teams Edition'],
    fit: 'Best for fixed desks, executives, and reception roles.',
  },
  {
    id: 'meeting-rooms',
    label: 'Meeting Room Systems (MeetingBar A-Series)',
    headline: 'All-in-one Teams Rooms for medium and large spaces',
    description:
      'Standardise room collaboration with Yealink MeetingBar systems, wireless content sharing, and centrally managed devices.',
    models: ['MeetingBar A20', 'MeetingBar A30', 'RoomPanel scheduling display'],
    fit: 'Best for boardrooms, collaboration hubs, and multi-site meeting consistency.',
  },
  {
    id: 'mobile-dect',
    label: 'Mobile & DECT',
    headline: 'Mobility-first communications for warehouse and field teams',
    description:
      'Combine mobile apps with DECT handsets for teams that move constantly, while retaining one business identity.',
    models: ['W79P DECT bundle', 'W74H handsets', 'Teams mobile softphone setup'],
    fit: 'Best for operations, retail floors, clinics, and distributed teams.',
  },
];

const migrationSteps: MigrationStep[] = [
  {
    step: 'Step 1',
    title: 'Audit current PBX',
    detail: 'Review numbers, call flows, hardware, and pain points across sites before design.',
  },
  {
    step: 'Step 2',
    title: 'Design cloud architecture',
    detail: 'Map Teams or C9 Voice architecture, queue logic, licensing, and hardware rollout plan.',
  },
  {
    step: 'Step 3',
    title: 'Parallel running (optional)',
    detail: 'Operate old and new systems side-by-side to de-risk migration for business-critical teams.',
  },
  {
    step: 'Step 4',
    title: 'Cutover and go-live',
    detail: 'Port numbers, activate users, validate routing, and provide local onboarding support.',
  },
];

const sectionClassName = 'py-12 md:py-16';
const containerClassName = 'mx-auto w-full max-w-[1240px] px-6';
const cardClassName = 'group rounded-[24px] border border-gray-100 bg-white p-6 md:p-8 hover:border-[#5D00D6]/20 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all duration-500 overflow-hidden relative';

export default function CommunicationToolsPage() {
  const [activeTabId, setActiveTabId] = useState<HardwareTab['id']>('desk-phones');

  const activeTab = hardwareTabs.find((tab) => tab.id === activeTabId) ?? hardwareTabs[0];

  return (
    <div className="bg-[#F8FAFF] min-h-screen pt-4 text-[#0C1024] overflow-x-hidden" style={{ fontFamily: '"Proxima Nova","Inter",system-ui,sans-serif' }}>
      
      {/* 1. HERO SECTION */}
      <section className="pt-8 pb-12 md:pt-10 md:pb-16 relative bg-gradient-to-b from-white via-[#F8FAFF]/50 to-white overflow-hidden">
        {/* Subtle dynamic background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5D00D6]/[0.02] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className={`${containerClassName} relative z-10`}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
            
            {/* Left */}
            <div className="max-w-[700px] pt-2 md:pt-6">
              <FadeUp>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DCCDF8] bg-white px-3 py-1.5 shadow-sm">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5D00D6]">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  </div>
                  <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#5D00D6] pr-1">Unified Communications</span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="c9-hero-title mb-6 !leading-[1.15] font-bold">
                  One unified system. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D00D6] to-[#00875A]">From desk phone to Teams chat.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="mb-10 text-[18px] md:text-[21px] leading-relaxed text-[#4C587E]">
                  Your team shouldn't juggle three different apps to communicate. C9 delivers unified voice, video, and chat, fully integrated into Microsoft Teams or our tailored C9 Voice platform.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="mb-8 flex flex-wrap gap-4">
                  <Link
                    href="#communication-stack"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#5D00D6] px-8 text-[16px] font-bold text-white transition-all hover:bg-[#7116FF] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(93,0,214,0.3)]"
                  >
                    See Unified Comms Solutions
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center rounded-full border border-[#DCCDF8] bg-white px-8 text-[16px] font-bold text-[#5D00D6] transition-all hover:border-[#5D00D6] hover:bg-gray-50"
                  >
                    Talk to a Comms Specialist
                  </Link>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-gray-100 bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    100% Australian Support
                  </span>
                  <span className="rounded-full border border-gray-100 bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Yealink Certified Engineers
                  </span>
                </div>
              </FadeUp>
            </div>

            {/* Right: Rich Interactive Visual */}
            <ScaleIn delay={0.4} className="relative hidden lg:block h-[560px] w-full">
              <div className="absolute top-8 right-0 w-[500px] h-[460px] rounded-[32px] bg-[#f8fbff] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-200 group flex items-center justify-center">
                {/* Simulated Softphone / Teams Client Mockup */}
                <div className="w-[85%] h-[85%] bg-white rounded-2xl shadow-xl border border-gray-100 flex overflow-hidden relative">
                  {/* Sidebar */}
                  <div className="w-16 bg-[#0c1024] flex flex-col items-center py-4 gap-6 shrink-0 z-10 text-gray-400">
                     <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center"><CircleUserRound size={16} /></div>
                     <MessageCircle size={18} />
                     <Phone size={18} className="text-white" /> {/* Active */}
                     <Video size={18} />
                  </div>
                  {/* Active Call State */}
                  <div className="flex-1 flex flex-col pt-6 pb-4 px-6 items-center justify-center relative overflow-hidden">
                     {/* Background blur */}
                     <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
                     
                     <div className="w-24 h-24 rounded-full bg-gray-100 border-4 border-white shadow-md z-10 overflow-hidden mb-4">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Caller" className="w-full h-full object-cover" />
                     </div>
                     <h3 className="font-bold text-[#0c1024] text-[18px] z-10">Sarah Jenkins</h3>
                     <p className="text-gray-500 text-[14px] z-10 mb-8 font-mono">00:04:22</p>

                     {/* Call controls */}
                     <div className="flex gap-4 z-10">
                       <div className="w-12 h-12 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-50 hover:-translate-y-0.5 transition-all"><Mic size={18} /></div>
                       <div className="w-12 h-12 rounded-full bg-red-500 shadow-md border border-red-600 flex items-center justify-center text-white cursor-pointer hover:bg-red-600 hover:-translate-y-0.5 transition-all"><Phone size={18} className="rotate-[135deg]" /></div>
                     </div>

                     {/* Expanding call circles animation */}
                     <motion.div animate={{ scale: [1, 2], opacity: [0.1, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute w-32 h-32 rounded-full bg-[#5D00D6] top-1/2 -translate-y-[calc(50%+4rem)] pointer-events-none" />
                  </div>
                </div>

                {/* Floating Missed Call bubble */}
                <motion.div animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-10 right-10 bg-white rounded-xl shadow-lg border border-gray-100 p-3 flex gap-3 items-center z-30">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center"><Phone size={12} className="rotate-[135deg]" /></div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-400">Missed Call</div>
                    <div className="text-[12px] font-bold text-[#0c1024]">Ext. 403</div>
                  </div>
                </motion.div>
              </div>
            </ScaleIn>

          </div>
        </div>
      </section>

      <section id="communication-stack" className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <FadeUp className="mb-12 max-w-[680px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">Your communication stack, managed end-to-end</h2>
            <p className="text-[18px] text-gray-500 font-medium">
              C9 combines collaboration, voice, hardware, and mobility into one platform your team can adopt quickly.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stackItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScaleIn key={item.title} delay={idx * 0.1}>
                  <article className={cardClassName}>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4F0FA] text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors duration-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="c9-card-title mb-3 group-hover:text-[#5D00D6] transition-colors">{item.title}</h3>
                    <p className="mb-5 text-[14px] leading-relaxed text-gray-500">{item.description}</p>
                    <ul className="space-y-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="text-[14px] font-medium text-gray-600 flex items-start gap-2">
                          <span className="text-[#5D00D6] mt-0.5">-</span> {bullet}
                        </li>
                      ))}
                    </ul>
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </article>
                </ScaleIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className={sectionClassName}>
        <div className={containerClassName}>
          <FadeUp className="mb-12 max-w-[680px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">Built for greenfield, brownfield, and enterprise teams</h2>
            <p className="text-[18px] text-gray-500 font-medium">
              Whether you are launching from scratch or replacing legacy systems, we design communications around operational outcomes.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {useCases.map((item, idx) => (
              <FadeUp key={item.title} delay={idx * 0.1}>
                <article className={cardClassName}>
                  <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.15em] text-[#5D00D6]">{item.subtitle}</p>
                  <h3 className="c9-card-title mb-3 group-hover:text-[#5D00D6] transition-colors">{item.title}</h3>
                  <p className="mb-5 text-[14px] leading-relaxed text-gray-500">{item.description}</p>
                  <ul className="space-y-2">
                    {item.outcomes.map((outcome) => (
                      <li key={outcome} className="text-[14px] font-medium text-gray-600 flex items-start gap-2">
                        <span className="text-[#5D00D6] mt-0.5">-</span> {outcome}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <FadeUp className="mb-10 max-w-[760px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">Teams Calling vs C9 Voice</h2>
            <p className="text-[18px] text-gray-500 font-medium">
              Both paths can deliver modern calling. We recommend the right fit based on workflow complexity, support expectations, and growth plans.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="overflow-hidden rounded-[24px] border border-gray-100 bg-white">
            <div className="grid grid-cols-1 bg-gray-50/50 lg:grid-cols-3">
              <div className="border-b border-gray-100 p-6 text-[14px] font-bold uppercase tracking-[0.12em] text-[#5D00D6] lg:border-b-0 lg:border-r">
                Comparison area
              </div>
              <div className="border-b border-gray-100 p-6 text-[20px] font-bold lg:border-b-0 lg:border-r">Teams Calling</div>
              <div className="p-6 text-[20px] font-bold">C9 Voice</div>
            </div>

            {comparisonRows.map((row) => (
              <div key={row.label} className="grid grid-cols-1 border-t border-gray-100 lg:grid-cols-3 hover:bg-gray-50/50 transition-colors">
                <div className="border-b border-gray-100 p-6 text-[14px] font-bold uppercase tracking-[0.12em] text-[#5D00D6] lg:border-b-0 lg:border-r">
                  {row.label}
                </div>
                <div className="border-b border-gray-100 p-6 text-[14px] leading-relaxed text-gray-600 lg:border-b-0 lg:border-r">
                  {row.teamsCalling}
                </div>
                <div className="p-6 text-[14px] leading-relaxed text-gray-600">{row.c9Voice}</div>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      <section className={`${sectionClassName} bg-[#0C1024] relative overflow-hidden`}>
        {/* Subtle glow background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#2E006A_0%,transparent_50%)] opacity-20" />
        
        <div className={`${containerClassName} relative z-10`}>
          {/* Header Split Layout */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <FadeUp className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                <div className="w-2 h-2 rounded-full bg-[#5D00D6] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Hardware Ecosystem</span>
              </div>
              <h2 className="text-[30px] md:text-[38px] font-bold text-white leading-[1.1] tracking-tight font-proxima">
                Yealink <span className="text-[#5D00D6]">hardware options</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1} className="max-w-[420px]">
              <p className="text-white/50 text-[17px] leading-relaxed">
                Over 40 standard certified models designed to give your staff and customers the best possible australian calling experience.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="mb-10 flex flex-wrap gap-3">
            {hardwareTabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`rounded-full border px-6 py-3 text-[14px] font-bold transition-all duration-300 ${
                    isActive 
                      ? 'border-[#5D00D6] bg-[#5D00D6] text-white shadow-[0_8px_20px_rgba(93,0,214,0.3)]' 
                      : 'border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </FadeUp>

          {/* Active Tab Area */}
          <div className="relative">
            <FadeUp key={activeTab.id} className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {activeTab.models.map((model, i) => {
                 let ModelIcon = Phone;
                 if (activeTab.id === 'meeting-rooms') ModelIcon = Video;
                 if (activeTab.id === 'mobile-dect') ModelIcon = Smartphone;
                 
                 return (
                   <div key={model} className="bg-white/[0.03] border border-white/10 rounded-[32px] p-8 md:p-10 hover:border-[#5D00D6]/40 transition-all duration-500 group relative overflow-hidden">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-500 mb-10">
                         <ModelIcon size={24} />
                      </div>
                      <h3 className="text-[22px] font-bold text-white mb-4 tracking-tight">{model}</h3>
                      <p className="text-white/40 text-[14px] leading-relaxed mb-6">
                        {activeTab.id === 'desk-phones' && 'Premium desk phone with HD audio and busy lamp support for power users.'}
                        {activeTab.id === 'meeting-rooms' && 'All-in-one meeting bar with AI tracking and one-touch join capabilities.'}
                        {activeTab.id === 'mobile-dect' && 'Ruggedized mobile handset for teams that require constant workplace mobility.'}
                      </p>
                      <div className="flex items-center gap-2 text-[#5D00D6] text-[14px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                         Details <ArrowRight size={14} />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#5D00D6]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                   </div>
                 );
               })}
            </FadeUp>
            
            {/* Category Fit Text as a subtle floating footer */}
            <FadeUp delay={0.4} className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-[#5D00D6]/20 flex items-center justify-center text-[#5D00D6]">
                   <PackageCheck size={16} />
                 </div>
                 <span className="text-white/80 text-[14px] font-bold">{activeTab.headline}</span>
               </div>
               <div className="text-white/40 text-[14px]">
                 <span className="text-[#5D00D6] font-bold mr-2">// FIT:</span>
                 {activeTab.fit}
               </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <div className="mb-10 max-w-[720px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">Migration process</h2>
            <p className="text-[17px] text-[#4C587E]">
              Our rollout framework reduces disruption and gives your team confidence before go-live.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {migrationSteps.map((item, idx) => (
              <FadeUp key={item.step} delay={idx * 0.1}>
                <article className={cardClassName}>
                  <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-[#5D00D6] bg-[#5D00D6]/5 inline-flex px-3 py-1 rounded-full">{item.step}</p>
                  <h3 className="c9-card-title mb-3 group-hover:text-[#5D00D6] transition-colors">{item.title}</h3>
                  <p className="text-[14px] leading-relaxed text-gray-500">{item.detail}</p>
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClassName} bg-[#0C1024]`}>
        <div className={containerClassName}>
          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 md:p-12">
            <h2 className="c9-section-heading mb-4 max-w-[900px] !text-white font-proxima tracking-tight font-bold leading-tight">
              Unify your team&apos;s communication. Australian support included.
            </h2>
            <p className="mb-8 max-w-[820px] text-[17px] leading-relaxed text-white/75">
              Move to a communication platform that scales from startup growth to enterprise multi-site operations, backed by local specialists.
            </p>

            {/* ══ PROTOCOLS (CEO PERSONA ALIGNMENT) ════════════ */}
            <div className="mt-16 pt-12 border-t border-white/10 grid lg:grid-cols-2 gap-12 lg:gap-20 mb-12">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-[#5D00D6]/10 px-4 py-2 rounded-full mb-6">
                  <span className="text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest">The Brownfield Protocol</span>
                </div>
                <h2 className="text-[32px] md:text-[38px] font-bold leading-[1.1] mb-8 font-proxima tracking-tight text-white">
                  The C9 Managed <br />
                  <span className="text-[#5D00D6]">Voice Takeover.</span>
                </h2>
                <p className="text-[17px] text-white/60 mb-10 leading-relaxed font-medium">
                  Transitioning legacy PBX systems shouldn&apos;t be a risk. We utilize a structured takeover protocol to audit, secure, and port your numbers into one unified cloud platform.
                </p>
                <div className="space-y-6">
                  {[
                    { t: 'Comms Audit & Recovery', d: 'Full map of existing call flows and number registration.' },
                    { t: 'Cloud Unification', d: 'Bridging disparate voice systems into a single Teams or C9 Voice pane.' },
                    { t: 'SLA-Backed Support', d: 'Transitioning support to C9&apos;s 24/7 Australian operations.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#5D00D6]/20 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-[16px] mb-1">{item.t}</h4>
                        <p className="text-white/40 text-[14px] leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-[#5D00D6]/10 px-4 py-2 rounded-full mb-6">
                  <span className="text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest">The Greenfield Guarantee</span>
                </div>
                <h2 className="text-[32px] md:text-[38px] font-bold leading-[1.1] mb-8 font-proxima tracking-tight text-white">
                  Operational <br />
                  <span className="text-[#5D00D6]">Day One Voice.</span>
                </h2>
                <p className="text-[17px] text-white/60 mb-10 leading-relaxed font-medium">
                  For new sites, communications are mandatory from the first hour. We guarantee fully-operational, high-fidelity voice and chat on your first day of operation.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#5D00D6]/40 transition-all shadow-2xl">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#5D00D6]/10 rounded-bl-full" />
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <ShieldAlert size={28} className="text-[#5D00D6]" />
                      <span className="font-bold text-[17px] text-white">Guaranteed Call Uptime</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Target size={28} className="text-[#5D00D6]" />
                      <span className="font-bold text-[17px] text-white">QoS Network Calibrated</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <UsersIcon size={28} className="text-[#5D00D6]" />
                      <span className="font-bold text-[17px] text-white">Full Staff Readiness</span>
                    </div>
                  </div>
                  <div className="mt-10 pt-6 border-t border-white/5">
                    <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest">Comms Protocol 3.8 • Managed Voice Ops</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#5D00D6] px-7 text-[14px] font-bold text-white transition hover:bg-[#7116FF]"
              >
                Request Proposal
              </Link>
              <Link
                href="/resources"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-[14px] font-bold text-white transition hover:border-white"
              >
                Download Guide
              </Link>
              <a
                href="tel:1800000299"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-[14px] font-bold text-white transition hover:border-white"
              >
                Call 1800 000 299
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
