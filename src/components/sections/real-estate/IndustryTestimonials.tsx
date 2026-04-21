import React from 'react';
import { ServiceTestimonialKajabi } from '@/components/wordpress/ServiceTestimonialKajabi';

const REAL_ESTATE_TESTIMONIALS = [
  {
    name: "Jameson Burke",
    role: "Principal, Eastern Suburbs Agency",
    content: "C9's cloud phone system and mobile agent support has transformed our service level. Our agents can move seamlessly from the office to an open home without ever missing a client call.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    metric: "0",
    metricLabel: "Missed Calls"
  },
  {
    name: "Catherine Low",
    role: "General Manager, Multi-site Group",
    content: "We manage 5 locations across two states. C9 has brought every office under a single standard with centralized security. It's the most reliable IT environment we've ever operated.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    metric: "5",
    metricLabel: "Offices Unified"
  },
  {
    name: "Robert Vance",
    role: "Compliance & Risk Officer",
    content: "C9 Defense gives us the documented controls we need to meet our professional standards obligations. Their focus on client data privacy is total.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    metric: "100%",
    metricLabel: "Privacy Act Compliant"
  }
];

export const IndustryTestimonials = () => {
  return (
    <>
      <ServiceTestimonialKajabi testimonials={REAL_ESTATE_TESTIMONIALS} />
    </>
  );
};
