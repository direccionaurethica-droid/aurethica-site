require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// CORS configuration with allowlist
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : ['http://localhost:3000'];
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

// Helper to load JSON files
function loadJSON(filename) {
  const filePath = path.join(__dirname, 'data', filename);
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  return null;
}

const styles = loadJSON('styles.json') || [];
const messages = loadJSON('messages.json') || {};
const tips = loadJSON('tips.json') || {};
const onboarding = loadJSON('onboarding.json') || [];

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Main API endpoint with available routes
app.get('/api', (req, res) => {
  res.json({
    message: 'Auréthica API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      styles: '/api/styles',
      style: '/api/styles/:id',
      tips: '/api/tips',
      messages: '/api/messages',
      onboarding: '/api/onboarding'
    }
  });
});

// API endpoints
app.get('/api/styles', (req, res) => {
  res.json(styles);
});

app.get('/api/styles/:id', (req, res) => {
  const style = styles.find((s) => s.id === req.params.id);
  if (style) {
    res.json(style);
  } else {
    res.status(404).json({ error: 'Style not found' });
  }
});

app.get('/api/tips', (req, res) => {
  res.json(tips);
});

app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.get('/api/onboarding', (req, res) => {
  res.json(onboarding);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
