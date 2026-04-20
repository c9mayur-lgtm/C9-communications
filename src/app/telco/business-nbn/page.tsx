import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { ServiceTestimonialKajabi } from '@/components/wordpress/ServiceTestimonialKajabi';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import Hero from '@/components/sections/business-nbn/Hero';
import TheBusinessUpgrade from '@/components/sections/business-nbn/TheBusinessUpgrade';
import HardwareSpotlight from '@/components/sections/business-nbn/HardwareSpotlight';
import PlanComparison from '@/components/sections/business-nbn/PlanComparison';
import SupportTiers from '@/components/sections/business-nbn/SupportTiers';
import FutureProof from '@/components/sections/business-nbn/FutureProof';
import WhyC9 from '@/components/sections/business-nbn/WhyC9';
import WhatsIncluded from '@/components/sections/business-nbn/WhatsIncluded';
import UnifiedStack from '@/components/sections/business-nbn/UnifiedStack';
import SpeedGuide from '@/components/sections/business-nbn/SpeedGuide';
import AccreditationBar from '@/components/sections/business-nbn/AccreditationBar';
import FinalCTA from '@/components/sections/business-nbn/FinalCTA';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';

export const metadata = {
  title: 'Reliable Small Business nbn Plans | C9 Communications',
  description:
    'Reliable Small Business nbn with speeds up to 1000/1000 Mbps, 4G LTE failover, enhanced SLA from 4 hours, and a dedicated account manager. nbn Accredited Business Adviser.',
  openGraph: {
    title: 'Reliable Small Business nbn Plans | C9 Communications',
    description:
      'Business-grade Small Business nbn with guaranteed bandwidth, 4G LTE failover, and eSLA from 4 hours. nbn accredited partner.',
    url: 'https://c9communications.com.au/telco/business-nbn',
  },
};

export default function SmallBusinessNbnPage() {
  return (
    <main className="bg-white" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
                  <Hero />
      <AccreditationBar />
      <TheBusinessUpgrade />
      <PlanComparison />
      <HardwareSpotlight />
      <SupportTiers />
      <WhatsIncluded />
      <WhyC9 />
      <WpCaseStudies 
        title="Success Stories" 
        eyebrow="CLIENT IMPACT"
        articles={[
          {
            tag: 'RETAIL GROUP',
            title: 'Zero Dropouts During Peak Sale Season',
            desc: "A growing retail group switched to C9 after their previous provider left them offline during a major sale. We moved them to a Professional nbn tier with 4G failover, ensuring 100% uptime since.",
            img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1240&auto=format&fit=crop',
            videoText: 'Retail Case Study'
          },
          {
            tag: 'PROFESSIONAL SERVICES',
            title: 'Crystal Clear Voice for Busy Law Firm',
            desc: 'A busy law firm struggled with jittery VoIP calls on standard nbn. C9 implemented a prioritized TC-2 connection, instantly resolving voice quality issues for their 20+ staff.',
            img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop',
            videoText: 'Voice Quality Success'
          },
          {
            tag: 'MANUFACTURING',
            title: 'Seamless Migration for 24/7 Warehouse',
            desc: 'We managed the entire transition for a 24/7 manufacturing site, replacing their legacy copper connection with high-speed nbn fibre without a single minute of downtime.',
            img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
            videoText: 'Migration Deep Dive'
          }
        ]}
      />
      <FutureProof />
      <UnifiedStack />
      <SpeedGuide />
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
          </main>
  );
}
