'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  PhoneCall, Users, ShieldCheck, Activity, ArrowRight, CheckCircle2, 
  Clock, Layers, Building2, TrendingUp,
  Monitor, CheckCircle, BarChart3, Globe,
  MessageSquare, Zap, RefreshCcw, ShieldAlert, Headphones,
  Settings, Layout, Signal, HeartHandshake, UserCheck
} from 'lucide-react';
import { Section } from '@/components/design-system/Section';
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

export default function C9PhoneSystemPage() {
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
                   <PhoneCall size={13} className="text-[#5D00D6]" />
                   <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Operational Excellence</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                 <h1 className="c9-hero-title mb-6 !leading-[1.1]">
                    Every Missed Call Costs <br/>More Than You <span className="text-[#5D00D6]">Think.</span>
                 </h1>
              </FadeIn>

              <FadeIn delay={0.15}>
                 <p className="c9-body mb-8 max-w-[620px] text-lg">
                    Missed calls cost revenue and damage customer trust. C9 provides reliable business communication with full accountability and support ownership, keeping your teams reachable and your customers connected.
                 </p>
              </FadeIn>

              <FadeIn delay={0.22}>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <C9Button className="px-9 h-14 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl shadow-purple-900/20 rounded-full" asChild>
                      <Link href="#consultation">Review Your Current Phone Setup</Link>
                    </C9Button>
                    <C9Button variant="outline" className="px-9 h-14 border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] rounded-full bg-white" asChild>
                      <Link href="#consultation">Talk to a Communication Specialist</Link>
                    </C9Button>
                 </div>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-10">
                <div className="flex flex-wrap gap-x-10 gap-y-3">
                   {['Missed-Call Prevention', 'Zero-Disruption Porting', 'CRM Integration', '24/7 Managed Ownership'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                         {item}
                      </div>
                   ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="right" className="relative">
               <div className="relative rounded-[48px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group">
                  <img
                     src="/images/yealink-phone-1.jpg"
                     alt="Professional using a modern business phone system"
                     className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  />

               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <WpClientTicker />

      {/* ══ 2. THE COST OF POOR CALL HANDLING ═══════════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <span className="c9-eyebrow mb-4 text-rose-600">Business Urgency</span>
              <h2 className="c9-section-heading">The Silent Cost of <br/>Poor Communication.</h2>
              <p className="c9-body text-lg mt-6">
                Customers rarely complain about the calls you never answered. They simply call someone else. If your system is failing, it is already hurting your business.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldAlert />, title: "Revenue Exposure", text: "Every missed call is a missed customer opportunity. Lost leads equal lost revenue." },
              { icon: <Users />, title: "Customer Attrition", text: "Poor routing and wait times damage trust immediately. Customers want response, not delays." },
              { icon: <TrendingUp />, title: "Productivity Gaps", text: "Disconnected teams and fragmented systems slow down operations and reduce total output." },
              { icon: <Monitor />, title: "Hidden Operational Costs", text: "Unreliable systems create constant support friction and maintenance overhead for IT teams." }
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
                  <img src="/images/yealink-phone-4.jpg" alt="Executive connected via mobile communication" className="w-full h-full object-cover object-top" />
               </div>
               <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#5D00D6]/10 rounded-full blur-3xl" />
            </FadeIn>
            
            <FadeIn direction="right" delay={0.2} className="order-1 lg:order-2">
               <span className="c9-eyebrow mb-4">Strategic Empathy</span>
               <h2 className="c9-section-heading mb-6">Your phone system should protect customer relationships — not quietly damage them.</h2>
               <p className="c9-body text-xl text-slate-600 italic">
                  &ldquo;If your team cannot be reached, your business cannot perform. Communication isn&apos;t just a utility; it&apos;s the backbone of your customer experience.&rdquo;
               </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 4. WHY BUSINESSES REPLACE SYSTEMS ═══════════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Brownfield Transformation</span>
               <h2 className="c9-section-heading mb-6">Why Businesses Replace Their Outdated Systems.</h2>
               <p className="c9-body mb-10 text-lg">
                  Legacy systems and multiple vendors create support chaos and operational blind spots. We help businesses move from fragmentation to unified, accountable infrastructure.
               </p>
               
               <div className="space-y-6">
                  {[
                    { title: "Legacy Support Chaos", text: "On-premise hardware or unstable cloud providers creating frequent downtime and support dead-ends." },
                    { title: "Multiple Vendor Fragmentation", text: "Managing different providers for lines, internet, and handsets leads to constant blame cycles." },
                    { title: "Remote Work Blind Spots", text: "Inability to bridge office, mobile, and home environments seamlessly without complex workarounds." },
                    { title: "Reporting and Visibility Gaps", text: "Lack of insight into call volumes and wait times prevents operations from optimizing team performance." }
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
                     <h3 className="text-2xl font-bold mb-8 text-center">Unified Visibility</h3>
                     <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: "Call Handover", val: "Instant", icon: <Globe size={18}/> },
                          { label: "Availability", val: "Verified", icon: <UserCheck size={18}/> },
                          { label: "Support Path", val: "Direct", icon: <Headphones size={18}/> },
                          { label: "Compliance", val: "Active", icon: <ShieldCheck size={18}/> }
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
                     <div className="mt-10 text-center">
                        <p className="text-white/40 text-[12px] leading-relaxed italic">
                           &ldquo;We consolidated 14 locations into a single unified platform. Accountability improved overnight.&rdquo;
                        </p>
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
            <span className="c9-eyebrow mb-4">Operational Accountability</span>
            <h2 className="c9-section-heading mb-6">When things go wrong, who owns it?</h2>
            <p className="c9-body text-lg">
               That is the real buying question. C9 provides a single accountable partner for delivery, support, and long-term business continuity.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Reliable Call Handling", desc: "Advanced cloud-native routing ensuring your teams are reachable across office, mobile, and home sites." },
              { icon: <Users />, title: "Stronger CX Continuity", desc: "Intelligent queueing and routing logic to ensure customers reach the right person every time." },
              { icon: <Clock />, title: "Single Support Ownership", desc: "We manage your internet, lines, and hardware. No more vendor finger-pointing or support dead-ends." },
              { icon: <Monitor />, title: "Operational Visibility", desc: "Real-time reporting and management dashboards to keep you in control of your entire voice ecosystem." },
              { icon: <Globe />, title: "Multi-Site Resilience", desc: "Unified governance and consistent team communication regardless of geographical location." },
              { icon: <Activity />, title: "Proactive Incident Support", desc: "Direct access to senior Australian engineers who own the resolution of any communication anomaly." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center text-[#5D00D6] shrink-0 group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[18px] mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. TRUST BREAK 2 ═══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Migration Trust</span>
               <h2 className="c9-section-heading mb-6">Replacing your phone system should reduce risk — not create it.</h2>
               <p className="c9-body text-xl text-slate-600 italic">
                  &ldquo;Migration should feel controlled, not dangerous. Our technical architects manage the complexity so your business stays online from day one.&rdquo;
               </p>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.2}>
               <div className="relative rounded-[48px] overflow-hidden shadow-2xl aspect-[4/3]">
                  <img src="/images/yealink-phone-2.jpg" alt="C9 team managing a smooth system migration" className="w-full h-full object-cover object-center" />
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 7. MIGRATION WITHOUT DISRUPTION ════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left" className="order-2 lg:order-1">
               <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { label: "Number Porting", val: "Zero Downtime", icon: <RefreshCcw /> },
                    { label: "Deployment", val: "Risk Managed", icon: <ShieldCheck /> },
                    { label: "Onboarding", val: "Day-One Ready", icon: <UserCheck /> },
                    { label: "Support", val: "Live Assisted", icon: <Headphones /> }
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:border-[#5D00D6]/20 transition-all hover:shadow-2xl group">
                        <div className="w-8 h-8 rounded-lg bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-4">
                           {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-slate-900 mb-1 leading-none tracking-tight">{stat.val}</div>
                        <div className="text-slate-500 font-bold text-[11px] uppercase tracking-widest leading-tight">{stat.label}</div>
                    </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="order-1 lg:order-2">
               <span className="c9-eyebrow mb-4">Managed Onboarding</span>
               <h2 className="c9-section-heading mb-6">Transitioning Your Operations Safely.</h2>
               <p className="c9-body mb-10 text-lg">
                  We manage the entire migration cycle to ensure your operations never pause. Our team handles the complex porting and technical execution so you can focus on your business.
               </p>
               <ul className="space-y-5">
                  {[
                    { t: 'Strategic Transition Planning', d: 'Audit of call flows and porting requirements before execution.' },
                    { t: 'Validated Number Porting', d: 'Managed liaison with providers for service gap-free movement.' },
                    { t: 'Staff Training & Rollout', d: 'Live hands-on training to ensure team operational confidence.' }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                        <CheckCircle size={14} className="text-white" />
                      </div>
                      <div>
                        <div className="text-[15px] font-bold text-slate-900 mb-1">{item.t}</div>
                        <div className="text-[13px] text-slate-500 leading-relaxed">{item.d}</div>
                      </div>
                    </li>
                  ))}
               </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 8. SUPPORT, VISIBILITY, AND OPERATIONAL CONTROL ═════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
               <span className="c9-eyebrow mb-4">Executive Governance</span>
               <h2 className="c9-section-heading mb-6">Visibility and Accountability Built-In.</h2>
               <p className="c9-body mb-10 text-lg">
                  IT leaders and Operations Heads need visibility. We provide the governance tools required to ensure you have full control over your customer experience and team reachability.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { icon: <Monitor />, title: "Reporting Visibility", desc: "Live dashboards showing abandoned rates and team availability." },
                    { icon: <Settings />, title: "System Control", desc: "Manage routing, IVRs, and user permissions in real-time." },
                    { icon: <ShieldCheck />, title: "Support Ownership", desc: "Direct access to senior Australian engineers for all voice incidents." },
                    { icon: <Zap />, title: "Continuity Planning", desc: "Pre-configured failover paths for immediate outage recovery." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                       <div className="text-[#5D00D6] shrink-0 mt-1">
                          {item.icon}
                       </div>
                       <div>
                          <h4 className="font-bold text-slate-900 text-[17px] mb-2">{item.title}</h4>
                          <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="relative">
               <div className="bg-white rounded-[48px] p-10 lg:p-16 border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-100">
                     <h3 className="text-xl font-bold text-slate-900">Performance Status</h3>
                     <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        System Active
                     </div>
                  </div>
                  <div className="space-y-6">
                     {[
                       { label: 'Network Availability', val: '99.99%', sub: 'Cloud Core Cluster' },
                       { label: 'Voice Packet Delay', val: '< 15ms', sub: 'Low Latency Routing' },
                       { label: 'Customer Abandonment', val: '- 85%', sub: 'After Implementation' }
                     ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center p-4 rounded-2xl border border-slate-50 bg-slate-50/30">
                           <div>
                              <div className="text-[13px] font-bold text-slate-800">{item.label}</div>
                              <div className="text-[11px] text-slate-400 font-medium">{item.sub}</div>
                           </div>
                           <div className="text-2xl font-bold text-[#5D00D6] tracking-tighter">{item.val}</div>
                        </div>
                     ))}
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 9. TRUST BREAK 3 ═══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left" className="order-2 lg:order-1 relative">
               <div className="relative rounded-[48px] overflow-hidden shadow-2xl aspect-[4/3] group">
                  <img 
                    src="/images/yealink-phone-3.jpg" 
                    alt="Stable business communication infrastructure" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/40 to-transparent" />
               </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.2} className="order-1 lg:order-2">
               <div className="max-w-xl">
                  <span className="c9-eyebrow mb-4">Final Confidence</span>
                  <h2 className="c9-section-heading mb-6">Bad communication systems quietly cost businesses every day.</h2>
                  <p className="c9-body text-xl text-slate-600 italic border-l-4 border-[#5D00D6] pl-6 py-2">
                    &ldquo;The best systems are the ones your customers never notice — because everything simply works. We provide the stability that lets your team focus on growth, not technical troubleshooting.&rdquo;
                  </p>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 10. COMMERCIAL OUTCOMES ═════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className={C}>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
             <FadeIn direction="left">
                <span className="c9-eyebrow mb-4">Measured Results</span>
                <h2 className="c9-section-heading mb-6">Commercially Credible Outcomes for Modern Operations.</h2>
                <p className="c9-body mb-10 text-slate-600">
                   When you shift to C9 Managed Voice, the impact is immediate and observable across your entire business.
                </p>

                <div className="grid grid-cols-2 gap-4">
                   {[
                     { label: "Missed Call Reduction", val: "95%+", icon: <TrendingUp size={20} /> },
                     { label: "Response Speed", val: "40% Higher", icon: <Clock size={20} /> },
                     { label: "Team Reachability", val: "100%", icon: <Users size={20} /> },
                     { label: "Vendor Overhead", val: "Minimized", icon: <Headphones size={20} /> }
                   ].map((stat, i) => (
                     <div key={i} className="bg-white border border-slate-100 rounded-[32px] p-8 hover:border-[#5D00D6]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#5D00D6]/10 group">
                        <div className="text-3xl font-bold text-[#5D00D6] mb-1 leading-none tracking-tight">{stat.val}</div>
                        <div className="text-slate-500 font-bold text-[12px] uppercase tracking-widest leading-tight">{stat.label}</div>
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
                        title: 'National Retail Distribution',
                        desc: "Fragmented systems meant warehouse teams couldn't reach office staff easily. C9 consolidated 8 sites onto a unified cloud platform. Result: Internal response time improved by 50%.",
                        img: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Operations Restored'
                      },
                      {
                        tag: 'HEALTHCARE CONTINUITY',
                        title: 'Medical Practice Reachability',
                        desc: "A multi-site medical group was losing patients due to abandoned calls during morning peaks. C9 implemented intelligent queueing and failover. Result: Abandonment rate dropped by 85%.",
                        img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop',
                        videoText: 'Care Continuity'
                      }
                    ]}
                  />
               </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 11. CTAs & FUNNEL ═══════════════════════════════════════ */}
      <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
        <div className={C}>
           <div className="max-w-4xl mx-auto text-center mb-16">
              <FadeIn>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                  If your current phone system is creating missed calls or support frustration, it is already costing your business.
                </h3>
                <p className="c9-body mb-10 text-lg">
                  Let&apos;s review whether your current communication setup is protecting your customers or pushing them away.
                </p>
                <C9Button className="px-10 h-16 bg-[#5D00D6] text-white hover:bg-[#4d00b3] shadow-xl rounded-full text-lg" asChild>
                  <Link href="#consultation">Book a Communication System Review</Link>
                </C9Button>
              </FadeIn>
           </div>

           <div className="bg-[#5D00D6] rounded-[48px] p-10 lg:p-20 relative overflow-hidden shadow-2xl shadow-purple-900/40 text-center">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.05] rounded-full blur-[100px] -mr-64 -mt-64" />
              <div className="relative z-10">
                <span className="c9-eyebrow !text-white/80 mb-4">Commercial Strategy</span>
                <h2 className="c9-section-heading !text-white mb-6">Customer Experience + Reliability + Accountability</h2>
                <C9Button className="px-12 h-16 bg-white text-[#5D00D6] hover:bg-slate-50 shadow-xl rounded-full text-lg" asChild>
                  <Link href="#consultation">Talk to C9 About Business Phone Systems</Link>
                </C9Button>
              </div>
           </div>
        </div>
      </section>

      {/* ══ 11. RELATED SOLUTIONS ═══════════════════════════════════════ */}
      <ContinueJourney 
        title="Voice Is One Piece. See the Full Stack."
        description="Unified communication requires reliable infrastructure underneath it. Explore the connected services that complete the picture."
        links={[
          { label: "Microsoft Teams Calling", path: "/telco/teams-calling" },
          { label: "Contact Centre", path: "/telco/contact-centre" },
          { label: "SIP Trunking", path: "/telco/sip-trunking" },
          { label: "Inbound Services", path: "/telco/inbound-services" }
        ]}
      />

      <section id="consultation" className="bg-white">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="VOICE INFRASTRUCTURE AUDIT"
          title="Ready to remove communication risk?"
          description="Book a technical strategy session with our senior voice engineers to review your national infrastructure and identify missed-call risks."
          formTitle="Request an Operational Review"
        />
      </section>

      <WpFAQAndFeedback 
        faqItems={[
          { q: "How does C9 handle transition from legacy systems?", a: "We manage every stage of the migration, from strategic number porting to day-one staff training. Our framework is designed to ensure zero operational downtime, meaning your customers can reach you throughout the entire rollout process." },
          { q: "What happens if our primary internet fails?", a: "Our cloud-native platform includes pre-configured failover paths. Calls can be automatically re-routed to mobile apps, secondary locations, or remote softphones, ensuring 100% reachability regardless of site-level outages." },
          { q: "Does C9 Voice integrate with our existing CRM?", a: "Yes. C9 Voice supports deep integration with leading CRM platforms, allowing for live synchronisation of customer data, click-to-call functionality, and real-time activity logging to improve team productivity." }
        ]}
      />
    </main>
  );
}
