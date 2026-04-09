import * as React from 'react';
import { 
  Wifi, Phone, Network, Globe, Smartphone, Truck, Server, 
  Headphones, Database, Shield, LayoutGrid, Monitor, 
  UserPlus, Cloud, HardDrive, Cpu, ShieldCheck, 
  Infinity as InfinityIcon, BarChart3, Building2, 
  Volume2, GraduationCap, ShieldAlert, Layers,
  Users, Star, Layout, MessageSquare, Calendar, Briefcase,
  Zap, Building, Lock, Activity, Link2,
  Rocket, Hammer, Lightbulb, TrendingUp, Factory, Stethoscope, Wallet, Gavel, HeartHandshake, MousePointer2,
  Laptop
} from 'lucide-react';

/* ─────────────────────────────────────────────
   1. STARTUP / NEW BUSINESS TRACK
   ───────────────────────────────────────────── */

export const STARTUP_TELCO_MENU = {
  layout: 'telco',
  columns: [
    {
      sections: [
        {
          heading: 'Fast Launch Internet',
          items: [
            { icon: <Wifi size={14} />, label: 'Standard Small Business nbn™', path: '/telco/business-nbn' },
            { icon: <Zap size={14} />, label: '5G Business Backup', path: '/telco/5g-internet' },
            { icon: <Wifi size={14} />, label: 'Quick-Setup Fixed Wireless', path: '/telco/fixed-wireless' },
          ]
        },
        {
          heading: 'Team Connectivity',
          items: [
            { icon: <Smartphone size={14} />, label: 'Startup Mobile Plans', path: '/telco/mobile-plans' },
            { icon: <Smartphone size={14} />, label: 'Device Procurement', path: '/telco/devices' },
          ]
        }
      ],
    },
    {
      sections: [
        {
          heading: 'Voice & Comms',
          items: [
            { icon: <Phone size={14} />, label: 'C9 Voice Cloud Phone', path: '/telco/c9-phone-system' },
            { icon: <Headphones size={14} />, label: '1300/1800 Numbers', path: '/telco/inbound-services' },
            { icon: <Phone size={14} />, label: 'Instant Virtual Numbers', path: '/telco/virtual-numbers' },
          ]
        }
      ],
    }
  ],
  sidebar: {
    heading: 'New Office Setup',
    items: [
      { icon: <Building2 className="text-purple-400" size={18} />, title: 'Startup Office Setup', desc: 'Seamlessly transition your business tech from day one.', path: '/enterprise/it' },
      { icon: <Wifi className="text-purple-400" size={18} />, title: 'Plug-and-Play WiFi', desc: 'Secure, fast connectivity that moves as fast as you do.', path: '/telco/business-nbn' }
    ]
  }
};

