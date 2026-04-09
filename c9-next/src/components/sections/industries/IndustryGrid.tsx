import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Stethoscope, 
  Briefcase, 
  Heart, 
  GraduationCap, 
  ShoppingCart, 
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Network
} from "lucide-react";

const fontStyle = { fontFamily: '"Proxima Nova", sans-serif' };

const industries = [
  {
    title: "Healthcare",
    description: "Secure, compliant IT and connectivity systems built for medical practices, clinics, and health networks.",
    icon: Stethoscope,
    path: "/industries/healthcare",
    color: "#5D00D6",
    features: ["Patient Data Privacy", "Secure Telehealth", "Clinical Software Support"]
  },
  {
    title: "Professional Services",
    description: "Modern Workplace solutions that enable consultants, accountants, and lawyers to work securely from anywhere.",
    icon: Briefcase,
    path: "/industries/professional-services",
    color: "#5D00D6",
    features: ["Secure Remote Workspace", "M365 Management", "Strategic IT Advisory"]
  },
  {
    title: "Non-Profit",
    description: "Technology that stretches your budget further while securing your mission and professionalising your operations.",
    icon: Heart,
    path: "/industries/non-profit",
    color: "#5D00D6",
    features: ["Budget Optimization", "Essential 8 Security", "Donor Data Protection"]
  },
  {
    title: "Education",
    description: "Campus-wide network management and student data protection for Australian education providers.",
    icon: GraduationCap,
    path: "/industries/education",
    color: "#5D00D6",
    features: ["School-wide Wi-Fi", "Student Data Privacy", "Device Management"]
  },
  {
    title: "Retail",
    description: "Reliable POS connectivity and multi-site IT support for fast-moving Australian retail businesses.",
    icon: ShoppingCart,
    path: "/industries/retail",
    color: "#5D00D6",
    features: ["Multi-site Connectivity", "POS Support & Failover", "Store Network Security"]
  },
  {
    title: "Real Estate",
    description: "Managed IT and telco from the office to the open home — keeping agents connected and client data protected.",
    icon: Building2,
    path: "/industries/real-estate",
    color: "#5D00D6",
    features: ["Agent Mobility", "Shopfront Displays", "Client Data Protection"]
  }
];

export default function IndustryGrid() {
  return (
    <section id="industry-grid" className="py-20 md:py-32 bg-[#FDFDFF]">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-gray-200">
          {industries.map((industry, i) => (
            <Link 
              key={i} 
              href={industry.path}
              className="group bg-white p-10 md:p-12 border-r border-b border-gray-200 flex flex-col h-full"
            >
              <div className="mb-8 text-[#5D00D6]">
                <industry.icon size={40} strokeWidth={1.5} />
              </div>

              <h3 className="c9-section-heading mb-4" style={fontStyle}>
                {industry.title}
              </h3>
              
              <p className="text-gray-500 text-[18px] leading-relaxed mb-8 flex-grow font-normal" style={fontStyle}>
                {industry.description}
              </p>

              <div className="flex flex-col gap-3 mb-10 pt-6 border-t border-gray-100">
                {industry.features.map((feature, fi) => (
                  <div key={fi} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5D00D6]" />
                    <span className="text-[14px] font-bold text-slate-500 tracking-tight" style={fontStyle}>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-2 text-[#5D00D6] font-bold text-[14px] uppercase tracking-widest group-hover:gap-4 transition-all duration-300" style={fontStyle}>
                Explore Industry <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
