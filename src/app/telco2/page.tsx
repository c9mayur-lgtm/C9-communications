'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowRight, CheckCircle, ShieldCheck, Zap, Clock, 
  Search, Target, Monitor, Layers, 
  PhoneCall, Users, AlertCircle, ShieldAlert,
  BarChart3, RefreshCw, Network, Share2, ClipboardCheck, Check, 
  ChevronLeft, ChevronRight, MessageSquare, Activity, Globe, Router, Mic
} from 'lucide-react';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { C9Button } from '@/components/design-system/C9Button';

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
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

/* 
   1. HERO SECTION
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
              <ShieldCheck size={13} className="text-[#5D00D6]" aria-hidden="true" />
              <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Managed Telco Partner</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-6">
              We Simplify Your Business Telco. <br/>
              <span className="text-[#5D00D6]">One Partner. Zero Finger-Pointing.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-8 max-w-[580px] text-slate-800">
              Stop juggling multiple providers for internet, phones, and support. We consolidate your connectivity and communications into a single, reliable solution backed by Australian engineers.
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
                  Get a Free Quote
                </C9Button>
                <C9Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-[#5D00D6] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white transition-all"
                  onClick={() => {
                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
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
                  { label: '99.9% Uptime SLA', icon: <CheckCircle className="text-[#5D00D6]" size={14} aria-hidden="true" /> },
                  { label: 'One Consolidated Bill', icon: <CheckCircle className="text-[#5D00D6]" size={14} aria-hidden="true" /> },
                  { label: 'Local AU Support', icon: <CheckCircle className="text-[#5D00D6]" size={14} aria-hidden="true" /> }
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
          <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl max-w-[90%] ml-auto aspect-[4/3] border border-slate-100 bg-slate-100">
            {/* Visual representation of Telco management */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#110229] to-[#2a085c] flex items-center justify-center p-8">
              <div className="w-full max-w-md space-y-4">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center"><CheckCircle className="text-green-400" size={20} /></div>
                    <div>
                      <div className="text-white font-medium">Business NBN™</div>
                      <div className="text-white/60 text-xs">Primary Link • 1000/1000 Mbps</div>
                    </div>
                  </div>
                  <div className="text-green-400 text-sm font-medium">Online</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center"><PhoneCall className="text-blue-400" size={20} /></div>
                    <div>
                      <div className="text-white font-medium">Cloud Voice (Teams)</div>
                      <div className="text-white/60 text-xs">45 Active Lines</div>
                    </div>
                  </div>
                  <div className="text-green-400 text-sm font-medium">Stable</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center"><Router className="text-purple-400" size={20} /></div>
                    <div>
                      <div className="text-white font-medium">4G LTE Failover</div>
                      <div className="text-white/60 text-xs">Standby Mode</div>
                    </div>
                  </div>
                  <div className="text-white/40 text-sm font-medium">Ready</div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/40 to-transparent pointer-events-none" />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* 
   2. OPERATIONAL CHALLENGES (The Problem)
