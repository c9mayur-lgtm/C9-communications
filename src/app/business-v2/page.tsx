'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, ShieldCheck, Zap, Clock, Users, MessageSquare, 
  AlertTriangle, Activity, Database, Store, Utensils, Warehouse, 
  Briefcase, Loader2, Sparkles, X, ChevronLeft, Star
} from 'lucide-react';

// UI Components
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { C9Button } from '@/components/design-system/C9Button';

// Custom Components
import { WpClientTicker } from '@/components/wordpress/WpClientTicker';

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPERS
   ───────────────────────────────────────────────────────── */
const FadeIn = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}) => {
  const y = direction === 'up' ? 16 : direction === 'down' ? -16 : 0;
  const x = direction === 'left' ? -16 : direction === 'right' ? 16 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const C = 'container mx-auto px-6 md:px-8 max-w-[1240px]';

/* ─────────────────────────────────────────────────────────
   SECTION: QUALIFICATION MODAL
   ───────────────────────────────────────────────────────── */
const QualificationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState({
    problem: '',
    locations: '',
    vendors: '',
    timeline: '',
    budget: '',
    email: ''
  });

  const next = () => setStep(s => s + 1);
  const back = () => setStep(s => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const getTier = () => {
    let score = 0;
    if (data.vendors === '5-6' || data.vendors === '7+') score += 40;
    if (data.locations === '4-10' || data.locations === '10+') score += 30;
    if (data.timeline === 'urgent' || data.timeline === 'soon') score += 30;
    
    if (score >= 70) return 'high';
    if (score >= 40) return 'medium';
    return 'low';
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-4 font-dm-sans">
            <h3 className="text-xl font-bold text-[#0c1024] font-clash">What's your biggest IT/telco challenge right now?</h3>
            <div className="grid gap-2">
              {[
                { id: 'vendor_chaos', label: 'Vendor coordination chaos' },
                { id: 'downtime', label: 'System downtime/reliability' },
                { id: 'cost', label: 'Cost control (overlapping services)' },
                { id: 'security', label: 'Security concerns' },
                { id: 'visibility', label: 'Lack of visibility' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => { setData({...data, problem: opt.id}); next(); }}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${data.problem === opt.id ? 'border-[#5D00D6] bg-purple-50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                >
                  <span className="font-semibold text-slate-700">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 font-dm-sans">
            <h3 className="text-xl font-bold text-[#0c1024] font-clash">How many locations/sites do you have?</h3>
            <div className="grid gap-2">
              {['1 location', '2-3 locations', '4-10 locations', '10+ locations'].map(opt => (
                <button
                  key={opt}
                  onClick={() => { setData({...data, locations: opt}); next(); }}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${data.locations === opt ? 'border-[#5D00D6] bg-purple-50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                >
                  <span className="font-semibold text-slate-700">{opt}</span>
                </button>
              ))}
            </div>
            <button onClick={back} className="text-slate-400 text-sm font-bold flex items-center gap-1"><ChevronLeft size={14}/> Back</button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 font-dm-sans">
            <h3 className="text-xl font-bold text-[#0c1024] font-clash">How many vendors/providers are you currently using?</h3>
            <div className="grid gap-2">
              {['1-2 vendors', '3-4 vendors', '5-6 vendors', '7+ vendors'].map(opt => (
                <button
                  key={opt}
                  onClick={() => { setData({...data, vendors: opt}); next(); }}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${data.vendors === opt ? 'border-[#5D00D6] bg-purple-50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                >
                  <span className="font-semibold text-slate-700">{opt}</span>
                </button>
              ))}
            </div>
            <button onClick={back} className="text-slate-400 text-sm font-bold flex items-center gap-1"><ChevronLeft size={14}/> Back</button>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4 font-dm-sans">
            <h3 className="text-xl font-bold text-[#0c1024] font-clash">What's your timeline for consolidation?</h3>
            <div className="grid gap-2">
              {[
                { id: 'urgent', label: 'Urgent (next 30 days)' },
                { id: 'soon', label: 'Soon (next 3 months)' },
                { id: 'planning', label: 'Planning (3-6 months)' },
                { id: 'exploring', label: 'Exploring (6+ months)' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => { setData({...data, timeline: opt.id}); next(); }}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${data.timeline === opt.id ? 'border-[#5D00D6] bg-purple-50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                >
                  <span className="font-semibold text-slate-700">{opt.label}</span>
                </button>
              ))}
            </div>
            <button onClick={back} className="text-slate-400 text-sm font-bold flex items-center gap-1"><ChevronLeft size={14}/> Back</button>
          </div>
        );
      case 5:
        return (
          <form onSubmit={handleSubmit} className="space-y-4 font-dm-sans">
            <h3 className="text-xl font-bold text-[#0c1024] font-clash">Final Step: Your Email</h3>
            <p className="text-slate-500 text-sm">We'll send your recommendation and migration roadmap to this address.</p>
            <Input 
              type="email" 
              placeholder="name@company.com" 
              required 
              value={data.email}
              onChange={(e) => setData({...data, email: e.target.value})}
              className="h-12 rounded-xl border-slate-200 focus:border-[#5D00D6] focus:ring-[#5D00D6]/20"
            />
            <C9Button type="submit" disabled={isSubmitting} className="w-full h-12 rounded-full bg-[#5D00D6] hover:bg-[#4d00b3]">
              {isSubmitting ? <Loader2 className="animate-spin" /> : 'Get My Recommendation'}
            </C9Button>
            <button type="button" onClick={back} className="text-slate-400 text-sm font-bold flex items-center gap-1"><ChevronLeft size={14}/> Back</button>
          </form>
        );
      default: return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[480px] p-0 overflow-hidden rounded-3xl border-none bg-white">
        <div className="p-8">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#5D00D6] flex items-center justify-center text-white shadow-lg shadow-purple-200">
                      <Zap size={20} />
                    </div>
                    <div>
                      <p className="c9-eyebrow !mb-0 text-[#5D00D6]">Lead Qualifier</p>
                      <p className="text-sm font-bold text-slate-400 font-dm-sans">Step {step} of 5</p>
                    </div>
                  </div>
                  <button onClick={onClose} className="p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100"><X size={20}/></button>
                </div>
                {renderStep()}
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 font-dm-sans"
              >
                <div className="w-20 h-20 rounded-3xl bg-green-50 text-green-500 flex items-center justify-center mx-auto mb-6">
                  <Sparkles size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#0c1024] mb-4 font-clash">Perfect! Here's What We Recommend</h3>
                
                {getTier() === 'high' && (
                  <div className="space-y-6">
                    <p className="text-slate-600">You're an ideal fit for our consolidation model. Your environment size and vendor complexity require a structured takeover to prevent disruption.</p>
                    <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 text-left">
                      <p className="font-bold text-[#5D00D6] mb-2 flex items-center gap-2"><CheckCircle size={16}/> High Priority Fit</p>
                      <p className="text-sm text-slate-600">We recommend a free 30-minute infrastructure assessment with our senior engineering team.</p>
                    </div>
                    <C9Button onClick={onClose} className="w-full h-14 rounded-full bg-[#5D00D6] hover:bg-[#4d00b3] text-lg font-bold">Book Your Assessment</C9Button>
                  </div>
                )}

                {getTier() === 'medium' && (
                  <div className="space-y-6">
                    <p className="text-slate-600">You could benefit from consolidation. Simplifying your vendors now will prevent operational friction as you grow.</p>
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-left">
                      <p className="font-bold text-blue-600 mb-2 flex items-center gap-2"><Activity size={16}/> Strategic Fit</p>
                      <p className="text-sm text-slate-600">Let's explore your options with a free consultation to map out a simplification roadmap.</p>
                    </div>
                    <C9Button onClick={onClose} className="w-full h-14 rounded-full bg-slate-900 hover:bg-slate-800 text-lg font-bold">Schedule Consultation</C9Button>
                  </div>
                )}

                {getTier() === 'low' && (
                  <div className="space-y-6">
                    <p className="text-slate-600">You might not be ready for full consolidation yet, but it's good to have a roadmap. Learn from businesses that have gone through this before.</p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left">
                      <p className="font-bold text-slate-600 mb-2 flex items-center gap-2"><Database size={16}/> Future Growth Fit</p>
                      <p className="text-sm text-slate-600">Download our SME consolidation case studies to see how we've helped similar businesses.</p>
                    </div>
                    <C9Button onClick={onClose} variant="outline" className="w-full h-14 rounded-full border-2 border-slate-200 bg-white text-slate-900 hover:bg-slate-50 text-lg font-bold">Download Case Studies</C9Button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO
   ───────────────────────────────────────────────────────── */
const Hero = ({ onOpenQualifier }: { onOpenQualifier: () => void }) => (
  <section className="relative overflow-hidden bg-white py-12 md:py-16">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(#5D00D6 1px, transparent 1px), linear-gradient(90deg, #5D00D6 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />
    
    <div className={`${C} relative z-10`}>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5D00D6]/8 border border-[#5D00D6]/20 mb-8">
              <ShieldCheck size={14} className="text-[#5D00D6]" />
              <span className="c9-eyebrow !mb-0 text-[#5D00D6]">Consolidated Infrastructure Control</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="c9-hero-title mb-8 font-clash">
              Your IT Shouldn't Require <span className="text-[#5D00D6]">Managing Multiple Vendors</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="c9-body mb-10 max-w-[600px] font-dm-sans">
              We consolidate your fragmented systems into one accountable partner. No disruption. No finger-pointing. Just stable, managed infrastructure.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12 font-dm-sans">
              {[
                { label: '99.9% uptime guarantee', icon: <Activity /> },
                { label: '4-6 week migration (zero downtime)', icon: <Zap /> },
                { label: 'One invoice, one contact, one SLA', icon: <FileText /> },
                { label: 'Australian-based support team', icon: <Users /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-[#5D00D6] shrink-0">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 16 })}</div>
                  <span className="text-slate-700 font-bold text-[14px] uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <C9Button 
                onClick={onOpenQualifier}
                className="h-14 px-10 rounded-full"
                size="lg"
              >
                Get Your Free Assessment
              </C9Button>
              <C9Button 
                variant="outline"
                onClick={onOpenQualifier}
                className="h-14 px-10 rounded-full border-2"
                size="lg"
              >
                See If We're a Fit
              </C9Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="right" className="hidden lg:block relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/5] bg-slate-100 border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
              alt="C9 team managing infrastructure"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1024]/30 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
               <div className="flex gap-4 items-center">
                  <div className="flex -space-x-2">
                     {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" className="w-full h-full object-cover" />
                        </div>
                     ))}
                  </div>
                  <div>
                     <p className="text-[12px] font-bold text-[#0c1024] font-dm-sans">Trusted by 50+ Australian SMEs</p>
                     <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-[#5D00D6] text-[#5D00D6]" />)}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const FileText = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

/* ─────────────────────────────────────────────────────────
   SECTION 2 — INDUSTRY SPECIFIC (Tabs)
   ───────────────────────────────────────────────────────── */
const IndustrySections = () => {
  const industries = [
    {
      id: 'retail',
      label: 'Retail',
      icon: <Store size={18} />,
      pains: ['POS systems down = lost sales', 'Multiple vendors = finger-pointing', 'Guest WiFi issues = customer complaints'],
      solution: 'One partner owns your entire stack. POS connectivity, guest WiFi, security, everything. We guarantee uptime.',
      caseStudy: {
        title: 'Local Retail Chain (12 locations, 50 employees)',
        problem: '4 different vendors managing POS, WiFi, security, and networking. When POS went down, no one knew who to call.',
        results: ['99.9% uptime (previously 94%)', 'Zero downtime during transition', '$40K annual savings from consolidation', '2-hour critical response time'],
        quote: 'We used to lose $5K per hour when POS went down. Now we have one number to call and it\'s fixed in minutes.',
        author: 'Sarah Chen, Operations Manager'
      }
    },
    {
      id: 'professional',
      label: 'Professional Services',
      icon: <Briefcase size={18} />,
      pains: ['Client data security is critical', 'Multiple cloud providers = compliance headaches', 'Collaboration tools scattered across vendors'],
      solution: 'Unified security layer. All your tools integrated. One accountable partner for compliance.',
      caseStudy: {
        title: 'Professional Services Firm (35 employees, 3 offices)',
        problem: 'Microsoft 365, AWS, separate telco provider, on-premise servers. No unified security. Compliance audit nightmare.',
        results: ['100% data security compliance', '60% faster team collaboration', '$25K annual savings', 'Zero security incidents during transition'],
        quote: 'C9 took the compliance burden off our shoulders. We can now focus on serving clients instead of managing vendors.',
        author: 'Michael Ross, CEO'
      }
    },
    {
      id: 'hospitality',
      label: 'Hospitality',
      icon: <Utensils size={18} />,
      pains: ['Guest WiFi reliability = satisfaction', 'POS systems down during service = chaos', 'Multiple vendor contacts = slow resolution'],
      solution: 'One partner handles everything. Guest WiFi, POS, back-office, security. We guarantee reliability.',
      caseStudy: {
        title: 'Hospitality Group (5 venues, 80 employees)',
        problem: '3 different vendors for WiFi, POS, and security. Guest WiFi outages during peak hours. Slow vendor response.',
        results: ['99.9% WiFi uptime (previously 92%)', 'Zero guest complaints about connectivity', '1-hour average response time', '$35K annual savings'],
        quote: 'Guest WiFi reliability is now our competitive advantage. Our customers comment on how fast and reliable our WiFi is.',
        author: 'James Thompson, General Manager'
      }
    },
    {
      id: 'manufacturing',
      label: 'Manufacturing',
      icon: <Warehouse size={18} />,
      pains: ['Production downtime = lost revenue', 'Inventory system reliability = critical', 'Production data security = essential'],
      solution: 'One partner owns your production systems. 24/7 monitoring. Proactive maintenance. We prevent downtime before it happens.',
      caseStudy: {
        title: 'Manufacturing SME (45 employees, 2 locations)',
        problem: 'Multiple vendors for production systems, inventory management, security. Downtime during critical production runs.',
        results: ['99.9% production system uptime', '$500K+ annual savings from prevented downtime', 'Zero unplanned downtime in 12 months', '24/7 proactive monitoring'],
        quote: 'C9 prevented a $100K downtime event by catching an issue before it happened. That alone paid for their service for the year.',
        author: 'David Lee, Operations Director'
      }
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-100">
      <div className={C}>
        <FadeIn className="text-center mb-16">
          <span className="c9-eyebrow mb-4 block">Industry Expertise</span>
          <h2 className="c9-section-heading mb-6 font-clash">Proven Outcomes in Your Industry</h2>
          <p className="c9-body max-w-2xl mx-auto font-dm-sans">We understand the specific operational risks of your sector and have established models to mitigate them.</p>
        </FadeIn>

        <Tabs defaultValue="retail" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-12 p-0">
            {industries.map(ind => (
              <TabsTrigger 
                key={ind.id} 
                value={ind.id}
                className="px-6 py-3 rounded-full border-2 border-slate-200 bg-white data-[state=active]:bg-[#5D00D6] data-[state=active]:text-white data-[state=active]:border-[#5D00D6] text-slate-600 font-bold transition-all h-12 font-clash"
              >
                <span className="flex items-center gap-2">{ind.icon} {ind.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {industries.map(ind => (
            <TabsContent key={ind.id} value={ind.id} className="focus-visible:outline-none">
              <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-8">
                <div className="space-y-8 font-dm-sans">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="text-rose-500 font-black uppercase tracking-[0.2em] text-[10px] mb-6">Common Pain Points</h4>
                    <ul className="space-y-4">
                      {ind.pains.map((p, i) => (
                        <li key={i} className="flex gap-3 text-slate-600 font-medium text-[14px]">
                          <AlertTriangle size={16} className="text-rose-400 shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#5D00D6] p-8 rounded-2xl text-white shadow-xl shadow-purple-900/10">
                    <h4 className="text-white/60 font-black uppercase tracking-[0.2em] text-[10px] mb-4">The C9 Solution</h4>
                    <p className="text-lg font-bold leading-relaxed font-clash">{ind.solution}</p>
                  </div>
                </div>

                <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden font-dm-sans">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D00D6]/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                  <Badge className="mb-6 bg-slate-100 text-slate-600 hover:bg-slate-100 border-none font-bold uppercase tracking-widest text-[9px]">CASE STUDY</Badge>
                  <h3 className="text-2xl font-bold text-[#0c1024] mb-8 font-clash leading-tight">{ind.caseStudy.title}</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Problem</p>
                      <p className="text-slate-600 text-[13px] leading-relaxed">{ind.caseStudy.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-[#5D00D6] uppercase tracking-widest mb-3">Results</p>
                      <ul className="space-y-2">
                        {ind.caseStudy.results.map((r, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-900 font-bold text-[13px]">
                            <CheckCircle size={14} className="text-green-500" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100 italic text-slate-500 leading-relaxed">
                    <p className="mb-4 text-lg text-slate-700 font-clash">"{ind.caseStudy.quote}"</p>
                    <p className="text-sm font-bold text-[#0c1024] not-italic font-dm-sans">— {ind.caseStudy.author}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 3 — TRANSITION STORY (Timeline)
   ───────────────────────────────────────────────────────── */
const TransitionStory = () => {
  const stages = [
    {
      title: "Discovery & Planning",
      subtitle: "Environment Mapping",
      desc: "Inventory all systems, vendors, and contracts. Identify dependencies and failure points. Assess security gaps.",
      role: "Provide system access, answer questions about environment.",
      timeline: "10-14 days",
      impact: "Zero"
    },
    {
      title: "Risk Stabilisation",
      subtitle: "Addressing Risks",
      desc: "Remediate security vulnerabilities and fix critical performance issues. Prepare for transition.",
      role: "Observe improvements, approve changes, provide feedback.",
      timeline: "7 days",
      impact: "Improvements"
    },
    {
      title: "Parallel Build",
      subtitle: "Stack Build-Out",
      desc: "Build our managed environment in our infrastructure. Test everything thoroughly while your systems continue running.",
      role: "Observe build process, validate configurations.",
      timeline: "7 days",
      impact: "Zero"
    },
    {
      title: "Validation & Testing",
      subtitle: "Integrity Checks",
      desc: "Run comprehensive testing. Validate all systems against requirements. Run both systems side-by-side.",
      role: "Comprehensive testing, sign-off on readiness.",
      timeline: "7 days",
      impact: "Zero"
    },
    {
      title: "Controlled Switch",
      subtitle: "Traffic Migration",
      desc: "Choose a low-impact window (usually after hours). Switch traffic to our stack with 24/7 monitoring.",
      role: "Confirm everything works, available for questions.",
      timeline: "4-8 hours",
      impact: "Zero"
    },
    {
      title: "Optimization",
      subtitle: "Active Governance",
      desc: "24/7 monitoring and support. Ongoing optimization and regular reviews. Proactive maintenance.",
      role: "Enjoy stable infrastructure, attend quarterly reviews.",
      timeline: "Ongoing",
      impact: "Improved Stability"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden" id="takeover-process">
      <div className={C}>
        <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-16 lg:gap-24">
          <div>
            <FadeIn className="sticky top-24">
              <span className="c9-eyebrow mb-4 block">Zero-Disruption Transition</span>
              <h2 className="c9-section-heading mb-8 font-clash">How We Migrate Without Disruption</h2>
              <p className="c9-body mb-10 font-dm-sans">
                A detailed, transparent process that keeps your business running while we consolidate your infrastructure.
              </p>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 border-l-4 border-l-[#5D00D6] font-dm-sans">
                <p className="text-[#0c1024] font-bold text-lg mb-2 font-clash">The C9 Guarantee</p>
                <p className="text-slate-500 text-[14px]">Most migrations take 4-6 weeks. Your business operates normally throughout. Zero downtime guaranteed.</p>
              </div>
            </FadeIn>
          </div>

          <div className="relative font-dm-sans">
            <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px bg-slate-100 hidden sm:block" />
            
            <div className="space-y-8">
              {stages.map((s, i) => (
                <FadeIn key={i} delay={i * 0.05} direction="right" className="relative pl-0 sm:pl-20">
                  <div className="absolute left-0 lg:left-8 top-2 -ml-[9px] w-[18px] h-[18px] rounded-full border-4 border-white bg-[#5D00D6] shadow-[0_0_0_8px_rgba(93,0,214,0.05)] hidden sm:block" />
                  
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-[#5D00D6]/20 transition-all group">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#5D00D6] mb-1">Stage {i+1}</p>
                        <h4 className="text-lg font-bold text-[#0c1024] mb-1 font-clash">{s.title}</h4>
                        <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">{s.subtitle}</p>
                      </div>
                      <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                        {s.timeline}
                      </div>
                    </div>
                    
                    <p className="text-slate-600 text-[14px] mb-8 leading-relaxed">{s.desc}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200/60">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Your Role</p>
                        <p className="text-slate-700 text-[12px] font-medium leading-relaxed">{s.role}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Business Impact</p>
                        <p className="text-[#5D00D6] text-[12px] font-bold uppercase tracking-widest">{s.impact}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 4 — COST & TIMELINE
   ───────────────────────────────────────────────────────── */
const CostAndTimeline = () => (
  <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100 font-dm-sans">
    <div className={C}>
      <div className="grid lg:grid-cols-2 gap-12 items-stretch">
        <FadeIn direction="left" className="h-full">
          <div className="rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl bg-white h-full flex flex-col">
            <h3 className="text-2xl font-bold text-[#0c1024] mb-4 font-clash">Transparent Pricing</h3>
            <p className="c9-body mb-10 text-[15px]">We provide a fixed monthly cost based on your environment size and complexity. No setup fees, no lock-in contracts.</p>
            
            <div className="bg-[#5D00D6]/5 rounded-2xl p-8 mb-10 text-center">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2">Typical Monthly Cost</p>
              <p className="text-4xl md:text-5xl font-bold text-[#5D00D6] mb-2 font-clash">$2,500 – $7,500</p>
              <p className="text-slate-500 text-xs italic font-medium">Includes 24/7 governance and consolidation</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10 mt-auto">
              {[
                '24/7 monitoring',
                'Vendor consolidation',
                'Hardware management',
                'SLA enforcement',
                'Optimization reviews',
                'Australian support'
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-[12px] font-bold text-slate-700 uppercase tracking-widest">
                  <CheckCircle size={14} className="text-green-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-100">
              <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Est. ROI</p>
                  <p className="text-slate-900 font-bold text-sm uppercase tracking-wider">~25% annual savings</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Payback</p>
                  <p className="text-slate-900 font-bold text-sm uppercase tracking-wider">3-6 Months</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.1} className="h-full">
          <div className="rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl bg-white h-full flex flex-col">
            <h3 className="text-2xl font-bold text-[#0c1024] mb-4 font-clash">Fast Migration</h3>
            <p className="c9-body mb-10 text-[15px]">Most businesses complete the full consolidation in 5 weeks. Your business operates normally throughout.</p>
            
            <div className="bg-slate-900 rounded-2xl p-8 mb-10 text-center text-white">
              <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] mb-2">Total Migration Time</p>
              <p className="text-4xl md:text-5xl font-bold mb-2 font-clash">4-6 Weeks</p>
              <p className="text-white/60 text-xs italic font-medium">Zero downtime guaranteed</p>
            </div>

            <div className="space-y-6 mb-10 mt-auto">
              {[
                { w: 'Week 1-2', t: 'Discovery & Planning', desc: 'Environment mapping' },
                { w: 'Week 2-4', t: 'Parallel Build & Test', desc: 'Running in background' },
                { w: 'Week 5-6', t: 'Controlled Switch', desc: '4-8 hour window' }
              ].map(item => (
                <div key={item.w} className="flex gap-4">
                  <div className="w-20 text-[10px] font-black text-[#5D00D6] uppercase tracking-[0.2em] pt-1 shrink-0">{item.w}</div>
                  <div>
                    <p className="text-slate-900 font-bold text-[14px] font-clash uppercase tracking-wider">{item.t}</p>
                    <p className="text-slate-500 text-[12px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-orange-50 border border-orange-100 flex gap-4 items-center">
              <Clock className="text-orange-500 shrink-0" size={24} />
              <div>
                <p className="text-[9px] font-black text-orange-400 uppercase tracking-widest mb-0.5">Urgent Need?</p>
                <p className="text-orange-900 font-bold text-[13px] uppercase tracking-wider">Fast-track in <span className="underline decoration-orange-300">under 48 hours</span>.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION 5 — FAQ (Accordion)
   ───────────────────────────────────────────────────────── */
const FAQSection = () => {
  const faqs = [
    {
      q: "How do you ensure zero downtime during the switch?",
      a: "We use a parallel transition model. We build and test our environment alongside your current setup for 2 weeks. We only flip the switch once everything is validated and verified."
    },
    {
      q: "What happens to our current vendor contracts?",
      a: "We handle all negotiations and terminations. You don't have to manage vendor relationships anymore. We coordinate the exit and handle the logistics."
    },
    {
      q: "How fast is your support team?",
      a: "Critical issues: 2-hour response time guaranteed. All support from Australian-based engineers. You have a dedicated support contact who knows your environment."
    },
    {
      q: "Will you replace all our existing hardware?",
      a: "Only if needed. We assess your environment and recommend upgrades only when they'll improve performance or reduce costs."
    },
    {
      q: "What if we need to switch providers later?",
      a: "You can exit anytime. We provide full documentation and complete system handover. We don't lock you in."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className={C}>
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="c9-eyebrow mb-4 block">Addressing Your Concerns</span>
            <h2 className="c9-section-heading mb-6 font-clash">Frequently Asked Questions</h2>
            <p className="c9-body font-dm-sans">Honest, specific answers to the most common questions from Brownfield CEOs.</p>
          </FadeIn>

          {/* @ts-ignore */}
          <Accordion type="single" collapsible className="space-y-3 font-dm-sans">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05} direction="none">
                <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-xl px-6 py-1 shadow-sm border border-slate-100 data-[state=open]:border-[#5D00D6]/20 transition-all">
                  <AccordionTrigger className="hover:no-underline py-4 text-left font-bold text-slate-900 font-clash tracking-wide text-[16px]">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6 pt-2 text-[14px]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </FadeIn>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   SECTION 6 — FINAL CTA
   ───────────────────────────────────────────────────────── */
const FinalCTA = ({ onOpenQualifier }: { onOpenQualifier: () => void }) => (
  <section className="py-16 md:py-20 bg-white relative overflow-hidden font-dm-sans">
     <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
     
     <div className={C}>
        <div className="max-w-4xl mx-auto text-center">
           <FadeIn>
              <h2 className="c9-hero-title mb-8 font-clash">
                Ready to Consolidate Your Infrastructure?
              </h2>
              <p className="c9-body mb-12 max-w-2xl mx-auto">
                Let's review your environment and create a clear roadmap for consolidation. No disruption. No surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                 <C9Button 
                   onClick={onOpenQualifier}
                   className="h-16 px-12 rounded-full"
                   size="lg"
                 >
                    Get Your Free Assessment
                 </C9Button>
                 <C9Button 
                   variant="outline"
                   onClick={onOpenQualifier}
                   className="h-16 px-12 rounded-full border-2"
                   size="lg"
                 >
                    Download Case Studies
                 </C9Button>
              </div>
              <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3">
                <ShieldCheck size={14} className="text-[#5D00D6]" />
                99.9% Uptime Guarantee. Zero Downtime.
              </p>
           </FadeIn>
        </div>
     </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   SECTION — TESTIMONIALS
   ───────────────────────────────────────────────────────── */
const Testimonials = () => (
  <section className="py-12 md:py-16 bg-white">
    <div className={C}>
       <FadeIn className="text-center mb-16">
          <span className="c9-eyebrow mb-4 block">Client Feedback</span>
          <h2 className="c9-section-heading mb-6 font-clash">Trusted by Growing Australian Businesses</h2>
       </FadeIn>

       <div className="grid md:grid-cols-2 gap-8 font-dm-sans">
          {[
            {
              name: 'Sarah Chen',
              role: 'Operations Manager',
              company: 'National Logistics',
              quote: 'Switching to C9 was seamless. We were terrified that changing our network would break our dispatching system, but they managed the transition in the background.',
              img: 'https://i.pravatar.cc/100?img=11',
              metric: 'Zero Downtime'
            },
            {
              name: 'Michael Ross',
              role: 'CEO',
              company: 'Professional Hub',
              quote: 'The difference in response time is night and day. We used to wait hours for simple helpdesk tickets; now we have a dedicated partner who owns every problem.',
              img: 'https://i.pravatar.cc/100?img=12',
              metric: '60% Faster Ops'
            }
          ].map((t, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
               <Card className="rounded-3xl p-10 border-slate-100 shadow-lg bg-white h-full relative overflow-hidden group border border-slate-100">
                  <div className="absolute top-0 right-0 p-8 text-[#5D00D6]/10 group-hover:text-[#5D00D6]/20 transition-colors">
                     <MessageSquare size={64} />
                  </div>
                  <div className="flex gap-1 mb-6">
                     {[1,2,3,4,5].map(star => <Star key={star} size={14} className="fill-[#5D00D6] text-[#5D00D6]" />)}
                  </div>
                  <p className="text-[17px] text-slate-700 leading-relaxed mb-10 italic font-medium font-clash tracking-wide">"{t.quote}"</p>
                  
                  <div className="flex items-center justify-between gap-4 pt-8 border-t border-slate-50">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-100">
                           <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                           <p className="font-bold text-slate-900 text-[16px] font-clash leading-none mb-1">{t.name}</p>
                           <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">{t.role}</p>
                           <p className="text-[9px] text-[#5D00D6] font-black uppercase tracking-[0.2em] mt-1">{t.company}</p>
                        </div>
                     </div>
                     <div className="bg-purple-50 text-[#5D00D6] font-black text-[10px] px-4 py-2 rounded-lg uppercase tracking-widest hidden sm:block">
                        {t.metric}
                     </div>
                  </div>
               </Card>
            </FadeIn>
          ))}
       </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────────────────── */
export default function SmallBusinessPageV2() {
  const [isQualifierOpen, setIsQualifierOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white selection:bg-[#5D00D6]/10 selection:text-[#5D00D6]">
      <Hero onOpenQualifier={() => setIsQualifierOpen(true)} />
      
      <div className="bg-slate-50 py-10 border-y border-slate-100">
         <div className={C}>
            <p className="text-center text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8">Trusted By Leading Australian Businesses</p>
            <WpClientTicker grayscale={true} opacity={0.6} />
         </div>
      </div>

      <IndustrySections />
      <TransitionStory />
      <CostAndTimeline />
      <Testimonials />
      <FAQSection />
      
      <FinalCTA onOpenQualifier={() => setIsQualifierOpen(true)} />

      <QualificationModal 
        isOpen={isQualifierOpen} 
        onClose={() => setIsQualifierOpen(false)} 
      />

      <section className="py-16 bg-slate-50 border-t border-slate-100 font-dm-sans">
         <div className={C}>
            <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
               <div>
                  <h2 className="text-2xl font-bold text-[#0c1024] mb-6 font-clash uppercase tracking-wide">Proven Track Record</h2>
                  <div className="space-y-6">
                     {[
                        { label: '50+ successful migrations', icon: <CheckCircle /> },
                        { label: '99.9% uptime SLA', icon: <Activity /> },
                        { label: '4.9/5 Google rating', icon: <Star /> },
                        { label: 'Zero unplanned downtime', icon: <ShieldCheck /> }
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#5D00D6] shadow-sm">
                              {React.cloneElement(item.icon as React.ReactElement<any>, { size: 16 })}
                           </div>
                           <span className="text-slate-700 font-bold text-sm uppercase tracking-widest">{item.label}</span>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  {[1,2,3,4].map(i => (
                     <div key={i} className="aspect-square rounded-2xl bg-white border border-slate-100 flex items-center justify-center p-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                        <img src={`https://placehold.co/200x100/ffffff/64748b?text=Cert+${i}`} alt="Certification" className="max-w-full h-auto" />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <footer className="py-10 bg-white border-t border-slate-100 text-center font-dm-sans">
         <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.3em]">© 2026 C9 Communications. Australian High-Accountability Managed IT.</p>
      </footer>
    </main>
  );
}
