'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Search, Filter, 
  Calendar, Clock, ChevronRight,
  BookOpen, Target, FileText,
  LayoutGrid, List
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const C = "container mx-auto px-6 md:px-8 max-w-[1240px]";

const FadeIn = ({ children, delay = 0, className, direction = 'up' }: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' 
}) => {
  const variants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 }
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const CATEGORIES = ['All', 'Articles', 'Case Studies', 'Blogs'];

const INSIGHTS_DATA = [
  {
    type: 'Case Study',
    title: 'Multi-Site Network Transformation for National Retailer',
    excerpt: 'How we consolidated 45 locations into a single managed SD-WAN architecture with 99.99% uptime.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    date: 'Apr 12, 2026',
    readTime: '8 min read',
    slug: 'national-retailer-sdwan'
  },
  {
    type: 'Article',
    title: 'The CEO Guide to Managed Security Governance',
    excerpt: 'A technical deep-dive into the Essential Eight and why software alone is not a security strategy.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    date: 'Apr 05, 2026',
    readTime: '12 min read',
    slug: 'ceo-security-governance'
  },
  {
    type: 'Blog',
    title: 'Why Onshore SOC Matters for Australian Enterprise',
    excerpt: 'Understanding the operational and compliance benefits of local security monitoring and response.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    date: 'Mar 28, 2026',
    readTime: '5 min read',
    slug: 'onshore-soc-benefits'
  },
  {
    type: 'Case Study',
    title: 'Zero-Downtime Infrastructure Migration',
    excerpt: 'Migrating a legacy healthcare provider to a hybrid cloud environment without impacting patient services.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    date: 'Mar 15, 2026',
    readTime: '10 min read',
    slug: 'healthcare-migration'
  },
  {
    type: 'Article',
    title: 'Modern Workplace: Beyond Microsoft 365',
    excerpt: 'Controlling the user environment is the next frontier of business productivity and security.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    date: 'Mar 02, 2026',
    readTime: '7 min read',
    slug: 'modern-workplace-control'
  },
  {
    type: 'Blog',
    title: 'The Myth of "Set and Forget" IT',
    excerpt: 'Why continuous operational discipline is the only way to maintain infrastructure stability.',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800',
    date: 'Feb 20, 2026',
    readTime: '4 min read',
    slug: 'set-and-forget-myth'
  }
];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = INSIGHTS_DATA.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.type.replace(' ', '') === activeCategory.replace(' ', '').slice(0, -1) || (activeCategory === 'Case Studies' && item.type === 'Case Study');
    // Simple plural/singular mapping for filtering
    const normalizedType = item.type === 'Case Study' ? 'Case Studies' : item.type + 's';
    const matchesCategoryFinal = activeCategory === 'All' || normalizedType === activeCategory;
    
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategoryFinal && matchesSearch;
  });

  return (
    <main className="bg-[#f8f9fa] min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-white pt-32 pb-16 border-b border-gray-100">
        <div className={C}>
          <div className="max-w-3xl">
            <FadeIn>
              <span className="c9-eyebrow mb-6 uppercase tracking-[0.2em]">KNOWLEDGE HUB</span>
              <h1 className="c9-hero-title mb-8">
                Insights & Operational <br />
                <span className="text-[#5D00D6]">Intelligence</span>
              </h1>
              <p className="c9-body mb-10 text-xl leading-relaxed">
                Technical strategies, operational reports, and enterprise case studies designed to provide absolute clarity on infrastructure control.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="sticky top-[80px] z-[50] bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
        <div className={C}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Tabs */}
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl w-fit">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    activeCategory === cat 
                    ? 'bg-white text-[#5D00D6] shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#5D00D6]/20 transition-all outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-16 lg:py-24">
        <div className={C}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredData.map((item, i) => (
                <motion.div
                  key={item.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link href={`/insights/${item.slug}`} className="group flex flex-col h-full bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-500">
                    {/* Thumbnail */}
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg ${
                          item.type === 'Case Study' ? 'bg-emerald-500' : 
                          item.type === 'Article' ? 'bg-[#5D00D6]' : 'bg-slate-900'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} /> {item.date}
                        </div>
                        <div className="w-1 h-1 rounded-full bg-slate-200" />
                        <div className="flex items-center gap-1.5">
                          <Clock size={14} /> {item.readTime}
                        </div>
                      </div>

                      <h3 className="c9-card-title mb-4 group-hover:text-[#5D00D6] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="c9-body text-sm leading-relaxed mb-8 line-clamp-3">
                        {item.excerpt}
                      </p>

                      <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                          Read Full {item.type} <ArrowRight size={16} className="text-[#5D00D6]" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-24">
               <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={32} className="text-slate-300" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-2">No insights found.</h3>
               <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
               <Button 
                variant="outline" 
                className="mt-8"
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
               >
                 Clear all filters
               </Button>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER / CTA */}
      <section className="py-24 bg-white">
        <div className={C}>
          <div className="bg-[#5D00D6] rounded-[48px] p-8 md:p-16 relative overflow-hidden text-center text-white">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="c9-eyebrow !text-white/60 mb-6 block">STAY INFORMED</span>
              <h2 className="c9-hero-title !text-white mb-8">
                Operational Intelligence <br /> Delivered.
              </h2>
              <p className="c9-body !text-white/70 mb-12">
                Join 500+ enterprise leaders receiving our monthly reports on infrastructure control and security governance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:bg-white/20 transition-all"
                />
                <button className="px-10 py-5 bg-white text-[#5D00D6] font-bold rounded-2xl hover:bg-slate-100 transition-all shadow-xl shadow-black/10">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Background pattern */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </main>
  );
}
