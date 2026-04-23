const fs = require('fs');
const files = process.argv.slice(2);

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  for (let i = 0; i < content.length; i++) {
    const charCode = content.charCodeAt(i);
    if (charCode > 127) {
      console.log(`File: ${file}, Index: ${i}, CharCode: ${charCode}, Char: ${content[i]}, Context: ${content.substring(i - 10, i + 10)}`);
    }
  }
});
