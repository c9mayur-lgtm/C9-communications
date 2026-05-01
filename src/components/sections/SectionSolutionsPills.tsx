'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPERS (Copied for self-containment)
   ───────────────────────────────────────────────────────── */
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

interface SectionSolutionsPillsProps {
  audience: 'greenfield' | 'business' | 'enterprise';
}

const CONTENT_MAP = {
  greenfield: {
    title: 'Everything Your New Site Needs',
    subtitle: 'Select a capability to see how we deliver enterprise-grade infrastructure for your greenfield project.',
    tabs: [
      { 
        name: 'Networking', 
        img: '/images/greenfield/networking.png', 
        path: '/managed-it/network-solutions',
        desc: 'Build a high-performance network foundation that scales with your business. From enterprise-grade fibre to secure SD-WAN, we ensure your site is connected and secure from day one.'
      },
      { 
        name: 'CCTV & Security', 
        img: '/images/greenfield/cctv.png', 
        path: '/modern-workplace/cctv-people-count',
        desc: 'Protect your physical assets with intelligent surveillance and AI-driven occupancy tracking. Our integrated security systems provide real-time visibility and absolute control over your new premises.'
      },
      { 
        name: 'Modern Workplace', 
        img: '/images/greenfield/modern-workplace.png', 
        path: '/modern-workplace/productivity',
        desc: 'Empower your team with the tools they need to succeed. We deploy and manage your entire Microsoft 365 environment, productivity tools, and secure remote access protocols.'
      },
      { 
        name: 'Phone System', 
        img: '/images/greenfield/phone-system.png', 
        path: '/telco/phone-system',
        desc: 'Crystal clear communication tailored for modern business. Our Teams-integrated cloud voice platform replaces legacy hardware with a scalable, feature-rich system.'
      },
    ]
  },
  business: {
    title: 'Optimized for Small Business Growth',
    subtitle: 'Scalable IT and Telco solutions designed to keep your business running smoothly while you focus on expansion.',
    tabs: [
      { 
        name: 'Networking', 
        img: '/images/greenfield/networking.png', 
        path: '/managed-it/network-solutions',
        desc: 'Fast, reliable connectivity designed for growth. Our managed networking ensures your small business stays online with zero hassle and enterprise-grade security.'
      },
      { 
        name: 'CCTV & Security', 
        img: '/images/greenfield/cctv.png', 
        path: '/modern-workplace/cctv-people-count',
        desc: 'Professional security tailored for small business budgets. Monitor your premises in high definition and protect your assets with smart detection and remote access.'
      },
      { 
        name: 'Modern Workplace', 
        img: '/images/greenfield/modern-workplace.png', 
        path: '/modern-workplace/productivity',
        desc: 'Simplify your operations with integrated productivity tools. We help small businesses transition to M365 and secure cloud collaboration effortlessly.'
      },
      { 
        name: 'Phone System', 
        img: '/images/greenfield/phone-system.png', 
        path: '/telco/phone-system',
        desc: 'Enterprise-grade phone features without the enterprise price tag. Our cloud PBX gives your small business a professional edge with advanced call handling.'
      },
    ]
  },
  enterprise: {
    title: 'Enterprise-Grade Operational Control',
    subtitle: 'Unified infrastructure and communications for multi-site organizations with complex technical requirements.',
    tabs: [
      { 
        name: 'Networking', 
        img: '/images/greenfield/networking.png', 
        path: '/managed-it/network-solutions',
        desc: 'Scalable, resilient infrastructure for complex enterprise environments. We design and manage multi-site WAN, SD-WAN, and high-capacity fibre networks with 99.95% SLAs.'
      },
      { 
        name: 'CCTV & Security', 
        img: '/images/greenfield/cctv.png', 
        path: '/modern-workplace/cctv-people-count',
        desc: 'Integrated physical security and occupancy analytics at scale. Our enterprise surveillance solutions provide site-wide visibility and compliance-grade data protection.'
      },
      { 
        name: 'Modern Workplace', 
        img: '/images/greenfield/modern-workplace.png', 
        path: '/modern-workplace/productivity',
        desc: 'Optimized collaboration and governance for large organizations. We manage complex M365 deployments, device fleets, and advanced security frameworks.'
      },
      { 
        name: 'Phone System', 
        img: '/images/greenfield/phone-system.png', 
        path: '/telco/phone-system',
        desc: 'Unified communications for the modern enterprise. Our contact centre and cloud voice solutions integrate seamlessly with Teams to provide a single, global comms platform.'
      },
    ]
  }
};

export const SectionSolutionsPills = ({ audience }: SectionSolutionsPillsProps) => {
  const content = CONTENT_MAP[audience];
  const [activeTab, setActiveTab] = useState(content.tabs[0].name);

  return (
    <section className="py-16 bg-white">
      <div className={C}>
        <FadeIn className="text-center mb-12">
          <span className="c9-eyebrow mb-4">Core Capabilities</span>
          <h2 className="c9-section-heading mb-6">
            {content.title}
          </h2>
          <p className="c9-body max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </FadeIn>

        {/* Pills */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {content.tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-8 py-3 rounded-full font-bold text-[14px] transition-all duration-300 border-2 ${
                  activeTab === tab.name
                    ? 'bg-[#5D00D6] border-[#5D00D6] text-white shadow-xl shadow-purple-900/20'
                    : 'bg-white border-slate-100 text-slate-500 hover:border-[#5D00D6]/30 hover:text-[#5D00D6]'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Dynamic Image Container */}
        <div className="relative max-w-5xl mx-auto">
          {content.tabs.map((tab) => (
            <motion.div
              key={tab.name}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ 
                opacity: activeTab === tab.name ? 1 : 0,
                zIndex: activeTab === tab.name ? 10 : 0
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`${activeTab === tab.name ? 'relative' : 'absolute inset-0'} w-full flex flex-col items-center`}
            >
              {/* Persona Content */}
              <div className="text-center mb-8 max-w-3xl mx-auto">
                <p className="c9-body text-slate-600">
                  {tab.desc}
                </p>
              </div>

              {/* Image without padding */}
              <div className="w-full">
                <img
                  src={tab.img}
                  alt={tab.name}
                  className="w-full h-auto block"
                />
              </div>
              
              {/* Related CTA */}
              <div className="mt-8">
                <FadeIn delay={0.2} direction="none">
                  <a
                    href={tab.path}
                    className="inline-flex items-center gap-2 bg-[#5D00D6] text-white rounded-full h-12 px-8 font-bold text-[14px] hover:bg-[#4d00b3] transition-all shadow-lg shadow-purple-900/20 group"
                  >
                    Explore {tab.name} Solutions
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </FadeIn>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
