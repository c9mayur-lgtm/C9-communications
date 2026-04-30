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
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  BarChart3, 
  Maximize, 
  FileCheck, 
  Target, 
  RefreshCw, 
  Building2, 
  Search, 
  Users as UsersIcon, 
  Store, 
  LineChart, 
  HardDrive,
  Shield,
  Activity,
  Video,
  Camera
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Problem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type CardItem = {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

type Segment = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type UseCase = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const METRICS = [
  { label: 'Detection Latency', value: '< 200ms', desc: 'Real-time AI threat analysis.' },
  { label: 'Data Sovereignty', value: '100%', desc: 'Sovereign Australian cloud storage.' },
  { label: 'Counting Accuracy', value: '98%+', desc: 'High-precision occupancy metrics.' },
  { label: 'Uptime SLA', value: '99.9%', desc: 'Carrier-grade monitoring reliability.' },
];

const FAQS = [
  { q: 'Can we use our existing cameras?', a: 'Yes. Our "Brownfield Protocol" allows us to integrate most IP-based cameras into our centralized AI dashboard, extending their life with smart analytics.' },
  { q: 'How does the people counting work?', a: 'We use AI computer vision to identify and track human silhouettes. This provides accurate foot-traffic data without storing personal identifiable information (PII).' },
  { q: 'Is the footage stored in the cloud or on-site?', a: 'We offer hybrid storage. Critical footage is cached on-site for instant access and backed up to secure Australian-based cloud storage for long-term retention and audit.' },
  { q: 'Can we set up alerts for specific zones?', a: 'Absolutely. You can define "Digital Fences" in the dashboard. If a person enters a restricted zone after hours, your security team receives an instant alert with a live video clip.' },
  { q: 'Does the system require a constant high-speed internet connection?', a: 'The system is designed for resilience. If internet is lost, cameras continue to record to local storage and sync to the cloud once the connection is restored.' }
];

const problems: Problem[] = [
  {
    title: 'Fragmented visibility',
    description: 'Lack of real-time insights and monitoring coherence across multiple physical locations.',
    icon: Search,
  },
  {
    title: 'Missing actionable data',
    description: 'Surveillance is treated only as a reactive security measure, ignoring foot traffic patterns and occupancy insights.',
    icon: BarChart3,
  },
  {
    title: 'Compliance & audit risks',
    description: 'Manual monitoring creates security gaps and makes generating audit-ready logs a difficult, time-consuming process.',
    icon: ShieldAlert,
  },
];

const solutions: CardItem[] = [
  {
    title: 'Smart CCTV Monitoring',
    description: 'High-definition, cloud-managed cameras providing complete real-time visibility and proactive alerts.',
    bullets: ['Next-gen optical sensors', 'Remote cloud management', 'AI threat detection'],
    icon: Maximize,
  },
  {
    title: 'People Counting Analytics',
    description: 'Transform passive footage into actionable occupancy insights and foot-traffic intelligence.',
    bullets: ['Accurate population tracking', 'Heatmaps & zone analysis', 'Peak hour insights'],
    icon: UsersIcon,
  },
  {
    title: 'Centralised Dashboard',
    description: 'One pane of glass for multi-site control, enabling seamless scaling and rapid investigation.',
    bullets: ['Multi-site integration', 'Role-based access', 'Mobile monitoring app'],
    icon: HardDrive,
  },
  {
    title: 'Compliance Reporting',
    description: 'Automated, unalterable logs ensure that your physical security posture is always audit-ready.',
    bullets: ['Automated event logs', 'Privacy regulation aligned', 'Extended cloud retention'],
    icon: FileCheck,
  },
];

const segments: Segment[] = [
  {
    title: 'Greenfield',
    description: 'Design and deploy complete, future-ready surveillance infrastructure from day one.',
    icon: Target,
  },
  {
    title: 'Brownfield',
    description: 'Integrate existing cameras into a unified cloud platform and replace fragmented legacy systems.',
    icon: RefreshCw,
  },
  {
    title: 'Enterprise',
    description: 'Standardize multi-site monitoring with advanced analytics and uncompromising corporate governance.',
    icon: Building2,
  },
];

const useCases: UseCase[] = [
  {
    title: 'Retail footfall tracking',
    description: 'Optimize store layouts and staffing schedules by understanding exact customer volumes and dwell times.',
    icon: Store,
  },
  {
    title: 'Office occupancy optimisation',
    description: 'Right-size real estate portfolios by analysing exactly how desk density and meeting rooms are utilized.',
    icon: LineChart,
  },
  {
    title: 'Multi-branch security',
    description: 'Maintain strict security standards and incident response protocols across geographically distributed sites.',
    icon: ShieldAlert,
  },
];

const sectionClassName = 'py-12 md:py-16';
const containerClassName = 'mx-auto w-full max-w-[1240px] px-6';
const cardClassName = 'group rounded-[24px] border border-gray-100 bg-white p-6 md:p-8 hover:border-[#5D00D6]/20 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all duration-500 overflow-hidden relative';

export default function CCTVPeopleCountPage() {
  return (
    <div className="bg-[#F8FAFF] min-h-screen pt-4 text-[#0C1024] overflow-x-hidden" style={{ fontFamily: '"Proxima Nova","Inter",system-ui,sans-serif' }}>
      
      {/* 1. HERO SECTION */}
      <section className="pt-8 pb-12 md:pt-10 md:pb-16 relative bg-gradient-to-b from-white via-[#F8FAFF]/50 to-white overflow-hidden">
        {/* Subtle dynamic background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5D00D6]/[0.02] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/[0.02] rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className={`${containerClassName} relative z-10`}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
            
            {/* Left: Text Content */}
            <div className="max-w-[700px] pt-2 md:pt-6">
              <FadeUp>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DCCDF8] bg-white px-3 py-1.5 shadow-sm">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5D00D6]">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  </div>
                  <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#5D00D6] pr-1">Surveillance Intelligence</span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="c9-hero-title mb-6 !leading-[1.15] font-bold text-[#0C1024]">
                  Surveillance Intelligence. <span className="text-[#5D00D6]">Operational Control.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="mb-10 text-[18px] md:text-[21px] leading-relaxed text-[#4C587E]">
                  AI-powered CCTV and people analytics delivered as a fully managed solution for security, insights, and zero-compromise compliance.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="mb-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#5D00D6] px-8 text-[16px] font-bold text-white transition-all hover:bg-[#7116FF] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(93,0,214,0.3)]"
                  >
                    Get Measurable Outcomes
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center rounded-full border border-[#DCCDF8] bg-white px-8 text-[16px] font-bold text-[#5D00D6] transition-all hover:border-[#5D00D6] hover:bg-gray-50"
                  >
                    Talk to a Specialist
                  </Link>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-gray-100 bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Vendor Agnostic
                  </span>
                  <span className="rounded-full border border-gray-100 bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    C9 Fully Managed
                  </span>
                </div>
              </FadeUp>
            </div>

            {/* Right: Realistic Visual */}
            <ScaleIn delay={0.4} className="relative hidden lg:block h-[560px] w-full">
              <div className="absolute top-8 right-0 w-[500px] aspect-[4/3] rounded-[40px] bg-white shadow-[0_20px_50px_rgba(93,0,214,0.1)] overflow-hidden border-8 border-white group">
                <img 
                  src="/cctv_ai_dashboard_hero_1777562131092.png" 
                  alt="Surveillance Intelligence Dashboard" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </ScaleIn>

          </div>
        </div>
      </section>

      {/* 2. VENDOR STRIP */}
      <section className="border-t border-b border-gray-100 bg-white py-8">
        <div className={containerClassName}>
          <FadeUp>
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">
              Powered by leading surveillance and analytics platforms. Delivered and managed by C9.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {/* Cisco Meraki SVG */}
              <svg viewBox="0 0 100 24" className="h-6 w-auto fill-gray-900 group-hover:fill-[#1e6ef2] transition-colors" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2 6.5C8.8 6.5 7.7 7.6 7.7 9.1s1.1 2.6 2.5 2.6 2.5-1.1 2.5-2.6-1.1-2.6-2.5-2.6zm0 3.7c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zm7.4-3.7c-1.4 0-2.5 1.1-2.5 2.6s1.1 2.6 2.5 2.6 2.5-1.1 2.5-2.6-1.1-2.6-2.5-2.6zm0 3.7c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1z" />
                <text x="36" y="17" className="text-[14px] font-extrabold" style={{ fontFamily: 'var(--font-proxima), sans-serif', letterSpacing: '-0.02em' }}>MERAKI</text>
              </svg>
              {/* Verkada SVG */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#D60000] rounded-sm transform rotate-45 flex items-center justify-center overflow-hidden">
                   <div className="w-2.5 h-2.5 bg-white rounded-full translate-x-1.5 translate-y-1.5" />
                </div>
                <span className="text-[18px] font-bold tracking-tighter text-gray-900">VERKADA</span>
              </div>
              {/* Rhombus SVG */}
              <div className="flex items-center gap-1.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                </svg>
                <span className="text-[17px] font-bold tracking-tight text-gray-900">RHOMBUS</span>
              </div>
              {/* Axis SVG */}
              <div className="flex items-center gap-2">
                <div className="flex flex-col leading-none">
                   <span className="text-[11px] font-bold text-gray-400">AXIS</span>
                   <span className="text-[14px] font-bold tracking-wider text-gray-900">COMMUNICATIONS</span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 3. PROBLEMS WE SOLVE */}
      <section className={`${sectionClassName} bg-[#F8FAFF]`}>
        <div className={containerClassName}>
          <FadeUp className="mb-10 max-w-[720px]">
            <h2 className="c9-section-heading mb-3 font-proxima tracking-tight font-bold leading-tight">The challenge with traditional surveillance</h2>
            <p className="text-[17px] text-gray-500 font-medium">Standard cameras restrict growth by holding data hostage to local servers and disjointed networks.</p>
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
                    <p className="text-[14px] leading-relaxed text-gray-500">{problem.description}</p>
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#5D00D6] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </article>
                </ScaleIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SOLUTION OVERVIEW - BENTO GRID */}
      <section className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <FadeUp className="mb-8 max-w-[760px]">
            <h2 className="c9-section-heading mb-3 font-proxima tracking-tight font-bold leading-tight">A unified intelligence ecosystem</h2>
            <p className="text-[17px] text-gray-500 font-medium">Not just cameras. Visibility, compliance, and spatial intelligence tied seamlessly into one cloud-based architecture.</p>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CARD 0: Smart CCTV (Wide) */}
            <ScaleIn delay={0.1} className="md:col-span-2 lg:col-span-2">
              <article className={`${cardClassName} flex flex-col h-full bg-[#f8fbff] border-blue-100 overflow-hidden`}>
                <div className="flex flex-col md:flex-row gap-8 h-full relative z-10">
                  <div className="flex-1 flex flex-col pt-2">
                    <div className="mb-5 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ecf4ff] text-blue-600 transition-colors duration-500">
                      <Maximize className="h-6 w-6" />
                    </div>
                    <h3 className="c9-card-title mb-3">{solutions[0].title}</h3>
                    <p className="mb-6 text-[14px] leading-relaxed text-gray-500">{solutions[0].description}</p>
                    <ul className="space-y-3 mt-auto">
                      {solutions[0].bullets.map((bullet) => (
                        <li key={bullet} className="text-[14px] font-medium text-gray-600 flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" /> 
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* BENTO VISUAL: Realistic Smart Camera Array */}
                  <div className="flex-1 w-full min-h-[240px] md:h-auto md:self-stretch bg-[#0c1024] rounded-2xl shadow-[0_10px_30px_rgba(93,0,214,0.15)] overflow-hidden grid grid-cols-2 grid-rows-2 gap-[2px] relative mt-4 md:mt-0">
                    
                    {/* Cam 1: Main Entrance (Live Tracking) */}
                    <div className="col-span-2 row-span-1 relative overflow-hidden bg-black group">
                      <img src="/modern_office_entrance_cctv_1777562149739.png" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000 group-hover:scale-105" alt="Office Entrance" />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm text-[9px] font-bold text-white uppercase tracking-widest border border-white/10 z-20">
                         <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> ENTRANCE 1
                      </div>
                      {/* Bounding Box Animation */}
                      <motion.div initial={{ x: 40 }} animate={{ x: 260 }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }} className="absolute bottom-[5%] left-[10%] z-20">
                        <div className="w-10 h-14 border-[1.5px] border-[#00875A] bg-[#00875A]/[0.05] rounded-sm relative">
                          <div className="absolute -top-4 -right-1 bg-[#00875A] text-white text-[7px] font-bold px-1.5 py-0.5 whitespace-nowrap">HR AUTHORISED</div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Cam 2: Lobby (Night Vision/IR Simulation) */}
                    <div className="relative overflow-hidden bg-black group">
                      <div className="absolute inset-0 bg-[#0c1b33]/60 mix-blend-color z-10 pointer-events-none" />
                      <img src="/corporate_lobby_security_1777562244237.png" className="w-full h-full object-cover opacity-90 contrast-125 filter grayscale group-hover:scale-105 transition-all duration-1000" alt="Lobby" />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm text-[9px] font-bold text-[#b8d8be] uppercase tracking-widest border border-[#b8d8be]/20 z-20">
                         <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" /> LOBBY IR
                      </div>
                    </div>

                    {/* Cam 3: Corridor (Facial Detect Simulation) */}
                    <div className="relative overflow-hidden bg-black group">
                      <img src="/office_corridor_smart_camera_1777562386872.png" className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000 group-hover:scale-105" alt="Hallway" />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm text-[9px] font-bold text-white uppercase tracking-widest border border-white/10 z-20">
                         <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> CORRIDOR
                      </div>
                      <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center translate-y-2">
                        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 2.5 }} className="w-8 h-8 border-[1.5px] border-white/60 border-dashed rounded-sm relative">
                           <div className="absolute top-[-4px] left-[110%] w-[50px] bg-white/10 backdrop-blur shadow-xl border border-white/10 text-white text-[7px] px-1.5 py-1 rounded">
                             MATCH: <br/><span className="font-mono text-green-400">92.4%</span>
                           </div>
                        </motion.div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </article>
            </ScaleIn>

            {/* CARD 1: People Count (Square) */}
            <ScaleIn delay={0.2} className="md:col-span-1 lg:col-span-1">
              <article className={`${cardClassName} flex flex-col h-full bg-white`}>
                <div className="mb-5 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F4F0FA] text-[#5D00D6] transition-colors duration-500">
                  <UsersIcon className="h-6 w-6" />
                </div>
                <h3 className="c9-card-title mb-3">{solutions[1].title}</h3>
                <p className="mb-6 text-[14px] leading-relaxed text-gray-500 flex-grow">{solutions[1].description}</p>
                
                {/* BENTO VISUAL: Chart */}
                <div className="mt-auto h-[140px] border-b border-[#F4F0FA] flex items-end justify-between px-2 pb-4 pt-10 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
                  {[30, 45, 80, 100, 65, 45, 30].map((h, i) => (
                    <motion.div key={i} className={`w-[10%] rounded-t-sm ${i === 3 ? 'bg-[#5D00D6]' : 'bg-[#E9E2F7]'}`} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }} />
                  ))}
                  {/* Floating tooltip */}
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="absolute top-0 right-1/2 translate-x-1/2 bg-[#0c1024] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
                    Peak: 124 occupants
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0c1024] rotate-45" />
                  </motion.div>
                </div>
              </article>
            </ScaleIn>

            {/* CARD 2: Centralised Dashboard (Square) */}
            <ScaleIn delay={0.3} className="md:col-span-1 lg:col-span-1">
              <article className={`${cardClassName} flex flex-col h-full bg-white`}>
                <div className="mb-5 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F4F0FA] text-[#5D00D6] transition-colors duration-500">
                  <HardDrive className="h-6 w-6" />
                </div>
                <h3 className="c9-card-title mb-3">{solutions[2].title}</h3>
                <p className="mb-6 text-[14px] leading-relaxed text-gray-500 flex-grow">{solutions[2].description}</p>
                
                {/* BENTO VISUAL: Dashboard UI Wireframe */}
                <div className="mt-auto h-[160px] bg-[#f0f4fa] rounded-2xl border border-gray-200 relative overflow-hidden flex flex-col shadow-inner">
                  {/* Mock Browser/App Bar */}
                  <div className="h-5 bg-white border-b border-gray-200 flex items-center px-2 justify-between shrink-0">
                     <div className="flex gap-1.5">
                       <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                       <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                       <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                     </div>
                     <div className="w-24 h-2 bg-gray-100 rounded-full flex items-center justify-center">
                       <div className="w-6 h-0.5 bg-gray-300 rounded-full" />
                     </div>
                     <div className="w-3 h-3 rounded-full bg-[#5D00D6]/20" />
                  </div>
                  
                  <div className="flex flex-1 overflow-hidden">
                    {/* Mock Sidebar */}
                    <div className="w-10 bg-white border-r border-gray-200 p-2 flex flex-col gap-2.5 shrink-0">
                      <div className="w-full aspect-square bg-[#5D00D6] rounded-md mb-2 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white/30 rounded-sm" />
                      </div>
                      <div className="w-full h-1.5 bg-[#5D00D6]/30 rounded-full" />
                      <div className="w-full h-1.5 bg-gray-200 rounded-full" />
                      <div className="w-full h-1.5 bg-gray-200 rounded-full" />
                      <div className="w-full h-1.5 bg-gray-200 rounded-full" />
                    </div>
                    
                    {/* Mock Content Dashboard */}
                    <div className="flex-1 p-3 flex flex-col gap-2.5">
                       <div className="flex justify-between items-center px-1">
                         <div className="flex flex-col gap-1">
                           <div className="w-16 h-2 bg-gray-400 rounded-full" />
                           <div className="w-10 h-1.5 bg-gray-300 rounded-full" />
                         </div>
                         <div className="flex gap-1.5">
                           <div className="w-6 h-3 bg-white border border-gray-200 rounded shadow-sm" />
                           <div className="w-12 h-3 bg-[#5D00D6] rounded shadow-sm text-[5px] text-center text-white font-bold leading-[12px] uppercase">Export</div>
                         </div>
                       </div>
                       
                       {/* Multi-site Active Grid */}
                       <div className="grid grid-cols-2 gap-2 mt-1">
                         {[
                           { name: 'SYD HQ', count: '142', active: true, color: 'text-green-500' },
                           { name: 'MEL Branch', count: '48', active: true, color: 'text-green-500' },
                           { name: 'BNE Hub', count: '89', active: true, color: 'text-green-500' },
                           { name: 'PER Office', count: '--', active: false, color: 'text-gray-400' }
                         ].map((site, i) => (
                           <motion.div 
                             key={i} 
                             whileHover={{ y: -2 }}
                             className="bg-white border border-gray-200 rounded-md p-2 shadow-sm flex flex-col gap-1 relative overflow-hidden"
                           >
                             <div className="flex items-center justify-between">
                               <div className="text-[7px] font-bold text-[#0c1024]">{site.name}</div>
                               <div className={`w-1.5 h-1.5 rounded-full ${site.active ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`} />
                             </div>
                             <div className="flex gap-1 items-end mt-1">
                               <div className={`text-[12px] font-bold leading-none ${site.active ? 'text-[#5D00D6]' : 'text-gray-400'}`}>{site.count}</div>
                               <div className="text-[5px] text-gray-500 mb-0.5 uppercase">Users Active</div>
                             </div>
                           </motion.div>
                         ))}
                       </div>
                    </div>
                  </div>
                </div>
              </article>
            </ScaleIn>

            {/* CARD 3: Compliance Reporting (Wide) */}
            <ScaleIn delay={0.4} className="md:col-span-2 lg:col-span-2">
              <article className={`${cardClassName} flex flex-col h-full bg-[#FCFAFF] border-[#E9E2F7] overflow-hidden`}>
                <div className="flex flex-col md:flex-row-reverse gap-8 h-full relative z-10">
                  <div className="flex-1 flex flex-col pt-2">
                    <div className="mb-5 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F4F0FA] text-[#5D00D6] transition-colors duration-500">
                      <FileCheck className="h-6 w-6" />
                    </div>
                    <h3 className="c9-card-title mb-3">{solutions[3].title}</h3>
                    <p className="mb-6 text-[14px] leading-relaxed text-gray-500">{solutions[3].description}</p>
                    <ul className="space-y-3 mt-auto">
                      {solutions[3].bullets.map((bullet) => (
                        <li key={bullet} className="text-[14px] font-medium text-gray-600 flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-[#BFA2EE] mt-0.5 shrink-0" /> 
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* BENTO VISUAL: Automated Feed */}
                  <div className="flex-1 min-h-[220px] bg-white rounded-2xl shadow-[0_10px_30px_rgba(93,0,214,0.05)] border border-[#E9E2F7] p-5 relative overflow-hidden flex flex-col gap-3">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-2">
                      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Audit Event Log</div>
                      <div className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">Encrypted</div>
                    </div>
                    
                    <motion.div animate={{ y: [0, -48, -48] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 1 }} className="flex flex-col gap-3">
                      {[
                        { time: '14:22:01', evt: 'System Health Check Pass' },
                        { time: '14:21:49', evt: 'Cam 04 Motion Trigger' },
                        { time: '14:20:12', evt: 'Admin Login: J.Smith' },
                        { time: '14:15:00', evt: 'Footfall Report Generated' },
                      ].map((log, i) => (
                         <div key={i} className="flex gap-4 items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                           <span className="text-[11px] text-gray-400 font-mono w-16">{log.time}</span>
                           <span className="text-[14px] text-gray-700 font-medium">{log.evt}</span>
                           <CheckCircle2 className="w-3.5 h-3.5 text-green-500 ml-auto" />
                         </div>
                      ))}
                    </motion.div>
                    
                    {/* Fade overlay so it looks like it's scrolling cleanly */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                  </div>
                </div>
              </article>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* 5. AUDIENCE SEGMENTS */}
      <section className={`${sectionClassName} bg-[#0C1024] text-white`}>
        <div className={containerClassName}>
          <FadeUp className="mb-8 max-w-[760px]">
            <h2 className="c9-section-heading mb-3 !text-white font-proxima tracking-tight font-bold leading-tight">Delivered for any environment</h2>
            <p className="text-[17px] text-white/70 font-medium">From custom grounds-up deployments to integrating sprawling multi-site systems.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {segments.map((seg, idx) => {
              const Icon = seg.icon;
              return (
                <ScaleIn key={seg.title} delay={idx * 0.1}>
                  <article className="group rounded-[24px] border border-white/10 bg-white/5 p-6 md:p-8 hover:border-[#5D00D6] hover:bg-[#5D00D6]/10 transition-all duration-500">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white group-hover:bg-[#5D00D6] transition-colors duration-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="c9-card-title mb-3 !text-white">{seg.title}</h3>
                    <p className="text-[14px] leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">{seg.description}</p>
                  </article>
                </ScaleIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. C9 MANAGED SERVICE LAYER */}
      <section className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <h2 className="c9-section-heading mb-4 font-proxima tracking-tight font-bold leading-tight">End-to-end ownership. One partner. No vendor chaos.</h2>
              <p className="mb-8 text-[18px] leading-relaxed text-gray-500">
                You get complete coverage handled by C9. We integrate smart cameras seamlessly into your Managed IT ecosystem, serving as the single point of accountability.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Bespoke Procurement', 'Professional Installation', 
                  'Network Integration', '24/7 Health Monitoring', 
                  'Ongoing Local Support', 'Performance Optimisation'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#5D00D6] shrink-0" />
                    <span className="text-[14px] font-bold text-[#0c1024]">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
            <ScaleIn delay={0.2} className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-[32px] overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5D00D6]/5 to-transparent" />
              <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full">
                <div className="rounded-2xl border border-gray-200 bg-white shadow-xl shadow-purple-500/5 p-5 flex flex-col justify-center items-center gap-3 hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <span className="font-bold text-[14px] text-gray-500 text-center">Cameras Online</span>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white shadow-xl shadow-purple-500/5 p-5 flex flex-col justify-center items-center gap-3 hover:-translate-y-1 transition-transform animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-[32px] font-bold text-[#5D00D6]">124</div>
                  <span className="font-bold text-[14px] text-gray-500 text-center">People Count</span>
                </div>
                <div className="col-span-2 rounded-2xl border border-[#5D00D6]/20 bg-[#5D00D6] shadow-xl p-6 flex items-center justify-between hover:-translate-y-1 transition-transform text-white">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">C9 SOC Operations</div>
                    <div className="font-bold text-[16px]">Active Incident Monitoring</div>
                  </div>
                  <ShieldAlert className="w-8 h-8 opacity-80" />
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* 7. USE CASES */}
      <section className={`${sectionClassName} bg-[#F8FAFF]`}>
        <div className={containerClassName}>
          <FadeUp className="mb-8 max-w-[760px]">
            <h2 className="c9-section-heading mb-3">Where analytics meets operations</h2>
            <p className="text-[17px] text-gray-500 font-medium">Real-world applications delivering instant business outcomes beyond conventional security.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <ScaleIn key={useCase.title} delay={idx * 0.1}>
                  <article className={`${cardClassName} border-[#DCCDF8]/30 shadow-md hover:shadow-[#5D00D6]/10`}>
                    <div className="mb-4 inline-flex items-center gap-3">
                      <Icon className="h-6 w-6 text-[#5D00D6]" />
                      <h3 className="text-[18px] font-bold text-[#0c1024]">{useCase.title}</h3>
                    </div>
                    <p className="text-[14px] leading-relaxed text-gray-600">{useCase.description}</p>
                  </article>
                </ScaleIn>
              );
            })}
          </div>

          {/* ══ PROTOCOLS (CEO PERSONA ALIGNMENT) ════════════ */}
          <div className="mt-24 pt-16 border-t border-gray-100 grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-[#5D00D6]/10 px-4 py-2 rounded-full mb-6">
                <span className="text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest">The Brownfield Protocol</span>
              </div>
              <h2 className="text-[32px] md:text-[38px] font-bold leading-[1.1] mb-8 font-proxima tracking-tight text-[#0C1024]">
                The C9 Managed <br />
                <span className="text-[#5D00D6]">Surveillance Takeover.</span>
              </h2>
              <p className="text-[17px] text-gray-500 mb-10 leading-relaxed font-medium">
                Transitioning fragmented legacy CCTV systems shouldn&apos;t be a risk. We utilize a structured takeover protocol to audit, secure, and unify your physical security under one cloud platform.
              </p>
              <div className="space-y-6">
                {[
                  { t: 'Site Audit & Recovery', d: 'Full map of existing camera infrastructure and cable integrity.' },
                  { t: 'Cloud Unification', d: 'Bridging legacy hardware into a single management pane.' },
                  { t: 'SLA-Backed Monitoring', d: 'Transitioning support to C9&apos;s 24/7 Australian operations.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0C1024] text-[16px] mb-1">{item.t}</h4>
                      <p className="text-gray-500 text-[14px] leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-[#5D00D6]/10 px-4 py-2 rounded-full mb-6">
                <span className="text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest">The Greenfield Guarantee</span>
              </div>
              <h2 className="text-[32px] md:text-[38px] font-bold leading-[1.1] mb-8 font-proxima tracking-tight text-[#0C1024]">
                Operational <br />
                <span className="text-[#5D00D6]">Day One Visibility.</span>
              </h2>
              <p className="text-[17px] text-gray-500 mb-10 leading-relaxed font-medium">
                For new sites, visibility is mandatory from the first hour. We guarantee a fully-operational, AI-powered surveillance environment on your first day of operation.
              </p>
              <div className="bg-white border border-gray-100 rounded-3xl p-8 relative overflow-hidden group hover:border-[#5D00D6]/40 transition-all shadow-2xl shadow-[#5D00D6]/5">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#5D00D6]/5 rounded-bl-full" />
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <ShieldAlert size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[17px] text-[#0C1024]">Guaranteed Feed Uptime</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Target size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[17px] text-[#0C1024]">AI Analytics Calibrated</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <UsersIcon size={28} className="text-[#5D00D6]" />
                    <span className="font-bold text-[17px] text-[#0C1024]">Total Site Readiness</span>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <p className="text-[11px] font-bold text-gray-300 uppercase tracking-widest">Surveillance Protocol 4.2 • Managed Physical Ops</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY C9 */}
      <section className={`${sectionClassName} bg-white`}>
        <div className={containerClassName}>
          <FadeUp className="rounded-[32px] bg-[#5D00D6] border border-[#7116FF] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-[#5D00D6]/20">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2E006A] rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="c9-section-heading !text-white mb-6 font-proxima tracking-tight font-bold leading-tight">Why C9 for surveillance?</h2>
              <p className="text-[18px] text-white leading-relaxed mb-10">
                We are <strong>vendor-agnostic</strong>, ensuring you extract the absolute best technology for your specific layout. Because we fold surveillance into our comprehensive Managed IT ecosystem, we handle all network integration, compliance controls, and 24/7 monitoring. <strong>Single point of accountability.</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-10 text-left">
                {[
                  { title: "Network Aligned", msg: "Bandwidth and switches optimized seamlessly." },
                  { title: "One Support Desk", msg: "No finger pointing between IT and security vendors." },
                  { title: "Future Scalable", msg: "Cloud native, meaning hardware limitations vanish." }
                ].map((reason, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <span className="font-bold text-[16px] text-white flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#CDBAF1]" /> {reason.title}</span>
                    <span className="text-[14px] text-slate-200">{reason.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="c9-container">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <Eyebrow>Operational Readiness</Eyebrow>
            <h2 className="c9-section-heading mb-8 font-proxima tracking-tight font-bold leading-tight text-[#0C1024]">CCTV & People Count FAQ.</h2>
          </div>
          <div className="w-full">
            <FAQSection items={FAQS} />
          </div>
        </div>
      </section>

      {/* 10. CROSS-PAGE NAVIGATION */}
      <FullStackSection 
        title="Physical Security Is One Piece. See the Full Stack."
        description="Smart surveillance requires reliable network and identity governance. Explore the connected workplace services that complete your operational intelligence."
        services={[
          { title: 'Visitor Solution', href: '/modern-workplace/visitor-solution' },
          { title: 'Endpoint Management', href: '/modern-workplace/endpoint-management' },
          { title: 'Compliance & Data Protection', href: '/modern-workplace/compliance-data-protection' },
          { title: 'Managed Microsoft 365', href: '/modern-workplace/productivity' },
        ]}
      />

      {/* 11. FINAL CONSULTATION FORM */}
      <section id="consultation">
        <WpConsultationForm 
          showHeader={false}
          eyebrow="Surveillance Audit"
          title="Turn Footage into Operational Intelligence"
          description="Book a 30-minute review with an Australian security lead. We'll audit your current site layout and design a smart surveillance architecture that protects your people and your data."
          formTitle="Request Site Audit"
        />
      </section>

    </div>
  );
}