*/
const SectionChallenges = () => (
  <section className="py-10 bg-slate-50 border-y border-slate-100">
    <div className={C}>
      <div className="max-w-3xl mb-10">
        <FadeIn>
          <span className="c9-eyebrow mb-4">The Problem</span>
          <h2 className="c9-section-heading">
            You're Juggling Multiple Providers. It's Complicated.
          </h2>
          <p className="c9-body text-slate-800 mt-6 text-lg">
            Different providers. Different support numbers. Different bills. Different speeds at different locations. It's a nightmare when things go wrong.
          </p>
        </FadeIn>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Globe size={24} aria-hidden="true" />, title: 'Multiple Providers, Multiple Problems', desc: 'Internet from one provider. Phones from another. Support from a third. When something breaks, no one takes responsibility.' },
          { icon: <PhoneCall size={24} aria-hidden="true" />, title: 'Too Many Support Numbers', desc: 'Three different providers. Three different support numbers. Three different account managers. Managing this is taking up your time.' },
          { icon: <ShieldAlert size={24} aria-hidden="true" />, title: 'Inconsistent Quality & Experience', desc: 'Internet speed varies by location. Phone quality drops. Support response times are unpredictable. You can\'t rely on consistency.' }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="group bg-white p-8 rounded-3xl border border-slate-100 h-full hover:border-[#5D00D6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5 hover:-translate-y-2">
               <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(93,0,214,0.4)] group-hover:bg-[#5D00D6] group-hover:text-white bg-red-50 text-red-500 mb-6">
                  {item.icon}
               </div>
               <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
               <p className="text-sm text-slate-800 leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* 
   3. MSP POSITIONING (The Solution)
*/
const SectionMSPPositioning = () => (
  <section id="msp-positioning" className="py-12 bg-white overflow-hidden">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <FadeIn direction="left">
           <span className="c9-eyebrow mb-4">The Solution</span>
           <h2 className="c9-section-heading mb-6">One Accountable Partner.</h2>
           <p className="c9-body text-slate-800 mb-10 leading-relaxed">
             We consolidate your internet, phones, and communications infrastructure into a single, managed solution. If there's a problem, you call us. We fix it.
           </p>
           <div className="space-y-8">
              {[
                { 
                  title: 'One Point of Contact', 
                  icon: <Target aria-hidden="true" />, 
                  desc: 'No more waiting on hold with massive telcos. You get direct access to our Australian engineering team.' 
                },
                { 
                  title: 'Guaranteed Reliability', 
                  icon: <ShieldCheck aria-hidden="true" />, 
                  desc: 'We use enterprise-grade connections with built-in 4G/5G failover. Your business stays online.' 
                },
                { 
                  title: 'Simplified Billing', 
                  icon: <Layers aria-hidden="true" />, 
                  desc: 'One clear, predictable monthly invoice for all your locations and services.' 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                   <div className="w-12 h-12 rounded-2xl bg-[#5D00D6]/5 flex items-center justify-center text-[#5D00D6] shrink-0">
                      {item.icon}
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-800 leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </FadeIn>

        <FadeIn direction="right" className="relative">
           <div className="bg-slate-900 rounded-[32px] p-12 text-white shadow-2xl relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/10 blur-3xl rounded-full" />
              <h3 className="text-2xl font-bold mb-8 text-white">Before vs. After C9</h3>
              <div className="space-y-6">
                 {[
                   { label: 'Support Numbers', before: 'Multiple', after: 'One' },
                   { label: 'Accountability', before: 'Finger-Pointing', after: 'C9 Ownership' },
                   { label: 'Issue Resolution', before: 'Days', after: 'Minutes' },
                   { label: 'Billing', before: 'Confusing', after: 'Transparent' }
                 ].map((row, i) => (
                   <div key={i} className="flex items-center justify-between pb-4 border-b border-white/10 last:border-0">
                      <span className="text-sm font-semibold text-white/95 w-1/3">{row.label}</span>
                      <span className="text-xs font-medium text-rose-300 w-1/3 text-center">{row.before}</span>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#5D00D6] text-white w-1/3 text-center">{row.after}</span>
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
   4. SERVICES (Offerings)
*/
const SectionOfferings = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services-section" className="py-12 bg-slate-50 border-y border-slate-100">
      <div className={C}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="c9-eyebrow mb-4">Our Services</span>
              <h2 className="c9-section-heading">
                Enterprise-Grade Connectivity & Voice
              </h2>
              <p className="c9-body text-slate-800 mt-6 text-lg">
                Everything you need to keep your business connected, communicating, and operating smoothly.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.1} className="shrink-0 hidden md:flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </FadeIn>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 pt-4 -mx-6 px-6 md:-mx-8 md:px-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {[
            { icon: <Globe size={20} aria-hidden="true" />, title: 'Business NBN™ & Fibre', desc: 'High-speed, reliable internet connections scaled to your business needs, from standard NBN to dedicated Enterprise Ethernet.' },
            { icon: <PhoneCall size={20} aria-hidden="true" />, title: 'Cloud Phone Systems', desc: 'Modern VoIP and Microsoft Teams calling solutions that allow your team to work from anywhere, on any device.' },
            { icon: <Users size={20} aria-hidden="true" />, title: 'Contact Centre Solutions', desc: 'Advanced routing, IVR, and omnichannel queue management to improve your customer experience.' },
            { icon: <Mic size={20} aria-hidden="true" />, title: 'AI Voice Assistants', desc: 'Automate repetitive calls and routine inquiries with intelligent voice AI, freeing your team for complex tasks.' },
            { icon: <Router size={20} aria-hidden="true" />, title: 'SD-WAN & Networking', desc: 'Securely connect multiple office locations and manage your network traffic for optimal performance.' },
            { icon: <ShieldCheck size={20} aria-hidden="true" />, title: '4G/5G Failover', desc: 'Automatic backup connections ensuring your critical systems stay online even if the primary line goes down.' }
          ].map((item, i) => (
            <div key={i} className="w-[85vw] md:w-[45vw] lg:w-[320px] shrink-0 snap-start">
              <FadeIn delay={i * 0.05} className="h-full">
                <div className="group bg-white p-6 rounded-3xl border border-slate-100 h-full hover:border-[#5D00D6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5 hover:-translate-y-2 flex flex-col">
                   <div className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(93,0,214,0.4)] group-hover:bg-[#5D00D6] group-hover:text-white bg-[#5D00D6]/5 text-[#5D00D6] mb-4">
                      {item.icon}
                   </div>
                   <h3 className="text-[15px] font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                   <p className="text-sm text-slate-800 leading-relaxed flex-grow">{item.desc}</p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 
   5. HOW IT WORKS (Process)
*/
const SectionProcess = () => (
  <section className="py-12 bg-white relative overflow-hidden">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-10">
          <FadeIn>
             <span className="c9-eyebrow mb-4">How It Works</span>
             <h2 className="c9-section-heading">Transitioning is Simple</h2>
             <p className="c9-body text-slate-800 mt-6">
               We handle the heavy lifting so you can focus on running your business. Zero downtime, zero stress.
             </p>
          </FadeIn>
       </div>

       <div className="grid md:grid-cols-4 gap-6">
          {[
            { 
              title: '1. Discovery', 
              icon: <Search aria-hidden="true" />, 
              desc: 'We review your current bills, infrastructure, and pain points to find efficiencies and cost savings.' 
            },
            { 
              title: '2. Custom Design', 
              icon: <Network aria-hidden="true" />, 
              desc: 'We design a unified telco solution tailored to your specific operational requirements.' 
            },
            { 
              title: '3. Smooth Migration', 
              icon: <RefreshCw aria-hidden="true" />, 
              desc: 'Our project team manages the transition behind the scenes ensuring zero disruption to your daily operations.' 
            },
            {
              title: '4. Ongoing Support',
              icon: <ShieldCheck aria-hidden="true" />,
              desc: 'You enjoy a stable environment backed by our 24/7 Australian-based engineering team.'
            }
          ].map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="group bg-white p-8 rounded-3xl border border-slate-100 h-full hover:border-[#5D00D6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5 hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(93,0,214,0.4)] group-hover:bg-[#5D00D6] group-hover:text-white bg-[#5D00D6]/5 text-[#5D00D6] mb-8">
                     {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                  <p className="text-slate-800 text-sm leading-relaxed">{card.desc}</p>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* 
   6. CASE STUDIES / OPERATIONAL PROOF
*/
const SectionOperationalProof = () => (
  <section className="py-12 bg-slate-50 border-y border-slate-100">
    <div className={C}>
       <div className="max-w-3xl mx-auto text-center mb-10">
          <FadeIn>
             <span className="c9-eyebrow mb-4">Success Stories</span>
             <h2 className="c9-section-heading">Trusted by Australian Businesses</h2>
             <p className="c9-body text-slate-900 mt-6">
               Real results from real businesses who made the switch to a managed telco environment.
             </p>
          </FadeIn>
       </div>

       <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              tag: 'RETAIL', 
              title: 'Multi-Site Retail Chain', 
              desc: 'Consolidated 4 different providers across 12 locations into a single, managed SD-WAN network. Achieved 100% visibility.',
              metric: '$40K',
              metricLabel: 'Annual Savings'
            },
            { 
              tag: 'HEALTHCARE', 
              title: 'Medical Group', 
              desc: 'Replaced legacy PBX systems with Cloud Voice, enabling receptionists to work remotely and never miss a patient call.',
              metric: '99.9%',
              metricLabel: 'Uptime Achieved'
            },
            { 
              tag: 'PROFESSIONAL SERVICES', 
              title: 'National Law Firm', 
              desc: 'Upgraded to Enterprise Ethernet fibre to support heavy cloud workloads, eliminating daily bottlenecks.',
              metric: '10x',
              metricLabel: 'Speed Increase'
            }
          ].map((caseStudy, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className="group bg-white p-10 rounded-3xl border border-slate-100 h-full hover:border-[#5D00D6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5 hover:-translate-y-2">
                  <span className="text-[11px] font-black text-[#5D00D6] uppercase tracking-[0.2em] mb-4 block">{caseStudy.tag}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">{caseStudy.title}</h3>
                  <p className="text-slate-900 text-[14px] leading-relaxed mb-10">{caseStudy.desc}</p>
                  <div className="flex items-center gap-4 mt-auto">
                     <div className="text-4xl font-black text-slate-900 group-hover:text-[#5D00D6] transition-colors">{caseStudy.metric}</div>
                     <div className="text-xs font-black text-slate-900 uppercase tracking-widest">{caseStudy.metricLabel}</div>
                  </div>
               </div>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* 
   7. FAQ SECTION
*/
const faqs = [
  {
    q: "Do we have to change all our providers at once?",
    a: "Not necessarily. We can take over the management of your existing services and slowly consolidate them as contracts expire, ensuring a seamless transition without double-paying."
  },
  {
    q: "Will we lose our phone numbers if we switch?",
    a: "No. We port all your existing phone numbers (including 1300/1800 numbers) to our network. Your customers won't notice any difference during the switch."
  },
  {
    q: "What happens if our internet goes down?",
    a: "We deploy enterprise-grade routers with automatic 4G/5G failover. If your primary connection drops, the backup kicks in seamlessly so your business stays online."
  },
  {
    q: "How long does a migration take?",
    a: "It depends on the complexity of your setup, but a standard migration takes between 2 to 4 weeks from sign-off. We manage the entire process to ensure zero downtime."
  },
  {
    q: "Are your support teams based in Australia?",
    a: "Yes. 100% of our engineering and support teams are based in Australia. When you call us, you speak to a local expert who understands your business."
  }
];

const SectionFAQ = () => (
  <WpFAQAndFeedback 
    faqItems={faqs} 
    showTestimonials={false} 
  />
);

/* 
   8. FINAL CTA SECTION
*/
const FinalCTA = () => (
  <section className="py-16 bg-[#0c1024] text-white relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-br from-[#5D00D6]/30 to-transparent opacity-50" />
     <div className={C + " relative z-10 text-center"}>
        <FadeIn>
           <h2 className="c9-section-heading !text-white mb-8 !text-4xl lg:!text-5xl">Ready to Simplify Your Telco?</h2>
           <p className="text-white/95 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
             Stop dealing with multiple providers and unreliable connections. Let's build a unified communication strategy that just works.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <C9Button 
                 size="lg"
                 className="bg-[#5D00D6] text-white rounded-full hover:bg-[#4d00b3] transition-all shadow-2xl shadow-purple-900/40"
                 onClick={() => {
                   document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' });
                 }}
               >
                  Get a Free Quote
               </C9Button>
               <C9Button 
                 variant="outline"
                 size="lg"
                 className="border-2 border-white/20 text-white rounded-full hover:bg-white hover:text-[#0c1024] transition-all"
                 onClick={() => window.location.href = 'tel:1300000299'}
               >
                  Call 1300 000 299
               </C9Button>
           </div>
           <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <span className="text-white/70 font-medium text-sm flex items-center gap-2">
                 No Pressure. No Obligation. Just Clear Advice.
              </span>
           </div>
        </FadeIn>
     </div>
  </section>
);

/* 
   PAGE EXPORT
*/
export default function TelcoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WpClientTicker />
      <SectionChallenges />
      <SectionMSPPositioning />
      <SectionOfferings />
      <SectionProcess />
      <SectionOperationalProof />
      <SectionFAQ />
      <FinalCTA />

      <section id="consultation-section">
        <WpConsultationForm
          showHeader={false}
          eyebrow="FREE TELCO ASSESSMENT"
          title="Review Your Current Setup"
          description="Ready to consolidate your technology operations under a single accountable partner? Schedule a free telco review to discuss your internet, phones, and connectivity needs."
          formTitle="Request Free Quote"
        />
      </section>
    </main>
  );
}
