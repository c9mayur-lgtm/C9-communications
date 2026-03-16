import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ChevronRight, Server, Shield, Smartphone, 
  Database, Building2, Truck, UserPlus,
  ChevronDown, Wifi, Cloud, HardDrive, Headphones, Phone, Network,
  Globe, Monitor, Radio, Cpu, BarChart3, 
  Infinity as InfinityIcon, LayoutGrid, ShieldCheck, Volume2, 
  GraduationCap, ShieldAlert, Users, Play, Star,
  HelpCircle, ChevronLeft, PhoneCall, Layers
} from 'lucide-react';
import { Button } from "@/components/ui/button";

/* ─────────────────────────────────────────────
   MEGA PANEL DATA (Light Theme / Purple Accent)
   ───────────────────────────────────────────── */

const TELCO_SERVICES_CONTENT: Record<string, any> = {
  internet: {
    heading: 'Business Internet',
    description: "Switch your business to ultrafast nbn® backed by Australia's most-trusted telco. From nbn® to fibre, we deliver great value internet with 24/7 enterprise support.",
    options: [
      { title: 'Business nbn®', desc: 'A network built for business backed by dedicated local support.', icon: <Wifi size={20} /> },
      { title: 'nbn® Enterprise Ethernet', desc: 'Future-proof your business with fibre fast internet.', icon: <Network size={20} /> },
      { title: 'Aussie Fibre', desc: 'Ultrafast plans of up to 10,000 Mbps with a 99.95% uptime guarantee.', icon: <Monitor size={20} /> }
    ]
  },
  network: {
    heading: 'Business Networking',
    description: "Connect your offices and remote teams with secure, high-performance private networking solutions designed for enterprise reliability.",
    options: [
      { title: 'SD-WAN', desc: 'Optimize application performance with intelligent traffic routing.', icon: <Network size={20} /> },
      { title: 'Private IP / MPLS', desc: 'Secure, private connectivity for multiple business locations.', icon: <Globe size={20} /> },
      { title: 'Network Security', desc: 'Enterprise-grade firewall and threat protection for your data.', icon: <Shield size={20} /> }
    ]
  },
  mobile: {
    heading: 'Business Mobile Solutions',
    description: "Keep your team connected anywhere with flexible SIM plans on Australia's leading networks, managed through a single business bill.",
    options: [
      { title: 'SIM Only Plans', desc: 'High data allowances with no lock-in monthly contracts.', icon: <Smartphone size={20} /> },
      { title: 'Mobile Fleet Management', desc: 'Centrally manage all team connections and data usage.', icon: <Truck size={20} /> },
      { title: 'Hardware Bundles', desc: 'The latest business devices with integrated service plans.', icon: <Server size={20} /> }
    ]
  },
  voice: {
    heading: 'Business Voice & Comms',
    description: "Modernize your communications with cloud-based phone systems that offer advanced features, crystal-clear quality, and easy management.",
    options: [
      { title: 'Cloud PBX', desc: 'Enterprise-grade phone system functionality in the cloud.', icon: <Phone size={20} /> },
      { title: 'Teams Integration', desc: 'Enable crystal-clear calling directly within Microsoft Teams.', icon: <Headphones size={20} /> },
      { title: 'SIP Trunking', desc: 'Connect your existing PBX to our high-performance voice network.', icon: <Database size={20} /> }
    ]
  }
};

