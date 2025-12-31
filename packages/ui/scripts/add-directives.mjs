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
    
    // Check if "use client" is already at the very beginning
    const startsWithUseClient = content.startsWith('"use client";') ||
                                 content.startsWith('"use client";\n') ||
                                 content.startsWith('"use client";\r\n');
    
    if (startsWithUseClient) {
      // Remove any duplicate "use client" directives that might appear later
      // Keep only the first one at the start
      const lines = content.split('\n');
      const filteredLines = [];
      let foundFirstUseClient = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const isUseClient = line.trim() === '"use client";';
        
        if (isUseClient && !foundFirstUseClient) {
          // Keep the first "use client" (should be at start)
          filteredLines.push(line);
          foundFirstUseClient = true;
        } else if (isUseClient && foundFirstUseClient) {
          // Skip duplicate "use client" directives
          continue;
        } else {
          filteredLines.push(line);
        }
      }
      
      content = filteredLines.join('\n');
      writeFileSync(filePath, content, 'utf8');
      console.log(`✓ ${file} already has "use client" directive at the start (removed duplicates if any)`);
      continue;
    }
    
    // Remove any existing "use client" that might be in the middle of the file
    // (this handles cases where it was added incorrectly before)
    content = content.replace(/"use client";\r?\n?/g, '');
    
    // For CJS files that start with "use strict", add "use client" before it
    if (content.startsWith('"use strict";')) {
      content = '"use client";\n' + content;
    } else {
      // For ESM files, add at the beginning
      content = '"use client";\n' + content;
    }
    
    writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Added "use client" directive to ${file}`);
  } catch (error) {
    console.error(`✗ Error processing ${file}:`, error.message);
    process.exit(1);
  }
}

console.log('✓ All directives added successfully');

