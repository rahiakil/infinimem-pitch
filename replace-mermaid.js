const fs = require('fs');

// Read the index.html file
let content = fs.readFileSync('./public/index.html', 'utf8');

// Replace all Mermaid diagrams with a placeholder
const mermaidRegex = /<div class="mermaid">\s*[\s\S]*?<\/div>/g;

content = content.replace(mermaidRegex, `<div class="diagram-placeholder" style="padding: 40px; text-align: center; background: #f5f5f5; border-radius: 8px; border: 2px dashed #ccc;">
    <p style="margin: 0; color: #666; font-style: italic;">📊 Architecture Diagram</p>
    <small style="color: #999;">Mermaid diagrams have been moved to separate sections for better performance</small>
</div>`);

// Write the updated content back
fs.writeFileSync('./public/index.html', content);

console.log('Successfully replaced all Mermaid diagrams with placeholders');