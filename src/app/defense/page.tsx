import type { Metadata } from 'next';
import { DefenseNavbar } from '@/components/defense/DefenseNavbar';
import { DefenseFooter } from '@/components/defense/DefenseFooter';
import {
  DefenseHero,
  CyberChallenge,
  EssentialFramework,
  SecurityPath,
  Certifications,
  Methodology,
  DefenseContactForm,
} from '@/components/defense/DefenseContent';

export const metadata: Metadata = {
  title: 'C9 Defense | Essential 8 Cybersecurity for Australian Organisations',
  description:
    'Enterprise-grade security programs for Australian organisations combining Essential 8 compliance, continuous defence operations, and tested recovery assurance.',
};

export default function DefensePage() {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      {/* Background Vertical Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="max-w-[1280px] mx-auto h-full px-6 relative">
          <div className="absolute left-6 top-0 w-px h-full bg-white/5" />
          <div className="absolute right-6 top-0 w-px h-full bg-white/5" />
        </div>
      </div>

      <DefenseNavbar />
      
      <main className="relative z-10">
        <DefenseHero />
        <CyberChallenge />
        <EssentialFramework />
        <SecurityPath />
        <Certifications />
        <Methodology />
        <DefenseContactForm />
      </main>

      <DefenseFooter />
    </div>
  );
}
