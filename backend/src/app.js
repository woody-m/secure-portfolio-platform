const express = require('express');
const cors = require('cors');

const authRoutes = require('../routes/auth.routes');
const projectsRoutes = require('../routes/projects.routes');

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Auth routes
app.use('/auth', authRoutes);

// Protected routes
app.use('/projects', projectsRoutes);

module.exports = app;
