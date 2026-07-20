/**
 * Chapter 10 MERN Express Backend Server Entrypoint
 */

const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/fsd2_db';

// Global Express Middleware
app.use(express.json());

// Database Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB server successfully!'))
  .catch(err => console.error('❌ Database connection error:', err));

// API Routes
app.use('/api/students', studentRoutes);

// Root Endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Chapter 10 MERN Express API Server' });
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('❌ Application Error Stack:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: err.message
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
