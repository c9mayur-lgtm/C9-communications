import * as React from 'react';
import { 
  Wifi, Phone, Network, Globe, Smartphone, Truck, Server, 
  Headphones, Database, Shield, LayoutGrid, Monitor, 
  UserPlus, Cloud, HardDrive, Cpu, ShieldCheck, 
  Infinity as InfinityIcon, BarChart3, Building2, 
  Volume2, GraduationCap, ShieldAlert, Layers,
  Users, Star, Layout, MessageSquare, Calendar, Briefcase
} from 'lucide-react';

export const TELCO_SERVICES_CONTENT: Record<string, any> = {
  internet: {
    heading: 'Business Internet',
    description: "C9 delivers business-grade nbn® and fibre connectivity designed around uptime, not price. Every connection is backed by a 99.95% SLA, local engineering support, and proactive monitoring — so your team stays online without chasing your provider.",
    options: [
      { title: 'Business nbn®', desc: 'Reliable nbn® plans built for Australian businesses, with dedicated local support and no shared residential traffic.', icon: <Wifi size={20} /> },
      { title: 'nbn® Enterprise Ethernet', desc: 'Symmetrical speeds and priority-grade connectivity for offices that cannot afford to wait on uploads.', icon: <Network size={20} /> },
      { title: 'C9 Fibre', desc: 'Direct fibre to your premises — up to 10,000 Mbps with a 99.95% uptime guarantee and 24/7 C9 engineering support.', icon: <Monitor size={20} /> }
    ]
  },
  network: {
    heading: 'Business Networking',
    description: "C9 designs, deploys, and manages the network infrastructure that keeps your business running. From multi-site connectivity to secure remote access, every solution is engineered and supported by our local team — not outsourced.",
    options: [
      { title: 'SD-WAN', desc: 'Intelligent traffic management across multiple sites — lower costs, better performance, single pane of glass visibility.', icon: <Network size={20} /> },
      { title: 'Private IP / MPLS', desc: 'Dedicated private networking for businesses that need secure, low-latency links between locations.', icon: <Globe size={20} /> },
      { title: 'Network Security', desc: 'C9-managed firewall, threat detection, and network segmentation — security baked into your infrastructure, not bolted on.', icon: <Shield size={20} /> }
    ]
  },
  mobile: {
    heading: 'Business Mobile',
    description: "C9 manages your mobile fleet end-to-end — from SIM provisioning and plan management to device procurement and a single consolidated bill. One provider. One point of contact. No more chasing multiple carriers.",
    options: [
      { title: 'Business SIM Plans', desc: "High-data SIM plans on Australia's leading networks, managed through your C9 account with no lock-in contracts.", icon: <Smartphone size={20} /> },
      { title: 'Mobile Fleet Management', desc: 'Centralised visibility and control over every device and SIM in your business — usage, costs, and security in one place.', icon: <Truck size={20} /> },
      { title: 'Device Procurement', desc: 'Source and deploy the latest business devices through C9 — fully configured and ready to use from day one.', icon: <Server size={20} /> }
    ]
  },
  voice_ai: {
    heading: 'C9 Voice AI',
    description: "C9's Voice AI layer sits on top of your existing phone system and transforms how your business handles inbound calls — reducing missed calls, cutting hold times, and freeing your team from routine call handling.",
    options: [
      { title: 'AI Receptionist', desc: 'An always-on virtual receptionist that answers, qualifies, and routes calls 24/7 — in natural, human-sounding voice.', icon: <UserPlus size={20} /> },
      { title: 'Intelligent IVR', desc: 'Replace outdated press-1 menus with AI that understands intent and gets callers to the right person faster.', icon: <Layers size={20} /> },
      { title: 'Call Analytics', desc: 'Real-time insights into call volumes, sentiment, and resolution rates — so you can improve service with data, not guesswork.', icon: <BarChart3 size={20} /> }
    ]
  },
  voice: {
    heading: 'Business Voice',
    description: "C9 replaces legacy phone infrastructure with the C9 Voice cloud phone system — a fully managed, Microsoft Teams-integrated voice platform built for Australian businesses that need reliability, flexibility, and a local team behind it.",
    options: [
      { title: 'Inbound Services', desc: 'Secure 13, 1300, and 1800 numbers for your business with advanced call routing and intelligent analytics.', icon: <Headphones size={20} /> },
      { title: 'Microsoft Teams Calling', desc: 'Make and receive business calls directly inside Teams — C9 handles the provisioning, porting, and ongoing management.', icon: <Phone size={20} /> },
      { title: 'C9 Voice Cloud Phone System', desc: 'A fully managed cloud PBX with enterprise call features, auto-attendants, and call recording — no hardware required.', icon: <Phone size={20} /> },
      { title: 'SIP Trunking', desc: 'Retain your existing phone hardware and phone numbers while connecting to the C9 voice network for better reliability and cost.', icon: <Database size={20} /> }
    ]
  }
};

