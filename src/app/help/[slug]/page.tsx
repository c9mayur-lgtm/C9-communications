'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Share2, Linkedin, Twitter, ArrowLeft, ArrowRight, ChevronRight, CheckCircle, Target, ArrowUpRight } from 'lucide-react';
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

const ARTICLES: Record<string, any> = {
  'new-office-setup': {
    eyebrow: 'Relocation & Setup',
    title: 'Setting Up Your New Office: A Zero-Downtime Checklist',
    summary: 'Moving offices shouldn’t mean losing days of productivity. Discover how to manage your technology transition from day one.',
    author: 'C9 Delivery Team',
    role: 'Infrastructure Specialists',
    time: '5 Min Read',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'planning', label: 'Early Planning' },
      { id: 'connectivity', label: 'Securing Connectivity' },
      { id: 'voice', label: 'Voice & Comms' },
      { id: 'day-one', label: 'Day One Readiness' }
    ],
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          Relocating an office or opening a new site is one of the most stressful periods for any business. The physical move is difficult enough, but migrating your critical IT and telecommunications infrastructure without disrupting operations requires precision.
        </p>

        <h2 id="planning" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Early Planning is Everything</h2>
        <p>
          The most common mistake businesses make is leaving their IT and Telco requirements until the lease is signed. Lead times for business-grade fibre can range from 30 to 90 days. Engaging a technology partner early ensures your infrastructure roadmap aligns with your physical move-in date.
        </p>

        <h2 id="connectivity" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Securing Business-Grade Connectivity</h2>
        <p>
          Your internet connection is the lifeblood of your modern office. Don't rely on basic broadband. When planning a new site, you must consider:
        </p>
        <ul>
          <li><strong>Symmetrical Speeds:</strong> Using nbn™ Enterprise Ethernet or direct fibre for equal upload/download performance.</li>
          <li><strong>Redundancy:</strong> Implementing 4G/5G failover so your business stays online even if the primary physical link is severed.</li>
          <li><strong>Cabling and Points:</strong> Ensuring the physical structured cabling (Cat6) is designed for your team's layout before the desks arrive.</li>
        </ul>

        <h2 id="voice" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Voice Porting & Cloud Communications</h2>
        <p>
          Moving is the perfect time to audit your phone system. If you are still using an on-premise PBX, migrating to a Cloud Phone System or Microsoft Teams Calling eliminates the need to physically move clunky hardware. Porting your numbers to the cloud means your staff can make and receive calls from anywhere—even if the physical office isn't ready yet.
        </p>

        <div className="my-12 bg-slate-50 border-l-4 border-[#5D00D6] p-6 lg:p-8 rounded-r-2xl">
          <p className="text-slate-800 text-[17px] font-semibold leading-relaxed m-0">
            A single managed partner like C9 coordinates your ISPs, hardware vendors, and cabling contractors, giving you one point of contact and total accountability.
          </p>
        </div>

        <h2 id="day-one" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Day One Readiness</h2>
        <p>
          When your team walks in on Monday morning, the WiFi should be broadcasting, the phones should be ringing, and the printers should be connected. This is achieved through meticulous pre-staging and remote configuration.
        </p>
      </>
    )
  },
  'fast-secure-internet': {
    eyebrow: 'Connectivity',
    title: 'Fast & Secure Business Internet: What Actually Matters',
    summary: 'Beyond advertised speeds, true business internet is about SLAs, redundancy, and secure routing. Learn what your business needs.',
    author: 'C9 Network Engineering',
    role: 'Connectivity Experts',
    time: '4 Min Read',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'speed-vs-reliability', label: 'Speed vs. Reliability' },
      { id: 'symmetrical', label: 'Symmetrical Connectivity' },
      { id: 'failover', label: 'Redundancy & Failover' },
      { id: 'security', label: 'Managed Security' }
    ],
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          In a cloud-first world, your business is only as strong as your internet connection. But most businesses buy internet based entirely on the wrong metric: advertised download speed.
        </p>

        <h2 id="speed-vs-reliability" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Speed vs. Reliability</h2>
        <p>
          While download speed is important, it means nothing if the connection drops twice a week. Business internet must be underpinned by a Service Level Agreement (SLA). Unlike residential connections, business-grade services like C9 Fibre come with a 99.95% uptime guarantee and prioritised fault restoration.
        </p>

        <h2 id="symmetrical" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">The Power of Symmetrical Connectivity</h2>
        <p>
          Standard broadband provides fast downloads but slow uploads. If your team is uploading large files to the cloud, participating in HD video conferences, or using off-site backups, a slow upload speed will cripple productivity. Symmetrical services (like nbn™ Enterprise Ethernet) provide matching upload and download speeds.
        </p>

        <div className="my-12 bg-emerald-50 border-emerald-200 border p-8 rounded-3xl">
           <div className="flex items-center gap-3 text-emerald-600 font-bold mb-4">
              <CheckCircle size={12} />
              <span>Business Standard</span>
           </div>
           <p className="text-emerald-900 text-[18px] font-medium leading-relaxed m-0">
              For teams over 10 people relying on Microsoft 365 or Google Workspace, symmetrical internet is no longer a luxury—it is an operational requirement.
           </p>
        </div>

        <h2 id="failover" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Redundancy & Failover</h2>
        <p>
          What happens to your business if a contractor cuts the fibre optic cable outside your building? With an integrated 4G or 5G failover solution, your router automatically switches to the mobile network within seconds. Your phones keep working, your POS systems stay online, and your team keeps working.
        </p>

        <h2 id="security" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Managed Security</h2>
        <p>
          Fast internet must be secure internet. A business-grade connection should sit behind a properly configured, next-generation firewall that provides intrusion detection, content filtering, and secure VPN access for your remote workers.
        </p>
      </>
    )
  },
  'ad-on-hold': {
    eyebrow: 'Customer Experience',
    title: 'Setting Up Ad On-Hold: Maximising Every Caller’s Experience',
    summary: 'Silence is lost revenue. Professional on-hold messaging reduces call abandonment and up-sells your services.',
    author: 'C9 Voice Solutions',
    role: 'CX Strategists',
    time: '3 Min Read',
    img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'first-impressions', label: 'First Impressions' },
      { id: 'reducing-drop-offs', label: 'Reducing Drop-offs' },
      { id: 'strategic-messaging', label: 'Strategic Messaging' },
      { id: 'implementation', label: 'Easy Implementation' }
    ],
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          When a customer calls your business and is placed on hold, they are a captive audience. Leaving them in silence—or playing repetitive royalty-free chimes—is a missed opportunity and frustrates callers.
        </p>

        <h2 id="first-impressions" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">First Impressions Matter</h2>
        <p>
          A professional Voice Artist greeting your callers immediately elevates your brand's perceived professionalism. It tells the customer that they have called a structured, established business that cares about their experience.
        </p>

        <h2 id="reducing-drop-offs" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Reducing Call Abandonment</h2>
        <p>
          Studies show that callers left in silence abandon their calls much faster than those listening to music or informative messages. Silence makes 30 seconds feel like two minutes. Engaging audio drastically improves caller retention during peak periods.
        </p>

        <div className="grid grid-cols-2 gap-8 my-10">
          <div className="bg-[#5D00D6]/5 border border-[#5D00D6]/20 p-6 rounded-2xl text-center">
            <div className="text-[28px] font-black text-[#5D00D6] mb-1">↑ 20%</div>
            <div className="text-[11px] font-bold text-slate-600 uppercase">Retention Rate</div>
          </div>
          <div className="bg-[#5D00D6]/5 border border-[#5D00D6]/20 p-6 rounded-2xl text-center">
            <div className="text-[28px] font-black text-[#5D00D6] mb-1">100%</div>
            <div className="text-[11px] font-bold text-slate-600 uppercase">Brand Alignment</div>
          </div>
        </div>

        <h2 id="strategic-messaging" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Strategic Messaging</h2>
        <p>
          On-hold time is prime real estate to cross-sell your services. You can use this time to:
        </p>
        <ul>
          <li>Inform callers of your business hours and website.</li>
          <li>Promote seasonal offers or new product lines.</li>
          <li>Answer frequently asked questions, potentially resolving their query before you even pick up.</li>
        </ul>

        <h2 id="implementation" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Seamless Implementation</h2>
        <p>
          With modern Cloud Phone Systems, updating your on-hold audio is instantaneous. C9 works with professional studios to record your scripts, and we handle the direct upload into your PBX so your new messages are live the same day.
        </p>
      </>
    )
  },
  'secure-wifi': {
    eyebrow: 'Network Performance',
    title: 'Improving & Securing Your Business WiFi',
    summary: 'Dead zones, dropped calls, and security vulnerabilities. How to design a business-grade wireless network.',
    author: 'C9 Network Engineering',
    role: 'Wireless Architects',
    time: '5 Min Read',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    sections: [
      { id: 'coverage', label: 'Coverage & Heatmapping' },
      { id: 'roaming', label: 'Seamless Roaming' },
      { id: 'security', label: 'VLANs & Security' },
      { id: 'management', label: 'Cloud Management' }
    ],
    content: (
      <>
        <p className="text-[20px] md:text-[22px] leading-relaxed text-slate-800 font-medium mb-12">
          Your team expects WiFi to just work. But when a network is poorly designed, it results in dropped Teams calls as staff walk between meeting rooms, dead zones in the warehouse, and critical security gaps.
        </p>

        <h2 id="coverage" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Coverage & Active Heatmapping</h2>
        <p>
          Deploying WiFi isn't about guessing where access points should go. Professional deployments begin with an active heat-map of your premises. We analyse wall materials, interference from neighbouring networks, and high-density user areas (like boardrooms) to position Enterprise-grade access points perfectly.
        </p>

        <h2 id="roaming" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">The Importance of Seamless Roaming</h2>
        <p>
          If you have multiple cheap routers scattered around an office, devices will stubbornly cling to a weak signal instead of jumping to the closest access point. Business-grade wireless uses a Wireless LAN Controller (WLC) to intelligently hand off devices from one access point to another without dropping a single packet of data.
        </p>

        <div className="my-12 bg-slate-50 border-l-4 border-[#5D00D6] p-6 lg:p-8 rounded-r-2xl">
          <p className="text-slate-800 text-[17px] font-semibold leading-relaxed m-0">
            A properly configured business network allows you to walk from the ground floor warehouse to the third-floor boardroom while on a live video call, with zero interruption.
          </p>
        </div>

        <h2 id="security" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">VLANs & Corporate Security</h2>
        <p>
          Never allow guests or personal mobile phones onto your core corporate network. We design networks with strict VLANs (Virtual Local Area Networks) that physically separate your secure company data from the public "Guest WiFi", preventing unauthorized lateral movement.
        </p>

        <h2 id="management" className="text-[26px] md:text-[32px] font-bold text-slate-900 mb-6 mt-12">Cloud Management & Visibility</h2>
        <p>
          Modern networks are managed via a single pane of glass in the cloud. This allows our engineers to proactively monitor access point health, push firmware updates remotely, and identify bandwidth hogs before they impact your business operations.
        </p>
      </>
    )
  }
};

