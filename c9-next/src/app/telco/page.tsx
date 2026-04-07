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
    title: "Business NBN",
    body: "Unlimited data. Static IP. 99.99% uptime SLA with financial credits if we miss the mark. Best connection at your address \u2014 guaranteed.",
    metrics: [{ val: "99.99%", label: "uptime" }, { val: "1Gbps", label: "max speed" }],
    cta: "See NBN Plans",
    link: "/nbn",
    img: "/images/nbn-feature.jpg"
  },
  {
    icon: PhoneCall,
    tag: "VOICE",
    title: "C9X Cloud Phone System",
    body: "80+ features. $0 hardware. $0 setup. Your team live in 48 hours. Works on any device. From $20 per user per month.",
    metrics: [{ val: "80+", label: "features" }, { val: "$20", label: "/user/mo" }],
    cta: "Explore C9X",
    link: "/c9x",
    img: "/images/voice-feature.jpg",
    imgPosition: "object-[80%_center]"
  },
  {
    icon: Smartphone,
    tag: "MOBILE",
    title: "Business Mobile",
    body: "5G across 98.5% of Australia. Shared data across your whole team. Add or remove SIMs any time. One bill. No lock-in. Full stop.",
    metrics: [{ val: "98.5%", label: "5G coverage" }, { val: "1", label: "bill" }],
    cta: "See Mobile Plans",
    link: "/mobile",
    img: "/images/mobile-feature.jpg",
    imgPosition: "object-[center_70%]"
  },
  {
    icon: PhoneIncoming,
    tag: "INBOUND",
    title: "1300 & 1800 Numbers",
    body: "Give your business a national presence. Smart routing, IVR, and on-hold messages set up in hours. Every call handled professionally.",
    metrics: [{ val: "1300", label: "& 1800" }, { val: "24/7", label: "routing" }],
    cta: "See Inbound Options",
    link: "/inbound",
    img: "/images/inbound-feature.jpg",
    imgPosition: "object-center"
  },
  {
    icon: GitBranch,
    tag: "SIP TRUNKING",
    title: "SIP Trunking",
    body: "Keep your existing hardware. Connect via SIP and cut your call costs by up to 40%. Crystal-clear calls guaranteed.",
    metrics: [{ val: "40%", label: "cost saving" }, { val: "$0", label: "hardware" }],
    cta: "Learn About SIP",
    link: "/sip",
    img: "/images/sip-feature.jpg",
    imgPosition: "object-center"
  },
];

