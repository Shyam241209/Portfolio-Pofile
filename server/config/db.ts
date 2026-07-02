import mongoose from 'mongoose';

export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.warn('Warning: MONGODB_URI is not set. Set it in server/.env or environment variables.');
    return;
  }

  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 5000,
  });

  console.log('Connected to MongoDB');
};
