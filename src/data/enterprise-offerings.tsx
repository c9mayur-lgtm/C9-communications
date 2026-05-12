import React from 'react';
import { Check, ArrowRight, TrendingUp, Shield, Zap, Globe, Lock, ShieldCheck } from 'lucide-react';

export interface EnterpriseTier {
  id: string;
  name: string;
  badge?: string | null;
  subtitle: string;
  description: string;
  coreServices: string[];
  infrastructure: string[];
  support: string[];
  guarantees: string[];
  bestFor: string[];
  strategicValue: string[];
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
}

export const ENTERPRISE_OFFERINGS_DATA: EnterpriseTier[] = [
  {
    id: "foundation",
    name: "Foundation Managed Services",
    badge: null,
    subtitle: "Essential managed services for enterprises wanting to consolidate vendors",
    description: "Perfect for cost-conscious enterprises or single-location operations. Get professional managed services with SLA-backed guarantees.",
    coreServices: [
      "Internet (Dual connections, 99.99% SLA, failover)",
      "Network (Unified management, basic security controls)",
      "Phone System (Basic compliance, call recording)",
      "Email & Collaboration (Microsoft 365 Standard)",
      "24/7 Support (Standard response time)"
    ],
    infrastructure: [
      "Dual internet connections with automatic failover",
      "Centralized network management",
      "Basic security monitoring",
      "Phone system setup and configuration",
      "Email migration and training"
    ],
    support: [
      "24/7 support (phone, email, chat)",
      "2-hour response time guarantee",
      "Monthly performance reports",
      "Basic troubleshooting and maintenance",
      "Email support"
    ],
    guarantees: [
      "99.99% uptime SLA",
      "2-hour response time guarantee",
      "Financial penalty for downtime",
      "Monthly performance reports",
      "Basic monitoring and alerting"
    ],
    bestFor: [
      "Enterprises wanting to consolidate vendors",
      "Cost-conscious enterprises",
      "Single location or limited scope",
      "Basic managed services needs"
    ],
    strategicValue: [
      "Eliminates vendor fragmentation",
      "Reduces operational complexity",
      "Provides accountability through SLA",
      "Enables cost optimization"
    ],
    primaryCTA: {
      text: "Schedule Strategic Assessment",
      link: "#consultation-section",
      tracking: "cta_enterprise_foundation_primary"
    },
    secondaryCTA: {
      text: "View Foundation Details",
      link: "/enterprise/foundation-details",
      tracking: "cta_enterprise_foundation_secondary"
    },
    tertiaryCTA: {
      text: "Download Capabilities Guide",
      link: "/enterprise/capabilities-guide",
      tracking: "cta_enterprise_foundation_tertiary"
    }
  },
  {
    id: "strategic",
    name: "Strategic Managed Services",
    badge: "MOST POPULAR",
    subtitle: "Comprehensive managed services for growing enterprises",
    description: "Our most popular choice. Perfect for multi-location operations and strategic partnerships. Includes a dedicated account manager.",
    coreServices: [
      "Internet (Dual connections, 99.99% SLA, priority support)",
      "Network (Unified management, advanced security controls)",
      "Phone System (Advanced compliance, full features, call recording)",
      "Email & Collaboration (Microsoft 365 Premium)",
      "CCTV (Integrated surveillance, compliance-ready)",
      "Print Infrastructure (Managed, optimized, supplies included)",
      "24/7 Premium Support (1-hour response)"
    ],
    infrastructure: [
      "Multi-location network design and optimization",
      "Advanced security monitoring and threat detection",
      "Integrated CCTV across multiple locations",
      "Centralized print management",
      "Phone system setup with compliance recording",
      "Email migration and training",
      "Initial security assessment"
    ],
    support: [
      "24/7 Premium Support (phone, email, chat)",
      "1-hour response time guarantee",
      "Dedicated account manager",
      "Quarterly business reviews",
      "Monthly performance reports",
      "Proactive monitoring and optimization",
      "Regular security updates"
    ],
    guarantees: [
      "99.99% uptime SLA",
      "1-hour response time guarantee",
      "Financial penalty for downtime",
      "Quarterly business reviews",
      "Monthly performance reports",
      "Dedicated account manager",
      "Advanced monitoring and alerting"
    ],
    bestFor: [
      "Growing enterprises (50-500 employees)",
      "Multi-location operations",
      "Want comprehensive solution",
      "Strategic partnership focus",
      "Need 24/7 support"
    ],
    strategicValue: [
      "Consolidate 5-8 vendors into one partnership",
      "Reduce operational costs by 30-40%",
      "Improve security and compliance",
      "Enable business growth without adding IT staff",
      "Gain strategic partner for infrastructure"
    ],
    primaryCTA: {
      text: "Schedule Strategic Assessment",
      link: "#consultation-section",
      tracking: "cta_enterprise_strategic_primary"
    },
    secondaryCTA: {
      text: "View Strategic Details",
      link: "/enterprise/strategic-details",
      tracking: "cta_enterprise_strategic_secondary"
    },
    tertiaryCTA: {
      text: "View Case Studies",
      link: "/case-studies/enterprise-strategic",
      tracking: "cta_enterprise_strategic_tertiary"
    }
  },
  {
    id: "premium",
    name: "Premium Managed Services",
    badge: null,
    subtitle: "Enterprise-grade managed services with premium support",
    description: "For large enterprises with mission-critical infrastructure and complex needs. Get enterprise-grade services with a dedicated support team.",
    coreServices: [
      "Internet (Multi-carrier, 99.99% SLA, priority support, redundancy)",
      "Network (Enterprise-grade, advanced security, compliance controls)",
      "Phone System (Enterprise compliance, full features, call recording)",
      "Email & Collaboration (Microsoft 365 Enterprise)",
      "CCTV (Enterprise surveillance, compliance-ready, unlimited storage)",
      "Print Infrastructure (Enterprise managed, optimized, supplies)",
      "Modern Workplace (Device management, zero-trust security)",
      "Access Control (Multi-location, visitor management, emergency protocols)",
      "Security Services (Advanced threat protection, vulnerability scanning)",
      "24/7 Premium Support (30-minute response)"
    ],
    infrastructure: [
      "Multi-carrier internet with full redundancy",
      "Enterprise network architecture",
      "Advanced security and threat detection",
      "Enterprise CCTV with unlimited storage",
      "Enterprise print infrastructure",
      "Device management platform",
      "Access control system",
      "Security and compliance setup",
      "Disaster recovery planning",
      "Business continuity planning"
    ],
    support: [
      "24/7 Premium Support (dedicated team)",
      "30-minute response time guarantee",
      "Dedicated account team (2-3 people)",
      "Monthly business reviews",
      "Quarterly strategic reviews",
      "Proactive optimization and planning",
      "On-site support available",
      "Executive escalation path"
    ],
    guarantees: [
      "99.99% uptime SLA",
      "30-minute response time guarantee",
      "Financial penalty for downtime",
      "Dedicated account team",
      "Monthly business reviews",
      "Quarterly strategic reviews",
      "Annual security audit",
      "SOC2 Type II compliance",
      "HIPAA ready",
      "PCI-DSS compliant"
    ],
    bestFor: [
      "Large enterprises (500+ employees)",
      "Multi-location, complex environments",
      "Mission-critical infrastructure",
      "Strict compliance requirements",
      "Want premium support and guarantees"
    ],
    strategicValue: [
      "Consolidate 10+ vendors into one partnership",
      "Reduce operational costs by 40-50%",
      "Ensure compliance and security",
      "Enable enterprise growth",
      "Gain strategic partner and trusted advisor"
    ],
    primaryCTA: {
      text: "Schedule Strategic Assessment",
      link: "#consultation-section",
      tracking: "cta_enterprise_premium_primary"
    },
    secondaryCTA: {
      text: "View Premium Details",
      link: "/enterprise/premium-details",
      tracking: "cta_enterprise_premium_secondary"
    },
    tertiaryCTA: {
      text: "View Case Studies",
      link: "/case-studies/enterprise-premium",
      tracking: "cta_enterprise_premium_tertiary"
    }
  },
  {
    id: "custom",
    name: "Custom Enterprise Solution",
    badge: null,
    subtitle: "Fully tailored solution for your unique requirements",
    description: "For enterprises with unique requirements. Custom capabilities, custom SLAs, custom support model. Let's build something perfect for your business.",
    coreServices: [
      "Custom combination of all services",
      "Custom service levels",
      "Custom SLA terms",
      "Custom support model",
      "Custom integrations",
      "Custom compliance requirements"
    ],
    infrastructure: [
      "Designed specifically for your environment",
      "Optimized for your business needs",
      "Integrated with your existing systems",
      "Scaled for your growth trajectory",
      "Compliant with your requirements"
    ],
    support: [
      "Custom support model",
      "Custom response times",
      "Custom escalation procedures",
      "Custom review cadence",
      "Custom reporting",
      "Custom optimization"
    ],
    guarantees: [
      "Custom SLA terms (negotiated)",
      "Custom response times",
      "Custom financial penalties",
      "Custom compliance requirements",
      "Custom audit procedures",
      "Custom support model"
    ],
    bestFor: [
      "Enterprises with unique requirements",
      "Complex compliance needs",
      "Custom integrations required",
      "Large deal values",
      "Strategic importance"
    ],
    strategicValue: [
      "Fully customized solution",
      "Designed for your specific needs",
      "Aligned with your business goals",
      "Compliant with your requirements",
      "Strategic partnership with dedicated team"
    ],
    primaryCTA: {
      text: "Schedule Executive Briefing",
      link: "#consultation-section",
      tracking: "cta_enterprise_custom_primary"
    },
    secondaryCTA: {
      text: "View Custom Solutions",
      link: "/enterprise/custom-solutions",
      tracking: "cta_enterprise_custom_secondary"
    },
    tertiaryCTA: {
      text: "Download Capabilities Guide",
      link: "/enterprise/capabilities-guide",
      tracking: "cta_enterprise_custom_tertiary"
    }
  }
];