const WORKFLOW_STEPS = [
  {
    icon: Search,
    label: "Free consultation",
    time: "Day 1",
    tag: "STEP 1 OF 5",
    title: "We learn your business first.",
    body: "No sales pitch. No generic proposals. We start by understanding your current setup, what you're paying, and what's not working. This call takes 30 minutes and it's completely free.",
    bullets: ["Current costs reviewed", "Pain points identified", "No obligation to proceed", "Australian specialist only"],
    quote: "The first call felt like talking to someone who already knew our problems. They didn't try to sell us anything.",
    attribution: "— Operations Manager, Healthcare Group, Sydney"
  },
  {
    icon: FileText,
    label: "We build your solution",
    time: "Days 1–3",
    tag: "STEP 2 OF 5",
    title: "Built for your business. Not a template.",
    body: "We design your voice, internet, and mobile stack from scratch — around your team size, your sites, and your workflow. You see the full plan before anything is ordered or signed.",
    bullets: ["Custom solution designed", "Exact pricing provided", "No hidden costs", "You approve before we start"],
    quote: "They came back in 2 days with a proposal that was cheaper and better than anything we'd seen from Telstra.",
    attribution: "— Director, Legal Firm, Melbourne"
  },
  {
    icon: RefreshCw,
    label: "Number porting",
    time: "Week 1",
    tag: "STEP 3 OF 5",
    title: "Your numbers stay. Your clients never notice.",
    body: "We manage the full number porting process. Your existing phone numbers transfer to C9 without interruption. Your clients dial the same number they always have.",
    bullets: ["All existing numbers kept", "Zero client disruption", "C9 handles all paperwork", "Porting tracked in real time"],
    quote: "We kept every number we've had for 12 years. Not one client even knew we switched providers.",
    attribution: "— IT Manager, Retail Chain, Brisbane"
  },
  {
    icon: Settings,
    label: "Full configuration",
    time: "Week 1–2",
    tag: "STEP 4 OF 5",
    title: "We set everything up. You approve it.",
    body: "We configure your phone system, call flows, IVR menus, and internet services — then test everything before a single live call goes through. Your team is trained on day one.",
    bullets: ["Full system configured", "IVR and call flows built", "Tested before go-live", "Team trained on day 1"],
    quote: "The IVR setup took 20 minutes and we did it together on a screen share. No IT contractor needed.",
    attribution: "— Business Manager, Education Group, Perth"
  },
  {
    icon: CheckCircle2,
    label: "You go live",
    time: "Within 48hrs",
    tag: "STEP 5 OF 5",
    title: "Live. Supported. Done.",
    body: "Your system goes live and we stay on-call for your entire first week. Most businesses don't notice the switch. That's exactly the point.",
    bullets: ["Live within 48 hours", "On-call first week support", "Account manager assigned", "Most businesses notice nothing"],
    quote: "Day one we were live. Day two we forgot we'd ever been with Telstra.",
    attribution: "— CEO, Community Foundation, Brisbane"
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
    <div className="pt-20 bg-white">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] bg-[#0c1024] flex items-center overflow-hidden py-24">
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
                <div className="c9-eyebrow !text-gray-400 mb-6 !tracking-widest">
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
                  One provider.<br />Zero telco headaches.
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p className="c9-body !text-gray-300 mb-8 max-w-xl">
                  Voice, internet, and mobile for Australian businesses &mdash; one account, one bill, one team.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-3 mb-10">
                  {['NBN Co Accredited', 'No Lock-in Contracts', '1,000+ Businesses'].map((pill, i) => (
                    <span key={i} className="c9-eyebrow !text-[#a166ff] !text-[11px] px-4 py-2 border border-[#5D00D6]/40 bg-[#5D00D6]/10 rounded-full flex items-center gap-1.5">
                      <span className="text-xs">✓</span> {pill}
                    </span>
                  ))}
                </div>
              </FadeIn>
              
              <FadeIn delay={0.5}>
                <div className="flex flex-wrap items-center gap-4">
                  <C9Button size="lg" className="px-10 rounded-full">
                    Get My Free Telco Audit <ArrowRight size={18} className="ml-2" />
                  </C9Button>
                  <C9Button variant="outline" size="lg" className="px-10 text-white border-white/20 hover:bg-white/10 rounded-full">
                    See What's Included <ArrowDown size={18} className="ml-2" />
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
                    { icon: Wifi, name: "Business NBN \u2014 1Gbps", status: "99.99% uptime", ok: true },
                    { icon: PhoneCall, name: "C9X Voice \u2014 14 users online", status: "3 calls active", ok: false },
                    { icon: Smartphone, name: "Mobile \u2014 8 SIMs", status: "All active", ok: true }
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4 text-[15px] text-white font-medium">
                        <row.icon size={20} className="opacity-80" />
                        {row.name}
                      </div>
                      <div className={`text-[14px] font-semibold ${row.ok ? 'text-[#00C27C]' : 'text-[#a166ff]'}`}>
                        {row.status}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-8 bg-black/20 p-5 rounded-[16px] border border-white/5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[28px] font-bold text-white leading-none">80+</span>
                    <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">C9X features</span>
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

      {/* SERVICES */}
      <section id="included" className="py-24 md:py-32 bg-[#F4F0FA]/50">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          
          <div className="max-w-[700px] mb-16">
            <FadeIn>
              <Label>WHAT'S INCLUDED</Label>
            </FadeIn>
            <FadeIn delay={0.1}>
              <H2 className="mb-6">Everything your business needs to stay connected. Nothing you don't.</H2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Body>Voice. Internet. Mobile. All under one C9 account. One bill. One team who knows your name.</Body>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <FadeIn 
                key={i} 
                delay={i * 0.1} 
                className={`h-full flex ${i === 0 ? 'lg:col-span-2 md:col-span-2' : i === 1 ? 'lg:col-span-1 md:col-span-2' : 'col-span-1 md:col-span-1'}`}
              >
                <div className="bg-white border border-gray-200 rounded-[20px] shadow-sm flex flex-col w-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  
                  {/* --- IMAGE CONTAINER --- */}
                  <div className={`w-full ${i === 0 || i === 1 || i === 2 ? 'aspect-square md:aspect-auto md:h-[300px]' : 'h-[240px] md:h-[300px]'} bg-gradient-to-br from-[#F4F0FA]/80 to-white relative flex flex-col items-center justify-center border-b border-gray-100 overflow-hidden`}>
                     {svc.img ? (
                       <div className="w-full h-full relative">
                         <img 
                           src={svc.img} 
                           alt={svc.title} 
                           className={`w-full h-full object-cover ${svc.imgPosition || 'object-center'} transition-transform duration-700 group-hover:scale-105`} 
                         />
                          <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay group-hover:bg-[#5D00D6]/20 transition-colors duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/40 via-transparent to-transparent" />
                        </div>
                     ) : (
                       <div className="w-full h-full flex flex-col items-center justify-center px-8 relative">
                         <span className="text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest border border-[#5D00D6]/20 px-4 py-2 rounded-full border-dashed bg-white/80 shadow-sm backdrop-blur-sm relative z-10 flex items-center gap-2">
                            <svc.icon size={14} /> Insert feature image here
                         </span>
                         
                         {/* Decorative background filler */}
                         <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center scale-150 pointer-events-none group-hover:scale-125 transition-transform duration-700">
                            <svc.icon size={200} strokeWidth={1} />
                         </div>
                       </div>
                     )}
                  </div>
                  {/* ---------------------------------- */}

                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <span className="c9-eyebrow mb-4 block">
                      {svc.tag}
                    </span>

                    <H3 className="mb-4">{svc.title}</H3>
                    <Body className="mb-8 flex-grow !text-[15px] !text-gray-500">
                      {svc.body}
                    </Body>

                    {/* Metrics mapped like the reference 'Deploys' stats */}
                    <div className="flex gap-10 mb-8 pb-8 border-b border-gray-100">
                      {svc.metrics.map((m, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                          <span className="c9-eyebrow !text-gray-500 !text-[11px] !tracking-wide normal-case">{m.label}</span>
                          <span className="text-[32px] md:text-[40px] font-extrabold text-[#5D00D6] leading-none tracking-tight">{m.val}</span>
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

      {/* SECTION 4 - C9X SPOTLIGHT (WpVendors Style) */}
      <section className="py-24 md:py-32 bg-[#0c1024] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(93,0,214,0.15)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px] relative z-10">
          
          <div className="flex flex-col mb-12 md:mb-16 gap-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
              <div className="max-w-4xl w-full">
                <FadeIn>
                  <Label>C9X PLATFORM</Label>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <H2 className="!text-white mt-4">
                    Your phone system is costing you more than money. It's costing you customers.
                  </H2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <Body className="!text-gray-300 max-w-2xl">
                    Every missed call during peak hours is a lost sale. Every voicemail instead of a person is your competitor's opportunity. C9X fixes this &mdash; without buying a single piece of hardware.
                  </Body>
                </FadeIn>
              </div>
              
              <FadeIn delay={0.3} className="hidden lg:flex shrink-0">
                 <C9Button size="lg" className="px-10 rounded-full">
                   Explore C9X <ArrowRight size={18} className="ml-2" />
                 </C9Button>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <div className="flex flex-nowrap overflow-x-auto gap-2 md:gap-3 pb-4 no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 w-full mt-2">
                {[
                  { id: 'overview', label: 'Platform Overview' },
                  { id: 'calling', label: 'Voice & Calling' },
                  { id: 'management', label: 'Management' },
                  { id: 'collaboration', label: 'Collaboration' },
                  { id: 'compliance', label: 'Compliance' },
                  { id: 'analytics', label: 'Analytics' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2.5 rounded-full text-[12px] md:text-[13px] font-bold transition-all duration-300 border whitespace-nowrap shrink-0 cursor-pointer z-20 ${
                      activeTab === tab.id 
                        ? 'bg-[#5D00D6] border-[#5D00D6] text-white shadow-xl shadow-purple-900/40' 
                        : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:bg-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {activeTab === 'overview' ? (
                  [
                    { title: "Never miss a call", desc: "Call queues route every inbound call to the right person, every time.", icon: PhoneIncoming },
                    { title: "Cut your phone bill by 40%", desc: "Most businesses save in month one. No hardware. No setup fee. Ever.", icon: PieChart },
                    { title: "Live in 48 hours", desc: "We port your numbers and configure everything before go-live.", icon: Clock },
                    { title: "Works on any device", desc: "Desktop. Mobile. Desk phone. Your team works from anywhere.", icon: Smartphone }
                  ].map((benefit, i) => (
                    <div key={i} className="group relative bg-[#0D0D0D] border border-white/5 p-6 md:p-8 flex flex-col h-full hover:border-[#5D00D6]/30 transition-all duration-500 overflow-hidden rounded-[20px]">
                      <benefit.icon size={28} className="text-[#a166ff] mb-6 group-hover:scale-110 transition-transform duration-500 origin-left" />
                      <h3 className="text-[20px] font-bold text-white mb-3 tracking-tight group-hover:text-[#5D00D6] transition-colors" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{benefit.title}</h3>
                      <p className="text-white/60 text-[18px] leading-relaxed font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                        {benefit.desc}
                      </p>
                    </div>
                  ))
                ) : (
                  [1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="group relative bg-[#0D0D0D] border border-white/5 p-6 md:p-8 flex flex-col h-full hover:border-[#5D00D6]/30 transition-all duration-500 overflow-hidden rounded-[20px]">
                      <div className="text-[#a166ff] mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                        {activeTab === 'calling' ? <PhoneCall size={28} /> :
                         activeTab === 'management' ? <Users size={28} /> :
                         activeTab === 'collaboration' ? <MessageSquare size={28} /> :
                         activeTab === 'compliance' ? <ShieldCheck size={28} /> :
                         <PieChart size={28} />}
                      </div>
                      <h3 className="text-[20px] font-bold text-white mb-3 tracking-tight group-hover:text-[#5D00D6] transition-colors capitalize" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{activeTab.replace('-', ' ')} Feature {i}</h3>
                      <p className="text-white/60 text-[18px] leading-relaxed font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                        Powerful enterprise-grade capabilities built instantly into your unified communications flow.
                      </p>
                    </div>
                  ))
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <FadeIn delay={0.4} className="lg:hidden mt-12 flex justify-center w-full">
             <C9Button size="lg" className="w-full">
               See SIP Trunking Plans <ArrowRight size={18} className="ml-2" />
             </C9Button>
          </FadeIn>
          
        </div>
      </section>

      {/* SECTION 5 - COMPARISON TABLE */}
      <section className="py-24 md:py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <Label className="justify-center">HOW C9 COMPARES</Label>
            </FadeIn>
            <FadeIn delay={0.1}>
              <H2 className="mb-6">We'll let the comparison do the talking.</H2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Body className="mx-auto">No spin. No fine print.<br />Just an honest side-by-side.</Body>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
            
            {/* TELSTRA CARD */}
            <FadeIn delay={0.2} className="flex h-full">
              <div className="flex flex-col w-full border border-gray-200 rounded-[20px] bg-white pt-10 pb-8 px-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                <H3>Telstra</H3>
                <Body className="mt-3 min-h-[72px] !text-[16px]">
                  The industry default focus typically built for massive enterprise logic.
                </Body>

                <div className="mt-8 mb-8">
                  <span className="text-[28px] font-bold text-[#0c1024] tracking-tight">Call for pricing</span>
                  <p className="text-gray-500 text-[14px] mt-1">24 months standard contract</p>
                </div>

                <div className="h-px bg-gray-100 w-full mb-8"></div>
                
                <span className="c9-eyebrow !text-gray-400 mb-6 block">What you get</span>
                
                <ul className="space-y-4 flex-grow text-gray-600 text-[15px]">
                  <li className="flex items-start gap-4"><XCircle size={18} className="text-gray-300 shrink-0 mt-0.5" /> Mostly offshore support</li>
                  <li className="flex items-start gap-4"><XCircle size={18} className="text-gray-300 shrink-0 mt-0.5" /> Dedicated AM for enterprise only</li>
                  <li className="flex items-start gap-4"><MinusCircle size={18} className="text-gray-300 shrink-0 mt-0.5" /> Separate service billing</li>
                  <li className="flex items-start gap-4"><XCircle size={18} className="text-gray-300 shrink-0 mt-0.5" /> 3-5 business days fault response</li>
                  <li className="flex items-start gap-4"><XCircle size={18} className="text-gray-300 shrink-0 mt-0.5" /> Telstra only network locking</li>
                </ul>
              </div>
            </FadeIn>

            {/* TPG OPTUS CARD */}
            <FadeIn delay={0.3} className="flex h-full">
              <div className="flex flex-col w-full border border-gray-200 rounded-[20px] bg-white pt-10 pb-8 px-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                <H3>TPG / Optus</H3>
                <Body className="mt-3 min-h-[72px] !text-[16px]">
                  Standard commodity connectivity prioritizing volume.
                </Body>

                <div className="mt-8 mb-8">
                  <span className="text-[28px] font-bold text-[#0c1024] tracking-tight">Varies</span>
                  <p className="text-gray-500 text-[14px] mt-1">12 - 24 months contract</p>
                </div>

                <div className="h-px bg-gray-100 w-full mb-8"></div>
                
                <span className="c9-eyebrow !text-gray-400 mb-6 block">What you get</span>
                
                <ul className="space-y-4 flex-grow text-gray-600 text-[15px]">
                  <li className="flex items-start gap-4"><XCircle size={18} className="text-gray-300 shrink-0 mt-0.5" /> Offshore support explicitly</li>
                  <li className="flex items-start gap-4"><XCircle size={18} className="text-gray-300 shrink-0 mt-0.5" /> No dedicated account manager</li>
                  <li className="flex items-start gap-4"><MinusCircle size={18} className="text-gray-300 shrink-0 mt-0.5" /> Separate service billing</li>
                  <li className="flex items-start gap-4"><XCircle size={18} className="text-gray-300 shrink-0 mt-0.5" /> 5-7 days fault response</li>
                  <li className="flex items-start gap-4"><XCircle size={18} className="text-gray-300 shrink-0 mt-0.5" /> Not available 4G failover standard</li>
                </ul>
              </div>
            </FadeIn>

            {/* C9 CARD */}
            <FadeIn delay={0.4} className="flex h-full">
              <div className="relative flex flex-col w-full border-2 border-[#5D00D6] rounded-[20px] bg-white pt-10 pb-8 px-8 shadow-2xl shadow-purple-900/10 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#5D00D6] text-white c9-eyebrow !text-white px-4 py-1.5 rounded-full !text-[12px] whitespace-nowrap">
                  Most Businesses Switch To
                </div>

                <H3 className="!text-[#5D00D6] tracking-tight">C9 Communications</H3>
                <Body className="mt-3 min-h-[72px] !text-[16px] !text-gray-600">
                  Built precisely for modern Australian businesses that require elite support.
                </Body>

                <div className="mt-8 mb-8 flex flex-col items-start gap-3">
                  <span className="text-[28px] font-bold text-[#0c1024] tracking-tight">Transparent pricing</span>
                  <C9Button className="w-full rounded-full">
                    See Detailed Plans
                  </C9Button>
                </div>

                <div className="h-px bg-gray-100 w-full mb-8"></div>
                
                <span className="c9-eyebrow !text-[#5D00D6] mb-6 block">Every feature included</span>
                
                <ul className="space-y-4 flex-grow text-[#0c1024] text-[15px] font-medium">
                  <li className="flex items-start gap-4"><CheckCircle2 size={18} className="text-[#00C27C] shrink-0 mt-0.5" /> 100% onshore Australian support</li>
                  <li className="flex items-start gap-4"><CheckCircle2 size={18} className="text-[#00C27C] shrink-0 mt-0.5" /> Dedicated account manager always</li>
                  <li className="flex items-start gap-4"><CheckCircle2 size={18} className="text-[#00C27C] shrink-0 mt-0.5" /> 0 lock-in contracts</li>
                  <li className="flex items-start gap-4"><CheckCircle2 size={18} className="text-[#00C27C] shrink-0 mt-0.5" /> One unified bill (Voice + Data + Mobile)</li>
                  <li className="flex items-start gap-4"><CheckCircle2 size={18} className="text-[#00C27C] shrink-0 mt-0.5" /> Included 4G failover backup</li>
                  <li className="flex items-start gap-4"><CheckCircle2 size={18} className="text-[#00C27C] shrink-0 mt-0.5" /> SLA guaranteed same-day response</li>
                  <li className="flex items-start gap-4"><CheckCircle2 size={18} className="text-[#00C27C] shrink-0 mt-0.5" /> Carrier-neutral network (5 carriers)</li>
                </ul>
              </div>
            </FadeIn>
            
          </div>
          
        </div>
      </section>

      {/* SECTION 6 - HOW IT WORKS (Interactive Workflow) */}
      <section className="py-24 md:py-32 bg-[#0c1024] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(93,0,214,0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px] relative z-10">

          {/* Header */}
          <FadeIn className="text-center max-w-[640px] mx-auto mb-16">
            <Label className="justify-center">OUR PROCESS</Label>
            <H2 className="mb-5 !text-white text-center">Switching to C9 takes less time than your next Telstra hold queue.</H2>
            <Body className="!text-gray-300">We've done this 1,000+ times. Here's exactly what happens.</Body>
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

                  <span className="text-[12px] font-mono text-gray-500">{activeProcessStep + 1} of 5</span>

                  {activeProcessStep < 4 ? (
                    <button
                      onClick={() => setActiveProcessStep(p => Math.min(4, p + 1))}
                      className="px-5 py-2 rounded-full text-[13px] font-medium text-white transition-colors hover:bg-[#4d00b3]"
                      style={{ background: '#5D00D6' }}
                    >Next step →</button>
                  ) : (
                    <a
                      href="#audit-form"
                      onClick={e => { e.preventDefault(); document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                      className="px-5 py-2 rounded-full text-[13px] font-medium text-white transition-colors hover:bg-[#4d00b3]"
                      style={{ background: '#5D00D6' }}
                    >Book My Free Audit →</a>
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

      {/* SECTION      {/* SECTION 8 - WHO WE WORK WITH (Animated Marquee) */}
      <section className="relative py-24 md:py-32 bg-[#f8f7fc] overflow-hidden">
        <div className="container mx-auto px-8 max-w-[1240px]">
          
          {/* HEADER */}
          <div className="text-center mb-16">
            <FadeIn>
              <span className="block text-[#5D00D6] text-[13px] font-bold uppercase tracking-[0.3em] mb-4" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>WHO WE WORK WITH</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-[32px] md:text-[40px] font-bold text-[#0c1024] tracking-tight mb-8">
                 Built for your industry.<br />Not just your postcode.
              </h2>
            </FadeIn>
          </div>

          {/* MARQUEE CONTAINER */}
          <div className="relative h-[750px] overflow-hidden mask-fade-v mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start h-full">
              {[
                {
                  col: "up",
                  items: [
                    {
                      tag: 'HEALTHCARE',
                      icon: PhoneCall,
                      title: 'Voice & Connectivity for Healthcare Providers',
                      desc: "Never miss a patient call again. C9X routes after-hours calls, manages callback queues, and records every call for AHPRA compliance.",
                      metrics: [{ value: '40%', label: 'fewer missed calls' }, { value: '48hr', label: 'avg go-live' }]
                    },
                    {
                      tag: 'REAL ESTATE',
                      icon: Home,
                      title: 'Fast Telco for Fast-Moving Agencies',
                      desc: "Every after-hours enquiry captured and routed instantly. Mobile softphone app. CRM integration with Rex and HubSpot. No missed leads.",
                      metrics: [{ value: '0', label: 'missed leads' }, { value: '28%', label: 'faster response' }]
                    }
                  ]
                },
                {
                  col: "down",
                  items: [
                    {
                      tag: 'PROFESSIONAL SERVICES',
                      icon: Briefcase,
                      title: 'Telco for Law, Finance & Consulting Firms',
                      desc: "Every client call logged automatically. Unlimited recording. 100% Australian data storage. CRM integration with HubSpot, Salesforce.",
                      metrics: [{ value: '100%', label: 'AU data storage' }, { value: '40+', label: 'integrations' }]
                    },
                    {
                      tag: 'RETAIL',
                      icon: ShoppingBag,
                      title: 'Telco That Keeps Your Stores Connected',
                      desc: "Multi-site call routing, real-time analytics, and EFTPOS-independent connectivity — because every minute of downtime costs you a sale.",
                      metrics: [{ value: '15min', label: 'fault response' }, { value: '0', label: 'downtime' }]
                    }
                  ]
                },
                {
                  col: "up",
                  items: [
                    {
                      tag: 'NON-PROFIT',
                      icon: Heart,
                      title: 'Enterprise Telco at NFP Prices',
                      desc: "We stretch every telco dollar with NFP-specific pricing. Replace expensive phone systems with C9X — more features, lower cost.",
                      metrics: [{ value: '78%', label: 'cost reduction' }, { value: '$0', label: 'setup fees' }]
                    },
                    {
                      tag: 'EDUCATION',
                      icon: BookOpen,
                      title: 'Connected Classrooms & Campuses',
                      desc: "Unify multiple campuses under one phone number with smart IVR routing. Business NBN at every site. Microsoft 365 integration.",
                      metrics: [{ value: '1', label: 'global number' }, { value: '60%', label: 'fewer redirects' }]
                    }
                  ]
                }
              ].map((column, colIdx) => (
                <div 
                  key={colIdx} 
                  className={`flex flex-col gap-8 ${column.col === 'up' ? 'animate-marquee-v-up' : 'animate-marquee-v-down'} hover:pause ${colIdx === 2 ? 'hidden lg:flex' : colIdx === 1 ? 'hidden md:flex' : 'flex'}`}
                >
                  {[...column.items, ...column.items, ...column.items, ...column.items].map((card, i) => (
                    <IndustryCard key={`${colIdx}-${i}`} industry={card} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12">
             <Link href="/industries">
               <C9Button size="lg" className="shadow-2xl hover:gap-4 group">
                 Book My Free Audit <ArrowRight size={22} className="ml-2 transition-transform group-hover:translate-x-2" />
               </C9Button>
             </Link>
          </div>

        </div>
      </section>




      {/* SECTION 9 - COMPLIANCE */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          <FadeIn>
             <Label className="justify-center mb-10">ACCREDITED, LICENSED & COMPLIANT</Label>
          </FadeIn>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "NBN Co", desc: "Accredited RSP" },
              { name: "APNIC", desc: "Member" },
              { name: "TIO", desc: "Member" },
              { name: "ISO 27001", desc: "Certified" },
              { name: "ACMA", desc: "Registered" }
            ].map((badge, i) => (
              <FadeIn key={i} delay={0.1 + (i * 0.1)}>
                <div className="bg-white border border-gray-200 rounded-xl px-8 py-6 w-[200px] flex flex-col items-center justify-center text-center transition-all hover:scale-[1.03] hover:border-[#5D00D6] hover:shadow-lg shadow-purple-900/5 duration-200 cursor-default">
                  <span className="font-bold text-[#0c1024] text-[16px] font-proxima leading-none mb-1.5">{badge.name}</span>
                  <span className="text-[12px] text-gray-500 font-proxima lowercase tracking-wide">{badge.desc}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consultation ─────────────────────────────────────────── */}
      <WpConsultationForm 
        showHeader={false}
        eyebrow="FREE TELCO AUDIT"
        title="Your telco headaches stop here."
        description="Book a 30-minute session with our senior telco engineers to review your current costs and design a roadmap for 99.99% uptime."
        formTitle="Request Free Telco Audit"
      />


      {/* STICKY MOBILE BAR */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-[72px] bg-[#0c1024] border-t border-[#5D00D6]/40 z-[999] px-6 py-2 flex items-center justify-between animate-fade-in-up">
        <a href="tel:1800000C9X" className="flex items-center gap-2 text-white text-[15px] font-bold font-proxima">
          <div className="w-8 h-8 rounded-full bg-[#5D00D6]/20 flex items-center justify-center">
             <Phone size={14} className="text-[#a166ff] fill-current" />
          </div>
          1800 000 C9X
        </a>
        <C9Button className="h-11 px-6">
          Get a Quote
        </C9Button>
      </div>

    </div>
  );
}
