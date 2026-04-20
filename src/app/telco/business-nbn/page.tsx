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
import WhyBusiness from '@/components/sections/business-nbn/WhyBusiness';

export const metadata = {
  title: 'Reliable Small Business nbn | Managed Business Internet | C9',
  description:
    'Stop dealing with slow speeds and dropouts. We help small businesses choose, setup, and manage the right nbn connection for reliable daily operations.',
  openGraph: {
    title: 'Reliable Small Business nbn | Managed Business Internet | C9',
    description:
      'Business-grade nbn that keeps your team working. Dedicated support and managed setup for Australian small businesses.',
    url: 'https://c9communications.com.au/telco/business-nbn',
  },
};

export default function SmallBusinessNbnPage() {
  return (
    <main className="bg-white" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
      <Hero />
      <AccreditationBar />
      <WhyBusiness /> {/* Who this is for */}
      <TheBusinessUpgrade /> {/* Problem section */}
      <UnifiedStack /> {/* Business Impact (repurposed) */}
      <WhyC9 /> {/* Solution section */}
      <PlanComparison /> {/* Decision framework */}
      <SupportTiers /> {/* Trust & Support */}
      <HardwareSpotlight /> {/* Setup Process */}
      <WpCaseStudies 
        title="Real outcomes for local business" 
        eyebrow="SUCCESS STORY"
        articles={[
          {
            tag: 'PROFESSIONAL SERVICES',
            title: 'Accountancy firm stops the dropouts',
            desc: "A small accounting firm with 12 staff was experiencing slow speeds and call dropouts during tax season. C9 reviewed their setup, moved them to a better-suited nbn plan, and optimised their office network. Result: Stable performance, no call interruptions, and a significant boost in team productivity.",
            img: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2000&auto=format&fit=crop',
            videoText: 'Accountancy Success'
          }
        ]}
      />
      <FinalCTA />
      <WpFAQAndFeedback />
      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="GET CONNECTED"
          title="Ready for internet that just works?"
          description="Speak with an expert about your business needs. We'll check your address and recommend the most reliable connection for your team."
          formTitle="Speak to an Expert"
        />
      </section>
    </main>
  );
}
