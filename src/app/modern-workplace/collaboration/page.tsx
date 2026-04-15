'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeUp, ScaleIn, Eyebrow } from '../components';
import { Building2, Cable, CheckCircle2, GraduationCap, Headphones, LayoutGrid, Mic, MonitorUp, Network, Settings2, Wrench } from 'lucide-react';

type Problem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

type Phase = {
  phase: string;
  title: string;
  detail: string;
  icon: React.ComponentType<{ className?: string }>;
};

type RoomSolution = {
  name: string;
  size: string;
  price: string;
  hardware: string;
  fit: string;
};

type ComparisonItem = {
  label: string;
  teamsRooms: string;
  zoomRooms: string;
};

const problems: Problem[] = [
  {
    title: 'Too complex to use',
    description: 'HDMI swaps, input confusion, and unmute issues waste the first 10 minutes of every important meeting.',
    icon: Cable,
  },
  {
    title: 'Inconsistent across locations',
    description: 'Every site runs different hardware and workflows, so teams lose confidence when moving room to room.',
    icon: LayoutGrid,
  },
  {
    title: 'No professional installation',
    description: 'DIY setups often fail due to poor camera placement, bad acoustics, and unmanaged cable infrastructure.',
    icon: Wrench,
  },
];

const deploymentPhases: Phase[] = [
  {
    phase: 'Phase 1',
    title: 'Room Assessment',
    detail: 'Assess room dimensions, acoustic profile, occupancy, and meeting patterns to define fit-for-purpose design.',
    icon: Building2,
  },
  {
    phase: 'Phase 2',
    title: 'Solution Design',
    detail: 'Select hardware, define camera and mic placement, and map room controls for simple one-touch operation.',
    icon: Settings2,
  },
  {
    phase: 'Phase 3',
    title: 'Professional Installation',
    detail: 'Mount displays and devices, complete structured cabling, and apply production-ready configuration standards.',
    icon: Wrench,
  },
  {
    phase: 'Phase 4',
    title: 'Testing and Training',
    detail: 'Run call-quality and failover tests, then train staff and champions on daily room operation.',
    icon: GraduationCap,
  },
  {
    phase: 'Phase 5',
    title: 'Ongoing Support',
    detail: 'Provide monitoring, firmware lifecycle updates, and Australian support for continuous room reliability.',
    icon: Headphones,
  },
];

const roomSolutions: RoomSolution[] = [
  {
    name: 'Focus Room',
    size: '1-2 people',
    price: '$800-1,200',
    hardware: 'Compact Teams/Zoom endpoint',
    fit: 'Ideal for private calls, manager 1:1s, and quick virtual check-ins.',
  },
  {
    name: 'Huddle Space',
    size: '3-6 people',
    price: '$4k-6k',
    hardware: 'Yealink A20',
    fit: 'Best for small team collaboration with high-quality camera, mic, and speaker in one unit.',
  },
  {
    name: 'Conference Room',
    size: '6-12 people',
    price: '$8k-12k',
    hardware: 'Yealink A30',
    fit: 'Designed for core boardrooms with dual display support and improved room coverage.',
  },
  {
    name: 'Large Training Room',
    size: '12-20 people',
    price: '$15k-25k',
    hardware: 'Yealink A40',
    fit: 'Built for larger spaces requiring superior camera framing, audio pickup, and presentation flexibility.',
  },
];

const platformComparison: ComparisonItem[] = [
  {
    label: 'Best for',
    teamsRooms: 'Microsoft 365-first organisations that already use Teams for daily collaboration.',
    zoomRooms: 'Multi-platform environments where Zoom remains central to client or partner meetings.',
  },
  {
    label: 'Licensing',
    teamsRooms: '$40/room/month',
    zoomRooms: '$49/room/month',
  },
  {
    label: 'Hardware and install',
    teamsRooms: 'Yealink hardware with C9 professional installation and standards-based room design.',
    zoomRooms: 'Yealink hardware with C9 professional installation and standards-based room design.',
  },
  {
    label: 'Support model',
    teamsRooms: 'Australian support with room monitoring and lifecycle maintenance.',
    zoomRooms: 'Australian support with room monitoring and lifecycle maintenance.',
  },
];

