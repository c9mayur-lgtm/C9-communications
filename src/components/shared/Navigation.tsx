import { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronDown, ArrowRight,
  Wifi, Shield, Server, Cloud, Smartphone, Building2, Globe,
  Monitor, HardDrive, Lock, Headphones, Phone, Network,
  LayoutGrid, Video, Mail, Users, CheckCircle
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../theme-provider';

/* ─────────────────────────────────────────────
   MEGA MENU DATA
   ───────────────────────────────────────────── */

const MANAGED_IT_MENU = {
  featured: {
    tagline: 'Proactive IT. Zero Surprises.',
    body: 'End-to-end managed services that keep your business running at peak performance — 24/7 Australian support, no lock-in contracts.',
    cta: { label: 'Talk to a Specialist', path: '/contact' },
  },
  columns: [
    {
      heading: 'Core Services',
      items: [
        { icon: <Server size={16} />, label: 'Managed IT Services', desc: 'Proactive monitoring & support', path: '/solutions' },
        { icon: <Shield size={16} />, label: 'Cybersecurity', desc: 'Zero-trust endpoint protection', path: '/solutions' },
        { icon: <Cloud size={16} />, label: 'Cloud Infrastructure', desc: 'Hybrid & multi-cloud hosting', path: '/solutions' },
        { icon: <HardDrive size={16} />, label: 'Backup & Disaster Recovery', desc: 'Business continuity guaranteed', path: '/solutions' },
        { icon: <Lock size={16} />, label: 'Compliance & Governance', desc: 'ISO, SOC2 & GDPR readiness', path: '/solutions' },
      ],
    },
    {
      heading: 'Support',
      items: [
        { icon: <Headphones size={16} />, label: '24/7 Help Desk', desc: 'Australian-based support team', path: '/support' },
        { icon: <Monitor size={16} />, label: 'Remote Monitoring', desc: 'Real-time infrastructure health', path: '/support' },
        { icon: <CheckCircle size={16} />, label: 'Onsite Field Services', desc: 'Nationwide dispatch network', path: '/support' },
      ],
    },
  ],
  partners: ['Microsoft', 'AWS', 'Cisco', 'CrowdStrike'],
  highlight: { label: 'Free IT Audit', path: '/contact', note: 'Valued at $2,500 — for a limited time' },
};

const TELCO_MENU = {
  featured: {
    tagline: 'Australia\'s Enterprise Telco.',
    body: 'Premium NBN, fibre and voice solutions built for business — with transparent pricing and guaranteed SLAs from day one.',
    cta: { label: 'See Our Plans', path: '/pricing' },
  },
  columns: [
    {
      heading: 'Connectivity',
      items: [
        { icon: <Wifi size={16} />, label: 'Business NBN & Fibre', desc: 'Ultra-fast leased line & broadband', path: '/solutions' },
        { icon: <Network size={16} />, label: 'SD-WAN & MPLS', desc: 'Intelligent wide-area networking', path: '/solutions' },
        { icon: <Globe size={16} />, label: '4G/5G Backup', desc: 'Failover for mission-critical uptime', path: '/solutions' },
      ],
    },
    {
      heading: 'Voice & Comms',
      items: [
        { icon: <Phone size={16} />, label: 'Cloud PBX & VoIP', desc: 'Enterprise voice in the cloud', path: '/solutions' },
        { icon: <Smartphone size={16} />, label: 'Business Mobile', desc: 'SIM plans on Australia\'s best network', path: '/solutions' },
        { icon: <Headphones size={16} />, label: 'SIP Trunking', desc: 'Replace legacy ISDN instantly', path: '/solutions' },
      ],
    },
  ],
  partners: ['Telstra', 'Optus', 'AAPT', 'Vocus'],
  highlight: { label: 'Get a Quote', path: '/pricing', note: 'Month-to-month, zero lock-in' },
};

const WORKPLACE_MENU = {
  featured: {
    tagline: 'Work Better. From Anywhere.',
    body: 'Microsoft 365, Teams, and the best collaboration tools — deployed, managed and secured by C9 so your team can focus on what matters.',
    cta: { label: 'Book a Demo', path: '/contact' },
  },
  columns: [
    {
      heading: 'Collaboration',
      items: [
        { icon: <LayoutGrid size={16} />, label: 'Microsoft 365', desc: 'Full suite deployment & management', path: '/solutions' },
        { icon: <Video size={16} />, label: 'Microsoft Teams', desc: 'Voice, video & chat integration', path: '/solutions' },
        { icon: <Mail size={16} />, label: 'Email & Security', desc: 'Defender, Intune & Purview', path: '/solutions' },
      ],
    },
    {
      heading: 'Productivity',
      items: [
        { icon: <Users size={16} />, label: 'Device Management', desc: 'Intune, Autopilot & MDM', path: '/solutions' },
        { icon: <Cloud size={16} />, label: 'Azure Virtual Desktop', desc: 'Secure remote work at scale', path: '/solutions' },
        { icon: <Shield size={16} />, label: 'Identity & Access', desc: 'Azure AD, MFA & SSO', path: '/solutions' },
      ],
    },
  ],
  partners: ['Microsoft', 'Google', 'Zoom', 'Atlassian'],
  highlight: { label: 'MS 365 Assessment', path: '/contact', note: 'Free environment audit for your team' },
};

// Secondary nav items
const COMPANY_MENU = [
  { icon: <Building2 size={15} />, label: 'About C9', desc: 'Our story & mission', path: '/about' },
  { icon: <Globe size={15} />, label: 'Case Studies', desc: 'Client success stories', path: '/about' },
];

/* ─────────────────────────────────────────────
   MEGA PANEL COMPONENT
   ───────────────────────────────────────────── */

type MegaMenuData = typeof MANAGED_IT_MENU;

const MegaPanel = ({ data, visible }: { data: MegaMenuData; visible: boolean }) => (
  <div style={{
    position: 'fixed',
    top: '72px',
    left: 0,
    right: 0,
    zIndex: 99,
    opacity: visible ? 1 : 0,
    visibility: visible ? 'visible' : 'hidden',
    transform: visible ? 'translateY(0)' : 'translateY(-10px)',
    transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
    pointerEvents: visible ? 'auto' : 'none',
  }}>
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2.5rem',
    }}>
      <div style={{
        background: 'var(--mega-bg, #fff)',
        border: '1px solid var(--c9-border)',
        borderTop: 'none',
        borderRadius: '0 0 20px 20px',
        boxShadow: '0 32px 72px rgba(0,0,0,0.18)',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '280px 1fr 1fr 240px',
        gap: 0,
      }}>

        {/* COL 1: Featured */}
        <div style={{
          background: 'linear-gradient(150deg, #7C3AED 0%, #4C1D95 100%)',
          padding: '40px 32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'rgba(245,243,255,0.6)',
              marginBottom: '16px',
            }}>C9 Communications</div>
            <h3 style={{
              fontWeight: 900, fontSize: '22px', lineHeight: 1.2,
              color: '#fff', marginBottom: '16px', letterSpacing: '-0.03em',
            }}>{data.featured.tagline}</h3>
            <p style={{
              fontSize: '13px', lineHeight: 1.65,
              color: 'rgba(245,243,255,0.75)',
              marginBottom: '32px',
            }}>{data.featured.body}</p>
          </div>
          <Link to={data.featured.cta.path} style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: '#fff', fontWeight: 700, fontSize: '13px',
            padding: '10px 18px', borderRadius: '100px',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
          >
            {data.featured.cta.label} <ArrowRight size={13} />
          </Link>
        </div>

        {/* COLS 2 & 3: Service Links */}
        {data.columns.map((col, ci) => (
          <div key={ci} style={{
            padding: '32px 28px',
            borderLeft: '1px solid var(--c9-border)',
          }}>
            <div style={{
              fontSize: '10px', fontWeight: 800, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--c9-accent)',
              marginBottom: '16px',
            }}>{col.heading}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {col.items.map((item, ii) => (
                <Link key={ii} to={item.path} style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '10px 12px', borderRadius: '10px',
                    transition: 'background 0.15s',
                    cursor: 'pointer',
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'var(--c9-surface)';
                      const arrow = e.currentTarget.querySelector('.mega-arrow') as HTMLElement;
                      if (arrow) { arrow.style.opacity = '1'; arrow.style.transform = 'translateX(2px)'; }
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      const arrow = e.currentTarget.querySelector('.mega-arrow') as HTMLElement;
                      if (arrow) { arrow.style.opacity = '0'; arrow.style.transform = 'translateX(0)'; }
                    }}
                  >
                    <div style={{
                      width: '34px', height: '34px', borderRadius: '9px', flexShrink: 0,
                      background: 'rgba(124,58,237,0.1)', border: '1px solid var(--c9-border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#7C3AED',
                    }}>{item.icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontWeight: 600, fontSize: '13.5px',
                        color: 'hsl(var(--foreground))',
                        marginBottom: '2px',
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      }}>{item.label}</div>
                      <div style={{ fontSize: '12px', color: 'var(--c9-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.desc}</div>
                    </div>
                    <ArrowRight size={12} className="mega-arrow" style={{
                      color: '#7C3AED', flexShrink: 0,
                      opacity: 0, transition: 'all 0.15s',
                    }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* COL 4: Partners + CTA */}
        <div style={{
          padding: '32px 24px',
          borderLeft: '1px solid var(--c9-border)',
          background: 'var(--c9-surface)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{
              fontSize: '10px', fontWeight: 800, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--c9-accent)',
              marginBottom: '16px',
            }}>Platform Partners</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              {data.partners.map((p, pi) => (
                <span key={pi} style={{
                  padding: '5px 12px', borderRadius: '100px', fontSize: '11px',
                  fontWeight: 700, background: 'rgba(124,58,237,0.1)',
                  border: '1px solid var(--c9-border)', color: '#7C3AED',
                }}>{p}</span>
              ))}
            </div>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(109,33,168,0.08))',
            border: '1px solid var(--c9-border)',
            borderRadius: '14px', padding: '20px',
          }}>
            <div style={{ fontSize: '11px', color: 'var(--c9-muted)', marginBottom: '8px' }}>{data.highlight.note}</div>
            <Link to={data.highlight.path} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              fontWeight: 800, fontSize: '14px', color: '#7C3AED',
              textDecoration: 'none',
            }}>
              {data.highlight.label}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* Small dropdown for Company */
