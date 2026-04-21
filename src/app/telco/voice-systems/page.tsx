import React from 'react';
import type { Metadata } from 'next';
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback';

import { VoiceHero } from '@/components/voice-systems/VoiceHero';
import { VoiceProblems } from '@/components/voice-systems/VoiceProblems';
import { VoiceSystemOverview } from '@/components/voice-systems/VoiceSystemOverview';
import { VoiceDualAudience } from '@/components/voice-systems/VoiceDualAudience';
import { VoiceProcess } from '@/components/voice-systems/VoiceProcess';
import { VoiceHardware } from '@/components/voice-systems/VoiceHardware';
import { VoiceSmartLeadModal } from '@/components/voice-systems/VoiceSmartLeadModal';
import { VoiceConfigurator } from '@/components/voice-systems/VoiceConfigurator';

export const metadata: Metadata = {
  title: 'Voice Systems | Managed Communication Solutions | C9 Communications',
  description: 'C9 Voice gives your business a complete, managed communication system — cloud calling, smart routing, mobile, Microsoft Teams, and a local support team who picks up when you call.',
  openGraph: {
    title: 'Voice Systems | Managed Communication Solutions | C9 Communications',
    description: 'C9 Voice gives your business a complete communication system. Cloud calling, smart routing, mobile, Microsoft Teams, and Australian support.',
    url: 'https://c9communications.com.au/telco/voice-systems',
  }
};

export default function VoiceSystemsPage() {
  return (
    <main className="min-h-screen bg-white managed-it-base">
                  <VoiceSmartLeadModal />
      {/* Hero is now just the content */}
      <VoiceHero />

      {/* Trust Strip */}
      <WpClientTicker />

      {/* Section: The Problem */}
      <VoiceProblems />

      {/* Section: The System (dark) */}
      <VoiceSystemOverview />

      {/* Section: Yealink Hardware Partnership */}
      <VoiceHardware />

      {/* Section: System Configurator (Select what you want) */}
      <VoiceConfigurator />

      {/* Section: SMB vs Enterprise */}
      <VoiceDualAudience />

      {/* Section: How It Works */}
      <VoiceProcess />

      {/* Section: FAQ */}
      <WpFAQAndFeedback />

      {/* Section: Consultation Form */}
      <div id="consultation-section" className="bg-white">
        <WpConsultationForm
          showHeader={false}
          eyebrow="GET YOUR VOICE SYSTEM SORTED"
          title="Start the conversation."
          description="One call with a C9 voice engineer is all it takes to map out your phone system. No commitment, no pressure — just clarity on what's right for your business."
          formTitle="Book a Discovery Call"
        />
      </div>

          </main>
  );
}
