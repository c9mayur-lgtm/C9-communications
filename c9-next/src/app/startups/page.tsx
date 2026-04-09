import { WpHero } from "@/components/layout/WpHero";
import { WpClientTicker } from "@/components/wordpress/WpClientTicker";
import { WpHighlights } from "@/components/wordpress/WpHighlights";
import { WpSimplifyingIT } from "@/components/wordpress/WpSimplifyingIT";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WpITDepartmentOptions } from "@/components/wordpress/WpITDepartmentOptions";
import { WpIndustryTabs } from "@/components/wordpress/WpIndustryTabs";
import { WpWhyPartner } from "@/components/wordpress/WpWhyPartner";
import { WpConsultationForm } from "@/components/wordpress/WpConsultationForm";
import { WpUnifiedClassification } from "@/components/wordpress/WpUnifiedClassification";

export default function StartupPage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">

      {/* 1. HERO — Sharp, outcome-led headline for founders */}
      <WpHero />

      {/* 2. SOCIAL PROOF — Immediate brand trust via logos */}
      <WpClientTicker />

      {/* 4. VALUE PROPOSITIONS — Quick wins: what they get on Day 1 */}
      <WpHighlights />

      {/* 5. THE "A TO Z" STORY — We handle everything so you don't have to */}
      <WpSimplifyingIT />

      {/* 3. SERVICE BREAKDOWN — Self-select their engagement level */}
      <WpITDepartmentOptions />
      
      {/* Searchable Ecosystem - Startup Focus */}
      <WpUnifiedClassification onlySidebar={true} />

      {/* 6. HOW IT WORKS — Simple 3-step process, removes perceived complexity */}
      <ProcessSection />

      {/* 7. INDUSTRY PROOF — "We've done this in your industry before" */}
      <WpIndustryTabs />

      {/* 8. CREDIBILITY METRICS — Numbers that build trust */}
      <WpWhyPartner />

      {/* 9. LEAD CAPTURE — Final conversion point after full journey */}
      <section id="consultation-section">
        <WpConsultationForm 
          showHeader={false} 
          eyebrow="READY TO LAUNCH?"
          title="Get your full tech setup done before Day One."
          description="Book a free 30-minute setup strategy session with our Australian-based team. We'll map your internet, phones, IT, and security into one seamless plan — ready before you open the doors."
          formTitle="Book My Free Setup Call"
        />
      </section>

    </main>
  );
}
