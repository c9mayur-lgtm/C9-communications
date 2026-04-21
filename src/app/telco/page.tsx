'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, PhoneCall, Smartphone, PhoneIncoming, GitBranch, ArrowRight, ArrowDown, Clock, CheckCircle, CheckCircle2, XCircle, MinusCircle, Users, Activity, MessageSquare, ShieldCheck, PieChart, MessageCircle, Settings, RefreshCw, Monitor, Star, ChevronDown, Phone, Search, FileText, Lock, Facebook, Linkedin, Check, ShoppingBag, Briefcase, GraduationCap, Building2, Heart, BookOpen, Home } from 'lucide-react';
import { Section } from '@/components/design-system/Section';
import { H1, H2, H3, Body, Label } from '@/components/design-system/Typography';
import { C9Button } from '@/components/design-system/C9Button';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpIndustryMarquee, IndustryCard } from '@/components/landing/WpIndustryMarquee';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import AccreditationBar from '@/components/sections/business-nbn/AccreditationBar';

const TELCO_TESTIMONIALS = [
  {
    content: "We cut our telco bill by $1,800 a month. The migration took 2 days and our team didn't miss a single call.",
    name: "James R.",
    role: "Operations Manager - Healthcare Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    metric: "$1,800",
    metricLabel: "Monthly Saving"
  },
  {
    content: "After years of Telstra hold queues, having an account manager who knows our name is something we didn't know we needed until we had it.",
    name: "Michelle T.",
    role: "Director - Legal Firm",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    metric: "0 Min",
    metricLabel: "Hold Times"
  },
  {
    content: "Three sites. One system. 48 hours. C9 made the thing we dreaded look completely routine.",
    name: "David K.",
    role: "IT Manager - Retail Chain",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    metric: "48 Hrs",
    metricLabel: "To Go-Live"
  }
];

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

const SERVICES = [
  {
    icon: Wifi,
    tag: "INTERNET",
    title: "Business nbn™",
    body: "Simple, cost-effective internet for everyday business operations. Reliable connectivity that keeps your team online without the complex jargon.",
    metrics: [{ val: "Reliable", label: "connection" }, { val: "$0", label: "setup" }],
    cta: "View Business nbn",
    link: "/telco/business-nbn",
    img: "/images/nbn-feature.png"
  },
  {
    icon: Activity,
    tag: "HIGH PERFORMANCE",
    title: "Business Fibre",
    body: "High-performance, reliable connection for businesses that can't afford downtime. Consistent speeds and guaranteed uptime for high-demand operations.",
    metrics: [{ val: "1,000Mbps", label: "speeds" }, { val: "99.99%", label: "SLA" }],
    cta: "Explore Fibre",
    link: "/telco/fast-fibre",
    img: "/images/fibre-feature.png"
  },
  {
    icon: PhoneCall,
    tag: "COMMUNICATION",
    title: "Business Phones",
    body: "Reliable communication to keep your team connected and your clients happy. A fully managed phone system that scales with your growth.",
    metrics: [{ val: "80+", label: "features" }, { val: "Any", label: "device" }],
    cta: "See Phone Solutions",
    link: "/telco/c9-phone-system",
    img: "/images/voice-feature.png"
  }
];

