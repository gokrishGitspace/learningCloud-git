// server.js

// Import dependencies
const express = require('express');

// Create app
const app = express();

// Port
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // parse JSON

// Routes
app.get('/', (req, res) => {
  res.send('Server is running for the cloud! 🚀');
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'API is healthy'
  });
});

app.get('/data', (req, res) => {
  res.json({
    status: 'OK',
    message: 'data Action is working'
  });
});

// Example POST route
app.post('/api/data', (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      error: 'Name and age are required'
    });
  }

  res.status(201).json({
    message: 'Data received successfully',
    data: { name, age }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});