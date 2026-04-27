'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Wifi, Phone, Server, Shield, Cloud, Smartphone, ArrowRight, CheckCircle, Zap, 
  ShieldCheck, Activity, Users, Lock, RefreshCcw, LayoutDashboard, 
  Building2, TrendingUp, Monitor, Scale, AlertTriangle, PhoneCall,
  HardDrive, ClipboardCheck, Globe, Rocket, ShieldAlert, BarChart3
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '@/components/design-system/Section';
import { H1, H2, H3, Body, Label } from '@/components/design-system/Typography';
import { C9Button } from '@/components/design-system/C9Button';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { ContinueJourney } from '@/components/sections/ContinueJourney';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { cn } from '@/lib/utils';

const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <Section bg="white" className="pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden border-b border-slate-100 relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-50 rounded-full blur-[120px] -mr-32 -mt-32 opacity-60 pointer-events-none" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-8">
               <ShieldCheck size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Operational Ownership</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <H1 className="mb-8 !leading-[1.1] text-slate-900">
               Technology Should Simplify Operations — <br className="hidden md:block" /><span className="text-[#5D00D6]">Not Create More Problems.</span>
            </H1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="c9-body mb-12 max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed">
               Fragmented IT, telco, and support environments create operational risk. Multiple vendors create accountability gaps that hurt business growth. C9 provides one accountable partner across connectivity, IT, communications, and operational continuity.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
               <Link href="#consultation">
                 <C9Button className="px-10 h-16 bg-[#5D00D6] hover:bg-[#4d00b3] shadow-2xl shadow-purple-900/20 rounded-full text-lg font-bold transition-all hover:scale-[1.02]">
                   Talk to a Solutions Specialist <ArrowRight className="ml-2 w-5 h-5" />
                 </C9Button>
               </Link>
               <Link href="#consultation">
                 <C9Button variant="outline" className="px-10 h-16 border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full text-lg font-bold bg-white">
                   Review Your Operational Setup
                 </C9Button>
               </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-16">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-px bg-slate-200" />
              <p className="text-[15px] font-black uppercase tracking-[0.2em] text-[#5D00D6]">
                The real problem is rarely technology. It is accountability.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <WpClientTicker />

      {/* 2. THE HIDDEN COST OF FRAGMENTED OPERATIONS */}
      <Section bg="gray" className="border-y border-slate-100 py-24">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="c9-eyebrow mb-4 text-rose-600 block">Immediate Tension</span>
            <H2 className="mb-6 text-slate-900">The Hidden Cost of Fragmented Operations.</H2>
            <p className="c9-body text-lg max-w-2xl mx-auto">
              When your technology stack is a collection of disjointed vendors, your business inherits hidden operational friction. Complexity is not a requirement for scale; it is a symptom of poor architecture.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1240px] mx-auto">
          {[
            { icon: <AlertTriangle />, title: "Vendor Blame Loops", text: "When systems fail, vendors point at each other. Your business stays down while they argue over responsibility." },
            { icon: <RefreshCcw />, title: "Delayed Site Rollouts", text: "New site openings are stalled by fragmented provisioning and lack of coordination between telco and IT teams." },
            { icon: <Scale />, title: "Operational Friction", text: "Support complexity slows business decisions. Your leadership spends more time managing vendors than managing growth." },
            { icon: <Monitor />, title: "Opaque Visibility", text: "Fragmented data across multiple portals makes it impossible to see the true health of your infrastructure." },
            { icon: <ShieldAlert />, title: "Unmanaged Risk", text: "Security gaps emerge when no single partner owns the entire landscape. Compliance becomes a reactive struggle." },
            { icon: <Zap />, title: "Downtime Consequences", text: "Without unified failover and continuity logic, a single link failure can take your entire operation offline." }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all hover:border-[#5D00D6]/20 group">
               <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
               </div>
               <h4 className="font-bold text-slate-900 text-[19px] mb-4">{item.title}</h4>
               <p className="text-slate-500 text-[15px] leading-relaxed italic">{item.text}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-20 text-center">
          <p className="text-xl font-bold text-slate-900 border-l-4 border-[#5D00D6] pl-8 inline-block text-left py-2">
            "Complex operations should not require complex vendor management. <br className="hidden md:block" />Executive clarity requires a single accountable partner."
          </p>
        </FadeIn>
      </Section>

      {/* 3. HUMAN TRUST BREAK SECTION */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-slate-900 py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop" 
            alt="Business leadership and operations" 
            className="w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-[2.5s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="c9-eyebrow !text-[#5D00D6] mb-6 block uppercase tracking-[0.25em]">Commercial Accountability</span>
              <H2 className="!text-white mb-8 !leading-tight text-4xl md:text-6xl">
                When things go wrong, <br /><span className="text-[#5D00D6]">who owns it?</span>
              </H2>
              <div className="space-y-6">
                <p className="text-2xl text-white font-medium">
                  That is the real buying question.
                </p>
                <p className="c9-body !text-slate-300 !text-[20px] border-l-4 border-[#5D00D6] pl-8 py-2">
                  "Because 'we&apos;re looking into it' is not a recovery plan. We don&apos;t just provide services; we own the operational outcome."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS BUILT AROUND BUSINESS OUTCOMES */}
      <Section bg="white" className="py-24 border-b border-slate-100">
        <div className="max-w-4xl mb-20">
          <FadeIn>
            <span className="c9-eyebrow mb-4 !text-[#5D00D6] block">Strategic Alignment</span>
            <H2 className="mb-6 text-slate-900">Solutions Built Around Business Outcomes.</H2>
            <p className="c9-body text-xl">
              Executives do not buy products. They buy certainty. Our solutions are grouped by the operational problems they solve, ensuring your investment aligns with your commercial goals.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {[
            { 
              title: "Connectivity & Network Reliability", 
              desc: "Eliminating the risk of downtime with high-performance business nbn™ and Enterprise Ethernet. We ensure your sites are connected, redundant, and monitored 24/7.",
              outcomes: ["99.95% Uptime Guarantee", "Managed SD-WAN Control", "Redundant Link Failover"],
              icon: <Wifi />,
              color: "bg-blue-50 text-blue-600"
            },
            { 
              title: "Communications & Customer Experience", 
              desc: "Ensuring every customer interaction is captured. From Teams Calling to Intelligent Inbound, we build communication systems that drive revenue and trust.",
              outcomes: ["Zero-Disruption Migration", "Unified Calling Dashboard", "Live Performance Data"],
              icon: <PhoneCall />,
              color: "bg-[#5D00D6]/5 text-[#5D00D6]"
            },
            { 
              title: "Managed IT & Operational Continuity", 
              desc: "Full stack infrastructure management. We act as your internal IT department, owning the outcome of every server, workstation, and application.",
              outcomes: ["Unlimited Engineer Support", "Infrastructure Sovereignty", "Proactive System Care"],
              icon: <Server />,
              color: "bg-emerald-50 text-emerald-600"
            },
            { 
              title: "Cybersecurity & Risk Protection", 
              desc: "Multi-layered defence that protects your brand equity. We move you from reactive panic to proactive governance and compliance.",
              outcomes: ["Security Posture Audits", "Managed Endpoint Defence", "SLA-Driven Remediation"],
              icon: <ShieldCheck />,
              color: "bg-rose-50 text-rose-600"
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-slate-50 border border-slate-100 rounded-2xl p-12 hover:bg-white hover:shadow-2xl transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-40 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
              <div className="relative z-10">
                <div className={cn("w-16 h-16 rounded-[24px] flex items-center justify-center mb-8", item.color)}>
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <H3 className="mb-6 text-2xl text-slate-900 leading-tight">{item.title}</H3>
                <p className="c9-body mb-8 text-[16px] leading-relaxed text-slate-500">
                  {item.desc}
                </p>
                <div className="space-y-4">
                   {item.outcomes.map(outcome => (
                     <div key={outcome} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
                           <CheckCircle size={12} className="text-[#5D00D6]" />
                        </div>
                        <span className="text-[14px] font-bold text-slate-700">{outcome}</span>
                     </div>
                   ))}
                </div>
              </div>
            </FadeIn>
          ))}
          
          <FadeIn className="lg:col-span-2 bg-[#0c1024] rounded-2xl p-12 text-white relative overflow-hidden group border border-white/5 shadow-2xl">
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
            <div className="relative z-10 grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
               <div>
                  <div className="w-16 h-16 rounded-[24px] bg-[#5D00D6]/20 flex items-center justify-center mb-8 text-[#a56eff]">
                    <Rocket size={32} />
                  </div>
                  <H3 className="!text-white mb-6 text-2xl leading-tight">Multi-Site Rollout & Infrastructure Readiness</H3>
                  <p className="text-white/60 text-[16px] leading-relaxed mb-8">
                    Greenfield site expansion without the headache. We coordinate the connectivity, hardware, and onsite setup to ensure day-one operational readiness.
                  </p>
                  <C9Button className="bg-[#5D00D6] hover:bg-[#4d00b3] rounded-full h-12 px-8">
                    View Rollout Planning <ArrowRight className="ml-2 w-4 h-4" />
                  </C9Button>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Site Readiness", val: "Day-One", icon: <ClipboardCheck /> },
                    { label: "Provisioning", val: "Accelerated", icon: <TrendingUp /> },
                    { label: "Onsite Setup", val: "Managed", icon: <Building2 /> },
                    { label: "Governance", val: "Centralized", icon: <ShieldCheck /> }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center">
                       <div className="text-white/40 mb-3 flex justify-center">{stat.icon}</div>
                       <div className="text-xl font-bold text-white mb-1">{stat.val}</div>
                       <div className="text-[10px] uppercase tracking-widest font-black text-white/30">{stat.label}</div>
                    </div>
                  ))}
               </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* 5. WHY BUSINESSES CHOOSE C9 */}
      <Section bg="gray" className="py-24">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="c9-eyebrow mb-4 !text-[#5D00D6] block">The Commercial Partner</span>
            <H2 className="mb-6 text-slate-900">Why Businesses Choose C9.</H2>
            <p className="c9-body text-lg max-w-2xl mx-auto">
              We aren't just another provider. We are the commercial partner that takes ownership of your technology environment so you can focus on your business.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px w-full max-w-[1240px] mx-auto border border-slate-100 overflow-hidden bg-slate-100">
           {[
             { title: "One Accountable Partner", desc: "Consolidate your internet, voice, and IT into a single point of truth. No more vendor finger-pointing.", val: "1" },
             { title: "Faster Issue Resolution", desc: "Direct access to senior Australian engineers who understand your entire ecosystem. Immediate results.", val: "<1hr" },
             { icon: <ShieldCheck />, title: "Reduced Operational Risk", desc: "Proactive governance that identifies and mitigates risks before they become business failures.", val: "99%" },
             { icon: <Scaling />, title: "Safer Business Growth", desc: "Infrastructure built to scale without inducing friction or technical debt. Move faster with confidence.", val: "Scalable" }
           ].map((item, i) => (
             <FadeIn key={i} delay={i * 0.1} className="bg-white p-12 flex flex-col justify-between group h-full">
                <div>
                  <h3 className="c9-card-title mb-6 group-hover:text-[#5D00D6] transition-colors">{item.title}</h3>
                  <p className="c9-body text-sm leading-relaxed text-slate-500 mb-12">{item.desc}</p>
                </div>
                <div className="mt-auto">
                  <div className="text-[64px] font-medium text-slate-900 leading-none tracking-tighter group-hover:text-[#5D00D6] transition-colors duration-500">
                    {item.val}
                  </div>
                </div>
             </FadeIn>
           ))}
        </div>

        <FadeIn className="mt-24 text-center">
           <div className="max-w-3xl mx-auto p-12 bg-white rounded-2xl border border-slate-100 shadow-2xl shadow-purple-900/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#5D00D6]" />
              <p className="text-2xl font-bold text-slate-900 leading-tight mb-4">
                "Support should feel like ownership — not escalation chains."
              </p>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[12px]">
                The C9 Delivery Guarantee
              </p>
           </div>
        </FadeIn>
      </Section>

      {/* 6. DELIVERY CONFIDENCE AND OPERATIONAL DEPTH */}
      <Section bg="white" className="py-24 border-b border-slate-100 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="left">
             <span className="c9-eyebrow mb-4 !text-[#5D00D6] block">Proven Execution</span>
             <H2 className="mb-8 text-slate-900">Delivery Confidence & Operational Depth.</H2>
             <p className="c9-body mb-10 text-lg">
                Executives need to know that their partner can actually deliver. We don't just promise outcomes; we engineer them through a rigorous framework of planning, migration, and ongoing management.
             </p>
             <div className="space-y-8">
                {[
                  { title: "Rigorous Rollout Planning", desc: "Every project starts with a detailed audit and technical roadmap to ensure zero-day operational readiness." },
                  { title: "Migration Without Disruption", desc: "Transitioning legacy systems should not cause anxiety. We manage cut-overs with engineering precision." },
                  { title: "Ongoing Support Ownership", desc: "We don't just fix problems; we own them until resolution. Our engineers are an extension of your team." },
                  { title: "Escalation Clarity", desc: "No generic support queues. Direct paths to senior technical leadership when you need it most." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                     <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#5D00D6] shrink-0 mt-1 group-hover:bg-[#5D00D6] group-hover:text-white transition-all shadow-sm">
                        <ArrowRight size={18} />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-[18px] mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-[14px] leading-relaxed italic">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2} className="relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 aspect-square group">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2000&auto=format&fit=crop" 
                  alt="Operations management team" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024] via-[#0c1024]/20 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-white/60 shadow-xl">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                         <ShieldCheck size={24} />
                      </div>
                      <div>
                         <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Execution Status</div>
                         <div className="text-[20px] font-bold text-slate-900">Verified Operational Readiness</div>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-6">
                      <div>
                         <div className="text-[11px] font-bold text-slate-500 mb-2 uppercase tracking-widest">SLA Compliance</div>
                         <div className="text-[24px] font-bold text-[#5D00D6] leading-none tracking-tight">100%</div>
                      </div>
                      <div>
                         <div className="text-[11px] font-bold text-slate-500 mb-2 uppercase tracking-widest">Support Access</div>
                         <div className="text-[24px] font-bold text-emerald-600 leading-none tracking-tight">Instant</div>
                      </div>
                   </div>
                </div>
             </div>
          </FadeIn>
        </div>
      </Section>

      {/* 7. BUILT FOR GREENFIELD + BROWNFIELD + ENTERPRISE */}
      <Section bg="gray" className="py-24">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="c9-eyebrow mb-4 !text-[#5D00D6] block">Built for Every Operational Context</span>
            <H2 className="mb-6 text-slate-900">Your Business, Our Solution Path.</H2>
            <p className="c9-body text-lg max-w-2xl mx-auto">
              We understand that the starting point defines the solution. Whether you are building from scratch or cleaning up complexity, we have a path for you.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-[1240px] mx-auto">
          {[
            { 
              title: "Greenfield Growth", 
              persona: "Opening New Sites",
              desc: "You need day-one operational readiness. We coordinate all connectivity, hardware, and onsite setups to ensure your doors open with full functionality and zero delays.",
              focus: ["Rapid Site Deployment", "Centralized Provisioning", "Day-One Support Readiness"],
              icon: <Rocket />
            },
            { 
              title: "Brownfield Consolidation", 
              persona: "Managing Legacy Chaos",
              desc: "You are dealing with vendor sprawl, billing confusion, and support blind spots. We execute a clean migration, consolidating your landscape into one accountable partner.",
              focus: ["Vendor Landscape Audit", "Risk-Managed Migration", "Cost & Complexity Reduction"],
              icon: <RefreshCcw />
            },
            { 
              title: "Enterprise Governance", 
              persona: "Multi-Site Control",
              desc: "You need visibility, compliance, and absolute accountability across a complex multi-state footprint. We provide the infrastructure and senior engineering depth you require.",
              focus: ["Cross-Site Visibility", "Rigorous SLA Enforcement", "Strategic IT Governance"],
              icon: <Building2 />
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-white p-12 rounded-2xl border border-slate-100 shadow-xl shadow-purple-900/5 hover:border-[#5D00D6]/30 transition-all flex flex-col group">
               <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#5D00D6] mb-8 group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
                  {item.icon}
               </div>
               <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#5D00D6] mb-4">{item.persona}</span>
               <H3 className="mb-6 text-2xl text-slate-900">{item.title}</H3>
               <p className="c9-body mb-10 text-[15px] leading-relaxed text-slate-500">
                  {item.desc}
               </p>
               <div className="mt-auto pt-8 border-t border-slate-100 space-y-4">
                  {item.focus.map(f => (
                    <div key={f} className="flex items-center gap-3">
                       <CheckCircle size={14} className="text-[#5D00D6]" />
                       <span className="text-[13px] font-bold text-slate-700">{f}</span>
                    </div>
                  ))}
               </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 8. COMMERCIAL OUTCOMES */}
      <Section bg="white" className="py-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="c9-eyebrow mb-4 !text-[#5D00D6] block">Impact Realized</span>
            <H2 className="mb-6 text-slate-900">Commercially Credible Outcomes.</H2>
            <p className="c9-body text-lg max-w-2xl mx-auto">
              Operational certainty isn't a feeling; it's a measurable result. These are the outcomes we deliver for our partners.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1240px] mx-auto">
          {[
            { label: "Stability", val: "Fewer Outages", desc: "Proactive monitoring and redundant design significantly reduce business-interrupting failures." },
            { label: "Velocity", val: "Faster Recovery", desc: "When issues arise, direct access to senior engineers ensures your business is back online in minutes, not days." },
            { label: "Simplicity", val: "Reduced Vendor Chaos", desc: "One bill, one portal, one phone number for support. We remove the noise of vendor management." },
            { label: "Control", val: "Operational Visibility", desc: "Real-time dashboards across your network and IT health give you the data to lead with confidence." },
            { label: "Resilience", val: "Stronger Continuity", desc: "Backup protocols and disaster recovery plans that actually work when they are needed most." },
            { label: "Growth", val: "Faster Rollout Confidence", desc: "Scale your footprint rapidly knowing your technology partner is ready for the next site before you are." }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-slate-50 p-10 rounded-[32px] border border-slate-100 hover:bg-white hover:border-[#5D00D6]/20 transition-all hover:shadow-2xl hover:shadow-purple-900/5 group">
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#5D00D6] mb-4 group-hover:tracking-[0.35em] transition-all">{item.label}</div>
                <div className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#5D00D6] transition-colors">{item.val}</div>
                <p className="text-slate-500 text-[14px] leading-relaxed italic">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 9. MID-PAGE CTA */}
      <section className="py-24 bg-[#0c1024] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5D00D6]/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/40 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          
          <div className="container mx-auto px-6 md:px-8 max-w-[1240px] text-center relative z-10">
            <FadeIn>
              <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center">
                  <H2 className="!text-white mb-6 text-4xl md:text-6xl !leading-tight">
                      If your operations depend on multiple vendors, unclear ownership, or fragile systems, <span className="text-[#5D00D6]">the risk is already there.</span>
                  </H2>
                  <p className="c9-body !text-white/60 !text-[22px] max-w-2xl mx-auto mb-4 italic">
                    "Let&apos;s review it."
                  </p>
                  <Link href="#consultation">
                      <C9Button className="bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-12 h-16 text-xl font-bold rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-none">
                          Book an Operational Review <ArrowRight className="ml-2 w-6 h-6" />
                      </C9Button>
                  </Link>
                  <p className="text-white/30 text-[12px] font-bold uppercase tracking-[0.3em]">
                    Take Executive Action Today
                  </p>
              </div>
            </FadeIn>
          </div>
      </section>

      {/* 10. CONSULTATION / BOTTOM CTA */}
      <div id="consultation" className="bg-white">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="STRATEGIC AUDIT"
          title="Talk to C9 About Solutions Built Around Business Continuity."
          description="Looking for an accountable partner to own your IT, telco, and operational infrastructure? Book a consultation with our senior solutions engineers."
          formTitle="Request a Solutions Review"
        />
      </div>

      {/* 11. CONTINUITY / FUNNEL NAVIGATION */}
      <ContinueJourney 
        title="Explore the Paths to Operational Certainty."
        description="Every solution is built on a foundation of engineering excellence. Move deeper into the service paths that solve your specific operational problems."
        links={[
          { label: "Managed IT Infrastructure", path: "/managed-it/infrastructure" },
          { label: "Business nbn™ Solutions", path: "/telco/business-nbn" },
          { label: "Enterprise Ethernet", path: "/telco/enterprise-ethernet" },
          { label: "Microsoft Teams Calling", path: "/telco/teams-calling" },
          { label: "Cloud Contact Centre", path: "/telco/contact-centre" },
          { label: "Cybersecurity & Governance", path: "/managed-it/cyber-security" }
        ]}
      />

      <WpFAQAndFeedback 
        faqItems={[
          { q: "How long does a transition to C9 take?", a: "Timelines depend on complexity, but our phased migration approach ensures zero-downtime cut-overs. We build and test your new environment alongside your current one before execution." },
          { q: "Can you manage our existing hardware and vendors?", a: "Yes. Many of our 'Brownfield' clients start by having us take over management of their current stack before we gradually consolidate and simplify their landscape." },
          { q: "Do you support businesses with multiple interstate locations?", a: "Absolutely. We specialize in national multi-site operations, providing uniform support, visibility, and accountability regardless of where your teams or sites are located." }
        ]}
      />

    </main>
  );
}

const Scaling = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
    <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
    <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
    <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
  </svg>
);
