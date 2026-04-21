import fs from 'fs';
import path from 'path';

const files = [
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\managed-it\\backup-disaster-recovery\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\managed-it\\cloud-services\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\managed-it\\infrastructure\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\managed-it\\network-solutions\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\managed-it\\security-solutions\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\managed-it\\strategy-consulting\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\telco\\business-nbn\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\telco\\c9-phone-system\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\telco\\c9voice\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\telco\\contact-centre\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\telco\\enterprise-ethernet\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\telco\\fast-fibre\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\telco\\inbound-services\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\telco\\mobile-plans\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\telco\\sip-trunking\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\telco\\teams-calling\\page.tsx',
  'C:\\Users\\C9 - Mayur\\.antigravity\\C9\\C9 communications\\c9-next\\src\\app\\telco\\voice-systems\\page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove component usage
  content = content.replace(/<Navbar\s*\/>\n?/g, '');
  content = content.replace(/<Breadcrumbs\s*\/>\n?/g, '');
  content = content.replace(/<WpFooter\s*\/>\n?/g, '');
  
  // Remove imports
  content = content.replace(/import\s+{\s*Navbar\s*}\s+from\s+['"]@\/components\/layout\/Navbar['"];\n?/g, '');
  content = content.replace(/import\s+{\s*Breadcrumbs\s*}\s+from\s+['"]@\/components\/layout\/Breadcrumbs['"];\n?/g, '');
  content = content.replace(/import\s+{\s*WpFooter\s*}\s+from\s+['"]@\/components\/layout\/WpFooter['"];\n?/g, '');
  
  fs.writeFileSync(file, content);
  console.log(`Cleaned ${file}`);
});
