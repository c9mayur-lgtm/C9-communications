import React from 'react';
import Link from 'next/link';
;

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
    <section className="py-8 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="c9-eyebrow mb-3 block">{eyebrow}</span>
            <h3 className="c9-section-heading !mb-2">{title}</h3>
            <p className="c9-body !mb-0">{description}</p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <Link 
              key={i} 
              href={link.path}
              className="flex items-center justify-between p-5 bg-white border border-slate-200 rounded-2xl hover:border-[#5D00D6] hover:shadow-lg transition-all"
            >
              <span className="font-bold text-slate-800 text-[14px] group-hover:text-[#5D00D6] transition-colors">
                {link.label}
              </span>
              
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
