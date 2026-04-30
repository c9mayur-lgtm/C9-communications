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
            { icon: <Zap size={14} />, label: '5G Business Backup', path: '/telco/business-nbn' },
            { icon: <Wifi size={14} />, label: 'Quick-Setup Fixed Wireless', path: '/telco/business-nbn' },
          ]
        },
        {
          heading: 'Team Connectivity',
          items: [
            { icon: <Smartphone size={14} />, label: 'Startup Mobile Plans', path: '/telco/mobile-plans' },
            { icon: <Smartphone size={14} />, label: 'Device Procurement', path: '/telco/mobile-plans' },
          ]
        }
      ],
    },
    {
      sections: [
        {
          heading: 'Voice & Comms',
          items: [
            { icon: <Phone size={14} />, label: 'C9 Voice Cloud Phone', path: '/telco/phone-system' },
            { icon: <Headphones size={14} />, label: '1300/1800 Numbers', path: '/telco/inbound-services' },
            { icon: <Phone size={14} />, label: 'Instant Virtual Numbers', path: '/telco/inbound-services' },
          ]
        }
      ],
    }
  ],
  sidebar: {
    heading: 'New Office Setup',
    items: [
      { icon: <Building2 className="text-purple-400" size={18} />, title: 'Startup Office Setup', desc: 'Seamlessly transition your business tech from day one.', path: '/managed-it/infrastructure' },
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
            { icon: <Headphones size={14} />, label: 'On-Demand Helpdesk', path: '/managed-it/helpdesk-support' },
            { icon: <UserPlus size={14} />, label: 'End-User Support', path: '/managed-it/helpdesk-support' },
          ]
        },
        {
          heading: 'Workplace Ready',
          items: [
            { icon: <LayoutGrid size={14} />, label: 'M365 Setup', path: '/modern-workplace/productivity' },
            { icon: <Cloud size={14} />, label: 'Cloud Storage Setup', path: '/managed-it/cloud-services' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Essential Security',
          items: [
            { icon: <Shield size={14} />, label: 'Antivirus & Firewall', path: 'https://c9defense.com.au/' },
            { icon: <ShieldCheck size={14} />, label: 'SaaS Backup', path: 'https://c9defense.com.au/' },
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
            { icon: <Activity size={14} />, label: 'Network Redundancy', path: '/telco/business-nbn' },
          ]
        },
        {
          heading: 'Fleet Management',
          items: [
            { icon: <Smartphone size={14} />, label: 'Business Mobile Fleet', path: '/telco/mobile-plans' },
            { icon: <Truck size={14} />, label: 'Asset Tracking (IoT)', path: '/telco/mobile-plans' },
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
            { icon: <Phone size={14} />, label: 'Managed Cloud PBX', path: '/telco/phone-system' },
            { icon: <Headphones size={14} />, label: 'Inbound Services (1300/1800)', path: '/telco/inbound-services' },
            { icon: <Phone size={14} />, label: 'Advanced Call Routing', path: '/telco/phone-system' },
          ]
        }
      ],
    }
  ],
  sidebar: {
    heading: 'Business Growth',
    items: [
      { icon: <Activity className="text-purple-400" size={18} />, title: 'Optimization Audit', desc: "Let's review your existing tech and find efficiencies.", path: '/managed-it/strategy-consulting' },
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
            { icon: <Headphones size={14} />, label: '24/7 Managed Helpdesk', path: '/managed-it/helpdesk-support' },
            { icon: <Globe size={14} />, label: 'IT Strategy & Consulting', path: '/managed-it/strategy-consulting' },
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
            { icon: <Shield size={14} />, label: 'Cybersecurity Solutions', path: 'https://c9defense.com.au/' },
            { icon: <Database size={14} />, label: 'Backup & Disaster Recovery', path: 'https://c9defense.com.au/' },
            { icon: <Cloud size={14} />, label: 'Cloud Migration Services', path: '/managed-it/cloud-services' },
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
            { icon: <Network size={14} />, label: 'nbn™ Enterprise Ethernet (99.95% SLA)', path: '/telco/enterprise-ethernet' },
            { icon: <Activity size={14} />, label: 'Fiber-to-the-Premise (FTTP) High SLA', path: '/telco/fast-fibre' },
            { icon: <Database size={14} />, label: 'Dark Fiber & Private Networking', path: '/telco/fast-fibre' },
            { icon: <Globe size={14} />, label: 'Global SD-WAN Solutions', path: '/telco/enterprise-ethernet' },
          ]
        }
      ],
    },
    {
      sections: [
        {
          heading: 'Enterprise Comms',
          items: [
            { icon: <Headphones size={14} />, label: 'C9 Phone System Omni-Channel Contact Center', path: '/telco/contact-centre' },
            { icon: <Network size={14} />, label: 'SIP Trunking (Cisco/Avaya/Microsoft)', path: '/telco/sip-trunking' },
            { icon: <Cpu size={14} />, label: 'AI Voice & Automation', path: '/telco/phone-system' },
            { icon: <Smartphone size={14} />, label: 'Enterprise Mobility Management', path: '/telco/mobile-plans' },
          ]
        }
      ],
    }
  ],
  sidebar: {
    heading: 'Enterprise Compliance',
    items: [
      { icon: <ShieldCheck className="text-purple-400" size={18} />, title: 'Mission Critical 24/7', desc: 'Redundant infrastructure with guaranteed response times.', path: '/managed-it/security' },
      { icon: <Activity className="text-purple-400" size={18} />, title: 'High-Scale Performance', desc: 'Connectivity designed for 10Gbps+ environments.', path: '/telco/enterprise-ethernet' }
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
            { icon: <Headphones size={14} />, label: 'Helpdesk Support', path: '/managed-it/helpdesk-support', desc: 'Australian-based 24/7 technical support for your entire team.' },
            { icon: <Users size={14} />, label: 'Outsourcing', path: '/managed-it/outsourcing', desc: 'Strategic IT staffing and expertise to augment your internal capability.' },
            { icon: <Globe size={14} />, label: 'Strategy & Consulting', path: '/managed-it/strategy-consulting', desc: 'Expert IT roadmaps aligned with your business growth and budget.' },
          ]
        },
        {
          heading: 'Cybersecurity',
          items: [
            { icon: <Shield size={14} />, label: 'Security Solutions', path: 'https://c9defense.com.au/', desc: 'Multi-layer defense against sophisticated ransomware and phishing.' },
            { icon: <Database size={14} />, label: 'Backup & Disaster Recovery', path: 'https://c9defense.com.au/', desc: 'Guaranteed business continuity with automated cloud-based backups.' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Infrastructure',
          items: [
            { icon: <Server size={14} />, label: 'IT Infrastructure Services', path: '/managed-it/infrastructure', desc: 'Secure, high-availability server and compute environments.' },
            { icon: <Network size={14} />, label: 'Network Solutions', path: '/managed-it/network-solutions', desc: 'Robust SD-WAN and LAN architectures for multi-site companies.' },
            { icon: <Cloud size={14} />, label: 'Cloud Services', path: '/managed-it/cloud-services', desc: 'Seamless migration and management for Azure and AWS cloud stacks.' },
            { icon: <Layers size={14} />, label: 'Software Solutions', path: '/managed-it/cloud-services', desc: 'Tailored software licensing and custom integration services.' },
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
            { icon: <Wifi size={14} />, label: 'Business nbn™', path: '/telco/business-nbn', desc: 'Enterprise-grade speed and reliability for your main office.' },
            { icon: <Zap size={14} />, label: 'Fast Fibre', path: '/telco/fast-fibre', desc: 'Ultra-low latency connectivity for high-performance teams.' },
            { icon: <Network size={14} />, label: 'nbn™ Enterprise Ethernet', path: '/telco/enterprise-ethernet', desc: 'Dedicated 1:1 bandwidth with a premium 99.95% uptime SLA.' },
          ]
        },
        {
          heading: 'Mobile',
          items: [
            { icon: <Smartphone size={14} />, label: 'Mobile Plans', path: '/telco/mobile-plans', desc: 'Scalable fleet plans with data sharing across all your devices.' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Voice',
          items: [
            { icon: <Phone size={14} />, label: 'C9 Phone System', path: '/telco/phone-system', desc: 'Our flagship cloud voice solution with 100+ Enterprise features.' },
            { icon: <Headphones size={14} />, label: 'Inbound Services', path: '/telco/inbound-services', desc: '1300, 1800, and local numbers for professional presence.' },
            { icon: <MessageSquare size={14} />, label: 'Microsoft Teams Calling', path: '/telco/teams-calling', desc: 'Direct routing to make and receive calls inside Microsoft Teams.' },
            { icon: <Link2 size={14} />, label: 'SIP Trunking', path: '/telco/sip-trunking', desc: 'Connect your legacy PBX to our high-grade voice network.' },
            { icon: <InfinityIcon size={14} />, label: 'Unified Communications', path: '/telco/phone-system', desc: 'Sync phone, chat, and video across all your office hardware.' },
            { icon: <Users size={14} />, label: 'Contact Centre', path: '/telco/contact-centre', desc: 'Cloud-based omni-channel support for high-volume teams.' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Services',
          items: [
            { icon: <Zap size={14} />, label: 'Productivity', path: '/modern-workplace/productivity', desc: 'Streamline workflows with integrated business productivity tools.' },
            { icon: <MessageSquare size={14} />, label: 'Communication Tools', path: '/modern-workplace/communication-tools', desc: 'Secure internal messaging and collaboration for modern teams.' },
            { icon: <Laptop size={14} />, label: 'Secure Remote Work', path: '/modern-workplace/endpoint-management', desc: 'VPN and cloud access solutions for a distributed workforce.' },
            { icon: <Shield size={14} />, label: 'Compliance & Data Protection', path: '/modern-workplace/endpoint-management', desc: 'Regulatory-grade security and backup for sensitive sectors.' },
            { icon: <Users size={14} />, label: 'Collaboration', path: '/modern-workplace/collaboration', desc: 'Joint workspaces and digital boardrooms for better teamwork.' },
            { icon: <Monitor size={14} />, label: 'Device & Endpoint Management', path: '/modern-workplace/endpoint-management', desc: 'Manage your entire hardware fleet from a single dashboard.' },
          ]
        },
        {
          heading: 'Other',
          items: [
            { icon: <LayoutGrid size={14} />, label: 'CCTV Camera & People Count', path: '/modern-workplace/cctv-people-count', desc: 'Smart AI-driven surveillance and occupancy monitoring.' },
            { icon: <Monitor size={14} />, label: 'Managed Print Solution', path: '/modern-workplace/productivity', desc: 'Simplified, cost-efficient printing across all your sites.' },
            { icon: <Users size={14} />, label: 'Visitor Solution', path: '/modern-workplace/productivity', desc: 'Modern contactless visitor check-in and safety tracking.' },
          ]
        }
      ]
    }
  ],
  hardware: [
    { title: 'Handsets', img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=200', path: '/telco' },
    { title: 'Headsets', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200', path: '/telco' },
    { title: 'Routers & Switches', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=200', path: '/telco' },
    { title: 'Access Points', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=200', path: '/telco' },
  ],
  sidebar: {
    heading: 'I Need Help With',
    items: [
      { icon: <Building2 className="text-purple-400" size={18} />, title: 'Setting Up My New Office or Relocation', desc: 'C9 Communications can take the headache out of it for you.', path: '/help/new-office-setup' },
      { icon: <Zap className="text-purple-400" size={18} />, title: 'Fast & Secure Internet For My Business', desc: 'We have got super-fast, epically reliable broadband solutions.', path: '/help/fast-secure-internet' },
      { icon: <Volume2 className="text-purple-400" size={18} />, title: 'Setting Up Ad On-hold', desc: 'Take your customer experience to the next level with professional messaging.', path: '/help/ad-on-hold' },
      { icon: <Wifi className="text-purple-400" size={18} />, title: 'Improving & Securing My WiFi', desc: 'We tailor network solutions from design to migration and beyond.', path: '/help/secure-wifi' },
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
