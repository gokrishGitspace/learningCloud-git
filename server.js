// server.js
import express from 'express';
import cors from 'cors';

// Create app
const app = express();
app.use(cors()); // Enable CORS for all routes

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

app.get('/products', (req, res) => {
  res.json(products);
}); 

let products=[
  { id: 1, name: 'Product A', price: 10.99 },
  { id: 2, name: 'Product B', price: 19.99 },
  { id: 3, name: 'Product C', price: 5.49 },
  { id: 4, name: 'Product D', price: 15.00 },
]

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});