export default function HelpArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = ARTICLES[slug];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!article) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#5D00D6] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* ARTICLE HEADER CONTEXT */}
      <section className="bg-[#0c1024] pt-32 pb-20 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5D00D6] opacity-[0.06] rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        
        <div className="container mx-auto max-w-[1000px] relative z-10">
          <FadeIn>
            <a href="/" className="inline-flex items-center text-slate-400 font-medium text-[13px] hover:text-white transition-colors mb-10 group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full border border-[#5D00D6] text-[#A855F7] text-[11px] font-bold uppercase tracking-widest bg-[#5D00D6]/10">
                Support & Guides
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-bold uppercase tracking-widest">
                {article.eyebrow}
              </span>
              <span className="text-slate-400 text-[13px] font-medium ml-2">— {article.time}</span>
            </div>
            <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-bold text-white leading-[1.1] mb-8 max-w-[900px] tracking-tight whitespace-pre-line">
              {article.title}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              {article.summary}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 pt-8 mt-12 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#5D00D6] flex items-center justify-center text-white border border-white/10 font-bold">
                C9
              </div>
              <div>
                <div className="text-white font-bold text-[15px]">{article.author}</div>
                <div className="text-slate-400 text-[13px] font-medium">{article.role}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-slate-400 text-[13px] font-bold uppercase tracking-widest mr-2">Share Article</span>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#5D00D6] hover:text-white text-slate-300 border border-white/10 transition-all flex items-center justify-center">
                <Linkedin size={16} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#5D00D6] hover:text-white text-slate-300 border border-white/10 transition-all flex items-center justify-center">
                <Twitter size={16} />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-16 md:py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
            
            {/* L SIDEBAR - TABLE OF CONTENTS (Sticky) */}
            <div className="hidden lg:block w-[240px] shrink-0">
              <div className="sticky top-32">
                <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#5D00D6] mb-6">In This Article</h4>
                <ul className="space-y-4">
                  {article.sections.map((link: any, i: number) => (
                    <li key={i}>
                      <a 
                        href={`#${link.id}`} 
                        className={`text-[14px] font-medium transition-colors hover:text-[#5D00D6] ${i === 0 ? 'text-[#5D00D6] font-bold' : 'text-slate-500'}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                
                {/* Visual Anchor Block */}
                <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-lg shadow-[#5D00D6]/5">
                  <div className="w-12 h-12 bg-[#5D00D6]/10 text-[#5D00D6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target size={20} />
                  </div>
                  <h5 className="font-bold text-slate-900 text-[15px] mb-2">Need Expert Help?</h5>
                  <p className="text-slate-500 text-[13px] mb-5">Talk to a C9 specialist about your specific requirements.</p>
                  <a href="#consultation" className="block w-full py-2 bg-[#5D00D6] hover:bg-[#4d00b3] text-white rounded-lg text-[13px] font-bold transition-colors">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            {/* MAIN CONTENT (Centered Reading Column) */}
            <div className="grow max-w-[700px] w-full bg-white rounded-[32px] p-8 md:p-14 lg:p-16 border border-slate-100 shadow-xl shadow-slate-200/50 lg:-mt-32 relative z-20">
              
              <div className="max-w-none text-slate-600 [&>p]:mb-6 [&>p]:text-[18px] [&>p]:leading-relaxed [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-3 [&>ul>li]:text-[18px] [&>ul>li]:leading-relaxed [&>a]:text-[#5D00D6] [&>a]:underline [&>figure>img]:rounded-[24px]">
                {article.content}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* MORE ARTICLES */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
               <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">More Help Topics</h3>
               <p className="text-slate-500 text-[18px]">Explore other guides and insights for your business.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(ARTICLES).filter(k => k !== slug).map((key) => {
               const item = ARTICLES[key];
               return (
                  <a href={`/help/${key}`} key={key} className="group flex flex-col h-full bg-slate-50 rounded-[28px] overflow-hidden border border-slate-100 hover:border-[#5D00D6]/30 hover:shadow-xl hover:shadow-[#5D00D6]/5 transition-all">
                     <div className="aspect-[16/10] overflow-hidden">
                        <img 
                           src={item.img} 
                           alt={item.title} 
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                     </div>
                     <div className="p-8 pb-10 flex flex-col grow">
                        <span className="text-[#5D00D6] text-[11px] font-bold uppercase tracking-widest mb-4">{item.eyebrow}</span>
                        <h4 className="text-[20px] font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#5D00D6] transition-colors">
                           {item.title}
                        </h4>
                        <p className="text-slate-500 text-[15px] mb-8 line-clamp-2">
                           {item.summary}
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-6">
                           <span className="text-slate-500 text-[13px] font-medium border-b border-transparent group-hover:border-[#5D00D6]">Read Guide</span>
                           <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:bg-[#5D00D6] group-hover:text-white transition-colors">
                              <ChevronRight size={16} />
                           </div>
                        </div>
                     </div>
                  </a>
               )
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section id="consultation">
        <WpConsultationForm
          showHeader={false}
          eyebrow="GET EXPERT ADVICE"
          title="Ready to upgrade your infrastructure?"
          description="Speak with an Australian technology expert to map out your own path to reliability and scale."
          formTitle="Book Discovery Call"
        />
      </section>
    </div>
  );
}
