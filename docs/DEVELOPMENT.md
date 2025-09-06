# Auréthica Development Guide

This document provides instructions for setting up and developing the Auréthica website locally.

> 🎉 **Migration Complete**: The API in this repository has fully replaced the legacy `hairlab-data-service`. See [Migration Documentation](MIGRATION_HAIRLAB.md) for details.

## Project Structure

```
aurethica-site/
├── api/                  # Backend API server
│   ├── data/            # JSON datasets
│   ├── server.js        # Express server
│   ├── package.json     # API dependencies
│   └── .env.example     # Environment variables template
├── assets/              # Frontend assets
│   └── js/
│       └── api.js       # API client library
├── docs/                # Documentation
├── *.html               # Frontend pages
├── style.css            # Styles
└── package.json         # Root development dependencies
```

## Local Development Setup

### Prerequisites

- Node.js 16.0.0 or higher
- npm (comes with Node.js)

### Quick Start

1. **Install dependencies:**
   ```bash
   npm run install:all
   ```
   This installs both root and API dependencies.

2. **Set up environment variables:**
   ```bash
   cp api/.env.example api/.env
   ```
   
   Edit `api/.env` if needed. Default values work for local development.

3. **Start development servers:**
   ```bash
   npm run dev
   ```
   
   This runs both the frontend and API servers concurrently:
   - Frontend: http://localhost:3000 (static file server)
   - API: http://localhost:3001 (Express server)

### Individual Commands

- **Frontend only:** `npm run dev:frontend`
- **API only:** `npm run dev:api`

## API Integration

### Using the API Client

The `assets/js/api.js` file provides a global `window.AurethicaAPI` object with helper methods:

```javascript
// Example usage
async function loadStyles() {
  try {
    const styles = await window.AurethicaAPI.getStyles();
    console.log('Loaded styles:', styles);
  } catch (error) {
    console.error('Failed to load styles:', error);
  }
}

// Available methods:
// - getStyles() - Get all styles
// - getStyle(id) - Get specific style
// - getTips() - Get tips
// - getMessages() - Get messages  
// - getOnboarding() - Get onboarding data
// - checkHealth() - API health check
```

### Environment Detection

The API client automatically detects the environment:
- **Development:** Uses `http://localhost:3001` 
- **Production:** Uses relative URLs (`/api`)

### CORS Configuration

The API server uses environment-based CORS configuration:
- `CORS_ORIGIN` environment variable controls allowed origins
- Multiple origins can be separated by commas
- Default: `http://localhost:3000` for development

## Available API Endpoints

- `GET /health` - Health check
- `GET /api` - API information and available endpoints
- `GET /api/styles` - All hair styles
- `GET /api/styles/:id` - Specific style by ID
- `GET /api/tips` - Hair care tips
- `GET /api/messages` - Application messages
- `GET /api/onboarding` - Onboarding questions

## Connecting Pages to API

Each HTML page includes the API client. To connect a page to the API:

1. **Basic connectivity check** (already included):
   ```javascript
   if (window.AurethicaAPI) {
     window.AurethicaAPI.checkHealth()
       .then(health => console.log('API Health:', health))
       .catch(err => console.warn('API not available:', err));
   }
   ```

2. **Replace local data fetching:**
   ```javascript
   // Instead of: fetch('data/styles.json')
   // Use: window.AurethicaAPI.getStyles()
   
   window.AurethicaAPI.getStyles()
     .then(styles => {
       // Handle styles data
     })
     .catch(error => {
       console.error('Error loading styles:', error);
     });
   ```

## Deployment

### Frontend Deployment (Vercel)

1. **Connect repository to Vercel**
2. **Set build settings:**
   - Build Command: `npm install`
   - Output Directory: `.` (root directory)
   - Install Command: `npm install`

3. **Environment Variables:**
   - No frontend-specific environment variables needed

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
   CORS_ORIGIN=https://your-frontend-domain.vercel.app
   ```

5. **Update frontend API base URL:**
   After deploying the API, update the production base URL in `assets/js/api.js` if needed.

### CORS Configuration for Production

When deploying, ensure the API's `CORS_ORIGIN` environment variable includes your frontend domain:

```
CORS_ORIGIN=https://your-frontend.vercel.app,https://your-custom-domain.com
```

## Development Tips

- Use browser DevTools Console to see API connectivity status
- Check Network tab to monitor API requests
- The API serves CORS headers for local development
- Environment variables are loaded from `.env` file in the `api/` directory

## Troubleshooting

### API Connection Issues

1. Check if the API server is running on port 3001
2. Verify CORS configuration in `api/.env`
3. Check browser console for error messages
4. Test API directly: http://localhost:3001/health

### Build Issues

1. Ensure Node.js version is 16.0.0 or higher
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

## Next Steps Checklist

- [ ] Wire actual UI components to API on each page
- [ ] Deploy frontend to Vercel
- [ ] Deploy API to Render
- [ ] SEO optimization review
- [ ] Accessibility review
- [ ] Performance optimization
- [ ] Error handling improvements
- [ ] Add loading states to UI components