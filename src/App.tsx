import { Component, type ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/shared/Navigation';
import { Footer } from './components/shared/Footer';
import { SaaSHomepage } from './pages/SaaSHomepage';

import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Industries } from './pages/Industries';
import { Solutions } from './pages/Solutions';
import { Support } from './pages/Support';
import { Landing } from './pages/Landing';
import { Wordpress1 } from './pages/Wordpress1';

/* ── Error Boundary ── catches any render crash and shows a friendly message */
class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error('[C9] Render error caught by ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: '16px', padding: '40px',
          background: 'hsl(var(--background))', color: 'hsl(var(--foreground))', textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px' }}>⚠️</div>
          <h2 style={{ fontWeight: 700, fontSize: '24px' }}>Something went wrong</h2>
          <p style={{ color: 'var(--c9-muted)', maxWidth: '480px' }}>
            {this.state.error.message}
          </p>
          <button
            onClick={() => { this.setState({ error: null }); window.location.reload(); }}
            style={{
              marginTop: '16px', padding: '12px 28px', borderRadius: '100px',
              background: '#7C3AED', color: '#fff', fontWeight: 700,
              border: 'none', cursor: 'pointer', fontSize: '15px'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function AppBody() {
  const location = useLocation();
  const isReplica = location.pathname === '/wordpress1';

  return (
    <ErrorBoundary>
      {!isReplica && <Navigation />}
      <Routes>
        <Route path="/" element={<SaaSHomepage />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/classic" element={<Landing />} />
        <Route path="/wordpress1" element={<Wordpress1 />} />
      </Routes>
      {!isReplica && <Footer />}
    </ErrorBoundary>
  );
}

function App() {
  return (
    <Router>
      <AppBody />
    </Router>
  );
}

export default App;
