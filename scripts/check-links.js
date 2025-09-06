#!/usr/bin/env node
/**
 * Link checker
 * Validates external links in HTML files
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

function findHTMLFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && item.name !== 'node_modules') {
      files.push(...findHTMLFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function extractLinks(content) {
  const linkRegex = /href=["']([^"']+)["']/g;
  const links = [];
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    const url = match[1];
    if (url.startsWith('http://') || url.startsWith('https://')) {
      links.push(url);
    }
  }
  
  return [...new Set(links)]; // Remove duplicates
}

function checkLink(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https:') ? https : http;
    
    const req = client.request(url, { method: 'HEAD' }, (res) => {
      resolve({
        url,
        status: res.statusCode,
        ok: res.statusCode >= 200 && res.statusCode < 400
      });
    });
    
    req.on('error', () => {
      resolve({
        url,
        status: 'ERROR',
        ok: false
      });
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        url,
        status: 'TIMEOUT',
        ok: false
      });
    });
    
    req.end();
  });
}

async function checkLinksInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const links = extractLinks(content);
    
    if (links.length === 0) {
      console.log(`📄 ${filePath}: No external links found`);
      return true;
    }
    
    console.log(`📄 ${filePath}: Checking ${links.length} external links...`);
    
    const results = await Promise.all(links.map(checkLink));
    let hasErrors = false;
    
    for (const result of results) {
      if (result.ok) {
        console.log(`  ✅ ${result.url}`);
      } else {
        console.error(`  ❌ ${result.url} (${result.status})`);
        hasErrors = true;
      }
    }
    
    return !hasErrors;
  } catch (error) {
    console.error(`❌ ${filePath}: Error reading file - ${error.message}`);
    return false;
  }
}

async function checkAllLinks() {
  const htmlFiles = findHTMLFiles('.');
  let hasErrors = false;
  
  console.log('Checking external links in HTML files...');
  
  if (htmlFiles.length === 0) {
    console.log('No HTML files found.');
    return;
  }
  
  for (const file of htmlFiles) {
    if (!(await checkLinksInFile(file))) {
      hasErrors = true;
    }
  }
  
  if (hasErrors) {
    console.error('\n❌ Link checking failed!');
    process.exit(1);
  } else {
    console.log('\n✅ All external links are valid!');
  }
}

checkAllLinks();