const SmallDropdown = ({ items, visible }: { items: typeof COMPANY_MENU; visible: boolean }) => (
  <div style={{
    position: 'absolute', top: 'calc(100% + 12px)', left: '50%',
    background: 'var(--mega-bg, #fff)',
    border: '1px solid var(--c9-border)', borderRadius: '14px', padding: '10px',
    width: '280px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
    opacity: visible ? 1 : 0, visibility: visible ? 'visible' : 'hidden',
    transform: visible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-8px)',
    transition: 'all 0.2s cubic-bezier(0.16,1,0.3,1)',
    zIndex: 100,
  }}>
    {items.map((item, i) => (
      <Link key={i} to={item.path} style={{ textDecoration: 'none' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          padding: '10px 12px', borderRadius: '9px', transition: 'background 0.15s',
        }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--c9-surface)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: 'rgba(124,58,237,0.1)', border: '1px solid var(--c9-border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7C3AED',
          }}>{item.icon}</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '13.5px', color: 'hsl(var(--foreground))', marginBottom: '2px' }}>{item.label}</div>
            <div style={{ fontSize: '12px', color: 'var(--c9-muted)' }}>{item.desc}</div>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

/* ─────────────────────────────────────────────
   MAIN NAVIGATION
   ───────────────────────────────────────────── */

