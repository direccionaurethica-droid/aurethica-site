# Auréthica Development Guide

This document provides instructions for setting up and developing the Auréthica website locally.

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

Cualquiera puede levantar el entorno de desarrollo con estos tres comandos:

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

### Verification

To verify everything is working correctly:
- Visit frontend: http://localhost:3000
- Check API health: http://localhost:3001/health (should return JSON with status "OK")

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

### Port Conflicts

If you encounter "port already in use" errors:

**For port 3000 (frontend):**
```bash
# Find and kill process using port 3000
lsof -ti:3000 | xargs kill -9
```

**For port 3001 (API):**
```bash
# Find and kill process using port 3001
lsof -ti:3001 | xargs kill -9
```

**Alternative: Use different ports**
```bash
# Start frontend on different port
npx http-server . -p 3002 -c-1

# Or modify api/.env to use different API port
PORT=3002
```

### CORS Issues

If you see CORS errors in browser console:

1. **Verify environment file exists:**
   ```bash
   ls -la api/.env
   ```

2. **Check CORS configuration:**
   ```bash
   cat api/.env | grep CORS_ORIGIN
   ```
   Should show: `CORS_ORIGIN=http://localhost:3000`

3. **Restart API server:**
   ```bash
   # Stop current process and restart
   npm run dev:api
   ```

4. **Clear browser cache and hard reload (Ctrl+Shift+R)**

### Environment Variables Issues

**Missing .env file:**
```bash
# Check if file exists
ls -la api/.env

# If missing, copy from template
cp api/.env.example api/.env
```

**Incorrect environment variables:**
```bash
# Compare with template
diff api/.env.example api/.env

# Reset to defaults if needed
cp api/.env.example api/.env
```

### Build Issues

1. Ensure Node.js version is 16.0.0 or higher
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and reinstall: `rm -rf node_modules api/node_modules && npm run install:all`

### Health Check Fails

If http://localhost:3001/health returns an error:

1. **Check server logs:** Look at the terminal where `npm run dev` is running
2. **Verify port availability:** `netstat -tulpn | grep 3001`
3. **Test with curl:** `curl http://localhost:3001/health`
4. **Check firewall settings:** Ensure localhost connections are allowed

### Common Error Messages

**"EADDRINUSE" error:**
- Port is already in use. Follow port conflict resolution above.

**"Cannot GET /health" error:**
- API server is not running. Start with `npm run dev:api`

**CORS policy error in browser:**
- Follow CORS troubleshooting steps above.

**"Module not found" errors:**
- Dependencies not installed. Run `npm run install:all`

## Next Steps Checklist

- [ ] Wire actual UI components to API on each page
- [ ] Deploy frontend to Vercel
- [ ] Deploy API to Render
- [ ] SEO optimization review
- [ ] Accessibility review
- [ ] Performance optimization
- [ ] Error handling improvements
- [ ] Add loading states to UI components