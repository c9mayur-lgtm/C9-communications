import type { Metadata } from 'next';
import { LuminaNavbar } from '@/components/lumina/LuminaNavbar';
import { LuminaFooter } from '@/components/lumina/LuminaFooter';
import {
  LuminaHero,
  LuminaCategories,
  LuminaCMS,
  LuminaIndustries,
  LuminaContact,
} from '@/components/lumina/LuminaContent';

export const metadata: Metadata = {
  title: 'C9 Lumina | Premium Digital Signage & Content Management Solutions',
  description:
    'End-to-end digital signage ecosystems for Australian businesses. From premium 24/7 displays to dynamic cloud-based content management.',
};

export default function LuminaPage() {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden font-sans">
      {/* Background Framing Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="max-w-[1280px] mx-auto h-full px-6 relative">
          <div className="absolute left-6 top-0 w-px h-full bg-[#BF2F70]/10" />
          <div className="absolute right-6 top-0 w-px h-full bg-[#BF2F70]/10" />
        </div>
      </div>

      <LuminaNavbar />
      
      <main className="relative z-10">
        <LuminaHero />
        <LuminaCategories />
        <LuminaCMS />
        <LuminaIndustries />
        <LuminaContact />
      </main>

      <LuminaFooter />
    </div>
  );
}
