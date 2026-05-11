// data/smb-packages.tsx

import React from 'react';

export interface PackageTier {
  name: string;
  badge?: string;
  subtitle: string;
  price: number;
  billingPeriod: "month" | "year";
  savingsPercentage?: number;
  description: string;
  
  coreServices: string[];
  infrastructure: string[];
  support: string[];
  inclusions: string[];
  
  bestFor: string[];
  roiPoints: string[];
  
  primaryCTA: {
    text: string;
    link: string;
    tracking: string;
  };
  secondaryCTA: {
    text: string;
    link: string;
    tracking: string;
  };
  tertiaryCTA?: {
    text: string;
    link: string;
    tracking: string;
  };
  
  highlighted?: boolean;
}

export const SMB_PACKAGES: PackageTier[] = [
  {
    name: "Starter",
    subtitle: "Get started with essential services",
    price: 2499,
    billingPeriod: "month",
    savingsPercentage: 17,
    description: "Perfect for growing businesses just starting their digital transformation. Get professional infrastructure without the complexity.",
    
    coreServices: [
      "Internet (Single connection, 100 Mbps)",
      "WiFi (Basic mesh, 1-2 APs)",
      "Phone System (5 users, basic features)",
      "Email & Collaboration (Microsoft 365 Business Basic)",
      "Basic Support (Business hours, 4-hour response)"
    ],
    
    infrastructure: [
      "Basic network setup and configuration",
      "WiFi coverage for main office",
      "Phone system installation and training",
      "Email migration (if needed)"
    ],
    
    support: [
      "24/5 support (Mon-Fri, 8am-6pm)",
      "Monthly check-ins",
      "Basic troubleshooting",
      "Email support"
    ],
    
    inclusions: [
      "Single location",
      "Basic monitoring",
      "Email support",
      "Monthly check-ins"
    ],
    
    bestFor: [
      "Startups and micro businesses",
      "Testing C9 services",
      "Single location operations",
      "Budget-conscious businesses"
    ],
    
    roiPoints: [
      "Save $X/month vs. managing separately",
      "Professional infrastructure without complexity",
      "Start small, grow at your pace"
    ],
    
    primaryCTA: {
      text: "Start with Starter",
      link: "/smb/starter-package",
      tracking: "cta_smb_starter_primary"
    },
    
    secondaryCTA: {
      text: "Compare All Packages",
      link: "/smb/packages-comparison",
      tracking: "cta_smb_starter_secondary"
    },
    
    tertiaryCTA: {
      text: "Schedule Free Consultation",
      link: "/smb/consultation",
      tracking: "cta_smb_starter_tertiary"
    },
    
    highlighted: false
  },
  {
    name: "Growth",
    badge: "MOST POPULAR",
    subtitle: "Everything you need to grow",
    price: 5999,
    billingPeriod: "month",
    savingsPercentage: 17,
    description: "Most popular choice. Best value for growing businesses. Consolidate multiple vendors into one strategic partnership.",
    
    coreServices: [
      "Internet (Dual connections, 200 Mbps + failover)",
      "WiFi (Enterprise mesh, 3-5 APs, optimization)",
      "Phone System (20 users, advanced features, recording)",
      "Email & Collaboration (Microsoft 365 Business Standard)",
      "CCTV (4-8 cameras, cloud storage, 30-day retention)",
      "Managed Print (2-4 devices, supplies included)",
      "24/7 Support (phone, email, chat, 2-hour response)"
    ],
    
    infrastructure: [
      "Network design and optimization",
      "WiFi site survey and optimization",
      "Phone system setup with call recording",
      "CCTV installation and configuration",
      "Print device setup and management",
      "Email migration and training",
      "Initial security assessment"
    ],
    
    support: [
      "24/7 support (phone, email, chat)",
      "Monthly performance reviews",
      "Quarterly business reviews",
      "Proactive monitoring",
      "Regular updates and maintenance",
      "Dedicated account manager"
    ],
    
    inclusions: [
      "Redundancy and failover",
      "Advanced monitoring",
      "Security scanning",
      "Backup and recovery",
      "Performance analytics",
      "Unlimited phone support"
    ],
    
    bestFor: [
      "Growing businesses (10-50 employees)",
      "Consolidating multiple vendors",
      "Want comprehensive solution",
      "Need 24/7 support",
      "1-2 locations"
    ],
    
    roiPoints: [
      "Consolidate 5+ vendors into one partnership",
      "Save 30-40% on infrastructure costs",
      "Enterprise-grade service at SMB pricing",
      "Reduce downtime by 95%+"
    ],
    
    primaryCTA: {
      text: "Start with Growth",
      link: "/smb/growth-package",
      tracking: "cta_smb_growth_primary"
    },
    
    secondaryCTA: {
      text: "See What's Included",
      link: "/smb/growth-details",
      tracking: "cta_smb_growth_secondary"
    },
    
    tertiaryCTA: {
      text: "Schedule Demo",
      link: "/smb/demo",
      tracking: "cta_smb_growth_tertiary"
    },
    
    highlighted: true
  },
  {
    name: "Scale",
    subtitle: "Everything for enterprise-scale operations",
    price: 12999,
    billingPeriod: "month",
    savingsPercentage: 17,
    description: "For businesses ready to scale without limits. Enterprise-grade service with SMB flexibility.",
    
    coreServices: [
      "Internet (Dual connections, 500+ Mbps, priority)",
      "WiFi (Enterprise-grade mesh, 8+ APs, multi-site)",
      "Phone System (50+ users, advanced features, compliance)",
      "Email & Collaboration (Microsoft 365 Business Premium)",
      "CCTV (16+ cameras, unlimited storage, 90-day retention)",
      "Managed Print (8+ devices, supplies, optimization)",
      "Modern Workplace (Device management, security)",
      "Access Control (Visitor management, multi-location)",
      "24/7 Premium Support (dedicated team, 30-min response)"
    ],
    
    infrastructure: [
      "Multi-location network design",
      "Advanced WiFi optimization",
      "Enterprise phone system",
      "Comprehensive CCTV solution",
      "Enterprise print infrastructure",
      "Device management platform",
      "Access control system",
      "Security and compliance setup",
      "Disaster recovery planning"
    ],
    
    support: [
      "24/7 Premium Support (dedicated team)",
      "30-minute response guarantee",
      "Dedicated account manager",
      "Quarterly business reviews",
      "Monthly performance reports",
      "Proactive optimization",
      "Strategic planning sessions",
      "On-site support available"
    ],
    
    inclusions: [
      "Full redundancy across locations",
      "Advanced security monitoring",
      "Compliance management",
      "Backup and disaster recovery",
      "Advanced analytics and reporting",
      "Custom integrations",
      "Priority support",
      "Unlimited phone support",
      "Annual security audit"
    ],
    
    bestFor: [
      "Larger SMBs (50-250 employees)",
      "Multiple locations",
      "Complex infrastructure needs",
      "Want strategic partner",
      "Ready to scale"
    ],
    
    roiPoints: [
      "Consolidate 10+ vendors into one partnership",
      "Save 40-50% on infrastructure costs",
      "Enterprise-grade service with SMB flexibility",
      "Reduce downtime by 99%+",
      "Scale without adding IT staff"
    ],
    
    primaryCTA: {
      text: "Start with Scale",
      link: "/smb/scale-package",
      tracking: "cta_smb_scale_primary"
    },
    
    secondaryCTA: {
      text: "See What's Included",
      link: "/smb/scale-details",
      tracking: "cta_smb_scale_secondary"
    },
    
    tertiaryCTA: {
      text: "Schedule Strategic Review",
      link: "/smb/strategic-review",
      tracking: "cta_smb_scale_tertiary"
    },
    
    highlighted: false
  }
];
