const fs = require('fs');
const path = require('path');

const replacements = [
    { search: /C9X/g, replace: 'C9 phone system' },
    { search: /C9x/g, replace: 'C9 phone system' },
    { search: /c9x(?![a-zA-Z0-9_-])/g, replace: 'c9-phone-system' },
    { search: /\/telco\/c9x/g, replace: '/telco/c9-phone-system' }
];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.json') || file.endsWith('.md')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let originalContent = content;
            
            replacements.forEach(r => {
                content = content.replace(r.search, r.replace);
            });
            
            if (content !== originalContent) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated: ${filePath}`);
            }
        }
    });
}

const targetDir = path.join(__dirname, 'src');
processDirectory(targetDir);
console.log('Replacement complete.');
