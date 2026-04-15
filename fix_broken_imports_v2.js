const fs = require('fs');
const path = require('path');

const replacements = [
    { search: /\/c9-phone-system\/Advantage/g, replace: '/c9-phone-system/C9PhoneSystemAdvantage' }
];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
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
console.log('Update complete.');
