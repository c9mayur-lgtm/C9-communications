'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldAlert, Activity, Users, CheckCircle2, Zap, Clock, Layers, ShieldCheck, Building2, TrendingUp, Smartphone, PhoneCall, CheckCircle, Navigation, Network, Briefcase, FileText } from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
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

export default function MobilePlansPage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      
      {/* ══ 1. HERO ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pt-12 pb-0 lg:pt-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className={`${C} relative z-10`}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center pb-16 lg:pb-24">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
                  <div className="w-2 h-2 rounded-full bg-[#5D00D6] animate-pulse" />
                  <span className="c9-eyebrow !mb-0">Business Mobility</span>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.08}>
                <h1 className="c9-hero-title mb-6">
                  Business Mobile Solutions That Keep Your <span className="text-[#5D00D6]">Workforce Connected.</span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.15}>
                <p className="c9-body mb-8 max-w-[580px]">
                  Disconnected teams create delays and lost productivity. Poor mobile visibility creates cost and support problems. C9 provides managed mobile solutions with absolute accountability, cost control, and total support ownership.
                </p>
              </FadeIn>

              <FadeIn delay={0.22}>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                    {[
                       'Centralised Fleet Management',
                       'Predictable Cost Control',
                       'Automated Failover Ready',
                       'Priority Australian Support'
                    ].map((item) => (
                       <div key={item} className="flex items-center gap-3">
                          <CheckCircle size={12} className="text-[#5D00D6] shrink-0" />
                          <span className="text-slate-700 font-bold text-[14px]">{item}</span>
                       </div>
                    ))}
                 </div>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <C9Button className="px-9 h-14 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-xl shadow-purple-900/20 rounded-full" asChild>
                     <Link href="#consultation-section">
                        Review Your Mobile Setup
                     </Link>
                  </C9Button>
                  <C9Button variant="outline" className="px-9 h-14 border-slate-200 text-slate-600 hover:border-[#5D00D6] hover:text-[#5D00D6] rounded-full bg-white" asChild>
                     <Link href="tel:1300480905">
                        Talk to a Specialist
                     </Link>
                  </C9Button>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
               <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3]">
                  <img
                     src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000"
                     alt="Executive reviewing operations on a mobile device"
                     className="w-full h-full object-cover object-top duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/60 shadow-xl">
                     <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Fleet Control</span>
                        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[10px] uppercase tracking-wider">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> 100% Visibility
                        </span>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Accountability</div>
                           <div className="text-[14px] font-bold text-slate-900 leading-none">Single Partner</div>
                        </div>
                        <div>
                           <div className="text-[11px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest">Support</div>
                           <div className="text-[14px] font-bold text-slate-900 leading-none">Priority Response</div>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <WpClientTicker />

      {/* ══ 2. THE HIDDEN COST OF DISCONNECTED TEAMS ════════════════════ */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
        <div className={C}>
          <div className="max-w-[700px] mb-16">
            <FadeIn>
              <h2 className="c9-section-title">
                The Hidden Cost of Disconnected Teams
              </h2>
              <p className="c9-body font-medium">
                When executives become unreachable or field teams lose connectivity, the cost is not measured in megabytes—it is measured in delayed decisions, lost revenue, and poor customer experience. Disconnected teams create expensive delays.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
               <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm h-full flex flex-col hover:border-[#5D00D6]/20 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                     <Clock size={24} />
                  </div>
                  <h4 className="text-[18px] font-bold text-slate-900 mb-3">Field Team Delays</h4>
                  <p className="c9-body !text-[15px]">
                     Field staff relying on poor connectivity cannot access critical systems, leading to operational downtime, frustrated clients, and wasted hours.
                  </p>
               </div>
            </FadeIn>
            <FadeIn delay={0.2}>
               <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm h-full flex flex-col hover:border-[#5D00D6]/20 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
                     <Activity size={24} />
                  </div>
                  <h4 className="text-[18px] font-bold text-slate-900 mb-3">Executive Isolation</h4>
                  <p className="c9-body !text-[15px]">
                     When executives are unreachable during critical operational moments due to unmanaged mobile dropouts, entire teams are forced to halt.
                  </p>
               </div>
            </FadeIn>
            <FadeIn delay={0.3}>
               <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm h-full flex flex-col hover:border-[#5D00D6]/20 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                     <ShieldAlert size={24} />
                  </div>
                  <h4 className="text-[18px] font-bold text-slate-900 mb-3">Billing Chaos</h4>
                  <p className="c9-body !text-[15px]">
                     Unmanaged, fragmented retail plans across your business create impossible administration overhead, zero visibility, and unpredictable cost blowouts.
                  </p>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 3. HUMAN TRUST BREAK 1 ═══════════════════════════════════════ */}
      <section className="relative py-32 lg:py-40 bg-[#0c1024] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/mobile_workforce_executive_control.png" 
            className="w-full h-full object-cover object-center opacity-40 scale-105"
            alt="Corporate executive with mobile device"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1024] via-[#0c1024]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024] via-transparent to-transparent opacity-60" />
        </div>
        
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#5D00D6] rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
        </div>

        <div className={`${C} relative z-10`}>
          <div className="max-w-[800px]">
             <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/90 text-[11px] font-bold uppercase tracking-widest mb-8">
                   <div className="w-2 h-2 rounded-full bg-[#5D00D6] shadow-[0_0_8px_#5D00D6]" />
                   <ShieldCheck size={14} className="text-[#5D00D6]" /> 
                   <span>Executive Governance</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
                  Your workforce does not stop at the office. <span className="text-white/60 font-medium">Neither should your support.</span>
                </h2>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-[2px] bg-[#5D00D6] mt-4 shrink-0 hidden sm:block" />
                  <p className="text-[20px] md:text-[22px] text-slate-300 leading-relaxed font-medium max-w-[640px]">
                    Business mobility should create absolute control—not administrative complexity. When your team is in the field, you need a system that ensures continuous connection without unpredictable costs.
                  </p>
                </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 4. WHY BUSINESSES REPLACE THEIR SETUP ═══════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className={C}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="c9-section-title">
                Why Businesses Replace Their Current Mobile Setup
              </h2>
              <p className="c9-body mb-8">
                Brownfield environments are often plagued by legacy retail accounts that were added piecemeal as the company grew. This results in severe operational friction.
              </p>
              
              <div className="space-y-6">
                 {[
                   { title: 'Multiple Providers, Zero Support', desc: 'Managing contracts across different retail telcos creates endless finger-pointing and support confusion.' },
                   { title: 'Zero Usage Visibility', desc: 'No central view across users and devices, making it impossible to forecast costs or identify waste.' },
                   { title: 'Administrative Burden', desc: 'Finance teams waste days reconciling disjointed bills instead of focusing on commercial strategy.' },
                   { title: 'Inconsistent Connectivity', desc: 'Remote and field teams suffer when they rely on consumer-grade support SLAs during business hours.' }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                          <XIcon />
                       </div>
                       <div>
                          <h4 className="text-[16px] font-bold text-slate-900 mb-1">{item.title}</h4>
                          <p className="text-[15px] text-slate-600 leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
            </FadeIn>
            <FadeIn direction="left">
               <div className="bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">The Breaking Point</h3>
                  <p className="c9-body mb-8">
                     Businesses come to C9 when unmanaged mobile costs and disjointed support begin to actively harm their operational capability. Retail SIMs are not built for enterprise governance.
                  </p>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-[#5D00D6]">
                     <div className="text-[14px] font-bold text-[#5D00D6] uppercase tracking-widest mb-2">The Real Risk</div>
                     <div className="text-[18px] font-bold text-slate-900 leading-tight">
                        "We had 150 staff on different plans, multiple portals, and no way to control our monthly spend."
                     </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 5. WHY BUSINESSES CHOOSE C9 ═════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa] border-y border-slate-100">
         <div className={C}>
            <div className="text-center max-w-[800px] mx-auto mb-16">
               <FadeIn>
                  <h2 className="c9-section-title mx-auto">
                     Why Businesses Choose C9
                  </h2>
                  <p className="text-[19px] text-[#5D00D6] font-bold leading-relaxed mb-4">
                     Visibility matters more than unlimited data.
                  </p>
                  <p className="c9-body">
                     We don't sell plans; we provide accountable mobility. We centralise your fleet, establish absolute transparency, and take ownership of your workforce continuity.
                  </p>
               </FadeIn>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
               <FadeIn delay={0.1}>
                  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
                     <div className="w-14 h-14 rounded-full bg-[#5D00D6]/10 flex items-center justify-center mx-auto mb-6 text-[#5D00D6]">
                        <Network size={28} />
                     </div>
                     <h4 className="text-[18px] font-bold text-slate-900 mb-3">Centralised Fleet Management</h4>
                     <p className="text-[15px] text-slate-600 leading-relaxed">
                        Total control over every device and user in your business from a single, unified point of governance.
                     </p>
                  </div>
               </FadeIn>
               <FadeIn delay={0.2}>
                  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
                     <div className="w-14 h-14 rounded-full bg-[#5D00D6]/10 flex items-center justify-center mx-auto mb-6 text-[#5D00D6]">
                        <FileText size={28} />
                     </div>
                     <h4 className="text-[18px] font-bold text-slate-900 mb-3">Simplified Billing Control</h4>
                     <p className="text-[15px] text-slate-600 leading-relaxed">
                        One invoice, predictable costs, and shared data pools that eliminate the administrative nightmare of individual overages.
                     </p>
                  </div>
               </FadeIn>
               <FadeIn delay={0.3}>
                  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
                     <div className="w-14 h-14 rounded-full bg-[#5D00D6]/10 flex items-center justify-center mx-auto mb-6 text-[#5D00D6]">
                        <Users size={28} />
                     </div>
                     <h4 className="text-[18px] font-bold text-slate-900 mb-3">One Accountable Partner</h4>
                     <p className="text-[15px] text-slate-600 leading-relaxed">
                        Support that understands your business context. We own the delivery and resolution, so your internal team doesn't have to.
                     </p>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* ══ 6. HUMAN TRUST BREAK 2 ═══════════════════════════════════════ */}
      <section className="relative py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-80"
            alt="Operations support"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />
        </div>
        
        <div className={`${C} relative z-10`}>
          <div className="grid lg:grid-cols-2 gap-16">
             <div className="flex flex-col justify-center py-12 lg:py-0">
                <FadeIn>
                   <h2 className="c9-section-title text-slate-900 tracking-tight">
                     Managing business mobility should reduce operational friction — not create more admin.
                   </h2>
                   <p className="text-[18px] text-slate-700 leading-relaxed font-medium">
                     Your mobile provider should solve problems, not create them. We engineer our support model to protect your time and your bottom line.
                   </p>
                </FadeIn>
             </div>
          </div>
        </div>
      </section>

      {/* ══ 7. OPERATIONAL CONTROL AND SUPPORT ═══════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className={C}>
          <div className="max-w-[700px] mb-16">
            <FadeIn>
              <h2 className="c9-section-title">
                Operational Control and Support
              </h2>
              <p className="c9-body font-medium">
                Enterprise mobility demands rigorous accountability. We eliminate vague support tickets and retail-style excuses, replacing them with a strict framework of operational control.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             {[
               { icon: <ShieldCheck size={20} />, title: "Support Ownership", desc: "We don't pass you back to the carrier. We own the support lifecycle from the moment an issue is raised until total resolution." },
               { icon: <Navigation size={20} />, title: "Escalation Clarity", desc: "Clear SLAs and direct access to AU-managed tier-2 engineers for rapid problem resolution." },
               { icon: <TrendingUp size={20} />, title: "Usage Visibility", desc: "Transparent dashboarding ensuring your operations and finance teams always know exactly where data and spend are directed." },
               { icon: <Briefcase size={20} />, title: "Device Lifecycle Support", desc: "From procurement and provisioning to deployment and decommissioning, we manage the entire hardware lifecycle." }
             ].map((feature, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                   <div className="flex gap-5 p-8 rounded-3xl bg-slate-50 border border-slate-100 h-full">
                      <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#5D00D6] flex-shrink-0 shadow-sm">
                         {feature.icon}
                      </div>
                      <div>
                         <h4 className="text-[18px] font-bold text-slate-900 mb-2">{feature.title}</h4>
                         <p className="text-[15px] text-slate-600 leading-relaxed">{feature.desc}</p>
                      </div>
                   </div>
                </FadeIn>
             ))}
          </div>
        </div>
      </section>

      {/* ══ 8. MID-PAGE CTA ═════════════════════════════════════════════ */}
      <section className="py-20 bg-[#5D00D6]">
        <div className={`${C} text-center`}>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
              If your current mobile setup is creating support issues, hidden costs, or disconnected teams, it is already affecting business performance.
            </h2>
            <p className="text-[19px] text-white/80 font-medium mb-10">
              Let’s review it.
            </p>
            <C9Button size="lg" className="bg-white text-[#5D00D6] hover:bg-gray-50 border-none px-10 rounded-full shadow-2xl" asChild>
              <Link href="#consultation-section">Book a Mobility Review</Link>
            </C9Button>
          </FadeIn>
        </div>
      </section>

      {/* ══ 9. BUILT FOR REAL BUSINESS OPERATIONS ═══════════════════════ */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
         <div className={C}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <FadeIn direction="right">
                  <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 aspect-square">
                     <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                        alt="Logistics warehouse team connected via mobile"
                        className="w-full h-full object-cover object-center duration-1000 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/80 via-transparent to-transparent" />
                     <div className="absolute bottom-8 left-8 text-white">
                        <div className="flex items-center gap-2 mb-2">
                           <CheckCircle2 size={12} className="text-emerald-400" />
                           <span className="text-[12px] font-bold uppercase tracking-widest">Environment Tested</span>
                        </div>
                        <h4 className="text-[24px] font-bold">Industrial & Field Ready</h4>
                     </div>
                  </div>
               </FadeIn>
               
               <FadeIn>
                  <h2 className="c9-section-title">
                     Built for Real Business Operations
                  </h2>
                  <p className="c9-body mb-8">
                     Our solutions are not theoretical. They are designed to withstand the realities of dispersed operations, ensuring that the critical roles in your business never lose their lifeline to the core network.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                     {[
                        { title: 'Field Service Teams', desc: 'Continuous access to dispatch and technical schematics.' },
                        { title: 'Executive Mobility', desc: 'Uninterrupted communication for critical decision making.' },
                        { title: 'Sales Workforces', desc: 'Real-time CRM access from any client location.' },
                        { title: 'Logistics & Warehousing', desc: 'Secure, un-tethered scanning and tracking connectivity.' }
                     ].map((item, idx) => (
                        <div key={idx}>
                           <div className="flex items-center gap-2 mb-2 text-[#5D00D6]">
                              <Building2 size={16} />
                              <h5 className="text-[15px] font-bold text-slate-900">{item.title}</h5>
                           </div>
                           <p className="text-[13.5px] text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                     ))}
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* ══ 10. HUMAN TRUST BREAK 3 ══════════════════════════════════════ */}
      <section className="relative py-24 bg-[#0c1024] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover object-center opacity-40"
            alt="Business professionals collaborating"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024] via-[#0c1024]/70 to-transparent" />
        </div>
        
        <div className={`${C} relative z-10 text-center max-w-4xl mx-auto`}>
           <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                Business mobility is not about plans.
              </h2>
              <p className="text-[20px] text-slate-300 leading-relaxed font-medium mb-8">
                It is about keeping people connected when operations depend on it. The best systems are the ones your teams never need to think about.
              </p>
              <div className="w-16 h-1 bg-[#5D00D6] mx-auto rounded-full" />
           </FadeIn>
        </div>
      </section>

      {/* ══ 11. COMMERCIAL OUTCOMES ══════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className={C}>
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <FadeIn>
              <h2 className="c9-section-title mx-auto">
                Commercial Outcomes
              </h2>
              <p className="c9-body mx-auto font-medium">
                We deliver measurable operational improvements that directly impact your bottom line. No fluff, just credible results.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
               <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50 flex flex-col items-center text-center">
                  <div className="text-[36px] font-bold text-[#5D00D6] mb-2">100%</div>
                  <div className="text-[14px] font-bold text-slate-900 uppercase tracking-widest mb-4">Billing Visibility</div>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                     Total control over costs with single-invoice simplicity and pooled data environments.
                  </p>
               </div>
            </FadeIn>
            <FadeIn delay={0.2}>
               <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50 flex flex-col items-center text-center">
                  <div className="text-[36px] font-bold text-[#5D00D6] mb-2">Zero</div>
                  <div className="text-[14px] font-bold text-slate-900 uppercase tracking-widest mb-4">Support Complexity</div>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                     Eliminate vendor finger-pointing. We own the entire support lifecycle for your fleet.
                  </p>
               </div>
            </FadeIn>
            <FadeIn delay={0.3}>
               <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50 flex flex-col items-center text-center">
                  <div className="text-[36px] font-bold text-[#5D00D6] mb-2">Absolute</div>
                  <div className="text-[14px] font-bold text-slate-900 uppercase tracking-widest mb-4">Workforce Continuity</div>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                     Fewer operational delays and stronger responsiveness across remote and field teams.
                  </p>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 12. BOTTOM CTA & FORM ════════════════════════════════════════ */}
      <section id="consultation-section" className="bg-white">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="EXECUTIVE ENGAGEMENT"
          title="Talk to C9 About Mobile Solutions Built for Business Continuity"
          description="We work with businesses to consolidate vendors, regain visibility, and secure their workforce. Book a confidential review of your current mobile infrastructure."
          formTitle="Schedule Mobility Review"
        />
      </section>

      {/* ══ 13. RELATED SOLUTIONS ════════════════════════════════════════ */}
      <ContinueJourney 
        title="Mobile Is One Layer. Here's the Connected Stack."
        description="Businesses with a managed mobile fleet often consolidate voice, connectivity, and IT under one partner next. These are the services that build a complete, accountable environment."
        links={[
          { label: "Microsoft Teams Calling", path: "/telco/teams-calling" },
          { label: "Business nbn™", path: "/telco/business-nbn" },
          { label: "Fast Fibre", path: "/telco/fast-fibre" },
          { label: "Managed IT Infrastructure", path: "/managed-it/infrastructure" }
        ]} 
      />
      
    </main>
  );
}

// Simple helper icon
function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  );
}
