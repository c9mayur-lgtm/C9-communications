'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, ShieldCheck, Activity, ArrowRight, CheckCircle2, 
  Clock, Layers, Building2, TrendingUp,
  Monitor, CheckCircle, BarChart3, Globe, PhoneCall,
  MessageSquare, Zap, RefreshCcw, ShieldAlert, Headphones,
  Settings, Layout, Signal, HeartHandshake, UserCheck, PieChart
} from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { C9Button } from '@/components/design-system/C9Button';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { ContinueJourney } from '@/components/sections/ContinueJourney';

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
                   <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Customer Experience Operations</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                 <h1 className="c9-hero-title mb-6 !leading-[1.1]">
                    Support Performance Is <span className="text-[#5D00D6]">Revenue Performance.</span>
                 </h1>
              </FadeIn>

              <FadeIn delay={0.15}>
                 <p className="c9-body mb-8 max-w-[620px] text-lg">
                    Poor response times and blind transfers damage customer trust instantly. C9 delivers unified contact centre systems with absolute operational control, giving you the visibility and accountability to drive customer retention.
                 </p>
              </FadeIn>

              <FadeIn delay={0.22}>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <C9Button className="px-9 h-14 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl shadow-purple-900/20 rounded-full" asChild>
                      <Link href="#consultation">Review Your Contact Centre Performance</Link>
                    </C9Button>
                    <C9Button variant="outline" className="px-9 h-14 border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] rounded-full bg-white" asChild>
                      <Link href="#consultation">Talk to a Contact Centre Specialist</Link>
                    </C9Button>
                 </div>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-10">
                <div className="flex flex-wrap gap-x-10 gap-y-3">
                   {['Faster Customer Response', 'Zero-Disruption Migration', 'Live Performance Reporting', 'Accountable Support'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                         {item}
                      </div>
                   ))}
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4} className="mt-8 p-4 bg-slate-50 border border-slate-100 rounded-2xl max-w-[500px]">
                <div className="flex gap-3 items-start">
                   <div className="w-6 h-6 rounded-full bg-[#5D00D6]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldAlert size={12} className="text-[#5D00D6]" />
                   </div>
                   <p className="text-[14px] text-slate-600 font-medium italic leading-relaxed">
                     "Poor support is rarely a staffing problem. It is usually a systems problem. Visibility changes everything."
                   </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="right" className="relative">
               <div className="relative rounded-[48px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/5] group">
                  <img
                     src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000"
                     alt="Operations manager reviewing customer support performance"
                     className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-xl">
                     <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                              <TrendingUp size={20} />
                           </div>
                           <div>
                              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none mb-1">Live Performance</div>
                              <div className="text-[16px] font-bold text-slate-900 leading-none">Service Level Active</div>
                           </div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                     </div>
                     <div className="grid grid-cols-2 gap-6">
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-widest">Wait Time</div>
                           <div className="text-[18px] font-bold text-[#5D00D6] leading-none tracking-tight">&lt; 30s</div>
                        </div>
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-widest">Abandon Rate</div>
                           <div className="text-[18px] font-bold text-emerald-600 leading-none tracking-tight">0.2%</div>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <WpClientTicker />

      {/* ══ 2. THE HIDDEN COST OF POOR RESPONSE ══════════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 text-rose-600">Business Urgency</span>
              <h2 className="c9-section-heading">The Hidden Cost of Poor Customer Response.</h2>
              <p className="c9-body text-lg mt-6">
                Customers rarely complain about the service they never received. They simply leave. If your support system forces customers to wait, repeat themselves, or get lost in menus, it is already costing you more than you realise.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <PhoneCall />, title: "Missed Calls = Lost Revenue", text: "Every abandoned call in the queue is a missed commercial opportunity or a damaged customer relationship." },
              { icon: <Clock />, title: "Wait Times Damage Trust", text: "Customers interpret long hold times as a lack of respect for their business. Trust erodes by the minute." },
              { icon: <RefreshCcw />, title: "Routing Frustration", text: "When callers are bounced between departments without context, your team looks incompetent." },
              { icon: <BarChart3 />, title: "Visibility Blind Spots", text: "Without real-time dashboards, operations managers cannot see the bottleneck until after the customer is angry." },
              { icon: <Layers />, title: "Fragmented Systems", text: "Teams juggling multiple disjointed platforms waste time on administration instead of customer resolution." },
              { icon: <Users />, title: "Team Burnout", text: "Support staff working in chaotic, unmanaged environments suffer from fatigue and high turnover." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                 <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 mb-6">
                    {item.icon}
                 </div>
                 <h4 className="font-bold text-slate-900 text-[17px] mb-3">{item.title}</h4>
                 <p className="text-slate-500 text-[14px] leading-relaxed">{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. TRUST BREAK 1 ═══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left" className="order-2 lg:order-1 relative">
               <div className="relative rounded-[48px] overflow-hidden shadow-2xl aspect-[4/3]">
                  <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop" alt="Customer support operations" className="w-full h-full object-cover object-top" />
               </div>
               <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#5D00D6]/10 rounded-full blur-3xl" />
            </FadeIn>
            
            <FadeIn direction="right" delay={0.2} className="order-1 lg:order-2">
               <span className="c9-eyebrow mb-4">Strategic Reality</span>
               <h2 className="c9-section-heading mb-6">Customers feel system failures before leadership sees them.</h2>
               <p className="c9-body text-xl text-slate-600 italic">
                  &ldquo;Your frontline team can only perform as well as the system they operate within. That is why robust, accountable support infrastructure matters to the bottom line.&rdquo;
               </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 4. WHY BUSINESSES UPGRADE (BROWNFIELD) ═══════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Brownfield Transformation</span>
               <h2 className="c9-section-heading mb-6">Why Operations Leaders Move to Better Systems.</h2>
               <p className="c9-body mb-10 text-lg">
                  Outdated queueing and disjointed data create a ceiling on business growth. We help businesses transition from chaotic phone rooms to structured, high-visibility contact centres.
               </p>
               
               <div className="space-y-6">
                  {[
                    { title: "Replacing Outdated Call Handling", text: "Moving from simple hunt groups to intelligent, skill-based routing that connects customers faster." },
                    { title: "Gaining Absolute Visibility", text: "Implementing real-time dashboards to see who is waiting, who is working, and where the bottlenecks are." },
                    { title: "Managing Growth Without Compromise", text: "Scaling support headcount across multiple locations without fragmenting the customer experience." },
                    { title: "Improving Workforce Productivity", text: "Integrating CRM and helpdesk tools so agents have context before they even say hello." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                       <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#5D00D6] shrink-0 mt-1 shadow-sm">
                          <ArrowRight size={14} />
                       </div>
                       <div>
                          <h4 className="font-bold text-slate-900 text-[16px] mb-1">{item.title}</h4>
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
                     <h3 className="text-2xl font-bold mb-8 text-center">The Shift to Control</h3>
                     <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: "Routing", val: "Intelligent", icon: <UserCheck size={18}/> },
                          { label: "Wait Times", val: "Minimized", icon: <Clock size={18}/> },
                          { label: "Oversight", val: "Real-Time", icon: <PieChart size={18}/> },
                          { label: "Scalability", val: "Frictionless", icon: <TrendingUp size={18}/> }
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
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 5. WHY BUSINESSES CHOOSE C9 ═════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className={C}>
          <FadeIn className="max-w-3xl mb-16">
            <span className="c9-eyebrow mb-4">The C9 Advantage</span>
            <h2 className="c9-section-heading mb-6">If you cannot see where support fails, you cannot fix it.</h2>
            <p className="c9-body text-lg">
               We don't just sell software licenses. We architect customer experience environments and take absolute accountability for their performance.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <MessageSquare />, title: "Smarter Call Routing", desc: "Connect customers to the most capable agent immediately, reducing transfer friction." },
              { icon: <PieChart />, title: "Visibility Across Locations", desc: "Monitor team performance uniformly, whether staff are in head office, branch locations, or working remote." },
              { icon: <Activity />, title: "Workforce Performance Insights", desc: "Data-driven understanding of peak times, agent wrap-up duration, and service level adherence." },
              { icon: <HeartHandshake />, title: "Customer Response Continuity", desc: "Failover and overflow rules that ensure calls are answered even during unexpected spikes." },
              { icon: <Settings />, title: "Simplified Vendor Ownership", desc: "We manage the carrier network, the SIP paths, and the contact centre platform as one ecosystem." },
              { icon: <ShieldCheck />, title: "One Accountable Partner", desc: "When issues arise, you call our senior engineering team directly. No vendor finger-pointing." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group p-6 rounded-[28px] border border-slate-100 hover:border-[#5D00D6]/20 hover:shadow-lg transition-all bg-slate-50 hover:bg-white">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#5D00D6] shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[17px] mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. VISIBILITY & OPERATIONAL CONTROL ══════════════════════ */}
      <section className="py-12 lg:py-16 bg-[#0c1024] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        <div className={C}>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow !text-[#a56eff] mb-4">Management Confidence</span>
               <h2 className="c9-section-heading !text-white mb-6">
                  Visibility Changes Everything.
               </h2>
               <p className="c9-body text-white/70 mb-10 text-lg">
                  You cannot manage what you cannot measure. Our contact centre solutions give executives and team leaders absolute operational clarity. This is about control, not just software.
               </p>
               
               <div className="space-y-8">
                  {[
                    { icon: <Monitor />, title: "Real-Time Queue Management", text: "See live wait times, active calls, and agent availability to instantly re-allocate resources during spikes." },
                    { icon: <BarChart3 />, title: "Service Level Performance", text: "Track your KPIs against actual data. Know exactly what percentage of calls are answered within your SLA target." },
                    { icon: <Users />, title: "Workforce Monitoring", text: "Coach and train teams effectively with call recording, whisper functionality, and live agent status tracking." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                       <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/20 flex items-center justify-center text-[#a56eff] shrink-0 mt-1">
                          {item.icon}
                       </div>
                       <div>
                          <h4 className="font-bold text-white text-[18px] mb-2">{item.title}</h4>
                          <p className="text-white/60 text-[15px] leading-relaxed">{item.text}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="relative">
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[48px] p-10 lg:p-12">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-[12px] font-bold text-emerald-500 uppercase tracking-widest">Live Supervisor View</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                     <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Calls Waiting</div>
                        <div className="text-3xl font-bold text-white">12</div>
                     </div>
                     <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Longest Wait</div>
                        <div className="text-3xl font-bold text-rose-400">02:14</div>
                     </div>
                     <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Agents Active</div>
                        <div className="text-3xl font-bold text-emerald-400">28</div>
                     </div>
                     <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Service Level</div>
                        <div className="text-3xl font-bold text-[#a56eff]">94%</div>
                     </div>
                  </div>

                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
                     <p className="text-white/60 text-[13px] leading-relaxed italic">
                        &ldquo;With live visibility, our team leaders can intervene before wait times become a customer complaint.&rdquo;
                     </p>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 7. IMPLEMENTATION WITHOUT DISRUPTION ═════════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left" className="order-2 lg:order-1">
               <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { label: "Rollout Planning", val: "Strategic", icon: <Layout /> },
                    { label: "Migration", val: "Zero-Downtime", icon: <RefreshCcw /> },
                    { label: "Onboarding", val: "Comprehensive", icon: <Users /> },
                    { label: "Post-Launch", val: "Managed", icon: <ShieldCheck /> }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-[#5D00D6]/20 transition-all hover:shadow-xl group">
                        <div className="w-8 h-8 rounded-lg bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-4">
                           {stat.icon}
                        </div>
                        <div className="text-xl font-bold text-slate-900 mb-1 leading-none tracking-tight">{stat.val}</div>
                        <div className="text-slate-500 font-bold text-[11px] uppercase tracking-widest leading-tight">{stat.label}</div>
                    </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="order-1 lg:order-2">
               <span className="c9-eyebrow mb-4">Risk-Managed Execution</span>
               <h2 className="c9-section-heading mb-6">Implementation Without Service Disruption.</h2>
               <p className="c9-body mb-10 text-lg">
                  Replacing a core customer touchpoint feels risky. We remove the fear of implementation by executing a validated, phased transition plan that protects your active operations.
               </p>
               <ul className="space-y-5">
                  {[
                    { t: 'Strategic Call Flow Design', d: 'We map your existing routing and optimise it before we build.' },
                    { t: 'Support Continuity', d: 'Old systems remain active until the new environment is fully verified.' },
                    { t: 'Live System Adoption', d: 'Hands-on training for agents and supervisors to ensure immediate confidence.' }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                        <CheckCircle2 size={12} className="text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-[16px] font-bold text-slate-900 mb-1">{item.t}</div>
                        <div className="text-[14px] text-slate-500 leading-relaxed">{item.d}</div>
                      </div>
                    </li>
                  ))}
               </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 8. COMMERCIAL OUTCOMES ═══════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className={C}>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
             <FadeIn direction="left">
                <span className="c9-eyebrow mb-4">Measured Results</span>
                <h2 className="c9-section-heading mb-6">Commercial Proof of Operational Performance.</h2>
                <p className="c9-body mb-10 text-slate-600">
                   When you upgrade your contact centre architecture, the impact on customer retention and team efficiency is measurable.
                </p>

                <div className="grid grid-cols-2 gap-4">
                   {[
                     { label: "Customer Response", val: "Faster", icon: <Clock size={20} /> },
                     { label: "Missed Opportunities", val: "Reduced", icon: <TrendingUp size={20} /> },
                     { label: "Team Efficiency", val: "Optimised", icon: <Users size={20} /> },
                     { label: "Decision Making", val: "Data-Driven", icon: <BarChart3 size={20} /> }
                   ].map((stat, i) => (
                     <div key={i} className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 hover:bg-white hover:border-[#5D00D6]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#5D00D6]/10 group">
                        <div className="text-2xl font-bold text-[#5D00D6] mb-1 leading-none tracking-tight">{stat.val}</div>
                        <div className="text-slate-500 font-bold text-[11px] uppercase tracking-widest leading-tight">{stat.label}</div>
                     </div>
                   ))}
                </div>
             </FadeIn>

             <FadeIn direction="right" delay={0.1}>
               <div className="bg-white p-6 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-200/50">
                 <WpCaseStudies 
                    articles={[
                      {
                        tag: 'CX OPTIMISATION',
                        title: 'National Retail Network',
                        desc: "Disjointed branch numbers caused high abandonment. C9 deployed a unified contact centre with skill-based routing. Result: 60% faster resolution times.",
                        img: 'https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Performance Restored'
                      },
                      {
                        tag: 'HEALTHCARE CONTINUITY',
                        title: 'Medical Booking Call Centre',
                        desc: "High morning call volumes overwhelmed reception staff. C9 implemented smart queueing and callback logic. Result: Abandonment dropped by 90%.",
                        img: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb8?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Patient Care Secured'
                      }
                    ]}
                  />
               </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 9. MID-PAGE CTA ══════════════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
           <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                  If your support operation is creating delays, poor customer experience, or management blind spots, it is already affecting revenue.
                </h3>
                <p className="c9-body mb-10 text-lg">
                  Let&apos;s review it.
                </p>
                <C9Button className="px-10 h-16 bg-[#5D00D6] text-white hover:bg-[#4d00b3] shadow-xl rounded-full text-lg" asChild>
                  <Link href="#consultation">Book a Contact Centre Performance Review</Link>
                </C9Button>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* ══ 10. FINAL CTA ════════════════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
        <div className={C}>
           <div className="bg-[#5D00D6] rounded-[48px] p-10 lg:p-20 relative overflow-hidden shadow-2xl shadow-purple-900/40 text-center">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.05] rounded-full blur-[100px] -mr-64 -mt-64" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white opacity-[0.05] rounded-full blur-[80px] -ml-32 -mb-32" />
              
              <div className="relative z-10">
                <span className="c9-eyebrow !text-white/80 mb-4">Executive Action</span>
                <h2 className="c9-section-heading !text-white mb-6">Performance + Visibility + Accountability</h2>
                <p className="c9-body !text-white/70 mb-10 max-w-2xl mx-auto text-lg">
                  Stop settling for fragmented support tools. Partner with C9 for operational control that drives true customer retention.
                </p>
                <C9Button className="px-12 h-16 bg-white text-[#5D00D6] hover:bg-slate-50 shadow-xl rounded-full text-lg" asChild>
                  <Link href="#consultation">Talk to C9 About Contact Centre Systems</Link>
                </C9Button>
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

      <section id="consultation" className="bg-white">
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
          { q: "What visibility do supervisors get?", a: "Supervisors access live dashboards showing queue status, active calls, wait times, and agent adherence. They can also use call barging or whisper functions to coach staff during live interactions." }
        ]}
      />
    </main>
  );
}

