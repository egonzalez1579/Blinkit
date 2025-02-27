import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error('Plese provide Mongo URI in the .env file');
}

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed');
    process.exit(1);
  }
}

// The connectDB function connects to the MongoDB database using the MONGODB_URI environment variable. If the connection is successful, it logs a success message to the console. If the connection fails, it logs an error message and exits the process with a non-zero status code.
export default connectDB;
