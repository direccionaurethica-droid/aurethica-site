# Auréthica API Development Guide

This document provides instructions for setting up and developing the Auréthica API backend locally.

## Project Structure

```
aurethica-site/
├── api/                  # Backend API server
│   ├── data/            # JSON datasets
│   ├── server.js        # Express server
│   ├── package.json     # API dependencies
│   └── .env.example     # Environment variables template
├── docs/                # Documentation
└── package.json         # Root package management
```

## Local Development Setup

### Prerequisites

- Node.js 16.0.0 or higher
- npm (comes with Node.js)

### Quick Start

1. **Install dependencies:**
   ```bash
   npm run install:api
   ```
   This installs API dependencies.

2. **Set up environment variables:**
   ```bash
   cp api/.env.example api/.env
   ```
   
   Edit `api/.env` if needed. Default values work for local development.

3. **Start the API server:**
   ```bash
   npm start
   ```
   
   The API server will be running on http://localhost:3001

### Individual Commands

- **API only:** `npm run dev` or `npm start`

## Available API Endpoints

- `GET /health` - Health check
- `GET /api` - API information and available endpoints
- `GET /api/styles` - All hair styles
- `GET /api/styles/:id` - Specific style by ID
- `GET /api/tips` - Hair care tips
- `GET /api/messages` - Application messages
- `GET /api/onboarding` - Onboarding questions

## API Integration

### CORS Configuration

The API server uses environment-based CORS configuration:
- `CORS_ORIGIN` environment variable controls allowed origins
- Multiple origins can be separated by commas
- Default for development: `http://localhost:3000,http://localhost:5173`
- The middleware properly handles preflight OPTIONS requests

## Deployment

### API Deployment (Render)

1. **Create new Web Service on Render**
2. **Connect repository**
3. **Set build settings:**
   - Root Directory: `api`
   - Build Command: `npm install`
   - Start Command: `npm start`

4. **Environment Variables:**
   ```
   NODE_ENV=production
   PORT=10000
   CORS_ORIGIN=https://your-frontend-domain.com
   ```

### CORS Configuration for Production

When deploying, ensure the API's `CORS_ORIGIN` environment variable includes your frontend domain:

```
CORS_ORIGIN=https://your-frontend.vercel.app,https://your-custom-domain.com
```

## Data Management

The API serves data from JSON files located in `api/data/`:

- `styles.json` - Hair style definitions and metadata
- `onboarding.json` - Onboarding questionnaire data
- `messages.json` - Application messages and text content
- `tips.json` - Hair care tips and recommendations

These files can be updated directly to modify the API responses without code changes.

## Testing the API

You can test the API endpoints using curl or any HTTP client:

```bash
# Health check
curl http://localhost:3001/health

# Get all styles
curl http://localhost:3001/api/styles

# Get specific style
curl http://localhost:3001/api/styles/nebulosa

# Get API info
curl http://localhost:3001/api
```
