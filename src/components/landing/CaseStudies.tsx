
import { SectionWrapper } from './SectionWrapper';

export const CaseStudies = () => {
  const cases = [
    {
      logo: "RetailCorp",
      industry: "Retail Business",
      challenge: "Struggling with high voice call costs across 15 stores.",
      result: "35% reduction in telco costs",
      quote: "The migration was flawless, and the ongoing savings are phenomenal. Our stores finally have a system that works.",
    },
    {
      logo: "Legal Partners",
      industry: "Professional Services",
      challenge: "Needed to move head office without losing incoming client calls.",
      result: "Zero downtime during office relocation",
      quote: "We operated as normal during a major move. C9 handled everything perfectly, giving us total peace of mind.",
    }
  ];

  return (
    <SectionWrapper style={{ background: 'var(--color-body-bg)', padding: '6rem 0' }}>
      <div className="container">
        <h2 style={{ marginBottom: '4rem' }}>
          Real Australian businesses. Real results.
        </h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem'
        }}>
          {cases.map((c, i) => (
            <div key={i} className="glass-card-light" style={{ padding: '3rem', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-text-dark)' }}>{c.logo}</div>
                <div className="mono-tag" style={{
                  background: 'var(--color-alt-bg)', color: 'var(--color-primary)',
                  padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-full)'
                }}>
                  {c.industry}
                </div>
              </div>

              <p style={{ color: 'var(--color-text-mid)', marginBottom: '1.5rem', }}>{c.challenge}</p>
              
              <div style={{ 
                fontWeight: 700, color: 'var(--color-primary)', 
                marginBottom: '1.5rem', padding: '1rem', background: 'var(--color-alt-bg)', borderRadius: 'var(--radius-sm)'
              }}>
                {c.result}
              </div>

              <blockquote style={{ fontStyle: 'italic', color: 'var(--color-text-light)', borderLeft: '2px solid var(--color-pale-tint)', paddingLeft: '1rem', marginBottom: '2rem' }}>
                "{c.quote}"
              </blockquote>

              <a href="#" style={{ color: 'var(--color-secondary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
                Read Case Study →
              </a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="#" style={{ color: 'var(--color-primary)', fontWeight: 600, }}>
            Read All Case Studies →
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};
