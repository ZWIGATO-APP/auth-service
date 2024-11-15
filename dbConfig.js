// db.js
const mongoose = require('mongoose');

const MONGO_URI = "mongodb://localhost:27017/Zwigato"; // Change this to your MongoDB connection string

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;