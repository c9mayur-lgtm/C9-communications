'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';

const BLOG_POSTS = [
  {
    slug: 'state-of-australian-it-2026',
    title: 'State of Australian IT: Transitioning to Managed Cloud',
    summary: 'The ongoing costs of self-managed hardware are eclipsing the benefits. Here is why Australian mid-market firms are shifting to fully managed infrastructure.',
    author: 'David Peterson',
    time: '8 Min Read',
    tag: 'Technology',
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'scaling-network-architecture',
    title: 'Scaling Your Network Architecture for 2026',
    summary: 'How multi-site organizations are solving the lag and security challenges of distributed workforces.',
    author: 'Sarah Chen',
    time: '6 Min Read',
    tag: 'Infrastructure',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800',
  }
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <FadeIn>
          <div className="max-w-3xl mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#5D00D6]/8 text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest mb-6 border border-[#5D00D6]/20">
              INSIGHTS & PERSPECTIVES
            </span>
            <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-8 text-[#0c1024]">
              Industry Expertise for <br />
              <span className="text-[#5D00D6]">Modern Infrastructure.</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
              Deep dives into network architecture, security governance, and the operational shifts driving business performance.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {BLOG_POSTS.map((post, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden mb-8 shadow-sm">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[#5D00D6] text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      {post.tag}
                    </span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0c1024] mb-4 group-hover:text-[#5D00D6] transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-500 mb-6 line-clamp-2">{post.summary}</p>
                <div className="flex items-center justify-between py-6 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <User size={14} />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {post.time}</span>
                    
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
