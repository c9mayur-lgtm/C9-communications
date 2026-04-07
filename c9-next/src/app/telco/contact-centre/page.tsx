import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { WpFooter } from '@/components/layout/WpFooter';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { Testimonials } from '@/components/sections/Testimonials';

// Contact Centre Specific Sections
import ContactCentreHero from '@/components/sections/contact-centre/ContactCentreHero';
import OmniChannel from '@/components/sections/contact-centre/OmniChannel';
import TransformSection from '@/components/sections/contact-centre/TransformSection';
import ContactCentreFeatures from '@/components/sections/contact-centre/ContactCentreFeatures';
import Analytics from '@/components/sections/contact-centre/Analytics';
import Integrations from '@/components/sections/contact-centre/Integrations';
import RelatedServices from '@/components/sections/contact-centre/RelatedServices';
import ContactCentreCta from '@/components/sections/contact-centre/ContactCentreCta';

export const metadata: Metadata = {
  title: "Contact Centre Solutions | C9 Communications",
  description: "C9X Omni Channel Contact Centre — voice, chat, social, and app interactions in one platform. PCI-DSS payments, CRM integration, real-time analytics, and workforce management. Hosted on Microsoft Azure.",
  openGraph: {
    url: "https://c9communications.com.au/telco/contact-centre",
    title: "Contact Centre Solutions | C9 Communications",
    description: "C9X Omni Channel Contact Centre — voice, chat, social, and app interactions in one platform. Hosted on Microsoft Azure.",
  }
};

export default function ContactCentrePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Breadcrumbs />
      <ContactCentreHero />
      <WpClientTicker />
      <OmniChannel />
      <TransformSection />
      <ContactCentreFeatures />
      <Analytics />
      <Integrations />
      <RelatedServices />
      <ContactCentreCta />
      <WpConsultationForm />
      <WpFooter />
    </div>
  );
}
