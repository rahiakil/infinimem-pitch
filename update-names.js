const fs = require('fs');
const path = require('path');

// Function to replace text in a file
function replaceInFile(filePath, searchText, replaceText) {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        content = content.replace(new RegExp(searchText, 'g'), replaceText);
        
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content);
            console.log(`Updated: ${filePath}`);
            return true;
        }
    }
    return false;
}

// Files to update
const filesToUpdate = [
    './public/index.html',
    './public/sections/hero.html',
    './public/sections/infrastructure.html',
    './public/sections/mermaid-diagrams.html',
    './public/css/liquid-glass.css'
];

console.log('Updating Co-Author to Infinimem...\n');

// Replace Co-Author with Infinimem
filesToUpdate.forEach(file => {
    replaceInFile(file, 'Co-Author', 'Infinimem');
});

console.log('\nUpdating hierarchical memory references...\n');

// Replace "Hierarchical Memory" with "Memory Agent" in specific contexts
filesToUpdate.forEach(file => {
    replaceInFile(file, 'Hierarchical Memory', 'Memory Agent');
    replaceInFile(file, 'hierarchical memory', 'Memory Agent');
});

console.log('\nAll updates completed!');