import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db';

import authRoutes from './routes/auth';
import borrowerRoutes from './routes/borrower';
import dashboardRoutes from './routes/dashboard';
import fs from 'fs';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// ensure uploads dir exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/borrower', borrowerRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.get('/', (req, res) => {
  res.send('LMS Backend API');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
