'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, ChevronDown, HelpCircle, Server, Phone, ShieldCheck, Laptop } from 'lucide-react';
import { Section } from '@/components/design-system/Section';
import { H1, H2, H3, Body, Label } from '@/components/design-system/Typography';
import { C9Button } from '@/components/design-system/C9Button';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

const FAQ_CATEGORIES = [
  { id: 'general', label: 'General & Support', icon: HelpCircle },
  { id: 'managed-it', label: 'Managed IT Services', icon: Server },
  { id: 'telco', label: 'Telecommunications', icon: Phone },
  { id: 'security', label: 'Cybersecurity', icon: ShieldCheck },
  { id: 'workplace', label: 'Modern Workplace', icon: Laptop },
];

const FAQ_DATA = {
  'general': [
    {
      q: "What makes C9 Communications different from other providers?",
      a: "Unlike traditional providers that only offer either IT or internet, C9 owns the entire technology stack. We provide your internet connection, manage your network, secure your endpoints, and run your helpdesk without ever pointing fingers at third-party vendors when something goes wrong."
    },
    {
      q: "Where is your support team located?",
      a: "Our support engineering team is 100% onshore, based right here in Australia. When you call us, you speak directly to a local, qualified technical expert, eliminating timezone misalignments and language barriers."
    },
    {
      q: "Do you only work with large enterprises?",
      a: "No. While we provide enterprise-grade infrastructure, our solutions are highly scalable and tailored to support small-to-medium businesses (SMBs), growing mid-market firms, and large multi-site corporations across various industries."
    },
    {
      q: "How fast are your response times?",
      a: "Our response times are governed by strict, contractually-backed Service Level Agreements (SLAs). For P1 (Critical) events such as a total site outage, we guarantee a 15-minute response time with immediate Level 3 engineering assignment."
    },
    {
      q: "Do you offer fixed-fee agreements?",
      a: "Yes. Our managed service agreements operate on predictable, flat-fee monthly models. This allows you to forecast your technology spend accurately without unexpected spikes for standard support requests."
    },
    {
      q: "Which industries do you specialise in?",
      a: "We have deep expertise across several key sectors, including Retail, Hospitality, Healthcare, Non-Profit, Professional Services, Real Estate, and Education. We tailor our compliance and operational models to suit the specific regulatory needs of each."
    }
  ],
  'managed-it': [
    {
      q: "What does 'Fully Managed IT' actually include?",
      a: "Fully managed IT covers your entire operational technology environment. This includes unlimited helpdesk support, proactive 24/7 server and network monitoring, routine patching, hardware lifecycle management, and strategic IT roadmap planning."
    },
    {
      q: "Can you co-manage IT with our internal team?",
      a: "Yes. Our Co-Managed IT model is designed for businesses with internal IT staff who need additional support. We can take over mundane tier-1 helpdesk tasks, or provide high-level escalation support and infrastructure monitoring so your internal team can focus on strategic projects."
    },
    {
      q: "Do you provide Virtual CIO (vCIO) services?",
      a: "Absolutely. As part of our Strategy Consulting, we provide vCIO services to align your technology investments with your business goals, offering technology roadmaps, budget planning, and board-level reporting."
    },
    {
      q: "Do you support both Windows and Mac environments?",
      a: "Yes. Our engineers are certified and experienced in managing and securing mixed environments, including Windows, macOS, and Linux endpoints, via enterprise mobile device management (MDM) platforms."
    },
    {
      q: "How do you handle onboarding a new client?",
      a: "We use a structured, zero-downtime onboarding framework. It starts with a comprehensive discovery audit to document your entire environment, followed by deploying our management agents, securing credentials, and training your team."
    },
    {
      q: "Do you offer Backup and Disaster Recovery?",
      a: "Yes. We implement robust Business Continuity and Disaster Recovery (BCDR) solutions. This includes immutable, air-gapped backups, off-site replication, and regular recovery testing to ensure minimal RPO (Recovery Point Objective) and RTO (Recovery Time Objective)."
    }
  ],
  'telco': [
    {
      q: "What type of internet connections do you provide?",
      a: "We provide true business-grade connectivity, including Business NBN (TC4 and TC2), Enterprise Ethernet (EE), Dedicated Fibre (up to 10Gbps), and 4G/5G failover solutions."
    },
    {
      q: "How do you guarantee internet uptime?",
      a: "We design highly resilient architectures using active/passive or active/active failover. If your primary fibre connection goes down, your network will automatically failover to a secondary connection without dropping active sessions, guaranteeing up to 99.95% uptime."
    },
    {
      q: "What is SD-WAN and do I need it?",
      a: "SD-WAN (Software-Defined Wide Area Network) intelligently routes traffic across multiple internet links to prioritize critical applications. If you have multiple office locations or rely heavily on cloud apps, SD-WAN is essential for performance and reliability."
    },
    {
      q: "Can you replace our old PABX phone system?",
      a: "Yes. We specialize in migrating legacy on-premise PABX systems to modern Cloud Hosted PBX and Microsoft Teams Calling solutions, which are significantly cheaper to run and provide advanced routing features."
    },
    {
      q: "Do you provide hardware like routers and switches?",
      a: "Yes. We supply, configure, and fully manage enterprise-grade network hardware including routers, switches, wireless access points (Wi-Fi), VoIP handsets, and professional headsets."
    },
    {
      q: "Do you offer mobile phone plans?",
      a: "Yes, we offer business mobile plans that leverage the full Telstra Wholesale and Optus networks. We manage the fleet provisioning, SIM dispatch, and data pooling for your entire workforce."
    },
    {
      q: "Can you set up a contact centre for my business?",
      a: "Absolutely. We deploy advanced omnichannel Contact Centre solutions (CCaaS) integrating voice, email, chat, and CRM systems, complete with advanced analytics and call recording."
    }
  ],
  'security': [
    {
      q: "Are your security services aligned with the Essential Eight?",
      a: "Yes. We map our security implementations directly to the Australian Cyber Security Centre's (ACSC) Essential Eight maturity models, ensuring your business meets recognized national security standards."
    },
    {
      q: "What is the difference between Antivirus and EDR?",
      a: "Traditional antivirus relies on known signatures to block threats. Endpoint Detection and Response (EDR) uses behavioral analysis and AI to detect abnormal activity, allowing us to isolate and kill active threats in real-time."
    },
    {
      q: "Do you provide Security Operations Center (SOC) services?",
      a: "Yes, through our dedicated security division, C9 Defense. We provide 24/7 SOC monitoring, threat hunting, and active incident response to identify and neutralize threats before they impact your data."
    },
    {
      q: "How do you protect against ransomware?",
      a: "We use a multi-layered defense-in-depth strategy. This includes advanced EDR, DNS filtering, strict application control, MFA, and immutable backups that cannot be encrypted by ransomware."
    },
    {
      q: "Do you offer Penetration Testing?",
      a: "Yes. We conduct comprehensive vulnerability assessments and ethical penetration testing to identify weaknesses in your external and internal networks before malicious actors can exploit them."
    }
  ],
  'workplace': [
    {
      q: "Can you help us migrate to Microsoft 365?",
      a: "Yes. We handle end-to-end migrations from legacy exchange servers or Google Workspace to Microsoft 365, ensuring zero data loss and minimal disruption, followed by comprehensive securing of your new tenant."
    },
    {
      q: "How do you manage company data on employee mobile phones?",
      a: "We deploy Mobile Device Management (MDM) via Microsoft Intune. This allows us to separate company data from personal data. If a device is lost, we can remotely wipe only the corporate data."
    },
    {
      q: "Do Microsoft 365 and Google Workspace backup their own data?",
      a: "No. Microsoft and Google operate on a 'Shared Responsibility Model'. They guarantee infrastructure uptime, but you are responsible for your data. We provide third-party SaaS backup solutions to secure your emails and files."
    },
    {
      q: "Do you supply and install meeting room technology?",
      a: "Yes. We design and install comprehensive Microsoft Teams Rooms and Zoom Rooms, providing high-fidelity audio, 4K video, and one-touch join capabilities for modern hybrid meetings."
    },
    {
      q: "What is Visitor Management?",
      a: "We implement digital visitor management systems (like Sign In App) to modernize your reception area. It allows guests to sign in via iPad, prints badges, notifies hosts via Teams, and maintains digital evacuation registers."
    },
    {
      q: "Do you provide CCTV and surveillance?",
      a: "Yes. We deploy enterprise IP CCTV systems with AI-driven analytics, such as people counting, license plate recognition, and advanced motion detection, fully integrated into your IT network."
    },
    {
      q: "Can you manage our office printers?",
      a: "Yes. We offer Managed Print Services (MPS), providing enterprise-grade multi-function devices, automated toner replenishment, and secure 'follow-me' printing to reduce waste and protect sensitive documents."
    }
  ]
};

