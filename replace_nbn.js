const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const dir = path.join(__dirname, 'src');

walkDir(dir, function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // Rules:
    // 1. Business NBN or Business NBN™ => Small Business nbn™
    // 2. NBN™ => nbn™
    // 3. NBN => nbn (watch out for URLs or image paths like NBN_Co-Logo)
    // 4. Fibre NBN => Fibre nbn
    
    // Replace "Business NBN™" and "Business NBN" 
    content = content.replace(/Business NBN(?:™|\(TM\))?/gi, 'Small Business nbn™');
    
    // Replace "NBN™" and "NBN(TM)"
    content = content.replace(/NBN(?:™|\(TM\))/g, 'nbn™');
    
    // Replace standalone NBN, avoiding URLs and specific strings 
    // We will do a generic replace for NBN but we have to be careful about strict exact words.
    // \bNBN\b
    content = content.replace(/\bNBN\b/g, 'nbn');

    // Fix up potential issues with image paths if there were any (e.g., NBN_Co-Logo)
    content = content.replace(/nbn_Co-Logo/g, 'NBN_Co-Logo');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${filePath}`);
    }
  }
});
