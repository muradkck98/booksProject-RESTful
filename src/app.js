const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const { errorHandler } = require('./utils/errorHandler');
const config = require('./config');

const app = express();
const PORT = config.port;
const MONGO_URI = config.mongoURI;

// Middleware
app.use(bodyParser.json());
app.use('/api/books', bookRoutes);
app.use(errorHandler);

// MongoDB Connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error('MongoDB connection error:', error));
