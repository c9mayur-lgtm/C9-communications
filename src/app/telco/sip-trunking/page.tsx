'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Users, ShieldCheck, Activity, ArrowRight, CheckCircle2, 
  Layers, Building2, TrendingUp, Monitor, RefreshCcw, 
  ShieldAlert, PhoneCall, AlertTriangle, PhoneOff, Scale, ServerCog
} from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { ContinueJourney } from '@/components/sections/ContinueJourney';
import { Section } from '@/components/design-system/Section';
import { Button } from '@/components/ui/button';

export default function SipTrunkingPage() {
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
               <ServerCog size={13} className="text-[#5D00D6]" />
               <span className="c9-eyebrow !mb-0 !text-[#5D00D6]">Voice Infrastructure</span>
            </div>

            <h1 className="c9-hero-title mb-6 !leading-[1.1]">
               Business Calling Infrastructure Built for <span className="text-[#5D00D6]">Reliability and Growth.</span>
            </h1>

            <p className="c9-body mb-8 max-w-[620px] text-lg">
               Outdated calling infrastructure creates operational risk, downtime, and vendor complexity. C9 delivers modern business calling infrastructure with full accountability, zero-disruption migration, and support ownership. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
               <Link href="#consultation" className="w-full sm:w-auto">
                 <Button size="lg" className="w-full bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-8 h-14 text-base font-bold rounded-full shadow-xl shadow-purple-900/20 transition-all">
                   Review Your Current Infrastructure <ArrowRight className="ml-2 w-5 h-5" />
                 </Button>
               </Link>
               <Link href="#consultation" className="w-full sm:w-auto">
                 <Button variant="outline" size="lg" className="w-full border-slate-200 text-[#0c1024] hover:bg-slate-50 px-8 h-14 text-base font-bold rounded-full transition-all">
                   Talk to a SIP Specialist
                 </Button>
               </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
               {['Business Continuity', 'Zero-Disruption Migration', 'Single Vendor Control', 'Accountable Support'].map((item) => (
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
                   "Complex phone systems should not require complex vendor management. Executive clarity requires a single accountable partner."
                 </p>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="relative rounded-[48px] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/5] group">
                <img
                   src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop"
                   alt="IT Executive reviewing infrastructure performance"
                   className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-xl">
                   <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                            <ShieldCheck size={20} />
                         </div>
                         <div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none mb-1">Infrastructure Control</div>
                            <div className="text-[16px] font-bold text-slate-900 leading-none">Voice Continuity Active</div>
                         </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   </div>
                   <div className="grid grid-cols-2 gap-6">
                      <div>
                         <div className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-widest">Uptime Target</div>
                         <div className="text-[18px] font-bold text-[#5D00D6] leading-none tracking-tight">99.99%</div>
                      </div>
                      <div>
                         <div className="text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-widest">System Status</div>
                         <div className="text-[18px] font-bold text-emerald-600 leading-none tracking-tight">Protected</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      <WpClientTicker />

      {/* 2. THE COST OF LEGACY */}
      <Section bg="gray" className="border-y border-slate-100">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="c9-eyebrow mb-4 block text-rose-600">Infrastructure Risk</span>
          <h2 className="c9-section-heading mb-4 text-[#0c1024]">The Cost of Legacy Calling Infrastructure.</h2>
          <p className="c9-body text-lg mx-auto">
            When telephony is treated as a utility rather than business-critical infrastructure, organizations inherit hidden operational risks. Outdated systems and fragmented vendors expose your business to downtime and customer friction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <PhoneOff />, title: "Downtime Risk", text: "Legacy hardware and end-of-life networks create single points of failure. When the system drops, communication stops." },
            { icon: <Scale />, title: "Growth Bottlenecks", text: "Adding new locations or scaling users shouldn't require weeks of provisioning or complex hardware upgrades." },
            { icon: <Layers />, title: "Vendor Confusion", text: "When you rely on multiple providers for hardware, carriage, and support, accountability vanishes during an outage." },
            { icon: <AlertTriangle />, title: "Inbound Reliability", text: "Unreliable routing directly impacts your ability to service clients. Your telephony must not become an operational bottleneck." },
            { icon: <RefreshCcw />, title: "Operational Friction", text: "Managing ISDN constraints and fragmented platforms drains IT resources and distracts from strategic work." },
            { icon: <ShieldAlert />, title: "Security & Compliance", text: "Older systems lack modern security protocols and redundancy, leaving communications exposed to failure." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:border-[#5D00D6]/20">
               <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 mb-6">
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
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2000&auto=format&fit=crop" 
            alt="Business leadership and operations" 
            className="w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-[2s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
          <div className="max-w-3xl">
            <span className="c9-eyebrow !text-[#5D00D6] mb-4 block">Accountability Required</span>
            <h2 className="c9-section-heading !text-white mb-6">
              Customers notice failures before leadership sees the reports.
            </h2>
            <p className="c9-body !text-slate-300 !text-[18px] border-l-4 border-[#5D00D6] pl-6">
              "Your telephony should protect operations — not create daily uncertainty. When things go wrong, someone needs to own it. We take absolute accountability for your calling infrastructure."
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY BUSINESSES MOVE */}
      <Section bg="white" className="border-b border-slate-100">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
          <div>
             <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Infrastructure Modernization</span>
             <h2 className="c9-section-heading mb-6 text-[#0c1024]">Why Businesses Move to SIP Trunking.</h2>
             <p className="c9-body mb-10 text-lg">
                Replacing legacy ISDN and outdated PBX systems is a strategic necessity. IT leaders upgrade to SIP Trunking to guarantee continuity, simplify management, and eliminate infrastructure silos.
             </p>
             
             <div className="space-y-6">
                {[
                  { title: "Escaping Legacy Hardware", text: "Removing dependence on aging ISDN lines and physical copper networks that restrict agility." },
                  { title: "Reducing Vendor Dependency", text: "Consolidating voice traffic through a single enterprise-grade pathway, eliminating billing and support fragmentation." },
                  { title: "Scaling Without Limits", text: "Supporting rapid business growth. Add new lines and locations instantly without complex provisioning." },
                  { title: "Ensuring System Continuity", text: "Built-in redundancy and failover routing so your business keeps operating even during local network disruptions." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                     <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#5D00D6] shrink-0 mt-1 shadow-sm">
                        <ArrowRight size={14} />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-[16px] mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-[14px] leading-relaxed">{item.text}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="relative">
             <div className="bg-[#0c1024] rounded-[48px] p-10 lg:p-16 border border-white/5 relative overflow-hidden text-white shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
                <div className="relative z-10">
                   <h3 className="text-2xl font-bold mb-8 text-center">Infrastructure Shift</h3>
                   <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Hardware", val: "Decoupled", icon: <Layers size={18}/> },
                        { label: "Vendors", val: "Consolidated", icon: <ShieldCheck size={18}/> },
                        { label: "Continuity", val: "Automated", icon: <RefreshCcw size={18}/> },
                        { label: "Scaling", val: "Instant", icon: <TrendingUp size={18}/> }
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
          </div>
        </div>
      </Section>

      {/* 5. MIGRATION */}
      <Section bg="dark" className="relative text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5D00D6 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center relative z-10">
          <div>
             <span className="c9-eyebrow !text-[#a56eff] mb-4 block">Risk Mitigation</span>
             <h2 className="c9-section-heading !text-white mb-6">
                Migration Without Operational Disruption.
             </h2>
             <p className="c9-body text-white/70 mb-10 text-lg">
                Replacing core communication infrastructure should not induce anxiety. We execute rigorous migration plans to ensure that your business stays connected at every phase. This can be done safely.
             </p>
             
             <div className="space-y-8">
                {[
                  { icon: <Monitor />, title: "Thorough Assessment", text: "We audit your current PBX, hardware, and network to build a bespoke migration roadmap." },
                  { icon: <BarChart3 />, title: "Number Continuity", text: "Complex porting managed seamlessly so you never lose control of your existing business numbers." },
                  { icon: <RefreshCcw />, title: "Zero-Downtime Rollout", text: "Strategic cutovers paired with robust fallback planning to eliminate operational blackout periods." },
                  { icon: <Users />, title: "Post-Migration Support", text: "Dedicated onboarding and rapid-response support during the transition to ensure complete confidence." }
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
          </div>

          <div className="relative">
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[48px] p-10 lg:p-12 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[12px] font-bold text-emerald-500 uppercase tracking-widest">Migration Status</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Audit Phase</div>
                      <div className="text-xl font-bold text-emerald-400">Complete</div>
                   </div>
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Number Porting</div>
                      <div className="text-xl font-bold text-emerald-400">Verified</div>
                   </div>
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Fallback Path</div>
                      <div className="text-xl font-bold text-emerald-400">Active</div>
                   </div>
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Cutover</div>
                      <div className="text-xl font-bold text-[#a56eff]">Zero Disruption</div>
                   </div>
                </div>

                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
                   <p className="text-white/60 text-[13px] leading-relaxed italic">
                      "Confidence during a telephony upgrade comes from rigorous fallback planning, not just hope."
                   </p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 6. SUPPORT & VISIBILITY */}
      <Section bg="white" className="border-b border-slate-100">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-6">
              {[
                { label: "Accountability", val: "Unified", icon: <ShieldCheck /> },
                { label: "Operations", val: "Visible", icon: <Monitor /> },
                { label: "Dependencies", val: "Removed", icon: <Layers /> },
                { label: "Continuity", val: "Assured", icon: <Activity /> }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:border-[#5D00D6]/20 transition-all hover:bg-white hover:shadow-xl group">
                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#5D00D6] mb-4 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                       {stat.icon}
                    </div>
                    <div className="text-xl font-bold text-slate-900 mb-1 leading-none tracking-tight">{stat.val}</div>
                    <div className="text-slate-500 font-bold text-[11px] uppercase tracking-widest leading-tight">{stat.label}</div>
                </div>
              ))}
          </div>

          <div className="order-1 lg:order-2">
             <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Operational Stability</span>
             <h2 className="c9-section-heading mb-6 text-[#0c1024]">Support, Visibility, and Long-Term Control.</h2>
             <p className="c9-body mb-6 text-lg text-slate-600 italic font-medium">
                The best infrastructure is the one your business never has to think about. Because it simply works.
             </p>
             <p className="c9-body mb-10 text-lg">
                We reduce executive and IT risk perception by delivering clear escalation paths, real-time operational visibility, and unified system reliability.
             </p>
             <ul className="space-y-5">
                {[
                  { t: 'Support Ownership', d: 'When you call for support, you speak to the engineers who manage the network.' },
                  { t: 'Escalation Clarity', d: 'Defined SLA enforcement so your business never waits in a generic queue.' },
                  { t: 'Fewer Vendor Dependencies', d: 'A streamlined provider relationship that eliminates billing and technical confusion.' }
                ].map((item, i) => (
                   <li key={i} className="flex gap-4">
                     <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                       <CheckCircle2 size={16} className="text-emerald-600" />
                     </div>
                     <div>
                       <div className="text-[16px] font-bold text-slate-900 mb-1">{item.t}</div>
                       <div className="text-[14px] text-slate-500 leading-relaxed">{item.d}</div>
                     </div>
                   </li>
                ))}
             </ul>
          </div>
        </div>
      </Section>

      {/* 7. COMMERCIAL OUTCOMES */}
      <Section bg="gray">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="c9-eyebrow mb-4 block !text-[#5D00D6]">Proven Results</span>
          <h2 className="c9-section-heading mb-4 text-[#0c1024]">Commercially Credible Outcomes.</h2>
          <p className="c9-body text-lg mx-auto">
            Moving to our SIP infrastructure delivers measurable resilience and simplifies your technology footprint.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
             { icon: <ShieldCheck size={24} />, title: "Stronger Uptime Confidence", text: "Redundant pathways ensure consistent calling capabilities, protecting your operations." },
             { icon: <Layers size={24} />, title: "Simplified Management", text: "A single accountable partner removes the friction of juggling hardware vendors and carriers." },
             { icon: <TrendingUp size={24} />, title: "Scalability for Growth", text: "Easily expand capacity to accommodate new offices and growing teams without delays." },
             { icon: <RefreshCcw size={24} />, title: "Improved Continuity", text: "Proactive routing control ensures customer interactions survive localized outages." },
             { icon: <PhoneCall size={24} />, title: "Communication Reliability", text: "High-definition voice quality guarantees professional client interactions." },
             { icon: <AlertTriangle size={24} />, title: "Fewer Disruptions", text: "By retiring legacy ISDN, you remove the most common source of business communication failure." }
           ].map((stat, i) => (
             <div key={i} className="bg-white border border-slate-100 rounded-[32px] p-8 hover:border-[#5D00D6]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#5D00D6]/10 group">
                <div className="text-[#5D00D6] mb-4">{stat.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{stat.title}</h4>
                <p className="text-slate-500 text-[14px] leading-relaxed">{stat.text}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* 8. MID-PAGE CTA */}
      <section className="py-14 bg-[#5D00D6] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          
          <div className="container mx-auto px-6 md:px-8 max-w-[1240px] text-center relative z-10">
            <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center">
                <h2 className="c9-section-heading !text-white mb-6">
                    If your current telephony setup is outdated, fragmented, or creating operational friction, staying there is the real risk.
                </h2>
                <p className="c9-body !text-white/90 !text-[18px] max-w-2xl mx-auto mb-8">
                  Let's review it.
                </p>
                <Link href="#consultation">
                    <Button size="lg" className="bg-white text-[#5D00D6] hover:bg-[#0c1024] hover:text-white px-10 h-14 text-base font-bold rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-none">
                        Book a SIP Infrastructure Review <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
            </div>
          </div>
      </section>

      {/* 9. RELATED SOLUTIONS */}
      <ContinueJourney 
        title="Voice is Just the Foundation. See the Full Stack."
        description="Reliable communication requires complete infrastructure control. Explore the solutions that integrate seamlessly."
        links={[
          { label: "Microsoft Teams Calling", path: "/telco/teams-calling" },
          { label: "C9 Phone System", path: "/telco/phone-system" },
          { label: "Inbound Services", path: "/telco/inbound-services" },
          { label: "Managed IT Infrastructure", path: "/managed-it/infrastructure" }
        ]}
      />

      <div id="consultation" className="bg-white">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="INFRASTRUCTURE AUDIT"
          title="Ready to modernize your voice delivery?"
          description="Book a technical strategy session with our senior engineers to review your legacy setup and plan a zero-disruption migration."
          formTitle="Request a SIP Infrastructure Review"
        />
      </div>

      <WpFAQAndFeedback 
        faqItems={[
          { q: "Can we keep our existing phone numbers?", a: "Yes. We manage the entire number porting process, ensuring you maintain complete continuity with your customers without interruption." },
          { q: "How do you guarantee zero downtime during migration?", a: "We build and test your new SIP pathways alongside your existing infrastructure. Cutover only happens once everything is verified, with active fallback protocols in place." },
          { q: "Does this mean we can get rid of our ISDN lines?", a: "Absolutely. Migrating to SIP Trunking allows you to retire costly legacy ISDN hardware and run your communications over high-performance IP networks." }
        ]}
      />
    </main>
  );
}
