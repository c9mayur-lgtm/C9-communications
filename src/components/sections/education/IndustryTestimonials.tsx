import React from 'react';
import { ServiceTestimonialKajabi } from '@/components/wordpress/ServiceTestimonialKajabi';

const EDUCATION_TESTIMONIALS = [
  {
    name: "Dr. Mark Richardson",
    role: "Campus Operations Manager",
    content: "C9 has provided us with great product technology, IT consultation and advice that has lifted our telecommunications and network capabilities beyond our expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    metric: "100%",
    metricLabel: "Campus Connectivity"
  },
  {
    name: "Helena Smith",
    role: "IT Coordinator, Regional TAFE",
    content: "Managing a fleet of 500+ student devices used to be a full-time job for two people. With C9 managing our Intune environment, it takes our team less than an hour a day. The efficiency is incredible.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    metric: "500+",
    metricLabel: "Devices Managed"
  },
  {
    name: "Professor Andrew Vo",
    role: "Director of Digital Learning",
    content: "C9 Defense provided the security maturity assessment we needed to apply for a major government research grant. Their platform is easy to use and the documentation is faultless.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    metric: "Maturity 3",
    metricLabel: "Essential 8 Verified"
  }
];

export const IndustryTestimonials = () => {
  return (
    <>
      <ServiceTestimonialKajabi testimonials={EDUCATION_TESTIMONIALS} />
    </>
  );
};
