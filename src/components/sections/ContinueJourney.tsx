import React from 'react';
import Link from 'next/link';
import { C9Button } from '@/components/design-system/C9Button';

interface LinkItem {
  label: string;
  path: string;
}

interface ContinueJourneyProps {
  title?: string;
  description?: string;
  eyebrow?: string;
  links: LinkItem[];
}

export function ContinueJourney({
  eyebrow = "C9 Communications",
  title = "This Is One Piece of the Stack.",
  description = "Most businesses that consolidate one service with C9 go on to unify the rest. These are the services that work best together.",
  links
}: ContinueJourneyProps) {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="c9-eyebrow mb-3 block">{eyebrow}</span>
            <h3 className="c9-section-heading !mb-4">{title}</h3>
            <p className="c9-body !mb-0">{description}</p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, i) => (
            <C9Button 
              key={i} 
              variant="secondary"
              asChild
              className="w-full justify-between p-6 h-auto rounded-2xl border-slate-200 shadow-sm hover:shadow-md hover:border-[#5D00D6] group/button"
            >
              <Link href={link.path}>
                <span className="font-bold text-slate-800 text-[15px]">
                  {link.label}
                </span>
              </Link>
            </C9Button>
          ))}
        </div>
      </div>
    </section>
  );
}
