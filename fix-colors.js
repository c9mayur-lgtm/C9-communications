import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function replaceInFile(p) {
  let c = fs.readFileSync(p, 'utf8');

  // VERY aggressive replace for the specific rgba string that was missed
  c = c.replace(/rgba\(248,245,255,0\.[0-9]+\)/g, 'var(--c9-muted)');
  c = c.replace(/rgba\(255,255,255,0\.[0-9]+\)/g, 'var(--c9-surface)');
  c = c.replace(/rgba\(167,139,250,0\.[0-9]+\)/g, 'var(--c9-border)');
  
  // Specific hardcoded #fff or #ffffff not caught before
  c = c.replace(/color:\s*['"]#fff(?:fff)?['"]/g, "color: 'hsl(var(--foreground))'");
  c = c.replace(/color:\s*"#fff"/g, 'color: "hsl(var(--foreground))"');
  
  // Other potential text color variations
  c = c.replace(/color:\s*['"]#0A0010['"]/g, "color: 'hsl(var(--background))'");

  fs.writeFileSync(p, c);
  console.log('Fixed', p);
}

const files = [
  'src/pages/Pricing.tsx',
  'src/pages/About.tsx',
  'src/pages/Contact.tsx',
  'src/pages/Industries.tsx',
  'src/pages/Solutions.tsx',
  'src/pages/Support.tsx',
  'src/pages/Landing.tsx',
  'src/pages/SaaSHomepage.tsx',
  'src/pages/SaaSHomepage.css',
  'src/components/shared/Navigation.tsx',
  'src/components/shared/Footer.tsx',
  'src/components/landing/Hero.tsx',
  'src/components/landing/TrustStrip.tsx',
  'src/components/landing/ProblemSolution.tsx',
  'src/components/landing/ServicesGrid.tsx',
  'src/components/landing/C9XSpotlight.tsx',
  'src/components/landing/CaseStudies.tsx',
  'src/components/landing/Differentiators.tsx',
  'src/components/landing/LeadCapture.tsx',
  'src/components/landing/FooterInfo.tsx'
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f);
  if (fs.existsSync(fullPath)) {
    replaceInFile(fullPath);
  }
});
