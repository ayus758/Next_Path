require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/prepfusion')
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error: ', err));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/roadmap', require('./routes/roadmapRoutes'));
app.use('/api/resources', require('./routes/resourceRoutes'));

// Basic Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'PrepFusion API is running!',
    timestamp: new Date(),
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
