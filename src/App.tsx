import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/shared/Navigation';
import { Footer } from './components/shared/Footer';
import { Cursor } from './components/shared/Cursor';
import { C9X } from './pages/C9X';
import { Pricing } from './pages/Pricing';
import { Landing } from './pages/Landing';

function App() {
  return (
    <Router>
      <Cursor />
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/c9x" element={<C9X />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
