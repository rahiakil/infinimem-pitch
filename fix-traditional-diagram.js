const fs = require('fs');

// Read the index.html file
let content = fs.readFileSync('./public/index.html', 'utf8');

// Find and replace the Traditional Computer Architecture image with Mermaid diagram
const traditionalImageRegex = /<div class="diagram-container">\s*<img src="https:\/\/mermaid\.ink\/svg\/Z3JhcGggVEQ[^"]*"[^>]*>\s*<\/div>/;

const mermaidReplacement = `<div class="diagram-controls">
    <button class="zoom-btn" onclick="zoomDiagram(this, 1.2)">🔍+</button>
    <button class="zoom-btn" onclick="zoomDiagram(this, 0.8)">🔍-</button>
    <button class="zoom-btn" onclick="resetZoom(this)">↻</button>
</div>
<div class="mermaid diagram-zoomable">
graph TD
    subgraph "Traditional Computer System"
        A[User Applications] --> B[System Calls]
        B --> C[Operating System Kernel]
        C --> D[Process Scheduler]
        D --> E[Memory Manager]
        E --> F[File System Manager]
        F --> G[Device Driver Layer]
        G --> H[Hardware Abstraction Layer]
        H --> I[CPU Instruction Pipeline]
        I --> J[Cache Controller]
        J --> K[Memory Controller]
        K --> L[Physical RAM Banks]
        L --> M[Storage I/O Controller]
        M --> N[Disk/SSD Hardware]
        N --> O[Network Interface Controller]
        O --> P[Hardware Registers]
        
        D -.->|Context Switch| D1[Process Context<br/>32-64 registers per task]
        E -.->|Virtual Memory| E1[Page Table Management<br/>4KB page swapping]
        I -.->|Pipeline Stalls| I1[Instruction Cache Misses<br/>Sequential bottlenecks]
        J -.->|Cache Hierarchy| J1[L1/L2/L3 Cache Levels<br/>Limited by physical size]
        K -.->|Memory Bandwidth| K1[DRAM Access Latency<br/>100+ cycle delays]
        
        P --> Q[Limited Context Storage<br/>No persistent reasoning state]
    end
    
    style A fill:#e3f2fd
    style B fill:#f3e5f5
    style C fill:#fff8e1
    style D fill:#ffebee
    style E fill:#e8f5e8
    style F fill:#fce4ec
    style G fill:#f1f8e9
    style H fill:#fff3e0
    style I fill:#ff9999
    style J fill:#ffcc99
    style K fill:#c8e6c9
    style L fill:#b39ddb
    style M fill:#ffcdd2
    style N fill:#dcedc8
    style O fill:#f8bbd9
    style P fill:#81c784
    style Q fill:#ffab91
    style D1 fill:#ffcf9e
    style E1 fill:#ffcf9e
    style I1 fill:#ffcf9e
    style J1 fill:#ffcf9e
    style K1 fill:#ffcf9e
</div>`;

if (content.match(traditionalImageRegex)) {
    content = content.replace(traditionalImageRegex, mermaidReplacement);
    
    // Write the updated content back
    fs.writeFileSync('./public/index.html', content);
    console.log('✅ Successfully replaced Traditional Computer Architecture image with Mermaid diagram');
} else {
    console.log('❌ Traditional Computer Architecture image not found');
}