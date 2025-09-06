#!/bin/bash

# Auréthica Development Environment Verification Script
# This script verifies that the development environment is properly set up

echo "🔍 Verifying Auréthica Development Environment..."
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -d "api" ]; then
    echo "❌ Error: This script must be run from the aurethica-site root directory"
    exit 1
fi

# Check Node.js version
echo "📋 Checking Node.js version..."
NODE_VERSION=$(node --version)
echo "   Node.js version: $NODE_VERSION"

# Check if dependencies are installed
echo "📦 Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "❌ Root dependencies not installed. Run: npm run install:all"
    exit 1
fi

if [ ! -d "api/node_modules" ]; then
    echo "❌ API dependencies not installed. Run: npm run install:all"
    exit 1
fi

echo "✅ Dependencies are installed"

# Check environment file
echo "⚙️  Checking environment configuration..."
if [ ! -f "api/.env" ]; then
    echo "❌ Environment file missing. Run: cp api/.env.example api/.env"
    exit 1
fi

echo "✅ Environment file exists"

# Check if ports are available
echo "🔌 Checking port availability..."
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️  Port 3000 is already in use (frontend)"
fi

if lsof -Pi :3001 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️  Port 3001 is already in use (API)"
fi

# Test if we can start the servers (just validate scripts exist)
echo "📝 Validating npm scripts..."
npm run-script 2>/dev/null | grep -q "dev:" && echo "✅ Development scripts are available"

echo ""
echo "🎉 Environment verification complete!"
echo ""
echo "To start development:"
echo "  npm run dev"
echo ""
echo "To verify servers are working:"
echo "  Frontend: http://localhost:3000"
echo "  API Health: http://localhost:3001/health"