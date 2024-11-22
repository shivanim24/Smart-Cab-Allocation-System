const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('');
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;