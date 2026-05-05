'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LegalLayoutProps {
  title: string;
  effectiveDate?: string;
  links: { label: string; href: string }[];
  toc: { label: string; id: string }[];
  children: React.ReactNode;
}

export const LegalLayout = ({ title, effectiveDate, links, toc, children }: LegalLayoutProps) => {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 md:pt-40 md:pb-32" >
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          {effectiveDate && (
            <p className="text-[14px] text-gray-400 font-medium mb-4">
              Effective Date: <span className="text-slate-900 font-bold">{effectiveDate}</span>
            </p>
          )}
          <h1 className="text-[48px] md:text-[64px] font-bold text-[#0c1024] leading-tight tracking-tight mb-8">
            {title}
          </h1>

          {/* Pill Navigation */}
          <div className="inline-flex flex-wrap items-center gap-1 p-1 bg-gray-50/50 border border-gray-100 rounded-full mb-12">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-6 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#0c1024] text-white shadow-lg shadow-gray-200' 
                      : 'text-gray-400 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Content Section with Sidebar */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-16 items-start">
          {/* Sidebar TOC */}
          <aside className="hidden lg:block sticky top-32">
            <h4 className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-8">Table of Contents</h4>
            <nav className="flex flex-col gap-6 border-l border-gray-100 pl-1">
              {toc.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="flex items-start gap-4 text-left transition-all duration-300 relative pl-4"
                >
                  <div className={`absolute left-[-2.5px] top-2.5 w-1 h-1 rounded-full shrink-0 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#5D00D6] ${i === 0 ? 'bg-[#5D00D6] scale-[2.5] shadow-[0_0_8px_rgba(93,0,214,0.4)]' : 'bg-gray-200'}`} />
                  <span className={`text-[14px] leading-snug transition-colors ${i === 0 ? 'text-[#0c1024] font-bold' : 'text-gray-400 font-medium group-hover:text-[#0c1024]'}`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <article className="prose prose-slate max-w-[850px] prose-headings:text-[#0c1024] prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-[36px] prose-h2:mt-24 prose-h2:mb-12 prose-h2:scroll-mt-32 prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-6 prose-h3:text-[24px] prose-h3:mt-16 prose-h3:mb-8 prose-p:text-[18px] prose-p:leading-[1.8] prose-p:text-[#4b5563] prose-p:mb-10 prose-li:text-[18px] prose-li:leading-[1.8] prose-li:text-[#4b5563] prose-li:mb-6 prose-ul:mb-12 prose-strong:text-[#0c1024] prose-strong:font-bold prose-a:text-[#5D00D6] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline">
            {children}
          </article>
        </div>
      </div>
    </main>
  );
};