export const IT_SOLUTIONS_MENU = {
  layout: 'it-solutions',
  columns: [
    {
      sections: [
        {
          heading: 'Managed IT Service',
          items: [
            { icon: <Headphones size={14} />, label: 'Helpdesk Support', path: '/managed-it/helpdesk-support' },
            { icon: <UserPlus size={14} />, label: 'IT Outsourcing', path: '/managed-it/outsourcing' },
            { icon: <Globe size={14} />, label: 'Strategy & Consulting', path: '/managed-it/strategy-consulting' },
          ]
        }
      ]
    },
    {
      sections: [
        {
          heading: 'Infrastructure',
          items: [
            { icon: <Server size={14} />, label: 'IT Infrastructure Services', path: '/managed-it/infrastructure' },
            { icon: <Network size={14} />, label: 'Network Solutions', path: '/managed-it/network-solutions' },
            { icon: <Cloud size={14} />, label: 'Cloud Services', path: '/managed-it/cloud-services' },
            { icon: <HardDrive size={14} />, label: 'Software Solutions', path: '#' },
          ]
        },
        {
          heading: 'Cybersecurity',
          action: { label: 'C9 defense →', path: '/c9-defense' },
          items: [
            { icon: <Shield size={14} />, label: 'Security Solutions', path: '/managed-it/security-solutions' },
            { icon: <Database size={14} />, label: 'Backup & Disaster Recovery', path: '/managed-it/backup-disaster-recovery' },
          ]
        }
      ]
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
      { label: 'Healthcare', path: '/industries/healthcare' },
      { label: 'Professional Services', path: '/industries/professional-services' },
      { label: 'Non-profit', path: '/industries/non-profit' },
      { label: 'Education', path: '/industries/education' },
      { label: 'Retail', path: '/industries/retail' },
      { label: 'Real Estate', path: '/industries/real-estate' },
      { label: 'View all Industries →', path: '/industries' }
    ]
  },
  ctaBanner: {
    title: 'Smarter IT, Stronger Business',
    body: 'End-to-end IT services designed to secure, support, and scale your business from helpdesk to cloud and beyond.',
    button: 'Partner Up Now'
  }
};

