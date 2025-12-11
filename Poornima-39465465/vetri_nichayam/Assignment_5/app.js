const express = require('express');
const mongoose = require('mongoose');
const courseRoutes = require('./routes/courseRoutes');

const app = express();

// Logging middleware (timestamp, method, url)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.use(express.json());

// Connect to MongoDB (replace URI when needed)
mongoose.connect('mongodb://127.0.0.1:27017/courseDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(' MongoDB connection error:', err.message));

app.use('/courses', courseRoutes);

app.get('/', (req, res) => res.send('Course Enrollment API is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