const IT_SOLUTIONS_MENU = {
  layout: 'it-solutions',
  columns: [
    {
      sections: [
        {
          heading: 'Managed IT Service',
          items: [
            { icon: <Headphones size={14} />, label: 'Helpdesk Support', path: '#' },
            { icon: <UserPlus size={14} />, label: 'Outsourcing', path: '#' },
            { icon: <Globe size={14} />, label: 'Strategy & Consulting', path: '#' },
          ]
        },
        {
          heading: 'Cybersecurity',
          items: [
            { icon: <Shield size={14} />, label: 'Security Solutions', path: '#' },
            { icon: <Database size={14} />, label: 'Backup & Disaster Recovery', path: '#' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Infrastructure',
          items: [
            { icon: <Server size={14} />, label: 'IT Infrastructure Services', path: '#' },
            { icon: <Network size={14} />, label: 'Network Solutions', path: '#' },
            { icon: <Cloud size={14} />, label: 'Cloud Services', path: '#' },
            { icon: <HardDrive size={14} />, label: 'Software Solutions', path: '#' },
          ]
        }
      ],
      extra: (
        <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center">
          <img src="/images/c9_defense_logo.svg" alt="C9 Defense" className="h-8 opacity-70" onError={(e) => e.currentTarget.style.display='none'} />
          <span className="font-bold text-gray-400">c9 defense</span>
        </div>
      )
    }
  ],
  challenges: [
    { title: 'Digital Transformation', icon: <Cpu size={24} />, color: '#5D00D6' },
    { title: 'Security', icon: <ShieldCheck size={24} />, color: '#5D00D6' },
    { title: 'Business Continuity', icon: <InfinityIcon size={24} />, color: '#5D00D6' },
    { title: 'Growth', icon: <BarChart3 size={24} />, color: '#5D00D6' },
  ],
  sidebar: {
    heading: 'Industry Focus',
    items: [
      'Healthcare', 'Professional Services', 'Non-profit', 
      'Education', 'Retail', 'Real Estate'
    ]
  },
  ctaBanner: {
    title: 'Smarter IT, Stronger Business',
    body: 'End-to-end IT services designed to secure, support, and scale your business from helpdesk to cloud and beyond.',
    button: 'Partner Up Now'
  }
};

const TELCO_MENU = {
  layout: 'telco',
  columns: [
    {
      sections: [
        {
          heading: 'Internet',
          items: [
            { icon: <Wifi size={14} />, label: 'Business NBN™', path: '#', active: true },
            { icon: <Wifi size={14} />, label: 'Fast Fibre', path: '#' },
            { icon: <Network size={14} />, label: 'NBN™ Enterprise Ethernet', path: '#' },
          ]
        },
        {
          heading: 'Mobile',
          items: [
            { icon: <Smartphone size={14} />, label: 'Mobile Plans', path: '#' },
          ]
        }
      ],
      promo: {
        title: 'Upgrade To The Latest Small Business Phone System Technology And Save Up To 70% Off Your Calls',
        button: 'Start Now'
      }
    },
    {
      sections: [
        {
          heading: 'Voice',
          items: [
            { icon: <Phone size={14} />, label: 'C9X', path: '#' },
            { icon: <Headphones size={14} />, label: 'Inbound Services', path: '#' },
            { icon: <Phone size={14} />, label: 'Microsoft Teams Calling', path: '#' },
            { icon: <Network size={14} />, label: 'SIP Trunking', path: '#' },
            { icon: <Monitor size={14} />, label: 'Unified Communications', path: '#' },
            { icon: <Headphones size={14} />, label: 'Contact Centre', path: '#' },
          ]
        }
      ]
    }
  ],
  challenges: [
    { title: 'Cloud Communication', icon: <Phone size={24} /> },
    { title: 'Fast Connectivity', icon: <Wifi size={24} /> },
    { title: 'Secure Networking', icon: <Network size={24} /> },
    { title: 'Global Reach', icon: <Globe size={24} /> },
  ],
  sidebar: {
    heading: 'I Need Help With',
    items: [
      { icon: <Building2 className="text-purple-400" size={18} />, title: 'Setting Up My New Office or Relocation', desc: 'C9 Communications can take the headache out of it for you so that you can focus on business as usual.' },
      { icon: <Wifi className="text-purple-400" size={18} />, title: 'Fast & Secure Internet For My Business', desc: "We've got super-fast, epically reliable broadband solutions you've been looking for your business." },
      { icon: <Volume2 className="text-purple-400" size={18} />, title: 'Setting Up Ad On-hold', desc: 'Take your customer experience to the next level by combining a smart, memorable number with professionally recorded messages.' },
      { icon: <Wifi className="text-purple-400" size={18} />, title: 'Improving & Securing My WiFi', desc: 'We tailor network solutions to you from the design stage through to migration and beyond.' }
    ]
  }
};

const MODERN_WORKPLACE_MENU = {
  layout: 'modern-workplace',
  columns: [
    {
      sections: [
        {
          heading: 'Services',
          items: [
            { icon: <LayoutGrid size={14} />, label: 'Productivity', path: '#', active: true },
            { icon: <Monitor size={14} />, label: 'Communication Tools', path: '#' },
            { icon: <Shield size={14} />, label: 'Secure Remote Work', path: '#' },
            { icon: <Database size={14} />, label: 'Compliance & Data Protection', path: '#' },
            { icon: <UserPlus size={14} />, label: 'Collaboration', path: '#' },
            { icon: <Smartphone size={14} />, label: 'Device & Endpoint Management', path: '#' },
          ]
        },
        {
          heading: 'Other',
          items: [
            { icon: <Globe size={14} />, label: 'CCTV Camera & People Count', path: '#' },
            { icon: <Server size={14} />, label: 'Managed Print Solution', path: '#' },
            { icon: <UserPlus size={14} />, label: 'Visitor Solution', path: '#' },
          ]
        }
      ]
    }
  ],
  modernization: [
    { title: 'Microsoft 365 Solutions', icon: <LayoutGrid size={24} /> },
    { title: 'Security Awareness Training', icon: <GraduationCap size={24} /> },
    { title: 'SaaS Backup', icon: <Cloud size={24} /> },
    { title: 'Endpoint Detection & Response (EDR)', icon: <ShieldAlert size={24} /> },
  ],
  sidebar: {
    heading: 'Build a Smart Workplace',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400',
    title: 'Efficient Workplace Setup Designed for Progress',
    button: 'Book a Demo'
  }
};

const MEGA_MAP: Record<string, any> = {
  'it-solutions': IT_SOLUTIONS_MENU,
  'telco': TELCO_MENU,
  'modern-workplace': MODERN_WORKPLACE_MENU,
  'company': IT_SOLUTIONS_MENU, // Fallback for now
  'resources': IT_SOLUTIONS_MENU  // Fallback for now
};

const TABS = [
  { name: 'IT Solutions', menuKey: 'it-solutions' },
  { name: 'Telco', menuKey: 'telco' },
  { name: 'Modern Workplace', menuKey: 'modern-workplace' },
  { name: 'Company', menuKey: 'company' },
  { name: 'Resources', menuKey: 'resources' },
];

/* ─────────────────────────────────────────────
   MEGA PANEL COMPONENT (LIGHT THEME)
   ───────────────────────────────────────────── */
const TecnologiaMegaPanel = ({ data, visible }: { data: any; visible: boolean }) => {
  // Premium 3-column layout: Navigation Stack | Interactive Feature | Specialized Sidebar
  const gridTemplate = '420px 1fr 320px';

  return (
    <div style={{
      position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 99,
      opacity: visible ? 1 : 0, visibility: visible ? 'visible' : 'hidden',
      transform: visible ? 'translateY(0)' : 'translateY(-10px)',
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)', 
      pointerEvents: visible ? 'auto' : 'none',
    }}>
      <div className="container mx-auto" style={{ maxWidth: '1240px', padding: '0 2rem' }}>
        <div style={{
          background: '#ffffff', border: '1px solid #eaeaea', borderTop: 'none',
          borderRadius: '0 0 32px 32px', boxShadow: '0 50px 100px rgba(0,0,0,0.15)',
          overflow: 'hidden', display: 'flex', flexDirection: 'column'
        }}>
          {/* Main Content Area */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: gridTemplate,
            alignItems: 'stretch'
          }}>
            {/* NAVIGATION LANE (Lane 1) - Icons Removed for Cleanliness */}
            <div style={{ 
              padding: '36px 32px', 
              borderRight: '1px solid #f2f2f2',
              backgroundColor: '#fff' 
            }}>
              <div className="flex flex-col gap-10">
                {data.columns.map((col: any, ci: number) => (
                  <div key={ci} className="flex flex-col gap-10">
                    {col.sections.map((sec: any, si: number) => (
                      <div key={si}>
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D00D6]/50 mb-5">{sec.heading}</h4>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                          {sec.items.map((item: any, ii: number) => (
                            <a 
                              key={ii} 
                              href={item.path} 
                              className={`group flex items-center py-2 px-2.5 rounded-xl transition-all hover:bg-[#F4F0FA] ${item.active ? 'text-[#5D00D6] bg-[#F4F0FA]' : 'text-slate-600'}`}
                            >
                              <span className="text-[14px] font-semibold tracking-tight whitespace-nowrap group-hover:translate-x-1 transition-transform">{item.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    {col.promo && (
                      <div className="bg-[#5D00D6]/5 p-6 rounded-[24px] border border-[#5D00D6]/10 relative overflow-hidden group">
                        <div className="relative z-10">
                          <h5 className="text-[14px] font-semibold text-[#0c1024] mb-4 leading-relaxed pr-10">{col.promo.title}</h5>
                          <Button size="sm" className="rounded-full font-bold uppercase tracking-wider">
                            {col.promo.button}
                          </Button>
                        </div>
                        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl transition-all group-hover:bg-purple-500/20"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* VISUAL LANE (Lane 2) - Icons kept for card identification */}
            <div style={{ 
              padding: '36px 40px', 
              borderRight: '1px solid #f2f2f2',
              backgroundColor: '#fff' 
            }}>
              <div className="max-w-[500px]">
                {data.challenges && (
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D00D6]/40 mb-8">Primary Focus</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {data.challenges.map((c: any, i: number) => (
                        <div key={i} className="aspect-square p-7 border border-gray-100 rounded-[24px] flex flex-col items-center justify-center text-center hover:border-[#5D00D6] hover:bg-[#F4F0FA] hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500 cursor-pointer group">
                          <div className="mb-5 p-4 rounded-2xl bg-slate-50 text-[#5D00D6]/30 group-hover:bg-white group-hover:text-[#5D00D6] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">{c.icon}</div>
                          <span className="text-[14px] font-semibold text-slate-800 leading-tight tracking-tight">{c.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {data.hardware && (
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D00D6]/40 mb-8">Enterprise Gear</h4>
                    <div className="grid grid-cols-2 gap-5">
                      {data.hardware.map((h: any, i: number) => (
                        <div key={i} className="border border-gray-100 rounded-[20px] overflow-hidden flex flex-col hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500 cursor-pointer group">
                          <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center p-6 transition-colors group-hover:bg-white">
                            <img src={h.image} alt={h.title} className="max-h-full object-contain grayscale-[40%] group-hover:grayscale-0 transition-all duration-500" />
                          </div>
                          <div className="p-4 bg-white text-center border-t border-gray-50">
                            <span className="text-[13px] font-semibold text-slate-800 tracking-tight">{h.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {data.modernization && (
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D00D6]/40 mb-8">Workplace Evolution</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {data.modernization.map((m: any, i: number) => (
                        <div key={i} className="aspect-square p-7 border border-gray-100 rounded-[24px] flex flex-col items-center justify-center text-center hover:border-[#5D00D6] hover:bg-[#F4F0FA] hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500 cursor-pointer group">
                          <div className="mb-5 p-4 rounded-2xl bg-slate-50 text-[#5D00D6]/30 group-hover:bg-white group-hover:text-[#5D00D6] group-hover:scale-110 transition-all duration-500">{m.icon}</div>
                          <span className="text-[14px] font-semibold text-slate-800 leading-tight tracking-tight">{m.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* FOCUS LANE (Lane 3) */}
            <div style={{ 
              background: '#F9F7FE', 
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D00D6]/40 mb-8">{data.sidebar.heading}</h4>
              
              <div className="flex-1">
                {data.layout === 'it-solutions' && (
                  <div className="flex flex-col gap-4">
                    {data.sidebar.items.map((item: string, i: number) => (
                      <a key={i} href="#" className="group flex items-center justify-between text-[15px] font-semibold text-slate-600 hover:text-[#5D00D6] transition-all">
                        {item}
                        <ArrowRight size={16} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    ))}
                  </div>
                )}

                {data.layout === 'telco' && (
                  <div className="flex flex-col gap-6">
                    {data.sidebar.items.map((item: any, i: number) => (
                      <div key={i} className="group cursor-pointer bg-white/40 p-5 rounded-[20px] border border-transparent hover:border-[#5D00D6]/10 hover:bg-white hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-500">
                        <h5 className="text-[14px] font-semibold text-slate-900 mb-1.5 group-hover:text-[#5D00D6] transition-colors">{item.title}</h5>
                        <p className="text-[12px] text-slate-400 font-medium leading-relaxed line-clamp-2">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {data.layout === 'modern-workplace' && (
                  <div className="flex flex-col">
                    <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden mb-8 shadow-2xl shadow-purple-900/10 group cursor-pointer">
                      <img src={data.sidebar.image} alt="Workplace" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                        <h5 className="text-white font-semibold text-[20px] leading-tight mb-4">{data.sidebar.title}</h5>
                        <div className="w-16 h-1 bg-[#5D00D6] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
                      </div>
                    </div>
                    <Button size="default" className="w-full shadow-lg">
                      {data.sidebar.button}
                    </Button>
                  </div>
                )}
              </div>

              <a href="#" className="inline-flex items-center gap-2 text-[12px] font-bold text-[#5D00D6] mt-auto uppercase tracking-widest border-b-2 border-transparent hover:border-[#5D00D6] transition-all self-start">
                Explore All Opportunities <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* COMPACT CTA BANNER */}
          {data.ctaBanner && (
            <div style={{ background: 'linear-gradient(90deg, #5D00D6 0%, #3a0088 100%)', padding: '24px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="max-w-xl">
                <h4 className="text-white font-semibold text-[22px] mb-1 leading-tight tracking-tight">{data.ctaBanner.title}</h4>
                <p className="text-white/60 text-[13px] font-medium">{data.ctaBanner.body}</p>
              </div>
              <Button size="default" className="bg-white text-[#5D00D6] hover:bg-white/95 rounded-full shadow-xl">
                {data.ctaBanner.button}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Components ─────────────────────────────────────────────────────────────

const CountUp = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const nodeRef = useRef<HTMLSpanElement>(null);
  const startValue = 0;
  
  // Extract numeric part
  const numericMatch = value.match(/[\d.]+/);
  const suffix = value.replace(/[\d.]+/, "");
  const target = numericMatch ? parseFloat(numericMatch[0]) : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start: number | null = null;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / (duration * 1000), 1);
            const current = Math.floor(progress * (target - startValue) + startValue);
            setDisplayValue(current.toString() + suffix);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [value, target, suffix, duration]);

  return <span ref={nodeRef}>{displayValue}</span>;
};



// Vendor Components
const VendorCard = ({ card }: { card: any }) => {
  return (
    <div className="group relative bg-[#0D0D0D] border border-white/5 p-8 flex flex-col h-full hover:border-[#5D00D6]/30 transition-all duration-500 overflow-hidden">
        <h3 className="text-[22px] font-bold text-white mb-3 tracking-tight group-hover:text-[#5D00D6] transition-colors" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{card.title}</h3>
        <p className="text-white/50 text-[14px] leading-relaxed mb-8 font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
          {card.description}
        </p>

        <div className="space-y-0">
          <div className="h-[1px] bg-white/30 w-full mb-4"></div>
          <ul className="space-y-0">
            {card.details.map((detail: string, i: number) => (
              <li key={i} className="group/item">
                <div className="py-3 flex items-center justify-between text-white/70 text-[14px] font-bold hover:text-white transition-colors" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                  {detail}
                  <ChevronRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity text-[#5D00D6]" />
                </div>
                {i < card.details.length - 1 && <div className="h-[1px] bg-white/20 w-full"></div>}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Brand Highlight at bottom */}
        {card.brandLogo && (
          <div className="px-8 py-6 bg-black/40 border-t border-white/5 flex items-center gap-3 mt-auto">
            <div className="p-1.5 bg-white/10 rounded-sm">
              <img src={card.brandLogo} alt="" className="w-5 h-5 object-contain filter grayscale brightness-200" />
            </div>
            <span className="text-[12px] font-bold text-white/40 uppercase tracking-[0.2em]">{card.brandName}</span>
          </div>
        )}
    </div>
  );
};


const IT_CHALLENGES = [
  { id: 'challenges', label: 'Your IT Challenges' },
  { id: 'strategy', label: 'Network Strategy' },
  { id: 'devices', label: 'Device Management' },
  { id: 'security', label: 'Security Excellence' },
];

const VENDORS_DATA: Record<string, any[]> = {
  challenges: [
    {
      title: 'Infrastructure Modernization',
      description: 'Replace legacy systems with agile, cloud-native architectures.',
      icon: Server,
      details: ['Legacy hardware retirement', 'Cloud migration strategy', 'Hybrid-cloud connectivity'],
      brandName: 'Microsoft Azure',
      brandLogo: 'https://cdn.simpleicons.org/microsoftazure/white'
    },
    {
      title: 'Cyber Resilience',
      description: 'Proactive threat detection and rapid recovery protocols.',
      icon: Shield,
      details: ['Endpoint protection', '24/7 SIEM monitoring', 'Incident response planning'],
      brandName: 'CrowdStrike',
      brandLogo: 'https://cdn.simpleicons.org/crowdstrike/white'
    },
    {
      title: 'Workflow Automation',
      description: 'Streamline operations with intelligent digital workflows.',
      icon: Cpu,
      details: ['Process mapping', 'SaaS integration', 'Custom API development'],
      brandName: 'ServiceNow',
      brandLogo: 'https://cdn.simpleicons.org/servicenow/white'
    }
  ],
  strategy: [
    {
      title: 'SD-WAN Transformation',
      description: 'Intelligent traffic routing for distributed enterprises.',
      icon: Network,
      details: ['Application steering', 'Direct cloud access', 'Unified management'],
      brandName: 'Cisco',
      brandLogo: 'https://cdn.simpleicons.org/cisco/white'
    },
    {
      title: 'Private 5G Networks',
      description: 'Dedicated wireless infrastructure for high-bandwidth sites.',
      icon: Wifi,
      details: ['Site surveys', 'Spectrum management', 'IoT prioritization'],
      brandName: 'Nokia',
      brandLogo: 'https://cdn.simpleicons.org/nokia/white'
    }
  ],
  devices: [
    {
      title: 'Zero-Touch Provisioning',
      description: 'Ship hardware directly to users; auto-configure on first boot.',
      icon: Monitor,
      details: ['Autopilot deployment', 'Unified endpoint management', 'Compliance enforcement'],
      brandName: 'Apple Business',
      brandLogo: 'https://cdn.simpleicons.org/apple/white'
    }
  ],
  security: [
    {
      title: 'Zero Trust Architecture',
      description: 'Never trust, always verify every access request.',
      icon: ShieldCheck,
      details: ['Identity management', 'Micro-segmentation', 'Continuous verification'],
      brandName: 'Okta',
      brandLogo: 'https://cdn.simpleicons.org/okta/white'
    }
  ]
};

export const Wordpress1 = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [activeTelcoTab, setActiveTelcoTab] = useState('internet');
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [caseStudyIdx, setCaseStudyIdx] = useState(0);

  const TESTIMONIALS = [
    { name: "Craig Bator", role: "CEO & Co Founder at Zendesk", content: "I've been using C9 for a year now and it's made managing our multi-site connectivity so much easier and quick." },
    { name: "Martin Dorwart", role: "Product manager at Orbit", content: "With C9 Communications, I can easily track our network performance and see how our systems are running in real-time." },
    { name: "Sarah Johnson", role: "Lead Designer at Figma", content: "The custom IT solutions are beautifully architected and incredibly easy to manage. It's transformed our business workflow." },
    { name: "Alex Chen", role: "Frontend Developer at Vercel", content: "C9 has saved us countless hours in infrastructure management. Their team is comprehensive and remarkably proactive." },
    { name: "James Wilson", role: "CTO at Atlassian", content: "The transition to C9's managed infrastructure was seamless. Their technical expertise is world-class." }
  ];

  const CASE_STUDIES = [
    {
      tag: 'Non-profit organisation',
      title: 'Launch Housing: Connected for change',
      desc: "As essential services moved online, Launch Housing's aging buildings and lean IT capabilities made it difficult to provide the reliable connectivity that residents depended on.",
      img: 'https://placehold.co/1200x675/1a1a2e/5D00D6?text=Launch+Housing+Case+Study',
      videoText: 'C9 CONNECTING AUSTRALIA'
    },
    {
      tag: 'Retail',
      title: 'Akubra: Rural setting, old copper',
      desc: 'The rural setting and old copper technology at Akubra posed significant hurdles, with a sluggish internet connection that dropped out frequently.',
      img: 'https://placehold.co/1200x675/0c1024/5D00D6?text=Akubra+Case+Study',
      videoText: 'C9 CONNECTING AUSTRALIA'
    },
    {
      tag: 'Manufacturing',
      title: 'Pacific Steel: Streamlined Comms',
      desc: 'Modernizing legacy PABX systems with cloud voice and fiber connectivity across multiple factory sites.',
      img: 'https://placehold.co/1200x675/0c1024/5D00D6?text=Pacific+Steel+Case+Study',
      videoText: 'C9 CONNECTING AUSTRALIA'
    }
  ];

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(key);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 180);
  };

  return (
    <div className="text-slate-900 bg-white min-h-screen" style={{ fontFamily: '"Proxima Nova", "Inter", sans-serif' }}>
      {/* Light Theme Navbar */}
      <div className="fixed w-full z-50 transition-all bg-white border-b border-gray-100 shadow-sm" onMouseLeave={handleLeave}>
        <nav className="relative z-50 py-4 px-8 flex justify-between items-center text-slate-900 font-sans mx-auto" style={{ maxWidth: '1240px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
             <img src="/images/c9_logo_light.svg" alt="C9 Communications" className="h-[36px]" />
          </Link>
          
          <div className="hidden xl:flex gap-2 font-semibold text-[14px] items-center">
            {/* Nav items with mega menus */}
            {TABS.map(tab => {
              const isOpen = openMenu === tab.menuKey;
              return (
                <div key={tab.name} className="relative h-full flex items-center" onMouseEnter={() => handleEnter(tab.menuKey)}>
                  <button className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-[600] transition-colors ${isOpen ? 'text-[#5D00D6]' : 'text-[#0c1024] hover:text-[#5D00D6]'}`}>
                    {tab.name}
                    <ChevronDown size={14} className={`transition-transform duration-200 opacity-60 ${isOpen ? 'rotate-180 text-[#5D00D6]' : ''}`} />
                  </button>
                </div>
              );
            })}
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col items-end border-r border-gray-200 pr-6 mr-1">
               <a href="#" className="text-[11px] font-bold text-slate-500 hover:text-[#5D00D6] flex items-center gap-1 mb-0.5">
                 Client Support <ArrowRight size={12} strokeWidth={3} />
               </a>
               <a href="tel:1800000299" className="text-[16px] font-[700] tracking-tight text-[#0c1024] hover:text-[#5D00D6] transition-colors leading-none mt-0.5">
                 1800 000 299
               </a>
            </div>
            
            <Button variant="outline" size="sm" className="hidden sm:inline-flex rounded-xl">
              C9 Defense
            </Button>
            <Button size="sm" className="rounded-xl shadow-md">
              Contact Us
            </Button>
          </div>
        </nav>

        {/* Mega Menus Overlay */}
        {TABS.map(tab => (
          <TecnologiaMegaPanel 
            key={tab.menuKey} 
            data={MEGA_MAP[tab.menuKey]} 
            visible={openMenu === tab.menuKey} 
          />
        ))}
      </div>

      {/* Hero Section (Pixel-perfected to match reference) */}
      <section className="relative pt-16 pb-8 lg:pt-24 lg:pb-12 bg-white text-slate-900 overflow-hidden min-h-[350px] lg:min-h-[420px] flex items-center">
        <div className="container mx-auto px-8 relative z-10 grid xl:grid-cols-2 gap-12 items-center" style={{ maxWidth: '1240px' }}>
          <div className="max-w-[700px] xl:pr-10 py-4">
            <h1 className="text-[48px] lg:text-[64px] font-bold tracking-tight mb-8 text-[#0c1024] leading-[1.1]" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
              We manage your IT, so you can manage your business.
            </h1>
            <p className="text-[18px] lg:text-[20px] text-slate-600 mb-10 max-w-[540px] leading-relaxed font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
              Take charge of your business continuity with innovative IT solutions designed for growth.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="lg" className="shadow-2xl hover:gap-4 transition-all group">
                Schedule a Free Consultation <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" size="lg">
                Services
              </Button>
            </div>
          </div>
        </div>
 
        {/* Right side diagonal image - More contained height */}
        <div className="hidden xl:block absolute top-[5%] right-0 w-[55%] h-[90%] z-0 overflow-hidden" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)', borderRadius: '24px 0 0 24px' }}>
          <div className="w-full h-full relative">
            <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2850" 
               alt="Office Team" 
               className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Highlights Strip (Pixel-perfected mapping) */}
      <section className="bg-white border-y border-gray-100 py-12 relative z-20">
        <div className="container mx-auto px-10" style={{ maxWidth: '1240px' }}>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-12">
            
            {/* Clutch Rating */}
            <div className="flex items-center gap-5 pr-4">
              <div className="flex flex-col">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 leading-none">Reviewed on</div>
                <div className="flex items-center gap-4">
                  <span className="font-extrabold text-[28px] tracking-tighter text-slate-800 leading-none">Clutch</span>
                  <div className="flex flex-col gap-1">
                    <div className="flex text-[#ff3b30] text-[12px] leading-none">★★★★★</div>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-tight leading-none whitespace-nowrap">31 Reviews</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block h-14 w-[1px] bg-gray-200"></div>

            {/* Metric 1 */}
            <div className="flex flex-col px-4">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[36px] font-bold text-[#0c1024] leading-none tracking-tight">20</span>
                <span className="text-[18px] font-bold text-[#0c1024]">Years</span>
              </div>
              <span className="text-[13px] text-gray-600 font-semibold tracking-tight uppercase">Proven Track Record</span>
            </div>

            <div className="hidden lg:block h-14 w-[1px] bg-gray-200"></div>

            {/* Metric 2 */}
            <div className="flex flex-col px-4">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[36px] font-bold text-[#0c1024] leading-none tracking-tight">98</span>
                <span className="text-[18px] font-bold text-[#0c1024]">%</span>
              </div>
              <span className="text-[13px] text-gray-600 font-semibold tracking-tight uppercase">Customer Satisfaction</span>
            </div>

            <div className="hidden xl:block h-14 w-[1px] bg-gray-200"></div>

            {/* Metric 3 */}
            <div className="flex flex-col px-4">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[36px] font-bold text-[#0c1024] leading-none tracking-tight">1,500</span>
                <span className="text-[18px] font-bold text-[#0c1024]">Projects</span>
              </div>
              <span className="text-[13px] text-gray-600 font-semibold tracking-tight uppercase">We Have Completed</span>
            </div>

            <div className="hidden xl:block h-14 w-[1px] bg-gray-200"></div>

            {/* Metric 4 */}
            <div className="flex flex-col px-4">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[36px] font-bold text-[#0c1024] leading-none tracking-tight">3</span>
                <span className="text-[18px] font-bold text-[#0c1024]">Mins</span>
              </div>
              <span className="text-[13px] text-gray-600 font-semibold tracking-tight uppercase">Average Answer Time</span>
            </div>

          </div>
        </div>
      </section>

      {/* Simplifying IT Section (Updated to Light Theme) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-widest mb-4 block">Proven Experience</span>
            <h2 className="text-[48px] font-bold text-[#0c1024] tracking-tight leading-tight">
              Simplifying IT for a complex world.
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {[
              { 
                title: 'Cost-effectiveness', 
                desc: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.',
                icon: '/images/icons/cost-effectiveness.png?v=2'
              },
              { 
                title: 'Innovative Technology', 
                desc: 'We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead.',
                icon: '/images/icons/innovative-technology.png?v=2'
              },
              { 
                title: 'Industry Expertise', 
                desc: 'We specialize in serving specific industries, such as healthcare, finance, or manufacturing.',
                icon: '/images/icons/industry-expertise.png?v=2'
              },
              { 
                title: 'Scalability', 
                desc: 'Our solutions are scalable and can grow with your business, ensuring that you get the most value.',
                icon: '/images/icons/scalability.png?v=2'
              }
            ].map((f, i) => (
              <div key={i} className={`flex flex-col items-start flex-1 ${
                i === 0 ? 'pb-8 lg:pb-0 lg:pr-8' : 
                i === 3 ? 'pt-8 lg:pt-0 lg:pl-8' : 
                'py-8 lg:py-0 lg:px-8'
              }`}>
                <div className="w-14 h-14 mb-6 flex items-center justify-start">
                  <img src={f.icon} alt={f.title} className="max-w-full max-h-full object-contain object-left" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0c1024]">{f.title}</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Telco Services Section (Matching Reference Image) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="mb-12">
            <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-widest mb-4 block">Our Expertise</span>
            <h2 className="text-[48px] font-bold text-[#0c1024] tracking-tight mb-8">
              Telco services, tailored for business.
            </h2>
            
            {/* Tabs Header */}
            <div className="flex border-b border-gray-200">
              {[
                { id: 'internet', label: 'Internet', icon: <Wifi size={20} /> },
                { id: 'network', label: 'Network', icon: <Radio size={20} /> },
                { id: 'mobile', label: 'Mobile', icon: <Smartphone size={20} /> },
                { id: 'voice', label: 'Voice', icon: <Phone size={20} /> },
              ].map((tab) => {
                const isActive = activeTelcoTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTelcoTab(tab.id)}
                    className={`flex items-center gap-3 px-8 py-5 text-[15px] font-bold transition-all border-b-2 relative ${
                      isActive 
                        ? 'text-[#5D00D6] border-[#5D00D6] bg-[#F4F0FA]' 
                        : 'text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`${isActive ? 'text-[#5D00D6]' : 'text-gray-400'}`}>
                      {tab.icon}
                    </span>
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Area */}
          <div className="py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTelcoTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid lg:grid-cols-2 gap-16 items-start"
              >
                {/* Left side: Heading & Description */}
                <div>
                  <h3 className="text-[32px] font-bold text-[#0c1024] mb-6 tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                    {TELCO_SERVICES_CONTENT[activeTelcoTab].heading}
                  </h3>
                  <p className="text-[18px] text-gray-500 leading-relaxed font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                    {TELCO_SERVICES_CONTENT[activeTelcoTab].description}
                  </p>
                </div>

                {/* Right side: Feature Cards */}
                <div className="flex flex-col gap-4">
                  {TELCO_SERVICES_CONTENT[activeTelcoTab].options.map((option: any, idx: number) => (
                    <div 
                      key={idx} 
                      className="group flex items-center justify-between p-6 bg-white border border-gray-100 rounded-xl hover:border-[#5D00D6] hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#5D00D6] bg-[#F4F0FA] group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                          {option.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-[17px] text-[#0c1024] mb-1">{option.title}</h4>
                          <p className="text-[13px] text-gray-400 font-medium">{option.desc}</p>
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-gray-300 group-hover:text-[#5D00D6] group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Solutions Section - Original Purple Gradient */}
      <section className="relative py-32 overflow-hidden">
        {/* Full-width purple-to-white gradient */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#5D00D6] via-[#946CE2] to-white z-0" />
        
        <div className="container mx-auto px-8 max-w-[1240px] relative z-10">
          <div className="flex flex-col mb-16 gap-4">
            <span className="bg-white/20 backdrop-blur-sm text-white text-[12px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded w-fit border border-white/20" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>HOW WE DO</span>
            <h2 className="text-[48px] lg:text-[56px] font-bold tracking-tight text-white leading-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>Solutions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: UserPlus, title: 'Managed Services', desc: 'Free your team from day-to-day IT issues with fully managed support, monitoring, and maintenance designed to keep your systems running smoothly.' },
              { icon: Cloud, title: 'Infrastructure & Cloud', desc: 'Modernize your IT environment with scalable cloud solutions and robust infrastructure services that support your business today and tomorrow.' },
              { icon: ShieldCheck, title: 'Cyber Security & Risk Management', desc: 'Protect your data, systems, and users with layered security solutions, compliance services, and proactive risk management strategies.' },
              { icon: Monitor, title: 'Internet', desc: 'Deliver fast, reliable internet across all locations with business-grade NBN™, fibre, and enterprise Ethernet tailored for high performance.' },
              { icon: Users, title: 'Voice', desc: 'Streamline communication with VoIP, SIP, Teams Calling, and unified solutions that connect teams, customers, and contact centers effortlessly.' },
              { icon: Smartphone, title: 'Mobile', desc: 'Empower a mobile workforce with business mobile plans and secure access to data and apps anytime, anywhere.' }
            ].map((s, i) => (
              <div key={i} className="bg-white p-12 rounded-none shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all group flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100">
                <div className="mb-8">
                  <s.icon size={40} className="text-[#5D00D6]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[24px] font-bold mb-4 text-[#0c1024] tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{s.title}</h3>
                <p className="text-gray-600 text-[16px] mb-8 leading-relaxed flex-grow font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{s.desc}</p>
                <div className="w-full h-[1px] bg-gray-300 mt-auto mb-6"></div>
                <div className="flex items-center text-[14px] font-bold text-[#5D00D6] group-hover:underline uppercase tracking-wider" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                  Learn more
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="shadow-2xl hover:gap-4 transition-all group">
              View All Solutions <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Section - Hidden for now
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-[1240px]">
           <div className="max-w-3xl mb-16">
            <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-widest mb-4 block">Industry Solutions</span>
            <h2 className="text-[48px] font-bold text-[#0c1024] tracking-tight leading-tight">
              Solving IT challenges in every industry, every day.
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { icon: HeartPulse, name: 'Healthcare' },
                { icon: Briefcase, name: 'Professional Services' },
                { icon: Heart, name: 'Non-profit' },
                { icon: GraduationCap, name: 'Education' },
                { icon: ShoppingBag, name: 'Retail' },
                { icon: Home, name: 'Real Estate' },
              ].map((ind, i) => (
               <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:border-[#5D00D6] hover:shadow-md transition-all group">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-[#F4F0FA] text-[#5D00D6] rounded-lg flex items-center justify-center group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                     <ind.icon size={20} />
                   </div>
                   <span className="font-bold text-[15px] text-[#0c1024]">{ind.name}</span>
                 </div>
                 <ChevronRight className="text-gray-300 group-hover:text-[#5D00D6]" size={20} />
               </div>
             ))}
          </div>
          
          <button className="text-[#5D00D6] font-bold text-[15px] flex items-center gap-2 hover:underline">
            View All Industries <ArrowRight size={16} />
          </button>
        </div>
      </section>
      */}

      {/* Datashake Inspired Section */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-[0.4em] mb-6 block">Why Partner With Us</span>
            <h2 className="text-[52px] font-bold text-[#0c1024] leading-[1.1] tracking-tight">
              What global companies use C9 Communications for
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
            {[
              { 
                title: 'Business Voice & C9X', 
                desc: "Replace your legacy phone system with C9X — 80+ features, $0 hardware, and a migration your team won't even notice. From $20/user per month.",
                icon: PhoneCall,
                tag: 'VOICE & CLOUD PHONE',
                metrics: [
                  { value: '80+', label: 'features included' },
                  { value: '$20', label: 'per user / month' }
                ]
              },
              { 
                title: 'Business NBN', 
                desc: 'Unlimited data, static IP, and a business-grade SLA backed by Telstra, Optus, Vocus and Aussie Broadband wholesale networks. Always-on connectivity, guaranteed.',
                icon: Wifi,
                tag: 'BUSINESS INTERNET',
                metrics: [
                  { value: '99.9%', label: 'uptime SLA' },
                  { value: '1Gbps', label: 'max plan speed' }
                ]
              },
              { 
                title: 'Managed IT & Security', 
                desc: 'Proactive monitoring, firewall management, and cybersecurity from Australian-based engineers — so your team stays productive and your data stays protected.',
                icon: ShieldCheck,
                tag: 'MANAGED IT',
                metrics: [
                  { value: '24/7', label: 'proactive monitoring' },
                  { value: '100%', label: 'Australian engineers' }
                ]
              },
              { 
                title: 'Office Relocation', 
                desc: 'Moving office? We connect your voice, internet, IT, and print before you walk through the door. 500+ relocations completed. Zero downtime reported.',
                icon: Truck,
                tag: 'OFFICE RELOCATION',
                metrics: [
                  { value: '500+', label: 'relocations done' },
                  { value: '0', label: 'downtime reported' }
                ]
              },
              { 
                title: 'Unified Communications', 
                desc: "Voice, video, messaging, and collaboration — all in one platform. C9X connects your team whether they're in the office, at home, or on the road.",
                icon: Layers,
                tag: 'UNIFIED COMMS',
                metrics: [
                  { value: '40+', label: 'integrations' },
                  { value: '48hr', label: 'average go-live' }
                ]
              },
              { 
                title: 'Australian Support Team', 
                desc: 'Every support call is answered by someone in Australia who knows your account. No offshore centres. No ticket queues. No runaround.',
                icon: Headphones,
                tag: 'LOCAL SUPPORT',
                metrics: [
                  { value: '1,000+', label: 'businesses supported' },
                  { value: '4.8★', label: 'Google rating' }
                ]
              }
            ].map((block, i) => (
              <div key={i} className="p-16 border-r border-b border-gray-200 transition-all duration-300 cursor-default flex flex-col">
                <div className="mb-4 self-start">
                  <span className="px-4 py-1.5 rounded-full border bg-[#F4F0FA] border-[#5D00D6]/20 text-[#5D00D6] text-[10px] font-bold uppercase tracking-[0.08em]" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                    {block.tag}
                  </span>
                </div>
                <div className="mb-6 mt-4">
                  <block.icon size={32} strokeWidth={1.5} color="#5D00D6" fill="none" />
                </div>
                <h3 className="text-[18px] font-bold text-[#0F172A] mb-3 tracking-tight">{block.title}</h3>
                <p className="text-[#6B7280] text-[14px] leading-[1.65] font-normal mb-8 flex-grow">
                  {block.desc}
                </p>

                {/* Metrics Row */}
                <div className="mt-auto pt-6 border-t border-gray-200 flex items-center gap-0">
                  {block.metrics.map((m, mi) => (
                    <React.Fragment key={mi}>
                      <div className="flex-1">
                        <div className="text-[28px] font-bold text-[#5D00D6] leading-none tracking-tight" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                          <CountUp value={m.value} />
                        </div>
                        <div className="text-[12px] text-[#6B7280] mt-1 font-medium" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                          {m.label}
                        </div>
                      </div>
                      {mi === 0 && <div className="h-10 w-[1px] bg-[#5D00D6]/30 mx-6"></div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Vendors Carousel Section (Dark Premium Theme) */}
      <section className="py-32 bg-[#0c1024] text-white overflow-hidden">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
            <div className="max-w-2xl">
              <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-[0.3em] mb-6 block">Strategic Partnerships</span>
              <h2 className="text-[48px] lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-8">
                Leading the way in IT excellence.
              </h2>
              <div className="flex flex-wrap gap-3">
                {IT_CHALLENGES.map((cat, idx) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategoryIndex(idx)}
                    className={`px-6 py-3 rounded-full text-[13px] font-bold transition-all duration-300 border ${
                      categoryIndex === idx 
                        ? 'bg-[#5D00D6] border-[#5D00D6] text-white shadow-xl shadow-purple-900/40' 
                        : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:bg-white/10'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setCategoryIndex((prev) => (prev > 0 ? prev - 1 : IT_CHALLENGES.length - 1))}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/50 hover:text-white"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => setCategoryIndex((prev) => (prev < IT_CHALLENGES.length - 1 ? prev + 1 : 0))}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/50 hover:text-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {VENDORS_DATA[IT_CHALLENGES[categoryIndex].id].map((card, idx) => (
                  <VendorCard key={idx} card={card} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Case Studies Section (Interactive Slider) */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-[0.3em] mb-4 block">Success Stories</span>
              <h2 className="text-[48px] font-bold text-[#0c1024] leading-tight tracking-tight">
                Hear from businesses like yours
              </h2>
              <p className="text-[18px] text-gray-400 mt-6 leading-relaxed">
                Learn how our telco solutions have empowered Australian businesses to achieve success.
              </p>
            </div>
            
            {/* Nav Arrows */}
            <div className="flex gap-4">
              <button 
                onClick={() => setCaseStudyIdx(prev => Math.max(0, prev - 1))}
                className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${caseStudyIdx === 0 ? 'border-gray-100 text-gray-300 cursor-not-allowed' : 'border-[#5D00D6]/20 text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white shadow-lg'}`}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => setCaseStudyIdx(prev => Math.min(CASE_STUDIES.length - 2, prev + 1))}
                className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${caseStudyIdx >= CASE_STUDIES.length - 2 ? 'border-gray-100 text-gray-300 cursor-not-allowed' : 'border-[#5D00D6]/20 text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white shadow-lg'}`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative">
            <motion.div 
              className="flex gap-8"
              animate={{ x: `calc(-${caseStudyIdx * 50}% - ${caseStudyIdx * 16}px)` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {CASE_STUDIES.map((cs, idx) => (
                <div key={idx} className="min-w-[calc(50%-16px)] group cursor-pointer">
                  <div className="relative aspect-video rounded-none overflow-hidden mb-8 shadow-2xl">
                    <img src={cs.img} alt={cs.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-white text-[24px] lg:text-[32px] font-black tracking-tighter mb-4 px-4 leading-tight">
                          {cs.videoText}
                        </div>
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto hover:bg-white/30 transition-all">
                          <Play size={24} fill="white" className="text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-[14px] font-bold mb-4 block text-[#5D00D6] uppercase tracking-widest">{cs.tag}</span>
                  <h3 className="text-[24px] font-bold text-[#0c1024] mb-4 group-hover:text-[#5D00D6] transition-colors line-clamp-1">{cs.title}</h3>
                  <p className="text-gray-500 text-[16px] leading-relaxed mb-6 line-clamp-2 font-medium">{cs.desc}</p>
                  <a href="#" className="text-[#5D00D6] font-bold text-[14px] underline underline-offset-4 decoration-2 hover:decoration-[#5D00D6]/50">Read case study</a>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>



      {/* FAQ Section (Matching UI Inspiration) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20">
            {/* Left side */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F4F0FA] px-4 py-1.5 rounded-full border border-[#5D00D6]/10 mb-6">
                <div className="w-4 h-4 text-[#5D00D6]"><HelpCircle size={16} /></div>
                <span className="text-[12px] font-bold text-[#5D00D6] uppercase tracking-wider">FAQ</span>
              </div>
              <h2 className="text-[48px] font-bold text-[#0c1024] leading-tight tracking-tight mb-6">
                Have more questions?
              </h2>
              <p className="text-gray-500 text-[18px] mb-12 leading-relaxed">
                Our team is designed to make managing your IT easy and stress-free. With intuitive features, you can track your needs and support effortlessly.
              </p>

              <div className="bg-[#F9F7FE] p-10 rounded-[32px] border border-[#5D00D6]/5">
                <h3 className="text-[24px] font-bold mb-4 text-[#0c1024]">Can't find answers?</h3>
                <p className="text-gray-500 mb-8 font-medium">We're here to help you out whenever you need! Get in touch with our dedicated support team.</p>
                <Button size="lg" className="bg-[#5D00D6] hover:bg-[#4a00ab] rounded-full px-8 gap-3 group border-none shadow-xl shadow-purple-900/20">
                  Contact us <ArrowRight className="size-4 transition-transform group-hover:rotate-[-45deg]" />
                </Button>
              </div>
            </div>

            {/* Right side - Custom Accordion */}
            <div className="space-y-4">
              {[
                { q: 'How does C9 handle emergency support?', a: 'We provide 24/7 emergency support with a 15-minute response guarantee for critical infrastructure issues. Our on-call engineers are always ready to assist.' },
                { q: 'Is there a minimum contract period?', a: 'We offer flexible terms ranging from monthly rolling to 12-36 month commitments, depending on the level of managed services and infrastructure requirements.' },
                { q: 'Which payment methods do you accept?', a: 'We support all major credit cards, direct debits, and bank transfers. Enterprise clients can also opt for monthly invoicing with standard terms.' },
                { q: 'How does C9 keep my financial data secure?', a: 'Security is in our DNA. We use enterprise-grade encryption, multi-factor authentication, and comply with strict Australian privacy and data sovereignty laws.' },
                { q: 'How can I contact support?', a: 'You can reach us via our customer portal, live chat, email, or by calling our priority Australian support line at 1800 000 299.' }
              ].map((item, i) => <FAQItem key={i} question={item.q} answer={item.a} defaultOpen={i === 0} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Shadcn Studio inspired) */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="grid lg:grid-cols-[1fr_2.4fr] gap-16 items-start">
            {/* Left Column: Heading & Navigation */}
            <div className="sticky top-32">
              <span className="text-[#5D00D6] text-[12px] font-bold uppercase tracking-[0.2em] mb-4 block" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>Real Customers</span>
              <h2 className="text-[48px] font-bold text-[#0c1024] leading-[1.1] tracking-tight mb-6" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                Customers Feedback
              </h2>
              <p className="text-[16px] text-[#64748b] mb-10 leading-relaxed font-medium" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                From startups to global enterprises, here's how C9 Communications is transforming business connectivity.
              </p>
              
              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button 
                  onClick={() => setTestimonialIdx(prev => Math.max(0, prev - 1))}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${testimonialIdx === 0 ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-[#F4F0FA] text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white'}`}
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => setTestimonialIdx(prev => Math.min(TESTIMONIALS.length - 2, prev + 1))}
                  className={`w-12 h-12 rounded-full bg-[#5D00D6] text-white flex items-center justify-center transition-all hover:bg-[#4c00b0] shadow-lg shadow-purple-900/20 ${testimonialIdx >= TESTIMONIALS.length - 2 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Right Column: Cards Slider */}
            <div className="relative">
              <div className="flex gap-6 overflow-hidden">
                <motion.div 
                  className="flex gap-6"
                  animate={{ x: `calc(-${testimonialIdx * 50}% - ${testimonialIdx * 24}px)` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {[
                    {
                      name: "Craig Bator",
                      role: "CEO & Co Founder at Zendesk",
                      content: "I've been using C9 for a year now and it's made managing our multi-site connectivity so much easier and quick.",
                      avatar: "CB"
                    },
                    {
                      name: "Martin Dorwart",
                      role: "Product manager at Orbit",
                      content: "With C9 Communications, I can easily track our network performance and see how our systems are running in real-time.",
                      avatar: "MD"
                    },
                    {
                      name: "Sarah Johnson",
                      role: "Lead Designer at Figma",
                      content: "The custom IT solutions are beautifully architected and incredibly easy to manage. It's transformed our business workflow.",
                      avatar: "SJ"
                    },
                    {
                      name: "Alex Chen",
                      role: "Frontend Developer at Vercel",
                      content: "C9 has saved us countless hours in infrastructure management. Their team is remarkably proactive.",
                      avatar: "AC"
                    },
                    {
                      name: "James Wilson",
                      role: "CTO at Atlassian",
                      content: "The transition to C9's managed infrastructure was seamless. Their technical expertise is world-class.",
                      avatar: "JW"
                    }
                  ].map((t, idx) => (
                    <div key={idx} className="min-w-[calc(50%-12px)] bg-white border border-gray-100 p-10 rounded-[32px] hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-purple-900/5 transition-all flex flex-col h-full group">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 rounded-full bg-[#F4F0FA] flex items-center justify-center text-[15px] font-bold text-[#5D00D6]">
                          {t.avatar}
                        </div>
                        <div>
                          <h4 className="font-bold text-[18px] text-[#0c1024] leading-none mb-1.5" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{t.name}</h4>
                          <p className="text-[14px] text-[#64748b] font-medium" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{t.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex text-[#f59e0b] mb-8 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} fill="currentColor" size={18} strokeWidth={0} />
                        ))}
                      </div>

                      <p className="text-[17px] text-gray-600 leading-relaxed font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                        "{t.content}"
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Dark Theme with Animated Bubbles) */}
      <footer className="bg-black text-white pt-24 font-sans">
         <div className="container mx-auto px-10 grid lg:grid-cols-2 gap-16 mb-24" style={{ maxWidth: '1240px' }}>
            
            {/* Left side: Navigation links & compliance */}
            <div className="flex flex-col justify-between">
              
              <div className="mb-16">
                 <h4 className="font-bold text-[22px] mb-6 text-white tracking-tight">Solutions</h4>
                 <div className="grid grid-cols-2 gap-8">
                    <ul className="space-y-3.5 text-[15px]">
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Managed Services</a></li>
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">IT Consulting & Advisory</a></li>
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Cyber Security</a></li>
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Web Development</a></li>
                    </ul>
                    <ul className="space-y-3.5 text-[15px]">
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Mobile Development</a></li>
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Cloud Services</a></li>
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Network Connectivity</a></li>
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">ERP Solutions</a></li>
                    </ul>
                 </div>
              </div>

              <div className="mb-16">
                 <h4 className="font-bold text-[22px] mb-6 text-white tracking-tight">Company</h4>
                 <div className="grid grid-cols-2 gap-8">
                    <ul className="space-y-3.5 text-[15px]">
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">About us</a></li>
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Why us</a></li>
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Team</a></li>
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Careers</a></li>
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Partners & Certifications</a></li>
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Reviews & Awards</a></li>
                    </ul>
                    <ul className="space-y-3.5 text-[15px]">
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Blog</a></li>
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Case studies</a></li>
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">Events</a></li>
                        <li><a href="#" className="!text-white hover:!text-[#5D00D6] transition-colors block">FAQ</a></li>
                    </ul>
                 </div>
              </div>
              
              <div className="max-w-md w-full flex flex-col gap-7 pb-10">
                  <div>
                    <p className="text-[13px] text-gray-400 font-semibold uppercase tracking-widest mb-3">Stay in the loop</p>
                    <div className="bg-transparent rounded-xl border border-[#333] flex items-center overflow-hidden focus-within:border-[#5D00D6] transition-colors">
                      <input type="email" placeholder="Your business email" className="bg-transparent px-5 py-4 w-full text-[14px] outline-none text-white placeholder-gray-500 font-medium" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-0.5 border-gray-600 rounded-sm bg-black text-[#5D00D6] focus:ring-[#5D00D6] cursor-pointer shrink-0" />
                    <span className="text-[12px] text-[#A0AABB] leading-[1.7]" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy.</span>
                  </div>
                  <Button size="lg" className="shadow-xl group self-start">
                    Send Message <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Button>
              </div>
            </div>

            {/* Right side: Logo & CTA */}
            <div className="flex flex-col justify-center items-center h-full gap-8">
               <img src="/images/c9_logo_light.svg" alt="C9 Communications" className="w-[380px] filter brightness-0 invert" />
               <Button size="lg" className="px-12 shadow-2xl group">
                 Schedule Consultation <ArrowRight className="transition-transform group-hover:translate-x-1" />
               </Button>
            </div>
         </div>
         
         <div className="bg-white text-slate-900 py-6">
           <div className="container mx-auto px-10 flex flex-col xl:flex-row justify-between items-center gap-8" style={{ maxWidth: '1240px' }}>
             
             <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
               <div className="flex items-center gap-3">
                  <span className="font-black text-[22px] tracking-tight text-slate-900">Clutch</span>
                  <div className="flex flex-col gap-0.5">
                     <div className="text-[10px] font-bold text-gray-400 leading-none uppercase tracking-wide">Reviewed on</div>
                     <div className="flex text-[#ff3b30] text-sm leading-none">★★★★★</div>
                     <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide leading-none">31 Reviews</span>
                  </div>
               </div>
               <div className="hidden lg:block w-[1px] h-10 bg-gray-200"></div>
               <div className="hidden lg:block text-[13px] text-gray-600 leading-[1.6]">
                  Seventh Ave, 20th Floor<br/>
                  New York, NY 10018
               </div>
               <div className="hidden lg:block w-[1px] h-10 bg-gray-200"></div>
               <div className="hidden lg:block text-[13px] text-gray-600 leading-[1.6]">
                  T: 1-800-356-8933<br/>
                  E: office@c9communications.com.au
               </div>
             </div>
             
             <div className="flex gap-8 lg:gap-10 font-semibold text-[11px] text-gray-500">
                <a href="#" className="flex flex-col items-center gap-1.5 hover:text-slate-900 transition-colors">
                  <span className="font-bold text-lg leading-none text-slate-700">in</span>
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="flex flex-col items-center gap-1.5 hover:text-slate-900 transition-colors">
                  <svg className="w-5 h-5 text-slate-700 block" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <span>Github</span>
                </a>
                <a href="#" className="flex flex-col items-center gap-1.5 hover:text-slate-900 transition-colors">
                  <svg className="w-5 h-5 text-slate-700 block" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  <span>Twitter</span>
                </a>
                <a href="#" className="flex flex-col items-center gap-1.5 hover:text-slate-900 transition-colors">
                  <svg className="w-5 h-5 text-slate-700 block" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  <span>Facebook</span>
                </a>
                <a href="#" className="flex flex-col items-center gap-1.5 hover:text-slate-900 transition-colors">
                  <span className="font-bold text-lg leading-none text-slate-700">▶</span>
                  <span>Youtube</span>
                </a>
             </div>
           </div>
           
           <div className="container mx-auto px-10 mt-6 flex flex-col md:flex-row justify-center items-center text-[12px] text-gray-500 gap-4" style={{ maxWidth: '1240px' }}>
             <span>© 2026 C9 Communications. All rights reserved.</span>
             <a href="#" className="hover:text-slate-900 transition-colors">Terms & Conditions</a>
             <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
           </div>
         </div>
       </footer>
    </div>
  );
};

// ── Components ─────────────────────────────────────────────────────────────

function FAQItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  return (
    <div className={`overflow-hidden border transition-all duration-300 rounded-[24px] ${isOpen ? 'bg-white shadow-2xl shadow-[#5D00D6]/10 border-[#5D00D6]/20' : 'bg-gray-50/50 hover:bg-gray-50 border-gray-100'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-7 text-left group"
      >
        <span className={`text-[18px] font-bold transition-colors pr-8 ${isOpen ? 'text-[#5D00D6]' : 'text-[#0c1024]'}`} style={{ fontFamily: '"Proxima Nova", sans-serif' }}>{question}</span>
        <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#5D00D6] text-white rotate-180' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-[#5D00D6]/30 group-hover:text-[#5D00D6]'}`}>
          <ChevronDown size={18} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-7 pb-8 pt-0">
              <div className="h-px bg-gray-100 w-full mb-6"></div>
              <p className="text-gray-500 leading-relaxed text-[16px] font-normal" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
