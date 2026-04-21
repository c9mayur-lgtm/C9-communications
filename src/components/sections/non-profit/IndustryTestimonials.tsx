import React from 'react';
import { ServiceTestimonialKajabi } from '@/components/wordpress/ServiceTestimonialKajabi';

const NON_PROFIT_TESTIMONIALS = [
  {
    name: "Sandra Okafor",
    role: "CEO, Community Services Organisation",
    content: "C9 has provided us with great product technology, IT consultation and advice that has lifted our telecommunications and network capabilities beyond our expectations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    metric: "40%",
    metricLabel: "IT Budget Saved"
  },
  {
    name: "David Nguyen",
    role: "Operations Manager, NFP Health Service",
    content: "Moving to C9 gave us a single managed services partner for IT and Telco. The Microsoft non-profit licensing support alone saved us thousands. One invoice, one contact — it's exactly what we needed.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    metric: "1",
    metricLabel: "Provider for IT & Telco"
  },
  {
    name: "Rachel Kim",
    role: "IT Lead, NFP Advocacy Group",
    content: "C9 Defense gave us the Essential 8 documentation we needed to satisfy a major grant's IT requirements. Without it, we may not have received the funding.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    metric: "Maturity 2",
    metricLabel: "Essential 8 Achieved"
  }
];

export const IndustryTestimonials = () => {
  return (
    <>
      <ServiceTestimonialKajabi testimonials={NON_PROFIT_TESTIMONIALS} />
    </>
  );
};
