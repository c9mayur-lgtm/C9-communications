import { useState, useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Minus, Clock, DollarSign, ArrowUp, Zap, Phone, CheckCircle, ArrowRight } from 'lucide-react';

/* ---- FadeIn ---- */
const FadeIn = ({ children, delay = 0, style }: { children: ReactNode; delay?: number; style?: React.CSSProperties }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-8%' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

/* ---- Types ---- */
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
  { q: 'What is the contract length?', a: "All standard NBN and C9X voice plans are month-to-month with zero lock-in. You're free to scale up or move at any time.", icon: <Clock size={18} /> },
  { q: 'Are there any setup fees?', a: "For standard NBN connections and C9X voice systems, we offer $0 setup. Complex enterprise deployments are quoted upfront.", icon: <DollarSign size={18} /> },
  { q: 'Can I upgrade mid-cycle?', a: "Absolutely. Plan upgrades take effect within 1 business day, or instantly for voice user seats via your portal.", icon: <ArrowUp size={18} /> },
];

/* ---- Page ---- */
export const Pricing = () => {
  const [quizStep, setQuizStep] = useState(1);
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [result, setResult] = useState<{ plan: string; text: string } | null>(null);

  const handleSelect = (step: number, value: string) => {
    const next = { ...selections, [step]: value };
    setSelections(next);
    if (step < 3) { setQuizStep(step + 1); }
    else {
      let plan = 'Business NBN';
      let text = "We recommend our Business 100/40 plan for reliable, scalable performance.";
      if (next[3] === 'Voice Only' || next[3] === 'Unified Comm') {
        plan = next[2] === '50+' ? 'C9X Ultimate' : 'C9X Basic';
        text = `Since voice is your priority, C9X ${next[2] === '50+' ? 'Ultimate' : 'Basic'} fits your team perfectly.`;
      } else if (next[2] === '50+' || next[1] === 'Enterprise') {
        plan = 'Performance 250 NBN';
        text = "Your organisation's scale calls for our Performance tier with proactive monitoring.";
      }
      setResult({ plan, text });
      setQuizStep(4);
    }
  };

  const resetQuiz = () => { setQuizStep(1); setSelections({}); setResult(null); };

  const card = (highlight: boolean) => ({
    background: highlight
      ? 'linear-gradient(135deg, rgba(107,33,168,0.5) 0%, rgba(124,58,237,0.3) 100%)'
      : 'rgba(255,255,255,0.03)',
    border: `1px solid ${highlight ? 'rgba(167,139,250,0.5)' : 'rgba(167,139,250,0.15)'}`,
    borderRadius: '20px',
    padding: '36px',
    display: 'flex',
    flexDirection: 'column' as const,
    position: 'relative' as const,
    overflow: 'hidden' as const,
    transition: 'all 0.35s ease',
  });

  return (
    <div style={{ background: '#0A0010', color: '#F8F5FF', paddingTop: '72px' }}>
      
      {/* ── HERO ── */}
      <section style={{ padding: '100px 0 80px', textAlign: 'center', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.3)',
              color: '#C4B5FD', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '6px 14px', borderRadius: '100px', marginBottom: '24px',
            }}>
              <Zap size={11} fill="currentColor" /> Transparent Pricing
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontWeight: 900, letterSpacing: '-0.04em', color: '#fff',
              marginBottom: '20px', lineHeight: 1.0,
            }}>
              Plans that scale<br />
              <span style={{
                background: 'linear-gradient(135deg, #C4B5FD 0%, #A855F7 60%)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>with your ambition.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ lineHeight: 1.7, color: 'rgba(248,245,255,0.55)', maxWidth: '540px', margin: '0 auto' }}>
              Month-to-month, zero lock-in plans designed for Australian businesses of every size.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── NBN PLANS ── */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.3)', color: '#C4B5FD', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '100px', marginBottom: '16px' }}>NBN Solutions</span>
            <h2 style={{ fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>Ultra-Fast Business NBN</h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {NBN_PLANS.map((plan, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ ...card(plan.highlight), height: '100%' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                >
                  {plan.highlight && (
                    <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', color: '#fff', fontWeight: 700, padding: '4px 12px', borderRadius: '100px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      Most Popular
                    </div>
                  )}
                  <div style={{ fontWeight: 900, color: '#fff', marginBottom: '4px', letterSpacing: '-0.03em' }}>{plan.speed}</div>
                  <div style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#A855F7', marginBottom: '24px' }}>{plan.tier}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '32px' }}>
                    <span style={{ fontWeight: 600, color: 'rgba(248,245,255,0.6)' }}>$</span>
                    <span style={{ fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em' }}>{plan.price}</span>
                    <span style={{ color: 'rgba(248,245,255,0.4)', marginLeft: '4px' }}>/mo</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {plan.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(248,245,255,0.75)', fontWeight: 500 }}>
                        <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(124,58,237,0.25)', border: '1px solid rgba(167,139,250,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Check size={11} color="#A855F7" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button style={{
                    width: '100%', padding: '13px', borderRadius: '100px', fontWeight: 700, cursor: 'pointer',
                    background: plan.highlight ? 'linear-gradient(135deg, #7C3AED, #6B21A8)' : 'transparent',
                    color: '#fff', border: plan.highlight ? '1px solid rgba(167,139,250,0.3)' : '1px solid rgba(167,139,250,0.3)',
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.3)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = plan.highlight ? 'linear-gradient(135deg, #7C3AED, #6B21A8)' : 'transparent'; }}
                  >Get Quote <ArrowRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /></button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VOICE PLANS TABLE ── */}
      <section style={{ padding: '80px 0', background: 'rgba(255,255,255,0.015)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.3)', color: '#C4B5FD', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '100px', marginBottom: '16px' }}>C9X Voice Plans</span>
            <h2 style={{ fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>Everything in one box.</h2>
          </FadeIn>
          <FadeIn>
            <div style={{
              maxWidth: '900px', margin: '0 auto',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(167,139,250,0.18)',
              borderRadius: '20px', overflow: 'hidden',
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(167,139,250,0.15)' }}>
                    <th style={{ padding: '20px 28px', textAlign: 'left', fontWeight: 700, color: 'rgba(248,245,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Feature</th>
                    <th style={{ padding: '20px 28px', textAlign: 'center', fontWeight: 800, color: '#fff', width: '22%' }}>Basic</th>
                    <th style={{ padding: '20px 28px', textAlign: 'center', fontWeight: 800, color: '#fff', width: '22%', background: 'rgba(124,58,237,0.2)', borderLeft: '1px solid rgba(167,139,250,0.2)' }}>
                      <span style={{ background: 'linear-gradient(135deg, #C4B5FD, #A855F7)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ultimate</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {VOICE_TABLE.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < VOICE_TABLE.length - 1 ? '1px solid rgba(167,139,250,0.08)' : 'none' }}>
                      <td style={{ padding: '16px 28px', fontWeight: 500, color: 'rgba(248,245,255,0.7)' }}>{row.feature}</td>
                      <td style={{ padding: '16px 28px', textAlign: 'center' }}>
                        {typeof row.basic === 'boolean'
                          ? (row.basic ? <Check size={18} color="#A855F7" style={{ margin: '0 auto', display: 'block' }} /> : <Minus size={18} color="rgba(248,245,255,0.2)" style={{ margin: '0 auto', display: 'block' }} />)
                          : <span style={{ fontWeight: 600, color: '#C4B5FD' }}>{row.basic}</span>}
                      </td>
                      <td style={{ padding: '16px 28px', textAlign: 'center', background: 'rgba(124,58,237,0.08)', borderLeft: '1px solid rgba(167,139,250,0.12)' }}>
                        {typeof row.ultimate === 'boolean'
                          ? (row.ultimate ? <Check size={18} color="#A855F7" style={{ margin: '0 auto', display: 'block' }} /> : <Minus size={18} color="rgba(248,245,255,0.2)" style={{ margin: '0 auto', display: 'block' }} />)
                          : <span style={{ fontWeight: 600, color: '#C4B5FD' }}>{row.ultimate}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── MOBILE PLANS ── */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <FadeIn>
            <div style={{
              background: 'linear-gradient(135deg, rgba(107,33,168,0.45), rgba(124,58,237,0.25))',
              border: '1px solid rgba(167,139,250,0.3)', borderRadius: '20px', padding: '52px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', right: '-30px', bottom: '-30px', opacity: 0.1 }}>
                <Zap size={220} strokeWidth={0.4} color="#A855F7" />
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ display: 'inline-block', background: 'rgba(167,139,250,0.2)', color: '#C4B5FD', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '100px', marginBottom: '16px' }}>Business Mobile</span>
                <h3 style={{ fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', marginBottom: '12px' }}>Premium Mobile Plans</h3>
                <p style={{ color: 'rgba(248,245,255,0.6)', maxWidth: '400px', lineHeight: 1.65, marginBottom: '28px' }}>
                  Powered by Australia's best network. 5G included, unlimited talk & text, shared data pools for your entire team.
                </p>
                <button style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#fff', color: '#6B21A8', fontWeight: 700,
                  padding: '12px 24px', borderRadius: '100px', border: 'none', cursor: 'pointer',
                }}>
                  <Phone size={15} /> View Mobile Plans
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PLAN QUIZ ── */}
      <section style={{ padding: '80px 0', background: 'rgba(255,255,255,0.015)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.3)', color: '#C4B5FD', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '100px', marginBottom: '16px' }}>Self-Qualify</span>
            <h2 style={{ fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>What's the best plan for you?</h2>
          </FadeIn>
          <FadeIn>
            <div style={{ maxWidth: '720px', margin: '0 auto', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(167,139,250,0.2)', borderRadius: '24px', padding: '52px' }}>
              {quizStep <= 3 && (
                <>
                  {quizStep === 1 && (
                    <div>
                      <h3 style={{ fontWeight: 900, color: '#fff', marginBottom: '28px', letterSpacing: '-0.02em' }}>How would you describe your business?</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
                        {['Solo / Startup', 'Growing SME', 'Enterprise'].map(opt => (
                          <div key={opt} onClick={() => handleSelect(1, opt)} style={{
                            padding: '20px', borderRadius: '14px', fontWeight: 700,
                            color: '#fff', background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(167,139,250,0.2)',
                            cursor: 'pointer', transition: 'all 0.2s', textAlign: 'center',
                          }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.3)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.5)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.2)'; }}
                          >{opt}</div>
                        ))}
                      </div>
                    </div>
                  )}
                  {quizStep === 2 && (
                    <div>
                      <h3 style={{ fontWeight: 900, color: '#fff', marginBottom: '28px', letterSpacing: '-0.02em' }}>How many employees?</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
                        {['1–10', '11–50', '50+'].map(opt => (
                          <div key={opt} onClick={() => handleSelect(2, opt)} style={{ padding: '20px', borderRadius: '14px', fontWeight: 700, color: '#fff', background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(167,139,250,0.2)', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'center' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.3)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.12)'; }}
                          >{opt}</div>
                        ))}
                      </div>
                    </div>
                  )}
                  {quizStep === 3 && (
                    <div>
                      <h3 style={{ fontWeight: 900, color: '#fff', marginBottom: '28px', letterSpacing: '-0.02em' }}>What is your primary need?</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
                        {['Voice Only', 'Internet Only', 'Unified Comm'].map(opt => (
                          <div key={opt} onClick={() => handleSelect(3, opt)} style={{ padding: '20px', borderRadius: '14px', fontWeight: 700, color: '#fff', background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(167,139,250,0.2)', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'center' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.3)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.12)'; }}
                          >{opt}</div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Progress */}
                  <div style={{ marginTop: '36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(248,245,255,0.4)', fontWeight: 500 }}>Step {quizStep} of 3</span>
                    <div style={{ width: '120px', height: '3px', background: 'rgba(167,139,250,0.15)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ width: `${(quizStep / 3) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #7C3AED, #A855F7)', transition: 'width 0.4s ease' }} />
                    </div>
                  </div>
                </>
              )}

              {quizStep === 4 && result && (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <CheckCircle size={28} color="#A855F7" />
                  </div>
                  <h3 style={{ fontWeight: 900, color: '#fff', marginBottom: '12px' }}>
                    We recommend <span style={{ color: '#C4B5FD' }}>{result.plan}</span>
                  </h3>
                  <p style={{ color: 'rgba(248,245,255,0.6)', lineHeight: 1.65, marginBottom: '32px' }}>{result.text}</p>
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button style={{ padding: '13px 28px', borderRadius: '100px', background: 'linear-gradient(135deg, #7C3AED, #6B21A8)', color: '#fff', fontWeight: 700, border: '1px solid rgba(167,139,250,0.3)', cursor: 'pointer' }}>
                      Get Started <ArrowRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
                    </button>
                    <button onClick={resetQuiz} style={{ padding: '13px 28px', borderRadius: '100px', background: 'transparent', color: 'rgba(248,245,255,0.7)', fontWeight: 600, border: '1px solid rgba(167,139,250,0.25)', cursor: 'pointer' }}>
                      Start Again
                    </button>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 0 100px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>Pricing FAQ</h2>
          </FadeIn>
          <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {FAQ.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(167,139,250,0.15)', borderRadius: '16px', padding: '28px', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.35)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.15)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ color: '#A855F7' }}>{faq.icon}</span>
                    <h4 style={{ fontWeight: 700, color: '#fff', margin: 0 }}>{faq.q}</h4>
                  </div>
                  <p style={{ color: 'rgba(248,245,255,0.55)', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE CTA ── */}
      <section style={{ padding: '0 0 100px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' }}>
          <FadeIn>
            <div style={{
              background: 'linear-gradient(135deg, rgba(107,33,168,0.4), rgba(124,58,237,0.25))',
              border: '1px solid rgba(167,139,250,0.25)', borderRadius: '24px', padding: '72px 60px',
              textAlign: 'center', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '300px', background: 'radial-gradient(ellipse, rgba(168,85,247,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <h2 style={{ fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', marginBottom: '16px', position: 'relative', zIndex: 1 }}>
                Need a custom enterprise solution?
              </h2>
              <p style={{ color: 'rgba(248,245,255,0.6)', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.65, position: 'relative', zIndex: 1 }}>
                Multi-site, dedicated fibre, or complex integration — we build from the ground up with transparent, upfront pricing.
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                <button style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #7C3AED, #6B21A8)', color: '#fff', fontWeight: 700, padding: '14px 28px', borderRadius: '100px', border: '1px solid rgba(167,139,250,0.3)', cursor: 'pointer' }}>
                  <Phone size={15} /> Call 1800 C9 TECH
                </button>
                <button style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'rgba(248,245,255,0.8)', fontWeight: 600, padding: '14px 28px', borderRadius: '100px', border: '1px solid rgba(167,139,250,0.25)', cursor: 'pointer' }}>
                  Contact Solutions Team
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
