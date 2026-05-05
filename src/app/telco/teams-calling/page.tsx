'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, RefreshCcw, Users, Lock, CheckCircle2, LayoutDashboard, HardDrive, PhoneCall } from 'lucide-react';

import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { WpFAQAndFeedback } from "@/components/wordpress/WpFAQAndFeedback";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { Section } from "@/components/design-system/Section";
import { Button } from "@/components/ui/button";
import { ContinueJourney } from "@/components/sections/ContinueJourney";

const OrbitalVisual = () => (
  <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-transparent overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="absolute w-[180px] h-[180px] rounded-full border border-gray-300/60" />
        <div className="absolute w-[280px] h-[280px] rounded-full border border-gray-300/40" />
        <div className="absolute w-[380px] h-[380px] rounded-full border border-gray-200/50" />
    </div>
    
    <motion.div 
      className="w-24 h-24 rounded-full bg-[#0c1024] flex items-center justify-center shadow-2xl relative z-10 border-[4px] border-white"
      whileHover={{ scale: 1.05, rotate: 5 }}
    >
      <div className="grid grid-cols-2 gap-1.5 w-10 h-10">
        <div className="bg-[#f25022] w-full h-full rounded-sm" />
        <div className="bg-[#7fbb00] w-full h-full rounded-sm" />
        <div className="bg-[#00a1f1] w-full h-full rounded-sm" />
        <div className="bg-[#ffbb00] w-full h-full rounded-sm" />
      </div>
    </motion.div>

    <motion.div className="absolute inset-0 z-20 flex items-center justify-center" animate={{ rotate: [0, 360] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
      {[
        { src: 'https://api.iconify.design/vscode-icons:file-type-word.svg', label: 'Word', degree: 0 },
        { src: 'https://api.iconify.design/vscode-icons:file-type-excel.svg', label: 'Excel', degree: 45 },
        { src: 'https://api.iconify.design/vscode-icons:file-type-powerpoint.svg', label: 'PowerPoint', degree: 90 },
        { src: 'https://api.iconify.design/vscode-icons:file-type-outlook.svg', label: 'Outlook', degree: 135 },
        { src: 'https://api.iconify.design/logos:microsoft-teams.svg', label: 'Teams', degree: 180 },
        { src: 'https://api.iconify.design/vscode-icons:file-type-vscode.svg', label: 'VS Code', degree: 225 },
        { src: 'https://api.iconify.design/logos:microsoft-azure.svg', label: 'Azure', degree: 270 },
        { src: 'https://api.iconify.design/logos:microsoft-edge.svg', label: 'Edge', degree: 315 }
      ].map((app) => (
        <div key={app.label} className="absolute" style={{ transform: `rotate(${app.degree}deg) translateY(-140px)` }}>
          <motion.div className="w-12 h-12 -ml-6 -mt-6 rounded-xl bg-white shadow-xl border border-gray-100 flex items-center justify-center p-2.5 z-30 transition-all hover:scale-110" animate={{ rotate: [-app.degree, -(360 + app.degree)] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
            <img src={app.src} alt={app.label} className="w-full h-full object-contain pointer-events-none select-none" />
          </motion.div>
        </div>
      ))}
    </motion.div>
  </div>
);

export default function TeamsCallingPage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
      
      {/* 1. HERO SECTION */}
      <Section bg="white" className="pt-12 pb-10 md:pt-16 md:pb-12 overflow-hidden border-b border-slate-100 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#5D00D6]/20" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#5D00D6]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-[1240px] relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl relative z-10">
            <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Enterprise Communication</span>
            <h1 className="c9-hero-title text-[#0c1024] mb-6">
              Bring Your Business Calling Into Microsoft Teams — <span className="text-[#5D00D6]">Without Disruption.</span>
            </h1>
            <p className="c9-body mb-8 max-w-xl">
              Changing communication systems creates business risk. Downtime affects your customers first. C9 manages your Teams Calling migration, support, and accountability end-to-end so your operations improve without skipping a beat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link href="#consultation-section" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-8 h-14 text-[14px] font-bold rounded-full shadow-xl shadow-[#5D00D6]/20 transition-all hover:scale-[1.02]">
                  Plan Your Teams Calling Migration 
                </Button>
              </Link>
              <Link href="#consultation-section" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full border-slate-200 text-[#0c1024] hover:bg-slate-50 px-8 h-14 text-[14px] font-bold rounded-full transition-all">
                  Talk to a Specialist
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 p-5 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-[#5D00D6]">
                    <AlertTriangle size={18} />
                </div>
                <p className="c9-body !text-[13px] !mb-0 font-bold !text-slate-700">
                    If your calling system fails during rollout, your customers feel it first. Safe migration is a requirement.
                </p>
            </div>
          </div>

          <div className="relative z-10 w-full h-[400px] lg:h-[500px] flex items-center justify-center">
            <OrbitalVisual />
          </div>
        </div>
      </Section>

      <WpClientTicker />

      {/* 2. RISK SECTION */}
      <Section bg="white" className="py-10 md:py-14">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Operational Continuity</span>
          <h2 className="c9-section-heading mb-4 text-[#0c1024]">
            The Real Risk Is Not Moving — <br className="hidden md:block" />It Is Moving Poorly.
          </h2>
          <p className="c9-body mx-auto max-w-2xl">
            Migration should not feel like a business risk. But poorly handled rollouts damage reputation, frustrate teams, and create internal resistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
          {[
            { 
              title: "Downtime Consequences", 
              desc: "Failed migrations create communication blackouts that immediately affect sales and customer trust.",
              icon: AlertTriangle
            },
            { 
              title: "Disconnected Systems", 
              desc: "Incomplete planning leads to fragmented workarounds and lost call data during the transition.",
              icon: RefreshCcw
            },
            { 
              title: "Adoption Failures", 
              desc: "Without proper onboarding, teams reject the new system, undermining the investment.",
              icon: Users
            },
            { 
              title: "Vendor Chaos", 
              desc: "Managing multiple voice and IT vendors increases support complexity and troubleshooting delays.",
              icon: Lock
            },
            { 
              title: "Support Accountability", 
              desc: "Generic resellers lack the carrier-grade engineering needed to own the outcome when things go wrong.",
              icon: ShieldCheck
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
            <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:bg-white hover:border-[#5D00D6]/20 hover:shadow-xl transition-all text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-5 transform group-hover:scale-110">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="c9-card-title mb-2">{item.title}</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
            </div>
          )})}
        </div>
      </Section>

      {/* 3. HUMAN TRUST BREAK 1 */}
      <section className="relative min-h-[400px] py-14 flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/teams-calling/leadership.png" 
            alt="Business leadership and operations" 
            fill 
            className="object-cover opacity-40 grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-[2s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
          <div className="max-w-3xl">
            <h2 className="c9-section-heading !text-white mb-6">
              Replacing your phone system should reduce operational risk — <span className="text-[#5D00D6]">not create it.</span>
            </h2>
            <p className="c9-body !text-slate-300 !text-[18px] border-l-4 border-[#5D00D6] pl-6">
              The right migration feels controlled, not dangerous. We don't just provide the license; we own the transition and ensure your customer communication never drops.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY MOVE SECTION */}
      <Section bg="gray" className="py-10 md:py-14 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          <div>
            <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Strategic Drivers</span>
            <h2 className="c9-section-heading mb-10 text-[#0c1024]">Why Businesses Move to Teams Calling.</h2>
            <div className="flex flex-col gap-8">
              {[
                { title: "Replacing Outdated Legacy Systems", desc: "Retire expensive, fragmented on-premise hardware and transition to a single, resilient cloud communication environment." },
                { title: "Reducing Vendor Complexity", desc: "Eliminate multiple telephony bills and support contracts by unifying voice into the Microsoft ecosystem you already pay for." },
                { title: "Supporting Workforce Flexibility", desc: "Enable teams to make and receive business calls from any device — office, mobile, or remote — with zero friction." },
                { title: "Improving Operational Control", desc: "Gain centralized visibility over call routing, user provisioning, and performance reporting across the entire organization." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0 mt-1 group-hover:border-[#5D00D6] group-hover:bg-[#5D00D6] transition-all">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="c9-card-title text-[#0c1024] mb-2">{item.title}</h3>
                    <p className="c9-body !text-[14px] !mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[32px] bg-slate-200 overflow-hidden shadow-2xl relative border border-slate-200">
              <Image 
                src="/modern_office_workplace.png" 
                alt="Modern collaborative workplace" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[24px] shadow-2xl border border-slate-100 max-w-sm">
                <div className="w-10 h-10 rounded-full bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] mb-4">
                    <LayoutDashboard size={20} />
                </div>
                <p className="c9-card-title mb-2">Single Environment Control</p>
                <p className="c9-body !text-[13px] !mb-0">Stop managing disjointed systems. Start managing operations with total clarity.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. WHY CHOOSE C9 */}
      <Section bg="white" className="py-10 md:py-14 border-b border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Accountable Partner</span>
          <h2 className="c9-section-heading mb-4 text-[#0c1024]">When things go wrong, who owns it?</h2>
          <p className="c9-body mx-auto max-w-2xl">
            That is the real buying question. Businesses choose C9 because we provide a single point of accountability for migration, delivery, and ongoing support.
          </p>
        </div>

        <div className="bg-white border-y border-gray-200 max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
            {[
              { 
                title: "Safe Migration Planning", 
                desc: "Rigorous assessment and staged rollout strategy to ensure business continuity during transition.",
                metric: "Safe",
                isLast: false
              },
              { 
                title: "Continuity Focus", 
                desc: "Direct access to our carrier-grade voice core ensuring seamless communication for customers.",
                metric: "100%",
                isLast: false
              },
              { 
                title: "Anywhere Support", 
                desc: "Engineering support for office hardware, mobile applications, and remote workforce users.",
                metric: "All",
                isLast: false
              },
              { 
                title: "Accountable Delivery", 
                desc: "One partner. One invoice. Reduced operational friction and simplified communication management.",
                metric: "1",
                isLast: true
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 md:p-10 lg:p-12 flex flex-col items-start text-left min-h-[380px] relative  ${!item.isLast ? 'border-b lg:border-b-0 lg:border-r border-gray-200' : ''}`}
              >
                {/* Title */}
                <h3 className="c9-card-title mb-4 group-hover:text-[#5D00D6] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="c9-body mb-auto max-w-[280px]">
                  {item.desc}
                </p>

                {/* Large metric number */}
                <div className="mt-12">
                  <span className="block text-[64px] md:text-[80px] font-medium text-[#0c1024] leading-none tracking-tighter group-hover:text-[#5D00D6] transition-colors duration-500">
                    {item.metric}
                  </span>
                </div>

                {/* Bottom hover bar */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-[#5D00D6] scale-x-0 group-hover:scale-x-100 duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </Section>


      {/* 7. MIGRATION PROCESS */}
      <Section bg="white" className="py-10 md:py-14 overflow-visible bg-[#F8FAFC]">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Execution Framework</span>
            <h2 className="c9-section-heading mb-4 text-[#0c1024]">Migration Without Business Disruption.</h2>
            <p className="c9-body mx-auto max-w-2xl">
              We remove the biggest objection: the fear of change. Our battle-tested framework ensures a safe transition for enterprise voice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1240px] mx-auto">
              {[
                  { step: "01", title: "Assessment", desc: "Audit of current call flows, hardware requirements, and network readiness." },
                  { step: "02", title: "Planning", desc: "Customized routing logic and strict contingency preparation to protect customer continuity." },
                  { step: "03", title: "Rollout", desc: "Managed cut-over with zero-downtime engineering and precise number migration." },
                  { step: "04", title: "Adoption", desc: "Structured user onboarding, staff training, and accountable post-launch support." }
              ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 p-8 rounded-[24px] bg-white border border-slate-200 hover:border-[#5D00D6] transition-all duration-500 hover:shadow-xl">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0c1024] font-bold text-sm group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                          {item.step}
                      </div>
                      <div>
                        <h3 className="c9-card-title mb-2 group-hover:text-[#5D00D6] transition-colors">{item.title}</h3>
                        <p className="c9-body !text-[13px] !mb-0">{item.desc}</p>
                      </div>
                  </div>
              ))}
          </div>
      </Section>

      {/* 8. SUPPORT & CONTROL */}
      <Section bg="dark" className="py-10 md:py-14 overflow-hidden relative bg-[#0c1024]">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-[#5D00D6]/20 blur-[160px] rounded-full pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10 max-w-[1240px] mx-auto">
          <div className="flex flex-col gap-10">
            <div>
              <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Operational Sovereignty</span>
              <h2 className="c9-section-heading !text-white mb-6">Support, Visibility, and Operational Control.</h2>
              <p className="c9-body !text-slate-400">
                Reduce executive risk with a calling system built for professional management. The best communication systems are the ones your teams never need to think about — because everything simply works.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                {[
                    { title: "Support Ownership", desc: "Direct access to Australian engineers. No vague support language or call center delays.", icon: PhoneCall },
                    { title: "Escalation Clarity", desc: "Rigorous SLAs for uptime and support response times. Immediate accountability.", icon: ShieldCheck },
                    { title: "Reporting Visibility", desc: "Comprehensive call data, usage analytics, and insights inside one unified portal.", icon: LayoutDashboard },
                    { title: "User Management", desc: "Centrally provision users, assign numbers, and manage permissions instantly.", icon: Users },
                    { title: "System Reliability", desc: "Geo-redundant voice core ensuring constant connectivity and fewer vendor dependencies.", icon: RefreshCcw },
                    { title: "Long-Term Confidence", desc: "A robust foundation that scales with your business without continuous friction.", icon: HardDrive }
                ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                    <div key={i} className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-white/5 text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-300 border border-white/10 group-hover:border-[#5D00D6]">
                                <Icon className="w-4 h-4 shrink-0" />
                            </div>
                            <h3 className="c9-card-title !text-white !mb-0">{item.title}</h3>
                        </div>
                        <p className="c9-body !text-slate-400 !text-[13px] !mb-0">{item.desc}</p>
                    </div>
                )})}
            </div>
          </div>

          <div className="relative h-[560px] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/mobile_workforce_executive_control.png" 
                alt="Executive operational control" 
                fill 
                className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024] via-[#0c1024]/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-md bg-[#0c1024]/60 border border-white/10 rounded-[20px]">
                  <p className="c9-body !text-white !text-[16px] italic mb-4">
                    "The right migration feels controlled. We don't just provide the license; we own the transition. Our goal is fewer operational disruptions and stronger executive confidence."
                  </p>
                  <div className="flex items-center gap-3">
                      <div className="w-6 h-px bg-[#5D00D6]" />
                      <span className="c9-eyebrow !text-[#5D00D6] !mb-0">C9 Delivery Engineering</span>
                  </div>
              </div>
          </div>
        </div>
      </Section>

      {/* 10. COMMERCIAL OUTCOMES */}
      <Section bg="white" className="py-10 md:py-14">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Measurable Impact</span>
          <h2 className="c9-section-heading mb-4 text-[#0c1024]">Commercial Outcomes.</h2>
          <p className="c9-body mx-auto max-w-2xl">
            Believable, operational benefits delivered through accountable migration and expert communication management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
          {[
            "Smoother migration outcomes with zero customer disruption",
            "Reduced vendor complexity and simplified support management",
            "Stronger customer communication continuity",
            "Improved workforce flexibility across office, mobile, and remote",
            "Fewer operational disruptions through proactive monitoring",
            "Stronger executive confidence with a single accountable partner"
          ].map((outcome, i) => (
            <div key={i} className="flex gap-4 items-start bg-slate-50 p-6 rounded-[20px] border border-slate-100 hover:border-[#5D00D6]/30 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="w-6 h-6 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-[#5D00D6] group-hover:border-[#5D00D6] transition-colors mt-0.5">
                <CheckCircle2 className="w-3 h-3 text-[#5D00D6] group-hover:text-white transition-colors" />
              </div>
              <span className="c9-body !text-[#0c1024] !font-bold !text-[14px] !mb-0">{outcome}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 11. MID-PAGE CTA */}
      <section className="py-14 bg-[#5D00D6] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-black/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          
          <div className="container mx-auto px-6 md:px-8 max-w-[1240px] text-center relative z-10">
            <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center">
                <h2 className="c9-section-heading !text-white mb-6">
                    If your current calling system is fragmented, outdated, or creating operational friction, migration is not the risk — <span className="text-[#0c1024]">staying there is.</span>
                </h2>
                <p className="c9-body !text-white/90 !text-[18px] max-w-2xl mx-auto mb-8">
                  Let's review your environment and map out a safe transition path.
                </p>
                <Link href="#consultation-section">
                    <Button size="lg" className="bg-white text-[#5D00D6] hover:bg-[#0c1024] hover:text-white px-10 h-14 text-[14px] font-bold rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-none">
                        Book a Teams Calling Migration Review 
                    </Button>
                </Link>
            </div>
          </div>
      </section>

      {/* 12. CONSULTATION / BOTTOM CTA */}
      <div id="consultation-section" className="bg-white py-10">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="TEAMS CALLING CONTINUITY"
          title="Talk to C9 About Teams Calling Built for Business Continuity."
          description="Interested in moving your telephony to Microsoft Teams safely? Our specialists provide seamless migration and accountable engineering support."
          formTitle="Request Teams Calling Proposal"
        />
      </div>

      {/* 13. RELATED SOLUTIONS */}
      <ContinueJourney 
        title="Teams Calling Is One Piece. Here's the Full Stack."
        description="Most businesses that move to Teams Calling also consolidate their broader communication infrastructure. These are the services that complete the picture."
        links={[
            { label: "C9 Phone System", path: "/telco/phone-system" },
            { label: "SIP Trunking Solutions", path: "/telco/sip-trunking" },
            { label: "Cloud Contact Centre", path: "/telco/contact-centre" },
            { label: "Managed IT Infrastructure", path: "/managed-it/infrastructure" }
        ]}
      />

      <WpFAQAndFeedback />

    </main>
  );
}
