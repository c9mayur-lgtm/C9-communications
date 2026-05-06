'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, ChevronRight } from 'lucide-react';

const INSIGHTS = [
  {
    title: 'The CEO Guide to Managed Security Governance',
    desc: 'A technical deep-dive into the Essential Eight and why software alone is not a security strategy.',
    slug: 'ceo-security-governance',
    tag: 'Cyber Operations',
    time: '12 min read'
  },
  {
    title: 'Scaling Your Network Architecture for 2026',
    desc: 'How multi-site organizations are solving the lag and security challenges of distributed workforces.',
    slug: 'scaling-network-architecture',
    tag: 'Infrastructure',
    time: '6 min read'
  },
  {
    title: 'State of Australian IT: Transitioning to Managed Cloud',
    desc: 'The ongoing costs of self-managed hardware are eclipsing the benefits for mid-market firms.',
    slug: 'state-of-australian-it-2026',
    tag: 'Strategy',
    time: '8 min read'
  }
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function IndustryInsightsSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="c9-eyebrow mb-4 block">Actionable Intelligence</span>
              <h2 className="c9-section-heading mb-6">
                Industry Insights & <br />
                <span className="text-[#5D00D6]">Operational Strategy.</span>
              </h2>
              <p className="c9-body text-slate-500 max-w-xl">
                We don't just manage systems; we provide the strategic roadmap to ensure your technology supports your business growth. Explore our latest technical deep-dives.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <Link 
              href="/insights" 
              className="inline-flex items-center gap-2 text-[#5D00D6] font-bold text-[14px] uppercase tracking-widest hover:gap-3 transition-all"
            >
              View All Insights
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {INSIGHTS.map((post, i) => (
            <FadeIn key={i} delay={i * 0.1 + 0.2}>
              <Link 
                href={`/insights/${post.slug}`}
                className="group flex flex-col p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#5D00D6]/20 hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500 h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-white text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest shadow-sm border border-slate-100">
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <Clock size={12} /> {post.time}
                  </span>
                </div>
                
                <h3 className="text-[20px] font-bold text-slate-900 mb-4 group-hover:text-[#5D00D6] transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-[14px] text-slate-500 leading-relaxed mb-8 line-clamp-3">
                  {post.desc}
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Read Article</span>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#5D00D6] group-hover:bg-[#5D00D6] group-hover:text-white transition-all">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
