// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/auth'); // Correct path for auth routes

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000, // Optional: increases the default timeout
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Mount auth routes
app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

app.get('/', (req, res) => {
    res.send('API is running...');
  });
  
