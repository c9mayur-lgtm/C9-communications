'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";

const fontStyle = { fontFamily: '"Proxima Nova", sans-serif' };

// Map paths to readable labels
const routeLabels: Record<string, string> = {
  'industries': 'Industries',
  'healthcare': 'Healthcare',
  'professional-services': 'Professional Services',
  'non-profit': 'Non-Profit',
  'education': 'Education',
  'retail': 'Retail',
  'real-estate': 'Real Estate',
  'managed-it': 'Managed IT',
  'solutions': 'Solutions',
  'telco': 'Telco',
  'modern-workplace': 'Modern Workplace',
  'about': 'About',
  'resources': 'Resources',
  'blog': 'Blog',
  'case-studies': 'Case Studies',
  'team': 'Our Team',
  'why-c9': 'Why C9',
  'careers': 'Careers',
  'partners': 'Partners',
  'reviews': 'Reviews & Awards',
  'faq': 'FAQ',
  'helpdesk-support': 'Helpdesk Support',
  'outsourcing': 'IT Outsourcing',
  'strategy-consulting': 'Strategy & Consulting',
  'c9-defense': 'C9 Defense',
  'managed': 'Managed IT',
  'defense': 'C9 Defense'
};

export function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show on home page
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <div className="w-full bg-white pt-24 pb-1 c9-breadcrumbs">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <Breadcrumb>
          <BreadcrumbList className="flex-wrap items-center">
            <BreadcrumbItem>
              <BreadcrumbLink 
                render={(props) => (
                  <Link {...props} href="/" className="flex items-center hover:text-[#5D00D6] transition-colors">
                    <Home size={14} className="mr-1.5 translate-y-[-1px]" />
                    <span className="text-[12px] font-bold uppercase tracking-wider" style={fontStyle}>Home</span>
                  </Link>
                )}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator className="mx-2 opacity-30">
              <ChevronRight size={14} />
            </BreadcrumbSeparator>

            {pathSegments.map((segment, index) => {
              const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
              const isLast = index === pathSegments.length - 1;
              const label = routeLabels[segment] || segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

              return (
                <React.Fragment key={href}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="text-[12px] font-extrabold uppercase tracking-wider text-[#5D00D6]" style={fontStyle}>
                        {label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink 
                        render={(props) => (
                          <Link {...props} href={href} className="text-[12px] font-bold uppercase tracking-wider hover:text-[#5D00D6] transition-colors" style={fontStyle}>
                            {label}
                          </Link>
                        )}
                      />
                    )}
                  </BreadcrumbItem>
                  {!isLast && (
                    <BreadcrumbSeparator className="mx-2 opacity-30">
                      <ChevronRight size={14} />
                    </BreadcrumbSeparator>
                  )}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
