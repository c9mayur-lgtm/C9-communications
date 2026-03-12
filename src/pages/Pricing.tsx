import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check, Minus, Clock, DollarSign, ArrowUp, Zap, Phone, CheckCircle } from 'lucide-react';

export const Pricing = () => {
    useScrollReveal();
    const [quizStep, setQuizStep] = useState(1);
    const [selections, setSelections] = useState<Record<number, string>>({});
    const [result, setResult] = useState<{ plan: string; text: string } | null>(null);

    const handleOptionSelect = (step: number, value: string) => {
        const nextSelections = { ...selections, [step]: value };
        setSelections(nextSelections);
        
        if (step < 3) {
            setQuizStep(step + 1);
        } else {
            // Logic for recommendation
            let plan = "Business NBN";
            let text = "Based on your company size, we recommend our standard Business 100/40 plan for reliable performance.";
            
            if (nextSelections[3] === 'Voice Only' || nextSelections[3] === 'Unified Comm') {
                plan = nextSelections[2] === '50+' ? 'C9X Ultimate' : 'C9X Basic';
                text = "Since you need cutting-edge voice tools, C9X is the perfect fit. Your team size fits our " + (nextSelections[2] === '50+' ? "Ultimate" : "Basic") + " seat structure perfectly.";
            } else if (nextSelections[2] === '50+' || nextSelections[1] === 'Enterprise') {
                plan = "Performance 250 NBN";
                text = "For your organisation size, our Performance tier with pro-active monitoring and 24/7 support is the most secure choice.";
            }
            
            setResult({ plan, text });
            setQuizStep(4); // Final step
        }
    };

    const resetQuiz = () => {
        setQuizStep(1);
        setSelections({});
        setResult(null);
    };

    return (
        <div style={{ backgroundColor: '#ffffff' }}>
            {/* SECTION 1 — INTRO */}
            <section style={{ backgroundColor: 'var(--c9-hero-bg)', padding: '160px 0 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', inset: 0, opacity: 0.08, pointerEvents: 'none',
                    backgroundImage: 'radial-gradient(var(--c9-accent) 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
                    <span className="label reveal-up" style={{ color: 'var(--c9-accent)', marginBottom: '24px', display: 'block' }}>TRANSPARENT PRICING</span>
                    <h1 className="reveal-up" style={{ color: 'white', marginBottom: '24px' }}>Find the Right Plan for Your Business</h1>
                    <p className="body-lg reveal-up" style={{ color: 'var(--c9-pale)', opacity: 0.9 }}>
                        Transparent, contract-free plans designed to scale with your team. Compare our NBN and Voice solutions below.
                    </p>
                </div>
            </section>

            {/* SECTION 2 — NBN PLANS */}
            <section style={{ padding: '120px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="label reveal-up" style={{ color: 'var(--c9-accent)', marginBottom: '24px', display: 'block' }}>NBN SOLUTIONS</span>
                    <h2 className="reveal-up">Ultra-Fast Business NBN</h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '64px' }}>
                        {/* Starter */}
                        <div className="fade-up" style={{
                            padding: '48px', borderRadius: '32px', border: '1px solid var(--c9-pale)',
                            backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', transition: 'all 0.4s'
                        }}>
                            <div style={{ fontSize: '32px', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--c9-primary)', marginBottom: '8px' }}>50/20</div>
                            <div className="label" style={{ marginBottom: '24px' }}>STARTER</div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '32px' }}>
                                <span style={{ fontSize: '20px', fontWeight: 600 }}>$</span>
                                <span style={{ fontSize: '48px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>79</span>
                                <span style={{ color: 'var(--c9-muted)' }}>/mo</span>
                            </div>
                            <ul style={{ listStyle: 'none', marginBottom: '40px', flexGrow: 1, textAlign: 'left' }}>
                                {['Typical Evening 50Mbps', 'Unlimited Data', 'Business Support', 'Static IP Included'].map(f => (
                                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '15px' }}>
                                        <Check size={16} color="#00C27C" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn-ghost">Get Quote</button>
                        </div>

                        {/* Business */}
                        <div className="fade-up" style={{
                            padding: '48px', borderRadius: '32px', border: '1px solid var(--c9-accent)',
                            backgroundColor: 'var(--c9-surface)', display: 'flex', flexDirection: 'column', transition: 'all 0.4s',
                            boxShadow: '0 20px 48px rgba(107, 33, 168, 0.08)'
                        }}>
                            <div style={{ fontSize: '32px', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--c9-primary)', marginBottom: '8px' }}>100/40</div>
                            <div className="label" style={{ marginBottom: '24px' }}>BUSINESS</div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '32px' }}>
                                <span style={{ fontSize: '20px', fontWeight: 600 }}>$</span>
                                <span style={{ fontSize: '48px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>99</span>
                                <span style={{ color: 'var(--c9-muted)' }}>/mo</span>
                            </div>
                            <ul style={{ listStyle: 'none', marginBottom: '40px', flexGrow: 1, textAlign: 'left' }}>
                                {['Typical Evening 100Mbps', 'Priority AU Support', '4G Backup Compatible', 'Optimised for Cloud Voice'].map(f => (
                                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '15px' }}>
                                        <Check size={16} color="#00C27C" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn-primary">Get Quote</button>
                        </div>

                        {/* Performance */}
                        <div className="fade-up" style={{
                            padding: '48px', borderRadius: '32px', border: '1px solid var(--c9-pale)',
                            backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', transition: 'all 0.4s'
                        }}>
                            <div style={{ fontSize: '32px', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--c9-primary)', marginBottom: '8px' }}>250/100</div>
                            <div className="label" style={{ marginBottom: '24px' }}>PERFORMANCE</div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '32px' }}>
                                <span style={{ fontSize: '20px', fontWeight: 600 }}>$</span>
                                <span style={{ fontSize: '48px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>149</span>
                                <span style={{ color: 'var(--c9-muted)' }}>/mo</span>
                            </div>
                            <ul style={{ listStyle: 'none', marginBottom: '40px', flexGrow: 1, textAlign: 'left' }}>
                                {['Typical Evening 250Mbps', 'High-Speed Uploads', '24/7 Priority Support', 'Pro-Active Monitoring'].map(f => (
                                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '15px' }}>
                                        <Check size={16} color="#00C27C" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn-ghost">Get Quote</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — C9X VOICE PLANS */}
            <section style={{ padding: '120px 0', backgroundColor: 'var(--c9-surface)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="label fade-up" style={{ color: 'var(--c9-accent)', marginBottom: '24px', display: 'block' }}>C9X VOICE PLANS</span>
                    <h2 className="fade-up" style={{ marginBottom: '64px' }}>Everything you need, in one box.</h2>
                    
                    <div className="fade-up" style={{
                        maxWidth: '1000px', margin: '0 auto', background: '#ffffff', borderRadius: '24px',
                        overflow: 'hidden', border: '1px solid var(--c9-pale)', boxShadow: '0 20px 40px rgba(107,33,168,0.05)'
                    }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--c9-surface)' }}>
                                    <th style={{ padding: '24px', fontSize: '20px', fontWeight: 600 }}>Features</th>
                                    <th style={{ padding: '24px', fontSize: '20px', fontWeight: 600, textAlign: 'center', width: '25%' }}>Basic</th>
                                    <th style={{ padding: '24px', fontSize: '20px', fontWeight: 600, textAlign: 'center', width: '25%', backgroundColor: 'var(--c9-primary)', color: 'white' }}>Ultimate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Monthly Fee', '$20/user', '$45/user'],
                                    ['Unlimited AU Calls', <Check color="#00C27C" size={20} />, <Check color="#00C27C" size={20} />],
                                    ['Auto-Attendant (IVR)', <Check color="#00C27C" size={20} />, <Check color="#00C27C" size={20} />],
                                    ['Call Recording', '30 Days', 'Unlimited'],
                                    ['CRM Integration', 'Basic', 'Advanced + API'],
                                    ['Mobile & Desktop App', <Check color="#00C27C" size={20} />, <Check color="#00C27C" size={20} />],
                                    ['Teams Integration', <Minus color="var(--c9-muted)" opacity={0.5} size={20} />, <Check color="#00C27C" size={20} />],
                                    ['Dedicated Manager', <Minus color="var(--c9-muted)" opacity={0.5} size={20} />, <Check color="#00C27C" size={20} />],
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid var(--c9-surface)' }}>
                                        <td style={{ padding: '20px 24px', fontWeight: 500 }}>{row[0]}</td>
                                        <td style={{ padding: '20px 24px', textAlign: 'center' }}>{row[1] as any}</td>
                                        <td style={{ padding: '20px 24px', textAlign: 'center', backgroundColor: 'rgba(107, 33, 168, 0.05)' }}>{row[2] as any}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* SECTION 4 — MOBILE PLANS */}
            <section style={{ padding: '100px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="fade-up">Business Mobile</h2>
                    <div className="fade-up" style={{
                        maxWidth: '800px', margin: '48px auto 0', padding: '48px',
                        backgroundColor: 'var(--c9-hero-bg)', borderRadius: '32px', color: 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px',
                        textAlign: 'left', position: 'relative', overflow: 'hidden'
                    }}>
                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <h3 style={{ color: 'white', marginBottom: '12px' }}>Premium Mobile Plans</h3>
                            <p className="body" style={{ color: 'var(--c9-pale)', marginBottom: '24px' }}>
                                Powered by Australia's best network. 5G included, unlimited talk & text, and shared data pools for your entire team.
                            </p>
                            <button className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--c9-primary)' }}>View Mobile Plans</button>
                        </div>
                        <div style={{ opacity: 0.1, position: 'absolute', right: '-20px', bottom: '-20px' }}>
                            <Zap size={200} strokeWidth={0.5} />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5 — PLAN QUIZ */}
            <section style={{ padding: '120px 0', backgroundColor: 'var(--c9-surface)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="label fade-up" style={{ color: 'var(--c9-accent)', marginBottom: '24px', display: 'block' }}>SELF-QUALIFY</span>
                    <h2 className="fade-up">What's the best plan for you?</h2>

                    <div className="fade-up" style={{
                        maxWidth: '800px', margin: '48px auto 0', backgroundColor: '#ffffff',
                        borderRadius: '32px', padding: '64px', border: '1px solid var(--c9-pale)',
                        boxShadow: '0 40px 80px rgba(107,33,168,0.06)'
                    }}>
                        {quizStep === 1 && (
                            <div className="fade-in">
                                <h3 style={{ marginBottom: '32px' }}>How would you describe your business?</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                                    {['Solo / Startup', 'Growing SME', 'Enterprise'].map(opt => (
                                        <div key={opt} onClick={() => handleOptionSelect(1, opt)} style={{
                                            padding: '24px', borderRadius: '16px', backgroundColor: 'var(--c9-surface)',
                                            fontWeight: 600, transition: 'all 0.2s', cursor: 'pointer'
                                        }}>
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {quizStep === 2 && (
                            <div className="fade-in">
                                <h3 style={{ marginBottom: '32px' }}>How many employees do you have?</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                                    {['1-10', '11-50', '50+'].map(opt => (
                                        <div key={opt} onClick={() => handleOptionSelect(2, opt)} style={{
                                            padding: '24px', borderRadius: '16px', backgroundColor: 'var(--c9-surface)',
                                            fontWeight: 600, transition: 'all 0.2s', cursor: 'pointer'
                                        }}>
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {quizStep === 3 && (
                            <div className="fade-in">
                                <h3 style={{ marginBottom: '32px' }}>What is your primary need?</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                                    {['Voice Only', 'Internet Only', 'Unified Comm'].map(opt => (
                                        <div key={opt} onClick={() => handleOptionSelect(3, opt)} style={{
                                            padding: '24px', borderRadius: '16px', backgroundColor: 'var(--c9-surface)',
                                            fontWeight: 600, transition: 'all 0.2s', cursor: 'pointer'
                                        }}>
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {quizStep === 4 && result && (
                            <div className="fade-in" style={{ textAlign: 'center' }}>
                                <CheckCircle size={48} color="#00C27C" style={{ marginBottom: '24px' }} />
                                <h3>We recommend the <span style={{ color: 'var(--c9-primary)' }}>{result.plan}</span> plan</h3>
                                <div style={{
                                    backgroundColor: 'var(--c9-surface)', padding: '32px', borderRadius: '20px',
                                    marginTop: '24px', border: '1px solid var(--c9-pale)'
                                }}>
                                    <p style={{ marginBottom: '24px' }}>{result.text}</p>
                                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                                        <button className="btn-primary">Get Started</button>
                                        <button className="btn-ghost" style={{ border: '1px solid var(--c9-primary)' }} onClick={resetQuiz}>Restart Quiz</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {quizStep <= 3 && (
                            <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div className="label" style={{ fontSize: '13px', color: 'var(--c9-muted)' }}>Step {quizStep} of 3</div>
                                <div style={{ width: '100px', height: '4px', backgroundColor: 'var(--c9-surface)', borderRadius: '2px', overflow: 'hidden' }}>
                                    <div style={{ width: `${(quizStep / 3) * 100}%`, height: '100%', backgroundColor: 'var(--c9-primary)', transition: 'width 0.3s' }} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* SECTION 6 — ENTERPRISE CTA */}
            <section style={{ padding: '100px 0', backgroundColor: 'var(--c9-hero-bg)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none',
                    backgroundImage: 'radial-gradient(var(--c9-accent) 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }} />
                <div className="container fade-up" style={{ position: 'relative', zIndex: 10 }}>
                    <span className="label" style={{ color: 'var(--c9-accent)' }}>CUSTOM SOLUTIONS</span>
                    <h2 style={{ color: 'white', margin: '24px 0 16px' }}>Need a Custom Enterprise Solution?</h2>
                    <p className="body-lg" style={{ color: 'var(--c9-pale)', maxWidth: '600px', margin: '0 auto 40px' }}>
                        For larger organisations requiring multi-site deployments, dedicated fibre, or complex integration, we build from the ground up.
                    </p>
                    <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--c9-primary)' }}><Phone size={18} /> Call 1800 000 C9X</button>
                        <button className="btn-ghost" style={{ borderColor: 'white', color: 'white', border: '1px solid white' }}>Contact Solutions Team</button>
                    </div>
                </div>
            </section>

            {/* SECTION 7 — FAQ */}
            <section style={{ padding: '120px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="label fade-up" style={{ color: 'var(--c9-accent)', marginBottom: '24px', display: 'block' }}>COMMON QUESTIONS</span>
                        <h2 className="fade-up">Pricing FAQ</h2>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '64px auto 0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {[
                            { q: 'What is the contract length?', a: "We believe our service speaks for itself. All our standard NBN and C9X voice plans are month-to-month with zero lock-in contracts. You're free to scale up or move at any time.", i: <Clock size={20} color="var(--c9-accent)" /> },
                            { q: 'Are there any setup fees?', a: "For standard NBN connections and C9X voice systems, we offer $0 setup. Complex site installations or custom enterprise fibre builds may incur once-off costs which we'll detail upfront.", i: <DollarSign size={20} color="var(--c9-accent)" /> },
                            { q: 'Can I upgrade mid-contract?', a: "Since we don't have lock-in contracts, you can upgrade your plan at any time through your portal. Changes usually take effect within 1 business day, or instantly for voice user seats.", i: <ArrowUp size={20} color="var(--c9-accent)" /> },
                        ].map((faq, i) => (
                            <div key={i} className="fade-up" style={{
                                padding: '32px', borderRadius: '20px', border: '1px solid var(--c9-pale)', transition: 'all 0.2s'
                            }}>
                                <h4 style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '12px' }}>
                                    {faq.i} {faq.q}
                                </h4>
                                <p style={{ color: 'var(--c9-muted)', fontSize: '15px' }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
