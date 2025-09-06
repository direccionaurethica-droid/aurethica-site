#!/usr/bin/env node
/**
 * JavaScript syntax checker
 * Validates JavaScript files for syntax errors
 */

const fs = require('fs');
const path = require('path');

function findJSFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && item.name !== 'node_modules') {
      files.push(...findJSFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith('.js')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function checkJS(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove shebang if present
    if (content.startsWith('#!')) {
      content = content.replace(/^#!.*$/m, '');
    }
    
    // Use a simple syntax check without executing the code
    new Function(content);
    console.log(`✅ ${filePath}: JavaScript syntax OK`);
    return true;
  } catch (error) {
    console.error(`❌ ${filePath}: ${error.message}`);
    return false;
  }
}

const jsFiles = findJSFiles('.');
let hasErrors = false;

console.log('Checking JavaScript files...');

if (jsFiles.length === 0) {
  console.log('No JavaScript files found.');
} else {
  for (const file of jsFiles) {
    if (!checkJS(file)) {
      hasErrors = true;
    }
  }
}

if (hasErrors) {
  console.error('\n❌ JavaScript validation failed!');
  process.exit(1);
} else {
  console.log('\n✅ All JavaScript files are valid!');
}