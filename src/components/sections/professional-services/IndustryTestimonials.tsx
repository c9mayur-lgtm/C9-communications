import React from 'react';
import { ServiceTestimonialKajabi } from '@/components/wordpress/ServiceTestimonialKajabi';

const PROFESSIONAL_SERVICES_TESTIMONIALS = [
  {
    name: "James Harrington",
    role: "Managing Partner, Law Firm",
    content: "C9 has provided us with great product technology, IT consultation and advice that has lifted our telecommunications and network capabilities beyond our expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    metric: "100%",
    metricLabel: "Client Data Secured"
  },
  {
    name: "Amanda Tran",
    role: "Director, Accounting Practice",
    content: "Moving our entire IT and phone system under one C9 agreement saved us significant overhead. One invoice, one contact, no more arguments between our ISP and IT provider.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    metric: "1",
    metricLabel: "Provider for IT & Telco"
  },
  {
    name: "Michael Forsyth",
    role: "CTO, Consulting Group",
    content: "C9 Defense gave us the Essential 8 compliance documentation we needed for our enterprise client audits. It's the difference between winning a contract and losing it.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    metric: "Maturity 3",
    metricLabel: "Essential 8 Certified"
  }
];

export const IndustryTestimonials = () => {
  return (
    <>
      <ServiceTestimonialKajabi testimonials={PROFESSIONAL_SERVICES_TESTIMONIALS} />
    </>
  );
};
