'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Share2, Linkedin, Twitter, Mail, ArrowLeft, ChevronRight, TrendingUp, Zap, Clock, User } from 'lucide-react';
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const BLOG_POSTS: Record<string, any> = {
  'state-of-australian-it-2026': {
    title: 'State of Australian IT: Transitioning to Managed Cloud',
    summary: 'The ongoing costs of self-managed hardware are eclipsing the benefits. Here is why Australian mid-market firms are shifting to fully managed infrastructure.',
    author: 'David Peterson',
    role: 'Head of Infrastructure @ C9',
    time: '8 Min Read',
    tag: 'Technology',
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200',
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          Modern businesses are moving away from self-managed hardware. But the transition to managed infrastructure isn&apos;t just about moving data—it&apos;s about eliminating daily operational friction.
        </p>
        <h2 id="introduction">The Shift to Local Cloud</h2>
        <p>In the past, owning your own servers was standard. Today, it&apos;s an operational liability. The costs of cooling, physical security, and maintenance now outweigh the benefits of physical ownership.</p>
        <div className="my-12 bg-slate-50 border-l-4 border-[#5D00D6] p-6 lg:p-8 rounded-r-2xl">
          <p className="text-slate-800 text-[17px] font-semibold leading-relaxed m-0">
            &ldquo;Businesses migrating to managed solutions experience a 45% reduction in unplanned IT expenditures over 24 months.&rdquo;
          </p>
        </div>
        <h2 id="challenges">Common Infrastructure Bottlenecks</h2>
        <p>A tech stack is only as strong as its weakest link. For many, the bottleneck is fragmented vendor relationships where nobody takes accountability when things break.</p>
        <ul>
          <li><strong>Reactionary Support:</strong> Waiting for failure before acting.</li>
          <li><strong>Security Gaps:</strong> Using consumer-grade security for business data.</li>
          <li><strong>Legacy Debt:</strong> Running modern software on outdated networks.</li>
        </ul>
      </>
    )
  },
  'scaling-network-architecture': {
    title: 'Scaling Your Network Architecture for 2026',
    summary: 'How multi-site organizations are solving the lag and security challenges of distributed workforces.',
    author: 'Sarah Chen',
    role: 'Senior Network Architect @ C9',
    time: '6 Min Read',
    tag: 'Infrastructure',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200',
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          As teams become more distributed, the old &quot;hub-and-spoke&quot; network model is failing. To scale in 2026, businesses need a decentralized but unified security and connectivity layer.
        </p>
        <h2 id="sd-wan">The Rise of SD-WAN</h2>
        <p>Software-Defined Wide Area Networking (SD-WAN) allows businesses to treat multiple internet connections as a single, smart pipe. This ensures that critical apps like Teams or Zoom always get priority traffic.</p>
        <h2 id="security">Security at the Edge</h2>
        <p>With staff working from home and regional offices, the perimeter has disappeared. We now focus on securing the &quot;edge&quot;—wherever the user is located.</p>
      </>
    )
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = BLOG_POSTS[slug] || BLOG_POSTS['state-of-australian-it-2026']; // Fallback to first post for demo

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#5D00D6] origin-left z-[100]" style={{ scaleX }} />

      <section className="bg-[#0c1024] pt-32 pb-20 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5D00D6] opacity-[0.06] rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        <div className="container mx-auto max-w-[1000px] relative z-10">
          <FadeIn>
            <a href="/blog" className="inline-flex items-center text-slate-400 font-medium text-[13px] hover:text-white transition-colors mb-10">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1" /> Back to Resources
            </a>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full border border-[#5D00D6] text-[#A855F7] text-[11px] font-bold uppercase tracking-widest bg-[#5D00D6]/10">Article</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-bold uppercase tracking-widest">{post.tag}</span>
              <span className="text-slate-400 text-[13px] font-medium ml-2">— {post.time}</span>
            </div>
            <h1 className="text-[36px] md:text-[56px] lg:text-[64px] font-bold text-white leading-[1.05] mb-8 max-w-[900px] tracking-tight">{post.title}</h1>
          </FadeIn>
          <FadeIn delay={0.2} className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 pt-8 mt-12 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-800 border border-white/10">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Author" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-white font-bold text-[15px]">{post.author}</div>
                <div className="text-slate-400 text-[13px] font-medium">{post.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#5D00D6] hover:text-white text-slate-300 border border-white/10 transition-all flex items-center justify-center"><Linkedin size={16} /></button>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#5D00D6] hover:text-white text-slate-300 border border-white/10 transition-all flex items-center justify-center"><Twitter size={16} /></button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
            <div className="hidden lg:block w-[240px] shrink-0">
               <div className="sticky top-32">
                  <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#5D00D6] mb-6">In this article</h4>
                  <div className="space-y-4">
                     <p className="text-[14px] font-medium text-[#5D00D6]">Expert Insights</p>
                     <p className="text-[14px] font-medium text-slate-500">Market Trends</p>
                     <p className="text-[14px] font-medium text-slate-500">Business Outcomes</p>
                  </div>
               </div>
            </div>
            <div className="grow max-w-[700px] w-full bg-white rounded-[32px] p-8 md:p-14 lg:p-16 border border-slate-100 shadow-xl shadow-slate-200/50 lg:-mt-32 relative z-20">
              <div className="max-w-none text-slate-600 [&>p]:mb-6 [&>p]:text-[18px] [&>p]:leading-relaxed [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-3 [&>ul>li]:text-[18px] [&>ul>li]:leading-relaxed [&>a]:text-[#5D00D6] [&>a]:underline [&>figure>img]:rounded-[24px]">
                {post.content}
                <hr className="my-12 border-slate-100" />
                <div className="flex items-center gap-6 bg-slate-50 p-8 rounded-2xl mt-12">
                   <div className="w-16 h-16 shrink-0 rounded-full bg-slate-200 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Author" className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <div className="text-slate-900 font-bold text-[16px] mb-1">{post.author}</div>
                      <p className="text-slate-500 text-[14px]">{post.role}</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">More to Read</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.keys(BLOG_POSTS).filter(k => k !== slug).map(key => (
              <a href={`/blog/${key}`} key={key} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-[#5D00D6]/30 transition-all">
                <span className="text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest mb-2 block">{BLOG_POSTS[key].tag}</span>
                <h4 className="text-xl font-bold mb-4 group-hover:text-[#5D00D6] transition-colors">{BLOG_POSTS[key].title}</h4>
                <p className="text-slate-500 line-clamp-2">{BLOG_POSTS[key].summary}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <WpConsultationForm
        showHeader={false}
        eyebrow="GET STARTED"
        title="Ready to optimize your tech stack?"
        description="Speak with an expert to see how managed infrastructure can scale your business."
        formTitle="Book Discovery Call"
      />
    </div>
  );
}
