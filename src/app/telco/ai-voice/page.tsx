'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Users, 
  Clock, 
  MessageSquare, 
  Zap, 
  PhoneCall, 
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Settings,
  Database,
  BarChart3,
  Network,
  Share2,
  Calendar,
  Building2,
  Briefcase,
  MonitorCheck,
  Search,
  Headphones,
  Smartphone,
  Globe
} from 'lucide-react';

import { Section } from '@/components/design-system/Section';
import { Button } from '@/components/ui/button';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { ContinueJourney } from '@/components/sections/ContinueJourney';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPER
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
  const y = direction === 'up' ? 28 : 0;
  const x = direction === 'left' ? -28 : direction === 'right' ? 28 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AiVoiceHeroVisual = () => (
  <div className="relative w-full h-full min-h-[450px] flex items-center justify-center bg-transparent overflow-hidden">
    {/* Background Glow */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-100/30 blur-[100px]" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-gray-200/50" />
        <div className="absolute w-[700px] h-[700px] rounded-full border border-gray-100/30" />
    </div>
    
    {/* Pulsing Core */}
    <motion.div 
      className="relative z-20 w-40 h-40 rounded-full flex items-center justify-center"
      animate={{ 
        scale: [1, 1.05, 1],
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <div className="absolute inset-0 rounded-full bg-[#5D00D6]/5 animate-ping opacity-20" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#5D00D6] to-[#0c1024] shadow-2xl" />
      
      {/* Central Icon */}
      <div className="relative z-30 text-white flex flex-col items-center">
        <Bot size={40} className="mb-1" />
        <div className="text-[10px] font-black uppercase tracking-widest opacity-60">AI CORE</div>
      </div>

      {/* Rotating Nodes */}
      <motion.div 
        className="absolute inset-0 z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {[
          { icon: PhoneCall, degree: 0, label: 'Voice' },
          { icon: MessageSquare, degree: 90, label: 'Logic' },
          { icon: Users, degree: 180, label: 'Team' },
          { icon: Database, degree: 270, label: 'CRM' }
        ].map((node, i) => (
          <div 
            key={i} 
            className="absolute top-1/2 left-1/2"
            style={{ transform: `rotate(${node.degree}deg) translateY(-140px)` }}
          >
            <motion.div 
              className="w-12 h-12 -ml-6 -mt-6 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-[#5D00D6]"
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.2, color: '#0c1024' }}
            >
              <node.icon size={20} />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </motion.div>

    {/* Voice Waves */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-end gap-1.5 h-12">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((bar, i) => (
        <motion.div
          key={i}
          className="w-1 bg-[#5D00D6]/20 rounded-full"
          animate={{ 
            height: [10, 40, 10],
            backgroundColor: ['rgba(93, 0, 214, 0.1)', 'rgba(93, 0, 214, 0.4)', 'rgba(93, 0, 214, 0.1)']
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            delay: i * 0.1,
            ease: "easeInOut" 
          }}
        />
      ))}
    </div>

    {/* Floating Data Tags */}
    <motion.div 
      className="absolute top-20 right-10 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full shadow-sm flex items-center gap-2"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">Call Handled</span>
    </motion.div>

    <motion.div 
      className="absolute bottom-32 left-10 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full shadow-sm flex items-center gap-2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    >
      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
      <span className="text-[10px] font-black text-blue-800 uppercase tracking-widest">CRM Synced</span>
    </motion.div>
  </div>
);

