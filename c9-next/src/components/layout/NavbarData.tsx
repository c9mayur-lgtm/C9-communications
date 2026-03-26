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
    description: "Switch your business to ultrafast nbn® backed by Australia's most-trusted telco. From nbn® to fibre, we deliver great value internet with 24/7 enterprise support.",
    options: [
      { title: 'Business nbn®', desc: 'A network built for business backed by dedicated local support.', icon: <Wifi size={20} /> },
      { title: 'nbn® Enterprise Ethernet', desc: 'Future-proof your business with fibre fast internet.', icon: <Network size={20} /> },
      { title: 'C9 Fibre', desc: 'Ultrafast plans of up to 10,000 Mbps with a 99.95% uptime guarantee.', icon: <Monitor size={20} /> }
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
  voice_ai: {
    heading: 'Voice AI Solutions',
    description: 'Revolutionize your customer engagement with AI-powered voice solutions. From intelligent receptionists to real-time sentiment analysis, we bring the future of communication to your business.',
    options: [
      { title: 'AI Receptionist', desc: 'Automate your front desk with human-like AI that handles calls 24/7.', icon: <UserPlus size={20} /> },
      { title: 'Intelligent IVR', desc: 'Smart menus that understand natural language for faster resolution.', icon: <Layers size={20} /> },
      { title: 'Sentiment Analytics', desc: 'Real-time analysis of call quality and customer mood.', icon: <BarChart3 size={20} /> }
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

export const IT_SOLUTIONS_MENU = {
  layout: 'it-solutions',
  columns: [
    {
      sections: [
        {
          heading: 'Managed IT Service',
          items: [
            { icon: <Headphones size={14} />, label: 'Helpdesk Support', path: '#' },
            { icon: <UserPlus size={14} />, label: 'Outsourcing', path: '#' },
            { icon: <Globe size={14} />, label: 'Strategy & Consulting', path: '/managed-it/strategy-consulting' },
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
          <img src="/images/c9_defense_logo.svg" alt="C9 Defense" className="h-8 opacity-70" onError={(e: any) => e.currentTarget.style.display='none'} />
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
      { label: 'Healthcare', path: '/industries/healthcare' },
      { label: 'Professional Services', path: '/industries/professional-services' },
      { label: 'Non-profit', path: '/industries/non-profit' },
      { label: 'Education', path: '/industries/education' },
      { label: 'Retail', path: '/industries/retail' },
      { label: 'Real Estate', path: '/industries/real-estate' }
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
