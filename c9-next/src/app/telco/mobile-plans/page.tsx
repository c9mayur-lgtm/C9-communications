import { Metadata } from 'next';
import { Navbar } from "@/components/layout/Navbar";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WpFooter } from "@/components/layout/WpFooter";
import { ServiceTestimonialKajabi } from "@/components/wordpress/ServiceTestimonialKajabi";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import Hero from "@/components/sections/mobile-plans/Hero";
import WhyC9Mobile from "@/components/sections/mobile-plans/WhyC9Mobile";
import Plans from "@/components/sections/mobile-plans/Plans";
import WhatsIncluded from "@/components/sections/mobile-plans/WhatsIncluded";
import SingleBillSection from "@/components/sections/mobile-plans/SingleBillSection";
import FinalCTA from "@/components/sections/mobile-plans/FinalCTA";



export const metadata: Metadata = {
  title: "Business Mobile Plans | C9 Communications",
  description: "Business mobile fleet plans for Australian businesses — 4G and 5G on Optus coverage, shared data pools, unlimited calls, and up to $500 international credit. No bill shock with automatic data throttling.",
  openGraph: {
    title: "Business Mobile Plans | C9 Communications",
    description: "Flexible mobile fleet plans with shared data and no bill shock. Up to $500 international credit included. 4G from $149/month, 5G from $179/month.",
    url: "https://c9communications.com.au/telco/mobile-plans",
    type: 'website',
  }
};

export default function MobilePlansPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <WhyC9Mobile />
      <Plans />
      <WhatsIncluded />
      <SingleBillSection />
      <FinalCTA />
      
      {/* Testimonials - Homepage standard */}
      <ServiceTestimonialKajabi />
      {/* Contact Section - Modified consultation form for Mobile Fleet */}
      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="FLEET MANAGEMENT ADVISORY"
          title="Let's structure your business mobile fleet."
          description="Book a strategy session with our telco consultants. We'll review your current provider, data consumption, and hardware needs — no obligation, just expert advice."
          formTitle="Schedule Strategy Session"
        />
      </section>
      <WpFooter />
    </main>
  );
}
