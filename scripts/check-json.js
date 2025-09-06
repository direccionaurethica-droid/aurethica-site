#!/usr/bin/env node
/**
 * JSON syntax checker
 * Validates JSON files for syntax errors
 */

const fs = require('fs');
const path = require('path');

function findJSONFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && item.name !== 'node_modules') {
      files.push(...findJSONFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith('.json') && item.name !== 'package-lock.json') {
      files.push(fullPath);
    }
  }
  
  return files;
}

function checkJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    JSON.parse(content);
    console.log(`✅ ${filePath}: Valid JSON`);
    return true;
  } catch (error) {
    console.error(`❌ ${filePath}: ${error.message}`);
    return false;
  }
}

const jsonFiles = findJSONFiles('.');
let hasErrors = false;

console.log('Checking JSON files...');

if (jsonFiles.length === 0) {
  console.log('No JSON files found.');
} else {
  for (const file of jsonFiles) {
    if (!checkJSON(file)) {
      hasErrors = true;
    }
  }
}

if (hasErrors) {
  console.error('\n❌ JSON validation failed!');
  process.exit(1);
} else {
  console.log('\n✅ All JSON files are valid!');
}