'use client';

import React from 'react';
import Link from 'next/link';
import { PhoneCall, PhoneOff, AlertTriangle, TrendingUp, BarChart3, Users, ShieldCheck, RefreshCcw, Zap, Globe, Activity, Headphones, MessageSquare, Layers, Settings, CheckCircle2, Clock, Building2, Monitor, CheckCircle, HeartHandshake, UserCheck, PieChart, Scale, ServerCog, Signal, ShieldAlert } from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { ContinueJourney } from '@/components/sections/ContinueJourney';
import { Section } from '@/components/design-system/Section';
import { Button } from '@/components/ui/button';

export default function InboundServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION */}
      <Section bg="white" className="pt-12 pb-10 md:pt-16 md:pb-12 overflow-hidden border-b border-slate-100 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-[120px] -mr-32 -mt-32 opacity-60 pointer-events-none" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
               <PhoneCall size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0 !text-[#5D00D6]">Managed Inbound Call Flow</span>
            </div>

            <h1 className="c9-hero-title mb-6 !leading-[1.1]">
               Every Missed Call Is a <span className="text-[#5D00D6]">Missed Opportunity.</span>
            </h1>

            <p className="c9-body mb-8 max-w-[620px] text-lg">
               C9 ensures every customer reaches the right person quickly through managed inbound numbers (1300/1800), smart routing, and overflow handling. We provide total visibility into your call queues and missed-call prevention.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
               <Link href="#consultation-section" className="w-full sm:w-auto">
                 <Button size="lg" className="w-full bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-8 h-14 text-[14px] font-bold rounded-full shadow-xl shadow-purple-900/20 transition-all">
                   Review My Customer Call Flow 
                 </Button>
               </Link>
               <Link href="#consultation-section" className="w-full sm:w-auto">
                 <Button variant="outline" size="lg" className="w-full border-slate-200 text-[#0c1024] hover:bg-slate-50 px-8 h-14 text-[14px] font-bold rounded-full transition-all">
                   Set Up 1300 / 1800 Numbers
                 </Button>
               </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
               {['Universal Accessibility', 'Intelligent Routing', 'Response Continuity', 'Real-Time Visibility'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                     {item}
                  </div>
               ))}
            </div>
            
            <div className="mt-8 p-5 bg-slate-50 border border-slate-100 rounded-2xl max-w-[500px]">
              <div className="flex gap-3 items-start">
                 <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 mt-0.5 text-[#5D00D6]">
                    <ShieldAlert size={18} />
                 </div>
                 <p className="c9-body !text-[13px] !mb-0 font-bold !text-slate-700">
                   "Customers rarely complain about the calls you never answered. They simply call someone else. Accessibility is your brand's first impression."
                 </p>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/5]">
                <img
                   src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop"
                   alt="Australian customer service team handling inbound calls with clear queue visibility"
                   className="w-full h-full object-cover object-center duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-xl">
                   <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                            <ShieldCheck size={20} />
                         </div>
                         <div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none mb-1">Response Quality</div>
                            <div className="text-[16px] font-bold text-slate-900 leading-none">99.8% Call Success</div>
                         </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   </div>
                   <div className="grid grid-cols-2 gap-6">
                      <div>
                         <div className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-widest">Avg Wait Time</div>
                         <div className="text-[18px] font-bold text-[#5D00D6] leading-none tracking-tight">14 Seconds</div>
                      </div>
                      <div>
                         <div className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-widest">Routing Status</div>
                         <div className="text-[18px] font-bold text-emerald-600 leading-none tracking-tight">Protected</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      <WpClientTicker />

      {/* 2. THE BUSINESS PROBLEM */}
      <Section bg="gray" className="border-y border-slate-100">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="c9-eyebrow mb-4 block text-rose-600">The Revenue Risk</span>
          <h2 className="c9-section-heading mb-4 text-[#0c1024]">Is poor call handling costing you customers?</h2>
          <p className="c9-body text-lg mx-auto">
            Your inbound call flow is a critical management lever. When your handling is opaque or fragmented, you lose visibility into customer demand and revenue opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <PhoneOff />, title: "Missed Calls", text: "Every unanswered call is a potential lead walking away. Without tracking and overflow logic, you never know what you've lost." },
            { icon: <AlertTriangle />, title: "Poor Routing", text: "Long wait times and misrouted calls damage brand equity faster than any other touchpoint. Accessibility is trust." },
            { icon: <Signal />, title: "No Visibility", text: "If you can't see your call volumes, abandonment rates, and peak periods, you cannot manage your resources effectively." },
            { icon: <Globe />, title: "Multi-Site Gaps", text: "Distributing calls across multiple sites and remote workers shouldn't be complex. Legacy systems create isolation." },
            { icon: <TrendingUp />, title: "Inbound Bottlenecks", text: "Manual call handling slows your business down. Without intelligent automation, growth is limited by staff capacity." },
            { icon: <ShieldAlert />, title: "No Support Ownership", text: "When everyone is responsible for answering, no one is. Accountability requires clear routing and escalation logic." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:border-[#5D00D6]/20">
               <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110">
                  {item.icon}
               </div>
               <h4 className="font-bold text-slate-900 text-[17px] mb-3">{item.title}</h4>
               <p className="text-slate-500 text-[14px] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. TRUST BREAK */}
      <section className="relative min-h-[400px] py-14 flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop" 
            alt="Business operations and communication" 
            className="w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-[2s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
          <div className="max-w-3xl">
            <span className="c9-eyebrow !text-[#5D00D6] mb-4 block">Accessibility Is Trust</span>
            <h2 className="c9-section-heading !text-white mb-6">
              Your customers should never have to work hard to reach your business.
            </h2>
            <p className="c9-body !text-slate-300 !text-[18px] border-l-4 border-[#5D00D6] pl-6">
              "C9 replaces generic numbers with intelligent customer access systems. We ensure your business is reachable, accountable, and scalable from day one."
            </p>
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC RATIONALE */}
      <Section bg="gray" className="py-10 md:py-14">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Customer Reachability</span>
            <h2 className="c9-section-heading mb-10 text-[#0c1024]">The Impact of Managed Inbound Routing.</h2>
            <div className="flex flex-col gap-8">
              {[
                { title: "Universal Customer Accessibility", desc: "A national business presence that makes it easy for customers to find and reach you from anywhere in the country." },
                { title: "Eliminating Manual Errors", desc: "Replacing fragile manual routing with intelligent, automated call flow that never misses a beat or a customer query." },
                { title: "Cross-Team Synchronicity", desc: "Seamlessly routing calls between departments, sites, and remote teams based on real-time availability and skills." },
                { title: "Operational Scalability", desc: "A foundation that scales instantly as you add new locations, brands, or team members without infrastructure friction." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0 mt-1 group-hover:border-[#5D00D6] group-hover:bg-[#5D00D6] transition-all">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-[17px] mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-[14px] leading-relaxed !mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sticky top-32">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl relative border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop" 
                alt="Manager reviewing inbound call dashboard showing wait time, answered calls, and overflow performance" 
                className="w-full h-full object-cover duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl border border-slate-50 max-w-sm">
                <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] mb-4">
                    <Monitor size={20} />
                </div>
                <p className="font-bold text-slate-900 text-[17px] mb-2">Single Environment Control</p>
                <p className="text-slate-500 text-[13px] leading-relaxed !mb-0">Stop managing disjointed systems. Start managing operations with total clarity and visibility.</p>
            </div>
          </div>
          </div>
        </div>
      </Section>

      {/* 5. THE C9 APPROACH */}
      <Section bg="white">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Our Inbound Standard</span>
            <h2 className="c9-section-heading text-[#0c1024]">If customers cannot reach you easily, they will reach someone else.</h2>
          </div>
          <Link href="#consultation-section" className="shrink-0">
             <Button size="lg" className="rounded-full bg-[#5D00D6] text-white hover:bg-[#4d00b3] px-8 h-14 text-[14px] font-bold shadow-xl transition-all">
                 Audit Customer Access 
             </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Layers />, title: "Managed Inbound Routing", text: "Complex call handling simplified. Route by time of day, location, skill-set, or availability with ease." },
            { icon: <ShieldCheck />, title: "Overflow Handling", text: "Smart logic ensures that if your primary team is busy, the call is captured elsewhere. No more busy tones." },
            { icon: <Activity />, title: "Call Visibility & Reporting", text: "Full transparency into your call flow. Monitor volumes and performance with intuitive live dashboards." },
            { icon: <Building2 />, title: "Inbound Numbers (13/1300)", text: "Look like a national leader with 13, 1300, or 1800 numbers that centralize your brand identity." },
            { icon: <RefreshCcw />, title: "Managed Voice Support", text: "One bill, one portal, one accountable partner. No more chasing multiple providers for simple changes." },
            { icon: <Headphones />, title: "End-to-End Ownership", text: "Direct access to local C9 engineers who understand your business-critical communication logic." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#5D00D6] mb-8 shadow-sm group-hover:scale-110 duration-500">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
              <p className="text-slate-500 text-[15px] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5.5. WHERE INBOUND SERVICES MATTER MOST */}
      <Section bg="gray" className="py-16 lg:py-24 border-y border-slate-100">
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Industry Focus</span>
          <h2 className="c9-section-heading text-[#0c1024]">Where inbound services matter most</h2>
          <p className="c9-body text-lg mt-6">
            Managed inbound routing is critical for businesses where customer access directly impacts revenue and service delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
          {[
            { icon: <Building2 />, title: "Retail & Franchise Groups", text: "Consistent national presence with smart routing to local stores based on caller location." },
            { icon: <Clock />, title: "Healthcare & Appointment-Based", text: "Ensuring zero missed calls for bookings with automated overflow and after-hours routing." },
            { icon: <Scale />, title: "Real Estate & Professional Services", text: "Professional call handling that ensures high-value enquiries are always answered." },
            { icon: <Globe />, title: "Multi-Site Operations", text: "One national number managing complex call flows across multiple Australian locations." },
            { icon: <Users />, title: "Support & Service Teams", text: "Optimised call queues and IVRs to reduce wait times and improve resolution speed." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
               <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-6">
                  {item.icon}
               </div>
               <h4 className="font-bold text-slate-900 text-[17px] mb-3">{item.title}</h4>
               <p className="text-slate-500 text-[14px] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. OPERATIONAL MATURITY (VISIBILITY) */}
      <Section bg="dark" className="relative text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5D00D6] rounded-full blur-[160px] opacity-20 -mr-64 -mt-64 pointer-events-none" />
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center relative z-10">
          <div>
            <span className="c9-eyebrow mb-4 block !text-[#a56eff]">Inbound Visibility</span>
            <h2 className="c9-section-heading !text-white mb-8">Missed calls shouldn't be invisible.</h2>
            <p className="c9-body text-white/70 text-lg mb-8">
              Stop managing your customer experience in the dark. C9 provides the reporting and performance insights needed to optimize staffing, eliminate bottlenecks, and fix missed calls.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {[
                { title: "Reporting Insights", desc: "Detailed analytics on call patterns, peak times, and resolution speed.", icon: BarChart3 },
                { title: "Escalation Clarity", desc: "Defined logic that ensures complex calls move to experts automatically.", icon: ShieldCheck },
                { title: "Overflow Handling", desc: "Smart rerouting to ensure no customer is left waiting during surges.", icon: RefreshCcw },
                { title: "Performance Dashboards", desc: "Real-time visibility for team leads to manage resources dynamically.", icon: Monitor }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex flex-col gap-3">
                     <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-white/5 text-[#a56eff] group-hover:bg-[#5D00D6] group-hover:text-white transition-all duration-300 border border-white/10 group-hover:border-[#5D00D6]">
                           <Icon className="w-4 h-4 shrink-0" />
                        </div>
                        <h3 className="font-bold text-white text-[16px] mb-0">{item.title}</h3>
                     </div>
                     <p className="text-white/40 text-[13px] leading-relaxed !mb-0">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative">
                <div className="flex items-center justify-between mb-10">
                   <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[12px] font-bold text-white/40 uppercase tracking-widest">Live Call Dashboard</span>
                   </div>
                   <div className="text-[12px] font-bold text-[#a56eff]">Active Calls: 12</div>
                </div>
                
                <div className="space-y-6">
                   {[
                     { label: "Calls Answered", val: "142", trend: "+12%", color: "text-emerald-400" },
                     { label: "Avg. Wait Time", val: "14s", trend: "-2.4s", color: "text-[#a56eff]" },
                     { label: "Abandoned Calls", val: "1", trend: "0%", color: "text-white/20" }
                   ].map((stat, i) => (
                     <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-3xl border border-white/10">
                        <div>
                           <div className="text-[11px] font-bold text-white/40 uppercase mb-1">{stat.label}</div>
                           <div className="text-2xl font-bold text-white">{stat.val}</div>
                        </div>
                        <div className={`text-[12px] font-black ${stat.color}`}>{stat.trend}</div>
                     </div>
                   ))}
                </div>

                <div className="mt-8 p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
                   <p className="text-white/60 text-[13px] leading-relaxed italic !mb-0">
                      "Visibility into customer wait times allows for dynamic resource reallocation, protecting both staff and customer experience."
                   </p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 7. EXECUTION FRAMEWORK (MIGRATION) */}
      <Section bg="white" className="border-b border-slate-100">
        <div className="max-w-3xl mb-16">
          <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Managed Migration</span>
          <h2 className="c9-section-heading text-[#0c1024]">Transitioning Your Numbers with Zero Downtime.</h2>
          <p className="c9-body text-lg mt-6">
            Transitioning your inbound numbers and routing logic shouldn't be high-risk. C9 manages the entire setup and porting process with engineering precision to ensure zero downtime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Assessment", desc: "We map your current call flow and design an optimized routing architecture for your business." },
            { step: "02", title: "Number Porting", desc: "C9 manages the porting from your existing provider with strict continuity and verification." },
            { step: "03", title: "Routing Transition", desc: "A phased transition of logic ensuring every call is captured and routed correctly during move." },
            { step: "04", title: "Adoption & Support", desc: "Full team training and post-launch engineering support to ensure total operational confidence." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-4 p-8 rounded-[24px] bg-slate-50 border border-slate-200 hover:border-[#5D00D6] transition-all duration-500 hover:shadow-xl">
               <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#0c1024] font-bold text-sm group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                  {item.step}
               </div>
               <div>
                 <h3 className="font-bold text-slate-900 text-[17px] mb-2 group-hover:text-[#5D00D6] transition-colors">{item.title}</h3>
                 <p className="text-slate-500 text-[13px] leading-relaxed !mb-0">{item.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. COMMERCIAL OUTCOMES */}
      <Section bg="gray">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Proven Results</span>
          <h2 className="c9-section-heading mb-4 text-[#0c1024]">Commercially Credible Outcomes.</h2>
          <p className="c9-body text-lg mx-auto">
            Inbound infrastructure isn't just about answering phones—it's about driving commercial efficiency and customer loyalty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
             { icon: <ShieldCheck size={24} />, title: "Revenue Protection", text: "Capture more leads by ensuring every inbound query hits a live person or smart overflow. No more lost leads." },
             { icon: <Users size={24} />, title: "Customer Experience", text: "Create a reliable, professional front door for your business that customers trust and value." },
             { icon: <TrendingUp size={24} />, title: "Operational Efficiency", text: "Use data to staff peaks accurately and route complex queries to the right experts faster." },
             { icon: <Globe size={24} />, title: "National Brand Identity", text: "Centralize your business presence with consistent national numbering and routing." },
             { icon: <RefreshCcw size={24} />, title: "Simplified Management", text: "A single accountable partner removes the friction of juggling multiple carriers and porting logic." },
             { icon: <ShieldAlert size={24} />, title: "Reduced Business Risk", text: "Retire fragmented legacy systems that create single points of failure and customer friction." }
           ].map((stat, i) => (
             <div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 hover:border-[#5D00D6]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#5D00D6]/10">
                <div className="text-[#5D00D6] mb-4 group-hover:scale-110 duration-300">{stat.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{stat.title}</h4>
                <p className="text-slate-500 text-[14px] leading-relaxed">{stat.text}</p>
             </div>
           ))}
        </div>
      </Section>

      <WpCaseStudies 
        title="Impact Realised Through Better Access."
        eyebrow="INBOUND SUCCESS"
        articles={[
          {
            tag: 'RETAIL TRANSITION',
            title: 'National Retailer Stabilisation',
            desc: 'Successfully reduced 4 fragmented vendors into 1 managed partner. Achieved 99.9% uptime with zero downtime.',
            img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
            videoText: 'Retail Stabilisation',
            href: '/case-studies/multi-site-retail-stabilisation'
          },
          {
            tag: 'LEGAL FIRM TAKEOVER',
            title: 'Wilson & Co Proactive Migration',
            desc: 'Took over failing on-premise infrastructure for a high-volume law firm. Improved response time by 60%.',
            img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
            videoText: 'Legal Firm Takeover',
            href: '/case-studies/financial-vendor-consolidation'
          }
        ]}
      />

      {/* 9. MID-PAGE CTA */}
      <section className="py-14 bg-[#5D00D6] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          
          <div className="container mx-auto px-6 md:px-8 max-w-[1240px] text-center relative z-10">
            <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center">
                <h2 className="c9-section-heading !text-white mb-6">
                    If customers are struggling to reach your business, the problem is already <span className="text-[#0c1024]">bigger than missed calls.</span>
                </h2>
                <p className="c9-body !text-white/90 !text-[18px] max-w-2xl mx-auto mb-8">
                  Let's review your inbound environment and map out a path to total accessibility.
                </p>
                <Link href="#consultation-section">
                    <Button size="lg" className="bg-white text-[#5D00D6] hover:bg-[#0c1024] hover:text-white px-10 h-14 text-[14px] font-bold rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-none">
                        Book an Inbound Call Flow Review 
                    </Button>
                </Link>
            </div>
          </div>
      </section>

      {/* 10. RELATED SOLUTIONS */}
      <ContinueJourney 
        title="Complete Your Voice Stack."
        description="Reliable communication requires complete infrastructure control. Explore the solutions that integrate seamlessly with your inbound systems."
        links={[
          { label: "Contact Centre Solutions", path: "/telco/contact-centre" },
          { label: "Microsoft Teams Calling", path: "/telco/teams-calling" },
          { label: "SIP Trunking Infrastructure", path: "/telco/sip-trunking" },
          { label: "Managed IT Infrastructure", path: "/managed-it/infrastructure" }
        ]}
      />

      <div id="consultation-section" className="bg-white">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="CALL FLOW AUDIT"
          title="Fix Your Inbound Routing & Missed Calls"
          description="Book a technical strategy session with our senior team to review your current call flows and design a zero-disruption transition."
          formTitle="Review My Customer Call Flow"
        />
      </div>

      <WpFAQAndFeedback 
        faqItems={[
          { q: "Can we keep our existing 1300/1800 numbers?", a: "Yes. We manage the entire number porting process from your current provider, ensuring you maintain complete continuity with your customers without any interruption." },
          { q: "How do you guarantee zero downtime during transition?", a: "We build and test your new routing logic alongside your existing setup. The transition only happens once everything is verified, with active fallback protocols in place." },
          { q: "Can we route calls based on the caller's location?", a: "Absolutely. Our intelligent routing allows you to direct calls to the nearest office, specific state-based teams, or even based on the time of day and staff availability." },
          { q: "What happens if our main office is busy or offline?", a: "We implement robust overflow logic and failover routing. Calls can be automatically redirected to other sites, mobile teams, or professional answering services so no customer is left waiting." }
        ]}
      />
    </main>
  );
}
