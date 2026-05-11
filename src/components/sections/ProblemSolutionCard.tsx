// components/sections/ProblemSolutionCard.tsx

import React from 'react';
import { CheckIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

export interface OfferingData {
  id: string;
  icon: React.ReactNode;
  image: string;
  problemStatement: string;
  problemContext: string;
  solutionTitle: string;
  solutionDescription: string;
  features: string[];
  impacts: string[];
  numbers: Array<{ label: string; value: string }>;
  caseStudyQuote: string;
  caseStudyAuthor: string;
  primaryCTAText: string;
  primaryCTALink: string;
  secondaryCTAText: string;
  secondaryCTALink: string;
  tertiaryCTAText: string;
  tertiaryCTALink: string;
  trackingPrefix: string;
}

interface ProblemSolutionCardProps {
  offering: OfferingData;
  onCTAClick: (eventName: string) => void;
}

export default function ProblemSolutionCard({ offering, onCTAClick }: ProblemSolutionCardProps) {
  const handleCTAClick = (cta: string) => {
    onCTAClick(`${offering.trackingPrefix}_${cta}`);
  };

  return (
    <div className="group relative bg-card border border-border rounded-none overflow-hidden 
                    hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      
      {/* Image Container - Reduced Height */}
      <div className="relative h-56 md:h-72 overflow-hidden bg-muted">
        {offering.image ? (
          <img 
            src={offering.image}
            alt={offering.problemStatement}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
            Image Placeholder
          </div>
        )}
        {/* Icon Badge - Slightly Smaller */}
        <div className="absolute top-3 right-3 bg-[#5D00D6] text-white 
                        rounded-none p-2.5 shadow-lg flex items-center justify-center">
          {React.cloneElement(offering.icon as React.ReactElement<any>, { size: 20 })}
        </div>
      </div>

      {/* Content Container - Reduced Padding */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        
        {/* Problem Statement - Increased size for better differentiation */}
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-tight tracking-tight">
          {offering.problemStatement}
        </h3>
        
        {/* Problem Context - Compact Body */}
        <p className="text-[14px] text-slate-600 mb-5 leading-relaxed line-clamp-3 hover:line-clamp-none transition-all">
          {offering.problemContext}
        </p>

        {/* Divider */}
        <div className="h-px bg-slate-100 mb-5"></div>

        {/* Solution Label - Using c9-eyebrow */}
        <p className="c9-eyebrow !mb-2 !text-[11px] !text-[#5D00D6]">
          OUR SOLUTION
        </p>

        {/* Solution Title - Increased size */}
        <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
          {offering.solutionTitle}
        </h4>

        {/* Solution Description - Compact Body */}
        <p className="text-[14px] text-slate-600 mb-4 leading-relaxed line-clamp-2 hover:line-clamp-none transition-all">
          {offering.solutionDescription}
        </p>

        {/* What We Provide & Business Impact - Combined Grid for height reduction */}
        <div className="grid grid-cols-1 gap-4 mb-5">
          <div>
            <p className="c9-eyebrow !mb-2 !text-[9px] !text-slate-400">
              WHAT WE PROVIDE
            </p>
            <ul className="space-y-1.5">
              {offering.features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckIcon className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[13px] text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 rounded-none p-3 border border-slate-100">
            <p className="c9-eyebrow !mb-2 !text-[9px] !text-slate-400">
              IMPACT & NUMBERS
            </p>
            <div className="space-y-2">
              {offering.numbers.slice(0, 2).map((number) => (
                <div key={number.label} className="flex justify-between items-center">
                  <span className="text-[11px] text-slate-500">{number.label}</span>
                  <span className="text-[13px] font-bold text-[#5D00D6]">{number.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Study Snippet - More Compact */}
        <div className="mb-6 p-3 border-l-2 border-[#5D00D6] bg-[#5D00D6]/5 rounded-none">
          <p className="text-[13px] italic text-slate-800 mb-1 leading-snug line-clamp-2 font-medium">
            "{offering.caseStudyQuote}"
          </p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            — {offering.caseStudyAuthor}
          </p>
        </div>

        {/* CTA Buttons - More Compact */}
        <div className="space-y-2.5 mt-auto">
          {/* Primary CTA */}
          <Link href={offering.primaryCTALink} className="block w-full">
            <button 
              onClick={() => handleCTAClick('solution')}
              className="w-full bg-[#5D00D6] text-white font-bold py-2.5 px-4 
                         rounded-none hover:bg-[#4d00b3] transition-all duration-200 uppercase tracking-widest text-[11px]"
            >
              {offering.primaryCTAText}
            </button>
          </Link>

          <div className="grid grid-cols-2 gap-2">
            {/* Secondary CTA */}
            <Link href={offering.secondaryCTALink} className="block w-full">
              <button 
                onClick={() => handleCTAClick('casestudy')}
                className="w-full bg-slate-100 text-slate-900 font-bold py-2 px-2 
                           rounded-none hover:bg-slate-200 transition-all duration-200 uppercase tracking-widest text-[9px] h-full"
              >
                Case Study
              </button>
            </Link>

            {/* Tertiary CTA */}
            <Link href={offering.tertiaryCTALink} className="block w-full">
              <button 
                onClick={() => handleCTAClick('tertiary')}
                className="w-full border border-[#5D00D6] text-[#5D00D6] font-bold py-2 px-2 
                           rounded-none hover:bg-[#5D00D6]/5 transition-all duration-200 uppercase tracking-widest text-[9px] h-full"
              >
                Consultation
              </button>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
