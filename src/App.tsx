import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/shared/Navigation';
import { Footer } from './components/shared/Footer';
import { Cursor } from './components/shared/Cursor';
import { SaaSHomepage } from './pages/SaaSHomepage';

import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Industries } from './pages/Industries';
import { Solutions } from './pages/Solutions';
import { Support } from './pages/Support';
import { Landing } from './pages/Landing';

function App() {
  return (
    <Router>
      <Cursor />
      <Navigation />
      <Routes>
        <Route path="/" element={<SaaSHomepage />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />

        {/* Old landing page preserved at /classic */}
        <Route path="/classic" element={<Landing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
