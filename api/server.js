const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

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

app.get('/styles', (req, res) => {
  res.json(styles);
});

app.get('/styles/:id', (req, res) => {
  const style = styles.find((s) => s.id === req.params.id);
  if (style) {
    res.json(style);
  } else {
    res.status(404).send('Style not found');
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
