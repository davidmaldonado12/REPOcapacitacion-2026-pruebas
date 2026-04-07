import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializeDatabase } from './database.js';
import quizRouter from './routes/quiz.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Inicializar DB antes de levantar el servidor
initializeDatabase();

app.use('/api/quiz', quizRouter);

app.get('/', (req, res) => {
  res.json({ status: 'API running' });
});

app.listen(PORT, () => {
  console.log(`Backend escuchando en http://localhost:${PORT}`);
});
