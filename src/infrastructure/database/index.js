const mongoose = require('mongoose');
const config = require('../config');

//connect to db
const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error; 
  }
};

module.exports = connectToDatabase;
