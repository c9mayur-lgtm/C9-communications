import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SimpleHeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref?: string;
}

export const SimpleHero: React.FC<SimpleHeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonHref = '#',
}) => {
  return (
    <section className="bg-slate-50 py-24 sm:py-32 flex flex-col justify-center items-center text-center px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
        <div className="pt-4">
          <Link href={buttonHref}>
            <Button size="lg" className="bg-[#5D00D6] hover:bg-[#4d00b3] text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg shadow-[#5D00D6]/20 transition-all">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
