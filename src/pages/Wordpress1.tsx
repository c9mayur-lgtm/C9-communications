import { useState, useRef, useEffect } from 'react';
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ChevronRight, Server, Shield, Smartphone, 
  Database, HeartPulse, Building2, Truck, Landmark, UserPlus,
  ChevronDown, Wifi, Cloud, HardDrive, Headphones, Phone, Network,
  Globe, Monitor, Radio, Cpu, BarChart3, 
  Infinity as InfinityIcon, LayoutGrid, ShieldCheck, Volume2, 
  GraduationCap, ShieldAlert, Users, Play, MessageCircle, Star,
  Plus, Minus, HelpCircle, Quote
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
      'Industry Manufacturing', 'Transportation Logistics', 'Healthcare', 
      'Banks & Insurance', 'Consulting Providers', 'Non Profit'
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

export const Wordpress1 = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeTelcoTab, setActiveTelcoTab] = useState('internet');
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
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      {/* Light Theme Navbar */}
      <div className="fixed w-full z-50 transition-all bg-white border-b border-gray-100 shadow-sm" onMouseLeave={handleLeave}>
        <nav className="relative z-50 py-4 px-8 flex justify-between items-center text-slate-900 font-sans mx-auto" style={{ maxWidth: '1240px' }}>
          {/* Logo */}
          <div className="flex items-center gap-3">
             <img src="/images/c9_logo_light.svg" alt="C9 Communications" className="h-[36px]" />
          </div>
          
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
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 text-[#0c1024]">
              We manage your IT, so you can manage your business.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-[500px] leading-relaxed">
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
      <section className="py-24 bg-[#F8F9FA] border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-widest mb-4 block">Proven Experience</span>
            <h2 className="text-[48px] font-bold text-[#0c1024] tracking-tight leading-tight">
              Simplifying IT for a complex world.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#5D00D6] transition-all group flex flex-col h-full hover:shadow-2xl hover:shadow-[#5D00D6]/10 cursor-pointer border-t-4 border-t-transparent hover:border-t-[#5D00D6] hover:-translate-y-1.5 duration-300">
                <div className="w-16 h-16 mb-8 flex items-center justify-center">
                  <img src={f.icon} alt={f.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0c1024]">{f.title}</h3>
                <p className="text-gray-600 text-[15px] mb-8 leading-relaxed flex-grow">{f.desc}</p>
                <div className="flex items-center text-[15px] font-bold text-[#5D00D6] group-hover:translate-x-2 transition-transform mt-auto">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </div>
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
                  <h3 className="text-[28px] font-black text-[#0c1024] mb-6 uppercase tracking-tight">
                    {TELCO_SERVICES_CONTENT[activeTelcoTab].heading}
                  </h3>
                  <p className="text-[17px] text-gray-500 leading-relaxed font-medium">
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
            <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded w-fit border border-white/20">HOW WE DO</span>
            <h2 className="text-[56px] font-bold tracking-tight text-white leading-tight">Solutions</h2>
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
              <div key={i} className="bg-white p-10 rounded-xl shadow-sm hover:shadow-2xl hover:shadow-[#5D00D6]/10 transition-all group flex flex-col h-full cursor-pointer border border-transparent hover:border-gray-100">
                <div className="mb-8">
                  <s.icon size={36} className="text-[#5D00D6]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0c1024]">{s.title}</h3>
                <p className="text-gray-600 text-[15px] mb-10 leading-relaxed flex-grow">{s.desc}</p>
                <div className="flex items-center text-[13px] font-bold text-[#5D00D6] group-hover:underline mt-auto border-t border-gray-50 pt-4">
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

      {/* Industries Section */}
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
               { icon: Building2, name: 'Industry & Manufacturing' },
               { icon: Truck, name: 'Transportation & Logistics' },
               { icon: HeartPulse, name: 'Healthcare' },
               { icon: Landmark, name: 'Banks & Insurance' },
               { icon: UserPlus, name: 'Consulting Providers' },
               { icon: HeartPulse, name: 'Non-Profit' },
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

      {/* Case Studies Section (Matching Reference) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="flex flex-col mb-16">
            <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-widest mb-4 block">Success Stories</span>
            <h2 className="text-[48px] font-bold text-[#0c1024] leading-tight mb-6">
              Hear from businesses like yours
            </h2>
            <p className="text-[18px] text-gray-600 max-w-[600px] leading-relaxed">
              Learn how our telco solutions have empowered Australian businesses to achieve success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative">
            {[
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
              }
            ].map((cs, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-video rounded-[32px] overflow-hidden mb-8 shadow-2xl">
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
                <h3 className="text-[24px] font-bold text-[#0c1024] mb-4 group-hover:text-[#5D00D6] transition-colors">{cs.title}</h3>
                <p className="text-gray-600 text-[16px] leading-relaxed mb-6 line-clamp-2">{cs.desc}</p>
                <a href="#" className="text-[#5D00D6] font-bold text-[14px] underline underline-offset-4 decoration-2">Read case study</a>
              </div>
            ))}
            
            {/* Nav Arrows */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden xl:block">
               <button className="w-12 h-12 bg-[#5D00D6] rounded-full flex items-center justify-center text-white shadow-xl hover:bg-[#4a00ab] transition-all">
                  <ChevronRight size={24} strokeWidth={3} />
               </button>
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-12 h-3 bg-[#5D00D6] rounded-full"></div>
            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Matching UI Inspiration) */}
      <section className="py-24 bg-[#F8F9FA] border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20">
            {/* Left side */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm mb-6">
                <div className="w-4 h-4 text-gray-500"><HelpCircle size={16} /></div>
                <span className="text-[12px] font-bold text-gray-600 uppercase tracking-wider">FAQ</span>
              </div>
              <h2 className="text-[48px] font-bold text-[#0c1024] leading-tight tracking-tight mb-6">
                Have more questions?
              </h2>
              <p className="text-gray-600 text-[18px] mb-12 leading-relaxed">
                Our team is designed to make managing your IT easy and stress-free. With intuitive features, you can track your needs and support effortlessly.
              </p>

              <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                <h3 className="text-[24px] font-bold mb-4">Can't find answers?</h3>
                <p className="text-gray-600 mb-8 font-medium">We're here to help you out whenever you need! Get in touch with our dedicated support team.</p>
                <Button size="lg" className="bg-[#1a1a1b] hover:bg-black rounded-full px-8 gap-3 group">
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

      {/* Testimonials Section (ShadcnStudio Component 01 Style) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-[1240px]">
          <div className="flex flex-col mb-16">
            <span className="text-[#5D00D6] text-[14px] font-bold uppercase tracking-widest mb-4 block">Real customers</span>
            <h2 className="text-[48px] font-bold text-[#0c1024] leading-tight mb-4">
              Customers Feedback
            </h2>
            <p className="text-gray-600 text-[18px] max-w-2xl leading-relaxed">
              From carrier changes to infrastructure growth, here's how C9 Communications helped.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Craig Bator",
                role: "CEO & Co Founder at Zendesk",
                content: "I've been using C9 for a year now and it's made managing our multi-site connectivity so much easier and quick."
              },
              {
                name: "Martin Dorwart",
                role: "Product manager at Orbit",
                content: "With C9 Communications, I can easily track our network performance and see how our systems are running in real-time."
              },
              {
                name: "Sarah Johnson",
                role: "Lead Designer at Figma",
                content: "The custom IT solutions are beautifully architected and incredibly easy to manage. It's transformed our business workflow."
              },
              {
                name: "Alex Chen",
                role: "Frontend Developer at Vercel",
                content: "C9 has saved us countless hours in infrastructure management. Their team is comprehensive and remarkably proactive."
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[24px] shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                <div className="flex text-yellow-400 mb-6 font-bold text-[10px] gap-0.5">
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                </div>
                <div className="flex flex-col gap-1 mb-6">
                  <h4 className="font-bold text-[18px] text-[#0c1024] leading-none">{t.name}</h4>
                  <p className="text-[14px] text-gray-400 font-medium leading-none">{t.role}</p>
                </div>
                <p className="text-[16px] text-gray-600 leading-relaxed font-medium mt-auto italic">
                  "{t.content}"
                </p>
              </div>
            ))}
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
              
              <div className="max-w-md w-full flex flex-col gap-7">
                  <div>
                    <p className="text-[13px] text-gray-400 font-semibold uppercase tracking-widest mb-3">Stay in the loop</p>
                    <div className="bg-transparent rounded-xl border border-[#333] flex items-center overflow-hidden focus-within:border-[#5D00D6] transition-colors">
                      <input type="email" placeholder="Your business email" className="bg-transparent px-5 py-4 w-full text-[14px] outline-none text-white placeholder-gray-500 font-medium" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-0.5 border-gray-600 rounded-sm bg-black text-[#5D00D6] focus:ring-[#5D00D6] cursor-pointer shrink-0" />
                    <span className="text-[12px] text-[#A0AABB] leading-[1.7]">I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy.</span>
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
    <div className={`overflow-hidden border border-transparent transition-all duration-300 rounded-[24px] ${isOpen ? 'bg-white shadow-lg shadow-gray-200/50 border-gray-100' : 'bg-white/50 hover:bg-white border-transparent'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-7 text-left group"
      >
        <span className="text-[18px] font-bold text-[#0c1024] pr-8">{question}</span>
        <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#0c1024] text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}>
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
              <p className="text-gray-500 leading-relaxed text-[16px] font-medium">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
