import React from 'react';
import { ServiceTestimonialKajabi } from '@/components/wordpress/ServiceTestimonialKajabi';

const HELPDESK_TESTIMONIALS = [
  {
    name: "Operations Manager",
    role: "Professional Services Client",
    content: "We used to dread calling IT support. Now our staff actually pick up the phone because they know someone will answer, know who they are, and fix the problem.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    metric: "15 min",
    metricLabel: "Average Response Time"
  },
  {
    name: "IT Manager",
    role: "Healthcare Client",
    content: "The monthly reporting alone changed how we think about IT. We can actually see what's happening and where we're improving — that never existed with our previous provider.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    metric: "100%",
    metricLabel: "SLA Adherence"
  },
  {
    name: "Zoran Radevski",
    role: "C9 Client",
    content: "C9 has provided us with great product technology, IT consultation and advice that has lifted our telecommunications and network capabilities beyond our expectations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    metric: "0",
    metricLabel: "Downtime Incidents"
  }
];

export const HelpdeskTestimonials = () => {
  return (
    <div className="bg-white">
      <ServiceTestimonialKajabi testimonials={HELPDESK_TESTIMONIALS} />
    </div>
  );
};
