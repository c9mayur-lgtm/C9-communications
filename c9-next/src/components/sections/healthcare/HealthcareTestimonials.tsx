import React from 'react';
import { ServiceTestimonialKajabi } from '@/components/wordpress/ServiceTestimonialKajabi';

const HEALTHCARE_TESTIMONIALS = [
  {
    name: "Zoran Radevski",
    role: "Healthcare Client",
    content: "C9 has provided us with great product technology, IT consultation and advice that has lifted our telecommunications and network capabilities beyond our expectations.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed1228229?auto=format&fit=crop&q=80&w=800", // Modern healthcare building/interior
    metric: "100%",
    metricLabel: "Uptime Achieved"
  },
  {
    name: "Sarah Jenkins",
    role: "Clinic Network Manager",
    content: "Reliability is non-negotiable in healthcare. Since moving to C9, our multi-site practice has experienced zero downtime with their failover solutions. The support team actually understands clinical workflows.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800", // Medical setting image
    metric: "0",
    metricLabel: "Downtime Incidents"
  },
  {
    name: "Dr. James Chen",
    role: "Specialist Director",
    content: "Implementing the Essential 8 compliance framework was daunting, but C9 Defense made it completely manageable. We now have documentation and continuous monitoring that passes every compliance audit.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800", // Doctor/staff image
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
