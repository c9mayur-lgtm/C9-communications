import { SectionWrapper } from './SectionWrapper';

export const TrustStrip = () => {
  const logos = [
    { name: 'Atlassian', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/atlassian.svg' },
    { name: 'Microsoft', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft.svg' },
    { name: 'Slack', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/slack.svg' },
    { name: 'Google', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/google.svg' },
    { name: 'Launch Housing', logo: 'https://logo.clearbit.com/launchhousing.org.au' },
    { name: 'Akubra', logo: 'https://logo.clearbit.com/akubra.com.au' },
    { name: 'Novo Shoes', logo: 'https://logo.clearbit.com/novoshoes.com.au' },
    { name: 'Pacific Steel', logo: 'https://logo.clearbit.com/pacificsteel.com.au' },
  ];

  return (
    <SectionWrapper style={{ background: 'var(--color-body-bg)', padding: '4rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="mono-tag" style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>
          TRUSTED BY 1,000+ AUSTRALIAN BUSINESSES
        </p>

        <div className="marquee-container" style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex' }}>
          <div className="animate-marquee" style={{ display: 'flex', gap: '4rem', paddingRight: '4rem' }}>
            {[...logos, ...logos].map((item, i) => (
              <div 
                key={i} 
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
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
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  style={{ height: '20px', width: 'auto', filter: 'grayscale(1) brightness(1.5)', opacity: 0.7 }} 
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
