import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import Hero from '@/components/sections/business-nbn/Hero';
import TheBusinessUpgrade from '@/components/sections/business-nbn/TheBusinessUpgrade';
import HardwareSpotlight from '@/components/sections/business-nbn/HardwareSpotlight';
import PlanComparison from '@/components/sections/business-nbn/PlanComparison';
import SupportTiers from '@/components/sections/business-nbn/SupportTiers';
import WhyC9 from '@/components/sections/business-nbn/WhyC9';
import UnifiedStack from '@/components/sections/business-nbn/UnifiedStack';
import AccreditationBar from '@/components/sections/business-nbn/AccreditationBar';
import FinalCTA from '@/components/sections/business-nbn/FinalCTA';
import { WpCaseStudies } from '@/components/wordpress/WpCaseStudies';
import WhyBusiness from '@/components/sections/business-nbn/WhyBusiness';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Reliable Small Business nbn | Fully Managed Business Internet | C9',
  description:
    'We help you choose, set up, and manage the right nbn connection for your business — with realistic performance and ongoing support.',
};

export default function SmallBusinessNbnPage() {
  return (
    <main className="bg-white" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
      <Hero />
      <AccreditationBar />
      <WhyBusiness /> {/* Section 2: Who this is for */}
      <TheBusinessUpgrade /> {/* Section 3: Real Problem */}
      <WhyC9 /> {/* Section 4: Solution */}
      <PlanComparison /> {/* Section 5: Decision Framework */}
      <UnifiedStack /> {/* Section 6: Business Impact */}
      <SupportTiers /> {/* Section 7: Support & Trust */}
      <HardwareSpotlight /> {/* Section 8: Setup Process */}
      
      {/* Section 9: Real Use Case */}
      <WpCaseStudies 
        title="Real outcomes for local business" 
        eyebrow="SUCCESS STORY"
        articles={[
          {
            tag: 'SMALL BUSINESS',
            title: '15-staff office stops the dropouts',
            desc: "A small business with 15 staff was experiencing slow speeds and call dropouts. C9 reviewed their current connection, recommended a suitable nbn plan, and optimised their internal setup. Result: Improved stability, better call quality, and consistent performance across the team.",
            img: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2000&auto=format&fit=crop',
            videoText: 'Stability Restored',
            href: '/case-studies/retail-pos-stabilisation'
          }
        ]}
      />

      {/* Section 10: Service Links (Secondary) */}
      <section className="py-12 bg-gray-50 border-y border-gray-100 px-6">
        <div className="container mx-auto max-w-[1240px]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <a href="/voice/microsoft-teams-calling" className="text-[14px] font-bold text-[#1A1A2E] hover:text-[#5D00D6] flex items-center gap-2 group transition-colors">
              Explore Business Phones <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-[#5D00D6]" />
            </a>
            <a href="/managed-it/network-solutions" className="text-[14px] font-bold text-[#1A1A2E] hover:text-[#5D00D6] flex items-center gap-2 group transition-colors">
              See Managed IT Services <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-[#5D00D6]" />
            </a>
            <a href="/managed-it/network-solutions" className="text-[14px] font-bold text-[#1A1A2E] hover:text-[#5D00D6] flex items-center gap-2 group transition-colors">
              View Cybersecurity <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-[#5D00D6]" />
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
      
      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="GET CONNECTED"
          title="Ready for internet that just works?"
          description="Speak with an expert about your business needs. We'll check your address and recommend the most reliable connection for your team."
          formTitle="Speak to an Expert"
        />
      </section>
      <WpFAQAndFeedback />
    </main>
  );
}
