'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FadeUp, 
  ScaleIn, 
  Eyebrow,
  FAQSection,
  FullStackSection
} from '../components';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { Building2, Cable, CheckCircle2, GraduationCap, Headphones, LayoutGrid, Mic, MonitorUp, Network, Settings2, Wrench, Users as UsersIcon, Target, ShieldAlert, Monitor, Video, MessagesSquare } from 'lucide-react';

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

const METRICS = [
  { label: 'Meeting Start Time', value: '< 10s', desc: 'One-touch join reliability.' },
  { label: 'Audio Coverage', value: '100%', desc: 'Beamforming mic precision.' },
  { label: 'Uptime Guarantee', value: '99.9%', desc: 'Managed room availability.' },
  { label: 'Support Origin', value: 'AU', desc: 'Onshore AV engineering.' },
];

const FAQS = [
  { q: 'Teams Rooms vs Zoom Rooms?', a: 'We support both. However, for organizations already heavily invested in the Microsoft 365 ecosystem, Teams Rooms offer superior integration with Outlook, OneDrive, and specialized hardware features like Front Row.' },
  { q: 'Can we use our existing displays?', a: 'Usually, yes. If your displays support HDMI input and have sufficient resolution (4K preferred), we can integrate them into a managed Teams or Zoom Room environment.' },
  { q: 'Do you provide the hardware?', a: 'Yes. C9 is a certified partner for Yealink, Poly, and Logitech. We provide complete hardware procurement, professional mounting, and cabling as a turn-key solution.' },
  { q: 'What is "One-Touch Join"?', a: 'It means your meeting room console shows a calendar of scheduled meetings. Users simply walk in and tap "Join" on the touch panel. No cables, no laptop required, no setup time.' },
  { q: 'How do you handle audio in large rooms?', a: 'For larger boardrooms, we use specialized "Beamforming" microphone arrays and distributed speakers to ensure every person in the room is heard clearly without echo or background noise.' }
];

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
      
      {/* 1. HERO SECTION (Standardized 2-Column) */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F9FBFF] -z-10 hidden lg:block" />
        <div className="c9-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <FadeUp>
                <Eyebrow>Operational Infrastructure Governance</Eyebrow>
                <h1 className="c9-hero-title mb-8 !leading-[1.1] font-bold">
                  Boardroom Intelligence. <br />
                  <span className="text-[#5D00D6]">Frictionless Presence.</span>
                </h1>
                <p className="c9-body text-slate-600 mb-10 text-xl max-w-2xl leading-relaxed">
                  Your meeting space should be an asset, not a support burden. C9 delivers carrier-grade Microsoft Teams Rooms and Zoom Rooms—engineered for one-touch operation, absolute audio clarity, and 100% reliability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="#consultation-section" className="inline-flex items-center justify-center gap-2 bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-lg shadow-[#5D00D6]/20 h-14 px-8 text-[15px] font-bold">
                    Book Room Design 
                  </Link>
                  <Link href="#consultation-section" className="inline-flex items-center justify-center gap-2 border-2 border-black/10 text-[#0c1024] rounded-full hover:bg-black/5 transition-all backdrop-blur-sm h-14 px-8 text-[15px] font-bold">
                    View Hardware Options
                  </Link>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">AU AV Support Active</span>
                  </div>
                  <div className="h-4 w-px bg-black/10" />
                  <div className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">Certified Integrator</div>
                </div>
              </FadeUp>
            </div>
            
            <div className="relative">
              <ScaleIn>
                <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] border border-black/5 bg-gray-50">
                  <img 
                    src="https://www.yealink.com/website-service/attachment/solution/other/20250721/202507210331444737bc0.webp" 
                    alt="High-end Boardroom Integrations"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-10 opacity-60" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60" />
                
                
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 TRUST METRICS STRIP */}
      <section className="bg-white border-y border-gray-100">
        <div className="c9-container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {METRICS.map((m, i) => (
              <FadeUp key={m.label} delay={i * 0.1} className="text-center md:text-left">
                <div className="text-[32px] md:text-[42px] font-bold leading-none tracking-tight mb-3 text-[#5D00D6]">{m.value}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">{m.label}</div>
                <p className="text-[12px] text-gray-400 font-medium mt-1">{m.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>


      <section className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <FadeUp className="mb-12 max-w-[720px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">Why most meeting rooms fail in practice</h2>
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
                    <div className="mb-4 inline-flex w-14 items-center justify-center rounded-2xl bg-[#F4F0FA] text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors duration-500 h-14 px-8 text-[15px] font-bold">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="c9-card-title mb-3 group-hover:text-[#5D00D6] transition-colors">{problem.title}</h3>
                    <p className="text-[14px] leading-relaxed text-gray-500">{problem.description}</p>
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent scale-x-0 group-hover:scale-x-100 duration-500" />
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
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">C9 deployment process</h2>
            <p className="text-[18px] text-gray-500 font-medium">
              A structured five-phase rollout from site survey through to support, tailored for greenfield, brownfield, and enterprise rollouts.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative mt-16">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-slate-200 z-0" />

            {deploymentPhases.map((phase, idx) => (
              <ScaleIn key={phase.phase} delay={idx * 0.1} className="relative z-10 flex flex-col items-center text-center px-2">
                <div className="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#5D00D6] font-bold text-2xl shadow-sm mb-6 transition-all hover:border-[#5D00D6] hover:bg-[#5D00D6] hover:text-white duration-500">
                  {`0${idx + 1}`}
                </div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#5D00D6]">{phase.phase}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {phase.title}
                </h3>
                <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
                  {phase.detail}
                </p>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <section id="room-solutions" className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <FadeUp className="mb-12 max-w-[760px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">Teams Room solutions by room size</h2>
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
                  <p className="mb-3 text-[14px] font-bold uppercase tracking-[0.12em] text-[#556087]">Recommended hardware</p>
                  <p className="mb-4 text-[14px] font-medium text-gray-700">{room.hardware}</p>
                  <p className="text-[14px] leading-relaxed text-gray-500">{room.fit}</p>
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent scale-x-0 group-hover:scale-x-100 duration-500" />
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionClassName}>
        <div className={containerClassName}>
          <FadeUp className="mb-10 max-w-[760px]">
            <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">Teams Rooms vs Zoom Rooms</h2>
            <p className="text-[18px] text-gray-500 font-medium">
              We implement both. The right decision depends on your collaboration stack, user habits, and external meeting patterns.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="overflow-hidden rounded-[24px] border border-gray-100 bg-white">
            <div className="grid grid-cols-1 bg-gray-50/50 lg:grid-cols-3">
              <div className="border-b border-gray-100 p-6 text-[14px] font-bold uppercase tracking-[0.12em] text-[#5D00D6] lg:border-b-0 lg:border-r">
                Comparison area
              </div>
              <div className="border-b border-gray-100 p-6 text-[20px] font-bold lg:border-b-0 lg:border-r">Microsoft Teams Rooms</div>
              <div className="p-6 text-[20px] font-bold">Zoom Rooms</div>
            </div>

            {platformComparison.map((item) => (
              <div key={item.label} className="grid grid-cols-1 border-t border-gray-100 lg:grid-cols-3 hover:bg-gray-50/50 transition-colors">
                <div className="border-b border-gray-100 p-6 text-[14px] font-bold uppercase tracking-[0.12em] text-[#5D00D6] lg:border-b-0 lg:border-r">
                  {item.label}
                </div>
                <div className="border-b border-gray-100 p-6 text-[14px] leading-relaxed text-gray-600 lg:border-b-0 lg:border-r">
                  {item.teamsRooms}
                </div>
                <div className="p-6 text-[14px] leading-relaxed text-gray-600">{item.zoomRooms}</div>
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
                <p className="text-[14px] leading-relaxed text-[#2E3855]">
                  Standardized Teams Rooms across all locations with consistent hardware profiles, central management, and one deployment framework.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E9E2F7] bg-[#FBFAFE] p-4">
                <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#5D00D6]">Outcome</p>
                <p className="text-[14px] leading-relaxed text-[#2E3855]">
                  Consistent meeting experience, single support number for all sites, and bulk pricing efficiencies.
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-[#DCCDF8] bg-[#0C1024] p-6 md:p-8 text-white shadow-sm">
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-[#C7B1F0]">Case study</p>
              <h3 className="c9-section-heading mb-3 !text-white !text-[30px]">Launch Housing</h3>
              <p className="mb-4 text-[16px] text-white/80">7 Melbourne offices modernized with standardized room technology.</p>
              <div className="mb-4 rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-[14px] font-bold uppercase tracking-[0.12em] text-[#C7B1F0]">Result</p>
                <p className="mt-1 text-[14px] text-white/85">Meeting start time improved from 10 minutes to 30 seconds.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-[14px] font-bold uppercase tracking-[0.12em] text-[#C7B1F0]">Business impact</p>
                <p className="mt-1 text-[14px] text-white/85">Remote meeting attendance increased by 40% across distributed teams.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="c9-container">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <Eyebrow>Operational Readiness</Eyebrow>
            <h2 className="c9-section-heading">Collaboration FAQ.</h2>
          </div>
          <div className="w-full">
            <FAQSection items={FAQS} />
          </div>
        </div>
      </section>

      {/* 10. CROSS-PAGE NAVIGATION */}
      <FullStackSection 
        title="Collaboration Is One Piece. See the Full Stack."
        description="Unified meeting rooms require reliable voice and infrastructure. Explore the connected services that complete your collaboration ecosystem."
        services={[
          { title: 'Microsoft Teams Calling', href: '/telco/microsoft-teams-calling' },
          { title: 'Contact Centre', href: '/telco/contact-centre' },
          { title: 'Communication Tools', href: '/modern-workplace/communication-tools' },
          { title: 'Endpoint Management', href: '/modern-workplace/endpoint-management' },
        ]}
      />

      {/* 11. FINAL CONSULTATION FORM */}
      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false}
          eyebrow="Collaboration Design"
          title="Eliminate Meeting Friction & AV complexity"
          description="Book a 30-minute review with an Australian AV engineering lead. We'll audit your current room layouts and design a professional Teams or Zoom Room architecture that works every time."
          formTitle="Request Room Design"
        />
      </section>


    </div>
  );
}
