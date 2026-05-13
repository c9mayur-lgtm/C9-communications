// data/enterprise-capabilities.tsx

import React from 'react';
import { Globe, Radio, Phone, Camera, Laptop, Printer, Lock } from 'lucide-react';
import { OfferingData } from '@/components/sections/ProblemSolutionCard';

export const ENTERPRISE_CAPABILITIES_DATA: OfferingData[] = [
  {
    id: "internet",
    icon: <Globe className="w-6 h-6" />,
    image: "/Enterprise/Internet.png",
    problemStatement: "Single-ISP Dependency Creates Business Continuity Risk",
    problemContext: "Reliance on a single internet provider creates a critical single point of failure. When your ISP goes down, your entire business stops. For enterprises managing multiple locations, this risk is multiplied across your infrastructure.",
    solutionTitle: "Carrier-Grade Internet Infrastructure",
    solutionDescription: "Multi-carrier internet redundancy with automatic failover, 99.99% uptime SLA, and proactive infrastructure monitoring. Designed for enterprises that cannot tolerate downtime.",
    features: [
      "Dual internet connections from independent carriers",
      "Automatic failover (<30 seconds, zero downtime)",
      "99.99% uptime SLA with financial penalties",
      "Centralised Network Operations Center (NOC) monitoring",
      "15-minute response guarantee for any issues",
      "Dedicated account management and escalation"
    ],
    impacts: [
      "Eliminates single point of failure",
      "Ensures business continuity across all locations",
      "Reduces operational risk by 95%+",
      "Meets regulatory business continuity requirements",
      "Provides financial protection through SLA penalties",
      "Enables continuous operations without interruption"
    ],
    numbers: [
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Max downtime/year", value: "52 minutes" },
      { label: "Failover time", value: "<30 seconds" }
    ],
    caseStudyQuote: "We manage 50+ locations across Australia. Internet downtime was impacting operations. C9 implemented carrier-grade redundancy. Result: 99.99% uptime maintained. Zero unplanned outages in 24 months.",
    caseStudyAuthor: "Infrastructure Director, Multi-Location Enterprise (50+ locations)",
    primaryCTAText: "Review Internet SLA & Architecture",
    primaryCTALink: "/telco",
    secondaryCTAText: "View Case Study",
    secondaryCTALink: "/case-studies/ent-internet",
    tertiaryCTAText: "Schedule Assessment",
    tertiaryCTALink: "#consultation-section",
    trackingPrefix: "cta_enterprise_internet"
  },
  {
    id: "networking",
    icon: <Radio className="w-6 h-6" />,
    image: "/Enterprise/Network and wifi_Enterprise.png",
    problemStatement: "Fragmented Network Architecture Creates Security & Compliance Gaps",
    problemContext: "Decentralized network management across multiple locations creates security vulnerabilities, compliance risks, and operational inefficiencies. Without centralized control, you cannot ensure consistent security policies across your organization.",
    solutionTitle: "Enterprise-Grade Unified Network Infrastructure",
    solutionDescription: "Centrally managed network architecture with unified security controls, compliance enforcement, and real-time monitoring across all locations. Supports 10,000+ users.",
    features: [
      "Centralized network management across unlimited locations",
      "Unified security controls and threat detection",
      "Network segmentation (VLAN, micro-segmentation)",
      "802.1X authentication and WPA3 encryption",
      "Quality of Service (QoS) prioritization",
      "Compliance-ready (SOC2, HIPAA, PCI-DSS)"
    ],
    impacts: [
      "Eliminates fragmented security vulnerabilities",
      "Ensures consistent compliance across all locations",
      "Reduces security incidents by 70%+",
      "Improves network performance by 3x",
      "Enables centralized visibility and control",
      "Supports unlimited scalability for growth"
    ],
    numbers: [
      { label: "Uptime SLA", value: "99.9%" },
      { label: "Concurrent users/AP", value: "500+" },
      { label: "Security incidents reduced", value: "70%" }
    ],
    caseStudyQuote: "Our network was fragmented across 20+ locations. C9 implemented unified enterprise networking. Result: 100% compliance with security standards and 40% reduction in IT tickets.",
    caseStudyAuthor: "CIO, Multi-Location Enterprise (20+ locations)",
    primaryCTAText: "Review Network Architecture & Compliance",
    primaryCTALink: "/managed-it",
    secondaryCTAText: "View Case Study",
    secondaryCTALink: "/case-studies/ent-networking",
    tertiaryCTAText: "Schedule Assessment",
    tertiaryCTALink: "#consultation-section",
    trackingPrefix: "cta_enterprise_networking"
  },
  {
    id: "communications",
    icon: <Phone className="w-6 h-6" />,
    image: "/Enterprise/Phone_system_enterprise.png",
    problemStatement: "Legacy PBX Systems Create Operational Risk & Compliance Gaps",
    problemContext: "Legacy PBX systems lack compliance controls, create operational silos, and limit business agility. Without call recording and audit trails, you cannot meet regulatory requirements or optimize customer interactions.",
    solutionTitle: "Enterprise Communications Platform",
    solutionDescription: "Unified communications platform with compliance built-in, automatic call recording, detailed audit trails, and seamless integration with CRM and business systems.",
    features: [
      "Cloud-based unified communications",
      "Automatic call recording with retention policies",
      "Detailed audit trails for compliance (HIPAA, PCI-DSS)",
      "Seamless integration with CRM and ERP systems",
      "Advanced call routing and IVR capabilities",
      "Mobile integration for remote workers"
    ],
    impacts: [
      "Ensures 100% compliance with regulatory requirements",
      "Enables seamless CRM integration for better service",
      "Reduces communications costs by 50%+",
      "Improves customer service metrics by 30%+",
      "Enables remote work for entire organization",
      "Provides complete audit trail for compliance"
    ],
    numbers: [
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Users supported", value: "10,000+" },
      { label: "Cost reduction vs legacy", value: "50%+" }
    ],
    caseStudyQuote: "We had legacy PBX systems at 15 locations with no compliance controls. C9 implemented a unified communications platform. Result: 100% call recording compliance and reduced costs by 50%.",
    caseStudyAuthor: "VP Operations, Multi-Location Enterprise (15 locations)",
    primaryCTAText: "Review Communications & Compliance",
    primaryCTALink: "/telco",
    secondaryCTAText: "View Case Study",
    secondaryCTALink: "/case-studies/ent-communications",
    tertiaryCTAText: "Schedule Assessment",
    tertiaryCTALink: "#consultation-section",
    trackingPrefix: "cta_enterprise_communications"
  },
  {
    id: "security",
    icon: <Camera className="w-6 h-6" />,
    image: "/Enterprise/CCTV_Enterprise.png",
    problemStatement: "Fragmented Security Systems Create Compliance & Liability Risks",
    problemContext: "Decentralized surveillance systems across multiple locations create compliance gaps and liability exposure. Without centralized monitoring and audit trails, you cannot respond effectively to security incidents.",
    solutionTitle: "Enterprise Security & Surveillance System",
    solutionDescription: "Integrated security system with centralized monitoring, compliance-ready architecture, automatic retention policies, and seamless integration with access control.",
    features: [
      "4K surveillance with cloud storage",
      "Centralized monitoring from single console",
      "Automatic retention policies for compliance",
      "Integration with access control and alarms",
      "Video analytics for security insights",
      "Audit-ready footage with chain of custody"
    ],
    impacts: [
      "Ensures 100% compliance with regulatory requirements",
      "Reduces security incidents by 60%+",
      "Enables rapid incident investigation and response",
      "Provides legal protection through audit-ready footage",
      "Centralizes security monitoring across all locations",
      "Integrates with emergency response systems"
    ],
    numbers: [
      { label: "Audit readiness", value: "100%" },
      { label: "Security incidents reduced", value: "60%" },
      { label: "Investigation time", value: "Minutes" }
    ],
    caseStudyQuote: "We manage 30 locations with fragmented security systems. C9 implemented integrated surveillance. Result: 100% compliance and reduced incidents by 60%.",
    caseStudyAuthor: "VP Security, Multi-Location Enterprise (30 locations)",
    primaryCTAText: "Review Security & Compliance",
    primaryCTALink: "/managed-it",
    secondaryCTAText: "View Case Study",
    secondaryCTALink: "/case-studies/ent-security",
    tertiaryCTAText: "Schedule Assessment",
    tertiaryCTALink: "#consultation-section",
    trackingPrefix: "cta_enterprise_security"
  },
  {
    id: "workplace",
    icon: <Laptop className="w-6 h-6" />,
    image: "/Enterprise/Modern_Workplace_Enterprise.png",
    problemStatement: "Fragmented Workplace Technology Creates Security & Productivity Risks",
    problemContext: "Decentralized device management and fragmented collaboration tools create security vulnerabilities and productivity inefficiencies. Without unified security, you cannot ensure data protection.",
    solutionTitle: "Enterprise Digital Workplace Platform",
    solutionDescription: "Unified digital workplace with zero-trust security architecture, centralized device management, compliance controls, and seamless integration.",
    features: [
      "Unified device management (Windows, Mac, mobile)",
      "Zero-trust security architecture with MFA",
      "Cloud collaboration tools (Teams, SharePoint)",
      "Centralized compliance and audit controls",
      "Endpoint security and threat protection",
      "Data backup and recovery"
    ],
    impacts: [
      "Ensures 100% compliance with security standards",
      "Reduces security incidents by 80%+",
      "Improves productivity by 20-30%",
      "Enables secure remote work organization-wide",
      "Reduces IT operational costs by 35%+",
      "Provides complete audit trail for compliance"
    ],
    numbers: [
      { label: "Security incidents reduced", value: "80%" },
      { label: "Productivity improvement", value: "20-30%" },
      { label: "IT cost reduction", value: "35%" }
    ],
    caseStudyQuote: "We had fragmented workplace technology across 5,000+ employees. C9 implemented a unified digital workplace. Result: 100% compliance and 25% productivity improvement.",
    caseStudyAuthor: "CISO, Large Enterprise (5,000+ employees)",
    primaryCTAText: "Review Workplace & Security",
    primaryCTALink: "/modern-workplace",
    secondaryCTAText: "View Case Study",
    secondaryCTALink: "/case-studies/ent-workplace",
    tertiaryCTAText: "Schedule Assessment",
    tertiaryCTALink: "#consultation-section",
    trackingPrefix: "cta_enterprise_workplace"
  },
  {
    id: "print",
    icon: <Printer className="w-6 h-6" />,
    image: "/Enterprise/Print_Enterprise.png",
    problemStatement: "Unmanaged Print Environment Creates Security & Cost Risks",
    problemContext: "Unmanaged printing infrastructure across multiple locations creates security vulnerabilities and cost overruns. Without centralized management, you cannot ensure data protection or control costs.",
    solutionTitle: "Enterprise Print Infrastructure Management",
    solutionDescription: "Centrally managed print infrastructure with security controls, compliance audit trails, detailed usage analytics, and cost optimization.",
    features: [
      "Centralized management of 1000+ devices",
      "Secure printing with authentication",
      "Automatic print audit trails for compliance",
      "Detailed usage analytics and cost reporting",
      "Predictive maintenance and optimization",
      "Integration with business systems"
    ],
    impacts: [
      "Ensures 100% compliance with security standards",
      "Reduces print costs by 30-40%",
      "Eliminates security risks from unmanaged printing",
      "Provides complete audit trail for compliance",
      "Reduces environmental impact by 30%+",
      "Frees IT team for strategic work"
    ],
    numbers: [
      { label: "Devices managed", value: "1000+" },
      { label: "Print cost reduction", value: "30-40%" },
      { label: "Uptime SLA", value: "99.5%" }
    ],
    caseStudyQuote: "We had 200+ printers across 20 locations. C9 implemented managed print infrastructure. Result: 40% reduction in print costs and 100% security compliance.",
    caseStudyAuthor: "CIO, Multi-Location Enterprise (20 locations)",
    primaryCTAText: "Review Print & Compliance",
    primaryCTALink: "/managed-it",
    secondaryCTAText: "View Case Study",
    secondaryCTALink: "/case-studies/ent-print",
    tertiaryCTAText: "Schedule Assessment",
    tertiaryCTALink: "#consultation-section",
    trackingPrefix: "cta_enterprise_print"
  },
  {
    id: "access",
    icon: <Lock className="w-6 h-6" />,
    image: "/Enterprise/Visitors_Enterprise.png",
    problemStatement: "Fragmented Access Control Creates Security & Compliance Risks",
    problemContext: "Decentralized access control systems across multiple locations create security vulnerabilities and operational inefficiencies. Without centralized management, you cannot ensure physical security.",
    solutionTitle: "Enterprise Access Control & Visitor Management",
    solutionDescription: "Integrated access control system with centralized management, compliance audit trails, emergency protocols, and seamless integration.",
    features: [
      "Centralized access control across unlimited locations",
      "Multi-factor authentication and biometric options",
      "Visitor management with digital sign-in",
      "Detailed audit trails for compliance",
      "Integration with CCTV and alarm systems",
      "Automatic lockdown and evacuation protocols"
    ],
    impacts: [
      "Ensures 100% compliance with access requirements",
      "Reduces unauthorized access incidents by 95%+",
      "Enables rapid emergency response",
      "Provides complete audit trail for compliance",
      "Centralizes security monitoring across all locations",
      "Integrates with emergency response systems"
    ],
    numbers: [
      { label: "Audit readiness", value: "100%" },
      { label: "Unauthorized access reduction", value: "95%" },
      { label: "Emergency response", value: "Seconds" }
    ],
    caseStudyQuote: "We manage 25 locations with fragmented access systems. C9 implemented integrated access control. Result: 100% compliance and 95% reduction in unauthorized access.",
    caseStudyAuthor: "VP Security, Multi-Location Enterprise (25 locations)",
    primaryCTAText: "Review Access Control Architecture",
    primaryCTALink: "/managed-it",
    secondaryCTAText: "View Case Study",
    secondaryCTALink: "/case-studies/ent-access",
    tertiaryCTAText: "Schedule Assessment",
    tertiaryCTALink: "#consultation-section",
    trackingPrefix: "cta_enterprise_access"
  }
];
