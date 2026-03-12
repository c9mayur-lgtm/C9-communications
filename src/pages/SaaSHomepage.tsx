import { useRef, useEffect, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Shield, Globe, Cpu, Phone, Layers, 
  Activity, CheckCircle, Smartphone, Building2, 
  Wifi, Server, Cloud
} from 'lucide-react';
import './SaaSHomepage.css';

const FadeIn = ({ children, delay = 0, className = '' }: { children: ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SaaSHomepage = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  
  // Section 2: Problems
  const problems = [
    "Unreliable internet and connectivity",
    "Complex telecom systems",
    "Disconnected communication platforms",
    "Cybersecurity risks",
    "Infrastructure that cannot scale"
  ];

  // Section 3: Solutions
  const solutions = [
    { title: "Business Internet & NBN", desc: "Enterprise-grade connectivity designed for maximum reliability and uptime.", icon: <Globe size={24} /> },
    { title: "Cloud Phone Systems", desc: "Scalable voice solutions that connect your team globally.", icon: <Phone size={24} /> },
    { title: "Unified Communications", desc: "Seamless collaboration across messaging, video, and voice.", icon: <Smartphone size={24} /> },
    { title: "Managed IT Services", desc: "Proactive infrastructure management and expert IT support.", icon: <Server size={24} /> },
    { title: "Network Security", desc: "Advanced protection for your critical business data.", icon: <Shield size={24} /> },
    { title: "Contact Centre Solutions", desc: "Omnichannel customer experience platforms for modern teams.", icon: <Activity size={24} /> },
  ];

  // Section 6: Industries
  const industries = [
    { title: "Professional Services", icon: <Building2 size={32} /> },
    { title: "Healthcare", icon: <Activity size={32} /> },
    { title: "Retail", icon: <Smartphone size={32} /> },
    { title: "Finance", icon: <Shield size={32} /> },
    { title: "Logistics", icon: <Globe size={32} /> },
    { title: "Technology", icon: <Cpu size={32} /> },
  ];

  // Section 7: Why C9
  const whyC9 = [
    "Australian support team",
    "Enterprise-grade infrastructure",
    "Dedicated account managers",
    "Reliable carrier partnerships",
    "Experienced telecommunications specialists"
  ];

  // Section 9: How it works
  const steps = [
    { num: 1, title: "Consultation", desc: "We understand your unique business requirements." },
    { num: 2, title: "Solution Design", desc: "Custom infrastructure architecture tailored for scale." },
    { num: 3, title: "Deployment", desc: "Seamless implementation with zero downtime." },
    { num: 4, title: "Managed Support", desc: "24/7 proactive monitoring and expert assistance." },
  ];

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="saas-page">
      {/* SECTION 1 — HERO */}
      <section className="saas-hero">
        <div className="saas-hero-bg"></div>
        <div className="saas-hero-grid"></div>
        
        <motion.div 
          style={{ y: heroY }} 
          className="saas-container saas-hero-content"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="saas-hero-title">
              Enterprise Connectivity & <br />
              <span>Managed IT</span> for Modern Businesses
            </h1>
            <p className="saas-hero-subtitle">
              Reliable internet, cloud communications, and managed infrastructure designed to keep organisations connected, secure, and scalable.
            </p>
            <div className="saas-hero-actions">
              <Link to="/contact" className="saas-btn-primary">
                Book a Consultation
              </Link>
              <a href="#solutions" className="saas-btn-secondary">
                Explore Solutions
              </a>
            </div>
            
            <div className="saas-trust-indicators">
              <div className="saas-trust-item">
                <CheckCircle size={18} color="#63b3ed" /> 100% Australian Support
              </div>
              <div className="saas-trust-item">
                <CheckCircle size={18} color="#63b3ed" /> Enterprise Connectivity
              </div>
              <div className="saas-trust-item">
                <CheckCircle size={18} color="#63b3ed" /> Managed IT Specialists
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2 — BUSINESS PROBLEMS */}
      <section className="saas-section">
        <div className="saas-container">
          <FadeIn>
            <div className="saas-section-header">
              <span className="saas-section-label">The Challenge</span>
              <h2 className="saas-section-title">Is your infrastructure holding you back?</h2>
              <p className="saas-section-desc">
                Modern businesses require stable and scalable technology foundations. Disjointed systems lead to inefficiency and risk.
              </p>
            </div>
          </FadeIn>
          
          <div className="saas-problems-grid">
            {problems.map((problem, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="saas-problem-card">
                  <h3 style={{ fontSize: '18px', fontWeight: 600 }}>{problem}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — CORE SOLUTIONS */}
      <section id="solutions" className="saas-section saas-section-alt">
        <div className="saas-container">
          <FadeIn>
            <div className="saas-section-header">
              <span className="saas-section-label">Core Solutions</span>
              <h2 className="saas-section-title">End-to-End Technology Infrastructure</h2>
              <p className="saas-section-desc">
                Everything you need to connect, communicate, and scale your operations securely.
              </p>
            </div>
          </FadeIn>

          <div className="saas-solutions-grid">
            {solutions.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="saas-card">
                  <div className="saas-card-icon">{item.icon}</div>
                  <h3 className="saas-card-title">{item.title}</h3>
                  <p className="saas-card-desc">{item.desc}</p>
                  <Link to="/contact" className="saas-card-link">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — INFRASTRUCTURE ECOSYSTEM */}
      <section className="saas-section">
        <div className="saas-container">
          <FadeIn>
            <div className="saas-section-header">
              <span className="saas-section-label">Ecosystem</span>
              <h2 className="saas-section-title">A Fully Integrated Environment</h2>
              <p className="saas-section-desc">
                We bridge the gap between connectivity, voice, and IT to create one cohesive ecosystem.
              </p>
            </div>
          </FadeIn>

          <div className="saas-ecosystem">
            <FadeIn>
              <div className="saas-eco-nodes" style={{ marginBottom: '-60px' }}>
                <div className="saas-eco-node"><Globe size={20} color="#2B6CB0"/> Connectivity</div>
                <div className="saas-eco-node"><Cloud size={20} color="#2B6CB0"/> Cloud Systems</div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="saas-eco-center">C9 Hub</div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="saas-eco-nodes" style={{ marginTop: '-60px' }}>
                <div className="saas-eco-node"><Phone size={20} color="#2B6CB0"/> Voice</div>
                <div className="saas-eco-node"><Shield size={20} color="#2B6CB0"/> Security</div>
                <div className="saas-eco-node"><Server size={20} color="#2B6CB0"/> IT Support</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FEATURED PLATFORM */}
      <section className="saas-section saas-section-alt saas-page-dark">
        <div className="saas-container">
          <div className="saas-feature-split">
            <FadeIn>
              <span className="saas-section-label">Featured Platform</span>
              <h2 className="saas-section-title" style={{ color: '#fff' }}>C9 Cloud Communications</h2>
              <p className="saas-section-desc" style={{ marginBottom: '32px' }}>
                Experience enterprise-grade reliability with our unified communications platform. Empower your team to work from anywhere, on any device.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', color: 'rgba(255,255,255,0.8)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CheckCircle size={20} color="#63b3ed" /> Unified communications across devices
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CheckCircle size={20} color="#63b3ed" /> Scalable cloud phone systems
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CheckCircle size={20} color="#63b3ed" /> Seamless CRM integrations
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CheckCircle size={20} color="#63b3ed" /> Enterprise-level reliability
                </li>
              </ul>
              
              <Link to="/c9x" className="saas-btn-primary">
                Explore C9 Platform
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="saas-feature-visual">
                {/* Abstract graphical representation of platform */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  style={{ 
                    background: '#fff', 
                    borderRadius: '12px', 
                    padding: '24px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    position: 'relative',
                    zIndex: 2,
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid #f0f0f0', paddingBottom: '16px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#EBF8FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Phone size={20} color="#2B6CB0" />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, color: '#1A365D' }}>Active Call</div>
                        <div style={{ fontSize: '12px', color: '#718096' }}>00:45 • Connected</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F7FAFC' }}></div>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F7FAFC' }}></div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div style={{ background: '#F7FAFC', borderRadius: '8px', padding: '16px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: '#E2E8F0', marginBottom: '12px' }}></div>
                      <div style={{ height: '8px', width: '100%', background: '#E2E8F0', borderRadius: '4px', marginBottom: '8px' }}></div>
                      <div style={{ height: '8px', width: '60%', background: '#E2E8F0', borderRadius: '4px' }}></div>
                    </div>
                    <div style={{ background: '#F7FAFC', borderRadius: '8px', padding: '16px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: '#E2E8F0', marginBottom: '12px' }}></div>
                      <div style={{ height: '8px', width: '100%', background: '#E2E8F0', borderRadius: '4px', marginBottom: '8px' }}></div>
                      <div style={{ height: '8px', width: '60%', background: '#E2E8F0', borderRadius: '4px' }}></div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  style={{ 
                    position: 'absolute',
                    top: '20%',
                    right: '-10%',
                    width: '60%',
                    background: '#fff', 
                    borderRadius: '12px', 
                    padding: '24px',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                    zIndex: 1
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Layers size={20} color="#2B6CB0" />
                    <span style={{ fontWeight: 600, color: '#1A365D' }}>CRM Sync</span>
                  </div>
                  <div style={{ height: '6px', width: '100%', background: '#E2E8F0', borderRadius: '4px', marginBottom: '12px' }}></div>
                  <div style={{ height: '6px', width: '80%', background: '#E2E8F0', borderRadius: '4px', marginBottom: '12px' }}></div>
                  <div style={{ height: '6px', width: '90%', background: '#E2E8F0', borderRadius: '4px' }}></div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 6 — INDUSTRIES SERVED */}
      <section className="saas-section">
        <div className="saas-container">
          <FadeIn>
            <div className="saas-section-header">
              <span className="saas-section-label">Industries</span>
              <h2 className="saas-section-title">Tailored For Your Sector</h2>
              <p className="saas-section-desc">
                Specialised solutions designed to meet the strict compliance and operational demands of distinct industries.
              </p>
            </div>
          </FadeIn>

          <div className="saas-industries-grid">
            {industries.map((ind, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="saas-industry-pill">
                  <div style={{ color: 'var(--saas-primary)' }}>{ind.icon}</div>
                  <span style={{ fontWeight: 600 }}>{ind.title}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — WHY C9 COMMUNICATIONS */}
      <section className="saas-section saas-section-alt">
        <div className="saas-container">
          <FadeIn>
            <div className="saas-section-header">
              <span className="saas-section-label">Why Us</span>
              <h2 className="saas-section-title">The C9 Advantage</h2>
              <p className="saas-section-desc">
                We're more than a service provider; we're your technology partner committed to excellence.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', background: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              {whyC9.map((reason, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ background: '#EBF8FF', padding: '8px', borderRadius: '50%', color: '#2B6CB0' }}>
                    <CheckCircle size={20} />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '18px', paddingTop: '6px' }}>{reason}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 8 — CLIENT TRUST / CASE STUDIES */}
      <section className="saas-section">
        <div className="saas-container">
          <FadeIn>
            <div className="saas-section-header">
              <span className="saas-section-label">Success Metrics</span>
              <h2 className="saas-section-title">Proven Business Outcomes</h2>
              <p className="saas-section-desc">
                Organisations nationwide trust C9 Communications to power their daily operations.
              </p>
            </div>
          </FadeIn>

          <div className="saas-stats-grid">
            <FadeIn delay={0.1}>
              <div className="saas-stat-box">
                <div className="saas-stat-num">99.99%</div>
                <div style={{ fontWeight: 600, color: 'var(--saas-dark)' }}>Network Uptime</div>
                <p style={{ color: 'var(--saas-gray)', marginTop: '8px', fontSize: '14px' }}>Guaranteed enterprise reliability</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="saas-stat-box">
                <div className="saas-stat-num">24/7</div>
                <div style={{ fontWeight: 600, color: 'var(--saas-dark)' }}>Proactive Support</div>
                <p style={{ color: 'var(--saas-gray)', marginTop: '8px', fontSize: '14px' }}>Always-on Australian assistance</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="saas-stat-box">
                <div className="saas-stat-num">40%</div>
                <div style={{ fontWeight: 600, color: 'var(--saas-dark)' }}>Cost Optimisation</div>
                <p style={{ color: 'var(--saas-gray)', marginTop: '8px', fontSize: '14px' }}>Average reduction in telecom spend</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 9 — HOW IT WORKS */}
      <section className="saas-section saas-section-alt">
        <div className="saas-container">
          <FadeIn>
            <div className="saas-section-header">
              <span className="saas-section-label">Our Process</span>
              <h2 className="saas-section-title">The Onboarding Journey</h2>
              <p className="saas-section-desc">
                A streamlined framework designed to migrate, build, and support your infrastructure without disruption.
              </p>
            </div>
          </FadeIn>

          <div className="saas-timeline">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="saas-step">
                  <div className="saas-step-num">{step.num}</div>
                  <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{step.title}</h3>
                  <p style={{ color: 'var(--saas-gray)', lineHeight: 1.5 }}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CONVERSION SECTION */}
      <section className="saas-section">
        <div className="saas-container">
          <FadeIn>
            <div className="saas-cta-block">
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '20px', color: '#fff' }}>
                Upgrade Your Business Connectivity
              </h2>
              <p style={{ fontSize: '20px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 40px' }}>
                Speak with our specialists to design the right infrastructure for your organisation.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="saas-btn-primary" style={{ background: '#fff', color: '#2B6CB0' }}>
                  Book Consultation
                </Link>
                <a href="tel:1300000000" className="saas-btn-secondary">
                  Speak to an Expert
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 11 — INSIGHTS / EDUCATION */}
      <section className="saas-section saas-section-alt">
        <div className="saas-container">
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
              <div>
                <span className="saas-section-label">Insights</span>
                <h2 className="saas-section-title" style={{ marginBottom: 0 }}>Latest from our experts</h2>
              </div>
              <Link to="/blog" style={{ color: 'var(--saas-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                View all <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>

          <div className="saas-blog-grid">
            <FadeIn delay={0.1}>
              <div className="saas-blog-card">
                <div className="saas-blog-img"><Wifi size={40} /></div>
                <div className="saas-blog-content">
                  <div className="saas-blog-date">Business Connectivity</div>
                  <h3 className="saas-blog-title">How to Prepare Your Network for Scalability in 2026</h3>
                  <div className="saas-blog-link">Read Article &rarr;</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="saas-blog-card">
                <div className="saas-blog-img"><Cloud size={40} /></div>
                <div className="saas-blog-content">
                  <div className="saas-blog-date">Cloud Communications</div>
                  <h3 className="saas-blog-title">The ROI of Migrating to a Unified Cloud Phone System</h3>
                  <div className="saas-blog-link">Read Article &rarr;</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="saas-blog-card">
                <div className="saas-blog-img"><Server size={40} /></div>
                <div className="saas-blog-content">
                  <div className="saas-blog-date">IT Infrastructure Strategy</div>
                  <h3 className="saas-blog-title">Why Managed IT is Essential for Modern Workplaces</h3>
                  <div className="saas-blog-link">Read Article &rarr;</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Footer is already appended after <Routes> in App.tsx */}
    </div>
  );
};
