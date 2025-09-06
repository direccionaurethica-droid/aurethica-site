#!/usr/bin/env node
/**
 * API health checker
 * Tests the API endpoints to ensure they work correctly
 */

const http = require('http');

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          data: data
        });
      });
    });
    
    req.on('error', reject);
    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

async function testEndpoint(endpoint, description) {
  try {
    const response = await makeRequest(`http://localhost:3001${endpoint}`);
    if (response.statusCode === 200) {
      console.log(`✅ ${description}: OK`);
      return true;
    } else {
      console.error(`❌ ${description}: HTTP ${response.statusCode}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ ${description}: ${error.message}`);
    return false;
  }
}

async function testAPI() {
  console.log('Testing API endpoints...');
  console.log('Note: Make sure the API server is running on port 3001');
  
  const tests = [
    ['/health', 'Health check'],
    ['/api', 'API info'],
    ['/api/styles', 'Styles endpoint'],
    ['/api/onboarding', 'Onboarding endpoint'],
    ['/api/tips', 'Tips endpoint'],
    ['/api/messages', 'Messages endpoint']
  ];
  
  let passed = 0;
  let failed = 0;
  
  for (const [endpoint, description] of tests) {
    if (await testEndpoint(endpoint, description)) {
      passed++;
    } else {
      failed++;
    }
  }
  
  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  
  if (failed > 0) {
    console.error('\n❌ API tests failed!');
    process.exit(1);
  } else {
    console.log('\n✅ All API tests passed!');
  }
}

testAPI();