type MenuKey = 'managed-it' | 'telco' | 'workplace' | 'company' | null;

const MEGA_MAP: Record<string, MegaMenuData> = {
  'managed-it': MANAGED_IT_MENU,
  'telco': TELCO_MENU,
  'workplace': WORKPLACE_MENU,
};

// Primary (highlighted) tabs
const PRIMARY_TABS = [
  { name: 'Managed IT', menuKey: 'managed-it' as MenuKey },
  { name: 'Telco', menuKey: 'telco' as MenuKey },
  { name: 'Modern Workplace', menuKey: 'workplace' as MenuKey },
];

// Secondary nav links
const SECONDARY_LINKS = [
  { name: 'Pricing', path: '/pricing' },
  { name: 'Industries', path: '/industries' },
  { name: 'Company', path: '/about', menuKey: 'company' as MenuKey },
  { name: 'Support', path: '/support' },
];

export const Navigation = () => {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHome = location.pathname === '/' || location.pathname === '/saas';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setNavOpen(false);
    setOpenMenu(null);
    setMobileSub(null);
  }, [location.pathname]);

  const handleEnter = (key: MenuKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(key);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 180);
  };

  const navBg = scrolled
    ? 'var(--nav-bg)'
    : isHome ? 'transparent' : 'var(--nav-bg)';

  const isMegaOpen = openMenu === 'managed-it' || openMenu === 'telco' || openMenu === 'workplace';

  // CSS var for mega panel background (adapts to body theme)
  const megaStyle = `
    :root { --mega-bg: #ffffff; }
    .dark { --mega-bg: #0f0720; }
  `;

  return (
    <>
      <style>{megaStyle}</style>
      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop-links, .nav-desktop-actions { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
        .nav-primary-tab {
          display: flex; align-items: center; gap: 5px;
          font-weight: 700; font-size: 13.5px; letter-spacing: -0.01em;
          padding: 7px 14px; border-radius: 100px;
          border: none; cursor: pointer; white-space: nowrap;
          transition: all 0.2s ease;
        }
        .nav-secondary-link {
          display: flex; align-items: center; gap: 4px;
          font-weight: 500; font-size: 13.5px;
          padding: 7px 12px; border-radius: 8px;
          text-decoration: none; white-space: nowrap;
          border: none; cursor: pointer; background: none;
          transition: all 0.15s ease;
        }
      `}</style>

      {/* Backdrop for mega panel */}
      {isMegaOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 98,
            background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(4px)',
          }}
          onMouseEnter={handleLeave}
        />
      )}

      <motion.nav 
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 99,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 2.5rem',
          height: scrolled ? '58px' : '72px',
          background: navBg,
          backdropFilter: (scrolled || !isHome) ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: (scrolled || !isHome) ? 'blur(24px)' : 'none',
          borderBottom: (scrolled || !isHome) ? '1px solid var(--c9-border)' : '1px solid transparent',
          transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
      }}>

        {/* LOGO */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src={theme === 'light' ? "/images/c9_logo_light.svg" : "/images/c9_logo.svg"} alt="C9 Communications" style={{ 
            height: '45px'
          }} />
        </Link>

        {/* DESKTOP NAV */}
        <div className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
          onMouseLeave={handleLeave}
        >
          {/* PRIMARY TABS — Managed IT | Telco | Modern Workplace */}
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            {PRIMARY_TABS.map(tab => {
              const isOpen = openMenu === tab.menuKey;
              return (
                <div
                  key={tab.name}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => handleEnter(tab.menuKey)}
                >
                  <button
                    className="nav-primary-tab"
                    style={{
                      background: isOpen
                        ? 'var(--c9-surface)'
                        : 'rgba(124,58,237,0.05)',
                      color: isOpen ? 'var(--c9-primary)' : 'hsl(var(--foreground))',
                      border: `1px solid ${isOpen ? 'var(--c9-primary)' : 'var(--c9-border)'}`,
                      fontWeight: 800
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'var(--c9-surface)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--c9-primary)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--c9-primary)';
                    }}
                    onMouseLeave={e => {
                      if (!isOpen) {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.05)';
                        (e.currentTarget as HTMLElement).style.color = 'hsl(var(--foreground))';
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--c9-border)';
                      }
                    }}
                  >
                    {tab.name}
                    <ChevronDown size={12} style={{
                      transition: 'transform 0.2s',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* DIVIDER */}
          <div style={{ width: '1px', height: '20px', background: 'var(--c9-border)', margin: '0 6px' }} />

          {/* SECONDARY LINKS */}
          {SECONDARY_LINKS.map(link => {
            const isActive = location.pathname === link.path;
            const isCompany = link.menuKey === 'company';
            const isOpen = isCompany && openMenu === 'company';

            return (
              <div
                key={link.name}
                style={{ position: 'relative' }}
                onMouseEnter={() => isCompany && handleEnter('company')}
              >
                {isCompany ? (
                  <button
                    className="nav-secondary-link"
                    style={{ color: isActive ? 'var(--c9-primary)' : 'var(--c9-muted)', fontWeight: isActive ? 700 : 500 }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--c9-primary)';
                      (e.currentTarget as HTMLElement).style.background = 'var(--c9-surface)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = isActive ? 'var(--c9-primary)' : 'var(--c9-muted)';
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}
                  >
                    {link.name}
                    <ChevronDown size={12} style={{
                      transition: 'transform 0.2s',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className="nav-secondary-link"
                    style={{ color: isActive ? 'var(--c9-primary)' : 'var(--c9-muted)', fontWeight: isActive ? 700 : 500 }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--c9-primary)';
                      (e.currentTarget as HTMLElement).style.background = 'var(--c9-surface)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = isActive ? 'var(--c9-primary)' : 'var(--c9-muted)';
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}
                  >
                    {link.name}
                  </Link>
                )}
                {isCompany && <SmallDropdown items={COMPANY_MENU} visible={isOpen} />}
              </div>
            );
          })}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="nav-desktop-actions" style={{ display: 'flex', gap: '10px', alignItems: 'center', flexShrink: 0 }}>
          <ThemeToggle />
          <a href="tel:1800000000" style={{
            fontWeight: 700, fontSize: '13px', color: 'var(--c9-muted)',
            textDecoration: 'none', transition: 'color 0.15s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--c9-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--c9-muted)')}
          >
            1800 C9 TECH
          </a>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'var(--c9-primary)',
            color: '#fff', fontWeight: 700, fontSize: '13px',
            padding: '9px 20px', borderRadius: '100px',
            border: 'none',
            textDecoration: 'none',
            transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            Get a Quote
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="nav-mobile-btn" style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
          <ThemeToggle />
          <button
            onClick={() => setNavOpen(true)}
            style={{ color: 'var(--c9-text)', background: 'none', border: 'none', padding: '8px', borderRadius: '8px', cursor: 'pointer' }}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* ── MEGA PANELS (rendered outside nav for full-width) ── */}
      <div onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpenMenu(openMenu); }}
        onMouseLeave={handleLeave}
      >
        {PRIMARY_TABS.map(tab => (
          <MegaPanel
            key={tab.menuKey}
            data={MEGA_MAP[tab.menuKey as string]}
            visible={openMenu === tab.menuKey}
          />
        ))}
      </div>

      {/* ── MOBILE OVERLAY ── */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        background: 'hsl(var(--background))', backdropFilter: 'blur(20px)',
        zIndex: 200,
        opacity: navOpen ? 1 : 0,
        visibility: navOpen ? 'visible' : 'hidden',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        display: 'flex', flexDirection: 'column', overflowY: 'auto',
      }}>
        {/* Mobile header */}
        <div style={{
          position: 'sticky', top: 0, display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', padding: '16px 24px',
          background: 'var(--nav-bg)', borderBottom: '1px solid var(--c9-border)',
          zIndex: 201, backdropFilter: 'blur(10px)',
        }}>
          <Link to="/" onClick={() => setNavOpen(false)}>
            <img src={theme === 'light' ? "/images/c9_logo_light.svg" : "/images/c9_logo.svg"} alt="C9 Communications" style={{ height: '45px' }} />
          </Link>
          <button onClick={() => setNavOpen(false)} style={{ color: 'hsl(var(--foreground))', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
            <X size={28} />
          </button>
        </div>

        {/* Mobile menu content */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          
          {/* Primary Tabs */}
          <div style={{ marginBottom: '8px' }}>
            <div style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c9-muted)', marginBottom: '12px' }}>
              Main Services
            </div>
            {PRIMARY_TABS.map((tab, i) => {
              const isSubOpen = mobileSub === tab.menuKey;
              const menuData = MEGA_MAP[tab.menuKey as string];
              return (
                <div key={tab.name} style={{
                  opacity: navOpen ? 1 : 0,
                  transform: navOpen ? 'translateY(0)' : 'translateY(16px)',
                  transition: `all 0.4s ease ${i * 0.05}s`,
                  borderBottom: '1px solid var(--c9-border)',
                }}>
                  <button
                    onClick={() => setMobileSub(isSubOpen ? null : tab.menuKey as string)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      width: '100%', color: isSubOpen ? 'var(--c9-primary)' : 'hsl(var(--foreground))',
                      fontWeight: 700, fontSize: '18px',
                      padding: '18px 0', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer',
                    }}
                  >
                    {tab.name}
                    <ChevronDown size={20} style={{ transition: 'transform 0.3s', transform: isSubOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: 'var(--c9-primary)' }} />
                  </button>
                  <div style={{
                    maxHeight: isSubOpen ? '800px' : '0',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                    paddingBottom: isSubOpen ? '16px' : '0',
                  }}>
                    {menuData.columns.flatMap((col, ci) => col.items.map((item, ii) => (
                      <Link key={`${ci}-${ii}`} to={item.path} onClick={() => setNavOpen(false)} style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '12px', borderRadius: '12px',
                        background: 'var(--c9-surface)', marginBottom: '8px', textDecoration: 'none',
                      }}>
                        <div style={{
                          width: '32px', height: '32px', borderRadius: '8px',
                          background: 'var(--c9-surface)', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', color: 'var(--c9-primary)',
                        }}>{item.icon}</div>
                        <div>
                          <div style={{ color: 'hsl(var(--foreground))', fontWeight: 600, fontSize: '14px' }}>{item.label}</div>
                          <div style={{ color: 'var(--c9-muted)', fontSize: '12px' }}>{item.desc}</div>
                        </div>
                        <ArrowRight size={14} style={{ marginLeft: 'auto', opacity: 0.4, color: '#7C3AED' }} />
                      </Link>
                    )))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Secondary links */}
          <div>
            {SECONDARY_LINKS.map((link, i) => (
              <div key={link.name} style={{
                opacity: navOpen ? 1 : 0,
                transform: navOpen ? 'translateY(0)' : 'translateY(16px)',
                transition: `all 0.4s ease ${(i + 3) * 0.05}s`,
                borderBottom: '1px solid var(--c9-border)',
              }}>
                <Link to={link.path} onClick={() => setNavOpen(false)} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  color: 'var(--c9-muted)', fontWeight: 600, fontSize: '16px',
                  padding: '18px 0', textDecoration: 'none',
                }}>
                  {link.name}
                  <ArrowRight size={16} style={{ opacity: 0.4 }} />
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile CTAs */}
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '32px', paddingBottom: '24px' }}>
            <a href="tel:1800000000" style={{
              textAlign: 'center', padding: '16px', borderRadius: '100px',
              border: '1px solid var(--c9-border)', color: 'var(--c9-primary)',
              fontWeight: 700, textDecoration: 'none', fontSize: '15px',
              background: 'var(--c9-surface)',
            }}>📞 1800 C9 TECH</a>
            <Link to="/contact" onClick={() => setNavOpen(false)} style={{
              textAlign: 'center', padding: '18px', borderRadius: '100px',
              background: 'var(--c9-primary)',
              color: '#fff', fontWeight: 800, textDecoration: 'none',
              fontSize: '16px',
            }}>Get a Free Quote →</Link>
          </div>
        </div>
      </div>
    </>
  );
};
