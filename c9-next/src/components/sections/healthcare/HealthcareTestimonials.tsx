import React from 'react';
import { ServiceTestimonialKajabi } from '@/components/wordpress/ServiceTestimonialKajabi';

const HEALTHCARE_TESTIMONIALS = [
  {
    name: "Zoran Radevski",
    role: "Healthcare Client",
    content: "C9 has provided us with great product technology, IT consultation and advice that has lifted our telecommunications and network capabilities beyond our expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    metric: "100%",
    metricLabel: "Uptime Achieved"
  },
  {
    name: "Sarah Jenkins",
    role: "Clinic Network Manager",
    content: "Reliability is non-negotiable in healthcare. Since moving to C9, our multi-site practice has experienced zero downtime with their failover solutions. The support team actually understands clinical workflows.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    metric: "0",
    metricLabel: "Downtime Incidents"
  },
  {
    name: "Dr. James Chen",
    role: "Specialist Director",
    content: "Implementing the Essential 8 compliance framework was daunting, but C9 Defense made it completely manageable. We now have documentation and continuous monitoring that passes every compliance audit.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    metric: "Maturity 3",
    metricLabel: "Essential 8 Verified"
  }
];

export const HealthcareTestimonials = () => {
  return (
    <>
      <ServiceTestimonialKajabi testimonials={HEALTHCARE_TESTIMONIALS} />
    </>
  );
};