const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 py-1">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-[17px] font-bold text-[#0c1024] group-hover:text-[#5D00D6] transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 mt-0.5 text-slate-400 transition-transform duration-300 ${
            open ? 'rotate-180 text-[#5D00D6]' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-[16px] text-slate-600 leading-relaxed pb-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter FAQs based on search
  const filteredFaqs = searchQuery.trim() !== '' 
    ? Object.entries(FAQ_DATA).flatMap(([category, faqs]) => 
        faqs.filter(faq => 
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(faq => ({ ...faq, category }))
      )
    : FAQ_DATA[activeCategory as keyof typeof FAQ_DATA];

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <Label className="mb-4 block">Knowledge Base</Label>
            <H1 className="!text-left mb-6 text-[#0c1024]">
              Frequently Asked <span className="text-[#5D00D6]">Questions.</span>
            </H1>
            <Body className="text-lg text-slate-600 !text-left">
              Find answers to the most common questions about our Managed IT, Telecommunications, Cybersecurity, and Cloud Solutions.
            </Body>
          </FadeIn>
        </div>

        {/* SEARCH BAR */}
        <FadeIn delay={0.1} className="mb-16">
          <div className="relative max-w-2xl">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
            <input 
              type="text" 
              placeholder="Search for answers..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-16 pl-16 pr-6 rounded-full border border-slate-200 bg-white text-lg focus:outline-none focus:border-[#5D00D6] focus:ring-4 focus:ring-[#5D00D6]/10 transition-all shadow-sm"
            />
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* SIDEBAR CATEGORIES */}
          {!searchQuery && (
            <div className="lg:w-1/3 shrink-0">
              <FadeIn delay={0.2} className="sticky top-32">
                <div className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm">
                  <div className="space-y-2">
                    {FAQ_CATEGORIES.map((cat) => {
                      const Icon = cat.icon;
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(cat.id)}
                          className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-left transition-all ${
                            isActive 
                              ? 'bg-[#5D00D6] text-white font-bold shadow-lg shadow-purple-900/20' 
                              : 'text-slate-600 hover:bg-slate-50 font-medium'
                          }`}
                        >
                          <Icon size={20} className={isActive ? 'text-white' : 'text-[#5D00D6]'} />
                          {cat.label}
                          {isActive && <ChevronRight size={18} className="ml-auto" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            </div>
          )}

          {/* FAQ CONTENT */}
          <div className="flex-1">
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm min-h-[500px]">
                {searchQuery ? (
                  <div className="mb-8">
                    <H3 className="text-2xl mb-2">Search Results</H3>
                    <p className="text-slate-500">Found {filteredFaqs.length} results for "{searchQuery}"</p>
                  </div>
                ) : (
                  <div className="mb-8 flex items-center gap-4">
                    {(() => {
                      const cat = FAQ_CATEGORIES.find(c => c.id === activeCategory);
                      const Icon = cat?.icon || HelpCircle;
                      return (
                        <>
                          <div className="w-12 h-12 rounded-xl bg-[#F4F0FA] flex items-center justify-center text-[#5D00D6]">
                            <Icon size={24} />
                          </div>
                          <H2 className="text-3xl m-0">{cat?.label}</H2>
                        </>
                      );
                    })()}
                  </div>
                )}

                {filteredFaqs.length > 0 ? (
                  <div className="w-full divide-y divide-slate-100">
                    {filteredFaqs.map((faq, index) => (
                      <FAQItem key={index} q={faq.q} a={faq.a} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center">
                    <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto mb-6">
                      <Search size={32} />
                    </div>
                    <H3 className="text-2xl mb-2">No answers found</H3>
                    <p className="text-slate-500 mb-8">We couldn't find any FAQs matching your search.</p>
                    <C9Button onClick={() => setSearchQuery('')} className="rounded-full">
                      Clear Search
                    </C9Button>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <Section id="consultation-section" bg="none" className="mt-12">
        <WpConsultationForm
          showHeader={false}
          eyebrow="STILL HAVE QUESTIONS?"
          title="Let's have a conversation."
          description="If you didn't find the answer you were looking for, reach out to our team. We're happy to discuss your specific technical requirements and provide clear, practical advice."
          formTitle="Ask an Expert"
        />
      </Section>
    </main>
  );
}
