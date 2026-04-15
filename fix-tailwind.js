
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components/sections/outsourcing');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');

  // Fix common mistakes from previous script
  content = content.replace(/text-\[slate-500\]/g, 'text-slate-600');
  content = content.replace(/text-\[slate-600\]/g, 'text-slate-600');
  content = content.replace(/text-\[#6B7280\]/g, 'text-slate-600');
  content = content.replace(/text-\[\#0c1024\]/g, 'text-[#0c1024]');

  fs.writeFileSync(path.join(dir, file), content, 'utf8');
}
console.log('Tailwind classes fixed');
