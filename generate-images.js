// Script to generate Mermaid diagram URLs for online rendering
const fs = require('fs');
const path = require('path');

const diagrams = [
    'traditional-architecture.mmd',
    'infinimem-architecture.mmd', 
    'cost-advantages.mmd'
];

const outputDir = './public/images/diagrams/';

diagrams.forEach(diagram => {
    const mmdPath = path.join(outputDir, diagram);
    const mmdContent = fs.readFileSync(mmdPath, 'utf8');
    
    // Base64 encode for URL
    const encoded = Buffer.from(mmdContent).toString('base64');
    
    // Create Mermaid Live URL
    const url = `https://mermaid.ink/img/${encoded}`;
    
    console.log(`\n${diagram}:`);
    console.log(url);
    console.log(`\nDirect SVG URL:`);
    console.log(`https://mermaid.ink/svg/${encoded}`);
});