export default function AiVoicePage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION */}
      <Section bg="white" className="pt-12 pb-10 md:pt-16 md:pb-12 overflow-hidden border-b border-slate-100 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -mr-32 -mt-32 opacity-60 pointer-events-none" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        
        <div className="container mx-auto max-w-[1240px] relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-7">
                 <Bot size={13} className="text-[#5D00D6]" />
                 <span className="c9-eyebrow !mb-0 !text-[#5D00D6]">Managed Voice Automation</span>
              </div>

              <h1 className="c9-hero-title mb-6 !leading-[1.1] text-[#0c1024]">
                 AI Voice That Handles Business Calls Like an <span className="text-[#5D00D6]">Extension of Your Team.</span>
              </h1>

              <p className="c9-body mb-8 max-w-[620px] text-lg text-slate-700">
                 Reduce missed calls, improve customer response times, automate repetitive call handling, and support customer communication operations with AI-powered voice workflows designed for real businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                 <Link href="#consultation-section" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-8 h-14 text-[14px] font-bold rounded-full shadow-xl shadow-purple-900/20 transition-all hover:scale-[1.02]">
                      Review My AI Voice Use Cases
                    </Button>
                 </Link>
                 <Link href="#how-it-works" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full border-2 border-[#5D00D6] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white px-8 h-14 text-[14px] font-bold rounded-full transition-all">
                      See How AI Voice Works
                    </Button>
                 </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
                 {['Business Continuity', 'Operational Scalability', 'Managed Automation', '24/7 Availability'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                       <CheckCircle2 size={14} className="text-[#5D00D6]" />
                       {item}
                    </div>
                 ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-[500px]">
              <AiVoiceHeroVisual />
            </div>
          </FadeIn>
        </div>
      </Section>

      <WpClientTicker />

      {/* 2. BUSINESS COMMUNICATION CHALLENGES SECTION */}
      <Section bg="white" className="py-16 md:py-24 border-b border-slate-100">
        <div className="container mx-auto max-w-[1240px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Operational Barriers</span>
              <h2 className="c9-section-heading mb-6 text-[#0c1024]">Why Businesses Are Exploring AI Voice</h2>
              <p className="c9-body text-slate-600">
                Legacy call handling often leads to missed opportunities and operational strain. AI Voice addresses the specific bottlenecks that slow down business growth.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Missed After-Hours Calls", desc: "Customers calling outside of business hours often land in generic voicemail or get no response.", icon: Clock },
              { title: "Reception Overload", desc: "High call volumes during peak periods overwhelm front-desk staff, leading to poor customer experiences.", icon: Headphones },
              { title: "Long Wait Times", desc: "Forcing customers to wait on hold reduces satisfaction and increases the likelihood of them hanging up.", icon: Activity },
              { title: "Repetitive Customer Questions", desc: "Staff spending hours answering basic FAQs that could be handled instantly by automation.", icon: MessageSquare },
              { title: "Overflow Call Failures", desc: "When all lines are busy, calls fail or drop, resulting in lost leads and customer frustration.", icon: Share2 },
              { title: "Inconsistent Call Handling", desc: "Varying quality and accuracy in how calls are answered across different shifts or locations.", icon: CheckCircle2 },
              { title: "Staffing Pressure", desc: "The high cost and difficulty of hiring and training staff for 24/7 or overflow call coverage.", icon: Users },
              { title: "Multi-Site Challenges", desc: "Fragmented call handling across multiple locations creates confusion and inefficiency.", icon: Building2 }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="group bg-slate-50 p-8 rounded-[32px] border border-slate-100 h-full hover:bg-white hover:border-[#5D00D6]/20 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-300">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="c9-card-title mb-3 text-[#0c1024]">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 3. WHAT AI VOICE CAN HANDLE SECTION */}
      <Section bg="gray" className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto max-w-[1240px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Automated Capabilities</span>
              <h2 className="c9-section-heading mb-6 text-[#0c1024]">What AI Voice Can Handle</h2>
              <p className="c9-body text-slate-600">
                Beyond simple greetings, C9 managed AI Voice workflows are programmed to execute specific business actions with precision.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "Inbound Answering", icon: PhoneCall },
              { title: "Customer Routing", icon: Network },
              { title: "Appointment Handling", icon: Calendar },
              { title: "Lead Capture", icon: Users },
              { title: "After-Hours Enquiries", icon: Clock },
              { title: "FAQ Responses", icon: MessageSquare },
              { title: "Overflow Support", icon: Zap },
              { title: "Callback Requests", icon: Smartphone },
              { title: "Multi-Location Routing", icon: Building2 },
              { title: "Basic Support Triage", icon: Settings }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={i} delay={i * 0.03}>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col items-center text-center hover:border-[#5D00D6]/40 transition-all shadow-sm h-full group">
                     <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#5D00D6] mb-4 group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                     </div>
                     <h4 className="text-[14px] font-bold text-[#0c1024] leading-tight">{item.title}</h4>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 4. HUMAN + AI SECTION */}
      <Section bg="white" className="py-16 md:py-24 overflow-hidden border-b border-slate-100">
        <div className="container mx-auto max-w-[1240px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left" className="relative">
               <div className="relative aspect-square md:aspect-video lg:aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border border-slate-100 z-10">
                  <Image 
                    src="/human-ai-collaboration.png"
                    alt="Business support team working alongside AI-assisted customer communication workflows"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/40 to-transparent" />
               </div>
               
               {/* Decorative Element */}
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#5D00D6]/5 rounded-full blur-3xl -z-0" />
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl -z-0" />
            </FadeIn>

            <FadeIn direction="right">
              <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Managed Governance</span>
              <h2 className="c9-section-heading mb-8 text-[#0c1024]">AI Voice Should Support Your Team — Not Replace It</h2>
              <p className="c9-body text-slate-600 mb-10">
                Automation is only as good as the oversight behind it. C9 designs AI Voice workflows with clear boundaries and escalation paths, ensuring your customers always have a path to a real person.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                 {[
                   { t: 'Human Escalation', d: 'Automated triggers to transfer callers to a live agent when complex needs arise.', icon: Users },
                   { t: 'Live Transfers', d: 'Seamless handover from AI to team members without the caller needing to redial.', icon: Zap },
                   { t: 'Fallback Routing', d: 'Guaranteed secondary paths to secondary teams or on-call staff if AI cannot resolve.', icon: Network },
                   { t: 'Operational Oversight', d: 'Full visibility into every AI interaction with recording and sentiment analysis.', icon: MonitorCheck },
                   { t: 'Approval-Based Workflows', d: 'AI only executes specific high-impact actions with your team\'s defined rules.', icon: CheckCircle2 },
                   { t: 'Managed Governance', d: 'Ongoing monitoring and refinement of AI behavior by C9 engineers.', icon: ShieldCheck }
                 ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex gap-4">
                         <div className="shrink-0 w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                            <Icon size={16} />
                         </div>
                         <div>
                            <h4 className="text-[15px] font-bold text-[#0c1024] mb-1">{item.t}</h4>
                            <p className="text-[13px] text-slate-500 leading-relaxed">{item.d}</p>
                         </div>
                      </div>
                    );
                 })}
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* 5. WHERE AI VOICE FITS BEST SECTION */}
      <Section bg="gray" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto max-w-[1240px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Strategic Application</span>
              <h2 className="c9-section-heading mb-6 text-[#0c1024]">Where AI Voice Fits Best</h2>
              <p className="c9-body text-slate-600">
                Identify the high-impact areas where managed voice automation delivers the most significant operational return.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Healthcare & Appointments", desc: "Handle high-volume booking enquiries and appointment confirmations without front-desk strain.", icon: Calendar },
              { title: "Real Estate", desc: "Automate initial rental enquiries, inspection bookings, and lead qualification for busy agencies.", icon: Building2 },
              { title: "Retail & Franchise", desc: "Consistency across multiple store locations for stock checks, opening hours, and routing.", icon: Globe },
              { title: "Service Businesses", desc: "Capture leads and book service calls after-hours when your team is off the clock.", icon: Briefcase },
              { title: "Support Teams", desc: "Triage basic support requests and route complex issues to the right technical staff.", icon: Settings },
              { title: "Multi-Site Operations", desc: "Unified call handling logic that scale across dozens of locations effortlessly.", icon: Network },
              { title: "After-Hours Handling", desc: "Never miss a 6PM lead or a 6AM urgent enquiry again with 24/7 managed answering.", icon: Clock },
              { title: "Booking-Based Businesses", desc: "Integration with your calendar systems to allow callers to book services instantly.", icon: MonitorCheck }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="bg-white p-8 rounded-[32px] border border-slate-200 h-full shadow-sm hover:shadow-md hover:border-[#5D00D6]/20 transition-all group">
                     <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-300">
                        <Icon size={22} />
                     </div>
                     <h3 className="c9-card-title mb-3 text-[#0c1024]">{item.title}</h3>
                     <p className="text-slate-500 text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 6. HOW C9 IMPLEMENTS AI VOICE SECTION */}
      <Section bg="white" className="py-16 md:py-24 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 -translate-y-1/2 hidden lg:block z-0" />
        <div className="container mx-auto max-w-[1240px] relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Managed Implementation</span>
              <h2 className="c9-section-heading mb-6 text-[#0c1024]">Precision Deployment. No Guesswork.</h2>
              <p className="c9-body text-slate-600">
                We don't just "turn on" AI. We engineer it into your existing workflows through a structured, low-risk process.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { n: '01', t: 'Discovery', d: 'Identifying call bottlenecks and defining clear automation objectives.', icon: Search },
               { n: '02', t: 'Call-Flow Mapping', d: 'Visualising the journey from first ring to final resolution.', icon: Network },
               { n: '03', t: 'Workflow Design', d: 'Designing the technical logic and human-escalation pathways.', icon: Share2 },
               { n: '04', t: 'AI Configuration', d: 'Training the voice core on your specific business knowledge.', icon: Bot },
               { n: '05', t: 'Human Escalation', d: 'Engineering the "Safety Net" for complex interactions.', icon: Users },
               { n: '06', t: 'Deployment', d: 'Staged rollout with real-time monitoring and support.', icon: Zap },
               { n: '07', t: 'Optimisation', d: 'Continuous refinement based on real-world caller data.', icon: Activity },
               { n: '08', t: 'Reporting', d: 'Transparent visibility into performance and SLA metrics.', icon: BarChart3 }
             ].map((step, i) => {
               const Icon = step.icon;
               return (
                 <FadeIn key={i} delay={i * 0.05}>
                    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#5D00D6]/20 transition-all group h-full flex flex-col">
                       <div className="flex justify-between items-start mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-300">
                             <Icon size={22} />
                          </div>
                          <div className="text-[24px] font-black text-slate-100 group-hover:text-[#5D00D6]/10 transition-colors leading-none">{step.n}</div>
                       </div>
                       <h4 className="text-[18px] font-bold text-[#0c1024] mb-3">{step.t}</h4>
                       <p className="text-[13px] text-slate-500 leading-relaxed">{step.d}</p>
                       
                       {/* Connector for large screens */}
                       {i < 7 && (
                          <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                             <ArrowRight size={16} className="text-slate-200" />
                          </div>
                       )}
                    </div>
                 </FadeIn>
               );
             })}
          </div>
        </div>
      </Section>

      {/* 7. EXISTING SYSTEMS INTEGRATION SECTION */}
      <section className="py-20 bg-[#0c1024] relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5D00D6] opacity-10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow !text-[#5D00D6] mb-4 block">Unified Connectivity</span>
               <h2 className="c9-section-heading !text-white mb-8">Works With Your Current Stack.</h2>
               <p className="c9-body !text-slate-300 mb-10">
                  AI Voice isn't a standalone island. C9 integrates automation directly into your existing communication infrastructure, ensuring data flows where it's needed most.
               </p>
               <div className="flex flex-wrap gap-4">
                  <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl flex items-center gap-3">
                     <MonitorCheck size={18} className="text-[#5D00D6]" />
                     <span className="text-sm font-bold">Teams Calling</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl flex items-center gap-3">
                     <Database size={18} className="text-[#5D00D6]" />
                     <span className="text-sm font-bold">CRM Integration</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl flex items-center gap-3">
                     <Calendar size={18} className="text-[#5D00D6]" />
                     <span className="text-sm font-bold">Booking Systems</span>
                  </div>
               </div>
            </FadeIn>

            <FadeIn direction="right">
               <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { t: 'Phone Systems', d: 'Compatible with existing on-prem and cloud PBX environments.' },
                    { t: 'SIP Connectivity', d: 'Direct integration at the carrier level for maximum reliability.' },
                    { t: 'Contact Centre', d: 'Smart triage for high-volume support and sales environments.' },
                    { t: 'Multi-Site Environments', d: 'Centralised logic deployed across disparate locations.' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                       <h4 className="font-bold text-white mb-2">{item.t}</h4>
                       <p className="text-[12px] text-slate-400 leading-relaxed">{item.d}</p>
                    </div>
                  ))}
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. BUSINESS OUTCOMES SECTION */}
      <Section bg="white" className="py-16 md:py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="container mx-auto max-w-[1240px] relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Operational ROI</span>
              <h2 className="c9-section-heading mb-6 text-[#0c1024]">Measurable Business Outcomes</h2>
              <p className="c9-body text-slate-600">
                Automation should deliver clear, measurable results. We focus on the metrics that impact your bottom line and customer satisfaction.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fewer Missed Calls", desc: "Capture every opportunity, 24/7, even when your team is busy or offline.", icon: PhoneCall, stat: "100% Captured" },
              { title: "Faster Response Times", desc: "Instant answers for basic enquiries, reducing customer frustration.", icon: Zap, stat: "< 2s Response" },
              { title: "Better Coverage", desc: "Professional call handling outside of standard business hours.", icon: Clock, stat: "24/7 Active" },
              { title: "Reduced Reception Load", desc: "Free up front-desk staff to focus on high-value in-person interactions.", icon: Users, stat: "40% Less Load" },
              { title: "Better Lead Capture", desc: "Structured data collection from every inbound enquiry, automatically synced.", icon: Database, stat: "Auto-Synced" },
              { title: "Consistent Experience", desc: "Every caller receives the same high-standard greeting and routing logic.", icon: CheckCircle2, stat: "SLA Guaranteed" },
              { title: "Improved Routing", desc: "Smarter triage ensures callers reach the right person faster.", icon: Network, stat: "Smart Triage" },
              { title: "Greater Scalability", desc: "Handle 10 or 10,000 calls with the same operational consistency.", icon: BarChart3, stat: "Infinite Scale" }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all h-full group relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-[10px] font-black text-[#5D00D6] bg-purple-50 px-3 py-1 rounded-full uppercase tracking-widest">{item.stat}</div>
                     </div>
                     <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-300">
                        <Icon size={22} />
                     </div>
                     <h4 className="text-[18px] font-bold text-[#0c1024] mb-3">{item.title}</h4>
                     <p className="text-[13px] text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 9. TRUST & GOVERNANCE SECTION */}
      <Section bg="gray" className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto max-w-[1240px]">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
             <FadeIn direction="left">
               <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Managed Security & Trust</span>
               <h2 className="c9-section-heading mb-8 text-[#0c1024]">Professional AI Deployment. No Shadow IT.</h2>
               <p className="c9-body text-slate-600 mb-10">
                  C9 treats AI Voice as critical infrastructure. We provide the same level of governance, reporting, and support that we apply to our managed networks and server environments.
               </p>
               <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { t: 'Managed Deployment', d: 'Expert engineering of the AI core to match your brand voice and rules.' },
                    { t: 'Operational Oversight', d: 'Ongoing monitoring of call quality, resolution rates, and human transfers.' },
                    { t: 'Reporting Visibility', d: 'Transparent dashboards showing exactly how automation is performing.' },
                    { t: 'Escalation Governance', d: 'Strict rules for when and how calls are handed off to your team.' },
                    { t: 'Fallback Handling', d: 'Automated secondary routing if any part of the AI flow fails.' },
                    { t: 'Australian Support', d: 'Direct access to local specialists for updates and refinements.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                       <CheckCircle2 size={18} className="text-[#5D00D6] shrink-0 mt-0.5" />
                       <div>
                          <h4 className="text-[14px] font-bold text-[#0c1024] mb-1">{item.t}</h4>
                          <p className="text-[12px] text-slate-500 leading-relaxed">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
             </FadeIn>

             <FadeIn direction="right">
                <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4">
                      <ShieldCheck size={24} className="text-emerald-500" />
                   </div>
                   <h3 className="text-xl font-bold text-[#0c1024] mb-6">Built For Business Continuity</h3>
                   <div className="space-y-6">
                      <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-4">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                         <span className="text-[13px] font-bold text-emerald-800 uppercase tracking-wider">Operational Status: 99.99% Uptime</span>
                      </div>
                      <p className="text-[13px] text-slate-600 leading-relaxed italic">
                         "AI Voice shouldn't be a black box. Our managed approach ensures that automation remains a visible, controllable, and accountable part of your business communications stack."
                      </p>
                      <div className="pt-6 border-t border-slate-100">
                         <Button className="w-full bg-[#0c1024] hover:bg-slate-800 text-white rounded-full">
                            Request Governance Overview
                         </Button>
                      </div>
                   </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </Section>

      {/* 10. FINAL CTA SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-slate-100" />
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] text-center relative z-10">
          <FadeIn>
            <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Ready to Modernise?</span>
            <h2 className="c9-section-heading mb-6 !text-4xl lg:!text-5xl text-[#0c1024]">
               Modernise Customer Communication Without Losing Operational Control.
            </h2>
            <p className="c9-body mb-12 max-w-3xl mx-auto text-lg leading-relaxed text-slate-600">
               C9 helps Australian businesses implement managed AI Voice workflows that scale communication capacity while protecting customer experience and business continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#consultation-section">
                <Button size="lg" className="bg-[#5D00D6] text-white hover:bg-[#4d00b3] px-10 h-16 text-[15px] font-bold rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-none">
                  Book an AI Voice Strategy Review
                </Button>
              </Link>
              <Link href="#consultation-section">
                <Button variant="outline" size="lg" className="border-2 border-slate-200 text-[#0c1024] hover:bg-slate-50 px-10 h-16 text-[15px] font-bold rounded-full transition-all">
                  Review AI Voice Opportunities
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60">
               {["AI-Driven Efficiency", "Managed Implementation", "Human-In-The-Loop Escalation", "Operational Reporting"].map((badge, i) => (
                 <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900">
                   <CheckCircle2 size={12} className="text-[#5D00D6]" /> {badge}
                 </div>
               ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* RELATED SOLUTIONS */}
      <ContinueJourney 
        title="AI is the Future. Reliability is the Present."
        description="Managed voice automation requires a rock-solid foundation. Explore the core services that power AI Voice workflows."
        links={[
          { label: "Microsoft Teams Calling", path: "/telco/teams-calling" },
          { label: "SIP Trunking Solutions", path: "/telco/sip-trunking" },
          { label: "Cloud Contact Centre", path: "/telco/contact-centre" },
          { label: "Managed IT Infrastructure", path: "/managed-it/infrastructure" }
        ]}
      />

      <WpFAQAndFeedback 
        faqItems={[
          { q: "Is AI Voice replacing our receptionists?", a: "No. AI Voice is designed to handle repetitive queries, overflow calls, and after-hours enquiries. This allows your team to focus on high-value, complex customer interactions while ensuring no call goes unanswered." },
          { q: "What happens if the AI doesn't understand the caller?", a: "We engineer 'Safety Net' escalation paths. If the AI cannot resolve the request, it instantly routes the caller to a live agent, a secondary team, or a managed callback queue." },
          { q: "Can we use our existing business numbers?", a: "Yes. C9 manages the integration at the SIP or PBX level, allowing the AI to answer calls on your existing numbers without any porting required in most cases." },
          { q: "How do we see what the AI is doing?", a: "C9 provides full reporting visibility. You'll have access to dashboards showing call volumes, resolution rates, transfer data, and even sentiment analysis for every interaction." }
        ]}
      />

      {/* 9. CONSULTATION / BOTTOM CTA */}
      <div id="consultation-section" className="bg-slate-50 py-10 border-t border-slate-100">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="AI VOICE STRATEGY"
          title="Review AI Voice Opportunities for Your Business."
          description="Talk to our specialists about how voice automation can improve your operational efficiency and customer response times."
          formTitle="Request AI Voice Proposal"
        />
      </div>

    </main>
  );
}
