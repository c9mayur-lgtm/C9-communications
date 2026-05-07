"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, CheckCircle2, Cloud, Network, Monitor, Users, Building, ArrowUpRight, Plus, Terminal } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const fadeInUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function ModernWorkplace1Page() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-purple-200">
      
      {/* SECTION 1: IMMERSIVE HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-slate-100 z-0" />
        <div className="absolute top-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        </div>
        
        <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/50 text-purple-700 text-sm font-medium mb-6 backdrop-blur-sm border border-purple-200/50">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              C9 Modern Workplace
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Modern Workplace That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Actually Works</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 mb-8 max-w-xl font-light">
              Secure, connected, and built for real business operations.
            </motion.p>
            
            {/* Scroll-transition text mock */}
            <motion.div variants={fadeInUp} className="h-16 mb-8 overflow-hidden relative">
              <motion.div 
                animate={{ y: [0, -64, -128] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", times: [0, 0.4, 0.8] }}
                className="absolute w-full"
              >
                <div className="h-16 flex items-center text-lg md:text-xl font-medium text-slate-700">1. Work has changed.</div>
                <div className="h-16 flex items-center text-lg md:text-xl font-medium text-slate-700">2. Most systems haven't.</div>
                <div className="h-16 flex items-center text-lg md:text-xl font-medium text-purple-600">3. We fix that.</div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-base bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-xl shadow-purple-600/20">
                Book a Workplace Assessment
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-slate-200 hover:bg-slate-100">
                Explore Solutions
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Abstract UI Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Main glass panel */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
              <div className="h-12 border-b border-slate-200/50 flex gap-2 items-center px-4 bg-white/50">
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
              </div>
              <div className="flex-1 p-6 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-inner flex items-center justify-center p-4">
                    <div className="text-white font-medium text-lg w-full">System Active</div>
                  </div>
                  <div className="h-32 rounded-2xl bg-white/60 p-4 border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <div className="w-1/2 h-4 bg-slate-200 rounded-full" />
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center"><Shield className="w-4 h-4 text-purple-600" /></div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-3/4 h-3 bg-slate-100 rounded-full" />
                      <div className="w-full h-3 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-40 rounded-2xl bg-white/60 p-4 border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-blue-100 rounded-bl-full opacity-50" />
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-4"><Network className="w-4 h-4 text-blue-600" /></div>
                    <div className="w-1/2 h-4 bg-slate-200 rounded-full mb-2" />
                    <div className="w-1/3 h-4 bg-slate-200 rounded-full" />
                  </div>
                  <div className="h-16 rounded-2xl bg-white/60 p-4 border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-green-600" /></div>
                    <div className="flex-1 h-3 bg-slate-200 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SYSTEM POSITIONING STRIP */}
      <section className="bg-white border-y border-slate-200/50 py-12">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-semibold tracking-widest text-slate-400 uppercase mb-8">
            Modern Workplace at C9 is not a toolset. It's an engineered system.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Productivity", icon: <Users className="w-5 h-5 text-purple-600" /> },
              { title: "Security", icon: <Shield className="w-5 h-5 text-purple-600" /> },
              { title: "Connectivity", icon: <Network className="w-5 h-5 text-purple-600" /> },
              { title: "Control", icon: <Monitor className="w-5 h-5 text-purple-600" /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-medium text-slate-800">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PROBLEM FRAMING */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="c9-section-heading mb-6">
              Most workplaces <br/>
              <span className="text-slate-400">fail under real conditions.</span>
            </h2>
            <p className="text-xl text-slate-600">
              When tools don't talk to each other, security becomes an afterthought. And when networks drop, productivity stops.
            </p>
          </motion.div>

          <div className="relative h-[400px]">
             {[
              { title: "Tool Fragmentation", offset: "translate-x-0 translate-y-0 z-40 bg-white" },
              { title: "Security Gaps", offset: "translate-x-4 translate-y-4 z-30 bg-slate-100 scale-95 opacity-90" },
              { title: "Remote Inefficiency", offset: "translate-x-8 translate-y-8 z-20 bg-slate-200 scale-90 opacity-80" },
              { title: "No Visibility", offset: "translate-x-12 translate-y-12 z-10 bg-slate-300 scale-85 opacity-70" }
             ].map((card, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ delay: idx * 0.15, duration: 0.5 }}
                 className={`absolute top-0 right-10 w-80 p-6 rounded-2xl shadow-xl border border-slate-200/50 transition-all duration-500 hover:translate-x-[-10px] hover:translate-y-[-10px] ${card.offset}`}
               >
                 <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                     <Plus className="w-5 h-5 rotate-45" />
                   </div>
                   <h3 className="text-lg font-semibold text-slate-800">{card.title}</h3>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ARCHITECTURE DIAGRAM */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="c9-section-heading mb-4">C9 Workplace System Architecture</h2>
            <p className="text-xl text-slate-600">A layered, orchestrated approach to business operations.</p>
          </div>

          <div className="max-w-5xl mx-auto grid gap-6 relative">
            {/* Connection line behind */}
            <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-purple-200 via-blue-200 to-purple-200 rounded-full opacity-50 hidden lg:block" />

            {[
              { layer: "User Layer", desc: "Devices & Employees", icon: <Users /> },
              { layer: "Application Layer", desc: "Microsoft 365, Communication Tools", icon: <Cloud /> },
              { layer: "Security Layer", desc: "EDR, Identity, Compliance", icon: <Shield /> },
              { layer: "Infrastructure Layer", desc: "Network & Telco Integration", icon: <Network /> },
              { layer: "Management Layer", desc: "Monitoring & Support", icon: <Monitor /> }
            ].map((layer, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="bg-slate-50 border border-slate-100 hover:border-purple-300 p-6 lg:p-8 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-100/50 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-purple-600 shrink-0 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 z-10">
                    {layer.icon}
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="text-sm font-semibold tracking-widest text-purple-600 uppercase mb-1">Layer {idx + 1}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{layer.layer}</h3>
                    <p className="text-slate-600">{layer.desc}</p>
                  </div>
                  <div className="hidden lg:flex w-12 h-12 items-center justify-center rounded-full bg-slate-100 group-hover:bg-purple-50 text-slate-400 group-hover:text-purple-600 transition-colors">
                    <Plus className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SOLUTION MODULES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="c9-section-heading mb-4">Solution Modules</h2>
            <p className="text-xl text-slate-600 max-w-2xl">Structured capabilities designed to fit your operational exact requirements.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "A. Productivity & Collaboration",
                items: ["Microsoft 365 Solutions", "Communication Tools", "Collaboration Platforms"]
              },
              {
                title: "B. Secure Work Environment",
                items: ["Secure Remote Work", "Endpoint Detection & Response (EDR)", "Compliance & Data Protection"]
              },
              {
                title: "C. Device & Endpoint Control",
                items: ["Device & Endpoint Management", "SaaS Backup", "Lifecycle Management"]
              },
              {
                title: "D. Workplace Extensions",
                items: ["Security Awareness Training", "Visitor Management", "Smart Office (CCTV, Print)"]
              }
            ].map((module, mIdx) => (
              <div key={mIdx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{module.title}</h3>
                <Accordion className="w-full">
                  {module.items.map((item, iIdx) => (
                    <AccordionItem key={iIdx} value={`item-${iIdx}`} className="border-b border-slate-100 last:border-0">
                      <AccordionTrigger className="text-left font-medium text-slate-700 hover:text-purple-600 py-4">
                        {item}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 pb-4">
                        Comprehensive implementation and proactive management mapping exactly to '{item}'. We configure parameters suited specifically to Australian standards, delivering uptime you can measure and rely on.
                        <div className="mt-4">
                          <Button variant="link" className="p-0 h-auto text-purple-600 font-semibold group flex items-center gap-1">
                            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: MICROSOFT 365 FOCUS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8">
              <Cloud className="w-8 h-8" />
            </div>
            <h2 className="c9-section-heading mb-6">Get more from Microsoft 365</h2>
            <p className="text-xl text-slate-600 mb-8">
              We configure, secure, and optimise the Microsoft ecosystem for real business productivity. It's not just licenses; it's operational architecture.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Identity & access control",
                "Teams & collaboration setup",
                "Security hardening & data governance"
              ].map((point, idx) => (
                <li key={idx} className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8">See 365 Capabilities</Button>
          </motion.div>
          <div className="order-1 lg:order-2 relative h-[500px]">
             {/* Ecosystem Diagram Animation */}
             <div className="absolute inset-0 bg-slate-50 rounded-full mix-blend-multiply opacity-50 blur-3xl" />
             <div className="relative w-full h-full flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="w-[400px] h-[400px] border border-dashed border-slate-300 rounded-full absolute"
                />
                <motion.div 
                  animate={{ rotate: -360 }} 
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-[250px] h-[250px] border border-dashed border-purple-200 rounded-full absolute"
                />
                
                {/* Center Node */}
                <div className="w-24 h-24 bg-white shadow-2xl rounded-2xl border flex items-center justify-center z-10 absolute">
                  <span className="font-bold text-slate-800 text-xl">M365</span>
                </div>
                
                {/* Orbiting Items */}
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-20 w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center border border-slate-100">
                  <span className="text-blue-500 font-bold text-sm">Teams</span>
                </motion.div>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 left-20 w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center border border-slate-100">
                  <span className="text-blue-600 font-bold text-sm">Share</span>
                </motion.div>
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 -left-4 w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center border border-slate-100">
                  <span className="text-cyan-500 font-bold text-sm">Outlk</span>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: SECURITY LAYER (DARK) */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <Shield className="w-16 h-16 text-purple-400 mx-auto mb-8 opacity-80" />
          <h2 className="c9-section-heading mb-8 !text-white">
            Modern Workplace Without Security is a Risk
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 text-left">
            {[
              "Endpoint Detection (EDR)",
              "Identity Security",
              "Backup & Recovery",
              "Compliance Alignment"
            ].map((feat, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 text-purple-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-slate-100 text-lg">{feat}</h4>
              </div>
            ))}
          </div>

          <div className="mt-16 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Active Threat Monitoring Online
          </div>
        </div>
      </section>

      {/* SECTION 8: USE CASES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="c9-section-heading mb-4">Built for Real Scenarios</h2>
            <p className="text-xl text-slate-600">The Modern Workplace adapts to how you actually operate.</p>
          </div>

          <Tabs defaultValue="hybrid" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-slate-100/50 p-2 h-auto rounded-2xl gap-2 mb-8">
              <TabsTrigger value="hybrid" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">Hybrid Workforce</TabsTrigger>
              <TabsTrigger value="remote" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">Remote Teams</TabsTrigger>
              <TabsTrigger value="multi" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">Multi-Location</TabsTrigger>
              <TabsTrigger value="compliance" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">High Compliance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="hybrid" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-12 transition-all">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-slate-400 font-semibold uppercase tracking-wider text-sm mb-2">Problem</h4>
                  <p className="text-slate-700">Employees struggling to connect seamlessly when moving between office and home, creating IT friction.</p>
                </div>
                <div>
                  <h4 className="text-slate-400 font-semibold uppercase tracking-wider text-sm mb-2">Solution</h4>
                  <p className="text-slate-700">Unified endpoint management, automatic VPN, and cloud-first app access configuration.</p>
                </div>
                <div>
                  <h4 className="text-purple-600 font-semibold uppercase tracking-wider text-sm mb-2">Outcome</h4>
                  <p className="font-medium text-slate-900 text-lg">Zero-friction transitions with identical security posture anywhere.</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="remote" className="bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-12 transition-all">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-slate-400 font-semibold uppercase tracking-wider text-sm mb-2">Problem</h4>
                  <p className="text-slate-700">No visibility over off-site devices, leading to data sprawl and vulnerable endpoints.</p>
                </div>
                <div>
                  <h4 className="text-slate-400 font-semibold uppercase tracking-wider text-sm mb-2">Solution</h4>
                  <p className="text-slate-700">Zero-Trust architecture combined with mobile device management (MDM) and locked-down endpoints.</p>
                </div>
                <div>
                  <h4 className="text-purple-600 font-semibold uppercase tracking-wider text-sm mb-2">Outcome</h4>
                  <p className="font-medium text-slate-900 text-lg">100% remote readiness without compromising corporate data.</p>
                </div>
              </div>
            </TabsContent>
            {/* Additional TabsContent would follow similarly for 'multi' and 'compliance' */}
          </Tabs>
        </div>
      </section>

      {/* SECTION 9: HOW IT WORKS (PIPELINE) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/50 overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="c9-section-heading mb-16 text-center">Engagement Pipeline</h2>
          
          <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-4">
            {/* Line connecting steps */}
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-200 hidden md:block" />
            
            {[
              { num: "01", title: "Assess", desc: "Audit current environment, tools, and security gaps.", delay: 0.1 },
              { num: "02", title: "Architect", desc: "Design a consolidated system mapped to requirements.", delay: 0.3 },
              { num: "03", title: "Deploy", desc: "Rollout with zero operational downtime or data loss.", delay: 0.5 },
              { num: "04", title: "Manage", desc: "Ongoing monitoring, updates, and user support.", delay: 0.7 }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay }}
                className="relative z-10 flex flex-col items-center text-center md:w-[220px]"
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-50 shadow-md flex items-center justify-center text-xl font-bold text-purple-600 mb-6 relative">
                  {step.num}
                  {/* Pipeline glow */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1.2, opacity: 0.2 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 bg-purple-500 rounded-full"
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: WHY C9 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="c9-section-heading mb-6">Built for Australian operations.</h2>
            <p className="text-xl text-slate-600 mb-8">We are the infrastructure layer supporting modern business.</p>
            <div className="space-y-6">
              {[
                { title: "Telco + IT + Security Unified", desc: "We own the network and manage the endpoint. Total accountability." },
                { title: "Engineered Systems, Not Tools", desc: "We deploy architectures that talk to each other, avoiding isolated SaaS traps." },
                { title: "Local Presence & Support", desc: "100% Australian-based engineers and tier-3 support when things escalate." }
              ].map((adv, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{adv.title}</h4>
                    <p className="text-slate-600 text-sm">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 lg:p-12 relative overflow-hidden h-[400px]">
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-transparent rounded-full blur-[80px]" />
             <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] md:w-[80%] border border-slate-100 transform -rotate-2 hover:rotate-0 transition-transform duration-500 mb-4 ml-auto">
                   <div className="flex justify-between items-center mb-4">
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Helpdesk Status</span>
                     <span className="flex items-center gap-1 text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/> Online</span>
                   </div>
                   <div className="text-2xl font-bold text-slate-800">SLA Met. 99.99%</div>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl shadow-xl w-[85%] border border-slate-800 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center"><Terminal className="w-5 h-5 text-purple-400" /></div>
                     <div>
                       <div className="text-white font-medium">Network Secured</div>
                       <div className="text-slate-400 text-sm">Automated mitigation active</div>
                     </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: PROOF / SCALE */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto text-center divide-x divide-slate-800">
            {[
              { stat: "24/7", label: "Active Monitoring" },
              { stat: "99.9%", label: "Uptime Reliability" },
              { stat: "<15m", label: "Response SLA" },
              { stat: "ISO", label: "Security Aligned" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl font-light tracking-tight mb-2 text-white">{item.stat}</div>
                <div className="text-slate-400 text-sm md:text-base tracking-wide uppercase">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: SMART WORKPLACE EXTENSION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="c9-section-heading mb-6">Extend beyond the screen.</h2>
          <p className="text-xl text-slate-600 mb-16">The Modern Workplace integrates physical office intelligence.</p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { title: "Smart Meeting Rooms", icon: <Monitor className="w-6 h-6" /> },
              { title: "Visitor Management", icon: <Users className="w-6 h-6" /> },
              { title: "CCTV & Office Analytics", icon: <Shield className="w-6 h-6" /> }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-slate-50 rounded-3xl p-8 hover:bg-slate-100 transition-colors border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-800 mb-6 group-hover:text-purple-600 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-purple-600 transition-colors">
                  Explore Integration <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: PRIMARY CTA */}
      <section className="py-32 relative overflow-hidden bg-purple-600 text-white">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h2 className="c9-section-heading mb-8">
            Fix your workplace before it breaks your business.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button size="lg" className="h-16 px-10 text-lg bg-white text-purple-700 hover:bg-slate-50 rounded-full shadow-2xl">
              Schedule Assessment
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg bg-transparent border-white/30 text-white hover:bg-white/10 rounded-full">
              Talk to a Specialist
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 14: PRE-FOOTER STRIP */}
      <section className="py-6 bg-slate-900 text-center border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
          <span className="text-slate-400">Already using Microsoft 365?</span>
          <a href="#" className="text-white hover:text-purple-300 font-medium inline-flex items-center gap-1 transition-colors">
            We optimise what you already have <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  );
}