const sectionClassName = 'py-12 md:py-16';
const containerClassName = 'mx-auto w-full max-w-[1240px] px-6';
const cardClassName = 'group rounded-[24px] border border-gray-100 bg-white p-6 md:p-8 hover:border-[#5D00D6]/20 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all duration-500 overflow-hidden relative';

export default function CollaborationPage() {
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
                  <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#5D00D6] pr-1">Collaboration & AV</span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="c9-hero-title mb-6 !leading-[1.15]">
                  Modern meeting rooms <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D00D6] to-purple-600">that actually work.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="mb-10 text-[18px] md:text-[21px] leading-relaxed text-[#4C587E]">
                  Your boardroom shouldn't require an IT degree to operate. Teams Rooms and Zoom Rooms deployed seamlessly by Australian AV experts.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="mb-8 flex flex-wrap gap-4">
                  <Link
                    href="#room-solutions"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#5D00D6] px-8 text-[16px] font-bold text-white transition-all hover:bg-[#7116FF] hover:-translate-y-1 hover:shadow-xl"
                  >
                    See Teams Room Solutions
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center rounded-full border border-[#DCCDF8] bg-white px-8 text-[16px] font-bold text-[#5D00D6] transition-all hover:border-[#5D00D6] hover:bg-gray-50"
                  >
                    Book Room Design
                  </Link>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-gray-100 bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    C9 Certified Engineers
                  </span>
                  <span className="rounded-full border border-gray-100 bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Australian Support
                  </span>
                </div>
              </FadeUp>
            </div>

            {/* Right: Rich Interactive Visual */}
            <ScaleIn delay={0.4} className="relative hidden lg:flex h-[560px] w-full items-center justify-center">
              <div className="absolute top-10 right-0 w-[540px] aspect-[4/3] rounded-[32px] bg-[#f0f4fa] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-200 group">
                
                {/* Meeting Room Image */}
                <div className="absolute inset-0">
                  <img src="https://www.yealink.com/website-service/attachment/solution/other/20250721/202507210331444737bc0.webp" alt="High-end Boardroom Integrations" className="w-full h-full object-cover opacity-90 transition-transform duration-[3000ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/80 via-[#0c1024]/20 to-transparent" />
                </div>

                {/* Technical Overlay Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="bg-black/50 backdrop-blur-md rounded border border-white/20 px-2 py-1 flex items-center gap-1.5">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                     <span className="text-white text-[8px] font-bold uppercase tracking-widest">Yealink Certified</span>
                  </div>
                </div>

                {/* Hotspot 1: Front of Room Camera/Soundbar (MeetingBar A30) */}
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }} className="absolute top-[39%] left-[50%] -translate-x-1/2 flex flex-col items-center group/spot cursor-pointer z-20">
                  <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-lg relative mb-1.5 hover:scale-110 transition-transform">
                    <div className="absolute inset-0 rounded-full border border-white animate-ping opacity-30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                  <div className="bg-white/95 backdrop-blur shadow-xl rounded-lg px-2.5 py-1.5 border border-white opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap translate-y-2 group-hover/spot:translate-y-0 duration-300">
                    <div className="text-[10px] uppercase font-bold text-[#5D00D6]">MeetingBar A30</div>
                    <div className="text-[11px] font-bold text-[#0c1024]">Dual-Camera AI Tracking</div>
                  </div>
                </motion.div>

                {/* Hotspot 2: Table Console (CTP18 Touch Panel) */}
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-[24%] left-[46%] flex flex-col items-center group/spot cursor-pointer z-20">
                  <div className="bg-white/95 backdrop-blur shadow-xl rounded-lg px-2.5 py-1.5 border border-white opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap -translate-y-2 group-hover/spot:translate-y-0 duration-300 mb-1.5">
                    <div className="text-[10px] uppercase font-bold text-[#5D00D6]">CTP18 Touch Panel</div>
                    <div className="text-[11px] font-bold text-[#0c1024]">One-Touch Meeting Join</div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-lg relative hover:scale-110 transition-transform">
                    <div className="absolute inset-0 rounded-full border border-white animate-ping opacity-30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                </motion.div>

                {/* Mock UI Overlay on Bottom left indicating active meeting */}
                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end z-10 pointer-events-none">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-4 w-[220px]">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-white text-[12px] font-bold">Teams Room Sync</div>
                      <MonitorUp size={14} className="text-green-400" />
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between items-center text-[10px]">
                         <span className="text-white/60">Display 1</span>
                         <span className="text-white font-bold">Active</span>
                       </div>
                       <div className="flex justify-between items-center text-[10px]">
                         <span className="text-white/60">Wireless Audio</span>
                         <span className="text-white font-bold">Bridged</span>
                       </div>
                       <div className="flex justify-between items-center text-[10px]">
                         <span className="text-white/60">Network</span>
                         <span className="text-white font-bold text-green-400">Stable</span>
                       </div>
                    </div>
                  </div>
                </div>

              </div>
            </ScaleIn>

          </div>
        </div>
      </section>

      <section className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <FadeUp className="mb-12 max-w-[720px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-black leading-tight">Why most meeting rooms fail in practice</h2>
            <p className="text-[18px] text-gray-500 font-medium">
              We solve the common issues that stop teams from adopting room technology consistently.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {problems.map((problem, idx) => {
              const Icon = problem.icon;
              return (
                <ScaleIn key={problem.title} delay={idx * 0.1}>
                  <article className={cardClassName}>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4F0FA] text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors duration-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="c9-card-title mb-3 group-hover:text-[#5D00D6] transition-colors">{problem.title}</h3>
                    <p className="text-[15px] leading-relaxed text-gray-500">{problem.description}</p>
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
          <FadeUp className="mb-12 max-w-[760px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-black leading-tight">C9 deployment process</h2>
            <p className="text-[18px] text-gray-500 font-medium">
              A structured five-phase rollout from site survey through to support, tailored for greenfield, brownfield, and enterprise rollouts.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
            {deploymentPhases.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <ScaleIn key={phase.phase} delay={idx * 0.1}>
                  <article className={cardClassName}>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F0FA] text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors duration-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#5D00D6]">{phase.phase}</p>
                    <h3 className="c9-card-title mb-2 group-hover:text-[#5D00D6] transition-colors">{phase.title}</h3>
                    <p className="text-[14px] leading-relaxed text-gray-500">{phase.detail}</p>
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </article>
                </ScaleIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="room-solutions" className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <FadeUp className="mb-12 max-w-[760px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-black leading-tight">Teams Room solutions by room size</h2>
            <p className="text-[18px] text-gray-500 font-medium">
              Standard packages give you predictable outcomes, while still allowing room-specific customization where needed.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {roomSolutions.map((room, idx) => (
              <FadeUp key={room.name} delay={idx * 0.1}>
                <article className={cardClassName}>
                  <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#5D00D6]">{room.size}</p>
                  <h3 className="c9-card-title mb-2 group-hover:text-[#5D00D6] transition-colors">{room.name}</h3>
                  <p className="mb-4 text-[28px] font-bold text-[#5D00D6]">{room.price}</p>
                  <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[#556087]">Recommended hardware</p>
                  <p className="mb-4 text-[15px] font-medium text-gray-700">{room.hardware}</p>
                  <p className="text-[14px] leading-relaxed text-gray-500">{room.fit}</p>
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionClassName}>
        <div className={containerClassName}>
          <FadeUp className="mb-10 max-w-[760px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-black leading-tight">Teams Rooms vs Zoom Rooms</h2>
            <p className="text-[18px] text-gray-500 font-medium">
              We implement both. The right decision depends on your collaboration stack, user habits, and external meeting patterns.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="overflow-hidden rounded-[24px] border border-gray-100 bg-white">
            <div className="grid grid-cols-1 bg-gray-50/50 lg:grid-cols-3">
              <div className="border-b border-gray-100 p-6 text-[13px] font-bold uppercase tracking-[0.12em] text-[#5D00D6] lg:border-b-0 lg:border-r">
                Comparison area
              </div>
              <div className="border-b border-gray-100 p-6 text-[20px] font-bold lg:border-b-0 lg:border-r">Microsoft Teams Rooms</div>
              <div className="p-6 text-[20px] font-bold">Zoom Rooms</div>
            </div>

            {platformComparison.map((item) => (
              <div key={item.label} className="grid grid-cols-1 border-t border-gray-100 lg:grid-cols-3 hover:bg-gray-50/50 transition-colors">
                <div className="border-b border-gray-100 p-6 text-[13px] font-bold uppercase tracking-[0.12em] text-[#5D00D6] lg:border-b-0 lg:border-r">
                  {item.label}
                </div>
                <div className="border-b border-gray-100 p-6 text-[15px] leading-relaxed text-gray-600 lg:border-b-0 lg:border-r">
                  {item.teamsRooms}
                </div>
                <div className="p-6 text-[15px] leading-relaxed text-gray-600">{item.zoomRooms}</div>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      <section className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <article className={cardClassName}>
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-[#5D00D6]">Enterprise use case</p>
              <h2 className="c9-section-heading mb-3 !text-[30px]">{`Multi-site standardization`}</h2>
              <p className="mb-5 text-[16px] leading-relaxed text-[#4C587E]">
                Challenge: 12 offices with inconsistent AV stacks, mixed room controls, and fragmented support pathways.
              </p>
              <div className="mb-4 rounded-2xl border border-[#E9E2F7] bg-[#FBFAFE] p-4">
                <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#5D00D6]">Solution</p>
                <p className="text-[15px] leading-relaxed text-[#2E3855]">
                  Standardized Teams Rooms across all locations with consistent hardware profiles, central management, and one deployment framework.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E9E2F7] bg-[#FBFAFE] p-4">
                <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#5D00D6]">Outcome</p>
                <p className="text-[15px] leading-relaxed text-[#2E3855]">
                  Consistent meeting experience, single support number for all sites, and bulk pricing efficiencies.
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-[#DCCDF8] bg-[#0C1024] p-6 md:p-8 text-white shadow-sm">
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-[#C7B1F0]">Case study</p>
              <h3 className="c9-section-heading mb-3 !text-white !text-[30px]">Launch Housing</h3>
              <p className="mb-4 text-[16px] text-white/80">7 Melbourne offices modernized with standardized room technology.</p>
              <div className="mb-4 rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#C7B1F0]">Result</p>
                <p className="mt-1 text-[15px] text-white/85">Meeting start time improved from 10 minutes to 30 seconds.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#C7B1F0]">Business impact</p>
                <p className="mt-1 text-[15px] text-white/85">Remote meeting attendance increased by 40% across distributed teams.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={`${sectionClassName} bg-[#0C1024]`}>
        <div className={containerClassName}>
          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 md:p-12">
            <h2 className="c9-section-heading mb-4 !text-white font-proxima tracking-tight font-black leading-tight">Ready to modernize your meeting rooms?</h2>
            <p className="mb-8 max-w-[860px] text-[17px] leading-relaxed text-white/75">
              Engage C9 for room strategy, Yealink hardware rollout, and professional Australian installation that delivers reliable meeting outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#5D00D6] px-7 text-[15px] font-bold text-white transition hover:bg-[#7116FF]"
              >
                Book Room Design
              </Link>
              <Link
                href="/resources"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-[15px] font-bold text-white transition hover:border-white"
              >
                Download Guide
              </Link>
              <a
                href="tel:1800000299"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-[15px] font-bold text-white transition hover:border-white"
              >
                Call 1800 000 299
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0C1024] pb-16">
        <div className={containerClassName}>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-white/80">
              <CheckCircle2 className="h-4 w-4 text-[#BFA2EE]" />
              C9 certified engineers
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-white/80">
              <CheckCircle2 className="h-4 w-4 text-[#BFA2EE]" />
              Australian support
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-white/80">
              <CheckCircle2 className="h-4 w-4 text-[#BFA2EE]" />
              Yealink-certified deployments
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
