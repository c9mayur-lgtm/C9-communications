import * as React from 'react';
import { 
  Wifi, Phone, Network, Globe, Smartphone, Truck, Server, 
  Headphones, Database, Shield, LayoutGrid, Monitor, 
  UserPlus, Cloud, HardDrive, Cpu, ShieldCheck, 
  Infinity as InfinityIcon, BarChart3, Building2, 
  Volume2, GraduationCap, ShieldAlert, Layers,
  Users, Star, Layout, MessageSquare, Calendar, Briefcase,
  Printer, Video, Lock, Zap, RefreshCcw
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────
//  SHARED CONTENT (unchanged)
// ─────────────────────────────────────────────────────────────
export const TELCO_SERVICES_CONTENT: Record<string, any> = {
  internet: {
    heading: 'Business Internet',
    description: "C9 delivers business-grade nbn® and fibre connectivity designed around uptime, not price. Every connection is backed by a 99.95% SLA, local engineering support, and proactive monitoring — so your team stays online without chasing your provider.",
    options: [
      { title: 'Small Business nbn™®', desc: 'Reliable nbn® plans built for Australian businesses, with dedicated local support and no shared residential traffic.', icon: <Wifi size={20} /> },
      { title: 'nbn® Enterprise Ethernet', desc: 'Symmetrical speeds and priority-grade connectivity for offices that cannot afford to wait on uploads.', icon: <Network size={20} /> },
      { title: 'C9 Fibre', desc: 'Direct fibre to your premises — up to 10,000 Mbps with a 99.95% uptime guarantee and 24/7 C9 engineering support.', icon: <Monitor size={20} /> }
    ]
  },
  network: {
    heading: 'Business Networking',
    description: "C9 designs, deploys, and manages the network infrastructure that keeps your business running.",
    options: [
      { title: 'SD-WAN', desc: 'Intelligent traffic management across multiple sites — lower costs, better performance, single pane of glass visibility.', icon: <Network size={20} /> },
      { title: 'Private IP / MPLS', desc: 'Dedicated private networking for businesses that need secure, low-latency links between locations.', icon: <Globe size={20} /> },
      { title: 'Network Security', desc: 'C9-managed firewall, threat detection, and network segmentation.', icon: <Shield size={20} /> }
    ]
  },
  mobile: {
    heading: 'Business Mobile',
    description: "C9 manages your mobile fleet end-to-end — from SIM provisioning and plan management to device procurement and a single consolidated bill.",
    options: [
      { title: 'Business SIM Plans', desc: "High-data SIM plans on Australia's leading networks, managed through your C9 account.", icon: <Smartphone size={20} /> },
      { title: 'Mobile Fleet Management', desc: 'Centralised visibility and control over every device and SIM in your business.', icon: <Truck size={20} /> },
      { title: 'Device Procurement', desc: 'Source and deploy the latest business devices through C9 — fully configured from day one.', icon: <Server size={20} /> }
    ]
  },
  voice_ai: {
    heading: 'C9 Voice AI',
    description: "C9's Voice AI transforms how your business handles inbound calls.",
    options: [
      { title: 'AI Receptionist', desc: 'An always-on virtual receptionist that answers, qualifies, and routes calls 24/7.', icon: <UserPlus size={20} /> },
      { title: 'Intelligent IVR', desc: 'Replace outdated press-1 menus with AI that understands intent and routes callers faster.', icon: <Layers size={20} /> },
      { title: 'Call Analytics', desc: 'Real-time insights into call volumes, sentiment, and resolution rates.', icon: <BarChart3 size={20} /> }
    ]
  },
  voice: {
    heading: 'Business Voice',
    description: "C9 replaces legacy phone infrastructure with a fully managed, Microsoft Teams-integrated voice platform.",
    options: [
      { title: 'Inbound Services', desc: 'Secure 13, 1300, and 1800 numbers with advanced call routing and intelligent analytics.', icon: <Headphones size={20} />, path: '/telco/inbound-services' },
      { title: 'Microsoft Teams Calling', desc: 'Make and receive business calls directly inside Teams — C9 handles all provisioning.', icon: <Phone size={20} />, path: '/telco/teams-calling' },
      { title: 'C9 Voice Cloud Phone System', desc: 'A fully managed cloud PBX with enterprise call features, auto-attendants, and call recording.', icon: <Phone size={20} />, path: '/telco/c9-phone-system' },
      { title: 'SIP Trunking', desc: 'Retain your existing phone hardware while connecting to the C9 voice network.', icon: <Database size={20} />, path: '/telco/sip-trunking' },
      { title: 'Contact Centre', desc: 'Omni Channel Contact Centre — voice, chat, social, and app interactions in one platform.', icon: <LayoutGrid size={20} />, path: '/telco/contact-centre' }
    ]
  }
};

// ─────────────────────────────────────────────────────────────
//  GREENFIELD AUDIENCE MENUS
//  Focus: Starting from scratch — internet, phones, devices,
//         security, and basic managed IT for a new site
// ─────────────────────────────────────────────────────────────
export const GREENFIELD_IT_SOLUTIONS = {
  layout: 'it-solutions',
  columns: [
    {
      sections: [
        {
          heading: 'Day-One IT Setup',
          items: [
            { icon: <Headphones size={14} />, label: 'IT Helpdesk Support', path: '/managed-it/helpdesk-support' },
            { icon: <UserPlus size={14} />,   label: 'IT Outsourcing',      path: '/managed-it/outsourcing' },
            { icon: <HardDrive size={14} />,  label: 'IT Infrastructure',   path: '/managed-it/infrastructure' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Security Essentials',
          items: [
            { icon: <Shield size={14} />,   label: 'Security Solutions',        path: '/managed-it/security-solutions' },
            { icon: <Database size={14} />, label: 'Backup & Disaster Recovery', path: '/managed-it/backup-disaster-recovery' },
          ]
        },
        {
          heading: 'Cloud & Software',
          items: [
            { icon: <Cloud size={14} />,   label: 'Cloud Services',      path: '/managed-it/cloud-services' },
            { icon: <Network size={14} />, label: 'Network Solutions',   path: '/managed-it/network-solutions' },
          ]
        }
      ]
    }
  ],
  challenges: [
    { title: 'First IT Setup',      icon: <Zap size={24} />,          color: '#5D00D6' },
    { title: 'Security',            icon: <ShieldCheck size={24} />,  color: '#5D00D6' },
    { title: 'Business Continuity', icon: <InfinityIcon size={24} />, color: '#5D00D6' },
    { title: 'Growth Ready',        icon: <BarChart3 size={24} />,    color: '#5D00D6' },
  ],
  sidebar: {
    heading: 'Industries We Serve',
    items: [
      { label: 'Retail',                path: '/industries/retail' },
      { label: 'Healthcare',            path: '/industries/healthcare' },
      { label: 'Professional Services', path: '/industries/professional-services' },
      { label: 'Real Estate',           path: '/industries/real-estate' },
      { label: 'Hospitality',           path: '/industries/hospitality' },
      { label: 'Education',             path: '/industries/education' },
      { label: 'View all Industries →', path: '/industries' },
    ]
  },
  ctaBanner: {
    title: 'Start Right. Stay Strong.',
    body: 'From your first cable to your first hire — we set up everything so you can focus on building your business.',
    button: 'Plan My Setup'
  }
};

export const GREENFIELD_TELCO = {
  layout: 'telco',
  columns: [
    {
      sections: [
        {
          heading: 'Internet & Connectivity',
          items: [
            { icon: <Wifi size={14} />,    label: 'Small Business nbn™',   path: '/telco/business-nbn', active: true },
            { icon: <Zap size={14} />,     label: 'Fast Fibre',             path: '/telco/fast-fibre' },
            { icon: <Smartphone size={14} />, label: 'Business Mobile Plans', path: '/telco/mobile-plans' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Business Phone System',
          items: [
            { icon: <Phone size={14} />,      label: 'C9 Cloud Phone System',   path: '/telco/c9-phone-system' },
            { icon: <Headphones size={14} />, label: 'Inbound 1300 / 1800',     path: '/telco/inbound-services' },
            { icon: <Phone size={14} />,      label: 'Microsoft Teams Calling', path: '/telco/teams-calling' },
          ]
        }
      ],
      promo: {
        title: 'Get your phones live before Day One. Cloud VoIP from $19/user/month.',
        button: 'See Phone Plans'
      }
    }
  ],
  challenges: [
    { title: 'Fast Internet', icon: <Wifi size={24} /> },
    { title: 'Cloud Phones',  icon: <Phone size={24} /> },
    { title: 'Mobile Fleet',  icon: <Smartphone size={24} /> },
    { title: 'WiFi Design',   icon: <Network size={24} /> },
  ],
  sidebar: {
    heading: 'Setting Up Your Office?',
    items: [
      { icon: <Building2 className="text-purple-400" size={18} />, title: 'New Office or Relocation Setup', desc: 'C9 maps, delivers, and manages your entire tech stack before you open.' },
      { icon: <Wifi className="text-purple-400" size={18} />, title: 'Fast Business Internet', desc: "Business-grade nbn™ and fibre connections built for uptime, not price." },
      { icon: <Phone className="text-purple-400" size={18} />, title: 'Cloud Phone System', desc: 'Professional phone system up and running before Day One — no hardware required.' },
    ]
  }
};

export const GREENFIELD_MODERN_WORKPLACE = {
  layout: 'modern-workplace',
  columns: [
    {
      sections: [
        {
          heading: 'Devices & Hardware',
          items: [
            { icon: <Monitor size={14} />,   label: 'Monitors & Workstations',      path: '#' },
            { icon: <Printer size={14} />,   label: 'Managed Print Solutions',       path: '#' },
            { icon: <Smartphone size={14} />, label: 'Device & Endpoint Management', path: '#' },
          ]
        },
        {
          heading: 'Physical Security',
          items: [
            { icon: <Video size={14} />,  label: 'CCTV & People Count', path: '/modern-workplace/cctv-people-count' },
            { icon: <Lock size={14} />,   label: 'Access Control',          path: '#' },
            { icon: <UserPlus size={14} />, label: 'Visitor Management',    path: '#' },
          ]
        }
      ]
    }
  ],
  modernization: [
    { title: 'Microsoft 365 Setup',        icon: <LayoutGrid size={24} /> },
    { title: 'Team Onboarding',            icon: <Users size={24} /> },
    { title: 'Endpoint Protection',        icon: <ShieldAlert size={24} /> },
    { title: 'Smart Meeting Rooms',        icon: <Monitor size={24} /> },
  ],
  sidebar: {
    heading: 'Build Your Workplace',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400',
    title: 'Devices, security, and workplace tools — all configured before your first team member arrives.',
    button: 'Plan My Workplace'
  }
};

// ─────────────────────────────────────────────────────────────
//  BUSINESS AUDIENCE MENUS
//  Focus: Existing businesses wanting to upgrade, optimize,
//         and consolidate their IT + Telco stack
// ─────────────────────────────────────────────────────────────
export const BUSINESS_IT_SOLUTIONS = {
  layout: 'it-solutions',
  columns: [
    {
      sections: [
        {
          heading: 'Managed IT Service',
          items: [
            { icon: <Headphones size={14} />, label: 'Helpdesk Support',     path: '/managed-it/helpdesk-support' },
            { icon: <UserPlus size={14} />,   label: 'IT Outsourcing',        path: '/managed-it/outsourcing' },
            { icon: <Globe size={14} />,      label: 'Strategy & Consulting', path: '/managed-it/strategy-consulting' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Infrastructure',
          items: [
            { icon: <Server size={14} />,    label: 'IT Infrastructure Services', path: '/managed-it/infrastructure' },
            { icon: <Network size={14} />,   label: 'Network Solutions',           path: '/managed-it/network-solutions' },
            { icon: <Cloud size={14} />,     label: 'Cloud Services',              path: '/managed-it/cloud-services' },
            { icon: <HardDrive size={14} />, label: 'Software Solutions',          path: '#' },
          ]
        },
        {
          heading: 'Cybersecurity',
          action: { label: 'C9 defense →', path: '/c9-defense' },
          items: [
            { icon: <Shield size={14} />,   label: 'Security Solutions',        path: '/managed-it/security-solutions' },
            { icon: <Database size={14} />, label: 'Backup & Disaster Recovery', path: '/managed-it/backup-disaster-recovery' },
          ]
        }
      ]
    }
  ],
  challenges: [
    { title: 'Digital Transformation', icon: <Cpu size={24} /> },
    { title: 'Security',               icon: <ShieldCheck size={24} /> },
    { title: 'Business Continuity',    icon: <InfinityIcon size={24} /> },
    { title: 'Growth',                 icon: <BarChart3 size={24} /> },
  ],
  sidebar: {
    heading: 'Industry Focus',
    items: [
      { label: 'Retail',                path: '/industries/retail' },
      { label: 'Healthcare',            path: '/industries/healthcare' },
      { label: 'Professional Services', path: '/industries/professional-services' },
      { label: 'Real Estate',           path: '/industries/real-estate' },
      { label: 'Hospitality',           path: '/industries/hospitality' },
      { label: 'Education',             path: '/industries/education' },
      { label: 'View all Industries →', path: '/industries' },
    ]
  },
  ctaBanner: {
    title: 'Smarter IT, Stronger Business',
    body: 'End-to-end IT services designed to secure, support, and scale your business.',
    button: 'Partner Up Now'
  }
};

export const BUSINESS_TELCO = {
  layout: 'telco',
  columns: [
    {
      sections: [
        {
          heading: 'Internet',
          items: [
            { icon: <Wifi size={14} />,    label: 'Small Business nbn™',      path: '/telco/business-nbn', active: true },
            { icon: <Wifi size={14} />,    label: 'Fast Fibre',                path: '/telco/fast-fibre' },
            { icon: <Network size={14} />, label: 'nbn™ Enterprise Ethernet',  path: '/telco/enterprise-ethernet' },
          ]
        },
        {
          heading: 'Mobile',
          items: [
            { icon: <Smartphone size={14} />, label: 'Mobile Plans', path: '/telco/mobile-plans' },
          ]
        }
      ],
    },
    {
      sections: [
        {
          heading: 'Voice',
          items: [
            { icon: <Phone size={14} />,      label: 'Voice Systems — Overview',    path: '/telco/voice-systems' },
            { icon: <Phone size={14} />,      label: 'C9 Voice Cloud Phone',        path: '/telco/c9-phone-system' },
            { icon: <Headphones size={14} />, label: 'Inbound Services',            path: '/telco/inbound-services' },
            { icon: <Phone size={14} />,      label: 'Microsoft Teams Calling',     path: '/telco/teams-calling' },
            { icon: <Network size={14} />,    label: 'SIP Trunking',                path: '/telco/sip-trunking' },
            { icon: <Headphones size={14} />, label: 'Contact Centre',              path: '/telco/contact-centre' },
          ]
        }
      ],
      promo: {
        title: 'Upgrade To The Latest Small Business Phone System Technology And Save Up To 70% Off Your Calls',
        button: 'Start Now'
      }
    }
  ],
  challenges: [
    { title: 'Cloud Communication', icon: <Phone size={24} /> },
    { title: 'Fast Connectivity',   icon: <Wifi size={24} /> },
    { title: 'Secure Networking',   icon: <Network size={24} /> },
    { title: 'Global Reach',        icon: <Globe size={24} /> },
  ],
  sidebar: {
    heading: 'I Need Help With',
    items: [
      { icon: <Building2 className="text-purple-400" size={18} />, title: 'Setting Up My New Office or Relocation', desc: 'C9 Communications can take the headache out of it for you so that you can focus on business as usual.' },
      { icon: <Wifi className="text-purple-400" size={18} />, title: 'Fast & Secure Internet For My Business', desc: "We've got super-fast, epically reliable broadband solutions for your business." },
      { icon: <Volume2 className="text-purple-400" size={18} />, title: 'Setting Up Ad On-hold', desc: 'Take your customer experience to the next level with professionally recorded messages.' },
      { icon: <Wifi className="text-purple-400" size={18} />, title: 'Improving & Securing My WiFi', desc: 'We tailor network solutions to you from the design stage through to migration and beyond.' }
    ]
  }
};

export const BUSINESS_MODERN_WORKPLACE = {
  layout: 'modern-workplace',
  columns: [
    {
      sections: [
        {
          heading: 'Services',
          items: [
            { icon: <LayoutGrid size={14} />, label: 'Productivity',               path: '/modern-workplace/productivity', active: true },
            { icon: <Monitor size={14} />,    label: 'Communication Tools',        path: '/modern-workplace/communication-tools' },
            { icon: <Shield size={14} />,     label: 'Secure Remote Work',         path: '#' },
            { icon: <Database size={14} />,   label: 'Compliance & Data',          path: '#' },
            { icon: <UserPlus size={14} />,   label: 'Collaboration',              path: '/modern-workplace/collaboration' },
            { icon: <Smartphone size={14} />, label: 'Device & Endpoint Mgmt',    path: '/modern-workplace/endpoint-management' },
          ]
        },
        {
          heading: 'Hardware & Physical',
          items: [
            { icon: <Video size={14} />,  label: 'CCTV & People Count',   path: '/modern-workplace/cctv-people-count' },
            { icon: <Printer size={14} />, label: 'Managed Print',         path: '#' },
            { icon: <UserPlus size={14} />, label: 'Visitor Management',   path: '#' },
          ]
        }
      ]
    }
  ],
  modernization: [
    { title: 'Microsoft 365 Solutions',           icon: <LayoutGrid size={24} /> },
    { title: 'Security Awareness Training',       icon: <GraduationCap size={24} /> },
    { title: 'SaaS Backup',                       icon: <Cloud size={24} /> },
    { title: 'Endpoint Detection & Response',     icon: <ShieldAlert size={24} /> },
  ],
  sidebar: {
    heading: 'Build a Smart Workplace',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400',
    title: 'Efficient Workplace Setup Designed for Progress',
    button: 'Book a Demo'
  }
};

// ─────────────────────────────────────────────────────────────
//  ENTERPRISE AUDIENCE MENUS
//  Focus: Multi-site, scalable, compliance-grade, full-stack
// ─────────────────────────────────────────────────────────────
export const ENTERPRISE_IT_SOLUTIONS = {
  layout: 'it-solutions',
  columns: [
    {
      sections: [
        {
          heading: 'Managed IT & Outsourcing',
          items: [
            { icon: <Headphones size={14} />, label: 'Enterprise Helpdesk',      path: '/managed-it/helpdesk-support' },
            { icon: <UserPlus size={14} />,   label: 'Full IT Outsourcing',       path: '/managed-it/outsourcing' },
            { icon: <Globe size={14} />,      label: 'vCIO & IT Strategy',        path: '/managed-it/strategy-consulting' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Enterprise Infrastructure',
          items: [
            { icon: <Server size={14} />,    label: 'IT Infrastructure Services', path: '/managed-it/infrastructure' },
            { icon: <Network size={14} />,   label: 'Network & SD-WAN',           path: '/managed-it/network-solutions' },
            { icon: <Cloud size={14} />,     label: 'Hybrid & Private Cloud',     path: '/managed-it/cloud-services' },
          ]
        },
        {
          heading: 'Enterprise Security',
          action: { label: 'C9 defense →', path: '/c9-defense' },
          items: [
            { icon: <ShieldCheck size={14} />, label: 'Security & Compliance',     path: '/managed-it/security-solutions' },
            { icon: <Database size={14} />,    label: 'Backup & Disaster Recovery', path: '/managed-it/backup-disaster-recovery' },
            { icon: <ShieldAlert size={14} />, label: 'SIEM & Threat Intelligence', path: '#' },
          ]
        }
      ]
    }
  ],
  challenges: [
    { title: 'Scale & Governance',  icon: <Layers size={24} /> },
    { title: 'Compliance',          icon: <ShieldCheck size={24} /> },
    { title: 'Business Continuity', icon: <InfinityIcon size={24} /> },
    { title: 'Digital Transformation', icon: <Cpu size={24} /> },
  ],
  sidebar: {
    heading: 'Industries We Serve',
    items: [
      { label: 'Retail',                path: '/industries/retail' },
      { label: 'Healthcare',            path: '/industries/healthcare' },
      { label: 'Professional Services', path: '/industries/professional-services' },
      { label: 'Real Estate',           path: '/industries/real-estate' },
      { label: 'Hospitality',           path: '/industries/hospitality' },
      { label: 'Education',             path: '/industries/education' },
      { label: 'View all Industries →', path: '/industries' },
    ]
  },
  ctaBanner: {
    title: 'Enterprise-Grade, Australian-Managed',
    body: 'Complex environments demand a single accountable partner. That\'s C9.',
    button: 'Request Enterprise Brief'
  }
};

export const ENTERPRISE_TELCO = {
  layout: 'telco',
  columns: [
    {
      sections: [
        {
          heading: 'Enterprise Connectivity',
          items: [
            { icon: <Network size={14} />, label: 'Enterprise Ethernet',     path: '/telco/enterprise-ethernet' },
            { icon: <Wifi size={14} />,    label: 'Fast Fibre (Dark Fibre)', path: '/telco/fast-fibre' },
            { icon: <Globe size={14} />,   label: 'SD-WAN & Private IP',     path: '#' },
          ]
        },
        {
          heading: 'Mobile Fleet',
          items: [
            { icon: <Smartphone size={14} />, label: 'Enterprise Mobile Plans',    path: '/telco/mobile-plans' },
            { icon: <Truck size={14} />,       label: 'Mobile Fleet Management',    path: '#' },
          ]
        }
      ],
    },
    {
      sections: [
        {
          heading: 'Voice & Contact Centre',
          items: [
            { icon: <LayoutGrid size={14} />, label: 'Contact Centre (CCaaS)',  path: '/telco/contact-centre' },
            { icon: <Phone size={14} />,      label: 'C9 Voice Cloud Phone',    path: '/telco/c9-phone-system' },
            { icon: <Headphones size={14} />, label: 'Inbound 13/1300/1800',    path: '/telco/inbound-services' },
            { icon: <Phone size={14} />,      label: 'Microsoft Teams Calling', path: '/telco/teams-calling' },
            { icon: <Network size={14} />,    label: 'SIP Trunking (Bulk)',      path: '/telco/sip-trunking' },
            { icon: <Headphones size={14} />, label: 'Contact Centre',              path: '/telco/contact-centre' },
          ]
        }
      ],
      promo: {
        title: 'Unified communications at enterprise scale. One contract. One bill. One team.',
        button: 'Enterprise Brief'
      }
    }
  ],
  challenges: [
    { title: 'Multi-site WAN',       icon: <Network size={24} /> },
    { title: 'UC & Contact Centre',  icon: <Headphones size={24} /> },
    { title: 'Mobile Fleet',         icon: <Smartphone size={24} /> },
    { title: 'Uptime SLA',           icon: <InfinityIcon size={24} /> },
  ],
  sidebar: {
    heading: 'Enterprise Solutions',
    items: [
      { icon: <Building2 className="text-purple-400" size={18} />, title: 'Multi-site & National Rollouts', desc: 'Single-vendor delivery across all your Australian locations.' },
      { icon: <Network className="text-purple-400" size={18} />, title: 'SD-WAN & Private WAN', desc: 'Intelligent, resilient connectivity across your entire network.' },
      { icon: <RefreshCcw className="text-purple-400" size={18} />, title: 'Technology Refresh', desc: 'Migrate legacy infrastructure to modern cloud-managed platforms.' },
    ]
  }
};

export const ENTERPRISE_MODERN_WORKPLACE = {
  layout: 'modern-workplace',
  columns: [
    {
      sections: [
        {
          heading: 'Enterprise Workplace',
          items: [
            { icon: <LayoutGrid size={14} />, label: 'Microsoft 365 Enterprise',    path: '/modern-workplace/productivity' },
            { icon: <Monitor size={14} />,    label: 'Enterprise Device Management', path: '/modern-workplace/endpoint-management' },
            { icon: <Shield size={14} />,     label: 'Secure Remote Work',           path: '#' },
            { icon: <Database size={14} />,   label: 'Compliance & Data Governance', path: '#' },
            { icon: <UserPlus size={14} />,   label: 'Enterprise Collaboration',     path: '/modern-workplace/collaboration' },
          ]
        },
        {
          heading: 'Physical Security & Ops',
          items: [
            { icon: <Video size={14} />,   label: 'CCTV & People Count', path: '/modern-workplace/cctv-people-count' },
            { icon: <Lock size={14} />,    label: 'Access Control Systems',  path: '#' },
            { icon: <Printer size={14} />, label: 'Managed Print (Fleet)',    path: '#' },
          ]
        }
      ]
    }
  ],
  modernization: [
    { title: 'Microsoft 365 Enterprise',         icon: <LayoutGrid size={24} /> },
    { title: 'Zero Trust Security',              icon: <ShieldCheck size={24} /> },
    { title: 'Enterprise SaaS Backup',           icon: <Cloud size={24} /> },
    { title: 'EDR & XDR',                        icon: <ShieldAlert size={24} /> },
  ],
  sidebar: {
    heading: 'Enterprise Workplace',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400',
    title: 'Enterprise-grade workplace infrastructure designed for compliance, scale, and performance.',
    button: 'Enterprise Consultation'
  }
};

// ─────────────────────────────────────────────────────────────
//  SHARED: COMPANY & RESOURCES (same for all audiences)
// ─────────────────────────────────────────────────────────────
export const COMPANY_MENU = {
  layout: 'company',
  heading: 'Simplifying IT for a complex world.',
  columns: [
    {
      sections: [
        {
          heading: 'Our Company',
          items: [
            { icon: <Building2 size={14} />,   label: 'About Us',                  path: '/about' },
            { icon: <ShieldCheck size={14} />, label: 'Why C9',                    path: '/about/why-c9' },
            { icon: <Users size={14} />,       label: 'Our Team',                  path: '/about/team' },
            { icon: <Briefcase size={14} />,   label: 'Careers',                   path: '/about/careers' },
            { icon: <ShieldCheck size={14} />, label: 'Partners & Certifications', path: '/about/partners' },
            { icon: <Star size={14} />,        label: 'Reviews & Awards',          path: '/about/reviews' },
          ]
        }
      ]
    }
  ],
  challenges: [
    { title: 'Innovation',   icon: <Cpu size={24} /> },
    { title: 'Reliability',  icon: <Shield size={24} /> },
    { title: 'AU Support',   icon: <Globe size={24} /> },
    { title: 'Scalability',  icon: <Layers size={24} /> },
  ],
  sidebar: {
    heading: 'Platform Partnerships',
    items: [
      { icon: <Cloud size={14} />,    title: 'AWS Partner' },
      { icon: <Cloud size={14} />,    title: 'Google Cloud Partner' },
      { icon: <Monitor size={14} />,  title: 'Microsoft Solution Partner' },
      { icon: <Smartphone size={14} />, title: 'Salesforce Partner' },
    ]
  }
};

export const RESOURCES_MENU = {
  layout: 'resources',
  heading: 'Industry Expertise & Growth',
  columns: [
    {
      sections: [
        {
          heading: 'Learning Center',
          items: [
            { icon: <Layout size={14} />,        label: 'Case Studies',              path: '/about/case-studies' },
            { icon: <MessageSquare size={14} />, label: 'Blog',                      path: '/resources/blog' },
            { icon: <Calendar size={14} />,      label: 'Events',                    path: '#' },
            { icon: <Headphones size={14} />,    label: 'FAQ',                       path: '/support/faq' },
            { icon: <Phone size={14} />,         label: 'Schedule a Consultation',   path: '#consultation-section' },
          ]
        }
      ]
    }
  ],
  challenges: [
    { title: 'Strategy Guides', icon: <BarChart3 size={24} /> },
    { title: 'Video Demos',     icon: <Monitor size={24} /> },
    { title: 'Whitepapers',     icon: <Database size={24} /> },
    { title: 'Infographics',    icon: <LayoutGrid size={24} /> },
  ],
  sidebar: {
    heading: 'How to Build',
    items: [
      { icon: <Building2 size={18} />, title: 'Set Up New Office',  desc: 'Seamlessly transition your business tech.' },
      { icon: <Wifi size={18} />,       title: 'Secure Business WiFi', desc: 'Fast, secure, enterprise-grade connectivity.' },
      { icon: <Phone size={18} />,      title: 'Modernize Voice',    desc: 'Cloud phone systems for the modern team.' },
    ]
  }
};

// ─────────────────────────────────────────────────────────────
//  AUDIENCE-SPECIFIC MEGA_MAP FACTORY
// ─────────────────────────────────────────────────────────────
export function getMegaMap(audience: string): Record<string, any> {
  switch (audience) {
    case 'startup':
      return {
        'it-solutions':     GREENFIELD_IT_SOLUTIONS,
        'telco':            GREENFIELD_TELCO,
        'modern-workplace': GREENFIELD_MODERN_WORKPLACE,
        'company':          COMPANY_MENU,
        'resources':        RESOURCES_MENU,
      };
    case 'enterprise':
      return {
        'it-solutions':     ENTERPRISE_IT_SOLUTIONS,
        'telco':            ENTERPRISE_TELCO,
        'modern-workplace': ENTERPRISE_MODERN_WORKPLACE,
        'company':          COMPANY_MENU,
        'resources':        RESOURCES_MENU,
      };
    default: // 'business'
      return {
        'it-solutions':     BUSINESS_IT_SOLUTIONS,
        'telco':            BUSINESS_TELCO,
        'modern-workplace': BUSINESS_MODERN_WORKPLACE,
        'company':          COMPANY_MENU,
        'resources':        RESOURCES_MENU,
      };
  }
}

// ─────────────────────────────────────────────────────────────
//  STATIC FALLBACK (used when no audience context available)
// ─────────────────────────────────────────────────────────────
export const MEGA_MAP: Record<string, any> = {
  'it-solutions':     BUSINESS_IT_SOLUTIONS,
  'telco':            BUSINESS_TELCO,
  'modern-workplace': BUSINESS_MODERN_WORKPLACE,
  'company':          COMPANY_MENU,
  'resources':        RESOURCES_MENU,
};

export const TABS = [
  { name: 'IT Solutions',     menuKey: 'it-solutions',     path: '/managed-it' },
  { name: 'Telco',            menuKey: 'telco',            path: '/solutions/telco' },
  { name: 'Modern Workplace', menuKey: 'modern-workplace', path: '/modern-workplace/productivity' },
  { name: 'Company',          menuKey: 'company',          path: '/about' },
  { name: 'Resources',        menuKey: 'resources',        path: '/resources' },
];
