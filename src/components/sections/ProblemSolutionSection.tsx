// components/sections/ProblemSolutionSection.tsx

import React from 'react';
import { Wifi, Radio, Phone, Camera, Printer, Laptop, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import ProblemSolutionCard, { OfferingData } from './ProblemSolutionCard';
import { trackEvent } from '@/lib/analytics';
import useEmblaCarousel from 'embla-carousel-react';

const OFFERINGS_DATA: OfferingData[] = [
  {
    id: "internet",
    icon: <Wifi className="w-6 h-6" />,
    image: "/SMB/Internet_SMB.png",
    problemStatement: "Your internet is unreliable. When it goes down, your business stops.",
    problemContext: "Internet outages cost you revenue immediately. Customers can't reach you. Staff can't work. You're dependent on a single ISP. No backup when things fail.",
    solutionTitle: "Reliable Internet with Redundancy",
    solutionDescription: "Dual internet connections with automatic failover, 99.9% uptime SLA guarantee, and proactive monitoring 24/7.",
    features: [
      "Dual internet connections (primary + backup)",
      "Automatic failover (zero downtime)",
      "99.9% uptime SLA guarantee",
      "Proactive monitoring 24/7",
      "15-minute response time for issues",
      "Carrier-grade reliability"
    ],
    impacts: [
      "Zero unplanned downtime",
      "Revenue protection",
      "Customer confidence",
      "Staff productivity maintained",
      "Predictable, reliable operations",
      "Peace of mind"
    ],
    numbers: [
      { label: "Industry average uptime", value: "95%" },
      { label: "C9 guarantee", value: "99.9%" },
      { label: "Downtime prevented per year", value: "9+ hours" }
    ],
    caseStudyQuote: "We were losing $2,000 per hour during internet outages. C9 set up dual connections with automatic failover. We haven't had a single outage in 18 months.",
    caseStudyAuthor: "Operations Manager, Retail Business (12 locations)",
    primaryCTAText: "See How We Ensure Internet Reliability",
    primaryCTALink: "/telco",
    secondaryCTAText: "View Internet Case Study",
    secondaryCTALink: "/case-studies/smb-internet",
    tertiaryCTAText: "Schedule Consultation",
    tertiaryCTALink: "#consultation-section",
    trackingPrefix: "cta_internet"
  },
  {
    id: "networking",
    icon: <Radio className="w-6 h-6" />,
    image: "/SMB/Networking_SMB.png",
    problemStatement: "Your WiFi is slow and unreliable. Staff can't connect. Guests complain.",
    problemContext: "WiFi drops during peak hours. Staff productivity suffers. Guest experience is poor. You have dead zones in the office. Multiple WiFi networks causing confusion. Security concerns with open networks.",
    solutionTitle: "Enterprise-Grade Networking & WiFi",
    solutionDescription: "Mesh WiFi coverage with no dead zones, gigabit-speed wired networking, automatic load balancing, and separate guest WiFi.",
    features: [
      "Mesh WiFi coverage (no dead zones)",
      "Gigabit-speed wired networking",
      "Automatic load balancing",
      "Guest WiFi (separate from business)",
      "Real-time network monitoring",
      "Proactive optimization"
    ],
    impacts: [
      "Fast, reliable WiFi everywhere",
      "Staff productivity increases",
      "Guest satisfaction improves",
      "Network security enhanced",
      "No more WiFi complaints",
      "Professional appearance"
    ],
    numbers: [
      { label: "Average WiFi speed improvement", value: "3-5x faster" },
      { label: "Coverage increase", value: "100% (no dead zones)" },
      { label: "Staff productivity gain", value: "15-20%" },
      { label: "Guest satisfaction", value: "+40%" }
    ],
    caseStudyQuote: "Our retail store had WiFi dead zones and constant dropouts. C9 installed mesh WiFi with guest network. Customer complaints about WiFi dropped 90%. Staff can now work from anywhere in the store.",
    caseStudyAuthor: "Store Manager, Retail Business",
    primaryCTAText: "See How We Improve Your WiFi",
    primaryCTALink: "/managed-it",
    secondaryCTAText: "View WiFi Case Study",
    secondaryCTALink: "/case-studies/smb-networking",
    tertiaryCTAText: "Schedule Network Assessment",
    tertiaryCTALink: "#consultation-section",
    trackingPrefix: "cta_networking"
  },
  {
    id: "phone",
    icon: <Phone className="w-6 h-6" />,
    image: "/SMB/Phone_System_SMB.png",
    problemStatement: "Your phone system is outdated. Calls drop. Voicemail is unreliable. Scaling is expensive.",
    problemContext: "Old PBX system is hard to manage. Adding phone lines is expensive and slow. Calls drop or don't connect properly. Voicemail messages get lost. Remote staff can't use the system properly. No integration with other business tools. High maintenance costs.",
    solutionTitle: "Modern Cloud Phone System",
    solutionDescription: "Cloud-based phone system with unlimited lines, advanced call routing, voicemail-to-email transcription, and mobile app for work from anywhere.",
    features: [
      "Cloud-based phone system (no hardware)",
      "Unlimited phone lines and extensions",
      "Advanced call routing and IVR",
      "Voicemail-to-email transcription",
      "Mobile app (work from anywhere)",
      "Call recording and analytics",
      "Integration with business tools",
      "Automatic failover to mobile"
    ],
    impacts: [
      "Professional call handling",
      "Easier to scale (add users instantly)",
      "Remote staff fully integrated",
      "Better customer service",
      "Lower operational costs",
      "Improved efficiency",
      "Better compliance (call recording)"
    ],
    numbers: [
      { label: "Setup time", value: "1 day (vs 2-3 weeks)" },
      { label: "Cost per line", value: "60% cheaper" },
      { label: "Scaling cost per new line", value: "$0 (vs $500-1000)" },
      { label: "Call quality uptime", value: "99.9%" },
      { label: "Time to add new user", value: "5 minutes" }
    ],
    caseStudyQuote: "We moved from an old PBX system to C9's cloud phone system. Adding new staff used to take weeks and cost $1,000 per line. Now it takes 5 minutes and costs nothing. Our remote team has full access to the phone system.",
    caseStudyAuthor: "HR Manager, Professional Services Firm",
    primaryCTAText: "See How We Modernize Your Phone System",
    primaryCTALink: "/telco",
    secondaryCTAText: "View Phone System Case Study",
    secondaryCTALink: "/case-studies/smb-phone",
    tertiaryCTAText: "Schedule Phone System Demo",
    tertiaryCTALink: "#consultation-section",
    trackingPrefix: "cta_phone"
  },
  {
    id: "cctv",
    icon: <Camera className="w-6 h-6" />,
    image: "/SMB/CCTV_SMB.png",
    problemStatement: "You can't see what's happening on your site. Theft happens. You have no proof.",
    problemContext: "Theft and shrinkage is a constant problem. You don't know what's happening after hours. Disputes with staff or customers (no evidence). Insurance claims are hard to prove. You're not compliant with security standards. Old CCTV system is outdated and unreliable. No remote access to footage.",
    solutionTitle: "Professional CCTV with Cloud Storage",
    solutionDescription: "HD/4K CCTV cameras with cloud-based storage, remote viewing from anywhere, motion detection alerts, and 30-day rolling storage.",
    features: [
      "HD/4K CCTV cameras (indoor & outdoor)",
      "Cloud-based storage (always accessible)",
      "Remote viewing from anywhere",
      "Motion detection and alerts",
      "30-day rolling storage",
      "Night vision capability",
      "Integration with access control",
      "Professional installation"
    ],
    impacts: [
      "Complete visibility of your site",
      "Theft deterrent (cameras visible)",
      "Evidence for disputes",
      "Insurance claim support",
      "Staff accountability",
      "Compliance ready",
      "Peace of mind"
    ],
    numbers: [
      { label: "Theft reduction", value: "60-80%" },
      { label: "Insurance claim success rate", value: "+40%" },
      { label: "Remote access", value: "24/7 from anywhere" },
      { label: "Storage capacity", value: "30 days continuous" },
      { label: "Resolution options", value: "1080p to 4K" }
    ],
    caseStudyQuote: "We installed CCTV across our retail stores. Theft incidents dropped 75% in the first month. We've used the footage to resolve 12 customer disputes. The cameras have paid for themselves 5 times over.",
    caseStudyAuthor: "Store Manager, Multi-Location Retail",
    primaryCTAText: "See How We Protect Your Site",
    primaryCTALink: "/managed-it",
    secondaryCTAText: "View Security Case Study",
    secondaryCTALink: "/case-studies/smb-cctv",
    tertiaryCTAText: "Schedule Security Assessment",
    tertiaryCTALink: "#consultation-section",
    trackingPrefix: "cta_cctv"
  },
  {
    id: "print",
    icon: <Printer className="w-6 h-6" />,
    image: "/SMB/Print_Solution_SMB.png",
    problemStatement: "Your printers are always breaking down. Toner costs are out of control. Staff wastes time on printing issues.",
    problemContext: "Multiple old printers scattered around. Constant paper jams and toner issues. Staff wastes 30 minutes/week on printer problems. Toner costs are unpredictable. No visibility into print usage. Security concerns (sensitive documents left in printer). Maintenance contracts are expensive.",
    solutionTitle: "Managed Print Services",
    solutionDescription: "Modern multifunction printers with automatic toner replenishment, proactive maintenance, print management software, and predictable monthly costs.",
    features: [
      "Modern multifunction printers (print, copy, scan)",
      "Automatic toner replenishment",
      "Proactive maintenance and support",
      "Print management software (track usage)",
      "Secure printing (PIN required)",
      "Mobile printing capability",
      "Predictable monthly cost",
      "4-hour response time for issues"
    ],
    impacts: [
      "80% fewer printer issues",
      "Staff productivity increases",
      "Printing costs reduce 30-40%",
      "Predictable monthly budget",
      "Better security",
      "Reduced environmental impact",
      "Simplified management"
    ],
    numbers: [
      { label: "Printer downtime reduction", value: "80%" },
      { label: "Cost per page reduction", value: "30-40%" },
      { label: "Staff time saved per week", value: "2 hours" },
      { label: "Maintenance response", value: "4 hours" },
      { label: "Uptime guarantee", value: "99.5%" }
    ],
    caseStudyQuote: "We had 5 old printers constantly breaking down. C9 replaced them with 2 modern multifunction printers. Our printing costs dropped 35%. Staff no longer spends time fixing printer jams.",
    caseStudyAuthor: "Office Manager, Professional Services",
    primaryCTAText: "See How We Simplify Printing",
    primaryCTALink: "/managed-it",
    secondaryCTAText: "View Print Solutions Case Study",
    secondaryCTALink: "/case-studies/smb-print",
    tertiaryCTAText: "Calculate Print Savings",
    tertiaryCTALink: "#consultation-section",
    trackingPrefix: "cta_print"
  },
  {
    id: "workplace",
    icon: <Laptop className="w-6 h-6" />,
    image: "/SMB/Modern_Workplace_SMB.png",
    problemStatement: "Your team uses outdated tools. Collaboration is difficult. Remote staff feel disconnected.",
    problemContext: "Staff uses personal devices for work (security risk). No unified communication platform. Remote staff struggle to collaborate. Data is scattered across multiple systems. Cybersecurity is weak. Staff can't work from anywhere. Onboarding new staff is slow.",
    solutionTitle: "Modern Workplace Tools & Management",
    solutionDescription: "Unified device management, cloud collaboration tools, endpoint security, mobile device management, and automatic updates with data backup.",
    features: [
      "Unified device management (Windows, Mac, mobile)",
      "Cloud collaboration tools (Teams, SharePoint, etc.)",
      "Endpoint security and threat protection",
      "Mobile device management",
      "Automatic software updates",
      "Data backup and recovery",
      "Single sign-on (SSO)",
      "Compliance and audit ready"
    ],
    impacts: [
      "Staff productivity increases 20-30%",
      "Better collaboration (remote & office)",
      "Security improved dramatically",
      "Faster onboarding (1 day vs 1 week)",
      "Reduced IT support tickets",
      "Compliance ready",
      "Future-proof infrastructure"
    ],
    numbers: [
      { label: "Productivity improvement", value: "20-30%" },
      { label: "Onboarding time reduction", value: "1 week to 1 day" },
      { label: "IT support tickets reduced", value: "40%" },
      { label: "Security incidents reduced", value: "70%" },
      { label: "Remote work capability", value: "100% of staff" }
    ],
    caseStudyQuote: "We implemented Modern Workplace tools across our team. Remote staff now collaborate as effectively as office staff. Onboarding new hires went from 1 week to 1 day. Our IT person went from firefighting to strategy.",
    caseStudyAuthor: "IT Manager, Professional Services Firm",
    primaryCTAText: "See How We Empower Your Team",
    primaryCTALink: "/modern-workplace",
    secondaryCTAText: "View Workplace Case Study",
    secondaryCTALink: "/case-studies/smb-modern-workplace",
    tertiaryCTAText: "Schedule Workplace Assessment",
    tertiaryCTALink: "#consultation-section",
    trackingPrefix: "cta_workplace"
  },
  {
    id: "visitor",
    icon: <Users className="w-6 h-6" />,
    image: "/SMB/Visitor_Solution_SMB.png",
    problemStatement: "You can't control who accesses your site. Visitors cause disruptions. You have no record of who was here.",
    problemContext: "Unauthorized people access restricted areas. Visitors disrupt operations. No record of who visited and when. Safety and security concerns. Compliance issues (who has access?). Manual sign-in process is slow. No integration with other systems.",
    solutionTitle: "Visitor Management & Access Control",
    solutionDescription: "Digital visitor sign-in system with badge printing, access control integration, automated notifications, and visitor history reporting.",
    features: [
      "Digital visitor sign-in system",
      "Badge printing and access control",
      "Integration with CCTV and alarms",
      "Automated notifications",
      "Visitor history and reporting",
      "Restricted area access control",
      "Mobile check-in capability",
      "Emergency lockdown capability"
    ],
    impacts: [
      "Complete access control",
      "Safety and security improved",
      "Compliance ready",
      "Professional appearance",
      "Faster visitor check-in",
      "Audit trail for all visitors",
      "Integration with security systems"
    ],
    numbers: [
      { label: "Check-in time reduction", value: "5 min to 30 sec" },
      { label: "Unauthorized access reduction", value: "95%" },
      { label: "Compliance audit readiness", value: "100%" },
      { label: "Visitor data accuracy", value: "100%" },
      { label: "CCTV integration", value: "Seamless" }
    ],
    caseStudyQuote: "We implemented visitor management at our office. Check-in time went from 5 minutes to 30 seconds. We now have a complete audit trail of all visitors. Our compliance officer is happy. Our staff feels safer.",
    caseStudyAuthor: "Office Manager, Professional Services Firm",
    primaryCTAText: "See How We Manage Visitor Access",
    primaryCTALink: "/managed-it",
    secondaryCTAText: "View Visitor Solutions Case Study",
    secondaryCTALink: "/case-studies/smb-visitor",
    tertiaryCTAText: "Schedule Access Control Demo",
    tertiaryCTALink: "#consultation-section",
    trackingPrefix: "cta_visitor"
  }
];

interface ProblemSolutionSectionProps {
  data?: OfferingData[];
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
}

export default function ProblemSolutionSection({
  data = OFFERINGS_DATA,
  eyebrow = "SOLUTIONS TO YOUR PROBLEMS",
  title = <>Your Infrastructure Challenges, <span className="text-[#5D00D6]">Solved.</span></>,
  description = "We understand the pain points of growing small businesses. Here's how we solve each one—with proven results and single-vendor accountability."
}: ProblemSolutionSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  });

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <p className="c9-eyebrow mb-3">
              {eyebrow}
            </p>
            <h2 className="c9-section-heading mb-6">
              {title}
            </h2>
            <p className="c9-body">
              {description}
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-none border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all shadow-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-none border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-[#5D00D6] hover:text-[#5D00D6] transition-all shadow-sm"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>

          </div>
        </div>

        {/* Carousel Container */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-6 md:gap-8">
            {data.map((offering) => (
              <div key={offering.id} className="embla__slide flex-[0_0_90%] md:flex-[0_0_80%] lg:flex-[0_0_48%] min-w-0">
                <ProblemSolutionCard 
                  offering={offering}
                  onCTAClick={trackEvent}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
