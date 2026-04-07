import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { initializeDatabase } from './database.js';
import quizRouter from './routes/quiz.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDistPath = path.resolve(__dirname, '../../frontend/dist');

const app = express();
const PORT = process.env.PORT || 3001;
const allowedOrigin = process.env.CORS_ORIGIN;

app.use(cors(allowedOrigin ? { origin: allowedOrigin } : undefined));
app.use(express.json());

app.use('/api/quiz', quizRouter);

app.use(express.static(frontendDistPath));

app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }

  res.sendFile(path.join(frontendDistPath, 'index.html'));
});

async function startServer() {
  await initializeDatabase();

  app.listen(PORT, () => {
    console.log(`Backend escuchando en puerto ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error('No se pudo iniciar el backend:', error);
  process.exit(1);
});