const WORKFLOW_STEPS = [
  {
    icon: Search,
    label: "Assess",
    time: "Phase 1",
    tag: "STEP 1 OF 4",
    title: "We assess your current setup.",
    body: "We audit your existing costs and identify pain points in your current connectivity. No jargon, just clear facts about what's working and what isn't.",
    bullets: ["Cost analysis", "Performance audit", "Identifying gaps", "Australian specialist only"],
    quote: "They found $400/mo in savings before we even signed anything on our first call.",
    attribution: "— Operations Manager, Healthcare Group"
  },
  {
    icon: FileText,
    label: "Recommend",
    time: "Phase 2",
    tag: "STEP 2 OF 4",
    title: "The right solution for you.",
    body: "We recommend a setup tailored to your business size and growth plans. One team, one bill, one unified solution designed specifically for your workflow.",
    bullets: ["Custom plan designed", "Transparent pricing", "No hidden fees", "You approve before start"],
    quote: "The recommendation was simple: exactly what we needed to stay connected, nothing more.",
    attribution: "— Director, Legal Firm"
  },
  {
    icon: Settings,
    label: "Setup",
    time: "Phase 3",
    tag: "STEP 3 OF 4",
    title: "Fully managed installation.",
    body: "We handle the entire migration from start to finish. Numbers port, internet switches, and phones go live without interruptions or dropped calls.",
    bullets: ["Zero downtime focus", "Number porting managed", "Hardware configured", "Team trained on day 1"],
    quote: "I didn't even know we'd switched until I saw the first bill. The process was completely seamless.",
    attribution: "— IT Manager, Retail Chain"
  },
  {
    icon: ShieldCheck,
    label: "Support",
    time: "Ongoing",
    tag: "STEP 4 OF 4",
    title: "Proactive local support.",
    body: "One partner to call for everything. No hold queues, no vendor finger-pointing. We manage your entire stack 24/7 so you don't have to.",
    bullets: ["99.99% uptime SLA", "Onshore support desk", "Account manager assigned", "Ongoing optimization"],
    quote: "Having one onshore partner to call who knows our name and our setup changed everything.",
    attribution: "— CEO, Community Foundation"
  }
];

