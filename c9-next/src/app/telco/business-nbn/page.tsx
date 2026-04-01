import { Navbar } from '@/components/layout/Navbar';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { WpFooter } from '@/components/layout/WpFooter';
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
      <AccreditationBar />
      <TheBusinessUpgrade />
      <PlanComparison />
      <HardwareSpotlight />
      <SupportTiers />
      <WhatsIncluded />
      <WhyC9 />
      <WpCaseStudies 
        title="Technical Insights" 
        eyebrow="NBN™ CORE CLINIC"
        articles={[
          {
            tag: 'NETWORK ARCHITECTURE',
            title: 'Fibre vs. Copper: The Real Business Impact',
            desc: "Understand why symmetrical fibre (EE) outperforms standard HFC/FTTN in a professional workplace environment — focusing on latency and packet prioritization.",
            img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1240&auto=format&fit=crop',
            videoText: 'Technical Deep Dive'
          },
          {
            tag: 'SERVICE GUARANTEE',
            title: 'Understanding eSLA restoration targets',
            desc: 'A complete breakdown of 4-hour, 8-hour, and 12-hour enhanced SLAs and why they are critical for organizations where downtime is unacceptable.',
            img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop',
            videoText: 'Service Level Breakdown'
          },
          {
            tag: 'BUSINESS CONTINUITY',
            title: '4G Failover: How it actually works',
            desc: 'Take a look under the hood of C9’s automatic failover architecture and how it maintains zero-handoff connectivity during primary link outages.',
            img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop',
            videoText: 'Redundancy Explained'
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
      <WpFooter />
    </main>
  );
}
