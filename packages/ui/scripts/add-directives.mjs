#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, '..', 'dist');

const files = ['index.js', 'index.cjs'];

for (const file of files) {
  const filePath = join(distDir, file);
  
  try {
    let content = readFileSync(filePath, 'utf8');
    
    // Check if "use client" is already present
    if (content.startsWith('"use client";')) {
      console.log(`✓ ${file} already has "use client" directive`);
      continue;
    }
    
    // Add "use client" directive at the beginning
    content = '"use client";\n' + content;
    writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Added "use client" directive to ${file}`);
  } catch (error) {
    console.error(`✗ Error processing ${file}:`, error.message);
    process.exit(1);
  }
}

console.log('✓ All directives added successfully');

