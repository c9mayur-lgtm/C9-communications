'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Monitor, Layers, Smartphone, Zap, CheckCircle2, Phone, Mail, ChevronRight, Sparkles, Maximize, Touchpad, Cloud, Settings, ShieldCheck, Eye, Box, ScreenShare, Wifi, Sun, Shield, Clock } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

const BRAND = {
  primary: '#BF2F70',
  secondary: '#A32469',
  accent: '#DB3D45',
  light: '#ED9EA2',
  dark: '#0d0d0d'
};

/* ── Hero Section ────────────────────────────────────────────────── */
export function LuminaHero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#BF2F700a_0%,transparent_50%)]" />
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#BF2F70]/5 blur-[120px] rounded-full animate-pulse" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ED9EA2] mb-8 inline-block border-b border-[#BF2F70]/30 pb-2">
              Next-Gen Display Intelligence
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-bold text-white leading-[0.95] tracking-tighter mb-10">
              Screens <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF2F70] via-[#DB3D45] to-[#ED9EA2]">Defined.</span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-xl mb-12 font-medium">
              C9 Lumina delivers the world's most advanced digital signage ecosystems. 
              From MicroLED architecture to global cloud orchestration, we engineer visual authority.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="#solutions" className="bg-[#BF2F70] text-white font-bold text-sm px-10 py-5 flex items-center gap-3 hover:bg-[#A32469] transition-all shadow-[0_20px_40px_rgba(191,47,112,0.3)]">
                Explore Portfolio 
              </Link>
              <Link href="#contact" className="border border-white/10 text-white font-bold text-sm px-10 py-5 hover:bg-white/5 transition-all">
                Request Specifications
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-gradient-to-tr from-[#0a0a0a] to-[#151515] p-2 border border-white/10 shadow-2xl">
              <img src="/lumina-the-wall.png" alt="The Wall" className="w-full h-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>
            {/* Floating Spec Tag */}
            <div className="absolute -top-10 -right-10 bg-black/80 backdrop-blur-md border border-[#BF2F70]/30 p-6 z-20">
              <p className="text-[#BF2F70] font-black text-2xl mb-1">0.84mm</p>
              <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Pixel Pitch Precision</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Portfolio / Solutions Grid ────────────────────────────────── */
export function LuminaCategories() {
  const categories = [
    {
      id: 'led',
      title: 'MicroLED & Video Walls',
      subtitle: 'Premium Visual Core',
      desc: 'The Wall technology providing deep blacks and vibrant colors with no visible seams.',
      icon: Maximize,
      image: '/lumina-the-wall.png',
      specs: ['0.84mm Pixel Pitch', '2000 Nit Brightness', 'MicroLED Technology']
    },
    {
      id: 'outdoor',
      title: 'Outdoor & High-Bright',
      subtitle: 'All-Weather Durability',
      desc: 'Ruggedized, IP56-rated displays designed for direct sunlight and extreme temperatures.',
      icon: Sun,
      image: '/lumina-outdoor.png',
      specs: ['IP56 Certified', 'Anti-Reflection Glass', '3500 Nit Brightness']
    },
    {
      id: 'interactive',
      title: 'Interactive Collaborative',
      subtitle: 'Modern Workplace',
      desc: 'Seamless touch-enabled displays and digital whiteboards for the future of meeting rooms.',
      icon: Touchpad,
      image: '/lumina-interactive.png',
      specs: ['4K Multi-Touch', 'Passive Stylus Support', 'Cross-Platform OS']
    },
    {
      id: 'smart',
      title: 'Commercial Smart Signage',
      subtitle: 'Standardized Excellence',
      desc: 'Pro-grade 4K UHD displays for retail and hospitality, built for 24/7 reliability.',
      icon: Monitor,
      image: '/lumina-smart.png',
      specs: ['4K UHD Resolution', '24/7 Duty Cycle', 'Embedded SOC Player']
    },
    {
      id: 'kiosk',
      title: 'Self-Service Kiosks',
      subtitle: 'Retail Automation',
      desc: 'All-in-one ordering and wayfinding solutions designed for customer independence.',
      icon: Smartphone,
      image: '/lumina-kiosk.png',
      specs: ['Integrated Payment', 'Tempered Touch Glass', 'Modular Peripheral Support']
    }
  ];

  return (
    <section id="solutions" className="bg-[#050505] py-32 border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold text-[#BF2F70] uppercase tracking-[0.3em] mb-4">Depth of Offering</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              A Comprehensive Display <br />
              <span className="text-white/30">Architecture.</span>
            </h2>
          </div>
          <p className="text-sm text-white/40 max-w-sm mb-2 leading-relaxed">
            From single-site retail to global enterprise networks, we provide the hardware and management depth required for mission-critical visual communications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.id}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="relative bg-[#0a0a0a] border border-white/5 overflow-hidden flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[9px] font-bold text-[#A32469] uppercase tracking-widest mb-1">{cat.subtitle}</p>
                    <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                  </div>
                  <cat.icon className="text-[#BF2F70]/30 group-hover:text-[#BF2F70] transition-colors" size={24} />
                </div>
                <p className="text-sm text-white/40 leading-relaxed mb-8">{cat.desc}</p>
                <div className="space-y-3 mt-auto">
                  {cat.specs.map(s => (
                    <div key={s} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#BF2F70]" />
                      <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#BF2F70] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Software / Intelligence Section ───────────────────────────── */
export function LuminaCMS() {
  return (
    <section id="managed-content" className="bg-black py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeIn}>
            <p className="text-[10px] font-bold text-[#BF2F70] uppercase tracking-[0.3em] mb-6">Orchestration & Control</p>
            <h2 className="text-5xl font-bold text-white tracking-tight mb-8">
              Lumina IQ: The Software <br />
              <span className="text-[#ED9EA2]">Behind the Impact.</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-10">
              Hardware is only as powerful as the intelligence that drives it. Our cloud-native CMS platform provides absolute authority over your global display network.
            </p>

            <div className="grid sm:grid-cols-2 gap-10 mb-12">
               {[
                 { icon: Cloud, title: 'Cloud Core', desc: 'Secure remote updates for any display, anywhere.' },
                 { icon: Shield, title: 'Hardened Security', desc: 'SOC 2 compliant infrastructure for peace of mind.' },
                 { icon: Clock, title: 'Smart Scheduling', desc: 'Automated content delivery based on time or data triggers.' },
                 { icon: Wifi, title: 'Offline Playback', desc: 'Zero downtime with edge-cached content delivery.' }
               ].map(item => (
                 <div key={item.title}>
                   <item.icon size={28} className="text-[#BF2F70] mb-4" />
                   <h4 className="text-white font-bold mb-2">{item.title}</h4>
                   <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>

            <Link href="#contact" className="inline-flex items-center gap-3 text-sm font-bold text-white border-b border-[#BF2F70] pb-2 hover:text-[#ED9EA2] transition-all">
              Request Platform Architecture Whitepaper 
            </Link>
          </motion.div>

          <div className="relative">
             <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-lg shadow-2xl">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#BF2F70]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                   </div>
                   <div className="ml-auto text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Global Network Monitor</div>
                </div>
                <div className="aspect-video bg-black flex items-center justify-center relative overflow-hidden">
                   <div className="grid grid-cols-4 gap-3 w-full h-full p-4">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="bg-white/5 border border-white/5 rounded flex items-center justify-center group-hover:border-[#BF2F70]/30 transition-colors">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#BF2F70]/40 group-hover:bg-[#BF2F70] animate-pulse" />
                        </div>
                      ))}
                   </div>
                   {/* Overlay Stats */}
                   <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="text-center">
                         <p className="text-white font-bold text-3xl mb-1">99.98%</p>
                         <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Uptime Verified</p>
                      </div>
                   </div>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-[#BF2F70]/20 blur-[80px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Industry Specific Sections ────────────────────────────────── */
export function LuminaIndustries() {
  const industries = [
    {
      title: 'Retail & Hospitality',
      icon: Smartphone,
      points: ['Digital Menu Boards', 'Interactive Wayfinding', 'Brand Takeovers']
    },
    {
      title: 'Corporate & Education',
      icon: ScreenShare,
      points: ['Boardroom Visuals', 'Digital Lobby Art', 'Internal Messaging']
    },
    {
      title: 'Public & Outdoor',
      icon: Sun,
      points: ['High-Bright Totems', 'Transit Signage', 'Emergency Alerts']
    },
    {
      title: 'Specialized AV',
      icon: Box,
      points: ['MicroLED Installations', 'Curved LED Walls', 'Transparent Displays']
    }
  ];

  return (
    <section className="bg-[#050505] py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Engineered for Specific Verticals.</h2>
          <div className="w-20 h-1 bg-[#BF2F70] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {industries.map((ind, i) => (
            <div key={i} className="bg-black p-12 hover:bg-[#0a0a0a] transition-all">
              <ind.icon size={32} className="text-[#BF2F70] mb-8 group-hover:scale-110" />
              <h4 className="text-xl font-bold text-white mb-6">{ind.title}</h4>
              <ul className="space-y-4">
                {ind.points.map(p => (
                  <li key={p} className="text-xs text-white/40 flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#BF2F70]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact Section ───────────────────────────────────────────── */
export function LuminaContact() {
  return (
    <section id="contact" className="bg-black py-32 relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div {...fadeIn}>
            <p className="text-[10px] font-bold text-[#BF2F70] uppercase tracking-[0.3em] mb-6">Strategic Partnership</p>
            <h2 className="text-5xl font-bold text-white tracking-tight mb-8">
              Expertly Guided <br />
              <span className="text-white/30">From Day 0.</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-12">
              We don't just sell screens; we architect visual experiences that drive measurable business outcomes. Let's discuss your specific environment.
            </p>

            <div className="space-y-12">
               <div className="flex gap-6">
                  <div className="w-14 h-14 border border-white/10 flex items-center justify-center text-[#BF2F70]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-1">Direct Sales</p>
                    <p className="text-2xl font-bold text-white">1300 293 332</p>
                  </div>
               </div>
               <div className="flex gap-6">
                  <div className="w-14 h-14 border border-white/10 flex items-center justify-center text-[#BF2F70]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-1">Project Enquiries</p>
                    <p className="text-2xl font-bold text-white">sales@c9lumina.com.au</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="bg-[#0a0a0a] border border-white/5 p-12 lg:p-16 relative"
          >
             <h3 className="text-2xl font-bold text-white mb-10">Start a Consultation</h3>
             <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <label htmlFor="lumina-name" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Full Name</label>
                      <input id="lumina-name" type="text" required className="w-full bg-black border border-white/10 px-5 py-4 text-white text-sm focus:border-[#BF2F70] outline-none transition-colors" />
                   </div>
                   <div className="space-y-3">
                      <label htmlFor="lumina-email" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Work Email</label>
                      <input id="lumina-email" type="email" required className="w-full bg-black border border-white/10 px-5 py-4 text-white text-sm focus:border-[#BF2F70] outline-none transition-colors" />
                   </div>
                </div>
                 <div className="space-y-3">
                    <label htmlFor="lumina-type" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Project Type</label>
                    <select id="lumina-type" className="w-full bg-black border border-white/10 px-5 py-4 text-white/40 text-sm focus:border-[#BF2F70] outline-none transition-colors appearance-none cursor-pointer">
                       <option>MicroLED / Video Wall</option>
                       <option>Outdoor / Ruggedized</option>
                       <option>Interactive Collaboration</option>
                       <option>Managed Signage Network</option>
                    </select>
                 </div>
                 <div className="space-y-3">
                    <label htmlFor="lumina-message" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Message</label>
                    <textarea id="lumina-message" rows={4} className="w-full bg-black border border-white/10 px-5 py-4 text-white text-sm focus:border-[#BF2F70] outline-none transition-colors resize-none" />
                 </div>
                <button className="w-full bg-[#BF2F70] text-white font-bold py-5 hover:bg-[#A32469] transition-all flex items-center justify-center gap-3">
                   Submit Project Inquiry <ChevronRight size={18} />
                </button>
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
