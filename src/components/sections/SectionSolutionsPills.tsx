'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { C9Button } from '@/components/design-system/C9Button';
import Image from 'next/image';

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
        name: 'Internet', 
        img: '/images/greenfield/networking.png', 
        path: '/telco/nbn-business',
        desc: 'The foundation of your site. We perform free service qualifications and handle all LOC ID creations with Aussie-based providers to ensure your fibre is live before your team arrives.'
      },
      { 
        name: 'Networking & Wifi', 
        img: '/images/greenfield/networking.png', 
        path: '/managed-it/network-solutions',
        desc: 'A complete managed network stack including professional Cat6A cabling, high-performance switching, and high-density Wi-Fi 6E. We own the architecture from rack to endpoint.'
      },
      { 
        name: 'Phone System', 
        img: '/images/greenfield/phone-system.png', 
        path: '/telco/phone-system',
        desc: 'Modern cloud voice solutions that integrate seamlessly with your workforce. We provision, install, and manage your hosted PBX and Microsoft Teams Voice environment.'
      },
      { 
        id: 'cctv',
        name: 'CCTV', 
        img: '/images/greenfield/cctv.png', 
        path: '/modern-workplace/cctv-people-count',
        desc: 'Intelligent AI-driven surveillance that protects your physical assets. We design and manage the entire surveillance network with 24/7 remote access.'
      },
      { 
        name: 'Print Solutions', 
        img: '/images/greenfield/networking.png', 
        path: '/modern-workplace/print-solutions',
        desc: 'Seamless document management for your new site. We provide high-performance hardware, automated toner replenishment, and proactive maintenance.'
      },
      { 
        name: 'Modern Workplace', 
        img: '/images/greenfield/modern-workplace.png', 
        path: '/modern-workplace/productivity',
        desc: 'The complete digital software and device ecosystem. From Microsoft 365 deployment to endpoint management and cybersecurity protocols for your staff.'
      },
      { 
        name: 'Visitors Solutions', 
        img: '/images/greenfield/networking.png', 
        path: '/modern-workplace/visitor-contractor-management',
        desc: 'Digital check-in, contractor management, and automated inductions. Making a professional first impression while maintaining site safety.'
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
          <p className="c9-body max-w-2xl mx-auto text-slate-700">
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
                aria-pressed={activeTab === tab.name}
                aria-label={`Show ${tab.name} solutions`}
                className={`px-8 py-3 rounded-full font-bold text-[14px] transition-all duration-300 border-2 ${
                  activeTab === tab.name
                    ? 'bg-[#5D00D6] border-[#5D00D6] text-white shadow-xl shadow-purple-900/20'
                    : 'bg-white border-slate-100 text-slate-700 hover:border-[#5D00D6]/30 hover:text-[#5D00D6]'
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
                <p className="c9-body text-slate-700">
                  {tab.desc}
                </p>
              </div>

              {/* Image Container */}
              <div className="w-full relative aspect-[16/7] overflow-hidden rounded-2xl">
                <Image
                  src={tab.img}
                  alt={`${tab.name} capability visual`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
              
              {/* Related CTA */}
              <div className="mt-10">
                <FadeIn delay={0.2} direction="none">
                  <C9Button
                    variant="default"
                    size="lg"
                    className="rounded-full"
                    onClick={() => {
                      window.location.href = tab.path;
                    }}
                  >
                    Explore {tab.name} Solutions
                  </C9Button>
                </FadeIn>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
