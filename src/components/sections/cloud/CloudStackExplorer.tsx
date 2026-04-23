'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, DollarSign, Sliders, LayoutGrid, Cloud, GitMerge, Shield, Database, ShieldCheck, Globe, Lock, Layers } from 'lucide-react';

const FONT_FAMILY = { fontFamily: "'Proxima Nova', sans-serif" };

const sections = [
  {
    num: "01",
    title: "Why Cloud with C9",
    description: "Built for optimum speed, agility, and managed simplicity. Cloud done right removes complexity — not just hardware.",
    cards: [
      {
        icon: TrendingUp,
        title: "Scale without headache",
        body: "There's no need to allocate additional resources, staff, or licences to cope with business growth.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        color: "bg-blue-600"
      },
      {
        icon: DollarSign,
        title: "Predictable costs",
        body: "Forget on-premises software licences and expensive infrastructure investments.",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
        color: "bg-emerald-600"
      },
      {
        icon: Sliders,
        title: "Adjust as you change",
        body: "You are not locked into a platform. Expand, contract, or change your environment as your business evolves.",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        color: "bg-brand-purple"
      }
    ]
  },
  {
    num: "02",
    title: "Managed Cloud Services",
    description: "From Microsoft 365 licensing to fully isolated private cloud infrastructure — our managed services remove the complexity of day-to-day cloud administration.",
    cards: [
      {
        icon: LayoutGrid,
        title: "Microsoft 365",
        body: "Licensing, deployment, security configuration, user onboarding, Teams governance, SharePoint architecture, and ongoing administration.",
        img: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=800",
        color: "bg-indigo-600"
      },
      {
        icon: Cloud,
        title: "Azure Infrastructure (IaaS)",
        body: "Best-in-class infrastructure to handle all your Software as a Service needs — dedicated maintenance, virtual machines, storage, and networking.",
        img: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800",
        color: "bg-sky-600"
      },
      {
        icon: GitMerge,
        title: "Hybrid Cloud Management",
        body: "A combination of public and private cloud services managed through a single interface. C9 connects all your infrastructure environments.",
        img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
        color: "bg-violet-600"
      }
    ]
  },
  {
    num: "03",
    title: "Cloud Security & Protection",
    description: "Maintaining security in-house is resource-intensive. C9 delivers an agile, flexible cloud security solution where we do the heavy lifting.",
    cards: [
      {
        icon: Shield,
        title: "Firewall as a Service",
        body: "C9 delivers an agile, flexible cloud security solution where we do the heavy lifting — protecting your organisation without the overhead.",
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
        color: "bg-red-600"
      },
      {
        icon: Database,
        title: "Backup as a Service",
        body: "All data is hosted within Australian data centres — safely stored off-site while remaining on Australian soil.",
        img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
        color: "bg-amber-600"
      },
      {
        icon: ShieldCheck,
        title: "Private Cloud",
        body: "Geared to handle highly sensitive data typical in banking, finance, healthcare, and government. Compliant, isolated, and fully managed.",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        color: "bg-slate-800"
      }
    ]
  },
  {
    num: "04",
    title: "Cloud Delivery Models",
    description: "C9 tailors every cloud solution to your organisation's unique requirements. Three delivery models. One managed outcome.",
    cards: [
      {
        icon: Globe,
        title: "Public Cloud",
        body: "Super easy to scale as business needs change, and even easier to set up — all necessary infrastructure provided by C9.",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        color: "bg-brand-purple"
      },
      {
        icon: Lock,
        title: "Private Cloud",
        body: "Managed and made available through an organisation's own dedicated infrastructure. Serving one company alone.",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800",
        color: "bg-indigo-950"
      },
      {
        icon: Layers,
        title: "Hybrid Cloud",
        body: "The best of both worlds. Sensitive data in private cloud, day-to-day communications in public cloud. Managed through a single interface.",
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
        color: "bg-brand-purple/80"
      }
    ]
  }
];

export default function CloudStackExplorer() {
  return (
    <section className="bg-white py-12 md:py-24" style={FONT_FAMILY}>
      <div className="container mx-auto px-8 max-w-[1240px]">
        {sections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-32 last:mb-0">
            <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24 items-start">
              
              {/* STICKY HEADING */}
              <div className="lg:sticky lg:top-32 h-auto flex flex-col items-start pt-4">
                <span className="text-brand-purple font-bold text-[14px] tracking-[0.2em] mb-4">■ {section.num}</span>
                <h2 className="c9-section-heading mb-8">
                  {section.title}
                </h2>
                <p className="text-text-secondary text-[16px] leading-relaxed max-w-[320px]">
                  {section.description}
                </p>
                <div className="mt-8 pt-8 border-t border-gray-100 w-full flex gap-2">
                   {sections.map((_, i) => (
                      <div key={i} className={`h-1 w-8 rounded-full transition-all ${i === sectionIdx ? 'bg-brand-purple' : 'bg-gray-100'}`} />
                   ))}
                </div>
              </div>

              {/* CARDS SECTION */}
              <div className="grid md:grid-cols-3 gap-6">
                {section.cards.map((card, cardIdx) => (
                  <div 
                    key={cardIdx} 
                    className="flex flex-col group cursor-pointer"
                  >
                    <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative shadow-lg">
                       <img 
                          src={card.img} 
                          alt={card.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                       />
                       <div className={`absolute inset-0 ${card.color} mix-blend-multiply opacity-20 group-hover:opacity-0 transition-all duration-700`} />
                       <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                          <card.icon className="text-white" size={24} />
                       </div>
                    </div>
                    
                    <h3 className="text-[20px] font-bold text-[#0c1024] mb-3 tracking-tight group-hover:text-brand-purple transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-text-secondary leading-relaxed font-normal mb-4">
                      {card.body}
                    </p>
                    <div className="mt-auto flex items-center text-[11px] font-bold text-brand-purple tracking-widest uppercase gap-2 hover:gap-3 transition-all">
                      Learn More <span className="text-[16px]">→</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
