'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowRight, CheckCircle, ShieldCheck, Zap, Monitor, Lock, Cloud, 
  PhoneCall, Users, MessageSquare, Server, Database, Globe, Layers, 
  Share2, ClipboardCheck, Check, Laptop, Network, Briefcase, LayoutGrid, AlertCircle, Rocket
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { C9Button } from '@/components/design-system/C9Button';
import { WpVendors } from '@/components/wordpress/WpVendors';

/* 
   ANIMATION HELPERS
*/
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

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

/* 
   SECTION 1: HERO
*/
const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-4 pb-0 lg:pt-8">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }}
    />

    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-14 lg:pb-20">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-7">
              <Cloud size={13} className="text-[#5D00D6]" aria-hidden="true" />
              <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Unified Cloud Workspace</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              Run Your Business <br/>
              <span className="text-[#5D00D6]">From Anywhere.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-8 max-w-[580px] text-slate-800">
              C9 delivers a complete cloud office environment—Microsoft 365, enterprise voice, connectivity, and proactive security—all managed under a single, accountable operating model. No fragmented tools, just seamless productivity.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <C9Button
                  size="lg"
                  className="rounded-full shadow-lg shadow-purple-900/20"
                  onClick={() => {
                    document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get My Cloud Office Plan
                </C9Button>
                <C9Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-[#5D00D6] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-all"
                  onClick={() => {
                    document.getElementById('what-is-included')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Services
                </C9Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
             <div className="flex flex-wrap gap-x-6 gap-y-3">
                {[
                  { label: 'Fully Managed', icon: <CheckCircle className="text-[#5D00D6]" size={14} aria-hidden="true" /> },
                  { label: 'Highly Secure', icon: <CheckCircle className="text-[#5D00D6]" size={14} aria-hidden="true" /> },
                  { label: 'Work Anywhere', icon: <CheckCircle className="text-[#5D00D6]" size={14} aria-hidden="true" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
             </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} direction="right" className="relative hidden lg:block">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl max-w-[90%] ml-auto aspect-[4/3] border border-slate-100 bg-slate-100 flex items-center justify-center">
            {/* Fallback image if specific one is missing, using high-quality Unsplash image for modern workspace */}
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
              alt="Modern Cloud Office Workspace"
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              sizes="(max-width: 1280px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/60 to-transparent" />
          </div>
          
          <div className="absolute -bottom-4 -left-2 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-20">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6]">
                   <ShieldCheck size={20} aria-hidden="true" />
                </div>
                <div>
                   <div className="text-xl font-black text-slate-900 leading-none">100%</div>
                   <div className="text-[9px] font-black text-slate-700 uppercase tracking-widest mt-1">Managed Security</div>
                </div>
             </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* 
   SECTION 2: PROBLEM FRAMING
*/
const SectionProblem = () => (
  <section className="py-16 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <FadeIn>
          <span className="c9-eyebrow mb-4">The Remote Work Reality</span>
          <h2 className="c9-section-heading">
            Fragmented Tools Create Operational Chaos
          </h2>
          <p className="c9-body text-slate-800 mt-6 text-lg">
            Managing hybrid and remote teams is complex. Disconnected vendors for voice, IT, and security lead to accountability gaps, unpredictable costs, and massive security vulnerabilities.
          </p>
        </FadeIn>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { icon: <AlertCircle size={24} aria-hidden="true" />, title: 'Ownership Voids', desc: 'Incidents get stuck between your IT guy, the phone provider, and the cloud vendor. No one owns the outcome.' },
          { icon: <Lock size={24} aria-hidden="true" />, title: 'Security Blind Spots', desc: 'Unmanaged devices, weak remote access, and inconsistent policies leave your data vulnerable to interception and ransomware.' },
          { icon: <Zap size={24} aria-hidden="true" />, title: 'Productivity Drag', desc: 'Employees struggle with multiple logins, unreliable VPNs, and disconnected communication tools.' },
          { icon: <Layers size={24} aria-hidden="true" />, title: 'Cost Sprawl', desc: 'Paying for overlapping subscriptions, unpredictable break-fix support, and separate phone lines scales poorly.' }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="h-full">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full shadow-sm hover:border-[#5D00D6]/30 transition-all group">
               <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 origin-left transition-transform">
                  {item.icon}
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
               <p className="text-slate-700 leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* 
   SECTION 3: CLOUD OFFICE DEFINITION
*/
const SectionDefinition = () => (
  <section className="py-16 bg-white overflow-hidden">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="left">
           <span className="c9-eyebrow mb-4">The C9 Cloud Office</span>
           <h2 className="c9-section-heading mb-6">Everything Your Business Needs, Managed Together.</h2>
           <p className="c9-body text-slate-800 mb-8 leading-relaxed">
             A Cloud Office is your entire IT and communications infrastructure, consolidated into a single, cohesive system. We remove the physical limitations of an office and put your entire business in the cloud. You just log in and work.
           </p>
           <div className="space-y-6">
              {[
                { title: 'Identity & Access', desc: 'One secure login for every application and file.' },
                { title: 'Unified Communications', desc: 'Voice, video, and chat seamlessly integrated.' },
                { title: 'Device Management', desc: 'Laptops and mobiles secured and monitored 24/7.' },
                { title: 'Cloud Infrastructure', desc: 'Your files and data available securely from anywhere.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                   <div className="w-6 h-6 rounded-full bg-[#5D00D6]/10 flex items-center justify-center text-[#5D00D6] shrink-0 mt-1">
                      <Check size={14} aria-hidden="true" />
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-700">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </FadeIn>

        <FadeIn direction="right" className="relative">
           <div className="bg-slate-900 rounded-3xl p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/20 blur-3xl rounded-none" />
              <h3 className="text-2xl font-bold mb-8 text-white relative z-10">The Operating Model</h3>
              <div className="space-y-6 relative z-10">
                 {[
                   { label: 'Hardware Procurement & Setup', val: 'Included' },
                   { label: 'Microsoft 365 Licensing & Backup', val: 'Included' },
                   { label: 'Enterprise Voice & Phone Lines', val: 'Included' },
                   { label: 'Security & Threat Monitoring', val: 'Included' },
                   { label: 'Unlimited Helpdesk Support', val: 'Included' }
                 ].map((row, i) => (
                   <div key={i} className="flex items-center justify-between pb-4 border-b border-white/10 last:border-0">
                      <span className="text-sm font-semibold text-white/95">{row.label}</span>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#5D00D6] text-white">
                        {row.val}
                      </span>
                   </div>
                 ))}
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* 
   SECTION 4: WHAT'S INCLUDED
*/
const SectionIncluded = () => (
  <section id="what-is-included" className="py-16 bg-slate-50 border-y border-slate-100">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-12">
          <FadeIn>
             <span className="c9-eyebrow mb-4">Integrated Capabilities</span>
             <h2 className="c9-section-heading">Everything Included. Zero Compromises.</h2>
             <p className="c9-body text-slate-800 mt-6">
                We do not sell piecemeal tools. We deploy a complete, managed environment designed to run your entire operation securely.
             </p>
          </FadeIn>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: 'Microsoft 365', 
              icon: <LayoutGrid aria-hidden="true" />, 
              desc: 'Enterprise email, SharePoint, OneDrive, and the full Office suite deployed and secured.' 
            },
            { 
              title: 'Cloud Phone Systems', 
              icon: <PhoneCall aria-hidden="true" />, 
              desc: 'Enterprise voice integrated directly into Teams or dedicated softphones for mobile workers.' 
            },
            { 
              title: 'Microsoft Teams', 
              icon: <MessageSquare aria-hidden="true" />, 
              desc: 'Your central hub for chat, meetings, and collaboration, engineered for high-quality video.' 
            },
            {
              title: 'Device Management',
              icon: <Laptop aria-hidden="true" />,
              desc: 'Zero-touch provisioning and continuous MDM for laptops, tablets, and mobiles.'
            },
            { 
              title: 'Endpoint Security', 
              icon: <ShieldCheck aria-hidden="true" />, 
              desc: 'Next-gen antivirus, ransomware protection, and 24/7 proactive threat hunting.' 
            },
            { 
              title: 'Hosted Firewall / SASE', 
              icon: <Network aria-hidden="true" />, 
              desc: 'Secure, encrypted network access for every remote worker, enforcing Zero-Trust policies.' 
            },
            { 
              title: 'Business 5G', 
              icon: <Globe aria-hidden="true" />, 
              desc: 'Reliable, high-speed failover and primary connectivity options for remote offices.' 
            },
            {
              title: 'Managed Support',
              icon: <Briefcase aria-hidden="true" />,
              desc: '24/7 helpdesk and proactive infrastructure management. One call for any IT issue.'
            }
          ].map((card, i) => (
            <FadeIn key={i} delay={i * 0.05} className="h-full">
               <div className="bg-white p-6 rounded-2xl border border-slate-200 h-full shadow-sm hover:border-[#5D00D6]/50 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] mb-6 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                     {card.icon}
                  </div>
                  <h3 className="text-[16px] font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-700 text-[13px] leading-relaxed">{card.desc}</p>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* 
   SECTION 5: DEPLOYMENT JOURNEY
*/
const SectionJourney = () => (
  <section className="py-16 bg-white">
    <div className={C}>
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1">
             <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5] relative border border-slate-100">
                   <Image 
                     src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                     alt="Cloud Office Deployment Team" 
                     fill
                     className="object-cover object-center" 
                     sizes="(max-width: 1280px) 100vw, 50vw"
                   />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                   <div className="text-3xl font-black mb-1">Zero</div>
                   <div className="text-[10px] font-black uppercase tracking-widest opacity-95 text-[#a56eff]">Operational Downtime</div>
                </div>
             </div>
          </FadeIn>

          <FadeIn direction="left" className="order-1 lg:order-2">
             <span className="c9-eyebrow mb-4">The Deployment Journey</span>
             <h2 className="c9-section-heading mb-8">How We Deploy Your Cloud Office</h2>
             
             <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {[
                  { step: '01', title: 'Discovery & Architecture', desc: 'We audit your current setup and design a modern, consolidated architecture tailored to your workflows.' },
                  { step: '02', title: 'Zero-Downtime Migration', desc: 'We migrate your data, emails, and phone numbers with meticulous precision behind the scenes.' },
                  { step: '03', title: 'Secure Device Rollout', desc: 'Devices are pre-configured, secured, and shipped directly to your team members, ready to use out of the box.' },
                  { step: '04', title: 'Ongoing Operations', desc: 'We take over the day-to-day management, 24/7 security monitoring, and provide unlimited helpdesk support.' }
                ].map((item, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#5D00D6] text-white font-bold text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                        {item.step}
                     </div>
                     <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl border border-slate-200 bg-white shadow-sm group-hover:border-[#5D00D6]/30 transition-colors">
                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </FadeIn>
       </div>
    </div>
  </section>
);

/* 
   SECTION 6: SECURITY LAYER
*/
const SectionSecurity = () => (
  <section className="py-16 bg-[#0c1024] text-white overflow-hidden relative">
    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#5D00D6 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
    <div className={C + " relative z-10"}>
       <div className="max-w-3xl mx-auto text-center mb-12">
          <FadeIn>
             <span className="c9-eyebrow mb-4 !text-white">Secure By Design</span>
             <h2 className="c9-section-heading !text-white">Enterprise-Grade Protection <br/>for Every Endpoint</h2>
             <p className="text-white/80 mt-6 text-lg">
               Remote work demands proactive security. We lock down your data, devices, and communications with military-grade protocols and 24/7 monitoring.
             </p>
          </FadeIn>
       </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Lock aria-hidden="true" />, title: 'Zero-Trust Architecture', desc: 'Verify every access request implicitly, regardless of where the user is located.' },
            { icon: <Monitor aria-hidden="true" />, title: 'Continuous Monitoring', desc: '24/7 automated surveillance of network traffic and remote device behavior.' },
            { icon: <ClipboardCheck aria-hidden="true" />, title: 'Automated Compliance', desc: 'Enforce security policies that align with ISO and Essential 8 standards everywhere.' },
            { icon: <Zap aria-hidden="true" />, title: 'Rapid Incident Response', desc: 'Hardened protocols to contain and eliminate threats before they impact your business.' }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
               <div className="bg-white/5 p-8 rounded-2xl border border-white/10 h-full hover:bg-white/10 transition-all shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#5D00D6]/20 flex items-center justify-center mb-6 text-[#a56eff]">
                     {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-4 text-white">{item.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* 
   SECTION 7: USE CASES
*/
const SectionUseCases = () => (
  <section className="py-16 bg-white border-b border-slate-100">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-12">
          <FadeIn>
             <span className="c9-eyebrow mb-4">Built For Modern Business</span>
             <h2 className="c9-section-heading">One Model. Infinite Flexibility.</h2>
             <p className="c9-body text-slate-800 mt-6">
               Our cloud office framework scales and adapts to how your specific organization operates.
             </p>
          </FadeIn>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              tag: 'GREENFIELD BUSINESSES', 
              title: 'Start Fresh Without Tech Debt', 
              desc: 'Launch your new venture with a unified, scalable foundation from day one. Avoid the costly mistake of piecing together disparate systems as you grow.',
            },
            { 
              tag: 'SMB DECISION-MAKERS', 
              title: 'Enterprise Tools, Predictable Costs', 
              desc: 'Access enterprise-grade tools, security, and voice without the need to hire an internal IT team or manage multiple vendor subscriptions.',
            },
            { 
              tag: 'HYBRID TEAMS', 
              title: 'Seamless Work Transitions', 
              desc: 'Empower your staff to transition seamlessly between working at home, in the office, or on the road with identical access, voice, and security experiences.',
            },
            { 
              tag: 'MULTI-SITE ORGANISATIONS', 
              title: 'Standardised Technology Posture', 
              desc: 'Enforce a single, standardised technology and security posture across every branch, office, or retail location. Absolute control and governance.'
            }
          ].map((caseStudy, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
               <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-[#5D00D6]/30 transition-all duration-500 h-full">
                  <span className="text-[11px] font-black text-[#5D00D6] uppercase tracking-[0.2em] mb-4 block">{caseStudy.tag}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{caseStudy.title}</h3>
                  <p className="text-slate-700 text-[15px] leading-relaxed">{caseStudy.desc}</p>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* 
   SECTION 8: WHY C9
*/
const SectionWhyC9 = () => (
  <section className="py-16 bg-slate-50 border-b border-slate-100">
    <div className={C}>
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
             <span className="c9-eyebrow mb-4">The C9 Advantage</span>
             <h2 className="c9-section-heading mb-6">The Power of Convergence</h2>
             <p className="c9-body text-slate-800 mb-8">
               Why piece together a solution when you can partner with the architect? We are not just an MSP, and we are not just a Telco. We combine managed IT, unified communications, and network connectivity under a single accountable partner.
             </p>
             <div className="space-y-4">
                {[
                  { icon: <CheckCircle size={18} aria-hidden="true" />, title: 'Single Accountability', desc: 'One partner for your internet, your phones, your IT support, and your security.' },
                  { icon: <Layers size={18} aria-hidden="true" />, title: 'Deep Integration', desc: 'We engineer how your voice network intrinsically talks to your cloud environment.' },
                  { icon: <Database size={18} aria-hidden="true" />, title: 'Predictable Commercials', desc: 'A single operational model and a single predictable bill for your entire technology stack.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                     <div className="text-[#5D00D6] shrink-0 mt-1">{item.icon}</div>
                     <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-700">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </FadeIn>

          <FadeIn direction="left">
             <div className="relative">
                <div className="bg-[#0c1024] p-10 lg:p-14 rounded-3xl shadow-2xl relative overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#5D00D6]/20 to-transparent" />
                    <div className="relative z-10 text-center">
                       <div className="w-16 h-16 bg-[#5D00D6] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                          <Rocket size={32} aria-hidden="true" />
                       </div>
                       <h3 className="text-white text-2xl font-bold mb-4">Built to Scale With You</h3>
                       <p className="text-white/80 text-sm leading-relaxed mb-8">
                         As your team grows, adding a new employee is as simple as clicking a button. We provision their licenses, ship their secured laptop, and set up their voice extension automatically.
                       </p>
                       <C9Button 
                         variant="outline"
                         className="rounded-full border-white/20 text-white hover:bg-white hover:text-slate-900 w-full"
                         onClick={() => {
                           document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                         }}
                       >
                         Speak to a Specialist
                       </C9Button>
                    </div>
                </div>
             </div>
          </FadeIn>
       </div>
    </div>
  </section>
);

/* 
   SECTION 9: FINAL CTA
*/
const FinalCTA = () => (
  <section className="py-16 bg-[#0c1024] text-white relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/30 to-transparent opacity-50" />
     <div className={C + " relative z-10 text-center"}>
        <FadeIn>
           <h2 className="c9-section-heading !text-white mb-8 !text-4xl lg:!text-5xl">Ready to Build Your Cloud Office?</h2>
           <p className="text-white/90 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
             Stop managing multiple vendors and disparate tools. Consolidate your IT, voice, and security with a single managed partner.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <C9Button 
                 size="lg"
                 className="bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-2xl shadow-purple-900/40"
                 onClick={() => {
                   document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                 }}
               >
                  Get My Cloud Office Plan
               </C9Button>
           </div>
        </FadeIn>
     </div>
  </section>
);

/* 
   PAGE EXPORT
*/
export default function CloudOfficePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionProblem />
      <SectionDefinition />
      <SectionIncluded />
      <SectionJourney />
      <SectionSecurity />
      <SectionUseCases />
      <SectionWhyC9 />
      <WpVendors />
      <FinalCTA />

      <section id="consultation-section" className="bg-slate-50 py-16">
        <WpConsultationForm
          showHeader={false}
          eyebrow="CLOUD OFFICE DEPLOYMENT"
          title="Speak to a Cloud Architect"
          description="Ready to consolidate your technology stack and empower your remote team? Book a discovery session to discuss your Cloud Office requirements."
          formTitle="Get My Cloud Office Plan"
        />
      </section>
    </main>
  );
}
