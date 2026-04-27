import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface LinkItem {
  label: string;
  path: string;
}

interface ContinueJourneyProps {
  title?: string;
  description?: string;
  links: LinkItem[];
}

export function ContinueJourney({
  title = "Continue Your Journey",
  description = "Explore our connected infrastructure ecosystem.",
  links
}: ContinueJourneyProps) {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <h3 className="c9-section-title !text-2xl !mb-2">{title}</h3>
            <p className="c9-body">{description}</p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <Link 
              key={i} 
              href={link.path}
              className="group flex items-center justify-between p-5 bg-white border border-slate-200 rounded-2xl hover:border-[#5D00D6] hover:shadow-lg transition-all"
            >
              <span className="font-bold text-slate-800 text-[14px] group-hover:text-[#5D00D6] transition-colors">
                {link.label}
              </span>
              <ArrowRight size={16} className="text-slate-400 group-hover:text-[#5D00D6] group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
