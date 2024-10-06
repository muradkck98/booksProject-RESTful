const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const { errorHandler } = require('./utils/errorHandler');
const connectToDatabase = require('./database');
const config = require('./config');

const app = express();
const PORT = config.port;

// Middleware
app.use(bodyParser.json());
app.use('/api/books', bookRoutes);
app.use(errorHandler);

// MongoDB Connection
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start server due to database connection error:', error);
  });