export const TELCO_MENU = {
  layout: 'telco',
  columns: [
    {
      sections: [
        {
          heading: 'Internet',
          items: [
            { icon: <Wifi size={14} />, label: 'Business NBN™', path: '/telco/business-nbn', active: true },
            { icon: <Wifi size={14} />, label: 'Fast Fibre', path: '/telco/fast-fibre' },
            { icon: <Network size={14} />, label: 'NBN™ Enterprise Ethernet', path: '/telco/enterprise-ethernet' },
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
            { icon: <Phone size={14} />, label: 'C9 Voice', path: '/telco/c9voice' },
            { icon: <Headphones size={14} />, label: 'Inbound Services', path: '/telco/inbound-services' },
            { icon: <Phone size={14} />, label: 'Microsoft Teams Calling', path: '/telco/teams-calling' },
            { icon: <Network size={14} />, label: 'SIP Trunking', path: '#' },
            { icon: <Monitor size={14} />, label: 'Unified Communications', path: '#' },
            { icon: <Headphones size={14} />, label: 'Contact Centre', path: '#' },
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

export const MODERN_WORKPLACE_MENU = {
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

export const COMPANY_MENU = {
  layout: 'company',
  heading: 'Simplifying IT for a complex world.',
  columns: [
    {
      sections: [
        {
          heading: 'Our Company',
          items: [
            { icon: <Building2 size={14} />, label: 'About Us', path: '/about' },
            { icon: <ShieldCheck size={14} />, label: 'Why C9', path: '/about/why-c9' },
            { icon: <Users size={14} />, label: 'Our Team', path: '/about/team' },
            { icon: <Briefcase size={14} />, label: 'Careers', path: '/about/careers' },
            { icon: <ShieldCheck size={14} />, label: 'Partners & Certifications', path: '/about/partners' },
            { icon: <Star size={14} />, label: 'Reviews & Awards', path: '/about/reviews' },
          ]
        }
      ]
    }
  ],
  challenges: [
    { title: 'Innovation', icon: <Cpu size={24} /> },
    { title: 'Reliability', icon: <Shield size={24} /> },
    { title: 'Global Support', icon: <Globe size={24} /> },
    { title: 'Scalability', icon: <Layers size={24} /> },
  ],
  sidebar: {
    heading: 'Platform Partnerships',
    items: [
      { icon: <Cloud size={14} />, title: 'AWS Partner' },
      { icon: <Cloud size={14} />, title: 'Google Cloud Partner' },
      { icon: <Monitor size={14} />, title: 'Microsoft Solution Partner' },
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
            { icon: <Layout size={14} />, label: 'Case Studies', path: '/about/case-studies' },
            { icon: <MessageSquare size={14} />, label: 'Blog', path: '/resources/blog' },
            { icon: <Calendar size={14} />, label: 'Events', path: '#' },
            { icon: <Headphones size={14} />, label: 'FAQ', path: '/support/faq' },
            { icon: <Phone size={14} />, label: 'Schedule a Consultation', path: '#consultation-section' },
          ]
        }
      ]
    }
  ],
  challenges: [
    { title: 'Strategy Guides', icon: <BarChart3 size={24} /> },
    { title: 'Video Demos', icon: <Monitor size={24} /> },
    { title: 'Whitepapers', icon: <Database size={24} /> },
    { title: 'Infographics', icon: <LayoutGrid size={24} /> },
  ],
  sidebar: {
    heading: 'How to Build',
    items: [
      { icon: <Building2 size={18} />, title: 'Set Up New Office', desc: 'Seamlessly transition your business tech.' },
      { icon: <Wifi size={18} />, title: 'Secure Business WiFi', desc: 'Fast, secure, enterprise-grade connectivity.' },
      { icon: <Phone size={18} />, title: 'Modernize Voice', desc: 'Cloud phone systems for the modern team.' },
    ]
  }
};

export const MEGA_MAP: Record<string, any> = {
  'it-solutions': IT_SOLUTIONS_MENU,
  'telco': TELCO_MENU,
  'modern-workplace': MODERN_WORKPLACE_MENU,
  'company': COMPANY_MENU,
  'resources': RESOURCES_MENU
};

export const TABS = [
  { name: 'IT Solutions', menuKey: 'it-solutions', path: '/managed-it' },
  { name: 'Telco', menuKey: 'telco', path: '/solutions/telco' },
  { name: 'Modern Workplace', menuKey: 'modern-workplace', path: '/solutions/modern-workplace' },
  { name: 'Company', menuKey: 'company', path: '/about' },
  { name: 'Resources', menuKey: 'resources', path: '/resources' },
];
