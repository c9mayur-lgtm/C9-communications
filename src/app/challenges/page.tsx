'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { WpHero } from "@/components/layout/WpHero";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { Building2, Zap, Volume2, Wifi, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CHALLENGES = [
  {
    id: 'office',
    icon: <Building2 size={24} />,
    title: 'Setting Up My New Office or Relocation',
    subtitle: 'C9 Communications can take the headache out of it for you.',
    challenge: 'Relocating or opening a new office means coordinating multiple providers for internet, phone systems, cabling, and IT setup. Juggling multiple vendors creates chaos and delays.',
    solution: 'We provide a single point of contact for complete end-to-end office setup. From arranging your Business nbn™ or Fast Fibre connection and structured cabling, to deploying your cloud phone system and managed WiFi. We coordinate the entire process, ensuring everything is thoroughly tested and operational before your team even walks through the door on Day 1.',
    bullets: [
      'Single vendor accountability',
      'End-to-end project management',
      'Zero Day 1 downtime guarantee'
    ]
  },
  {
    id: 'internet',
    icon: <Zap size={24} />,
    title: 'Fast & Secure Internet For My Business',
    subtitle: 'We have got super-fast, epically reliable broadband solutions.',
    challenge: 'Slow speeds, unexpected dropouts, and residential-grade internet plans that do not come with guaranteed SLA timeframes cost your business money every hour you are offline.',
    solution: 'We supply enterprise-grade Fast Fibre and Business nbn™ tailored specifically to your footprint and daily bandwidth requirements. We build robust networks complete with automated 4G/5G failover systems and advanced Next-Gen firewall security, keeping your business online 99.99% of the time. Everything is backed by an AU-managed rapid response engineering team.',
    bullets: [
      'Guaranteed Service Level Agreements (SLAs)',
      'Automated 4G/5G failover options',
      'Enterprise-grade security perimeter'
    ]
  },
  {
    id: 'ad-on-hold',
    icon: <Volume2 size={24} />,
    title: 'Setting Up Ad On-hold',
    subtitle: 'Take your customer experience to the next level.',
    challenge: 'Leaving callers sitting in dead silence or listening to generic beeps during transfers leads to high hang-up rates, a poor customer experience, and missed cross-selling possibilities.',
    solution: 'We deploy high-fidelity, studio-quality Ad On-Hold messaging directly integrated into your C9 cloud phone system. We help you promote new products, assure callers their time is valued, and reinforce your brand\'s professionalism from the first ring. It is an effortless way to keep clients engaged.',
    bullets: [
      'Custom studio-recorded voiceovers',
      'Seamless cloud PBX integration',
      'Turn waiting time into marketing'
    ]
  },
  {
    id: 'wifi',
    icon: <Wifi size={24} />,
    title: 'Improving & Securing My WiFi',
    subtitle: 'We tailor network solutions from design to migration.',
    challenge: 'WiFi dead zones, slow connectivity across the office floor, and security vulnerabilities in your wireless network leaving sensitive company data entirely exposed.',
    solution: 'We conduct full-scale wireless network mapping and deploy high-density, secure enterprise Wi-Fi systems (using tier-1 hardware). We create segmented and isolated guest networks, highly-encrypted employee access portals, and guarantee seamless floor-roaming without voice or data drops.',
    bullets: [
      'High-density WAP deployment',
      'Advanced network segmentation',
      'Continuous threat monitoring'
    ]
  }
];

function ChallengesContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(CHALLENGES[0].id);

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && CHALLENGES.find(c => c.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const activeData = CHALLENGES.find(c => c.id === activeTab) || CHALLENGES[0];

  return (
    <main className="min-h-screen bg-[#FCFBFE]">
      {/* Mini Hero */}
      <section className="bg-[#0c1024] pt-[160px] pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#5D00D6]/10 mix-blend-overlay" />
        <div className="container mx-auto px-6 max-w-[1240px] relative z-10 text-center">
          <span className="text-[#00FF66] text-[11px] font-bold tracking-[0.2em] mb-4 block uppercase">Solutions Directory</span>
          <h1 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Challenges We Solve
          </h1>
          <p className="text-white/70 text-[18px] max-w-2xl mx-auto font-light">
            Select an area below to see exactly how our managed infrastructure and engineering teams resolve your immediate operational hurdles.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Sidebar Toggle Menu */}
            <div className="w-full lg:w-1/3 shrink-0 flex flex-col gap-4">
              {CHALLENGES.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-start gap-5 p-6 rounded-2xl border transition-all duration-300 text-left ${
                    activeTab === item.id 
                      ? 'bg-white border-[#5D00D6] shadow-xl shadow-purple-900/10 scale-100 ring-1 ring-[#5D00D6]/20' 
                      : 'bg-white/60 border-gray-100 hover:border-gray-300 hover:bg-white scale-[0.98]'
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 transition-colors ${
                    activeTab === item.id ? 'bg-[#5D00D6]/10 text-[#5D00D6]' : 'bg-gray-100 text-slate-400'
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-[16px] font-bold mb-1 transition-colors ${
                      activeTab === item.id ? 'text-[#0c1024]' : 'text-slate-600'
                    }`}>
                      {item.title}
                    </span>
                    <span className={`text-[14px] leading-snug transition-colors ${
                      activeTab === item.id ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      {item.subtitle}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Main Content Area */}
            <div className="w-full lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-[32px] border border-gray-100 shadow-xl shadow-purple-900/5 overflow-hidden p-8 md:p-12"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#5D00D6] flex items-center justify-center text-white shadow-lg shadow-purple-900/20">
                      {activeData.icon}
                    </div>
                    <h2 className="text-[28px] md:text-[36px] font-bold text-[#0c1024] tracking-tight">
                      {activeData.title}
                    </h2>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-[12px] font-bold text-[#5D00D6] uppercase tracking-[0.2em] mb-4">The Challenge</h3>
                    <div className="p-6 bg-[#FCFBFE] rounded-2xl border border-gray-100 border-l-4 border-l-rose-500">
                      <p className="text-[16px] text-slate-700 leading-relaxed font-medium">
                        {activeData.challenge}
                      </p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-[12px] font-bold text-[#00FF66] uppercase tracking-[0.2em] mb-4">The Solution</h3>
                    <div className="p-6 bg-[#0c1024] rounded-2xl text-white shadow-2xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/20 blur-[80px] rounded-full pointer-events-none" />
                      <p className="text-[16px] text-slate-300 leading-relaxed relative z-10">
                        {activeData.solution}
                      </p>
                      
                      <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                        <div className="flex flex-col gap-4">
                          {activeData.bullets.map((bullet, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-white">
                              <CheckCircle2 size={18} className="text-[#00FF66]" />
                              <span className="text-[14px] font-medium">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <a 
                    href="#consultation-section"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#5D00D6] text-white rounded-xl font-bold hover:bg-[#4d00b3] transition-colors shadow-lg shadow-purple-900/20"
                  >
                    Solve this challenge today <ArrowRight size={18} />
                  </a>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      <section id="consultation-section" className="border-t border-gray-100 bg-white">
        <WpConsultationForm 
          showHeader={false}
          eyebrow="GET STARTED"
          title="Ready to solve your technology challenges?"
          description="Book a completely free 30-minute discovery call with our engineering team to run through your setup and eliminate the pain points dragging your operations down."
          formTitle="Book Your Discovery Call"
        />
      </section>

    </main>
  );
}

export default function ChallengesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FCFBFE]"></div>}>
      <ChallengesContent />
    </Suspense>
  );
}
