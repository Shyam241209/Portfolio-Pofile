import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDB } from './config/db';
import contactRoutes from './routes/contactRoutes';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 5000);
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:8080';

app.use(cors({ origin: FRONTEND_ORIGIN }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api', contactRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

connectDB().catch((error: unknown) => {
  console.error('MongoDB connection failed:', error);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
