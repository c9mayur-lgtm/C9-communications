'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Users, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Clock, 
  Layers, 
  TrendingUp, 
  Monitor, 
  BarChart3, 
  Globe, 
  PhoneCall, 
  MessageSquare, 
  Zap, 
  RefreshCcw, 
  ShieldAlert, 
  Headphones, 
  Settings, 
  Layout, 
  HeartHandshake, 
  UserCheck, 
  PieChart,
  ArrowRight,
  ChevronRight,
  Stethoscope,
  ShoppingBag,
  Building2,
  HelpCircle
} from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { C9Button } from '@/components/design-system/C9Button';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { ContinueJourney } from '@/components/sections/ContinueJourney';
import { Section } from '@/components/design-system/Section';

const FadeIn = ({ children, delay = 0, className, direction = 'up' }: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}) => {
  const y = direction === 'up' ? 24 : direction === 'down' ? -24 : 0;
  const x = direction === 'left' ? -24 : direction === 'right' ? 24 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

export default function ContactCentrePage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* ══ 1. HERO ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pt-12 pb-0 lg:pt-20 border-b border-slate-50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-[120px] -mr-32 -mt-32 opacity-60" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        
        <div className={`${C} relative z-10`}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center pb-16 lg:pb-24">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
                   <Headphones size={13} className="text-[#5D00D6]" />
                   <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Managed Contact Centre Operations</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                 <h1 className="c9-hero-title mb-6 !leading-[1.1] text-[#0c1024]">
                    Transform Your Customer Experience with <span className="text-[#5D00D6]">Absolute Operational Visibility.</span>
                 </h1>
              </FadeIn>

              <FadeIn delay={0.15}>
                 <p className="c9-body mb-8 max-w-[620px] text-lg text-slate-700">
                    Poor response times and blind transfers damage customer trust. C9 provides managed cloud contact centre platforms that deliver queue visibility, agent performance reporting, and intelligent routing to improve customer retention.
                 </p>
              </FadeIn>

              <FadeIn delay={0.22}>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <C9Button className="px-9 h-14 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl shadow-purple-900/20 rounded-full text-white" asChild>
                      <Link href="#consultation-section">Review My Contact Centre Performance</Link>
                    </C9Button>
                    <C9Button variant="outline" className="px-9 h-14 border-2 border-[#5D00D6] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white rounded-full bg-white transition-all" asChild>
                      <Link href="#consultation-section">Reduce Customer Wait Times</Link>
                    </C9Button>
                 </div>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-10">
                <div className="flex flex-wrap gap-x-10 gap-y-3">
                   {['Queue Performance', 'Service Visibility', 'Abandoned Call Recovery', 'Multi-Site Support'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                         <CheckCircle2 size={14} className="text-[#5D00D6]" />
                         {item}
                      </div>
                   ))}
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4} className="mt-8 p-5 bg-slate-50 border border-slate-100 rounded-2xl max-w-[500px]">
                <div className="flex gap-3 items-start">
                   <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 mt-0.5 text-[#5D00D6]">
                      <ShieldAlert size={18} />
                   </div>
                   <p className="c9-body !text-[13px] !mb-0 font-bold !text-slate-700">
                     Abandoned calls and long wait times are system problems, not just staffing issues. Visibility changes everything.
                   </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="right" className="relative">
               <div className="relative rounded-[48px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/5] border border-slate-100">
                  <Image
                     src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000"
                     alt="Operations manager reviewing live service levels, wait times, and agent performance dashboards"
                     fill
                     className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-xl">
                     <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                              <TrendingUp size={20} />
                           </div>
                           <div>
                              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none mb-1">Live CX Performance</div>
                              <div className="text-[16px] font-bold text-slate-900 leading-none">Service Levels Active</div>
                           </div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                     </div>
                     <div className="grid grid-cols-2 gap-6">
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-widest">Wait Time</div>
                           <div className="text-[18px] font-bold text-[#5D00D6] leading-none tracking-tight">&lt; 20s</div>
                        </div>
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-widest">Abandon Rate</div>
                           <div className="text-[18px] font-bold text-emerald-600 leading-none tracking-tight">0.1%</div>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <WpClientTicker />

      {/* ══ 2. WHO THIS IS BUILT FOR ═══════════════════════════════════ */}
      <Section bg="white" className="py-16 md:py-24 border-b border-slate-100">
        <div className={C}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Operational Versatility</span>
              <h2 className="c9-section-heading mb-6 text-[#0c1024]">Designed for High-Performance Support.</h2>
              <p className="c9-body text-slate-600">
                From internal service desks to multi-site retail operations, C9 provides the visibility and control needed to manage complex customer communication environments.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Customer Service Teams", 
                challenge: "High call volumes causing abandoned calls and long hold times.", 
                impact: "Damaged reputation and high customer churn.", 
                visibility: "Live queue data and agent availability.",
                icon: Headphones 
              },
              { 
                title: "Sales & Enquiry Teams", 
                challenge: "Missed opportunities due to poor routing and zero call visibility.", 
                impact: "Direct loss of revenue and missed commercial leads.", 
                visibility: "Inbound volume reporting and call attribution.",
                icon: TrendingUp 
              },
              { 
                title: "Healthcare & Booking", 
                challenge: "Patient frustration during peak morning booking periods.", 
                impact: "Reduced patient care quality and staff stress.", 
                visibility: "Automated callbacks and peak-load routing.",
                icon: Stethoscope 
              },
              { 
                title: "Retail & Franchise", 
                challenge: "Inconsistent customer experience across distributed physical locations.", 
                impact: "Fragmented brand voice and poor local store responsiveness.", 
                visibility: "Centralised multi-site performance reporting.",
                icon: ShoppingBag 
              },
              { 
                title: "Multi-Site Support", 
                challenge: "Disconnected teams unable to collaborate on complex enquiries.", 
                impact: "Inconsistent information and slow resolution times.", 
                visibility: "Unified environment for remote and office staff.",
                icon: Building2 
              },
              { 
                title: "Service Desks & Helpdesks", 
                challenge: "Managing technical SLAs without clear performance data.", 
                impact: "Breached response times and operational bottlenecks.", 
                visibility: "SLA-tracked queue management and agent analytics.",
                icon: HelpCircle 
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="group bg-slate-50 p-8 rounded-[32px] border border-slate-100 h-full hover:bg-white hover:border-[#5D00D6]/20 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-300">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="c9-card-title mb-4 text-[#0c1024]">{item.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Communication Challenge</div>
                        <p className="text-[13px] text-slate-600 leading-relaxed">{item.challenge}</p>
                      </div>
                    <div>
                      <div className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">CX Impact</div>
                      <p className="text-[13px] text-slate-600 leading-relaxed font-bold">{item.impact}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-100">
                      <div className="text-[10px] font-black text-[#5D00D6] uppercase tracking-widest mb-1">Visibility Need</div>
                      <p className="text-[13px] text-slate-700 leading-relaxed font-bold">{item.visibility}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ══ 3. THE HIDDEN COST OF POOR RESPONSE ══════════════════════ */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <div className="relative aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl border border-slate-200">
                  <Image 
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop" 
                    alt="Australian support team managing customer interactions through a cloud contact centre platform" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-white">
                    <p className="text-[13px] font-medium italic">"Real-time visibility into queue performance allows us to fix issues before they become customer complaints."</p>
                  </div>
               </div>
            </FadeIn>
            
            <FadeIn direction="right">
              <span className="c9-eyebrow mb-4 text-rose-600">Performance At Risk</span>
              <h2 className="c9-section-heading mb-8 text-[#0c1024]">The Business Cost of Communication Blind Spots.</h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { icon: PhoneCall, title: "Abandoned Revenue", text: "Every missed call in the queue is a lost commercial opportunity or a damaged relationship." },
                  { icon: Clock, title: "Wait Time Attrition", text: "Customers interpret hold times as a lack of respect. Trust erodes with every second of silence." },
                  { icon: RefreshCcw, title: "Routing Friction", text: "Bouncing callers between departments without context makes your team look incompetent." },
                  { icon: BarChart3, title: "Management Blind Spots", text: "Without live data, leaders can't see the bottleneck until the customer has already left." }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="text-rose-500 shrink-0 mt-1"><Icon size={18} /></div>
                      <div>
                        <h4 className="font-bold text-[#0c1024] text-[15px] mb-1">{item.title}</h4>
                        <p className="text-[13px] text-slate-500 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                 <Link href="#consultation-section">
                    <C9Button className="rounded-full bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-8 h-14 font-bold">
                       Improve Queue Visibility <ArrowRight size={16} className="ml-2" />
                    </C9Button>
                 </Link>
                 <Link href="#consultation-section">
                    <Button variant="ghost" className="text-[#5D00D6] hover:text-[#4d00b3] font-bold h-14">
                       Reduce Abandoned Calls <ChevronRight size={16} className="ml-1" />
                    </Button>
                 </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 4. CX TRANSFORMATION ═══════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className={C}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Customer Experience Transformation</span>
               <h2 className="c9-section-heading mb-6 text-[#0c1024]">Modernising Support Operations.</h2>
               <p className="c9-body mb-10 text-lg text-slate-700">
                  Moving from chaotic phone rooms to structured, high-visibility contact centres isn't just about software—it's about operational accountability.
               </p>
               
               <div className="space-y-6">
                  {[
                    { title: "Intelligent Call Handling", text: "Skill-based routing that connects customers to the most capable agent immediately, reducing transfer friction." },
                    { title: "Absolute Service Visibility", text: "Real-time dashboards for supervisors to see who is waiting, who is working, and where help is needed." },
                    { title: "Multi-Site Consistency", text: "Scaling support operations across multiple locations while maintaining a unified, high-quality brand experience." },
                    { title: "Workforce Performance Insights", text: "Data-driven understanding of peak times, agent performance, and service level adherence." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group">
                       <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#5D00D6] group-hover:bg-[#5D00D6]/10 transition-all shrink-0 mt-1">
                          <CheckCircle2 size={18} />
                       </div>
                       <div>
                          <h4 className="font-bold text-[#0c1024] text-[16px] mb-1">{item.title}</h4>
                          <p className="text-slate-500 text-[14px] leading-relaxed">{item.text}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="relative">
               <div className="bg-[#0c1024] rounded-[48px] p-10 lg:p-16 border border-white/5 relative overflow-hidden text-white shadow-2xl">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
                  <div className="relative z-10">
                     <h3 className="text-2xl font-bold mb-8 text-center text-[#a56eff]">The Modern CX Shift</h3>
                     <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: "Wait Times", val: "Minimized", icon: <Clock size={18}/> },
                          { label: "Abandoned", val: "Reduced", icon: <ShieldAlert size={18}/> },
                          { label: "Oversight", val: "Real-Time", icon: <Monitor size={18}/> },
                          { label: "CX Quality", val: "Measured", icon: <UserCheck size={18}/> }
                        ].map((item, i) => (
                          <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                             <div className="w-8 h-8 rounded-lg bg-[#5D00D6]/20 flex items-center justify-center text-[#a56eff] mx-auto mb-3">
                                {item.icon}
                             </div>
                             <div className="text-[18px] font-bold text-white mb-1 leading-none">{item.val}</div>
                             <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{item.label}</div>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl border border-slate-100 max-w-[300px]">
                  <div className="flex items-center gap-3 mb-4">
                    <PieChart className="text-[#5D00D6]" size={20} />
                    <span className="font-black text-slate-900 text-sm">CX Impact</span>
                  </div>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-bold">
                    Strategic contact centre systems lead to measurable improvements in customer response times and retention.
                  </p>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 5. VISIBILITY & OPERATIONAL CONTROL ══════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#0c1024] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        <div className={C}>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
            <FadeIn direction="left" className="relative">
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[48px] p-10 lg:p-12 shadow-2xl">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-[12px] font-bold text-emerald-500 uppercase tracking-widest">Live CX Dashboard</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-10">
                     <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Queue Size</div>
                        <div className="text-4xl font-black text-white leading-none">08</div>
                     </div>
                     <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Max Wait</div>
                        <div className="text-4xl font-black text-rose-400 leading-none">01:12</div>
                     </div>
                     <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Service Level</div>
                        <div className="text-4xl font-black text-emerald-400 leading-none">96%</div>
                     </div>
                     <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Resolution</div>
                        <div className="text-4xl font-black text-[#a56eff] leading-none">88%</div>
                     </div>
                  </div>

                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
                     <p className="text-white/60 text-[14px] leading-relaxed italic">
                        &ldquo;Operational reporting allows team leaders to identify abandoned calls instantly and re-allocate agents based on live demand.&rdquo;
                     </p>
                  </div>
               </div>
            </FadeIn>

            <FadeIn direction="right">
               <span className="c9-eyebrow !text-[#a56eff] mb-4 block">Operational Sovereignty</span>
               <h2 className="c9-section-heading !text-white mb-6">Visibility Changes Management.</h2>
               <p className="c9-body text-white/70 mb-10 text-lg">
                  You cannot manage what you cannot see. Our cloud contact centre environments give operations managers absolute clarity over every interaction, queue, and agent.
               </p>
               
                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
                  {[
                    { icon: Monitor, title: "Live Queue Oversight", text: "Identify spikes in real-time and intervene before customer experience is affected." },
                    { icon: PieChart, title: "Staffing Visibility", text: "Monitor agent status across all sites to ensure staffing efficiency and workload balance." },
                    { icon: BarChart3, title: "CX Performance Data", text: "Track average speed of answer and abandonment rates to measure operational success." },
                    { icon: ShieldCheck, title: "Escalation Clarity", text: "Structured pathways for complex enquiries to ensure no customer is left without resolution." }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex flex-col gap-3">
                         <div className="text-[#a56eff] mb-1"><Icon size={22} /></div>
                         <h4 className="font-bold text-white text-[16px] leading-tight">{item.title}</h4>
                         <p className="text-white/50 text-[13px] leading-relaxed">{item.text}</p>
                      </div>
                    );
                  })}
               </div>
               <div className="mt-12">
                  <Link href="#consultation-section">
                    <C9Button className="rounded-full bg-white text-[#0c1024] hover:bg-slate-100 px-10 h-16 font-black shadow-xl">
                       Improve Customer Response Times
                    </C9Button>
                  </Link>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 6. DISRUPTION-FREE ROLLOUT ═══════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Migration Assurance</span>
               <h2 className="c9-section-heading mb-6 text-[#0c1024]">Support Continuity Without Disruption.</h2>
               <p className="c9-body mb-8 text-lg text-slate-700">
                  Replacing a core customer touchpoint feels risky. We remove the fear of transition by executing a validated, phased transition plan that protects your active customer communication.
               </p>
               <div className="space-y-6">
                  {[
                    { t: 'Improve Contact Centre Performance', d: 'Strategic routing optimisation designed to match your specific support workflow.' },
                    { t: 'Review My Support Operations', d: 'Expert audit of current call flows, wait times, and system bottlenecks.' },
                    { t: 'Contact Centre Modernisation', d: 'Managed migration of legacy phone systems into high-visibility cloud environments.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1 text-emerald-600">
                          <CheckCircle2 size={12} />
                       </div>
                       <div>
                          <h4 className="font-bold text-[#0c1024] text-[16px] mb-1">{item.t}</h4>
                          <p className="text-[14px] text-slate-500 leading-relaxed">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right">
               <div className="relative aspect-video rounded-[48px] overflow-hidden shadow-2xl border border-slate-100">
                  <Image 
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1200" 
                    alt="Multi-site customer support team collaborating through a unified contact centre environment" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/40 to-transparent" />
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 7. MID-PAGE CTA BLOCK ════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className={C}>
           <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <h3 className="c9-section-heading mb-6 !text-slate-900 !text-3xl md:!text-4xl">
                  Customer Experience Breaks Down When Communication Systems Lack Visibility.
                </h3>
                <p className="c9-body mb-10 text-lg max-w-2xl mx-auto">
                  Improve queue visibility, customer response performance, reporting, and operational accountability through a managed cloud contact centre environment.
                </p>
                <C9Button className="px-10 h-16 bg-[#5D00D6] text-white hover:bg-[#4d00b3] shadow-xl rounded-full text-lg font-bold" asChild>
                  <Link href="#consultation-section">Fix My Customer Communication Workflow</Link>
                </C9Button>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* ══ 8. COMMERCIAL OUTCOMES ═══════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className={C}>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
             <FadeIn direction="left">
                <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Accountable Impact</span>
                <h2 className="c9-section-heading mb-6 text-[#0c1024]">Proven CX Transformation.</h2>
                <p className="c9-body mb-10 text-slate-600">
                   When you upgrade to a managed contact centre architecture, the impact on customer retention and operational efficiency is immediate and measurable.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-12">
                   {[
                     { label: "Abandoned Calls", val: "Reduced", icon: <ShieldAlert size={18} /> },
                     { label: "Queue Visibility", val: "Complete", icon: <Monitor size={18} /> },
                     { label: "Customer Response", val: "Improved", icon: <Clock size={18} /> },
                     { label: "Operational Reporting", val: "Data-Driven", icon: <PieChart size={18} /> }
                   ].map((stat, i) => (
                     <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-white hover:border-[#5D00D6]/20 transition-all duration-500 shadow-sm">
                        <div className="text-2xl font-black text-[#5D00D6] mb-1 leading-none tracking-tight">{stat.val}</div>
                        <div className="text-slate-500 font-bold text-[10px] uppercase tracking-widest leading-tight">{stat.label}</div>
                     </div>
                   ))}
                </div>
                
                <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-xl border border-slate-100">
                  <Image 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                    alt="Customer service agents handling queues, escalations, and customer enquiries" 
                    fill 
                    className="object-cover"
                  />
                </div>
             </FadeIn>

             <FadeIn direction="right" delay={0.1}>
               <div className="bg-white p-6 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-200/50">
                 <WpCaseStudies 
                    articles={[
                      {
                        tag: 'CX OPTIMISATION',
                        title: 'National Retail & Franchise Support',
                        desc: "Disjointed store numbers caused 40% call abandonment. C9 deployed a unified contact centre with multi-site queueing. Result: Faster customer response and complete visibility for head office.",
                        img: 'https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Service Restored'
                      },
                      {
                        tag: 'SUPPORT TRANSFORMATION',
                        title: 'Enterprise Technical Helpdesk',
                        desc: "Management lacked visibility into ticket spikes. C9 implemented real-time supervisor dashboards and skill-based routing. Result: 95% SLA adherence and improved team efficiency.",
                        img: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb8?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Accountability Secured'
                      }
                    ]}
                  />
               </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 10. FINAL CTA ════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className={C}>
           <div className="bg-[#0c1024] rounded-[48px] p-10 lg:p-20 relative overflow-hidden shadow-2xl shadow-slate-900/40 text-center">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5D00D6] opacity-[0.1] rounded-full blur-[100px] -mr-64 -mt-64" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5D00D6] opacity-[0.05] rounded-full blur-[80px] -ml-32 -mb-32" />
              
              <div className="relative z-10">
                <span className="c9-eyebrow !text-[#a56eff] mb-4 block">Modern Workplace Transition</span>
                <h2 className="c9-section-heading !text-white mb-6">Improve Customer Experience With Managed Contact Centre Operations.</h2>
                <p className="c9-body !text-white/60 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                  C9 helps Australian businesses improve customer communication, service visibility, queue performance, and support operations through managed cloud contact centre environments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="#consultation-section">
                    <C9Button className="px-12 h-16 bg-[#5D00D6] text-white hover:bg-[#4d00b3] shadow-xl rounded-full text-lg font-bold">
                       Book a Contact Centre Performance Review
                    </C9Button>
                  </Link>
                  <Link href="#consultation-section">
                    <Button variant="outline" className="border-2 border-white/20 text-white hover:bg-white hover:text-[#0c1024] px-12 h-16 text-lg font-bold rounded-full transition-all">
                       Speak With a Contact Centre Specialist
                    </Button>
                  </Link>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* ══ 11. RELATED SOLUTIONS ════════════════════════════════════ */}
      <ContinueJourney 
        title="Contact Centre is One Piece. See the Full Stack."
        description="Unified communication requires reliable infrastructure. Explore the connected services that complete the picture."
        links={[
          { label: "Inbound Services", path: "/telco/inbound-services" },
          { label: "C9 Phone System", path: "/telco/phone-system" },
          { label: "Microsoft Teams Calling", path: "/telco/teams-calling" },
          { label: "Managed IT Infrastructure", path: "/managed-it/infrastructure" }
        ]}
      />

      <section id="consultation-section" className="bg-slate-50 py-10 border-t border-slate-100">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="OPERATIONAL AUDIT"
          title="Ready to remove friction from your customer support?"
          description="Book a technical strategy session with our senior engineers to review your call flows and performance visibility."
          formTitle="Request a Contact Centre Review"
        />
      </section>

      <WpFAQAndFeedback 
        faqItems={[
          { q: "How long does a contact centre migration take?", a: "Timelines depend on complexity, but our risk-managed approach ensures that while the backend build takes weeks, the actual cutover is executed with zero operational downtime for your business." },
          { q: "Do you integrate with our existing CRM?", a: "Yes. We support deep API integration with major CRMs (Salesforce, HubSpot, Dynamics) so your agents receive caller data on their screen before answering, improving response quality instantly." },
          { q: "What visibility do supervisors get?", a: "Supervisors access live dashboards showing queue status, active calls, wait times, and agent adherence. They can also use call barging or whisper functions to coach staff during live interactions." },
          { q: "Can we support remote or home-based agents?", a: "Absolutely. Our cloud platforms are location-agnostic. Agents can handle calls from head office, branch locations, or home offices with full performance visibility for supervisors." }
        ]}
      />
    </main>
  );
}
