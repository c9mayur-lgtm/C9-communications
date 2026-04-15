
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components/sections/outsourcing');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');

  // Replace colors
  content = content.replace(/#1A1A2E/g, '#0c1024');
  content = content.replace(/#6B7280/g, 'slate-500');

  // Ensure ALL semantic text classes correctly implement the Proxima Nova fallback (font-sans)
  content = content.replace(/className=\"([^\"]+)\"/g, (match, classes) => {
    if ((classes.includes('text-') || classes.includes('font-') || classes.includes('leading-') || classes.includes('tracking-')) && !classes.includes('font-sans')) {
       return 'className=\"' + classes + ' font-sans\"';
    }
    return match;
  });

  // Hero Section specifically
  content = content.replace(/text-\[36px\] md:text-\[52px\]/g, 'text-[36px] sm:text-[42px] md:text-[52px] lg:text-[58px] tracking-tight');
  content = content.replace(/text-\[18px\] text-\[#6B7280\] max-w-\[560px\]/g, 'text-[17px] md:text-[19px] lg:text-[20px] text-slate-600 max-w-[560px]');

  // H2s
  content = content.replace(/text-\[28px\] md:text-\[40px\](.*?)leading-tight/g, 'text-[32px] md:text-[40px] tracking-tight -[1.1]');

  // H3s
  content = content.replace(/text-\[18px\] font-bold/g, 'text-[20px] font-bold tracking-tight');
  content = content.replace(/text-\[18px\] font-medium/g, 'text-[20px] font-bold tracking-tight');

  // Body Defaults
  content = content.replace(/text-\[14px\] text-slate-500 leading-\[1.6\]/g, 'text-[15px] text-slate-500 leading-relaxed');

  fs.writeFileSync(path.join(dir, file), content, 'utf8');
}
console.log('Update Complete');