export default function TelcoPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  const toggleService = (svc: string) => {
    setSelectedServices(prev => prev.includes(svc) ? prev.filter(s => s !== svc) : [...prev, svc]);
  };

  return (
    <div className="bg-white">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] bg-[#0c1024] flex flex-col justify-center overflow-hidden pt-32 pb-24">
        {/* VIDEO BACKGROUND */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        >
          <source src="/videos/telco-hero.mp4" type="video/mp4" />
        </video>

        {/* Background Gradients & Overlays */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(ellipse_at_center,rgba(93,0,214,0.3)_0%,transparent_60%)] pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#5D00D6_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.05] pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-8 items-center">
            
            <div className="flex flex-col max-w-2xl">
              <FadeIn>
                <div className="c9-eyebrow !text-gray-400 mb-2 !tracking-widest">
                  Home &rarr; Telco
                </div>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <div className="c9-eyebrow mb-6 flex items-center">
                  BUSINESS TELCO &mdash; VOICE, INTERNET & MOBILE
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <h1 className="c9-hero-title !text-white mb-6">
                  Reliable business connectivity — fully managed by one team
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p className="c9-body !text-gray-300 mb-8 max-w-xl">
                  We take full ownership of your internet, phone systems, and mobile connectivity. No more dealing with multiple providers or sitting in hold queues. Just one partner who handles everything end-to-end.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-3 mb-10">
                  {['Reliable Service', 'Fully Managed', 'No Interruptions'].map((pill, i) => (
                    <span key={i} className="c9-eyebrow !text-[#a166ff] !text-[11px] px-4 py-2 border border-[#5D00D6]/40 bg-[#5D00D6]/10 rounded-full flex items-center gap-1.5">
                      <span className="text-xs">✓</span> {pill}
                    </span>
                  ))}
                </div>
              </FadeIn>
              
              <FadeIn delay={0.5}>
                <div className="flex flex-wrap items-center gap-4">
                  <C9Button size="lg" className="px-10 rounded-full">
                    Get the Right Setup <ArrowRight size={18} className="ml-2" />
                  </C9Button>
                  <C9Button variant="outline" size="lg" className="px-10 text-white border-white/20 hover:bg-white/10 rounded-full">
                    Speak to an Expert <ArrowDown size={18} className="ml-2" />
                  </C9Button>
                </div>
                <div className="flex items-center gap-2 mt-5 c9-body !text-[13px] !text-gray-400 !font-medium">
                  <Clock size={14} className="text-[#a166ff]" />
                  Response within 2 business hours. No obligation.
                </div>
              </FadeIn>
            </div>
            
            {/* HERO PANEL */}
            <FadeIn delay={0.6} className="relative w-full max-w-[500px] mx-auto lg:ml-auto">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 shadow-[0_40px_100px_-20px_rgba(93,0,214,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_50px_120px_-20px_rgba(93,0,214,0.6)]">
                
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <span className="text-[12px] font-bold text-white uppercase tracking-widest">C9 Telco &mdash; Live Overview</span>
                  <div className="flex items-center gap-2 text-[12px] text-[#00C27C] font-semibold tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-[#00C27C] shadow-[0_0_8px_#00C27C]"></span>
                    All operational
                  </div>
                </div>
                
                <div className="flex flex-col gap-1">
                  {[
                    { icon: Wifi, name: "Business nbn™ \u2014 Up to 250Mbps", status: "Connected", ok: true },
                    { icon: Activity, name: "Business Fibre \u2014 1,000Mbps", status: "Active", ok: true },
                    { icon: PhoneCall, name: "Business Phones \u2014 14 Users Online", status: "Operational", ok: true },
                    { icon: Smartphone, name: "Mobile \u2014 8 SIMs Active", status: "Stable", ok: true },
                    { icon: GitBranch, name: "Wi-Fi Access Points \u2014 12 Online", status: "Live", ok: true },
                    { icon: PhoneIncoming, name: "Inbound 1300 Numbers", status: "Active", ok: true }
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between py-3.5 border-b border-white/5 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4 text-[15px] text-white font-medium">
                        <row.icon size={18} className={`${i % 2 === 0 ? 'text-[#a166ff]' : 'text-white'} opacity-80`} />
                        {row.name}
                      </div>
                      <div className={`text-[13px] font-semibold ${row.ok ? 'text-[#00C27C]' : 'text-[#a166ff]'}`}>
                        {row.status}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-8 bg-black/20 p-5 rounded-[16px] border border-white/5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[28px] font-bold text-white leading-none">80+</span>
                    <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">C9 phone system features</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[28px] font-bold text-white leading-none">$20</span>
                    <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">per user/mo</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[28px] font-bold text-white leading-none">48hr</span>
                    <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">go-live</span>
                  </div>
                </div>
                
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>

      {/* COST STRIP - HIDDEN FOR NOW */}
      <section className="hidden border-b border-gray-100 bg-white py-10">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8 w-full">
            <span className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em] text-center xl:text-left max-w-[220px] shrink-0 leading-relaxed">
              THE AVERAGE AUSTRALIAN BUSINESS PAYS:
            </span>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 w-full">
              <FadeIn delay={0.1} className="flex flex-col items-center gap-2 w-full md:w-auto text-center">
                <span className="text-[36px] xl:text-[42px] font-bold text-[#5D00D6] leading-none tracking-tighter">$970/mo</span>
                <span className="text-[14px] text-gray-600 font-medium leading-tight">managing 4 separate providers</span>
              </FadeIn>
              
              <div className="hidden md:block w-px h-16 bg-gray-100 shrink-0"></div>
              
              <FadeIn delay={0.2} className="flex flex-col items-center gap-2 w-full md:w-auto text-center">
                <span className="text-[36px] xl:text-[42px] font-bold text-[#5D00D6] leading-none tracking-tighter">3hrs/wk</span>
                <span className="text-[14px] text-gray-600 font-medium leading-tight">on telco admin and hold queues</span>
              </FadeIn>
              
              <div className="hidden md:block w-px h-16 bg-gray-100 shrink-0"></div>
              
              <FadeIn delay={0.3} className="flex flex-col items-center gap-2 w-full md:w-auto text-center">
                <span className="text-[36px] xl:text-[42px] font-bold text-[#5D00D6] leading-none tracking-tighter">40%</span>
                <span className="text-[14px] text-gray-600 font-medium leading-tight">more than they need to</span>
              </FadeIn>
            </div>
            
            <Link href="/save" className="text-[15px] font-bold text-[#5D00D6] hover:text-[#4d00b3] flex items-center gap-2 group whitespace-nowrap shrink-0 border-b-2 border-[#5D00D6]/20 py-1 transition-all hover:border-[#5D00D6]">
              See How Much You Could Save <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <Section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <Label className="justify-center">THE PROBLEM</Label>
            </FadeIn>
            <FadeIn delay={0.1}>
              <H2 className="mb-8">Connectivity should support your business, not slow it down.</H2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Body className="max-w-2xl mx-auto mb-16">Reliable communication is the backbone of your operations. When it fails, everything stops.</Body>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { icon: Wifi, title: "Slow Internet", body: "Buffering and lag during critical tasks that frustrate your team and kill productivity." },
                { icon: PhoneIncoming, title: "Dropped Calls", body: "Unreliable voice systems that cut off mid-conversation, making you look unprofessional to clients." },
                { icon: Users, title: "No Accountability", body: "Multiple providers blaming each other while you sit on hold waiting for a fix that never comes." }
              ].map((item, i) => (
                <FadeIn key={i} delay={0.2 + (i * 0.1)}>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                      <item.icon className="text-red-500" size={32} />
                    </div>
                    <H3 className="mb-3">{item.title}</H3>
                    <Body className="!text-[15px]">{item.body}</Body>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SOLUTION SECTION */}
      <section id="solutions" className="py-24 md:py-32 bg-[#F4F0FA]/50">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          
          <div className="max-w-[750px] mb-16">
            <FadeIn>
              <Label>THE SOLUTION</Label>
            </FadeIn>
            <FadeIn delay={0.1}>
              <H2 className="mb-6">We manage your entire connectivity — end to end</H2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Body>You don’t deal with multiple providers — we handle everything. From installation to ongoing support, your internet and voice systems are fully managed by our local experts so you can focus on running your business.</Body>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((svc, i) => (
              <FadeIn 
                key={i} 
                delay={i * 0.1} 
                className="h-full flex"
              >
                <div className="bg-white border border-gray-200 rounded-[20px] shadow-sm flex flex-col w-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  
                  {/* --- IMAGE CONTAINER --- */}
                  <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#F4F0FA]/80 to-white relative flex flex-col items-center justify-center border-b border-gray-100 overflow-hidden">
                     {svc.img ? (
                       <div className="w-full h-full relative">
                         <img 
                           src={svc.img} 
                           alt={svc.title} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                         />
                          <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay group-hover:bg-[#5D00D6]/20 transition-colors duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/40 via-transparent to-transparent" />
                        </div>
                     ) : (
                       <div className="w-full h-full flex flex-col items-center justify-center px-8 relative">
                         <span className="text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest border border-[#5D00D6]/20 px-4 py-2 rounded-full border-dashed bg-white/80 shadow-sm backdrop-blur-sm relative z-10 flex items-center gap-2">
                            <svc.icon size={14} /> Feature Highlight
                         </span>
                       </div>
                     )}
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <span className="c9-eyebrow mb-4 block">
                      {svc.tag}
                    </span>

                    <H3 className="mb-4">{svc.title}</H3>
                    <Body className="mb-8 flex-grow !text-[15px] !text-gray-500">
                      {svc.body}
                    </Body>

                    <div className="flex gap-8 mb-8 pb-8 border-b border-gray-100">
                      {svc.metrics.map((m, idx) => (
                        <div key={idx} className="flex flex-col gap-1">
                          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{m.label}</span>
                          <span className="text-[24px] font-extrabold text-[#5D00D6] leading-none tracking-tight">{m.val}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={svc.link} className="inline-flex items-center gap-2 c9-eyebrow !text-[14px] group/link w-max mt-auto hover:text-[#4d00b3]">
                      {svc.cta} <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* DECISION SECTION */}
      <Section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <Label className="justify-center">WHICH ONE IS RIGHT FOR YOU?</Label>
            </FadeIn>
            <FadeIn delay={0.1}>
              <H2 className="mb-6">The right solution for every stage of your business.</H2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                level: "Small Business", 
                desc: "1-10 staff members with standard internet needs.", 
                solution: "Business nbn™", 
                cta: "View nbn Plans", 
                link: "/telco/business-nbn" 
              },
              { 
                level: "Growing Business", 
                desc: "10-50 staff members requiring consistent uptime.", 
                solution: "Business nbn™ or Fibre", 
                cta: "Explore Solutions", 
                link: "/telco/fast-fibre" 
              },
              { 
                level: "High-Demand Business", 
                desc: "50+ staff or data-intensive daily operations.", 
                solution: "Business Fibre", 
                cta: "Explore Fibre", 
                link: "/telco/fast-fibre" 
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.2 + (i * 0.1)} className="h-full">
                <div className="p-8 border border-gray-100 rounded-[24px] bg-[#fcfaff] h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
                  <div>
                    <h4 className="text-[14px] font-bold text-[#5D00D6] uppercase tracking-wider mb-2">{item.level}</h4>
                    <p className="text-gray-500 mb-6 text-[15px]">{item.desc}</p>
                    <div className="text-[20px] font-bold text-[#0c1024] mb-8">{item.solution}</div>
                  </div>
                  <Link href={item.link}>
                    <C9Button variant="outline" className="w-full rounded-full border-[#5D00D6] text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                      {item.cta}
                    </C9Button>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* BUSINESS IMPACT */}
      <section className="py-24 bg-[#0c1024] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(93,0,214,0.15)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <Label>BUSINESS IMPACT</Label>
              <H2 className="!text-white mt-4 mb-6">Built for elite business performance.</H2>
              <Body className="!text-gray-300 mb-8">Connectivity is the foundation of your productivity. When your setup is fully managed, your team can focus on what matters.</Body>
            </FadeIn>
            <div className="grid gap-6">
              {[
                { title: "Stable Operations", body: "No more midday dropouts or slow speeds. Just a rock-solid, reliable connection you can count on." },
                { title: "Better Communication", body: "Crystal-clear voice calls and seamless communication across every team device." },
                { title: "Improved Productivity", body: "Stop wasting hours on hold or managing multiple vendors. We handle everything for you." }
              ].map((impact, i) => (
                <FadeIn key={i} delay={0.2 + (i * 0.1)}>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <h4 className="text-[18px] font-bold mb-2">{impact.title}</h4>
                    <p className="text-gray-400 text-[15px]">{impact.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <Section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] text-center">
          <FadeIn>
            <Label className="justify-center">WHY CHOOSE C9?</Label>
            <H2 className="mt-4 mb-16">The only telco partner you'll ever need.</H2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "One Partner", body: "Every service, one bill, one team. We take full ownership of your entire connectivity stack." },
              { icon: Settings, title: "No Vendor Management", body: "We manage the carrier relationships so you don't have to. No more middle-men or finger-pointing." },
              { icon: Clock, title: "Faster Support", body: "Direct access to our Australian-based support team. No long hold queues, just immediate answers." }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.2 + (i * 0.1)}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#F4F0FA] rounded-full flex items-center justify-center mb-6">
                    <item.icon className="text-[#5D00D6]" size={36} />
                  </div>
                  <H3 className="mb-3">{item.title}</H3>
                  <Body className="!text-[15px]">{item.body}</Body>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 6 - HOW IT WORKS (Interactive Workflow) */}
      <section className="py-24 md:py-32 bg-[#0c1024] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(93,0,214,0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px] relative z-10">

          <FadeIn className="text-center max-w-[640px] mx-auto mb-16">
            <Label className="justify-center">OUR PROCESS</Label>
            <H2 className="mb-5 !text-white text-center">A seamless migration to better connectivity.</H2>
            <Body className="!text-gray-300">We've done this 1,000+ times. Here is our simple 4-step process.</Body>
          </FadeIn>

          {/* Step Track */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0 mb-10">
              {WORKFLOW_STEPS.map((step, i) => (
                <React.Fragment key={i}>
                  {/* Step Node */}
                  <button
                    onClick={() => setActiveProcessStep(i)}
                    className="flex flex-col items-center gap-3 cursor-pointer group relative focus:outline-none"
                    style={{ minWidth: 80 }}
                  >
                    {/* Circle */}
                    <div
                      className="relative flex items-center justify-center transition-all duration-300"
                      style={{
                        width: 56, height: 56, borderRadius: '50%',
                        background: activeProcessStep === i ? '#5D00D6' : 'rgba(255,255,255,0.05)',
                        border: `2px solid ${i < activeProcessStep ? '#5D00D6' : activeProcessStep === i ? '#5D00D6' : 'rgba(255,255,255,0.12)'}`,
                        transform: activeProcessStep === i ? 'scale(1.12)' : 'scale(1)',
                        boxShadow: activeProcessStep === i ? '0 0 0 6px rgba(93,0,214,0.2)' : 'none',
                      }}
                    >
                      {i < activeProcessStep ? (
                        <Check size={20} color="#fff" strokeWidth={2.5} />
                      ) : (
                        <step.icon size={22} color={activeProcessStep === i ? '#fff' : 'rgba(255,255,255,0.5)'} strokeWidth={1.8} />
                      )}
                      {/* Number badge */}
                      <span
                        className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] font-mono font-bold border"
                        style={{
                          background: i <= activeProcessStep ? '#5D00D6' : 'rgba(255,255,255,0.08)',
                          borderColor: i <= activeProcessStep ? '#5D00D6' : 'rgba(255,255,255,0.15)',
                          color: '#fff',
                        }}
                      >{i + 1}</span>
                    </div>
                    {/* Label */}
                    <span
                      className="text-[12px] font-medium text-center leading-tight max-w-[80px] transition-colors duration-200"
                      style={{ color: i <= activeProcessStep ? '#a166ff' : 'rgba(255,255,255,0.45)' }}
                    >{step.label}</span>
                    {/* Timeframe */}
                    <span className="text-[11px] font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>{step.time}</span>
                  </button>

                  {/* Connector */}
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div
                      className="hidden lg:block flex-1 mx-3 relative"
                      style={{ height: 2, maxWidth: 80, background: 'rgba(255,255,255,0.08)', marginBottom: 52 }}
                    >
                      <div
                        className="absolute inset-0 transition-all duration-500"
                        style={{
                          width: i < activeProcessStep ? '100%' : '0%',
                          background: '#5D00D6',
                        }}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </FadeIn>

          {/* Detail Panel */}
          <FadeIn delay={0.35}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProcessStep}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="rounded-[16px] p-7 md:p-8 backdrop-blur-md"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="flex flex-col lg:flex-row gap-8 mb-6">
                  {/* Left */}
                  <div className="flex-1">
                    <span
                      className="inline-block text-[11px] font-mono font-bold text-[#a166ff] px-3 py-1.5 rounded-full mb-5"
                      style={{ background: 'rgba(93,0,214,0.2)', border: '1px solid rgba(93,0,214,0.3)' }}
                    >{WORKFLOW_STEPS[activeProcessStep].tag}</span>
                    <h3 className="text-[20px] font-bold text-white mb-3 leading-snug" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                      {WORKFLOW_STEPS[activeProcessStep].title}
                    </h3>
                    <p className="text-[15px] text-gray-300 leading-[1.65] mb-6" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                      {WORKFLOW_STEPS[activeProcessStep].body}
                    </p>

                    {/* Bullet Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                      {WORKFLOW_STEPS[activeProcessStep].bullets.map((b, bi) => (
                        <div key={bi} className="flex items-center gap-2.5">
                          <div className="w-[5px] h-[5px] rounded-full shrink-0" style={{ background: '#5D00D6' }} />
                          <span className="text-[13px] text-gray-200" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Timeframe card */}
                  <div
                    className="shrink-0 flex flex-col items-center justify-center rounded-[12px] px-5 py-5 self-start"
                    style={{ background: 'rgba(93,0,214,0.15)', border: '1px solid rgba(93,0,214,0.25)', minWidth: 120 }}
                  >
                    <span className="text-[20px] font-mono font-semibold text-[#a166ff] text-center leading-tight">{WORKFLOW_STEPS[activeProcessStep].time}</span>
                    <span className="text-[11px] text-gray-400 mt-1" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>timeline</span>
                  </div>
                </div>

                {/* Quote */}
                <div
                  className="p-4 rounded-r-[8px] mb-6"
                  style={{ borderLeft: '2.5px solid #5D00D6', background: 'rgba(93,0,214,0.08)' }}
                >
                  <p className="text-[13px] italic text-gray-300 leading-relaxed" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                    &ldquo;{WORKFLOW_STEPS[activeProcessStep].quote}&rdquo;
                  </p>
                  <p className="text-[12px] font-semibold text-white mt-1.5" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                    {WORKFLOW_STEPS[activeProcessStep].attribution}
                  </p>
                </div>

                {/* Navigation row */}
                <div
                  className="flex items-center justify-between pt-4 gap-4"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <button
                    onClick={() => setActiveProcessStep(p => Math.max(0, p - 1))}
                    disabled={activeProcessStep === 0}
                    className="px-4 py-2 rounded-full text-[13px] font-medium transition-opacity"
                    style={{ borderColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)', opacity: activeProcessStep === 0 ? 0.3 : 1 }}
                  >← Previous</button>

                  <span className="text-[12px] font-mono text-gray-500">{activeProcessStep + 1} of 4</span>

                  {activeProcessStep < 3 ? (
                    <button
                      onClick={() => setActiveProcessStep(p => Math.min(3, p + 1))}
                      className="px-5 py-2 rounded-full text-[13px] font-medium text-white transition-colors hover:bg-[#4d00b3]"
                      style={{ background: '#5D00D6' }}
                    >Next step →</button>
                  ) : (
                    <a
                      href="#audit-form"
                      onClick={e => { e.preventDefault(); document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                      className="px-5 py-2 rounded-full text-[13px] font-medium text-white transition-colors hover:bg-[#4d00b3]"
                      style={{ background: '#5D00D6' }}
                    >Get the Right Setup →</a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </FadeIn>

          {/* Closing line */}
          <FadeIn delay={0.5} className="mt-10 text-center">
            <p className="text-[22px] md:text-[26px] italic text-[#a166ff] font-medium" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
              "Most businesses don't notice the switch. That's exactly the point."
            </p>
          </FadeIn>

        </div>
      </section>


      {/* SECTION 7.5 - TESTIMONIALS (Imported from Homepage) */}
      <WpFAQAndFeedback showFAQ={false} testimonials={TELCO_TESTIMONIALS} />

      {/* CASE STUDIES */}
      <WpCaseStudies 
        title="Real outcomes for local business" 
        eyebrow="SUCCESS STORIES"
        articles={[
          {
            tag: 'RETAIL',
            title: 'Multi-site office stops the dropouts',
            desc: "A growing business with 3 sites was experiencing slow speeds and call dropouts. C9 reviewed their current connection, recommended a suitable high-performance solution, and optimised their internal setup.",
            img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop',
            videoText: 'Stability Restored',
            href: '/case-studies/retail-pos-stabilisation'
          },
          {
            tag: 'PROFESSIONAL SERVICES',
            title: 'Law firm slashes telco costs by 40%',
            desc: "Legacy systems were costing this 20-person firm thousands. C9 migrated their entire voice and data stack to a unified managed system. Result: $1,200 monthly savings and a phone system that works on any device.",
            img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop',
            videoText: 'Cost Efficiency Found',
            href: '/case-studies/legal-firm-takeover'
          },
          {
            tag: 'NEW BUSINESS',
            title: 'High-demand site gets guaranteed uptime',
            desc: "For a factory with data-intensive operations, downtime is lost revenue. C9 deployed a managed Fibre connection with 4G failover. Result: 99.99% uptime and zero interruptions during peak hours.",
            img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
            videoText: 'Operational Continuity',
            href: '/case-studies/greenfield-site-rollout'
          }
        ]}
      />




      <AccreditationBar />

      {/* ── Consultation ─────────────────────────────────────────── */}
      <div id="audit-form">
        <WpConsultationForm 
          showHeader={false}
          eyebrow="GET THE RIGHT SETUP"
          title="Get the right connectivity setup for your business"
          description="Book a session with our senior experts to review your current setup and design a roadmap for reliable, consistent connectivity. No obligation, just a clear plan."
          formTitle="Get the Right Setup"
        />
      </div>


      {/* STICKY MOBILE BAR */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-[72px] bg-[#0c1024] border-t border-[#5D00D6]/40 z-[999] px-6 py-2 flex items-center justify-between animate-fade-in-up">
        <a href="tel:1800000C9 phone system" className="flex items-center gap-2 text-white text-[15px] font-bold font-proxima">
          <div className="w-8 h-8 rounded-full bg-[#5D00D6]/20 flex items-center justify-center">
             <Phone size={14} className="text-[#a166ff] fill-current" />
          </div>
          1800 000 C9 phone system
        </a>
        <C9Button className="h-11 px-6">
          Get a Quote
        </C9Button>
      </div>

    </div>
  );
}
