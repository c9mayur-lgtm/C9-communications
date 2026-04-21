import React from 'react';
import { ServiceTestimonialKajabi } from '@/components/wordpress/ServiceTestimonialKajabi';

const RETAIL_TESTIMONIALS = [
  {
    name: "Michael Chen",
    role: "IT Director, National Retail Chain",
    content: "C9 has provided us with great product technology, IT consultation and advice that has lifted our telecommunications and network capabilities beyond our expectations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    metric: "99.99%",
    metricLabel: "Uptime Across 40 Stores"
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager, Boutique Retailer",
    content: "The 4G failover C9 implemented has saved us twice this week alone. While the rest of the street was without internet and couldn't take card payments, we stayed fully operational.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    metric: "0",
    metricLabel: "Trading Hours Lost"
  },
  {
    name: "Mark O'Connor",
    role: "Chief Financial Officer",
    content: "C9 Defense manages our PCI-DSS compliance evidence automatically. It's reduced our audit preparation time from weeks to hours, allowing our team to focus on growth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    metric: "75%",
    metricLabel: "Audit Prep Reduction"
  }
];

export const IndustryTestimonials = () => {
  return (
    <>
      <ServiceTestimonialKajabi testimonials={RETAIL_TESTIMONIALS} />
    </>
  );
};
