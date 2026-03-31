import { Navbar } from '@/components/layout/Navbar';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { WpFooter } from '@/components/layout/WpFooter';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { ServiceTestimonialKajabi } from '@/components/wordpress/ServiceTestimonialKajabi';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import Hero from '@/components/sections/business-nbn/Hero';
import WhyBusiness from '@/components/sections/business-nbn/WhyBusiness';
import PlanComparison from '@/components/sections/business-nbn/PlanComparison';
import SupportTiers from '@/components/sections/business-nbn/SupportTiers';
import WhatsIncluded from '@/components/sections/business-nbn/WhatsIncluded';
import SpeedGuide from '@/components/sections/business-nbn/SpeedGuide';
import AccreditationBar from '@/components/sections/business-nbn/AccreditationBar';
import FinalCTA from '@/components/sections/business-nbn/FinalCTA';

export const metadata = {
  title: 'Business NBN™ Plans | C9 Communications',
  description:
    'Business NBN™ Enterprise Ethernet with speeds up to 1000/1000 Mbps, 4G LTE failover, enhanced SLA from 4 hours, and a dedicated account manager. NBN™ Accredited Business Adviser.',
  openGraph: {
    title: 'Business NBN™ Plans | C9 Communications',
    description:
      'Enterprise-grade Business NBN™ with guaranteed bandwidth, 4G LTE failover, and eSLA from 4 hours. NBN accredited partner.',
    url: 'https://c9communications.com.au/telco/business-nbn',
  },
};

export default function BusinessNBNPage() {
  return (
    <main className="bg-white" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <WhyBusiness />
      <PlanComparison />
      <SupportTiers />
      <WhatsIncluded />
      <SpeedGuide />
      <AccreditationBar />
      <FinalCTA />
      <WpFAQAndFeedback />
      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="STRATEGIC IT ADVISORY"
          title="The IT partner your business deserves."
          description="Book a 30-minute strategy session with our senior consultants. We'll review your current networking and connection setup — no obligation, just expert advice."
          formTitle="Schedule Strategy Session"
        />
      </section>
      <WpFooter />
    </main>
  );
}
