#!/usr/bin/env node
/**
 * CSS syntax checker
 * Validates CSS files for basic syntax errors
 */

const fs = require('fs');
const path = require('path');

function findCSSFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && item.name !== 'node_modules') {
      files.push(...findCSSFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith('.css')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function checkCSS(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for balanced braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    
    if (openBraces !== closeBraces) {
      console.error(`❌ ${filePath}: Unmatched braces (${openBraces} open, ${closeBraces} close)`);
      return false;
    }
    
    // Check for balanced parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    
    if (openParens !== closeParens) {
      console.error(`❌ ${filePath}: Unmatched parentheses (${openParens} open, ${closeParens} close)`);
      return false;
    }
    
    console.log(`✅ ${filePath}: CSS syntax OK`);
    return true;
  } catch (error) {
    console.error(`❌ ${filePath}: Error reading file - ${error.message}`);
    return false;
  }
}

const cssFiles = findCSSFiles('.');
let hasErrors = false;

console.log('Checking CSS files...');

if (cssFiles.length === 0) {
  console.log('No CSS files found.');
} else {
  for (const file of cssFiles) {
    if (!checkCSS(file)) {
      hasErrors = true;
    }
  }
}

if (hasErrors) {
  console.error('\n❌ CSS validation failed!');
  process.exit(1);
} else {
  console.log('\n✅ All CSS files are valid!');
}