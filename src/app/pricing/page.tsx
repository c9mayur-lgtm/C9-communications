'use client';

import { useState } from 'react';
import { Check, ArrowRight, Minus, Clock, DollarSign, ArrowUp, Zap, Phone, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/design-system/Section';
import { H1, H2, H3, Body, Label } from '@/components/design-system/Typography';
import { C9Button } from '@/components/design-system/C9Button';
import { cn } from '@/lib/utils';

/* ---- Data ---- */
const NBN_PLANS = [
  {
    speed: '50/20',
    tier: 'Starter',
    price: 79,
    features: ['Typical Evening 50 Mbps', 'Unlimited Data', 'Business Support', 'Static IP Included'],
    highlight: false,
  },
  {
    speed: '100/40',
    tier: 'Business',
    price: 99,
    features: ['Typical Evening 100 Mbps', 'Priority AU Support', '4G Backup Compatible', 'Optimised for Cloud Voice'],
    highlight: true,
  },
  {
    speed: '250/100',
    tier: 'Performance',
    price: 149,
    features: ['Typical Evening 250 Mbps', 'High-Speed Uploads', '24/7 Priority Support', 'Pro-Active Monitoring'],
    highlight: false,
  },
];

const VOICE_TABLE = [
  { feature: 'Monthly Fee', basic: '$20/user', ultimate: '$45/user' },
  { feature: 'Unlimited AU Calls', basic: true, ultimate: true },
  { feature: 'Auto-Attendant (IVR)', basic: true, ultimate: true },
  { feature: 'Call Recording', basic: '30 Days', ultimate: 'Unlimited' },
  { feature: 'CRM Integration', basic: 'Basic', ultimate: 'Advanced + API' },
  { feature: 'Mobile & Desktop App', basic: true, ultimate: true },
  { feature: 'Microsoft Teams Integration', basic: false, ultimate: true },
  { feature: 'Dedicated Account Manager', basic: false, ultimate: true },
];

const FAQ = [
  { q: 'What is the contract length?', a: "All standard nbn and C9 phone system voice plans are month-to-month with zero lock-in. You're free to scale up or move at any time.", icon: Clock },
  { q: 'Are there any setup fees?', a: "For standard nbn connections and C9 phone system voice systems, we offer $0 setup. Complex enterprise deployments are quoted upfront.", icon: DollarSign },
  { q: 'Can I upgrade mid-cycle?', a: "Absolutely. Plan upgrades take effect within 1 business day, or instantly for voice user seats via your portal.", icon: ArrowUp },
];

const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string; style?: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function PricingPage() {
  const [quizStep, setQuizStep] = useState(1);
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [result, setResult] = useState<{ plan: string; text: string } | null>(null);

  const handleSelect = (step: number, value: string) => {
    const next = { ...selections, [step]: value };
    setSelections(next);
    if (step < 3) {
      setQuizStep(step + 1);
    } else {
      let plan = 'Small Business nbn™';
      let text = "We recommend our Business 100/40 plan for reliable, scalable performance.";
      if (next[3] === 'Voice Only' || next[3] === 'Unified Comm') {
        plan = next[2] === '50+' ? 'C9 phone system Ultimate' : 'C9 phone system Basic';
        text = `Since voice is your priority, C9 phone system ${next[2] === '50+' ? 'Ultimate' : 'Basic'} fits your team perfectly.`;
      } else if (next[2] === '50+' || next[1] === 'Enterprise') {
        plan = 'Performance 250 nbn';
        text = "Your organisation's scale calls for our Performance tier with proactive monitoring.";
      }
      setResult({ plan, text });
      setQuizStep(4);
    }
  };

  const resetQuiz = () => {
    setQuizStep(1);
    setSelections({});
    setResult(null);
  };

  return (
    <div className="pt-0 bg-white">
      {/* ── HERO ── */}
      <Section className="text-center" bg="none">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-[#F4F0FA] border border-[#5D00D6]/10 px-4 py-2 rounded-full mb-8">
            <Zap size={14} className="text-[#5D00D6]" fill="currentColor" />
            <span className="text-[12px] font-bold text-[#5D00D6] uppercase tracking-wider">Transparent Pricing</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <H1 className="mb-6">
            Plans that scale<br />
            <span className="text-[#5D00D6]">with your ambition.</span>
          </H1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Body className="max-w-xl mx-auto">
            Month-to-month, zero lock-in plans designed for Australian businesses of every size.
          </Body>
        </FadeIn>
      </Section>

      {/* ── nbn PLANS ── */}
      <Section className="bg-gray-50/50">
        <div className="text-center mb-16">
          <FadeIn>
            <Label>nbn Solutions</Label>
            <H2>Ultra-Fast Small Business nbn™</H2>
          </FadeIn>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NBN_PLANS.map((plan, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={cn(
                "relative p-10 rounded-[24px] border transition-all duration-300 h-full flex flex-col group",
                plan.highlight 
                  ? "bg-white border-[#5D00D6]/20 shadow-2xl shadow-purple-900/10" 
                  : "bg-white border-gray-100 hover:border-[#5D00D6]/20 hover:shadow-xl"
              )}>
                {plan.highlight && (
                  <div className="absolute top-6 right-6 bg-[#5D00D6] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="text-[32px] font-bold text-[#0c1024] mb-1 tracking-tight">{plan.speed}</div>
                <div className="text-[#5D00D6] font-bold uppercase tracking-widest text-xs mb-8">{plan.tier}</div>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-gray-400 font-medium">$</span>
                  <span className="text-5xl font-bold text-[#0c1024] tracking-tight">{plan.price}</span>
                  <span className="text-gray-500 font-medium">/mo</span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-gray-600 font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#F4F0FA] flex items-center justify-center shrink-0">
                        <Check size={12} className="text-[#5D00D6]" strokeWidth={3} />
                      </div>
                      <span className="text-[14px]">{f}</span>
                    </li>
                  ))}
                </ul>

                <C9Button variant={plan.highlight ? "default" : "outline"} className="w-full">
                  Get Started <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </C9Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── VOICE PLANS TABLE ── */}
      <Section>
        <div className="text-center mb-16">
          <FadeIn>
            <Label>C9 phone system Voice Plans</Label>
            <H2>Everything in one box.</H2>
          </FadeIn>
        </div>
        <FadeIn className="max-w-4xl mx-auto overflow-hidden rounded-[24px] border border-gray-100 shadow-xl shadow-purple-900/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="p-8 text-[12px] font-bold text-gray-500 uppercase tracking-widest">Feature</th>
                  <th className="p-8 text-center text-[18px] font-bold text-[#0c1024]">Basic</th>
                  <th className="p-8 text-center text-[18px] font-bold text-[#5D00D6] bg-[#F4F0FA] border-x border-[#5D00D6]/10">Ultimate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {VOICE_TABLE.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/30 transition-colors">
                    <td className="p-6 px-8 text-gray-600 font-medium">{row.feature}</td>
                    <td className="p-6 text-center">
                      {typeof row.basic === 'boolean' 
                        ? (row.basic ? <Check className="mx-auto text-[#5D00D6]" size={20} strokeWidth={3} /> : <Minus className="mx-auto text-gray-300" size={20} />)
                        : <span className="font-bold text-[#0c1024]">{row.basic}</span>}
                    </td>
                    <td className="p-6 text-center bg-[#F4F0FA]/30 border-x border-[#5D00D6]/5">
                      {typeof row.ultimate === 'boolean' 
                        ? (row.ultimate ? <Check className="mx-auto text-[#5D00D6]" size={20} strokeWidth={3} /> : <Minus className="mx-auto text-gray-300" size={20} />)
                        : <span className="font-bold text-[#5D00D6]">{row.ultimate}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Section>

      {/* ── MOBILE PROMO ── */}
      <Section className="bg-white">
        <FadeIn>
          <div className="relative overflow-hidden p-12 md:p-16 rounded-[32px] bg-gradient-to-br from-[#0c1024] to-[#1e1b4b] text-white">
            <div className="absolute right-0 bottom-0 opacity-10 blur-3xl w-96 h-96 bg-[#5D00D6] rounded-full translate-x-1/2 translate-y-1/2" />
            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
              <div>
                <Label className="text-[#A5B4FC]">Business Mobile</Label>
                <H2 className="text-white mb-6">Premium Mobile Plans</H2>
                <Body className="text-gray-400 max-w-lg mb-8">
                  Powered by Australia's best network. 5G included, unlimited talk & text, shared data pools for your entire team.
                </Body>
                <C9Button variant="secondary" className="bg-white text-[#0c1024] hover:bg-gray-100">
                  <Phone size={16} className="mr-2" /> View Mobile Plans
                </C9Button>
              </div>
              <div className="hidden lg:block">
                <Zap size={200} className="text-[#5D00D6] opacity-20" strokeWidth={0.5} />
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ── QUIZ ── */}
      <Section className="bg-[#F8FAFF]">
        <div className="text-center mb-16">
          <FadeIn>
            <Label>Self-Qualify</Label>
            <H2>What's the best plan for you?</H2>
          </FadeIn>
        </div>
        <FadeIn className="max-w-3xl mx-auto">
          <div className="bg-white rounded-[32px] p-12 border border-gray-100 shadow-xl shadow-purple-900/5">
            <AnimatePresence mode="wait">
              {quizStep <= 3 ? (
                <motion.div
                  key={quizStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <H3 className="mb-10 text-center">
                    {quizStep === 1 && "How would you describe your business?"}
                    {quizStep === 2 && "How many employees?"}
                    {quizStep === 3 && "What is your primary need?"}
                  </H3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {(quizStep === 1 ? ['Solo / Startup', 'Growing SME', 'Enterprise'] :
                      quizStep === 2 ? ['1–10', '11–50', '50+'] :
                      ['Voice Only', 'Internet Only', 'Unified Comm']).map(opt => (
                      <button
                        key={opt}
                        onClick={() => handleSelect(quizStep, opt)}
                        className="p-6 rounded-2xl border border-gray-100 hover:border-[#5D00D6] hover:bg-[#F4F0FA] text-[#0c1024] font-bold transition-all text-center cursor-pointer group"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <div className="mt-12 flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-400">Step {quizStep} of 3</span>
                    <div className="w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#5D00D6]"
                        initial={{ width: 0 }}
                        animate={{ width: `${(quizStep / 3) * 100}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#F4F0FA] text-[#5D00D6] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} strokeWidth={2.5} />
                  </div>
                  <H3 className="mb-4">We recommend <span className="text-[#5D00D6]">{result?.plan}</span></H3>
                  <Body className="mb-10">{result?.text}</Body>
                  <div className="flex flex-wrap justify-center gap-4">
                    <C9Button>Get Started <ArrowRight size={16} className="ml-2" /></C9Button>
                    <C9Button variant="ghost" onClick={resetQuiz}>Start Again</C9Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <div className="text-center mb-16">
          <FadeIn>
            <H2>Pricing FAQ</H2>
          </FadeIn>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {FAQ.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-[24px] border border-gray-100 bg-white hover:border-[#5D00D6]/20 transition-all">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-[#5D00D6]"><faq.icon size={20} /></div>
                  <h4 className="font-bold text-[18px] text-[#0c1024]">{faq.q}</h4>
                </div>
                <Body className="pl-9">{faq.a}</Body>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section className="pb-32">
        <FadeIn>
          <div className="p-12 md:p-20 rounded-[40px] bg-[#F4F0FA] border border-[#5D00D6]/10 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-[#5D00D6] opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap size={300} strokeWidth={0.5} />
            </div>
            <H2 className="mb-6 relative z-10">Need a custom enterprise solution?</H2>
            <Body className="max-w-lg mx-auto mb-10 relative z-10">
              Multi-site, dedicated fibre, or complex integration — we build from the ground up with transparent, upfront pricing.
            </Body>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <C9Button>
                <Phone size={16} className="mr-2" /> Call 1800 000 299
              </C9Button>
              <C9Button variant="outline" className="bg-white">
                Contact Solutions Team
              </C9Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