export const STARTUP_IT_MENU = {
  layout: 'it-solutions',
  columns: [
    {
      sections: [
        {
          heading: 'Core Support',
          items: [
            { icon: <Headphones size={14} />, label: 'On-Demand Helpdesk', path: '/managed-it/helpdesk' },
            { icon: <UserPlus size={14} />, label: 'End-User Support', path: '/managed-it/desktop' },
          ]
        },
        {
          heading: 'Workplace Ready',
          items: [
            { icon: <LayoutGrid size={14} />, label: 'M365 Setup', path: '/solutions/m365' },
            { icon: <Cloud size={14} />, label: 'Cloud Storage Setup', path: '/solutions/cloud' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Essential Security',
          items: [
            { icon: <Shield size={14} />, label: 'Antivirus & Firewall', path: '/managed-it/security' },
            { icon: <ShieldCheck size={14} />, label: 'SaaS Backup', path: '/managed-it/backup' },
          ]
        }
      ]
    }
  ],
  sidebar: {
    heading: 'Founder Resources',
    items: [
      { label: 'Security Checklist', path: '/resources/security-checklist' },
      { label: 'Remote Work Guide', path: '/resources/remote-work' }
    ]
  }
};

/* ─────────────────────────────────────────────
   2. EXISTING BUSINESS TRACK (SME)
   ───────────────────────────────────────────── */

export const BUSINESS_TELCO_MENU = {
  layout: 'telco',
  columns: [
    {
      sections: [
        {
          heading: 'High-Performance Internet',
          items: [
            { icon: <Wifi size={14} />, label: 'Small Business nbn™ High-Speed', path: '/telco/business-nbn' },
            { icon: <Network size={14} />, label: 'Fast Office Fibre', path: '/telco/fast-fibre' },
            { icon: <Activity size={14} />, label: 'Network Redundancy', path: '/telco/redundancy' },
          ]
        },
        {
          heading: 'Fleet Management',
          items: [
            { icon: <Smartphone size={14} />, label: 'Business Mobile Fleet', path: '/telco/mobile-plans' },
            { icon: <Truck size={14} />, label: 'Asset Tracking (IoT)', path: '/telco/iot' },
          ]
        }
      ],
    },
    {
      sections: [
        {
          heading: 'Unified Comms',
          items: [
            { icon: <Phone size={14} />, label: 'Teams Calling (Direct Routing)', path: '/telco/teams-calling' },
            { icon: <Phone size={14} />, label: 'Managed Cloud PBX', path: '/telco/c9-phone-system' },
            { icon: <Headphones size={14} />, label: 'Inbound Services (1300/1800)', path: '/telco/inbound-services' },
            { icon: <Phone size={14} />, label: 'Advanced Call Routing', path: '/telco/routing' },
          ]
        }
      ],
    }
  ],
  sidebar: {
    heading: 'Business Growth',
    items: [
      { icon: <Activity className="text-purple-400" size={18} />, title: 'Optimization Audit', desc: "Let's review your existing tech and find efficiencies.", path: '/managed-it/consulting' },
      { icon: <Volume2 className="text-purple-400" size={18} />, title: 'Ad On-Hold Systems', desc: 'Elevate your brand with professional voice messaging.', path: '/telco/inbound-services' }
    ]
  }
};

export const BUSINESS_IT_MENU = {
  layout: 'it-solutions',
  columns: [
    {
      sections: [
        {
          heading: 'Managed IT',
          items: [
            { icon: <Headphones size={14} />, label: '24/7 Managed Helpdesk', path: '/managed-it/helpdesk' },
            { icon: <Globe size={14} />, label: 'IT Strategy & Consulting', path: '/managed-it/consulting' },
            { icon: <UserPlus size={14} />, label: 'Managed IT Outsourcing', path: '/managed-it/outsourcing' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Business Resilience',
          items: [
            { icon: <Shield size={14} />, label: 'Cybersecurity Solutions', path: '/managed-it/security' },
            { icon: <Database size={14} />, label: 'Backup & Disaster Recovery', path: '/managed-it/backup' },
            { icon: <Cloud size={14} />, label: 'Cloud Migration Services', path: '/managed-it/cloud' },
          ]
        }
      ]
    }
  ],
  sidebar: {
    heading: 'Industry Solutions',
    items: [
      { label: 'Aged Care & Healthcare', path: '/industries/healthcare' },
      { label: 'Real Estate & Property', path: '/industries/real-estate' },
      { label: 'Retail & Hospitality', path: '/industries/retail' }
    ]
  }
};

/* ─────────────────────────────────────────────
   3. ENTERPRISE TRACK (Large Org / Corp)
   ───────────────────────────────────────────── */

export const ENTERPRISE_TELCO_MENU = {
  layout: 'telco',
  columns: [
    {
      sections: [
        {
          heading: 'Dedicated Connectivity',
          items: [
            { icon: <Network size={14} />, label: 'nbn™ Enterprise Ethernet (99.95% SLA)', path: '/enterprise/ethernet' },
            { icon: <Activity size={14} />, label: 'Fiber-to-the-Premise (FTTP) High SLA', path: '/enterprise/fttp' },
            { icon: <Database size={14} />, label: 'Dark Fiber & Private Networking', path: '/enterprise/dark-fiber' },
            { icon: <Globe size={14} />, label: 'Global SD-WAN Solutions', path: '/enterprise/sd-wan' },
          ]
        }
      ],
    },
    {
      sections: [
        {
          heading: 'Enterprise Comms',
          items: [
            { icon: <Headphones size={14} />, label: 'C9 phone system Omni-Channel Contact Center', path: '/enterprise/contact-center' },
            { icon: <Network size={14} />, label: 'SIP Trunking (Cisco/Avaya/Microsoft)', path: '/enterprise/sip' },
            { icon: <Cpu size={14} />, label: 'AI Voice & Automation', path: '/enterprise/voice-ai' },
            { icon: <Smartphone size={14} />, label: 'Enterprise Mobility Management', path: '/enterprise/mobility' },
          ]
        }
      ],
    }
  ],
  sidebar: {
    heading: 'Enterprise Compliance',
    items: [
      { icon: <ShieldCheck className="text-purple-400" size={18} />, title: 'Mission Critical 24/7', desc: 'Redundant infrastructure with guaranteed response times.', path: '/managed-it/security' },
      { icon: <Activity className="text-purple-400" size={18} />, title: 'High-Scale Performance', desc: 'Connectivity designed for 10Gbps+ environments.', path: '/enterprise/ethernet' }
    ]
  }
};

export const SOLUTIONS_MENU = {
  layout: 'solutions',
  heading: 'Outcome-Driven IT Solutions',
  columns: [
    {
      sections: [
        {
          heading: 'Managed IT Service',
          items: [
            { icon: <Headphones size={14} />, label: 'Helpdesk Support', path: '/managed-it/helpdesk' },
            { icon: <Users size={14} />, label: 'Outsourcing', path: '/managed-it/outsourcing' },
            { icon: <Globe size={14} />, label: 'Strategy & Consulting', path: '/managed-it/consulting' },
          ]
        },
        {
          heading: 'Cybersecurity',
          items: [
            { icon: <Shield size={14} />, label: 'Security Solutions', path: '/managed-it/security' },
            { icon: <Database size={14} />, label: 'Backup & Disaster Recovery', path: '/managed-it/backup' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Infrastructure',
          items: [
            { icon: <Server size={14} />, label: 'IT Infrastructure Services', path: '/enterprise/it' },
            { icon: <Network size={14} />, label: 'Network Solutions', path: '/managed-it/network' },
            { icon: <Cloud size={14} />, label: 'Cloud Services', path: '/solutions/cloud' },
            { icon: <Layers size={14} />, label: 'Software Solutions', path: '/solutions/software' },
          ]
        }
      ]
    }
  ],
  challenges: [
    { title: 'Digital Transformation', icon: <Cpu size={24} /> },
    { title: 'Security', icon: <ShieldCheck size={24} /> },
    { title: 'Business Continuity', icon: <Activity size={24} /> },
    { title: 'Growth', icon: <TrendingUp size={24} /> },
  ],
  sidebar: {
    heading: 'Industry Focus',
    items: [
      { icon: <Factory size={18} />, label: 'Manufacturing', path: '/industries/manufacturing' },
      { icon: <Truck size={18} />, label: 'Transportation & Logistics', path: '/industries/logistics' },
      { icon: <Stethoscope size={18} />, label: 'Healthcare', path: '/industries/healthcare' },
      { icon: <Wallet size={18} />, label: 'Banks & Insurance', path: '/industries/finance' },
      { icon: <Briefcase size={18} />, label: 'Consulting Providers', path: '/industries/professional-services' },
      { icon: <HeartHandshake size={18} />, label: 'Non Profit', path: '/industries/non-profit' },
    ]
  }
};

export const PRODUCTS_MENU = {
  layout: 'products',
  heading: 'Premium Products',
  columns: [
    {
      sections: [
        {
          heading: 'Internet',
          items: [
            { icon: <Wifi size={14} />, label: 'Business nbn™', path: '/telco/business-nbn' },
            { icon: <Zap size={14} />, label: 'Fast Fibre', path: '/telco/fast-fibre' },
            { icon: <Network size={14} />, label: 'nbn™ Enterprise Ethernet', path: '/enterprise/ethernet' },
          ]
        },
        {
          heading: 'Mobile',
          items: [
            { icon: <Smartphone size={14} />, label: 'Mobile Plans', path: '/telco/mobile-plans' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Voice',
          items: [
            { icon: <Phone size={14} />, label: 'C9 phone system', path: '/telco/c9-phone-system' },
            { icon: <Headphones size={14} />, label: 'Inbound Services', path: '/telco/inbound-services' },
            { icon: <MessageSquare size={14} />, label: 'Microsoft Teams Calling', path: '/telco/teams-calling' },
            { icon: <Link2 size={14} />, label: 'SIP Trunking', path: '/enterprise/sip' },
            { icon: <InfinityIcon size={14} />, label: 'Unified Communications', path: '/telco/voice' },
            { icon: <Users size={14} />, label: 'Contact Centre', path: '/enterprise/contact-center' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Services',
          items: [
            { icon: <Zap size={14} />, label: 'Productivity', path: '/solutions/productivity' },
            { icon: <MessageSquare size={14} />, label: 'Communication Tools', path: '/solutions/comms' },
            { icon: <Laptop size={14} />, label: 'Secure Remote Work', path: '/solutions/remote-work' },
            { icon: <Shield size={14} />, label: 'Compliance & Data Protection', path: '/solutions/compliance' },
            { icon: <Users size={14} />, label: 'Collaboration', path: '/solutions/collaboration' },
            { icon: <Monitor size={14} />, label: 'Device & Endpoint Management', path: '/solutions/endpoints' },
          ]
        },
        {
          heading: 'Other',
          items: [
            { icon: <LayoutGrid size={14} />, label: 'CCTV Camera & People Count', path: '/solutions/cctv' },
            { icon: <Monitor size={14} />, label: 'Managed Print Solution', path: '/solutions/print' },
            { icon: <Users size={14} />, label: 'Visitor Solution', path: '/solutions/visitor' },
          ]
        }
      ]
    }
  ],
  hardware: [
    { title: 'Handsets', img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=200', path: '/telco/hardware' },
    { title: 'Headsets', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200', path: '/telco/hardware' },
    { title: 'Routers & Switches', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=200', path: '/telco/hardware' },
    { title: 'Access Points', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=200', path: '/telco/hardware' },
  ],
  sidebar: {
    heading: 'I Need Help With',
    items: [
      { icon: <Building2 className="text-purple-400" size={18} />, title: 'Setting Up My New Office or Relocation', desc: 'C9 Communications can take the headache out of it for you.', path: '/challenges?tab=office' },
      { icon: <Zap className="text-purple-400" size={18} />, title: 'Fast & Secure Internet For My Business', desc: 'We have got super-fast, epically reliable broadband solutions.', path: '/challenges?tab=internet' },
      { icon: <Volume2 className="text-purple-400" size={18} />, title: 'Setting Up Ad On-hold', desc: 'Take your customer experience to the next level with professional messaging.', path: '/challenges?tab=ad-on-hold' },
      { icon: <Wifi className="text-purple-400" size={18} />, title: 'Improving & Securing My WiFi', desc: 'We tailor network solutions from design to migration and beyond.', path: '/challenges?tab=wifi' },
    ]
  }
};

export const INDUSTRIES_MENU = {
  layout: 'industries',
  heading: 'Industry Solutions',
  columns: [
    {
      sections: [
        {
          heading: 'Core Sectors',
          items: [
            { icon: <Factory size={14} />, label: 'Manufacturing', path: '/industries/manufacturing' },
            { icon: <Truck size={14} />, label: 'Transportation & Logistics', path: '/industries/logistics' },
            { icon: <Stethoscope size={14} />, label: 'Healthcare', path: '/industries/healthcare' },
            { icon: <Wallet size={14} />, label: 'Banks & Insurance', path: '/industries/finance' },
            { icon: <Briefcase size={14} />, label: 'Consulting Providers', path: '/industries/professional-services' },
            { icon: <HeartHandshake size={14} />, label: 'Non Profit', path: '/industries/non-profit' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Specialised Focus',
          items: [
            { icon: <Building2 size={14} />, label: 'Real Estate & Property', path: '/industries/real-estate' },
            { icon: <GraduationCap size={14} />, label: 'Education & Training', path: '/industries/education' },
            { icon: <Building size={14} />, label: 'Government & Public Sector', path: '/industries/gov' },
            { icon: <Star size={14} />, label: 'Retail & Hospitality', path: '/industries/retail' },
          ]
        }
      ]
    }
  ],
  modernization: [
    { title: 'Microsoft 365 Solutions', icon: <Layout size={24} /> },
    { title: 'Security Awareness Training', icon: <ShieldAlert size={24} /> },
    { title: 'SaaS Backup', icon: <Database size={24} /> },
    { title: 'Endpoint Detection & Response (EDR)', icon: <ShieldCheck size={24} /> },
  ],
  sidebar: {
    heading: 'Build a Smart Workplace',
    title: 'Transform your workplace with Smart Board Solution',
    button: 'View all solutions',
    path: '/managed-it/modern-workplace'
  }
};

/* ─────────────────────────────────────────────
   MAPPING & EXPORTS
   ───────────────────────────────────────────── */

export const AUDIENCE_INFO: Record<string, { phone: string; label: string }> = {
  startup: { phone: '1800 000 299', label: 'Startups' },
  business: { phone: '1800 000 299', label: 'Business' },
  enterprise: { phone: '1300 480 905', label: 'Enterprise & Gov' }
};

export const getMegaMap = (audience: string) => {
  return {
    'products': PRODUCTS_MENU,
    'solutions': SOLUTIONS_MENU,
    'industries': INDUSTRIES_MENU,
    'company': { layout: 'company', heading: 'The C9 Standard.', columns: [], sidebar: { heading: '', items: [] } },
  };
};

export const getTabs = (audience: string) => {
  return [
    { name: 'By Product', menuKey: 'products', path: '/solutions' },
    { name: 'By Solutions', menuKey: 'solutions', path: '/managed-it' },
    { name: 'By Industries', menuKey: 'industries', path: '/industries' },
    { name: 'Company', menuKey: 'company', path: '/about' },
  ];
};
