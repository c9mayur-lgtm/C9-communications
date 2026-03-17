import { SectionWrapper } from './SectionWrapper';

export const TrustStrip = () => {
  const logos = [
    'RetailCare', 'Chameleon Customer Contact', 'Novo Shoes', 
    'Launch Housing', 'Akubra', 'Pacific Steel', 'Atlassian', 'Afterpay'
  ]; // Updated with actual Australian clients

  return (
    <SectionWrapper style={{ background: 'var(--color-body-bg)', padding: '4rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="mono-tag" style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>
          TRUSTED BY 1,000+ AUSTRALIAN BUSINESSES
        </p>

        <div className="marquee-container" style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex' }}>
          <div className="animate-marquee" style={{ display: 'flex', gap: '4rem', paddingRight: '4rem' }}>
            {[...logos, ...logos].map((name, i) => (
              <div 
                key={i} 
                style={{
                  fontWeight: 700, 
                  color: 'var(--color-text-mid)', opacity: 0.5,
                  transition: 'all 0.3s ease', cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-primary)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-mid)';
                  e.currentTarget.style.opacity = '0.5';
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
